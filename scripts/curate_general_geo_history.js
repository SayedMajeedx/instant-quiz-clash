import fs from "node:fs";

const INPUT = "merged_questions_launch_ready.json";
const OUTPUT = "reports/curated_general_geo_history.json";
const SUMMARY = "reports/curated_general_geo_history_summary.json";
const CATEGORIES = new Set(["معلومات عامة", "جغرافيا", "تاريخ"]);
const TARGETS = { "معلومات عامة": 110, "جغرافيا": 90, "تاريخ": 90 };

const questions = JSON.parse(fs.readFileSync(INPUT, "utf8"));

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function audit(q) {
  const reasons = [];
  const text = String(q.question_text ?? "").trim();
  const options = Array.isArray(q.options) ? q.options.map((x) => String(x).trim()) : [];
  const normalizedOptions = options.map(normalize);

  if (text.length < 18) reasons.push("سؤال قصير أو ناقص");
  if (!text.endsWith("؟") && q.question_type !== "boolean") reasons.push("صياغة غير مكتملة");
  if (/[«“][^»”]*$/.test(text) || /[([{][^\])}]*$/.test(text)) reasons.push("اقتباس أو قوس غير مغلق");
  if (/(ما اسم|من هو|من هي)\s+(التي|الذي|القرآنية|التاريخية|العالمية|القديمة|الأطول|العثماني)(?:\s|[؟،,.])/.test(text)) reasons.push("اسم الموصوف محذوف");
  if (/(قصة أصحاب|من الجنة و|اسم ال |دولة ال |مدينة ال |الإمبراطورية ة|الأرخبيل الي|أعمق وأقدم عذبة|عائلة ات|السلوك ي)/.test(text)) reasons.push("عبارة مبتورة");
  if (/\.\.\.|…|___|\?\?/.test(text)) reasons.push("موضع محذوف");
  if (![2, 4].includes(options.length)) reasons.push("عدد خيارات غير مناسب");
  if (options.some((x) => !x)) reasons.push("خيار فارغ");
  if (new Set(normalizedOptions).size !== options.length) reasons.push("خيارات مكررة");
  if (!Number.isInteger(q.correct_index) || q.correct_index < 0 || q.correct_index >= options.length) reasons.push("فهرس إجابة غير صالح");

  const answer = normalizedOptions[q.correct_index] ?? "";
  const prompt = normalize(text);
  if (answer.length >= 4 && prompt.includes(answer) && options.length > 2) reasons.push("الإجابة ظاهرة حرفياً في السؤال");

  let score = 100;
  score += q.verified ? 8 : -15;
  score += q.source && String(q.source).length > 3 ? 5 : 0;
  score += q.explanation && String(q.explanation).length >= 20 ? 5 : 0;
  score += text.length >= 28 && text.length <= 150 ? 6 : -4;
  score += options.length === 4 ? 4 : 0;
  score -= reasons.length * 40;
  return { reasons, score };
}

const reviewed = questions
  .filter((q) => CATEGORIES.has(q.category))
  .map((q) => ({ q, ...audit(q) }));

const selected = [];
for (const [category, target] of Object.entries(TARGETS)) {
  const eligible = reviewed.filter((x) => x.q.category === category && x.reasons.length === 0);
  const byQuiz = new Map();
  for (const item of eligible) {
    const key = item.q.quiz_title;
    if (!byQuiz.has(key)) byQuiz.set(key, []);
    byQuiz.get(key).push(item);
  }
  for (const items of byQuiz.values()) items.sort((a, b) => b.score - a.score || a.q.id.localeCompare(b.q.id));

  // Round-robin keeps coverage broad and avoids one oversized quiz dominating.
  const categorySelection = [];
  let round = 0;
  while (categorySelection.length < target) {
    let added = false;
    for (const items of byQuiz.values()) {
      if (items[round] && categorySelection.length < target) {
        categorySelection.push(items[round].q);
        added = true;
      }
    }
    if (!added) break;
    round += 1;
  }
  selected.push(...categorySelection);
}

const reasonCounts = {};
for (const item of reviewed.filter((x) => x.reasons.length)) {
  for (const reason of item.reasons) reasonCounts[reason] = (reasonCounts[reason] ?? 0) + 1;
}

const summary = {
  reviewed: reviewed.length,
  selected: selected.length,
  selected_by_category: Object.fromEntries([...CATEGORIES].map((c) => [c, selected.filter((q) => q.category === c).length])),
  rejected_by_automatic_quality_gate: reviewed.filter((x) => x.reasons.length).length,
  rejection_reasons: reasonCounts,
};

fs.writeFileSync(OUTPUT, `${JSON.stringify(selected, null, 2)}\n`, "utf8");
fs.writeFileSync(SUMMARY, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
console.log(JSON.stringify(summary, null, 2));
