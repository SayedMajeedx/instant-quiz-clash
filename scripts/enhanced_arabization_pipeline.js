import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Starting Enhanced Arabization Pipeline across ${questions.length} questions...`);

const COMPREHENSIVE_REPLACEMENTS = [
  // Jargon terms
  { pattern: /\bالمانغاكا المبتكر\b/gi, replacement: "المؤلف والمبتكر" },
  { pattern: /\bالمانغاكا\b/gi, replacement: "المؤلف والرسام" },
  { pattern: /\bمانغاكا\b/gi, replacement: "مؤلف ورسام" },
  { pattern: /\bالمانغا\b/gi, replacement: "قصص المانغا" },
  { pattern: /\bمانغا\b/gi, replacement: "قصص مانغا" },

  // Anime Titles & Franchise names
  { pattern: /\bBoruto:\s*Naruto Next Generations\b/gi, replacement: "بوروتو: الأجيال القادمة" },
  { pattern: /\bNaruto Next Generations\b/gi, replacement: "ناروتو الأجيال القادمة" },
  { pattern: /\bNaruto\b/gi, replacement: "ناروتو" },
  { pattern: /\bBoruto\b/gi, replacement: "بوروتو" },
  { pattern: /\bOne Piece\b/gi, replacement: "ون بيس" },
  { pattern: /\bDragon Ball Super\b/gi, replacement: "دراغون بول سوبر" },
  { pattern: /\bDragon Ball\b/gi, replacement: "دراغون بول" },
  { pattern: /\bAttack on Titan\b/gi, replacement: "هجوم العمالقة" },
  { pattern: /\bDetective Conan\b/gi, replacement: "المحقق كونان" },
  { pattern: /\bMagic Kaito\b/gi, replacement: "ماجك كايتو" },
  { pattern: /\bStudio Ghibli\b/gi, replacement: "استوديو غيبلي" },
  { pattern: /\bSpirited Away\b/gi, replacement: "المخطوفة" },
  { pattern: /\bPrincess Mononoke\b/gi, replacement: "الأميرة مونونوكي" },
  { pattern: /\bHowl's Moving Castle\b/gi, replacement: "قلعة هاول المتحركة" },
  { pattern: /\bHowl\b/gi, replacement: "هاول" },
  { pattern: /\bGrave of the Fireflies\b/gi, replacement: "مقبرة الخنافس" },
  { pattern: /\bPonyo\b/gi, replacement: "بونيو" },
  { pattern: /\bThe Secret World of Arrietty\b/gi, replacement: "العالم السرّي لأريتي" },
  { pattern: /\bArrietty\b/gi, replacement: "أريتي" },
  { pattern: /\bBleach\b/gi, replacement: "بليتش" },
  { pattern: /\bDeath Note\b/gi, replacement: "مذكرة الموت" },
  { pattern: /\bHunter x Hunter\b/gi, replacement: "القناص" },
  { pattern: /\bDemon Slayer\b/gi, replacement: "قاتل الشياطين" },
  { pattern: /\bMy Hero Academia\b/gi, replacement: "أكاديمية بطل" },
  { pattern: /\bJujutsu Kaisen\b/gi, replacement: "جوجوتسو كايسن" },
  { pattern: /\bFullmetal Alchemist\b/gi, replacement: "الكيميائي المعدني" },
  { pattern: /\bSword Art Online\b/gi, replacement: "سورد آرت أونلاين" },
  { pattern: /\bTokyo Ghoul\b/gi, replacement: "طوكيو غول" },
  { pattern: /\bChainsaw Man\b/gi, replacement: "رجل المنشار" },
  { pattern: /\bHaikyuu!!\b/gi, replacement: "هايكيو" },
  { pattern: /\bHaikyuu\b/gi, replacement: "هايكيو" },
  { pattern: /\bInitial D\b/gi, replacement: "إنيشال دي" },
  { pattern: /\bKiki's Delivery Service\b/gi, replacement: "كيكي لخدمات التوصيل" },
  { pattern: /\bNausicaä of the Valley of the Wind\b/gi, replacement: "ناوسيكا وادي الريح" },
  { pattern: /\bHikaru no Go\b/gi, replacement: "هيكارو نو غو" },
  { pattern: /\bGuren no Yumiya\b/gi, replacement: "قوس وسهم العنابي" },
  { pattern: /\bAshita no Joe\b/gi, replacement: "غداً جو" },

  // Gaming Platforms & Companies
  { pattern: /\bPlayStation\s*5\b/gi, replacement: "بلايستيشن 5" },
  { pattern: /\bPlayStation\s*4\b/gi, replacement: "بلايستيشن 4" },
  { pattern: /\bPlayStation\s*3\b/gi, replacement: "بلايستيشن 3" },
  { pattern: /\bPlayStation\s*2\b/gi, replacement: "بلايستيشن 2" },
  { pattern: /\bPlayStation\b/gi, replacement: "بلايستيشن" },
  { pattern: /\bPS5\b/gi, replacement: "بلايستيشن 5" },
  { pattern: /\bPS4\b/gi, replacement: "بلايستيشن 4" },
  { pattern: /\bPS3\b/gi, replacement: "بلايستيشن 3" },
  { pattern: /\bPS2\b/gi, replacement: "بلايستيشن 2" },
  { pattern: /\bXbox\s*360\b/gi, replacement: "إكس بوكس 360" },
  { pattern: /\bXbox\b/gi, replacement: "إكس بوكس" },
  { pattern: /\bNintendo\s*Switch\b/gi, replacement: "نينتندو سويتش" },
  { pattern: /\bNintendo\b/gi, replacement: "نينتندو" },
  { pattern: /\bSwitch\b/gi, replacement: "سويتش" },
  { pattern: /\bCapcom\b/gi, replacement: "كابكوم" },
  { pattern: /\bNaughty Dog\b/gi, replacement: "نوتي دوغ" },
  { pattern: /\bSquare Enix\b/gi, replacement: "سكوير إينكس" },
  { pattern: /\bKonami\b/gi, replacement: "كونامي" },
  { pattern: /\bUbisoft\b/gi, replacement: "يوبي سوفت" },
  { pattern: /\bRockstar Games\b/gi, replacement: "روكستار" },
  { pattern: /\bRockstar\b/gi, replacement: "روكستار" },

  // Gaming Titles with robust matching (including typos)
  { pattern: /\bGrand\s*Theft\s*Auto\s*V\b/gi, replacement: "جراند ثفت أوتو 5" },
  { pattern: /\bGrand\s*Theft\s*Auto\s*Vice\s*City\b/gi, replacement: "جراند ثفت أوتو: فايس سيتي" },
  { pattern: /\bGrand\s*Theft\s*Auto\s*San\s*Andreas\b/gi, replacement: "جراند ثفت أوتو: سان أندرياس" },
  { pattern: /\bGrand\s*Theft\s*Auto\b/gi, replacement: "جراند ثفت أوتو" },
  { pattern: /\bGTA\s*V\b/gi, replacement: "جراند ثفت أوتو 5" },
  { pattern: /\bGTA\s*Vice\s*City\b/gi, replacement: "جراند ثفت أوتو: فايس سيتي" },
  { pattern: /\bGTA\s*San\s*Andreas\b/gi, replacement: "جراند ثفت أوتو: سان أندرياس" },
  { pattern: /\bGTA\b/gi, replacement: "جراند ثفت أوتو" },

  { pattern: /\bCall\s+of\s+Duty\s+Mobile\b/gi, replacement: "كول أوف ديوتي موبايل" },
  { pattern: /\bCall\s+Duty\s+Mobile\b/gi, replacement: "كول أوف ديوتي موبايل" },
  { pattern: /\bCall\s+of\s+Duty\s+Modern\s+Warfare\b/gi, replacement: "كول أوف ديوتي: مودرن وورفير" },
  { pattern: /\bCall\s+Duty\s+Modern\s+Warfare\b/gi, replacement: "كول أوف ديوتي: مودرن وورفير" },
  { pattern: /\bCall\s+of\s+Duty\s+Warzone\b/gi, replacement: "كول أوف ديوتي: وورزون" },
  { pattern: /\bCall\s+Duty\s+Warzone\b/gi, replacement: "كول أوف ديوتي: وورزون" },
  { pattern: /\bCall\s+of\s+Duty\b/gi, replacement: "كول أوف ديوتي" },
  { pattern: /\bCall\s+Duty\b/gi, replacement: "كول أوف ديوتي" },
  { pattern: /\bModern\s+Warfare\b/gi, replacement: "مودرن وورفير" },
  { pattern: /\bWarzone\b/gi, replacement: "وورزون" },
  { pattern: /\bTask\s+Force\s+141\b/gi, replacement: "تاسك فورس 141" },
  { pattern: /\bTask\s+Force\b/gi, replacement: "تاسك فورس" },
  { pattern: /\bForce\s+141\b/gi, replacement: "تاسك فورس 141" },
  { pattern: /\bCOD\b/gi, replacement: "كول أوف ديوتي" },

  { pattern: /\bMinecraft\b/gi, replacement: "ماينكرافت" },
  { pattern: /\bFortnite\b/gi, replacement: "فورتنايت" },
  { pattern: /\bResident Evil\b/gi, replacement: "ريزيدنت إيفل" },
  { pattern: /\bSilent Hill\b/gi, replacement: "سايلنت هيل" },
  { pattern: /\bThe Last of Us\b/gi, replacement: "ذا لاست أوف أس" },
  { pattern: /\bGod of War\b/gi, replacement: "جود أوف وور" },
  { pattern: /\bElden Ring\b/gi, replacement: "إلدن رينغ" },
  { pattern: /\bDark Souls\b/gi, replacement: "دارك سولز" },
  { pattern: /\bZelda\b/gi, replacement: "زلدا" },
  { pattern: /\bSuper Mario\b/gi, replacement: "سوپر ماريو" },
  { pattern: /\bMario\b/gi, replacement: "ماريو" },
  { pattern: /\bSonic\b/gi, replacement: "سونيك" },
  { pattern: /\bPokémon\b/gi, replacement: "بوكيمون" },
  { pattern: /\bPokemon\b/gi, replacement: "بوكيمون" },
  { pattern: /\bPUBG\s*Mobile\b/gi, replacement: "ببجي موبايل" },
  { pattern: /\bPUBG\b/gi, replacement: "ببجي" },
  { pattern: /\bFree\s*Fire\b/gi, replacement: "فري فاير" },
  { pattern: /\bApex\s*Legends\b/gi, replacement: "أبيكس ليجندز" },
  { pattern: /\bBrawl\s*Stars\b/gi, replacement: "براول ستارز" },
  { pattern: /\bFall\s*Guys\b/gi, replacement: "فال غايز" },
  { pattern: /\bTetris\b/gi, replacement: "تيتريس" },
  { pattern: /\bBlack\s*Ops\b/gi, replacement: "بلاك أوبس" },
  { pattern: /\bWorld\s*at\s*War\b/gi, replacement: "وورلد أت وور" },
  { pattern: /\bVanguard\b/gi, replacement: "فانغارد" },
  { pattern: /\bBattlefield\b/gi, replacement: "باتلفيلد" },
  { pattern: /\bMedal\s*of\s*Honor\b/gi, replacement: "ميدل أوف هونر" },
  { pattern: /\bMedal\s*Honor\b/gi, replacement: "ميدل أوف هونر" },
  { pattern: /\bArma\b/gi, replacement: "آرما" },
  { pattern: /\bSaints\s*Row\b/gi, replacement: "سينتس رو" },
  { pattern: /\bRed\s*Dead\b/gi, replacement: "ريد ديد" },

  // Esports & Competitive Organizations
  { pattern: /\bValorant\s*Champions\s*Tour\b/gi, replacement: "جولة أبطال فالورانت" },
  { pattern: /\bVCT\b/gi, replacement: "في سي تي" },
  { pattern: /\bValorant\b/gi, replacement: "فالورانت" },
  { pattern: /\bCounter-Strike\s*\(CS:GO\s*\/\s*CS2\)\b/gi, replacement: "كاونتر سترايك" },
  { pattern: /\bCounter-Strike\b/gi, replacement: "كاونتر سترايك" },
  { pattern: /\bCS:GO\b/gi, replacement: "سي إس غو" },
  { pattern: /\bCS2\b/gi, replacement: "سي إس 2" },
  { pattern: /\bOverwatch\b/gi, replacement: "أوفرواتش" },
  { pattern: /\bPaladins\b/gi, replacement: "بالادينز" },
  { pattern: /\bRespawn\b/gi, replacement: "ريسباون" },
  { pattern: /\bTitanfall\b/gi, replacement: "تايتانفال" },
  { pattern: /\bRiot\s*Games\b/gi, replacement: "رايوت غيمز" },
  { pattern: /\bRiot\b/gi, replacement: "رايوت" },
  { pattern: /\bBlizzard\b/gi, replacement: "بليزارد" },
  { pattern: /\bValve\b/gi, replacement: "فالف" },
  { pattern: /\bEpic\s*Games\b/gi, replacement: "إيبك غيمز" },
  { pattern: /\bRainbow\s*Six\b/gi, replacement: "رينبو سكس" },

  // Full Technical Translations
  { pattern: /\bCentral\s+Processing\s+Unit\b/gi, replacement: "وحدة المعالجة المركزية" },
  { pattern: /\bRandom\s+Access\s+Memory\b/gi, replacement: "ذاكرة الوصول العشوائي" },
  { pattern: /\bRead\s*Only\s*Memory\b/gi, replacement: "ذاكرة القراءة فقط" },
  { pattern: /\bDrag\s+Reduction\s+System\b/gi, replacement: "نظام تقليل السحب الهوائي" },
  { pattern: /\bSuper\s+Bowl\b/gi, replacement: "السوبر بول" },
  { pattern: /\bBlack\s+Mamba\b/gi, replacement: "المامبا السوداء" },
  { pattern: /\bSkyhook\b/gi, replacement: "رمية الخطاف" },
  { pattern: /\bVolatile\s+Memory\b/gi, replacement: "ذاكرة متطايرة" },
  { pattern: /\bIn-Memory\b/gi, replacement: "في الذاكرة" },
  { pattern: /\bIntegrated\s+GPU\b/gi, replacement: "معالج رسوميات مدمج" },
  { pattern: /\bDiscrete\s+GPU\b/gi, replacement: "معالج رسوميات منفصل" },
  { pattern: /\bPound-for-pound\b/gi, replacement: "الأفضل لجميع الأوزان" },
  { pattern: /\bP4P\b/gi, replacement: "الأفضل لجميع الأوزان" },

  // Smart prefix terms
  { term: "Formula 1", replacement: "فورمولا 1" },
  { term: "F1", replacement: "فورمولا 1" },
  { term: "DRS", replacement: "دي آر إس" },
  { term: "NBA", replacement: "إن بي إيه" },
  { term: "NFL", replacement: "إن إف إل" },
  { term: "UFC", replacement: "يو إف سي" },
  { term: "UEFA", replacement: "الويفا" },
  { term: "FIFA", replacement: "الفيفا" },
  { term: "CPU", replacement: "سي بي يو" },
  { term: "RAM", replacement: "رام" },
  { term: "DRAM", replacement: "دي رام" },
  { term: "SRAM", replacement: "إس رام" },
  { term: "NVRAM", replacement: "إن في رام" },
  { term: "EEPROM", replacement: "إي إي بروم" },
  { term: "ROM", replacement: "روم" },
  { term: "GPU", replacement: "جي بي يو" },
  { term: "NPU", replacement: "إن بي يو" },
  { term: "TPU", replacement: "تي بي يو" },
  { term: "BIOS", replacement: "بايوس" },

  // Cleanup redundant mixed-parentheses
  { pattern: /\s*\(\s*UEFA\s+Champions\s+League\s*\)/gi, replacement: "" },
  { pattern: /\s*\(\s*American\s+Football\s*(?:\/\s*NFL)?\s*\)/gi, replacement: "" },

  // Organization Abbreviations
  { pattern: /\bCIA\b/gi, replacement: "المخابرات الأمريكية" },
  { pattern: /\bFBI\b/gi, replacement: "المباحث الفيدرالية" },
  { pattern: /\bNASA\b/gi, replacement: "ناسا" },
  { pattern: /\bUNESCO\b/gi, replacement: "اليونسكو" },
  { pattern: /\bCOVID-19\b/gi, replacement: "كوفيد-19" },
  { pattern: /\bCOVID\b/gi, replacement: "كوفيد" },
];

let textReplacedCount = 0;
let optionsReplacedCount = 0;

function arabizeText(text) {
  if (!text || typeof text !== "string") return text;
  let t = text;

  // Apply all replacement rules
  for (const rule of COMPREHENSIVE_REPLACEMENTS) {
    if (rule.pattern) {
      t = t.replace(rule.pattern, rule.replacement);
    } else if (rule.term) {
      const fullRegex = new RegExp(`(الـ|ال|للـ|بـ|لـ)?\\s*\\b${rule.term}\\b`, "gi");
      t = t.replace(fullRegex, (match, prefix) => {
        if (prefix) {
          let normalizedPrefix = prefix.trim();
          if (normalizedPrefix === "ال") {
            normalizedPrefix = "الـ";
          }
          return `${normalizedPrefix} ${rule.replacement}`;
        }
        return rule.replacement;
      });
    }
  }

  // Clean any remaining English words inside parentheses
  t = t.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)/g, "").trim();

  // Fix spacing and double question marks
  t = t.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  return t;
}

const arabizedQuestions = questions.map((q) => {
  const origText = q.question_text || "";
  const arabizedQText = arabizeText(origText);

  if (origText !== arabizedQText) textReplacedCount++;

  const origOptions = q.options || [];
  const arabizedOptions = origOptions.map((o) => arabizeText(o));

  if (JSON.stringify(origOptions) !== JSON.stringify(arabizedOptions)) {
    optionsReplacedCount++;
  }

  const origExplanation = q.explanation || "";
  const arabizedExplanation = arabizeText(origExplanation);

  return {
    ...q,
    question_text: arabizedQText,
    options: arabizedOptions,
    explanation: arabizedExplanation || null,
  };
});

console.log(`\nEnhanced Arabization Pipeline Results:
- Question Prompts Arabized & Cleaned: ${textReplacedCount}
- Option Strings Arabized & Cleaned: ${optionsReplacedCount}
`);

fs.writeFileSync(inputPath, JSON.stringify(arabizedQuestions, null, 2), "utf8");

// Also update starter-quizzes.ts
const starterPath = "./src/lib/starter-quizzes.ts";
if (fs.existsSync(starterPath)) {
  let starterCode = fs.readFileSync(starterPath, "utf8");
  starterCode = starterCode.replace("بطولات NBA مع", "بطولات إن بي إيه مع");
  fs.writeFileSync(starterPath, starterCode, "utf8");
  console.log("Updated starter-quizzes.ts with NBA arabization!");
}

console.log("Successfully updated merged_questions_launch_ready.json with Enhanced Arabized Pipeline!");
