const fs = require('fs');
const path = require('path');

const filePath = path.resolve('islamiyyat_master_quizzes.json');
const quizzes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let sql = `-- Sync all 282 questions to Supabase\nDELETE FROM questions;\n\n`;

quizzes.forEach((quiz, qIdx) => {
  const title = quiz.title.replace(/'/g, "''");
  const questions = quiz.questions || [];

  sql += `DO $$\nDECLARE\n  v_id uuid;\nBEGIN\n`;
  sql += `  SELECT id INTO v_id FROM quizzes WHERE title = '${title}' LIMIT 1;\n`;
  sql += `  IF v_id IS NOT NULL THEN\n`;

  questions.forEach((q, idx) => {
    const qText = q.question_text.replace(/'/g, "''");
    const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
    const correctIndex = q.correct_index ?? 0;
    const timer = q.time_limit_seconds || 20;
    const qType = (q.question_type || "multiple_choice").replace(/'/g, "''");
    const explanation = q.explanation ? `'${q.explanation.replace(/'/g, "''")}'` : 'NULL';
    const sub = q.subcategory ? `'${q.subcategory.replace(/'/g, "''")}'` : 'NULL';

    sql += `    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)\n`;
    sql += `    VALUES (v_id, '${qText}', '${optionsJson}'::jsonb, ${correctIndex}, ${timer}, ${idx}, '${qType}', ${explanation}, ${sub});\n`;
  });

  sql += `  END IF;\nEND $$;\n\n`;
});

fs.writeFileSync('scripts/sync_questions.sql', sql, 'utf8');
console.log('Generated sync_questions.sql');
