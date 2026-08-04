import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Converting remaining academic statement questions across ${questions.length} items...`);

let convertedCount = 0;

const cleanedQuestions = questions.map((q) => {
  const options = q.options || [];
  const hasAcademicOptions = options.some(
    (o) => typeof o === "string" && (o.includes("عبارة خاطئة بالكامل") || o.includes("عبارة صحيحة تماماً"))
  );

  if (hasAcademicOptions) {
    convertedCount++;
    let qText = q.question_text || "";

    // Clean question prompt
    qText = qText.replace(/^هل العبارة الآتية صحيحة جغرافيّاً وتاريخيّاً؟:\s*"/g, "");
    qText = qText.replace(/^هل العبارة التالية صحيحة؟:\s*"/g, "");
    qText = qText.replace(/"$/g, "");
    qText = qText.trim();

    // Simplify options to clean, intuitive choices
    const cleanOpts = ["صح / نعم", "خطأ / لا"];
    const isTrue = q.correct_index === 1 || q.correct_index === 0; // Default to true statement

    return {
      ...q,
      question_text: `هل هذه العبارة صحيحة؟: "${qText}"`,
      options: cleanOpts,
      correct_index: isTrue ? 0 : 1,
    };
  }

  return q;
});

console.log(`Successfully converted ${convertedCount} academic statement questions into clean, intuitive true/false choices!`);

fs.writeFileSync(inputPath, JSON.stringify(cleanedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json successfully!");
