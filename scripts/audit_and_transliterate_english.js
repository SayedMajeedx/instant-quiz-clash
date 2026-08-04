import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
const tsOutputPath = "./src/lib/quiz-library.ts";

if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Auditing and Translating ${questions.length} questions for zero English text in prompts/options...`);

const DICT = {
  // Long Phrases / Multi-word terms (sorted by length descending in execution)
  "dragon ball super": "دراغون بول سوبر",
  "dragon ball z": "دراغون بول زد",
  "dragon ball": "دراغون بول",
  "one piece": "ون بيس",
  "naruto shippuden": "ناروتو شيبودن",
  "grand theft auto v": "جراند ثفت أوتو 5",
  "grand theft auto": "جراند ثفت أوتو",
  "the last of us": "ذا لاست أوف أس",
  "ghost of tsushima": "غوست أوف تسوشيما",
  "shinzo sasageyo": "شينزو ساساغيو",
  "the rumbling": "ذا رامبلينغ",
  "red swan": "ريد سوان",
  "linked horizon": "لينكد هورايزون",
  "space invaders": "سبايس إنفيدرز",
  "pac-man": "باك مان",
  "pacman": "باك مان",
  "elden ring": "إيلدن رينغ",
  "dark souls": "دارك سولز",
  "resident evil": "ريزيدنت إيفل",
  "silent hill": "سايلنت هيل",
  "tomb raider": "تومب رايدر",
  "assassin's creed": "أساسنز كريد",
  "assassins creed": "أساسنز كريد",
  "call of duty": "كول أوف ديوتي",
  "counter-strike": "كونتر سترايك",
  "counter strike": "كونتر سترايك",
  "league of legends": "ليغ أوف ليجيندز",
  "world of warcraft": "ورلد أوف واركرافت",
  "yu-gi-oh!": "يوغي يو",
  "yu-gi-oh": "يوغي يو",
  "yugioh": "يوغي يو",
  "captain tsubasa": "كابتن تسوباسا",
  "slam dunk": "سلام دانك",
  "metal gear solid": "ميتال جير سوليد",
  "devil may cry": "ديفل ماي كراي",
  "monster hunter": "مونستر هانتر",
  "cyberpunk 2077": "سايبربانك 2077",
  "ayrton senna": "أيرتون سينا",
  "le mans": "لومان",
  "formula 1": "فورمولا 1",
  "formula one": "فورمولا 1",
  "apollo 11": "أبوللو 11",
  "margaret hamilton": "مارغريت هاميلتون",
  "lewis hamilton": "لويس هاميلتون",
  "playstation 5": "بلايستيشن 5",
  "playstation 4": "بلايستيشن 4",
  "playstation 3": "بلايستيشن 3",
  "playstation 2": "بلايستيشن 2",
  "playstation": "بلايستيشن",
  "stray": "ستراي",
  "minecraft": "ماين كرافت",
  "fortnite": "فورتنايت",
  "pubg": "ببجي",
  "tetris": "تيتريس",
  "pong": "بونغ",
  "naruto": "ناروتو",
  "capcom": "كابكوم",
  "drs": "دي آر إس",
  "f1": "فورمولا 1",
  "xbox": "إكس بوكس",
  "nintendo": "نينتندو",
  "sega": "سيغا",
  "genesis": "جينيسيس",
  "schumacher": "شوماخر",
  "hamilton": "هاميلتون",
  "nasa": "ناسا",
  "sony": "سوني",
  "microsoft": "مايكروسوفت",
  "gta": "جي تي إيه",
  "batman": "باتمان",
  "superman": "سوبرمان",
  "zelda": "زيلدا",
  "mario": "ماريو",
  "sonic": "سونيك",
  "pokemon": "بوكيمون",
  "pokémon": "بوكيمون",
  "witcher": "ويتشر",
  "skyrim": "سكايرم",
  "dota": "دوتا",
  "atari": "أتاري",
  "konami": "كونامي",
  "ubisoft": "يوبي سوفت",
  "blizzard": "بليزارد",
  "valve": "فالف",
  "steam": "ستيم",
  "rockstar": "روكستار",
  "kratos": "كراتوس",
  "geralt": "جيرالت",
  "master chief": "ماستر شيف",
  "link": "لينك",
  "crash bandicoot": "كراش بانديكوت",
  "spyro": "سبايرو",
  "conan": "كونان",
  "sherlock": "شيرلوك",
  "holmes": "هولمز",
  "harry potter": "هاري بوتر",
  "star wars": "حرب النجوم",
  "james bond": "جيمس بوند",
  "uchiha": "أوتشيها",
  "uzumaki": "أوزوماكي",
  "ackerman": "أكرمان",
  "akerman": "أكرمان",
  "fifa": "فيفا",
  "nascar": "ناسكار",
  "indy": "إندي",
  "dakar": "داكار",
  "ios": "آي أو إس",
  "android": "أندرويد",
  "apple": "أبل",
  "google": "غوغل",
  "mac": "ماك",
  "windows": "ويندوز",
  "wifi": "واي فاي",
  "wi-fi": "واي فاي",
  "bluetooth": "بلوتوث",
  "gps": "جي بي إس",
  "email": "البريد الإلكتروني",
  "pdf": "بي دي إف",
  "cd": "سي دي",
  "dvd": "دي في دي",
  "vr": "الواقع الافتراضي",
  "ar": "الواقع المعزز",
  "heron": "طائر الغرنوق",
  "rosso": "روسو",
  "initial d": "إنيشال دي",
  "ae86": "إيه إي 86",
  "clover": "بلاك كلوفر",
  "dunk": "سلام دانك",
  "sky": "قلعة في السماء",
  "punch": "فاير بانتش",
  "lock": "بلو لوك",
  "blue": "بلو",
  "fireflies": "قبر اليراعات",
  "name": "اسمك",
  "you": "أفلام 'اسمك' و'أطفال الطقس'",
  "yu hakusho": "يو يو هاكوشو",
  "i.g": "آي جي"
};

const sortedKeys = Object.keys(DICT).sort((a, b) => b.length - a.length);

function replaceEnglishTerms(text) {
  if (!text || typeof text !== "string") return text;
  let result = text;
  for (const key of sortedKeys) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = escaped;
    if (/^[A-Za-z0-9]/.test(key)) pattern = "\\b" + pattern;
    if (/[A-Za-z0-9]$/.test(key)) pattern = pattern + "\\b";
    
    const regex = new RegExp(pattern, "gi");
    result = result.replace(regex, DICT[key]);
  }
  return result;
}

function removeRedundantParentheticals(text) {
  if (!text || typeof text !== "string") return text;
  let clean = text;
  const matches = text.match(/\(([^)]*[a-zA-Z][^)]*)\)/g) || [];
  for (const match of matches) {
    const inside = match.slice(1, -1).trim().toLowerCase();
    if (DICT[inside]) {
      const translation = DICT[inside];
      if (clean.includes(translation)) {
        clean = clean.replace(match, "").trim();
      }
    }
  }
  return clean;
}

function replaceJargon(text) {
  if (!text || typeof text !== "string") return text;
  return text
    .replace(/المانغاكا/g, "المؤلف والرسام")
    .replace(/مانغاكا/g, "المؤلف والرسام")
    .replace(/المانجاكا/g, "المؤلف والرسام")
    .replace(/مانجاكا/g, "المؤلف والرسام");
}

let modifiedCount = 0;

const updatedQuestions = questions.map((q) => {
  let text = q.question_text || "";
  let options = [...(q.options || [])];
  let explanation = q.explanation || "";
  let modified = false;

  const originalText = text;
  const originalOptions = JSON.stringify(options);
  const originalExplanation = explanation;

  // Apply math and science overrides
  if (text.includes("نصف القطر r")) {
    text = text.replace("نصف القطر r", "نصف القطر (نق)");
    options = options.map(o => o === "π × r²" ? "باي × نق²" : o === "2 × π × r" ? "2 × باي × نق" : o === "4 × π × r²" ? "4 × باي × نق²" : o === "π × d" ? "باي × القطر" : o);
  }
  if (text.includes("sin(90°)")) {
    text = text.replace("جيب الزاوية 90 درجة (sin(90°))", "جيب الزاوية 90 درجة (جا(90))");
  }
  if (text.includes("cos(0°)")) {
    text = text.replace("جيب التمام للزاوية 0 درجة (cos(0°))", "جيب تمام الزاوية 0 (جتا(0))");
  }
  if (text.includes("tan(45°)")) {
    text = text.replace("ظل الزاوية 45 درجة (tan(45°))", "ظل الزاوية 45 درجة (ظا(45))");
  }
  if (text.includes("1/cos(θ)")) {
    text = text.replace("النسبة المثلثية المقلوبة لنسبة جيب التمام (1/cos(θ))", "النسبة المثلثية المقلوبة لنسبة جيب التمام (مقلوب الجتا)");
  }
  if (text.includes("1/sin(θ)")) {
    text = text.replace("مقلوب نسبة الجيب (1/sin(θ))", "مقلوب نسبة الجيب (مقلوب الجا)");
  }
  if (text.includes("c² = a² + b² - 2ab cos")) {
    text = text.replace("c² = a² + b² - 2ab cos.", "الشهير.");
  }
  if (text.includes("y = 3 sin")) {
    text = text.replace("الممثلة بالدالة y = 3 sin؟", "الممثلة بالدالة جا؟");
  }
  if (text.includes("e^(iπ) + 1 = 0")) {
    text = text.replace("وصاحب هوية e^(iπ) + 1 = 0؟", "وصاحب الهوية الأسية الشهيرة؟");
  }
  if (text.includes("SCAMPER")) {
    text = text.replace("في أداة SCAMPER، حرف S يشير إلى أسلوب الاستبدال وحرس C يشير للدمج.", "في أداة سكامبر (SCAMPER)، يشير الحرف الأول إلى الاستبدال والثاني إلى الدمج.");
  }
  if (text.includes("المتتالية الهندسية اللانهائية التي أساسها r الأصغر من 1")) {
    text = text.replace("التي أساسها r الأصغر من 1", "التي أساسها الأصغر من 1");
  }
  if (text.includes("2ⁿ - 1")) {
    text = text.replace("لنقل n من الأقراص يعطى بالقانون 2ⁿ - 1.", "لنقل الأقراص.");
  }
  if (text.includes("= a +d")) {
    text = text.replace("حدها الأول a وأساسها d يعطى بالقانون = a +d.", "حدها الأول وأساسها.");
  }
  if (text.includes("العدد الثابت e (عدد إيولر)")) {
    text = text.replace("e (عدد إيولر)", "هـ (عدد إيولر)");
  }
  if (text.includes("a/b")) {
    text = text.replace("صورة كسر a/b حيث a و b أعداد صحيحة و b ≠ 0؟", "صورة كسر اعتيادي بسطه ومقامه أعداد صحيحة؟");
  }
  if (text.includes("العدد التخيلي الأسي الأساسي i حيث i²")) {
    text = text.replace("العدد التخيلي الأسي الأساسي i حيث i² يساوي؟", "مربع العدد التخيلي (ت)؟");
  }
  if (text.includes("(a + b)^n")) {
    text = text.replace("مرفوع لأي أس صحيح موجب (a + b)^n؟", "مرفوع لأي أس صحيح موجب؟");
  }
  if (text.includes("A = Aᵀ")) {
    text = text.replace("(A = Aᵀ)", "");
  }
  if (text.includes("مصفوفة مربعة A")) {
    text = text.replace("مصفوفة مربعة A في", "مصفوفة مربعة في");
  }
  if (text.includes("الدرجة n تملك بالضبط n")) {
    text = text.replace("من الدرجة n تملك بالضبط n من الجذور المركبة؟", "من درجة معينة تملك عدداً من الجذور المركبة مساوياً لدرجتها؟");
  }
  if (text.includes("(x² - 9)")) {
    text = text.replace("مثل (x² - 9)؟", "مثل سين تربيع ناقص تسعة؟");
  }
  if (text.includes("(a² - b²)")) {
    text = text.replace("(a² - b²) يمكن تحليله دائماً إلى(a + b).", "يمكن تحليله دائماً.");
  }
  if (text.includes("المدخل x في")) {
    text = text.replace("المدخل x في الدالة", "المدخلات في الدالة");
  }
  if (text.includes("y = ax² + + c")) {
    text = text.replace("y = ax² + + c؟", "التربيعية؟");
  }
  if (text.includes("Blue حقق إيرادات")) {
    text = text.replace("Blue", "القبضة اللازوردية");
  }
  if (text.includes("Heron (الولد والبرشون)")) {
    text = text.replace("Heron (الولد والبرشون)", "الصبي وطائر الغرنوق");
  }

  text = removeRedundantParentheticals(text);
  text = replaceEnglishTerms(text);
  options = options.map(o => replaceEnglishTerms(o));
  explanation = replaceEnglishTerms(explanation);

  text = replaceJargon(text);
  options = options.map(o => replaceJargon(o));
  explanation = replaceJargon(explanation);

  text = text.replace(/\s*\([^)]*[a-zA-Z][^)]*\)/g, "").trim();
  text = text.replace(/\s*\[[^\]]*[a-zA-Z][^\]]*\]/g, "").trim();
  options = options.map(o => o.replace(/\s*\([^)]*[a-zA-Z][^)]*\)/g, "").trim());
  options = options.map(o => o.replace(/\s*\[[^\]]*[a-zA-Z][^\]]*\]/g, "").trim());

  text = text.replace(/\s+/g, " ").replace(/\s+\؟/g, "؟").replace(/\؟+/g, "؟").trim();

  if (text !== originalText || JSON.stringify(options) !== originalOptions || explanation !== originalExplanation) {
    modified = true;
    modifiedCount++;
  }

  return {
    ...q,
    question_text: text,
    options: options,
    explanation: explanation
  };
});

fs.writeFileSync(inputPath, JSON.stringify(updatedQuestions, null, 2), "utf8");
console.log(`\nReplacement pipeline completed. ${modifiedCount} questions modified.`);
