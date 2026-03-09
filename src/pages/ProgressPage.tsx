import { useProgress } from '../hooks/useProgress';
import { Link } from 'react-router-dom';

function scoreColor(pct: number) {
  if (pct >= 80) return 'bg-green-100 border-green-300 text-green-800';
  if (pct >= 50) return 'bg-amber-100 border-amber-300 text-amber-800';
  return 'bg-red-100 border-red-300 text-red-800';
}

function scoreBar(pct: number) {
  if (pct >= 80) return 'bg-green-500';
  if (pct >= 50) return 'bg-amber-400';
  return 'bg-red-400';
}

export default function ProgressPage() {
  const { getTopicProgress } = useProgress();
  const progress = getTopicProgress();

  const subjects = [...new Set(progress.map(p => p.subject))];

  if (progress.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">📊</div>
        <h2 className="text-xl font-semibold text-slate-700 mb-2">No progress yet</h2>
        <p className="text-slate-500 mb-6">Complete some quizzes to track your progress here.</p>
        <Link to="/" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium">
          Start a Quiz
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Progress Tracker</h1>
      <p className="text-slate-500 mb-8">Your best scores by topic.</p>

      {subjects.map(subject => {
        const subjectProgress = progress.filter(p => p.subject === subject);
        const levels = [...new Set(subjectProgress.map(p => p.level))];
        return (
          <div key={subject} className="mb-10">
            <h2 className="text-lg font-bold text-slate-700 mb-4 capitalize">
              {subject === 'science' ? '🔬 Science Bee' : '📐 Math Bee'}
            </h2>
            {levels.map(level => {
              const levelProgress = subjectProgress.filter(p => p.level === level);
              return (
                <div key={level} className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    {level} — {levelProgress[0].gradeRange}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {levelProgress.map(p => (
                      <div
                        key={p.topic}
                        className={`rounded-xl border-2 p-4 ${scoreColor(p.bestScore)}`}
                      >
                        <div className="font-semibold mb-2">{p.topic}</div>
                        <div className="text-sm mb-2">
                          Best: <span className="font-bold">{p.bestScore}%</span>
                          <span className="ml-3 opacity-70">({p.attempts} attempt{p.attempts !== 1 ? 's' : ''})</span>
                        </div>
                        <div className="w-full bg-white/60 rounded-full h-1.5">
                          <div
                            className={`${scoreBar(p.bestScore)} h-1.5 rounded-full`}
                            style={{ width: `${p.bestScore}%` }}
                          />
                        </div>
                        <Link
                          to={`/quiz/${subject}/${level}/${encodeURIComponent(p.topic)}`}
                          className="mt-3 inline-block text-xs font-medium underline underline-offset-2"
                        >
                          Practice again →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
