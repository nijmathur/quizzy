import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';
import { useProgress } from '../hooks/useProgress';
import type { Question } from '../types';

export default function QuizPage() {
  const { subject, level, topic } = useParams<{ subject: string; level: string; topic: string }>();
  const navigate = useNavigate();
  const { getByTopic, questions } = useQuestions();
  const { saveAttempt } = useProgress();

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  useEffect(() => {
    if (subject && level && topic) {
      const qs = getByTopic(subject, level, decodeURIComponent(topic));
      // shuffle
      setQuizQuestions([...qs].sort(() => Math.random() - 0.5));
    }
  }, [subject, level, topic, questions]);

  if (!quizQuestions.length) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500 text-lg">No questions found for this topic.</p>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Go Home
        </button>
      </div>
    );
  }

  const q = quizQuestions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q.correctIndex;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
  }

  function handleNext() {
    const newAnswers = [...answers, selected!];
    if (current + 1 < quizQuestions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    } else {
      // finish
      const score = newAnswers.filter((a, i) => a === quizQuestions[i].correctIndex).length;
      const gradeRange = quizQuestions[0].gradeRange;
      const attempt = saveAttempt({
        subject: subject!,
        level: level!,
        gradeRange,
        topic: decodeURIComponent(topic!),
        score,
        total: quizQuestions.length,
        answers: newAnswers,
        questions: quizQuestions,
      });
      navigate(`/results/${attempt.id}`);
    }
  }

  const progress = ((current) / quizQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-500">
            Question {current + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-indigo-600">
            {decodeURIComponent(topic!)} — {level}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-4">
        <h2 className="text-xl font-semibold text-slate-800 leading-snug mb-6">{q.question}</h2>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, idx) => {
            let style = 'border-slate-200 bg-slate-50 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer';
            if (isAnswered) {
              if (idx === q.correctIndex) {
                style = 'border-green-500 bg-green-50 cursor-default';
              } else if (idx === selected) {
                style = 'border-red-400 bg-red-50 cursor-default';
              } else {
                style = 'border-slate-200 bg-slate-50 opacity-50 cursor-default';
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-slate-700 ${style}`}
              >
                <span className="mr-2 text-slate-400 font-bold">{String.fromCharCode(65 + idx)}.</span>
                {opt}
                {isAnswered && idx === q.correctIndex && (
                  <span className="ml-2 text-green-600 font-bold">✓</span>
                )}
                {isAnswered && idx === selected && idx !== q.correctIndex && (
                  <span className="ml-2 text-red-500 font-bold">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className={`mt-5 p-4 rounded-xl text-sm leading-relaxed ${isCorrect ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-amber-50 border border-amber-200 text-amber-800'}`}>
            <span className="font-semibold">{isCorrect ? '✓ Correct! ' : '✗ Not quite. '}</span>
            {q.explanation}
          </div>
        )}
      </div>

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
        >
          {current + 1 < quizQuestions.length ? 'Next Question →' : 'See Results →'}
        </button>
      )}
    </div>
  );
}
