import fs from "node:fs";
import path from "node:path";

const root = "ahl_albayt_quizzes";
const configs = [
  ["01_النبي_محمد", "سيرة النبي محمد (ص)"],
  ["02_الإمام_علي", "سيرة الإمام علي بن أبي طالب (ع)"],
  ["03_السيدة_فاطمة_الزهراء", "سيرة السيدة فاطمة الزهراء (ع)"],
  ["04_الإمام_الحسن", "سيرة الإمام الحسن المجتبى (ع)"],
  ["05_الإمام_الحسين", "سيرة الإمام الحسين (ع)"],
  ["06_السيدة_زينب", "سيرة السيدة زينب (ع)"],
];

for (const [directory, title] of configs) {
  const dir = path.join(root, directory);
  const jsonName = fs.readdirSync(dir).find((name) => name.endsWith("_game.json"));
  const jsonPath = path.join(dir, jsonName);
  const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  let questions = Array.isArray(raw) ? raw : raw.questions;

  if (directory === "05_الإمام_الحسين") {
    questions = questions.filter((q) => q.question_text !== "من الذين خرج بهم النبي (ص) لمباهلة نصارى نجران؟");
  }

  questions = questions.map((q, index) => ({ ...q, order_index: index }));
  const quiz = {
    title,
    category: "سلسلة مسابقات أهل البيت (ع)",
    language: "ar",
    quiz_difficulty: "standard",
    archived: false,
    launch_enabled: true,
    questions,
  };
  fs.writeFileSync(jsonPath, `${JSON.stringify(quiz, null, 2)}\n`, "utf8");
}

const husaynReview = path.join(root, "05_الإمام_الحسين", "05_الإمام_الحسين_مراجعة.md");
let review = fs.readFileSync(husaynReview, "utf8");
review = review.replace(/### 6\. من الذين خرج بهم النبي \(ص\) لمباهلة نصارى نجران\؟[\s\S]*?(?=### 7\.)/, "");
review = review.replace(/^### (\d+)\./gm, (_, number) => {
  const value = Number(number);
  return `### ${value > 6 ? value - 1 : value}.`;
});
review = review.replace("العدد النهائي: 27 سؤالًا", "العدد النهائي: 26 سؤالًا");
fs.writeFileSync(husaynReview, review, "utf8");

console.log("Normalized six game files and removed one cross-character duplicate.");
