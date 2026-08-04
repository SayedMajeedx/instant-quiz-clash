const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// Common Arabic stop words to ignore
const STOP_WORDS = new Set([
  'ما', 'هو', 'هي', 'من', 'أين', 'متى', 'كم', 'كيف', 'لماذا', 'أي', 'التي', 'الذي', 'الذين',
  'في', 'من', 'على', 'عن', 'إلى', 'مع', 'هذا', 'هذه', 'ذلك', 'تلك', 'اسم', 'مدينة', 'دولة',
  'عاصمة', 'عام', 'سنة', 'سلسلة', 'أنمي', 'مانغا', 'فيلم', 'مسلسل', 'لعبة', 'بطل', 'شخصية',
  'أحد', 'إحدى', 'غير', 'مع', 'خلال', 'بعد', 'قبل', 'عند', 'بين', 'تحت', 'فوق', 'الذي', 'التي',
  'الذين', 'اللاتي', 'اللواتي', 'تمثال', 'معبد', 'ضريح', 'هيكل', 'مكان', 'موقع', 'مركز'
]);

function getArabicEntities(text) {
  if (!text) return [];
  const words = text
    .replace(/[^\u0600-\u06FF]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 3 && !STOP_WORDS.has(w));
  return words;
}

const detectedLeaks = [];

questions.forEach((q, idx) => {
  const correctOpt = (q.options[q.correct_index] || '').trim();
  const entities = getArabicEntities(correctOpt);
  let qText = q.question_text || '';

  const leakedEntities = entities.filter(entity => qText.includes(entity));

  if (leakedEntities.length > 0) {
    detectedLeaks.push({
      idx,
      id: q.id,
      quiz_title: q.quiz_title,
      question_text: q.question_text,
      correct_answer: correctOpt,
      leakedEntities
    });
  }
});

console.log(`TOTAL LEAKED QUESTIONS DETECTED: ${detectedLeaks.length} / ${questions.length}`);
fs.writeFileSync('scripts/detected_leaks.json', JSON.stringify(detectedLeaks, null, 2), 'utf8');
