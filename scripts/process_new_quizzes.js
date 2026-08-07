import fs from 'node:fs';
import path from 'node:path';

const NEW_QUIZZES_DIR = 'new_quizzes';
const PROCESSED_DIR = path.join(NEW_QUIZZES_DIR, 'processed');

if (fs.existsSync(PROCESSED_DIR)) {
  fs.rmSync(PROCESSED_DIR, { recursive: true, force: true });
}
fs.mkdirSync(PROCESSED_DIR, { recursive: true });

/**
 * BiDi Text Formatting Function
 * Wraps LTR text/acronyms/decimals/symbols in LTR Isolates (\u2066 ... \u2069)
 * and appends Right-to-Left Mark (\u200f) before question marks when preceded by LTR tokens.
 */
function fixBidi(str) {
  if (typeof str !== 'string' || !str.trim()) return str;
  let text = str.trim();

  // Strip existing isolates
  text = text.replace(/[\u2066\u2069\u200f\u200e]/g, '');

  // LTR regex for English terms, acronyms, Latin names, decimals, symbols
  const ltrPattern = /([a-zA-Z0-9\u00C0-\u024F]+(?:[ '\.\-\/!][a-zA-Z0-9\u00C0-\u024F]+)*|[0-9]+\.[0-9]+|[π°°C°F]+)/g;

  text = text.replace(ltrPattern, (match) => {
    if (/[a-zA-Z\u00C0-\u024Fπ]|\d+\.\d+/.test(match)) {
      return '\u2066' + match + '\u2069';
    }
    return match;
  });

  if (text.endsWith('?') || text.endsWith('؟')) {
    text = text.replace(/\?$/, '؟');
    text = text.replace(/([\u20690-9\)\s]+)؟$/, '$1\u200f؟');
  }

  return text;
}

/**
 * Chunk questions into array of subsets where each subset is strictly between minSize (10) and maxSize (20).
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

const CATEGORY_MAPPINGS = {
  'شعراء أهل البيت والشعر العربي': { category: 'سلسلة مسابقات أهل البيت (ع)', slug: 'ahl_bayt_poets', title: 'شعراء أهل البيت والشعر العربي' },
  'شعراء أهل البيت': { category: 'سلسلة مسابقات أهل البيت (ع)', slug: 'ahl_bayt_poets', title: 'شعراء أهل البيت والشعر العربي' },
  'الفقه الشيعي الإمامي': { category: 'إسلاميات', slug: 'islamic_jurisprudence', title: 'الفقه والأحكام الإسلامية' },
  'الفقه والأحكام الشيعية': { category: 'إسلاميات', slug: 'islamic_jurisprudence', title: 'الفقه والأحكام الإسلامية' },
  'تاريخ وتراث البحرين': { category: 'تاريخ', slug: 'bahrain_history', title: 'تاريخ وتراث البحرين' },
  'الأنمي والكرتون': { category: 'أنمي', slug: 'anime_cartoons', title: 'عالم الأنمي والكرتون' },
  'ثقافة': { category: 'معلومات عامة', slug: 'culture_general', title: 'ثقافة ومعارف عامة' },
  'معالم': { category: 'جغرافيا', slug: 'landmarks_capitals', title: 'معالم وعواصم العالم' },
  'شخصيات': { category: 'تاريخ', slug: 'world_history', title: 'التاريخ والحضارات' },
  'تاريخ': { category: 'تاريخ', slug: 'world_history', title: 'التاريخ والحضارات' },
  'جغرافيا': { category: 'جغرافيا', slug: 'world_geography', title: 'جغرافيا العالم والدول' }
};

// 1. Read source files
const sourceFiles = fs.readdirSync(NEW_QUIZZES_DIR)
  .filter(f => f.endsWith('.json') && !f.includes('processed'));

let allRawQuestions = [];
sourceFiles.forEach(f => {
  const filePath = path.join(NEW_QUIZZES_DIR, f);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (Array.isArray(data)) {
    allRawQuestions.push(...data);
  }
});

console.log(`Loaded ${allRawQuestions.length} raw questions from ${sourceFiles.length} files.`);

// 2. Group questions by target category slug
const categoryGroups = {};

allRawQuestions.forEach(q => {
  const rawCat = (q.category || 'عام').trim();
  const mapping = CATEGORY_MAPPINGS[rawCat] || {
    category: rawCat,
    slug: 'general',
    title: rawCat
  };

  const key = mapping.slug;
  if (!categoryGroups[key]) {
    categoryGroups[key] = {
      meta: mapping,
      questions: []
    };
  }
  categoryGroups[key].questions.push(q);
});

// 3. Process, format, chunk, and save
let totalQuizzesGenerated = 0;
let totalQuestionsProcessed = 0;

Object.keys(categoryGroups).forEach(groupKey => {
  const group = categoryGroups[groupKey];
  const meta = group.meta;
  const questions = group.questions;

  const chunks = chunkArray(questions, 10, 20);

  chunks.forEach((chunk, chunkIdx) => {
    const partNum = chunkIdx + 1;
    const quizId = `lib-new-${meta.slug}-${partNum}`;
    const quizTitle = `${meta.title} — الجزء ${partNum}`;

    const formattedQuestions = chunk.map((q, qIdx) => {
      const qText = fixBidi(q.question);
      const explanationText = q.explanation ? fixBidi(q.explanation) : null;
      const isBoolean = q.type === 'true_false' || (Array.isArray(q.options) && q.options.length === 2);

      let options = [];
      let correctIndex = 0;

      if (isBoolean) {
        options = ['صح', 'خطأ'];
        const isTrue = q.correct_answer === 'صح' || q.correct_answer === 'صحيح' || q.correct_answer === 'True' || q.correct_answer === 'true';
        correctIndex = isTrue ? 0 : 1;
      } else {
        const rawOpts = Array.isArray(q.options) ? q.options : [];
        options = rawOpts.map(opt => fixBidi(opt));
        const formattedCorrect = fixBidi(q.correct_answer);
        
        let foundIdx = options.findIndex(opt => opt === formattedCorrect || opt.trim() === formattedCorrect.trim());
        if (foundIdx === -1) {
          foundIdx = 0;
        }
        correctIndex = foundIdx;
      }

      return {
        question_text: qText,
        options: options,
        correct_index: correctIndex,
        time_limit_seconds: 25,
        order_index: qIdx,
        image_url: null,
        question_type: isBoolean ? 'boolean' : 'multi',
        explanation: explanationText,
        difficulty: q.difficulty || 'medium'
      };
    });

    const quizObj = {
      id: quizId,
      user_id: 'system',
      title: quizTitle,
      created_at: '2026-08-07T00:00:00.000Z',
      is_public: true,
      category: meta.category,
      language: 'ar',
      quiz_difficulty: 'standard',
      archived: false,
      launch_enabled: true,
      questions: formattedQuestions
    };

    const fileName = `${meta.slug}_quiz_${partNum}.json`;
    const outputPath = path.join(PROCESSED_DIR, fileName);

    fs.writeFileSync(outputPath, JSON.stringify(quizObj, null, 2), 'utf8');

    totalQuizzesGenerated++;
    totalQuestionsProcessed += formattedQuestions.length;

    console.log(`Generated [${fileName}]: "${quizTitle}" (${formattedQuestions.length} questions, Category: "${meta.category}")`);
  });
});

console.log(`\nSUCCESS: Processed ${totalQuestionsProcessed} questions into ${totalQuizzesGenerated} quiz files in ${PROCESSED_DIR}.`);
