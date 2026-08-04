import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Executing Master Sanitation and Humanization across all ${questions.length} questions...`);

const HONORIFICS_REGEX = /^(السير|سير|الدكتور|دكتور|البروفيسور|بروفيسور|الشيخ|شيخ|الكونت|كونت|الملك|ملك|الإمبراطور|إمبراطور|القديس|قديس|العميد|عميد|الجنرال|جنرال|المارشال|مارشال|الرئيس|رئيس|الأمير|أمير)\s+/i;

let honorificsFixed = 0;
let parentheticalsFixed = 0;
let keywordSpoilersFixed = 0;

function cleanOptionText(opt) {
  if (typeof opt !== "string") return opt;
  let o = opt;

  // 1. Remove parenthetical English or extra descriptions in options
  o = o.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)/g, "").trim();
  o = o.replace(/\s*\[[A-Za-z0-9\s\-/\\',.:&]+\]/g, "").trim();

  // 2. Remove leading honorifics like "السير", "دكتور", "الملك" from options
  if (HONORIFICS_REGEX.test(o)) {
    o = o.replace(HONORIFICS_REGEX, "").trim();
    honorificsFixed++;
  }

  return o;
}

function sanitizeQuestionPrompt(qText, correctOpt) {
  if (!qText || typeof qText !== "string") return qText;
  let q = qText;

  // 1. Fix Lewis Hamilton / Sir F1 question specifically
  if ((q.includes("103") || q.includes("سير") || correctOpt.includes("هاميلتون")) && !correctOpt.includes("مارغريت") && q.category === "رياضة") {
    if (correctOpt.includes("هاميلتون") || correctOpt.includes("هاملتون")) {
      q = "ما اسم السائق البريطاني الذي فاز بـ 7 ألقاب عالمية وحقق أرقاماً قياسية تاريخية في فورمولا 1؟";
      keywordSpoilersFixed++;
    }
  }

  // 2. Fix endurance race / Le Mans question
  if (q.includes("24 ساعة") || correctOpt.includes("لومان")) {
    q = "ما اسم سباق التحمل الأسطوري للسيارات الذي يُقام سنوياً في فرنسا لليلة ونهار كاملين؟";
    keywordSpoilersFixed++;
  }

  // 3. Remove "نال رتبة 'سير'" or "نال لقب السير" from question text
  q = q.replace(/نال رتبة 'سير'\s*/g, "حصل على التكريم الملكي ");
  q = q.replace(/نال لقب 'سير'\s*/g, "حصل على التكريم الملكي ");
  q = q.replace(/نال رتبة سير\s*/g, "حصل على التكريم الملكي ");

  // 4. Remove exact keyword match if correctOpt is unique
  if (correctOpt && correctOpt.length >= 3) {
    const words = correctOpt.split(/\s+/).filter((w) => w.length >= 4);
    words.forEach((w) => {
      if (w === "أوتشيها") {
        q = q.replace(/عشيرة أوتشيها/g, "العشيرة المنكوبة ذات الأعين الحمراء");
        q = q.replace(/أوتشيها/g, "العشيرة");
        keywordSpoilersFixed++;
      } else if (w === "أكرمان") {
        q = q.replace(/عشيرة أكرمان/g, "العشيرة القتالية الأسطورية");
        q = q.replace(/أكرمان/g, "");
        keywordSpoilersFixed++;
      } else if (w === "أوزوماكي") {
        q = q.replace(/ناروتو أوزوماكي/g, "البطل ناروتو");
        q = q.replace(/أوزوماكي/g, "");
        keywordSpoilersFixed++;
      }
    });
  }

  // 5. Clean up extra spaces & double question marks
  q = q.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  return q;
}

const sanitizedQuestions = questions.map((q) => {
  const origOptions = q.options || [];
  const cleanedOpts = origOptions.map((o) => cleanOptionText(o));

  if (JSON.stringify(origOptions) !== JSON.stringify(cleanedOpts)) {
    parentheticalsFixed++;
  }

  const correctOpt = cleanedOpts[q.correct_index] || "";
  const cleanedQText = sanitizeQuestionPrompt(q.question_text || "", correctOpt);

  return {
    ...q,
    question_text: cleanedQText,
    options: cleanedOpts,
  };
});

console.log(`Master Sanitation Complete:
- Options with Honorifics Stripped (e.g. 'السير' -> ''): ${honorificsFixed}
- Options with Parentheticals / Extra Hints Stripped: ${parentheticalsFixed}
- Question Prompts Rewritten & Keyword Spoilers Fixed: ${keywordSpoilersFixed}
`);

fs.writeFileSync(inputPath, JSON.stringify(sanitizedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json successfully!");
