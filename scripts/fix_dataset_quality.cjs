const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// 1. Clean Leakage in Question Texts
function fixLeakedQuestion(q) {
  let text = q.question_text || '';
  const answer = (q.options[q.correct_index] || '').trim();

  if (!answer) return q;

  // Specific high-frequency leaks
  if (answer.includes('ألفرد نوبل') || answer.includes('نوبل')) {
    text = text.replace(/ومؤسس جوائز نوبل\؟?/g, 'ومؤسس الجائزة العالمية الشهيرة التي تحمل اسمه؟');
    text = text.replace(/نوبل/g, 'الجائزة العالمية');
  }

  if (answer.includes('هانجي زوي') || answer.includes('هانجي')) {
    text = text.replace(/هانجي زوي\؟?/g, 'في هجوم العمالقة؟');
    text = text.replace(/هانجي/g, 'هذه القائدة');
  }

  if (answer.includes('بوروتو')) {
    text = text.replace(/وبطل السلسلة التالية بوروتو: الأجيال القادمة\؟?/g, 'وبطل السلسلة التالية؟');
    text = text.replace(/بوروتو/g, 'ابنه');
  }

  if (answer.includes('جريشا ييغر') || answer.includes('جريشا')) {
    text = text.replace(/والد إيرين ييغر/g, 'والد البطل إيرين');
  }

  if (answer.includes('المنظمة السوداء')) {
    text = text.replace(/ذات الملابس السوداء\s*/g, '');
  }

  if (answer.includes('قرية الورق المخفية') || answer.includes('قرية الورق')) {
    text = text.replace(/ما اسم القرية المخفية/g, 'ما اسم القرية الرئيسية');
  }

  if (answer.includes('كرات التنين')) {
    text = text.replace(/التي عند جمعها تستدعي التنين/g, 'التي عند جمعها تستدعي الكائن الأسطوري لتحقيق الأماني');
  }

  // Generic cleaning: If the full answer string appears verbatim in question text, strip it
  if (answer.length >= 4 && text.includes(answer)) {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');
    text = text.replace(regex, '...').replace(/\.\.\.\s*\.\.\./g, '...').trim();
  }

  q.question_text = text;
  return q;
}

// Apply fixes to all questions
const cleanedQuestions = questions.map(fixLeakedQuestion);

// 2. Group Questions by Category & Sub-quiz Title
const quizzes = {};
cleanedQuestions.forEach(q => {
  let title = (q.quiz_title || 'عام').trim();

  // Strip redundant suffixes like " - خبير", " - متوسط", " - قياسي"
  title = title.replace(/\s*-\s*(خبير|متوسط|مبتدئ|قياسي|سهل|صعب|تحدي|متنوع)\b/gi, '').trim();

  if (!quizzes[title]) {
    quizzes[title] = {
      title,
      category: q.category || 'عام',
      subcategory: q.subcategory || q.category,
      questions: []
    };
  }
  quizzes[title].questions.push(q);
});

// 3. Consolidate Short Quizzes (< 8 questions) into Sister Quizzes within Same Category
const categoryGroups = {};
Object.values(quizzes).forEach(quiz => {
  const cat = quiz.category || 'عام';
  if (!categoryGroups[cat]) categoryGroups[cat] = [];
  categoryGroups[cat].push(quiz);
});

const finalQuizzes = [];

Object.entries(categoryGroups).forEach(([cat, list]) => {
  let shortPool = [];
  const validCategoryQuizzes = [];

  list.forEach(quiz => {
    if (quiz.questions.length >= 8) {
      validCategoryQuizzes.push(quiz);
    } else {
      // Accumulate short quiz questions to merge
      shortPool.push(...quiz.questions);
    }
  });

  // Merge accumulated short questions into consolidated quizzes of 10-15 questions each
  if (shortPool.length > 0) {
    let poolIndex = 1;

    while (shortPool.length > 0) {
      // If remaining pool is small (< 8) and we already created a batch or have a valid quiz, append to it!
      if (shortPool.length < 8 && validCategoryQuizzes.length > 0) {
        const targetQuiz = validCategoryQuizzes[validCategoryQuizzes.length - 1];
        targetQuiz.questions.push(...shortPool);
        shortPool = [];
      } else {
        const batch = shortPool.splice(0, 15);
        const title = `${cat} شاملة (${poolIndex})`;
        const newQuiz = {
          title,
          category: cat,
          subcategory: cat,
          questions: batch
        };
        validCategoryQuizzes.push(newQuiz);
        poolIndex += 1;
      }
    }
  }

  finalQuizzes.push(...validCategoryQuizzes);
});

// Flatten questions back into master array
const finalFlattenedQuestions = [];

finalQuizzes.forEach(quiz => {
  quiz.questions.forEach((q, idx) => {
    q.quiz_title = quiz.title;
    q.category = quiz.category;
    q.order_index = idx;
    finalFlattenedQuestions.push(q);
  });
});

console.log(`Original Quizzes: ${Object.keys(quizzes).length}`);
console.log(`Final Consolidated Quizzes: ${finalQuizzes.length}`);
console.log(`Total Questions: ${finalFlattenedQuestions.length}`);

// Check remaining short quizzes
const remainingShort = finalQuizzes.filter(q => q.questions.length < 8);
console.log(`Remaining Short Quizzes (< 8 questions): ${remainingShort.length}`);

// Save updated master file
fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(finalFlattenedQuestions, null, 2), 'utf8');
