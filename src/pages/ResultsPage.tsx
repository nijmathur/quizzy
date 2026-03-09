import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';

export default function ResultsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getAttemptById } = useProgress();
  const attempt = getAttemptById(id!);

  if (!attempt) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Attempt not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Go Home
        </button>
      </div>
    );
  }

  const pct = Math.round((attempt.score / attempt.total) * 100);
  const color = pct >= 80 ? 'text-green-600' : pct >= 50 ? 'text-amber-500' : 'text-red-500';
  const bgColor = pct >= 80 ? 'bg-green-50 border-green-200' : pct >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200';

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score summary */}
      <div className={`rounded-2xl border-2 p-8 text-center mb-8 ${bgColor}`}>
        <div className={`text-6xl font-black mb-2 ${color}`}>{pct}%</div>
        <div className="text-xl font-semibold text-slate-700 mb-1">
          {attempt.score} / {attempt.total} correct
        </div>
        <div className="text-slate-500 text-sm">
          {attempt.topic} — {attempt.level} ({attempt.gradeRange})
        </div>
        <div className="mt-4 text-2xl">
          {pct >= 80 ? '🎉 Excellent!' : pct >= 50 ? '👍 Good effort!' : '📚 Keep practicing!'}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => navigate(`/quiz/${attempt.subject}/${attempt.level}/${encodeURIComponent(attempt.topic)}`)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border-2 border-slate-200 transition-colors"
        >
          Pick Another Topic
        </button>
        <Link
          to="/progress"
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border-2 border-slate-200 transition-colors"
        >
          View Progress
        </Link>
      </div>

      {/* Question breakdown */}
      <h2 className="text-lg font-bold text-slate-700 mb-4">Question Breakdown</h2>
      <div className="flex flex-col gap-4">
        {attempt.questions.map((q, i) => {
          const userAnswer = attempt.answers[i];
          const correct = userAnswer === q.correctIndex;
          return (
            <div
              key={q.id}
              className={`rounded-xl border-2 p-5 ${correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className={`text-lg font-bold flex-shrink-0 ${correct ? 'text-green-600' : 'text-red-500'}`}>
                  {correct ? '✓' : '✗'}
                </span>
                <p className="font-medium text-slate-800">{q.question}</p>
              </div>

              {!correct && (
                <div className="ml-8 mb-2 text-sm">
                  <span className="text-red-600">Your answer: </span>
                  <span className="font-medium text-red-700">{q.options[userAnswer]}</span>
                </div>
              )}
              <div className="ml-8 mb-3 text-sm">
                <span className="text-green-700">Correct answer: </span>
                <span className="font-medium text-green-800">{q.options[q.correctIndex]}</span>
              </div>

              <div className="ml-8 text-sm text-slate-600 bg-white/70 rounded-lg p-3 border border-slate-200">
                <span className="font-semibold text-slate-700">Explanation: </span>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
