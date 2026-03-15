// Run with: node combine_mb1.cjs
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const fs = { readFileSync, writeFileSync };
const path = { join };

const dir = __dirname;
const parts = [];

for (let i = 1; i <= 8; i++) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, `temp_mb1_part${i}.json`), 'utf8'));
  parts.push(...data);
}

// Fix known correctIndex errors
for (const q of parts) {
  if (q.id === 'mb1-new-694') {
    // "In 360, how many tens are there?" = 6 tens. options: ["3","0","6","36"] -> index 2
    q.correctIndex = 2;
    q.explanation = 'In 360: 3 is in the hundreds place and 6 is in the tens place, so there are 6 tens.';
  }
  if (q.id === 'mb1-new-878') {
    // "There are 30 children. Half of them have hats." options: ["10","20","5","15"] -> 15 = index 3
    q.correctIndex = 3;
    q.explanation = 'Half of 30 = 30 \u00f7 2 = 15 children have hats.';
  }
}

console.log(`Total questions: ${parts.length}`);

// Verify all IDs unique
const ids = new Set(parts.map(q => q.id));
console.log(`Unique IDs: ${ids.size}`);

// Count per topic
const topics = {};
for (const q of parts) {
  topics[q.topic] = (topics[q.topic] || 0) + 1;
}
for (const [t, c] of Object.entries(topics)) {
  console.log(`  ${t}: ${c}`);
}

fs.writeFileSync(path.join(dir, 'temp_mb1.json'), JSON.stringify(parts, null, 2));
console.log('Written to temp_mb1.json');
