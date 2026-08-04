import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Performing deep semantic refinement across all ${questions.length} questions...`);

let refinedCount = 0;

function deepRefineQuestion(q) {
  let qText = q.question_text || "";
  let options = (q.options || []).map((o) => typeof o === "string" ? o.trim() : o);
  let correctIndex = q.correct_index || 0;
  let correctOpt = options[correctIndex] || "";

  let changed = false;

  // 1. Strip any parenthetical / bracketed translations from all options
  const cleanOptions = options.map((opt) => {
    let clean = opt.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)/g, "").trim();
    clean = clean.replace(/\s*\[[A-Za-z0-9\s\-/\\',.:&]+\]/g, "").trim();
    if (clean !== opt) changed = true;
    return clean;
  });

  // 2. Remove redundant clue words or answers mentioned inside question_text
  let cleanQText = qText;

  // Specific semantic question prompt polishes
  if (cleanQText.includes("سباق 24 ساعة") || cleanQText.includes("24 ساعة متواصلة")) {
    cleanQText = "ما اسم سباق التحمل الأسطوري للسيارات الذي يُقام سنوياً في فرنسا لليلة ونهار كاملين؟";
    changed = true;
  }

  // Remove trailing bracketed terms in questions
  if (/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)\s*\؟?$/.test(cleanQText)) {
    cleanQText = cleanQText.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)\s*(\؟?)$/, "$1");
    changed = true;
  }

  // Simplify stiff phrasing
  const replacements = [
    [/^ما هي الكائنات الحية التي/g, "ما الكائنات التي"],
    [/^ما هي الدولة التي تعتبر/g, "ما الدولة التي تقع"],
    [/^أيها مما يلي يعتبر/g, "أي مما يلي هو"],
    [/^أيها مما يلي يعد/g, "أي مما يلي هو"],
    [/^ما اسم العضية الخلوية المسؤول/g, "ما الجزء الخلوي المسؤول"],
    [/^ما اسم السلسلة الشهيرة وتدعى/g, "ما اسم السلسلة الشهيرة"],
    [/^ما اسم اللعبة الشهيرة وتدعى/g, "ما اسم اللعبة الشهيرة"],
    [/^ما اسم الفلم الشهير ويدعى/g, "ما اسم الفيلم الشهير"],
  ];

  for (const [pattern, replacement] of replacements) {
    if (pattern.test(cleanQText)) {
      cleanQText = cleanQText.replace(pattern, replacement);
      changed = true;
    }
  }

  // Ensure prompt question mark is clean
  cleanQText = cleanQText.replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  if (changed) refinedCount++;

  return {
    ...q,
    question_text: cleanQText,
    options: cleanOptions,
  };
}

const refinedQuestions = questions.map((q) => deepRefineQuestion(q));

console.log(`Deep Semantic Refinement Completed:
- Total questions semantically polished: ${refinedCount}
`);

fs.writeFileSync(inputPath, JSON.stringify(refinedQuestions, null, 2), "utf8");
console.log("Wrote updated merged_questions_launch_ready.json successfully!");
