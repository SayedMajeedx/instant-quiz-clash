import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parsedQuizzes = JSON.parse(fs.readFileSync(path.join(__dirname, 'output_quizzes.json'), 'utf8'));

// Format SQL statements to upsert categories, quizzes, and questions cleanly in Supabase
let sqlLines = [];

sqlLines.push(`-- Upsert 16 Personality Quizzes into Supabase DB`);

parsedQuizzes.forEach((quiz) => {
  const quizId = quiz.id;
  const title = quiz.title.replace(/'/g, "''");
  const category = quiz.category.replace(/'/g, "''");
  const subcategory = quiz.subcategory.replace(/'/g, "''");

  sqlLines.push(`
-- Quiz: ${title}
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  '${quizId}'::uuid ON CONFLICT DO NOTHING,
  '${title}',
  '${category}',
  '${subcategory}',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;
`);

  // Delete existing questions for this quiz to avoid duplicates
  sqlLines.push(`DELETE FROM public.questions WHERE quiz_id = '${quizId}'::uuid ON CONFLICT DO NOTHING;`);

  quiz.questions.forEach((q, idx) => {
    const qText = q.question_text.replace(/'/g, "''");
    const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
    const explanation = (q.explanation || '').replace(/'/g, "''");

    sqlLines.push(`
INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = '${title}' LIMIT 1),
  '${qText}',
  '${optionsJson}'::jsonb,
  ${q.correct_index},
  20,
  ${idx},
  'multi',
  ${explanation ? `'${explanation}'` : 'NULL'},
  '${subcategory}'
);`);
  });
});

const sqlFilePath = path.join(__dirname, 'sync_personality_quizzes.sql');
fs.writeFileSync(sqlFilePath, sqlLines.join('\n'), 'utf8');
console.log(`Generated ${sqlFilePath}`);
