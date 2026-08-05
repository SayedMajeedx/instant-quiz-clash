const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

let fixedCount = 0;

questions.forEach(q => {
  let text = q.question_text || '';
  const original = text;

  // Fix "ال " followed by Arabic word (e.g. "ال المرجعي" -> "المرجعي" or "ما هو ال المرجعي" -> "ما هو المرجعي")
  // If "ال" is preceded by whitespace/start and followed by whitespace + Arabic word starting with "ال", e.g. "ال المرجعي" -> "المرجعي"
  text = text.replace(/(?<=^|[\s"«'(])ال\s+ال([\u0600-\u06FF]+)/g, 'ال$1');
  text = text.replace(/(?<=^|[\s"«'(])ال\s+([\u0600-\u06FF]+)/g, 'ال$1');

  if (text !== original) {
    q.question_text = text;
    fixedCount += 1;
    console.log(`Original: "${original}" -> Fixed: "${text}"`);
  }
});

console.log(`Fixed isolated 'ال ' in ${fixedCount} questions.`);

fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(questions, null, 2), 'utf8');
