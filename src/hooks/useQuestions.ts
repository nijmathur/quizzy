import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Question } from '../types';
import { seedQuestions } from '../data/seedQuestions';

const STORAGE_KEY = 'quiz_questions';

function loadQuestions(): Question[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedQuestions));
  return seedQuestions;
}

function saveQuestions(questions: Question[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>(loadQuestions);

  useEffect(() => {
    saveQuestions(questions);
  }, [questions]);

  function addQuestion(q: Omit<Question, 'id'>) {
    setQuestions(prev => [...prev, { ...q, id: uuidv4() }]);
  }

  function updateQuestion(id: string, updates: Partial<Omit<Question, 'id'>>) {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, ...updates } : q))
    );
  }

  function deleteQuestion(id: string) {
    setQuestions(prev => prev.filter(q => q.id !== id));
  }

  function resetToDefaults() {
    setQuestions(seedQuestions);
  }

  function getTopics(subject: string, level: string): string[] {
    return [...new Set(
      questions
        .filter(q => q.subject === subject && q.level === level)
        .map(q => q.topic)
    )];
  }

  function getByTopic(subject: string, level: string, topic: string): Question[] {
    return questions.filter(
      q => q.subject === subject && q.level === level && q.topic === topic
    );
  }

  return { questions, addQuestion, updateQuestion, deleteQuestion, resetToDefaults, getTopics, getByTopic };
}
