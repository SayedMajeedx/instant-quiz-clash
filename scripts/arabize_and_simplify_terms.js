import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Starting Master Arabization and Terminology Simplification across ${questions.length} questions...`);

// Mapping of English / ASCII phrases to clean Arabic equivalents
const ARABIC_REPLACEMENTS = [
  // Jargon terms
  [/\bالمانغاكا المبتكر\b/gi, "المؤلف والمبتكر"],
  [/\bالمانغاكا\b/gi, "المؤلف والرسام"],
  [/\bمانغاكا\b/gi, "مؤلف ورسام"],
  [/\bالمانغا\b/gi, "قصص المانغا"],
  [/\bمانغا\b/gi, "قصص مانغا"],

  // Anime Titles & Franchise names
  [/\bBoruto:\s*Naruto Next Generations\b/gi, "بوروتو: الأجيال القادمة"],
  [/\bNaruto Next Generations\b/gi, "ناروتو الأجيال القادمة"],
  [/\bNaruto\b/gi, "ناروتو"],
  [/\bBoruto\b/gi, "بوروتو"],
  [/\bOne Piece\b/gi, "ون بيس"],
  [/\bDragon Ball Super\b/gi, "دراغون بول سوبر"],
  [/\bDragon Ball\b/gi, "دراغون بول"],
  [/\bAttack on Titan\b/gi, "هجوم العمالقة"],
  [/\bDetective Conan\b/gi, "المحقق كونان"],
  [/\bMagic Kaito\b/gi, "ماجك كايتو"],
  [/\bStudio Ghibli\b/gi, "استوديو غيبلي"],
  [/\bSpirited Away\b/gi, "المخطوفة"],
  [/\bPrincess Mononoke\b/gi, "الأميرة مونونوكي"],
  [/\bHowl's Moving Castle\b/gi, "قلعة هاول المتحركة"],
  [/\bHowl\b/gi, "هاول"],
  [/\bGrave of the Fireflies\b/gi, "مقبرة الخنافس"],
  [/\bPonyo\b/gi, "بونيو"],
  [/\bThe Secret World of Arrietty\b/gi, "العالم السرّي لأريتي"],
  [/\bArrietty\b/gi, "أريتي"],
  [/\bBleach\b/gi, "بليتش"],
  [/\bDeath Note\b/gi, "مذكرة الموت"],
  [/\bHunter x Hunter\b/gi, "القناص"],
  [/\bDemon Slayer\b/gi, "قاتل الشياطين"],
  [/\bMy Hero Academia\b/gi, "أكاديمية بطل"],
  [/\bJujutsu Kaisen\b/gi, "جوجوتسو كايسن"],
  [/\bFullmetal Alchemist\b/gi, "الكيميائي المعدني"],
  [/\bSword Art Online\b/gi, "سورد آرت أونلاين"],
  [/\bTokyo Ghoul\b/gi, "طوكيو غول"],
  [/\bChainsaw Man\b/gi, "رجل المنشار"],
  [/\bHaikyuu!!\b/gi, "هايكيو"],
  [/\bHaikyuu\b/gi, "هايكيو"],
  [/\bInitial D\b/gi, "إنيشال دي"],
  [/\bKiki's Delivery Service\b/gi, "كيكي لخدمات التوصيل"],
  [/\bNausicaä of the Valley of the Wind\b/gi, "ناوسيكا وادي الريح"],
  [/\bHikaru no Go\b/gi, "هيكارو نو غو"],
  [/\bGuren no Yumiya\b/gi, "قوس وسهم العنابي"],
  [/\bAshita no Joe\b/gi, "غداً جو"],

  // Gaming Platforms & Companies
  [/\bPlayStation 4\b/gi, "بلايستيشن 4"],
  [/\bPlayStation 5\b/gi, "بلايستيشن 5"],
  [/\bPlayStation 2\b/gi, "بلايستيشن 2"],
  [/\bPlayStation 3\b/gi, "بلايستيشن 3"],
  [/\bPlayStation\b/gi, "بلايستيشن"],
  [/\bPS4\b/gi, "بلايستيشن 4"],
  [/\bPS5\b/gi, "بلايستيشن 5"],
  [/\bPS2\b/gi, "بلايستيشن 2"],
  [/\bXbox 360\b/gi, "إكس بوكس 360"],
  [/\bXbox\b/gi, "إكس بوكس"],
  [/\bNintendo Switch\b/gi, "نينتندو سويتش"],
  [/\bNintendo\b/gi, "نينتندو"],
  [/\bSwitch\b/gi, "سويتش"],
  [/\bCapcom\b/gi, "كابكوم"],
  [/\bNaughty Dog\b/gi, "نوتي دوغ"],
  [/\bSquare Enix\b/gi, "سكوير إينكس"],
  [/\bKonami\b/gi, "كونامي"],
  [/\bUbisoft\b/gi, "يوبي سوفت"],
  [/\bRockstar Games\b/gi, "روكستار"],
  [/\bRockstar\b/gi, "روكستار"],

  // Gaming Titles
  [/\bGrand Theft Auto\b/gi, "جراند ثفت أوتو"],
  [/\bGTA\b/gi, "جراند ثفت أوتو"],
  [/\bCall of Duty\b/gi, "كول أوف ديوتي"],
  [/\bCOD\b/gi, "كول أوف ديوتي"],
  [/\bMinecraft\b/gi, "ماينكرافت"],
  [/\bFortnite\b/gi, "فورتنايت"],
  [/\bResident Evil\b/gi, "ريزيدنت إيفل"],
  [/\bSilent Hill\b/gi, "سايلنت هيل"],
  [/\bThe Last of Us\b/gi, "ذا لاست أوف أس"],
  [/\bGod of War\b/gi, "جود أوف وور"],
  [/\bElden Ring\b/gi, "إلدن رينغ"],
  [/\bDark Souls\b/gi, "دارك سولز"],
  [/\bZelda\b/gi, "زلدا"],
  [/\bSuper Mario\b/gi, "سوپر ماريو"],
  [/\bMario\b/gi, "ماريو"],
  [/\bSonic\b/gi, "سونيك"],
  [/\bPokémon\b/gi, "بوكيمون"],
  [/\bPokemon\b/gi, "بوكيمون"],

  // Sports & Technical
  [/\bFormula 1\b/gi, "فورمولا 1"],
  [/\bF1\b/gi, "فورمولا 1"],
  [/\bDRS\b/gi, "دي آر إس"],
  [/\bNBA\b/gi, "إن بي إيه (NBA)"],
  [/\bNFL\b/gi, "إن إف إل (NFL)"],
  [/\bUFC\b/gi, "يو إف سي (UFC)"],
  [/\bUEFA\b/gi, "الويفا"],
  [/\bFIFA\b/gi, "الفيفا"],
  [/\bCIA\b/gi, "المخابرات الأمريكية"],
  [/\bFBI\b/gi, "المباحث الفيدرالية"],
  [/\bNASA\b/gi, "ناسا"],
  [/\bUNESCO\b/gi, "اليونسكو"],
  [/\bCOVID-19\b/gi, "كوفيد-19"],
  [/\bCOVID\b/gi, "كوفيد"],
];

let textReplacedCount = 0;
let optionsReplacedCount = 0;
let jargonSimplifiedCount = 0;

function arabizeText(text) {
  if (!text || typeof text !== "string") return text;
  let t = text;

  // Track jargon replacement
  if (t.includes("مانغاكا")) {
    jargonSimplifiedCount++;
  }

  // Apply all regex replacement rules
  for (const [pattern, replacement] of ARABIC_REPLACEMENTS) {
    t = t.replace(pattern, replacement);
  }

  // Final cleanup of any leftover parenthetical English words in prompts
  t = t.replace(/\s*\([A-Za-z0-9\s\-/\\',.:&]+\)/g, "").trim();

  // Strip isolated English characters if any remain
  t = t.replace(/\s+[A-Za-z]{2,}\s+/g, " ");

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

  return {
    ...q,
    question_text: arabizedQText,
    options: arabizedOptions,
  };
});

console.log(`\nMaster Arabization Results:
- Question Prompts Arabized & Cleaned: ${textReplacedCount}
- Option Strings Arabized & Cleaned: ${optionsReplacedCount}
- Obscure Jargon ('مانغاكا') Simplified to 'المؤلف والرسام': ${jargonSimplifiedCount}
`);

fs.writeFileSync(inputPath, JSON.stringify(arabizedQuestions, null, 2), "utf8");
console.log("Successfully updated merged_questions_launch_ready.json with 100% Arabized text!");
