import { useState } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import type { Question } from '../types';

type FormData = Omit<Question, 'id'>;

const EMPTY_FORM: FormData = {
  subject: 'science',
  level: 'JSC',
  gradeRange: 'Grades 1-3',
  topic: '',
  question: '',
  options: ['', '', '', ''],
  correctIndex: 0,
  explanation: '',
};

const LEVELS: Record<string, { level: string; gradeRange: string }[]> = {
  science: [
    { level: 'JSC', gradeRange: 'Grades 1-3' },
    { level: 'ISC', gradeRange: 'Grades 4-5' },
    { level: 'SSC', gradeRange: 'Grades 6-8' },
  ],
  math: [
    { level: 'MB1', gradeRange: 'Grades K-3' },
    { level: 'MB2', gradeRange: 'Grades 4-5' },
    { level: 'MB3', gradeRange: 'Grades 6-8' },
  ],
  geography: [
    { level: 'JGB', gradeRange: 'Grades 1-3' },
    { level: 'SGB', gradeRange: 'Grades 4-8' },
  ],
};

export default function AdminPage() {
  const { questions, addQuestion, updateQuestion, deleteQuestion, resetToDefaults } = useQuestions();
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState({ subject: '', level: '', topic: '' });
  const [search, setSearch] = useState('');

  const topics = [...new Set(questions.map(q => q.topic))].sort();

  const filtered = questions.filter(q => {
    if (filter.subject && q.subject !== filter.subject) return false;
    if (filter.level && q.level !== filter.level) return false;
    if (filter.topic && q.topic !== filter.topic) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  function openAdd() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
  }

  function openEdit(q: Question) {
    setEditing(q.id);
    setForm({ subject: q.subject, level: q.level, gradeRange: q.gradeRange, topic: q.topic, question: q.question, options: [...q.options], correctIndex: q.correctIndex, explanation: q.explanation });
    setShowForm(true);
  }

  function handleSubjectChange(subject: 'science' | 'math' | 'geography') {
    const levels = LEVELS[subject];
    setForm(f => ({ ...f, subject, level: levels[0].level, gradeRange: levels[0].gradeRange }));
  }

  function handleLevelChange(level: string) {
    const subject = form.subject;
    const found = LEVELS[subject].find(l => l.level === level);
    if (found) setForm(f => ({ ...f, level: found.level, gradeRange: found.gradeRange }));
  }

  function handleOptionChange(i: number, val: string) {
    const opts = [...form.options];
    opts[i] = val;
    setForm(f => ({ ...f, options: opts }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editing) {
      updateQuestion(editing, form);
    } else {
      addQuestion(form);
    }
    setShowForm(false);
    setEditing(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Panel</h1>
          <p className="text-slate-500 text-sm mt-1">{questions.length} total questions</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (window.confirm('Reset all questions to defaults? Custom questions will be lost.')) resetToDefaults();
            }}
            className="px-4 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 rounded-lg font-medium transition-colors"
          >
            Reset to Defaults
          </button>
          <button
            onClick={openAdd}
            className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            + Add Question
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm flex-1 min-w-40"
        />
        <select
          value={filter.subject}
          onChange={e => setFilter(f => ({ ...f, subject: e.target.value, level: '', topic: '' }))}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="">All subjects</option>
          <option value="science">Science</option>
          <option value="math">Math</option>
          <option value="geography">Geography</option>
        </select>
        <select
          value={filter.level}
          onChange={e => setFilter(f => ({ ...f, level: e.target.value }))}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="">All levels</option>
          <option value="JSC">JSC</option>
          <option value="ISC">ISC</option>
          <option value="SSC">SSC</option>
          <option value="MB1">MB1</option>
          <option value="MB2">MB2</option>
          <option value="MB3">MB3</option>
          <option value="JGB">JGB</option>
          <option value="SGB">SGB</option>
        </select>
        <select
          value={filter.topic}
          onChange={e => setFilter(f => ({ ...f, topic: e.target.value }))}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="">All topics</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="text-sm text-slate-500 self-center">{filtered.length} shown</span>
      </div>

      {/* Questions table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Question</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Subject</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Level</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Topic</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(q => (
              <tr key={q.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 max-w-xs">
                  <p className="truncate text-slate-700">{q.question}</p>
                </td>
                <td className="px-4 py-3 capitalize text-slate-600">{q.subject}</td>
                <td className="px-4 py-3 text-slate-600">{q.level}</td>
                <td className="px-4 py-3 text-slate-600">{q.topic}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => openEdit(q)}
                    className="text-indigo-600 hover:underline text-xs font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => { if (window.confirm('Delete this question?')) deleteQuestion(q.id); }}
                    className="text-red-500 hover:underline text-xs font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-400">No questions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              {editing ? 'Edit Question' : 'Add Question'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => handleSubjectChange(e.target.value as 'science' | 'math' | 'geography')}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="geography">Geography</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Level</label>
                  <select
                    value={form.level}
                    onChange={e => handleLevelChange(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  >
                    {LEVELS[form.subject].map(l => (
                      <option key={l.level} value={l.level}>{l.level} ({l.gradeRange})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Topic</label>
                <input
                  type="text"
                  required
                  value={form.topic}
                  onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                  placeholder="e.g. Plants, Fractions, Ecosystems"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Question</label>
                <textarea
                  required
                  rows={3}
                  value={form.question}
                  onChange={e => setForm(f => ({ ...f, question: e.target.value }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Options <span className="text-slate-400">(select correct answer)</span>
                </label>
                {form.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="correct"
                      checked={form.correctIndex === i}
                      onChange={() => setForm(f => ({ ...f, correctIndex: i }))}
                      className="accent-green-600"
                    />
                    <span className="text-slate-500 font-bold w-5">{String.fromCharCode(65 + i)}.</span>
                    <input
                      type="text"
                      required
                      value={opt}
                      onChange={e => handleOptionChange(i, e.target.value)}
                      placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      className="flex-1 border border-slate-200 rounded-lg px-3 py-1.5 text-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Explanation</label>
                <textarea
                  required
                  rows={3}
                  value={form.explanation}
                  onChange={e => setForm(f => ({ ...f, explanation: e.target.value }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
                >
                  {editing ? 'Save Changes' : 'Add Question'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
