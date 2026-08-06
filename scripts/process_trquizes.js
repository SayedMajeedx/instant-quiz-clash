import fs from 'node:fs';
import path from 'node:path';

const TR_QUIZES_DIR = 'TrQuizes';
const SPLIT_QUIZES_DIR = path.join(TR_QUIZES_DIR, 'split_quizzes');

if (!fs.existsSync(SPLIT_QUIZES_DIR)) {
  fs.mkdirSync(SPLIT_QUIZES_DIR, { recursive: true });
}

const CATEGORY_SLUGS = {
  'الحيوانات': 'animals',
  'معلومات عامة': 'general',
  'جغرافيا': 'geography',
  'تاريخ': 'history',
  'علوم وطبيعة': 'science_nature',
  'الأجهزة والتقنيات': 'gadgets',
  'رياضيات': 'mathematics',
  'رياضة': 'sports',
  'مركبات وسيارات': 'vehicles'
};

const SPECIFIC_REPHRASINGS = {
  '9% فقط من الأسر في الولايات المتحدة كانت تمتلك جهاز تلفاز في عام:':
    'في أي عام كانت نسبة الأسر التي تمتلك جهاز تلفاز في الولايات المتحدة 9% فقط؟',
  'E = MC3':
    'هل معادلة تكافؤ المادة والطاقة لأينشتاين هي E = MC3؟',
  '111,111,111 × 111,111,111 = 12,345,678,987,654,321':
    'هل ناتج ضرب العدد 111,111,111 في نفسه يساوي 12,345,678,987,654,321؟'
};

/**
 * BiDi Text Formatting Function
 * Wraps LTR text/acronyms/decimals/symbols in LTR Isolates (\u2066 ... \u2069)
 * and appends Right-to-Left Mark (\u200f) before question marks when preceded by LTR tokens.
 */
function fixBidi(str) {
  if (typeof str !== 'string' || !str.trim()) return str;
  let text = str.trim();

  // 1. Strip any pre-existing Isolates or RLMs to allow idempotent processing
  text = text.replace(/[\u2066\u2069\u200f\u200e]/g, '');

  // 2. LTR regex to match English terms, acronyms, Latin scientific names, decimals, and math symbols
  // Examples: "Hyaenidae", "Ceratosaurus", "T-Rex", "3.1415", "π", "Spitfire L.F. Mk IX", "NFC", "L'Hôpital", "QWERTY"
  const ltrPattern = /([a-zA-Z0-9\u00C0-\u024F]+(?:[ '\.\-\/!][a-zA-Z0-9\u00C0-\u024F]+)*|[0-9]+\.[0-9]+|[π°°C°F]+)/g;

  text = text.replace(ltrPattern, (match) => {
    // Only wrap if match contains Latin letters or pi/decimal numbers
    if (/[a-zA-Z\u00C0-\u024Fπ]|\d+\.\d+/.test(match)) {
      return '\u2066' + match + '\u2069';
    }
    return match;
  });

  // 3. Ensure Arabic question mark '؟' is preceded by RLM (\u200f) if following LTR isolates, digits, symbols, or closing parens
  if (text.endsWith('?') || text.endsWith('؟')) {
    text = text.replace(/\?$/, '؟');
    text = text.replace(/([\u20690-9\)\s]+)؟$/, '$1\u200f؟');
  }

  return text;
}

/**
 * Chunk questions into array of subsets where each subset is between minSize (10) and maxSize (20).
 */
function chunkArray(items, minSize = 10, maxSize = 20) {
  const total = items.length;
  if (total <= maxSize) return [items];

  let numChunks = Math.ceil(total / maxSize);
  while (total / numChunks < minSize && numChunks > 1) {
    numChunks--;
  }

  const chunks = [];
  let startIndex = 0;
  for (let i = 0; i < numChunks; i++) {
    const remainingItems = total - startIndex;
    const remainingChunks = numChunks - i;
    const chunkSize = Math.min(maxSize, Math.ceil(remainingItems / remainingChunks));
    chunks.push(items.slice(startIndex, startIndex + chunkSize));
    startIndex += chunkSize;
  }
  return chunks;
}

// 1. Read all original source JSON files
const sourceFiles = fs.readdirSync(TR_QUIZES_DIR)
  .filter(f => f.endsWith('.json') && !f.includes('_quiz_'));

const categoryMap = {};

sourceFiles.forEach(f => {
  const filePath = path.join(TR_QUIZES_DIR, f);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.forEach((q) => {
    // Apply rephrasings if applicable
    let qText = q.question.trim();
    if (SPECIFIC_REPHRASINGS[qText]) {
      qText = SPECIFIC_REPHRASINGS[qText];
    }

    // Format BiDi for question text, correct_answer, and incorrect_answers
    const formattedQuestion = {
      type: q.type || 'multiple',
      difficulty: q.difficulty || 'easy',
      category: q.category || 'عام',
      question: fixBidi(qText),
      correct_answer: fixBidi(q.correct_answer),
      incorrect_answers: Array.isArray(q.incorrect_answers) ? q.incorrect_answers.map(ans => fixBidi(ans)) : []
    };

    const cat = formattedQuestion.category;
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(formattedQuestion);
  });
});

console.log('--- Processing Categories and Generating Quiz Files ---');

let totalQuizFiles = 0;
let totalQuestionsProcessed = 0;

Object.keys(categoryMap).forEach(cat => {
  const questions = categoryMap[cat];
  const slug = CATEGORY_SLUGS[cat] || 'quiz';
  const chunks = chunkArray(questions, 10, 20);

  console.log(`Category: "${cat}" (${slug}) | Total Questions: ${questions.length} | Split into ${chunks.length} files`);

  chunks.forEach((chunk, idx) => {
    const filename = `${slug}_quiz_${idx + 1}.json`;
    const targetPathInTrQuizes = path.join(TR_QUIZES_DIR, filename);
    const targetPathInSplitFolder = path.join(SPLIT_QUIZES_DIR, filename);

    const jsonContent = JSON.stringify(chunk, null, 4);

    // Save in TrQuizes directory and split_quizzes subfolder
    fs.writeFileSync(targetPathInTrQuizes, jsonContent, 'utf8');
    fs.writeFileSync(targetPathInSplitFolder, jsonContent, 'utf8');

    totalQuizFiles++;
    totalQuestionsProcessed += chunk.length;

    console.log(`  └─ Created ${filename}: ${chunk.length} questions`);
  });
});

console.log('\n========================================');
console.log(`SUMMARY: Generated ${totalQuizFiles} quiz files containing a total of ${totalQuestionsProcessed} questions.`);
console.log('========================================');
