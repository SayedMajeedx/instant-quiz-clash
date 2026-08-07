import fs from 'node:fs';
import path from 'node:path';

/**
 * BiDi Text Formatting Function
 */
function fixBidi(str) {
  if (typeof str !== 'string' || !str.trim()) return str;
  let text = str.trim();

  // Strip existing isolates
  text = text.replace(/[\u2066\u2069\u200f\u200e]/g, '');

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

/**
 * Subcategory & Topic Classifier
 */
function classifyQuestion(q, category) {
  const text = (q.question_text || q.question || '').toLowerCase();
  const expl = (q.explanation || '').toLowerCase();
  const full = text + ' ' + expl;

  if (category === 'سلسلة مسابقات أهل البيت (ع)') {
    if (/شاعر|شعراء|قصيد|شعر|كميت|دعبل|حميري|حسان/i.test(full)) return 'شعراء أهل البيت والقصائد الخالدة';
    if (/علي بن ابي طالب|أمير المؤمنين|نهج البلاغة|خيبر|غدير/i.test(full)) return 'حِكَم وسيرة أمير المؤمنين علي (ع)';
    if (/فاطمة|الزهراء|فدك/i.test(full)) return 'سيرة السيدة فاطمة الزهراء (ع)';
    if (/حسين|كربلاء|عاشوراء|طف|طين|شهداء/i.test(full)) return 'النهضة الحسينية ومعركة كربلاء';
    if (/حسن|مجتبى|صادق|باقر|كاظم|رضا|جواد|هادي|عسكري|مهدي|منتظر/i.test(full)) return 'سيرة الأئمة المعصومين (ع)';
    return 'السيرة النبوية والعترة الطاهرة';
  }

  if (category === 'تاريخ') {
    if (/بحرين|دلمون|تايلوس|أوال|قلعة البحرين|منامة|محرق|رفاع/i.test(full)) return 'حضارة دلمون وتاريخ البحرين';
    if (/فراعنة|مصر القديمة|سومر|بابل|أشور|إغريق|رومان/i.test(full)) return 'الحضارات القديمة والآثار التاريخية';
    if (/أموي|عباسي|عثماني|خلافة|أندلس|فتح/i.test(full)) return 'محطات وسجلات التاريخ الإسلامي';
    if (/حرب عالمية|ثورة|نابليون|هتلر|سوفيتي|جدار برلين/i.test(full)) return 'الحروب والصراعات العالمية الحديثة';
    return 'شخصيات وأحداث تاريخية بارزة';
  }

  if (category === 'جغرافيا') {
    if (/عاصمة|عواصم|حدود|دولة|جمهورية|ولاية/i.test(full)) return 'عواصم وخرائط دول العالم';
    if (/جبل|قمة|صحراء|نهر|محيط|بحر|جزيرة|بركان/i.test(full)) return 'تضاريس وعجائب الطبيعة الجغرافية';
    if (/مناخ|بيئة|غابة|شلال|بحيرة/i.test(full)) return 'المسطحات المائية والمناخ العالمي';
    return 'الجغرافيا العامة وحقائق الدول';
  }

  if (category === 'علوم وطب') {
    if (/حيوان|طائر|سمك|حشرة|سلالة|افتراس|ثدييات/i.test(full)) return 'عالم الحيوانات والتنوع الحيوي';
    if (/قلب|دم|عظم|خلية|دماغ|عضلة|مرض|جسم|فيتامين/i.test(full)) return 'تشريح جسم الإنسان والطب';
    if (/كوكب|شمس|قمر|مجرة|فضاء|ثقب اسود|جاذبية|ناسا/i.test(full)) return 'الفلك وعلوم الفضاء الخارجي';
    if (/عنصر|ذرة|تفاعل|حمض|مادة|جزئ|غاز/i.test(full)) return 'عالم الكيمياء والفيزياء المذهل';
    return 'العلوم الطبيعية والاكتشافات';
  }

  if (category === 'تكنولوجيا') {
    if (/سيارة|محرك|سرعة|فيراري|تويوتا|مركبة|طائرة/i.test(full)) return 'عالم السيارات والمركبات الهندسية';
    if (/كمبيوتر|حاسوب|برمجة|انترنت|معالج|ذاكرة|شاشة|هاتف|آيفون/i.test(full)) return 'الكمبيوتر والتقنيات الرقمية';
    if (/اختراع|بروتوكول|طاقة|كهرباء|روبوت/i.test(full)) return 'الابتكارات والأجهزة الحديثة';
    return 'التقنية والتطور التكنولوجي';
  }

  if (category === 'أنمي') {
    if (/ون بيس|قراصنة|لوفي|غوكو|دراجون بول|ناروتو|بوروتو/i.test(full)) return 'أساطير أنمي الشونين والمغامرات';
    if (/هجوم على العمالقة|إيرين|ليفاي|دفتر الموت|نيفرلاند/i.test(full)) return 'أنمي الغموض والإثارة الحديث';
    return 'عالم الأنمي والكرتون الكلاسيكي';
  }

  if (category === 'رياضة') {
    if (/كرة قدم|دوري|كأس العالم|مدريد|برشلونة|مارادونا|ميسي|رونالدو/i.test(full)) return 'تاريخ كرة القدم والدوريات الكبرى';
    if (/أولمبياد|ركض|سباق|كرة سلة|ملاكمة|تنس|سباحة/i.test(full)) return 'الألعاب الأولمبية والرياضات العالمية';
    return 'سجلات الرياضات والأبطال';
  }

  if (category === 'إسلاميات') {
    if (/قرآن|سورة|آية|تفسير|تلاوة|تجويد/i.test(full)) return 'روائع علوم القرآن الكريم والتفسير';
    if (/صلاة|صوم|حج|زكاة|فتوى|حلال|حرام|وضوء|فقه/i.test(full)) return 'الفقه والأحكام الشرعية';
    return 'السيرة والثقافة الإسلامية';
  }

  if (category === 'رياضيات') {
    if (/معادلة|ضرب|قسمة|نسبة|رقم|حساب|باي|مساحة/i.test(full)) return 'تحدي المعادلات والرياضيات';
    return 'المنطق والأرقام الهندسية';
  }

  if (category === 'ألغاز ومنطق') {
    return 'ألغاز الذكاء والتفكير المنطقي';
  }

  if (category === 'لغة عربية وأدب') {
    return 'روائع الأدب واللغة العربية';
  }

  return 'موسوعة المعارف والمعلومات العامة';
}

/**
 * Generate Engaging Arabic Title for Subcategory Chunk
 */
function generateQuizTitle(category, subcategory, chunkIndex, totalChunksInSubcat) {
  const partSuffix = totalChunksInSubcat > 1 ? ` — الجزء ${chunkIndex + 1}` : '';

  const TITLE_MAP = {
    'شعراء أهل البيت والقصائد الخالدة': 'اختبار: قصائد ومدائح شعراء أهل البيت (ع)',
    'حِكَم وسيرة أمير المؤمنين علي (ع)': 'اختبار: حِكَم وسيرة أمير المؤمنين علي (ع)',
    'سيرة السيدة فاطمة الزهراء (ع)': 'اختبار: سيرة وسيدة النساء فاطمة الزهراء (ع)',
    'النهضة الحسينية ومعركة كربلاء': 'اختبار: النهضة الحسينية ومعركة كربلاء',
    'سيرة الأئمة المعصومين (ع)': 'اختبار: سيرة وأحداث الأئمة المعصومين (ع)',
    'السيرة النبوية والعترة الطاهرة': 'اختبار: السيرة النبوية والعترة الطاهرة',

    'حضارة دلمون وتاريخ البحرين': 'اختبار: أسرار حضارة دلمون وآثار البحرين',
    'الحضارات القديمة والآثار التاريخية': 'اختبار: عجائب الحضارات الآثار القديمة',
    'محطات وسجلات التاريخ الإسلامي': 'اختبار: صناع ومحطات التاريخ الإسلامي',
    'الحروب والصراعات العالمية الحديثة': 'اختبار: معارك وحروب العالم الحديث',
    'شخصيات وأحداث تاريخية بارزة': 'اختبار: شخصيات وأحداث غيرت التاريخ',

    'عواصم وخرائط دول العالم': 'اختبار: دليل عواصم وخرائط دول العالم',
    'تضاريس وعجائب الطبيعة الجغرافية': 'اختبار: تضاريس الأرض وعجائب الطبيعة',
    'المسطحات المائية والمناخ العالمي': 'اختبار: أسرار البحار والمناخ العالمي',
    'الجغرافيا العامة وحقائق الدول': 'اختبار: الموسوعة الجغرافية وحقائق الدول',

    'عالم الحيوانات والتنوع الحيوي': 'اختبار: أسرار عالم الحيوان والتنوع الحيوي',
    'تشريح جسم الإنسان والطب': 'اختبار: خفايا جسم الإنسان وعجائب الطب',
    'الفلك وعلوم الفضاء الخارجي': 'اختبار: رحلة إلى أسرار الفضاء والكواكب',
    'عالم الكيمياء والفيزياء المذهل': 'اختبار: الكيمياء والفيزياء والتفاعلات',
    'العلوم الطبيعية والاكتشافات': 'اختبار: الاكتشافات والعلوم الطبيعية',

    'عالم السيارات والمركبات الهندسية': 'اختبار: عالم السيارات والمركبات الهندسية',
    'الكمبيوتر والتقنيات الرقمية': 'اختبار: أسرار البرمجة والتقنيات الرقمية',
    'الابتكارات والأجهزة الحديثة': 'اختبار: الأجهزة الذكية والابتكارات الحديثة',
    'التقنية والتطور التكنولوجي': 'اختبار: معالم التقنية والتطور التكنولوجي',

    'أساطير أنمي الشونين والمغامرات': 'اختبار: أساطير أنمي الشونين والمغامرات',
    'أنمي الغموض والإثارة الحديث': 'اختبار: خبراء أنمي الغموض والإثارة',
    'عالم الأنمي والكرتون الكلاسيكي': 'اختبار: عالم الأنمي والكرتون الكلاسيكي',

    'تاريخ كرة القدم والدوريات الكبرى': 'اختبار: تاريخ كرة القدم والدوريات الكبرى',
    'الألعاب الأولمبية والرياضات العالمية': 'اختبار: سجال الألعاب الأولمبية والرياضات',
    'سجلات الرياضات والأبطال': 'اختبار: موسوعة الرياضات والأبطال',

    'روائع علوم القرآن الكريم والتفسير': 'اختبار: علوم القرآن الكريم والتفسير',
    'الفقه والأحكام الشرعية': 'اختبار: المسائل الفقهية والأحكام الشرعية',
    'السيرة والثقافة الإسلامية': 'اختبار: معالم الثقافة والسيرة الإسلامية',

    'تحدي المعادلات والرياضيات': 'اختبار: تحدي معادلات الرياضيات والأرقام',
    'المنطق والأرقام الهندسية': 'اختبار: ألغاز المنطق والهندسة الحسابية',

    'ألغاز الذكاء والتفكير المنطقي': 'اختبار: ألغاز الذكاء والتفكير المنطقي',
    'روائع الأدب واللغة العربية': 'اختبار: روائع اللغة العربية والأدب الخالد',
    'موسوعة المعارف والمعلومات العامة': 'اختبار: موسوعة المعارف والمعلومات العامة'
  };

  const baseTitle = TITLE_MAP[subcategory] || `اختبار: ${subcategory}`;
  return `${baseTitle}${partSuffix}`;
}

// Main Reorganization Logic
console.log('=== STARTING FULL DATABASE AUDIT & RE-ORGANIZATION ===');

const libFile = 'src/lib/quiz-library.ts';
const content = fs.readFileSync(libFile, 'utf8');
const match = content.match(/export const QUIZ_LIBRARY: LibraryQuiz\[\] = (\[[\s\S]*\]);/);

if (!match) {
  console.error('Could not find QUIZ_LIBRARY in src/lib/quiz-library.ts');
  process.exit(1);
}

const existingLibrary = JSON.parse(match[1]);
console.log(`Loaded ${existingLibrary.length} quizzes containing questions.`);

// 1. DEDUPLICATION: Extract all questions and remove duplicates
const seenQuestionsMap = new Map();
let totalOriginalQuestions = 0;
let duplicatesRemoved = 0;

existingLibrary.forEach((quiz) => {
  const cat = quiz.category || 'عام';
  quiz.questions.forEach((q) => {
    totalOriginalQuestions++;
    // Normalize question text
    const normKey = (q.question_text || q.question || '').trim().toLowerCase().replace(/[\u2066\u2069\u200f\u200e]/g, '').replace(/\s+/g, ' ');

    if (!seenQuestionsMap.has(normKey)) {
      seenQuestionsMap.set(normKey, {
        category: cat,
        question_text: fixBidi(q.question_text || q.question),
        options: Array.isArray(q.options) ? q.options.map(opt => fixBidi(opt)) : [],
        correct_index: typeof q.correct_index === 'number' ? q.correct_index : 0,
        time_limit_seconds: q.time_limit_seconds || 20,
        question_type: q.question_type || (q.options?.length === 2 ? 'boolean' : 'multi'),
        explanation: q.explanation ? fixBidi(q.explanation) : null,
        difficulty: q.difficulty || q.quiz_difficulty || 'medium',
        image_url: q.image_url || null
      });
    } else {
      duplicatesRemoved++;
    }
  });
});

console.log(`Deduplication finished: Total Questions: ${totalOriginalQuestions} | Unique Questions: ${seenQuestionsMap.size} | Duplicates Removed: ${duplicatesRemoved}`);

// 2. SUB-CATEGORIZATION: Group unique questions by Category -> Subcategory
const categoryHierarchy = {};

seenQuestionsMap.forEach((qObj) => {
  const cat = qObj.category;
  const subcat = classifyQuestion(qObj, cat);
  qObj.subcategory = subcat;

  if (!categoryHierarchy[cat]) {
    categoryHierarchy[cat] = {};
  }
  if (!categoryHierarchy[cat][subcat]) {
    categoryHierarchy[cat][subcat] = [];
  }
  categoryHierarchy[cat][subcat].push(qObj);
});

// 3. INTELLIGENT RETITLING & RE-CHUNKING (10–20 Questions per Quiz)
const newReorganizedLibrary = [];
let totalNewQuizzes = 0;
let totalProcessedQuestions = 0;

const summaryBreakdown = {};

Object.keys(categoryHierarchy).sort().forEach((cat) => {
  summaryBreakdown[cat] = [];
  const subcats = categoryHierarchy[cat];

  Object.keys(subcats).sort().forEach((subcat) => {
    const questionsList = subcats[subcat];
    const chunks = chunkArray(questionsList, 10, 20);

    chunks.forEach((chunk, chunkIdx) => {
      const quizTitle = generateQuizTitle(cat, subcat, chunkIdx, chunks.length);
      const slugCat = cat.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      const slugSub = subcat.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      const quizId = `lib-reorg-${totalNewQuizzes + 1}`;

      const formattedQuestions = chunk.map((q, orderIdx) => {
        return {
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          time_limit_seconds: q.time_limit_seconds,
          order_index: orderIdx,
          image_url: q.image_url,
          question_type: q.question_type,
          explanation: q.explanation,
          difficulty: q.difficulty,
          subcategory: subcat
        };
      });

      const newQuiz = {
        id: quizId,
        user_id: 'system',
        title: quizTitle,
        created_at: '2026-08-07T00:00:00.000Z',
        is_public: true,
        category: cat,
        language: 'ar',
        quiz_difficulty: 'standard',
        archived: false,
        launch_enabled: true,
        questions: formattedQuestions
      };

      newReorganizedLibrary.push(newQuiz);
      totalNewQuizzes++;
      totalProcessedQuestions += formattedQuestions.length;

      summaryBreakdown[cat].push({
        title: quizTitle,
        subcategory: subcat,
        questionCount: formattedQuestions.length
      });
    });
  });
});

console.log(`\nRe-chunking complete: Generated ${totalNewQuizzes} quizzes with descriptive titles containing ${totalProcessedQuestions} questions.`);

// 4. SAVE TO src/lib/quiz-library.ts
const updatedFileContent = `import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: string | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: (Omit<Question, "id" | "quiz_id"> & { id?: string; quiz_id?: string; [key: string]: any })[];
};

// Reorganized & Deduplicated Quiz Library with Subcategories and Descriptive Arabic Titles
export const QUIZ_LIBRARY: LibraryQuiz[] = ${JSON.stringify(newReorganizedLibrary, null, 2)};
`;

fs.writeFileSync(libFile, updatedFileContent, 'utf8');
console.log(`Updated ${libFile} successfully!`);

// Print Breakdown
console.log('\n=== RE-ORGANIZATION BREAKDOWN SUMMARY ===');
Object.keys(summaryBreakdown).forEach(cat => {
  console.log(`\n📌 Main Category: "${cat}" (${summaryBreakdown[cat].length} Quizzes)`);
  summaryBreakdown[cat].forEach(q => {
    console.log(`  └─ [${q.subcategory}] "${q.title}" (${q.questionCount} Qs)`);
  });
});
