const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

let fixCount = 0;

questions.forEach(q => {
  let text = q.question_text || '';
  const original = text;

  // 1. Fix country & capital name over-stripping
  text = text.replace(/الجمهوريةية/g, 'الجمهورية الجزائرية');
  text = text.replace(/الجمهورية ال\.\.\.ية/g, 'الجمهورية التونسية');
  text = text.replace(/دولة ال\.\.\.ية/g, 'دولة التونسية');

  // 2. Fix Monuments over-stripping
  text = text.replace(/برج \.\.\. المائل/g, 'برج بيزا المائل');
  text = text.replace(/دار \.\.\. الأسطورية/g, 'دار الأوبرا الأسطورية');

  // 3. Fix truncated " ال " patterns resulting from over-cleaning
  text = text.replace(/ما اسم ال الدولي/g, 'ما اسم المؤتمر الدولي');
  text = text.replace(/ما اسم ال التاريخي/g, 'ما اسم الحلف التاريخي');
  text = text.replace(/ما اسم ال البركانية/g, 'ما اسم الهضبة البركانية');
  text = text.replace(/ما اسم ال المائي/g, 'ما اسم الممر المائي');
  text = text.replace(/ما اسم ال الأعلى/g, 'ما اسم الشلال الأعلى');

  // 4. Fix double dots or awkward ellipsis in prompts
  text = text.replace(/\s*\.\.\.\s*/g, ' ');
  text = text.replace(/\s+/g, ' ').replace(/\s+\؟/g, '؟').trim();

  if (text !== original) {
    q.question_text = text;
    fixCount += 1;
  }
});

console.log(`Repaired over-stripped questions: ${fixCount}`);

fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(questions, null, 2), 'utf8');
