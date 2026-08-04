import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Auditing all ${questions.length} questions for honorifics, keyword spoilers, and phrasing flaws...`);

const honorifics = [
  "السير", "سير", "الدكتور", "دكتور", "البروفيسور", "بروفيسور", "الشيخ", "شيخ",
  "الكونت", "كونت", "الملك", "ملك", "الإمبراطور", "إمبراطور", "القديس", "قديس",
  "العميد", "عميد", "الجنرال", "جنرال", "المارشال", "مارشال", "الرئيس", "رئيس"
];

let honorificCount = 0;
let keywordOverlapCount = 0;
let f1Question = null;

questions.forEach((q, i) => {
  const options = q.options || [];
  const correctOpt = options[q.correct_index] || "";
  const qText = q.question_text || "";

  if (qText.includes("103") || correctOpt.includes("هاملتون")) {
    f1Question = { index: i, qText, options, correctIndex: q.correct_index };
  }

  // 1. Honorific in options or question text
  const hasHonorific = honorifics.some(
    (h) => correctOpt.startsWith(h + " ") || correctOpt.includes(" " + h + " ") || correctOpt === h
  );

  if (hasHonorific) {
    honorificCount++;
    if (honorificCount <= 5) {
      console.log(`Honorific Flag [Index ${i}]:`, { qText, correctOpt });
    }
  }

  // 2. Keyword in correct option that uniquely matches question_text
  const optWords = correctOpt
    .split(/\s+/)
    .map((w) => w.replace(/[«»'"()]/g, ""))
    .filter((w) => w.length >= 3);

  const otherWords = options.filter((_, idx) => idx !== q.correct_index).join(" ");

  const stopWords = new Set([
    "في", "من", "على", "عن", "التي", "الذي", "عام", "سنة", "مدينة", "دولة",
    "رجل", "فريق", "نادي", "ما", "هو", "هي", "اسم", "لقب", "أنمي", "فيلم"
  ]);

  const uniqueToCorrect = optWords.filter((w) => !otherWords.includes(w) && !stopWords.has(w));
  const givingAwayWords = uniqueToCorrect.filter((w) => qText.includes(w));

  if (givingAwayWords.length > 0) {
    keywordOverlapCount++;
  }
});

console.log("\nF1 Question Found in Database:", f1Question);
console.log(`\nAudit Results:
- Total Honorific Giveaways Found: ${honorificCount}
- Total Keyword Overlap Giveaways Found: ${keywordOverlapCount}
`);
