import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: "standard" | "challenge" | "medium" | "beginner" | "expert" | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: Omit<Question, "id" | "quiz_id">[];
};

export const QUIZ_LIBRARY: LibraryQuiz[] = [];
