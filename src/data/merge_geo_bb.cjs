const fs = require('fs');

const geo = JSON.parse(fs.readFileSync('src/data/temp_geo_comp.json','utf8'));
const bb = JSON.parse(fs.readFileSync('src/data/temp_bb_comp.json','utf8'));

function escape(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function qToTs(q, index, prefix) {
  const id = prefix + '-bulk-' + (index + 1);
  const opts = q.options.map(function(o) { return "      '" + escape(o) + "',"; }).join('\n');
  return '  {\n' +
    "    id: '" + id + "',\n" +
    "    subject: '" + q.subject + "' as Question['subject'],\n" +
    "    level: '" + q.level + "',\n" +
    "    gradeRange: '" + escape(q.gradeRange) + "',\n" +
    "    topic: '" + escape(q.topic) + "',\n" +
    "    question: '" + escape(q.question) + "',\n" +
    "    options: [\n" + opts + "\n    ],\n" +
    "    correctIndex: " + q.correctIndex + ",\n" +
    "    explanation: '" + escape(q.explanation) + "',\n" +
    '  }';
}

const geoTs = geo.map(function(q, i) { return qToTs(q, i, 'geo'); }).join(',\n');
const bbTs = bb.map(function(q, i) { return qToTs(q, i, 'bb'); }).join(',\n');

let existing = fs.readFileSync('src/data/bulkQuestions.ts', 'utf8').trimEnd();
if (existing.endsWith('];')) existing = existing.slice(0, -2).trimEnd();

fs.writeFileSync('src/data/bulkQuestions.ts', existing + ',\n' + geoTs + ',\n' + bbTs + '\n];\n');
console.log('Done. Added ' + (geo.length + bb.length) + ' questions.');
