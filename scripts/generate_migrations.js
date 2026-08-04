import fs from "fs";
import path from "path";
import crypto from "crypto";

const rawPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(rawPath)) {
  console.error("raw file not found");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(rawPath, "utf8"));

function uuidFromString(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

function escapeSql(str) {
  if (str === null || str === undefined) return "NULL";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  if (!obj) return "'[]'::jsonb";
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

function escapeArray(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return "'{}'::text[]";
  const escaped = arr.map((s) => '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"').join(",");
  return "'{" + escaped.replace(/'/g, "''") + "}'::text[]";
}

const quizzes = [];
const quizIdByTitle = new Map();

raw.forEach((q) => {
  const title = q.quiz_title || "General";
  if (!quizIdByTitle.has(title)) {
    const qId = uuidFromString("quiz_" + title);
    quizIdByTitle.set(title, qId);
    quizzes.push({
      id: qId,
      title: title,
      category: q.category || "General",
      language: "ar",
      is_public: true,
    });
  }
});

console.log("Unique Quizzes:", quizzes.length);
console.log("Total Questions:", raw.length);

// Generate migration SQL for quizzes
let quizSql = `-- Migration for 237 Quiz Library Quizzes\n`;
quizSql += `INSERT INTO public.quizzes (id, title, category, language, is_public, created_at, user_id)\nVALUES\n`;
const quizRows = quizzes.map((q) => {
  return `  ('${q.id}', ${escapeSql(q.title)}, ${escapeSql(q.category)}, 'ar', true, NOW(), NULL)`;
});
quizSql += quizRows.join(",\n") + `\nON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, category = EXCLUDED.category, is_public = true;\n`;

fs.writeFileSync("./supabase/migrations/20260804120000_quiz_library_quizzes.sql", quizSql, "utf8");
console.log("Wrote 20260804120000_quiz_library_quizzes.sql");

// Split 5000 questions into 5 chunks of 1000
const chunkSize = 1000;
const totalChunks = Math.ceil(raw.length / chunkSize);

for (let chunkIdx = 0; chunkIdx < totalChunks; chunkIdx++) {
  const chunk = raw.slice(chunkIdx * chunkSize, (chunkIdx + 1) * chunkSize);
  const fileNum = String(chunkIdx + 1).padStart(2, "0");
  const filename = `./supabase/migrations/202608041200${fileNum}_quiz_library_questions_p${chunkIdx + 1}.sql`;

  let qSql = `-- Migration for Quiz Library Questions Part ${chunkIdx + 1} (${chunk.length} questions)\n`;
  qSql += `INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, difficulty, subcategory, tags, source, external_id, is_verified, version)\nVALUES\n`;

  const qRows = chunk.map((q, idx) => {
    const qId = quizIdByTitle.get(q.quiz_title || "General");
    const optionsJson = escapeJson(q.options || ["", "", "", ""]);
    const correctIdx = typeof q.correct_index === "number" ? Math.max(0, Math.min(3, q.correct_index)) : 0;
    const timeLimit = typeof q.time_limit_seconds === "number" ? Math.max(5, Math.min(120, q.time_limit_seconds)) : 20;
    const qType = q.question_type === "boolean" ? "'boolean'" : "'multi'";
    const explanation = escapeSql(q.explanation || null);
    const difficulty = escapeSql(q.difficulty || "medium");
    const subcategory = escapeSql(q.subcategory || null);
    const tags = escapeArray(q.tags || []);
    const source = escapeSql(q.source || null);
    const externalId = escapeSql(q.id || null);
    const verified = q.verified === false ? "false" : "true";
    const version = typeof q.version === "number" ? q.version : 1;

    return `  ('${qId}', ${escapeSql(q.question_text)}, ${optionsJson}, ${correctIdx}, ${timeLimit}, ${idx}, ${qType}, ${explanation}, ${difficulty}, ${subcategory}, ${tags}, ${source}, ${externalId}, ${verified}, ${version})`;
  });

  qSql += qRows.join(",\n") + `;\n`;
  fs.writeFileSync(filename, qSql, "utf8");
  console.log(`Wrote ${filename}`);
}

console.log("Migration generation complete!");
