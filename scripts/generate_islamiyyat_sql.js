import fs from 'fs';
import path from 'path';

const filePath = path.resolve('islamiyyat_master_quizzes.json');
const quizzes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let sql = `-- Direct SQL Seed for Islamiyyat Quizzes\n`;

quizzes.forEach((quiz, qIdx) => {
  const quizTitle = quiz.title.replace(/'/g, "''");
  const category = (quiz.category || "إسلاميات").replace(/'/g, "''");
  const subcategory = (quiz.subcategory || "").replace(/'/g, "''");
  const difficulty = (quiz.quiz_difficulty || "standard").replace(/'/g, "''");
  const lang = (quiz.language || "ar").replace(/'/g, "''");

  const quizVar = `v_quiz_id_${qIdx}`;

  sql += `\nDO $$\nDECLARE\n  ${quizVar} uuid;\nBEGIN\n`;
  sql += `  INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)\n`;
  sql += `  VALUES ('${quizTitle}', '${category}', '${subcategory}', '${difficulty}', '${lang}', true)\n`;
  sql += `  RETURNING id INTO ${quizVar};\n\n`;

  const questions = quiz.questions || [];
  questions.forEach((q, idx) => {
    const qText = q.question_text.replace(/'/g, "''");
    const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
    const correctIndex = q.correct_index ?? 0;
    const timer = q.time_limit_seconds || 20;
    const qType = (q.question_type || "multiple_choice").replace(/'/g, "''");
    const explanation = q.explanation ? `'${q.explanation.replace(/'/g, "''")}'` : 'NULL';
    const sub = q.subcategory ? `'${q.subcategory.replace(/'/g, "''")}'` : `'${subcategory}'`;

    sql += `  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)\n`;
    sql += `  VALUES (${quizVar}, '${qText}', '${optionsJson}'::jsonb, ${correctIndex}, ${timer}, ${idx}, '${qType}', ${explanation}, ${sub});\n`;
  });

  sql += `END $$;\n`;
});

fs.writeFileSync(path.resolve('scripts/seed_islamiyyat.sql'), sql, 'utf8');
console.log(`Generated seed_islamiyyat.sql with ${quizzes.length} quizzes and total SQL batch.`);
