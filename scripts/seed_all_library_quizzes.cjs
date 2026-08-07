const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Read quiz-library.ts content or extract QUIZ_LIBRARY
const quizLibraryContent = fs.readFileSync(path.resolve('src/lib/quiz-library.ts'), 'utf8');

// Match QUIZ_LIBRARY array assignment
const startIdx = quizLibraryContent.indexOf('export const QUIZ_LIBRARY: LibraryQuiz[] = [');
if (startIdx === -1) {
  console.error('Could not find QUIZ_LIBRARY in quiz-library.ts');
  process.exit(1);
}

const jsonStart = quizLibraryContent.indexOf('[', startIdx);
const jsonString = quizLibraryContent.slice(jsonStart);

let quizzes = [];
try {
  // Use Function to evaluate JS array safely
  quizzes = eval(jsonString);
  console.log(`Parsed ${quizzes.length} quizzes from QUIZ_LIBRARY.`);
} catch (err) {
  console.error('Failed to parse QUIZ_LIBRARY:', err);
  process.exit(1);
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://rplxgxgfehjmrsipbfnb.supabase.co";
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_RfT-3DjN9j5IRBvYGFsL_w_YJ7-7JE-";

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedAllLibraryQuizzes() {
  console.log(`Seeding ${quizzes.length} QUIZ_LIBRARY quizzes into Supabase DB...`);
  let successQuizzes = 0;
  let totalQuestions = 0;

  for (const quiz of quizzes) {
    if (quiz.archived || quiz.launch_enabled === false) continue;

    const title = quiz.title;
    const category = quiz.category || "عام";
    const subcategory = quiz.subcategory || "";
    const quiz_difficulty = quiz.quiz_difficulty || "standard";
    const language = quiz.language || "ar";
    const is_public = quiz.is_public ?? true;

    // Check if quiz with title already exists in Supabase DB
    const { data: existing } = await supabase
      .from('quizzes')
      .select('id')
      .eq('title', title)
      .maybeSingle();

    let targetQuizId = existing ? existing.id : null;

    if (!targetQuizId) {
      // Insert new quiz row
      const { data: newQuiz, error: insertErr } = await supabase
        .from('quizzes')
        .insert([{
          title,
          category,
          subcategory,
          quiz_difficulty,
          language,
          is_public,
        }])
        .select()
        .single();

      if (insertErr || !newQuiz) {
        console.warn(`Failed to insert quiz "${title}":`, insertErr?.message || insertErr);
        continue;
      }
      targetQuizId = newQuiz.id;

      // Insert questions
      const questions = quiz.questions || [];
      if (questions.length > 0) {
        const qInserts = questions.map((q, idx) => ({
          quiz_id: targetQuizId,
          question_text: q.question_text || q.question || "سؤال",
          options: q.options || ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
          correct_index: typeof q.correct_index === "number" ? q.correct_index : 0,
          time_limit_seconds: q.time_limit_seconds || 20,
          order_index: idx,
          question_type: q.question_type || "multi",
          explanation: q.explanation || null,
          image_url: q.image_url || null,
          subcategory: q.subcategory || subcategory || null,
        }));

        const { error: qErr } = await supabase.from('questions').insert(qInserts);
        if (!qErr) {
          totalQuestions += qInserts.length;
        } else {
          console.warn(`Failed to insert questions for "${title}":`, qErr.message);
        }
      }
    }
    successQuizzes++;
  }

  console.log(`Seeding complete! ${successQuizzes} quizzes present in Supabase DB with ${totalQuestions} questions newly inserted.`);
}

seedAllLibraryQuizzes().catch(console.error);
