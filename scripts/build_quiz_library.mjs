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

// Reviewed Ahl al-Bayt series. Each file already uses the LibraryQuiz shape.
const AHL_DIR = "ahl_albayt_quizzes";
if (fs.existsSync(AHL_DIR)) {
  const characterDirs = fs.readdirSync(AHL_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const characterDir of characterDirs) {
    const fullDir = path.join(AHL_DIR, characterDir);
    const gameFile = fs.readdirSync(fullDir).find((file) => file.endsWith("_game.json"));
    if (!gameFile) continue;

    const quiz = JSON.parse(fs.readFileSync(path.join(fullDir, gameFile), "utf8"));
    if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
      throw new Error(`missing questions in ${gameFile}`);
    }

    quizzes.push({
      id: `lib-ahl-${characterDir.slice(0, 2)}`,
      user_id: "system",
      title: quiz.title,
      created_at: "2026-08-05T00:00:00.000Z",
      is_public: true,
      category: quiz.category || "سلسلة مسابقات أهل البيت (ع)",
      language: "ar",
      quiz_difficulty: quiz.quiz_difficulty === "challenge" ? "challenge" : "standard",
      archived: quiz.archived === true,
      launch_enabled: quiz.launch_enabled !== false,
      questions: quiz.questions.map((q, i) => {
        if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`bad options in ${gameFile} #${i}`);
        if (typeof q.correct_index !== "number" || q.correct_index < 0 || q.correct_index > 3) {
          throw new Error(`bad correct index in ${gameFile} #${i}`);
        }
        return {
          ...q,
          order_index: i,
          time_limit_seconds: q.time_limit_seconds ?? 20,
          image_url: q.image_url ?? null,
          question_type: "multi",
        };
      }),
    });
  }
}

// Reviewed general and specialized quizzes. Each file already uses the
// LibraryQuiz shape and is grouped in a numbered category directory.
const SPECIALIZED_DIR = "general_specialized_quizzes";
if (fs.existsSync(SPECIALIZED_DIR)) {
  const categoryDirs = fs.readdirSync(SPECIALIZED_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const categoryDir of categoryDirs) {
    const fullDir = path.join(SPECIALIZED_DIR, categoryDir);
    const quizFiles = fs.readdirSync(fullDir)
      .filter((file) => file.endsWith(".json"))
      .sort();

    for (const quizFile of quizFiles) {
      const quiz = JSON.parse(fs.readFileSync(path.join(fullDir, quizFile), "utf8"));
      const fallbackId = `lib-specialized-${categoryDir.slice(0, 2)}-${path.basename(quizFile, ".json").slice(0, 2)}`;
      if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
        throw new Error(`missing questions in ${quizFile}`);
      }

      quizzes.push({
        id: quiz.id ?? fallbackId,
        user_id: quiz.user_id ?? "system",
        title: quiz.title,
        created_at: quiz.created_at ?? "2026-08-05T00:00:00.000Z",
        is_public: quiz.is_public !== false,
        category: quiz.category,
        language: quiz.language ?? "ar",
        quiz_difficulty: quiz.quiz_difficulty ?? "standard",
        archived: quiz.archived === true,
        launch_enabled: quiz.launch_enabled !== false,
        questions: quiz.questions.map((q, i) => {
          if (!Array.isArray(q.options) || q.options.length !== 4) {
            throw new Error(`bad options in ${quizFile} #${i}`);
          }
          if (typeof q.correct_index !== "number" || q.correct_index < 0 || q.correct_index > 3) {
            throw new Error(`bad correct index in ${quizFile} #${i}`);
          }
          return {
            ...q,
            order_index: i,
            time_limit_seconds: q.time_limit_seconds ?? 25,
            image_url: q.image_url ?? null,
            question_type: "multi",
          };
        }),
      });
    }
  }
}

// Processed TrQuizes split files (104 files).
const TR_QUIZES_DIR = "TrQuizes/split_quizzes";
if (fs.existsSync(TR_QUIZES_DIR)) {
  const trFiles = fs.readdirSync(TR_QUIZES_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort();

  const TITLE_MAP = {
    animals: "عالم الحيوانات والتنوع الحيوي",
    general: "شامل المعلومات العامة",
    geography: "جغرافيا العالم والمعالم",
    history: "التاريخ والتراث العالمي",
    science_nature: "العلوم والطبيعة",
    gadgets: "الأجهزة والتقنيات الحديثة",
    mathematics: "الرياضيات والأرقام",
    sports: "الرياضة والألعاب العالمية",
    vehicles: "عالم السيارات والمركبات"
  };

  const CATEGORY_UI_MAP = {
    "الحيوانات": "علوم وطب",
    "معلومات عامة": "معلومات عامة",
    "جغرافيا": "جغرافيا",
    "تاريخ": "تاريخ",
    "علوم وطبيعة": "علوم وطب",
    "الأجهزة والتقنيات": "تكنولوجيا",
    "رياضيات": "رياضيات",
    "رياضة": "رياضة",
    "مركبات وسيارات": "تكنولوجيا"
  };

  for (const trFile of trFiles) {
    const rawQuestions = JSON.parse(fs.readFileSync(path.join(TR_QUIZES_DIR, trFile), "utf8"));
    if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) continue;

    const slug = path.basename(trFile, ".json");
    const match = slug.match(/^([a-z_]+)_quiz_(\d+)$/);
    const prefix = match ? match[1] : "tr";
    const partNum = match ? match[2] : "1";

    const rawCat = rawQuestions[0].category || "عام";
    const mappedCat = CATEGORY_UI_MAP[rawCat] || rawCat;
    const baseTitle = TITLE_MAP[prefix] || rawCat;

    const quizId = `lib-tr-${slug}`;
    const quizTitle = `${baseTitle} — الجزء ${partNum}`;

    quizzes.push({
      id: quizId,
      user_id: "system",
      title: quizTitle,
      created_at: "2026-08-06T00:00:00.000Z",
      is_public: true,
      category: mappedCat,
      language: "ar",
      quiz_difficulty: "standard",
      archived: false,
      launch_enabled: true,
      questions: rawQuestions.map((q, i) => {
        if (q.type === "boolean") {
          const isTrue =
            q.correct_answer === "صحيح" ||
            q.correct_answer === "True" ||
            q.correct_answer === "true";
          return {
            question_text: q.question,
            options: ["صحيح", "خطأ"],
            correct_index: isTrue ? 0 : 1,
            time_limit_seconds: 20,
            order_index: i,
            image_url: null,
            question_type: "boolean",
            explanation: null,
          };
        }

        const correct = q.correct_answer;
        const incorrect = Array.isArray(q.incorrect_answers) ? q.incorrect_answers : [];

        const correctIdx = i % 4;
        const opts = [];
        let incIdx = 0;

        for (let optI = 0; optI < 4; optI++) {
          if (optI === correctIdx) {
            opts.push(correct);
          } else {
            opts.push(incorrect[incIdx] || `خيار ${optI + 1}`);
            incIdx++;
          }
        }

        return {
          question_text: q.question,
          options: opts,
          correct_index: correctIdx,
          time_limit_seconds: 20,
          order_index: i,
          image_url: null,
          question_type: "multi",
          explanation: null,
        };
      }),
    });
  }
}

const out = `import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: string | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: (Omit<Question, "id" | "quiz_id"> & { id?: string; quiz_id?: string; [key: string]: any })[];
};

// Hand-authored Arabic quiz library. Generated from content/quizzes/*.json
// the reviewed ahl_albayt_quizzes/*/*_game.json files,
// general_specialized_quizzes/*/*.json, and TrQuizes/split_quizzes/*.json.
// by scripts/build_quiz_library.mjs — edit the JSON sources, not this file.
export const QUIZ_LIBRARY: LibraryQuiz[] = ${JSON.stringify(quizzes, null, 2)};
`;

fs.writeFileSync("src/lib/quiz-library.ts", out);
console.log(`quizzes: ${quizzes.length}, questions: ${quizzes.reduce((n, q) => n + q.questions.length, 0)}`);
