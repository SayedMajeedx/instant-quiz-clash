import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://rplxgxgfehjmrsipbfnb.supabase.co";
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_RfT-3DjN9j5IRBvYGFsL_w_YJ7-7JE-";

const supabase = createClient(supabaseUrl, supabaseKey);

const filePath = path.resolve('islamiyyat_master_quizzes.json');
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const quizzes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log(`Starting direct Supabase DB sync for ${quizzes.length} quizzes...`);

async function syncAll() {
  let insertedQuizzes = 0;
  let insertedQuestions = 0;

  for (const quiz of quizzes) {
    let newQuiz = null;

    // Try full payload
    const quizPayloadFull = {
      title: quiz.title,
      category: quiz.category || "إسلاميات",
      subcategory: quiz.subcategory || "",
      quiz_difficulty: quiz.quiz_difficulty || "standard",
      language: quiz.language || "ar",
      is_public: quiz.is_public ?? true,
    };

    const res1 = await supabase
      .from("quizzes")
      .insert([quizPayloadFull])
      .select()
      .single();

    if (!res1.error && res1.data) {
      newQuiz = res1.data;
    } else {
      console.warn(`Full insert failed for "${quiz.title}", trying minimal insert fallback...`);
      // Fallback payload (minimal fields that are guaranteed in schema cache)
      const res2 = await supabase
        .from("quizzes")
        .insert([{ title: quiz.title }])
        .select()
        .single();

      if (!res2.error && res2.data) {
        newQuiz = res2.data;
      } else {
        console.error(`Fallback insert also failed for "${quiz.title}":`, res2.error);
        continue;
      }
    }

    insertedQuizzes++;

    // Insert questions
    const questions = quiz.questions || [];
    if (questions.length > 0) {
      const qInserts = questions.map((q, idx) => ({
        quiz_id: newQuiz.id,
        question_text: q.question_text,
        options: q.options,
        correct_index: q.correct_index,
        time_limit_seconds: q.time_limit_seconds || 20,
        order_index: idx,
        question_type: q.question_type || "multiple_choice",
        explanation: q.explanation || null,
        image_url: q.image_url || null,
        subcategory: q.subcategory || quiz.subcategory || null,
      }));

      let { error: qErr } = await supabase.from("questions").insert(qInserts);
      if (qErr) {
        console.warn(`Full questions insert failed for "${quiz.title}", trying minimal questions insert...`);
        const qInsertsMinimal = questions.map((q, idx) => ({
          quiz_id: newQuiz.id,
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          time_limit_seconds: q.time_limit_seconds || 20,
          order_index: idx,
        }));
        const { error: qErr2 } = await supabase.from("questions").insert(qInsertsMinimal);
        if (qErr2) {
          console.error(`Failed to insert questions for quiz "${quiz.title}":`, qErr2);
        } else {
          insertedQuestions += qInsertsMinimal.length;
        }
      } else {
        insertedQuestions += qInserts.length;
      }
    }
  }

  console.log(`Sync complete! Successfully inserted ${insertedQuizzes} quizzes and ${insertedQuestions} questions directly into Supabase DB.`);
}

syncAll().catch(console.error);
