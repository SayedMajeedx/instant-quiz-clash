const fs = require('fs');
const path = require('path');

const quizLibraryContent = fs.readFileSync(path.resolve('src/lib/quiz-library.ts'), 'utf8');
const startIdx = quizLibraryContent.indexOf('export const QUIZ_LIBRARY: LibraryQuiz[] = [');
const jsonStart = quizLibraryContent.indexOf('[', startIdx);
const jsonString = quizLibraryContent.slice(jsonStart);

let quizzes = eval(jsonString);

let sql = `-- Seed ALL QUIZ_LIBRARY quizzes directly in SQL\n\n`;

quizzes.forEach((quiz, qIdx) => {
  if (quiz.archived || quiz.launch_enabled === false) return;

  const quizTitle = (quiz.title || "كويز").replace(/'/g, "''");
  const category = (quiz.category || "عام").replace(/'/g, "''");
  const subcategory = (quiz.subcategory || "").replace(/'/g, "''");
  const difficulty = (quiz.quiz_difficulty || "standard").replace(/'/g, "''");
  const lang = (quiz.language || "ar").replace(/'/g, "''");

  const quizVar = `v_lib_id_${qIdx}`;

  sql += `DO $$\nDECLARE\n  ${quizVar} uuid;\nBEGIN\n`;
  sql += `  SELECT id INTO ${quizVar} FROM quizzes WHERE title = '${quizTitle}' LIMIT 1;\n`;
  sql += `  IF ${quizVar} IS NULL THEN\n`;
  sql += `    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)\n`;
  sql += `    VALUES ('${quizTitle}', '${category}', '${subcategory}', '${difficulty}', '${lang}', true)\n`;
  sql += `    RETURNING id INTO ${quizVar};\n\n`;

  const questions = quiz.questions || [];
  questions.forEach((q, idx) => {
    const qText = (q.question_text || q.question || "سؤال").replace(/'/g, "''");
    const optionsJson = JSON.stringify(q.options || ["خيار 1", "خيار 2", "خيار 3", "خيار 4"]).replace(/'/g, "''");
    const correctIndex = typeof q.correct_index === "number" ? q.correct_index : 0;
    const timer = q.time_limit_seconds || 20;
    const qType = (q.question_type || "multi").replace(/'/g, "''");
    const explanation = q.explanation ? `'${q.explanation.replace(/'/g, "''")}'` : 'NULL';
    const sub = q.subcategory ? `'${q.subcategory.replace(/'/g, "''")}'` : `'${subcategory}'`;

    sql += `    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)\n`;
    sql += `    VALUES (${quizVar}, '${qText}', '${optionsJson}'::jsonb, ${correctIndex}, ${timer}, ${idx}, '${qType}', ${explanation}, ${sub});\n`;
  });

  sql += `  END IF;\nEND $$;\n\n`;
});

fs.writeFileSync(path.resolve('scripts/seed_library.sql'), sql, 'utf8');
console.log(`Generated seed_library.sql for ALL ${quizzes.length} QUIZ_LIBRARY quizzes.`);
