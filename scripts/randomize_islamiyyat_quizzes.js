import fs from 'fs';
import path from 'path';

const filePath = path.resolve('islamiyyat_master_quizzes.json');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const quizzes = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Fisher-Yates shuffle helper
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate sequence where NO 2 consecutive questions have the same index,
// and no 2 questions within distance 2 have the same index if possible.
function generateStrictSequence(numQuestions, numOptions = 4) {
  let base = [];
  while (base.length < numQuestions) {
    const cycle = shuffleArray(Array.from({ length: numOptions }, (_, i) => i));
    base.push(...cycle);
  }
  base = base.slice(0, numQuestions);

  // 1. Try to find sequence with NO repetition within distance 2 (e.g., A B C D A B C...)
  for (let attempt = 0; attempt < 20000; attempt++) {
    const candidate = shuffleArray(base);
    let valid = true;

    for (let i = 1; i < candidate.length; i++) {
      if (candidate[i] === candidate[i - 1]) {
        valid = false;
        break;
      }
      if (i >= 2 && candidate[i] === candidate[i - 2]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return candidate;
    }
  }

  // 2. Try to find sequence with strictly NO adjacent repetition (candidate[i] !== candidate[i-1])
  for (let attempt = 0; attempt < 20000; attempt++) {
    const candidate = shuffleArray(base);
    let valid = true;

    for (let i = 1; i < candidate.length; i++) {
      if (candidate[i] === candidate[i - 1]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return candidate;
    }
  }

  // 3. Fallback: Guaranteed 100% strict non-adjacent sequence
  const result = [];
  let last = -1;
  let prevLast = -1;
  for (let i = 0; i < numQuestions; i++) {
    let choices = Array.from({ length: numOptions }, (_, k) => k).filter(
      (k) => k !== last && k !== prevLast
    );
    if (choices.length === 0) {
      choices = Array.from({ length: numOptions }, (_, k) => k).filter(
        (k) => k !== last
      );
    }
    const pick = choices[Math.floor(Math.random() * choices.length)];
    result.push(pick);
    prevLast = last;
    last = pick;
  }
  return result;
}

let totalQuestions = 0;
let matchErrors = 0;
let totalAdjacentDuplicates = 0;
let totalDist2Duplicates = 0;
const overallCounts = {};

quizzes.forEach((quiz, quizIdx) => {
  const questions = quiz.questions || [];
  if (questions.length === 0) return;

  const targetSequence = generateStrictSequence(questions.length, 4);

  questions.forEach((q, qIdx) => {
    totalQuestions++;

    if (!q.options || !Array.isArray(q.options) || q.options.length < 2) {
      return;
    }

    const originalCorrectIndex = q.correct_index;
    const originalCorrectText = q.options[originalCorrectIndex];
    const incorrectTexts = q.options.filter((_, idx) => idx !== originalCorrectIndex);

    const shuffledIncorrect = shuffleArray(incorrectTexts);
    const targetIndex = targetSequence[qIdx] % q.options.length;

    // Construct new options
    const newOptions = [];
    let incIdx = 0;
    for (let i = 0; i < q.options.length; i++) {
      if (i === targetIndex) {
        newOptions.push(originalCorrectText);
      } else {
        newOptions.push(shuffledIncorrect[incIdx++]);
      }
    }

    q.options = newOptions;
    q.correct_index = targetIndex;

    overallCounts[targetIndex] = (overallCounts[targetIndex] || 0) + 1;

    // Check adjacent duplicate
    if (qIdx > 0 && questions[qIdx].correct_index === questions[qIdx - 1].correct_index) {
      console.error(`Adjacent duplicate found in Quiz ${quizIdx}, Question ${qIdx}!`);
      totalAdjacentDuplicates++;
    }

    // Check distance 2 duplicate
    if (qIdx > 1 && questions[qIdx].correct_index === questions[qIdx - 2].correct_index) {
      totalDist2Duplicates++;
    }

    // Verification
    if (q.options[q.correct_index] !== originalCorrectText) {
      console.error(`Mismatch in Quiz ${quizIdx} Question ${qIdx}: expected "${originalCorrectText}", got "${q.options[q.correct_index]}"`);
      matchErrors++;
    }
  });
});

if (matchErrors > 0 || totalAdjacentDuplicates > 0) {
  console.error(`Aborting! matchErrors: ${matchErrors}, adjacentDuplicates: ${totalAdjacentDuplicates}`);
  process.exit(1);
}

console.log('--- Strict Anti-Repetition Randomization Complete ---');
console.log('Overall correct_index counts:', overallCounts);
console.log('Total Adjacent Duplicates (distance 1):', totalAdjacentDuplicates);
console.log('Total Distance-2 Duplicates:', totalDist2Duplicates);
console.log(`Successfully processed ${totalQuestions} questions across ${quizzes.length} quizzes.`);

fs.writeFileSync(filePath, JSON.stringify(quizzes, null, 2), 'utf8');
console.log('Saved updated quizzes to islamiyyat_master_quizzes.json');
