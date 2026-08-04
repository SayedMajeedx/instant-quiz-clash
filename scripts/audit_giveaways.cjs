const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// Common question words/particles to ignore when checking overlaps
const IGNORE_WORDS = new Set([
  'ما', 'هو', 'هي', 'من', 'أين', 'متى', 'كم', 'كيف', 'لماذا', 'أي', 'التي', 'الذي', 'الذين',
  'في', 'من', 'على', 'عن', 'إلى', 'مع', 'هذا', 'هذه', 'ذلك', 'تلك', 'اسم', 'مدينة', 'دولة',
  'عاصمة', 'عام', 'سنة', 'سلسلة', 'أنمي', 'مانغا', 'فيلم', 'مسلسل', 'لعبة', 'بطل', 'شخصية'
]);

function getSignificantWords(text) {
  return text
    .replace(/[^\u0600-\u06FF\w\s]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim().toLowerCase())
    .filter(w => w.length >= 3 && !IGNORE_WORDS.has(w));
}

const giveaways = [];

questions.forEach((q, idx) => {
  const correctOpt = q.options[q.correct_index] || '';
  const optWords = getSignificantWords(correctOpt);
  const qText = q.question_text || '';

  // Check if any significant word from correct answer is in question text
  const leakedWords = optWords.filter(w => qText.toLowerCase().includes(w));

  if (leakedWords.length > 0) {
    giveaways.push({
      idx,
      id: q.id,
      quiz_title: q.quiz_title,
      category: q.category,
      question_text: q.question_text,
      correct_answer: correctOpt,
      options: q.options,
      correct_index: q.correct_index,
      leakedWords
    });
  }
});

console.log(`Found ${giveaways.length} potentially leaked/giveaway questions out of ${questions.length}.`);

fs.writeFileSync('scripts/giveaways_report.json', JSON.stringify(giveaways, null, 2), 'utf8');
