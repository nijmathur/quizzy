import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';

const SUBJECTS = [
  {
    id: 'science',
    label: 'Science Bee',
    emoji: '🔬',
    description: 'JSC Science — Life, Earth & Physical Sciences',
    levels: [{ id: 'JSC', label: 'JSC', gradeRange: 'Grades 1-3' }],
  },
  {
    id: 'math',
    label: 'Math Bee',
    emoji: '📐',
    description: 'North South Foundation Math Competition',
    levels: [
      { id: 'MB1', label: 'Level 1 (MB1)', gradeRange: 'Grades K-3' },
      { id: 'MB2', label: 'Level 2 (MB2)', gradeRange: 'Grades 4-5' },
      { id: 'MB3', label: 'Level 3 (MB3)', gradeRange: 'Grades 6-8' },
    ],
  },
];

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const { getTopics } = useQuestions();
  const navigate = useNavigate();

  const subject = SUBJECTS.find(s => s.id === selectedSubject);
  const topics = selectedSubject && selectedLevel
    ? getTopics(selectedSubject, selectedLevel)
    : [];

  function handleSubjectSelect(subjectId: string) {
    setSelectedSubject(subjectId);
    setSelectedLevel(null);
    const s = SUBJECTS.find(s => s.id === subjectId);
    if (s && s.levels.length === 1) {
      setSelectedLevel(s.levels[0].id);
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">NSF Quiz Practice</h1>
      <p className="text-slate-500 mb-8">Select a subject and topic to start practicing.</p>

      {/* Subject selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {SUBJECTS.map(s => (
          <button
            key={s.id}
            onClick={() => handleSubjectSelect(s.id)}
            className={`text-left p-5 rounded-xl border-2 transition-all ${
              selectedSubject === s.id
                ? 'border-indigo-600 bg-indigo-50 shadow-md'
                : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow'
            }`}
          >
            <div className="text-3xl mb-2">{s.emoji}</div>
            <div className="font-semibold text-slate-800 text-lg">{s.label}</div>
            <div className="text-slate-500 text-sm mt-1">{s.description}</div>
          </button>
        ))}
      </div>

      {/* Level selector */}
      {subject && subject.levels.length > 1 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-700 mb-3">Select Level</h2>
          <div className="flex flex-wrap gap-3">
            {subject.levels.map(lvl => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                  selectedLevel === lvl.id
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-indigo-400'
                }`}
              >
                {lvl.label}
                <span className="ml-2 text-xs opacity-75">({lvl.gradeRange})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Topic selector */}
      {selectedLevel && topics.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-slate-700 mb-3">Select Topic</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => navigate(`/quiz/${selectedSubject}/${selectedLevel}/${encodeURIComponent(topic)}`)}
                className="p-4 rounded-xl border-2 border-slate-200 bg-white text-left hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <div className="font-medium text-slate-800">{topic}</div>
                <div className="text-xs text-indigo-600 mt-1">Start Quiz →</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedLevel && topics.length === 0 && (
        <p className="text-slate-500 italic">No questions found for this level. Add some in the Admin panel.</p>
      )}
    </div>
  );
}
