import fs from "fs";
import path from "path";
import crypto from "crypto";

function uuidFromString(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

const batches = [
  { file: "general-knowledge-quiz-medium-20q-batch1.json", title: "معلومات عامة متنوعة 1", num: 1 },
  { file: "general-knowledge-quiz-truemedium-20q-batch2.json", title: "معلومات عامة متنوعة 2", num: 2 },
  { file: "general-knowledge-quiz-truemedium-20q-batch3.json", title: "معلومات عامة متنوعة 3", num: 3 },
  { file: "general-knowledge-quiz-truemedium-20q-batch4.json", title: "معلومات عامة متنوعة 4", num: 4 },
  { file: "general-knowledge-quiz-truemedium-20q-batch5.json", title: "معلومات عامة متنوعة 5", num: 5 },
  { file: "general-knowledge-quiz-truemedium-20q-batch6.json", title: "معلومات عامة متنوعة 6", num: 6 },
  { file: "general-knowledge-quiz-truemedium-20q-batch7.json", title: "معلومات عامة متنوعة 7", num: 7 },
];

const newQuestions = [];

batches.forEach((b) => {
  const filePath = path.join("./new_quizzes", b.file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  console.log(`Processing ${b.file} -> Title: "${b.title}" (${raw.length} questions)`);

  raw.forEach((q, idx) => {
    const formatted = {
      id: uuidFromString(`gen_batch_${b.num}_q_${idx}_${q.question_text}`),
      quiz_title: b.title,
      category: "معلومات عامة",
      subcategory: q.subcategory || "ثقافة عامة",
      difficulty: q.difficulty || "medium",
      difficulty_score: 500,
      tags: ["معلومات عامة", "ثقافة عامة"],
      question_text: q.question_text,
      options: q.options,
      correct_index: typeof q.correct_index === "number" ? q.correct_index : 0,
      time_limit_seconds: 20,
      question_type: "multi",
      explanation: q.explanation || "",
      source: "system",
      verified: true,
      version: 1,
      quiz_difficulty: "medium",
      order_index: idx,
      archived: false,
      launch_enabled: true,
    };
    newQuestions.push(formatted);
  });
});

console.log(`\nTotal new questions to append: ${newQuestions.length}`);

// Load existing merged questions
const mergedPath = "./merged_questions_launch_ready.json";
let existing = [];
if (fs.existsSync(mergedPath)) {
  existing = JSON.parse(fs.readFileSync(mergedPath, "utf8"));
  console.log(`Loaded ${existing.length} existing questions from ${mergedPath}`);
}

// Remove any prior questions with these titles to avoid duplicates on re-run
const existingFiltered = existing.filter((q) => !batches.some((b) => b.title === q.quiz_title));

const updatedAll = [...existingFiltered, ...newQuestions];

fs.writeFileSync(mergedPath, JSON.stringify(updatedAll, null, 2), "utf8");
console.log(`\nSuccessfully updated ${mergedPath}! Total questions now: ${updatedAll.length}`);
