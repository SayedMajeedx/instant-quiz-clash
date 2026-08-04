import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Loaded ${questions.length} questions from ${inputPath}`);

// Target categories for structured franchise vs mixed pooling
const targetCategories = ["أنمي", "ألعاب فيديو", "رياضة", "أفلام ومسلسلات"];

function getDifficultyLabel(q) {
  if (q.quiz_title) {
    const parts = q.quiz_title.split("-");
    if (parts.length > 1) {
      const label = parts[parts.length - 1].trim().replace(/\s*\(\d+\)$/, "").trim();
      if (["متوسط", "خبير", "مبتدئ", "قياسي", "سهل", "صعب"].includes(label)) {
        return label;
      }
    }
  }
  
  const diff = (q.quiz_difficulty || q.difficulty || "medium").toLowerCase();
  if (diff === "easy" || diff === "سهل" || diff === "beginner" || diff === "مبتدئ") return "قياسي";
  if (diff === "expert" || diff === "challenge" || diff === "خبير" || diff === "صعب") return "خبير";
  return "متوسط";
}

const targetQuestions = [];
const otherQuestions = [];

questions.forEach((q) => {
  if (targetCategories.includes(q.category)) {
    targetQuestions.push(q);
  } else {
    otherQuestions.push(q);
  }
});

console.log(`Found ${targetQuestions.length} questions in target categories.`);
console.log(`Found ${otherQuestions.length} questions in other categories.`);

const groups = {};

targetQuestions.forEach((q) => {
  const cat = q.category;
  const diffLabel = getDifficultyLabel(q);
  const subcat = (q.subcategory || "").trim();

  if (!groups[cat]) groups[cat] = {};
  if (!groups[cat][diffLabel]) groups[cat][diffLabel] = {};
  if (!groups[cat][diffLabel][subcat]) groups[cat][diffLabel][subcat] = [];

  groups[cat][diffLabel][subcat].push(q);
});

const processedTargetQuestions = [];
let reclassifiedCount = 0;
let dedicatedQuizCount = 0;
let mixedQuizCount = 0;

const categoryMixedLabels = {
  "أنمي": "أنمي متنوع",
  "ألعاب فيديو": "ألعاب متنوعة",
  "رياضة": "رياضة متنوعة",
  "أفلام ومسلسلات": "أفلام ومسلسلات متنوعة"
};

for (const cat of targetCategories) {
  if (!groups[cat]) continue;

  const mixedLabel = categoryMixedLabels[cat];

  for (const diffLabel of Object.keys(groups[cat])) {
    const subcatGroups = groups[cat][diffLabel];
    
    const franchiseGroups = [];
    const mixedPool = [];

    for (const [subcat, items] of Object.entries(subcatGroups)) {
      const isGeneric = !subcat || 
                        subcat === "عام" || 
                        subcat === "متنوع" || 
                        subcat === "أخرى" || 
                        subcat === "مختلف" || 
                        subcat.includes("متنوع");

      if (isGeneric || items.length < 10) {
        mixedPool.push(...items);
        if (items.length < 10 && subcat && !isGeneric) {
          reclassifiedCount += items.length;
        }
      } else {
        franchiseGroups.push({ subcat, questions: items });
      }
    }

    function chunkAndTitle(items, baseTitle, isMixed) {
      if (items.length === 0) return;

      items.sort((a, b) => (a.id || "").localeCompare(b.id || ""));

      const chunkSize = 20;
      const totalItems = items.length;
      const chunks = [];

      for (let i = 0; i < totalItems; i += chunkSize) {
        let chunk = items.slice(i, i + chunkSize);

        if (chunk.length < 10 && chunks.length > 0) {
          chunks[chunks.length - 1].push(...chunk);
        } else {
          chunks.push(chunk);
        }
      }

      chunks.forEach((chunk, chunkIdx) => {
        let titleSuffix = "";
        if (chunks.length > 1) {
          titleSuffix = ` (${chunkIdx + 1})`;
        }
        const finalTitle = `${baseTitle}${titleSuffix}`;

        if (isMixed) {
          mixedQuizCount++;
        } else {
          dedicatedQuizCount++;
        }

        chunk.forEach((q, orderIndex) => {
          q.quiz_title = finalTitle;
          q.order_index = orderIndex;
          processedTargetQuestions.push(q);
        });
      });
    }

    for (const fg of franchiseGroups) {
      const baseTitle = `${fg.subcat} - ${diffLabel}`;
      chunkAndTitle(fg.questions, baseTitle, false);
    }

    const baseMixedTitle = `${mixedLabel} - ${diffLabel}`;
    chunkAndTitle(mixedPool, baseMixedTitle, true);
  }
}

const finalQuestionsList = [...otherQuestions, ...processedTargetQuestions];
finalQuestionsList.sort((a, b) => (a.id || "").localeCompare(b.id || ""));

console.log(`\nAudit and Re-grouping complete:`);
console.log(`------------------------------------------`);
console.log(`- Dedicated franchise quizzes created: ${dedicatedQuizCount}`);
console.log(`- Mixed category quizzes created: ${mixedQuizCount}`);
console.log(`- Questions reclassified from tiny subcategories to mixed: ${reclassifiedCount}`);
console.log(`- Total questions written back: ${finalQuestionsList.length}`);

fs.writeFileSync(inputPath, JSON.stringify(finalQuestionsList, null, 2), "utf8");
console.log(`\nSuccessfully updated ${inputPath}!`);
