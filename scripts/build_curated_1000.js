import fs from "node:fs";

const ORIGINAL = "D:/quiz-library/merged_questions.json";
const OUTPUT = "merged_questions_launch_ready.json";
const REPORT = "reports/curated_1000_validation.json";
const selectionFiles = [
  "reports/curated_general_geo_history.json",
  "reports/curated_religion_arabic.json",
  "reports/curated_stem_tech_logic.json",
  "reports/curated_entertainment_sports.json",
];

const quotas = new Map([
  ["أنمي", 60],
  ["لغة عربية وأدب", 60],
  ["علوم", 100],
  ["معلومات عامة", 80],
  ["جغرافيا", 80],
  ["تاريخ", 80],
  ["منطق وذكاء", 60],
  ["إسلاميات عامة", 80],
  ["إسلاميات - شيعي اثنا عشري", 100],
  ["رياضة", 60],
  ["تقنية", 80],
  ["ألعاب فيديو", 60],
  ["أفلام ومسلسلات", 60],
  ["رياضيات", 40],
]);

for (const file of selectionFiles) {
  if (!fs.existsSync(file)) throw new Error(`Missing reviewed selection: ${file}`);
}
if (!fs.existsSync(ORIGINAL)) throw new Error(`Missing original pre-cleanup bank: ${ORIGINAL}`);

const original = JSON.parse(fs.readFileSync(ORIGINAL, "utf8"));
const originalById = new Map(original.map((q) => [q.id, q]));
const reviewed = selectionFiles.flatMap((file) => JSON.parse(fs.readFileSync(file, "utf8")));

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

const restored = [];
const missingOriginalIds = [];
for (const selected of reviewed) {
  const source = originalById.get(selected.id);
  if (!source) {
    missingOriginalIds.push(selected.id);
    continue;
  }
  // Restore the complete pre-sanitizer wording, while preserving later metadata.
  restored.push({ ...selected, ...source, archived: false, launch_enabled: true });
}

const chosen = [];
const seenIds = new Set();
const seenTexts = new Set();
const shortages = {};
for (const [category, quota] of quotas) {
  const candidates = restored.filter((q) => q.category === category);
  for (const q of candidates) {
    const key = normalize(q.question_text);
    if (seenIds.has(q.id) || seenTexts.has(key)) continue;
    const options = Array.isArray(q.options) ? q.options : [];
    if (![2, 4].includes(options.length)) continue;
    if (!Number.isInteger(q.correct_index) || q.correct_index < 0 || q.correct_index >= options.length) continue;
    if (new Set(options.map(normalize)).size !== options.length) continue;
    chosen.push(q);
    seenIds.add(q.id);
    seenTexts.add(key);
    if (chosen.filter((x) => x.category === category).length === quota) break;
  }
  const count = chosen.filter((q) => q.category === category).length;
  if (count !== quota) shortages[category] = { required: quota, available: count };
}

if (Object.keys(shortages).length) throw new Error(`Reviewed selections do not meet quotas: ${JSON.stringify(shortages)}`);
if (chosen.length !== 1000) throw new Error(`Expected exactly 1000 questions, got ${chosen.length}`);

const categoryCounters = new Map();
for (const q of chosen) {
  const index = categoryCounters.get(q.category) ?? 0;
  const quizNumber = Math.floor(index / 20) + 1;
  q.quiz_title = `${q.category} المختارة (${quizNumber})`;
  q.order_index = index % 20;
  categoryCounters.set(q.category, index + 1);
}

const quizCounts = {};
for (const q of chosen) quizCounts[q.quiz_title] = (quizCounts[q.quiz_title] ?? 0) + 1;
const invalidQuizSizes = Object.entries(quizCounts).filter(([, count]) => count !== 20);
if (invalidQuizSizes.length) throw new Error(`Every curated quiz must contain 20 questions: ${JSON.stringify(invalidQuizSizes)}`);

const changedTextCount = chosen.filter((q) => {
  const later = reviewed.find((x) => x.id === q.id);
  return later && later.question_text !== q.question_text;
}).length;

const report = {
  status: "PASSED",
  source_questions_reviewed: original.length,
  selected_questions: chosen.length,
  selected_quizzes: Object.keys(quizCounts).length,
  questions_per_quiz: 20,
  restored_from_pre_sanitizer_original: changedTextCount,
  missing_original_ids: missingOriginalIds,
  duplicate_ids: chosen.length - new Set(chosen.map((q) => q.id)).size,
  duplicate_question_texts: chosen.length - new Set(chosen.map((q) => normalize(q.question_text))).size,
  category_counts: Object.fromEntries([...quotas].map(([category]) => [category, chosen.filter((q) => q.category === category).length])),
  quiz_counts: quizCounts,
};

fs.writeFileSync(OUTPUT, `${JSON.stringify(chosen, null, 2)}\n`, "utf8");
fs.writeFileSync(REPORT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report, null, 2));
