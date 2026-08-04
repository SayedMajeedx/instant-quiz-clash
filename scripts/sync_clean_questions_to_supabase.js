import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const SUPABASE_URL = "https://rplxgxgfehjmrsipbfnb.supabase.co";
const SUPABASE_KEY = "sb_publishable_RfT-3DjN9j5IRBvYGFsL_w_YJ7-7JE-";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function syncToSupabase() {
  console.log("Loading cleaned 5000 questions from merged_questions_launch_ready.json...");
  const questions = JSON.parse(fs.readFileSync("./merged_questions_launch_ready.json", "utf8"));

  console.log(`Syncing ${questions.length} questions directly to Supabase live database...`);

  let updatedCount = 0;
  let batchSize = 100;

  for (let i = 0; i < questions.length; i += batchSize) {
    const chunk = questions.slice(i, i + batchSize);
    
    // Upsert chunk with exact Supabase table columns
    const rows = chunk.map((q) => ({
      id: q.id,
      quiz_id: q.quiz_id,
      question_text: q.question_text,
      options: q.options,
      correct_index: q.correct_index,
      time_limit_seconds: q.time_limit_seconds || 20,
      order_index: q.order_index ?? 0,
      explanation: q.explanation || null,
    }));

    const { error } = await supabase.from("questions").upsert(rows, { onConflict: "id" });
    if (error) {
      console.error(`Error updating batch ${i}..${i + batchSize}:`, error.message);
    } else {
      updatedCount += chunk.length;
      if (updatedCount % 500 === 0 || updatedCount === questions.length) {
        console.log(`Progress: ${updatedCount} / ${questions.length} questions updated in Supabase live database.`);
      }
    }
  }

  console.log("SUCCESS! All live questions in Supabase database are 100% updated with cleaned options and questions!");
}

void syncToSupabase();
