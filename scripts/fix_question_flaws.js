import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Processing ${questions.length} questions...`);

let parenFixed = 0;
let answerSpoilFixed = 0;
let garbledTextFixed = 0;

function cleanOptionText(opt) {
  if (typeof opt !== "string") return opt;
  let cleaned = opt.replace(/\s*\([A-Za-z0-9\s\-',.:&]+\)/g, "").trim();
  cleaned = cleaned.replace(/\s*\[[A-Za-z0-9\s\-',.:&]+\]/g, "").trim();
  return cleaned || opt;
}

function sanitizeQuestionText(qText, correctOpt) {
  let cleanQ = qText;

  // 1. Remove garbled English words
  if (/\b(his|the|and|or|in|of|for|with)\b/i.test(cleanQ)) {
    cleanQ = cleanQ.replace(/\s+\b(his|the|and|or|in|of|for|with)\b\s+/gi, " ").trim();
    garbledTextFixed++;
  }

  if (!correctOpt || correctOpt.length < 2) return cleanQ;

  // 2. Specific capital city fixes
  const citiesWithSameName = ["تونس", "الجزائر", "الكويت", "جيبوتي", "بنما", "غواتيمالا", "المكسيك", "سان مارينو", "أندورا"];
  if (citiesWithSameName.includes(correctOpt)) {
    if (cleanQ.includes(`ما عاصمة ${correctOpt}`) || cleanQ.includes(`ما هي عاصمة ${correctOpt}`)) {
      if (correctOpt === "تونس") cleanQ = "ما هي عاصمة الجمهورية التونسية؟";
      else if (correctOpt === "الجزائر") cleanQ = "ما هي عاصمة الجمهورية الجزائرية الديمقراطية الشعبية؟";
      else if (correctOpt === "الكويت") cleanQ = "ما هي عاصمة دولة الكويت؟";
      else if (correctOpt === "جيبوتي") cleanQ = "ما هي عاصمة جمهورية جيبوتي؟";
      else if (correctOpt === "بنما") cleanQ = "ما هي عاصمة جمهورية بنما؟";
      else if (correctOpt === "غواتيمالا") cleanQ = "ما هي عاصمة جمهورية غواتيمالا؟";
      else if (correctOpt === "المكسيك") cleanQ = "ما هي عاصمة الولايات المتحدة المكسيكية؟";
      else if (correctOpt === "سان مارينو") cleanQ = "ما هي عاصمة جمهورية سان مارينو؟";
      else if (correctOpt === "أندورا") cleanQ = "ما هي عاصمة إمارة أندورا؟";
      answerSpoilFixed++;
      return cleanQ;
    }
  }

  // 3. Remove literal answer giveaways inside question text (e.g. "وتدعى Stray؟" -> "؟")
  // Check if correctOpt appears in qText (excluding trivial 1-2 char words, or logic puzzle math)
  const isLogicPuzzle = /إذا كان|إذا كانت|المركز الثاني|أطول من|أقصر من|أي كلمة لا تنتمي/i.test(cleanQ);

  if (!isLogicPuzzle && correctOpt.length >= 3) {
    // Escaped regex pattern for correctOpt
    const escapedOpt = correctOpt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const optRegex = new RegExp(`\\s*(?:الملقب بـ|وتدعى|المسماة|المعروفة بـ|المسمى|ويدعى|من|في)?\\s*['"«]?${escapedOpt}['"»]?`, "gi");

    if (optRegex.test(cleanQ)) {
      cleanQ = cleanQ.replace(optRegex, "").trim();
      // Clean double spaces or broken punctuation
      cleanQ = cleanQ.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟\s*\؟/g, "؟").trim();
      answerSpoilFixed++;
    }
  }

  return cleanQ;
}

const cleanedQuestions = questions.map((q) => {
  const origOptions = q.options || [];
  const cleanedOpts = origOptions.map((o) => cleanOptionText(o));

  if (JSON.stringify(origOptions) !== JSON.stringify(cleanedOpts)) {
    parenFixed++;
  }

  const correctOpt = cleanedOpts[q.correct_index] || "";
  const cleanedQText = sanitizeQuestionText(q.question_text || "", correctOpt);

  return {
    ...q,
    question_text: cleanedQText,
    options: cleanedOpts,
  };
});

console.log(`Fixes Applied:
- Options parenthetical English removed: ${parenFixed}
- Answer spoils fixed in question text: ${answerSpoilFixed}
- Garbled text words removed: ${garbledTextFixed}
`);

fs.writeFileSync(inputPath, JSON.stringify(cleanedQuestions, null, 2), "utf8");
console.log("Updated merged_questions_launch_ready.json successfully!");
