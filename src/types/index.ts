export interface Question {
  id: string;
  subject: 'science' | 'math' | 'geography' | 'vocabulary' | 'computerScience' | 'brainBee' | 'spelling';
  level: string; // 'JSC' | 'ISC' | 'SSC' | 'MB1' | 'MB2' | 'MB3' | 'JGB' | 'SGB' | 'JSB' | 'SSB' | 'CS' | 'BB'
  gradeRange: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizAttempt {
  id: string;
  date: string;
  subject: string;
  level: string;
  gradeRange: string;
  topic: string;
  score: number;
  total: number;
  answers: number[];
  questions: Question[];
}

export interface TopicProgress {
  subject: string;
  level: string;
  gradeRange: string;
  topic: string;
  attempts: number;
  bestScore: number;
  lastScore: number;
}
