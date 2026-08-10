const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync(path.join(__dirname, 'raw_personalities_quizzes.txt'), 'utf8');

// Quiz metadata map based on titles found in text
const quizTitlesMap = [
  { rawTitle: "سيرة النبي محمد ﷺ", title: "سيرة النبي محمد ﷺ", id: "bh-person-prophet-muhammad", subcategory: "سيرة النبي محمد ﷺ" },
  { rawTitle: "سيرة الإمام علي عليه السلام", title: "سيرة الإمام علي (ع)", id: "bh-person-imam-ali", subcategory: "سيرة الإمام علي (ع)" },
  { rawTitle: "سيرة السيدة فاطمة الزهراء عليها السلام", title: "سيرة السيدة فاطمة الزهراء (ع)", id: "bh-person-fatima-al-zahra", subcategory: "سيرة السيدة فاطمة الزهراء (ع)" },
  { rawTitle: "سيرة الإمام الحسن المجتبى عليه السلام", title: "سيرة الإمام الحسن المجتبى (ع)", id: "bh-person-imam-hasan", subcategory: "سيرة الإمام الحسن المجتبى (ع)" },
  { rawTitle: "سيرة الإمام الحسين عليه السلام", title: "سيرة الإمام الحسين (ع)", id: "bh-person-imam-husayn", subcategory: "سيرة الإمام الحسين (ع)" },
  { rawTitle: "سيرة الإمام علي بن الحسين زين العابدين عليه السلام", title: "سيرة الإمام علي بن الحسين زين العابدين (ع)", id: "bh-person-imam-sajjad", subcategory: "سيرة الإمام علي بن الحسين (ع)" },
  { rawTitle: "سيرة الإمام محمد الباقر عليه السلام", title: "سيرة الإمام محمد الباقر (ع)", id: "bh-person-imam-baqir", subcategory: "سيرة الإمام محمد الباقر (ع)" },
  { rawTitle: "سيرة الإمام جعفر الصادق عليه السلام", title: "سيرة الإمام جعفر الصادق (ع)", id: "bh-person-imam-sadiq", subcategory: "سيرة الإمام جعفر الصادق (ع)" },
  { rawTitle: "سيرة الإمام موسى بن جعفر الكاظم عليه السلام", title: "سيرة الإمام موسى بن جعفر الكاظم (ع)", id: "bh-person-imam-kadhim", subcategory: "سيرة الإمام موسى بن جعفر (ع)" },
  { rawTitle: "سيرة الإمام علي بن موسى الرضا عليه السلام", title: "سيرة الإمام علي بن موسى الرضا (ع)", id: "bh-person-imam-rida", subcategory: "سيرة الإمام علي بن موسى الرضا (ع)" },
  { rawTitle: "سيرة الإمام محمد بن علي الجواد عليه السلام", title: "سيرة الإمام محمد بن علي الجواد (ع)", id: "bh-person-imam-jawad", subcategory: "سيرة الإمام محمد بن علي الجواد (ع)" },
  { rawTitle: "سيرة الإمام علي بن محمد الهادي عليه السلام", title: "سيرة الإمام علي بن محمد الهادي (ع)", id: "bh-person-imam-hadi", subcategory: "سيرة الإمام علي بن محمد الهادي (ع)" },
  { rawTitle: "سيرة الإمام الحسن العسكري عليه السلام", title: "سيرة الإمام الحسن العسكري (ع)", id: "bh-person-imam-askari", subcategory: "سيرة الإمام الحسن العسكري (ع)" },
  { rawTitle: "سيرة الإمام محمد بن الحسن المهدي عجل الله فرجه", title: "سيرة الإمام محمد بن الحسن المهدي (عج)", id: "bh-person-imam-mahdi", subcategory: "سيرة الإمام محمد بن الحسن المهدي (عج)" },
  { rawTitle: "سيرة العباس بن علي عليه السلام", title: "سيرة العباس بن علي (ع)", id: "bh-person-al-abbas", subcategory: "سيرة العباس بن علي (ع)" },
  { rawTitle: "سيرة السيدة زينب بنت علي عليها السلام", title: "سيرة السيدة زينب بنت علي (ع)", id: "bh-person-sayyida-zainab", subcategory: "سيرة السيدة زينب بنت علي (ع)" }
];

// Helper to shuffle array with seed/randomness and ensure smooth distribution
function shuffleWithCorrectIndex(options, correctOptionText) {
  let indices = [0, 1, 2, 3];
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const shuffledOptions = indices.map(idx => options[idx]);
  const newCorrectIndex = shuffledOptions.findIndex(opt => opt.trim() === correctOptionText.trim());

  if (newCorrectIndex === -1) {
    console.error(`ERROR matching choice: "${correctOptionText}" in options:`, options);
  }

  return {
    options: shuffledOptions,
    correct_index: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

// Split text by quiz sections
// First quiz doesn't have an explicit title at the top in user text, but we know it starts at question 1 "في أي عام وُلد النبي محمد ﷺ؟"
// Let's parse blocks by matching "سيرة ..." headings.

const lines = fileContent.split('\n');
const quizBlocks = [];
let currentTitle = "سيرة النبي محمد ﷺ";
let currentLines = [];

for (let line of lines) {
  const trimmed = line.trim();
  const matchedQuiz = quizTitlesMap.find(q => trimmed === q.rawTitle || trimmed.startsWith(q.rawTitle));
  if (matchedQuiz && currentLines.length > 0) {
    quizBlocks.push({ title: currentTitle, lines: currentLines });
    currentTitle = matchedQuiz.rawTitle;
    currentLines = [];
  } else {
    currentLines.push(line);
  }
}
if (currentLines.length > 0) {
  quizBlocks.push({ title: currentTitle, lines: currentLines });
}

console.log(`Found ${quizBlocks.length} quiz blocks.`);

const parsedQuizzes = [];

quizBlocks.forEach((block, quizIdx) => {
  const meta = quizTitlesMap.find(q => q.rawTitle === block.title) || {
    title: block.title,
    id: `bh-person-quiz-${quizIdx + 1}`,
    subcategory: block.title
  };

  const blockText = block.lines.join('\n');
  // Match question blocks: 1. Question...
  const questionRegex = /(\d+)\.\s*([^\n]+)[\s\S]*?أ\.\s*([^\n]+)\n\s*ب\.\s*([^\n]+)\n\s*ج\.\s*([^\n]+)\n\s*د\.\s*([^\n]+)[\s\S]*?الإجابة الصحيحة:\s*([^\n]+)\n[\s\S]*?التوضيح:\s*([^\n]+)/g;

  const questions = [];
  let match;

  while ((match = questionRegex.exec(blockText)) !== null) {
    const qNum = match[1];
    const qText = match[2].trim();
    const optA = match[3].trim();
    const optB = match[4].trim();
    const optC = match[5].trim();
    const optD = match[6].trim();
    const rawAnswer = match[7].trim(); // e.g., "أ. عام الفيل" or "د. 17 ربيع الأول"
    const explanation = match[8].trim();

    // Extract option text from rawAnswer e.g., "أ. عام الفيل" -> "عام الفيل"
    let correctText = rawAnswer.replace(/^[أبجد]\.\s*/, '').trim();

    const rawOptions = [optA, optB, optC, optD];

    // Check if correctText is matching one of rawOptions
    let matchedOpt = rawOptions.find(o => o.trim() === correctText);
    if (!matchedOpt) {
      // Try letter fallback e.g. "أ" -> index 0, "ب" -> index 1, etc.
      const letterMatch = rawAnswer.match(/^([أبجد])\./);
      if (letterMatch) {
        const letter = letterMatch[1];
        const letterMap = { 'أ': 0, 'ب': 1, 'ج': 2, 'د': 3 };
        const idx = letterMap[letter];
        if (idx !== undefined) {
          correctText = rawOptions[idx];
        }
      }
    }

    const shuffled = shuffleWithCorrectIndex(rawOptions, correctText);

    questions.push({
      id: `${meta.id}-q${questions.length + 1}`,
      question_text: qText,
      options: shuffled.options,
      correct_index: shuffled.correct_index,
      time_limit_seconds: 20,
      question_type: "multi",
      explanation: explanation,
      subcategory: meta.subcategory
    });
  }

  console.log(`Quiz "${meta.title}": Parsed ${questions.length} questions.`);

  parsedQuizzes.push({
    id: meta.id,
    title: meta.title,
    category: "إسلاميات",
    subcategory: meta.subcategory,
    quiz_difficulty: "standard",
    language: "ar",
    is_public: true,
    questions: questions
  });
});

fs.writeFileSync(path.join(__dirname, 'output_quizzes.json'), JSON.stringify(parsedQuizzes, null, 2), 'utf8');
console.log('Successfully wrote output_quizzes.json');
