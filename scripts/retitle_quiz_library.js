import fs from 'node:fs';

const libFile = 'src/lib/quiz-library.ts';
const content = fs.readFileSync(libFile, 'utf8');
const match = content.match(/export const QUIZ_LIBRARY: LibraryQuiz\[\] = (\[[\s\S]*\]);/);

if (!match) {
  console.error('Could not find QUIZ_LIBRARY in src/lib/quiz-library.ts');
  process.exit(1);
}

const library = JSON.parse(match[1]);
console.log(`Analyzing ${library.length} quizzes for specific titling...`);

const THEMATIC_DIFFERENTIATORS = [
  'المفاهيم والحقائق',
  'الشخصيات والمحطات',
  'الخفايا والأسرار',
  'التحدي والخبرة',
  'المستويات المتقدمة',
  'المرجع الشامل',
  'الموسوعة المكتملة',
  'تحدي المحترفين',
  'السجلات الخالدة',
  'الرؤية والتحليل',
  'المحطات التاريخية',
  'الرموز والأساطير',
  'الدروس والعبر',
  'الحقائق النادرة',
  'روائع التراث',
  'التحدي الفكري',
  'الإنجازات الكبرى',
  'الأرقام والسجلات',
  'العلوم والمعارف',
  'البصمات الخالدة',
  'أفق المعرفة',
  'أسرار العلوم',
  'تحدي العمالقة',
  'الفرسان والأبطال',
  'نخبة الثقافة',
  'عالم الابتكار',
  'المسيرة التاريخية',
  'جولات المعرفة',
  'اللقطات الحاسمة',
  'دروب الثقافة'
];

/**
 * Generate a specific, unique topic title for a quiz based on its question content and category.
 */
function generateSpecificTitle(quiz, index, usedTitlesSet) {
  const cat = quiz.category || 'عام';
  const questions = quiz.questions || [];
  
  // Combine all question texts, options, explanations, and subcategories
  const fullText = questions.map(q => 
    (q.question_text || '') + ' ' + (q.explanation || '') + ' ' + (q.options || []).join(' ') + ' ' + (q.subcategory || '')
  ).join(' ').toLowerCase();

  let candidateTitle = '';

  // 1. AHL AL-BAYT (ع)
  if (cat === 'سلسلة مسابقات أهل البيت (ع)') {
    if (/شاعر|شعراء|قصيد|شعر|كميت|دعبل|حميري|حسان/i.test(fullText)) {
      if (/كميت|دعبل/i.test(fullText)) candidateTitle = 'شعراء أهل البيت: قصائد الكميت ودعبل الخزاعي';
      else if (/حميري|غدير/i.test(fullText)) candidateTitle = 'مدائح أهل البيت: روائع السيد الحميري والشعر';
      else candidateTitle = 'شعراء أهل البيت والقصائد الخالدة';
    } else if (/علي بن ابي طالب|أمير المؤمنين|نهج البلاغة|خيبر|غدير|ولادة|كعبة/i.test(fullText)) {
      if (/خيبر|ولادة|كعبة|بدر/i.test(fullText)) candidateTitle = 'سيرة الإمام علي (ع): الولادة والنشأة وغزوة خيبر';
      else if (/نهج البلاغة|حكم|خطب/i.test(fullText)) candidateTitle = 'سيرة الإمام علي (ع): الخلافة ونهج البلاغة';
      else candidateTitle = 'سيرة وشجاعة أمير المؤمنين علي (ع)';
    } else if (/فاطمة|الزهراء|فدك|محدثة/i.test(fullText)) {
      candidateTitle = 'سيرة السيدة فاطمة الزهراء (ع): الفضل والمنزلة';
    } else if (/حسين|كربلاء|عاشوراء|طف|طين|شهداء|أكبر|عباس/i.test(fullText)) {
      candidateTitle = 'النهضة الحسينية: شهد معركة كربلاء وعاشوراء';
    } else if (/حسن|مجتبى|صلح/i.test(fullText)) {
      candidateTitle = 'سيرة الإمام الحسن المجتبى (ع): الصلح والحكمة';
    } else if (/صادق|جعفر|مذبح|جامعة/i.test(fullText)) {
      candidateTitle = 'سيرة الإمام الصادق (ع): الفقه والعلوم الجعفرية';
    } else if (/رضا|طوس|خراسان|ولاية العهد/i.test(fullText)) {
      candidateTitle = 'سيرة الإمام الرضا (ع): غريب طوس وولاية العهد';
    } else if (/مهدي|منتظر|غيبة|عصر الظهور|قائم/i.test(fullText)) {
      candidateTitle = 'سيرة الإمام المنتظر المهدي (عج): الغيبة والانتظار';
    } else {
      candidateTitle = 'السيرة النبوية والمحطات الخالدة لآل البيت (ع)';
    }
  }

  // 2. HISTORY
  else if (cat === 'تاريخ') {
    if (/بحرين|دلمون|تايلوس|أوال|قلعة البحرين|منامة|محرق|رفاع|لؤلؤ|غوص/i.test(fullText)) {
      if (/دلمون|مدافن|آثار/i.test(fullText)) candidateTitle = 'حضارة دلمون ومدافن عالي الأثرية';
      else if (/لؤلؤ|غوص|تراث/i.test(fullText)) candidateTitle = 'تراث البحرين: تاريخ الغوص وصيد اللؤلؤ';
      else candidateTitle = 'تاريخ البحرين المعاصر والمعالم التاريخية';
    } else if (/فراعنة|مصر القديمة|أهرام|سومر|بابل|أشور|إغريق|رومان|هرقل|إسكندر/i.test(fullText)) {
      if (/فراعنة|مصر|أهرام/i.test(fullText)) candidateTitle = 'عجائب الأهرامات والحضارة الفرعونية القديمة';
      else if (/رومان|إغريق|إسكندر/i.test(fullText)) candidateTitle = 'تاريخ الحضارة الإغريقية والإمبراطورية الرومانية';
      else candidateTitle = 'أسرار بلاد الرافدين والحضارات القديمة';
    } else if (/أموي|عباسي|عثماني|خلافة|أندلس|فتح|مأمون|رشيد/i.test(fullText)) {
      if (/أندلس|قرطبة/i.test(fullText)) candidateTitle = 'تاريخ الأندلس والفتوحات الإسلامية';
      else candidateTitle = 'محطات التاريخ الإسلامي: العصر الأموي والعباسي';
    } else if (/حرب عالمية|ثورة|نابليون|هتلر|سوفيتي|جدار برلين|ستالينغراد|نازية/i.test(fullText)) {
      if (/أولى|1914|فرساي/i.test(fullText)) candidateTitle = 'الحرب العالمية الأولى: أسباب ومعارك 1914';
      else if (/ثانية|1939|هتلر|ستالينغراد/i.test(fullText)) candidateTitle = 'الحرب العالمية الثانية: هتلر وخطوط المواجهة';
      else if (/باردة|سوفيتي|برلين/i.test(fullText)) candidateTitle = 'أحداث الحرب الباردة وسقوط جدار برلين';
      else candidateTitle = 'الثورات الكبرى والمعارك الحديثة في العالم';
    } else {
      candidateTitle = 'شخصيات وأحداث غيرت مجرى التاريخ';
    }
  }

  // 3. GEOGRAPHY
  else if (cat === 'جغرافيا') {
    if (/عاصمة|عواصم|حدود|دولة|جمهورية|ولاية|واشنطن|مدريد|باريس|طوكيو/i.test(fullText)) {
      if (/أوروبا|مدريد|باريس|لندن|برلين/i.test(fullText)) candidateTitle = 'عواصم دول قارة أوروبا والدول السكاندنافيّة';
      else if (/آسيا|طوكيو|بكين|سيول|بانكوك/i.test(fullText)) candidateTitle = 'عواصم وخرائط دول قارة آسيا والشرق الأوسط';
      else if (/أفريقيا|أمريكا|واشنطن|القاهرة/i.test(fullText)) candidateTitle = 'عواصم قارتي إفريقيا والأمريكتين';
      else candidateTitle = 'دليل عواصم وحدود دول العالم';
    } else if (/جبل|قمة|صحراء|إيفرست|هيمالايا|ألب|أنديز|بركان/i.test(fullText)) {
      candidateTitle = 'تضاريس الأرض: الجبال الشامخة والقمم البركانية';
    } else if (/نهر|محيط|بحر|جزيرة|أمازون|نيل|هادي|أطلسي/i.test(fullText)) {
      candidateTitle = 'أسرار المحيطات والأنهار الكبرى في العالم';
    } else if (/مناخ|بيئة|غابة|شلال|بحيرة/i.test(fullText)) {
      candidateTitle = 'عجائب الظواهر الطبيعية والغابات الاستوائية';
    } else {
      candidateTitle = 'الموسوعة الجغرافية وحقائق الدول العالمية';
    }
  }

  // 4. SCIENCE & MEDICINE
  else if (cat === 'علوم وطب') {
    if (/حيوان|طائر|سمك|حشرة|سلالة|افتراس|ثدييات|أسد|قرش/i.test(fullText)) {
      if (/طيور|حشرات|بحر/i.test(fullText)) candidateTitle = 'أسرار الكائنات البحرية والطيور المهاجرة';
      else candidateTitle = 'عالم الثدييات والحيوانات المفترسة والبرية';
    } else if (/قلب|دم|عظم|خلية|دماغ|عضلة|مرض|جسم|فيتامين|عصب/i.test(fullText)) {
      if (/دماغ|عصب|تفكير/i.test(fullText)) candidateTitle = 'خفايا الجهاز العصبي والدماغ البشري';
      else candidateTitle = 'تشريح جسم الإنسان: وظائف القلب والدورة الدموية';
    } else if (/كوكب|شمس|قمر|مجرة|فضاء|ثقب اسود|جاذبية|ناسا|مريخ/i.test(fullText)) {
      if (/كواكب|مجموع|شمس/i.test(fullText)) candidateTitle = 'أسرار كواكب المجموعة الشمسية والقمر';
      else candidateTitle = 'علوم الفضاء: الثقوب السوداء والمجرات البعيدة';
    } else if (/عنصر|ذرة|تفاعل|حمض|مادة|جزئ|غاز|جدول دوري/i.test(fullText)) {
      candidateTitle = 'عالم الكيمياء: العناصر والجدول الدوري';
    } else if (/فيزياء|حركة|ضوء|صوت|كهرباء|مغناطيس/i.test(fullText)) {
      candidateTitle = 'الفيزياء الحديثة: قوانين الحركة والجاذبية';
    } else {
      candidateTitle = 'العلوم الطبيعية والاكتشافات العلمية المذهلة';
    }
  }

  // 5. TECHNOLOGY
  else if (cat === 'تكنولوجيا') {
    if (/سيارة|محرك|سرعة|فيراري|تويوتا|مركبة|طائرة|بوغاتي/i.test(fullText)) {
      if (/طائرة|طيران|مركبة/i.test(fullText)) candidateTitle = 'هندسة الطيران والسيارات السريعة';
      else candidateTitle = 'عالم السيارات الرياضية والمحركات الهندسية';
    } else if (/كمبيوتر|حاسوب|برمجة|انترنت|معالج|ذاكرة|شاشة|هاتف|آيفون|جافا|ويب/i.test(fullText)) {
      if (/هاتف|آيفون|أجهزة/i.test(fullText)) candidateTitle = 'تاريخ الأجهزة الذكية وتطور الهواتف';
      else candidateTitle = 'أسرار البرمجة ولغات الحاسوب والشبكات';
    } else {
      candidateTitle = 'الابتكارات والأجهزة الحديثة والتطور التقني';
    }
  }

  // 6. ANIME
  else if (cat === 'أنمي') {
    if (/ون بيس|قراصنة|لوفي|زورو|سانجي/i.test(fullText)) candidateTitle = 'أنمي ون بيس: لوفي ومعارك القراصنة';
    else if (/ناروتو|غوكو|دراجون بول|ساسكي|نينجا/i.test(fullText)) candidateTitle = 'أنمي ناروتو ودراجون بول: عالم قوى الشونين';
    else if (/هجوم على العمالقة|إيرين|ليفاي|علاق|سور/i.test(fullText)) candidateTitle = 'أنمي هجوم العمالقة: فيلق الاستكشاف والعمالقة';
    else if (/ديث نوت|دفتر الموت|ستينز غيت|نيفرلاند|غموض/i.test(fullText)) candidateTitle = 'أنمي الغموض والإثارة: ديث نوت وستينز غيت';
    else candidateTitle = 'أنمي التسعينات والكرتون الكلاسيكي الشهير';
  }

  // 7. SPORTS
  else if (cat === 'رياضة') {
    if (/كرة قدم|دوري|كأس العالم|مدريد|برشلونة|مارادونا|ميسي|رونالدو|مونديال/i.test(fullText)) {
      if (/كأس العالم|مونديال/i.test(fullText)) candidateTitle = 'تاريخ كأس العالم والمونديال الكروي';
      else candidateTitle = 'أبطال الدوري الإسباني ودوري أبطال أوروبا';
    } else if (/أولمبياد|ركض|سباق|كرة سلة|ملاكمة|تنس|سباحة/i.test(fullText)) {
      if (/كرة سلة|تنس|ملاكمة/i.test(fullText)) candidateTitle = 'عالم كرة السلة والتنس والملاكمة العالمية';
      else candidateTitle = 'سجلات الألعاب الأولمبية والسباقات العالمية';
    } else {
      candidateTitle = 'موسوعة الرياضات العالمية وأبطال التحدي';
    }
  }

  // 8. ISLAMIC STUDIES
  else if (cat === 'إسلاميات') {
    if (/قرآن|سورة|آية|تفسير|تلاوة|تجويد/i.test(fullText)) candidateTitle = 'علوم القرآن الكريم: أسباب النزول والتفسير';
    else if (/صلاة|طهارة|وضوء|غسل/i.test(fullText)) candidateTitle = 'أحكام الصلاة والطهارة والوضوء الفقهية';
    else if (/صوم|حج|زكاة|خمس|مكاسب/i.test(fullText)) candidateTitle = 'مسائل الصوم والحج والعبادات الفقهية';
    else candidateTitle = 'معالم السيرة النبوية والثقافة الإسلامية';
  }

  // 9. MATHEMATICS
  else if (cat === 'رياضيات') {
    if (/معادلة|جبر|نسبة|حساب|باي/i.test(fullText)) candidateTitle = 'تحدي المعادلة الرياضية والجبر والأرقام';
    else candidateTitle = 'ألغاز الهندسة والمنطق الحسابي';
  }

  // 10. PUZZLES & LOGIC
  else if (cat === 'ألغاز ومنطق') {
    if (/متتالية|متوالية|وزنة|حساب|عمر|شمعة/i.test(fullText)) candidateTitle = 'ألغاز الحساب ومتتاليات الأرقام الذكية';
    else candidateTitle = 'ألغاز التفكير المحصن والاستنتاج المنطقي';
  }

  // 11. ARABIC LITERATURE
  else if (cat === 'لغة عربية وأدب') {
    if (/شعر|معلقة|متنبي|أحمد شوقي|شاعر/i.test(fullText)) candidateTitle = 'روائع شعر المعلقات والأدب العربي';
    else candidateTitle = 'بلاغة اللغة العربية وقواعد النحو الخالدة';
  }

  // 12. GENERAL KNOWLEDGE
  else {
    if (/مطبخ|أكل|طعام|وجبة|ثقافة|شعب/i.test(fullText)) candidateTitle = 'ثقافات الشعوب والمطابخ العالمية';
    else if (/مخترع|اختراع|جائزة نوبل|اكتشاف/i.test(fullText)) candidateTitle = 'موسوعة الابتكارات والمخترعين العظام';
    else if (/موسيقى|فنون|سينما|فيلم|مخرج/i.test(fullText)) candidateTitle = 'عالم السينما والفنون والموسيقى العالمية';
    else if (/رقم قياسي|موسوعة|غينيس/i.test(fullText)) candidateTitle = 'الأرقام القياسية والحقائق العلمية المذهلة';
    else candidateTitle = 'موسوعة المعارف والثقافة العامة الجاهزة';
  }

  // Ensure title uniqueness without ANY numbers or "الجزء X"
  let finalTitle = candidateTitle;
  let counter = 1;

  while (usedTitlesSet.has(finalTitle)) {
    const diffIndex = (counter - 1) % THEMATIC_DIFFERENTIATORS.length;
    const diff = THEMATIC_DIFFERENTIATORS[diffIndex];
    const cycle = Math.floor((counter - 1) / THEMATIC_DIFFERENTIATORS.length);
    const cycleStr = cycle > 0 ? ` (${cycle + 1})` : '';
    finalTitle = `${candidateTitle}: ${diff}${cycleStr}`;
    counter++;
  }

  usedTitlesSet.add(finalTitle);
  return finalTitle;
}

// Process Library
const usedTitles = new Set();
let totalQuizzes = library.length;
let updatedTitlesCount = 0;

library.forEach((quiz, index) => {
  const newTitle = generateSpecificTitle(quiz, index, usedTitles);
  if (quiz.title !== newTitle) {
    updatedTitlesCount++;
    quiz.title = newTitle;
  }
});

console.log(`Successfully generated specific, unique titles for all ${totalQuizzes} quizzes!`);
console.log(`Updated ${updatedTitlesCount} quiz titles to distinct subject formats.`);

// Save back to src/lib/quiz-library.ts
const updatedFileContent = `import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: string | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: (Omit<Question, "id" | "quiz_id"> & { id?: string; quiz_id?: string; [key: string]: any })[];
};

// Reorganized & Deduplicated Quiz Library with Specific Descriptive Arabic Titles (No Generic "الجزء X")
export const QUIZ_LIBRARY: LibraryQuiz[] = ${JSON.stringify(library, null, 2)};
`;

fs.writeFileSync(libFile, updatedFileContent, 'utf8');
console.log(`Saved updated QUIZ_LIBRARY to ${libFile}!`);

// Sample Verification Output
console.log('\n=== SAMPLE SPECIFIC QUIZ TITLES (FIRST 30) ===');
library.slice(0, 30).forEach((q, idx) => {
  console.log(`[${idx + 1}] Category: "${q.category}" ➔ Title: "${q.title}"`);
});
