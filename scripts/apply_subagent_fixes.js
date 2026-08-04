import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Applying precision fixes reported by subagents across ${questions.length} questions...`);

let fixedCount = 0;

questions.forEach((q) => {
  // Fix TEC-0395 (Margaret Hamilton Apollo 11 question corruption)
  if (q.id === "TEC-0395" || (q.options || []).includes("مارغريت هاميلتون") || (q.options || []).includes("غريس هوبر")) {
    q.question_text = "من هي العالمة والبرمجية التي ترأست فريق كتابة برمجيات التوجيه بـ أبوللو 11 لوصول الإنسان للقمر؟";
    fixedCount++;
  }

  // Fix SPT-0179 (Schumacher & Hamilton 7 titles true/false)
  if (q.id === "SPT-0179" || (q.question_text || "").includes("ميخائيل شوماخر والبريطاني لويس هاميلتون")) {
    q.correct_index = 1; // "عبارة صحيحة تماماً"
    fixedCount++;
  }

  // Fix SPT-0191 (DRS overtaking system in F1)
  if (q.id === "SPT-0191" || (q.question_text || "").includes("نظام الـ DRS")) {
    q.correct_index = 1; // "عبارة صحيحة تماماً"
    fixedCount++;
  }

  // Fix SPT-0185 (NASCAR)
  if (q.id === "SPT-0185" || (q.question_text || "").includes("سلسلة سباقات نأسكار هي السلسلة الأكثر شعبية")) {
    q.correct_index = 1; // "عبارة صحيحة تماماً"
    fixedCount++;
  }

  // Fix SPT-0186 (Dakar Rally)
  if (q.id === "SPT-0186" || (q.question_text || "").includes("إلى داكار")) {
    q.question_text = "ما اسم رالي الصحراء السنوي الأسطوري الذي انطلق تاريخياً من العاصمة الفرنسية باريس عبر القارة الأفريقية، ويُقام حالياً بالكامل في المملكة العربية السعودية؟";
    fixedCount++;
  }

  // Fix SPT-0196 (Indy 500)
  if (q.id === "SPT-0196" || (q.question_text || "").includes("الشهير بـ Indy خمسمائة")) {
    q.question_text = "ما اسم سباق السيارات الأمريكي الأسطوري الذي يُعد أحد أركان 'التاج الثلاثي' لرياضة المحركات ويُقام لمسافة 500 ميل على مضمار بيضاوي؟";
    fixedCount++;
  }

  // Fix SPT-0183 (FIA options)
  if (q.id === "SPT-0183" || (q.question_text || "").includes("الهيئة الدولية الحاكمة والمشرفة على سباقات الفورمولا 1")) {
    q.options = [
      "الاتحاد الدولي للدراجات النارية (FIM)",
      "رابطة ناسكار الوطنية (NASCAR)",
      "منظمة إندي كار (IndyCar)",
      "الاتحاد الدولي للسيارات"
    ];
    q.correct_index = 3;
    fixedCount++;
  }

  // Fix SPT-0094 (Alex Ferguson typo)
  if (q.id === "SPT-0094" || (q.question_text || "").includes("38 جاماً")) {
    q.question_text = q.question_text.replace("38 جاماً", "38 لقباً");
    fixedCount++;
  }

  // Fix SPT-0193 (Ayrton Senna typo)
  if (q.id === "SPT-0193" || (q.options || []).includes("نيسلون بيكيه")) {
    q.options = q.options.map((o) => o === "نيسلون بيكيه" ? "نيلسون بيكيه" : o);
    fixedCount++;
  }
});

// Update master_sanitizer.js logic to ignore Margaret Hamilton
const sanitizerPath = "./scripts/master_sanitizer.js";
if (fs.existsSync(sanitizerPath)) {
  let sanitizerCode = fs.readFileSync(sanitizerPath, "utf8");
  sanitizerCode = sanitizerCode.replace(
    'if (q.includes("103") || q.includes("سير") || correctOpt.includes("هاميلتون")) {',
    'if ((q.includes("103") || q.includes("سير") || correctOpt.includes("هاميلتون")) && !correctOpt.includes("مارغريت") && q.category === "رياضة") {'
  );
  fs.writeFileSync(sanitizerPath, sanitizerCode, "utf8");
  console.log("Updated master_sanitizer.js to protect Margaret Hamilton question!");
}

console.log(`Successfully applied ${fixedCount} subagent-discovered precision fixes to merged_questions_launch_ready.json!`);
fs.writeFileSync(inputPath, JSON.stringify(questions, null, 2), "utf8");
