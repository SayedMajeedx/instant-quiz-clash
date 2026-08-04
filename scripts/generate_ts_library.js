import fs from "fs";
import path from "path";
import crypto from "crypto";

// Check if merged_questions.json exists in imported_quiz_library or D:/quiz-library
let rawPath = "./imported_quiz_library/merged_questions.json";
if (!fs.existsSync(rawPath)) {
  rawPath = "D:/quiz-library/merged_questions.json";
}

if (!fs.existsSync(rawPath)) {
  console.error("Merged questions file not found");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(rawPath, "utf8"));

function uuidFromString(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

// Group questions by quiz_title
const quizMap = new Map();

raw.forEach((q) => {
  const title = q.quiz_title || "General";
  if (!quizMap.has(title)) {
    quizMap.set(title, {
      id: uuidFromString("quiz_" + title),
      user_id: "system",
      title: title,
      created_at: new Date().toISOString(),
      is_public: true,
      category: q.category || "عام",
      language: "ar",
      questions: [],
    });
  }

  const quiz = quizMap.get(title);
  quiz.questions.push({
    question_text: q.question_text,
    options: q.options || ["", "", "", ""],
    correct_index: typeof q.correct_index === "number" ? Math.max(0, Math.min(3, q.correct_index)) : 0,
    time_limit_seconds: typeof q.time_limit_seconds === "number" ? Math.max(5, Math.min(120, q.time_limit_seconds)) : 20,
    order_index: quiz.questions.length,
    image_url: null,
    question_type: q.question_type === "boolean" ? "boolean" : "multi",
    explanation: q.explanation || null,
    difficulty: q.difficulty || "medium",
    subcategory: q.subcategory || null,
    tags: q.tags || [],
    source: q.source || null,
    external_id: q.id || null,
    is_verified: q.verified !== false,
    version: typeof q.version === "number" ? q.version : 1,
  });
});

const quizList = Array.from(quizMap.values());

console.log("Unique Quizzes:", quizList.length);
console.log("Total Questions:", raw.length);

const tsContent = `import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  questions: Omit<Question, "id" | "quiz_id">[];
};

export const QUIZ_LIBRARY: LibraryQuiz[] = ${JSON.stringify(quizList, null, 2)};
`;

fs.writeFileSync("./src/lib/quiz-library.ts", tsContent, "utf8");
console.log("Wrote src/lib/quiz-library.ts successfully!");
