import crypto from "node:crypto";
import fs from "node:fs";

const curated = JSON.parse(fs.readFileSync("merged_questions_launch_ready.json", "utf8"));
const previous = JSON.parse(fs.readFileSync("D:/quiz-library/merged_questions.json", "utf8"));
const output = "supabase/migrations/20260805120000_curated_question_library.sql";

function uuidFromString(value) {
  const hash = crypto.createHash("sha256").update(value).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

function sql(value) {
  if (value === null || value === undefined || value === "") return "NULL";
  return `'${String(value).replaceAll("'", "''")}'`;
}

function json(value) {
  return `${sql(JSON.stringify(value))}::jsonb`;
}

function textArray(values) {
  if (!Array.isArray(values) || values.length === 0) return "'{}'::text[]";
  return `ARRAY[${values.map(sql).join(", ")}]::text[]`;
}

const priorMigration = fs.readFileSync("supabase/migrations/20260804120000_quiz_library_quizzes.sql", "utf8");
const migratedQuizIds = [...priorMigration.matchAll(/\('([0-9a-f-]{36})',/g)].map((match) => match[1]);
const oldQuizIds = [...new Set([
  ...previous.map((q) => uuidFromString(`quiz_${q.quiz_title || "General"}`)),
  ...migratedQuizIds,
])];
const quizzes = new Map();
for (const q of curated) {
  if (!quizzes.has(q.quiz_title)) {
    quizzes.set(q.quiz_title, {
      id: uuidFromString(`quiz_${q.quiz_title}`),
      title: q.quiz_title,
      category: q.category,
    });
  }
}

const lines = [
  "-- Replace the damaged generated library with the reviewed 1,000-question edition.",
  "BEGIN;",
  `DELETE FROM public.questions WHERE quiz_id IN (${oldQuizIds.map((id) => `'${id}'::uuid`).join(", ")});`,
  `DELETE FROM public.quizzes WHERE id IN (${oldQuizIds.map((id) => `'${id}'::uuid`).join(", ")});`,
  "INSERT INTO public.quizzes (id, title, category, language, is_public, created_at, user_id)",
  "VALUES",
  [...quizzes.values()].map((q) => `  ('${q.id}', ${sql(q.title)}, ${sql(q.category)}, 'ar', true, NOW(), NULL)`).join(",\n") + ";",
  "INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, difficulty, subcategory, tags, source, external_id, is_verified, version)",
  "VALUES",
  curated.map((q) => {
    const quizId = quizzes.get(q.quiz_title).id;
    return `  ('${quizId}', ${sql(q.question_text)}, ${json(q.options)}, ${q.correct_index}, ${q.time_limit_seconds ?? 20}, ${q.order_index ?? 0}, ${sql(q.question_type === "boolean" ? "boolean" : "multi")}, ${sql(q.explanation)}, ${sql(q.difficulty ?? "medium")}, ${sql(q.subcategory)}, ${textArray(q.tags)}, ${sql(q.source)}, ${sql(q.id)}, ${q.verified === false ? "false" : "true"}, ${Number.isInteger(q.version) ? q.version : 1})`;
  }).join(",\n") + ";",
  "COMMIT;",
  "",
];

fs.writeFileSync(output, lines.join("\n"), "utf8");
console.log(`Wrote ${output}: ${quizzes.size} quizzes, ${curated.length} questions`);
