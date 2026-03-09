import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { QuizAttempt, TopicProgress } from '../types';

const HISTORY_KEY = 'quiz_history';

function loadHistory(): QuizAttempt[] {
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function useProgress() {
  const [history, setHistory] = useState<QuizAttempt[]>(loadHistory);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  function saveAttempt(attempt: Omit<QuizAttempt, 'id' | 'date'>) {
    const full: QuizAttempt = {
      ...attempt,
      id: uuidv4(),
      date: new Date().toISOString(),
    };
    setHistory(prev => [full, ...prev]);
    return full;
  }

  function clearHistory() {
    setHistory([]);
  }

  function getTopicProgress(): TopicProgress[] {
    const map = new Map<string, TopicProgress>();
    for (const attempt of history) {
      const key = `${attempt.subject}|${attempt.level}|${attempt.topic}`;
      const pct = Math.round((attempt.score / attempt.total) * 100);
      if (!map.has(key)) {
        map.set(key, {
          subject: attempt.subject,
          level: attempt.level,
          gradeRange: attempt.gradeRange,
          topic: attempt.topic,
          attempts: 0,
          bestScore: 0,
          lastScore: pct,
        });
      }
      const p = map.get(key)!;
      p.attempts += 1;
      p.bestScore = Math.max(p.bestScore, pct);
      p.lastScore = pct;
    }
    return Array.from(map.values());
  }

  function getAttemptById(id: string): QuizAttempt | undefined {
    return history.find(a => a.id === id);
  }

  return { history, saveAttempt, clearHistory, getTopicProgress, getAttemptById };
}
