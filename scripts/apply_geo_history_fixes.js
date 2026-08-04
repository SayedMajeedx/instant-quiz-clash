import fs from "fs";

const inputPath = "./merged_questions_launch_ready.json";
if (!fs.existsSync(inputPath)) {
  console.error("File not found:", inputPath);
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputPath, "utf8"));
console.log(`Auditing and refining Geography & History questions across ${questions.length} items...`);

let capitalCityCount = 0;
let monumentCount = 0;
let statementCount = 0;
let garbledCount = 0;
let spoilCount = 0;

const refinedQuestions = questions.map((q) => {
  if (q.category !== "جغرافيا" && q.category !== "تاريخ") {
    return q;
  }

  let text = q.question_text || "";
  let options = [...(q.options || [])];
  let correctIndex = q.correct_index;
  let explanation = q.explanation || "";
  let modified = false;

  // 1. Fix Specific Garbled / Typo-Ridden Questions & Clean Phrasing
  if (q.id === "B001-GEO-012" || text.includes("الجمهورية الية")) {
    text = "ما هي عاصمة الجمهورية التونسية، والتي تُلقب بـ 'تونس الخضراء' وتطل على البحر الأبيض المتوسط؟";
    modified = true;
    garbledCount++;
  }

  if (q.id === "GEO-0156" || text.includes("ما اسم الي الفاصل")) {
    text = "ما اسم البحر الذي يقع شمال المحيط الهندي بين سلطنة عمان واليمن وشبه القارة الهندية؟";
    modified = true;
    garbledCount++;
  }

  if (text.includes("أوروبا السرقية")) {
    text = text.replace("أوروبا السرقية", "أوروبا الشرقية");
    modified = true;
    garbledCount++;
  }

  if (text.includes("للمايمن")) {
    text = text.replace("للمايمن", "لليمن");
    modified = true;
    garbledCount++;
  }

  if (q.id === "GEO-0107" || text.includes("جميع النصفين")) {
    text = "ما هي الدولة الوحيدة في العالم التي تمتد مساحتها الجغرافية عبر كلا النصفين الشمالي والجنوبي، ويمر بها خط الاستواء ومدار الجدي؟";
    modified = true;
    garbledCount++;
  }

  // 2. Fix Specific Direct Spoilers
  if (q.id === "GEO-0092" || text.includes("وليم بارنتس")) {
    text = "أي بحر يقع شمال روسيا ويعد جزءاً من المحيط المتجمد الشمالي، وسُمي باسم مستكشف هولندي تاريخي من القرن السادس عشر؟";
    modified = true;
    spoilCount++;
  }

  if (q.id === "GEO-0116" && options[0] === "تركيا (Türkiye)") {
    options[0] = "تركيا";
    modified = true;
    spoilCount++;
  }

  // 3. Fix Academic "True/False" Statement style questions
  const isAcademicStatement = options.some(o => typeof o === "string" && o.includes("عبارة خاطئة بالكامل"));
  if (isAcademicStatement) {
    statementCount++;
    modified = true;
    
    if (q.id === "GEO-0045") {
      text = "ما هي سلسلة الجبال الشاهقة التي تمتد عبر 8 دول في قلب أوروبا وتعد قمة 'مون بلان' أعلى قممها؟";
      options = ["جبال الألب", "جبال القوقاز", "جبال الأورال", "جبال الكاربات"];
      correctIndex = 0;
      explanation = "تمتد جبال الألب عبر 8 دول أوروبية، وأعلى قممها هي قمة مون بلان الشهيرة.";
    } else if (q.id === "GEO-0051") {
      text = "ما اسم أكبر صحراء رملية متواصلة في العالم، والتي تغطي نحو ثلث شبه الجزيرة العربية؟";
      options = ["صحراء الربع الخالي", "صحراء النفود الكبير", "الصحراء الكبرى", "صحراء غوبي"];
      correctIndex = 0;
      explanation = "صحراء الربع الخالي هي أكبر صحراء رملية متصلة في العالم وتغطي نحو 650 ألف كيلومتر مربع.";
    } else if (q.id === "GEO-0057") {
      text = "ما اسم الأخدود الطبيعي العملاق الذي نحته نهر كولورادو في ولاية أريزونا الأمريكية؟";
      options = ["الأخدود العظيم (جراند كانيون)", "وادي الموت", "صدع سان أندرياس", "وادي يوسيميتي"];
      correctIndex = 0;
      explanation = "نحت نهر كولورادو الأخدود العظيم (جراند كانيون) عبر ملايين السنين ليصبح أحد أشهر عجائب الطبيعة.";
    } else if (q.id === "GEO-0065") {
      text = "ما هي أعمق وأقدم بحيرة عذبة في العالم والتي تحتوي على نحو 20% من المياه العذبة غير المتجمدة على كوكبنا؟";
      options = ["بحيرة بايكال", "بحيرة سوبيريور", "بحيرة فيكتوريا", "بحيرة تنجانيقا"];
      correctIndex = 0;
      explanation = "تقع بحيرة بايكال في سيبيريا بروسيا وهي أعمق وأقدم بحيرة عذبة في العالم وحجمها هائل للغاية.";
    } else if (q.id === "GEO-0071") {
      text = "ما هي الشلالات الأسطورية الشهيرة التي تشكل حدوداً طبيعية مذهلة بين الولايات المتحدة وكندا؟";
      options = ["شلالات نياجرا", "شلالات فيكتوريا", "شلالات إجوازو", "شلالات أنجل"];
      correctIndex = 0;
      explanation = "تقع شلالات نياجرا بين ولاية نيويورك الأمريكية ومقاطعة أونتاريو الكندية وهي ممر مائي وسياحي شهير.";
    } else if (q.id === "GEO-0077") {
      text = "أي نهر أوروبي شهير ينبع من جبال الألب السويسرية ويمر عبر ألمانيا وهولندا ليصب في بحر الشمال؟";
      options = ["نهر الراين", "نهر الدانوب", "نهر السين", "نهر الفولغا"];
      correctIndex = 0;
      explanation = "نهر الراين ينبع من سويسرا ويمر بألمانيا وهولندا وهو شريان حيوي للاقتصاد والتاريخ في أوروبا.";
    } else if (q.id === "GEO-0091") {
      text = "أي بحر يقع قبالة الساحل الشرقي لأستراليا ويحتضن الحاجز المرجاني العظيم؟";
      options = ["بحر المرجان", "بحر تسمان", "بحر العرب", "بحر أرافورا"];
      correctIndex = 0;
      explanation = "بحر المرجان يضم الحاجز المرجاني العظيم وهو أكبر نظام للشعاب المرجانية الحية على وجه الأرض.";
    } else if (q.id === "GEO-0111") {
      text = "ما هي القارة الوحيدة على كوكب الأرض الخالية من السكان الدائمين وتغطيها طبقات جليدية هائلة؟";
      options = ["أنتاركتيكا (القارة القطبية الجنوبية)", "أستراليا", "أمريكا الشمالية", "أوروبا"];
      correctIndex = 0;
      explanation = "أنتاركتيكا هي خامس قارات العالم مساحة، ويحظر فيها النشاط العسكري والمناجم بموجب معاهدة أنتاركتيكا الدولية.";
    } else if (q.id === "HIS-0291") {
      text = "أي مدينة أثرية مذهلة مشيدة في أعالي جبال الأنديز ببيرو وتعتبر رمزاً لحضارة الإنكا؟";
      options = ["ماتشو بيتشو", "تشيتشن إيتزا", "تينوتشتيتلان", "بومبي"];
      correctIndex = 0;
      explanation = "بنيت مدينة ماتشو بيتشو في القرن الخامس عشر الميلادي وتعد من أهم معالم الهندسة الأثرية للإنكا وعجائب الدنيا السبع الحديثة.";
    } else {
      text = `هل العبارة الآتية صحيحة جغرافيّاً وتاريخيّاً؟: "${text}"`;
      options = ["عبارة صحيحة تماماً", "عبارة خاطئة بالكامل"];
      correctIndex = 0;
    }
  }

  // 4. Smooth Stiff Capital City Questions
  if (q.subcategory === "عواصم" && (text.startsWith("ما عاصمة") || text.startsWith("ما هي عاصمة"))) {
    capitalCityCount++;
    modified = true;
    
    const targetCountry = text.replace(/ما هي عاصمة\s+/i, "").replace(/ما عاصمة\s+/i, "").replace(/\s*\؟/g, "").trim();
    
    if (targetCountry === "نيوزيلندا") {
      text = "ما هي عاصمة نيوزيلندا الواقعة في أقصى جنوب العالم، وتعد العاصمة الأكثر قرباً للقطب الجنوبي؟";
    } else if (targetCountry === "الإمارات العربية المتحدة") {
      text = "ما هي العاصمة الاتحادية لدولة الإمارات العربية المتحدة والمركز الإداري والسياسي للبلاد؟";
    } else if (targetCountry === "مصر") {
      text = "ما هي العاصمة التاريخية لجمهورية مصر العربية وواحدة من أكبر المدن التاريخية في أفريقيا والشرق الأوسط؟";
    } else if (targetCountry === "المغرب") {
      text = "ما هي العاصمة السياسية والإدارية للمملكة المغربية، والتي تقع على ساحل المحيط الأطلسي؟";
    } else if (targetCountry === "إسبانيا") {
      text = "ما هي العاصمة الإسبانية العريقة التي تقع في وسط شبه الجزيرة الأيبيرية وتضم القصر الملكي التاريخي؟";
    } else if (targetCountry === "ألمانيا") {
      text = "ما هي العاصمة الفيدرالية لجمهورية ألمانيا الاتحادية، والتي شهدت سقوط الجدار التاريخي الشهير؟";
    } else if (targetCountry === "أستراليا") {
      text = "ما هي العاصمة الفيدرالية المصممة خصيصاً لأستراليا لتكون حلاً وسطاً وتفادياً للمنافسة بين سيدني وملبورن؟";
    } else if (targetCountry === "كندا") {
      text = "ما هي عاصمة كندا الاتحادية التي تم اختيارها كحل وسط بين المدن الناطقة بالإنجليزية والفرنسية؟";
    } else if (targetCountry === "فرنسا") {
      text = "ما هي العاصمة الفرنسية العريقة التي يمر بوسطها نهر السين وتُلقب بـ 'مدينة الأنوار'؟";
    } else if (targetCountry === "اليابان") {
      text = "ما هي العاصمة اليابانية الحديثة التي كانت تُعرف تاريخياً باسم 'إيدو' وتعد أكبر تجمّع حضري سكاناً في العالم؟";
    } else if (targetCountry === "الصين") {
      text = "ما هي العاصمة السياسية والتاريخية لجمهورية الصين الشعبية وتضم بداخلها 'المدينة المحرمة' الأثرية؟";
    } else if (targetCountry === "عُمان") {
      text = "ما هي العاصمة الساحلية لسلطنة عُمان والتي تشتهر بمينائها الطبيعي وتاريخها البحري الأسطوري العريق؟";
    } else if (targetCountry === "البحرين") {
      text = "ما هي العاصمة والميناء التاريخي لمملكة البحرين والمركز المالي والتجاري الأبرز لها؟";
    } else if (targetCountry === "السعودية") {
      text = "ما هي العاصمة السياسية للمملكة العربية السعودية وأكبر مدينة حديثة في قلب شبه الجزيرة العربية؟";
    } else if (targetCountry === "الكويت") {
      text = "ما هي العاصمة الساحلية المطلة على جون الخليج والتي تشكل المركز السياسي والاقتصادي لدولة الكويت؟";
    } else if (targetCountry === "قطر") {
      text = "ما هي العاصمة الساحلية لدولة قطر والمركز المالي والتجاري الحديث المطل على مياه الخليج العربي؟";
    } else if (targetCountry === "الأردن") {
      text = "ما هي العاصمة التاريخية للمملكة الأردنية الهاشمية والتي بُنيت قديماً فوق سبعة جبال؟";
    } else if (targetCountry === "العراق") {
      text = "ما هي العاصمة التاريخية لبلاد الرافدين ودار الخلافة العباسية العريقة التي أسسها أبو جعفر المنصور؟";
    } else if (targetCountry === "إيطاليا") {
      text = "ما هي العاصمة التاريخية لإيطاليا والتي كانت مقراً للإمبراطورية الرومانية القديمة وتُلقب بـ 'المدينة الخالدة'؟";
    } else {
      text = `ما هي العاصمة الرسمية والمركز الإداري والسياسي لدولة ${targetCountry}؟`;
    }
  }

  // 5. Refine Monument Location Questions
  if (q.subcategory === "معالم" && (text.startsWith("في أي دولة يقع") || text.startsWith("في أي دولة تقع") || text.startsWith("أين تقع") || text.startsWith("في أي مدينة يقع"))) {
    monumentCount++;
    modified = true;
    
    if (text.includes("برج إيفل")) {
      text = "في أي بلد أوروبي يرتفع برج إيفل الحديدي الشهير الذي صممه غوستاف إيفل كبوابة للمعرض العالمي عام 1889؟";
    } else if (text.includes("البتراء")) {
      text = "في أي بلد عربي تقع المدينة الوردية الأثرية 'البتراء' المنحوتة في الصخر والتي بناها الأنباط قديماً؟";
    } else if (text.includes("المسيح الفادي")) {
      text = "في أي دولة من دول أمريكا الجنوبية يقع تمثال 'المسيح الفادي' الضخم المطل على مدينة ريو دي جانيرو من فوق جبل كوركوفادو؟";
    } else if (text.includes("البرج الإيطالي الرخامي المائل")) {
      text = "في أي مدينة إيطالية تاريخية يقع برج جرس الكاتدرائية الرخامي المائل الذي بدأ بالميلان أثناء بنائه في القرن الثاني عشر؟";
    } else if (text.includes("أهرامات الجيزة")) {
      text = "في أي بلد عربي تقع هضبة الجيزة التي تحتضن عجيبة العالم القديم الوحيدة المتبقية حتى اليوم؟";
    } else if (text.includes("أنغكور وات")) {
      text = "في أي بلد آسيوي تقع مدينة المعابد الأثرية 'أنغكور وات' والتي تعد أكبر نصب ديني في العالم وتظهر على العلم الوطني لبلادها؟";
    } else if (text.includes("دار الأوبرا الشهير ذو الأشرعة البيضاء") || text.includes("دار الأوبرا")) {
      text = "في أي مدينة أسترالية ساحلية يقع مبنى دار الأوبرا الشهير بتصميمه المبتكر الذي يشبه أشرعة السفن البيضاء المتداخلة؟";
    } else if (text.includes("البندقية")) {
      text = "في أي بلد أوروبي تقع مدينة البندقية (فينيسيا) التاريخية الشهيرة بقنواتها المائية الفريدة وجسورها وخلوّها من السيارات؟";
    }
  }

  if (modified) {
    return {
      ...q,
      question_text: text,
      options: options,
      correct_index: correctIndex,
      explanation: explanation,
      version: (q.version || 1) + 1,
    };
  }

  return q;
});

fs.writeFileSync(inputPath, JSON.stringify(refinedQuestions, null, 2), "utf8");

console.log(`
REFINEMENT PIPELINE COMPLETE:
------------------------------------------
- Garbled / Typo-Ridden Questions Fixed: ${garbledCount}
- Dry Capital City Questions Humanized: ${capitalCityCount}
- Monument Location Questions Humanized: ${monumentCount}
- Stiff Statement-style (T/F) Questions Replaced: ${statementCount}
- Direct Clues and Spoilers Refined: ${spoilCount}

Successfully updated merged_questions_launch_ready.json!
`);
