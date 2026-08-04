import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Starting final production audit and cleanup of ${questions.length} questions...`);

const honorificsRegex = /^(الدكتور|دكتور|البروفيسور|بروفيسور|الشيخ|شيخ|الملك|ملك|الإمبراطور|إمبراطور|السير|سير|الرئيس|رئيس|الأمير|أمير|الإمام|إمام)\s+/;

let parentheticalsFixed = 0;
let honorificsFixed = 0;
let emptyParenthesesFixed = 0;
let roboticTextsFixed = 0;

const cleanedQuestions = questions.map((q) => {
  // 1. Audit Options
  const origOptions = q.options || [];
  const cleanOptions = origOptions.map((opt) => {
    if (typeof opt !== "string") return opt;
    let o = opt;

    // Clean ALL parentheticals completely (Arabic, English, Math, Dates, Accents, Unicode, etc.)
    const beforeParen = o;
    o = o.replace(/\s*\(.*?\)/g, "").replace(/\s*\[.*?\]/g, "").trim();
    if (o !== beforeParen) parentheticalsFixed++;

    // Clean leading honorifics / titles
    const beforeHonorific = o;
    if (honorificsRegex.test(o)) {
      if (!o.startsWith("مملكة") && !o.startsWith("المملكة") && !o.startsWith("ملك لير")) {
        o = o.replace(honorificsRegex, "").trim();
        if (o !== beforeHonorific) honorificsFixed++;
      }
    }

    return o;
  });

  q.options = cleanOptions;

  // 2. Audit Question Text
  let qText = q.question_text || "";
  const beforeText = qText;

  // Strip clinical AI robotic postfix "(بحسب التوثيق التاريخي والرسمي)؟" or similar
  qText = qText.replace(/\s*\(بحسب التوثيق.*?\)\s*(\؟?)$/g, "$1");
  qText = qText.replace(/\s*بحسب التوثيق التاريخي والرسمي\s*/g, "");
  if (qText !== beforeText) roboticTextsFixed++;

  // Clean empty parentheses leftover "()"
  const textBeforeEmpty = qText;
  qText = qText.replace(/\(\s*\)/g, "");
  if (qText !== textBeforeEmpty) emptyParenthesesFixed++;

  // Remove double spaces and fix question marks spacing
  qText = qText.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  q.question_text = qText;

  return q;
});

console.log(`\nCleanup Metrics:
- Option parentheticals stripped: ${parentheticalsFixed}
- Leading honorifics stripped from options: ${honorificsFixed}
- Robotic clinical AI postfixes stripped: ${roboticTextsFixed}
- Empty parentheses () artifacts cleaned: ${emptyParenthesesFixed}
`);

fs.writeFileSync(inputPath, JSON.stringify(cleanedQuestions, null, 2), "utf8");
console.log("Successfully updated merged_questions_launch_ready.json!");
