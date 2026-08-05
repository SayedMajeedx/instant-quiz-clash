import type { Question, Quiz } from "@/lib/quizclash";

export type LibraryQuiz = Quiz & {
  category: string;
  language: string;
  quiz_difficulty?: "standard" | "challenge" | "medium" | "beginner" | "expert" | null;
  archived?: boolean;
  launch_enabled?: boolean;
  questions: Omit<Question, "id" | "quiz_id">[];
};

// Hand-authored Arabic quiz library. Generated from content/quizzes/*.json
// and the reviewed ahl_albayt_quizzes/*/*_game.json files.
// by scripts/build_quiz_library.mjs — edit the JSON sources, not this file.
export const QUIZ_LIBRARY: LibraryQuiz[] = [
  {
    "id": "lib-anime-01",
    "user_id": "system",
    "title": "أنمي كلاسيكي وحديث",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "أنمي",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "في أي أنمي يسعى البطل ليصبح ملك القراصنة؟",
        "options": [
          "بليتش",
          "ون بيس",
          "ناروتو",
          "فيري تيل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من تأليف إييتشيرو أودا."
      },
      {
        "question_text": "ما اسم الدفتر الذي يقتل من يُكتب اسمه فيه في أنمي شهير؟",
        "options": [
          "دفتر الأرواح",
          "مذكرة الموت",
          "سجل القدر",
          "كتاب الظلال"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بطله الطالب لايت ياغامي."
      },
      {
        "question_text": "في أنمي هجوم العمالقة، ما اسم السور الخارجي الأول؟",
        "options": [
          "ماريا",
          "روزا",
          "سينا",
          "شيغانشينا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سقط في الحلقة الأولى."
      },
      {
        "question_text": "ما اسم القرية التي ينتمي إليها ناروتو؟",
        "options": [
          "قرية الرمل",
          "قرية الورق",
          "قرية الضباب",
          "قرية السحاب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كونوها أي ورقة الشجر."
      },
      {
        "question_text": "أي استوديو ياباني أنتج فيلم المخطوف رحلة تشيهيرو؟",
        "options": [
          "استوديو غيبلي",
          "مادهاوس",
          "بونز",
          "توي أنيميشن"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بإخراج هاياو ميازاكي."
      },
      {
        "question_text": "في أنمي الخيميائي المعدني، ما المبدأ الذي يحكم الخيمياء؟",
        "options": [
          "التبادل المتكافئ",
          "قانون الظل",
          "دورة الحياة",
          "ميثاق الدم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يمكن الحصول على شيء دون تقديم مقابل."
      },
      {
        "question_text": "ما اسم الوحش الأزرق ذو الشحنات الكهربائية الأشهر في بوكيمون؟",
        "options": [
          "تشارمندر",
          "بيكاتشو",
          "بولباصور",
          "سكويرتل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رفيق آش الدائم."
      },
      {
        "question_text": "في أنمي كرة السلة كوروكو، ما اللعبة المحورية؟",
        "options": [
          "كرة القدم",
          "كرة السلة",
          "الكرة الطائرة",
          "البيسبول"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يدور حول فريق مدرسي طموح."
      },
      {
        "question_text": "ما الاسم الذي يُطلق على الوحوش في أنمي قاتل الشياطين؟",
        "options": [
          "الهولو",
          "الأونى الشياطين",
          "التيتان",
          "الأكوما فقط"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقاتلهم فيلق قتلة الشياطين."
      },
      {
        "question_text": "من مؤلف أنمي دراغون بول؟",
        "options": [
          "ماساشي كيشيموتو",
          "أكيرا تورياما",
          "تيتي كوبو",
          "هيرومو أراكاوا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدأت المانغا عام 1984."
      },
      {
        "question_text": "ما التقنية الأشهر التي يستخدمها غوكو ويُطلقها من كفيه؟",
        "options": [
          "الراسينغان",
          "الكاميهاميها",
          "الغيتسوغا",
          "الجيان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شعاع طاقة مركّز."
      },
      {
        "question_text": "في أنمي ديث بيريد الرياضي هايكيو، ما الرياضة الأساسية؟",
        "options": [
          "التنس",
          "الكرة الطائرة",
          "المصارعة",
          "السباحة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يركز على فريق مدرسة كاراسونو."
      }
    ]
  },
  {
    "id": "lib-anime-02",
    "user_id": "system",
    "title": "أنمي — للخبراء",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "أنمي",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما اسم منظمة الأشرار التي تجمع المستذئبين الذيول في ناروتو؟",
        "options": [
          "الأكاتسكي",
          "الأنبو",
          "الأوتو",
          "الرووت"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يميّزها الرداء الأسود بالغيوم الحمراء."
      },
      {
        "question_text": "في أنمي إيفانغيليون، ما اسم المنظمة التي تقود الروبوتات؟",
        "options": [
          "نيرف",
          "سيل",
          "ويل",
          "غيهيرن الحالية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقودها غيندو إيكاري."
      },
      {
        "question_text": "ما القدرة الأساسية للبطل في أنمي هنتر × هنتر والمعروفة بطاقة الحياة؟",
        "options": [
          "الشاكرا",
          "النين",
          "الهاكي",
          "الريو"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنقسم إلى ست فئات رئيسية."
      },
      {
        "question_text": "ما اسم السيف الذي يحمله البطل في بليتش؟",
        "options": [
          "زانباكوتو",
          "كاتانا الظل",
          "موراماسا",
          "كوساناغي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لكل شينيغامي سيف باسم خاص."
      },
      {
        "question_text": "أي أنمي يدور حول لعبة عقلية بين مقامرين في مدرسة نخبوية؟",
        "options": [
          "كاكيغوروي",
          "نو غيم نو لايف",
          "ليار غيم",
          "أكاغي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بطلته يوميكو جابامي."
      },
      {
        "question_text": "ما اسم اللعنة الرئيسية التي تسكن جسد البطل في جوجوتسو كايسن؟",
        "options": [
          "سوكونا",
          "ماهيتو",
          "جوغو",
          "كينجاكو"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُلقّب بملك اللعنات."
      },
      {
        "question_text": "ما الأنمي الذي يتناول رحلة صياد يبحث عن والده مع نظام صيادين رسمي؟",
        "options": [
          "هنتر × هنتر",
          "بلاك كلوفر",
          "دي غراي مان",
          "سول إيتر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بطله غون فريكس."
      },
      {
        "question_text": "في أنمي كود غياس، ما القدرة التي يحصل عليها لولوش؟",
        "options": [
          "قراءة الأفكار",
          "إصدار أمر مطلق يُطاع مرة واحدة",
          "إيقاف الزمن",
          "التنقل الآني"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعمل عبر التواصل البصري."
      },
      {
        "question_text": "ما اسم المدرسة في أنمي أكاديميتي للأبطال؟",
        "options": [
          "شيكيتسو",
          "يو إيه",
          "كيتسوني",
          "سيتوكاي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشهر أكاديميات تدريب الأبطال في القصة."
      },
      {
        "question_text": "أي مخرج ياباني اشتهر بأفلام مثل اسمك وطقس معك؟",
        "options": [
          "ماكوتو شينكاي",
          "ساتوشي كون",
          "مامورو هوسودا",
          "إيسا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يميّزه أسلوب بصري شديد التفصيل."
      },
      {
        "question_text": "في أنمي ستينز غيت، ما الجهاز الذي يُستخدم لإرسال الرسائل إلى الماضي؟",
        "options": [
          "الميكروويف المعدّل",
          "الهاتف الزمني الكمي",
          "الحاسوب المركزي",
          "بوابة النجوم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحوّل صدفة إلى آلة زمن للرسائل."
      },
      {
        "question_text": "ما اسم عائلة القتلة والجواسيس في أنمي سباي × فاميلي الظاهري؟",
        "options": [
          "فورجر",
          "ديزموند",
          "بريار",
          "بلاكبيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عائلة مصطنعة لتنفيذ مهمة سرية."
      }
    ]
  },
  {
    "id": "lib-general-01",
    "user_id": "system",
    "title": "معلومات عامة — الجولة الأولى",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "معلومات عامة",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "ما العنصر الكيميائي الأكثر وفرة في الغلاف الجوي للأرض؟",
        "options": [
          "الأكسجين",
          "النيتروجين",
          "ثاني أكسيد الكربون",
          "الأرغون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يشكّل النيتروجين نحو 78% من الهواء مقابل 21% للأكسجين."
      },
      {
        "question_text": "أي عملة رسمية تُستخدم في اليابان؟",
        "options": [
          "الوون",
          "اليوان",
          "الين",
          "الروبية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الوون كوري واليوان صيني."
      },
      {
        "question_text": "كم عدد الأضلاع في شكل هندسي يُسمى المُثمَّن؟",
        "options": [
          "ستة",
          "سبعة",
          "ثمانية",
          "عشرة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المثمّن ثماني الأضلاع، ومنه شكل إشارة التوقف المرورية."
      },
      {
        "question_text": "ما أكبر عضو في جسم الإنسان من حيث المساحة؟",
        "options": [
          "الكبد",
          "الجلد",
          "الرئتان",
          "الأمعاء الدقيقة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الجلد أكبر أعضاء الجسم، والكبد أكبر عضو داخلي."
      },
      {
        "question_text": "أي غاز تمتصه النباتات من الهواء أثناء عملية البناء الضوئي؟",
        "options": [
          "ثاني أكسيد الكربون",
          "الأكسجين",
          "الميثان",
          "الهيدروجين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تأخذه مع الماء والضوء وتطلق الأكسجين."
      },
      {
        "question_text": "ما اسم أطول نهر في القارة الأفريقية؟",
        "options": [
          "الكونغو",
          "النيجر",
          "النيل",
          "الزمبيزي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمتد النيل أكثر من 6600 كم عبر عدة دول."
      },
      {
        "question_text": "في أي مجال تُمنح جائزة بوليتزر بشكل أساسي؟",
        "options": [
          "الصحافة والأدب",
          "الفيزياء",
          "السينما",
          "الاقتصاد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُمنح سنويًا في الولايات المتحدة للصحافة والأدب والموسيقى."
      },
      {
        "question_text": "ما المعدن السائل في درجة حرارة الغرفة؟",
        "options": [
          "الرصاص",
          "الزئبق",
          "القصدير",
          "الصوديوم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الزئبق المعدن الوحيد السائل في الظروف العادية."
      },
      {
        "question_text": "كم عدد الحروف في الأبجدية العربية؟",
        "options": [
          "26",
          "28",
          "29",
          "30"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ثمانية وعشرون حرفًا، وتُضاف الهمزة أحيانًا كحرف تاسع وعشرين."
      },
      {
        "question_text": "أي كوكب في مجموعتنا الشمسية يمتلك أكبر عدد من الأقمار المؤكدة؟",
        "options": [
          "المشتري",
          "زحل",
          "أورانوس",
          "نبتون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تجاوز زحل المشتري بعد اكتشافات أقمار صغيرة متتالية."
      },
      {
        "question_text": "ما الاسم العلمي للحالة التي يفقد فيها الدم قدرته على حمل الأكسجين بكفاءة بسبب نقص الحديد؟",
        "options": [
          "السكري",
          "فقر الدم",
          "الروماتيزم",
          "النقرس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقص الحديد يقلل الهيموغلوبين فيقل نقل الأكسجين."
      },
      {
        "question_text": "أي مدينة تُعرف تاريخيًا باسم القسطنطينية؟",
        "options": [
          "أثينا",
          "إزمير",
          "إسطنبول",
          "أنقرة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "غُيّر الاسم رسميًا إلى إسطنبول عام 1930."
      }
    ]
  },
  {
    "id": "lib-general-02",
    "user_id": "system",
    "title": "معلومات عامة — تحدٍّ متقدم",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "معلومات عامة",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما الوحدة التي تُقاس بها شدة الإضاءة في النظام الدولي؟",
        "options": [
          "اللومن",
          "الكانديلا",
          "اللوكس",
          "الواط"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الكانديلا وحدة أساسية، أما اللومن واللوكس فمشتقان منها."
      },
      {
        "question_text": "من صاحب نظرية أن الأرض تدور حول الشمس والتي نشرها في القرن السادس عشر؟",
        "options": [
          "كوبرنيكوس",
          "بطليموس",
          "كبلر",
          "برونو"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نشر كتابه عن دوران الأجرام السماوية عام 1543."
      },
      {
        "question_text": "ما أعمق نقطة معروفة في محيطات الأرض؟",
        "options": [
          "خندق بورتوريكو",
          "خندق ماريانا",
          "خندق جاوة",
          "خندق التونغا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يبلغ عمقها نحو 11 كم في المحيط الهادئ."
      },
      {
        "question_text": "أي مادة تُعد الأصلب طبيعيًا على مقياس موس؟",
        "options": [
          "الكوارتز",
          "الياقوت",
          "الألماس",
          "التوباز"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحتل الألماس الدرجة العاشرة وهي الأعلى."
      },
      {
        "question_text": "ما العملية التي يتحول فيها الجسم الصلب إلى غاز مباشرة دون المرور بالحالة السائلة؟",
        "options": [
          "التكثّف",
          "التسامي",
          "الانصهار",
          "التبخّر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مثالها الثلج الجاف عند تعرضه للهواء."
      },
      {
        "question_text": "في أي عام انتهت الحرب العالمية الأولى؟",
        "options": [
          "1914",
          "1917",
          "1918",
          "1920"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وقّعت الهدنة في نوفمبر 1918 وتلتها معاهدة فرساي عام 1919."
      },
      {
        "question_text": "ما اسم أصغر وحدة تحمل خصائص المركّب الكيميائي؟",
        "options": [
          "الذرة",
          "الجزيء",
          "الأيون",
          "النواة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفكيك الجزيء إلى ذراته يفقد المركب خصائصه."
      },
      {
        "question_text": "أي بحر يُصنّف الأعلى ملوحة بين المسطحات المائية المشهورة حتى صار الطفو فيه سهلًا؟",
        "options": [
          "البحر الأحمر",
          "البحر الميت",
          "بحر قزوين",
          "البحر الأسود"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصل ملوحته إلى نحو عشرة أضعاف مياه المحيط."
      },
      {
        "question_text": "ما المصطلح الاقتصادي الذي يصف الارتفاع المستمر في المستوى العام للأسعار؟",
        "options": [
          "الكساد",
          "التضخم",
          "الركود",
          "الانكماش"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقابله الانكماش وهو تراجع مستمر في الأسعار."
      },
      {
        "question_text": "ما اللغة التي تحتوي على أكبر عدد من الناطقين بها كلغة أم في العالم؟",
        "options": [
          "الإنجليزية",
          "الإسبانية",
          "الصينية الماندرين",
          "الهندية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإنجليزية الأولى عند حساب المتحدثين كلغة ثانية."
      },
      {
        "question_text": "ما الجهاز الذي يُستخدم لقياس الضغط الجوي؟",
        "options": [
          "الأنيمومتر",
          "البارومتر",
          "الهيغرومتر",
          "السيزموغراف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الأنيمومتر للرياح والهيغرومتر للرطوبة."
      },
      {
        "question_text": "أي معاهدة أرست مبدأ سيادة الدول الحديثة عام 1648 بعد حرب الثلاثين عامًا؟",
        "options": [
          "فرساي",
          "وستفاليا",
          "أوترخت",
          "فيينا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صلح وستفاليا يُعد نقطة انطلاق نظام الدول القومية."
      }
    ]
  },
  {
    "id": "lib-geography-01",
    "user_id": "system",
    "title": "خرائط وعواصم",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "جغرافيا",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "ما عاصمة أستراليا؟",
        "options": [
          "سيدني",
          "ملبورن",
          "كانبرا",
          "بيرث"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سيدني الأكبر سكانًا لكن العاصمة السياسية كانبرا."
      },
      {
        "question_text": "أي دولة عربية تطل على المحيط الأطلسي والبحر المتوسط معًا؟",
        "options": [
          "الجزائر",
          "تونس",
          "المغرب",
          "ليبيا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفصل مضيق جبل طارق بين واجهتيه البحريتين."
      },
      {
        "question_text": "ما أكبر جزيرة في العالم من حيث المساحة؟",
        "options": [
          "مدغشقر",
          "بورنيو",
          "غرينلاند",
          "غينيا الجديدة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أستراليا تُصنّف قارة لا جزيرة."
      },
      {
        "question_text": "أي سلسلة جبال تفصل بين قارتي أوروبا وآسيا؟",
        "options": [
          "الألب",
          "الأورال",
          "الكاربات",
          "القوقاز الصغرى"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تمتد جبال الأورال شمالًا وجنوبًا داخل روسيا."
      },
      {
        "question_text": "ما المضيق الذي يربط الخليج العربي ببحر عُمان؟",
        "options": [
          "باب المندب",
          "هرمز",
          "جبل طارق",
          "ملقا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمر عبره جزء كبير من تجارة النفط العالمية."
      },
      {
        "question_text": "أي دولة تضم أكبر عدد من الجزر ضمن أرخبيلها المأهول؟",
        "options": [
          "اليابان",
          "الفلبين",
          "إندونيسيا",
          "اليونان"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتجاوز عدد جزرها سبعة عشر ألف جزيرة."
      },
      {
        "question_text": "ما البحيرة التي تُعد الأكبر مساحة في العالم؟",
        "options": [
          "بحيرة سوبيريور",
          "بحر قزوين",
          "بحيرة فيكتوريا",
          "بحيرة بايكال"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رغم اسمها بحرًا فهي بحيرة مغلقة."
      },
      {
        "question_text": "أي صحراء تُعد الأكبر حرارةً ومساحةً في أفريقيا؟",
        "options": [
          "كالاهاري",
          "الصحراء الكبرى",
          "ناميب",
          "النوبة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تمتد عبر أكثر من عشر دول شمال القارة."
      },
      {
        "question_text": "ما عاصمة كندا؟",
        "options": [
          "تورونتو",
          "مونتريال",
          "أوتاوا",
          "فانكوفر"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوتاوا في مقاطعة أونتاريو رغم أن تورونتو أكبر مدنها."
      },
      {
        "question_text": "أي دولة تشترك في أطول حدود برية مع الصين؟",
        "options": [
          "روسيا",
          "منغوليا",
          "الهند",
          "كازاخستان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتجاوز حدود منغوليا مع الصين 4600 كم."
      },
      {
        "question_text": "ما القارة التي لا توجد فيها دولة ذات سيادة؟",
        "options": [
          "أوقيانوسيا",
          "أنتاركتيكا",
          "أمريكا الجنوبية",
          "أفريقيا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُدار بمعاهدة دولية وتقتصر على محطات بحثية."
      },
      {
        "question_text": "ما النهر الذي يمر بالعاصمة العراقية بغداد؟",
        "options": [
          "الفرات",
          "دجلة",
          "الزاب",
          "ديالى"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقسم دجلة بغداد إلى جانبي الكرخ والرصافة."
      }
    ]
  },
  {
    "id": "lib-geography-02",
    "user_id": "system",
    "title": "جغرافيا طبيعية — مستوى صعب",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "جغرافيا",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما الخط الوهمي الذي يقسم الأرض إلى نصفين شمالي وجنوبي؟",
        "options": [
          "خط غرينتش",
          "خط الاستواء",
          "مدار السرطان",
          "الدائرة القطبية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خط غرينتش يقسمها شرقًا وغربًا."
      },
      {
        "question_text": "ما أعلى قمة جبلية في القارة الأفريقية؟",
        "options": [
          "جبل كينيا",
          "كليمنجارو",
          "جبل توبقال",
          "رأس دشن"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يرتفع نحو 5895 مترًا في تنزانيا."
      },
      {
        "question_text": "أي ظاهرة مناخية دورية في المحيط الهادئ ترفع حرارة سطح المياه وتغيّر أنماط الأمطار عالميًا؟",
        "options": [
          "النينيو",
          "المونسون",
          "الإعصار الحلزوني",
          "الجبهة القطبية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقابلها طور بارد يُعرف بالنينيا."
      },
      {
        "question_text": "ما الدولة التي تحتضن منابع النيل الأزرق؟",
        "options": [
          "أوغندا",
          "إثيوبيا",
          "جنوب السودان",
          "كينيا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينبع من بحيرة تانا في المرتفعات الإثيوبية."
      },
      {
        "question_text": "أي مدينة تقع على قارتين في آنٍ واحد؟",
        "options": [
          "القاهرة",
          "إسطنبول",
          "بيروت",
          "الجزائر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفصل مضيق البوسفور جانبيها الأوروبي والآسيوي."
      },
      {
        "question_text": "ما نوع الصخور الناتجة عن تبرد الصهارة وتصلبها؟",
        "options": [
          "الرسوبية",
          "النارية",
          "المتحولة",
          "الطينية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشهر أمثلتها البازلت والغرانيت."
      },
      {
        "question_text": "ما أطول سلسلة جبال متصلة فوق سطح الأرض؟",
        "options": [
          "الهيمالايا",
          "روكي",
          "الأنديز",
          "الأطلس"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تمتد الأنديز نحو سبعة آلاف كيلومتر غرب أمريكا الجنوبية."
      },
      {
        "question_text": "ما التسمية الجغرافية لمنطقة النشاط الزلزالي والبركاني المحيطة بالمحيط الهادئ؟",
        "options": [
          "حزام الألب",
          "حلقة النار",
          "الصدع الأفريقي",
          "منطقة الاندساس الأطلسية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تضم أغلب براكين العالم النشطة."
      },
      {
        "question_text": "أي دولة أوروبية لا تطل على أي بحر؟",
        "options": [
          "كرواتيا",
          "النمسا",
          "ألبانيا",
          "البرتغال"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "النمسا دولة حبيسة تحيط بها اليابسة من كل جانب."
      },
      {
        "question_text": "ما القناة التي تربط البحر المتوسط بالبحر الأحمر؟",
        "options": [
          "قناة بنما",
          "قناة السويس",
          "قناة كييل",
          "قناة كورنث"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "افتُتحت عام 1869 واختصرت طريق التجارة نحو آسيا."
      },
      {
        "question_text": "ما المصطلح الذي يصف مصبّ النهر المتشعب إلى فروع قبل التقائه بالبحر؟",
        "options": [
          "الدلتا",
          "المصب القمعي",
          "الحوض",
          "المنعطف"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشهرها دلتا النيل ودلتا الميسيسيبي."
      },
      {
        "question_text": "أي دولة عربية تُعد الأكبر مساحة؟",
        "options": [
          "السعودية",
          "السودان",
          "الجزائر",
          "ليبيا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تجاوزت الجزائر السودان بعد انفصال جنوبه عام 2011."
      }
    ]
  },
  {
    "id": "lib-history-01",
    "user_id": "system",
    "title": "محطات في التاريخ العالمي",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "تاريخ",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "أي حضارة قديمة بنت الأهرامات في الجيزة؟",
        "options": [
          "السومرية",
          "المصرية",
          "الفينيقية",
          "الآشورية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بُنيت في عصر الدولة القديمة قبل نحو 4500 عام."
      },
      {
        "question_text": "من القائد الذي عبر جبال الألب بالفيلة لمهاجمة روما؟",
        "options": [
          "يوليوس قيصر",
          "حنبعل",
          "الإسكندر",
          "سبارتاكوس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قائد قرطاجي في الحرب البونية الثانية."
      },
      {
        "question_text": "في أي عام سقطت الأندلس بسقوط غرناطة؟",
        "options": [
          "1453",
          "1492",
          "1517",
          "1258"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العام نفسه الذي عبر فيه كولومبوس المحيط الأطلسي."
      },
      {
        "question_text": "ما المدينة التي فتحها العثمانيون عام 1453 منهين بذلك الإمبراطورية البيزنطية؟",
        "options": [
          "أثينا",
          "القسطنطينية",
          "بلغراد",
          "صوفيا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قادها السلطان محمد الثاني."
      },
      {
        "question_text": "من أول رئيس للولايات المتحدة الأمريكية؟",
        "options": [
          "توماس جيفرسون",
          "جورج واشنطن",
          "بنجامين فرانكلين",
          "جون آدامز"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى المنصب عام 1789."
      },
      {
        "question_text": "ما الحدث الذي أشعل شرارة الحرب العالمية الأولى مباشرة؟",
        "options": [
          "غزو بولندا",
          "اغتيال ولي عهد النمسا",
          "معركة فردان",
          "ثورة أكتوبر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اغتيل الأرشيدوق فرانز فرديناند في سراييفو عام 1914."
      },
      {
        "question_text": "أي معركة أوقفت الزحف المغولي في بلاد الشام عام 1260؟",
        "options": [
          "حطين",
          "عين جالوت",
          "اليرموك",
          "القادسية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتصر فيها المماليك بقيادة قطز وبيبرس."
      },
      {
        "question_text": "من مؤسس الدولة الأموية في دمشق؟",
        "options": [
          "عبد الملك بن مروان",
          "معاوية بن أبي سفيان",
          "الوليد بن عبد الملك",
          "هشام بن عبد الملك"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اتخذ دمشق عاصمة للخلافة عام 41 هـ."
      },
      {
        "question_text": "في أي عام سقط جدار برلين؟",
        "options": [
          "1985",
          "1989",
          "1991",
          "1993"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تلاه توحيد الألمانيتين عام 1990."
      },
      {
        "question_text": "ما الاسم الذي عُرفت به الفترة التي أعقبت اختراع غوتنبرغ للطباعة وازدهار الفنون في أوروبا؟",
        "options": [
          "عصر النهضة",
          "العصور المظلمة",
          "عصر التنوير",
          "الثورة الصناعية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدأت في إيطاليا خلال القرن الخامس عشر."
      },
      {
        "question_text": "أي إمبراطورية حكمها الإسكندر المقدوني؟",
        "options": [
          "الرومانية",
          "المقدونية اليونانية",
          "الفارسية الساسانية",
          "البيزنطية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصلت فتوحاته إلى حدود الهند قبل وفاته عام 323 ق.م."
      },
      {
        "question_text": "من الملكة التي حكمت مصر آخر عهد البطالمة؟",
        "options": [
          "نفرتيتي",
          "حتشبسوت",
          "كليوباترا السابعة",
          "زنوبيا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتهى حكمها بضم مصر إلى روما عام 30 ق.م."
      }
    ]
  },
  {
    "id": "lib-history-02",
    "user_id": "system",
    "title": "التاريخ الإسلامي والعربي",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "تاريخ",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "في أي سنة هجرية وقعت معركة بدر الكبرى؟",
        "options": [
          "السنة الأولى",
          "السنة الثانية",
          "الخامسة",
          "الثامنة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وقعت في رمضان من السنة الثانية للهجرة."
      },
      {
        "question_text": "من الخليفة العباسي الذي أسس مدينة بغداد؟",
        "options": [
          "أبو العباس السفاح",
          "أبو جعفر المنصور",
          "هارون الرشيد",
          "المأمون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بُنيت عام 145 هـ وسُميت مدينة السلام."
      },
      {
        "question_text": "ما المعركة التي فتحت بلاد فارس أمام المسلمين في عهد عمر بن الخطاب؟",
        "options": [
          "اليرموك",
          "القادسية",
          "ذات الصواري",
          "نهاوند"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قادها سعد بن أبي وقاص ضد الجيش الساساني."
      },
      {
        "question_text": "من القائد الذي استعاد بيت المقدس من الصليبيين بعد معركة حطين؟",
        "options": [
          "نور الدين زنكي",
          "صلاح الدين الأيوبي",
          "الظاهر بيبرس",
          "قطز"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وقعت حطين عام 1187 م."
      },
      {
        "question_text": "ما الدولة التي حكمت مصر قبل الفتح العثماني لها عام 1517؟",
        "options": [
          "الفاطمية",
          "المملوكية",
          "الأيوبية",
          "الطولونية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتهى حكم المماليك بمعركة الريدانية."
      },
      {
        "question_text": "أي مدينة كانت عاصمة الدولة الأموية في الأندلس؟",
        "options": [
          "إشبيلية",
          "قرطبة",
          "غرناطة",
          "طليطلة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بلغت أوجها في عهد عبد الرحمن الناصر."
      },
      {
        "question_text": "من العالم الذي وضع أسس علم الجبر وسُمي الكتاب باسمه؟",
        "options": [
          "ابن الهيثم",
          "الخوارزمي",
          "البيروني",
          "ابن سينا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من كتابه اشتُقت كلمة الخوارزمية."
      },
      {
        "question_text": "ما الاتفاقية التي قسّمت مناطق النفوذ في المشرق العربي بين بريطانيا وفرنسا عام 1916؟",
        "options": [
          "وعد بلفور",
          "سايكس بيكو",
          "معاهدة سيفر",
          "مؤتمر سان ريمو"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اتفاقية سرية كشفتها روسيا بعد الثورة البلشفية."
      },
      {
        "question_text": "في أي عام أُلغيت الخلافة العثمانية رسميًا؟",
        "options": [
          "1918",
          "1922",
          "1924",
          "1928"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ألغاها البرلمان التركي في مارس 1924."
      },
      {
        "question_text": "من مؤسس الدولة الفاطمية التي اتخذت القاهرة عاصمة لاحقًا؟",
        "options": [
          "المعز لدين الله",
          "عبيد الله المهدي",
          "الحاكم بأمر الله",
          "جوهر الصقلي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أسسها في المغرب قبل انتقالها إلى مصر."
      },
      {
        "question_text": "ما الجامعة التي تُعد من أقدم المؤسسات التعليمية المستمرة في العالم وتأسست في فاس؟",
        "options": [
          "الزيتونة",
          "القرويين",
          "الأزهر",
          "النظامية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أسستها فاطمة الفهرية عام 859 م."
      },
      {
        "question_text": "أي ثورة عربية اندلعت عام 1916 ضد الحكم العثماني في الحجاز؟",
        "options": [
          "ثورة العشرين",
          "الثورة العربية الكبرى",
          "ثورة الريف",
          "ثورة عرابي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قادها الشريف حسين بن علي."
      }
    ]
  },
  {
    "id": "lib-islamic-01",
    "user_id": "system",
    "title": "القرآن والسيرة",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "إسلاميات",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "كم عدد سور القرآن الكريم؟",
        "options": [
          "110",
          "112",
          "114",
          "116"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أطولها البقرة وأقصرها الكوثر."
      },
      {
        "question_text": "ما السورة التي تُسمى قلب القرآن؟",
        "options": [
          "الرحمن",
          "يس",
          "الملك",
          "الكهف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وردت تسميتها في أثر مشهور."
      },
      {
        "question_text": "في أي غار نزل الوحي أول مرة على النبي محمد صلى الله عليه وآله؟",
        "options": [
          "غار ثور",
          "غار حراء",
          "غار الكهف",
          "غار المرسلات"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقع في جبل النور قرب مكة."
      },
      {
        "question_text": "ما السورة الوحيدة التي لا تبدأ بالبسملة؟",
        "options": [
          "الفاتحة",
          "التوبة",
          "النمل",
          "الإخلاص"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُسمى أيضًا براءة."
      },
      {
        "question_text": "من الصحابي الذي لُقّب بأمين هذه الأمة؟",
        "options": [
          "أبو ذر الغفاري",
          "أبو عبيدة بن الجراح",
          "سلمان الفارسي",
          "بلال بن رباح"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ورد اللقب في حديث نبوي."
      },
      {
        "question_text": "كم عدد أركان الإسلام عند جمهور المسلمين؟",
        "options": [
          "أربعة",
          "خمسة",
          "ستة",
          "سبعة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الشهادتان والصلاة والزكاة والصوم والحج."
      },
      {
        "question_text": "ما أول مسجد بُني في الإسلام؟",
        "options": [
          "المسجد النبوي",
          "مسجد قباء",
          "المسجد الحرام",
          "المسجد الأقصى"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بُني عند وصول النبي إلى المدينة."
      },
      {
        "question_text": "من النبي الذي لُقّب بكليم الله؟",
        "options": [
          "إبراهيم",
          "موسى",
          "عيسى",
          "نوح"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لأن الله كلّمه تكليمًا."
      },
      {
        "question_text": "في أي شهر هجري فُرض صيام رمضان؟",
        "options": [
          "شعبان",
          "رمضان",
          "رجب",
          "محرم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الشهر التاسع في التقويم الهجري."
      },
      {
        "question_text": "ما اسم الهجرة الأولى للمسلمين قبل هجرة المدينة؟",
        "options": [
          "الهجرة إلى الطائف",
          "الهجرة إلى الحبشة",
          "الهجرة إلى اليمن",
          "الهجرة إلى الشام"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان ملكها النجاشي عادلًا فآواهم."
      },
      {
        "question_text": "ما أطول آية في القرآن الكريم؟",
        "options": [
          "آية الكرسي",
          "آية الدَّين",
          "آية المباهلة",
          "آية النور"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وردت في سورة البقرة وتتناول توثيق الديون."
      },
      {
        "question_text": "كم عدد الأشهر الحرم؟",
        "options": [
          "اثنان",
          "ثلاثة",
          "أربعة",
          "خمسة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذو القعدة وذو الحجة والمحرم ورجب."
      }
    ]
  },
  {
    "id": "lib-islamic-02",
    "user_id": "system",
    "title": "إسلاميات — مستوى متقدم",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "إسلاميات",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما السورة التي تُعرف بعروس القرآن؟",
        "options": [
          "الرحمن",
          "الواقعة",
          "الحديد",
          "المزمل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لتكرار الامتنان بالنعم فيها."
      },
      {
        "question_text": "كم عدد آيات سورة البقرة؟",
        "options": [
          "176",
          "200",
          "286",
          "300"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وهي أطول سور القرآن."
      },
      {
        "question_text": "ما اسم الصحيفة التي كتبها النبي لتنظيم العلاقة بين سكان المدينة؟",
        "options": [
          "صلح الحديبية",
          "صحيفة المدينة",
          "بيعة العقبة",
          "عهد الذمة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُعد من أوائل الوثائق الدستورية."
      },
      {
        "question_text": "في أي سنة هجرية وقع صلح الحديبية؟",
        "options": [
          "الرابعة",
          "السادسة",
          "الثامنة",
          "العاشرة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وسُمي فتحًا مبينًا في القرآن."
      },
      {
        "question_text": "من أول من جمع القرآن في مصحف واحد بعد وفاة النبي؟",
        "options": [
          "عمر بن الخطاب",
          "أبو بكر الصديق",
          "عثمان بن عفان",
          "علي بن أبي طالب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بمشورة عمر وتنفيذ زيد بن ثابت."
      },
      {
        "question_text": "ما المصطلح الفقهي الذي يعني اتفاق العلماء على حكم شرعي؟",
        "options": [
          "القياس",
          "الإجماع",
          "الاستحسان",
          "العرف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أحد أدلة الأحكام عند الأصوليين."
      },
      {
        "question_text": "ما السورة التي تُقرأ استحبابًا يوم الجمعة وتتضمن قصة أهل الكهف؟",
        "options": [
          "الكهف",
          "مريم",
          "طه",
          "القصص"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تضم أربع قصص كبرى."
      },
      {
        "question_text": "كم عدد التكبيرات في صلاة العيد على المشهور؟",
        "options": [
          "أربع",
          "سبع في الأولى",
          "ثلاث",
          "تسع"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تختلف التفاصيل بين المذاهب."
      },
      {
        "question_text": "من النبي الذي ابتُلي بالصبر على المرض وضُرب به المثل؟",
        "options": [
          "يونس",
          "أيوب",
          "زكريا",
          "يعقوب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال تعالى إنا وجدناه صابرًا."
      },
      {
        "question_text": "ما اسم العلم الذي يبحث في أحوال رواة الحديث؟",
        "options": [
          "علم الأصول",
          "علم الجرح والتعديل",
          "علم البلاغة",
          "علم الفرائض"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُحدد به قبول الرواية أو ردها."
      },
      {
        "question_text": "ما الغزوة التي سُميت بغزوة الأحزاب أيضًا؟",
        "options": [
          "أحد",
          "الخندق",
          "خيبر",
          "حنين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حُفر الخندق بمشورة سلمان الفارسي."
      },
      {
        "question_text": "ما العلم الذي يبحث في قسمة المواريث؟",
        "options": [
          "الفرائض",
          "المعاملات",
          "المقاصد",
          "القواعد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُبنى على نصوص قرآنية محددة الأنصبة."
      }
    ]
  },
  {
    "id": "lib-literature-01",
    "user_id": "system",
    "title": "الأدب العربي",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "لغة عربية وأدب",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "من الشاعر الملقب بأمير الشعراء؟",
        "options": [
          "حافظ إبراهيم",
          "أحمد شوقي",
          "المتنبي",
          "البارودي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بويع بالإمارة عام 1927 في القاهرة."
      },
      {
        "question_text": "من مؤلف رواية الثلاثية التي تضم بين القصرين؟",
        "options": [
          "يوسف إدريس",
          "نجيب محفوظ",
          "توفيق الحكيم",
          "طه حسين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أول عربي ينال نوبل في الآداب."
      },
      {
        "question_text": "ما اسم كتاب طه حسين الذي يروي فيه سيرته الذاتية؟",
        "options": [
          "الأيام",
          "دعاء الكروان",
          "الشيخان",
          "على هامش السيرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صدر في ثلاثة أجزاء."
      },
      {
        "question_text": "من الشاعر الذي قال: على قدر أهل العزم تأتي العزائم؟",
        "options": [
          "أبو تمام",
          "المتنبي",
          "البحتري",
          "أبو نواس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من قصائده في مدح سيف الدولة."
      },
      {
        "question_text": "ما البحر الشعري الذي يُعد أكثر البحور استخدامًا في الشعر العربي القديم؟",
        "options": [
          "الطويل",
          "الرجز",
          "الخفيف",
          "المتقارب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لسعة تفعيلاته ومرونته."
      },
      {
        "question_text": "من صاحب رسالة الغفران؟",
        "options": [
          "الجاحظ",
          "أبو العلاء المعري",
          "ابن المقفع",
          "بديع الزمان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عمل نثري تخيّلي عن رحلة في الآخرة."
      },
      {
        "question_text": "من ترجم كليلة ودمنة إلى العربية؟",
        "options": [
          "ابن المقفع",
          "الجاحظ",
          "ابن خلدون",
          "الأصمعي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقلها عن الفارسية البهلوية."
      },
      {
        "question_text": "ما اسم القصائد السبع المعلّقة على أستار الكعبة في الجاهلية بحسب الرواية المشهورة؟",
        "options": [
          "الموشحات",
          "المعلقات",
          "المقامات",
          "النقائض"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من أشهر أصحابها امرؤ القيس."
      },
      {
        "question_text": "من كاتب مسرحية أهل الكهف؟",
        "options": [
          "توفيق الحكيم",
          "سعد الله ونوس",
          "ألفريد فرج",
          "يوسف وهبي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من رواد المسرح الذهني العربي."
      },
      {
        "question_text": "ما الفن النثري الذي اشتهر به بديع الزمان الهمذاني؟",
        "options": [
          "الخطابة",
          "المقامة",
          "الرسالة",
          "المقالة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص قصير مسجوع ببطل متسوّل بارع."
      },
      {
        "question_text": "من شاعر النيل؟",
        "options": [
          "أحمد شوقي",
          "حافظ إبراهيم",
          "إيليا أبو ماضي",
          "خليل مطران"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اشتهر بشعره الاجتماعي والوطني."
      },
      {
        "question_text": "من مؤلف مقدمة تُعد أساسًا لعلم الاجتماع؟",
        "options": [
          "ابن بطوطة",
          "ابن خلدون",
          "المسعودي",
          "ابن رشد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مقدمة كتاب العِبر."
      }
    ]
  },
  {
    "id": "lib-literature-02",
    "user_id": "system",
    "title": "أدب عالمي وشعر",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "لغة عربية وأدب",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "من مؤلف رواية الحرب والسلام؟",
        "options": [
          "دوستويفسكي",
          "تولستوي",
          "تشيخوف",
          "غوغول"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رواية ملحمية عن الغزو النابليوني لروسيا."
      },
      {
        "question_text": "من كتب مسرحية هاملت؟",
        "options": [
          "مارلو",
          "شكسبير",
          "بن جونسون",
          "ملتون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من أشهر مآسيه الأربع."
      },
      {
        "question_text": "ما الرواية التي تبدأ بعالم يخضع لمراقبة الأخ الأكبر؟",
        "options": [
          "عالم جديد شجاع",
          "1984",
          "فهرنهايت 451",
          "المحاكمة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من تأليف جورج أورويل."
      },
      {
        "question_text": "من مؤلف مئة عام من العزلة؟",
        "options": [
          "بورخيس",
          "غابرييل غارسيا ماركيز",
          "يوسا",
          "كورتاثار"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أيقونة الواقعية السحرية."
      },
      {
        "question_text": "من الشاعر الفلسطيني صاحب قصيدة سجل أنا عربي؟",
        "options": [
          "سميح القاسم",
          "محمود درويش",
          "توفيق زياد",
          "معين بسيسو"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من ديوانه أوراق الزيتون."
      },
      {
        "question_text": "ما الملحمة الإغريقية التي تروي رحلة عودة أوديسيوس؟",
        "options": [
          "الإلياذة",
          "الأوديسة",
          "الإنيادة",
          "ثيوغونيا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُنسب إلى هوميروس."
      },
      {
        "question_text": "من مؤلف الكوميديا الإلهية؟",
        "options": [
          "بترارك",
          "دانتي",
          "بوكاتشيو",
          "ميكافيلي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رحلة رمزية عبر ثلاثة عوالم."
      },
      {
        "question_text": "من الأديبة صاحبة رواية كبرياء وهوى؟",
        "options": [
          "الأخوات برونتي",
          "جين أوستن",
          "فرجينيا وولف",
          "ماري شيلي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صدرت عام 1813."
      },
      {
        "question_text": "ما اسم الشاعر اللبناني المهجري مؤلف كتاب النبي؟",
        "options": [
          "ميخائيل نعيمة",
          "جبران خليل جبران",
          "إيليا أبو ماضي",
          "أمين الريحاني"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كُتب بالإنجليزية وتُرجم لعشرات اللغات."
      },
      {
        "question_text": "ما التيار الأدبي الذي ينتمي إليه شعر التفعيلة العربي الحديث؟",
        "options": [
          "الكلاسيكية",
          "الشعر الحر",
          "الموشح",
          "المقامة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رائداه نازك الملائكة وبدر شاكر السياب."
      },
      {
        "question_text": "من مؤلف رواية الجريمة والعقاب؟",
        "options": [
          "تولستوي",
          "دوستويفسكي",
          "تورغينيف",
          "بولغاكوف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتناول صراع الضمير بعد جريمة قتل."
      },
      {
        "question_text": "ما الجائزة الأدبية العالمية التي تُمنح سنويًا من الأكاديمية السويدية؟",
        "options": [
          "بوكر",
          "نوبل للآداب",
          "غونكور",
          "بوليتزر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مُنحت لأول مرة عام 1901."
      }
    ]
  },
  {
    "id": "lib-logic-01",
    "user_id": "system",
    "title": "ألغاز منطقية",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "ألغاز ومنطق",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "إذا كان عمر أحمد ضعف عمر سالم، ومجموع عمريهما 36 سنة، فكم عمر سالم؟",
        "options": [
          "10",
          "12",
          "14",
          "18"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "12 و24 مجموعهما 36."
      },
      {
        "question_text": "ما العدد التالي في المتتالية: 2، 6، 12، 20، 30، …؟",
        "options": [
          "36",
          "40",
          "42",
          "44"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الفروق تزداد باثنين في كل خطوة."
      },
      {
        "question_text": "ساعة تتأخر دقيقتين كل ساعة، كم تتأخر خلال نصف يوم؟",
        "options": [
          "12 دقيقة",
          "20 دقيقة",
          "24 دقيقة",
          "30 دقيقة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اثنتا عشرة ساعة مضروبة في دقيقتين."
      },
      {
        "question_text": "خمس آلات تصنع خمس قطع في خمس دقائق، فكم دقيقة تحتاج مئة آلة لصنع مئة قطعة؟",
        "options": [
          "خمس",
          "عشرون",
          "خمسون",
          "مئة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل آلة تنجز قطعة في خمس دقائق مهما زاد العدد."
      },
      {
        "question_text": "إذا كان كل الورود أزهارًا، وبعض الأزهار تذبل سريعًا، فأي استنتاج صحيح؟",
        "options": [
          "كل الورود تذبل سريعًا",
          "بعض الورود قد تذبل سريعًا",
          "لا وردة تذبل",
          "كل ما يذبل ورد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يمكن تعميم صفة بعض الأزهار على كل الورود."
      },
      {
        "question_text": "أب وابنه عمرهما معًا 60 سنة، والأب أكبر بأربعين سنة، فكم عمر الابن؟",
        "options": [
          "8",
          "10",
          "12",
          "15"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "10 و50 يحققان الشرطين."
      },
      {
        "question_text": "كم مثلثًا على الأقل نحتاج لتكوين شكل رباعي بخط مستقيم واحد يقسمه؟",
        "options": [
          "واحد",
          "اثنان",
          "ثلاثة",
          "أربعة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قطر المربع يقسمه إلى مثلثين."
      },
      {
        "question_text": "إن كان اليوم الأربعاء، فما اليوم بعد مئة يوم؟",
        "options": [
          "الاثنين",
          "الثلاثاء",
          "الجمعة",
          "السبت"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "باقي قسمة مئة على سبعة يساوي اثنين."
      },
      {
        "question_text": "سلة فيها ست تفاحات وستة أطفال، أخذ كل طفل تفاحة وبقيت واحدة في السلة، كيف؟",
        "options": [
          "أحدهم لم يأخذ",
          "الأخير أخذ السلة بما فيها",
          "التفاحات كانت سبعًا",
          "لا حل ممكنًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أخذ نصيبه وهو داخل السلة."
      },
      {
        "question_text": "ما العدد الذي إذا ضُرب في نفسه وأُضيف إليه خمسة أعطى ثلاثين؟",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خمسة في خمسة زائد خمسة."
      },
      {
        "question_text": "قطار يقطع 60 كم في 45 دقيقة، فما سرعته بالكيلومتر في الساعة؟",
        "options": [
          "60",
          "75",
          "80",
          "90"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ستون مقسومة على ثلاثة أرباع الساعة."
      },
      {
        "question_text": "أي الكلمات لا تنتمي للمجموعة: قلم، دفتر، ممحاة، مطر؟",
        "options": [
          "قلم",
          "دفتر",
          "ممحاة",
          "مطر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الثلاثة الأولى أدوات مدرسية."
      }
    ]
  },
  {
    "id": "lib-logic-02",
    "user_id": "system",
    "title": "تحدي الذكاء المتقدم",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "ألغاز ومنطق",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما العدد التالي: 1، 1، 2، 3، 5، 8، 13، …؟",
        "options": [
          "18",
          "20",
          "21",
          "24"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل حد مجموع الحدين السابقين."
      },
      {
        "question_text": "ثلاثة أشخاص دفعوا 30 ريالًا ثم أُعيد لهم 3 ريالات؛ كم دفع كل واحد فعليًا؟",
        "options": [
          "9",
          "9.5",
          "10",
          "11"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "27 مقسومة على ثلاثة."
      },
      {
        "question_text": "إذا كان بعض الأطباء شعراء، وكل الشعراء حالمون، فأيّ استنتاج يصح؟",
        "options": [
          "كل الأطباء حالمون",
          "بعض الأطباء حالمون",
          "لا طبيب حالم",
          "كل الحالمين أطباء"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الاستنتاج يقتصر على الفئة المشتركة."
      },
      {
        "question_text": "ما مجموع زوايا المضلع الخماسي المحدّب؟",
        "options": [
          "360",
          "450",
          "540",
          "720"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قانون مجموع الزوايا: (ن-2) في 180."
      },
      {
        "question_text": "لدينا 8 كرات إحداها أثقل؛ ما أقل عدد من الوزنات بميزان كفتين لتحديدها؟",
        "options": [
          "واحدة",
          "اثنتان",
          "ثلاث",
          "أربع"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بتقسيمها إلى ثلاث مجموعات 3 و3 و2."
      },
      {
        "question_text": "شمعة تحترق في 60 دقيقة بالكامل؛ إن أُشعلت من طرفيها معًا فكم تستغرق؟",
        "options": [
          "15 دقيقة",
          "20 دقيقة",
          "30 دقيقة",
          "45 دقيقة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "معدل الاحتراق يتضاعف."
      },
      {
        "question_text": "ما احتمال ظهور وجهين متطابقين عند رمي عملة مرتين؟",
        "options": [
          "الربع",
          "النصف",
          "الثلثان",
          "ثلاثة أرباع"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حالتان مناسبتان من أصل أربع."
      },
      {
        "question_text": "إذا كان أ أكبر من ب، وب أكبر من ج، وج أكبر من د، فمن الأصغر؟",
        "options": [
          "أ",
          "ب",
          "ج",
          "د"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الترتيب تنازلي حتى د."
      },
      {
        "question_text": "ما الرقم الناقص: 3، 9، 27، …، 243؟",
        "options": [
          "54",
          "72",
          "81",
          "108"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل حد يساوي السابق مضروبًا في ثلاثة."
      },
      {
        "question_text": "خزان يمتلئ بصنبور في 6 ساعات وبآخر في 3 ساعات؛ كم يستغرق بفتحهما معًا؟",
        "options": [
          "ساعة",
          "ساعتان",
          "ثلاث ساعات",
          "أربع ساعات"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مجموع المعدلين يعطي نصف الخزان في الساعة."
      },
      {
        "question_text": "في مجموعة من 5 أشخاص يصافح كل منهم الآخر مرة واحدة، فكم عدد المصافحات؟",
        "options": [
          "8",
          "10",
          "12",
          "20"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عدد الأزواج الممكنة من خمسة عناصر."
      },
      {
        "question_text": "ما العلاقة الصحيحة: القدم للحذاء كما اليد لـ…؟",
        "options": [
          "الساعة",
          "القفاز",
          "الخاتم",
          "القلم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كلاهما غطاء يُلبس على الطرف."
      }
    ]
  },
  {
    "id": "lib-science-01",
    "user_id": "system",
    "title": "فيزياء وكيمياء الحياة اليومية",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "علوم وطب",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "ما الرمز الكيميائي لعنصر البوتاسيوم؟",
        "options": [
          "P",
          "K",
          "Po",
          "B"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرمز مشتق من الاسم اللاتيني كاليوم."
      },
      {
        "question_text": "ما الجسيم الذي يحمل شحنة سالبة داخل الذرة؟",
        "options": [
          "البروتون",
          "النيوترون",
          "الإلكترون",
          "النواة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "البروتون موجب والنيوترون متعادل."
      },
      {
        "question_text": "ما الوحدة التي تُقاس بها القوة في النظام الدولي؟",
        "options": [
          "الجول",
          "النيوتن",
          "الواط",
          "الباسكال"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الجول للطاقة والواط للقدرة والباسكال للضغط."
      },
      {
        "question_text": "ما درجة غليان الماء النقي عند مستوى سطح البحر بالمقياس المئوي؟",
        "options": [
          "90",
          "95",
          "100",
          "110"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنخفض كلما ارتفعنا عن سطح البحر لانخفاض الضغط."
      },
      {
        "question_text": "أي عضية في الخلية تُلقّب بمصنع الطاقة؟",
        "options": [
          "الريبوسوم",
          "الميتوكوندريا",
          "جهاز غولجي",
          "الليسوسوم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "فيها يتم التنفس الخلوي وإنتاج جزيء الطاقة."
      },
      {
        "question_text": "ما الغاز الذي تنتجه عملية التنفس الخلوي ويخرج مع الزفير بكميات أكبر؟",
        "options": [
          "الأكسجين",
          "النيتروجين",
          "ثاني أكسيد الكربون",
          "الهيليوم"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينقله الدم إلى الرئتين للتخلص منه."
      },
      {
        "question_text": "أي نوع من الدم يُعرف بالمتبرع العام لخلايا الدم الحمراء؟",
        "options": [
          "O سالب",
          "AB موجب",
          "A موجب",
          "B سالب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لخلوّه من مستضدات A وB وعامل ريسوس."
      },
      {
        "question_text": "ما القانون الذي ينص على أن لكل فعل رد فعل مساوٍ في المقدار ومعاكس في الاتجاه؟",
        "options": [
          "قانون نيوتن الأول",
          "قانون نيوتن الثالث",
          "قانون هوك",
          "قانون أوم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وهو أساس عمل الدفع الصاروخي."
      },
      {
        "question_text": "ما العنصر الذي يشكّل أساس كل المركبات العضوية؟",
        "options": [
          "الكربون",
          "السيليكون",
          "الأكسجين",
          "الكبريت"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قدرته على تكوين أربع روابط تجعله عماد الكيمياء العضوية."
      },
      {
        "question_text": "ما الجزء من الدماغ المسؤول عن التوازن وتنسيق الحركة؟",
        "options": [
          "المخيخ",
          "القشرة الجبهية",
          "الحُصين",
          "النخاع المستطيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقع أسفل خلف الدماغ."
      },
      {
        "question_text": "ما اسم العملية التي تنقسم فيها الخلية إلى خليتين متطابقتين وراثيًا؟",
        "options": [
          "الانقسام المنصف",
          "الانقسام المتساوي",
          "الإخصاب",
          "الطفرة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أما المنصف فينتج الأمشاج بنصف عدد الكروموسومات."
      },
      {
        "question_text": "ما الحمض الموجود في المعدة والذي يساعد على هضم البروتينات؟",
        "options": [
          "حمض الكبريتيك",
          "حمض الهيدروكلوريك",
          "حمض الستريك",
          "حمض اللاكتيك"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينشّط إنزيم الببسين لتفكيك البروتين."
      }
    ]
  },
  {
    "id": "lib-science-02",
    "user_id": "system",
    "title": "علوم متقدمة — تحدٍّ",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "علوم وطب",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما السرعة التقريبية للضوء في الفراغ؟",
        "options": [
          "300 ألف كم/ثانية",
          "300 ألف كم/ساعة",
          "30 ألف كم/ثانية",
          "3 ملايين كم/ثانية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدقة أكبر 299792 كم في الثانية."
      },
      {
        "question_text": "ما العدد الذري لعنصر الحديد؟",
        "options": [
          "24",
          "26",
          "29",
          "30"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرمز Fe وله دور محوري في الهيموغلوبين."
      },
      {
        "question_text": "ما القانون الذي يربط الجهد الكهربائي بالتيار والمقاومة؟",
        "options": [
          "قانون فاراداي",
          "قانون أوم",
          "قانون كولوم",
          "قانون لينز"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينص على أن الجهد يساوي حاصل ضرب التيار في المقاومة."
      },
      {
        "question_text": "ما المصطلح الذي يصف تحول الطاقة النووية إلى طاقة عبر دمج نوى خفيفة كما يحدث في الشمس؟",
        "options": [
          "الانشطار",
          "الاندماج",
          "الإشعاع",
          "التحلل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يندمج الهيدروجين مكوّنًا الهيليوم مع إطلاق طاقة هائلة."
      },
      {
        "question_text": "ما اسم الجزيء الذي يحمل الشيفرة الوراثية داخل نواة الخلية؟",
        "options": [
          "البروتين",
          "الحمض النووي منقوص الأكسجين",
          "الدهون الفوسفورية",
          "الجليكوجين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُعرف اختصارًا بالـ DNA ويتكون من شريطين لولبيين."
      },
      {
        "question_text": "أي جزء من الطيف الكهرومغناطيسي يمتلك أقصر طول موجي؟",
        "options": [
          "الأشعة تحت الحمراء",
          "الموجات الراديوية",
          "أشعة غاما",
          "الضوء المرئي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قصر الطول الموجي يعني طاقة أعلى."
      },
      {
        "question_text": "ما الظاهرة التي تفسر انحناء الضوء عند انتقاله بين وسطين مختلفي الكثافة؟",
        "options": [
          "الانعكاس",
          "الانكسار",
          "الحيود",
          "الاستقطاب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بسببها تبدو العصا مكسورة داخل الماء."
      },
      {
        "question_text": "ما الرقم الهيدروجيني التقريبي للماء النقي عند 25 درجة مئوية؟",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "القيمة 7 تعني تعادلًا بين الحموضة والقاعدية."
      },
      {
        "question_text": "ما اسم أول مضاد حيوي اكتُشف عام 1928؟",
        "options": [
          "الستربتومايسين",
          "البنسلين",
          "التتراسيكلين",
          "الأموكسيسيلين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اكتشفه ألكسندر فلمنغ صدفة من فطر العفن."
      },
      {
        "question_text": "ما الوحدة التي تُقاس بها كمية المادة في النظام الدولي؟",
        "options": [
          "الغرام",
          "المول",
          "اللتر",
          "الدالتون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحوي المول عدد أفوغادرو من الجسيمات."
      },
      {
        "question_text": "ما الغدة التي تُلقب بسيدة الغدد لتحكمها في إفرازات غدد أخرى؟",
        "options": [
          "الدرقية",
          "النخامية",
          "الكظرية",
          "البنكرياس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقع في قاعدة الدماغ وتفرز هرمونات منظّمة."
      },
      {
        "question_text": "ما القوة التي تفسر بقاء الأقمار في مدارات حول الكواكب؟",
        "options": [
          "الكهرومغناطيسية",
          "الجاذبية",
          "النووية القوية",
          "الاحتكاك"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصفها نيوتن ثم فسّرها أينشتاين بانحناء الزمكان."
      }
    ]
  },
  {
    "id": "lib-sports-01",
    "user_id": "system",
    "title": "كرة القدم حول العالم",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "رياضة",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "كم عدد لاعبي فريق كرة القدم داخل الملعب لكل جانب؟",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بينهم حارس المرمى."
      },
      {
        "question_text": "أي منتخب توّج بأكبر عدد من ألقاب كأس العالم؟",
        "options": [
          "ألمانيا",
          "البرازيل",
          "إيطاليا",
          "الأرجنتين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خمسة ألقاب حتى الآن."
      },
      {
        "question_text": "ما اسم البطولة الأوروبية الأهم للأندية؟",
        "options": [
          "الدوري الأوروبي",
          "دوري أبطال أوروبا",
          "كأس السوبر",
          "كأس الاتحاد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت تُعرف سابقًا بكأس الأندية البطلة."
      },
      {
        "question_text": "كم مدة الشوط الواحد في مباراة كرة القدم؟",
        "options": [
          "30 دقيقة",
          "40 دقيقة",
          "45 دقيقة",
          "50 دقيقة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يضاف إليها الوقت البدل عن الضائع."
      },
      {
        "question_text": "في أي دولة أقيمت أول بطولة كأس عالم عام 1930؟",
        "options": [
          "البرازيل",
          "الأوروغواي",
          "إيطاليا",
          "فرنسا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وفاز بها المنتخب المضيف."
      },
      {
        "question_text": "ما اسم الجائزة الفردية الأشهر التي تُمنح لأفضل لاعب في العالم سنويًا من مجلة فرنسية؟",
        "options": [
          "الحذاء الذهبي",
          "الكرة الذهبية",
          "القفاز الذهبي",
          "جائزة بوشكاش"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انطلقت عام 1956."
      },
      {
        "question_text": "كم عدد الأشواط في مباراة كرة السلة وفق قوانين الاتحاد الدولي؟",
        "options": [
          "اثنان",
          "ثلاثة",
          "أربعة",
          "خمسة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل ربع عشر دقائق."
      },
      {
        "question_text": "ما الرياضة التي يُستخدم فيها مصطلح لوف عند احتساب النقاط؟",
        "options": [
          "التنس",
          "الغولف",
          "الكريكيت",
          "الاسكواش"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يعني صفرًا في احتساب نقاط التنس."
      },
      {
        "question_text": "كل كم سنة تُقام دورة الألعاب الأولمبية الصيفية؟",
        "options": [
          "سنتان",
          "ثلاث",
          "أربع",
          "خمس"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتناوب مع الأولمبياد الشتوي."
      },
      {
        "question_text": "ما عدد الحلقات في شعار الألعاب الأولمبية؟",
        "options": [
          "أربع",
          "خمس",
          "ست",
          "سبع"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترمز إلى القارات الخمس."
      },
      {
        "question_text": "أي دولة استضافت كأس العالم لكرة القدم عام 2022؟",
        "options": [
          "روسيا",
          "قطر",
          "الإمارات",
          "اليابان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أول نسخة تُقام في الشرق الأوسط وفي الشتاء."
      },
      {
        "question_text": "ما اسم أشهر سباق دراجات في فرنسا؟",
        "options": [
          "جيرو ديتاليا",
          "طواف فرنسا",
          "فويلتا",
          "باريس روبيه"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمتد ثلاثة أسابيع كل صيف."
      }
    ]
  },
  {
    "id": "lib-sports-02",
    "user_id": "system",
    "title": "رياضة — أسئلة صعبة",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "رياضة",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما المسافة الرسمية لسباق الماراثون؟",
        "options": [
          "40 كم",
          "41.5 كم",
          "42.195 كم",
          "45 كم"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحدّدت رسميًا في أولمبياد 1908."
      },
      {
        "question_text": "كم عدد اللاعبين في فريق الكرة الطائرة داخل الملعب؟",
        "options": [
          "خمسة",
          "ستة",
          "سبعة",
          "ثمانية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بينهم لاعب الليبرو الدفاعي."
      },
      {
        "question_text": "ما اسم الضربة في الغولف التي تعني إنهاء الحفرة بضربة واحدة؟",
        "options": [
          "بيردي",
          "إيغل",
          "هول إن وان",
          "بار"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من أندر الإنجازات في اللعبة."
      },
      {
        "question_text": "في أي رياضة يُمنح الحزام الأسود كأعلى تدرج شائع؟",
        "options": [
          "المصارعة الرومانية",
          "الجودو",
          "رفع الأثقال",
          "الرماية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نظام الأحزمة شائع في فنون القتال اليابانية."
      },
      {
        "question_text": "ما البطولة التي تُعرف بالسلام الكبير في التنس وتُقام على الملاعب العشبية؟",
        "options": [
          "رولان غاروس",
          "ويمبلدون",
          "أستراليا المفتوحة",
          "أمريكا المفتوحة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أقدم بطولات التنس الأربع الكبرى."
      },
      {
        "question_text": "كم عدد الجولات القصوى في نزال الملاكمة للمحترفين على ألقاب عالمية؟",
        "options": [
          "ثمانٍ",
          "عشر",
          "اثنتا عشرة",
          "خمس عشرة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خُفضت من خمس عشرة لأسباب صحية."
      },
      {
        "question_text": "أي نادٍ إسباني يُلقب بالميرينغي؟",
        "options": [
          "برشلونة",
          "ريال مدريد",
          "أتلتيكو مدريد",
          "إشبيلية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نسبة إلى زيّه الأبيض."
      },
      {
        "question_text": "ما الرياضة التي تُستخدم فيها أدوات تُسمى المضرب والقرص المطاطي على الجليد؟",
        "options": [
          "الكيرلنغ",
          "هوكي الجليد",
          "التزلج الفني",
          "البياتلون"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شعبيتها كبيرة في كندا."
      },
      {
        "question_text": "من الرياضي الحائز أكبر عدد من الميداليات الذهبية الأولمبية؟",
        "options": [
          "أوسين بولت",
          "مايكل فيلبس",
          "كارل لويس",
          "لاريسا لاتينينا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سباح أمريكي تجاوز عشرين ذهبية."
      },
      {
        "question_text": "ما مدة مباراة الرغبي التقليدية بشوطيها؟",
        "options": [
          "60 دقيقة",
          "70 دقيقة",
          "80 دقيقة",
          "90 دقيقة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شوطان مدة كل منهما أربعون دقيقة."
      },
      {
        "question_text": "في سباقات الفورمولا واحد ماذا يعني العلم الأصفر؟",
        "options": [
          "نهاية السباق",
          "خطر وتقليل السرعة",
          "السماح بالتجاوز",
          "دخول منطقة الصيانة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُمنع التجاوز أثناء رفعه."
      },
      {
        "question_text": "ما عدد النقاط التي تُمنح للرمية الناجحة من خلف قوس الثلاث نقاط في السلة؟",
        "options": [
          "واحدة",
          "اثنتان",
          "ثلاث",
          "أربع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرمية الحرة نقطة واحدة فقط."
      }
    ]
  },
  {
    "id": "lib-tech-01",
    "user_id": "system",
    "title": "أساسيات الحاسوب والإنترنت",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "تكنولوجيا",
    "language": "ar",
    "quiz_difficulty": "standard",
    "questions": [
      {
        "question_text": "ماذا يمثّل البروتوكول HTTP في تصفح المواقع؟",
        "options": [
          "نظام تشفير الملفات",
          "بروتوكول نقل النصوص التشعبية",
          "نظام تسمية النطاقات",
          "طبقة عرض الصور"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نسخته المؤمّنة HTTPS تضيف طبقة تشفير."
      },
      {
        "question_text": "كم بايت في الكيلوبايت الواحد وفق النظام الثنائي التقليدي؟",
        "options": [
          "100",
          "512",
          "1000",
          "1024"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لأن الحوسبة تعتمد أساس اثنين."
      },
      {
        "question_text": "ما الشركة التي طوّرت نظام التشغيل أندرويد قبل أن تشتريه غوغل؟",
        "options": [
          "أندرويد إنك",
          "نوكيا",
          "بالم",
          "بلاك بيري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استحوذت غوغل عليها عام 2005."
      },
      {
        "question_text": "ما وظيفة ذاكرة الوصول العشوائي في الجهاز؟",
        "options": [
          "تخزين دائم للملفات",
          "تخزين مؤقت للبيانات قيد التشغيل",
          "معالجة الرسوميات",
          "تبريد المعالج"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفقد محتواها عند انقطاع الطاقة."
      },
      {
        "question_text": "ما اللغة الأساسية لتنسيق مظهر صفحات الويب؟",
        "options": [
          "HTML",
          "CSS",
          "SQL",
          "JSON"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "HTML للبنية وCSS للتنسيق."
      },
      {
        "question_text": "ما الاسم الذي يُطلق على العنوان الرقمي الذي يميّز كل جهاز على الشبكة؟",
        "options": [
          "عنوان MAC فقط",
          "عنوان IP",
          "رقم المنفذ",
          "اسم النطاق"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "النسخة الرابعة منه تتكون من أربع مجموعات رقمية."
      },
      {
        "question_text": "ما نوع البرمجيات الخبيثة التي تشفّر ملفات الضحية وتطلب فدية؟",
        "options": [
          "حصان طروادة",
          "برمجية الفدية",
          "برنامج التجسس",
          "الدودة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتشرت عالميًا في هجمات مثل واناكراي."
      },
      {
        "question_text": "ماذا يعني اختصار VPN في سياق الشبكات؟",
        "options": [
          "شبكة خاصة افتراضية",
          "بروتوكول تحقق شخصي",
          "شبكة عامة موثوقة",
          "نظام تصفح مجهول محلي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينشئ نفقًا مشفّرًا بين الجهاز والخادم."
      },
      {
        "question_text": "ما الجزء المسؤول عن تنفيذ التعليمات الحسابية والمنطقية في الحاسوب؟",
        "options": [
          "القرص الصلب",
          "المعالج",
          "اللوحة الأم",
          "المزوّد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحتوي على وحدة الحساب والمنطق."
      },
      {
        "question_text": "ما الشركة التي تقف خلف خدمة الحوسبة السحابية المعروفة اختصارًا بـ AWS؟",
        "options": [
          "مايكروسوفت",
          "أمازون",
          "غوغل",
          "أوراكل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أُطلقت عام 2006 وتُعد الأكبر سوقيًا."
      },
      {
        "question_text": "ما الامتداد الشائع لملف صورة يدعم الخلفية الشفافة؟",
        "options": [
          "JPG",
          "PNG",
          "BMP",
          "TIFF"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يدعم قناة ألفا للشفافية."
      },
      {
        "question_text": "ما التقنية اللاسلكية قصيرة المدى المستخدمة في سماعات الأذن؟",
        "options": [
          "البلوتوث",
          "الواي فاي",
          "الأشعة تحت الحمراء",
          "الجيل الخامس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعمل في نطاق 2.4 غيغاهرتز."
      }
    ]
  },
  {
    "id": "lib-tech-02",
    "user_id": "system",
    "title": "تقنية للمحترفين",
    "created_at": "2026-08-10T00:00:00.000Z",
    "is_public": true,
    "category": "تكنولوجيا",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "questions": [
      {
        "question_text": "ما بنية البيانات التي تعمل بمبدأ الداخل أخيرًا هو الخارج أولًا؟",
        "options": [
          "الطابور",
          "المكدس",
          "القائمة المرتبطة",
          "الشجرة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الطابور يعمل بالعكس: الداخل أولًا يخرج أولًا."
      },
      {
        "question_text": "ما اللغة المستخدمة للاستعلام عن قواعد البيانات العلائقية؟",
        "options": [
          "SQL",
          "XML",
          "PHP",
          "Bash"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تشمل أوامر الاختيار والإدراج والتحديث."
      },
      {
        "question_text": "ما المنفذ الافتراضي لخدمة HTTPS؟",
        "options": [
          "21",
          "80",
          "443",
          "8080"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المنفذ 80 مخصص لـ HTTP غير المشفّر."
      },
      {
        "question_text": "ما اسم النموذج المرجعي المكوّن من سبع طبقات لوصف اتصالات الشبكات؟",
        "options": [
          "نموذج OSI",
          "نموذج TCP",
          "نموذج MVC",
          "نموذج REST"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تبدأ بالطبقة الفيزيائية وتنتهي بطبقة التطبيقات."
      },
      {
        "question_text": "ما أسلوب التحكم في الإصدارات الذي يعتمد عليه معظم المطورين اليوم؟",
        "options": [
          "SVN",
          "Git",
          "CVS",
          "Mercurial"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "طوّره لينوس تورفالدس عام 2005."
      },
      {
        "question_text": "ما التعقيد الزمني لخوارزمية البحث الثنائي في مصفوفة مرتبة؟",
        "options": [
          "ثابت",
          "لوغاريتمي",
          "خطي",
          "تربيعي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لأنها تنصّف مجال البحث في كل خطوة."
      },
      {
        "question_text": "ما الغرض من خدمة DNS؟",
        "options": [
          "تشفير البيانات",
          "ترجمة أسماء النطاقات إلى عناوين رقمية",
          "توزيع الحمل",
          "ضغط الملفات"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعمل كدليل هاتف للإنترنت."
      },
      {
        "question_text": "أي مفهوم يصف حزم التطبيق مع اعتمادياته في بيئة معزولة خفيفة؟",
        "options": [
          "الحاويات",
          "الأجهزة الافتراضية الكاملة",
          "التقسيم القرصي",
          "التخزين الكتلي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشهر أدواتها دوكر."
      },
      {
        "question_text": "ما الفرق الجوهري الذي يميّز الذاكرة من نوع SSD عن القرص الصلب التقليدي؟",
        "options": [
          "يعتمد على أقراص دوّارة",
          "لا يحتوي أجزاء متحركة",
          "يخزّن على أشرطة مغناطيسية",
          "يحتاج تبريدًا سائلًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "غياب الأجزاء المتحركة يرفع السرعة والمتانة."
      },
      {
        "question_text": "ما الخوارزمية التي تُستخدم في تشفير المفتاح العام وسُميت بأحرف مطوّريها الثلاثة؟",
        "options": [
          "AES",
          "RSA",
          "SHA",
          "DES"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعتمد صعوبة تحليل الأعداد الكبيرة إلى عواملها الأولية."
      },
      {
        "question_text": "ما المصطلح الذي يصف تقنية دفتر الحسابات الموزّع الذي تقوم عليه العملات الرقمية؟",
        "options": [
          "سلسلة الكتل",
          "قاعدة بيانات علائقية",
          "الحوسبة الطرفية",
          "التخزين السحابي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل كتلة ترتبط بسابقتها ببصمة تشفيرية."
      },
      {
        "question_text": "ما رمز حالة HTTP الذي يعني أن المورد غير موجود؟",
        "options": [
          "301",
          "403",
          "404",
          "500"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرمز 500 يشير إلى خطأ في الخادم."
      }
    ]
  },
  {
    "id": "lib-ahl-01",
    "user_id": "system",
    "title": "سيرة النبي محمد (ص)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "ما التاريخ المشهور عند الإمامية لولادة النبي محمد (ص)؟",
        "options": [
          "12 ربيع الأول",
          "17 ربيع الأول",
          "27 رجب",
          "15 شعبان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينقل المجلسي اتفاق علماء الإمامية على السابع عشر من ربيع الأول.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "المولد",
          "التاريخ"
        ],
        "source": "بحار الأنوار، ج15، باب تاريخ ولادته (ص)",
        "external_id": "prophet-muhammad-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة وُلد النبي محمد (ص)؟",
        "options": [
          "المدينة",
          "الطائف",
          "مكة",
          "القدس"
        ],
        "correct_index": 2,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تورد روايات مولده أنه وُلد في مكة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "المولد",
          "مكة"
        ],
        "source": "بحار الأنوار، ج15، باب تاريخ ولادته (ص)",
        "external_id": "prophet-muhammad-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من هو والد النبي محمد (ص)؟",
        "options": [
          "أبو طالب",
          "عبد المطلب",
          "حمزة",
          "عبد الله بن عبد المطلب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نسبه هو محمد بن عبد الله بن عبد المطلب.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "النسب"
        ],
        "source": "إعلام الورى، ج1، الباب الأول في نسب رسول الله ومولده",
        "external_id": "prophet-muhammad-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كفل النبي (ص) بعد وفاة جده عبد المطلب؟",
        "options": [
          "العباس",
          "حمزة",
          "أبو طالب",
          "أبو لهب"
        ],
        "correct_index": 2,
        "time_limit_seconds": 15,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتقلت كفالته بعد وفاة عبد المطلب إلى عمه أبي طالب.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "أبو طالب",
          "الكفالة"
        ],
        "source": "بحار الأنوار، ج15، باب نشوئه (ص)",
        "external_id": "prophet-muhammad-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر النبي (ص) حين تزوج السيدة خديجة (ع)؟",
        "options": [
          "عشرون سنة",
          "خمس وعشرون سنة",
          "ثلاثون سنة",
          "خمس وثلاثون سنة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تزوج النبي خديجة وهو ابن خمس وعشرين سنة.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "خديجة",
          "الزواج"
        ],
        "source": "بحار الأنوار، ج16، ص12–22",
        "external_id": "prophet-muhammad-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من ألقى خطبة زواج النبي (ص) من السيدة خديجة (ع)؟",
        "options": [
          "عبد المطلب",
          "حمزة",
          "العباس",
          "أبو طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حفظت الرواية خطبة أبي طالب في طلب خديجة لابن أخيه.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "النبي محمد",
          "خديجة",
          "أبو طالب"
        ],
        "source": "بحار الأنوار، ج16، ص17",
        "external_id": "prophet-muhammad-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر النبي (ص) عند بعثته بالرسالة؟",
        "options": [
          "ثلاثون سنة",
          "خمس وثلاثون سنة",
          "أربعون سنة",
          "خمس وأربعون سنة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 15,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت بعثته بعد مضي أربعين سنة من عمره الشريف.",
        "difficulty": "easy",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "البعثة"
        ],
        "source": "إعلام الورى، ج1، فصل مبعثه (ص)",
        "external_id": "prophet-muhammad-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما التاريخ المشهور عند الإمامية لبعثة النبي (ص)؟",
        "options": [
          "17 ربيع الأول",
          "13 رجب",
          "15 شعبان",
          "27 رجب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المشهور الإمامي أن المبعث وقع في السابع والعشرين من رجب.",
        "difficulty": "easy",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "المبعث",
          "رجب"
        ],
        "source": "بحار الأنوار، ج18، باب المبعث وإظهار الدعوة",
        "external_id": "prophet-muhammad-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كانت أول امرأة آمنت برسالة النبي (ص)؟",
        "options": [
          "فاطمة بنت أسد",
          "أم سلمة",
          "خديجة بنت خويلد",
          "أسماء بنت عميس"
        ],
        "correct_index": 2,
        "time_limit_seconds": 15,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت خديجة أول من صدّق النبي وآمن به من النساء.",
        "difficulty": "easy",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "خديجة",
          "الإيمان"
        ],
        "source": "بحار الأنوار، ج38، ص260",
        "external_id": "prophet-muhammad-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كان أول الرجال إيمانًا بالنبي (ص)؟",
        "options": [
          "حمزة بن عبد المطلب",
          "جعفر بن أبي طالب",
          "زيد بن حارثة",
          "علي بن أبي طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 15,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "علي أول من آمن من الرجال، بعد خديجة.",
        "difficulty": "easy",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "الإمام علي",
          "الإيمان"
        ],
        "source": "بحار الأنوار، ج38، ص260",
        "external_id": "prophet-muhammad-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين جمع النبي (ص) بني عبد المطلب عند إنذار عشيرته الأقربين؟",
        "options": [
          "دار الأرقم",
          "جبل الصفا",
          "المسجد الحرام",
          "دار أبي طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع بني عبد المطلب في دار أبي طالب في واقعة حديث الدار.",
        "difficulty": "hard",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "حديث الدار",
          "العشيرة"
        ],
        "source": "بحار الأنوار، ج18، باب إظهار الدعوة وإنذار العشيرة",
        "external_id": "prophet-muhammad-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المقاطعة التي فرضتها قريش على بني هاشم؟",
        "options": [
          "منع الحج وحده",
          "منع السفر إلى الشام",
          "منع البيع والزواج والمخالطة",
          "منع دخول المسجد فقط"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تضمنت الصحيفة منع البيع والزواج والمخالطة حتى يسلموا النبي.",
        "difficulty": "medium",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "شعب أبي طالب",
          "المقاطعة"
        ],
        "source": "بحار الأنوار، ج19، ص346",
        "external_id": "prophet-muhammad-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من أنفق ماله في نصرة النبي (ص) زمن حصار الشعب؟",
        "options": [
          "العباس",
          "حمزة",
          "أبو سلمة",
          "السيدة خديجة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنفقت خديجة من مالها في شدة الحصار على المحاصرين.",
        "difficulty": "medium",
        "subcategory": "البعثة والدعوة",
        "tags": [
          "النبي محمد",
          "خديجة",
          "شعب أبي طالب"
        ],
        "source": "بحار الأنوار، ج19، ص346–350",
        "external_id": "prophet-muhammad-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من نام في فراش النبي (ص) ليلة خروجه للهجرة؟",
        "options": [
          "حمزة",
          "جعفر",
          "سلمان",
          "علي بن أبي طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 15,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بات علي في فراش النبي تمويهًا على المتآمرين.",
        "difficulty": "easy",
        "subcategory": "الهجرة",
        "tags": [
          "النبي محمد",
          "الإمام علي",
          "ليلة المبيت"
        ],
        "source": "بحار الأنوار، ج19، باب الهجرة ومبيت أمير المؤمنين",
        "external_id": "prophet-muhammad-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما أول عمل عمراني قام به النبي (ص) عند وصوله إلى قباء؟",
        "options": [
          "بناء السوق",
          "حفر خندق",
          "بناء دار الإمارة",
          "بناء مسجد قباء"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أقام النبي في قباء وبنى مسجدها قبل دخوله المدينة.",
        "difficulty": "medium",
        "subcategory": "الهجرة",
        "tags": [
          "النبي محمد",
          "قباء",
          "المسجد"
        ],
        "source": "بحار الأنوار، ج19، باب نزوله قباء",
        "external_id": "prophet-muhammad-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بين أي جماعتين عقد النبي (ص) المؤاخاة بعد الهجرة؟",
        "options": [
          "قريش وثقيف",
          "الأوس والخزرج فقط",
          "أهل مكة واليهود",
          "المهاجرين والأنصار"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "آخى النبي بين المهاجرين والأنصار، واتخذ عليًا أخًا له.",
        "difficulty": "easy",
        "subcategory": "بناء المجتمع",
        "tags": [
          "النبي محمد",
          "المؤاخاة",
          "المدينة"
        ],
        "source": "بحار الأنوار، ج38، باب المؤاخاة",
        "external_id": "prophet-muhammad-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما أول معركة كبرى انتصر فيها المسلمون بقيادة النبي (ص)؟",
        "options": [
          "أحد",
          "الخندق",
          "خيبر",
          "بدر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 15,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت بدر أول مواجهة كبرى وانتهت بنصر المسلمين.",
        "difficulty": "easy",
        "subcategory": "الغزوات",
        "tags": [
          "النبي محمد",
          "بدر",
          "الغزوات"
        ],
        "source": "بحار الأنوار، ج19، أبواب غزوة بدر",
        "external_id": "prophet-muhammad-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الوسيلة الدفاعية التي استُخدمت حول المدينة في غزوة الأحزاب؟",
        "options": [
          "سور حجري",
          "أبراج خشبية",
          "متاريس بحرية",
          "حفر الخندق"
        ],
        "correct_index": 3,
        "time_limit_seconds": 15,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حُفر الخندق في الجهة المكشوفة من المدينة فعاق الأحزاب.",
        "difficulty": "easy",
        "subcategory": "الغزوات",
        "tags": [
          "النبي محمد",
          "الخندق",
          "الأحزاب"
        ],
        "source": "بحار الأنوار، ج20، أبواب غزوة الخندق",
        "external_id": "prophet-muhammad-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لمن أعطى النبي (ص) الراية يوم خيبر بعد قوله إنه يحب الله ورسوله؟",
        "options": [
          "الزبير بن العوام",
          "سعد بن أبي وقاص",
          "خالد بن الوليد",
          "علي بن أبي طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دعا النبي عليًا ودفع إليه الراية، وكان الفتح على يديه.",
        "difficulty": "medium",
        "subcategory": "الغزوات",
        "tags": [
          "النبي محمد",
          "الإمام علي",
          "خيبر"
        ],
        "source": "الإرشاد، ج1، فصل مناقب أمير المؤمنين في خيبر",
        "external_id": "prophet-muhammad-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من الذين خرج بهم النبي (ص) لمباهلة نصارى نجران؟",
        "options": [
          "العباس وحمزة وجعفر وعقيل",
          "أبو ذر وسلمان والمقداد وعمار",
          "زوجاته وبناته جميعًا",
          "علي وفاطمة والحسن والحسين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين.",
        "difficulty": "medium",
        "subcategory": "المواقف المفصلية",
        "tags": [
          "النبي محمد",
          "المباهلة",
          "أهل البيت"
        ],
        "source": "الإرشاد، ج1، فصل آية المباهلة",
        "external_id": "prophet-muhammad-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا أعلن النبي (ص) في غدير خم بشأن الإمام علي (ع)؟",
        "options": [
          "تعيينه قائدًا على اليمن فقط",
          "تكليفه بجمع الصدقات",
          "إرساله إلى خيبر",
          "أنه مولى من كان النبي مولاه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعلن النبي في غدير خم: من كنت مولاه فعلي مولاه.",
        "difficulty": "medium",
        "subcategory": "المواقف المفصلية",
        "tags": [
          "النبي محمد",
          "الغدير",
          "الإمام علي"
        ],
        "source": "الإرشاد، ج1، باب النص على أمير المؤمنين، خبر الغدير",
        "external_id": "prophet-muhammad-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تولى غسل النبي (ص) وتجهيزه بعد وفاته؟",
        "options": [
          "العباس وحده",
          "أبو ذر",
          "سلمان",
          "علي بن أبي طالب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوصى النبي أن يتولى علي غسله، فغسله وكفنه.",
        "difficulty": "medium",
        "subcategory": "الرحيل",
        "tags": [
          "النبي محمد",
          "الوفاة",
          "الإمام علي"
        ],
        "source": "بحار الأنوار، ج22، ص516",
        "external_id": "prophet-muhammad-022",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-02",
    "user_id": "system",
    "title": "سيرة الإمام علي بن أبي طالب (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "ali-001",
        "question_text": "أين كانت ولادة الإمام علي (ع)؟",
        "options": [
          "في البيت الحرام بمكة",
          "في دار أبي طالب بمكة",
          "في المسجد النبوي بالمدينة",
          "في شعب أبي طالب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر الشيخ المفيد أن الإمام عليًا (ع) وُلد في البيت الحرام بمكة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام علي",
          "الولادة",
          "مكة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1 (الترجمة المحققة المنشورة على Al-Islam.org)",
        "external_id": "ali-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-002",
        "question_text": "في أي يوم من رجب وُلد الإمام علي (ع) بحسب الإرشاد؟",
        "options": [
          "الثالث عشر",
          "العاشر",
          "الخامس عشر",
          "السابع والعشرون"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حدد الإرشاد ولادته يوم الجمعة، الثالث عشر من شهر رجب.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام علي",
          "رجب"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1",
        "external_id": "ali-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-003",
        "question_text": "من هي والدة الإمام علي (ع)؟",
        "options": [
          "فاطمة بنت أسد",
          "فاطمة الزهراء",
          "أم البنين",
          "صفية بنت عبد المطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمه فاطمة بنت أسد بن هاشم بن عبد مناف.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام علي",
          "فاطمة بنت أسد"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1",
        "external_id": "ali-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-004",
        "question_text": "ما كنية الإمام علي (ع) التي يذكرها الشيخ المفيد؟",
        "options": [
          "أبو الحسن",
          "أبو محمد",
          "أبو جعفر",
          "أبو القاسم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الشيخ المفيد على أن كنيته أبو الحسن.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام علي",
          "الكنية"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1",
        "external_id": "ali-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-005",
        "question_text": "كيف وصف الإرشاد صلة فاطمة بنت أسد بالنبي (ص)؟",
        "options": [
          "كانت له بمنزلة الأم",
          "كانت أخته من الرضاعة",
          "كانت عمته",
          "كانت مرضعته الوحيدة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإرشاد أنها كانت للنبي (ص) بمنزلة الأم، وقد نشأ في رعايتها.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "فاطمة بنت أسد",
          "النبي"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1",
        "external_id": "ali-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-006",
        "question_text": "ما منزلة الإمام علي (ع) في السبق إلى الإسلام بحسب الإرشاد؟",
        "options": [
          "أول ذكر دعاه النبي فأجاب",
          "أول مهاجر إلى الحبشة",
          "أول خطيب في المدينة",
          "أول مؤذن في الإسلام"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقرر الإرشاد أنه أول ذكر دعاه النبي (ص) إلى الإسلام فأجابه.",
        "difficulty": "medium",
        "subcategory": "بدايات الإسلام",
        "tags": [
          "الإمام علي",
          "السبق إلى الإسلام"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص1-2",
        "external_id": "ali-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-007",
        "question_text": "كم سنة صحب الإمام علي (ع) النبي بعد البعثة في مكة؟",
        "options": [
          "ثلاث عشرة سنة",
          "عشر سنوات",
          "خمس عشرة سنة",
          "ثلاث وعشرون سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قسم الإرشاد صحبته بعد البعثة إلى ثلاث عشرة سنة في مكة وعشر في المدينة.",
        "difficulty": "medium",
        "subcategory": "بدايات الإسلام",
        "tags": [
          "الإمام علي",
          "مكة",
          "البعثة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص2",
        "external_id": "ali-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-008",
        "question_text": "كم سنة صحب الإمام علي (ع) النبي بعد الهجرة في المدينة؟",
        "options": [
          "عشر سنوات",
          "ثماني سنوات",
          "ثلاث عشرة سنة",
          "خمس سنوات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإرشاد عشر سنوات في المدينة بعد الهجرة دافع فيها عن النبي (ص).",
        "difficulty": "medium",
        "subcategory": "العهد المدني",
        "tags": [
          "الإمام علي",
          "المدينة",
          "الهجرة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص2",
        "external_id": "ali-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-009",
        "question_text": "كم كان عمر الإمام علي (ع) يوم رحيل النبي (ص) بحسب الإرشاد؟",
        "options": [
          "ثلاثًا وثلاثين سنة",
          "ثلاثين سنة",
          "أربعين سنة",
          "ثلاثًا وستين سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينص الإرشاد على أن عمره يوم رحيل النبي (ص) كان ثلاثًا وثلاثين سنة.",
        "difficulty": "medium",
        "subcategory": "العهد النبوي",
        "tags": [
          "الإمام علي",
          "رحيل النبي"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص2",
        "external_id": "ali-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-010",
        "question_text": "ما العمل الذي ربطه الإرشاد بآية الولاية (المائدة: 55)؟",
        "options": [
          "إيتاء الزكاة حال الركوع",
          "إطعام المسكين عند الإفطار",
          "المبيت في فراش النبي",
          "فتح باب خيبر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استدل الإرشاد بالآية وذكر أن الإمام عليًا (ع) تصدق وهو راكع.",
        "difficulty": "medium",
        "subcategory": "الفضائل والدلالات",
        "tags": [
          "الإمام علي",
          "آية الولاية",
          "الزكاة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص2-3",
        "external_id": "ali-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-011",
        "question_text": "من لبّى دعوة النبي (ص) إلى نصرته في اجتماع بني عبد المطلب؟",
        "options": [
          "الإمام علي (ع)",
          "حمزة بن عبد المطلب",
          "جعفر بن أبي طالب",
          "العباس بن عبد المطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قام الإمام علي (ع)، وكان أصغر القوم، وقال للنبي (ص): أنا أنصرك.",
        "difficulty": "medium",
        "subcategory": "الفضائل والدلالات",
        "tags": [
          "الإمام علي",
          "حديث الدار"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص3",
        "external_id": "ali-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-012",
        "question_text": "أي عبارة قالها النبي (ص) في غدير خم بحسب الإرشاد؟",
        "options": [
          "من كنت مولاه فعلي مولاه",
          "علي مني وأنا من علي",
          "أنا مدينة العلم وعلي بابها",
          "لا فتى إلا علي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أورد الإرشاد قول النبي (ص): من كنت مولاه فعلي مولاه، في خطبة غدير خم.",
        "difficulty": "easy",
        "subcategory": "الفضائل والدلالات",
        "tags": [
          "الإمام علي",
          "الغدير"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص3",
        "external_id": "ali-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-013",
        "question_text": "بمن شبّه النبي (ص) منزلة علي (ع) منه عند الخروج إلى تبوك؟",
        "options": [
          "هارون من موسى",
          "يوشع من موسى",
          "إسماعيل من إبراهيم",
          "يحيى من زكريا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال له: أنت مني بمنزلة هارون من موسى إلا أنه لا نبي بعدي.",
        "difficulty": "easy",
        "subcategory": "الفضائل والدلالات",
        "tags": [
          "الإمام علي",
          "حديث المنزلة",
          "تبوك"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص3-4",
        "external_id": "ali-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-014",
        "question_text": "كم دامت إمامة الإمام علي (ع) بعد النبي بحسب الإرشاد؟",
        "options": [
          "ثلاثين سنة",
          "خمسًا وعشرين سنة",
          "خمس سنوات وستة أشهر",
          "ثلاثًا وثلاثين سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الشيخ المفيد أن مدة إمامته بعد النبي (ص) كانت ثلاثين سنة.",
        "difficulty": "medium",
        "subcategory": "الإمامة والخلافة",
        "tags": [
          "الإمام علي",
          "الإمامة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص5",
        "external_id": "ali-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-015",
        "question_text": "كم استمرت مدة حكم الإمام علي (ع) الفعلي المضطربة بالحروب؟",
        "options": [
          "خمس سنوات وستة أشهر",
          "أربع سنوات",
          "عشر سنوات",
          "أربع وعشرون سنة وستة أشهر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفصل الإرشاد ثلاثين سنة إلى 24 سنة و6 أشهر منع فيها من التصرف، و5 سنوات و6 أشهر واجه فيها الحروب.",
        "difficulty": "hard",
        "subcategory": "الإمامة والخلافة",
        "tags": [
          "الإمام علي",
          "الخلافة",
          "الحروب"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر أمير المؤمنين (ع)، ص5",
        "external_id": "ali-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-016",
        "question_text": "في أي مسجد ضُرب الإمام علي (ع) الضربة التي استشهد بسببها؟",
        "options": [
          "مسجد الكوفة",
          "المسجد الحرام",
          "المسجد النبوي",
          "مسجد قباء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإرشاد أن ابن ملجم ضربه في مسجد الكوفة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "مسجد الكوفة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص5-6",
        "external_id": "ali-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-017",
        "question_text": "من نفّذ ضربة اغتيال الإمام علي (ع)؟",
        "options": [
          "عبد الرحمن بن ملجم المرادي",
          "عمرو بن العاص",
          "معاوية بن أبي سفيان",
          "الأشعث بن قيس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينسب الإرشاد الضربة القاتلة إلى عبد الرحمن بن ملجم المرادي.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "ابن ملجم"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص5-6",
        "external_id": "ali-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-018",
        "question_text": "متى وقعت ضربة الإمام علي (ع) في مسجد الكوفة؟",
        "options": [
          "ليلة التاسع عشر من رمضان",
          "ليلة السابع عشر من رمضان",
          "ليلة الحادي والعشرين من رمضان",
          "ليلة الثالث والعشرين من رمضان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج لإيقاظ الناس لصلاة الفجر ليلة التاسع عشر من رمضان فضربه ابن ملجم.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "رمضان",
          "الضربة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص5-6",
        "external_id": "ali-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-019",
        "question_text": "ما الوصف الذي يذكره الإرشاد لسيف ابن ملجم؟",
        "options": [
          "كان مسمومًا",
          "كان مكسورًا",
          "كان ذا نصلين",
          "كان من غنائم بدر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإرشاد على أن ابن ملجم ضرب أعلى رأس الإمام بسيف مسموم.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "ابن ملجم",
          "السيف"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-020",
        "question_text": "في أي تاريخ كانت شهادة الإمام علي (ع) بحسب الإرشاد؟",
        "options": [
          "21 رمضان سنة 40هـ",
          "19 رمضان سنة 40هـ",
          "21 رمضان سنة 41هـ",
          "19 رمضان سنة 39هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت وفاته شهيدًا قبل فجر الجمعة، الحادي والعشرين من رمضان سنة 40هـ.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "الشهادة",
          "رمضان"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص5-6",
        "external_id": "ali-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-021",
        "question_text": "من تولّى غسل الإمام علي (ع) وتكفينه تنفيذًا لوصيته؟",
        "options": [
          "الحسن والحسين (ع)",
          "محمد بن الحنفية وعبد الله بن جعفر",
          "عمار بن ياسر والمقداد",
          "قنبر والأصبغ بن نباتة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى الإمامان الحسن والحسين (ع) غسله وتكفينه وفق وصيته.",
        "difficulty": "medium",
        "subcategory": "الدفن والمزار",
        "tags": [
          "الإمام علي",
          "الحسن",
          "الحسين"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-022",
        "question_text": "إلى أي موضع حُمل الإمام علي (ع) لدفنه؟",
        "options": [
          "الغري في النجف",
          "البقيع في المدينة",
          "مقبرة المعلاة في مكة",
          "وادي السلام في البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حمله الحسنان (ع) إلى الغري في النجف من أرض الكوفة ودفناه هناك.",
        "difficulty": "easy",
        "subcategory": "الدفن والمزار",
        "tags": [
          "الإمام علي",
          "النجف",
          "الغري"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-023",
        "question_text": "لماذا أُخفي أثر قبر الإمام علي (ع) أول الأمر؟",
        "options": [
          "خشية اعتداء الأمويين عليه",
          "لمنع السيول من الوصول إليه",
          "انتظار بناء مدينة النجف",
          "لوقوع خلاف على موضع الدفن"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوصى بإخفاء أثر قبره لما علمه من عداوة الحكم الأموي وخشية العبث به.",
        "difficulty": "medium",
        "subcategory": "الدفن والمزار",
        "tags": [
          "الإمام علي",
          "القبر",
          "الأمويون"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-024",
        "question_text": "من دلّ الشيعة على قبر الإمام علي (ع) في العصر العباسي؟",
        "options": [
          "الإمام جعفر الصادق (ع)",
          "الإمام محمد الباقر (ع)",
          "الإمام موسى الكاظم (ع)",
          "زيد بن علي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإرشاد أن الإمام جعفر الصادق (ع) عرّف القبر في العصر العباسي، فعرفته الشيعة وزارته.",
        "difficulty": "medium",
        "subcategory": "الدفن والمزار",
        "tags": [
          "الإمام علي",
          "الإمام الصادق",
          "القبر"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "ali-025",
        "question_text": "كم كان عمر الإمام علي (ع) عند استشهاده بحسب الإرشاد؟",
        "options": [
          "ثلاثًا وستين سنة",
          "ستين سنة",
          "خمسًا وستين سنة",
          "ثمانٍ وخمسين سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ختم الشيخ المفيد ترجمته المختصرة بذكر أن عمر الإمام عند وفاته كان 63 سنة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الإمام علي",
          "العمر",
          "الشهادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، باب ذكر وفاة أمير المؤمنين (ع)، ص6",
        "external_id": "ali-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-03",
    "user_id": "system",
    "title": "سيرة السيدة فاطمة الزهراء (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هي والدة السيدة فاطمة الزهراء (ع)؟",
        "options": [
          "خديجة بنت خويلد",
          "فاطمة بنت أسد",
          "أم سلمة",
          "صفية بنت عبد المطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الزهراء (ع) ابنة النبي محمد (ص) من زوجته خديجة بنت خويلد.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "فاطمة الزهراء",
          "النشأة"
        ],
        "source": "بحار الأنوار، ج43، باب ولادتها وأسمائها",
        "external_id": "FAT-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة ولدت السيدة فاطمة الزهراء (ع)؟",
        "options": [
          "مكة المكرمة",
          "المدينة المنورة",
          "الطائف",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ولدت (ع) في مكة في بيت النبوة قبل الهجرة إلى المدينة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "فاطمة الزهراء",
          "مكة"
        ],
        "source": "مناقب آل أبي طالب، ج3، فصل مولد فاطمة",
        "external_id": "FAT-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما اليوم المشهور لولادة الزهراء (ع) في الرواية الإمامية؟",
        "options": [
          "20 جمادى الآخرة",
          "13 رجب",
          "15 شعبان",
          "10 ربيع الأول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العشرون من جمادى الآخرة هو تاريخ الولادة المشهور عند الإمامية.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "فاطمة الزهراء",
          "الولادة"
        ],
        "source": "دلائل الإمامة، باب مولد فاطمة",
        "external_id": "FAT-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي كنية اشتهرت بها الزهراء (ع) وتعبّر عن شدة قربها من النبي (ص)؟",
        "options": [
          "أم أبيها",
          "أم البنين",
          "أم المؤمنين",
          "أم عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«أم أبيها» من كناها المشهورة في كتب المناقب الإمامية.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "فاطمة الزهراء",
          "الألقاب"
        ],
        "source": "بحار الأنوار، ج43، باب أسمائها وكناها",
        "external_id": "FAT-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بمن تزوجت السيدة فاطمة الزهراء (ع)؟",
        "options": [
          "الإمام علي بن أبي طالب (ع)",
          "جعفر بن أبي طالب",
          "زيد بن حارثة",
          "العباس بن عبد المطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "زوّج النبي (ص) فاطمة (ع) من الإمام علي بن أبي طالب (ع).",
        "difficulty": "easy",
        "subcategory": "الزواج والأسرة",
        "tags": [
          "فاطمة الزهراء",
          "الزواج"
        ],
        "source": "الإرشاد، ج1، باب أمير المؤمنين وأولاده",
        "external_id": "FAT-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي بيع لتجهيز مهر الزهراء (ع) في الرواية المشهورة؟",
        "options": [
          "درع الإمام علي (ع)",
          "سيفه ذو الفقار",
          "ناقته",
          "خاتمه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمر النبي (ص) عليًا (ع) ببيع درعه ليجعل ثمنها في المهر وتجهيز البيت.",
        "difficulty": "medium",
        "subcategory": "الزواج والأسرة",
        "tags": [
          "فاطمة الزهراء",
          "المهر"
        ],
        "source": "أمالي الصدوق، مجلس تزويج فاطمة من علي",
        "external_id": "FAT-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي حفيدين للنبي (ص) هما ابنا الزهراء (ع)؟",
        "options": [
          "الحسن والحسين (ع)",
          "محمد وإبراهيم",
          "جعفر وعقيل",
          "القاسم وعبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحسن والحسين (ع) ابنا علي وفاطمة، وهما سبطا رسول الله (ص).",
        "difficulty": "easy",
        "subcategory": "الزواج والأسرة",
        "tags": [
          "فاطمة الزهراء",
          "الأبناء"
        ],
        "source": "الإرشاد، ج1، باب أولاد أمير المؤمنين",
        "external_id": "FAT-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من ابنتا الزهراء (ع) اللتان تذكرهما كتب السيرة ضمن أولادها؟",
        "options": [
          "زينب وأم كلثوم",
          "رقية وسكينة",
          "فاطمة وحكيمة",
          "خديجة وصفية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعد المصادر زينب وأم كلثوم مع الحسن والحسين ضمن أولاد فاطمة وعلي (ع).",
        "difficulty": "medium",
        "subcategory": "الزواج والأسرة",
        "tags": [
          "فاطمة الزهراء",
          "الأبناء"
        ],
        "source": "الإرشاد، ج1، باب أولاد أمير المؤمنين",
        "external_id": "FAT-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف قسّم النبي (ص) العمل بين علي وفاطمة (ع)؟",
        "options": [
          "لفاطمة عمل البيت ولعلي ما خارجه",
          "لعلي عمل البيت ولفاطمة ما خارجه",
          "جعله كله على علي",
          "جعله كله على فاطمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قضى النبي (ص) على فاطمة بخدمة ما دون الباب، وعلى علي بما خلفه.",
        "difficulty": "medium",
        "subcategory": "بيت الزهراء",
        "tags": [
          "فاطمة الزهراء",
          "الحياة الأسرية"
        ],
        "source": "بحار الأنوار، ج43، باب مكارم أخلاقها وسيرها",
        "external_id": "FAT-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا علّم النبي (ص) فاطمة (ع) بدل الخادم؟",
        "options": [
          "تسبيح الزهراء",
          "دعاء كميل",
          "صلاة جعفر",
          "زيارة عاشوراء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "علّمها النبي (ص) ذكرًا صار معروفًا بتسبيح فاطمة الزهراء.",
        "difficulty": "easy",
        "subcategory": "بيت الزهراء",
        "tags": [
          "فاطمة الزهراء",
          "التسبيح"
        ],
        "source": "الكافي، ج3، باب تسبيح فاطمة",
        "external_id": "FAT-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف يبدأ الترتيب المروي لتسبيح الزهراء (ع) بعد الصلاة؟",
        "options": [
          "34 مرة «الله أكبر»",
          "34 مرة «الحمد لله»",
          "33 مرة «سبحان الله»",
          "33 مرة «لا إله إلا الله»"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يبدأ بأربع وثلاثين تكبيرة، ثم 33 تحميدة، ثم 33 تسبيحة.",
        "difficulty": "medium",
        "subcategory": "بيت الزهراء",
        "tags": [
          "فاطمة الزهراء",
          "التسبيح"
        ],
        "source": "الكافي، ج3، باب تسبيح فاطمة",
        "external_id": "FAT-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من المرأة التي اصطحبها النبي (ص) إلى المباهلة مع نصارى نجران؟",
        "options": [
          "فاطمة الزهراء (ع)",
          "أم سلمة",
          "زينب بنت جحش",
          "صفية بنت عبد المطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين (ع).",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "المباهلة"
        ],
        "source": "تفسير القمي، ج1، تفسير آل عمران 61",
        "external_id": "FAT-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من ضمهم الكساء مع النبي (ص) في الرواية الإمامية؟",
        "options": [
          "علي وفاطمة والحسن والحسين",
          "العباس وجعفر وعقيل وزيد",
          "أبو بكر وعمر وعثمان وعلي",
          "حمزة والعباس وجعفر وعقيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اجتمع تحت الكساء النبي وعلي وفاطمة والحسن والحسين، وهم الخمسة.",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "أصحاب الكساء"
        ],
        "source": "أمالي الصدوق، مجلس حديث الكساء وآية التطهير",
        "external_id": "FAT-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي آية ارتبطت بأصحاب الكساء ومنهم الزهراء (ع)؟",
        "options": [
          "آية التطهير",
          "آية الكرسي",
          "آية الدين",
          "آية النجوى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نزلت آية التطهير في النبي وعلي وفاطمة والحسن والحسين (ع).",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "آية التطهير"
        ],
        "source": "تفسير القمي، ج2، تفسير الأحزاب 33",
        "external_id": "FAT-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سورة ربطت الروايات بإطعام أهل البيت المسكين واليتيم والأسير؟",
        "options": [
          "سورة الإنسان",
          "سورة الفتح",
          "سورة الجمعة",
          "سورة الملك"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر الروايات نزول آيات الإطعام من سورة الإنسان في أهل هذا البيت.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "سورة الإنسان"
        ],
        "source": "مناقب آل أبي طالب، ج3، خبر سورة هل أتى",
        "external_id": "FAT-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا وصف النبي (ص) فاطمة في الحديث المشهور «فاطمة بضعة مني»؟",
        "options": [
          "بضعة منه",
          "خادمته",
          "أخته",
          "عمته"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال النبي (ص): «فاطمة بضعة مني»، دلالة على شدة اتصالها به.",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "الحديث"
        ],
        "source": "أمالي الصدوق، المجالس في فضائل فاطمة",
        "external_id": "FAT-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما اللقب الدال على انقطاع الزهراء (ع) إلى الله وتميزها؟",
        "options": [
          "البتول",
          "العقيلة",
          "الحوراء",
          "الكريمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«البتول» من ألقاب فاطمة (ع) الواردة في أبواب أسمائها وفضائلها.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "فاطمة الزهراء",
          "الألقاب"
        ],
        "source": "بحار الأنوار، ج43، باب أسمائها وعلل أسمائها",
        "external_id": "FAT-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما اسم الأرض التي طالبت الزهراء (ع) بحقها فيها بعد رحيل النبي (ص)؟",
        "options": [
          "فدك",
          "خيبر",
          "قباء",
          "العقيق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "احتجت الزهراء (ع) في قضية فدك وخطبت مطالبة بحقها ومستدلة بالقرآن.",
        "difficulty": "easy",
        "subcategory": "المواقف بعد رحيل النبي",
        "tags": [
          "فاطمة الزهراء",
          "فدك"
        ],
        "source": "الاحتجاج، ج1، احتجاج فاطمة في أمر فدك",
        "external_id": "FAT-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين ألقت الزهراء (ع) خطبتها المعروفة في قضية فدك؟",
        "options": [
          "مسجد النبي (ص)",
          "مسجد قباء",
          "المسجد الحرام",
          "مسجد الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دخلت فاطمة (ع) مسجد رسول الله (ص) وخاطبت الحاضرين في خطبتها.",
        "difficulty": "medium",
        "subcategory": "المواقف بعد رحيل النبي",
        "tags": [
          "فاطمة الزهراء",
          "الخطبة الفدكية"
        ],
        "source": "الاحتجاج، ج1، خطبة فاطمة واحتجاجها",
        "external_id": "FAT-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بأي نوع من الأدلة احتجت الزهراء (ع) في خطبتها بشأن الميراث؟",
        "options": [
          "بآيات من القرآن",
          "بأشعار الجاهلية",
          "بأعراف الروم",
          "برسائل ملوك اليمن"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استشهدت بآيات وراثة الأنبياء وأحكام المواريث لتقيم حجتها.",
        "difficulty": "hard",
        "subcategory": "المواقف بعد رحيل النبي",
        "tags": [
          "فاطمة الزهراء",
          "الخطبة الفدكية",
          "القرآن"
        ],
        "source": "الاحتجاج، ج1، خطبة فاطمة في فدك والميراث",
        "external_id": "FAT-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تولّى غسل الزهراء (ع) ودفنها بحسب وصيتها؟",
        "options": [
          "الإمام علي (ع)",
          "العباس بن عبد المطلب",
          "سلمان الفارسي",
          "عمار بن ياسر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوصت فاطمة (ع) عليًا (ع)، فتولى تجهيزها ودفنها ليلًا.",
        "difficulty": "medium",
        "subcategory": "الأيام الأخيرة والاستشهاد",
        "tags": [
          "فاطمة الزهراء",
          "الدفن"
        ],
        "source": "الإرشاد، ج1، باب وفاة فاطمة ودفنها",
        "external_id": "FAT-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي ترتب على دفن الزهراء (ع) ليلًا وإخفاء موضع قبرها؟",
        "options": [
          "لم يُعرف موضع قبرها يقينًا",
          "نُقل قبرها إلى مكة",
          "دُفنت في الكوفة",
          "نُقش اسمها على باب المسجد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عُفّي موضع قبرها، ولذلك بقي تحديد موضعه غير مقطوع به.",
        "difficulty": "medium",
        "subcategory": "الأيام الأخيرة والاستشهاد",
        "tags": [
          "فاطمة الزهراء",
          "القبر"
        ],
        "source": "الإرشاد، ج1، باب وفاة فاطمة وموضع قبرها",
        "external_id": "FAT-022",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-04",
    "user_id": "system",
    "title": "سيرة الإمام الحسن المجتبى (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "HASAN-001",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "في أي مدينة وُلد الإمام الحسن المجتبى (ع)؟",
        "options": [
          "المدينة المنورة",
          "مكة المكرمة",
          "الكوفة",
          "البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "question_type": "multi",
        "explanation": "وُلد الإمام الحسن (ع) في المدينة المنورة في شهر رمضان سنة 3 هـ.",
        "tags": [
          "الإمام الحسن",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي (ع)، ص5",
        "external_id": "HASAN-001",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-002",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "medium",
        "question_text": "ما الشهر الهجري الذي شهد ولادة الإمام الحسن (ع)؟",
        "options": [
          "رمضان",
          "شعبان",
          "رجب",
          "محرم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "question_type": "multi",
        "explanation": "يذكر الشيخ المفيد أن ولادته (ع) كانت في النصف من شهر رمضان سنة 3 هـ.",
        "tags": [
          "الإمام الحسن",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي (ع)، ص5",
        "external_id": "HASAN-002",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-003",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "ما كنية الإمام الحسن المجتبى (ع)؟",
        "options": [
          "أبو محمد",
          "أبو عبد الله",
          "أبو الحسن",
          "أبو جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "question_type": "multi",
        "explanation": "كنية الإمام الحسن بن علي (ع) هي أبو محمد.",
        "tags": [
          "الإمام الحسن",
          "الكنية"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي (ع)، ص5",
        "external_id": "HASAN-003",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-004",
        "category": "أهل البيت",
        "subcategory": "النسب",
        "difficulty": "easy",
        "question_text": "من أم الإمام الحسن المجتبى (ع)؟",
        "options": [
          "فاطمة الزهراء (ع)",
          "أم البنين (ع)",
          "خديجة الكبرى (ع)",
          "فاطمة بنت أسد (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "question_type": "multi",
        "explanation": "الإمام الحسن (ع) هو الابن الأكبر للإمام علي (ع) والسيدة فاطمة الزهراء (ع).",
        "tags": [
          "الإمام الحسن",
          "النسب"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي (ع)، ص5",
        "external_id": "HASAN-004",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-005",
        "category": "أهل البيت",
        "subcategory": "الإمامة",
        "difficulty": "easy",
        "question_text": "من تولى الإمامة بعد استشهاد الإمام علي (ع)؟",
        "options": [
          "الإمام الحسن (ع)",
          "الإمام الحسين (ع)",
          "محمد بن الحنفية",
          "عبد الله بن عباس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "question_type": "multi",
        "explanation": "انتقلت الإمامة بعد أمير المؤمنين (ع) إلى ابنه الإمام الحسن المجتبى (ع).",
        "tags": [
          "الإمام الحسن",
          "الإمامة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب النص على إمامة الحسن (ع)، ص6–10",
        "external_id": "HASAN-005",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-006",
        "category": "أهل البيت",
        "subcategory": "البيعة",
        "difficulty": "hard",
        "question_text": "في أي يوم بايع أهل العراق الإمام الحسن (ع) بعد استشهاد أبيه؟",
        "options": [
          "الجمعة 21 رمضان سنة 40 هـ",
          "الجمعة 11 رمضان سنة 40 هـ",
          "الاثنين 21 رمضان سنة 41 هـ",
          "الجمعة 10 محرم سنة 40 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 5,
        "question_type": "multi",
        "explanation": "تمت البيعة للإمام الحسن (ع) يوم الجمعة الحادي والعشرين من رمضان سنة 40 هـ.",
        "tags": [
          "الإمام الحسن",
          "البيعة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب خلافة الحسن (ع)، ص11؛ طبعة Howard ص279",
        "external_id": "HASAN-006",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-007",
        "category": "أهل البيت",
        "subcategory": "البيعة",
        "difficulty": "medium",
        "question_text": "من دعا الناس إلى بيعة الإمام الحسن (ع) عقب خطبته في الكوفة؟",
        "options": [
          "عبد الله بن العباس",
          "قيس بن سعد",
          "حجر بن عدي",
          "سليمان بن صرد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "question_type": "multi",
        "explanation": "قام عبد الله بن العباس بعد خطبة الإمام ودعا الناس إلى بيعته، فأجابوه.",
        "tags": [
          "الإمام الحسن",
          "البيعة",
          "الكوفة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب خلافة الحسن (ع)، ص11؛ طبعة Howard ص279",
        "external_id": "HASAN-007",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-008",
        "category": "أهل البيت",
        "subcategory": "إدارة الدولة",
        "difficulty": "medium",
        "question_text": "إلى أي مدينة أرسل الإمام الحسن (ع) عبد الله بن العباس بعد البيعة؟",
        "options": [
          "البصرة",
          "المدائن",
          "واسط",
          "المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "question_type": "multi",
        "explanation": "بعد تثبيت الولاة والعمال أرسل الإمام عبد الله بن العباس إلى البصرة.",
        "tags": [
          "الإمام الحسن",
          "الإدارة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب خلافة الحسن (ع)، ص11؛ طبعة Howard ص279",
        "external_id": "HASAN-008",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-009",
        "category": "أهل البيت",
        "subcategory": "مواجهة معاوية",
        "difficulty": "medium",
        "question_text": "إلى أي منطقتين أرسل معاوية جاسوسين بعد بيعة الإمام الحسن (ع)؟",
        "options": [
          "الكوفة والبصرة",
          "المدينة ومكة",
          "المدائن وواسط",
          "اليمن والحجاز"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "question_type": "multi",
        "explanation": "أرسل معاوية رجلًا إلى الكوفة وآخر من بني القين إلى البصرة لجمع الأخبار والإفساد.",
        "tags": [
          "الإمام الحسن",
          "معاوية",
          "الجواسيس"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب خلافة الحسن (ع)، ص12؛ طبعة Howard ص279–280",
        "external_id": "HASAN-009",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-010",
        "category": "أهل البيت",
        "subcategory": "التحرك العسكري",
        "difficulty": "hard",
        "question_text": "من قائد مقدمة جيش الإمام الحسن (ع) التي وُجهت إلى مسكن؟",
        "options": [
          "عبيد الله بن العباس",
          "قيس بن سعد",
          "عدي بن حاتم",
          "حجر بن عدي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 9,
        "question_type": "multi",
        "explanation": "قدّم الإمام عبيد الله بن العباس على اثني عشر ألفًا، وجعل قيس بن سعد وسعيد بن قيس من بعده.",
        "tags": [
          "الإمام الحسن",
          "الجيش",
          "مسكن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب مسير الحسن (ع) إلى معاوية، ص13–14؛ طبعة Howard ص281",
        "external_id": "HASAN-010",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-011",
        "category": "أهل البيت",
        "subcategory": "التحرك العسكري",
        "difficulty": "hard",
        "question_text": "كم كان عدد جنود مقدمة الإمام الحسن (ع) بقيادة عبيد الله بن العباس؟",
        "options": [
          "اثنا عشر ألفًا",
          "ثمانية آلاف",
          "عشرون ألفًا",
          "أربعون ألفًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "question_type": "multi",
        "explanation": "جهز الإمام الحسن (ع) مقدمة قوامها اثنا عشر ألف مقاتل وأمرها بالتوجه إلى مسكن.",
        "tags": [
          "الإمام الحسن",
          "الجيش"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب مسير الحسن (ع) إلى معاوية، ص13–14؛ طبعة Howard ص281",
        "external_id": "HASAN-011",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-012",
        "category": "أهل البيت",
        "subcategory": "التحرك العسكري",
        "difficulty": "medium",
        "question_text": "في أي موضع نزل الإمام الحسن (ع) حين خرج لمواجهة جيش الشام؟",
        "options": [
          "ساباط المدائن",
          "النخيلة",
          "صفين",
          "النهروان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "question_type": "multi",
        "explanation": "تحرك الإمام من الكوفة حتى نزل ساباط المدائن، وهناك اختبر استعداد الناس.",
        "tags": [
          "الإمام الحسن",
          "المدائن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب مسير الحسن (ع) إلى معاوية، ص14؛ طبعة Howard ص282",
        "external_id": "HASAN-012",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-013",
        "category": "أهل البيت",
        "subcategory": "المحنة",
        "difficulty": "hard",
        "question_text": "من الذي طعن الإمام الحسن (ع) في ساباط؟",
        "options": [
          "الجراح بن سنان",
          "بسر بن أرطاة",
          "الضحاك بن قيس",
          "عمرو بن العاص"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 12,
        "question_type": "multi",
        "explanation": "اعترض الجراح بن سنان الأسدي الإمام في مظلم ساباط وطعنه في فخذه بمعول.",
        "tags": [
          "الإمام الحسن",
          "ساباط",
          "الطعن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب مسير الحسن (ع) إلى معاوية، ص15؛ طبعة Howard ص283",
        "external_id": "HASAN-013",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-014",
        "category": "أهل البيت",
        "subcategory": "المحنة",
        "difficulty": "medium",
        "question_text": "إلى بيت أي والي نُقل الإمام الحسن (ع) للعلاج بعد طعنه؟",
        "options": [
          "سعد بن مسعود الثقفي",
          "المغيرة بن شعبة",
          "زياد بن أبيه",
          "النعمان بن بشير"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 13,
        "question_type": "multi",
        "explanation": "حُمل الإمام إلى المدائن ونزل على سعد بن مسعود الثقفي، والي أمير المؤمنين عليها.",
        "tags": [
          "الإمام الحسن",
          "المدائن",
          "العلاج"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب مسير الحسن (ع) إلى معاوية، ص15؛ طبعة Howard ص283",
        "external_id": "HASAN-014",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-015",
        "category": "أهل البيت",
        "subcategory": "الصلح",
        "difficulty": "medium",
        "question_text": "ما الغاية التي صرّح بها الإمام الحسن (ع) لقبول الصلح؟",
        "options": [
          "حقن دماء المسلمين",
          "زيادة خراج العراق",
          "توسيع حدود الدولة",
          "نقل العاصمة إلى المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 14,
        "question_type": "multi",
        "explanation": "بيّن الإمام أن رأيه في الصلح يقوم على حقن الدماء ودفع الفتنة بعد خذلان أصحابه.",
        "tags": [
          "الإمام الحسن",
          "الصلح",
          "حقن الدماء"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب الصلح، ص16–18؛ طبعة Howard ص284–286",
        "external_id": "HASAN-015",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-016",
        "category": "أهل البيت",
        "subcategory": "الصلح",
        "difficulty": "hard",
        "question_text": "أي شرط سياسي ورد في عهد الصلح بشأن ما بعد معاوية؟",
        "options": [
          "ألا يعهد بالخلافة إلى أحد",
          "أن يعهد بها ليزيد",
          "أن يجعلها شورى أموية",
          "أن يسلمها لعمرو بن العاص"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 15,
        "question_type": "multi",
        "explanation": "تضمن العهد ألا يعهد معاوية بالأمر إلى أحد من بعده، وفق رواية الشيخ المفيد.",
        "tags": [
          "الإمام الحسن",
          "الصلح",
          "الشروط"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب الصلح، ص16؛ طبعة Howard ص284–285",
        "external_id": "HASAN-016",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-017",
        "category": "أهل البيت",
        "subcategory": "ما بعد الصلح",
        "difficulty": "easy",
        "question_text": "أين أقام الإمام الحسن (ع) بعد إتمام الصلح؟",
        "options": [
          "المدينة المنورة",
          "الكوفة",
          "دمشق",
          "البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "question_type": "multi",
        "explanation": "غادر الإمام الحسن (ع) الكوفة بعد الصلح وعاد إلى المدينة، فأقام فيها بقية حياته.",
        "tags": [
          "الإمام الحسن",
          "المدينة",
          "الصلح"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب الصلح ووفاته (ع)، ص18؛ طبعة Howard ص286",
        "external_id": "HASAN-017",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-018",
        "category": "أهل البيت",
        "subcategory": "الاستشهاد",
        "difficulty": "medium",
        "question_text": "من التي سمّت الإمام الحسن (ع) بحسب رواية الشيخ المفيد؟",
        "options": [
          "جعدة بنت الأشعث",
          "هند بنت عتبة",
          "ميسون بنت بحدل",
          "أم الحكم بنت أبي سفيان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 17,
        "question_type": "multi",
        "explanation": "يروي المفيد أن معاوية راسل جعدة بنت الأشعث، زوج الإمام، وحملها على سمه.",
        "tags": [
          "الإمام الحسن",
          "الاستشهاد",
          "جعدة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب سبب وفاة الحسن (ع)، ص18–19؛ طبعة Howard ص287",
        "external_id": "HASAN-018",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-019",
        "category": "أهل البيت",
        "subcategory": "الاستشهاد",
        "difficulty": "hard",
        "question_text": "كم يومًا بقي الإمام الحسن (ع) مريضًا بعد السم بحسب الإرشاد؟",
        "options": [
          "أربعين يومًا",
          "عشرة أيام",
          "عشرين يومًا",
          "سبعين يومًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "question_type": "multi",
        "explanation": "ذكر الشيخ المفيد أن الإمام (ع) بقي مريضًا من أثر السم أربعين يومًا.",
        "tags": [
          "الإمام الحسن",
          "الاستشهاد"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب سبب وفاة الحسن (ع)، ص19؛ طبعة Howard ص287",
        "external_id": "HASAN-019",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "HASAN-020",
        "category": "أهل البيت",
        "subcategory": "الدفن",
        "difficulty": "easy",
        "question_text": "أين دُفن الإمام الحسن المجتبى (ع)؟",
        "options": [
          "مقبرة البقيع",
          "المسجد النبوي",
          "النجف الأشرف",
          "كربلاء المقدسة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "question_type": "multi",
        "explanation": "دُفن الإمام الحسن (ع) في البقيع إلى جوار جدته فاطمة بنت أسد.",
        "tags": [
          "الإمام الحسن",
          "البقيع",
          "الدفن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب سبب وفاة الحسن (ع) ودفنه، ص19–21؛ طبعة Howard ص287–289",
        "external_id": "HASAN-020",
        "is_verified": true,
        "version": 1,
        "image_url": null
      }
    ]
  },
  {
    "id": "lib-ahl-05",
    "user_id": "system",
    "title": "سيرة الإمام الحسين (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هي والدة الإمام الحسين (ع)؟",
        "options": [
          "فاطمة الزهراء (ع)",
          "أم البنين",
          "أسماء بنت عميس",
          "أم سلمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإمام الحسين (ع) هو ابن الإمام علي وفاطمة الزهراء (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الحسين",
          "النشأة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب ذكر الإمام بعد الحسن",
        "external_id": "HUS-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما التاريخ المشهور لولادة الإمام الحسين (ع)؟",
        "options": [
          "3 شعبان سنة 4 هـ",
          "15 رمضان سنة 3 هـ",
          "10 محرم سنة 5 هـ",
          "17 ربيع الأول سنة 4 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المشهور في المصادر الإمامية أن ولادته كانت في الثالث من شعبان سنة أربع للهجرة.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الحسين",
          "الولادة"
        ],
        "source": "إعلام الورى، الطبرسي، ج1، باب الإمام الحسين بن علي",
        "external_id": "HUS-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من سمّى سبط النبي الأصغر «الحسين»؟",
        "options": [
          "النبي محمد (ص)",
          "الإمام علي (ع)",
          "فاطمة الزهراء (ع)",
          "الإمام الحسن (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر الروايات أن رسول الله (ص) سمّاه حسينًا بعد ولادته.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الحسين",
          "التسمية"
        ],
        "source": "بحار الأنوار، المجلسي، ج43، باب ولادتهما وتسميتهما",
        "external_id": "HUS-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي كنية اشتهر بها الإمام الحسين (ع)؟",
        "options": [
          "أبو عبد الله",
          "أبو محمد",
          "أبو الحسن",
          "أبو جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر كتب السيرة أن كنية الإمام الحسين (ع) هي أبو عبد الله.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الحسين",
          "الكنية"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب ذكر الإمام الحسين",
        "external_id": "HUS-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة نبوية مشهورة تصف مكانة الحسن والحسين (ع)؟",
        "options": [
          "سيدا شباب أهل الجنة",
          "أمينا وحي السماء",
          "صاحبا الهجرتين",
          "كاتبا الوحي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ورد عن النبي (ص) أن الحسن والحسين سيدا شباب أهل الجنة.",
        "difficulty": "easy",
        "subcategory": "الفضائل",
        "tags": [
          "الحسين",
          "الفضائل"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فضائل الحسن والحسين",
        "external_id": "HUS-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي آية ارتبطت بالنبي وعلي وفاطمة والحسن والحسين (ع)؟",
        "options": [
          "آية التطهير",
          "آية الدين",
          "آية النجوى",
          "آية الكلالة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تربط الروايات الإمامية آية التطهير بأصحاب الكساء الخمسة ومنهم الحسين (ع).",
        "difficulty": "easy",
        "subcategory": "الفضائل",
        "tags": [
          "الحسين",
          "آية التطهير"
        ],
        "source": "تفسير القمي، ج2، تفسير سورة الأحزاب، الآية 33",
        "external_id": "HUS-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من الإمام الذي سبق الحسين (ع) مباشرة في الإمامة؟",
        "options": [
          "الإمام الحسن (ع)",
          "الإمام علي (ع)",
          "الإمام السجاد (ع)",
          "الإمام الباقر (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى الحسين (ع) الإمامة بعد أخيه الإمام الحسن المجتبى (ع).",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الحسين",
          "الإمامة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب إمامة الحسين بعد أخيه",
        "external_id": "HUS-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم دامت إمامة الحسين (ع) بحسب ما يذكره الشيخ المفيد؟",
        "options": [
          "نحو عشر سنين",
          "نحو خمس سنين",
          "نحو عشرين سنة",
          "أقل من سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "امتدت إمامته من وفاة أخيه سنة 50 هـ إلى استشهاده سنة 61 هـ، أي نحو عشر سنين.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الحسين",
          "مدة الإمامة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب مدة إمامة الحسين",
        "external_id": "HUS-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا غادر الإمام الحسين (ع) المدينة بعد موت معاوية؟",
        "options": [
          "لرفضه البيعة ليزيد",
          "لطلب ولاية مكة",
          "للتجارة في الشام",
          "لزيارة اليمن"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج من المدينة بعدما طُلبت منه البيعة ليزيد فامتنع عنها.",
        "difficulty": "easy",
        "subcategory": "الخروج والنهضة",
        "tags": [
          "الحسين",
          "رفض البيعة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل خروج الحسين من المدينة",
        "external_id": "HUS-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى أي مدينة توجه الحسين (ع) عند خروجه من المدينة؟",
        "options": [
          "مكة المكرمة",
          "الكوفة",
          "البصرة",
          "دمشق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "غادر المدينة متوجهًا إلى مكة، وأقام فيها قبل مسيره نحو العراق.",
        "difficulty": "easy",
        "subcategory": "الخروج والنهضة",
        "tags": [
          "الحسين",
          "مكة"
        ],
        "source": "اللهوف، ابن طاووس، المسلك الأول: خروج الحسين إلى مكة",
        "external_id": "HUS-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من أرسله الحسين (ع) إلى الكوفة ليتحقق من موقف أهلها؟",
        "options": [
          "مسلم بن عقيل",
          "قيس بن مسهر",
          "هاني بن عروة",
          "حبيب بن مظاهر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بعث الحسين (ع) ابن عمه مسلم بن عقيل إلى الكوفة ليستطلع اجتماع الناس وبيعتهم.",
        "difficulty": "easy",
        "subcategory": "الخروج والنهضة",
        "tags": [
          "الحسين",
          "مسلم بن عقيل"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل إرسال مسلم بن عقيل",
        "external_id": "HUS-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كان والي الكوفة الذي واجه حركة مسلم بن عقيل؟",
        "options": [
          "عبيد الله بن زياد",
          "النعمان بن بشير",
          "عمر بن سعد",
          "الوليد بن عتبة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ولى يزيد عبيد الله بن زياد الكوفة، فتولى قمع حركة مسلم بن عقيل.",
        "difficulty": "medium",
        "subcategory": "الخروج والنهضة",
        "tags": [
          "الحسين",
          "الكوفة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، خبر مسلم بن عقيل بالكوفة",
        "external_id": "HUS-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي يوم غادر الحسين (ع) مكة متوجهًا إلى العراق؟",
        "options": [
          "8 ذي الحجة سنة 60 هـ",
          "10 ذي الحجة سنة 60 هـ",
          "1 محرم سنة 61 هـ",
          "15 شعبان سنة 60 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج من مكة يوم التروية، الثامن من ذي الحجة سنة 60 هـ.",
        "difficulty": "medium",
        "subcategory": "الطريق إلى كربلاء",
        "tags": [
          "الحسين",
          "يوم التروية"
        ],
        "source": "اللهوف، ابن طاووس، المسلك الأول: خروج الحسين من مكة",
        "external_id": "HUS-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من قائد القوة التي التقت ركب الحسين (ع) في الطريق؟",
        "options": [
          "الحر بن يزيد الرياحي",
          "عمر بن سعد",
          "شمر بن ذي الجوشن",
          "حصين بن نمير"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التقى الركب قوة يقودها الحر بن يزيد الرياحي، ثم لازمته حتى النزول بكربلاء.",
        "difficulty": "easy",
        "subcategory": "الطريق إلى كربلاء",
        "tags": [
          "الحسين",
          "الحر الرياحي"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، باب مسير الحسين إلى العراق",
        "external_id": "HUS-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف عامل الحسين (ع) جيش الحر عند وصوله عطشانًا؟",
        "options": [
          "أمر بسقيهم وخيلهم",
          "منع عنهم الماء",
          "أعادهم إلى الكوفة",
          "أخذ سلاحهم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمر الحسين (ع) أصحابه أن يسقوا القوم ويرشفوا الخيل، في موقف رحمة واضح.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الحسين",
          "الرحمة"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، باب لقاء الحر",
        "external_id": "HUS-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي أرض انتهى مسير ركب الحسين (ع)؟",
        "options": [
          "كربلاء",
          "النجف",
          "المدائن",
          "البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتهى المسير بنزول الحسين وأهل بيته وأصحابه بأرض كربلاء.",
        "difficulty": "easy",
        "subcategory": "كربلاء",
        "tags": [
          "الحسين",
          "كربلاء"
        ],
        "source": "اللهوف، ابن طاووس، المسلك الثاني: النزول بكربلاء",
        "external_id": "HUS-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي تاريخ نزل الإمام الحسين (ع) كربلاء؟",
        "options": [
          "2 محرم سنة 61 هـ",
          "1 محرم سنة 60 هـ",
          "8 ذي الحجة سنة 61 هـ",
          "10 صفر سنة 61 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر روايات المقتل نزوله كربلاء في اليوم الثاني من المحرم سنة 61 هـ.",
        "difficulty": "medium",
        "subcategory": "كربلاء",
        "tags": [
          "الحسين",
          "النزول بكربلاء"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، باب ورود كربلاء",
        "external_id": "HUS-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من قاد الجيش المقابل للحسين (ع) في كربلاء؟",
        "options": [
          "عمر بن سعد",
          "عبيد الله بن زياد",
          "الحر بن يزيد",
          "الوليد بن عتبة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى عمر بن سعد قيادة الجيش الذي حاصر الحسين (ع) في كربلاء.",
        "difficulty": "easy",
        "subcategory": "كربلاء",
        "tags": [
          "الحسين",
          "عمر بن سعد"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل مقتل الحسين",
        "external_id": "HUS-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا طلب الحسين (ع) ليلة عاشوراء من القوم؟",
        "options": [
          "إمهاله ليلة للصلاة والدعاء",
          "السماح له بدخول الكوفة",
          "تأجيل القتال شهرًا",
          "إرسال وفد إلى المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "طلب إمهاله تلك الليلة لما كان يحبه من الصلاة وتلاوة القرآن والدعاء.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الحسين",
          "ليلة عاشوراء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، أحداث ليلة عاشوراء",
        "external_id": "HUS-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا أذن الحسين (ع) لأصحابه أن يفعلوا ليلة عاشوراء؟",
        "options": [
          "الانصراف واتخاذ الليل سترًا",
          "بدء القتال ليلًا",
          "مبايعة عمر بن سعد",
          "العودة جميعًا إلى مكة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رفع عن أصحابه الحرج وأذن لهم بالانصراف، فاختاروا الوفاء والبقاء معه.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الحسين",
          "وفاء الأصحاب"
        ],
        "source": "اللهوف، ابن طاووس، المسلك الثاني: خطبة ليلة عاشوراء",
        "external_id": "HUS-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من عاد إلى نصرة الحسين (ع) صباح عاشوراء بعد أن كان في الجيش المقابل؟",
        "options": [
          "الحر بن يزيد الرياحي",
          "عمر بن سعد",
          "شمر بن ذي الجوشن",
          "عبيد الله بن زياد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تاب الحر بن يزيد، وانتقل إلى معسكر الحسين (ع) وقاتل بين يديه.",
        "difficulty": "easy",
        "subcategory": "المواقف",
        "tags": [
          "الحسين",
          "التوبة"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، باب توبة الحر",
        "external_id": "HUS-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من حمل لواء الحسين (ع) في كربلاء؟",
        "options": [
          "أبو الفضل العباس (ع)",
          "علي الأكبر (ع)",
          "القاسم بن الحسن",
          "حبيب بن مظاهر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان لواء الحسين (ع) مع أخيه أبي الفضل العباس (ع).",
        "difficulty": "easy",
        "subcategory": "كربلاء",
        "tags": [
          "الحسين",
          "العباس"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، باب وقائع يوم عاشوراء",
        "external_id": "HUS-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي ابن للإمام الحسين (ع) بقي بعد كربلاء وصار الإمام من بعده؟",
        "options": [
          "علي زين العابدين (ع)",
          "علي الأكبر (ع)",
          "عبد الله الرضيع",
          "جعفر بن الحسين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بقي الإمام علي بن الحسين زين العابدين (ع)، وانتقلت إليه الإمامة بعد أبيه.",
        "difficulty": "easy",
        "subcategory": "ما بعد كربلاء",
        "tags": [
          "الحسين",
          "الإمامة"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب ذكر الإمام علي بن الحسين",
        "external_id": "HUS-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي يوم استشهد الإمام الحسين (ع)؟",
        "options": [
          "10 محرم سنة 61 هـ",
          "9 محرم سنة 60 هـ",
          "20 صفر سنة 61 هـ",
          "21 رمضان سنة 61 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استشهد الإمام الحسين (ع) يوم عاشوراء، العاشر من المحرم سنة 61 هـ.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الحسين",
          "عاشوراء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل مقتل الحسين وتاريخ شهادته",
        "external_id": "HUS-025",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر الإمام الحسين (ع) عند استشهاده؟",
        "options": [
          "نحو 57 سنة",
          "نحو 47 سنة",
          "نحو 67 سنة",
          "نحو 37 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ولد سنة 4 هـ واستشهد سنة 61 هـ، وتذكر المصادر أن عمره كان نحو سبع وخمسين سنة.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد",
        "tags": [
          "الحسين",
          "العمر"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، باب عمر الحسين ومدة إمامته",
        "external_id": "HUS-026",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تولى دفن الإمام الحسين (ع) بحسب الرواية الإمامية؟",
        "options": [
          "الإمام زين العابدين (ع)",
          "محمد بن الحنفية",
          "عمر بن سعد",
          "الحر بن يزيد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 25,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنص الرواية الإمامية على أن الإمام زين العابدين (ع) تولى دفن أبيه الحسين (ع).",
        "difficulty": "medium",
        "subcategory": "ما بعد كربلاء",
        "tags": [
          "الحسين",
          "الدفن"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب دفن الحسين وأصحابه",
        "external_id": "HUS-027",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-06",
    "user_id": "system",
    "title": "سيرة السيدة زينب (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "zaynab-001",
        "question_text": "إلى أي بيت تنتسب السيدة زينب (ع) من جهة والديها؟",
        "options": [
          "بيت الإمام علي وفاطمة (ع)",
          "بيت جعفر وأسماء بنت عميس",
          "بيت العباس وأم الفضل",
          "بيت عقيل وفاطمة بنت عتبة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "زينب الكبرى هي ابنة الإمام علي والسيدة فاطمة الزهراء (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "السيدة زينب",
          "النسب",
          "أهل البيت"
        ],
        "source": "بحار الأنوار، ج42، أبواب أحوال أولاد أمير المؤمنين (ع)",
        "external_id": "zaynab-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-002",
        "question_text": "من هما أخوا السيدة زينب (ع) الشقيقان؟",
        "options": [
          "الحسن والحسين (ع)",
          "محمد بن الحنفية والعباس",
          "جعفر وعقيل",
          "القاسم وعبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "زينب والحسن والحسين من أولاد الإمام علي وفاطمة الزهراء (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "السيدة زينب",
          "الحسن",
          "الحسين"
        ],
        "source": "الإرشاد، ج1، باب ذكر أولاد أمير المؤمنين (ع)",
        "external_id": "zaynab-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-003",
        "question_text": "بمن تزوجت السيدة زينب (ع)؟",
        "options": [
          "عبد الله بن جعفر",
          "عبد الله بن عباس",
          "محمد بن الحنفية",
          "مسلم بن عقيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تزوجت زينب الكبرى ابن عمها عبد الله بن جعفر بن أبي طالب.",
        "difficulty": "easy",
        "subcategory": "الأسرة",
        "tags": [
          "السيدة زينب",
          "الزواج",
          "عبد الله بن جعفر"
        ],
        "source": "بحار الأنوار، ج42، أبواب أحوال أولاد أمير المؤمنين (ع)",
        "external_id": "zaynab-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-004",
        "question_text": "ما صلة زوج السيدة زينب (ع) بجعفر الطيار؟",
        "options": [
          "ابنه",
          "أخوه",
          "حفيده",
          "ابن أخيه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عبد الله زوج زينب هو ابن جعفر بن أبي طالب المعروف بالطيار.",
        "difficulty": "easy",
        "subcategory": "الأسرة",
        "tags": [
          "عبد الله بن جعفر",
          "جعفر الطيار"
        ],
        "source": "الإرشاد، ج1، باب ذكر أولاد أمير المؤمنين (ع) وأنسابهم",
        "external_id": "zaynab-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-005",
        "question_text": "أي إمام كان ابن أخي زينب (ع) ورافق ركب كربلاء؟",
        "options": [
          "علي بن الحسين (ع)",
          "محمد الباقر (ع)",
          "جعفر الصادق (ع)",
          "موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإمام السجاد ابن الإمام الحسين، وكان في ركب كربلاء ثم مسير السبايا.",
        "difficulty": "easy",
        "subcategory": "الأسرة",
        "tags": [
          "السيدة زينب",
          "الإمام السجاد",
          "كربلاء"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام علي بن الحسين (ع)",
        "external_id": "zaynab-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-006",
        "question_text": "مع أي إمام خرجت زينب (ع) في الرحلة التي انتهت بكربلاء؟",
        "options": [
          "الإمام الحسين (ع)",
          "الإمام الحسن (ع)",
          "الإمام السجاد (ع)",
          "الإمام الباقر (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حضرت زينب مع أخيها الإمام الحسين في الركب حتى كربلاء.",
        "difficulty": "easy",
        "subcategory": "كربلاء",
        "tags": [
          "السيدة زينب",
          "الإمام الحسين",
          "كربلاء"
        ],
        "source": "اللهوف، المسلك الثاني في وصف حال القتال والقتل",
        "external_id": "zaynab-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-007",
        "question_text": "من أخبر زينب (ع) ليلة عاشوراء بقرب الأجل؟",
        "options": [
          "الإمام الحسين (ع)",
          "الإمام السجاد (ع)",
          "أبو الفضل العباس (ع)",
          "حبيب بن مظاهر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشد الحسين أبياتًا في تقلّب الدهر، فعلمت زينب بدنو المصاب.",
        "difficulty": "medium",
        "subcategory": "كربلاء",
        "tags": [
          "السيدة زينب",
          "ليلة عاشوراء"
        ],
        "source": "اللهوف، المسلك الثاني، أحداث ليلة عاشوراء",
        "external_id": "zaynab-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-008",
        "question_text": "بماذا وجّه الحسين (ع) أخته زينب ليلة عاشوراء؟",
        "options": [
          "الصبر والتقوى",
          "مغادرة المخيم",
          "طلب الأمان",
          "الرجوع إلى المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وعظها الحسين بالصبر والتقوى والتعزي بعزاء الله.",
        "difficulty": "medium",
        "subcategory": "كربلاء",
        "tags": [
          "السيدة زينب",
          "الصبر",
          "عاشوراء"
        ],
        "source": "اللهوف، المسلك الثاني، أحداث ليلة عاشوراء",
        "external_id": "zaynab-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-009",
        "question_text": "من كان حاضرًا مريضًا في حديث الحسين وزينب ليلة عاشوراء؟",
        "options": [
          "الإمام السجاد (ع)",
          "عبد الله بن جعفر",
          "محمد بن الحنفية",
          "مسلم بن عقيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقل الإمام السجاد الواقعة وذكر أنه كان مريضًا.",
        "difficulty": "medium",
        "subcategory": "كربلاء",
        "tags": [
          "السيدة زينب",
          "الإمام السجاد",
          "المرض"
        ],
        "source": "اللهوف، المسلك الثاني، أحداث ليلة عاشوراء",
        "external_id": "zaynab-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-010",
        "question_text": "ما الدور الذي ذكره السجاد (ع) لعمته زينب ليلة عاشوراء؟",
        "options": [
          "كانت تمرّضه",
          "كانت تفاوض الجيش",
          "كانت تحمل الراية",
          "كانت تكتب للكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإمام السجاد أن عمته زينب كانت تمرّضه بسبب مرضه.",
        "difficulty": "medium",
        "subcategory": "كربلاء",
        "tags": [
          "السيدة زينب",
          "الرعاية",
          "الإمام السجاد"
        ],
        "source": "اللهوف، المسلك الثاني، أحداث ليلة عاشوراء",
        "external_id": "zaynab-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-011",
        "question_text": "من تولّى دورًا بارزًا في رعاية العيال بعد مقتل الحسين (ع)؟",
        "options": [
          "السيدة زينب (ع)",
          "أم البنين",
          "أسماء بنت عميس",
          "أم سلمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "برزت زينب في رعاية النساء والأطفال وحماية الركب بعد الطف.",
        "difficulty": "easy",
        "subcategory": "ما بعد الطف",
        "tags": [
          "السيدة زينب",
          "العيال",
          "الرعاية"
        ],
        "source": "اللهوف، المسلك الثالث فيما جرى بعد قتل الحسين (ع)",
        "external_id": "zaynab-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-012",
        "question_text": "كيف حمت زينب (ع) الإمام السجاد حين هدده ابن زياد؟",
        "options": [
          "اعتنقته وطلبت أن تُقتل معه",
          "طلبت إعادته للمدينة",
          "لاذت بالصمت بعيدًا",
          "طلبت إخراجه سرًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعلقت به وقالت إنها إن قُتل تُقتل معه، فكف ابن زياد.",
        "difficulty": "medium",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "الإمام السجاد",
          "ابن زياد"
        ],
        "source": "اللهوف، المسلك الثالث، مجلس ابن زياد",
        "external_id": "zaynab-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-013",
        "question_text": "أين وبّخت زينب (ع) الناس بعد واقعة الطف؟",
        "options": [
          "الكوفة",
          "مكة",
          "البصرة",
          "المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أورد الاحتجاج خطبتها في أهل الكوفة عند مرور السبايا.",
        "difficulty": "easy",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "الخطبة",
          "الكوفة"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على أهل الكوفة",
        "external_id": "zaynab-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-014",
        "question_text": "بأي صفة خاطبت زينب (ع) أهل الكوفة في خطبتها؟",
        "options": [
          "أهل الختل والغدر",
          "أهل الوفاء والنصرة",
          "حماة العهد",
          "أنصار الحق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصفتهم بالختل والغدر ونقض العهد بسبب خذلان الحسين.",
        "difficulty": "medium",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "أهل الكوفة",
          "الغدر"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على أهل الكوفة",
        "external_id": "zaynab-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-015",
        "question_text": "بماذا شبّهت زينب (ع) نقض أهل الكوفة لعهدهم؟",
        "options": [
          "ناقضة غزلها بعد قوة",
          "أصحاب الكهف",
          "أصحاب السفينة",
          "أصحاب الجنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استشهدت بمضمون آية النحل في نقض الغزل بعد توكيده.",
        "difficulty": "hard",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "القرآن",
          "نقض العهد"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على أهل الكوفة؛ النحل: 92",
        "external_id": "zaynab-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-016",
        "question_text": "كيف استجاب أهل الكوفة لخطبة زينب (ع)؟",
        "options": [
          "ردّوا أيديهم لأفواههم وبكوا",
          "غادروا بلا تأثر",
          "احتفلوا بالنصر",
          "قاطعوا الخطبة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يصف الاحتجاج بكاء الجمع بعد أن كشفت الخطبة فداحة فعلهم.",
        "difficulty": "medium",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "الخطبة",
          "البكاء"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على أهل الكوفة",
        "external_id": "zaynab-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-017",
        "question_text": "بأي منطق ردّت زينب (ع) على شماتة ابن زياد؟",
        "options": [
          "كرامة الشهداء والابتلاء",
          "منع النسب للمصائب",
          "براءة أهل الكوفة",
          "إنكار الرحلة للعراق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أكدت منزلة الشهداء ورفضت اعتبار المصاب نصرًا أخلاقيًا للقاتل.",
        "difficulty": "hard",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "الشهادة",
          "ابن زياد"
        ],
        "source": "اللهوف، المسلك الثالث، مجلس عبيد الله بن زياد",
        "external_id": "zaynab-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-018",
        "question_text": "بأي عبارة لخّصت زينب (ع) رؤيتها للمصاب أمام ابن زياد؟",
        "options": [
          "ما رأيت إلا جميلًا",
          "إن مع العسر يسرًا",
          "حسبنا الله",
          "الصبر مفتاح الفرج"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قالت: ما رأيت إلا جميلًا، وبيّنت أن الشهداء برزوا إلى مضاجعهم.",
        "difficulty": "easy",
        "subcategory": "الكوفة",
        "tags": [
          "السيدة زينب",
          "ما رأيت إلا جميلا"
        ],
        "source": "اللهوف، المسلك الثالث، مجلس عبيد الله بن زياد",
        "external_id": "zaynab-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-019",
        "question_text": "أين واجهت زينب (ع) يزيد بخطبتها المشهورة؟",
        "options": [
          "في مجلسه بالشام",
          "في مسجد الكوفة",
          "في المدينة",
          "في موسم الحج"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ألقت خطابها في مجلس يزيد بعد إدخال أهل البيت إلى الشام.",
        "difficulty": "easy",
        "subcategory": "الشام",
        "tags": [
          "السيدة زينب",
          "يزيد",
          "الشام"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على يزيد بالشام",
        "external_id": "zaynab-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-020",
        "question_text": "بأي آية ردّت زينب (ع) على اغترار يزيد بالإمهال؟",
        "options": [
          "ولا يحسبن الذين كفروا أنما نملي لهم",
          "إن مع العسر يسرًا",
          "لا إكراه في الدين",
          "والعصر إن الإنسان لفي خسر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استشهدت بآل عمران 178 لتبيّن أن الإمهال قد يكون زيادة في الإثم.",
        "difficulty": "hard",
        "subcategory": "الشام",
        "tags": [
          "السيدة زينب",
          "القرآن",
          "يزيد"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على يزيد؛ آل عمران: 178",
        "external_id": "zaynab-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-021",
        "question_text": "ماذا تحدّت زينب (ع) يزيد أن يفعل بذكر أهل البيت؟",
        "options": [
          "أن يمحو ذكرهم ولن يقدر",
          "أن ينقله لبلد آخر",
          "أن يحصره في المدينة",
          "أن يكتبه في السجلات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قالت له: فوالله لا تمحو ذكرنا، مثبتة بقاء الرسالة رغم القمع.",
        "difficulty": "medium",
        "subcategory": "الشام",
        "tags": [
          "السيدة زينب",
          "أهل البيت",
          "يزيد"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على يزيد بالشام",
        "external_id": "zaynab-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-022",
        "question_text": "ماذا أنكرت زينب (ع) على يزيد في شأن النساء؟",
        "options": [
          "ستر حرائره وسوق بنات النبي سبايا",
          "منع نساء الشام من السفر",
          "تأخير زواج نساء بني أمية",
          "تخصيص عطايا لنساء المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنكرت صونه نساءه مع كشفه وسوقه بنات رسول الله من بلد إلى بلد.",
        "difficulty": "medium",
        "subcategory": "الشام",
        "tags": [
          "السيدة زينب",
          "السبايا",
          "يزيد"
        ],
        "source": "الاحتجاج، ج2، احتجاج زينب (ع) على يزيد بالشام",
        "external_id": "zaynab-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-023",
        "question_text": "ما أبرز هدف لخطاب زينب (ع) في الكوفة والشام؟",
        "options": [
          "كشف الجريمة والدفاع عن الرسالة",
          "طلب منصب إداري",
          "التفاوض التجاري",
          "اعتزال الشأن العام"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "واجهت خطاب السلطة وذكّرت بمكانة أهل البيت ومسؤولية المعتدين والخاذلين.",
        "difficulty": "medium",
        "subcategory": "المواقف والفضائل",
        "tags": [
          "السيدة زينب",
          "الخطابة",
          "الرسالة"
        ],
        "source": "الاحتجاج، ج2، احتجاجا زينب (ع) في الكوفة والشام",
        "external_id": "zaynab-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-024",
        "question_text": "إلى أي مدينة طلب أهل البيت التوجه بعد خروجهم من الشام؟",
        "options": [
          "المدينة المنورة",
          "الكوفة",
          "البصرة",
          "مكة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اختار أهل البيت العودة إلى المدينة، موطن جدهم رسول الله (ص).",
        "difficulty": "easy",
        "subcategory": "العودة",
        "tags": [
          "السيدة زينب",
          "المدينة",
          "العودة"
        ],
        "source": "اللهوف، المسلك الثالث، خروج أهل البيت من الشام",
        "external_id": "zaynab-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "zaynab-025",
        "question_text": "ماذا اختار نساء أهل البيت بعد عرض الإقامة أو الرحيل؟",
        "options": [
          "الرجوع إلى المدينة",
          "الإقامة في دمشق",
          "التوجه إلى مصر",
          "الرجوع إلى الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقل اللهوف اختيارهن العودة إلى المدينة بعد ما جرى في الشام.",
        "difficulty": "easy",
        "subcategory": "العودة",
        "tags": [
          "السيدة زينب",
          "نساء أهل البيت",
          "المدينة"
        ],
        "source": "اللهوف، المسلك الثالث، خروج أهل البيت من الشام",
        "external_id": "zaynab-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-07",
    "user_id": "system",
    "title": "سيرة أبي الفضل العباس (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هو والد أبي الفضل العباس (ع)؟",
        "options": [
          "الإمام علي (ع)",
          "الإمام الحسن (ع)",
          "عقيل بن أبي طالب",
          "جعفر بن أبي طالب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أبو الفضل العباس هو ابن أمير المؤمنين الإمام علي بن أبي طالب (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "العباس",
          "النسب"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب العباس بن أمير المؤمنين، ص39",
        "external_id": "ABB-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من هي والدة أبي الفضل العباس (ع)؟",
        "options": [
          "فاطمة الكلابية أم البنين",
          "فاطمة الزهراء (ع)",
          "أسماء بنت عميس",
          "ليلى بنت مسعود"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "والدته فاطمة بنت حزام الكلابية، المشهورة بكنية أم البنين.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "العباس",
          "أم البنين"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب العباس بن أمير المؤمنين، ص39",
        "external_id": "ABB-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما صلة العباس (ع) بالإمام الحسين (ع)؟",
        "options": [
          "أخوه لأبيه",
          "ابن أخيه",
          "ابن عمه",
          "خاله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العباس والحسين ابنا الإمام علي (ع)، وأمهما مختلفة، فهو أخوه لأبيه.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "العباس",
          "الحسين",
          "النسب"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب العباس بن أمير المؤمنين، ص39",
        "external_id": "ABB-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مجموعة تضم إخوة العباس (ع) من أمه الذين حضروا كربلاء؟",
        "options": [
          "عبد الله وجعفر وعثمان",
          "محمد وعون وعبد الله",
          "علي والقاسم وأبو بكر",
          "مسلم وجعفر وعقيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان عبد الله وجعفر وعثمان بنو علي إخوة العباس من أم البنين، وشهدوا كربلاء.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "العباس",
          "الإخوة"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب مقتل إخوة العباس، ص37-39",
        "external_id": "ABB-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر العباس (ع) عند استشهاده بحسب الخبر المنقول في البحار؟",
        "options": [
          "34 سنة",
          "25 سنة",
          "40 سنة",
          "48 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينقل المجلسي أن العباس بن علي قُتل وله أربع وثلاثون سنة.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "العباس",
          "العمر"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب العباس بن أمير المؤمنين، ص39",
        "external_id": "ABB-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المهمة العسكرية الأبرز للعباس (ع) في معسكر الحسين؟",
        "options": [
          "حمل اللواء",
          "كتابة الرسائل",
          "قيادة ميمنة الجيش",
          "إدارة المفاوضات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جعل الإمام الحسين (ع) لواءه مع أخيه العباس يوم عاشوراء.",
        "difficulty": "easy",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "اللواء"
        ],
        "source": "نفس المهموم، الشيخ عباس القمي، وقائع يوم عاشوراء، فصل ترتيب أصحاب الحسين",
        "external_id": "ABB-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى أين أرسل الحسين (ع) العباس مع جماعة قبل عاشوراء؟",
        "options": [
          "إلى الفرات لجلب الماء",
          "إلى الكوفة لطلب الأنصار",
          "إلى مكة لإبلاغ بني هاشم",
          "إلى المدينة لإحضار السلاح"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بعث الحسين أخاه العباس مع رجال نحو الفرات ليأتوا المخيم بالماء.",
        "difficulty": "easy",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "الماء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل ورود كتاب ابن زياد بمنع الماء",
        "external_id": "ABB-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم فارسًا رافق العباس (ع) في بعثة جلب الماء المذكورة في الإرشاد؟",
        "options": [
          "ثلاثون فارسًا",
          "عشرة فرسان",
          "خمسون فارسًا",
          "سبعون فارسًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر الإرشاد أن الحسين بعث العباس في ثلاثين فارسًا ومعهم عشرون راجلًا.",
        "difficulty": "hard",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "الماء",
          "الفرات"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل منع الماء عن الحسين وأصحابه",
        "external_id": "ABB-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم راجلًا كان مع فرسان العباس (ع) في بعثة الماء؟",
        "options": [
          "عشرون راجلًا",
          "أربعون راجلًا",
          "خمسة رجال",
          "ستون راجلًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رافق الفرسانَ العشرين راجلًا، فتمكنوا من ملء القرب والعودة بها.",
        "difficulty": "hard",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "الماء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل منع الماء عن الحسين وأصحابه",
        "external_id": "ABB-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كلّف بحماية جماعة العباس (ع) أثناء ملء القرب؟",
        "options": [
          "نافع بن هلال",
          "حبيب بن مظاهر",
          "زهير بن القين",
          "الحر الرياحي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقدم نافع بن هلال نحو الفرات، وحمى الرجال حتى ملؤوا القرب وعادوا.",
        "difficulty": "hard",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "نافع بن هلال",
          "الماء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، فصل منع الماء عن الحسين وأصحابه",
        "external_id": "ABB-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "متى جاء شمر يعرض الأمان على العباس وإخوته؟",
        "options": [
          "عشية التاسع من المحرم",
          "صباح الثاني من المحرم",
          "ليلة السابع من المحرم",
          "بعد انتهاء القتال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جاء شمر عشية الخميس لتسع مضين من المحرم، قبيل زحف الجيش على المخيم.",
        "difficulty": "medium",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "تاسوعاء",
          "الأمان"
        ],
        "source": "إعلام الورى، الطبرسي، باب مقتل الحسين، خبر عشية التاسع من المحرم",
        "external_id": "ABB-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف واجه العباس وإخوته عرض الأمان من شمر؟",
        "options": [
          "رفضوه ولعنوا أمانه",
          "قبلوه ثم عادوا",
          "طلبوا مهلة للتفكير",
          "اشترطوا خروج العيال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رفضوا العرض وقالوا لشمر إن أمانه لا قيمة له والحسين ابن رسول الله لا أمان له.",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "العباس",
          "الوفاء",
          "الأمان"
        ],
        "source": "إعلام الورى، الطبرسي، باب مقتل الحسين، خبر أمان شمر لبني أم البنين",
        "external_id": "ABB-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا أمر الحسين (ع) العباس حين اقترب جيش عمر بن سعد مساء تاسوعاء؟",
        "options": [
          "استقبال القوم وسؤالهم عما جاء بهم",
          "بدء القتال فورًا",
          "العودة إلى المدينة",
          "إحراق الخيام"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "طلب الحسين من العباس أن يركب ويلقى القوم ويسألهم عن سبب زحفهم.",
        "difficulty": "medium",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "تاسوعاء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، أحداث عشية تاسوعاء",
        "external_id": "ABB-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا عاد العباس (ع) إلى الحسين بعد سؤال الجيش عن سبب زحفه؟",
        "options": [
          "أنهم يريدون النزول على حكم ابن زياد أو القتال",
          "أنهم قرروا الانسحاب",
          "أنهم طلبوا الماء",
          "أنهم بايعوا الحسين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أبلغه أن القوم خُيّروا بين إنزال الحسين على حكم ابن زياد وبين المناجزة.",
        "difficulty": "hard",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "المفاوضة",
          "تاسوعاء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، أحداث عشية تاسوعاء",
        "external_id": "ABB-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الطلب الذي بلغه العباس (ع) إلى القوم ليلة عاشوراء؟",
        "options": [
          "تأخير القتال إلى الغد",
          "فتح طريق إلى الكوفة",
          "تسليم السلاح",
          "إرسال وفد إلى يزيد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عاد العباس فطلب من القوم إمهال الحسين وأصحابه تلك الليلة للصلاة والدعاء.",
        "difficulty": "easy",
        "subcategory": "كربلاء والمواقف",
        "tags": [
          "العباس",
          "ليلة عاشوراء"
        ],
        "source": "الإرشاد، الشيخ المفيد، ج2، أحداث ليلة عاشوراء",
        "external_id": "ABB-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي أخ للعباس (ع) طلب منه أن يتقدم قبله لأنه لا ولد له؟",
        "options": [
          "عبد الله بن علي",
          "عثمان بن علي",
          "جعفر بن علي",
          "محمد بن علي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "طلب العباس من أخيه لأبيه وأمه عبد الله أن يتقدم، وذكر أنه لا ولد له.",
        "difficulty": "hard",
        "subcategory": "عاشوراء والاستشهاد",
        "tags": [
          "العباس",
          "عبد الله بن علي"
        ],
        "source": "بحار الأنوار، المجلسي، ج45، باب مقتل إخوة العباس، ص38",
        "external_id": "ABB-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عضوين فقدهما العباس (ع) وهو يدافع عن اللواء والقربة؟",
        "options": [
          "يداه",
          "قدماه",
          "عيناه",
          "كتفاه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر رواية الإمام السجاد أن العباس آثر أخاه حتى قُطعت يداه.",
        "difficulty": "easy",
        "subcategory": "عاشوراء والاستشهاد",
        "tags": [
          "العباس",
          "الاستشهاد"
        ],
        "source": "أمالي الصدوق، المجلس السبعون، حديث الإمام زين العابدين في العباس",
        "external_id": "ABB-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا عوّض الله العباس (ع) عن يديه وفق حديث الإمام السجاد؟",
        "options": [
          "جناحين يطير بهما في الجنة",
          "قصرين في المدينة",
          "رايتين يوم القيامة",
          "عينين من الجنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال الإمام السجاد إن الله أبدله بيديه جناحين يطير بهما مع الملائكة في الجنة.",
        "difficulty": "medium",
        "subcategory": "الفضائل",
        "tags": [
          "العباس",
          "الإمام السجاد",
          "الجنة"
        ],
        "source": "أمالي الصدوق، المجلس السبعون، حديث الإمام زين العابدين في العباس",
        "external_id": "ABB-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بمن شبّه حديث الإمام السجاد تعويض العباس (ع) بجناحين؟",
        "options": [
          "جعفر بن أبي طالب",
          "حمزة بن عبد المطلب",
          "عقيل بن أبي طالب",
          "مسلم بن عقيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شبّه الإمام السجاد ذلك بما جعله الله لجعفر بن أبي طالب من جناحين في الجنة.",
        "difficulty": "medium",
        "subcategory": "الفضائل",
        "tags": [
          "العباس",
          "جعفر الطيار"
        ],
        "source": "أمالي الصدوق، المجلس السبعون، حديث الإمام زين العابدين في العباس",
        "external_id": "ABB-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف لخّص به الإمام السجاد (ع) موقف عمه العباس؟",
        "options": [
          "آثر وأبلى وفدى أخاه بنفسه",
          "عاد إلى المدينة بعد المعركة",
          "تولى كتابة رسائل الكوفة",
          "قاد ركب السبايا إلى الشام"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دعا له الإمام السجاد وذكر إيثاره وبلاءه وفداءه أخاه الحسين بنفسه.",
        "difficulty": "easy",
        "subcategory": "الفضائل",
        "tags": [
          "العباس",
          "الإيثار",
          "الوفاء"
        ],
        "source": "أمالي الصدوق، المجلس السبعون، حديث الإمام زين العابدين في العباس",
        "external_id": "ABB-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-08",
    "user_id": "system",
    "title": "سيرة الإمام علي زين العابدين (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "sajjad-001",
        "question_text": "من هو والد الإمام علي زين العابدين (ع)؟",
        "options": [
          "الإمام الحسين (ع)",
          "الإمام الحسن (ع)",
          "الإمام علي (ع)",
          "الإمام محمد الباقر (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإمام السجاد هو علي بن الحسين بن علي بن أبي طالب (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام السجاد",
          "النسب"
        ],
        "source": "الإرشاد، ج2، باب تاريخ الإمام علي بن الحسين (ع)، ص136",
        "external_id": "sajjad-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-002",
        "question_text": "أين وُلد الإمام علي بن الحسين (ع) بحسب الشيخ المفيد؟",
        "options": [
          "المدينة",
          "مكة",
          "الكوفة",
          "دمشق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الشيخ المفيد في ترجمته على أن مولده كان بالمدينة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام السجاد",
          "المدينة"
        ],
        "source": "الإرشاد، ج2، باب تاريخ الإمام علي بن الحسين (ع)، ص137",
        "external_id": "sajjad-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-003",
        "question_text": "في أي سنة وُلد الإمام السجاد (ع) وفق اختيار الشيخ المفيد؟",
        "options": [
          "38 هـ",
          "35 هـ",
          "40 هـ",
          "44 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اختار المفيد أن مولده كان سنة ثمان وثلاثين للهجرة، مع وجود أقوال أخرى.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام السجاد",
          "المولد"
        ],
        "source": "الإرشاد، ج2، باب تاريخ الإمام علي بن الحسين (ع)، ص137",
        "external_id": "sajjad-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-004",
        "question_text": "ما الكنية التي يذكرها الشيخ المفيد للإمام علي بن الحسين (ع)؟",
        "options": [
          "أبو محمد",
          "أبو عبد الله",
          "أبو جعفر",
          "أبو الحسن الثالث"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر المفيد أن كنيته أبو محمد، ويذكر له أيضًا أبا الحسن.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام السجاد",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، باب تاريخ الإمام علي بن الحسين (ع)، ص137",
        "external_id": "sajjad-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-005",
        "question_text": "ما الذي حال دون قتل الإمام السجاد (ع) يوم عاشوراء؟",
        "options": [
          "كان مريضًا لا يقدر على القتال",
          "كان خارج كربلاء",
          "كان رسولًا إلى الكوفة",
          "كان في المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان مريضًا على فراشه، فبقي بعد استشهاد أبيه الحسين (ع).",
        "difficulty": "easy",
        "subcategory": "كربلاء وما بعدها",
        "tags": [
          "الإمام السجاد",
          "عاشوراء"
        ],
        "source": "الإرشاد، ج2، أحداث عاشوراء، ص112-113",
        "external_id": "sajjad-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-006",
        "question_text": "من دافع عن الإمام السجاد (ع) حين أمر ابن زياد بقتله؟",
        "options": [
          "السيدة زينب (ع)",
          "أم كلثوم",
          "الرباب",
          "فاطمة بنت الحسين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعلقت زينب بابن أخيها وقالت إن قُتل تُقتل معه، فكف ابن زياد عنه.",
        "difficulty": "easy",
        "subcategory": "كربلاء وما بعدها",
        "tags": [
          "الإمام السجاد",
          "السيدة زينب",
          "الكوفة"
        ],
        "source": "الإرشاد، ج2، دخول السبايا على ابن زياد، ص116",
        "external_id": "sajjad-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-007",
        "question_text": "إلى أي مدينة أُرسل الإمام السجاد (ع) بعد مجلس ابن زياد؟",
        "options": [
          "دمشق",
          "المدينة",
          "مكة",
          "البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أرسل ابن زياد علي بن الحسين والنساء إلى يزيد في الشام.",
        "difficulty": "easy",
        "subcategory": "كربلاء وما بعدها",
        "tags": [
          "الإمام السجاد",
          "الشام"
        ],
        "source": "الإرشاد، ج2، مسير السبايا إلى الشام، ص119",
        "external_id": "sajjad-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-008",
        "question_text": "ماذا طلب الإمام السجاد (ع) عند تهيئة عودة أهل البيت؟",
        "options": [
          "أمينًا يصحبهم إلى المدينة",
          "الإقامة الدائمة في دمشق",
          "إرسالهم إلى الكوفة",
          "تفريق الركب بين البلدان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اختار الرجوع إلى المدينة، وطلب رجلًا أمينًا يصحبهم في الطريق.",
        "difficulty": "medium",
        "subcategory": "كربلاء وما بعدها",
        "tags": [
          "الإمام السجاد",
          "العودة للمدينة"
        ],
        "source": "الإرشاد، ج2، خروج أهل البيت من الشام، ص121-122",
        "external_id": "sajjad-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-009",
        "question_text": "من بشّر أهل المدينة بوصول ركب الإمام ونعا إليهم الحسين؟",
        "options": [
          "بشير بن حذلم",
          "جابر بن عبد الله",
          "أبو حمزة الثمالي",
          "سعيد بن المسيب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمره الإمام أن يدخل المدينة فينعي الحسين ويخبر الناس بوصول الركب.",
        "difficulty": "medium",
        "subcategory": "كربلاء وما بعدها",
        "tags": [
          "الإمام السجاد",
          "المدينة",
          "بشير بن حذلم"
        ],
        "source": "بحار الأنوار، ج45، باب ورود حرم الحسين المدينة، ص147-148",
        "external_id": "sajjad-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-010",
        "question_text": "إلى من انتقلت الإمامة بعد استشهاد الإمام الحسين (ع)؟",
        "options": [
          "علي بن الحسين (ع)",
          "محمد بن الحنفية",
          "زيد بن علي",
          "عبد الله بن جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دلت النصوص التي أوردها المفيد على إمامة علي بن الحسين بعد أبيه.",
        "difficulty": "easy",
        "subcategory": "الإمامة والعلم",
        "tags": [
          "الإمام السجاد",
          "الإمامة"
        ],
        "source": "الإرشاد، ج2، النص على إمامة علي بن الحسين، ص136-140",
        "external_id": "sajjad-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-011",
        "question_text": "ما الذي أودعه الحسين (ع) عند أم سلمة علامةً لطالب الإمامة؟",
        "options": [
          "ودائع الإمامة",
          "راية المختار",
          "خاتم ابن عباس",
          "كتاب والي المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أودع الحسين أم سلمة ما قبضه علي بن الحسين من بعده، وجعل طلبه علامة.",
        "difficulty": "hard",
        "subcategory": "الإمامة والعلم",
        "tags": [
          "الإمام السجاد",
          "أم سلمة",
          "الإمامة"
        ],
        "source": "الإرشاد، ج2، النص على إمامة علي بن الحسين، ص139",
        "external_id": "sajjad-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-012",
        "question_text": "ماذا كان يجني جليس الإمام السجاد (ع) بحسب رواية ابن أخته؟",
        "options": [
          "خشية أو علمًا مستفادًا",
          "علم الأنساب فقط",
          "مالًا في كل مجلس",
          "تكليفًا بكتابة الرسائل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال الراوي إنه كان يقوم بخير: خشية تحدث في قلبه أو علم يستفيده.",
        "difficulty": "medium",
        "subcategory": "الإمامة والعلم",
        "tags": [
          "الإمام السجاد",
          "العلم",
          "الخشية"
        ],
        "source": "الإرشاد، ج2، فضائل الإمام علي بن الحسين، ص140",
        "external_id": "sajjad-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-013",
        "question_text": "أي معنى أرشد إليه الإمام بقوله: «أحبونا حب الإسلام»؟",
        "options": [
          "المحبة بلا غلو",
          "ترك الفرائض للمحبة",
          "كتمان الانتساب لأهل البيت",
          "حصر المحبة في القرابة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نهى عن تجاوز المحبة التي يقتضيها الإسلام حتى تصير غلوًا وشينًا.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "المحبة",
          "الغلو"
        ],
        "source": "الإرشاد، ج2، فضائل الإمام علي بن الحسين، ص141",
        "external_id": "sajjad-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-014",
        "question_text": "ما الأثر الذي ظهر على مواضع سجود الإمام السجاد (ع)؟",
        "options": [
          "ثفنات كركب البعير",
          "أثر حناء دائم",
          "جرح من سيف",
          "وشم على الجبهة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أحدثت كثرة سجوده ثفنات، ولذلك اشتهر بلقب السجاد.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "السجود",
          "العبادة"
        ],
        "source": "بحار الأنوار، ج46، باب أحواله وعبادته، ص6-7",
        "external_id": "sajjad-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-015",
        "question_text": "كيف كان الإمام السجاد (ع) يعين فقراء المدينة ليلًا؟",
        "options": [
          "يحمل إليهم الطعام سرًا",
          "يرسلهم إلى بيت المال",
          "يعلن أسماءهم في المسجد",
          "يطلب منهم خدمة مزرعته"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان يحمل جراب الخبز على ظهره ليلًا إلى بيوت الفقراء من غير أن يعرفوه.",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "الصدقة",
          "الفقراء"
        ],
        "source": "الإرشاد، ج2، فضائل الإمام علي بن الحسين، ص143-144",
        "external_id": "sajjad-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-016",
        "question_text": "متى عرف فقراء المدينة صاحب عطاياهم السرية؟",
        "options": [
          "بعد وفاة الإمام",
          "يوم عاشوراء",
          "عند الرجوع من الشام",
          "عند ولادة الإمام الباقر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لما فقدوا الصدقات الخفية بعد وفاته عرفوا أنها كانت تأتيهم منه.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "الصدقة السرية"
        ],
        "source": "الإرشاد، ج2، فضائل الإمام علي بن الحسين، ص143-144",
        "external_id": "sajjad-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-017",
        "question_text": "كيف قابل الإمام السجاد (ع) رجلًا شتمه ثم انصرف؟",
        "options": [
          "عرض عليه المعونة والصفح",
          "أمر بحبسه",
          "هجره عامًا",
          "أخذ منه غرامة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خاطبه بلين وسأله عن حاجته فأعانه، فتحول الرجل إلى الثناء عليه.",
        "difficulty": "medium",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "الحلم",
          "العفو"
        ],
        "source": "الإرشاد، ج2، فضائل الإمام علي بن الحسين، ص145",
        "external_id": "sajjad-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-018",
        "question_text": "من أنشد قصيدته المشهورة في الإمام عند البيت الحرام؟",
        "options": [
          "الفرزدق",
          "الكميت",
          "دعبل الخزاعي",
          "السيد الحميري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشد الفرزدق قصيدته في مكانة الإمام حين تجاهله هشام بن عبد الملك.",
        "difficulty": "easy",
        "subcategory": "الفضائل والمواقف",
        "tags": [
          "الإمام السجاد",
          "الفرزدق",
          "مكة"
        ],
        "source": "مناقب آل أبي طالب، ج4، فصل مناقب زين العابدين، ص169-170",
        "external_id": "sajjad-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-019",
        "question_text": "من الابن الذي نص الإمام السجاد (ع) على إمامته من بعده؟",
        "options": [
          "محمد الباقر (ع)",
          "زيد الشهيد",
          "عبد الله الباهر",
          "عمر الأشرف"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتقلت الإمامة بعده إلى ابنه أبي جعفر محمد الباقر (ع).",
        "difficulty": "easy",
        "subcategory": "الإمامة والعلم",
        "tags": [
          "الإمام السجاد",
          "الإمام الباقر",
          "الإمامة"
        ],
        "source": "الإرشاد، ج2، تاريخ الإمام الباقر والنص عليه، ص157-160",
        "external_id": "sajjad-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-020",
        "question_text": "في أي سنة توفي الإمام السجاد (ع) وفق قول الشيخ المفيد؟",
        "options": [
          "95 هـ",
          "92 هـ",
          "99 هـ",
          "101 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر المفيد وفاته بالمدينة سنة خمس وتسعين للهجرة.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد والدفن",
        "tags": [
          "الإمام السجاد",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، تاريخ الإمام علي بن الحسين، ص137",
        "external_id": "sajjad-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-021",
        "question_text": "كم كان عمر الإمام السجاد (ع) عند وفاته بحسب الشيخ المفيد؟",
        "options": [
          "57 سنة",
          "50 سنة",
          "63 سنة",
          "70 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صرح المفيد بأن عمره عند وفاته كان سبعًا وخمسين سنة.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد والدفن",
        "tags": [
          "الإمام السجاد",
          "العمر"
        ],
        "source": "الإرشاد، ج2، تاريخ الإمام علي بن الحسين، ص137",
        "external_id": "sajjad-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "sajjad-022",
        "question_text": "أين دُفن الإمام علي بن الحسين (ع)؟",
        "options": [
          "البقيع",
          "كربلاء",
          "النجف",
          "الكاظمية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دُفن في بقيع المدينة مع عمه الإمام الحسن بن علي (ع).",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والدفن",
        "tags": [
          "الإمام السجاد",
          "البقيع",
          "الدفن"
        ],
        "source": "الإرشاد، ج2، تاريخ الإمام علي بن الحسين، ص137",
        "external_id": "sajjad-022",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-09",
    "user_id": "system",
    "title": "سيرة الإمام محمد الباقر (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "albaqir-001",
        "question_text": "من هو والد الإمام محمد الباقر (ع)؟",
        "options": [
          "الإمام علي زين العابدين (ع)",
          "الإمام الحسن المجتبى (ع)",
          "الإمام جعفر الصادق (ع)",
          "زيد بن علي (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هو محمد بن الإمام علي بن الحسين زين العابدين (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الباقر",
          "النسب"
        ],
        "source": "الإرشاد، ج2، ص157، باب ذكر الإمام الباقر (ع)",
        "external_id": "albaqir-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-002",
        "question_text": "إلى أي سبطي النبي (ص) ينتهي نسب الباقر (ع) من جهة أمه؟",
        "options": [
          "الإمام الحسن (ع)",
          "الإمام الحسين (ع)",
          "كلاهما من جهة الأب",
          "لا ينتهي إلى أحدهما"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمه أم عبد الله بنت الحسن بن الحسن، فينتهي نسبه من جهتها إلى الإمام الحسن (ع).",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الباقر",
          "الأم",
          "النسب"
        ],
        "source": "الإرشاد، ج2، ص157",
        "external_id": "albaqir-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-003",
        "question_text": "ما اسم أم الإمام الباقر (ع) المشهور في المصادر؟",
        "options": [
          "أم عبد الله بنت الحسن",
          "فاطمة بنت أسد",
          "أم فروة بنت القاسم",
          "شهربانو"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص المفيد على أن أمه أم عبد الله بنت الحسن بن الحسن (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الباقر",
          "الأم"
        ],
        "source": "الإرشاد، ج2، ص157",
        "external_id": "albaqir-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-004",
        "question_text": "في أي مدينة كانت ولادة الإمام الباقر (ع)؟",
        "options": [
          "المدينة المنورة",
          "مكة المكرمة",
          "الكوفة",
          "دمشق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان مولده (ع) في المدينة المنورة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الباقر",
          "المولد"
        ],
        "source": "بحار الأنوار، ج46، ص212، باب تاريخ مولده ووفاته",
        "external_id": "albaqir-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-005",
        "question_text": "ما السنة الهجرية المشهورة لولادة الإمام الباقر (ع)؟",
        "options": [
          "57 هـ",
          "50 هـ",
          "61 هـ",
          "70 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يورد الشيخ المفيد مولده سنة سبع وخمسين للهجرة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الباقر",
          "المولد"
        ],
        "source": "الإرشاد، ج2، ص157",
        "external_id": "albaqir-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-006",
        "question_text": "أي واقعة كبرى أدركها الإمام الباقر (ع) في طفولته؟",
        "options": [
          "كربلاء",
          "بدر",
          "صفين",
          "فتح مكة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أدرك واقعة كربلاء سنة 61 هـ وهو صغير.",
        "difficulty": "easy",
        "subcategory": "الطفولة",
        "tags": [
          "الباقر",
          "كربلاء"
        ],
        "source": "بحار الأنوار، ج46، ص212-214، باب تاريخ مولده ووفاته",
        "external_id": "albaqir-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-007",
        "question_text": "بعد أي إمام تولّى الباقر (ع) الإمامة؟",
        "options": [
          "علي زين العابدين (ع)",
          "الحسين (ع)",
          "الحسن (ع)",
          "جعفر الصادق (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى الإمامة بعد أبيه الإمام علي زين العابدين (ع).",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الباقر",
          "الإمامة"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الإشارة والنص على أبي جعفر (ع)",
        "external_id": "albaqir-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-008",
        "question_text": "ماذا سلّم السجاد (ع) إلى الباقر (ع) في خبر الوصية؟",
        "options": [
          "صندوقًا فيه سلاح النبي وكتبه",
          "راية بدر وحدها",
          "خاتم سليمان",
          "مصحفًا بلا كتب أخرى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دفع إليه صندوقًا فيه سلاح رسول الله (ص) وكتبه علامة للوصية.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الباقر",
          "الوصية"
        ],
        "source": "بحار الأنوار، ج46، ص229، باب النصوص على إمامته",
        "external_id": "albaqir-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-009",
        "question_text": "أي صحابي بلّغ الإمام الباقر (ع) سلام رسول الله (ص)؟",
        "options": [
          "جابر بن عبد الله الأنصاري",
          "سلمان الفارسي",
          "أبو ذر الغفاري",
          "عمار بن ياسر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بلّغه جابر بن عبد الله الأنصاري سلام النبي (ص).",
        "difficulty": "easy",
        "subcategory": "المناقب",
        "tags": [
          "الباقر",
          "جابر"
        ],
        "source": "بحار الأنوار، ج46، ص225-228، باب إبلاغ جابر السلام",
        "external_id": "albaqir-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-010",
        "question_text": "ماذا طلب جابر من الباقر (ع) قبل أن يتعرف إليه؟",
        "options": [
          "أن يقبل ثم يدبر",
          "أن يقرأ صحيفة",
          "أن يؤذن للصلاة",
          "أن ينشد شعرًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "طلب منه أن يقبل ثم يدبر، فتأمل شمائله وتعرف إليه.",
        "difficulty": "medium",
        "subcategory": "المناقب",
        "tags": [
          "الباقر",
          "جابر"
        ],
        "source": "بحار الأنوار، ج36، ص360؛ وج46، باب أخبار جابر",
        "external_id": "albaqir-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-011",
        "question_text": "كيف أجاب الباقر (ع) سلام النبي (ص) الذي بلغه جابر؟",
        "options": [
          "رد السلام على النبي وعلى جابر",
          "اكتفى بالصمت",
          "طلب كتمان الخبر",
          "أرسل كتابًا للمدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رد السلام على رسول الله (ص)، وشكر جابرًا على تبليغه.",
        "difficulty": "medium",
        "subcategory": "المناقب",
        "tags": [
          "الباقر",
          "السلام"
        ],
        "source": "علل الشرائع، ج1، باب 168، ص233-234",
        "external_id": "albaqir-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-012",
        "question_text": "لماذا لُقّب الإمام محمد بن علي بـ«الباقر»؟",
        "options": [
          "لأنه بقر العلم وأظهره",
          "لكثرة سفره إلى البصرة",
          "لأنه بنى بستانًا",
          "لأنه أكبر إخوته"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "فسرت الرواية اللقب بتبقّره في العلم، أي شقه وإظهاره والتوسع فيه.",
        "difficulty": "easy",
        "subcategory": "العلم والفضائل",
        "tags": [
          "الباقر",
          "اللقب",
          "العلم"
        ],
        "source": "علل الشرائع، ج1، باب 168، ص233-234",
        "external_id": "albaqir-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-013",
        "question_text": "ما كنية الإمام محمد الباقر (ع) المشهورة؟",
        "options": [
          "أبو جعفر",
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كنيته المشهورة أبو جعفر، ويقال له أبو جعفر الأول.",
        "difficulty": "easy",
        "subcategory": "الأسماء والألقاب",
        "tags": [
          "الباقر",
          "الكنية"
        ],
        "source": "بحار الأنوار، ج46، ص222، باب أسمائه وكنيته وألقابه",
        "external_id": "albaqir-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-014",
        "question_text": "أي أخ للباقر (ع) حمل إليه كتب أهل الكوفة الداعية للخروج؟",
        "options": [
          "زيد بن علي",
          "محمد بن الحنفية",
          "عبد الله بن جعفر",
          "يحيى بن زيد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دخل زيد بن علي على أخيه أبي جعفر ومعه كتب أهل الكوفة.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الباقر",
          "زيد بن علي"
        ],
        "source": "بحار الأنوار، ج46، ص203، نقلًا عن الكافي",
        "external_id": "albaqir-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-015",
        "question_text": "ما المبدأ الذي أكده الباقر (ع) لزيد بشأن أهل البيت؟",
        "options": [
          "الطاعة لواحد والمودة للجميع",
          "الطاعة للجميع معًا",
          "ترك المودة عند الخلاف",
          "المودة لأهل المدينة فقط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال له إن الطاعة لواحد من أهل البيت والمودة للجميع.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الباقر",
          "الطاعة",
          "المودة"
        ],
        "source": "بحار الأنوار، ج46، ص203، نقلًا عن الكافي",
        "external_id": "albaqir-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-016",
        "question_text": "من أبرز أبناء الباقر (ع) الذي نص عليه بالإمامة بعده؟",
        "options": [
          "جعفر الصادق (ع)",
          "موسى الكاظم (ع)",
          "زيد بن علي",
          "إسماعيل بن جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإمام الباقر (ع) على ابنه جعفر الصادق (ع) من بعده.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الباقر",
          "الصادق",
          "الوصية"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب النص على أبي عبد الله (ع)",
        "external_id": "albaqir-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-017",
        "question_text": "كم ولدًا تذكر الرواية التي أوردها المجلسي للباقر (ع)؟",
        "options": [
          "سبعة",
          "خمسة",
          "تسعة",
          "أحد عشر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أورد المجلسي خبرًا ينص على أن أولاده (ع) كانوا سبعة.",
        "difficulty": "medium",
        "subcategory": "الأسرة",
        "tags": [
          "الباقر",
          "الأولاد"
        ],
        "source": "بحار الأنوار، ج46، ص365، باب أحوال أولاده وأزواجه",
        "external_id": "albaqir-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-018",
        "question_text": "متى توفي الإمام الباقر (ع) بحسب قول الشيخ المفيد؟",
        "options": [
          "114 هـ",
          "110 هـ",
          "117 هـ",
          "121 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الشيخ المفيد وفاته سنة أربع عشرة ومائة للهجرة.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد",
        "tags": [
          "الباقر",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، ص158، باب ذكر الإمام الباقر (ع)",
        "external_id": "albaqir-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-019",
        "question_text": "في أي مدينة كانت وفاة الإمام الباقر (ع)؟",
        "options": [
          "المدينة المنورة",
          "الكوفة",
          "دمشق",
          "مكة المكرمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت وفاته (ع) في المدينة المنورة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الباقر",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، ص158",
        "external_id": "albaqir-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "albaqir-020",
        "question_text": "أين دُفن الإمام محمد الباقر (ع)؟",
        "options": [
          "البقيع",
          "النجف",
          "كربلاء",
          "الكاظمية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دفن في البقيع مع أبيه الإمام السجاد وعمه الإمام الحسن (ع).",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الباقر",
          "البقيع"
        ],
        "source": "الإرشاد، ج2، ص158؛ بحار الأنوار، ج46، باب وفاته",
        "external_id": "albaqir-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-10",
    "user_id": "system",
    "title": "سيرة الإمام جعفر الصادق (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "alsadiq-001",
        "question_text": "من هو والد الإمام جعفر الصادق (ع)؟",
        "options": [
          "الإمام محمد الباقر (ع)",
          "الإمام علي زين العابدين (ع)",
          "الإمام موسى الكاظم (ع)",
          "زيد بن علي (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أبوه الإمام محمد الباقر (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الصادق",
          "النسب"
        ],
        "source": "الإرشاد، ج2، ص179",
        "external_id": "alsadiq-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-002",
        "question_text": "ما كنية الإمام جعفر الصادق (ع) الأشهر؟",
        "options": [
          "أبو عبد الله",
          "أبو جعفر",
          "أبو الحسن",
          "أبو محمد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كنيته الأشهر أبو عبد الله.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الصادق",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، ص179-180",
        "external_id": "alsadiq-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-003",
        "question_text": "من هي أم الإمام جعفر الصادق (ع)؟",
        "options": [
          "أم فروة بنت القاسم",
          "أم عبد الله بنت الحسن",
          "حميدة المصفاة",
          "نجمة خاتون"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمه أم فروة بنت القاسم بن محمد.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الصادق",
          "الأم"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-004",
        "question_text": "في أي مدينة ولد الإمام الصادق (ع)؟",
        "options": [
          "المدينة المنورة",
          "مكة المكرمة",
          "الكوفة",
          "دمشق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان مولده (ع) في المدينة المنورة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الصادق",
          "المولد"
        ],
        "source": "بحار الأنوار، ج47، باب 1",
        "external_id": "alsadiq-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-005",
        "question_text": "ما سنة ولادة الإمام الصادق (ع) عند الشيخ المفيد؟",
        "options": [
          "83 هـ",
          "80 هـ",
          "95 هـ",
          "100 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد أن ولادته كانت سنة 83 هـ.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الصادق",
          "المولد"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-006",
        "question_text": "أي إمام سبق الصادق (ع) مباشرة في الإمامة؟",
        "options": [
          "الإمام محمد الباقر (ع)",
          "الإمام زين العابدين (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام الحسن المجتبى (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى الإمامة بعد أبيه الإمام الباقر (ع).",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الصادق",
          "الإمامة"
        ],
        "source": "الكافي، ج1، باب النص على أبي عبد الله (ع)",
        "external_id": "alsadiq-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-007",
        "question_text": "بماذا أوصى الباقر (ع) ابنه جعفرًا عند قرب وفاته؟",
        "options": [
          "أن يحسن إلى أصحابه",
          "أن يغادر المدينة",
          "أن يعتزل تعليم الناس",
          "أن يبيع كتبه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوصاه بأصحابه خيرًا، فوعد بتفقيههم.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الصادق",
          "الوصية"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-008",
        "question_text": "ماذا فعل الباقر (ع) حين سئل عمن يقوم بالأمر بعده؟",
        "options": [
          "وضع يده على جعفر (ع)",
          "أشار إلى زيد بن علي",
          "كتب اسم إسماعيل",
          "امتنع عن الجواب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وضع يده على جعفر وعيّنه قائمًا بالأمر بعده.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الصادق",
          "النص"
        ],
        "source": "الإرشاد، ج2، ص181",
        "external_id": "alsadiq-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-009",
        "question_text": "لماذا أشهد الباقر (ع) جماعة على وصيته إلى جعفر؟",
        "options": [
          "لتكون له حجة ولا يغلب",
          "لتقسيم أموال التجارة",
          "لتعيين والي المدينة",
          "لإعلان رحلة إلى مكة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أراد أن تكون لجعفر حجة وألا يقال إنه لم يوص إليه.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الصادق",
          "الوصية"
        ],
        "source": "الإرشاد، ج2، ص181-182",
        "external_id": "alsadiq-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-010",
        "question_text": "كم سنة دامت إمامة الإمام الصادق (ع)؟",
        "options": [
          "34 سنة",
          "19 سنة",
          "25 سنة",
          "40 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دامت إمامته أربعًا وثلاثين سنة.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الصادق",
          "مدة الإمامة"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-011",
        "question_text": "كم راويًا جمع أصحاب الحديث ممن رووا عن الصادق (ع)؟",
        "options": [
          "أربعة آلاف",
          "ألفان",
          "سبعمائة",
          "عشرة آلاف"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع أصحاب الحديث أسماء أربعة آلاف راوٍ عنه.",
        "difficulty": "medium",
        "subcategory": "العلم",
        "tags": [
          "الصادق",
          "الرواة"
        ],
        "source": "الإرشاد، ج2، ص179",
        "external_id": "alsadiq-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-012",
        "question_text": "كيف انتشر علم الإمام الصادق (ع) في الآفاق؟",
        "options": [
          "حمله الرواة إلى البلدان",
          "بقي محصورًا في أسرته",
          "اقتصر على رسائل سياسية",
          "لم يروه إلا أهل المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حمل الرواة علومه إلى البلدان فانتشر ذكره.",
        "difficulty": "medium",
        "subcategory": "العلم",
        "tags": [
          "الصادق",
          "العلم"
        ],
        "source": "الإرشاد، ج2، ص179",
        "external_id": "alsadiq-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-013",
        "question_text": "إلى من تنتهي سلسلة حديث الإمام الصادق (ع)؟",
        "options": [
          "إلى رسول الله ثم الله",
          "إلى علماء المدينة فقط",
          "إلى كتب اليونان",
          "إلى اجتهاده الشخصي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حديثه عن آبائه عن الرسول، وحديث الرسول قول الله.",
        "difficulty": "medium",
        "subcategory": "العلم",
        "tags": [
          "الصادق",
          "الحديث"
        ],
        "source": "الإرشاد، ج2، ص186",
        "external_id": "alsadiq-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-014",
        "question_text": "من الشاب الذي قدّمه الصادق (ع) لمناظرة الشامي؟",
        "options": [
          "هشام بن الحكم",
          "جابر الجعفي",
          "المفضل بن عمر",
          "أبان بن تغلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قدّم هشام بن الحكم لمناظرة الشامي في الإمامة.",
        "difficulty": "medium",
        "subcategory": "المناظرات",
        "tags": [
          "الصادق",
          "هشام"
        ],
        "source": "الإرشاد، ج2، ص193-195",
        "external_id": "alsadiq-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-015",
        "question_text": "كيف وصف الصادق (ع) نصرة هشام بن الحكم؟",
        "options": [
          "ينصرنا بقلبه ولسانه ويده",
          "يكثر السفر وحده",
          "يجمع المال لأهله",
          "يعتزل الخصومات كلها"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال عنه: ناصرنا بقلبه ولسانه ويده.",
        "difficulty": "medium",
        "subcategory": "المناظرات",
        "tags": [
          "الصادق",
          "هشام"
        ],
        "source": "الإرشاد، ج2، ص194",
        "external_id": "alsadiq-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-016",
        "question_text": "أين كان مجلس مناظرة الشامي مع أصحاب الصادق (ع)؟",
        "options": [
          "قرب حرم مكة",
          "في مسجد الكوفة",
          "في قصر دمشق",
          "في مقبرة البقيع"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان المجلس في خيمة بطرف الحرم قبل الحج.",
        "difficulty": "medium",
        "subcategory": "المناظرات",
        "tags": [
          "الصادق",
          "مكة"
        ],
        "source": "الإرشاد، ج2، ص193-194",
        "external_id": "alsadiq-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-017",
        "question_text": "بماذا استدل الصادق (ع) لأبي شاكر على حدوث العالم؟",
        "options": [
          "ببيضة تنفلق عن طائر",
          "بسفينة في البحر",
          "بنخلة مثمرة",
          "بحركة الشمس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استدل ببيضة محكمة تنفلق عن صورة طائر.",
        "difficulty": "medium",
        "subcategory": "المناظرات",
        "tags": [
          "الصادق",
          "التوحيد"
        ],
        "source": "الإرشاد، ج2، ص201-202",
        "external_id": "alsadiq-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-018",
        "question_text": "ماذا قال الصادق (ع) عن دور الحواس في الاستدلال؟",
        "options": [
          "هي أدلة ويحتاج الاستنباط إلى العقل",
          "تكفي وحدها لكل معرفة",
          "لا قيمة لها مطلقًا",
          "تختص بمعرفة الأحكام"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحواس أدلة، ولا يتم الاستنباط بها من دون العقل.",
        "difficulty": "hard",
        "subcategory": "العلم",
        "tags": [
          "الصادق",
          "العقل"
        ],
        "source": "الإرشاد، ج2، ص202",
        "external_id": "alsadiq-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-019",
        "question_text": "إلى كم أصل لخّص الصادق (ع) ما لا يسع الناس جهله؟",
        "options": [
          "أربعة أصول",
          "ثلاثة أصول",
          "خمسة أصول",
          "سبعة أصول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع ما لا يسع جهله في أربعة أصول.",
        "difficulty": "medium",
        "subcategory": "الحكمة",
        "tags": [
          "الصادق",
          "المعرفة"
        ],
        "source": "الإرشاد، ج2، ص203",
        "external_id": "alsadiq-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-020",
        "question_text": "ما موقف الصادق (ع) من تشبيه الله بالأشياء؟",
        "options": [
          "نفى أن يشبهه شيء",
          "أجازه للتقريب",
          "خصه بالأجرام",
          "توقف فيه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نفى تشبيه الله بشيء أو تشبيه شيء به.",
        "difficulty": "easy",
        "subcategory": "التوحيد",
        "tags": [
          "الصادق",
          "التوحيد"
        ],
        "source": "الإرشاد، ج2، ص204",
        "external_id": "alsadiq-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-021",
        "question_text": "ما الذي عدّه الصادق (ع) غفلةً في موعظته؟",
        "options": [
          "تأخير التوبة",
          "قلة السفر",
          "ترك التجارة",
          "الصمت الطويل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عدّ تأخير التوبة اغترارًا وغفلة.",
        "difficulty": "easy",
        "subcategory": "الحكمة",
        "tags": [
          "الصادق",
          "التوبة"
        ],
        "source": "الإرشاد، ج2، ص204",
        "external_id": "alsadiq-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-022",
        "question_text": "ما الذي يكمل السعادة في حكمة الإمام الصادق (ع)؟",
        "options": [
          "اجتماع النية والقدرة والتوفيق والإصابة",
          "كثرة المال والولد",
          "طول العمر والسفر",
          "العزلة وترك العمل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تكتمل السعادة باجتماع النية والقدرة والتوفيق والإصابة.",
        "difficulty": "hard",
        "subcategory": "الحكمة",
        "tags": [
          "الصادق",
          "السعادة"
        ],
        "source": "الإرشاد، ج2، ص204",
        "external_id": "alsadiq-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-023",
        "question_text": "من الإمام الذي نص عليه الصادق (ع) من بعده؟",
        "options": [
          "الإمام موسى الكاظم (ع)",
          "إسماعيل بن جعفر",
          "عبد الله الأفطح",
          "محمد الديباج"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص على ابنه الإمام موسى الكاظم (ع).",
        "difficulty": "easy",
        "subcategory": "الأسرة",
        "tags": [
          "الصادق",
          "الكاظم",
          "الوصية"
        ],
        "source": "الكافي، ج1، باب النص على أبي الحسن موسى (ع)",
        "external_id": "alsadiq-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-024",
        "question_text": "كم ولدًا يذكر المفيد للإمام الصادق (ع)؟",
        "options": [
          "عشرة",
          "سبعة",
          "اثنا عشر",
          "أربعة عشر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد له عشرة أولاد: سبعة ذكور وثلاث إناث.",
        "difficulty": "medium",
        "subcategory": "الأسرة",
        "tags": [
          "الصادق",
          "الأولاد"
        ],
        "source": "الإرشاد، ج2، ص209",
        "external_id": "alsadiq-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-025",
        "question_text": "في أي شهر توفي الإمام الصادق (ع) بحسب المفيد؟",
        "options": [
          "شوال",
          "محرم",
          "رمضان",
          "ذو الحجة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد أن وفاته كانت في شهر شوال.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الصادق",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-025",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-026",
        "question_text": "ما السنة الهجرية لوفاة الإمام الصادق (ع)؟",
        "options": [
          "148 هـ",
          "114 هـ",
          "183 هـ",
          "203 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 25,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توفي سنة 148 هـ.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الصادق",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-026",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-027",
        "question_text": "كم كان عمر الإمام الصادق (ع) عند وفاته؟",
        "options": [
          "65 سنة",
          "55 سنة",
          "70 سنة",
          "75 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 26,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توفي وله خمس وستون سنة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الصادق",
          "العمر"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-027",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alsadiq-028",
        "question_text": "أين دفن الإمام جعفر الصادق (ع)؟",
        "options": [
          "البقيع",
          "النجف",
          "الكاظمية",
          "كربلاء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 27,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دفن في البقيع مع عدد من آبائه (ع).",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الصادق",
          "البقيع"
        ],
        "source": "الإرشاد، ج2، ص180",
        "external_id": "alsadiq-028",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-11",
    "user_id": "system",
    "title": "سيرة الإمام موسى الكاظم (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "alkazim-001",
        "question_text": "أين كانت ولادة الإمام موسى الكاظم (ع) بحسب الإرشاد؟",
        "options": [
          "الأبواء",
          "المدينة المنورة",
          "مكة المكرمة",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر الشيخ المفيد أن مولده (ع) كان في الأبواء بين مكة والمدينة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الكاظم",
          "المولد"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-002",
        "question_text": "في أي سنة وُلد الإمام الكاظم (ع) وفق رواية الإرشاد؟",
        "options": [
          "128 هـ",
          "120 هـ",
          "132 هـ",
          "148 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإرشاد على أن ولادته في الأبواء كانت سنة 128 هـ.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الكاظم",
          "المولد"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-003",
        "question_text": "من هو والد الإمام موسى الكاظم (ع)؟",
        "options": [
          "الإمام جعفر الصادق (ع)",
          "الإمام محمد الباقر (ع)",
          "الإمام علي الرضا (ع)",
          "إسماعيل بن جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هو موسى بن الإمام جعفر الصادق (ع)، وقد نص أبوه على إمامته.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الكاظم",
          "النسب"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الإشارة والنص على أبي الحسن موسى (ع)",
        "external_id": "alkazim-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-004",
        "question_text": "ما اسم أم الإمام موسى الكاظم (ع) في الإرشاد؟",
        "options": [
          "حميدة البربرية",
          "أم فروة بنت القاسم",
          "نجمة",
          "سمانة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سمّى الشيخ المفيد أمه حميدة البربرية ووصفها بأنها أم ولد.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الكاظم",
          "الأم"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-005",
        "question_text": "ما الكنية الأشهر للإمام موسى بن جعفر (ع) في أبواب الكافي؟",
        "options": [
          "أبو الحسن",
          "أبو جعفر",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يعبّر الكليني عنه في باب النص عليه بأبي الحسن موسى (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الكاظم",
          "الكنية"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الإشارة والنص على أبي الحسن موسى (ع)",
        "external_id": "alkazim-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-006",
        "question_text": "بعد أي إمام تولّى موسى الكاظم (ع) الإمامة؟",
        "options": [
          "جعفر الصادق (ع)",
          "محمد الباقر (ع)",
          "علي الرضا (ع)",
          "محمد الجواد (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى الإمامة بعد وفاة أبيه الإمام جعفر الصادق (ع).",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الكاظم",
          "الإمامة"
        ],
        "source": "الإرشاد، ج2، ص215؛ الكافي، ج1، باب النص عليه",
        "external_id": "alkazim-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-007",
        "question_text": "من قال له الصادق (ع): «هو صاحبكم» مشيرًا إلى موسى (ع)؟",
        "options": [
          "المفضّل بن عمر",
          "هشام بن الحكم",
          "صفوان الجمال",
          "علي بن يقطين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سأل المفضّل عن صاحب الأمر بعد الصادق، فأشار إلى موسى (ع).",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الكاظم",
          "النص"
        ],
        "source": "الإرشاد، ج2، فصل النصوص على إمامته، ص217؛ الكافي، ج1، باب النص عليه",
        "external_id": "alkazim-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-008",
        "question_text": "ما علامة الإمام بعد الصادق (ع) في خبر فيض بن المختار؟",
        "options": [
          "أنه لا يلهو ولا يلعب",
          "أنه أكبر أبنائه سنًا",
          "أنه يقيم في الكوفة",
          "أنه يتولى القضاء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجّه الصادق فيضًا إلى ملاحظة من لا يلهو ولا يلعب، فظهر موسى بهذه الصفة.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الكاظم",
          "النص"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الإشارة والنص على أبي الحسن موسى (ع)",
        "external_id": "alkazim-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-009",
        "question_text": "بماذا وصف المفيد الإمام الكاظم (ع) بين أهل زمانه؟",
        "options": [
          "أعبدهم وأسخاهم وأكرمهم نفسًا",
          "أكثرهم اشتغالًا بالتجارة",
          "أشهرهم بقيادة الجيوش",
          "أوسعهم ولايةً في الدولة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عدّه المفيد أعبد أهل زمانه وأفقههم وأسخاهم كفًا وأكرمهم نفسًا.",
        "difficulty": "medium",
        "subcategory": "الفضائل",
        "tags": [
          "الكاظم",
          "العبادة",
          "الكرم"
        ],
        "source": "الإرشاد، ج2، فصل مناقبه (ع)، ص231",
        "external_id": "alkazim-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-010",
        "question_text": "ما الدعاء الذي كرره الإمام الكاظم (ع) في سجوده ليلًا؟",
        "options": [
          "عظم الذنب من عبدك فليحسن العفو من عندك",
          "رب زدني مالًا وولدًا",
          "اللهم انصرني بالسيف",
          "رب اجعلني ملكًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقل المفيد طول سجوده وتكراره طلب العفو بهذه العبارة.",
        "difficulty": "medium",
        "subcategory": "العبادة",
        "tags": [
          "الكاظم",
          "الدعاء"
        ],
        "source": "الإرشاد، ج2، فصل مناقبه وعبادته (ع)، ص231",
        "external_id": "alkazim-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-011",
        "question_text": "كيف كان الكاظم (ع) يعامل من بلغه عنه أذى؟",
        "options": [
          "يرسل إليه صرّة من المال",
          "يهجره دائمًا",
          "يرفع أمره إلى الوالي",
          "يأمر بإبعاده"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان إذا بلغه عن رجل ما يؤذيه بعث إليه بصرة من المال.",
        "difficulty": "easy",
        "subcategory": "الأخلاق",
        "tags": [
          "الكاظم",
          "الحلم",
          "الكرم"
        ],
        "source": "الإرشاد، ج2، فصل مناقبه وكرمه (ع)، ص233",
        "external_id": "alkazim-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-012",
        "question_text": "ما مقدار صرر الإمام الكاظم (ع) المشهورة لأهل المدينة؟",
        "options": [
          "من 200 إلى 300 دينار",
          "من دينار إلى 5 دنانير",
          "2000 دينار دائمًا",
          "10 دراهم فقط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد أن صراره كانت تتراوح بين مئتي دينار وثلاثمئة.",
        "difficulty": "medium",
        "subcategory": "الكرم",
        "tags": [
          "الكاظم",
          "الصدقة"
        ],
        "source": "الإرشاد، ج2، فصل مناقبه وكرمه (ع)، ص233",
        "external_id": "alkazim-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-013",
        "question_text": "بأي لقب وصف المفيد الإمام الكاظم (ع) في صدر ترجمته؟",
        "options": [
          "العبد الصالح",
          "باقر العلم",
          "زين العابدين",
          "الرضا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صدر المفيد ترجمته بذكر أبي الحسن موسى بن جعفر العبد الصالح.",
        "difficulty": "easy",
        "subcategory": "الألقاب",
        "tags": [
          "الكاظم",
          "العبد الصالح"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-014",
        "question_text": "أي ابن نصّ الكاظم (ع) على إمامته من بعده؟",
        "options": [
          "علي الرضا (ع)",
          "إبراهيم بن موسى",
          "العباس بن موسى",
          "إسحاق بن موسى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإمام الكاظم على ابنه علي الرضا (ع) للإمامة بعده.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الكاظم",
          "الرضا",
          "الوصية"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الإشارة والنص على أبي الحسن الرضا (ع)",
        "external_id": "alkazim-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-015",
        "question_text": "أي صاحب للكاظم (ع) عمل في بلاط هارون لمصالح المؤمنين؟",
        "options": [
          "علي بن يقطين",
          "زرارة بن أعين",
          "جابر الجعفي",
          "أبان بن تغلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بقي علي بن يقطين في موقعه وقضى حوائج المؤمنين بتوجيه الإمام.",
        "difficulty": "medium",
        "subcategory": "الأصحاب",
        "tags": [
          "الكاظم",
          "علي بن يقطين"
        ],
        "source": "بحار الأنوار، ج48، باب أحوال أصحابه، أخبار علي بن يقطين؛ نقلًا عن الكافي",
        "external_id": "alkazim-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-016",
        "question_text": "لماذا غيّر الكاظم (ع) وضوء علي بن يقطين مؤقتًا؟",
        "options": [
          "لدفع تهمة التشيع عنه",
          "لأنه كان مسافرًا",
          "لعدم وجود الماء",
          "لتعليمه وضوء الجبيرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجّهه مؤقتًا إلى هيئة يراقبها الرشيد، فلما اندفعت التهمة أعاده إلى وضوئه.",
        "difficulty": "medium",
        "subcategory": "المواقف",
        "tags": [
          "الكاظم",
          "علي بن يقطين",
          "التقية"
        ],
        "source": "الإرشاد، ج2، من دلائله (ع)، خبر علي بن يقطين والوضوء",
        "external_id": "alkazim-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-017",
        "question_text": "أي خليفة أمر بأخذ الإمام الكاظم (ع) من المدينة وسجنه؟",
        "options": [
          "هارون الرشيد",
          "أبو العباس السفاح",
          "المأمون",
          "المعتصم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قبض هارون على الإمام في المدينة ثم وجّه به إلى العراق وأطال حبسه.",
        "difficulty": "easy",
        "subcategory": "المحنة والسجون",
        "tags": [
          "الكاظم",
          "هارون"
        ],
        "source": "الإرشاد، ج2، فصل سبب وفاته وحبسه (ع)، ص237 وما بعدها",
        "external_id": "alkazim-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-018",
        "question_text": "إلى أي مدينة نُقل الكاظم (ع) ليُحبس عند عيسى بن جعفر؟",
        "options": [
          "البصرة",
          "الكوفة",
          "سامراء",
          "واسط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجّه هارون الإمام إلى البصرة فحبسه عيسى بن جعفر قبل نقله إلى بغداد.",
        "difficulty": "medium",
        "subcategory": "المحنة والسجون",
        "tags": [
          "الكاظم",
          "البصرة",
          "السجن"
        ],
        "source": "الإرشاد، ج2، فصل حبسه ووفاته (ع)، ص240",
        "external_id": "alkazim-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-019",
        "question_text": "إلى من كتب عيسى بن جعفر بعد طول حبس الكاظم (ع)؟",
        "options": [
          "هارون الرشيد",
          "جعفر البرمكي",
          "محمد الأمين",
          "والي المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كتب عيسى إلى هارون طالبًا إعفاءه بعدما لم يجد على الإمام حجة.",
        "difficulty": "medium",
        "subcategory": "المحنة والسجون",
        "tags": [
          "الكاظم",
          "عيسى بن جعفر"
        ],
        "source": "الإرشاد، ج2، فصل حبسه ووفاته (ع)، ص240-241",
        "external_id": "alkazim-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-020",
        "question_text": "عند من كان آخر سجن للإمام الكاظم (ع)؟",
        "options": [
          "السندي بن شاهك",
          "عيسى بن جعفر",
          "الفضل بن الربيع",
          "الفضل بن يحيى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان آخر مواضع حبسه حبس السندي بن شاهك في بغداد.",
        "difficulty": "easy",
        "subcategory": "المحنة والسجون",
        "tags": [
          "الكاظم",
          "السندي",
          "السجن"
        ],
        "source": "الإرشاد، ج2، فصل حبسه ووفاته (ع)، ص242-243",
        "external_id": "alkazim-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-021",
        "question_text": "ماذا صنع السندي بعد وفاة الإمام الكاظم (ع)؟",
        "options": [
          "أحضر فقهاء ووجوهًا لمعاينة الجثمان",
          "دفنه سرًا بلا حضور",
          "أرسله إلى المدينة",
          "منع إعلان موته"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أحضر فقهاء ووجوه بغداد وأراهم الجثمان لإثبات عدم وجود اعتداء ظاهر.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد",
        "tags": [
          "الكاظم",
          "السندي"
        ],
        "source": "الإرشاد، ج2، ص243؛ عيون أخبار الرضا، ج2، باب صحة وفاة أبي إبراهيم (ع)",
        "external_id": "alkazim-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-022",
        "question_text": "ما سبب وفاة الكاظم (ع) الذي أورده الشيخ المفيد؟",
        "options": [
          "السم في الطعام وقيل في تمر",
          "جرح في معركة",
          "مرض في الحج",
          "سقوط أثناء السفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد أن السندي نفذ قتله بالسم في طعام، وقيل في تمر.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد",
        "tags": [
          "الكاظم",
          "السم"
        ],
        "source": "الإرشاد، ج2، فصل سبب وفاته (ع)، ص243",
        "external_id": "alkazim-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-023",
        "question_text": "في أي سنة توفي الإمام الكاظم (ع) بحسب الإرشاد؟",
        "options": [
          "183 هـ",
          "173 هـ",
          "188 هـ",
          "203 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الشيخ المفيد على وفاته سنة ثلاث وثمانين ومائة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الكاظم",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-024",
        "question_text": "كم كان عمر الإمام الكاظم (ع) عند وفاته وفق الإرشاد؟",
        "options": [
          "55 سنة",
          "47 سنة",
          "60 سنة",
          "75 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صرح المفيد بأن عمره عند وفاته كان خمسًا وخمسين سنة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الكاظم",
          "العمر"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-025",
        "question_text": "كم استمرت إمامة الكاظم (ع) بعد أبيه بحسب الإرشاد؟",
        "options": [
          "35 سنة",
          "20 سنة",
          "25 سنة",
          "50 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر المفيد أنه عاش بعد أبيه خمسًا وثلاثين سنة مدة إمامته.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الكاظم",
          "مدة الإمامة"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام موسى بن جعفر (ع)، ص215",
        "external_id": "alkazim-025",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "alkazim-026",
        "question_text": "أين دُفن الإمام موسى الكاظم (ع) بحسب الإرشاد؟",
        "options": [
          "مقابر قريش عند باب التبن",
          "البقيع",
          "النجف",
          "سامراء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 25,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دُفن في مقابر قريش عند باب التبن في بغداد، وهو موضع الكاظمية اليوم.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد",
        "tags": [
          "الكاظم",
          "الدفن",
          "الكاظمية"
        ],
        "source": "الإرشاد، ج2، فصل وفاته ودفنه (ع)، ص244",
        "external_id": "alkazim-026",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-12",
    "user_id": "system",
    "title": "سيرة الإمام علي الرضا (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هو والد الإمام علي الرضا (ع)؟",
        "options": [
          "الإمام موسى الكاظم (ع)",
          "الإمام جعفر الصادق (ع)",
          "الإمام محمد الباقر (ع)",
          "الإمام محمد الجواد (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإمام الرضا هو علي بن موسى، ابن الإمام موسى الكاظم (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الرضا",
          "النسب"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 3، ص28-30",
        "external_id": "RID-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة وُلد الإمام الرضا (ع)؟",
        "options": [
          "المدينة المنورة",
          "مكة المكرمة",
          "الكوفة",
          "البصرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وُلد الإمام الرضا (ع) في المدينة المنورة ونشأ فيها.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الرضا",
          "المدينة"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 2، ص26",
        "external_id": "RID-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الاسم المشهور لأم الإمام الرضا (ع) في خبر مولده؟",
        "options": [
          "نجمة",
          "حميدة",
          "حكيمة",
          "سمانة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر خبر مولده أن أمه أم ولد تسمى نجمة، ووردت لها أسماء أخرى.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الرضا",
          "الأم"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 2، ص26-27",
        "external_id": "RID-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما كنية الإمام علي الرضا (ع)؟",
        "options": [
          "أبو الحسن",
          "أبو جعفر",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كنيته أبو الحسن، ويعرف في كتب الحديث بأبي الحسن الثاني.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الرضا",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، باب الإمام بعد موسى، ص247",
        "external_id": "RID-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي إمام نصّ على إمامة علي الرضا (ع) من بعده؟",
        "options": [
          "الإمام موسى الكاظم (ع)",
          "الإمام جعفر الصادق (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام علي الهادي (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وردت نصوص عن الإمام الكاظم (ع) بتعيين ابنه علي والرجوع إليه.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الرضا",
          "النص"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 3، ص28-39",
        "external_id": "RID-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من الإمام الذي تولّى الإمامة بعد الرضا (ع)؟",
        "options": [
          "الإمام محمد الجواد (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام الحسن العسكري (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإمام الرضا على ابنه محمد الجواد (ع)، الإمام التاسع.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الرضا",
          "الإمام الجواد"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي جعفر الثاني، ص320-323",
        "external_id": "RID-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا كان يفعل الإمام الرضا (ع) بالطعام قبل أن يأكل؟",
        "options": [
          "يضع من أحسنه للمساكين",
          "يدخره كله للغد",
          "يرسله إلى المأمون",
          "يمنع الخدم منه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان يضع من أطايب الطعام في صحفة ويأمر بها للمساكين.",
        "difficulty": "medium",
        "subcategory": "الأخلاق والعبادة",
        "tags": [
          "الإمام الرضا",
          "الصدقة"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 44، ص178-180",
        "external_id": "RID-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف عامل الإمام الرضا (ع) غلمانه عند الطعام؟",
        "options": [
          "أجلسهم معه ولم يقم الآكل",
          "أوقفهم طوال الطعام",
          "فصل بينهم بحسب الأصل",
          "منعهم من الأكل معه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان يجلس مماليكه معه، ولا يستخدم من كان منهم يأكل حتى يفرغ.",
        "difficulty": "medium",
        "subcategory": "الأخلاق والعبادة",
        "tags": [
          "الإمام الرضا",
          "التواضع"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 44، ص178-180",
        "external_id": "RID-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سورة أكثر الإمام الرضا (ع) تلاوتها في وصف سفره؟",
        "options": [
          "سورة التوحيد",
          "سورة البقرة",
          "سورة المائدة",
          "سورة الأنفال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصف رجاء كثرة قراءته لسورة «قل هو الله أحد» في صلاته وذكره.",
        "difficulty": "medium",
        "subcategory": "الأخلاق والعبادة",
        "tags": [
          "الإمام الرضا",
          "العبادة"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 44، ص180-184",
        "external_id": "RID-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف أجاب الإمام الرضا (ع) أصحاب اللغات المختلفة؟",
        "options": [
          "بلغة كل واحد منهم",
          "بالعربية فقط",
          "بالفارسية فقط",
          "بمترجم دائمًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "روى أبو الصلت أن الإمام كان يكلم الناس بألسنتهم.",
        "difficulty": "medium",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الرضا",
          "اللغات"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 47، ص228",
        "external_id": "RID-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا عُرف مجلس الإمام الرضا (ع) في المدينة؟",
        "options": [
          "الإفتاء في مسجد النبي (ص)",
          "قيادة جند العباسيين",
          "جمع ضرائب الحجاز",
          "إدارة بريد الدولة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الإمام أنه كان يجلس في الروضة ويفتي الناس.",
        "difficulty": "medium",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الرضا",
          "العلم"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 46، ص217",
        "external_id": "RID-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من الخليفة الذي استدعى الإمام الرضا (ع) إلى خراسان؟",
        "options": [
          "المأمون العباسي",
          "هارون الرشيد",
          "الأمين العباسي",
          "المتوكل العباسي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استدعى المأمون الإمام من المدينة إلى مرو ثم عرض عليه ولاية العهد.",
        "difficulty": "easy",
        "subcategory": "الرحلة إلى خراسان",
        "tags": [
          "الإمام الرضا",
          "المأمون"
        ],
        "source": "الإرشاد، ج2، باب ولاية العهد، ص259-262",
        "external_id": "RID-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من صحب الإمام الرضا (ع) من المدينة بأمر المأمون؟",
        "options": [
          "رجاء بن أبي الضحاك",
          "الفضل بن الربيع",
          "هرثمة بن أعين",
          "دعبل الخزاعي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كُلّف رجاء بن أبي الضحاك بإشخاص الإمام إلى المأمون.",
        "difficulty": "hard",
        "subcategory": "الرحلة إلى خراسان",
        "tags": [
          "الإمام الرضا",
          "السفر"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 44، ص180",
        "external_id": "RID-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة ألقى الإمام الرضا (ع) حديث سلسلة الذهب؟",
        "options": [
          "نيسابور",
          "قم",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أملى الإمام حديث التوحيد للمحدثين عند خروجه من نيسابور.",
        "difficulty": "easy",
        "subcategory": "الرحلة إلى خراسان",
        "tags": [
          "الإمام الرضا",
          "سلسلة الذهب"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 37، ص144-145",
        "external_id": "RID-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما العبارة المركزية في حديث سلسلة الذهب؟",
        "options": [
          "كلمة لا إله إلا الله حصني",
          "طلب العلم فريضة",
          "الأعمال بالنيات",
          "المؤمن مرآة المؤمن"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جاء فيه عن الله تعالى: «كلمة لا إله إلا الله حصني».",
        "difficulty": "medium",
        "subcategory": "الرحلة إلى خراسان",
        "tags": [
          "الإمام الرضا",
          "التوحيد"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 37، ص144-145",
        "external_id": "RID-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المنصب الذي قبله الإمام الرضا (ع) بعد إصرار المأمون؟",
        "options": [
          "ولاية العهد",
          "القضاء العام",
          "قيادة الجيش",
          "ولاية المدينة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رفض الخلافة ثم قبل ولاية العهد تحت الإلزام وبشروط.",
        "difficulty": "easy",
        "subcategory": "ولاية العهد",
        "tags": [
          "الإمام الرضا",
          "ولاية العهد"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 40، ص139-141",
        "external_id": "RID-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي شرط وضعه الإمام الرضا (ع) لقبول ولاية العهد؟",
        "options": [
          "ألا يولي ولا يعزل",
          "أن يقود الجيش",
          "أن ينتقل المأمون للمدينة",
          "أن يجبي الخراج"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اشترط ألا يأمر أو ينهى أو يولي أو يعزل أو يغير رسمًا قائمًا.",
        "difficulty": "hard",
        "subcategory": "ولاية العهد",
        "tags": [
          "الإمام الرضا",
          "الشروط"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 40، ص140",
        "external_id": "RID-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما لون الشعار بعد عقد ولاية العهد للإمام الرضا (ع)؟",
        "options": [
          "الأخضر",
          "الأسود",
          "الأبيض",
          "الأحمر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمر المأمون بترك السواد العباسي ولبس الخضرة.",
        "difficulty": "medium",
        "subcategory": "ولاية العهد",
        "tags": [
          "الإمام الرضا",
          "الشعار"
        ],
        "source": "الإرشاد، ج2، باب ولاية العهد، ص264-265",
        "external_id": "RID-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من جمع الإمام الرضا (ع) بأهل الأديان للمناظرة؟",
        "options": [
          "المأمون العباسي",
          "الأمين العباسي",
          "هارون الرشيد",
          "محمد بن جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع المأمون رؤساء الملل والمتكلمين لمناظرة الإمام.",
        "difficulty": "medium",
        "subcategory": "المناظرات",
        "tags": [
          "الإمام الرضا",
          "المناظرة"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 12، ص154-175",
        "external_id": "RID-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من مثّل النصارى في مناظرة الإمام الرضا (ع)؟",
        "options": [
          "الجاثليق",
          "رأس الجالوت",
          "الهربذ الأكبر",
          "عمران الصابي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ناظر الإمام الجاثليق، رأس النصارى، واحتج عليه بما يقر به من الإنجيل.",
        "difficulty": "hard",
        "subcategory": "المناظرات",
        "tags": [
          "الإمام الرضا",
          "الجاثليق"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 12، ص154-160",
        "external_id": "RID-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من أعلن الإسلام بعد مناظرة الإمام الرضا (ع)؟",
        "options": [
          "عمران الصابي",
          "الجاثليق",
          "رأس الجالوت",
          "سليمان المروزي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعلن عمران الصابي الشهادتين بعد حواره مع الإمام في التوحيد.",
        "difficulty": "hard",
        "subcategory": "المناظرات",
        "tags": [
          "الإمام الرضا",
          "عمران الصابي"
        ],
        "source": "عيون أخبار الرضا، ج1، الباب 12، ص169-175",
        "external_id": "RID-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من أنشد أمام الإمام الرضا (ع) قصيدته التائية؟",
        "options": [
          "دعبل الخزاعي",
          "أبو نواس",
          "الكميت الأسدي",
          "السيد الحميري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشد دعبل قصيدته التي مطلعها «مدارس آيات خلت من تلاوة».",
        "difficulty": "medium",
        "subcategory": "المواقف والآداب",
        "tags": [
          "الإمام الرضا",
          "دعبل"
        ],
        "source": "عيون أخبار الرضا، ج2، الباب 66، ص263-266",
        "external_id": "RID-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف خرج الإمام الرضا (ع) لصلاة العيد؟",
        "options": [
          "حافيًا مكبرًا على هيئة النبي",
          "في موكب عسكري عباسي",
          "لم يخرج من منزله",
          "أرسل الفضل بن سهل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خرج حافيًا مشمرًا مكبرًا، فأمر المأمون بإرجاعه قبل الصلاة.",
        "difficulty": "medium",
        "subcategory": "المواقف والآداب",
        "tags": [
          "الإمام الرضا",
          "صلاة العيد"
        ],
        "source": "الإرشاد، ج2، باب صلاة العيد، ص268-270",
        "external_id": "RID-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين دُفن الإمام الرضا (ع)؟",
        "options": [
          "سناباد من طوس بجوار قبر هارون",
          "البقيع في المدينة",
          "الكاظمية في بغداد",
          "النجف قرب أمير المؤمنين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دُفن بسناباد من طوس في الموضع المجاور لقبر هارون الرشيد.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الرضا",
          "طوس"
        ],
        "source": "الإرشاد، ج2، باب وفاة الرضا، ص271-273؛ عيون أخبار الرضا، ج1، الباب 39، ص147",
        "external_id": "RID-024",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-13",
    "user_id": "system",
    "title": "سيرة الإمام محمد الجواد (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هو والد الإمام محمد الجواد (ع)؟",
        "options": [
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام جعفر الصادق (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هو محمد بن علي بن موسى، ابن الإمام علي الرضا (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "النسب"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة وُلد الإمام محمد الجواد (ع)؟",
        "options": [
          "المدينة المنورة",
          "مكة المكرمة",
          "بغداد",
          "طوس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر كتب السيرة الإمامية أن مولده (ع) كان في المدينة المنورة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "المدينة"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام بعد علي بن موسى، ص273",
        "external_id": "JAW-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي سنة هجرية وُلد الإمام الجواد (ع)؟",
        "options": [
          "195هـ",
          "183هـ",
          "148هـ",
          "212هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وُلد الإمام الجواد (ع) سنة خمس وتسعين ومائة للهجرة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "المولد"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الشهر المذكور لمولد الإمام الجواد (ع) في رواية الكافي؟",
        "options": [
          "شهر رمضان",
          "شهر رجب",
          "شهر شعبان",
          "شهر محرم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الكافي على أن مولده (ع) كان في شهر رمضان سنة 195هـ.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "المولد"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الاسم المذكور لأم الإمام الجواد (ع) في الكافي؟",
        "options": [
          "سبيكة النوبية",
          "نجمة",
          "حميدة",
          "سمانة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الكليني أن أمه أم ولد يقال لها سبيكة النوبية.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "الأم"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما كنية الإمام محمد الجواد (ع)؟",
        "options": [
          "أبو جعفر",
          "أبو الحسن",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كنيته أبو جعفر، ويقال له أبو جعفر الثاني تمييزًا له عن الإمام الباقر (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الجواد",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام بعد علي بن موسى، ص273",
        "external_id": "JAW-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي إمام نصّ على إمامة محمد الجواد (ع) بعده؟",
        "options": [
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام الحسن العسكري (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "روى الكافي نصوصًا متعددة عن الإمام الرضا (ع) تشير إلى ابنه أبي جعفر من بعده.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الجواد",
          "النص"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي جعفر الثاني، ح833-845، ص320-323",
        "external_id": "JAW-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بمن قارن الإمام الرضا (ع) صغر سن ابنه عند بيان إمامته؟",
        "options": [
          "عيسى بن مريم (ع)",
          "موسى بن عمران (ع)",
          "إبراهيم الخليل (ع)",
          "نوح (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "احتج الإمام الرضا (ع) بأن عيسى (ع) قام بالحجة في سن صغيرة.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الجواد",
          "حداثة السن"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي جعفر الثاني، ح842، ص322",
        "external_id": "JAW-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى من وجّه الإمام الرضا (ع) صاحبَ الابن الذي طلب الدعاء له؟",
        "options": [
          "إلى أبي جعفر الجواد (ع)",
          "إلى علي بن جعفر",
          "إلى يحيى بن أكثم",
          "إلى المأمون"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال الرضا (ع) إن الغلام مولى أبي جعفر، وأمر بإرساله إليه ليدعو له.",
        "difficulty": "hard",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الجواد",
          "النص"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي جعفر الثاني، ح843، ص322",
        "external_id": "JAW-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف أظهر علي بن جعفر احترامه للإمام الجواد (ع) في مسجد النبي؟",
        "options": [
          "وثب فقبّل يده وعظّمه",
          "أرسل إليه كتابًا",
          "قدّمه لإمامة الصلاة فقط",
          "أهداه فرسًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وثب علي بن جعفر بلا حذاء ولا رداء، وقبّل يد الإمام الجواد (ع) وعظّمه.",
        "difficulty": "medium",
        "subcategory": "المواقف والفضائل",
        "tags": [
          "الإمام الجواد",
          "علي بن جعفر"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي جعفر الثاني، ح844، ص322-323",
        "external_id": "JAW-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بأي نبي استشهد الإمام الجواد (ع) في جواب الاعتراض على حداثة سنه؟",
        "options": [
          "يحيى بن زكريا (ع)",
          "داود (ع)",
          "إسماعيل (ع)",
          "أيوب (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استشهد بقوله تعالى في يحيى (ع): «وآتيناه الحكم صبيًا» لإمكان إيتاء الحكم في الصغر.",
        "difficulty": "medium",
        "subcategory": "العلم والإمامة",
        "tags": [
          "الإمام الجواد",
          "القرآن"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب حالات الأئمة في السن، ح1001، ص383-384",
        "external_id": "JAW-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم ذكر الإمام الجواد (ع) أن عمره كان عند جوابه عن حداثة سنه؟",
        "options": [
          "تسع سنوات",
          "خمس سنوات",
          "اثنتا عشرة سنة",
          "خمس عشرة سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال (ع) في جوابه: «وأنا ابن تسع سنين».",
        "difficulty": "medium",
        "subcategory": "العلم والإمامة",
        "tags": [
          "الإمام الجواد",
          "حداثة السن"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب حالات الأئمة في السن، ح1002، ص384",
        "external_id": "JAW-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من زوّج الإمام الجواد (ع) ابنته أم الفضل؟",
        "options": [
          "المأمون العباسي",
          "المعتصم العباسي",
          "هارون الرشيد",
          "الأمين العباسي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "زوّج المأمون ابنته أم الفضل من الإمام أبي جعفر الجواد (ع).",
        "difficulty": "easy",
        "subcategory": "محطات الحياة",
        "tags": [
          "الإمام الجواد",
          "المأمون"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص281-282",
        "external_id": "JAW-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من اختاره العباسيون لاختبار علم الإمام الجواد (ع) أمام المأمون؟",
        "options": [
          "يحيى بن أكثم",
          "أحمد بن أبي دؤاد",
          "الفضل بن سهل",
          "الريان بن شبيب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اتفق العباسيون مع يحيى بن أكثم على أن يسأل الإمام مسألة يختبر بها علمه.",
        "difficulty": "medium",
        "subcategory": "المناظرة",
        "tags": [
          "الإمام الجواد",
          "يحيى بن أكثم"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص282-283",
        "external_id": "JAW-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما موضوع المسألة التي طرحها يحيى بن أكثم على الإمام الجواد (ع)؟",
        "options": [
          "حكم محرم قتل صيدًا",
          "ميراث ذوي الأرحام",
          "زكاة الأنعام",
          "عدة المطلقة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سأل يحيى عن حكم محرم قتل صيدًا، ففصّل الإمام صور المسألة المتعددة.",
        "difficulty": "easy",
        "subcategory": "المناظرة",
        "tags": [
          "الإمام الجواد",
          "الفقه"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص283-284",
        "external_id": "JAW-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما أول تفصيل طلبه الإمام الجواد (ع) في مسألة قتل الصيد؟",
        "options": [
          "أقتله في حل أم حرم؟",
          "أكان الصائد غنيًا؟",
          "أكان الصيد مملوكًا؟",
          "أكان معه شاهدان؟"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدأ الإمام بتفريع السؤال: أقتله في حل أم حرم، ثم ذكر أحوالًا أخرى تغير الحكم.",
        "difficulty": "hard",
        "subcategory": "المناظرة",
        "tags": [
          "الإمام الجواد",
          "الفقه"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص283-284",
        "external_id": "JAW-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف كان أثر تفصيل الإمام لمسألة الصيد على يحيى بن أكثم؟",
        "options": [
          "تحيّر وظهر عجزه",
          "أجاب عن كل الفروع",
          "أنهى المجلس غاضبًا",
          "حوّل السؤال إلى المأمون"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحيّر يحيى وبان العجز في وجهه بعد أن فصّل الإمام وجوه المسألة.",
        "difficulty": "medium",
        "subcategory": "المناظرة",
        "tags": [
          "الإمام الجواد",
          "العلم"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص284",
        "external_id": "JAW-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى أي مدينة عاد الإمام الجواد (ع) مع أم الفضل بعد الزواج؟",
        "options": [
          "المدينة المنورة",
          "طوس",
          "الكوفة",
          "سامراء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حمل المأمون أم الفضل مع الإمام، ثم توجه بها إلى المدينة.",
        "difficulty": "medium",
        "subcategory": "محطات الحياة",
        "tags": [
          "الإمام الجواد",
          "المدينة"
        ],
        "source": "الإرشاد، ج2، باب تزويج المأمون ابنته من أبي جعفر، ص290",
        "external_id": "JAW-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من الإمام الذي نصّ عليه الجواد (ع) خليفةً بعده؟",
        "options": [
          "الإمام علي الهادي (ع)",
          "الإمام الحسن العسكري (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإمام الجواد (ع) على ابنه علي، الإمام الهادي (ع)، من بعده.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الجواد",
          "الإمام الهادي"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي الحسن الثالث، ح847-849، ص323-325",
        "external_id": "JAW-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى أي مدينة استدعى المعتصم الإمام الجواد (ع) في آخر حياته؟",
        "options": [
          "بغداد",
          "مرو",
          "دمشق",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشخص المعتصم الإمام الجواد (ع) إلى بغداد في السنة التي توفي فيها.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الجواد",
          "بغداد"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي سنة هجرية توفي الإمام الجواد (ع)؟",
        "options": [
          "220هـ",
          "203هـ",
          "254هـ",
          "260هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توفي الإمام الجواد (ع) سنة عشرين ومائتين للهجرة.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الجواد",
          "الوفاة"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي شهر توفي الإمام الجواد (ع) بحسب الكافي؟",
        "options": [
          "ذو القعدة",
          "ذو الحجة",
          "المحرم",
          "صفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الكافي أن وفاته (ع) كانت في آخر ذي القعدة سنة 220هـ.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الجواد",
          "الوفاة"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر الإمام الجواد (ع) عند وفاته بحسب الكافي؟",
        "options": [
          "خمسًا وعشرين سنة",
          "ثلاثًا وثلاثين سنة",
          "سبعًا وأربعين سنة",
          "أربعًا وخمسين سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذكر الكافي أنه توفي وهو ابن خمس وعشرين سنة وشهرين وثمانية عشر يومًا.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الجواد",
          "العمر"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين دُفن الإمام الجواد (ع)؟",
        "options": [
          "مقابر قريش عند قبر جده الكاظم",
          "البقيع في المدينة",
          "طوس عند قبر والده الرضا",
          "سامراء عند قبر الهادي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دُفن في بغداد بمقابر قريش عند قبر جده الإمام موسى الكاظم (ع).",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الجواد",
          "المرقد"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد أبي جعفر محمد بن علي الثاني، ص492",
        "external_id": "JAW-024",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-14",
    "user_id": "system",
    "title": "سيرة الإمام علي الهادي (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "من هو والد الإمام علي الهادي (ع)؟",
        "options": [
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام الحسن العسكري (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هو علي بن محمد بن علي، ابن الإمام محمد الجواد (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الهادي",
          "النسب"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام بعد أبي جعفر محمد بن علي، ص297",
        "external_id": "HAD-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الاسم الذي تذكره المصادر لأم الإمام الهادي (ع)؟",
        "options": [
          "سمانة",
          "نجمة",
          "حميدة",
          "حكيمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر كتب السيرة أن أمه أم ولد يقال لها سمانة.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الهادي",
          "الأم"
        ],
        "source": "إعلام الورى بأعلام الهدى، ج2، باب الإمام علي بن محمد الهادي، ص109",
        "external_id": "HAD-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين وُلد الإمام الهادي (ع)؟",
        "options": [
          "صريا قرب المدينة",
          "سامراء",
          "بغداد",
          "طوس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت ولادته في صريا، وهي قرية أسسها الإمام الكاظم (ع) قرب المدينة.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الهادي",
          "صريا"
        ],
        "source": "مناقب آل أبي طالب، ج4، فصل في أبي الحسن علي بن محمد، ص401",
        "external_id": "HAD-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما كنية الإمام علي الهادي (ع)؟",
        "options": [
          "أبو الحسن",
          "أبو جعفر",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كنيته أبو الحسن، ويُعبّر عنه في كتب الحديث بأبي الحسن الثالث.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الهادي",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، باب الإمام علي بن محمد، ص297",
        "external_id": "HAD-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي لقبين اشتهر بهما الإمام علي بن محمد (ع)؟",
        "options": [
          "الهادي والنقي",
          "الرضا والجواد",
          "السجاد والباقر",
          "العسكري والمنتظر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من أشهر ألقابه الهادي والنقي، وهما دالان على الهداية والطهارة.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام الهادي",
          "الألقاب"
        ],
        "source": "مناقب آل أبي طالب، ج4، فصل في أبي الحسن علي بن محمد، ص401",
        "external_id": "HAD-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من نصّ على إمامة علي الهادي (ع) من بعده؟",
        "options": [
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام الحسن العسكري (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "روت النصوص تعيين الإمام الجواد ابنه عليًا للإمامة من بعده.",
        "difficulty": "medium",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الهادي",
          "النص"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي الحسن الثالث، ح1-7، ص323-325",
        "external_id": "HAD-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تولّى الإمامة بعد الإمام الهادي (ع)؟",
        "options": [
          "الإمام الحسن العسكري (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام جعفر الصادق (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص الإمام الهادي على ابنه أبي محمد الحسن العسكري (ع) من بعده.",
        "difficulty": "easy",
        "subcategory": "الإمامة",
        "tags": [
          "الإمام الهادي",
          "الإمام العسكري"
        ],
        "source": "الكافي، ج1، باب الإشارة والنص على أبي محمد (ع)، ح1-10، ص325-328",
        "external_id": "HAD-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من عيّنه العباسيون لتعليم الإمام صغيرًا ثم أقرّ بعلمه؟",
        "options": [
          "الجنيدي",
          "ابن السكيت",
          "يحيى بن هرثمة",
          "الفتح بن خاقان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عُيّن الجنيدي لملازمته وتعليمه، ثم شهد بأنه أعلم الناس وأنه يتعلم منه.",
        "difficulty": "hard",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الهادي",
          "الجنيدي"
        ],
        "source": "بحار الأنوار، ج50، باب أحواله ومعجزاته، ص129-130",
        "external_id": "HAD-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا فسّر اختلاف معجزات موسى وعيسى ومحمد (ص)؟",
        "options": [
          "وافقت الغالب على أهل عصورهم",
          "اختيرت بلا حكمة ظاهرة",
          "كانت كلها من نوع واحد",
          "اقتصرت على شفاء المرضى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بيّن لابن السكيت أن الحجة جاءت بما يغلب فن العصر: السحر والطب والكلام.",
        "difficulty": "hard",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الهادي",
          "المعجزات"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الاضطرار إلى الحجة، ح20، ص24-25",
        "external_id": "HAD-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الحجة الباقية التي يُعرف بها الصادق وفق جواب الإمام؟",
        "options": [
          "العقل",
          "النسب",
          "كثرة الأتباع",
          "السلطان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قال الإمام لابن السكيت إن الحجة اليوم هي العقل، فيعرف به الصادق ويُكذّب المفتري.",
        "difficulty": "medium",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الهادي",
          "العقل"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب الاضطرار إلى الحجة، ح20، ص24-25",
        "external_id": "HAD-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الزيارة الجامعة المروية عن الإمام الهادي (ع)؟",
        "options": [
          "الزيارة الجامعة الكبيرة",
          "زيارة عاشوراء",
          "زيارة وارث",
          "زيارة أمين الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "علّم الإمام موسى النخعي نصًا جامعًا لزيارة الأئمة عُرف بالزيارة الجامعة الكبيرة.",
        "difficulty": "easy",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الهادي",
          "الزيارة الجامعة"
        ],
        "source": "بحار الأنوار، ج99، باب الزيارات الجامعة، ص127-134",
        "external_id": "HAD-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مناسبة تناولتها زيارة مروية عنه لأمير المؤمنين (ع)؟",
        "options": [
          "يوم الغدير",
          "يوم المباهلة",
          "ليلة القدر",
          "يوم الفطر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رُويت عنه زيارة لأمير المؤمنين يوم الغدير تستعرض فضائله ومواقفه.",
        "difficulty": "medium",
        "subcategory": "العلم والدلائل",
        "tags": [
          "الإمام الهادي",
          "الغدير"
        ],
        "source": "بحار الأنوار، ج97، باب زيارة أمير المؤمنين يوم الغدير، ص359-373",
        "external_id": "HAD-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من سعى بالإمام الهادي (ع) إلى المتوكل في المدينة؟",
        "options": [
          "عبد الله بن محمد",
          "يحيى بن هرثمة",
          "سعيد الحاجب",
          "ابن السكيت"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان يتولى الحرب والصلاة بالمدينة، فوشى بالإمام إلى المتوكل وقصده بالأذى.",
        "difficulty": "hard",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "الوشاية"
        ],
        "source": "الإرشاد، ج2، باب سبب شخوص أبي الحسن إلى سر من رأى، ص309-310",
        "external_id": "HAD-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف واجه الإمام الهادي وشاية والي المدينة؟",
        "options": [
          "كتب إلى المتوكل وكذّبها",
          "غادر المدينة سرًا",
          "جمع جيشًا لمقاتلته",
          "التزم الصمت تمامًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كتب الإمام يذكر تحامل عبد الله بن محمد ويكذب ما سعى به.",
        "difficulty": "medium",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "المتوكل"
        ],
        "source": "الإرشاد، ج2، باب سبب شخوص أبي الحسن إلى سر من رأى، ص309",
        "external_id": "HAD-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من أرسله المتوكل لإشخاص الإمام الهادي من المدينة؟",
        "options": [
          "يحيى بن هرثمة",
          "سعيد الحاجب",
          "الفتح بن خاقان",
          "أحمد بن الخصيب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حمل يحيى بن هرثمة كتاب المتوكل وصحب الإمام في رحلته إلى سامراء.",
        "difficulty": "medium",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "يحيى بن هرثمة"
        ],
        "source": "الإرشاد، ج2، باب سبب شخوص أبي الحسن إلى سر من رأى، ص310-311",
        "external_id": "HAD-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا وجد يحيى بن هرثمة عند تفتيش دار الإمام؟",
        "options": [
          "مصاحف وأدعية وكتب علم",
          "أسلحة ورسائل عسكرية",
          "أموال خراج الدولة",
          "رايات معدة للقتال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لم يجد في الدار ما يؤيد الوشاية، بل وجد المصاحف والأدعية وكتب العلم.",
        "difficulty": "medium",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "تفتيش الدار"
        ],
        "source": "بحار الأنوار، ج50، باب أحواله ومعجزاته، ص207-208",
        "external_id": "HAD-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إلى أي مدينة استُدعي الإمام الهادي بأمر المتوكل؟",
        "options": [
          "سامراء",
          "الكوفة",
          "طوس",
          "دمشق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استدعاه المتوكل إلى عاصمة حكمه «سر من رأى»، وهي سامراء.",
        "difficulty": "easy",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "سامراء"
        ],
        "source": "الإرشاد، ج2، باب سبب شخوص أبي الحسن إلى سر من رأى، ص309-312",
        "external_id": "HAD-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين أُنزل الإمام الهادي عند وصوله سامراء أول مرة؟",
        "options": [
          "خان الصعاليك",
          "قصر الخلافة",
          "دار الفتح بن خاقان",
          "جامع سامراء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "احتجب المتوكل عنه أول وصوله، فنزل في خان يُعرف بخان الصعاليك.",
        "difficulty": "medium",
        "subcategory": "الانتقال إلى سامراء",
        "tags": [
          "الإمام الهادي",
          "خان الصعاليك"
        ],
        "source": "الإرشاد، ج2، باب سبب شخوص أبي الحسن إلى سر من رأى، ص311",
        "external_id": "HAD-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا وجد رجال المتوكل عندما هجموا على دار الإمام؟",
        "options": [
          "كان منفردًا يتلو القرآن",
          "كان يجمع السلاح",
          "كان يكتب إلى الروم",
          "كان يقيم وليمة كبيرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجدوه وحده في بيت مغلق، عليه مدرعة من شعر، يتلو القرآن.",
        "difficulty": "medium",
        "subcategory": "مواقفه مع المتوكل",
        "tags": [
          "الإمام الهادي",
          "تلاوة القرآن"
        ],
        "source": "الإرشاد، ج2، باب طرف من أخبار أبي الحسن ومناقبه، ص312-313",
        "external_id": "HAD-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا صنع الإمام عندما ناوله المتوكل كأس الخمر؟",
        "options": [
          "امتنع وقال إن لحمه ودمه لم يخالطاه",
          "شربه مجاملة للمتوكل",
          "ناوله للفتح بن خاقان",
          "خرج من المجلس بلا جواب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رفض الإمام الشرب مؤكدًا أن الخمر لم تخالط لحمه ودمه قط.",
        "difficulty": "easy",
        "subcategory": "مواقفه مع المتوكل",
        "tags": [
          "الإمام الهادي",
          "المتوكل"
        ],
        "source": "الإرشاد، ج2، باب طرف من أخبار أبي الحسن ومناقبه، ص313",
        "external_id": "HAD-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما أثر قصيدة الإمام في زوال الملوك على مجلس المتوكل؟",
        "options": [
          "بكى المتوكل والحاضرون",
          "أمر المتوكل بسجن الإمام",
          "ضحك الحاضرون منها",
          "انتهى المجلس بمناظرة فقهية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشد الإمام أبيات «باتوا على قلل الأجبال»، فبكى المتوكل حتى بلّت دموعه لحيته وبكى الحاضرون.",
        "difficulty": "medium",
        "subcategory": "مواقفه مع المتوكل",
        "tags": [
          "الإمام الهادي",
          "القصيدة"
        ],
        "source": "الإرشاد، ج2، باب طرف من أخبار أبي الحسن ومناقبه، ص313-314",
        "external_id": "HAD-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي سنة هجرية توفي الإمام الهادي (ع)؟",
        "options": [
          "254 هـ",
          "220 هـ",
          "260 هـ",
          "203 هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توفي الإمام الهادي في سامراء في رجب سنة أربع وخمسين ومئتين.",
        "difficulty": "medium",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الهادي",
          "الوفاة"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام علي بن محمد ووفاته، ص297",
        "external_id": "HAD-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أين دُفن الإمام علي الهادي (ع)؟",
        "options": [
          "في داره بسامراء",
          "في البقيع بالمدينة",
          "في الكاظمية ببغداد",
          "في طوس"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دُفن الإمام في الدار التي كان يسكنها في سامراء.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الهادي",
          "المرقد"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام علي بن محمد ووفاته، ص297؛ تاريخ اليعقوبي، ج2، خبر سنة 254هـ، ص503",
        "external_id": "HAD-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي ابن للإمام الهادي دُفن معه لاحقًا في الدار نفسها؟",
        "options": [
          "الإمام الحسن العسكري (ع)",
          "محمد بن علي",
          "الحسين بن علي",
          "جعفر بن علي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صار الموضع مرقد الإمامين العسكريين بعد دفن ابنه الإمام الحسن العسكري معه.",
        "difficulty": "easy",
        "subcategory": "الاستشهاد والمرقد",
        "tags": [
          "الإمام الهادي",
          "الإمام العسكري"
        ],
        "source": "إعلام الورى بأعلام الهدى، ج2، باب الإمام الحسن العسكري ووفاته، ص131-132",
        "external_id": "HAD-024",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-ahl-15",
    "user_id": "system",
    "title": "سيرة الإمام الحسن العسكري (ع)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "ASK-001",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "في أي مدينة وُلد الإمام الحسن العسكري (ع) بحسب الشيخ المفيد؟",
        "options": [
          "المدينة المنورة",
          "سامراء",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "question_type": "multi",
        "explanation": "يذكر الشيخ المفيد أن مولد الإمام الحسن العسكري (ع) كان في المدينة.",
        "tags": [
          "الإمام العسكري",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-001",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-002",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "medium",
        "question_text": "في أي شهر كانت ولادة الإمام الحسن العسكري (ع) بحسب رواية الإرشاد؟",
        "options": [
          "ربيع الآخر",
          "ربيع الأول",
          "جمادى الآخرة",
          "شعبان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 1,
        "question_type": "multi",
        "explanation": "أثبت الإرشاد ولادته في شهر ربيع الآخر سنة 232هـ.",
        "tags": [
          "الإمام العسكري",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-002",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-003",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "ما السنة الهجرية التي وُلد فيها الإمام الحسن العسكري (ع)؟",
        "options": [
          "232هـ",
          "220هـ",
          "225هـ",
          "238هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 2,
        "question_type": "multi",
        "explanation": "ولد الإمام الحسن العسكري (ع) سنة اثنتين وثلاثين ومئتين للهجرة.",
        "tags": [
          "الإمام العسكري",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-003",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-004",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "ما كنية الإمام الحسن العسكري (ع)؟",
        "options": [
          "أبو محمد",
          "أبو الحسن",
          "أبو جعفر",
          "أبو عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 3,
        "question_type": "multi",
        "explanation": "كنية الإمام الحسن بن علي العسكري (ع) هي أبو محمد.",
        "tags": [
          "الإمام العسكري",
          "الكنية"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-004",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-005",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "easy",
        "question_text": "من والد الإمام الحسن العسكري (ع)؟",
        "options": [
          "الإمام علي الهادي (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "question_type": "multi",
        "explanation": "الإمام العسكري (ع) هو ابن الإمام علي بن محمد الهادي (ع)، الإمام العاشر.",
        "tags": [
          "الإمام العسكري",
          "النسب"
        ],
        "source": "الكافي — الشيخ الكليني، ج1، كتاب الحجة، باب مولد أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-005",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-006",
        "category": "أهل البيت",
        "subcategory": "الولادة والنشأة",
        "difficulty": "medium",
        "question_text": "لماذا اشتهر الإمام الحسن وأبوه الهادي بلقب «العسكريين»؟",
        "options": [
          "لإقامتهما في محلة العسكر بسامراء",
          "لقيادتهما جيشًا في الكوفة",
          "لولادتهما في معسكر حدودي",
          "لانتسابهما إلى قبيلة عسكر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 5,
        "question_type": "multi",
        "explanation": "نُسب الإمامان الهادي والعسكري (ع) إلى «العسكر»، وهي المحلة التي أُسكنا فيها بسامراء.",
        "tags": [
          "الإمام العسكري",
          "سامراء",
          "اللقب"
        ],
        "source": "إعلام الورى بأعلام الهدى — الشيخ الطبرسي، باب الإمام الحسن العسكري (ع)",
        "external_id": "ASK-006",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-007",
        "category": "أهل البيت",
        "subcategory": "الإمامة",
        "difficulty": "easy",
        "question_text": "من الإمام الذي نصّ على إمامة الحسن العسكري (ع) من بعده؟",
        "options": [
          "الإمام علي الهادي (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 6,
        "question_type": "multi",
        "explanation": "روى الكليني نصوصًا صريحة عن الإمام الهادي (ع) في تعيين ابنه أبي محمد للإمامة بعده.",
        "tags": [
          "الإمام العسكري",
          "الإمامة",
          "النص"
        ],
        "source": "الكافي — الشيخ الكليني، ج1، كتاب الحجة، باب الإشارة والنص على أبي محمد (ع)",
        "external_id": "ASK-007",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-008",
        "category": "أهل البيت",
        "subcategory": "الإمامة",
        "difficulty": "medium",
        "question_text": "في أي سنة بدأت إمامة الإمام الحسن العسكري (ع)؟",
        "options": [
          "254هـ",
          "250هـ",
          "255هـ",
          "260هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 7,
        "question_type": "multi",
        "explanation": "بدأت إمامته بعد وفاة أبيه الإمام الهادي (ع) سنة 254هـ.",
        "tags": [
          "الإمام العسكري",
          "الإمامة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب وفاة أبي الحسن علي بن محمد (ع) وإمامة ابنه",
        "external_id": "ASK-008",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-009",
        "category": "أهل البيت",
        "subcategory": "الإمامة",
        "difficulty": "easy",
        "question_text": "كم دامت إمامة الإمام الحسن العسكري (ع) تقريبًا؟",
        "options": [
          "ست سنوات",
          "أربع سنوات",
          "عشر سنوات",
          "عشرون سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "question_type": "multi",
        "explanation": "امتدت إمامته من سنة 254هـ إلى سنة 260هـ، أي نحو ست سنوات.",
        "tags": [
          "الإمام العسكري",
          "الإمامة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-009",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-010",
        "category": "أهل البيت",
        "subcategory": "الرقابة العباسية",
        "difficulty": "easy",
        "question_text": "في أي مدينة قضى الإمام العسكري (ع) مدة إمامته تحت الرقابة العباسية؟",
        "options": [
          "سامراء",
          "المدينة المنورة",
          "الكوفة",
          "قم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "question_type": "multi",
        "explanation": "عاش الإمام العسكري (ع) في سامراء، حيث أحاطت به السلطة العباسية ورجالها بالرقابة.",
        "tags": [
          "الإمام العسكري",
          "سامراء",
          "الرقابة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام الحسن بن علي العسكري (ع)",
        "external_id": "ASK-010",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-011",
        "category": "أهل البيت",
        "subcategory": "الرقابة العباسية",
        "difficulty": "hard",
        "question_text": "عند من كان الإمام العسكري (ع) محبوسًا حين طلب العباسيون التشديد عليه؟",
        "options": [
          "صالح بن وصيف",
          "عبيد الله بن خاقان",
          "أحمد بن طولون",
          "الفتح بن خاقان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 10,
        "question_type": "multi",
        "explanation": "تروي المصادر أن الإمام (ع) حُبس عند صالح بن وصيف، وأن شدة العبادة أثرت في الموكلين به.",
        "tags": [
          "الإمام العسكري",
          "السجن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب طرف من أخبار أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-011",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-012",
        "category": "أهل البيت",
        "subcategory": "العبادة",
        "difficulty": "medium",
        "question_text": "ماذا حدث للرجلين الشديدين اللذين وُكّلا بالإمام في حبس صالح بن وصيف؟",
        "options": [
          "صارا من أهل العبادة والصلاة",
          "نقلاه سرًا إلى المدينة",
          "أطلقاه بلا أمر السلطان",
          "كتبا كتابًا في الأنساب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 11,
        "question_type": "multi",
        "explanation": "لما لازما الإمام في الحبس تأثرا بعبادته، فصارا كثيري الصلاة والعبادة.",
        "tags": [
          "الإمام العسكري",
          "العبادة",
          "السجن"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب طرف من أخبار أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-012",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-013",
        "category": "أهل البيت",
        "subcategory": "الوكلاء",
        "difficulty": "medium",
        "question_text": "من الوكيل الذي خدم الإمامين الهادي والعسكري ثم صار أول نواب المهدي (عج)؟",
        "options": [
          "عثمان بن سعيد العمري",
          "محمد بن عثمان العمري",
          "الحسين بن روح",
          "علي بن محمد السمري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 12,
        "question_type": "multi",
        "explanation": "وثّق الإمام العسكري (ع) عثمان بن سعيد، وكان وكيلًا له ولأبيه ثم صار أول النواب الخاصين للمهدي (عج).",
        "tags": [
          "الإمام العسكري",
          "عثمان بن سعيد",
          "الوكلاء"
        ],
        "source": "الكافي — الشيخ الكليني، ج1، كتاب الحجة، باب في تسمية من رآه (عج)؛ وباب مولد الصاحب (عج)",
        "external_id": "ASK-013",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-014",
        "category": "أهل البيت",
        "subcategory": "الوكلاء",
        "difficulty": "hard",
        "question_text": "بأي وسيلة كان عثمان بن سعيد يخفي الأموال المنقولة إلى الإمام؟",
        "options": [
          "في أوعية السمن",
          "داخل كتب الفقه",
          "في أكياس الحبوب",
          "تحت سروج الخيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 13,
        "question_type": "multi",
        "explanation": "عُرف عثمان بن سعيد بالسمّان لأنه كان يجعل الأموال في أوعية السمن تمويهًا على رقابة السلطة.",
        "tags": [
          "الإمام العسكري",
          "عثمان بن سعيد",
          "السمان"
        ],
        "source": "بحار الأنوار — العلامة المجلسي، ج51، باب أحوال السفراء الذين كانوا في الغيبة الصغرى",
        "external_id": "ASK-014",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-015",
        "category": "أهل البيت",
        "subcategory": "التواصل مع الشيعة",
        "difficulty": "hard",
        "question_text": "من القمي الذي خاطبه الإمام العسكري (ع) في روايات الوكالة والمراسلات؟",
        "options": [
          "أحمد بن إسحاق",
          "زكريا بن آدم",
          "علي بن بابويه",
          "سعد بن عبد الله"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 14,
        "question_type": "multi",
        "explanation": "كان أحمد بن إسحاق القمي من خواص الإمام العسكري (ع)، ووردت مخاطباته له في شؤون الإمامة والوكلاء.",
        "tags": [
          "الإمام العسكري",
          "أحمد بن إسحاق",
          "قم"
        ],
        "source": "الكافي — الشيخ الكليني، ج1، كتاب الحجة، باب الإشارة والنص على أبي محمد (ع)، وباب مولد الصاحب (عج)",
        "external_id": "ASK-015",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-016",
        "category": "أهل البيت",
        "subcategory": "التمهيد للغيبة",
        "difficulty": "medium",
        "question_text": "ما اسم عمة الإمام العسكري (ع) التي روت خبر ولادة الإمام المهدي (عج)؟",
        "options": [
          "حكيمة بنت محمد الجواد",
          "فاطمة بنت موسى الكاظم",
          "عليّة بنت موسى الكاظم",
          "أمامة بنت علي الهادي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 15,
        "question_type": "multi",
        "explanation": "روت السيدة حكيمة بنت الإمام الجواد (ع)، عمة الإمام العسكري، تفاصيل ولادة الإمام المهدي (عج).",
        "tags": [
          "الإمام العسكري",
          "حكيمة",
          "الإمام المهدي"
        ],
        "source": "بحار الأنوار — العلامة المجلسي، ج51، باب ولادته (عج)؛ دلائل الإمامة — الطبري الإمامي، باب ولادة صاحب الزمان",
        "external_id": "ASK-016",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-017",
        "category": "أهل البيت",
        "subcategory": "التمهيد للغيبة",
        "difficulty": "medium",
        "question_text": "لماذا حرص الإمام العسكري (ع) على إخفاء ولادة ابنه عن السلطة؟",
        "options": [
          "خوفًا من طلب العباسيين له",
          "لأن الأسرة كانت في سفر",
          "انتظارًا لموافقة قاضي سامراء",
          "لعدم اكتمال بناء الدار"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 16,
        "question_type": "multi",
        "explanation": "أُخفي أمر الولادة عن عامة الناس بسبب ترقب السلطة العباسية للمولود الموعود وسعيها للوصول إليه.",
        "tags": [
          "الإمام العسكري",
          "الإمام المهدي",
          "الولادة"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)؛ بحار الأنوار، ج51، باب ولادته (عج)",
        "external_id": "ASK-017",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-018",
        "category": "أهل البيت",
        "subcategory": "الاستشهاد",
        "difficulty": "easy",
        "question_text": "في أي سنة هجرية استشهد الإمام الحسن العسكري (ع)؟",
        "options": [
          "260هـ",
          "254هـ",
          "255هـ",
          "265هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 17,
        "question_type": "multi",
        "explanation": "توفي الإمام العسكري (ع) في سامراء سنة 260هـ، وبوفاته بدأت إمامة ابنه المهدي (عج).",
        "tags": [
          "الإمام العسكري",
          "الاستشهاد"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب وفاة أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-018",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-019",
        "category": "أهل البيت",
        "subcategory": "الاستشهاد",
        "difficulty": "medium",
        "question_text": "كم كان عمر الإمام العسكري (ع) عند وفاته بحسب الإرشاد؟",
        "options": [
          "ثمانٍ وعشرون سنة",
          "خمس وعشرون سنة",
          "اثنتان وثلاثون سنة",
          "أربعون سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "question_type": "multi",
        "explanation": "يذكر المفيد أن عمر الإمام العسكري (ع) عند وفاته كان ثمانيًا وعشرين سنة.",
        "tags": [
          "الإمام العسكري",
          "العمر",
          "الاستشهاد"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب وفاة أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-019",
        "is_verified": true,
        "version": 1,
        "image_url": null
      },
      {
        "id": "ASK-020",
        "category": "أهل البيت",
        "subcategory": "الدفن",
        "difficulty": "easy",
        "question_text": "أين دُفن الإمام الحسن العسكري (ع)؟",
        "options": [
          "في داره بسامراء إلى جوار أبيه",
          "في مقبرة البقيع",
          "في الكاظمية",
          "في النجف الأشرف"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 19,
        "question_type": "multi",
        "explanation": "دُفن الإمام العسكري (ع) في الدار التي دُفن فيها أبوه الإمام الهادي (ع) بسامراء.",
        "tags": [
          "الإمام العسكري",
          "الدفن",
          "سامراء"
        ],
        "source": "الإرشاد — الشيخ المفيد، ج2، باب وفاة أبي محمد الحسن بن علي (ع)",
        "external_id": "ASK-020",
        "is_verified": true,
        "version": 1,
        "image_url": null
      }
    ]
  },
  {
    "id": "lib-ahl-16",
    "user_id": "system",
    "title": "سيرة الإمام محمد المهدي (عج)",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "سلسلة مسابقات أهل البيت (ع)",
    "language": "ar",
    "quiz_difficulty": "standard",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "ما التاريخ المشهور عند الإمامية لولادة الإمام المهدي (عج)؟",
        "options": [
          "15 شعبان سنة 255هـ",
          "15 شعبان سنة 254هـ",
          "17 ربيع الأول سنة 255هـ",
          "15 رمضان سنة 256هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يورد الشيخ المفيد أن ولادته كانت ليلة النصف من شعبان سنة 255هـ.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "الولادة",
          "شعبان"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)",
        "external_id": "imam-mahdi-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي مدينة وُلد الإمام المهدي (عج)؟",
        "options": [
          "سامراء",
          "المدينة المنورة",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تذكر روايات مولده أنه وُلد في دار أبيه بسامراء.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "الولادة",
          "سامراء"
        ],
        "source": "بحار الأنوار، ج51، باب ولادته وأحوال أمه (عج)",
        "external_id": "imam-mahdi-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من والد الإمام محمد المهدي (عج)؟",
        "options": [
          "الإمام الحسن العسكري (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإمام محمد المهدي هو ابن الإمام الحسن بن علي العسكري (ع).",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "الإمام العسكري",
          "النسب"
        ],
        "source": "الكافي، ج1، كتاب الحجة، باب مولد الصاحب (ع)",
        "external_id": "imam-mahdi-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الاسم الأشهر لأم الإمام المهدي (عج) في روايات ولادته؟",
        "options": [
          "نرجس",
          "حكيمة",
          "حديث",
          "سمانة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اشتهرت أم الإمام المهدي في روايات الولادة باسم نرجس، مع ورود أسماء أخرى لها.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "نرجس",
          "الأسرة"
        ],
        "source": "بحار الأنوار، ج51، باب ولادته وأحوال أمه (عج)",
        "external_id": "imam-mahdi-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من العلوية التي روت حضورها ولادة الإمام المهدي (عج)؟",
        "options": [
          "حكيمة بنت الإمام الجواد (ع)",
          "فاطمة بنت الإمام الكاظم (ع)",
          "خديجة بنت الإمام الصادق (ع)",
          "أمامة بنت الإمام الرضا (ع)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استدعى الإمام العسكري عمته حكيمة، فحضرت ولادة نرجس للإمام المهدي.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "حكيمة",
          "الولادة"
        ],
        "source": "بحار الأنوار، ج51، باب ولادته وأحوال أمه (عج)",
        "external_id": "imam-mahdi-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما كنية الإمام المهدي (عج) المذكورة في كتب السيرة الإمامية؟",
        "options": [
          "أبو القاسم",
          "أبو محمد",
          "أبو الحسن",
          "أبو جعفر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يذكر الشيخ المفيد أن كنيته ككنية رسول الله (ص): أبو القاسم.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "الكنية"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)",
        "external_id": "imam-mahdi-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي لقب من الآتي اشتهر به الإمام محمد المهدي (عج)؟",
        "options": [
          "القائم",
          "السجاد",
          "الكاظم",
          "الجواد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تسميه النصوص الإمامية القائم والمهدي والحجة وصاحب الزمان.",
        "difficulty": "easy",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "القائم",
          "الألقاب"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)",
        "external_id": "imam-mahdi-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا أحاط الإمام العسكري (ع) ولادة ابنه بالكتمان؟",
        "options": [
          "خوفًا من طلب السلطة العباسية له",
          "لأنه كان مسافرًا خارج سامراء",
          "لأن الأسرة انتقلت إلى المدينة",
          "لانقطاع الاتصال بأصحابه تمامًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أُخفيت ولادته لشدة طلب السلطان له ومراقبته بيت الإمام العسكري.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "العباسيون",
          "الكتمان"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)",
        "external_id": "imam-mahdi-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا فعل الإمام العسكري (ع) لإثبات ولادة ابنه لبعض ثقاته؟",
        "options": [
          "أراه لعدد من أصحابه الخواص",
          "أعلنه على منبر بغداد",
          "أرسله إلى المدينة علنًا",
          "سجله لدى ديوان الخلافة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عرض الإمام العسكري ابنه على جماعة مختارة من أصحابه وعرّفهم إمامهم بعده.",
        "difficulty": "medium",
        "subcategory": "الولادة والنشأة",
        "tags": [
          "الإمام المهدي",
          "الإمام العسكري",
          "الإمامة"
        ],
        "source": "بحار الأنوار، ج52، باب من رآه (عج)",
        "external_id": "imam-mahdi-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم كان عمر الإمام المهدي (عج) تقريبًا عند بدء إمامته سنة 260هـ؟",
        "options": [
          "خمس سنوات",
          "عشر سنوات",
          "خمس عشرة سنة",
          "عشرون سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وُلد سنة 255هـ وبدأت إمامته بعد أبيه سنة 260هـ، فكان عمره نحو خمس سنوات.",
        "difficulty": "medium",
        "subcategory": "بدء الإمامة",
        "tags": [
          "الإمام المهدي",
          "الإمامة",
          "العمر"
        ],
        "source": "الإرشاد، ج2، باب ذكر الإمام القائم بعد أبي محمد (ع)",
        "external_id": "imam-mahdi-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي سنة بدأت الغيبة الصغرى؟",
        "options": [
          "260هـ",
          "255هـ",
          "275هـ",
          "329هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدأت الغيبة الصغرى بعد رحيل الإمام الحسن العسكري سنة 260هـ وتولي ابنه الإمامة.",
        "difficulty": "easy",
        "subcategory": "الغيبة الصغرى",
        "tags": [
          "الإمام المهدي",
          "الغيبة الصغرى",
          "260هـ"
        ],
        "source": "بحار الأنوار، ج51، أبواب أحوال الإمام الحجة وغيبته",
        "external_id": "imam-mahdi-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كم نائبًا خاصًا تعاقب في الغيبة الصغرى؟",
        "options": [
          "أربعة",
          "ثلاثة",
          "خمسة",
          "سبعة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعاقب في السفارة الخاصة عثمان، ثم محمد، ثم الحسين بن روح، ثم علي السمري.",
        "difficulty": "easy",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "النواب الأربعة",
          "السفارة"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كان أول النواب الأربعة؟",
        "options": [
          "عثمان بن سعيد العمري",
          "محمد بن عثمان العمري",
          "الحسين بن روح النوبختي",
          "علي بن محمد السمري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان عثمان بن سعيد أول سفير للإمام المهدي في الغيبة الصغرى.",
        "difficulty": "easy",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "عثمان بن سعيد",
          "السفارة"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي حرفة اتخذها عثمان بن سعيد ستارًا لخدمته ونقل الأموال؟",
        "options": [
          "بيع السمن",
          "نسخ الكتب",
          "صياغة الفضة",
          "تجارة الورق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عُرف عثمان بالسمّان، وكان يجعل الأموال في أوعية السمن ويوصلها سترًا للأمر.",
        "difficulty": "hard",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "عثمان بن سعيد",
          "السمان"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تولى النيابة الخاصة بعد عثمان بن سعيد؟",
        "options": [
          "ابنه محمد بن عثمان",
          "الحسين بن روح",
          "علي بن محمد السمري",
          "أحمد بن إسحاق القمي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تولى محمد بن عثمان العمري السفارة بعد وفاة أبيه عثمان بن سعيد.",
        "difficulty": "easy",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "محمد بن عثمان",
          "السفارة"
        ],
        "source": "الاحتجاج، ج2، احتجاجات الإمام المهدي وتوقيعاته",
        "external_id": "imam-mahdi-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كان ثالث النواب الأربعة؟",
        "options": [
          "الحسين بن روح النوبختي",
          "عثمان بن سعيد العمري",
          "محمد بن عثمان العمري",
          "علي بن محمد السمري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص محمد بن عثمان على الحسين بن روح، فكان السفير الثالث.",
        "difficulty": "medium",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "الحسين بن روح",
          "السفارة"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من كان آخر النواب الخاصين في الغيبة الصغرى؟",
        "options": [
          "علي بن محمد السمري",
          "الحسين بن روح النوبختي",
          "محمد بن عثمان العمري",
          "عثمان بن سعيد العمري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان علي بن محمد السمري رابع السفراء وآخرهم.",
        "difficulty": "easy",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "علي السمري",
          "السفارة"
        ],
        "source": "الاحتجاج، ج2، احتجاجات الإمام المهدي وتوقيعاته",
        "external_id": "imam-mahdi-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المهمة الأساسية للنواب الخاصين؟",
        "options": [
          "إيصال التوقيعات وشؤون الشيعة بين الإمام وأتباعه",
          "تولي منصب الخلافة العباسية",
          "قيادة جيش ظاهر في سامراء",
          "تأسيس مذهب فقهي جديد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان السفراء وسطاء موثوقين في المكاتبات والتوقيعات والأموال والمسائل.",
        "difficulty": "medium",
        "subcategory": "الغيبة الصغرى",
        "tags": [
          "الإمام المهدي",
          "النواب الأربعة",
          "التوقيعات"
        ],
        "source": "الاحتجاج، ج2، احتجاجات الإمام المهدي وتوقيعاته",
        "external_id": "imam-mahdi-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما اسم الرسائل الصادرة عن الإمام المهدي (عج) إلى وكلائه وشيعته؟",
        "options": [
          "التوقيعات",
          "الصحائف",
          "المقامات",
          "المعلقات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تسمّي المصادر كتب الإمام وأجوبته الخارجة إلى نوابه وشيعته «التوقيعات».",
        "difficulty": "medium",
        "subcategory": "الغيبة الصغرى",
        "tags": [
          "الإمام المهدي",
          "التوقيعات",
          "المكاتبات"
        ],
        "source": "الاحتجاج، ج2، احتجاجات الإمام المهدي وتوقيعاته",
        "external_id": "imam-mahdi-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الترتيب الصحيح للنواب الأربعة؟",
        "options": [
          "عثمان، محمد، الحسين بن روح، السمري",
          "محمد، عثمان، السمري، الحسين بن روح",
          "الحسين بن روح، عثمان، محمد، السمري",
          "عثمان، الحسين بن روح، محمد، السمري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الترتيب هو عثمان بن سعيد، محمد بن عثمان، الحسين بن روح، ثم علي السمري.",
        "difficulty": "hard",
        "subcategory": "النواب الأربعة",
        "tags": [
          "الإمام المهدي",
          "النواب الأربعة",
          "الترتيب"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا أمر التوقيع الأخير علي بن محمد السمري بشأن خليفته؟",
        "options": [
          "ألا يوصي إلى أحد بعده",
          "أن يعيّن ابنه سفيرًا",
          "أن يعيد السفارة للحسين بن روح",
          "أن ينقل السفارة إلى سامراء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أخبر التوقيع السمري بقرب وفاته وأمره ألا يعهد إلى أحد؛ فقد وقعت الغيبة التامة.",
        "difficulty": "hard",
        "subcategory": "بداية الغيبة الكبرى",
        "tags": [
          "الإمام المهدي",
          "علي السمري",
          "الغيبة الكبرى"
        ],
        "source": "الاحتجاج، ج2، التوقيع إلى علي بن محمد السمري",
        "external_id": "imam-mahdi-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي سنة انتهت الغيبة الصغرى وبدأت الغيبة الكبرى؟",
        "options": [
          "329هـ",
          "260هـ",
          "305هـ",
          "350هـ"
        ],
        "correct_index": 0,
        "time_limit_seconds": 15,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بوفاة السفير الرابع علي السمري سنة 329هـ انتهت السفارة الخاصة وبدأت الغيبة الكبرى.",
        "difficulty": "easy",
        "subcategory": "بداية الغيبة الكبرى",
        "tags": [
          "الإمام المهدي",
          "الغيبة الكبرى",
          "329هـ"
        ],
        "source": "بحار الأنوار، ج51، باب أحوال السفراء في الغيبة الصغرى",
        "external_id": "imam-mahdi-022",
        "is_verified": true,
        "version": 1
      }
    ]
  }
];
