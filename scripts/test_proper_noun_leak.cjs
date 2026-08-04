const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// Extensive list of generic category nouns (NOT proper nouns)
const GENERIC_NOUNS = new Set([
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
  'شجرة', 'زهور', 'نبات', 'فاكهة', 'طعام', 'وجبة', 'مشروب', 'دواء', 'مرض', 'علاج'
]);

function getProperNouns(text) {
  if (!text) return [];
  return text
    .replace(/[^\u0600-\u06FF]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 3 && !GENERIC_NOUNS.has(w));
}

const properNounLeaks = [];

questions.forEach((q, idx) => {
  const correctOpt = (q.options[q.correct_index] || '').trim();
  const properNouns = getProperNouns(correctOpt);
  const qText = q.question_text || '';

  const leakedNouns = properNouns.filter(noun => qText.includes(noun));

  if (leakedNouns.length > 0) {
    properNounLeaks.push({
      idx,
      id: q.id,
      quiz_title: q.quiz_title,
      question_text: q.question_text,
      correct_answer: correctOpt,
      leakedNouns
    });
  }
});

console.log(`PROPER NOUN / ENTITY LEAKS DETECTED: ${properNounLeaks.length} / ${questions.length}`);
fs.writeFileSync('scripts/proper_noun_leaks.json', JSON.stringify(properNounLeaks, null, 2), 'utf8');
