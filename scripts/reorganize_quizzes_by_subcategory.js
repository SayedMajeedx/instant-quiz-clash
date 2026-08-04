import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Re-organizing quiz titles strictly by subcategory across ${questions.length} questions...`);

function getDifficultyLabel(diff) {
  if (diff === "easy" || diff === "سهل") return "قياسي";
  if (diff === "challenge" || diff === "خبير" || diff === "صعب") return "خبير";
  return "متوسط";
}

let retitledCount = 0;

const updatedQuestions = questions.map((q) => {
  const subcategory = q.subcategory || q.category || "عام";
  const diffLabel = getDifficultyLabel(q.quiz_difficulty || q.difficulty);

  // Set quiz_title to strictly reflect subcategory
  const newQuizTitle = `${subcategory} - ${diffLabel}`;

  if (q.quiz_title !== newQuizTitle) {
    retitledCount++;
  }

  return {
    ...q,
    quiz_title: newQuizTitle,
  };
});

console.log(`Re-organization Complete:
- Questions re-titled strictly by subcategory: ${retitledCount}
`);

fs.writeFileSync(inputPath, JSON.stringify(updatedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json successfully!");
