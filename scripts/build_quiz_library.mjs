import fs from "node:fs";
import path from "node:path";

const DIR = "content/quizzes";
const CATEGORY_MAP = {
  "علوم": "علوم وطب",
  "تقنية": "تكنولوجيا",
  "منطق وذكاء": "ألغاز ومنطق",
  "أدب": "لغة عربية وأدب",
};

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).sort();
const quizzes = [];

for (const file of files) {
  const slug = path.basename(file, ".json");
  const data = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8"));
  const category = CATEGORY_MAP[data.category] ?? data.category;
  data.quizzes.forEach((quiz, qi) => {
    quizzes.push({
      id: `lib-${slug}-${String(qi + 1).padStart(2, "0")}`,
      user_id: "system",
      title: quiz.title,
      created_at: "2026-08-10T00:00:00.000Z",
      is_public: true,
      category,
      language: "ar",
      quiz_difficulty: quiz.difficulty === "challenge" ? "challenge" : "standard",
      questions: quiz.questions.map((q, i) => {
        if (!Array.isArray(q.o) || q.o.length !== 4) throw new Error(`bad options in ${file} #${i}`);
        if (typeof q.c !== "number" || q.c < 0 || q.c > 3) throw new Error(`bad correct in ${file} #${i}`);
        return {
          question_text: q.t,
          options: q.o,
          correct_index: q.c,
          time_limit_seconds: quiz.difficulty === "challenge" ? 25 : 20,
          order_index: i,
          image_url: null,
          question_type: "multi",
          explanation: q.e ?? null,
        };
      }),
    });
  });
}

const out = `import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: "standard" | "challenge" | "medium" | "beginner" | "expert" | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: Omit<Question, "id" | "quiz_id">[];
};

// Hand-authored Arabic quiz library. Generated from content/quizzes/*.json
// by scripts/build_quiz_library.mjs — edit the JSON sources, not this file.
export const QUIZ_LIBRARY: LibraryQuiz[] = ${JSON.stringify(quizzes, null, 2)};
`;

fs.writeFileSync("src/lib/quiz-library.ts", out);
console.log(`quizzes: ${quizzes.length}, questions: ${quizzes.reduce((n, q) => n + q.questions.length, 0)}`);
