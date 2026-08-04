import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Auditing and fixing all phrase & number overlaps across ${questions.length} questions...`);

let fixedNumberSpoils = 0;
let fixedWordSpoils = 0;
let fixedParenOptions = 0;

// Common Arabic stop words to ignore in word overlap checks
const STOP_WORDS = new Set([
  "في", "من", "على", "عن", "مع", "إلى", "أن", "إن", "هو", "هي", "هم", "هن", "هذا", "هذه", "ذلك", "تلك",
  "ما", "ماذا", "من", "كيف", "أين", "متى", "لماذا", "أي", "أيها", "التي", "الذي", "الذين", "اللاتي",
  "اسم", "باسم", "لقب", "بلدة", "دولة", "مدينة", "قرية", "نهر", "بحر", "جبل", "قارة", "لعبة", "فيلم",
  "مسلسل", "أنمي", "سلسلة", "فريق", "نادي", "بطولة", "كأس", "عام", "سنة", "شهر", "يوم", "سباق", "رجل", "مرأة"
]);

function cleanOptionText(opt) {
  if (typeof opt !== "string") return opt;
  // Remove English text in parentheses, e.g. "الغريزة الفائقة (Ultra Instinct)" -> "الغريزة الفائقة"
  let cleaned = opt.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)/g, "").trim();
  cleaned = cleaned.replace(/\s*\[[A-Za-z0-9\s\-/\\',.:&]+\]/g, "").trim();
  return cleaned || opt;
}

function sanitizeQuestionAndCorrectOpt(qText, correctOpt) {
  let cleanQ = qText;

  // 1. Specific Fix for "24 ساعة" and endurance race question in user screenshot
  if (cleanQ.includes("24 ساعة") && (correctOpt.includes("24") || correctOpt.includes("لومان"))) {
    cleanQ = cleanQ.replace("يستمر لمدة 24 ساعة متواصلة في فرنسا؟", "يستمر يوماً كاملاً متواصلاً؟");
    cleanQ = cleanQ.replace("24 ساعة متواصلة", "يوماً كاملاً متواصلاً");
    cleanQ = cleanQ.replace("24 ساعة", "يوماً كاملاً");
    fixedNumberSpoils++;
  }

  // 2. Fix explicit numbers in qText that match numbers in correctOpt
  const numbersInCorrect = correctOpt.match(/\b\d+\b/g) || [];
  numbersInCorrect.forEach((numStr) => {
    if (cleanQ.includes(numStr)) {
      if (numStr === "24") {
        cleanQ = cleanQ.replace(/\b24 ساعة\b/g, "يوماً كاملاً").replace(/\b24\b/g, "أربع وعشرين");
        fixedNumberSpoils++;
      } else if (numStr === "500") {
        cleanQ = cleanQ.replace(/\b500\b/g, "خمسمائة");
        fixedNumberSpoils++;
      } else if (numStr === "100") {
        cleanQ = cleanQ.replace(/\b100\b/g, "مائة");
        fixedNumberSpoils++;
      } else if (numStr === "10") {
        cleanQ = cleanQ.replace(/\b10\b/g, "عشرة");
        fixedNumberSpoils++;
      } else if (numStr === "180") {
        cleanQ = cleanQ.replace(/\b180 نقطة\b/g, "الرمية العظمى").replace(/\b180\b/g, "الرمية العظمى");
        fixedNumberSpoils++;
      }
    }
  });

  // 3. Fix shared words between qText and correctOpt (e.g. surnames like "أوتشيها", "أوزوماكي", "أكرمان", "الغريزة الفائقة")
  const wordsInCorrect = correctOpt
    .split(/[\s,./\-\\()\[\]]+/)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));

  wordsInCorrect.forEach((word) => {
    // Avoid stripping words in logic/math questions where words must match
    const isLogicMath = /إذا كان|إذا كانت|مربع|مثلث|دائرة|مستطيل|أطول من|أقصر من/i.test(cleanQ);
    if (isLogicMath) return;

    // Check if word appears in cleanQ
    const wordRegex = new RegExp(`\\b${word}\\b`, "i");
    if (wordRegex.test(cleanQ)) {
      // Replace or remove word from cleanQ
      if (word === "أوتشيها") {
        cleanQ = cleanQ.replace("عشيرة أوتشيها", "العشيرة المنكوبة ذات الأعين الحمراء");
        cleanQ = cleanQ.replace("أوتشيها", "العشيرة");
        fixedWordSpoils++;
      } else if (word === "أوزوماكي") {
        cleanQ = cleanQ.replace("ناروتو أوزوماكي", "البطل ناروتو");
        cleanQ = cleanQ.replace("أوزوماكي", "");
        fixedWordSpoils++;
      } else if (word === "أكرمان") {
        cleanQ = cleanQ.replace("عشيرة أكرمان", "العشيرة القتالية الأسطورية");
        cleanQ = cleanQ.replace("أكرمان", "");
        fixedWordSpoils++;
      } else if (word === "الغريزة" || word === "الفائقة") {
        cleanQ = cleanQ.replace("والغريزة الفائقة دون تفكير", "والقتالية الفائقة دون تفكير");
        fixedWordSpoils++;
      } else if (word === "المستقبل") {
        cleanQ = cleanQ.replace("المستقبل المظلم", "الزمن المظلم");
        fixedWordSpoils++;
      } else if (word === "ميكاسا") {
        cleanQ = cleanQ.replace("ميكاسا", "الفتاة القتالية");
        fixedWordSpoils++;
      } else if (word === "رشدي") {
        cleanQ = cleanQ.replace("رشدي أباظة", "الممثل الشهير");
        fixedWordSpoils++;
      } else if (word === "شادي") {
        cleanQ = cleanQ.replace("شادي عبد السلام", "المخرج المبتكر");
        fixedWordSpoils++;
      } else if (word === "السمات") {
        cleanQ = cleanQ.replace("دعاء السمات", "الدعاء المبارك");
        fixedWordSpoils++;
      } else {
        // Generic safe removal/clean for remaining exact match words
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const safeRegex = new RegExp(`\\s*['"«]?${escaped}['"»]?`, "gi");
        cleanQ = cleanQ.replace(safeRegex, "");
        fixedWordSpoils++;
      }
    }
  });

  // Final cleanup of spaces & punctuation
  cleanQ = cleanQ.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  return cleanQ;
}

const cleanedQuestions = questions.map((q) => {
  const origOptions = q.options || [];
  const cleanedOpts = origOptions.map((o) => cleanOptionText(o));

  if (JSON.stringify(origOptions) !== JSON.stringify(cleanedOpts)) {
    fixedParenOptions++;
  }

  const correctOpt = cleanedOpts[q.correct_index] || "";
  const cleanedQText = sanitizeQuestionAndCorrectOpt(q.question_text || "", correctOpt);

  return {
    ...q,
    question_text: cleanedQText,
    options: cleanedOpts,
  };
});

console.log(`Fixes Applied:
- Options parenthetical English & extra text cleaned: ${fixedParenOptions}
- Number spoils fixed in question text: ${fixedNumberSpoils}
- Word / Surname spoils fixed in question text: ${fixedWordSpoils}
`);

fs.writeFileSync(inputPath, JSON.stringify(cleanedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json successfully!");
