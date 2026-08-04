import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Humanizing and simplifying ${questions.length} questions...`);

let textModified = 0;
let optionsModified = 0;

function humanizeQuestionText(text) {
  if (!text || typeof text !== "string") return text;
  let q = text;

  // 1. Remove academic intros and robotic fluff
  q = q.replace(/^وفقاً للتصنيفات (الحديثة|الجغرافية|التاريخية|العلمية) والمعتمدة،?\s*/g, "");
  q = q.replace(/^وفقاً للدراسات (العلمية|التاريخية) المعتمدة،?\s*/g, "");
  q = q.replace(/^في السياق (التاريخي|الجغرافي|العلمي)،?\s*/g, "");
  q = q.replace(/^في إطار (المفاهيم|التصنيفات|العلوم) الحديثة،?\s*/g, "");

  // 2. Simplify stiff AI question starters
  q = q.replace(/^أيها? مما يلي يُعد\s+/g, "أي مما يلي هو ");
  q = q.replace(/^أيها? مما يلي يُعتبر\s+/g, "أي مما يلي هو ");
  q = q.replace(/^ما هي الدولة التي تُعد\s+/g, "ما هي أكبر ");
  q = q.replace(/^ما هي العبارة التي تعبر بشكل صحيح عن\s+/g, "ما معنى ");
  q = q.replace(/^أي العبارات الآتية تعبر بوضوح عن\s+/g, "ما المعنى الصحيح لـ ");
  q = q.replace(/^ما اسم العلم الذي يختص بدراسة\s+/g, "ما هو علم ");
  q = q.replace(/^ما هي العضية الخلوية التي\s+/g, "ما الجزء الخلوي الذي ");
  q = q.replace(/^تُعرف العملية الفسيولوجية بـ\s*/g, "تُسمى عملية ");

  // 3. Remove English words inside parentheses in question text
  q = q.replace(/\s*\([A-Za-z0-9\s\-',.:&]+\)/g, "");

  // 4. Remove garbled AI artifacts
  q = q.replace(/\s+(his|the|and|or|in|of|for|with)\s+/gi, " ");

  // 5. Clean whitespace & double punctuation
  q = q.replace(/\s+/g, " ").trim();
  q = q.replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟");

  if (q !== text) textModified++;
  return q;
}

function humanizeOption(opt) {
  if (!opt || typeof opt !== "string") return opt;
  let o = opt;
  // Remove English text in parentheses/brackets
  o = o.replace(/\s*\([A-Za-z0-9\s\-',.:&]+\)/g, "").trim();
  o = o.replace(/\s*\[[A-Za-z0-9\s\-',.:&]+\]/g, "").trim();
  if (o !== opt) optionsModified++;
  return o;
}

const humanizedQuestions = questions.map((q) => {
  const newText = humanizeQuestionText(q.question_text);
  const newOptions = (q.options || []).map((o) => humanizeOption(o));

  return {
    ...q,
    question_text: newText,
    options: newOptions,
  };
});

console.log(`Humanization Complete:
- Question texts simplified and humanized: ${textModified}
- Option strings cleaned: ${optionsModified}
`);

fs.writeFileSync(inputPath, JSON.stringify(humanizedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json with humanized questions!");
