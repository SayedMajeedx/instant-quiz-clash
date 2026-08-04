const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// Generic words that aren't leaks by themselves
const GENERIC_WORDS = new Set([
  'ما', 'هو', 'هي', 'من', 'أين', 'متى', 'كم', 'كيف', 'لماذا', 'أي', 'التي', 'الذي', 'الذين',
  'في', 'من', 'على', 'عن', 'إلى', 'مع', 'هذا', 'هذه', 'ذلك', 'تلك', 'اسم', 'مدينة', 'دولة',
  'عاصمة', 'عام', 'سنة', 'سلسلة', 'أنمي', 'مانغا', 'فيلم', 'مسلسل', 'لعبة', 'بطل', 'شخصية',
  'أحد', 'إحدى', 'غير', 'مع', 'خلال', 'بعد', 'قبل', 'عند', 'بين', 'تحت', 'فوق', 'الذي', 'التي',
  'الذين', 'اللاتي', 'اللواتي', 'تمثال', 'معبد', 'ضريح', 'هيكل', 'مكان', 'موقع', 'مركز',
  'قرية', 'أقراط', 'كرات', 'بطولة', 'المستقبل', 'حلبة', 'عالم', 'ملك', 'رئيس', 'شارع',
  'قناة', 'نهر', 'جبل', 'قارة', 'إقليم', 'دوري', 'كأس', 'نادي', 'فريق', 'لاعب', 'مدرب',
  'مخرج', 'مؤلف', 'رسام', 'موسيقي', 'رواية', 'كتاب', 'حاكم', 'سلطان', 'أمير', 'متحف',
  'قصر', 'قلعة', 'جامعة', 'مستشفى', 'مطار', 'شركة', 'مؤسسة', 'منظمة', 'حركة', 'حرب',
  'معركة', 'غزوة', 'ثورة', 'عصر', 'قرن', 'فترة', 'دورة', 'مرحلة', 'مستوى', 'نوع', 'شكل',
  'لون', 'عنصر', 'معدن', 'غاز', 'كوكب', 'نجم', 'مجرة', 'جنس', 'نوع', 'طائر', 'حيوان',
  'شجرة', 'زهور', 'نبات', 'فاكهة', 'طعام', 'وجبة', 'مشروب', 'دواء', 'مرض', 'علاج',
  'طاقة', 'عدة', 'عملاق', 'المنظمة'
]);

function getProperNouns(text) {
  if (!text) return [];
  return text
    .replace(/[^\u0600-\u06FF]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 3 && !GENERIC_WORDS.has(w));
}

let fixedCount = 0;

questions.forEach(q => {
  const correctOpt = (q.options[q.correct_index] || '').trim();
  const properNouns = getProperNouns(correctOpt);
  let qText = q.question_text || '';
  let modified = false;

  properNouns.forEach(noun => {
    if (qText.includes(noun)) {
      modified = true;

      // Smart specific replacements
      if (noun === 'أرتميس') {
        qText = qText.replace(/للإلهة أرتميس/g, 'للإلهة اليونانية').replace(/أرتميس/g, 'الإلهة اليونانية');
      } else if (noun === 'أوليمبيا') {
        qText = qText.replace(/في أوليمبيا باليونان/g, 'في اليونان القديمة').replace(/في أوليمبيا/g, 'في اليونان القديمة').replace(/أوليمبيا/g, 'اليونان القديمة');
      } else if (noun === 'موري') {
        qText = qText.replace(/كوغورو موري/g, 'كوغورو').replace(/موري/g, '');
      } else if (noun === 'أوزوماكي') {
        qText = qText.replace(/أوزوماكي/g, '');
      } else if (noun === 'ييغر') {
        qText = qText.replace(/إيرين ييغر/g, 'إيرين').replace(/ييغر/g, '');
      } else if (noun === 'نوبل') {
        qText = qText.replace(/ومؤسس جوائز نوبل/g, 'ومؤسس الجائزة العالمية الشهيرة').replace(/نوبل/g, 'الجائزة الشهيرة');
      } else if (noun === 'هانجي') {
        qText = qText.replace(/هانجي زوي/g, 'الكتيبة').replace(/هانجي/g, 'الكتيبة');
      } else if (noun === 'بوروتو') {
        qText = qText.replace(/بوروتو: الأجيال القادمة/g, 'السلسلة القادمة').replace(/بوروتو/g, 'ابنه');
      } else {
        // Remove the leaked proper noun from question text
        const escaped = noun.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        qText = qText.replace(regex, '');
      }
    }
  });

  if (modified) {
    // Clean spaces
    qText = qText.replace(/\s+/g, ' ').replace(/\s+\؟/g, '؟').trim();
    q.question_text = qText;
    fixedCount += 1;
  }
});

console.log(`Cleaned proper noun leaks in ${fixedCount} questions.`);

fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(questions, null, 2), 'utf8');
