import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Applying precision fixes for Anime and Gaming questions across ${questions.length} items...`);

let animeGamingFixed = 0;

const updated = questions.map((q) => {
  let text = q.question_text || "";
  let options = [...(q.options || [])];
  let correctIndex = q.correct_index;
  let explanation = q.explanation || "";
  let modified = false;

  // 1. Remove robotic stiff academic phrase (بحسب التوثيق التاريخي والرسمي)
  if (text.includes("(بحسب التوثيق التاريخي والرسمي)؟") || text.includes("بحسب التوثيق التاريخي والرسمي")) {
    text = text.replace(/\s*\(بحسب التوثيق التاريخي والرسمي\)؟/g, "؟").replace(/\s*بحسب التوثيق التاريخي والرسمي/g, "").trim();
    modified = true;
  }

  // 2. Strip any bracketed parentheticals containing English or mixed text in options
  const cleanedOptions = options.map((opt) => {
    if (typeof opt !== "string") return opt;
    let clean = opt.replace(/\s*\([^)]+\)/g, "").trim();
    clean = clean.replace(/\s*\[[^\]]+\]/g, "").trim();
    if (clean !== opt) modified = true;
    return clean || opt;
  });
  options = cleanedOptions;

  // 3. Specific Hardcoded Fixes
  switch (q.id) {
    case "ANI-0025": // Imu-sama honorific giveaway
      options = ["أكاينو", "إيمو", "السباعي", "غارب"];
      modified = true;
      break;

    case "ANI-0071": // Zeno-sama honorific giveaway & robotic text
      text = "ما اسم حاكم الأكوان ذو الشكل الظريف القادر على محو الكون بلمسة في دراغون بول سوبر (Dragon Ball Super)؟";
      options = ["بيروس", "الكايوشين الأعظم", "داينشينكان", "زينو"];
      modified = true;
      break;

    case "ANI-0068": // Ultra Instinct spoiler and parenthetical
      text = "ما اسم تقنية القتال الجسدية الأسطورية دون تفكير التي وصل إليها غوكو في بطولة الكون؟";
      options = ["الغريزة الفائقة", "سوبر ساياجين بلو", "كايوكين", "الفيوجن"];
      modified = true;
      break;

    case "ANI-0089": // Ymir the Founder mistranslation & typo
      text = "ما اسم العرق البشري القادر على التحول إلى عمالقة والمتحدرين من العملاقة المؤسِّسة يمير؟";
      options = ["المارليون", "الإيلديون", "الأكرمان", "الأوزوماكي"];
      modified = true;
      break;

    case "ANI-0049": // Edo Tensei Factual Contradiction (Is actually True)
      correctIndex = 1; // "عبارة صحيحة تماماً"
      modified = true;
      break;

    case "ANI-0102": // Conan typo "محري"
      text = "ما اسم محقق الثانوية العبقري الذي تقلص جسده ليصبح كونان إيدوجاوا؟";
      modified = true;
      break;

    case "ANI-0105": // Conan Porsche translation
      text = "ما اسم العضو الشرير ذو الشعر الفضي الطويل والسيارة البورش في المنظمة السوداء الذي سقى سينشي العقار؟";
      modified = true;
      break;

    case "GAM-0012": // Genesis Trailing Quote typo
      text = "ما الشركة التي أنتجت جهاز الألعاب الشهير سيغا جينيسيس؟";
      modified = true;
      break;

    case "GAM-0025": // Jumpman loanword "كاراكتر"
      text = "ما هي أول لعبة حصلت فيها شخصية 'ماريو' على اسمها الحالي بدلاً من Jumpman؟";
      modified = true;
      break;

    case "GAM-0030": // Bowser gender grammar mismatch
      text = "ما اسم الخصم الشرير الرئيسي والوحش الأكبر في ألعاب ماريو؟";
      modified = true;
      break;

    case "GAM-0033": // Master Sword Petra Hallucination
      explanation = "يعرف بالسيف الماستر الأسطوري المحطم لقوى الشر.";
      modified = true;
      break;

    case "GAM-0053": // The Last of Us Factual Contradiction & Typo
      text = "لعبة ذا لاست أوف أس (The Last of Us) هي من تطوير استوديو نوتي دوغ.";
      correctIndex = 1; // "عبارة صحيحة تماماً"
      modified = true;
      break;

    case "GAM-0059": // Ghost of Tsushima Factual Contradiction
      correctIndex = 1; // "عبارة صحيحة تماماً"
      modified = true;
      break;

    case "GAM-0063": // Spider-man Factual Contradiction
      correctIndex = 1; // "عبارة صحيحة تماماً"
      modified = true;
      break;

    case "GAM-0069": // Shadow of the Colossus Factual Contradiction
      correctIndex = 1; // "عبارة صحيحة تماماً"
      modified = true;
      break;

    case "GAM-0072": // Infamous Second Son Factual Contradiction
      correctIndex = 1; // "خطأ"
      modified = true;
      break;
  }

  if (modified) animeGamingFixed++;

  return {
    ...q,
    question_text: text,
    options: options,
    correct_index: correctIndex,
    explanation: explanation,
  };
});

fs.writeFileSync(inputPath, JSON.stringify(updated, null, 2), "utf8");

console.log(`
ANIME & GAMING FIXES COMPLETE:
------------------------------------------
- Total Anime & Gaming questions patched: ${animeGamingFixed}

Successfully updated merged_questions_launch_ready.json!
`);
