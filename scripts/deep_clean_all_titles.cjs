const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

let cleanCount = 0;

questions.forEach(q => {
  let title = q.quiz_title || '';
  const original = title;

  // Strip difficulty/level suffixes like " · خبير", " - خبير", " · متوسط", " - متوسط", " · قياسي", " - قياسي"
  title = title
    .replace(/\s*[-·•]\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي|متنوع)\s*(\d+|\(\d+\))?/gi, (_, __, num) => num ? ` ${num}` : '')
    .replace(/\s*[-·•]\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي|متنوع)/gi, '')
    .replace(/\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (title !== original) {
    q.quiz_title = title;
    cleanCount += 1;
  }
});

console.log(`Cleaned difficulty suffixes from titles in ${cleanCount} questions.`);

fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(questions, null, 2), 'utf8');
