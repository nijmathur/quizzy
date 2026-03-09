import { useProgress } from '../hooks/useProgress';
import { Link } from 'react-router-dom';

export default function HistoryPage() {
  const { history, clearHistory } = useProgress();

  if (history.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🕒</div>
        <h2 className="text-xl font-semibold text-slate-700 mb-2">No history yet</h2>
        <p className="text-slate-500 mb-6">Your quiz attempts will appear here.</p>
        <Link to="/" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium">
          Start a Quiz
        </Link>
      </div>
    );
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  function pctColor(score: number, total: number) {
    const pct = Math.round((score / total) * 100);
    if (pct >= 80) return 'text-green-600 font-bold';
    if (pct >= 50) return 'text-amber-600 font-bold';
    return 'text-red-500 font-bold';
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quiz History</h1>
          <p className="text-slate-500 text-sm mt-1">{history.length} attempt{history.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => {
            if (window.confirm('Clear all quiz history? This cannot be undone.')) clearHistory();
          }}
          className="px-4 py-2 text-sm bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg font-medium transition-colors"
        >
          Clear History
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Subject</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Level</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Topic</th>
              <th className="text-right px-4 py-3 font-semibold text-slate-600">Score</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {history.map((a, i) => (
              <tr key={a.id} className={`border-b border-slate-100 hover:bg-slate-50 ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                <td className="px-4 py-3 text-slate-500">{formatDate(a.date)}</td>
                <td className="px-4 py-3 capitalize">
                  {a.subject === 'science' ? '🔬' : '📐'} {a.subject}
                </td>
                <td className="px-4 py-3 text-slate-600">{a.level}</td>
                <td className="px-4 py-3 font-medium text-slate-700">{a.topic}</td>
                <td className={`px-4 py-3 text-right ${pctColor(a.score, a.total)}`}>
                  {a.score}/{a.total} ({Math.round((a.score / a.total) * 100)}%)
                </td>
                <td className="px-4 py-3">
                  <Link
                    to={`/results/${a.id}`}
                    className="text-indigo-600 hover:underline text-xs font-medium"
                  >
                    Review
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
