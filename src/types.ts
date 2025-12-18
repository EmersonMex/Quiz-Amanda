export interface Option {
  id: string;
  text: string;
  points: number;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: Option[];
}

export interface ResultTier {
  min: number;
  max: number;
  title: string;
  description: string;
  action: string;
  color: string;
}

export type QuizState = 'intro' | 'quiz' | 'analyzing' | 'result';

export interface UserAnswers {
  [questionId: number]: Option;
}