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
// the reviewed ahl_albayt_quizzes/*/*_game.json files, and
// general_specialized_quizzes/*/*.json.
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
          "15 شعبان",
          "27 رجب",
          "17 ربيع الأول"
        ],
        "correct_index": 3,
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
          "القدس",
          "مكة"
        ],
        "correct_index": 3,
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
          "عبد الله بن عبد المطلب",
          "حمزة",
          "عبد المطلب"
        ],
        "correct_index": 1,
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
          "خمس وثلاثون سنة",
          "ثلاثون سنة",
          "خمس وعشرون سنة"
        ],
        "correct_index": 3,
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
          "أبو طالب",
          "العباس",
          "حمزة"
        ],
        "correct_index": 1,
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
          "خمس وأربعون سنة",
          "أربعون سنة"
        ],
        "correct_index": 3,
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
          "27 رجب",
          "15 شعبان",
          "13 رجب"
        ],
        "correct_index": 1,
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
          "خديجة بنت خويلد",
          "أم سلمة",
          "فاطمة بنت أسد",
          "أسماء بنت عميس"
        ],
        "correct_index": 0,
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
          "علي بن أبي طالب",
          "زيد بن حارثة",
          "جعفر بن أبي طالب"
        ],
        "correct_index": 1,
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
          "دار أبي طالب",
          "المسجد الحرام",
          "جبل الصفا"
        ],
        "correct_index": 1,
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
          "منع البيع والزواج والمخالطة",
          "منع السفر إلى الشام",
          "منع الحج وحده",
          "منع دخول المسجد فقط"
        ],
        "correct_index": 0,
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
          "السيدة خديجة",
          "أبو سلمة"
        ],
        "correct_index": 2,
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
          "علي بن أبي طالب",
          "سلمان"
        ],
        "correct_index": 2,
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
          "بناء مسجد قباء",
          "حفر خندق",
          "بناء دار الإمارة",
          "بناء السوق"
        ],
        "correct_index": 0,
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
          "بدر",
          "خيبر"
        ],
        "correct_index": 2,
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
          "حفر الخندق",
          "أبراج خشبية",
          "متاريس بحرية",
          "سور حجري"
        ],
        "correct_index": 0,
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
          "علي بن أبي طالب",
          "سعد بن أبي وقاص",
          "خالد بن الوليد",
          "الزبير بن العوام"
        ],
        "correct_index": 0,
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
          "علي وفاطمة والحسن والحسين",
          "زوجاته وبناته جميعًا",
          "أبو ذر وسلمان والمقداد وعمار"
        ],
        "correct_index": 1,
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
          "أنه مولى من كان النبي مولاه",
          "إرساله إلى خيبر"
        ],
        "correct_index": 2,
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
          "علي بن أبي طالب",
          "أبو ذر",
          "سلمان",
          "العباس وحده"
        ],
        "correct_index": 0,
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
          "العاشر",
          "الثالث عشر",
          "الخامس عشر",
          "السابع والعشرون"
        ],
        "correct_index": 1,
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
          "أم البنين",
          "فاطمة الزهراء",
          "فاطمة بنت أسد",
          "صفية بنت عبد المطلب"
        ],
        "correct_index": 2,
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
          "أول مؤذن في الإسلام",
          "أول مهاجر إلى الحبشة",
          "أول خطيب في المدينة",
          "أول ذكر دعاه النبي فأجاب"
        ],
        "correct_index": 3,
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
          "ثلاث وعشرون سنة",
          "عشر سنوات",
          "خمس عشرة سنة",
          "ثلاث عشرة سنة"
        ],
        "correct_index": 3,
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
          "ثماني سنوات",
          "عشر سنوات",
          "ثلاث عشرة سنة",
          "خمس سنوات"
        ],
        "correct_index": 1,
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
          "ثلاثًا وستين سنة",
          "ثلاثين سنة",
          "أربعين سنة",
          "ثلاثًا وثلاثين سنة"
        ],
        "correct_index": 3,
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
          "فتح باب خيبر",
          "إطعام المسكين عند الإفطار",
          "المبيت في فراش النبي",
          "إيتاء الزكاة حال الركوع"
        ],
        "correct_index": 3,
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
          "حمزة بن عبد المطلب",
          "الإمام علي (ع)",
          "جعفر بن أبي طالب",
          "العباس بن عبد المطلب"
        ],
        "correct_index": 1,
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
          "أنا مدينة العلم وعلي بابها",
          "علي مني وأنا من علي",
          "من كنت مولاه فعلي مولاه",
          "لا فتى إلا علي"
        ],
        "correct_index": 2,
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
          "إسماعيل من إبراهيم",
          "يوشع من موسى",
          "هارون من موسى",
          "يحيى من زكريا"
        ],
        "correct_index": 2,
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
          "خمسًا وعشرين سنة",
          "ثلاثين سنة",
          "خمس سنوات وستة أشهر",
          "ثلاثًا وثلاثين سنة"
        ],
        "correct_index": 1,
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
          "أربع وعشرون سنة وستة أشهر",
          "أربع سنوات",
          "عشر سنوات",
          "خمس سنوات وستة أشهر"
        ],
        "correct_index": 3,
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
          "المسجد الحرام",
          "مسجد الكوفة",
          "المسجد النبوي",
          "مسجد قباء"
        ],
        "correct_index": 1,
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
          "الأشعث بن قيس",
          "عمرو بن العاص",
          "معاوية بن أبي سفيان",
          "عبد الرحمن بن ملجم المرادي"
        ],
        "correct_index": 3,
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
          "ليلة الحادي والعشرين من رمضان",
          "ليلة السابع عشر من رمضان",
          "ليلة التاسع عشر من رمضان",
          "ليلة الثالث والعشرين من رمضان"
        ],
        "correct_index": 2,
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
          "كان مكسورًا",
          "كان مسمومًا",
          "كان ذا نصلين",
          "كان من غنائم بدر"
        ],
        "correct_index": 1,
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
          "21 رمضان سنة 41هـ",
          "19 رمضان سنة 40هـ",
          "21 رمضان سنة 40هـ",
          "19 رمضان سنة 39هـ"
        ],
        "correct_index": 2,
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
          "مقبرة المعلاة في مكة",
          "البقيع في المدينة",
          "الغري في النجف",
          "وادي السلام في البصرة"
        ],
        "correct_index": 2,
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
          "انتظار بناء مدينة النجف",
          "لمنع السيول من الوصول إليه",
          "خشية اعتداء الأمويين عليه",
          "لوقوع خلاف على موضع الدفن"
        ],
        "correct_index": 2,
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
          "الكوفة",
          "المدينة المنورة",
          "الطائف",
          "مكة المكرمة"
        ],
        "correct_index": 3,
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
          "15 شعبان",
          "13 رجب",
          "20 جمادى الآخرة",
          "10 ربيع الأول"
        ],
        "correct_index": 2,
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
          "أم المؤمنين",
          "أم البنين",
          "أم أبيها",
          "أم عبد الله"
        ],
        "correct_index": 2,
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
          "العباس بن عبد المطلب",
          "جعفر بن أبي طالب",
          "زيد بن حارثة",
          "الإمام علي بن أبي طالب (ع)"
        ],
        "correct_index": 3,
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
          "سيفه ذو الفقار",
          "درع الإمام علي (ع)",
          "ناقته",
          "خاتمه"
        ],
        "correct_index": 1,
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
          "محمد وإبراهيم",
          "الحسن والحسين (ع)",
          "جعفر وعقيل",
          "القاسم وعبد الله"
        ],
        "correct_index": 1,
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
          "خديجة وصفية",
          "رقية وسكينة",
          "فاطمة وحكيمة",
          "زينب وأم كلثوم"
        ],
        "correct_index": 3,
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
          "جعله كله على علي",
          "لعلي عمل البيت ولفاطمة ما خارجه",
          "لفاطمة عمل البيت ولعلي ما خارجه",
          "جعله كله على فاطمة"
        ],
        "correct_index": 2,
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
          "زيارة عاشوراء",
          "دعاء كميل",
          "صلاة جعفر",
          "تسبيح الزهراء"
        ],
        "correct_index": 3,
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
          "33 مرة «سبحان الله»",
          "34 مرة «الحمد لله»",
          "34 مرة «الله أكبر»",
          "33 مرة «لا إله إلا الله»"
        ],
        "correct_index": 2,
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
          "صفية بنت عبد المطلب",
          "أم سلمة",
          "زينب بنت جحش",
          "فاطمة الزهراء (ع)"
        ],
        "correct_index": 3,
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
          "أبو بكر وعمر وعثمان وعلي",
          "العباس وجعفر وعقيل وزيد",
          "علي وفاطمة والحسن والحسين",
          "حمزة والعباس وجعفر وعقيل"
        ],
        "correct_index": 2,
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
          "عمته",
          "خادمته",
          "أخته",
          "بضعة منه"
        ],
        "correct_index": 3,
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
          "العقيلة",
          "البتول",
          "الحوراء",
          "الكريمة"
        ],
        "correct_index": 1,
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
          "خيبر",
          "فدك",
          "قباء",
          "العقيق"
        ],
        "correct_index": 1,
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
          "بأشعار الجاهلية",
          "بآيات من القرآن",
          "بأعراف الروم",
          "برسائل ملوك اليمن"
        ],
        "correct_index": 1,
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
          "سلمان الفارسي",
          "العباس بن عبد المطلب",
          "الإمام علي (ع)",
          "عمار بن ياسر"
        ],
        "correct_index": 2,
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
          "رجب",
          "شعبان",
          "رمضان",
          "محرم"
        ],
        "correct_index": 2,
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
          "أبو عبد الله",
          "أبو محمد",
          "أبو الحسن",
          "أبو جعفر"
        ],
        "correct_index": 1,
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
          "الإمام الحسين (ع)",
          "الإمام الحسن (ع)",
          "محمد بن الحنفية",
          "عبد الله بن عباس"
        ],
        "correct_index": 1,
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
          "قيس بن سعد",
          "عبد الله بن العباس",
          "حجر بن عدي",
          "سليمان بن صرد"
        ],
        "correct_index": 1,
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
          "اليمن والحجاز",
          "المدينة ومكة",
          "المدائن وواسط",
          "الكوفة والبصرة"
        ],
        "correct_index": 3,
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
          "حجر بن عدي",
          "قيس بن سعد",
          "عدي بن حاتم",
          "عبيد الله بن العباس"
        ],
        "correct_index": 3,
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
          "عشرون ألفًا",
          "ثمانية آلاف",
          "اثنا عشر ألفًا",
          "أربعون ألفًا"
        ],
        "correct_index": 2,
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
          "النخيلة",
          "ساباط المدائن",
          "صفين",
          "النهروان"
        ],
        "correct_index": 1,
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
          "بسر بن أرطاة",
          "الجراح بن سنان",
          "الضحاك بن قيس",
          "عمرو بن العاص"
        ],
        "correct_index": 1,
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
          "زياد بن أبيه",
          "المغيرة بن شعبة",
          "سعد بن مسعود الثقفي",
          "النعمان بن بشير"
        ],
        "correct_index": 2,
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
          "نقل العاصمة إلى المدينة",
          "زيادة خراج العراق",
          "توسيع حدود الدولة",
          "حقن دماء المسلمين"
        ],
        "correct_index": 3,
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
          "أن يجعلها شورى أموية",
          "أن يعهد بها ليزيد",
          "ألا يعهد بالخلافة إلى أحد",
          "أن يسلمها لعمرو بن العاص"
        ],
        "correct_index": 2,
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
          "البصرة",
          "الكوفة",
          "دمشق",
          "المدينة المنورة"
        ],
        "correct_index": 3,
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
          "ميسون بنت بحدل",
          "هند بنت عتبة",
          "جعدة بنت الأشعث",
          "أم الحكم بنت أبي سفيان"
        ],
        "correct_index": 2,
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
          "سبعين يومًا",
          "عشرة أيام",
          "عشرين يومًا",
          "أربعين يومًا"
        ],
        "correct_index": 3,
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
          "أسماء بنت عميس",
          "أم البنين",
          "فاطمة الزهراء (ع)",
          "أم سلمة"
        ],
        "correct_index": 2,
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
          "17 ربيع الأول سنة 4 هـ",
          "15 رمضان سنة 3 هـ",
          "10 محرم سنة 5 هـ",
          "3 شعبان سنة 4 هـ"
        ],
        "correct_index": 3,
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
          "أبو جعفر",
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله"
        ],
        "correct_index": 3,
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
          "كاتبا الوحي",
          "أمينا وحي السماء",
          "صاحبا الهجرتين",
          "سيدا شباب أهل الجنة"
        ],
        "correct_index": 3,
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
          "آية الدين",
          "آية التطهير",
          "آية النجوى",
          "آية الكلالة"
        ],
        "correct_index": 1,
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
          "الإمام السجاد (ع)",
          "الإمام علي (ع)",
          "الإمام الحسن (ع)",
          "الإمام الباقر (ع)"
        ],
        "correct_index": 2,
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
          "نحو خمس سنين",
          "نحو عشر سنين",
          "نحو عشرين سنة",
          "أقل من سنة"
        ],
        "correct_index": 1,
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
          "لزيارة اليمن",
          "لطلب ولاية مكة",
          "للتجارة في الشام",
          "لرفضه البيعة ليزيد"
        ],
        "correct_index": 3,
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
          "الكوفة",
          "مكة المكرمة",
          "البصرة",
          "دمشق"
        ],
        "correct_index": 1,
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
          "النعمان بن بشير",
          "عبيد الله بن زياد",
          "عمر بن سعد",
          "الوليد بن عتبة"
        ],
        "correct_index": 1,
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
          "1 محرم سنة 61 هـ",
          "10 ذي الحجة سنة 60 هـ",
          "8 ذي الحجة سنة 60 هـ",
          "15 شعبان سنة 60 هـ"
        ],
        "correct_index": 2,
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
          "عمر بن سعد",
          "الحر بن يزيد الرياحي",
          "شمر بن ذي الجوشن",
          "حصين بن نمير"
        ],
        "correct_index": 1,
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
          "أخذ سلاحهم",
          "منع عنهم الماء",
          "أعادهم إلى الكوفة",
          "أمر بسقيهم وخيلهم"
        ],
        "correct_index": 3,
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
          "البصرة",
          "النجف",
          "المدائن",
          "كربلاء"
        ],
        "correct_index": 3,
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
          "8 ذي الحجة سنة 61 هـ",
          "1 محرم سنة 60 هـ",
          "2 محرم سنة 61 هـ",
          "10 صفر سنة 61 هـ"
        ],
        "correct_index": 2,
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
          "تأجيل القتال شهرًا",
          "السماح له بدخول الكوفة",
          "إمهاله ليلة للصلاة والدعاء",
          "إرسال وفد إلى المدينة"
        ],
        "correct_index": 2,
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
          "القاسم بن الحسن",
          "علي الأكبر (ع)",
          "أبو الفضل العباس (ع)",
          "حبيب بن مظاهر"
        ],
        "correct_index": 2,
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
          "9 محرم سنة 60 هـ",
          "10 محرم سنة 61 هـ",
          "20 صفر سنة 61 هـ",
          "21 رمضان سنة 61 هـ"
        ],
        "correct_index": 1,
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
          "نحو 47 سنة",
          "نحو 57 سنة",
          "نحو 67 سنة",
          "نحو 37 سنة"
        ],
        "correct_index": 1,
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
          "بيت جعفر وأسماء بنت عميس",
          "بيت الإمام علي وفاطمة (ع)",
          "بيت العباس وأم الفضل",
          "بيت عقيل وفاطمة بنت عتبة"
        ],
        "correct_index": 1,
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
          "جعفر وعقيل",
          "محمد بن الحنفية والعباس",
          "الحسن والحسين (ع)",
          "القاسم وعبد الله"
        ],
        "correct_index": 2,
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
          "مسلم بن عقيل",
          "عبد الله بن عباس",
          "محمد بن الحنفية",
          "عبد الله بن جعفر"
        ],
        "correct_index": 3,
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
          "حفيده",
          "أخوه",
          "ابنه",
          "ابن أخيه"
        ],
        "correct_index": 2,
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
          "موسى الكاظم (ع)",
          "محمد الباقر (ع)",
          "جعفر الصادق (ع)",
          "علي بن الحسين (ع)"
        ],
        "correct_index": 3,
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
          "الإمام الحسن (ع)",
          "الإمام الحسين (ع)",
          "الإمام السجاد (ع)",
          "الإمام الباقر (ع)"
        ],
        "correct_index": 1,
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
          "أبو الفضل العباس (ع)",
          "الإمام السجاد (ع)",
          "الإمام الحسين (ع)",
          "حبيب بن مظاهر"
        ],
        "correct_index": 2,
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
          "الرجوع إلى المدينة",
          "مغادرة المخيم",
          "طلب الأمان",
          "الصبر والتقوى"
        ],
        "correct_index": 3,
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
          "مسلم بن عقيل",
          "عبد الله بن جعفر",
          "محمد بن الحنفية",
          "الإمام السجاد (ع)"
        ],
        "correct_index": 3,
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
          "أم البنين",
          "السيدة زينب (ع)",
          "أسماء بنت عميس",
          "أم سلمة"
        ],
        "correct_index": 1,
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
          "حماة العهد",
          "أهل الوفاء والنصرة",
          "أهل الختل والغدر",
          "أنصار الحق"
        ],
        "correct_index": 2,
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
          "أصحاب السفينة",
          "أصحاب الكهف",
          "ناقضة غزلها بعد قوة",
          "أصحاب الجنة"
        ],
        "correct_index": 2,
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
          "إن مع العسر يسرًا",
          "ما رأيت إلا جميلًا",
          "حسبنا الله",
          "الصبر مفتاح الفرج"
        ],
        "correct_index": 1,
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
          "في موسم الحج",
          "في مسجد الكوفة",
          "في المدينة",
          "في مجلسه بالشام"
        ],
        "correct_index": 3,
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
          "والعصر إن الإنسان لفي خسر",
          "إن مع العسر يسرًا",
          "لا إكراه في الدين",
          "ولا يحسبن الذين كفروا أنما نملي لهم"
        ],
        "correct_index": 3,
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
          "أن يحصره في المدينة",
          "أن ينقله لبلد آخر",
          "أن يمحو ذكرهم ولن يقدر",
          "أن يكتبه في السجلات"
        ],
        "correct_index": 2,
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
          "منع نساء الشام من السفر",
          "ستر حرائره وسوق بنات النبي سبايا",
          "تأخير زواج نساء بني أمية",
          "تخصيص عطايا لنساء المدينة"
        ],
        "correct_index": 1,
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
          "طلب منصب إداري",
          "كشف الجريمة والدفاع عن الرسالة",
          "التفاوض التجاري",
          "اعتزال الشأن العام"
        ],
        "correct_index": 1,
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
          "التوجه إلى مصر",
          "الإقامة في دمشق",
          "الرجوع إلى المدينة",
          "الرجوع إلى الكوفة"
        ],
        "correct_index": 2,
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
          "جعفر بن أبي طالب",
          "الإمام الحسن (ع)",
          "عقيل بن أبي طالب",
          "الإمام علي (ع)"
        ],
        "correct_index": 3,
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
          "خاله",
          "ابن أخيه",
          "ابن عمه",
          "أخوه لأبيه"
        ],
        "correct_index": 3,
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
          "محمد وعون وعبد الله",
          "عبد الله وجعفر وعثمان",
          "علي والقاسم وأبو بكر",
          "مسلم وجعفر وعقيل"
        ],
        "correct_index": 1,
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
          "25 سنة",
          "34 سنة",
          "40 سنة",
          "48 سنة"
        ],
        "correct_index": 1,
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
          "إدارة المفاوضات",
          "كتابة الرسائل",
          "قيادة ميمنة الجيش",
          "حمل اللواء"
        ],
        "correct_index": 3,
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
          "سبعون فارسًا",
          "عشرة فرسان",
          "خمسون فارسًا",
          "ثلاثون فارسًا"
        ],
        "correct_index": 3,
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
          "خمسة رجال",
          "أربعون راجلًا",
          "عشرون راجلًا",
          "ستون راجلًا"
        ],
        "correct_index": 2,
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
          "زهير بن القين",
          "حبيب بن مظاهر",
          "نافع بن هلال",
          "الحر الرياحي"
        ],
        "correct_index": 2,
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
          "بعد انتهاء القتال",
          "صباح الثاني من المحرم",
          "ليلة السابع من المحرم",
          "عشية التاسع من المحرم"
        ],
        "correct_index": 3,
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
          "قبلوه ثم عادوا",
          "رفضوه ولعنوا أمانه",
          "طلبوا مهلة للتفكير",
          "اشترطوا خروج العيال"
        ],
        "correct_index": 1,
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
          "العودة إلى المدينة",
          "بدء القتال فورًا",
          "استقبال القوم وسؤالهم عما جاء بهم",
          "إحراق الخيام"
        ],
        "correct_index": 2,
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
          "أنهم قرروا الانسحاب",
          "أنهم يريدون النزول على حكم ابن زياد أو القتال",
          "أنهم طلبوا الماء",
          "أنهم بايعوا الحسين"
        ],
        "correct_index": 1,
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
          "تسليم السلاح",
          "فتح طريق إلى الكوفة",
          "تأخير القتال إلى الغد",
          "إرسال وفد إلى يزيد"
        ],
        "correct_index": 2,
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
          "رايتين يوم القيامة",
          "قصرين في المدينة",
          "جناحين يطير بهما في الجنة",
          "عينين من الجنة"
        ],
        "correct_index": 2,
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
          "عاد إلى المدينة بعد المعركة",
          "آثر وأبلى وفدى أخاه بنفسه",
          "تولى كتابة رسائل الكوفة",
          "قاد ركب السبايا إلى الشام"
        ],
        "correct_index": 1,
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
          "الكوفة",
          "مكة",
          "المدينة",
          "دمشق"
        ],
        "correct_index": 2,
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
          "أبو الحسن الثالث",
          "أبو عبد الله",
          "أبو جعفر",
          "أبو محمد"
        ],
        "correct_index": 3,
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
          "كان في المدينة",
          "كان خارج كربلاء",
          "كان رسولًا إلى الكوفة",
          "كان مريضًا لا يقدر على القتال"
        ],
        "correct_index": 3,
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
          "إرسالهم إلى الكوفة",
          "الإقامة الدائمة في دمشق",
          "أمينًا يصحبهم إلى المدينة",
          "تفريق الركب بين البلدان"
        ],
        "correct_index": 2,
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
          "أبو حمزة الثمالي",
          "جابر بن عبد الله",
          "بشير بن حذلم",
          "سعيد بن المسيب"
        ],
        "correct_index": 2,
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
          "محمد بن الحنفية",
          "علي بن الحسين (ع)",
          "زيد بن علي",
          "عبد الله بن جعفر"
        ],
        "correct_index": 1,
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
          "كتاب والي المدينة",
          "راية المختار",
          "خاتم ابن عباس",
          "ودائع الإمامة"
        ],
        "correct_index": 3,
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
          "علم الأنساب فقط",
          "خشية أو علمًا مستفادًا",
          "مالًا في كل مجلس",
          "تكليفًا بكتابة الرسائل"
        ],
        "correct_index": 1,
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
          "كتمان الانتساب لأهل البيت",
          "ترك الفرائض للمحبة",
          "المحبة بلا غلو",
          "حصر المحبة في القرابة"
        ],
        "correct_index": 2,
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
          "أثر حناء دائم",
          "ثفنات كركب البعير",
          "جرح من سيف",
          "وشم على الجبهة"
        ],
        "correct_index": 1,
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
          "يطلب منهم خدمة مزرعته",
          "يرسلهم إلى بيت المال",
          "يعلن أسماءهم في المسجد",
          "يحمل إليهم الطعام سرًا"
        ],
        "correct_index": 3,
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
          "عند ولادة الإمام الباقر",
          "يوم عاشوراء",
          "عند الرجوع من الشام",
          "بعد وفاة الإمام"
        ],
        "correct_index": 3,
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
          "أمر بحبسه",
          "عرض عليه المعونة والصفح",
          "هجره عامًا",
          "أخذ منه غرامة"
        ],
        "correct_index": 1,
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
          "السيد الحميري",
          "الكميت",
          "دعبل الخزاعي",
          "الفرزدق"
        ],
        "correct_index": 3,
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
          "زيد الشهيد",
          "محمد الباقر (ع)",
          "عبد الله الباهر",
          "عمر الأشرف"
        ],
        "correct_index": 1,
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
          "النجف",
          "كربلاء",
          "البقيع",
          "الكاظمية"
        ],
        "correct_index": 2,
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
          "الإمام الحسن المجتبى (ع)",
          "الإمام علي زين العابدين (ع)",
          "الإمام جعفر الصادق (ع)",
          "زيد بن علي (ع)"
        ],
        "correct_index": 1,
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
          "الإمام الحسين (ع)",
          "كلاهما من جهة الأب",
          "لا ينتهي إلى أحدهما",
          "الإمام الحسن (ع)"
        ],
        "correct_index": 3,
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
          "مكة المكرمة",
          "الكوفة",
          "المدينة المنورة",
          "دمشق"
        ],
        "correct_index": 2,
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
          "50 هـ",
          "61 هـ",
          "57 هـ",
          "70 هـ"
        ],
        "correct_index": 2,
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
          "الحسين (ع)",
          "الحسن (ع)",
          "جعفر الصادق (ع)",
          "علي زين العابدين (ع)"
        ],
        "correct_index": 3,
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
          "راية بدر وحدها",
          "صندوقًا فيه سلاح النبي وكتبه",
          "خاتم سليمان",
          "مصحفًا بلا كتب أخرى"
        ],
        "correct_index": 1,
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
          "أن يقرأ صحيفة",
          "أن يؤذن للصلاة",
          "أن يقبل ثم يدبر",
          "أن ينشد شعرًا"
        ],
        "correct_index": 2,
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
          "اكتفى بالصمت",
          "رد السلام على النبي وعلى جابر",
          "طلب كتمان الخبر",
          "أرسل كتابًا للمدينة"
        ],
        "correct_index": 1,
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
          "لكثرة سفره إلى البصرة",
          "لأنه بنى بستانًا",
          "لأنه أكبر إخوته",
          "لأنه بقر العلم وأظهره"
        ],
        "correct_index": 3,
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
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله",
          "أبو جعفر"
        ],
        "correct_index": 3,
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
          "محمد بن الحنفية",
          "زيد بن علي",
          "عبد الله بن جعفر",
          "يحيى بن زيد"
        ],
        "correct_index": 1,
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
          "الطاعة للجميع معًا",
          "ترك المودة عند الخلاف",
          "الطاعة لواحد والمودة للجميع",
          "المودة لأهل المدينة فقط"
        ],
        "correct_index": 2,
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
          "خمسة",
          "سبعة",
          "تسعة",
          "أحد عشر"
        ],
        "correct_index": 1,
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
          "الكوفة",
          "دمشق",
          "مكة المكرمة",
          "المدينة المنورة"
        ],
        "correct_index": 3,
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
          "النجف",
          "كربلاء",
          "البقيع",
          "الكاظمية"
        ],
        "correct_index": 2,
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
          "الإمام علي زين العابدين (ع)",
          "الإمام محمد الباقر (ع)",
          "الإمام موسى الكاظم (ع)",
          "زيد بن علي (ع)"
        ],
        "correct_index": 1,
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
          "أبو جعفر",
          "أبو الحسن",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 3,
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
          "مكة المكرمة",
          "الكوفة",
          "المدينة المنورة",
          "دمشق"
        ],
        "correct_index": 2,
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
          "80 هـ",
          "95 هـ",
          "83 هـ",
          "100 هـ"
        ],
        "correct_index": 2,
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
          "أن يغادر المدينة",
          "أن يعتزل تعليم الناس",
          "أن يبيع كتبه",
          "أن يحسن إلى أصحابه"
        ],
        "correct_index": 3,
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
          "أشار إلى زيد بن علي",
          "وضع يده على جعفر (ع)",
          "كتب اسم إسماعيل",
          "امتنع عن الجواب"
        ],
        "correct_index": 1,
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
          "19 سنة",
          "25 سنة",
          "34 سنة",
          "40 سنة"
        ],
        "correct_index": 2,
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
          "ألفان",
          "أربعة آلاف",
          "سبعمائة",
          "عشرة آلاف"
        ],
        "correct_index": 1,
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
          "بقي محصورًا في أسرته",
          "اقتصر على رسائل سياسية",
          "لم يروه إلا أهل المدينة",
          "حمله الرواة إلى البلدان"
        ],
        "correct_index": 3,
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
          "إلى علماء المدينة فقط",
          "إلى كتب اليونان",
          "إلى اجتهاده الشخصي",
          "إلى رسول الله ثم الله"
        ],
        "correct_index": 3,
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
          "جابر الجعفي",
          "هشام بن الحكم",
          "المفضل بن عمر",
          "أبان بن تغلب"
        ],
        "correct_index": 1,
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
          "يكثر السفر وحده",
          "يجمع المال لأهله",
          "ينصرنا بقلبه ولسانه ويده",
          "يعتزل الخصومات كلها"
        ],
        "correct_index": 2,
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
          "بسفينة في البحر",
          "ببيضة تنفلق عن طائر",
          "بنخلة مثمرة",
          "بحركة الشمس"
        ],
        "correct_index": 1,
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
          "ثلاثة أصول",
          "خمسة أصول",
          "سبعة أصول",
          "أربعة أصول"
        ],
        "correct_index": 3,
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
          "أجازه للتقريب",
          "خصه بالأجرام",
          "نفى أن يشبهه شيء",
          "توقف فيه"
        ],
        "correct_index": 2,
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
          "قلة السفر",
          "تأخير التوبة",
          "ترك التجارة",
          "الصمت الطويل"
        ],
        "correct_index": 1,
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
          "كثرة المال والولد",
          "طول العمر والسفر",
          "العزلة وترك العمل",
          "اجتماع النية والقدرة والتوفيق والإصابة"
        ],
        "correct_index": 3,
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
          "سبعة",
          "اثنا عشر",
          "عشرة",
          "أربعة عشر"
        ],
        "correct_index": 2,
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
          "محرم",
          "رمضان",
          "شوال",
          "ذو الحجة"
        ],
        "correct_index": 2,
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
          "55 سنة",
          "70 سنة",
          "75 سنة",
          "65 سنة"
        ],
        "correct_index": 3,
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
          "النجف",
          "البقيع",
          "الكاظمية",
          "كربلاء"
        ],
        "correct_index": 1,
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
          "المدينة المنورة",
          "الأبواء",
          "مكة المكرمة",
          "الكوفة"
        ],
        "correct_index": 1,
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
          "120 هـ",
          "132 هـ",
          "148 هـ",
          "128 هـ"
        ],
        "correct_index": 3,
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
          "أم فروة بنت القاسم",
          "نجمة",
          "حميدة البربرية",
          "سمانة"
        ],
        "correct_index": 2,
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
          "أبو جعفر",
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله"
        ],
        "correct_index": 2,
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
          "هشام بن الحكم",
          "صفوان الجمال",
          "علي بن يقطين",
          "المفضّل بن عمر"
        ],
        "correct_index": 3,
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
          "أنه أكبر أبنائه سنًا",
          "أنه لا يلهو ولا يلعب",
          "أنه يقيم في الكوفة",
          "أنه يتولى القضاء"
        ],
        "correct_index": 1,
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
          "رب زدني مالًا وولدًا",
          "اللهم انصرني بالسيف",
          "عظم الذنب من عبدك فليحسن العفو من عندك",
          "رب اجعلني ملكًا"
        ],
        "correct_index": 2,
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
          "يهجره دائمًا",
          "يرسل إليه صرّة من المال",
          "يرفع أمره إلى الوالي",
          "يأمر بإبعاده"
        ],
        "correct_index": 1,
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
          "من دينار إلى 5 دنانير",
          "2000 دينار دائمًا",
          "10 دراهم فقط",
          "من 200 إلى 300 دينار"
        ],
        "correct_index": 3,
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
          "باقر العلم",
          "زين العابدين",
          "الرضا",
          "العبد الصالح"
        ],
        "correct_index": 3,
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
          "إبراهيم بن موسى",
          "علي الرضا (ع)",
          "العباس بن موسى",
          "إسحاق بن موسى"
        ],
        "correct_index": 1,
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
          "زرارة بن أعين",
          "جابر الجعفي",
          "علي بن يقطين",
          "أبان بن تغلب"
        ],
        "correct_index": 2,
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
          "أبو العباس السفاح",
          "هارون الرشيد",
          "المأمون",
          "المعتصم"
        ],
        "correct_index": 1,
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
          "جعفر البرمكي",
          "محمد الأمين",
          "والي المدينة",
          "هارون الرشيد"
        ],
        "correct_index": 3,
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
          "عيسى بن جعفر",
          "الفضل بن الربيع",
          "السندي بن شاهك",
          "الفضل بن يحيى"
        ],
        "correct_index": 2,
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
          "دفنه سرًا بلا حضور",
          "أحضر فقهاء ووجوهًا لمعاينة الجثمان",
          "أرسله إلى المدينة",
          "منع إعلان موته"
        ],
        "correct_index": 1,
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
          "جرح في معركة",
          "مرض في الحج",
          "سقوط أثناء السفر",
          "السم في الطعام وقيل في تمر"
        ],
        "correct_index": 3,
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
          "47 سنة",
          "60 سنة",
          "55 سنة",
          "75 سنة"
        ],
        "correct_index": 2,
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
          "20 سنة",
          "25 سنة",
          "35 سنة",
          "50 سنة"
        ],
        "correct_index": 2,
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
          "الإمام جعفر الصادق (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام محمد الباقر (ع)",
          "الإمام محمد الجواد (ع)"
        ],
        "correct_index": 1,
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
          "مكة المكرمة",
          "الكوفة",
          "البصرة",
          "المدينة المنورة"
        ],
        "correct_index": 3,
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
          "أبو جعفر",
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله"
        ],
        "correct_index": 2,
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
          "الإمام جعفر الصادق (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)"
        ],
        "correct_index": 2,
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
          "يدخره كله للغد",
          "يرسله إلى المأمون",
          "يمنع الخدم منه",
          "يضع من أحسنه للمساكين"
        ],
        "correct_index": 3,
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
          "أوقفهم طوال الطعام",
          "أجلسهم معه ولم يقم الآكل",
          "فصل بينهم بحسب الأصل",
          "منعهم من الأكل معه"
        ],
        "correct_index": 1,
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
          "بالعربية فقط",
          "بالفارسية فقط",
          "بلغة كل واحد منهم",
          "بمترجم دائمًا"
        ],
        "correct_index": 2,
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
          "قيادة جند العباسيين",
          "الإفتاء في مسجد النبي (ص)",
          "جمع ضرائب الحجاز",
          "إدارة بريد الدولة"
        ],
        "correct_index": 1,
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
          "هارون الرشيد",
          "الأمين العباسي",
          "المتوكل العباسي",
          "المأمون العباسي"
        ],
        "correct_index": 3,
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
          "الفضل بن الربيع",
          "هرثمة بن أعين",
          "دعبل الخزاعي",
          "رجاء بن أبي الضحاك"
        ],
        "correct_index": 3,
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
          "قم",
          "نيسابور",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 1,
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
          "طلب العلم فريضة",
          "الأعمال بالنيات",
          "كلمة لا إله إلا الله حصني",
          "المؤمن مرآة المؤمن"
        ],
        "correct_index": 2,
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
          "أن يقود الجيش",
          "ألا يولي ولا يعزل",
          "أن ينتقل المأمون للمدينة",
          "أن يجبي الخراج"
        ],
        "correct_index": 1,
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
          "الأمين العباسي",
          "هارون الرشيد",
          "محمد بن جعفر",
          "المأمون العباسي"
        ],
        "correct_index": 3,
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
          "رأس الجالوت",
          "الهربذ الأكبر",
          "الجاثليق",
          "عمران الصابي"
        ],
        "correct_index": 2,
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
          "الجاثليق",
          "عمران الصابي",
          "رأس الجالوت",
          "سليمان المروزي"
        ],
        "correct_index": 1,
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
          "أبو نواس",
          "الكميت الأسدي",
          "السيد الحميري",
          "دعبل الخزاعي"
        ],
        "correct_index": 3,
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
          "البقيع في المدينة",
          "الكاظمية في بغداد",
          "سناباد من طوس بجوار قبر هارون",
          "النجف قرب أمير المؤمنين"
        ],
        "correct_index": 2,
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
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام جعفر الصادق (ع)"
        ],
        "correct_index": 1,
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
          "مكة المكرمة",
          "بغداد",
          "طوس",
          "المدينة المنورة"
        ],
        "correct_index": 3,
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
          "شهر رجب",
          "شهر شعبان",
          "شهر رمضان",
          "شهر محرم"
        ],
        "correct_index": 2,
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
          "نجمة",
          "حميدة",
          "سبيكة النوبية",
          "سمانة"
        ],
        "correct_index": 2,
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
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام الحسن العسكري (ع)",
          "الإمام علي الرضا (ع)"
        ],
        "correct_index": 3,
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
          "موسى بن عمران (ع)",
          "عيسى بن مريم (ع)",
          "إبراهيم الخليل (ع)",
          "نوح (ع)"
        ],
        "correct_index": 1,
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
          "أرسل إليه كتابًا",
          "قدّمه لإمامة الصلاة فقط",
          "وثب فقبّل يده وعظّمه",
          "أهداه فرسًا"
        ],
        "correct_index": 2,
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
          "داود (ع)",
          "يحيى بن زكريا (ع)",
          "إسماعيل (ع)",
          "أيوب (ع)"
        ],
        "correct_index": 1,
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
          "خمس سنوات",
          "اثنتا عشرة سنة",
          "خمس عشرة سنة",
          "تسع سنوات"
        ],
        "correct_index": 3,
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
          "المعتصم العباسي",
          "هارون الرشيد",
          "الأمين العباسي",
          "المأمون العباسي"
        ],
        "correct_index": 3,
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
          "أحمد بن أبي دؤاد",
          "يحيى بن أكثم",
          "الفضل بن سهل",
          "الريان بن شبيب"
        ],
        "correct_index": 1,
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
          "ميراث ذوي الأرحام",
          "زكاة الأنعام",
          "حكم محرم قتل صيدًا",
          "عدة المطلقة"
        ],
        "correct_index": 2,
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
          "أجاب عن كل الفروع",
          "تحيّر وظهر عجزه",
          "أنهى المجلس غاضبًا",
          "حوّل السؤال إلى المأمون"
        ],
        "correct_index": 1,
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
          "الإمام الحسن العسكري (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)"
        ],
        "correct_index": 3,
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
          "مرو",
          "دمشق",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 2,
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
          "203هـ",
          "220هـ",
          "254هـ",
          "260هـ"
        ],
        "correct_index": 1,
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
          "ذو الحجة",
          "المحرم",
          "صفر",
          "ذو القعدة"
        ],
        "correct_index": 3,
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
          "البقيع في المدينة",
          "طوس عند قبر والده الرضا",
          "مقابر قريش عند قبر جده الكاظم",
          "سامراء عند قبر الهادي"
        ],
        "correct_index": 2,
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
          "الإمام علي الرضا (ع)",
          "الإمام محمد الجواد (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام الحسن العسكري (ع)"
        ],
        "correct_index": 1,
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
          "نجمة",
          "حميدة",
          "حكيمة",
          "سمانة"
        ],
        "correct_index": 3,
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
          "أبو جعفر",
          "أبو محمد",
          "أبو الحسن",
          "أبو عبد الله"
        ],
        "correct_index": 2,
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
          "الرضا والجواد",
          "السجاد والباقر",
          "الهادي والنقي",
          "العسكري والمنتظر"
        ],
        "correct_index": 2,
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
          "الإمام محمد الجواد (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام جعفر الصادق (ع)",
          "الإمام الحسن العسكري (ع)"
        ],
        "correct_index": 3,
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
          "ابن السكيت",
          "الجنيدي",
          "يحيى بن هرثمة",
          "الفتح بن خاقان"
        ],
        "correct_index": 1,
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
          "النسب",
          "كثرة الأتباع",
          "العقل",
          "السلطان"
        ],
        "correct_index": 2,
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
          "زيارة عاشوراء",
          "الزيارة الجامعة الكبيرة",
          "زيارة وارث",
          "زيارة أمين الله"
        ],
        "correct_index": 1,
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
          "يوم المباهلة",
          "ليلة القدر",
          "يوم الفطر",
          "يوم الغدير"
        ],
        "correct_index": 3,
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
          "يحيى بن هرثمة",
          "سعيد الحاجب",
          "ابن السكيت",
          "عبد الله بن محمد"
        ],
        "correct_index": 3,
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
          "غادر المدينة سرًا",
          "كتب إلى المتوكل وكذّبها",
          "جمع جيشًا لمقاتلته",
          "التزم الصمت تمامًا"
        ],
        "correct_index": 1,
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
          "سعيد الحاجب",
          "الفتح بن خاقان",
          "يحيى بن هرثمة",
          "أحمد بن الخصيب"
        ],
        "correct_index": 2,
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
          "الكوفة",
          "سامراء",
          "طوس",
          "دمشق"
        ],
        "correct_index": 1,
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
          "كان يجمع السلاح",
          "كان يكتب إلى الروم",
          "كان يقيم وليمة كبيرة",
          "كان منفردًا يتلو القرآن"
        ],
        "correct_index": 3,
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
          "شربه مجاملة للمتوكل",
          "ناوله للفتح بن خاقان",
          "امتنع وقال إن لحمه ودمه لم يخالطاه",
          "خرج من المجلس بلا جواب"
        ],
        "correct_index": 2,
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
          "أمر المتوكل بسجن الإمام",
          "بكى المتوكل والحاضرون",
          "ضحك الحاضرون منها",
          "انتهى المجلس بمناظرة فقهية"
        ],
        "correct_index": 1,
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
          "220 هـ",
          "260 هـ",
          "203 هـ",
          "254 هـ"
        ],
        "correct_index": 3,
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
          "محمد بن علي",
          "الحسين بن علي",
          "الإمام الحسن العسكري (ع)",
          "جعفر بن علي"
        ],
        "correct_index": 2,
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
          "سامراء",
          "المدينة المنورة",
          "بغداد",
          "الكوفة"
        ],
        "correct_index": 1,
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
          "ربيع الأول",
          "جمادى الآخرة",
          "شعبان",
          "ربيع الآخر"
        ],
        "correct_index": 3,
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
          "أبو الحسن",
          "أبو جعفر",
          "أبو محمد",
          "أبو عبد الله"
        ],
        "correct_index": 2,
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
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام علي الهادي (ع)",
          "الإمام موسى الكاظم (ع)"
        ],
        "correct_index": 2,
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
          "الإمام محمد الجواد (ع)",
          "الإمام علي الرضا (ع)",
          "الإمام موسى الكاظم (ع)",
          "الإمام علي الهادي (ع)"
        ],
        "correct_index": 3,
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
          "250هـ",
          "254هـ",
          "255هـ",
          "260هـ"
        ],
        "correct_index": 1,
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
          "المدينة المنورة",
          "الكوفة",
          "سامراء",
          "قم"
        ],
        "correct_index": 2,
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
          "عبيد الله بن خاقان",
          "صالح بن وصيف",
          "أحمد بن طولون",
          "الفتح بن خاقان"
        ],
        "correct_index": 1,
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
          "نقلاه سرًا إلى المدينة",
          "أطلقاه بلا أمر السلطان",
          "كتبا كتابًا في الأنساب",
          "صارا من أهل العبادة والصلاة"
        ],
        "correct_index": 3,
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
          "محمد بن عثمان العمري",
          "الحسين بن روح",
          "علي بن محمد السمري",
          "عثمان بن سعيد العمري"
        ],
        "correct_index": 3,
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
          "داخل كتب الفقه",
          "في أوعية السمن",
          "في أكياس الحبوب",
          "تحت سروج الخيل"
        ],
        "correct_index": 1,
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
          "زكريا بن آدم",
          "علي بن بابويه",
          "أحمد بن إسحاق",
          "سعد بن عبد الله"
        ],
        "correct_index": 2,
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
          "لأن الأسرة كانت في سفر",
          "خوفًا من طلب العباسيين له",
          "انتظارًا لموافقة قاضي سامراء",
          "لعدم اكتمال بناء الدار"
        ],
        "correct_index": 1,
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
          "خمس وعشرون سنة",
          "اثنتان وثلاثون سنة",
          "أربعون سنة",
          "ثمانٍ وعشرون سنة"
        ],
        "correct_index": 3,
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
          "في مقبرة البقيع",
          "في الكاظمية",
          "في داره بسامراء إلى جوار أبيه",
          "في النجف الأشرف"
        ],
        "correct_index": 2,
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
          "15 شعبان سنة 254هـ",
          "15 شعبان سنة 255هـ",
          "17 ربيع الأول سنة 255هـ",
          "15 رمضان سنة 256هـ"
        ],
        "correct_index": 1,
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
          "المدينة المنورة",
          "بغداد",
          "الكوفة",
          "سامراء"
        ],
        "correct_index": 3,
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
          "حكيمة",
          "حديث",
          "نرجس",
          "سمانة"
        ],
        "correct_index": 2,
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
          "فاطمة بنت الإمام الكاظم (ع)",
          "خديجة بنت الإمام الصادق (ع)",
          "حكيمة بنت الإمام الجواد (ع)",
          "أمامة بنت الإمام الرضا (ع)"
        ],
        "correct_index": 2,
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
          "السجاد",
          "الكاظم",
          "الجواد",
          "القائم"
        ],
        "correct_index": 3,
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
          "لأنه كان مسافرًا خارج سامراء",
          "خوفًا من طلب السلطة العباسية له",
          "لأن الأسرة انتقلت إلى المدينة",
          "لانقطاع الاتصال بأصحابه تمامًا"
        ],
        "correct_index": 1,
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
          "عشر سنوات",
          "خمس عشرة سنة",
          "خمس سنوات",
          "عشرون سنة"
        ],
        "correct_index": 2,
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
          "255هـ",
          "260هـ",
          "275هـ",
          "329هـ"
        ],
        "correct_index": 1,
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
          "ثلاثة",
          "خمسة",
          "سبعة",
          "أربعة"
        ],
        "correct_index": 3,
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
          "محمد بن عثمان العمري",
          "الحسين بن روح النوبختي",
          "علي بن محمد السمري",
          "عثمان بن سعيد العمري"
        ],
        "correct_index": 3,
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
          "نسخ الكتب",
          "بيع السمن",
          "صياغة الفضة",
          "تجارة الورق"
        ],
        "correct_index": 1,
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
          "الحسين بن روح",
          "علي بن محمد السمري",
          "ابنه محمد بن عثمان",
          "أحمد بن إسحاق القمي"
        ],
        "correct_index": 2,
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
          "الحسين بن روح النوبختي",
          "علي بن محمد السمري",
          "محمد بن عثمان العمري",
          "عثمان بن سعيد العمري"
        ],
        "correct_index": 1,
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
          "الصحائف",
          "المقامات",
          "المعلقات",
          "التوقيعات"
        ],
        "correct_index": 3,
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
          "محمد، عثمان، السمري، الحسين بن روح",
          "الحسين بن روح، عثمان، محمد، السمري",
          "عثمان، محمد، الحسين بن روح، السمري",
          "عثمان، الحسين بن روح، محمد، السمري"
        ],
        "correct_index": 2,
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
          "أن يعيّن ابنه سفيرًا",
          "ألا يوصي إلى أحد بعده",
          "أن يعيد السفارة للحسين بن روح",
          "أن ينقل السفارة إلى سامراء"
        ],
        "correct_index": 1,
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
          "260هـ",
          "305هـ",
          "350هـ",
          "329هـ"
        ],
        "correct_index": 3,
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
  },
  {
    "id": "lib-geography-unique-landforms-01",
    "user_id": "system",
    "title": "تضاريس وظواهر طبيعية فريدة",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "جغرافيا",
    "language": "ar",
    "quiz_difficulty": "medium",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "أي عملية جيومورفولوجية أنشأت الأعمدة السداسية الشهيرة في ممر العمالقة بأيرلندا الشمالية؟",
        "options": [
          "ترسيب أملاح بحرية متعاقبة",
          "تبريد حمم بازلتية وانكماشها",
          "نحت الحجر الجيري بمياه جوفية",
          "ضغط كثبان رملية متحجرة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تكوّنت الأعمدة عندما بردت تدفقات بازلتية قديمة فانكمشت وتشقق سطحها إلى مضلعات، يغلب عليها الشكل السداسي. لذلك فهي فواصل تبريد وليست نتاج إذابة كارستية أو ترسيب ملحي.",
        "source": "UNESCO World Heritage Centre — Giant's Causeway and Causeway Coast: https://whc.unesco.org/en/list/369/",
        "difficulty": "medium",
        "subcategory": "تضاريس بركانية",
        "tags": [
          "البازلت",
          "أيرلندا الشمالية",
          "أعمدة صخرية"
        ],
        "external_id": "geo-natural-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يبدو نهر كانيو كريستاليس في كولومبيا متعدد الألوان خلال موسم محدد؟",
        "options": [
          "تذوب فيه معادن نحاسية من مناجم قريبة",
          "تعكس مياهه ألوان الطيور المهاجرة",
          "تتلون نباتات مائية مستوطنة مع ملاءمة الضوء ومستوى الماء",
          "تطلق ينابيع حارة أصباغًا كبريتية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يرتبط اللون الأحمر خصوصًا بالنبات المائي Macarenia clavigera الذي تظهر ألوانه حين يتوازن عمق الماء والضوء بين موسمي المطر والجفاف؛ وتضيف الصخور والرمال والطحالب ألوانًا أخرى.",
        "source": "Colombia Travel (ProColombia) — Caño Cristales: https://colombia.travel/en/la-macarena/cano-cristales",
        "difficulty": "medium",
        "subcategory": "أنهار وظواهر حيوية",
        "tags": [
          "كولومبيا",
          "كانيو كريستاليس",
          "نباتات مائية"
        ],
        "external_id": "geo-natural-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما العامل الرئيس الذي حافظ على ملوحة البحر الميت الشديدة مقارنة بمعظم البحيرات؟",
        "options": [
          "اتصاله المباشر ببحر شديد الملوحة",
          "كونه حوضًا مغلقًا يفقد الماء أساسًا بالتبخر",
          "ذوبان جليد غني بالأملاح فيه سنويًا",
          "ارتفاعه الكبير الذي يمنع هطول المطر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "البحر الميت بحيرة نهائية بلا مخرج نهري إلى البحر. يزيل التبخر الماء ويترك الأملاح الذائبة تتراكم، كما أن موقعه منخفض لا مرتفع.",
        "source": "Encyclopaedia Britannica — Dead Sea: https://www.britannica.com/place/Dead-Sea",
        "difficulty": "medium",
        "subcategory": "بحيرات ملحية",
        "tags": [
          "البحر الميت",
          "حوض مغلق",
          "تبخر"
        ],
        "external_id": "geo-natural-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يفسر تكوّن الأخاديد العميقة مثل غراند كانيون على نحو أدق؟",
        "options": [
          "انهيار سقف كهف واحد ضخم",
          "شق فتحه اصطدام نيزك حديث",
          "حتّ نهري طويل ترافق مع رفع إقليمي لهضبة كولورادو",
          "أخدود حفره نهر جليدي ساحلي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عمّق نهر كولورادو وروافده الوادي مع ارتفاع هضبة كولورادو، فكشفت التعرية طبقات صخرية تمتد إلى أزمنة سحيقة. لا يمثل الوادي فوهة صدم ولا كهفًا منهارًا.",
        "source": "U.S. National Park Service — Geologic Formations, Grand Canyon: https://www.nps.gov/grca/learn/nature/geologicformations.htm",
        "difficulty": "medium",
        "subcategory": "أودية وأخاديد",
        "tags": [
          "غراند كانيون",
          "نهر كولورادو",
          "تعرية"
        ],
        "external_id": "geo-natural-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تتكون صواعد الكهوف الجيرية عادةً عندما يحدث ماذا؟",
        "options": [
          "تتجمد مياه جوفية صاعدة داخل السقف",
          "تضغط حركة الصفائح الطين إلى أعلى",
          "تنحت الرياح أعمدة من الرمال المتماسكة",
          "تترسب كربونات الكالسيوم من قطرات تسقط على أرضية الكهف"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفقد القطرات بعض ثاني أكسيد الكربون بعد وصولها إلى الكهف، فتترسب كربونات الكالسيوم على الأرض وتنمو الصواعد إلى أعلى؛ أما الهوابط فتنمو من السقف.",
        "source": "U.S. National Park Service — Cave Formations: https://www.nps.gov/subjects/caves/cave-formations.htm",
        "difficulty": "medium",
        "subcategory": "كارست وكهوف",
        "tags": [
          "صواعد",
          "كربونات الكالسيوم",
          "كهوف"
        ],
        "external_id": "geo-natural-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يميز دلتا داخلية مثل دلتا أوكافانغو في بوتسوانا عن الدلتا الساحلية المعتادة؟",
        "options": [
          "تتكون حصرًا من حمم تحت الماء",
          "ترتفع فوق خط تقسيم المياه",
          "يتبدد النهر في حوض قاري ولا يصل إلى المحيط",
          "لا تحتوي أي رواسب نهرية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصب مياه أوكافانغو داخل حوض كالاهاري المغلق، فتنتشر في شبكة مستنقعات وقنوات ثم تضيع بالتبخر والنتح والتسرب بدل بلوغ البحر.",
        "source": "UNESCO World Heritage Centre — Okavango Delta: https://whc.unesco.org/en/list/1432/",
        "difficulty": "medium",
        "subcategory": "أنهار ودلتات",
        "tags": [
          "أوكافانغو",
          "بوتسوانا",
          "دلتا داخلية"
        ],
        "external_id": "geo-natural-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في أي بيئة تتشكل التربة المضلعة والدوائر الحجرية الطبيعية المرتبطة بظاهرة الأرض المنمطة؟",
        "options": [
          "الغابات المدارية عديمة التباين الحراري",
          "قيعان المحيط العميقة قرب الفتحات الحارة",
          "الصحارى الحارة التي لا تتجمد",
          "بيئات التجمد والذوبان المتكرر في الأقاليم الباردة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تدفع دورات التجمد والذوبان الحبيبات وتفرزها بحسب الحجم، فتتشكل مضلعات ودوائر وخطوط حجرية في البيئات المحيطة بالجليدية.",
        "source": "U.S. Geological Survey — Periglacial Landforms: https://pubs.usgs.gov/fs/2005/3055/",
        "difficulty": "medium",
        "subcategory": "تضاريس جليدية",
        "tags": [
          "أرض منمطة",
          "تجمد وذوبان",
          "بيئة محيطة بالجليد"
        ],
        "external_id": "geo-natural-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا تتخذ بحيرات كثيرة داخل الفوهات البركانية شكلًا دائريًا أو شبه دائري؟",
        "options": [
          "لأن الأنهار ترسم دائمًا دوائر عند منابعها",
          "لأن الماء يملأ منخفضًا أنشأه انفجار أو انهيار بركاني",
          "لأن الرياح تدور في نصف الكرة الشمالي",
          "لأن الجليد البحري يحفر حلقات منتظمة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قد يخلّف الثوران فوهة، أو ينهار سقف حجرة الصهارة ليكوّن كالديرا؛ وعندما تتجمع المياه داخل ذلك المنخفض تحاكي البحيرة حدوده الدائرية نسبيًا.",
        "source": "U.S. Geological Survey — Crater Lake Caldera: https://www.usgs.gov/volcanoes/crater-lake/science/geology-and-history-summary-crater-lake",
        "difficulty": "medium",
        "subcategory": "بحيرات بركانية",
        "tags": [
          "كالديرا",
          "فوهة",
          "بحيرة"
        ],
        "external_id": "geo-natural-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي آلية تجعل الكثيب الهلالي المعروف بالبرخان يتحرك تدريجيًا؟",
        "options": [
          "يدفع المد البحري الكثيب كله من أسفله",
          "تتمدد حبات الرمل ليلًا فتنزلق شرقًا",
          "ترفع المياه الجوفية الكثيب ككتلة واحدة",
          "تنقل الرياح الرمل صعودًا على الجانب المواجه ثم ينهال خلف القمة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقفز الحبات وتتدحرج على المنحدر المواجه للريح، ثم تعبر القمة وتنهال على وجه الانزلاق، فيتقدم الكثيب باتجاه هبوب الريح وتبرز قرناه إلى الأمام.",
        "source": "U.S. Geological Survey — Types of Sand Dunes: https://pubs.usgs.gov/gip/deserts/dunes/",
        "difficulty": "medium",
        "subcategory": "تضاريس ريحية",
        "tags": [
          "برخان",
          "كثبان",
          "رياح"
        ],
        "external_id": "geo-natural-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما التفسير الجيولوجي المقبول لوجود أحافير بحرية في صخور عالية بجبال الهيمالايا؟",
        "options": [
          "نقلتها طيور بحرية إلى القمم الحديثة",
          "غطى مد يومي قمم الجبال قبل قرون",
          "ارتفعت رواسب بحر تيثس القديم أثناء تصادم الهند بأوراسيا",
          "قذفتها براكين المحيط الهندي إلى الجبال"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترسبت المواد في بحر تيثس بين الكتلتين القاريتين، ثم طُويت وارتفعت عندما اصطدمت الصفيحة الهندية بأوراسيا؛ لذا أصبحت الصخور الرسوبية البحرية جزءًا من أعلى سلسلة جبلية.",
        "source": "U.S. Geological Survey — The Himalayas: Two Continents Collide: https://pubs.usgs.gov/gip/dynamic/himalaya.html",
        "difficulty": "medium",
        "subcategory": "جبال وصفائح",
        "tags": [
          "الهيمالايا",
          "بحر تيثس",
          "أحافير"
        ],
        "external_id": "geo-natural-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في الحواف الجليدية، ما الفرق الأدق بين الفيورد والوادي النهري العادي؟",
        "options": [
          "الفيورد قناة حفرتها الحمم ولها مقطع V",
          "الفيورد بحيرة مغلقة لا تتصل بالبحر",
          "الفيورد أخدود ريحي يوجد فقط في الصحارى",
          "الفيورد وادٍ جليدي عميق غمره البحر وله مقطع على هيئة U"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحفر الأنهار الجليدية أودية عريضة شديدة الجوانب ذات مقطع U، ثم يغمر البحر الجزء السفلي بعد تراجع الجليد أو تغير مستوى البحر، فينشأ الفيورد.",
        "source": "National Snow and Ice Data Center — Glaciers and Icecaps: https://nsidc.org/learn/parts-cryosphere/glaciers",
        "difficulty": "high",
        "subcategory": "سواحل جليدية",
        "tags": [
          "فيورد",
          "نهر جليدي",
          "وادي U"
        ],
        "external_id": "geo-natural-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي اقتران بين تضريس كارستي وآلية تكوّنه صحيح؟",
        "options": [
          "الدولين: إذابة صخر قابل للذوبان وانهيار أو هبوط السطح",
          "المورين: ترسيب كربونات من مياه الكهوف",
          "الياردانغ: إذابة الجبس بالماء الجوفي فقط",
          "الإسكر: انهيار سقف حجرة صهارية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الدولين منخفض كارستي يتشكل بالإذابة أو انهيار تجاويف في الحجر الجيري ونحوه. المورين ركام جليدي، والياردانغ نحت ريحي، والإسكر راسب نهري جليدي.",
        "source": "U.S. Geological Survey — Sinkholes: https://www.usgs.gov/special-topics/water-science-school/science/sinkholes",
        "difficulty": "high",
        "subcategory": "كارست وكهوف",
        "tags": [
          "دولين",
          "كارست",
          "إذابة"
        ],
        "external_id": "geo-natural-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الشرط التكتوني الأكثر ارتباطًا بتكوين وادٍ صدعي قاري مثل أجزاء من صدع شرق أفريقيا؟",
        "options": [
          "تمدد القشرة وهبوط كتل بين صدوع عادية",
          "انضغاط القشرة وتراكب الدسرات",
          "انزلاق أفقي محض بلا تمدد",
          "اصطدام صفيحتين محيطيتين فقط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حين تتمدد القشرة القارية ترقّ وتتشقق بصدوع عادية، وقد تهبط كتلة وسطية لتكوّن غورًا أو واديًا صدعيًا. أما الانضغاط فيبني عادة أحزمة طي ودسر.",
        "source": "U.S. Geological Survey — Divergent Plate Boundaries: https://pubs.usgs.gov/gip/dynamic/understanding.html",
        "difficulty": "high",
        "subcategory": "تكتونية",
        "tags": [
          "صدع شرق أفريقيا",
          "تمدد",
          "صدوع عادية"
        ],
        "external_id": "geo-natural-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تتكون بحيرات المنعطف المقطوع (قوس الثور) عندما يحدث أي تسلسل؟",
        "options": [
          "ينهار بركان دائري ثم يملأ المطر فوهته",
          "يضيق عنق منعطف نهري ثم يقطعه النهر وتسد الرواسب القناة القديمة",
          "يسد ركام جليدي خليجًا بحريًا",
          "تذيب المياه الجوفية قبة ملحية كاملة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تزيد التعرية على الضفتين الخارجيتين والترسيب داخليًا من تقارب عنق المنعطف؛ وعند الفيضان قد يفتح النهر مسارًا أقصر، ثم تعزل الرواسب الحلقة القديمة كبحيرة هلالية.",
        "source": "Encyclopaedia Britannica — Oxbow lake: https://www.britannica.com/science/oxbow-lake",
        "difficulty": "high",
        "subcategory": "أنهار",
        "tags": [
          "بحيرة قوس الثور",
          "منعطف نهري",
          "ترسيب"
        ],
        "external_id": "geo-natural-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يمكن أن يكون قاع وادٍ جاف في القارة القطبية الجنوبية شبه خالٍ من الجليد رغم البرودة الشديدة؟",
        "options": [
          "تسخن تيارات محيطية القاع فوق نقطة الغليان",
          "تغطي الحمم الحديثة الوادي كل شتاء",
          "تمنع الملوحة تجمد أي هطول جوي",
          "تحد الرياح الهابطة الجافة من تراكم الثلج وتسرّع التسامي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تندفع رياح كاتاباتية باردة وكثيفة من المرتفعات، وتسخن بالانضغاط أثناء هبوطها وتزيل الثلج بالتسامي والنقل، بينما تحجب الجبال قدرًا كبيرًا من الهطول.",
        "source": "NASA Earth Observatory — McMurdo Dry Valleys: https://earthobservatory.nasa.gov/images/145635/mcmurdo-dry-valleys",
        "difficulty": "high",
        "subcategory": "ظواهر قطبية",
        "tags": [
          "أودية ماكموردو",
          "رياح كاتاباتية",
          "تسامي"
        ],
        "external_id": "geo-natural-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تفسير يطابق تكوّن بحيرة توبا الهائلة في سومطرة؟",
        "options": [
          "امتلأت كالديرا نتجت من ثوران انفجاري ضخم وانهيار السقف",
          "سد نهر جليدي واديًا استوائيًا",
          "كوّن اصطدام قاري حوضًا أماميًا ضحلًا",
          "قطع منعطف نهري واسع عن مجراه"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بحيرة توبا تشغل كالديرا تكونت خلال ثوران هائل قبل نحو 74 ألف سنة؛ أُفرغ مقدار كبير من الصهارة فانهار الجزء العلوي من النظام البركاني.",
        "source": "Smithsonian Institution, Global Volcanism Program — Toba: https://volcano.si.edu/volcano.cfm?vn=261090",
        "difficulty": "high",
        "subcategory": "براكين وكالديرات",
        "tags": [
          "توبا",
          "سومطرة",
          "ثوران هائل"
        ],
        "external_id": "geo-natural-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يجعل السهل الملحي سالار دي أويوني في بوليفيا يعمل كمرآة واسعة أحيانًا؟",
        "options": [
          "تذوب بلورات الملح فتصبح زجاجًا دائمًا",
          "تغطي طبقة رقيقة ساكنة من الماء سطح الملح شديد الاستواء",
          "تكسو الطحالب الفضية سطحه في الشتاء",
          "تترسب طبقة سنوية من الجليد البحري"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خلال موسم الأمطار يمكن لماء ضحل أن يغطي القشرة الملحية المسطحة جدًا، فينشئ سطحًا عاكسًا متصلًا. الظاهرة انعكاس مائي وليست تحول الملح إلى زجاج.",
        "source": "NASA Earth Observatory — Salar de Uyuni: https://earthobservatory.nasa.gov/images/77140/salar-de-uyuni-bolivia",
        "difficulty": "high",
        "subcategory": "سبخات وسهول ملحية",
        "tags": [
          "أويوني",
          "بوليفيا",
          "انعكاس"
        ],
        "external_id": "geo-natural-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي ترتيب يمثل انتقال الرواسب الصحيح في نظام نهر جليدي ثم ذوبانه؟",
        "options": [
          "يحمل الجليد ركامًا غير مفروز، بينما تفرز مياه الذوبان الحبيبات في رواسب طبقية",
          "يفرز الجليد الحبيبات بدقة، بينما يترك ماء الذوبان ركامًا غير مفروز",
          "كلاهما يترك رواسب ملحية فقط",
          "لا ينقل الجليد إلا الطين ولا ينقل الماء الحصى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الركام الجليدي المباشر (التيل) خليط غير مفروز من أحجام متعددة، أما الجداول الجليدية فتفرز المواد بحسب سرعة الجريان وتبني رواسب طبقية مثل السهول الغسلية والإسكرات.",
        "source": "U.S. Geological Survey — Glacial Deposits: https://pubs.usgs.gov/fs/2005/3055/",
        "difficulty": "high",
        "subcategory": "رواسب جليدية",
        "tags": [
          "تيل",
          "مياه ذوبان",
          "فرز رواسب"
        ],
        "external_id": "geo-natural-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا تُعد بحيرة بايكال مثالًا لبحيرة صدعية عميقة لا لحوض حفَرته الأنهار الجليدية أساسًا؟",
        "options": [
          "تقع داخل فوهة نيزكية دائرية",
          "نشأت خلف ركام جليدي طرفي حديث",
          "تشغل منطقة قارية متمددة تهبط بين صدوع نشطة",
          "عزلها حاجز رملي عن المحيط"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقع حوض بايكال ضمن نظام صدعي قاري نشط؛ أدى التمدد والهبوط الطويلان إلى حوض شديد العمق تراكمت فيه سماكات كبيرة من الرواسب.",
        "source": "UNESCO World Heritage Centre — Lake Baikal: https://whc.unesco.org/en/list/754/",
        "difficulty": "high",
        "subcategory": "بحيرات صدعية",
        "tags": [
          "بايكال",
          "صدع",
          "تمدد قاري"
        ],
        "external_id": "geo-natural-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في جزيرة بركانية محيطية، ما الدليل التضاريسي الأكثر اتساقًا مع انتقال الصفيحة فوق بقعة ساخنة شبه ثابتة؟",
        "options": [
          "سلسلة براكين يزداد عمرها تدريجيًا بعيدًا عن البركان النشط",
          "حلقة جبال متساوية العمر حول قارة",
          "أخاديد نهرية تتجه كلها شمالًا",
          "كثبان تتناقص حجومها نحو الساحل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتكون براكين جديدة فوق مصدر الصهارة، ثم تحملها حركة الصفيحة بعيدًا فتخمد وتتعرض للتعرية؛ لذا يسجل تدرج الأعمار اتجاه حركة الصفيحة، كما في سلسلة هاواي–الإمبراطور.",
        "source": "U.S. Geological Survey — Hotspots: Mantle Thermal Plumes: https://pubs.usgs.gov/gip/dynamic/hotspots.html",
        "difficulty": "high",
        "subcategory": "بقع ساخنة",
        "tags": [
          "هاواي",
          "بقعة ساخنة",
          "تدرج الأعمار"
        ],
        "external_id": "geo-natural-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الآلية التي تنشئ المدرجات النهرية المتعاقبة على جانبي وادٍ؟",
        "options": [
          "ترتفع أمواج المد فتقص درجات متساوية داخل اليابسة",
          "تترسب الحمم دوريًا داخل النهر فقط",
          "يتحول النهر من بناء سهل فيضي إلى الحت الرأسي، فيترك أسطح الفيضان القديمة أعلى المجرى",
          "تذيب المياه الجوفية طبقات أفقية من قاع الوادي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عندما ينخفض مستوى الأساس أو ترتفع اليابسة أو يتغير التصريف، يعمّق النهر مجراه. تبقى أجزاء من السهل الفيضي الأقدم معلقة كمدرجات تسجل مراحل سابقة للوادي.",
        "source": "U.S. National Park Service — Fluvial Landforms: https://www.nps.gov/subjects/geology/fluvial-landforms.htm",
        "difficulty": "high",
        "subcategory": "جيومورفولوجيا نهرية",
        "tags": [
          "مدرجات نهرية",
          "مستوى أساس",
          "حت رأسي"
        ],
        "external_id": "geo-natural-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يميز الينابيع الحارة عن السخانات النافورية (الغيْزرات) من حيث آلية الثوران؟",
        "options": [
          "كل ينبوع حار يثور دوريًا بالضرورة",
          "لا يسخن الغيزر إلا من أشعة الشمس",
          "ينشأ الغيزر فقط عند التقاء نهرين جليديين",
          "يحتاج الغيزر إلى شبكة قنوات تقيد الحمل الحراري فتسمح بتراكم الضغط ثم التفريغ الدوري"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتطلب الغيزر حرارة وماءً ونظام قنوات مناسبًا؛ يرفع الحبس ضغط الماء فيبقى فائق السخونة، ثم يؤدي بدء الغليان وانخفاض الضغط إلى تفريغ انفجاري متكرر. الينبوع الحار المفتوح يدور ماؤه عادة بلا ثوران.",
        "source": "U.S. Geological Survey — Geysers and Hot Springs: https://www.usgs.gov/programs/VHP/geysers-and-hot-springs",
        "difficulty": "high",
        "subcategory": "حرارة أرضية",
        "tags": [
          "غيزر",
          "ينبوع حار",
          "ضغط"
        ],
        "external_id": "geo-natural-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يفسر بقاء صخور متحركة في مضمار السباق بوادي الموت وتركها مسارات طويلة؟",
        "options": [
          "مجال مغناطيسي يسحب الصخور الحديدية",
          "صفائح جليد رقيقة تتكسر وتدفعها رياح خفيفة فوق طين مبلل",
          "زلازل يومية تقذفها بالتتابع",
          "سيول عميقة تحملها وهي طافية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كشفت المراقبة أن البرك الضحلة تتجمد ليلًا حول الصخور، ثم تتكسر ألواح الجليد عند الذوبان وتدفعها الرياح ببطء فوق السطح الطيني الزلق، فتنقش المسارات.",
        "source": "U.S. National Park Service — The Racetrack: https://www.nps.gov/deva/planyourvisit/the-racetrack.htm",
        "difficulty": "high",
        "subcategory": "ظواهر صحراوية",
        "tags": [
          "صخور متحركة",
          "وادي الموت",
          "جليد رقيق"
        ],
        "external_id": "geo-natural-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تسلسل يصف نشأة الجزيرة الحاجزية الساحلية على نحو أدق؟",
        "options": [
          "تبني الأنهار الجليدية جدارًا صخريًا عموديًا في المدار",
          "ينهار بركان خطي وتملأه مياه عذبة",
          "تعيد الأمواج والتيارات الساحلية توزيع الرمل في شريط موازٍ للشاطئ يفصله خليج أو بحيرة ضحلة",
          "تذيب الأمواج الحجر الجيري تحت قارة فتفصلها كاملة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الجزر الحاجزية أجسام رملية طويلة موازية للساحل تفصلها عنه بحيرات أو خلجان ضحلة، وتعيد الأمواج والتيارات والانجراف الساحلي تشكيلها باستمرار، لذلك فهي تضاريس ديناميكية.",
        "source": "U.S. Geological Survey — Barrier Islands: https://pubs.usgs.gov/fs/barrier-islands/",
        "difficulty": "high",
        "subcategory": "تضاريس ساحلية",
        "tags": [
          "جزيرة حاجزية",
          "انجراف ساحلي",
          "رواسب"
        ],
        "external_id": "geo-natural-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا تظهر شلالات الترافرتين على هيئة مصاطب متتابعة في مواقع مثل باموق قلعة؟",
        "options": [
          "تفقد المياه الغنية بالبيكربونات ثاني أكسيد الكربون فتترسب كربونات الكالسيوم عند الحواف",
          "تتجمد الحمم البازلتية في طبقات بيضاء",
          "تنحت الرياح درجات في الجرانيت ثم تملؤها الأمطار",
          "تضغط الصفائح رواسب الملح إلى سلالم منتظمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصعد مياه حرارية محملة بالكالسيوم والبيكربونات، وعند انكشافها يخرج ثاني أكسيد الكربون فتترسب كربونات الكالسيوم كترافرتين. يتركز الترسيب عند الحواف فيبني أحواضًا ومصاطب بيضاء.",
        "source": "UNESCO World Heritage Centre — Hierapolis-Pamukkale: https://whc.unesco.org/en/list/485/",
        "difficulty": "high",
        "subcategory": "ترسيب كيميائي",
        "tags": [
          "ترافرتين",
          "باموق قلعة",
          "كربونات الكالسيوم"
        ],
        "external_id": "geo-natural-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-geography-political-historical-borders-02",
    "user_id": "system",
    "title": "حدود سياسية وجغرافيا تاريخية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "جغرافيا",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "وفق الحدود البرية المعترف بها دوليًا في عام 2026، أي دولتين تفصل بينهما حدود تمتد على خط عرض 49° شمالًا لمسافة كبيرة، لكنها لا تلتزم به كاملًا؟",
        "options": [
          "الولايات المتحدة والمكسيك",
          "كندا والولايات المتحدة",
          "النرويج والسويد",
          "روسيا وكازاخستان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رسمت اتفاقية 1818 جانبًا مهمًا من الحدود الأمريكية الكندية على خط العرض 49 من بحيرة الغابات إلى جبال روكي، ثم وُسع المسار غربًا باتفاقية أوريغون عام 1846. لكن الحدود تنحرف عنه حول البحيرات العظمى وألاسكا ومناطق أخرى، لذلك ليست خطًا موازيًا كاملًا.",
        "source": "International Boundary Commission — The Boundary: https://www.internationalboundarycommission.org/en/the-boundary/",
        "difficulty": "medium",
        "subcategory": "حدود فلكية",
        "tags": [
          "كندا",
          "الولايات المتحدة",
          "خط العرض 49"
        ],
        "external_id": "geo-border-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي دولة تُحاط أراضيها البرية بالكامل بدولة جنوب أفريقيا، وفق الوضع السياسي في عام 2026؟",
        "options": [
          "ليسوتو",
          "إسواتيني",
          "بوتسوانا",
          "ناميبيا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ليسوتو دولة جيبية ذات سيادة محاطة بجنوب أفريقيا من جميع الجهات. أما إسواتيني فتجاور جنوب أفريقيا وموزمبيق، في حين تمتلك بوتسوانا وناميبيا حدودًا مع عدة دول.",
        "source": "Encyclopaedia Britannica — Lesotho: https://www.britannica.com/place/Lesotho",
        "difficulty": "medium",
        "subcategory": "الدول الجيبية",
        "tags": [
          "ليسوتو",
          "جنوب أفريقيا",
          "جيب"
        ],
        "external_id": "geo-border-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي إقليم روسي يقع منفصلًا عن بقية أراضي روسيا بين بولندا وليتوانيا على بحر البلطيق في عام 2026؟",
        "options": [
          "كاريليا",
          "تشوكوتكا",
          "كالينينغراد",
          "داغستان"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أوبلاست كالينينغراد جزء من روسيا لكنه منفصل جغرافيًا عن كتلتها الرئيسة، وتحده بولندا وليتوانيا وبحر البلطيق. انتقل القسم الشمالي من بروسيا الشرقية إلى الاتحاد السوفيتي بعد الحرب العالمية الثانية.",
        "source": "Encyclopaedia Britannica — Kaliningrad: https://www.britannica.com/place/Kaliningrad-oblast-Russia",
        "difficulty": "medium",
        "subcategory": "أقاليم منفصلة",
        "tags": [
          "كالينينغراد",
          "روسيا",
          "بحر البلطيق"
        ],
        "external_id": "geo-border-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مضيق يفصل في الوقت نفسه بين إسبانيا والمغرب، وبين المحيط الأطلسي والبحر المتوسط؟",
        "options": [
          "مضيق جبل طارق",
          "مضيق البوسفور",
          "مضيق أوترانتو",
          "مضيق مسينا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقع مضيق جبل طارق بين جنوب إسبانيا وشمال المغرب، ويصل الأطلسي بالمتوسط. وهو لذلك حاجز مائي بين دولتين وقارتين وممر بحري بين حوضين.",
        "source": "Encyclopaedia Britannica — Strait of Gibraltar: https://www.britannica.com/place/Strait-of-Gibraltar",
        "difficulty": "medium",
        "subcategory": "حدود بحرية ومضائق",
        "tags": [
          "جبل طارق",
          "إسبانيا",
          "المغرب"
        ],
        "external_id": "geo-border-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي معاهدة أنهت الحرب المكسيكية الأمريكية سنة 1848 ونقلت إلى الولايات المتحدة مساحة واسعة شملت كاليفورنيا الحالية؟",
        "options": [
          "معاهدة آدامز–أونيس",
          "معاهدة أوريغون",
          "معاهدة باريس 1783",
          "معاهدة غوادالوبي هيدالغو"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنهت معاهدة غوادالوبي هيدالغو الحرب عام 1848، واعترفت المكسيك بضم تكساس وتنازلت عن رقعة شاسعة في الغرب والشمال الغربي. أما شراء غادسدن فجاء لاحقًا عام 1853 واستكمل جزءًا من الحد الجنوبي.",
        "source": "U.S. National Archives — Treaty of Guadalupe Hidalgo: https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo",
        "difficulty": "medium",
        "subcategory": "معاهدات وحدود تاريخية",
        "tags": [
          "المكسيك",
          "الولايات المتحدة",
          "1848"
        ],
        "external_id": "geo-border-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "عند استقلال الهند البريطانية سنة 1947، ما الكيانان السياديان اللذان أنشأهما قانون استقلال الهند البريطاني؟",
        "options": [
          "الهند وبنغلادش",
          "باكستان وبنغلادش",
          "الهند وسريلانكا",
          "الهند وباكستان"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشأ قانون 1947 دومينيوني الهند وباكستان. وكانت باكستان تتألف من جناحين غربي وشرقي تفصل بينهما الهند؛ استقل الجناح الشرقي باسم بنغلادش عام 1971.",
        "source": "UK Parliament — Indian Independence Act 1947: https://www.parliament.uk/about/living-heritage/transformingsociety/tradeindustry/empire/collections1/collections2/indian-independence-act-1947/",
        "difficulty": "medium",
        "subcategory": "تقسيم الدول",
        "tags": [
          "تقسيم الهند",
          "باكستان",
          "1947"
        ],
        "external_id": "geo-border-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي خط هدنة رُسم سنة 1949 بين إسرائيل والأردن، واشتهر باسم «الخط الأخضر»؟",
        "options": [
          "خط سايكس–بيكو",
          "خط الهدنة المحدد على خرائط اتفاقيات رودس",
          "خط بارليف",
          "خط الهدنة بين لبنان وسوريا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نشأ الخط الأخضر من خطوط الهدنة لعام 1949، وسمي بلون القلم المستخدم على الخرائط. نصت اتفاقية الهدنة الأردنية الإسرائيلية على أن الخطوط لا تمس التسويات الإقليمية أو الحدود النهائية، لذا هو خط هدنة تاريخي لا معاهدة حدود نهائية بذاته.",
        "source": "United Nations Peacemaker — Israel-Jordan General Armistice Agreement (1949): https://peacemaker.un.org/israeljordan-generalarmistice49",
        "difficulty": "medium",
        "subcategory": "خطوط هدنة",
        "tags": [
          "الخط الأخضر",
          "1949",
          "الأردن"
        ],
        "external_id": "geo-border-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي خط عرض اعتمدته الهدنة الكورية سنة 1953 بوصفه الحد الفعلي النهائي؟",
        "options": [
          "خط العرض 38 كاملًا",
          "خط العرض 39 كاملًا",
          "لم تعتمد خط عرض ثابتًا؛ أنشأت خط ترسيم عسكريًا وفق مواقع الجبهات",
          "خط العرض 37 كاملًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان خط العرض 38 أساس التقسيم الأول بعد الحرب العالمية الثانية، لكن اتفاقية هدنة 1953 رسمت خط الترسيم العسكري قرب مواقع القتال، تحيط به منطقة منزوعة السلاح. لذلك لا يطابق الحد الفعلي خط 38 على امتداده.",
        "source": "United Nations Command — Korean Armistice Agreement: https://www.unc.mil/History/1951-1953-Armistice-Negotiations/",
        "difficulty": "medium",
        "subcategory": "حدود عسكرية",
        "tags": [
          "كوريا",
          "المنطقة المنزوعة السلاح",
          "1953"
        ],
        "external_id": "geo-border-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي دولة أفريقية نالت استقلالها سنة 1993 بعد استفتاء، فأصبحت إثيوبيا دولة حبيسة؟",
        "options": [
          "إريتريا",
          "جيبوتي",
          "جنوب السودان",
          "الصومال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أفضى استفتاء أشرفت عليه الأمم المتحدة إلى استقلال إريتريا عام 1993. وبخروج الساحل الإريتري من السيادة الإثيوبية فقدت إثيوبيا منفذها إلى البحر الأحمر وأصبحت حبيسة.",
        "source": "United Nations — UNOVER, Eritrea: https://peacekeeping.un.org/mission/past/unneritrea.htm",
        "difficulty": "medium",
        "subcategory": "استقلال وتغير حدود",
        "tags": [
          "إريتريا",
          "إثيوبيا",
          "1993"
        ],
        "external_id": "geo-border-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي نهر يشكل أجزاء مهمة من الحدود الحالية بين ألمانيا وبولندا، إلى جانب رافده نيسه اللوساتية؟",
        "options": [
          "الأودر",
          "الإلبه",
          "الراين",
          "الدانوب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمثل خط أودر–نيسه أساس الحدود الألمانية البولندية التي تشكلت بعد الحرب العالمية الثانية وأكدتها ألمانيا الموحدة وبولندا بمعاهدة عام 1990. الأودر هو النهر الرئيس في هذا الوصف، والنيسه اللوساتية رافده الحدودي.",
        "source": "German Federal Foreign Office — German-Polish relations: https://www.auswaertiges-amt.de/en/aussenpolitik/polen-228588",
        "difficulty": "medium",
        "subcategory": "حدود نهرية",
        "tags": [
          "الأودر",
          "بولندا",
          "ألمانيا"
        ],
        "external_id": "geo-border-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في تسوية مؤتمر فيينا سنة 1815، أُنشئت «المملكة المتحدة للأراضي المنخفضة» أساسًا بضم أي منطقتين؟",
        "options": [
          "هولندا والدنمارك",
          "بلجيكا ولوكسمبورغ فقط",
          "المقاطعات الهولندية شمالًا والأراضي البلجيكية جنوبًا",
          "هولندا وهانوفر"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع ترتيب ما بعد نابليون المقاطعات الهولندية في الشمال بالأراضي البلجيكية السابقة في الجنوب ضمن مملكة واحدة لتكون حاجزًا شمال فرنسا. انفصلت بلجيكا بثورة 1830 واعترف باستقلالها لاحقًا.",
        "source": "Encyclopaedia Britannica — Congress of Vienna: https://www.britannica.com/event/Congress-of-Vienna",
        "difficulty": "high",
        "subcategory": "مؤتمرات التسوية",
        "tags": [
          "مؤتمر فيينا",
          "بلجيكا",
          "هولندا"
        ],
        "external_id": "geo-border-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تسوية أوروبية سنة 1648 ارتبطت بالاعتراف باستقلال المقاطعات المتحدة الهولندية والاتحاد السويسري عن الإمبراطورية الرومانية المقدسة؟",
        "options": [
          "صلح أوترخت",
          "معاهدة توردسيلاس",
          "صلح وستفاليا",
          "مؤتمر برلين"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنهت معاهدات وستفاليا حرب الثلاثين عامًا سنة 1648، واعترفت رسميًا باستقلال الجمهورية الهولندية والاتحاد السويسري. أما أوترخت فارتبط بحرب الخلافة الإسبانية في القرن الثامن عشر.",
        "source": "Encyclopaedia Britannica — Peace of Westphalia: https://www.britannica.com/event/Peace-of-Westphalia",
        "difficulty": "high",
        "subcategory": "معاهدات أوروبا",
        "tags": [
          "وستفاليا",
          "1648",
          "سويسرا"
        ],
        "external_id": "geo-border-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الوظيفة الجغرافية السياسية الأساسية لـ«ممر واخان» كما تشكل في أواخر القرن التاسع عشر؟",
        "options": [
          "منح روسيا منفذًا مباشرًا إلى المحيط الهندي",
          "فصل أراضي الإمبراطورية الروسية عن الهند البريطانية بمنطقة أفغانية عازلة",
          "ربط إيران بالصين عبر سيادة إيرانية",
          "فصل أفغانستان عن الصين كليًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ثُبت لسان واخان الأفغاني في سياق «اللعبة الكبرى» ليعمل حاجزًا بين مناطق النفوذ الروسية شمالًا والهند البريطانية جنوبًا. وهو يصل أفغانستان بحد قصير مع الصين بدل أن يفصل بينهما.",
        "source": "Encyclopaedia Britannica — Wakhan Corridor: https://www.britannica.com/place/Wakhan-Corridor",
        "difficulty": "high",
        "subcategory": "مناطق عازلة",
        "tags": [
          "واخان",
          "أفغانستان",
          "اللعبة الكبرى"
        ],
        "external_id": "geo-border-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في خريطة التقسيم الاستعماري لجزيرة غينيا الجديدة قبل الحرب العالمية الأولى، أي قوة كانت تسيطر على النصف الغربي؟",
        "options": [
          "هولندا",
          "ألمانيا",
          "بريطانيا",
          "البرتغال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان الغرب جزءًا من جزر الهند الشرقية الهولندية، بينما تقاسم الشرق نفوذ بريطاني/أسترالي في الجنوب وألماني في الشمال الشرقي. يفسر هذا الإرث بقاء الجزيرة اليوم مقسمة بين إندونيسيا وبابوا غينيا الجديدة.",
        "source": "Encyclopaedia Britannica — New Guinea: https://www.britannica.com/place/New-Guinea",
        "difficulty": "high",
        "subcategory": "تقسيم استعماري",
        "tags": [
          "غينيا الجديدة",
          "هولندا",
          "الاستعمار"
        ],
        "external_id": "geo-border-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مبدأ قانوني استُخدم على نطاق واسع عند استقلال دول أمريكا اللاتينية ثم أفريقيا، ويقضي باحترام الحدود الإدارية السابقة بوصفها حدودًا دولية؟",
        "options": [
          "أوتي بوسيديتيس يوريس",
          "حرية البحار",
          "الحدود الطبيعية الحتمية",
          "السيادة المشتركة الدائمة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقضي مبدأ uti possidetis juris بأن ترث الدول الجديدة الحدود الإدارية التي كانت قائمة عند الاستقلال، بهدف تقليل الفراغ والنزاع الإقليمي. أكدته محكمة العدل الدولية في قضية النزاع الحدودي بين بوركينا فاسو ومالي.",
        "source": "International Court of Justice — Frontier Dispute (Burkina Faso/Republic of Mali), Judgment of 22 December 1986: https://www.icj-cij.org/case/69",
        "difficulty": "high",
        "subcategory": "قانون الحدود",
        "tags": [
          "أوتي بوسيديتيس",
          "محكمة العدل الدولية",
          "الاستقلال"
        ],
        "external_id": "geo-border-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي نوع من الخطوط يمثل «خط السيطرة» في كشمير وفق اتفاق شملا لعام 1972؟",
        "options": [
          "حد دولي نهائي رسمته الأمم المتحدة بين الهند والصين",
          "خط فصل للسيطرة الفعلية بين الهند وباكستان، وليس حدًا دوليًا نهائيًا متفقًا عليه",
          "حد استعماري بين أفغانستان وباكستان",
          "خط ملاحة نهرية بين الهند وبنغلادش"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعاد اتفاق شملا تسمية خط وقف إطلاق النار في كشمير «خط السيطرة» وألزم الطرفين باحترامه دون مساس بالمواقف القانونية لكل منهما. لذا يصف توزيع السيطرة بين الهند وباكستان، ولا يحسم السيادة النهائية.",
        "source": "United Nations Peacemaker — Simla Agreement (1972): https://peacemaker.un.org/indiapakistan-simlaagreement72",
        "difficulty": "high",
        "subcategory": "حدود متنازع عليها",
        "tags": [
          "كشمير",
          "خط السيطرة",
          "اتفاق شملا"
        ],
        "external_id": "geo-border-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يميز «خط ماكماهون» المرسوم في مؤتمر شملا 1914؟",
        "options": [
          "حد نهائي بين الهند وباكستان في البنجاب",
          "خط اقترح للحد بين التبت والهند البريطانية في القطاع الشرقي، وتنازع الصين في شرعيته",
          "خط فصل روسي أفغاني في واخان",
          "حد بحري بين الصين واليابان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ارتبط خط ماكماهون بتفاهمات مؤتمر شملا بين ممثلي بريطانيا والتبت، وهو أساس مطالبة الهند بحدها الشرقي في منطقة أروناتشال براديش. لم تقبل الصين الاتفاق، ولذلك بقيت شرعية الخط موضع نزاع.",
        "source": "Encyclopaedia Britannica — McMahon Line: https://www.britannica.com/event/McMahon-Line",
        "difficulty": "high",
        "subcategory": "حدود آسيوية متنازع عليها",
        "tags": [
          "خط ماكماهون",
          "التبت",
          "الهند"
        ],
        "external_id": "geo-border-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي قرار اتخذه مؤتمر منظمة الوحدة الأفريقية بالقاهرة سنة 1964 بشأن الحدود الموروثة؟",
        "options": [
          "إعادة رسم كل الحدود وفق التوزيع اللغوي",
          "إلغاء الحدود بين الدول الأعضاء",
          "احترام الحدود القائمة عند نيل الاستقلال",
          "إعادة حدود أفريقيا إلى وضع عام 1884"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعلن قرار القاهرة AHG/Res.16(I) التزام الدول الأعضاء باحترام الحدود القائمة وقت الاستقلال. كان المقصود الحد من موجة نزاعات إعادة الرسم في قارة ورثت حدودًا استعمارية كثيرة.",
        "source": "African Union — Border Governance Strategy (citing OAU Resolution AHG/Res.16(I)): https://au.int/en/documents/20200214/african-union-border-governance-strategy",
        "difficulty": "high",
        "subcategory": "حدود أفريقيا",
        "tags": [
          "منظمة الوحدة الأفريقية",
          "1964",
          "الحدود الموروثة"
        ],
        "external_id": "geo-border-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "عند تفكك تشيكوسلوفاكيا سلميًا في 1 يناير 1993، ما الدولتان اللتان ورثتا أراضيها؟",
        "options": [
          "التشيك وسلوفينيا",
          "سلوفاكيا وكرواتيا",
          "التشيك والمجر",
          "جمهورية التشيك وسلوفاكيا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنهى «الطلاق المخملي» الاتحاد التشيكوسلوفاكي وأنشأ جمهورية التشيك والجمهورية السلوفاكية. لا علاقة لسلوفينيا، وهي إحدى جمهوريات يوغوسلافيا السابقة، بهذا الانقسام.",
        "source": "Encyclopaedia Britannica — Czechoslovak history: https://www.britannica.com/place/Czechoslovakia",
        "difficulty": "high",
        "subcategory": "تفكك الدول",
        "tags": [
          "تشيكوسلوفاكيا",
          "الطلاق المخملي",
          "1993"
        ],
        "external_id": "geo-border-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي جمهورية سوفيتية سابقة فصلت جغرافيًا بين الكتلة الرئيسة لأرمينيا وإقليم ناخيتشيفان التابع لأذربيجان بعد 1991؟",
        "options": [
          "جورجيا",
          "تركمانستان",
          "أوكرانيا",
          "أرمينيا نفسها تفصل الكتلة الأذربيجانية الرئيسة عن ناخيتشيفان"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ناخيتشيفان جمهورية ذاتية الحكم تابعة لأذربيجان لكنها منفصلة عن كتلتها الرئيسة؛ تقع أرمينيا بينهما، بينما يحد ناخيتشيفان أيضًا إيران وتركيا. لذلك الصياغة الأدق أن أراضي أرمينيا تفصل الجزأين الأذربيجانيين.",
        "source": "Encyclopaedia Britannica — Naxçıvan: https://www.britannica.com/place/Naxcivan-republic-Azerbaijan",
        "difficulty": "high",
        "subcategory": "أقاليم منفصلة",
        "tags": [
          "ناخيتشيفان",
          "أذربيجان",
          "أرمينيا"
        ],
        "external_id": "geo-border-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بموجب اتفاقية الأمم المتحدة لقانون البحار، ما خط الأساس المعتاد الذي يقاس منه عرض البحر الإقليمي؟",
        "options": [
          "خط أدنى الجَزْر على طول الساحل كما يظهر في الخرائط المعترف بها رسميًا",
          "حافة الجرف القاري الجيولوجية",
          "خط يبعد 200 ميل بحري عن الساحل",
          "الحد الخارجي للمياه الدولية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنص المادة 5 من الاتفاقية على أن خط الأساس العادي هو خط أدنى الجزر المرسوم على خرائط ساحلية كبيرة المقياس معترف بها رسميًا من الدولة الساحلية. أما 200 ميل بحري فترتبط بالمنطقة الاقتصادية الخالصة، لا بخط الأساس.",
        "source": "United Nations — Convention on the Law of the Sea, Article 5: https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf",
        "difficulty": "high",
        "subcategory": "حدود بحرية",
        "tags": [
          "قانون البحار",
          "خط الأساس",
          "أدنى الجزر"
        ],
        "external_id": "geo-border-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في ترسيم بحر إقليمي بين دولتين متقابلتين أو متجاورتين وفق المادة 15 من اتفاقية قانون البحار، ما القاعدة الافتراضية عند غياب اتفاق أو حقوق تاريخية أو ظروف خاصة؟",
        "options": [
          "امتداد الحدود البرية في خط مستقيم دائمًا",
          "منح البحر كله للدولة ذات الساحل الأطول",
          "خط الوسط المتساوي البعد عن أقرب نقاط خطي الأساس",
          "اتباع أعمق مجرى ملاحي دون استثناء"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تمنع المادة 15 مد البحر الإقليمي وراء خط وسط تتساوى نقاطه في البعد عن أقرب نقاط خطوط الأساس، ما لم يوجد اتفاق مختلف أو عنوان تاريخي أو ظروف خاصة تستلزم حلًا آخر.",
        "source": "United Nations — Convention on the Law of the Sea, Article 15: https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf",
        "difficulty": "high",
        "subcategory": "ترسيم بحري",
        "tags": [
          "خط الوسط",
          "البحر الإقليمي",
          "المادة 15"
        ],
        "external_id": "geo-border-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي خط حدودي استعماري رُسم باتفاق 1893 بين الأمير عبد الرحمن خان والسير مورتيمر دوراند؟",
        "options": [
          "خط رادكليف بين الهند وباكستان",
          "خط ماكماهون بين الهند والتبت",
          "خط كرزون بين بولندا وروسيا",
          "خط دوراند بين أفغانستان والهند البريطانية، وهو اليوم أساس الحدود الأفغانية الباكستانية"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حدد اتفاق 1893 نطاقي النفوذ الأفغاني والبريطاني بخط دوراند. ورثت باكستان الجانب البريطاني عند استقلالها عام 1947، لكن قبول الخط حدًا دوليًا ظل موضع خلاف سياسي أفغاني باكستاني.",
        "source": "Encyclopaedia Britannica — Durand Line: https://www.britannica.com/place/Durand-Line",
        "difficulty": "high",
        "subcategory": "حدود استعمارية",
        "tags": [
          "خط دوراند",
          "أفغانستان",
          "باكستان"
        ],
        "external_id": "geo-border-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في عام 1919، أي ممر منحته أفغانستان للاتحاد السوفيتي فعليًا بفعل الحدود القائمة؟",
        "options": [
          "ممر سووالكي",
          "ممر فولدا",
          "ممر كابريفي",
          "لم تمنح ممرًا؛ السؤال يفترض واقعة غير صحيحة، وممر واخان كان قد ثُبت قبل قيام الاتحاد السوفيتي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هذا سؤال تدقيق زمني: الاتحاد السوفيتي لم يُنشأ إلا سنة 1922، وممر واخان تشكل في ترتيبات أواخر القرن التاسع عشر كمنطقة أفغانية عازلة بين الإمبراطوريتين الروسية والبريطانية. لذا لا تصح نسبة «منحه للاتحاد السوفيتي» إلى 1919.",
        "source": "Encyclopaedia Britannica — Wakhan Corridor: https://www.britannica.com/place/Wakhan-Corridor",
        "difficulty": "high",
        "subcategory": "تدقيق زمني جغرافي",
        "tags": [
          "واخان",
          "الاتحاد السوفيتي",
          "التسلسل الزمني"
        ],
        "external_id": "geo-border-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي معاهدة عام 1923 حددت الإطار الدولي لحدود تركيا الحديثة وحلت محل معاهدة سيفر غير المنفذة؟",
        "options": [
          "معاهدة سان ستيفانو",
          "معاهدة لوزان",
          "معاهدة برلين 1878",
          "معاهدة مونترو"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اعترفت معاهدة لوزان سنة 1923 بحدود الدولة التركية الجديدة في إطار تسوية ما بعد حرب الاستقلال التركية، وحلت محل تسوية سيفر لعام 1920 التي لم تدخل حيز التطبيق. أما مونترو 1936 فنظمت نظام المضائق التركية.",
        "source": "Encyclopaedia Britannica — Treaty of Lausanne: https://www.britannica.com/event/Treaty-of-Lausanne-1923",
        "difficulty": "high",
        "subcategory": "معاهدات الشرق الأوسط",
        "tags": [
          "لوزان",
          "تركيا",
          "1923"
        ],
        "external_id": "geo-border-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-general-anime-classic-shonen-events-01",
    "user_id": "system",
    "title": "أحداث ومصطلحات الشونين الكلاسيكي",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أنمي",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في دراغون بول، عندما شرح كايو-ساما تقنية «كايو-كين»، ما الذي يميزها عن التحول إلى هيئة ثابتة؟",
        "options": [
          "تحول طاقة الخصم إلى طاقة دائمة للمستخدم",
          "تمنح الخلود ما دام المستخدم محافظًا على هالته",
          "تستدعي طاقة الكائنات الحية في كرة واحدة",
          "تضاعف الطاقة والسرعة مؤقتًا مع تعريض الجسد لإجهاد خطير"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 0,
        "question_type": "multi",
        "explanation": "كايو-كين تضخّم طاقة غوكو وسرعته وقوته لفترة قصيرة، لكن رفع معاملها فوق قدرة الجسد يمزقه بالإجهاد. أما جمع طاقة الكائنات في كرة فهو مبدأ غينكي داما، لا كايو-كين.",
        "difficulty": "medium",
        "tags": [
          "دراغون بول",
          "كايو-كين",
          "تقنيات"
        ],
        "source": "أكيرا تورياما، Dragon Ball، شوئيشا، الفصل 226 (المجلد 20)، شرح كايو-ساما للكايو-كين.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "أي شرط حاسم مكّن غوهان من هزيمة سيل الكامل في صدام الكاميها ميها الأخير؟",
        "options": [
          "اندماجه المؤقت مع غوكو",
          "دعم غوكو المعنوي من العالم الآخر وتشتيت فيجيتا لسيل",
          "امتصاصه طاقة أندرويد 18",
          "استخدامه كايو-كين فوق السوبر سايان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 1,
        "question_type": "multi",
        "explanation": "كان غوهان مصابًا ويطلق الموجة بيد واحدة؛ شجعه غوكو من العالم الآخر، ووفرت ضربة فيجيتا اللحظة التي كسر فيها غوهان مقاومة سيل. لم يقع اندماج أو امتصاص أو كايو-كين في هذا الحسم.",
        "difficulty": "high",
        "tags": [
          "دراغون بول",
          "سيل",
          "غوهان"
        ],
        "source": "أكيرا تورياما، Dragon Ball، شوئيشا، الفصل 416 (المجلد 35)، نهاية ألعاب سيل.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في ون بيس، لماذا كانت قدرة إنيل الكهربائية عاجزة عن إيذاء لوفي مباشرة رغم تفوقها الهائل على معظم خصوم سكايبيا؟",
        "options": [
          "لأن لوفي كان يستخدم هاكي التسلح دون وعي",
          "لأن جسد لوفي المطاطي عازل للكهرباء",
          "لأن قبعة القش تمتص الكهرباء",
          "لأن جرس شاندورا أبطل فاكهة إنيل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "question_type": "multi",
        "explanation": "جسد لوفي المطاطي لا يوصل الكهرباء، ولذلك لم تعمل صواعق إنيل عليه كما عملت على الآخرين. هذه مواجهة خصائص بين فاكهة المطاط وغورو غورو نو مي، وليست نتيجة هاكي أو أداة خارجية.",
        "difficulty": "medium",
        "tags": [
          "ون بيس",
          "سكايبيا",
          "فواكه الشيطان"
        ],
        "source": "إييتشيرو أودا، ONE PIECE، شوئيشا، الفصل 279 (المجلد 30)، مواجهة لوفي وإنيل.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "ما الوظيفة الأصلية لـ«البونغليف» ذي اللون الأزرق المعتاد مقارنةً بـ«رود بونغليف» الأحمر في ون بيس؟",
        "options": [
          "الأزرق ينقل معلومات تاريخية أو تعليمات، والأحمر يعطي نقطة جغرافية لازمة لتحديد Laugh Tale",
          "الأزرق يحدد إحداثيًا واحدًا للـLaugh Tale، والأحمر يسجل أسلحة فقط",
          "الأزرق لا يقرأه إلا أصحاب حرف D، والأحمر يقرأه الجميع",
          "الأزرق صنعته الحكومة العالمية، والأحمر صنعه القراصنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 3,
        "question_type": "multi",
        "explanation": "البونغليفات العادية تحمل نصوصًا تاريخية أو معلومات، ومنها ما يرشد إلى موضع نوع آخر؛ أما أحجار الطريق الحمراء الأربعة فتعطي نقاطًا يُستخرج من تقاطعها موقع Laugh Tale.",
        "difficulty": "high",
        "tags": [
          "ون بيس",
          "بونغليف",
          "Laugh Tale"
        ],
        "source": "إييتشيرو أودا، ONE PIECE، شوئيشا، الفصلان 818 و846 (المجلدان 82 و84)، شرح رود بونغليف.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في نظام التشاكرا بناروتو، ماذا يحدث عند مزج التحول في طبيعة الرياح بالتحول في طبيعة الماء وفق المثال الأشهر في السلسلة؟",
        "options": [
          "ينتج عنصر الخشب",
          "ينتج عنصر الجليد",
          "ينتج عنصر الغليان",
          "ينتج عنصر المغناطيس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "question_type": "multi",
        "explanation": "إطلاق الجليد (Hyōton) كِكّاي غِنكاي يمزج طبيعتي الماء والرياح، كما يظهر مع هاكو. الخشب يمزج الماء والأرض، بينما الغليان يمزج الماء والنار.",
        "difficulty": "medium",
        "tags": [
          "ناروتو",
          "تشاكرا",
          "ككّاي غنكاي"
        ],
        "source": "ماساشي كيشيموتو، Naruto، شوئيشا، الفصل 24 (المجلد 3)؛ Naruto Official Character Data Book، قسم هاكو.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "لماذا عُدّ ختم «الشينيغامي» الذي استخدمه الهوكاغي الثالث ضد أوروتشيمارو تضحية لا نينجتسو عادية؟",
        "options": [
          "لأنه يمحو ذاكرة المستخدم نهائيًا",
          "لأنه ينقل عمر المستخدم إلى الخصم",
          "لأن الشينيغامي يلتهم روح المستخدم بعد انتزاع روح الهدف",
          "لأنه يمنع المستخدم من استعمال التشاكرا شهرًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 5,
        "question_type": "multi",
        "explanation": "شيكي فوجين يستدعي إله الموت لانتزاع الروح وختمها، ثم تكون روح المستعمل نفسه ثمن التقنية. لذلك مات هيروزن بعد أن ختم ذراعي أوروتشيمارو، كما مات ميناتو بعد استعمالها سابقًا.",
        "difficulty": "high",
        "tags": [
          "ناروتو",
          "شيكي فوجين",
          "أختام"
        ],
        "source": "ماساشي كيشيموتو، Naruto، شوئيشا، الفصول 123–124 (المجلد 14)، ختام قتال هيروزن وأوروتشيمارو.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "أي فرق جوهري يفصل «الشikai» عن «البانكاي» في بليتش؟",
        "options": [
          "الشikai إطلاق أول لاسم وقوة الزانباكتو، والبانكاي إطلاقها النهائي المكتمل",
          "الشikai خاص بالكيدو، والبانكاي خاص بالهولو",
          "الشikai لا يحتاج زانباكتو، والبانكاي يحتاج سيفين",
          "الشikai لا يستعمله إلا القادة، والبانكاي متاح لكل الشينيغامي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "question_type": "multi",
        "explanation": "الشikai هو مرحلة الإطلاق الأول للزانباكتو بعد معرفة اسمه، بينما البانكاي هو الإطلاق النهائي الذي يتطلب تجسيد روح السيف وإخضاعها عادةً. امتلاك البانكاي نادر ومقياس تقليدي لقدرة القادة.",
        "difficulty": "medium",
        "tags": [
          "بليتش",
          "زانباكتو",
          "بانكاي"
        ],
        "source": "تايت كوبو، BLEACH، شوئيشا، الفصل 120 (المجلد 14)، شرح يورويتشي لتدريب البانكاي.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "ما الذي كشفه أوراهارا عن «الهوجيوكو» بما يصحح الفكرة القائلة إنه مجرد أداة تفصل حدود الشينيغامي والهولو؟",
        "options": [
          "أنه يخزن أرواحًا بشرية ثم يعيدها للحياة",
          "أنه يحقق رغبات المحيطين به إذا امتلكوا القدرة الكامنة لتحقيقها",
          "أنه يلغي أسماء الزانباكتو",
          "أنه نسخة صناعية من ملك الأرواح بلا إرادة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 7,
        "question_type": "multi",
        "explanation": "يشرح أوراهارا أن القوة الحقيقية للهوجيوكو هي التقاط قلوب من حوله وتجسيد رغباتهم حين تكون لديهم قابلية تحقيقها؛ تجاوز حدود الشينيغامي والهولو كان تطبيقًا لهذه الخاصية، لا تعريفها الكامل.",
        "difficulty": "high",
        "tags": [
          "بليتش",
          "هوجيوكو",
          "أوراهارا"
        ],
        "source": "تايت كوبو، BLEACH، شوئيشا، الفصل 401 (المجلد 46)، تفسير أوراهارا لطبيعة الهوجيوكو.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في هنتر × هنتر، أي مبدأ من مبادئ النين الأربعة يخفي الهالة ويجعل المستخدم أكثر عرضة لضربات النين؟",
        "options": [
          "زيتسو Zetsu",
          "تين Ten",
          "رين Ren",
          "هاتسو Hatsu"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 8,
        "question_type": "multi",
        "explanation": "زيتسو يغلق عقد الهالة ويوقف تدفقها، فيفيد في إخفاء الحضور واستعادة النشاط، لكنه يترك الجسد بلا غلاف هالة واقٍ أمام هجوم نين. تين يحافظ على الغلاف، ورين يضخم الخرج.",
        "difficulty": "medium",
        "tags": [
          "هنتر × هنتر",
          "نين",
          "زيتسو"
        ],
        "source": "يوشيهيرو توغاشي، HUNTER×HUNTER، شوئيشا، الفصل 47 (المجلد 6)، تعليم وينغ مبادئ النين.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "كيف زاد كورابيكا فاعلية «Chain Jail» إلى حد إخضاع أعضاء العنكبوت الأقوياء؟",
        "options": [
          "ضحّى بحاسة البصر كلما استخدم السلسلة",
          "اشترط أن يكون القمر مكتملًا",
          "ربطها بقسم لاستخدامها على العنكبوت فقط، على أن يموت إن استعملها على غيرهم",
          "نقل ملكية السلسلة إلى الإمبراطور تايم"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 9,
        "question_type": "multi",
        "explanation": "فرض كورابيكا قيدًا وقسمًا شديدين: Chain Jail مخصصة لأعضاء فرقة العنكبوت، واستخدامها على سواهم يفعّل Judgement Chain المغروسة في قلبه ويقتله. شدة المخاطرة رفعت قوة السلسلة.",
        "difficulty": "high",
        "tags": [
          "هنتر × هنتر",
          "كورابيكا",
          "القيود والقسم"
        ],
        "source": "يوشيهيرو توغاشي، HUNTER×HUNTER، شوئيشا، الفصل 108 (المجلد 12)، كشف شروط سلاسل كورابيكا.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في يو يو هاكوشو، ما الصفة التي جعلت «ريغان» يوسكي ملائمًا لمواجهة الأرواح والشياطين؟",
        "options": [
          "إنه سيف مصنوع من طاقة شيطانية مسروقة",
          "إنه طاقة روحية مركزة يطلقها من إصبعه",
          "إنه تعويذة توقف الزمن",
          "إنه حاجز يعكس أي هجوم جسدي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 10,
        "question_type": "multi",
        "explanation": "الريغان، أو المسدس الروحي، يركز ريكي يوسكي في طلقة من السبابة. نمو مخزونه الروحي وتدريبه يرفعان عدد الطلقات وقوتها؛ ليست التقنية سيفًا أو حاجزًا.",
        "difficulty": "medium",
        "tags": [
          "يو يو هاكوشو",
          "ريغان",
          "طاقة روحية"
        ],
        "source": "يوشيهيرو توغاشي، Yu Yu Hakusho، شوئيشا، الفصل 18 (المجلد 3)، تدريب يوسكي على الريغان.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "ما الغرض الحقيقي من بطولة الظلام في خطة توغورو الأصغر، بعيدًا عن الجائزة الرسمية للبطولة؟",
        "options": [
          "الحصول على كتاب أسرار عالم الأرواح",
          "فتح بوابة دائمة إلى عالم البشر",
          "استعادة جسده البشري والتخلي عن الشيطنة",
          "إجبار يوسكي على بلوغ قوة تكفي لمنحه قتالًا حتى الموت"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 11,
        "question_type": "multi",
        "explanation": "دفع توغورو يوسكي وفريقه إلى البطولة ورفع الضغط عليهم كي ينضج يوسكي إلى خصم يستطيع قتاله بكامل قوته. كان يبحث عن اختبار نهائي وعقاب ذاتي مرتبط بماضيه، لا عن ثروة البطولة.",
        "difficulty": "high",
        "tags": [
          "يو يو هاكوشو",
          "توغورو",
          "بطولة الظلام"
        ],
        "source": "يوشيهيرو توغاشي، Yu Yu Hakusho، شوئيشا، الفصول 108–111 (المجلد 12)، ختام بطولة الظلام.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في سانت سيا، ما العلاقة بين «الكوزمو» والحاسة السابعة التي يحتاجها البرونزيون لمجاراة فرسان الذهب؟",
        "options": [
          "الحاسة السابعة تلغي الكوزمو وتستبدله بالسحر",
          "الكوزمو درع مادي والحاسة السابعة سلاح مستقل",
          "الحاسة السابعة لا تُستخدم إلا في العالم السفلي",
          "إيقاظ الحاسة السابعة يعني تفجير الكوزمو إلى مستوى يتجاوز الحواس الست"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 12,
        "question_type": "multi",
        "explanation": "الكوزمو هو الكون الداخلي الذي يحرقه القديس ليولد القوة؛ وإدراك الحاسة السابعة يرفع هذا الاحتراق إلى المجال الذي يتحرك ويقاتل فيه فرسان الذهب، بما في ذلك سرعة الضوء.",
        "difficulty": "medium",
        "tags": [
          "سانت سيا",
          "كوزمو",
          "الحاسة السابعة"
        ],
        "source": "ماسامي كورومادا، Saint Seiya، شوئيشا، الفصل 46 (المجلد 8)، شرح مو للحاسة السابعة في معابد الذهب.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "لماذا لم يكن الوصول إلى «الحاسة الثامنة» في فصل هاديس مجرد زيادة هجومية جديدة؟",
        "options": [
          "لأنها تحول الدرع البرونزي إلى ذهبي دائمًا",
          "لأنها تعيد جميع الموتى إلى الحياة",
          "لأنها تسمح بالذهاب إلى العالم السفلي أحياءً مع الاحتفاظ بالإرادة والقدرة",
          "لأنها تمنع آلهة الأولمب من استعمال الكوزمو"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 13,
        "question_type": "multi",
        "explanation": "الحاسة الثامنة، أراياشيكي، تتيح للقديس أن يدخل عالم الموتى دون أن يخضع لقوانينه كروح ميتة فاقدة للحرية. لذا كانت مفتاح غزو عالم هاديس أحياءً، لا مضاعف ضرر بسيطًا.",
        "difficulty": "high",
        "tags": [
          "سانت سيا",
          "هاديس",
          "أراياشيكي"
        ],
        "source": "ماسامي كورومادا، Saint Seiya، شوئيشا، الفصل 86 (المجلد 22)، شرح شاكا لأراياشيكي.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في روروني كنشن، لماذا يستخدم كنشن سيف «ساكاباتو» ذا النصل المعكوس؟",
        "options": [
          "لأنه لا يستطيع سحب سيف تقليدي من غمده",
          "لأن النصل المعكوس وحده يقطع الدروع",
          "لأنه سلاح رسمي تمنحه حكومة ميجي للشرطة",
          "ليفي بنذره ألّا يقتل بعد عصر الباكوماتسو مع بقائه قادرًا على القتال"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 14,
        "question_type": "multi",
        "explanation": "يحمل كنشن الساكاباتو كي يقاتل بحافة غير قاتلة بعد أن أقسم ألّا يعود إلى القتل الذي مارسه بصفته هيتوكيري باتوساي. السيف رمز عملي لتكفيره، لا سلاحًا حكوميًا.",
        "difficulty": "medium",
        "tags": [
          "روروني كنشن",
          "ساكاباتو",
          "كنشن"
        ],
        "source": "نوبوهيرو واتسوكي، Rurouni Kenshin، شوئيشا، الفصل 1 (المجلد 1)، تقديم الساكاباتو ونذر كنشن.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "ما المبدأ الذي يجعل «أماكاكيرو ريو نو هيراميكي» أخطر من بقية تقنيات هيتن ميتسوروغي في تدريب كنشن؟",
        "options": [
          "لا تعمل إلا إذا كان السيف مكسورًا",
          "تمتص قوة ضربة الخصم بلا حركة",
          "تتطلب خطوة أولى بالقدم اليسرى تتحدى غريزة المبارز وتحافظ على استمرار الدوران",
          "تستلزم قتل المعلم لانتقال التقنية سحريًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 15,
        "question_type": "multi",
        "explanation": "سر التقنية ضربة باتّوجوتسو فائقة تتقدم فيها القدم اليسرى؛ الخطوة غير المألوفة تمنع توقف الجسد وتزيد التسارع، لكن الخطأ يعرّض الساق والنفس لخطر قاتل. اجتيازها ارتبط أيضًا بإرادة كنشن في الحياة.",
        "difficulty": "high",
        "tags": [
          "روروني كنشن",
          "هيتن ميتسوروغي",
          "أوغي"
        ],
        "source": "نوبوهيرو واتسوكي، Rurouni Kenshin، شوئيشا، الفصول 94–95 (المجلد 12)، تدريب هيكو سيجورو لكنشن.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في ناروتو، لماذا لم يكن «إيزاناغي» عند دانزو وسيلة مجانية لإلغاء الموت أو الإصابة؟",
        "options": [
          "لأنه يحتاج موافقة الكيوبي في كل مرة",
          "لأنه يعيد الزمن للعالم كله ويحذف ذاكرة المستخدم",
          "لأنه يعمل مرة واحدة لكل عشيرة لا لكل شخص",
          "لأن كل تفعيل يستهلك شارينغان ويغلق عينًا مستخدمة بعد مدة محدودة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 16,
        "question_type": "multi",
        "explanation": "إيزاناغي يحول الضرر والموت الواقعين على المستخدم إلى وهم خلال نافذة قصيرة، لكنه يفقد نور الشارينغان التي تديره. لذلك زرع دانزو عدة عيون في ذراعه لتمديد مرات الاستخدام.",
        "difficulty": "high",
        "tags": [
          "ناروتو",
          "إيزاناغي",
          "دانزو"
        ],
        "source": "ماساشي كيشيموتو، Naruto، شوئيشا، الفصول 478–480 (المجلد 51)، قتال ساسكي ودانزو.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في ون بيس، ما الفارق الوظيفي بين «مانترا» سكايبيا و«هاكي التنبؤ» كما اتضح لاحقًا؟",
        "options": [
          "لا فرق جوهريًا؛ مانترا هو الاسم المحلي في سكايبيا لهاكي التنبؤ",
          "مانترا قدرة من فاكهة شيطان، والهاكي تقنية سيف",
          "مانترا تسمع الموتى فقط، والهاكي يقرأ النصوص",
          "مانترا أقوى دائمًا لأنها لا تعتمد على الهدوء"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 17,
        "question_type": "multi",
        "explanation": "المصطلحان يشيران إلى القدرة نفسها: استشعار حضور الآخرين ونواياهم وحركاتهم. سماها أهل جزر السماء «مانترا»، ثم عرّف رايلي التصنيف العام باسم كينبونشوكو هاكي.",
        "difficulty": "high",
        "tags": [
          "ون بيس",
          "مانترا",
          "هاكي التنبؤ"
        ],
        "source": "إييتشيرو أودا، ONE PIECE، شوئيشا، الفصل 597 (المجلد 61)، شرح رايلي لأنواع الهاكي وربط مانترا بها.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في بليتش، ما الذي يجعل «غارغانتا» مختلفًا عن «سينكايمون» في التنقل بين العوالم؟",
        "options": [
          "غارغانتا بوابة للبشر فقط، وسينكايمون للهولو فقط",
          "كلاهما اسم للبوابة نفسها بحسب الترجمة",
          "غارغانتا ممر فضائي يستخدمه الهولو والأرانكار عبر الفراغ، وسينكايمون بوابة الشينيغامي بين عالم الأرواح وعالم البشر",
          "سينكايمون لا ينقل الأجساد بينما غارغانتا لا ينقل الأرواح"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 18,
        "question_type": "multi",
        "explanation": "يفتح الهولو والأرانكار الغارغانتا في الفراغ الواقع بين العوالم، بينما يستعمل الشينيغامي السينكايمون للعبور المنظم، مارّين بالدانغاي عند الربط بين مجتمع الأرواح وعالم البشر.",
        "difficulty": "high",
        "tags": [
          "بليتش",
          "غارغانتا",
          "سينكايمون"
        ],
        "source": "تايت كوبو، BLEACH، شوئيشا، الفصلان 48 و240 (المجلدان 6 و27)، عرض السينكايمون والغارغانتا.",
        "is_verified": true,
        "image_url": null
      },
      {
        "question_text": "في هنتر × هنتر، لماذا كان تحويل غون ضد نيفربيتو أقرب إلى «عقد نين» منه إلى تحول تدريبي طبيعي؟",
        "options": [
          "لأنه قدّم كل موهبته ومستقبله المحتمل ثمنًا لقوة كان سيبلغها بعد سنوات",
          "لأنه استعار هالة كيلوا ثم أعادها",
          "لأنه أكل قلب ملك النمل",
          "لأنه فعّل تخصص الإمبراطور تايم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 19,
        "question_type": "multi",
        "explanation": "في غضبه قيّد غون نفسه بحيث يحصل فورًا على كل القوة التي قد يبلغها مستقبلًا، مقابل التضحية بموهبته وقدرته وحالته الجسدية. لذلك كان الأثر اللاحق مدمرًا ولم يكن مرحلة تدريب قابلة للتكرار.",
        "difficulty": "high",
        "tags": [
          "هنتر × هنتر",
          "غون",
          "عقد النين"
        ],
        "source": "يوشيهيرو توغاشي، HUNTER×HUNTER، شوئيشا، الفصلان 305–307 (المجلد 29)، مواجهة غون ونيفيربيتو.",
        "is_verified": true,
        "image_url": null
      }
    ]
  },
  {
    "id": "lib-general-anime-manga-studios-directors-02",
    "user_id": "system",
    "title": "تفاصيل المانجا، الاستوديوهات والمخرجين",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أنمي",
    "language": "ar",
    "quiz_difficulty": "challenge",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "أي توصيف يطابق انتقال إنتاج أنمي «هجوم العمالقة» التلفزيوني بين الاستوديوهات؟",
        "options": [
          "أنتج MAPPA المواسم الثلاثة الأولى، ثم تولى WIT Studio الموسم الختامي",
          "أنتج Production I.G السلسلة كلها من دون انتقال",
          "أنتج Bones الموسمين الأولين ثم أكمل MAPPA",
          "أنتج WIT Studio المواسم الثلاثة الأولى، ثم تولى MAPPA موسم The Final Season"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 0,
        "question_type": "multi",
        "explanation": "تسجل الصفحات الرسمية WIT Studio جهةً للرسوم المتحركة في المواسم الثلاثة الأولى، بينما تسجل MAPPA في The Final Season. لذلك فالانتقال الصحيح حدث عند بدء الموسم الختامي، لا في منتصف المواسم السابقة.",
        "difficulty": "medium",
        "tags": [
          "هجوم العمالقة",
          "WIT Studio",
          "MAPPA"
        ],
        "source": "الموقع الرسمي لأنمي Attack on Titan، صفحات STAFF للمواسم 1–3 وThe Final Season؛ موقع MAPPA الرسمي، صفحة العمل Attack on Titan The Final Season.",
        "is_verified": true,
        "metadata": {
          "focus": "studio_transition",
          "franchise": "Attack on Titan",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "من المخرج الذي ارتبط بإخراج «كاوبوي بيبوب» التلفزيوني في استوديو Sunrise؟",
        "options": [
          "ساتوشي كون",
          "مامورو أوشي",
          "شينيتشيرو واتانابي",
          "يوسا ماساكي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 1,
        "question_type": "multi",
        "explanation": "اعتمادات المسلسل تسمي شينيتشيرو واتانابي مخرجًا، وكان العمل من إنتاج Sunrise. أما ساتوشي كون ومامورو أوشي ويوسا ماساكي فمخرجون بارزون، لكنهم لم يخرجوا هذا المسلسل.",
        "difficulty": "medium",
        "tags": [
          "كاوبوي بيبوب",
          "Sunrise",
          "شينيتشيرو واتانابي"
        ],
        "source": "الموقع الرسمي Cowboy Bebop، قسم STAFF؛ Sunrise/Bandai Namco Filmworks، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_studio_pair",
          "franchise": "Cowboy Bebop",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "ما الاقتران الصحيح بين أنمي «ديث نوت» التلفزيوني واستوديوه ومخرجه؟",
        "options": [
          "Bones — سيجي ميزوشيما",
          "Production I.G — كينجي كامياما",
          "J.C.STAFF — تشيكارا ساكوراي",
          "Madhouse — تيتسورو أراكي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 20,
        "order_index": 2,
        "question_type": "multi",
        "explanation": "اعتمادات نسخة 2006 التلفزيونية من Death Note تنسب إنتاج الرسوم إلى Madhouse والإخراج إلى تيتسورو أراكي. الخيارات الأخرى تجمع أسماء حقيقية لكنها تخص أعمالًا وإنتاجات مختلفة.",
        "difficulty": "medium",
        "tags": [
          "ديث نوت",
          "Madhouse",
          "تيتسورو أراكي"
        ],
        "source": "Nippon Television، صفحة Death Note الرسمية ومعلومات الطاقم؛ Madhouse، قائمة الأعمال الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "credits",
          "franchise": "Death Note",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي استوديو أنتج الموسم الأول من «ون بنش مان»، قبل انتقال الموسم الثاني إلى J.C.STAFF؟",
        "options": [
          "Bones",
          "Madhouse",
          "A-1 Pictures",
          "Studio Pierrot"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "question_type": "multi",
        "explanation": "الموسم الأول أُنجز في Madhouse بإخراج شينغو ناتسومي، ثم تغيرت جهة إنتاج الرسوم في الموسم الثاني إلى J.C.STAFF. لذا لا ينبغي نسبة الموسمين إلى استوديو واحد.",
        "difficulty": "medium",
        "tags": [
          "ون بنش مان",
          "Madhouse",
          "J.C.STAFF"
        ],
        "source": "الموقع الرسمي لأنمي One-Punch Man، صفحات STAFF للموسمين الأول والثاني؛ J.C.STAFF، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "studio_transition",
          "franchise": "One-Punch Man",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "ما الاستوديو الذي أنتج اقتباسي «Fullmetal Alchemist» لعام 2003 و«Brotherhood» لعام 2009 رغم اختلاف المخرج؟",
        "options": [
          "Madhouse",
          "Bones",
          "Gainax",
          "Kyoto Animation"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 4,
        "question_type": "multi",
        "explanation": "كلا الاقتباسين من إنتاج Bones؛ أخرج نسخة 2003 سيجي ميزوشيما، بينما أخرج Brotherhood ياسوهيرو إيري. ثبات الاستوديو لا يعني ثبات القيادة الإخراجية أو مسار الاقتباس.",
        "difficulty": "medium",
        "tags": [
          "Fullmetal Alchemist",
          "Bones",
          "اقتباس"
        ],
        "source": "Bones، صفحات الأعمال الرسمية Fullmetal Alchemist وFullmetal Alchemist: Brotherhood؛ Aniplex، صفحات الطاقم الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "same_studio_different_director",
          "franchise": "Fullmetal Alchemist",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي اقتران يطابق إنتاج «قاتل الشياطين: كيميتسو نو يايبا» التلفزيوني؟",
        "options": [
          "ufotable — هاروؤو سوتوزاكي",
          "MAPPA — سونغهو بارك",
          "Bones — يوزورو تاتشيكاوا",
          "WIT Studio — تتسورو أراكي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 5,
        "question_type": "multi",
        "explanation": "الموقع الرسمي يسجل ufotable لإنتاج الرسوم المتحركة وهاروؤو سوتوزاكي للإخراج. بقية الأزواج مرتبطة بأعمال أنمي معروفة، ولذلك تبدو معقولة لكنها لا تخص Kimetsu no Yaiba.",
        "difficulty": "medium",
        "tags": [
          "قاتل الشياطين",
          "ufotable",
          "هاروؤو سوتوزاكي"
        ],
        "source": "الموقع الرسمي Kimetsu no Yaiba، صفحة STAFF/CAST؛ ufotable، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_studio_pair",
          "franchise": "Demon Slayer",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "في أي مجلة بدأت ناوكو تاكيوتشي نشر مانجا «Sailor Moon»؟",
        "options": [
          "Weekly Shonen Jump",
          "Big Comic Original",
          "Nakayoshi",
          "Monthly Afternoon"
        ],
        "correct_index": 2,
        "time_limit_seconds": 20,
        "order_index": 6,
        "question_type": "multi",
        "explanation": "نشرت Kodansha مانجا Sailor Moon في مجلة Nakayoshi الموجهة أساسًا لفئة الشوجو. المجلات الأخرى حقيقية، لكنها تنتمي إلى خطوط تحريرية وناشرين أو جماهير مختلفة.",
        "difficulty": "medium",
        "tags": [
          "Sailor Moon",
          "Nakayoshi",
          "Kodansha"
        ],
        "source": "Kodansha، صفحة Naoko Takeuchi/Sailor Moon الرسمية؛ الموقع الرسمي لمجلة Nakayoshi وتاريخ السلسلة.",
        "is_verified": true,
        "metadata": {
          "focus": "manga_serialization",
          "franchise": "Sailor Moon",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي مخرج تولى أنمي «Frieren: Beyond Journey’s End» في استوديو Madhouse؟",
        "options": [
          "شينغو ناتسومي",
          "كييتشيرو سايتو",
          "هيروشي كوجينا",
          "ماساؤكي كوجيما"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 7,
        "question_type": "multi",
        "explanation": "تنسب الصفحة الرسمية إخراج Frieren إلى كييتشيرو سايتو وإنتاج الرسوم إلى Madhouse. أما الأسماء الأخرى فكلها لمخرجين عملوا مع Madhouse أو في محيط إنتاجات مشابهة، ما يجعلها مشتتات مهنية لا عشوائية.",
        "difficulty": "medium",
        "tags": [
          "Frieren",
          "Madhouse",
          "كييتشيرو سايتو"
        ],
        "source": "الموقع الرسمي لأنمي Frieren، صفحة STAFF&CAST؛ Madhouse، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_studio_pair",
          "franchise": "Frieren",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي عبارة تضبط تغير القيادة الإخراجية مع انتقال «هجوم العمالقة» إلى MAPPA؟",
        "options": [
          "استمر تتسورو أراكي مخرجًا منفردًا لكل أجزاء The Final Season",
          "انتقل ماساشي كويزوكا إلى MAPPA وأخرج الموسم الختامي كاملًا",
          "أخرج يويتشيرو هاياشي المواسم الثلاثة الأولى ثم سلمه لتتسورو أراكي",
          "حل يويتشيرو هاياشي مخرجًا لـThe Final Season بعد تتسورو أراكي وماسا شي كويزوكا في حقبة WIT"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 8,
        "question_type": "multi",
        "explanation": "مع انتقال الإنتاج من WIT إلى MAPPA تغيرت القيادة إلى يويتشيرو هاياشي في The Final Season. ارتبط تتسورو أراكي بالإخراج أولًا ثم بدور المخرج العام، وتولى ماساشي كويزوكا إخراج الموسمين الثاني والثالث في حقبة WIT.",
        "difficulty": "high",
        "tags": [
          "هجوم العمالقة",
          "يويتشيرو هاياشي",
          "تتسورو أراكي"
        ],
        "source": "الموقع الرسمي Attack on Titan، صفحات STAFF للمواسم 1–3 وThe Final Season؛ MAPPA، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_transition",
          "franchise": "Attack on Titan",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي مقارنة صحيحة بين اقتباسي «Hunter × Hunter» التلفزيونيين لعامي 1999 و2011؟",
        "options": [
          "النسختان من Madhouse وبالمخرج نفسه",
          "نسخة 1999 من Bones ونسخة 2011 من MAPPA",
          "نسخة 1999 من Pierrot بإخراج نورييوكي آبي ونسخة 2011 من Toei",
          "نسخة 1999 من Nippon Animation بإخراج كازوهيرو فوروهاشي، ونسخة 2011 من Madhouse بإخراج هيروشي كوجينا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 9,
        "question_type": "multi",
        "explanation": "اقتباس 1999 حمل إنتاج Nippon Animation وإخراج كازوهيرو فوروهاشي، بينما أعيد تقديم العمل تلفزيونيًا سنة 2011 في Madhouse بإخراج هيروشي كوجينا. الاختلاف إعادة إنتاج كاملة لا مجرد موسم لاحق.",
        "difficulty": "high",
        "tags": [
          "Hunter × Hunter",
          "Nippon Animation",
          "Madhouse"
        ],
        "source": "Nippon Animation، صفحة Hunter × Hunter (1999) الرسمية؛ Nippon TV، صفحة Hunter × Hunter (2011) ومعلومات STAFF؛ Madhouse، قائمة الأعمال.",
        "is_verified": true,
        "metadata": {
          "focus": "adaptation_comparison",
          "franchise": "Hunter × Hunter",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "عند مقارنة «Ghost in the Shell» السينمائي (1995) بمسلسل «Stand Alone Complex»، ما الاقتران الصحيح للمخرجين؟",
        "options": [
          "كينجي كامياما للفيلم، ومامورو أوشي للمسلسل",
          "مامورو أوشي للفيلم، وكينجي كامياما للمسلسل",
          "ساتوشي كون للفيلم، وشينيتشيرو واتانابي للمسلسل",
          "هيرويوكي أوكورا للفيلم، وكاتسوهيرو أوتومو للمسلسل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 10,
        "question_type": "multi",
        "explanation": "أخرج مامورو أوشي فيلم 1995، بينما أخرج كينجي كامياما Stand Alone Complex. كلاهما من إنتاج Production I.G، لكن وحدة الاستوديو لا تعني أن العملين يشتركان في المخرج أو الاستمرارية السردية.",
        "difficulty": "high",
        "tags": [
          "Ghost in the Shell",
          "مامورو أوشي",
          "كينجي كامياما"
        ],
        "source": "Production I.G، الصفحتان الرسميتان Ghost in the Shell وGhost in the Shell: Stand Alone Complex، بيانات STAFF.",
        "is_verified": true,
        "metadata": {
          "focus": "director_comparison",
          "franchise": "Ghost in the Shell",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "ما التفصيل الإنتاجي الذي بقي ثابتًا عند انتقال «Vinland Saga» من موسمه الأول إلى الثاني؟",
        "options": [
          "استمر شوهي يابوتا مخرجًا رغم انتقال إنتاج الرسوم من WIT Studio إلى MAPPA",
          "استمر WIT Studio لكن تغير المخرج إلى سونغهو بارك",
          "انتقل العمل إلى Bones وبقي المؤلف الموسيقي وحده",
          "تولى ماكوتو يوكيمورا الإخراج بدل كتابة المانجا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 11,
        "question_type": "multi",
        "explanation": "الموسم الأول من إنتاج WIT Studio والثاني من MAPPA، لكن شوهي يابوتا واصل مهمة الإخراج. يوضح ذلك أن انتقال الاستوديو لا يستلزم تبدل كل الطاقم القيادي.",
        "difficulty": "high",
        "tags": [
          "Vinland Saga",
          "شوهي يابوتا",
          "انتقال استوديو"
        ],
        "source": "الموقع الرسمي لأنمي Vinland Saga، صفحتا STAFF للموسمين؛ MAPPA، صفحة Vinland Saga Season 2 الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "continuity_across_transition",
          "franchise": "Vinland Saga",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "ما العلاقة الزمنية الصحيحة بين مانجا «Neon Genesis Evangelion» لساداموتو وبث الأنمي التلفزيوني؟",
        "options": [
          "بدأت المانجا بعد نهاية الفيلم The End of Evangelion بوصفها تكملة رسمية",
          "اكتملت المانجا كلها قبل بدء إنتاج الأنمي",
          "بدأ نشر المانجا قبل العرض التلفزيوني، مع أنها صُممت ضمن المشروع الإعلامي المرتبط بالأنمي وليست الأصل المكتمل الذي اقتُبس حرفيًا",
          "كانت المانجا اقتباسًا مباشرًا لرواية مكتملة لهايدياكي أنو"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 12,
        "question_type": "multi",
        "explanation": "بدأ تسلسل مانجا يوشيوكي ساداموتو في Monthly Shōnen Ace أواخر 1994، قبل بث الأنمي في أكتوبر 1995، لكنها كانت جزءًا من إطلاق المشروع وليست مانجا مكتملة سبقت الأنمي بوصفها مادته الأصلية التقليدية.",
        "difficulty": "high",
        "tags": [
          "Evangelion",
          "يوشيوكي ساداموتو",
          "تسلسل المانجا"
        ],
        "source": "Kadokawa، بيانات مجلدات Neon Genesis Evangelion وتاريخ النشر في Monthly Shōnen Ace؛ موقع Evangelion الرسمي، تاريخ بث المسلسل.",
        "is_verified": true,
        "metadata": {
          "focus": "manga_anime_chronology",
          "franchise": "Evangelion",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي توصيف دقيق لتغير الإخراج بين الموسمين الأول والثاني من «Jujutsu Kaisen»؟",
        "options": [
          "أخرج شوتا غوشوزونو الموسمين ثم انتقل العمل من MAPPA إلى Bones",
          "أخرج سونغهو بارك الموسم الأول، وأخرج شوتا غوشوزونو الموسم الثاني، مع بقاء MAPPA استوديو الرسوم",
          "أخرج سونغهو بارك الموسم الثاني فقط بعد انتقاله من Madhouse",
          "لم يتغير المخرج ولا الاستوديو بين الموسمين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 13,
        "question_type": "multi",
        "explanation": "تسجل اعتمادات الموسم الأول سونغهو بارك مخرجًا، بينما تسجل اعتمادات الموسم الثاني شوتا غوشوزونو. ظل MAPPA مسؤولًا عن إنتاج الرسوم في الموسمين، فالتغير هنا في القيادة الإخراجية لا في الاستوديو.",
        "difficulty": "high",
        "tags": [
          "Jujutsu Kaisen",
          "سونغهو بارك",
          "شوتا غوشوزونو"
        ],
        "source": "الموقع الرسمي لأنمي Jujutsu Kaisen، صفحات STAFF للموسمين الأول والثاني؛ MAPPA، صفحات العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_transition",
          "franchise": "Jujutsu Kaisen",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "في الموسم الثالث من «Mob Psycho 100»، كيف وُزعت القيادة الإخراجية مقارنة بالموسمين السابقين؟",
        "options": [
          "أصبح تاكاهيرو هاسوي المخرج، مع بقاء يوزورو تاتشيكاوا مخرجًا عامًا",
          "غادر يوزورو تاتشيكاوا كل دور وتولى شينغو ناتسومي الإخراج العام",
          "انتقل العمل إلى MAPPA وأخرجه يويتشيرو هاياشي",
          "تولى مؤلف المانجا ONE الإخراج والحبكة المصورة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 14,
        "question_type": "multi",
        "explanation": "في Mob Psycho 100 III سُجل تاكاهيرو هاسوي مخرجًا، بينما انتقل يوزورو تاتشيكاوا، مخرج الموسمين السابقين، إلى منصب المخرج العام. واستمر Bones في إنتاج الرسوم.",
        "difficulty": "high",
        "tags": [
          "Mob Psycho 100",
          "يوزورو تاتشيكاوا",
          "تاكاهيرو هاسوي"
        ],
        "source": "الموقع الرسمي Mob Psycho 100 III، صفحة STAFF؛ Bones، صفحة العمل الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "credit_role_change",
          "franchise": "Mob Psycho 100",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "لماذا يُعد اسم «مامورو هاتاكياما» في اعتمادات إخراج «Kaguya-sama: Love Is War» حالة لافتة؟",
        "options": [
          "لأنه اسم جماعي لجميع مخرجي A-1 Pictures",
          "لأنه الاسم الياباني الرسمي لمؤلف المانجا أكا أكاساكا",
          "لأنه اسم مهني استخدمه المخرج شينيتشي أوماتا",
          "لأنه اسم الاستوديو الفرعي الذي نفذ الموسم الأول"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 15,
        "question_type": "multi",
        "explanation": "مامورو هاتاكياما هو الاسم المهني الذي تُنسب به أعمال إلى المخرج شينيتشي أوماتا، ومن بينها Kaguya-sama. لذلك لا يشير الاعتماد إلى استوديو أو مؤلف المانجا أو لجنة إخراج جماعية.",
        "difficulty": "high",
        "tags": [
          "Kaguya-sama",
          "مامورو هاتاكياما",
          "شينيتشي أوماتا"
        ],
        "source": "الموقع الرسمي Kaguya-sama: Love Is War، صفحة STAFF؛ سجل المخرج في قاعدة بيانات وكالة الشؤون الثقافية اليابانية Media Arts Database، مدخلا Shōwa Genroku Rakugo Shinjū وKaguya-sama.",
        "is_verified": true,
        "metadata": {
          "focus": "director_pseudonym",
          "franchise": "Kaguya-sama",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي اقتران يصف أنمي «Berserk» التلفزيوني لعام 1997، لا ثلاثية الأفلام ولا نسخة 2016؟",
        "options": [
          "OLM — ناوهيتو تاكاهاشي",
          "Studio 4°C — توشييوكي كوبوكا",
          "GEMBA — شين إيتاغاكي",
          "Madhouse — ماساؤكي كوجيما"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 16,
        "question_type": "multi",
        "explanation": "نسخة التلفزيون لعام 1997 أخرجها ناوهيتو تاكاهاشي وأنتجت رسومها OLM. Studio 4°C ارتبط بثلاثية Golden Age، بينما ارتبطت GEMBA وطاقم مختلف بنسخة 2016.",
        "difficulty": "high",
        "tags": [
          "Berserk",
          "OLM",
          "ناوهيتو تاكاهاشي"
        ],
        "source": "OLM، سجل الأعمال الرسمي Kenpu Denki Berserk؛ VAP، بيانات إصدار المسلسل وطاقمه.",
        "is_verified": true,
        "metadata": {
          "focus": "version_disambiguation",
          "franchise": "Berserk",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "ما الاقتران الصحيح لاقتباس «Monster» التلفزيوني عن مانجا ناوكي أوراساوا؟",
        "options": [
          "Madhouse — ماساؤكي كوجيما",
          "Production I.G — كينجي كامياما",
          "Bones — ياسوهيرو إيري",
          "Nippon Animation — كازوهيرو فوروهاشي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 17,
        "question_type": "multi",
        "explanation": "أنتج Madhouse رسوم مسلسل Monster وأخرجه ماساؤكي كوجيما. المشتتات تجمع استوديوهات ومخرجين متوافقين مهنيًا فعلًا، لكن اقترانهم يعود إلى أعمال أخرى.",
        "difficulty": "high",
        "tags": [
          "Monster",
          "Madhouse",
          "ماساؤكي كوجيما"
        ],
        "source": "Nippon Television، صفحة Monster الرسمية وبيانات STAFF؛ Madhouse، قائمة الأعمال الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_studio_pair",
          "franchise": "Monster",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي وصف يميز اقتباس «PLUTO» الصادر في 2023 من ناحية الاستوديو والمخرج؟",
        "options": [
          "أنتجه Madhouse وأخرجه ماساؤكي كوجيما",
          "أنتجه MAPPA وأخرجه ريو ناكاياما",
          "أنتجه Production I.G وأخرجه مامورو أوشي",
          "أنتجه Studio M2 وأخرجه توشيو كاواغوتشي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 18,
        "question_type": "multi",
        "explanation": "تسجل الاعتمادات الرسمية Studio M2 لإنتاج الرسوم وتوشيو كاواغوتشي للإخراج. قد يلتبس الأمر بسبب صلة مؤسس M2 ماساؤو ماروي بتاريخ Madhouse وMAPPA، لكن الاستوديو المعتمد للعمل هو M2.",
        "difficulty": "high",
        "tags": [
          "PLUTO",
          "Studio M2",
          "توشيو كاواغوتشي"
        ],
        "source": "الموقع الرسمي PLUTO/Netflix Media Center، بيانات الطاقم؛ Studio M2، صفحة PLUTO الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "studio_identity",
          "franchise": "PLUTO",
          "qa_passed": true
        },
        "image_url": null
      },
      {
        "question_text": "أي مقارنة صحيحة بين إخراج «One-Punch Man» في موسميه الأول والثاني؟",
        "options": [
          "أخرج تشيكارا ساكوراي الأول، ثم شينغو ناتسومي الثاني في الاستوديو نفسه",
          "أخرج يوزورو تاتشيكاوا الموسمين في Bones",
          "أخرج شينغو ناتسومي الأول في Madhouse، وأخرج تشيكارا ساكوراي الثاني في J.C.STAFF",
          "أخرج سونغهو بارك الأول، ثم شوتا غوشوزونو الثاني في MAPPA"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 19,
        "question_type": "multi",
        "explanation": "تغير في الموسم الثاني كل من استوديو الرسوم والمخرج: من Madhouse وشينغو ناتسومي إلى J.C.STAFF وتشيكارا ساكوراي. وهذا أدق من القول إن التغيير اقتصر على الاستوديو فقط.",
        "difficulty": "high",
        "tags": [
          "One-Punch Man",
          "شينغو ناتسومي",
          "تشيكارا ساكوراي"
        ],
        "source": "الموقع الرسمي One-Punch Man، صفحتا STAFF للموسمين الأول والثاني؛ J.C.STAFF، صفحة الموسم الثاني الرسمية.",
        "is_verified": true,
        "metadata": {
          "focus": "director_and_studio_transition",
          "franchise": "One-Punch Man",
          "qa_passed": true
        },
        "image_url": null
      }
    ]
  },
  {
    "id": "lib-specialized-03-01",
    "user_id": "system",
    "title": "اكتشافات واختراعات غيّرت العالم",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "معلومات عامة",
    "language": "ar",
    "quiz_difficulty": "medium_high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "world-inventions-001",
        "question_text": "ما التحسين التقني الذي ميّز مطبعة يوهانس غوتنبرغ في أوروبا القرن الخامس عشر وجعل إنتاج الكتب واسع النطاق أكثر عملية من نسخها يدويًا؟",
        "options": [
          "اختراع الورق المصنوع من ألياف الكتان لأول مرة",
          "استبدال الأبجدية اللاتينية بنظام تصويري",
          "جمع الحروف المعدنية المتحركة مع مكبس وحبر زيتي مناسب للطباعة",
          "ابتكار الطباعة الحجرية على ألواح من الحجر الجيري"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لم يخترع غوتنبرغ الورق ولا مبدأ الطباعة المتحركة عالميًا؛ فقد سبقت تقنيات آسيوية عمله. تمثّل إسهامه الأوروبي الحاسم في منظومة متكاملة تضم حروفًا معدنية قابلة لإعادة الاستخدام، وقوالب دقيقة، وحبرًا زيتيًا، ومكبسًا، فصار نسخ النصوص بكميات كبيرة أكثر كفاءة واتساقًا.",
        "difficulty": "medium",
        "subcategory": "الطباعة ونقل المعرفة",
        "tags": [
          "غوتنبرغ",
          "الطباعة",
          "تاريخ التقنية"
        ],
        "source": "Encyclopaedia Britannica, Printing press: https://www.britannica.com/technology/printing-press",
        "external_id": "world-inventions-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-002",
        "question_text": "أي تعديل أدخله جيمس واط على المحرك البخاري النيوكومنـي خفّض هدر الطاقة الناتج من تسخين الأسطوانة وتبريدها بالتناوب؟",
        "options": [
          "مكثّف منفصل عن الأسطوانة",
          "مرجل أنبوبي يعمل بضغط فائق",
          "عنفة بخارية متعددة المراحل",
          "إشعال داخلي بشرارة كهربائية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "فصل واط عملية التكثيف عن الأسطوانة العاملة، فبقيت الأسطوانة ساخنة بينما تكثف البخار في وعاء مستقل. خفّض ذلك فقد الحرارة ورفع الكفاءة مقارنة بمحرك نيوكومن؛ لذا الأدق وصف واط بأنه محسّن ثوري للمحرك البخاري لا مخترعه الوحيد.",
        "difficulty": "medium",
        "subcategory": "الطاقة والثورة الصناعية",
        "tags": [
          "جيمس واط",
          "المحرك البخاري",
          "كفاءة الطاقة"
        ],
        "source": "Science Museum Group, James Watt and the separate condenser: https://www.sciencemuseum.org.uk/objects-and-stories/james-watt-and-our-world",
        "external_id": "world-inventions-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-003",
        "question_text": "في تجربة إدوارد جينر سنة 1796 التي مهّدت لأول لقاح ناجح، استُخدمت مادة مأخوذة من إصابة بأي مرض للحماية من الجدري؟",
        "options": [
          "الحصبة",
          "الجمرة الخبيثة",
          "الطاعون الدبلي",
          "جدري البقر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استخدم جينر مادة من بثرة جدري البقر لدى سارة نلمز لتلقيح جيمس فيبس، ثم أظهر حمايته من الجدري. وكانت ممارسات التجدير أقدم في آسيا وأفريقيا؛ أما تجربة جينر فأسست للتلقيح بمصدر أقل خطورة ولانتشار مفهوم اللقاح الحديث.",
        "difficulty": "medium",
        "subcategory": "اللقاحات والصحة العامة",
        "tags": [
          "جينر",
          "الجدري",
          "التطعيم"
        ],
        "source": "World Health Organization, History of smallpox vaccination: https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination",
        "external_id": "world-inventions-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-004",
        "question_text": "ما الملاحظة التي قادت ألكسندر فليمنغ عام 1928 إلى التعرف على التأثير المضاد للبكتيريا للبنسلين؟",
        "options": [
          "موت البكتيريا بعد تعرضها للأشعة السينية",
          "توقف نمو البكتيريا في مزرعة خالية من الأكسجين",
          "تحول الفيروسات إلى بلورات في وسط ملحي",
          "وجود منطقة خالية من نمو المكورات العنقودية حول عفن من جنس Penicillium"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لاحظ فليمنغ أن تلوث طبق مزروع بالمكورات العنقودية بعفن Penicillium ترافق مع تثبيط البكتيريا حوله. أما تحويل الملاحظة إلى دواء قابل للعلاج على نطاق واسع فاعتمد لاحقًا على عمل هوارد فلوري وإرنست تشين وفريقهما والإنتاج الصناعي.",
        "difficulty": "medium",
        "subcategory": "المضادات الحيوية",
        "tags": [
          "البنسلين",
          "فليمنغ",
          "فلوري وتشين"
        ],
        "source": "Nobel Prize, The discovery of penicillin: https://www.nobelprize.org/prizes/medicine/1945/summary/",
        "external_id": "world-inventions-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-005",
        "question_text": "أي اكتشاف تجريبي ارتبط باسم مايكل فاراداي سنة 1831 وأصبح أساس عمل المولدات والمحولات الكهربائية؟",
        "options": [
          "الحث الكهرومغناطيسي",
          "التأثير الكهروضوئي",
          "الموصلية الفائقة",
          "الانشطار النووي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أظهر فاراداي أن تغير الفيض المغناطيسي عبر دائرة يولّد قوة دافعة كهربائية فيها. هذا مبدأ الحث الكهرومغناطيسي الذي تقوم عليه المولدات بتحويل الحركة إلى كهرباء والمحولات بنقل الطاقة بين ملفات مقترنة مغناطيسيًا.",
        "difficulty": "medium",
        "subcategory": "الكهرباء والمغناطيسية",
        "tags": [
          "فاراداي",
          "الحث",
          "المولد"
        ],
        "source": "Royal Institution, Faraday's electromagnetic induction ring: https://www.rigb.org/explore-science/explore/collection/faradays-electromagnetic-induction-ring",
        "external_id": "world-inventions-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-006",
        "question_text": "ما العنصر الذي تنبأ ديميتري مندليف بخصائصه باسم «إيكا-ألومنيوم»، ثم عُزل لاحقًا وأكد نجاح منهجه الدوري؟",
        "options": [
          "الجرمانيوم",
          "السكانديوم",
          "الغاليوم",
          "الرينيوم"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترك مندليف فجوات في جدوله وتنبأ بخصائص عناصر مجهولة. كان «إيكا-ألومنيوم» هو الغاليوم الذي اكتشفه بول-إميل لوكوك دي بواسبودران سنة 1875، وجاءت خصائصه قريبة من تنبؤات مندليف، ما عزز قوة القانون الدوري.",
        "difficulty": "medium",
        "subcategory": "الكيمياء والجدول الدوري",
        "tags": [
          "مندليف",
          "الغاليوم",
          "الجدول الدوري"
        ],
        "source": "Royal Society of Chemistry, Gallium—history: https://www.rsc.org/periodic-table/element/31/gallium",
        "external_id": "world-inventions-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-007",
        "question_text": "ما الأداة التي ابتكرها إيفانجليستا توريتشيلي باستخدام عمود من الزئبق، وأثبتت عمليًا إمكان قياس ضغط الهواء؟",
        "options": [
          "البارومتر",
          "المانومتر التفاضلي",
          "المسعر",
          "مقياس الرطوبة ذي البصلة الرطبة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قلب توريتشيلي أنبوبًا مملوءًا بالزئبق في حوض زئبق، فاستقر العمود عند ارتفاع تحدده موازنة ضغط الجو. كان الفراغ أعلى العمود مهمًا أيضًا في تقويض الاعتقاد بأن الطبيعة لا تسمح بوجود فراغ.",
        "difficulty": "medium",
        "subcategory": "أدوات القياس",
        "tags": [
          "توريتشيلي",
          "البارومتر",
          "الضغط الجوي"
        ],
        "source": "Encyclopaedia Britannica, Barometer: https://www.britannica.com/technology/barometer",
        "external_id": "world-inventions-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-008",
        "question_text": "لماذا كان الكرونومتر البحري الذي طوّره جون هاريسون بالغ الأهمية للملاحة في القرن الثامن عشر؟",
        "options": [
          "قاس عمق البحر من زمن رجوع الصدى",
          "أمّن وقتًا مرجعيًا دقيقًا في البحر، فمكّن من حساب خط الطول",
          "حدد خط العرض من المجال المغناطيسي وحده",
          "تنبأ بالعواصف من تغير رطوبة الهواء"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُستخرج فرق خط الطول من فرق الزمن بين الوقت المحلي ووقت مرجعي معلوم؛ كل ساعة تقابل 15 درجة. نجحت ساعات هاريسون في حفظ الوقت بدقة رغم حركة السفينة وتغير الحرارة، فحلت جانبًا عمليًا حاسمًا من «مسألة خط الطول».",
        "difficulty": "medium",
        "subcategory": "الملاحة وقياس الزمن",
        "tags": [
          "هاريسون",
          "الكرونومتر",
          "خط الطول"
        ],
        "source": "Royal Museums Greenwich, John Harrison and the longitude problem: https://www.rmg.co.uk/stories/topics/john-harrison-longitude-problem",
        "external_id": "world-inventions-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-009",
        "question_text": "أي وصف أدق لأول ترانزستور ناجح عُرض في مختبرات بِل سنة 1947؟",
        "options": [
          "ترانزستور تأثير مجال من السيليكون صنعه كيلبي",
          "صمام مفرغ ثلاثي صغّره إديسون",
          "ترانزستور تلامس نقطي من الجرمانيوم صنعه باردين وبراتين ضمن فريق قاده شوكلي",
          "دائرة متكاملة من الجرمانيوم صنعها نويس"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حقق جون باردين ووالتر براتين أول تضخيم ناجح بترانزستور التلامس النقطي الجرمانيومي في فريق وليام شوكلي. ثم طور شوكلي مفهوم ترانزستور الوصلة؛ وتقاسم الثلاثة نوبل الفيزياء لعام 1956، لذلك لا يصح اختزال الإنجاز في اسم واحد.",
        "difficulty": "medium",
        "subcategory": "الإلكترونيات",
        "tags": [
          "الترانزستور",
          "مختبرات بل",
          "أشباه الموصلات"
        ],
        "source": "Nobel Prize, Physics 1956—transistor effect: https://www.nobelprize.org/prizes/physics/1956/summary/",
        "external_id": "world-inventions-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-010",
        "question_text": "أي قرار اتخذه CERN في 30 أبريل 1993 أسهم مباشرة في الانتشار العالمي للشبكة العنكبوتية؟",
        "options": [
          "تحويل بروتوكول الإنترنت إلى شبكة عسكرية مغلقة",
          "إتاحة برمجيات الويب في الملكية العامة ثم بترخيص مفتوح",
          "فرض رسوم على كل رابط تشعبي",
          "استبدال HTML بنظام ملفات خاص بأجهزة NeXT"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ابتكر تيم برنرز-لي الويب في CERN لتبادل المعلومات بين العلماء، وشملت المنظومة خادمًا ومتصفحًا/محررًا وعناوين URL وHTTP وHTML. سمح إعلان CERN البرمجيات في الملكية العامة ثم إصدارها بترخيص مفتوح بتبنيها بلا رسوم ترخيص، فساعد الويب على الازدهار.",
        "difficulty": "medium",
        "subcategory": "الويب والاتصالات",
        "tags": [
          "CERN",
          "الويب",
          "تيم برنرز لي"
        ],
        "source": "CERN, The birth of the Web: https://home.cern/science/computing/birth-web",
        "external_id": "world-inventions-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-011",
        "question_text": "في عملية هابر-بوش، ما الزوج الذي يتفاعل صناعيًا تحت ضغط وحرارة وبوجود حفاز لإنتاج الأمونيا؟",
        "options": [
          "النيتروجين والأكسجين",
          "الميثان وثاني أكسيد الكربون",
          "أول أكسيد الكربون وبخار الماء",
          "النيتروجين والهيدروجين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تثبت العملية النيتروجين الجوي بتفاعله مع الهيدروجين لإنتاج الأمونيا. أثبت فريتز هابر المبدأ مخبريًا، وحوله كارل بوش وزملاؤه في BASF إلى عملية صناعية عالية الضغط؛ وكانت أساسًا لأسمدة رفعت الإنتاج الغذائي، وكذلك لمواد متفجرة.",
        "difficulty": "high",
        "subcategory": "الكيمياء الصناعية",
        "tags": [
          "هابر بوش",
          "الأمونيا",
          "تثبيت النيتروجين"
        ],
        "source": "Nobel Prize, Fritz Haber—ammonia synthesis: https://www.nobelprize.org/prizes/chemistry/1918/summary/",
        "external_id": "world-inventions-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-012",
        "question_text": "ما الفارق البنيوي الأشهر بين نموذجي الدائرة المتكاملة اللذين قدّمهما جاك كيلبي وروبرت نويس في بداياتها؟",
        "options": [
          "استخدم كيلبي الأنابيب المفرغة، بينما استخدم نويس المرحلات",
          "صنع كيلبي ذاكرة مغناطيسية، بينما صنع نويس معالجًا دقيقًا",
          "كان نموذج كيلبي رقميًا فقط ونموذج نويس تناظريًا فقط",
          "استخدم كيلبي الجرمانيوم ووصلات سلكية، بينما اقترح نويس السيليكون وعملية مستوية بوصلات معدنية على الرقاقة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "برهن كيلبي سنة 1958 إمكان دمج المكونات على قطعة جرمانيوم، لكن نموذجه احتاج أسلاكًا خارجية دقيقة. جاء تصميم نويس السيليكوني المعتمد على العملية المستوية والوصلات المعدنية المطبوعة أكثر ملاءمة للتصنيع الكمي؛ لذا ينسب تاريخ الدائرة المتكاملة إلى مساهمتين مستقلتين متكاملتين.",
        "difficulty": "high",
        "subcategory": "الإلكترونيات الدقيقة",
        "tags": [
          "الدائرة المتكاملة",
          "كيلبي",
          "نويس"
        ],
        "source": "Computer History Museum, The Silicon Engine—integrated circuit: https://www.computerhistory.org/siliconengine/invention-of-the-integrated-circuit/",
        "external_id": "world-inventions-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-013",
        "question_text": "أي سلسلة من الخطوات تعبّر بدقة عن دورة واحدة في تفاعل البوليميراز المتسلسل PCR؟",
        "options": [
          "ترجمة RNA، ثم طي البروتين، ثم فصله كهربائيًا",
          "فصل شريطي DNA بالحرارة، ثم ارتباط البوادئ، ثم استطالة السلاسل بإنزيم بوليميراز",
          "قطع DNA بإنزيم تقييد، ثم لصقه، ثم إدخاله في خلية",
          "نسخ DNA إلى RNA، ثم إزالة الإنترونات، ثم إضافة ذيل متعدد الأدينين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يضاعف PCR مقطعًا مستهدفًا دوريًا: التمسخ الحراري يفصل الشريطين، والتلدين يثبت بادئين يحددان الحدود، والاستطالة تنشئ DNA جديدًا. جعل البوليميراز المقاوم للحرارة، مثل Taq، تكرار الدورات آليًا دون إضافة إنزيم جديد كل مرة.",
        "difficulty": "high",
        "subcategory": "التقنية الحيوية",
        "tags": [
          "PCR",
          "DNA",
          "كاري موليس"
        ],
        "source": "Nobel Prize, Chemistry 1993—PCR method: https://www.nobelprize.org/prizes/chemistry/1993/summary/",
        "external_id": "world-inventions-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-014",
        "question_text": "لماذا كانت «الصورة 51» التي التقطها عمل روزاليند فرانكلين وريموند غوسلين مهمة في كشف بنية DNA؟",
        "options": [
          "أثبتت مباشرة ترتيب جميع القواعد في الجينوم البشري",
          "كشفت أن DNA بروتين مكوّن من أحماض أمينية",
          "أظهر نمط حيود الأشعة السينية فيها سمات هندسية تدل على بنية حلزونية",
          "أظهرت تضاعف الكروموسومات بالمجهر الإلكتروني الحي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعطى نمط الحيود على هيئة X ومقاييسه دليلًا قويًا على اللولب وأبعاده. استفاد واتسون وكريك من بيانات فرانكلين وويلكنز وغيرها لبناء نموذج اللولب المزدوج؛ وعليه فالكشف ثمرة تراكم تجريبي ونمذجة شارك فيها عدة باحثين، لا لحظة فردية منفردة.",
        "difficulty": "high",
        "subcategory": "الوراثة والبنية الجزيئية",
        "tags": [
          "الصورة 51",
          "فرانكلين",
          "DNA"
        ],
        "source": "King's College London, The discovery of DNA structure: https://www.kcl.ac.uk/the-discovery-of-dna-structure",
        "external_id": "world-inventions-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-015",
        "question_text": "ما الوظيفة الطبيعية التي ينتمي إليها نظام CRISPR-Cas9 قبل تحويله إلى أداة لتحرير الجينوم؟",
        "options": [
          "آلية حقيقية النوى لإصلاح التيلوميرات",
          "دفاع تكيفي في البكتيريا والعتائق ضد المادة الوراثية الغازية",
          "مسار ميتوكوندري لتوليد ATP",
          "نظام فيروسي لترجمة البروتين دون ريبوسومات"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحتفظ كائنات بدائية النوى بمقاطع من غزاة سابقين في مصفوفات CRISPR، وتستخدم RNA دليلاً مع بروتينات Cas للتعرف إلى التسلسلات الغازية وقطعها. بينت إيمانويل شاربنتييه وجنيفر دودنا إمكان برمجة Cas9 بدليل RNA ليقطع DNA في موضع مختار.",
        "difficulty": "high",
        "subcategory": "تحرير الجينوم",
        "tags": [
          "CRISPR",
          "Cas9",
          "دودنا وشاربنتييه"
        ],
        "source": "Nobel Prize, Chemistry 2020—genome editing: https://www.nobelprize.org/prizes/chemistry/2020/summary/",
        "external_id": "world-inventions-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-016",
        "question_text": "أي تطور تقني جعل بطاريات الليثيوم-أيون التجارية أكثر أمانًا من تصميم يعتمد على أنود الليثيوم المعدني؟",
        "options": [
          "استخدام مادة مضيفة تتداخل فيها أيونات الليثيوم، مثل الكربون، بدل ترسيب معدن الليثيوم",
          "استبدال الإلكتروليت بتيار من بخار الماء",
          "إزالة الفاصل بين القطبين",
          "تشغيل الخلية بتفاعل احتراق مباشر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أتاحت مواد التداخل انتقال أيونات الليثيوم ذهابًا وإيابًا بين قطبين من دون الحاجة إلى أنود من الليثيوم المعدني، الذي قد ينمّي تغصنات خطرة. بُني التطور على كاثود ويتنغهام، وجهد أعلى حققه غوديناف، وأنود كربوني عملي طوّره يوشينو.",
        "difficulty": "high",
        "subcategory": "تخزين الطاقة",
        "tags": [
          "بطارية الليثيوم أيون",
          "التداخل",
          "نوبل"
        ],
        "source": "Nobel Prize, Chemistry 2019—lithium-ion batteries: https://www.nobelprize.org/prizes/chemistry/2019/summary/",
        "external_id": "world-inventions-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-017",
        "question_text": "ما العقبة المادية التي أدى حلها إلى منح نوبل الفيزياء 2014 عن الصمام الثنائي الباعث للضوء الأزرق؟",
        "options": [
          "إيجاد سلك تنغستن لا ينصهر في الفراغ",
          "إنتاج طبقات نيتريد الغاليوم عالية الجودة وتحقيق تطعيم من النوع p بكفاءة",
          "منع السيليكون النقي من امتصاص الضوء الأحمر",
          "تبريد الزئبق إلى حالة التوصيل الفائق"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ظل LED الأزرق الساطع صعبًا لأن نيتريد الغاليوم كان عسير النمو البلوري والتطعيم p. مكنت إنجازات أكاساكي وأمانو وناكامورا من وصلات فعالة تبعث الأزرق؛ وبإضافته إلى الأحمر والأخضر أمكن الضوء الأبيض عالي الكفاءة وتطبيقات العرض والإضاءة.",
        "difficulty": "high",
        "subcategory": "الضوئيات",
        "tags": [
          "LED أزرق",
          "نيتريد الغاليوم",
          "إضاءة"
        ],
        "source": "Nobel Prize, Physics 2014—blue LEDs: https://www.nobelprize.org/prizes/physics/2014/summary/",
        "external_id": "world-inventions-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-018",
        "question_text": "في نظام تحديد المواقع GPS، ماذا يحدث للساعة الذرية على القمر الصناعي مقارنة بساعة على سطح الأرض عند جمع أثري النسبية الخاصة والعامة؟",
        "options": [
          "تتأخر إجمالًا بالمقدار نفسه الذي تتقدم به دائمًا",
          "لا يتغير معدلها لأن التأثيرين ينعدمان تمامًا",
          "تتوقف لحظة مرور القمر فوق خط الاستواء",
          "تتقدم إجمالًا، لذلك يلزم تصحيح نسبي كي لا يتراكم خطأ الموقع"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحركة المدارية تجعل الساعة أبطأ وفق النسبية الخاصة، لكن وجود القمر في مجال جاذبية أضعف يجعلها أسرع وفق النسبية العامة، والأثر العام هو تقدم يقارب 38 ميكروثانية يوميًا. من دون التعويض يتضخم خطأ المسافة سريعًا لأن GPS يقيس أزمنة وصول الإشارات.",
        "difficulty": "high",
        "subcategory": "الملاحة الفضائية",
        "tags": [
          "GPS",
          "النسبية",
          "الساعات الذرية"
        ],
        "source": "NASA, General relativity and GPS: https://science.nasa.gov/universe/black-holes/testing-general-relativity/",
        "external_id": "world-inventions-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-019",
        "question_text": "أي مبدأ فيزيائي يميز الليزر عن مصدر ضوء حراري عادي ويمنحه ضوءًا عالي الترابط والاتجاهية؟",
        "options": [
          "التأين الحراري وحده داخل فتيلة معدنية",
          "الانعكاس الكلي في منشور بلا وسط كسب",
          "حيود الضوء الأبيض عبر محزوز فقط",
          "الانبعاث المحفَّز مع تحقيق انقلاب سكاني داخل وسط الكسب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحفز فوتونٌ ذرةً مثارة على إصدار فوتون مطابق في التردد والطور والاتجاه. وعندما يفوق عدد الجسيمات في الحالة المثارة عددها في الأدنى—الانقلاب السكاني—يتغلب التضخيم على الفقد، ويعزز التجويف البصري أنماطًا محددة لتكوين حزمة مترابطة.",
        "difficulty": "high",
        "subcategory": "الضوء والليزر",
        "tags": [
          "الليزر",
          "الانبعاث المحفز",
          "الانقلاب السكاني"
        ],
        "source": "Nobel Prize, Physics 1964—maser-laser principle: https://www.nobelprize.org/prizes/physics/1964/summary/",
        "external_id": "world-inventions-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-020",
        "question_text": "أي قرينة دفعت فيلهلم رونتغن إلى استنتاج وجود إشعاع نافذ جديد سنة 1895 أثناء تجاربه بأنبوب تفريغ مغطى؟",
        "options": [
          "انحراف إبرة بوصلة قرب سلك يمر فيه تيار مستمر",
          "ظهور خطوط طيفية للهيدروجين في لهب",
          "توهج شاشة مطلية ببلاتينوسيانايد الباريوم بعيدًا عن الأنبوب رغم حجبه",
          "سقوط قطرة زيت مشحونة بين لوحين"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لاحظ رونتغن فلورة شاشة كيميائية مع أن أنبوب الأشعة المهبطية كان محجوبًا بورق أسود، فاستدل على أشعة مجهولة قادرة على النفاذ وسماها X. سرعان ما أظهر اختلاف امتصاصها بين العظم والأنسجة قيمتها في التصوير الطبي.",
        "difficulty": "high",
        "subcategory": "التصوير الطبي",
        "tags": [
          "الأشعة السينية",
          "رونتغن",
          "الفلورة"
        ],
        "source": "Nobel Prize, Wilhelm Röntgen—X-rays: https://www.nobelprize.org/prizes/physics/1901/rontgen/facts/",
        "external_id": "world-inventions-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-021",
        "question_text": "ما النتيجة التي ميّزت تجربة هنري بيكريل بأملاح اليورانيوم عن فرضيته الأولى التي ربطت الإشعاع بضوء الشمس؟",
        "options": [
          "توقف الإشعاع كليًا حين غابت الشمس",
          "تحولت أملاح اليورانيوم إلى أشعة مهبطية في فراغ",
          "اسودّت ألواح التصوير المحفوظة في الظلام، ما دل على إشعاع تلقائي من المادة",
          "ظهر الإشعاع فقط بعد تسخين الأملاح حتى الانصهار"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان بيكريل يختبر صلة محتملة بين الفسفرة والأشعة السينية. لكن ألواحًا ملفوفة ومخزنة في درج اسودّت بقوة قرب مركب اليورانيوم من دون تعريض شمسي، فدل ذلك على أن الإشعاع يصدر تلقائيًا؛ ووسعت ماري وبيير كوري دراسة الظاهرة وسمّياها النشاط الإشعاعي.",
        "difficulty": "high",
        "subcategory": "النشاط الإشعاعي",
        "tags": [
          "بيكريل",
          "اليورانيوم",
          "النشاط الإشعاعي"
        ],
        "source": "Nobel Prize, Henri Becquerel—spontaneous radioactivity: https://www.nobelprize.org/prizes/physics/1903/becquerel/facts/",
        "external_id": "world-inventions-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-022",
        "question_text": "كيف ساعد مجهر أنطوني فان ليفينهوك ذو العدسة الواحدة على فتح عالم الأحياء الدقيقة رغم بساطة تصميمه؟",
        "options": [
          "حققت عدسته الصغيرة الجيدة التكبير والدقة الكافيين لرؤية كائنات دقيقة حية",
          "استخدم حزمة إلكترونات في فراغ لرؤية الذرات",
          "صبغ الخلايا بصبغات فلورية وأثارها بليزر",
          "كوّن صورًا مقطعية من صدى الموجات فوق الصوتية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صنع ليفينهوك عدسات مفردة شديدة التقوس ومصقولة بعناية، وقد تفوقت بصريًا في بعض الاستخدامات على المجاهر المركبة المبكرة التي عانت زيغًا شديدًا. بها وصف الأوليات والبكتيريا وغيرها؛ ولم يكن المخترع الوحيد للمجهر، بل مطورًا بارزًا لاستخدامه العلمي.",
        "difficulty": "high",
        "subcategory": "المجهر والأحياء الدقيقة",
        "tags": [
          "ليفينهوك",
          "المجهر",
          "الأحياء الدقيقة"
        ],
        "source": "Royal Society, Leeuwenhoek's microscopic observations: https://royalsociety.org/about-us/who-we-are/history/antoni-van-leeuwenhoek/",
        "external_id": "world-inventions-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-023",
        "question_text": "أي تركيب بين تقنيتين كان جوهر «التلغراف اللاسلكي» المبكر لدى ماركوني؟",
        "options": [
          "نقل الصوت المستمر في ألياف زجاجية",
          "ترميز الرسائل بنبضات وإرسالها بموجات كهرومغناطيسية من دون سلك",
          "تحويل الصور إلى مسح إلكتروني عبر قمر صناعي",
          "تخزين الحروف على بطاقات مثقبة ثم شحنها بالبريد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع النظام المبكر إرسال الشرر لموجات راديوية وكاشفًا وهوائيًا مع لغة النبضات التلغرافية، فانتقلت رسائل مورس بلا كابل. استند ماركوني إلى اكتشافات ماكسويل وهرتز وأعمال عدة مجربين، وكانت مساهمته الأساسية هندسة منظومة اتصال عملية بعيدة المدى وتسويقها.",
        "difficulty": "high",
        "subcategory": "الاتصالات اللاسلكية",
        "tags": [
          "ماركوني",
          "الراديو",
          "التلغراف"
        ],
        "source": "Nobel Prize, Physics 1909—wireless telegraphy: https://www.nobelprize.org/prizes/physics/1909/summary/",
        "external_id": "world-inventions-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-024",
        "question_text": "ما الابتكار التنظيمي الذي جعل حاوية الشحن المعيارية تغيّر التجارة العالمية، وليس مجرد كونها صندوقًا معدنيًا؟",
        "options": [
          "اشتراط فتح كل صندوق في كل ميناء لإعادة الجرد",
          "إمكان نقل الوحدة نفسها بين الشاحنة والقطار والسفينة دون تفريغ محتواها قطعةً قطعة",
          "قصر الحاويات على نوع واحد من السفن دون نقل بري",
          "استبدال الرافعات نهائيًا بعمال المناولة اليدوية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جوهر الحاوية هو النقل متعدد الوسائط: وحدة موحدة تُغلق عند المنشأ وتنتقل بين وسائل النقل برافعات وتجهيزات متوافقة. خفض ذلك وقت الرسو والمناولة والتلف والسرقة. دفع مالكوم ماكلين تطبيق النظام تجاريًا، ثم جعل التقييس الدولي الشبكة قابلة للتوسع عالميًا.",
        "difficulty": "high",
        "subcategory": "النقل واللوجستيات",
        "tags": [
          "الحاويات",
          "النقل متعدد الوسائط",
          "التجارة"
        ],
        "source": "Smithsonian National Museum of American History, Containerization: https://americanhistory.si.edu/explore/stories/how-shipping-containers-made-world-smaller-and-world-economy-bigger",
        "external_id": "world-inventions-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-inventions-025",
        "question_text": "في المرحلة النهائية من استئصال الجدري عالميًا، ما الاستراتيجية التي استكملت التطعيم الواسع وكانت حاسمة في قطع سلاسل العدوى؟",
        "options": [
          "الترصد والاحتواء بتحديد الحالات وتطعيم المخالطين حولها",
          "استخدام المضادات الحيوية لجميع السكان",
          "إبادة الحشرات الناقلة بالمبيدات",
          "عزل الفيروس عبر تنقية مياه الشرب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إلى جانب حملات التطعيم، اعتمد البرنامج المكثف البحث النشط عن الحالات والتحقيق السريع فيها وتطعيم المخالطين وتكوين حلقات مناعة حول البؤر. كان الجدري ينتقل بين البشر مباشرة، لا عبر حشرة أو ماء، وأعلنت جمعية الصحة العالمية استئصاله سنة 1980 بعد آخر حالة طبيعية في 1977.",
        "difficulty": "high",
        "subcategory": "الصحة العامة",
        "tags": [
          "استئصال الجدري",
          "الترصد والاحتواء",
          "منظمة الصحة العالمية"
        ],
        "source": "World Health Organization, History of smallpox vaccination and eradication: https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination",
        "external_id": "world-inventions-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-specialized-03-02",
    "user_id": "system",
    "title": "أرقام قياسية وحقائق غرائب العالم",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "معلومات عامة",
    "language": "ar",
    "quiz_difficulty": "medium_high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "world-records-001",
        "question_text": "أي حيوان تؤكد الإدارة الوطنية للمحيطات والغلاف الجوي NOAA أنه أكبر حيوان عاش على الأرض، متجاوزًا حتى أضخم الديناصورات المعروفة؟",
        "options": [
          "حوت الزعنفة",
          "قرش الحوت",
          "الأرجنتينوصور",
          "الحوت الأزرق"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحوت الأزرق هو أكبر حيوان معروف عاش على الأرض؛ قد يتجاوز طوله 30 مترًا وتبلغ كتلته نحو 180 طنًا أو أكثر في بعض التقديرات. قرش الحوت أكبر الأسماك، لكنه أصغر كثيرًا، والأرجنتينوصور من أضخم الديناصورات البرية لا أضخم الحيوانات مطلقًا.",
        "difficulty": "medium",
        "subcategory": "سجلات الحيوان",
        "tags": [
          "الحوت الأزرق",
          "أكبر حيوان",
          "المحيطات"
        ],
        "source": "NOAA Fisheries, Blue Whale: https://www.fisheries.noaa.gov/species/blue-whale (اطلاع 2026-08-05)",
        "external_id": "world-records-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-002",
        "question_text": "إذا عُرّفت الصحراء بقلة الهطول لا بارتفاع الحرارة، فما أكبر صحراء على الأرض مساحةً؟",
        "options": [
          "الصحراء الكبرى",
          "القارة القطبية الجنوبية",
          "صحراء غوبي",
          "صحراء العرب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "القارة القطبية الجنوبية صحراء قطبية لأن هطولها شديد الانخفاض، وتبلغ مساحتها نحو 14 مليون كيلومتر مربع؛ لذلك تتجاوز الصحراء الكبرى، وهي أكبر صحراء حارة. الخلط الشائع سببه مساواة الصحراء بالرمال والحرارة بدل معيار الجفاف.",
        "difficulty": "medium",
        "subcategory": "غرائب الجغرافيا",
        "tags": [
          "أنتاركتيكا",
          "الصحراء القطبية",
          "الجفاف"
        ],
        "source": "British Antarctic Survey, Antarctic factsheet—Antarctica is the world's largest desert: https://www.bas.ac.uk/about/antarctica/ (اطلاع 2026-08-05)",
        "external_id": "world-records-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-003",
        "question_text": "في أي خندق محيطي تقع «تشالنجر ديب»، أعمق نقطة معروفة في محيطات الأرض؟",
        "options": [
          "خندق تونغا",
          "خندق ماريانا",
          "خندق بورتوريكو",
          "خندق اليابان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقع تشالنجر ديب في الطرف الجنوبي من خندق ماريانا في غرب المحيط الهادئ. تختلف تقديرات العمق قليلًا باختلاف المسح ونموذج سرعة الصوت، لذلك السؤال يطلب الموقع لا رقمًا زائف الدقة؛ وتضعها قياسات NOAA قرب 10.9 كيلومتر تحت سطح البحر.",
        "difficulty": "medium",
        "subcategory": "أعماق الأرض",
        "tags": [
          "تشالنجر ديب",
          "خندق ماريانا",
          "أعماق المحيط"
        ],
        "source": "NOAA Ocean Exploration, How deep is the ocean?: https://oceanexplorer.noaa.gov/facts/ocean-depth.html (اطلاع 2026-08-05)",
        "external_id": "world-records-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-004",
        "question_text": "بعد القياس المشترك الذي أعلنته نيبال والصين في ديسمبر 2020، ما الارتفاع الرسمي الجديد لقمة إيفرست فوق مستوى البحر؟",
        "options": [
          "8,848.86 مترًا",
          "8,611 مترًا",
          "8,850.50 مترًا",
          "8,586 مترًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعلنت نيبال والصين 8,848.86 مترًا ارتفاعًا رسميًا مشتركًا لإيفرست، ويشمل القياس الغطاء الثلجي على القمة. أما 8,611 مترًا فهو ارتفاع K2، و8,586 مترًا ارتفاع كانغشينجونغا.",
        "difficulty": "medium",
        "subcategory": "القمم والقياس",
        "tags": [
          "إيفرست",
          "الارتفاع",
          "نيبال والصين"
        ],
        "source": "Government of Nepal, Department of Survey, joint announcement of Mount Everest height, 8 Dec 2020: https://dos.gov.np/ (السجل محدد بإعلان 2020؛ اطلاع 2026-08-05)",
        "external_id": "world-records-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-005",
        "question_text": "أي نظام كهوف كان الأطول المعروف عالميًا وفق تحديث خدمة المتنزهات الوطنية الأميركية في نوفمبر 2024، بأكثر من 426 ميلًا من الممرات الممسوحة؟",
        "options": [
          "كهف الجوهرة",
          "نظام ساك أكتون",
          "كهف الماموث",
          "كهف أوبتيميستيتشنا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بلغت الممرات الممسوحة في نظام كهف الماموث بكنتاكي أكثر من 426 ميلًا وفق تحديث 7 نوفمبر 2024، ما يجعله أطول نظام كهوف معروف بفارق كبير. الرقم قابل للزيادة لأن الاستكشاف والمسح مستمران، ولذلك ثُبّت تاريخ المرجع.",
        "difficulty": "medium",
        "subcategory": "الكهوف",
        "tags": [
          "كهف الماموث",
          "كنتاكي",
          "أطول كهف"
        ],
        "source": "U.S. National Park Service, Mammoth Cave FAQ, updated 2024-11-07: https://www.nps.gov/maca/faqs.htm",
        "external_id": "world-records-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-006",
        "question_text": "أي نبات يحمل عادةً الرقم القياسي لأكبر زهرة مفردة، لا لأكبر نورة مركبة من أزهار كثيرة؟",
        "options": [
          "رافليسيا أرنولدي Rafflesia arnoldii",
          "التايتان أروم Amorphophallus titanum",
          "فيكتوريا أمازونيكا",
          "الباوباب الإفريقي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رافليسيا أرنولدي تنتج أكبر زهرة مفردة، وقد تقارب مترًا عرضًا. أما التايتان أروم فبنيته الضخمة نورة: محور يحمل عددًا كبيرًا من الأزهار الصغيرة تحيط به قنابة، ولذلك لا يصح منحه سجل «الزهرة المفردة».",
        "difficulty": "medium",
        "subcategory": "غرائب النبات",
        "tags": [
          "رافليسيا",
          "أكبر زهرة",
          "نورة"
        ],
        "source": "Royal Botanic Gardens, Kew, Rafflesia arnoldi plant profile: https://www.kew.org/plants/rafflesia (اطلاع 2026-08-05)",
        "external_id": "world-records-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-007",
        "question_text": "إلى أي جنس تنتمي أصغر النباتات المزهرة في العالم، وهي نباتات مائية دقيقة قد لا يتجاوز بعضها رأس دبوس؟",
        "options": [
          "Azolla",
          "Wolffia",
          "Lemna",
          "Selaginella"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تضم Wolffia نباتات عدسية طافية شديدة الصغر تُعد أصغر كاسيات البذور. تبدو بلا جذور أو أوراق تقليدية واضحة، لكنها تنتج أزهارًا وثمارًا؛ أما Azolla فسرخس مائي وليست نباتًا مزهرًا.",
        "difficulty": "medium",
        "subcategory": "غرائب النبات",
        "tags": [
          "Wolffia",
          "أصغر نبات مزهر",
          "نباتات مائية"
        ],
        "source": "Royal Botanic Gardens, Kew, Plants of the World Online—Wolffia: https://powo.science.kew.org/ (اطلاع 2026-08-05)",
        "external_id": "world-records-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-008",
        "question_text": "ما السلوك الذي يمنح الشاهين سجل أسرع حيوان في القياسات الشائعة، بسرعات تتجاوز 300 كم/س؟",
        "options": [
          "عدوه الأفقي فوق اليابسة",
          "هجرته مع الرياح الخلفية",
          "سباحته تحت سطح الماء",
          "غوصه الانقضاضي نحو الفريسة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يسجل الشاهين سرعته القصوى في الانقضاض الحاد من ارتفاع، لا في الطيران الأفقي المستوي. يحول الارتفاع إلى سرعة ويضم جناحيه لتقليل السحب؛ لذلك لا يجوز مقارنة هذا السجل مباشرة بسرعة عدو الفهد على الأرض.",
        "difficulty": "medium",
        "subcategory": "سرعات الحيوان",
        "tags": [
          "الشاهين",
          "الانقضاض",
          "أسرع حيوان"
        ],
        "source": "U.S. Fish & Wildlife Service, Peregrine Falcon: https://www.fws.gov/species/peregrine-falcon-falco-peregrinus (اطلاع 2026-08-05)",
        "external_id": "world-records-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-009",
        "question_text": "بحسب أرشيف المنظمة العالمية للأرصاد الجوية كما كان في 31 يوليو 2025، أين سُجلت أعلى درجة حرارة هواء معترف بها عالميًا: 56.7°م في 10 يوليو 1913؟",
        "options": [
          "قبلي في تونس",
          "تربت في إسرائيل",
          "فرنِس كريك في وادي الموت بالولايات المتحدة",
          "متربة في الكويت"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يسجل أرشيف WMO الرسمي 56.7°م في فرنِس كريك، المعروف تاريخيًا باسم Greenland Ranch، في كاليفورنيا يوم 10 يوليو 1913. توجد مناقشات علمية حول قياسات قديمة، لكن السؤال يحدد صراحة السجل الذي تعترف به WMO حتى 31 يوليو 2025.",
        "difficulty": "medium",
        "subcategory": "السجلات المناخية",
        "tags": [
          "أعلى حرارة",
          "وادي الموت",
          "WMO"
        ],
        "source": "World Meteorological Organization, Records of Weather and Climate Extremes Table, as of 2025-07-31: https://wmo.int/files/records-of-weather-and-climate-extremes-table",
        "external_id": "world-records-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-010",
        "question_text": "أي نزاع يُذكر عادةً بوصفه أقصر حرب مسجلة، إذ انتهى في 27 أغسطس 1896 بعد أقل من ساعة تقريبًا؟",
        "options": [
          "حرب الخنزير",
          "حرب الأيام الستة",
          "الحرب الإنجليزية الزنجبارية",
          "الحرب الإنجليزية الفارسية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اندلع القصف البريطاني لقصر زنجبار صباح 27 أغسطس 1896 وانتهت المقاومة بعد نحو 38 إلى 45 دقيقة بحسب طريقة حساب البداية والنهاية. لذلك تُوصف الحرب الإنجليزية الزنجبارية عادةً بأنها الأقصر، مع إبقاء المدة نطاقًا بدل رقم وحيد مختلف عليه.",
        "difficulty": "medium",
        "subcategory": "سجلات التاريخ",
        "tags": [
          "زنجبار",
          "أقصر حرب",
          "1896"
        ],
        "source": "Encyclopaedia Britannica, Anglo-Zanzibar War: https://www.britannica.com/event/Anglo-Zanzibar-War (اطلاع 2026-08-05)",
        "external_id": "world-records-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-011",
        "question_text": "سجلت محطة فوستوك في أنتاركتيكا أدنى حرارة هواء مقاسة مباشرة ومعترفًا بها من WMO، وهي −89.2°م. في أي تاريخ حدث ذلك؟",
        "options": [
          "24 أغسطس 1960",
          "21 يوليو 1983",
          "10 أغسطس 2010",
          "31 يوليو 2025"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قيس السجل بمحطة فوستوك في 21 يوليو 1983. وتوجد تقديرات ساتلية لدرجات سطح ثلجي أبرد، لكنها ليست قياسًا معياريًا لحرارة الهواء في محطة أرصاد؛ لذلك يبقى سجل WMO للهواء −89.2°م.",
        "difficulty": "high",
        "subcategory": "السجلات المناخية",
        "tags": [
          "فوستوك",
          "أدنى حرارة",
          "أنتاركتيكا"
        ],
        "source": "World Meteorological Organization, Records of Weather and Climate Extremes Table, as of 2025-07-31: https://wmo.int/files/records-of-weather-and-climate-extremes-table",
        "external_id": "world-records-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-012",
        "question_text": "يحمل موقع فوك-فوك في جزيرة لا ريونيون سجل WMO لأكبر مطر خلال 24 ساعة: 1,825 ملم في يناير 1966. بأي إعصار مداري ارتبط الحدث؟",
        "options": [
          "إعصار هايان",
          "إعصار دينيس",
          "إعصار نانسي",
          "إعصار فريدي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هطل 1,825 ملم في 24 ساعة عند فوك-فوك يومي 7 و8 يناير 1966 أثناء الإعصار المداري دينيس. تضاريس لا ريونيون الجبلية تعزز صعود الهواء الرطب، ولهذا تظهر الجزيرة في عدة سجلات عالمية لتراكم المطر خلال مدد متعددة.",
        "difficulty": "high",
        "subcategory": "السجلات المناخية",
        "tags": [
          "فوك فوك",
          "ريونيون",
          "الأمطار"
        ],
        "source": "World Meteorological Organization, World Weather & Climate Extremes Archive—Greatest 24-hour rainfall: https://wmo.int/site/world-weather-and-climate-extremes-archive (حالة 2025-07-31)",
        "external_id": "world-records-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-013",
        "question_text": "أي عامل يجعل هبة بارو آيلاند الأسترالية البالغة 113.2 م/ث في 10 أبريل 1996 سجلًا عالميًا لـ«أقصى هبة رياح» لدى WMO، مع استبعاد الأعاصير القمعية؟",
        "options": [
          "قيسَت فوق قمة إيفرست",
          "استُنتجت من أضرار المباني فقط",
          "كانت متوسطًا شهريًا لا هبة لحظية",
          "ارتبطت بإعصار مداري وسجلها جهاز قياس سطحي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجل جهاز الأنيمومتر في بارو آيلاند هبة 113.2 م/ث، أي نحو 408 كم/س، أثناء الإعصار المداري أوليفيا. يفصل أرشيف WMO هذه الفئة عن سرعات الأعاصير القمعية التي تُقاس أو تُستنتج بمنهج مختلف.",
        "difficulty": "high",
        "subcategory": "السجلات المناخية",
        "tags": [
          "بارو آيلاند",
          "الإعصار أوليفيا",
          "أقصى هبة"
        ],
        "source": "World Meteorological Organization, Records of Weather and Climate Extremes Table, as of 2025-07-31: https://wmo.int/files/records-of-weather-and-climate-extremes-table",
        "external_id": "world-records-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-014",
        "question_text": "أي إعصار مداري يحمل سجل أدنى ضغط جوي عند مستوى البحر خارج الأعاصير القمعية، بقيمة 870 هكتوباسكال في 12 أكتوبر 1979؟",
        "options": [
          "الإعصار باتريشيا",
          "الإعصار ويلما",
          "الإعصار نانسي",
          "الإعصار تيب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصل الضغط المركزي في عين الإعصار الفائق تيب إلى 870 هكتوباسكال، وهو أدنى ضغط سطحي معتمد عالميًا في هذا التصنيف. باتريشيا سجل شدة رياح استثنائية في النصف الغربي، لكنه لم يخفض الضغط إلى قيمة تيب.",
        "difficulty": "high",
        "subcategory": "الأعاصير المدارية",
        "tags": [
          "تيب",
          "الضغط الجوي",
          "1979"
        ],
        "source": "World Meteorological Organization, Records of Weather and Climate Extremes Table, as of 2025-07-31: https://wmo.int/files/records-of-weather-and-climate-extremes-table",
        "external_id": "world-records-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-015",
        "question_text": "في يوليو 2025 صدّقت WMO رقمًا قياسيًا جديدًا لأطول ومضة برق مفردة: 829 كم. بين أي منطقتين امتدت تقريبًا؟",
        "options": [
          "من فلوريدا إلى كوبا",
          "من شرق تكساس إلى قرب كانساس سيتي",
          "من الأرجنتين إلى أوروغواي",
          "من فرنسا إلى إيطاليا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وقعت الومضة في أكتوبر 2017 وامتدت 829 كم من شرق تكساس إلى قرب كانساس سيتي، لكن تحليل الأقمار الصناعية اللاحق أتاح توثيقها والتصديق عليها في 31 يوليو 2025. ذكر باريس والبندقية في بيان WMO مجرد مقارنة للمسافة، لا موقع الومضة.",
        "difficulty": "high",
        "subcategory": "البرق",
        "tags": [
          "ميغافلاش",
          "البرق",
          "WMO 2025"
        ],
        "source": "World Meteorological Organization, WMO certifies megaflash lightning record in USA, 2025-07-31: https://wmo.int/news/media-centre/wmo-certifies-megaflash-lightning-record-usa",
        "external_id": "world-records-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-016",
        "question_text": "اعتمدت WMO الإعصار المداري فريدي بوصفه الأطول عمرًا. كم يومًا بلغ عمره الإجمالي وفق التقييم المنشور في يوليو 2024؟",
        "options": [
          "36 يومًا",
          "24 يومًا",
          "31 يومًا",
          "42 يومًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خلص تقييم WMO إلى أن فريدي دام 36 يومًا بحالة عاصفة مدارية، من 4 فبراير إلى 14 مارس 2023، متجاوزًا الرقم السابق للإعصار جون. كما عبر كامل المحيط الهندي الجنوبي ومر بمراحل ضعف وإعادة اشتداد.",
        "difficulty": "high",
        "subcategory": "الأعاصير المدارية",
        "tags": [
          "فريدي",
          "أطول إعصار",
          "2023"
        ],
        "source": "World Meteorological Organization, Tropical Cyclone Freddy is the longest tropical cyclone on record at 36 days, 2024-07-02: https://wmo.int/news/media-centre/tropical-cyclone-freddy-is-longest-tropical-cyclone-record-36-days",
        "external_id": "world-records-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-017",
        "question_text": "وفق أرشيف WMO، أين سقطت أثقل حبّة بَرَد موثقة عالميًا، بكتلة 1.02 كغ، في 14 أبريل 1986؟",
        "options": [
          "غوبالغنج في بنغلاديش",
          "فيفيان في داكوتا الجنوبية",
          "كوفينغتون في نبراسكا",
          "بارو آيلاند في أستراليا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجلت غوبالغنج في بنغلاديش حبّة برد كتلتها 1.02 كغ. أما حبّة فيفيان الأميركية فمشهورة بسجل أميركي للقطر (20.3 سم) والمحيط، وهو تصنيف مختلف؛ لذا يحدد السؤال «الأثقل عالميًا» لا «الأكبر قطرًا في الولايات المتحدة».",
        "difficulty": "high",
        "subcategory": "البَرَد",
        "tags": [
          "غوبالغنج",
          "أثقل بردة",
          "بنغلاديش"
        ],
        "source": "World Meteorological Organization, World Weather & Climate Extremes Archive—Heaviest hailstone: https://wmo.int/site/world-weather-and-climate-extremes-archive (حالة 2025-07-31)",
        "external_id": "world-records-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-018",
        "question_text": "صُوِّرت أعمق سمكة معروفة حيةً سنة 2022 على عمق 8,336 مترًا في خندق إيزو-أوغاساوارا. إلى أي جنس تنتمي؟",
        "options": [
          "Himantolophus",
          "Macropinna",
          "Pseudoliparis",
          "Latimeria"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التقطت كاميرا سمكة حلزونية من جنس Pseudoliparis على عمق 8,336 مترًا؛ ولم تُصَد العينة المصورة، لذلك عُرّفت إلى مستوى الجنس. وفي الرحلة نفسها صيدت عينات من Pseudoliparis belyaevi على عمق 8,022 مترًا، وهو رقم قياسي منفصل للصيد.",
        "difficulty": "high",
        "subcategory": "أحياء الأعماق",
        "tags": [
          "Pseudoliparis",
          "سمكة حلزونية",
          "خندق إيزو أوغاساوارا"
        ],
        "source": "The University of Western Australia, Scientists break record for deepest fish ever filmed, 2023-04-03: https://www.uwa.edu.au/news/article/2023/april/scientists-break-record-for-deepest-fish-ever-filmed",
        "external_id": "world-records-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-019",
        "question_text": "قدّرت دراسة التأريخ بالكربون المشع لعدسة العين عمر أكبر قرش غرينلاند في عينتها بنحو 392 سنة. ما هامش عدم اليقين المنشور لهذا التقدير؟",
        "options": [
          "±120 سنة",
          "±12 سنة",
          "±50 سنة",
          "±240 سنة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان التقدير 392 ± 120 سنة، وهو هامش واسع يبين أن الرقم ليس «عمرًا دقيقًا» للفرد. استخدم الباحثون الكربون المشع في بروتينات نواة عدسة العين التي تتكون مبكرًا ولا تتجدد، وخلصوا إلى أن النوع أطول الفقاريات عمرًا المعروفة.",
        "difficulty": "high",
        "subcategory": "طول العمر الحيواني",
        "tags": [
          "قرش غرينلاند",
          "الكربون المشع",
          "392 سنة"
        ],
        "source": "Nielsen et al., Eye lens radiocarbon reveals centuries of longevity in the Greenland shark, Science 353 (2016): https://doi.org/10.1126/science.aaf1703",
        "external_id": "world-records-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-020",
        "question_text": "في دراسة تتبع جغرافي، قطع خرشنة قطبية مسارًا سنويًا قياسيًا تجاوز 96 ألف كم. إلى أي منطقة شتوية توجه الطائر من جزر فارن البريطانية؟",
        "options": [
          "بحر بيرنغ",
          "بحر ويدل في أنتاركتيكا",
          "مدغشقر",
          "جزر غالاباغوس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعقب الباحثون خرشنة قطبية من جزر فارن إلى بحر ويدل في أنتاركتيكا ثم عودتها، فبلغت الرحلة أكثر من 96 ألف كم بسبب المسار المتعرج واستغلال الرياح ومناطق الغذاء. المسافة الفعلية أكبر كثيرًا من خط مستقيم بين منطقتي التكاثر والشتاء.",
        "difficulty": "high",
        "subcategory": "هجرة الطيور",
        "tags": [
          "الخرشنة القطبية",
          "الهجرة",
          "بحر ويدل"
        ],
        "source": "Newcastle University, Arctic tern's record-breaking journey, 2016-06-07: https://www.ncl.ac.uk/press/articles/archive/2016/06/arcticternsrecordbreakingjourney/",
        "external_id": "world-records-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-021",
        "question_text": "ما العمق النهائي الذي بلغه بئر كولا فائق العمق SG-3 في روسيا سنة 1989، محافظًا على سجل أعمق اختراق رأسي اصطناعي للقشرة؟",
        "options": [
          "10,911 مترًا",
          "11,034 مترًا",
          "15,000 متر",
          "12,262 مترًا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصل فرع SG-3 إلى 12,262 مترًا. قد تكون آبار نفط حديثة أطول «طولًا مقاسًا» لأنها تنحرف أفقيًا، لكن كولا يحتفظ بسجل العمق الرأسي؛ وهذه التفرقة بين طول مسار البئر والعمق الرأسي تمنع المقارنة المضللة.",
        "difficulty": "high",
        "subcategory": "الهندسة الجيولوجية",
        "tags": [
          "بئر كولا",
          "SG-3",
          "العمق الرأسي"
        ],
        "source": "Guinness World Records, Deepest penetration into the Earth's crust: https://www.guinnessworldrecords.com/world-records/deepest-penetration-into-the-earths-crust (اطلاع 2026-08-05)",
        "external_id": "world-records-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-022",
        "question_text": "أي دولة تتصدر عادةً عدد المناطق الزمنية إذا احتُسبت أقاليمها المنتشرة وراء البحار، بواقع 12 منطقة قياسية و13 في جزء من السنة؟",
        "options": [
          "روسيا",
          "الولايات المتحدة",
          "فرنسا",
          "المملكة المتحدة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنتشر أقاليم فرنسا من الكاريبي إلى المحيطين الهندي والهادئ، فتغطي 12 فرقًا معياريًا عن UTC، وتصبح 13 عند احتساب التوقيت الصيفي في سان بيير وميكلون. روسيا تغطي 11 منطقة زمنية متصلة تقريبًا، لذلك لا تتصدر بهذا التعريف.",
        "difficulty": "high",
        "subcategory": "غرائب السياسة والجغرافيا",
        "tags": [
          "فرنسا",
          "المناطق الزمنية",
          "أقاليم ما وراء البحار"
        ],
        "source": "Guinness World Records, Country with the most time zones: https://www.guinnessworldrecords.com/world-records/country-with-the-most-time-zones (اطلاع 2026-08-05)",
        "external_id": "world-records-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-023",
        "question_text": "دام حكم لويس الرابع عشر 72 سنة و110 أيام، وهو الأطول الموثق لملك ذي سيادة. ما العامل الذي يفسر إمكان بلوغ هذه المدة الاستثنائية؟",
        "options": [
          "تولّى العرش وهو في الرابعة من عمره",
          "حكم دولتين بالتناوب فجمعت المدتان",
          "أُعيد احتساب سنوات الوصاية بعد وفاته",
          "تنازل ثم عاد إلى العرش ثلاث مرات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أصبح لويس الرابع عشر ملك فرنسا في 14 مايو 1643 وهو طفل في الرابعة، وظل ملكًا حتى وفاته في 1 سبتمبر 1715. شملت مدة الحكم سنوات الوصاية لأنها بدأت قانونيًا عند توليه العرش، حتى وإن لم يمارس الحكم الشخصي منذ اليوم الأول.",
        "difficulty": "high",
        "subcategory": "سجلات الملوك",
        "tags": [
          "لويس الرابع عشر",
          "أطول حكم",
          "فرنسا"
        ],
        "source": "Guinness World Records, Longest reign of a monarch: https://www.guinnessworldrecords.com/world-records/longest-reign-of-a-monarch (اطلاع 2026-08-05)",
        "external_id": "world-records-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-024",
        "question_text": "في إحصاءات مكتبة الكونغرس، لماذا لا يساوي عدد «المواد» في مجموعتها عدد الكتب المطبوعة؟",
        "options": [
          "لأنها تعد الكتب الرقمية مرتين دائمًا",
          "لأن الصحف تستبعد كليًا من الإحصاء",
          "لأن كل صفحة في الكتاب تُعد مادة مستقلة",
          "لأن مفهوم المواد يشمل تسجيلات وصورًا وخرائط ومخطوطات ومواد موسيقية إلى جانب الكتب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصف مكتبة الكونغرس نفسها بأنها أكبر مكتبة في العالم استنادًا إلى مجموعة تتجاوز 178 مليون مادة، لكن «المادة» وحدة مقتنيات متنوعة لا مرادف لكتاب: تشمل تسجيلات وصورًا وخرائط ومخطوطات ونوتات موسيقية وغيرها. لذا فإن تحويل الرقم إلى «178 مليون كتاب» خطأ شائع.",
        "difficulty": "high",
        "subcategory": "المعرفة والمكتبات",
        "tags": [
          "مكتبة الكونغرس",
          "المقتنيات",
          "أكبر مكتبة"
        ],
        "source": "Library of Congress, Fascinating Facts: https://www.loc.gov/about/fascinating-facts/ (العدد ديناميكي؛ اطلاع 2026-08-05)",
        "external_id": "world-records-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "world-records-025",
        "question_text": "كشف التحليل الجيني في خليج شارك بأستراليا أن مرجًا بحريًا يغطي نحو 200 كم² هو نبات واحد ممتد نسليًا. ما نوعه؟",
        "options": [
          "Zostera marina",
          "Macrocystis pyrifera",
          "Posidonia australis",
          "Thalassia testudinum"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أظهرت البصمات الجينية أن عينات Posidonia australis المتباعدة في خليج شارك تنتمي إلى نسخة وراثية واحدة نمت بجذاميرها على مساحة تقارب 200 كم². وهي نبات مزهر بحري وليست طحلبًا عملاقًا؛ ويختلف سجل «أكبر كائن» باختلاف معيار المساحة أو الكتلة أو الاتصال النسلي.",
        "difficulty": "high",
        "subcategory": "غرائب النبات",
        "tags": [
          "Posidonia australis",
          "خليج شارك",
          "نمو نسلي"
        ],
        "source": "The University of Western Australia, World's largest plant discovered in Shark Bay, 2022-06-01: https://www.uwa.edu.au/news/article/2022/june/worlds-largest-plant-discovered-in-shark-bay",
        "external_id": "world-records-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-islamic-battles-treaties-01",
    "user_id": "system",
    "title": "الغزوات والمعاهدات الإسلامية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "إسلاميات",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "كان خروج المسلمين إلى بدر مرتبطًا أولًا بعير قريش العائدة من الشام. من كان يقود تلك القافلة وتمكن من تغيير طريقها والنجاة بها؟",
        "options": [
          "أبو سفيان بن حرب",
          "صفوان بن أمية",
          "عكرمة بن أبي جهل",
          "سهيل بن عمرو"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان أبو سفيان قائد العير، فاستطلع الأخبار وحوّل القافلة إلى طريق الساحل حتى نجت، بينما مضى جيش قريش إلى بدر. يفسر ذلك قوله تعالى إن المسلمين ودّوا أن تكون لهم إحدى الطائفتين: العير أو النفير.",
        "source": "ابن هشام، السيرة النبوية، خبر مسير أبي سفيان بالعير إلى بدر؛ والقرآن الكريم، سورة الأنفال 8:7.",
        "difficulty": "medium",
        "subcategory": "غزوة بدر",
        "tags": [
          "بدر",
          "قافلة قريش",
          "أبو سفيان"
        ],
        "external_id": "isl-bat-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المهمة التي كلّف بها النبي ﷺ عبدَ الله بن جبير ومن معه يوم أُحد، بحسب حديث البراء بن عازب؟",
        "options": [
          "الثبات على موضع الرماة وحماية ظهر الجيش ولو رأوا النصر أو الهزيمة",
          "حراسة مدخل المدينة ومنع الإمدادات",
          "ملاحقة المنسحبين حتى مكة",
          "التفاوض مع قريش قبل بدء القتال"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أمّر النبي ﷺ عبد الله بن جبير على الرماة وأمرهم ألا يتركوا موضعهم سواء رأوا المسلمين منتصرين أو مصابين. لما ترك أكثرهم الموقع انكشف ظهر الجيش، وهو محور تفسير التحول الميداني في أُحد.",
        "source": "صحيح البخاري، كتاب المغازي، باب غزوة أُحد، حديث البراء بن عازب في إمارة عبد الله بن جبير على الرماة.",
        "difficulty": "medium",
        "subcategory": "غزوة أُحد",
        "tags": [
          "أحد",
          "الرماة",
          "عبد الله بن جبير"
        ],
        "external_id": "isl-bat-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سورة وصفت اجتماع الأحزاب حول المدينة واضطراب الأبصار وبلوغ القلوب الحناجر؟",
        "options": [
          "سورة الأنفال",
          "سورة الأحزاب",
          "سورة الحشر",
          "سورة الفتح"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تسجل سورة الأحزاب مشهد الحصار والابتلاء في الآيات 9–22، ومنها وصف مجيء الجموع من فوق المسلمين ومن أسفل منهم وزيغ الأبصار وبلوغ القلوب الحناجر. أما الأنفال فمحورها الأبرز بدر، والحشر يتناول بني النضير.",
        "source": "القرآن الكريم، سورة الأحزاب 33:9–22، ولا سيما الآيتان 10–11.",
        "difficulty": "medium",
        "subcategory": "غزوة الخندق",
        "tags": [
          "الأحزاب",
          "الخندق",
          "القرآن"
        ],
        "external_id": "isl-bat-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الشرط الزمني المتعلق بالعمرة في صلح الحديبية كما يظهر في حديث المسور بن مخرمة ومروان؟",
        "options": [
          "يدخل المسلمون مكة في عامهم نفسه ويقيمون ثلاثة أيام",
          "تؤجل العمرة خمس سنوات كاملة",
          "تكون العمرة التالية بلا سلاح ولا هدي",
          "يرجع المسلمون ذلك العام ويدخلون مكة في العام التالي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قضى الصلح بأن يرجع المسلمون من الحديبية من غير دخول مكة ذلك العام، ثم يأتوا في العام التالي. لذلك سميت العمرة التالية عمرة القضاء، وكان الرجوع الفوري من أكثر بنود الصلح مشقة على بعض الصحابة.",
        "source": "صحيح البخاري، كتاب الشروط، باب الشروط في الجهاد والمصالحة مع أهل الحرب، حديث المسور بن مخرمة ومروان في صلح الحديبية.",
        "difficulty": "medium",
        "subcategory": "صلح الحديبية",
        "tags": [
          "الحديبية",
          "عمرة القضاء",
          "شروط الصلح"
        ],
        "external_id": "isl-bat-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لمن أعطى النبي ﷺ الراية يوم خيبر بعد أن أخبر أنه سيعطيها رجلًا يحب الله ورسوله ويحبه الله ورسوله؟",
        "options": [
          "الزبير بن العوام",
          "علي بن أبي طالب",
          "سعد بن أبي وقاص",
          "أبو عبيدة بن الجراح"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دعا النبي ﷺ علي بن أبي طالب، فمسح على عينيه حين كان يشتكيهما، ثم دفع إليه الراية وأرشده إلى الدعوة قبل القتال. ورد أصل الخبر في الصحيحين، وهو من أشهر الوقائع الثابتة في خيبر.",
        "source": "صحيح البخاري، كتاب المغازي، باب غزوة خيبر؛ وصحيح مسلم، كتاب فضائل الصحابة، باب من فضائل علي بن أبي طالب.",
        "difficulty": "medium",
        "subcategory": "غزوة خيبر",
        "tags": [
          "خيبر",
          "الراية",
          "علي بن أبي طالب"
        ],
        "external_id": "isl-bat-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف رتب النبي ﷺ قيادة جيش مؤتة قبل خروجه، وفق رواية عبد الله بن عمر؟",
        "options": [
          "خالد بن الوليد، ثم زيد بن حارثة، ثم جعفر",
          "جعفر بن أبي طالب، ثم خالد بن الوليد، ثم أسامة بن زيد",
          "زيد بن حارثة، ثم جعفر بن أبي طالب، ثم عبد الله بن رواحة",
          "عبد الله بن رواحة، ثم زيد بن حارثة، ثم أبو عبيدة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عيّن النبي ﷺ زيدًا أولًا، فإن أصيب فجعفر، فإن أصيب فعبد الله بن رواحة. استشهد الثلاثة بهذا الترتيب، ثم أخذ خالد بن الوليد الراية من غير أن يكون ضمن التسلسل المسمّى ابتداءً.",
        "source": "صحيح البخاري، كتاب المغازي، باب غزوة مؤتة من أرض الشام، حديث عبد الله بن عمر.",
        "difficulty": "medium",
        "subcategory": "غزوة مؤتة",
        "tags": [
          "مؤتة",
          "زيد بن حارثة",
          "جعفر بن أبي طالب",
          "عبد الله بن رواحة"
        ],
        "external_id": "isl-bat-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما العامل الذي نهى القرآن عن الاغترار به عند ذكر بداية يوم حنين؟",
        "options": [
          "حصانة المدينة التي ظنوا أنها تمنع الهزيمة",
          "كثرة العدد التي أعجبت المسلمين فلم تغن عنهم",
          "تحالف الروم الذي اعتقدوا أنه دائم",
          "وفرة السلاح البحري لدى المسلمين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نصت الآية على أن كثرة المسلمين أعجبتهم يوم حنين، لكنها لم تدفع عنهم شدة المفاجأة، فضاقت عليهم الأرض وولوا مدبرين، ثم أنزل الله سكينته. الدرس القرآني يربط النصر بالتأييد لا بمجرد التفوق العددي.",
        "source": "القرآن الكريم، سورة التوبة 9:25–26.",
        "difficulty": "medium",
        "subcategory": "غزوة حنين",
        "tags": [
          "حنين",
          "الكثرة",
          "سورة التوبة"
        ],
        "external_id": "isl-bat-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بأي وصف قرآني اشتهرت الظروف الشاقة التي خرج فيها النبي ﷺ والمهاجرون والأنصار إلى تبوك؟",
        "options": [
          "يوم الفرقان",
          "يوم الجمع",
          "ليلة الإسراء",
          "ساعة العسرة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سمت سورة التوبة الظرف «ساعة العسرة» عند ذكر توبة الله على النبي والمهاجرين والأنصار الذين اتبعوه فيها. يرتبط الوصف بما صاحب تبوك من بعد المسافة والحر وقلة الزاد والركائب.",
        "source": "القرآن الكريم، سورة التوبة 9:117؛ وانظر صحيح البخاري، كتاب المغازي، باب غزوة تبوك في خبر كعب بن مالك.",
        "difficulty": "medium",
        "subcategory": "غزوة تبوك",
        "tags": [
          "تبوك",
          "ساعة العسرة",
          "سورة التوبة"
        ],
        "external_id": "isl-bat-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في سياق بدر، ما المقصود بـ«إحدى الطائفتين» في قوله تعالى: ﴿وإذ يعدكم الله إحدى الطائفتين أنها لكم﴾؟",
        "options": [
          "الأوس أو الخزرج",
          "قريظة أو النضير",
          "الروم أو الفرس",
          "عير قريش أو جيشها الخارج للقتال"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفسر كتب التفسير والسيرة الطائفتين بالعير التجارية التي يقودها أبو سفيان والنفير، أي القوة القرشية التي خرجت لحمايتها. كان المسلمون يميلون إلى العير لقلة شوكتها، وأراد الله وقوع المواجهة التي أظهرت الحق.",
        "source": "القرآن الكريم، سورة الأنفال 8:7؛ الطبري، جامع البيان، تفسير الآية 7 من سورة الأنفال.",
        "difficulty": "high",
        "subcategory": "غزوة بدر",
        "tags": [
          "بدر",
          "الأنفال",
          "العير والنفير"
        ],
        "external_id": "isl-bat-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي آية من سورة آل عمران فسرت جانبًا من الخلل الذي وقع في أُحد بذكر التنازع والعصيان بعد أن أرى الله المسلمين ما يحبون؟",
        "options": [
          "آية 123",
          "آية 152",
          "آية 159",
          "آية 173"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الآية 152 تقول: ﴿حتى إذا فشلتم وتنازعتم في الأمر وعصيتم من بعد ما أراكم ما تحبون﴾، ثم تذكر اختلاف الإرادة بين طلب الدنيا والآخرة. وهي النص القرآني الأوضح اتصالًا بمخالفة طائفة الرماة للأمر في أُحد.",
        "source": "القرآن الكريم، سورة آل عمران 3:152؛ صحيح البخاري، كتاب المغازي، باب غزوة أُحد، حديث البراء بن عازب.",
        "difficulty": "high",
        "subcategory": "غزوة أُحد",
        "tags": [
          "أحد",
          "آل عمران",
          "الرماة"
        ],
        "external_id": "isl-bat-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بحسب رواية السيرة المشهورة، أي تدبير دفاعي غير مألوف لدى العرب أشار به سلمان الفارسي عند قدوم الأحزاب؟",
        "options": [
          "إغراق الطرق المحيطة بالمدينة",
          "إخلاء المدينة والقتال من خيبر",
          "حفر خندق في الجهة المكشوفة من المدينة",
          "بناء أبراج خشبية متنقلة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنسب كتب السيرة إلى سلمان الفارسي اقتراح الخندق، وهي وسيلة عرفها من قتال الفرس ولم تكن من أساليب العرب المعتادة. صيغ السؤال بعبارة «رواية السيرة المشهورة» لأن نسبة الاقتراح التفصيلية تُروى في مصادر السيرة، لا في حديث متفق عليه مستقل بهذا اللفظ.",
        "source": "ابن هشام، السيرة النبوية، خبر غزوة الخندق واقتراح سلمان؛ والبيهقي، دلائل النبوة، باب غزوة الخندق.",
        "difficulty": "high",
        "subcategory": "غزوة الخندق",
        "tags": [
          "الخندق",
          "سلمان الفارسي",
          "السيرة"
        ],
        "external_id": "isl-bat-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الحدث المباشر الذي ارتبط ببيعة الرضوان في الحديبية وفق روايات السيرة والمغازي؟",
        "options": [
          "شيوع خبر مقتل عثمان بن عفان الذي أُرسل إلى مكة",
          "وصول خبر استشهاد قادة مؤتة",
          "نقض بني بكر هدنة الحديبية",
          "منع قريش خالد بن الوليد من العودة إلى مكة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أرسل النبي ﷺ عثمان إلى مكة للتفاوض، ثم شاع أنه قُتل، فدعا أصحابه إلى البيعة تحت الشجرة. ثبتت البيعة وفضل أهلها في القرآن والصحيح، أما ربطها بتفصيل إشاعة قتل عثمان فمذكور في روايات السيرة والمغازي.",
        "source": "القرآن الكريم، سورة الفتح 48:18؛ صحيح مسلم، كتاب الإمارة، باب استحباب مبايعة الإمام الجيش عند إرادة القتال؛ ابن هشام، السيرة النبوية، خبر إرسال عثمان والبيعة.",
        "difficulty": "high",
        "subcategory": "بيعة الرضوان",
        "tags": [
          "الحديبية",
          "بيعة الرضوان",
          "عثمان بن عفان"
        ],
        "external_id": "isl-bat-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "عند كتابة وثيقة الحديبية، ما العبارة التي اعترض سهيل بن عمرو على إثباتها في صدر الوثيقة بحسب حديث البراء؟",
        "options": [
          "محمد رسول الله",
          "قريش أهل الحرم",
          "علي بن أبي طالب كاتب الصلح",
          "الهدنة عشر سنين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اعترض سهيل على كتابة «محمد رسول الله» محتجًا بأن الإقرار بالرسالة كان سينهي موضع النزاع، وطلب «محمد بن عبد الله». امتنع علي أولًا عن محو العبارة تعظيمًا، فدل النبي ﷺ على موضعها فمحاها، وأُتم الصلح.",
        "source": "صحيح البخاري، كتاب الصلح، باب كيف يكتب هذا ما صالح فلان؛ وصحيح مسلم، كتاب الجهاد والسير، باب صلح الحديبية.",
        "difficulty": "high",
        "subcategory": "صلح الحديبية",
        "tags": [
          "الحديبية",
          "سهيل بن عمرو",
          "وثيقة الصلح"
        ],
        "external_id": "isl-bat-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي موقف وقع أثناء إبرام صلح الحديبية وجسّد فورًا صعوبة بند إعادة من يأتي من قريش إلى المسلمين؟",
        "options": [
          "عودة عثمان بن عفان من الحبشة",
          "إسلام أبي سفيان أمام العباس",
          "خروج أبي بصير قبل بدء المفاوضات",
          "وصول أبي جندل بن سهيل مقيدًا وطلب سهيل إعادته"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصل أبو جندل بن سهيل يرسف في قيوده بعد الاتفاق على أصل الصلح، فطالب أبوه سهيل بأن يكون أول من يرد وفق الشرط. أعاده النبي ﷺ وفاءً بالعهد، مع تسليته ووعده بأن يجعل الله له وللمستضعفين فرجًا.",
        "source": "صحيح البخاري، كتاب الشروط، باب الشروط في الجهاد والمصالحة مع أهل الحرب، حديث المسور بن مخرمة ومروان.",
        "difficulty": "high",
        "subcategory": "صلح الحديبية",
        "tags": [
          "أبو جندل",
          "سهيل بن عمرو",
          "الوفاء بالعهد"
        ],
        "external_id": "isl-bat-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف تعامل النبي ﷺ مع أرض خيبر بعد فتحها وفق حديث ابن عمر؟",
        "options": [
          "قسم جميع النخيل فورًا ثم أخلى السكان في اليوم نفسه",
          "جعل محصولها كله وقفًا على قريش",
          "ترك أهلها يعملون فيها مقابل شطر ما يخرج منها من ثمر أو زرع",
          "منع زراعتها وأبقاها منطقة عسكرية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عامل النبي ﷺ أهل خيبر على أن يعملوا الأرض من أموالهم ولهم شطر الثمر أو الزرع. تكشف الواقعة أن نتائج الفتح لم تقتصر على القتال، بل شملت ترتيبًا اقتصاديًا لإدارة الأرض والإنتاج.",
        "source": "صحيح البخاري، كتاب المزارعة، باب إذا قال رب الأرض أقرك ما أقرك الله؛ وصحيح مسلم، كتاب المساقاة، باب المساقاة والمعاملة بجزء من الثمر والزرع.",
        "difficulty": "high",
        "subcategory": "غزوة خيبر",
        "tags": [
          "خيبر",
          "المساقاة",
          "إدارة الأرض"
        ],
        "external_id": "isl-bat-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تسلسل يطابق الأخبار النبوية التي أبلغ بها النبي ﷺ عن قادة مؤتة قبل وصول الخبر المعتاد من الميدان؟",
        "options": [
          "أُصيب جعفر ثم زيد ثم ابن رواحة، وأخذ الراية أسامة",
          "أُصيب زيد ثم ابن رواحة ثم جعفر، وأخذ الراية أبو عبيدة",
          "أُصيب خالد ثم زيد ثم جعفر، وعادت الراية إلى ابن رواحة",
          "أُصيب زيد ثم جعفر ثم ابن رواحة، ثم أخذ الراية خالد بن الوليد"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نعى النبي ﷺ زيدًا ثم جعفرًا ثم ابن رواحة، وأخبر أن خالد بن الوليد أخذ الراية بعدهم حتى فتح الله على الجيش. يختبر السؤال التفريق بين ترتيب القيادة المسمى ابتداءً وبين تولي خالد بعد استشهاد القادة الثلاثة.",
        "source": "صحيح البخاري، كتاب المناقب، باب مناقب خالد بن الوليد؛ وكتاب المغازي، باب غزوة مؤتة.",
        "difficulty": "high",
        "subcategory": "غزوة مؤتة",
        "tags": [
          "مؤتة",
          "خالد بن الوليد",
          "تسلسل القيادة"
        ],
        "external_id": "isl-bat-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي واقعة كانت السبب المباشر في التحرك نحو فتح مكة ضمن سياق نقض الحديبية في كتب السيرة؟",
        "options": [
          "منع قافلة المسلمين من المرور إلى الشام",
          "استيلاء ثقيف على هدي عمرة القضاء",
          "اعتداء بني بكر، حلفاء قريش، على خزاعة حليفة المسلمين مع إعانة من قريش",
          "نقض يهود خيبر عهدًا عُقد بعد الفتح"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دخلت خزاعة في حلف النبي ﷺ، ودخل بنو بكر في حلف قريش. اعتدى بنو بكر على خزاعة وأعانتهم عناصر من قريش، فعدّ ذلك نقضًا للعهد واستنصرت خزاعة، فتهيأ المسلمون لفتح مكة. هذا التفصيل من روايات السيرة والمغازي المشهورة.",
        "source": "ابن هشام، السيرة النبوية، خبر سبب فتح مكة ونقض بني بكر وقريش عهد خزاعة؛ ابن كثير، البداية والنهاية، أحداث سنة 8 هـ.",
        "difficulty": "high",
        "subcategory": "فتح مكة",
        "tags": [
          "فتح مكة",
          "خزاعة",
          "بنو بكر",
          "نقض العهد"
        ],
        "external_id": "isl-bat-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما القرار الذي اتخذه النبي ﷺ في غنائم حنين تجاه المؤلفة قلوبهم، وكان سببًا في حديثه المؤثر مع الأنصار؟",
        "options": [
          "ساوى بين جميع المقاتلين من غير أي عطاء زائد",
          "خص الأنصار بجميع السبي وترك الأموال للمهاجرين",
          "أعطى حديثي العهد بالإسلام وكبراء قريش عطاءً وافرًا للتأليف",
          "أعاد الغنائم كلها إلى هوازن قبل مجيء وفدهم"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعطى النبي ﷺ رجالًا من المؤلفة قلوبهم عطاءً كبيرًا من غنائم حنين، فوجد بعض الأنصار في أنفسهم. جمعهم وبيّن مقصد التأليف، ورضوا بأن يرجع الناس بالشاة والبعير ويرجعوا هم برسول الله ﷺ إلى رحالهم.",
        "source": "صحيح البخاري، كتاب المغازي، باب غزوة الطائف؛ وصحيح مسلم، كتاب الزكاة، باب إعطاء المؤلفة قلوبهم على الإسلام.",
        "difficulty": "high",
        "subcategory": "غزوة حنين",
        "tags": [
          "حنين",
          "الأنصار",
          "المؤلفة قلوبهم"
        ],
        "external_id": "isl-bat-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في قصة كعب بن مالك، ما الذي ميّز تخلفه عن تبوك عن أعذار المنافقين عند عودة النبي ﷺ؟",
        "options": [
          "قدم وثيقة مرض فقبلت بلا سؤال",
          "صدق واعترف بأنه لم يكن له عذر مع قدرته، ولم يحلف كذبًا",
          "كان مأمورًا بالبقاء لحراسة المدينة",
          "لحق بالجيش قبل وصوله إلى تبوك"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اختار كعب الصدق، فأقر بأنه كان قويًا موسرًا ولا عذر له، بينما اعتذر المتخلفون بأعذار وحلفوا. أُرجئ أمره وصاحبيه وقوطعوا خمسين ليلة، ثم نزلت توبتهم؛ فمحور القصة أخلاقي وتاريخي هو نجاة الصدق بعد الشدة.",
        "source": "صحيح البخاري، كتاب المغازي، باب حديث كعب بن مالك؛ صحيح مسلم، كتاب التوبة، باب حديث توبة كعب بن مالك وصاحبيه؛ القرآن الكريم 9:118–119.",
        "difficulty": "high",
        "subcategory": "غزوة تبوك",
        "tags": [
          "تبوك",
          "كعب بن مالك",
          "الصدق"
        ],
        "external_id": "isl-bat-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منشأة أمر القرآن النبي ﷺ ألا يقوم فيها، وكشف أن بناءها اتخذ للإضرار والتفريق بين المؤمنين في سياق العودة من تبوك؟",
        "options": [
          "مسجد الضرار",
          "مسجد قباء",
          "مسجد القبلتين",
          "المسجد النبوي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وصفت سورة التوبة مسجد الضرار بأنه اتُّخذ ضرارًا وكفرًا وتفريقًا بين المؤمنين وإرصادًا لمن حارب الله ورسوله، وأمرت النبي ﷺ ألا يقوم فيه أبدًا، وقابلته بمسجد أُسس على التقوى.",
        "source": "القرآن الكريم، سورة التوبة 9:107–110؛ الطبري، جامع البيان، تفسير الآيات 107–110 من سورة التوبة.",
        "difficulty": "high",
        "subcategory": "غزوة تبوك وما بعدها",
        "tags": [
          "مسجد الضرار",
          "تبوك",
          "سورة التوبة"
        ],
        "external_id": "isl-bat-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-islamic-quran-sciences-terms-scholars-02",
    "user_id": "system",
    "title": "علوم القرآن، المصطلحات والرجال",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "إسلاميات",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "وفق التعريف الاصطلاحي المشهور المبني على زمن الهجرة، كيف يُميَّز المكي من المدني؟",
        "options": [
          "المكي ما نزل داخل مكة فقط، والمدني ما نزل داخل المدينة فقط",
          "المكي ما خوطب به أهل مكة، والمدني ما خوطب به أهل المدينة",
          "المكي ما نزل قبل الهجرة، والمدني ما نزل بعدها ولو كان مكان النزول خارج المدينة",
          "المكي كل سورة قصيرة، والمدني كل سورة طويلة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أشهر الضوابط وأضبطها اعتبار الزمن: ما نزل قبل الهجرة مكي، وما نزل بعدها مدني، ولو نزل في مكة عام الفتح أو في سفر. أما ضابطا المكان والمخاطَبين فمذكوران عند العلماء لكنهما لا يستوعبان جميع المواضع بالقدر نفسه.",
        "source": "جلال الدين السيوطي، الإتقان في علوم القرآن، النوع الأول: معرفة المكي والمدني",
        "difficulty": "medium",
        "subcategory": "المكي والمدني",
        "tags": [
          "المكي",
          "المدني",
          "الهجرة"
        ],
        "external_id": "islam-quran-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفرق الأدق بين «سبب النزول» وبين مجرد وقوع حادثة في زمن نزول آية؟",
        "options": [
          "كل حادثة سبقت نزول الآية تعد سببًا لها",
          "سبب النزول هو المعنى اللغوي المستنبط من الآية",
          "سبب النزول حادثة أو سؤال نزلت الآية عقبه متحدثة عنه، ولا تكفي المعاصرة الزمنية وحدها لإثبات السببية",
          "لا يثبت سبب النزول إلا إذا ذُكر اسم السورة في الرواية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عرّف المحققون سبب النزول بما نزلت الآية أو الآيات متحدثة عنه أيام وقوعه، كحادثة أو سؤال. أما الأخبار التاريخية التي تسبق النص أو تعاصره من غير دلالة على التعقيب والارتباط فلا تصبح أسباب نزول بمجرد التزامن.",
        "source": "مناع القطان، مباحث في علوم القرآن، مبحث معرفة أسباب النزول",
        "difficulty": "medium",
        "subcategory": "أسباب النزول",
        "tags": [
          "سبب النزول",
          "الرواية",
          "السياق"
        ],
        "external_id": "islam-quran-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "عند الأصوليين والمفسرين، ما المقصود بقاعدة «العبرة بعموم اللفظ لا بخصوص السبب»؟",
        "options": [
          "أن الحكم يتناول ما يشمله اللفظ العام، ولا يُحصر في الواقعة التي كانت سبب النزول ما لم يقم مخصِّص",
          "أن معرفة سبب النزول لا قيمة لها في التفسير",
          "أن كل لفظ خاص يُحوَّل إلى عام",
          "أن الرواية المتأخرة تنسخ سبب النزول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خصوص الواقعة يفسر السياق، لكنه لا يقصر دلالة صيغة العموم عليها؛ فيمتد الحكم إلى أفراد اللفظ العام ما لم يرد دليل تخصيص. ولا تعني القاعدة إهمال السبب، إذ قد يعين على فهم المراد ودفع الإشكال.",
        "source": "بدر الدين الزركشي، البرهان في علوم القرآن، النوع التاسع: معرفة سبب النزول",
        "difficulty": "medium",
        "subcategory": "أصول التفسير",
        "tags": [
          "عموم اللفظ",
          "خصوص السبب",
          "الدلالة"
        ],
        "external_id": "islam-quran-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يميز «القراءة» عن «الرواية» في اصطلاح أهل القراءات؟",
        "options": [
          "القراءة خاصة بالرسم، والرواية خاصة بالتفسير",
          "القراءة ما نُسب إلى إمام قارئ، والرواية ما نُسب إلى راوٍ عنه، والطريق ما نُسب إلى الآخذ عن الراوي فمن دونه",
          "الرواية أعلى رتبة من القراءة وتشمل جميع القراء",
          "القراءة اجتهاد نحوي حديث، والرواية نقل قديم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في بناء أسانيد هذا الفن تنسب القراءة إلى الإمام، كقراءة نافع، والرواية إلى أحد رواته، كرواية ورش عن نافع، والطريق إلى من أخذ عن الراوي أو عن أصحابه. هذا تصنيف لسلسلة الأداء لا لدرجات صحة مستقلة بذاتها.",
        "source": "عبد الفتاح القاضي، البدور الزاهرة في القراءات العشر المتواترة، المقدمة الاصطلاحية",
        "difficulty": "medium",
        "subcategory": "مصطلح القراءات",
        "tags": [
          "قراءة",
          "رواية",
          "طريق"
        ],
        "external_id": "islam-quran-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عالم اشتهر بأنه أول من أفرد القراءات السبع في مصنف جمع فيه قراء الأمصار السبعة؟",
        "options": [
          "أبو بكر ابن مجاهد",
          "أبو عمرو الداني",
          "ابن الجزري",
          "مكي بن أبي طالب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صنف أبو بكر أحمد بن موسى ابن مجاهد المتوفى سنة 324هـ كتاب «السبعة في القراءات»، فاشتهر باختيار أئمة سبعة من قراء الأمصار. هذا الاختيار العلمي المتأخر لا يعني أن القراءات السبع هي نفسها الأحرف السبعة الواردة في الحديث.",
        "source": "ابن مجاهد، كتاب السبعة في القراءات، مقدمة المحقق شوقي ضيف",
        "difficulty": "medium",
        "subcategory": "رجال القراءات",
        "tags": [
          "ابن مجاهد",
          "القراءات السبع",
          "كتاب السبعة"
        ],
        "external_id": "islam-quran-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الأثر العلمي الأشهر لمنظومة «حرز الأماني ووجه التهاني» للشاطبي؟",
        "options": [
          "جمع القراءات الأربع عشرة لأول مرة",
          "شرح رسم المصحف دون مسائل الأداء",
          "حصر أسباب النزول في الأحاديث المرفوعة",
          "نظم أصول وفرش القراءات السبع اعتمادًا على كتاب التيسير للداني مع زيادات"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قصيدة الشاطبية نظمت مادة «التيسير في القراءات السبع» لأبي عمرو الداني وأضافت مسائل، وصارت متنًا محوريًا في تدريس السبع. أما القراءات العشر فاشتهر في نظمها لاحقًا «طيبة النشر» لابن الجزري.",
        "source": "القاسم بن فيرّه الشاطبي، حرز الأماني ووجه التهاني؛ أبو شامة، إبراز المعاني من حرز الأماني، المقدمة",
        "difficulty": "medium",
        "subcategory": "كتب القراءات",
        "tags": [
          "الشاطبية",
          "الشاطبي",
          "التيسير"
        ],
        "external_id": "islam-quran-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي كتاب يُنسب إلى بدر الدين الزركشي ويعد من أوسع المصنفات الجامعة المبكرة في أنواع علوم القرآن؟",
        "options": [
          "الإتقان في علوم القرآن",
          "مناهل العرفان",
          "الزيادة والإحسان",
          "البرهان في علوم القرآن"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ألّف بدر الدين محمد بن عبد الله الزركشي المتوفى سنة 794هـ «البرهان في علوم القرآن». أما «الإتقان» فللسيوطي، و«مناهل العرفان» للزرقاني، و«الزيادة والإحسان» لابن عقيلة المكي.",
        "source": "بدر الدين الزركشي، البرهان في علوم القرآن، مقدمة المؤلف",
        "difficulty": "medium",
        "subcategory": "مصنفات علوم القرآن",
        "tags": [
          "الزركشي",
          "البرهان",
          "علوم القرآن"
        ],
        "external_id": "islam-quran-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المقصود بـ«الرسم العثماني» في علوم المصحف؟",
        "options": [
          "نوع الخط الكوفي الذي اخترعه عثمان بن عفان بنفسه",
          "هيئة كتابة كلمات المصاحف التي نُسخت في خلافة عثمان، بما لها من ظواهر حذف وزيادة وبدل وفصل ووصل",
          "علامات الحركات والنقط التي أضيفت إلى المصحف لاحقًا",
          "نسخة واحدة بخط عثمان محفوظة باتفاق المؤرخين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرسم العثماني اصطلاح في هجاء المصاحف المنسوخة في عهد عثمان، لا اسم نوع خط ولا الضبط بالشكل والنقط. وتبحث كتبه ظواهر مثل الحذف والزيادة والهمز والبدل والفصل والوصل، مع فروق محدودة بين المصاحف المرسلة للأمصار.",
        "source": "أبو عمرو الداني، المقنع في معرفة مرسوم مصاحف أهل الأمصار، المقدمة وأبواب الرسم",
        "difficulty": "medium",
        "subcategory": "رسم المصحف",
        "tags": [
          "الرسم العثماني",
          "المصاحف",
          "الهجاء"
        ],
        "external_id": "islam-quran-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في اصطلاح الوقف والابتداء، ما «الوقف اللازم» عند السجاوندي في الجملة؟",
        "options": [
          "موضع يحرم الوقف عليه باتفاق",
          "نهاية كل آية بلا استثناء",
          "موضع يُلزم الوقف عليه اصطلاحًا لأن الوصل قد يوهم معنى غير مراد، لا بمعنى أن تاركه يأثم شرعًا",
          "وقف اضطراري لانقطاع النفس فقط"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "علامة الوقف اللازم عند السجاوندي وما بُني عليها من اصطلاحات المصاحف تفيد شدة الحاجة إلى الفصل صونًا للمعنى من إيهام، و«اللُّزوم» هنا فني لا حكم تكليفي يوجب الإثم على كل واصل.",
        "source": "محمد بن طيفور السجاوندي، علل الوقوف، مقدمة رموز الوقف",
        "difficulty": "medium",
        "subcategory": "الوقف والابتداء",
        "tags": [
          "الوقف اللازم",
          "السجاوندي",
          "المعنى"
        ],
        "external_id": "islam-quran-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مؤلف ارتبط اسمه بكتاب «أسباب النزول» الذي صار عمدة مبكرة في بابه؟",
        "options": [
          "أبو عبيد القاسم بن سلام",
          "علي بن أحمد الواحدي النيسابوري",
          "أبو جعفر النحاس",
          "علم الدين السخاوي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ألّف المفسر الشافعي علي بن أحمد الواحدي المتوفى سنة 468هـ كتاب «أسباب النزول». والاستفادة منه لا تُغني عن نقد أسانيد الروايات؛ فجمع الخبر في كتاب موضوعي لا يحكم تلقائيًا بصحته.",
        "source": "الواحدي، أسباب النزول، مقدمة المؤلف",
        "difficulty": "medium",
        "subcategory": "رجال علوم القرآن",
        "tags": [
          "الواحدي",
          "أسباب النزول",
          "التفسير"
        ],
        "external_id": "islam-quran-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تركيب يعبّر عن أركان قبول القراءة عند ابن الجزري في عبارته المشهورة، مع ملاحظة أنه قال «وجه نحو» لا أفصح الوجوه فقط؟",
        "options": [
          "شهرة القارئ، وموافقة لهجة قريش وحدها، ووجودها في مصحف المدينة فقط",
          "صحة السند، وموافقة العربية ولو بوجه، وموافقة أحد المصاحف العثمانية ولو احتمالًا",
          "موافقة القياس النحوي الأشهر، وكثرة الرواة، وترتيب السور",
          "صحة المعنى، وقدم المخطوط، وإجماع النحاة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قرر ابن الجزري أن القراءة المقبولة توافق وجهًا من العربية، وتوافق رسم أحد المصاحف العثمانية ولو احتمالًا، ويصح سندها؛ ووصفها حينئذ بالصحيحة التي لا يجوز ردها. لا يشترط أن يكون الوجه النحوي هو الأشهر ولا أن يطابق الرسم الصريح وحده.",
        "source": "ابن الجزري، النشر في القراءات العشر، ج1، باب أركان القراءة الصحيحة",
        "difficulty": "high",
        "subcategory": "أصول القراءات",
        "tags": [
          "ابن الجزري",
          "أركان القراءة",
          "السند",
          "الرسم"
        ],
        "external_id": "islam-quran-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا لا يصح جعل «القراءات السبع» مرادفًا لـ«الأحرف السبعة»؟",
        "options": [
          "لأن الأحرف السبعة سبع سور، والقراءات السبع سبعة أجزاء",
          "لأن القراءات السبع ظهرت قبل نزول الحديث",
          "لأن كل حرف من الأحرف منسوب حصرًا إلى قارئ من السبعة",
          "لأن الأحرف السبعة وردت في الحديث واختلف في تفسيرها، أما تخصيص سبعة قراء فاختيار تدويني لابن مجاهد في القرن الرابع"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حديث نزول القرآن على سبعة أحرف سابق لتدوين القراءات، ومعنى الأحرف نفسها محل أقوال كثيرة. أما السبعة القراء فجمعهم ابن مجاهد لاشتهار قراءتهم في أمصار معينة؛ والتوافق في العدد لا يثبت التطابق في المفهوم.",
        "source": "أبو شامة المقدسي، المرشد الوجيز إلى علوم تتعلق بالكتاب العزيز، باب الأحرف السبعة والقراءات",
        "difficulty": "high",
        "subcategory": "الأحرف والقراءات",
        "tags": [
          "الأحرف السبعة",
          "القراءات السبع",
          "ابن مجاهد"
        ],
        "external_id": "islam-quran-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في رواية جمع أبي بكر للمصحف في صحيح البخاري، ما المهمة التي كُلِّف بها زيد بن ثابت بعد وقعة اليمامة؟",
        "options": [
          "تتبّع القرآن وجمعه من العُسُب واللخاف وصدور الرجال في صحف",
          "إلزام الأمصار بقراءة قارئ واحد دون كتابة",
          "إضافة نقط الإعجام والحركات إلى المصحف",
          "ترتيب السور بحسب تاريخ النزول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يروي البخاري أن أبا بكر، بإشارة عمر بعد مقتل القراء باليمامة، كلّف زيدًا بتتبع القرآن وجمعه، فكانت الصحف عند أبي بكر ثم عمر ثم حفصة. أما توحيد المصاحف وإرسال النسخ إلى الأمصار فمرحلة عثمانية لاحقة.",
        "source": "صحيح البخاري، كتاب فضائل القرآن، باب جمع القرآن، حديث زيد بن ثابت رقم 4986 بحسب ترقيم فتح الباري",
        "difficulty": "high",
        "subcategory": "جمع القرآن",
        "tags": [
          "زيد بن ثابت",
          "أبو بكر",
          "اليمامة",
          "الصحف"
        ],
        "external_id": "islam-quran-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفارق الرئيس بين جمع أبي بكر وجمع عثمان كما تصفه الروايات المشهورة؟",
        "options": [
          "جمع أبي بكر رتّب الآيات، وجمع عثمان أضاف سورًا جديدة",
          "جمع أبي بكر كان بلا كتابة، وجمع عثمان كان أول كتابة للقرآن",
          "جمع أبي بكر حفظ النص في صحف بعد اليمامة، وجمع عثمان نسخ مصاحف معيارية من الصحف وإرسالها للأمصار عند اختلاف القراءة",
          "لم تكن صحف أبي بكر مصدرًا للجنة عثمان"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الدافع المباشر للجمع البكري كان خشية ذهاب شيء بموت القراء، فجمعت المادة في صحف. وفي عهد عثمان استُعيرت صحف حفصة وشكلت لجنة لنسخ مصاحف تُرسل إلى الأقاليم بهدف الحد من التنازع في وجوه القراءة، ثم رُدت الصحف إلى حفصة.",
        "source": "صحيح البخاري، كتاب فضائل القرآن، باب جمع القرآن، الحديثان 4986 و4987 بحسب ترقيم فتح الباري",
        "difficulty": "high",
        "subcategory": "جمع المصحف",
        "tags": [
          "جمع أبي بكر",
          "جمع عثمان",
          "حفصة"
        ],
        "external_id": "islam-quran-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في خبر اللجنة العثمانية، ماذا كان توجيه عثمان عند اختلاف زيد بن ثابت مع الثلاثة القرشيين في شيء من القرآن؟",
        "options": [
          "أن يتركوا الموضع بلا كتابة",
          "أن يعتمدوا لهجة زيد المدنية في كل حال",
          "أن يختاروا الرسم الأكثر موافقة للشعر الجاهلي",
          "أن يكتبوه بلسان قريش، معللًا بأنه نزل بلسانهم"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص خبر أنس في البخاري على قول عثمان للرهط القرشيين وزيد: إذا اختلفتم أنتم وزيد في شيء فاكتبوه بلسان قريش فإنه نزل بلسانهم. وهو توجيه للجنة النسخ في سياق محدد، لا دعوى أن جميع التنوع العربي في الأداء أُلغي لغويًا.",
        "source": "صحيح البخاري، كتاب فضائل القرآن، باب جمع القرآن، حديث أنس بن مالك رقم 4987 بحسب ترقيم فتح الباري",
        "difficulty": "high",
        "subcategory": "المصحف العثماني",
        "tags": [
          "عثمان",
          "قريش",
          "لجنة النسخ"
        ],
        "external_id": "islam-quran-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا صح سببان لنزول آية واحدة وكان زمنهما متقاربًا، فما المسلك الذي يذكره علماء أسباب النزول بدل إسقاط إحدى الروايتين بلا دليل؟",
        "options": [
          "الحكم آليًا بأن الرواية الأقصر ناسخة للأطول",
          "حمل الآية على تعدد الأسباب مع نزول واحد إذا أمكن الجمع",
          "رفض الروايتين لأن للآية سببًا واحدًا بالضرورة",
          "ترجيح الرواية التي يرويها مفسر متأخر دائمًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عند صحة الروايتين وتقارب الواقعتين يمكن أن تتعدد الأسباب وينزل النص عقبها جميعًا، فلا تعارض حقيقي. أما إن تباعد الزمن وتعذر الجمع فقد يبحث العلماء احتمال تكرر النزول أو يرجحون بحسب صيغ الرواية والأسانيد والقرائن.",
        "source": "جلال الدين السيوطي، الإتقان في علوم القرآن، النوع التاسع: معرفة سبب النزول، مسألة تعدد السبب والنازل واحد",
        "difficulty": "high",
        "subcategory": "قواعد أسباب النزول",
        "tags": [
          "تعدد الأسباب",
          "الجمع بين الروايات",
          "الترجيح"
        ],
        "external_id": "islam-quran-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة أدق في التفريق بين «النسخ» و«التخصيص» في الاستعمال الأصولي المستقر؟",
        "options": [
          "النسخ بيان المجمل، والتخصيص حذف ألفاظ الآية",
          "النسخ رفع حكم شرعي بدليل شرعي متراخٍ، والتخصيص قصر العام على بعض أفراده ولا يستلزم رفع أصل الحكم",
          "كلاهما يعني محو النص من المصحف",
          "التخصيص لا يقع إلا زمنيًا بعد العمل بالعام"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفترق الاصطلاحان بأن النسخ يتضمن رفع حكم سابق بخطاب متراخٍ، بينما يبقي التخصيص حكم العام في بعض الأفراد ويخرج بعضها بدليل. وقد كان لفظ النسخ عند بعض السلف أوسع، فيطلق أحيانًا على البيان والتخصيص؛ لذلك يلزم الانتباه إلى اصطلاح القائل.",
        "source": "محمد عبد العظيم الزرقاني، مناهل العرفان في علوم القرآن، مبحث النسخ، الفرق بين النسخ والتخصيص",
        "difficulty": "high",
        "subcategory": "الناسخ والمنسوخ",
        "tags": [
          "النسخ",
          "التخصيص",
          "أصول الفقه"
        ],
        "external_id": "islam-quran-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عالم ألّف كتاب «الناسخ والمنسوخ» واشتهر أيضًا بكتاب «إعراب القرآن»؟",
        "options": [
          "أبو عبيد القاسم بن سلام",
          "ابن الأنباري",
          "مكي بن أبي طالب",
          "أبو جعفر النحاس"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أبو جعفر أحمد بن محمد النحاس المتوفى سنة 338هـ صاحب «الناسخ والمنسوخ» و«إعراب القرآن». وقد يناقش في كتاب النسخ دعاوى المتقدمين ولا تكون كل نسبة للنسخ فيه موضع اتفاق بين العلماء.",
        "source": "أبو جعفر النحاس، الناسخ والمنسوخ، مقدمة الكتاب؛ الذهبي، سير أعلام النبلاء، ترجمة النحاس",
        "difficulty": "high",
        "subcategory": "رجال ومصنفات",
        "tags": [
          "النحاس",
          "الناسخ والمنسوخ",
          "إعراب القرآن"
        ],
        "external_id": "islam-quran-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف عالج ابن الجزري القراءات الثلاث المتممة للعشر بالنسبة إلى سبع ابن مجاهد؟",
        "options": [
          "أثبت قراءات أبي جعفر ويعقوب وخلف مع السبعة ضمن منظومة القراءات العشر",
          "أضاف الحسن البصري والأعمش وابن محيصن إلى السبعة",
          "استبدل نافعًا وعاصمًا بثلاثة قراء",
          "عدّ كل قراءة خارج السبع شاذة بلا تفصيل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العشرة المشهورون هم السبعة الذين جمعهم ابن مجاهد، ويضاف إليهم أبو جعفر المدني ويعقوب الحضرمي وخلف العاشر. أما الحسن والأعمش وابن محيصن واليزيدي فتذكر قراءاتهم عادة ضمن الأربع الزائدة على العشر في كتب القراءات الأربع عشرة.",
        "source": "ابن الجزري، النشر في القراءات العشر، ج1، تراجم القراء العشرة",
        "difficulty": "high",
        "subcategory": "القراء العشرة",
        "tags": [
          "أبو جعفر",
          "يعقوب",
          "خلف",
          "ابن الجزري"
        ],
        "external_id": "islam-quran-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما موضوع كتاب أبي عمرو الداني «التيسير» مقارنة بكتابه «المقنع»؟",
        "options": [
          "التيسير في الناسخ والمنسوخ، والمقنع في أسباب النزول",
          "التيسير في عد الآي، والمقنع في غريب القرآن فقط",
          "التيسير في القراءات السبع، والمقنع في رسم مصاحف الأمصار",
          "كلاهما شرح للقراءات العشر بالموضوع نفسه"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«التيسير في القراءات السبع» أصل مهم في نقل مذاهب القراء السبعة، ونظمه الشاطبي. أما «المقنع في معرفة مرسوم مصاحف أهل الأمصار» فيبحث هيئة كتابة المصاحف واختلاف رسومها، فهما فرعان متمايزان من علوم القرآن.",
        "source": "أبو عمرو الداني، التيسير في القراءات السبع، المقدمة؛ وله: المقنع في معرفة مرسوم مصاحف أهل الأمصار، المقدمة",
        "difficulty": "high",
        "subcategory": "مصنفات الداني",
        "tags": [
          "أبو عمرو الداني",
          "التيسير",
          "المقنع"
        ],
        "external_id": "islam-quran-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في علم عدّ الآي، لماذا قد تختلف أعداد آيات سورة بين مدرستين مع اتفاقهما على النص القرآني نفسه؟",
        "options": [
          "لاختلافهما في عد بعض مواضع الفصل رأس آية أو وصلها بما بعدها، لا لاختلاف ألفاظ القرآن",
          "لأن كل مدرسة تضيف آيات تفسيرية إلى النص",
          "لأن بعض المدارس تحذف البسملة من المصحف كله",
          "لأن ترتيب كلمات السورة يتغير بين مدارس العد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مدارس العد المدني والمكي والكوفي والبصري والشامي قد تختلف في مواضع الفواصل: أهي رأس آية مستقل أم متصلة بما بعدها، مع بقاء الكلمات وترتيبها واحدًا. لذلك لا يصح تحويل اختلاف العدد إلى دعوى اختلاف في نص القرآن.",
        "source": "أبو عمرو الداني، البيان في عد آي القرآن، باب ذكر اختلاف أهل العدد",
        "difficulty": "high",
        "subcategory": "عد الآي",
        "tags": [
          "الفواصل",
          "عد الآي",
          "مدارس العدد"
        ],
        "external_id": "islam-quran-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف أدق لـ«فواصل الآي» في اصطلاح علماء القرآن؟",
        "options": [
          "علامات الأحزاب والأجزاء التي وضعها النساخ",
          "الكلمات الواقعة في أواخر الآيات، وقد تتشابه صوتيًا مع السجع من غير أن يلزم تسميتها سجعًا",
          "الحروف المقطعة في أوائل السور فقط",
          "كل موضع يجوز للقارئ أن يتنفس عنده"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الفاصلة كلمة آخر الآية، ونسبتها إلى الآية تشبه نسبة القافية إلى البيت مع فروق الجنس الأدبي. ناقش العلماء إطلاق «السجع» على القرآن؛ فمنهم من منعه ومنهم من أجاز الوصف بمعنى التناسب، لذا لا تجعل المسألة محل إجماع اصطلاحي.",
        "source": "بدر الدين الزركشي، البرهان في علوم القرآن، النوع المتعلق بمعرفة الفواصل ورؤوس الآي",
        "difficulty": "high",
        "subcategory": "فواصل الآي",
        "tags": [
          "الفاصلة",
          "رأس الآية",
          "السجع"
        ],
        "external_id": "islam-quran-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفرق بين «غريب القرآن» و«مشكل القرآن» بوصفهما حقلين في التأليف؟",
        "options": [
          "الغريب خاص بالقراءات المتواترة، والمشكل خاص بالقراءات الشاذة",
          "الغريب يبحث ترتيب السور، والمشكل يبحث عد الآي",
          "هما اسمان مترادفان تمامًا لكل كتب التفسير",
          "الغريب يشرح الألفاظ البعيدة عن التداول أو الخفية، والمشكل يعالج ما يوهم تعارضًا أو إشكالًا دلاليًا ونحوه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كتب الغريب تتجه أساسًا إلى بيان المفردات المحتاجة إلى تفسير لغوي، مثل «مجاز القرآن» وكتب غريب القرآن. وكتب المشكل تدفع وجوه الالتباس، كتوهم التعارض أو الإشكال في التعبير؛ وقد تتداخل المادة بين الحقلين من غير أن يتطابقا.",
        "source": "ابن قتيبة، تفسير غريب القرآن، المقدمة؛ وله: تأويل مشكل القرآن، المقدمة",
        "difficulty": "high",
        "subcategory": "مصطلحات التفسير",
        "tags": [
          "غريب القرآن",
          "مشكل القرآن",
          "ابن قتيبة"
        ],
        "external_id": "islam-quran-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة تضبط مصطلحي «أصول القراءة» و«فرش الحروف» في كتب القراءات؟",
        "options": [
          "الأصول قواعد مطردة تتكرر كالإدغام والمد، والفرش كلمات جزئية مختلف فيها تُذكر في مواضع السور",
          "الأصول هي القراءات السبع، والفرش هي الثلاث المتممة",
          "الأصول خاصة بالرسم، والفرش خاص بعد الآي",
          "الفرش أحكام التجويد المتفق عليها فقط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفصل المصنفون عادة بين القواعد الكلية المتكررة، مثل أحكام الهمز والإدغام والمد والإمالة، وبين «الفرش»؛ أي ألفاظ بعينها تتوزع في السور ويختلف القراء في أدائها. وقد تختلف طريقة المصنف في إلحاق بعض المسائل بأحد القسمين.",
        "source": "أبو شامة المقدسي، إبراز المعاني من حرز الأماني، شرح أبواب الأصول وباب فرش الحروف",
        "difficulty": "high",
        "subcategory": "منهج كتب القراءات",
        "tags": [
          "الأصول",
          "فرش الحروف",
          "الإدغام"
        ],
        "external_id": "islam-quran-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من صاحب «جمال القراء وكمال الإقراء»، وما صلته العلمية بالشاطبي؟",
        "options": [
          "أبو عمرو الداني، وكان تلميذًا مباشرًا لابن الجزري",
          "ابن مجاهد، وكان شارحًا لطيبة النشر",
          "علم الدين السخاوي، وكان من أبرز تلاميذ الشاطبي وشارحي قصيدته",
          "الزركشي، وكان راويًا عن نافع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ألّف علم الدين علي بن محمد السخاوي المتوفى سنة 643هـ «جمال القراء وكمال الإقراء». أخذ عن القاسم الشاطبي ولازمه، وشرح «حرز الأماني» في كتاب «فتح الوصيد»، فكان حلقة مهمة في نقل المدرسة الشاطبية.",
        "source": "علم الدين السخاوي، جمال القراء وكمال الإقراء، مقدمة المحقق؛ الذهبي، معرفة القراء الكبار، ترجمة السخاوي",
        "difficulty": "high",
        "subcategory": "رجال الإقراء",
        "tags": [
          "السخاوي",
          "الشاطبي",
          "جمال القراء"
        ],
        "external_id": "islam-quran-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-history-ancient-mesopotamia-egypt-01",
    "user_id": "system",
    "title": "الحضارات القديمة: الرافدين والفراعنة",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "تاريخ",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "أي تحول تقني يفسر انتقال العلامات المسمارية المبكرة من رسوم قابلة للتعرف إلى هيئة إسفينية مجردة؟",
        "options": [
          "استبدال الطين بالبردي والفرشاة",
          "ضغط قلم قصبي ذي رأس مقطوع في الطين الرطب",
          "نقش النص بعد حرق اللوح بإزميل حديدي",
          "صب الحروف في قوالب برونزية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أدى ضغط الطرف المقطوع للقلم القصبي في الطين إلى علامات مؤلفة من طبعات إسفينية، ثم غلب هذا الأسلوب على الرسم الخطي الأقدم. لم تكن الكتابة المسمارية حروفًا مصبوبة، ولم ينشأ شكلها من الكتابة على البردي.",
        "source": "The Metropolitan Museum of Art — Cuneiform: https://www.metmuseum.org/toah/hd/cune/hd_cune.htm",
        "difficulty": "medium",
        "subcategory": "الرافدان: الكتابة والإدارة",
        "tags": [
          "المسمارية",
          "الطين",
          "سومر"
        ],
        "external_id": "hist-ane-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الوظيفة الأساسية التي أدتها لوحة نارمر في فهم نشأة الدولة المصرية، بصرف النظر عن كون مشاهدها تسجيلًا حرفيًا لحدث واحد؟",
        "options": [
          "توثيق بناء الهرم المدرج",
          "تقديم صورة ملكية مبكرة لفرض النظام وربط الملك بالوجهين القبلي والبحري",
          "شرح طقوس التحنيط في الدولة الحديثة",
          "تسجيل أول معاهدة مع الحيثيين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُظهر اللوحة نارمر بتاجي مصر وتوظف لغة بصرية عن إخضاع الخصوم وتثبيت النظام الملكي؛ لذلك تعد شاهدًا محوريًا على أيديولوجيا التوحيد وبدايات الدولة، لا نصًا إداريًا عن بناء الأهرام أو معاهدة متأخرة.",
        "source": "Smarthistory — Palette of King Narmer: https://smarthistory.org/palette-of-king-narmer/",
        "difficulty": "medium",
        "subcategory": "مصر: نشأة الدولة",
        "tags": [
          "نارمر",
          "التوحيد",
          "الفن الملكي"
        ],
        "external_id": "hist-ane-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا تُعد مسلة شريعة حمورابي مصدرًا قانونيًا وسياسيًا معًا؟",
        "options": [
          "لأنها دستور منتخب يفصل السلطات الثلاث",
          "لأنها سجل كامل لكل محاكمة بابلية",
          "لأنها تجمع أحكامًا وصيغًا قضائية مع تصوير الملك متلقيًا الشرعية من الإله شمش",
          "لأنها معاهدة حدودية بين بابل وآشور"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحمل النصب مقدمة وخاتمة ملكيتين ومجموعة أحكام، وفوقها مشهد حمورابي أمام شمش إله العدل. لذا يعرض ممارسة القانون ويعلن في الوقت نفسه عدالة الملك وشرعيته؛ وليس سجلًا شاملًا للقضايا ولا دستورًا حديثًا.",
        "source": "Musée du Louvre — Law Code of Hammurabi: https://collections.louvre.fr/en/ark:/53355/cl010174436",
        "difficulty": "medium",
        "subcategory": "الرافدان: القانون والملكية",
        "tags": [
          "حمورابي",
          "شمش",
          "بابل"
        ],
        "external_id": "hist-ane-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سمة تميز الزقورة في مدن الرافدين عن الهرم الملكي في مصر القديمة؟",
        "options": [
          "كلاهما قبر ملكي مغلق الوظيفة نفسها",
          "الزقورة منحوتة دائمًا من صخر طبيعي والهرم من الطين",
          "الزقورة منصة معبد مدرجة ضمن مجمع ديني، أما الهرم فجزء من مجمع جنائزي ملكي",
          "الزقورة مرصد فلكي حصري لا صلة له بالشعائر"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت الزقورات كتلًا مدرجة من اللِبن ترفع معبدًا أو حرمًا داخل المركز الديني، ولم تكن قبورًا ملكية. أما الأهرامات المصرية فكانت قلب مجمعات جنائزية ملكية تشمل معابد وطرقًا صاعدة.",
        "source": "University of Chicago, Institute for the Study of Ancient Cultures — Ziggurat at Ur: https://isac.uchicago.edu/collections/highlights/highlights-collection-mesopotamia",
        "difficulty": "medium",
        "subcategory": "عمارة مقارنة",
        "tags": [
          "زقورة",
          "هرم",
          "معبد"
        ],
        "external_id": "hist-ane-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي جعل حجر رشيد حاسمًا في فك الكتابة الهيروغليفية؟",
        "options": [
          "احتوى قاموسًا مصريًا يونانيًا مرتبًا أبجديًا",
          "حمل نصًا واحدًا بصيغ هيروغليفية وديموطيقية ويونانية أمكن مقابلة أجزائه",
          "كان أقدم نص هيروغليفي معروف",
          "شرح كاهن مصري على هامشه نطق كل علامة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجّل الحجر مرسومًا واحدًا بثلاثة أنظمة كتابية: الهيروغليفية والديموطيقية واليونانية. أتاحت معرفة اليونانية مقارنة الأسماء والمقاطع، مع الاستفادة من عمل باحثين سابقين، وصولًا إلى فهم الطبيعة الصوتية والدلالية للهيروغليفية.",
        "source": "The British Museum — The Rosetta Stone: https://www.britishmuseum.org/collection/object/Y_EA24",
        "difficulty": "medium",
        "subcategory": "مصر: الكتابة وفك الرموز",
        "tags": [
          "حجر رشيد",
          "هيروغليفية",
          "ديموطيقية"
        ],
        "external_id": "hist-ane-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في النظام الإداري المصري، ماذا كان دور الوزير على نحو أدق؟",
        "options": [
          "قائد معبد محلي بلا سلطة مدنية",
          "ملك مشارك مستقل يحكم الدلتا دائمًا",
          "كاتب مختص حصرًا بتسجيل فيضان النيل",
          "أعلى مسؤول بعد الملك يشرف على القضاء والإدارة والموارد عبر جهاز الدولة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كان الوزير رأس الجهاز الإداري تحت الملك، وترتبط به أعمال القضاء والسجلات والضرائب والموارد والأشغال. تغيرت التفاصيل عبر العصور، بل وُجد وزيران أحيانًا، لكن المنصب لم يكن مجرد كاتب فيضان أو كاهن محلي.",
        "source": "UCLA Encyclopedia of Egyptology — Administration: https://escholarship.org/uc/item/8bq2p9n2",
        "difficulty": "medium",
        "subcategory": "مصر: الإدارة",
        "tags": [
          "الوزير",
          "الإدارة",
          "القضاء"
        ],
        "external_id": "hist-ane-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يطابق وظيفة الأختام الأسطوانية في مجتمعات الرافدين؟",
        "options": [
          "كانت نقودًا معيارية تُذاب عند الدفع",
          "كانت أدوات فلكية لقياس الظلال",
          "كانت تُدحرج على الطين فتترك مشهدًا متصلًا يثبت الهوية أو السلطة ويؤمّن الإغلاق",
          "كانت ألواحًا مدرسية لتعليم الأبجدية فقط"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يُدحرج الختم الأسطواني المنقوش على طين رطب فوق لوح أو سدادة باب أو وعاء، فيترك بصمة طويلة مرتبطة بصاحبه. أدى بذلك وظائف التوثيق والتفويض والحماية، وحمل أيضًا صورًا دينية واجتماعية.",
        "source": "The Metropolitan Museum of Art — Cylinder Seals in Ancient Mesopotamia: https://www.metmuseum.org/toah/hd/cyls/hd_cyls.htm",
        "difficulty": "medium",
        "subcategory": "الرافدان: الإدارة والفن",
        "tags": [
          "أختام أسطوانية",
          "توثيق",
          "طين"
        ],
        "external_id": "hist-ane-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي ملك مصري ارتبط بالمجمع الجنائزي ذي الهرم المدرج في سقارة، المصمم تقليديًا باسم إمحوتب؟",
        "options": [
          "سنوسرت الثالث",
          "أحمس الأول",
          "زوسر",
          "رمسيس الثالث"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بُني الهرم المدرج لزوسر من الأسرة الثالثة في الدولة القديمة، ويُنسب تصميم مجمعه إلى إمحوتب. سنوسرت الثالث من الدولة الوسطى، وأحمس الأول ورمسيس الثالث من الدولة الحديثة، فلا ينتمون إلى مرحلة العمارة الحجرية المبكرة نفسها.",
        "source": "Encyclopaedia Britannica — Step Pyramid of Djoser: https://www.britannica.com/topic/Step-Pyramid-of-Djoser",
        "difficulty": "medium",
        "subcategory": "مصر: الدولة القديمة",
        "tags": [
          "زوسر",
          "إمحوتب",
          "سقارة"
        ],
        "external_id": "hist-ane-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الدليل الأقوى على أن مدينة أور في عصر سلالة أور الثالثة امتلكت إدارة شديدة التنظيم؟",
        "options": [
          "غياب الكتابة خارج القصور",
          "كثرة الألواح المسمارية الخاصة بالحصص والعمال والماشية والمعاملات",
          "اقتصار المباني على مساكن متنقلة",
          "عدم وجود مقاييس أو أوزان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خلّفت مؤسسات أور الثالثة أرشيفات ضخمة من السجلات الإدارية، تشمل حركة السلع وحصص العمال والقطعان والضرائب. تكشف هذه الوثائق البيروقراطية اليومية أكثر مما تكشفه النصوص الملكية الدعائية وحدها.",
        "source": "Cuneiform Digital Library Initiative — Ur III Administrative Documents: https://cdli.mpiwg-berlin.mpg.de/",
        "difficulty": "medium",
        "subcategory": "الرافدان: الاقتصاد والإدارة",
        "tags": [
          "أور الثالثة",
          "ألواح إدارية",
          "بيروقراطية"
        ],
        "external_id": "hist-ane-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الغرض الأوضح من مشاهد الحياة اليومية المنقوشة في مقابر النخبة المصرية؟",
        "options": [
          "تسجيل يوميات العمال بحياد فوتوغرافي",
          "إمداد المتوفى رمزيًا بنظام مثالي مستمر من الغذاء والعمل والطقوس في الآخرة",
          "تعليم العامة القراءة داخل المقبرة",
          "إثبات أن صاحب المقبرة مارس كل مهنة مصورة بنفسه"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت صور الزراعة والصيد والصناعات والقرابين جزءًا فعالًا من تجهيز المقبرة، إذ تصوغ عالمًا وفيرًا ومنظمًا يستمر فيه المتوفى. وهي منتقاة وفق أعراف جنائزية وليست سجلًا محايدًا لكل تفاصيل المجتمع.",
        "source": "The Metropolitan Museum of Art — Egyptian Tombs: Life Along the Nile: https://www.metmuseum.org/toah/hd/tomb/hd_tomb.htm",
        "difficulty": "medium",
        "subcategory": "مصر: الدين والفن الجنائزي",
        "tags": [
          "المقابر",
          "الحياة الآخرة",
          "النقوش"
        ],
        "external_id": "hist-ane-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا لا يصح وصف قائمة الملوك السومريين بأنها سجل زمني مباشر ودقيق لجميع الحكام؟",
        "options": [
          "لأنها تمزج حكامًا تاريخيين بمدد حكم خارقة وتعيد ترتيب الماضي لخدمة فكرة انتقال الملكية",
          "لأنها مكتوبة باليونانية بعد العصر الروماني",
          "لأنها لا تذكر أي مدينة سومرية",
          "لأنها قائمة ضرائب لا أسماء فيها"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تجمع القائمة بين سلالات يمكن تثبيت بعض ملوكها تاريخيًا وحكام ما قبل الطوفان ذوي مدد هائلة، وتعرض الملكية كأنها انتقلت تباعًا بين المدن. لذلك تُقرأ بوصفها بناءً أدبيًا وسياسيًا إلى جانب قيمتها التاريخية المقارنة.",
        "source": "Ashmolean Museum, University of Oxford — Sumerian King List: https://www.ashmolean.org/sumerian-king-list",
        "difficulty": "high",
        "subcategory": "الرافدان: التأريخ والملكية",
        "tags": [
          "قائمة الملوك",
          "سومر",
          "أيديولوجيا"
        ],
        "external_id": "hist-ane-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي دليل ميّز اكتشاف مقبرة الملكة حتب حرس الأولى قرب الهرم الأكبر رغم أن تابوتها الحجري وُجد خاليًا؟",
        "options": [
          "وجود بردية تصف معركة قادش",
          "تمثال ضخم لأخناتون",
          "أرشيف مسماري من ألواح الطين",
          "مجموعة أثاث جنائزي ملكي وأوانٍ ونقالة تحمل اسمها أعيد تركيبها من مواد متدهورة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حفظت الحجرة المطمورة تجهيزات فاخرة مرتبطة بحتب حرس، ومنها أثاث مذهب ونقالة ومظلة وأوانٍ. تطلبت المواد العضوية المتحللة توثيقًا وإعادة بناء دقيقة، أما خلو التابوت فظل عنصرًا من لغز الدفن لا نفيًا لهوية صاحبة الأثاث.",
        "source": "Museum of Fine Arts Boston — The Giza Archives, Hetepheres I: http://giza.fas.harvard.edu/sites/1503/full/",
        "difficulty": "high",
        "subcategory": "مصر: الدولة القديمة والآثار",
        "tags": [
          "حتب حرس",
          "الجيزة",
          "أثاث جنائزي"
        ],
        "external_id": "hist-ane-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي اقتران زمني وسياسي يصف سرجون الأكدي بدقة؟",
        "options": [
          "وحّد مدنًا واسعة تحت حكم أكدي في أواخر الألف الثالث ق.م. وجعل أكد مركزًا لسلطته",
          "أسس الدولة البابلية الحديثة بعد سقوط نينوى",
          "حكم آشور في القرن السابع ق.م. وبنى مكتبة نينوى",
          "كان ملكًا سومريًا من سلالة أور الثالثة بعد شولگي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشأ سرجون في القرن الرابع والعشرين ق.م. سلالة أكد وضم دول مدن سومر ومناطق واسعة إلى سلطة مركزية. تسبق دولته أور الثالثة وبابل القديمة وآشور الحديثة بقرون، لذلك لا يصح نقله إلى تلك السياقات.",
        "source": "Encyclopaedia Britannica — Sargon: https://www.britannica.com/biography/Sargon",
        "difficulty": "high",
        "subcategory": "الرافدان: الدولة الأكدية",
        "tags": [
          "سرجون",
          "أكد",
          "الإمبراطورية"
        ],
        "external_id": "hist-ane-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يميز إصلاح أخناتون الديني عن العبادة المصرية التقليدية قبل عهده؟",
        "options": [
          "ألغى المعابد وكل الطقوس الجنائزية نهائيًا",
          "استبدل اللغة المصرية بالأكدية في جميع النصوص",
          "أعاد العاصمة إلى منف بعد غزو آشوري",
          "رفع عبادة آتون ورعايته الملكية إلى مركز غير مسبوق، همّش معه كثيرًا من الآلهة ونقل البلاط إلى أخيتاتون"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ركز أخناتون الشعائر الرسمية على آتون، غيّر اسمه، وبنى عاصمة جديدة في أخيتاتون، مع إجراءات ضد أسماء وصور آلهة ولا سيما آمون. لكن وصف المرحلة بإلغاء كل ممارسة دينية أو بمفهوم توحيد حديث كامل يتجاوز تعقيد الدليل.",
        "source": "The Metropolitan Museum of Art — The Amarna Period: https://www.metmuseum.org/toah/hd/amar/hd_amar.htm",
        "difficulty": "high",
        "subcategory": "مصر: الدولة الحديثة والعمارنة",
        "tags": [
          "أخناتون",
          "آتون",
          "أخيتاتون"
        ],
        "external_id": "hist-ane-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في رسائل العمارنة، لماذا استخدم البلاط المصري اللغة الأكدية والخط المسماري في جانب كبير من مراسلاته الخارجية؟",
        "options": [
          "لأن الأكدية المسمارية أدت دور لغة دبلوماسية مشتركة بين بلاطات الشرق الأدنى في العصر البرونزي المتأخر",
          "لأن الأكدية كانت لغة مصر اليومية",
          "لأن الهيروغليفية لم تكن قد ظهرت",
          "لأن الرسائل نُسخت كلها في العصر الآشوري الحديث"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت الأكدية المكتوبة بالمسمارية أداة المراسلة الدولية بين مصر وملوك بابل وميتاني والحيثيين وحكام مدن الشام. وجودها في أخيتاتون لا يعني أنها حلت محل المصرية لغةً محلية، بل يعكس عرفًا دبلوماسيًا إقليميًا.",
        "source": "The Metropolitan Museum of Art — Amarna Letters: https://www.metmuseum.org/art/collection/search/325885",
        "difficulty": "high",
        "subcategory": "مصر والرافدان: الدبلوماسية",
        "tags": [
          "رسائل العمارنة",
          "الأكدية",
          "دبلوماسية"
        ],
        "external_id": "hist-ane-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الاستنتاج الأدق من نصوص الأهرام في أواخر الأسرة الخامسة والسادسة؟",
        "options": [
          "أن أقدم مجموعة كبيرة من التعاويذ الجنائزية الملكية نُقشت داخل الأهرام لضمان تحول الملك وبقائه في الآخرة",
          "أن كل المصريين امتلكوا النصوص نفسها في منازلهم",
          "أنها سجلات بناء يومية للعمال",
          "أنها ترجمة مصرية لملحمة جلجامش"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ظهرت نصوص الأهرام من عهد أوناس داخل الحجرات الملكية، وتضم تعاويذ تساعد الملك المتوفى على الصعود والانضمام إلى الآلهة وتلقي القرابين. توسعت التقاليد الجنائزية لاحقًا في نصوص التوابيت وكتاب الموتى، لكن لا يجوز إسقاط هذا الانتشار اللاحق على بدايتها الملكية.",
        "source": "The Metropolitan Museum of Art — Egyptian Book of the Dead: https://www.metmuseum.org/toah/hd/book/hd_book.htm",
        "difficulty": "high",
        "subcategory": "مصر: النصوص الجنائزية",
        "tags": [
          "نصوص الأهرام",
          "أوناس",
          "الآخرة"
        ],
        "external_id": "hist-ane-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا تُعد مكتبة آشوربانيبال في نينوى بالغة الأهمية لدراسة أدب الرافدين؟",
        "options": [
          "لأنها أول مكتبة ورقية عامة مجانية",
          "لأنها لا تضم إلا مراسلات آشوربانيبال الشخصية",
          "لأنها اكتُشفت سليمة في مدينة بابل",
          "لأنها حفظت ألواحًا ونسخًا علمية وأدبية متعددة، بينها نسخ من ملحمة جلجامش، جُمعت من تقاليد أقدم"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع آشوربانيبال في القرن السابع ق.م. آلاف الألواح المسمارية في نينوى، شملت أدبًا وعرافة وطبًا ومعاجم ونصوصًا طقسية. حفظت المكتبة مؤلفات أقدم بكثير من العصر الآشوري، ولذلك لا تعني نسبة المجموعة إليه أنه ألّفها.",
        "source": "The British Museum — The Library of Ashurbanipal: https://www.britishmuseum.org/research/projects/ashurbanipal-library-project",
        "difficulty": "high",
        "subcategory": "الرافدان: آشور والأدب",
        "tags": [
          "آشوربانيبال",
          "نينوى",
          "جلجامش"
        ],
        "external_id": "hist-ane-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تفسير يطابق علاقة فيضان النيل بالتقويم والاقتصاد المصريين من دون تبسيط مفرط؟",
        "options": [
          "نظم الإيقاع الزراعي، لكن انخفاضه أو ارتفاعه المفرط كان يهدد المحاصيل، فاستلزم رصدًا وإدارة للموارد",
          "كان الفيضان ثابت الارتفاع دائمًا فلا يحتاج إلى إدارة",
          "ألغى الحاجة إلى الري كليًا في جميع مناطق مصر",
          "كان يحدث شتاءً بسبب ذوبان ثلوج الدلتا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ارتبطت مواسم أخِت وبرِت وشِمو بدورة الفيضان والإنبات والحصاد. جلب الفيضان الماء والطمي، لكن التفاوت الكبير قد يؤدي إلى نقص أو دمار؛ لذا كان قياس المنسوب وتنظيم الأحواض والحبوب جزءًا من قدرة الدولة والمجتمعات المحلية على التكيف.",
        "source": "University College London, Digital Egypt for Universities — Agriculture: https://www.ucl.ac.uk/museums-static/digitalegypt/foodproduction/agriculture.html",
        "difficulty": "high",
        "subcategory": "مصر: البيئة والاقتصاد",
        "tags": [
          "النيل",
          "التقويم",
          "الزراعة"
        ],
        "external_id": "hist-ane-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي تكشفه مقابر أور الملكية عن المجتمع السومري في عصر فجر السلالات؟",
        "options": [
          "مجتمع بلا تفاوت في الثروة أو الرتبة",
          "اقتصاد منعزل لم يستورد مواد بعيدة",
          "تحول كامل إلى الديانة الآشورية",
          "نخب قادرة على حشد ذهب ولازورد وآلات وطقوس دفن معقدة وربما مرافقين بشريين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تكشف المدافن عن تفاوت شديد، وحرفية عالية، وشبكات بعيدة جلبت اللازورد والذهب، وطقوس صاحبت بعض الدفنات فيها عدد من الأفراد. أما تفسير كيفية موت المرافقين فقد خضع للنقاش، لذلك لا ينبغي تحويله إلى رواية يقينية واحدة.",
        "source": "Penn Museum — Royal Cemetery of Ur: https://www.penn.museum/sites/iraq/?page_id=31",
        "difficulty": "high",
        "subcategory": "الرافدان: أور والمجتمع",
        "tags": [
          "مقابر أور",
          "اللازورد",
          "النخبة"
        ],
        "external_id": "hist-ane-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بعد انهيار الدولة القديمة، ما السمة السياسية التي ميزت جانبًا كبيرًا من عصر الانتقال الأول قبل إعادة التوحيد؟",
        "options": [
          "حكم فارسي مباشر من برسبوليس",
          "سيطرة الهكسوس على طيبة",
          "تنافس مراكز إقليمية، ولا سيما هيراكليوبوليس وطيبة، مع تزايد نفوذ حكام الأقاليم",
          "نقل أخناتون العاصمة إلى العمارنة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شهد عصر الانتقال الأول تفكك السلطة المركزية وصعود قوى إقليمية، وانتهى الصراع بإعادة منتوحتب الثاني الطيبي توحيد البلاد وبداية الدولة الوسطى. الهكسوس والعمارنة والحكم الفارسي مراحل لاحقة منفصلة.",
        "source": "The Metropolitan Museum of Art — Egypt in the First Intermediate Period: https://www.metmuseum.org/toah/hd/firs/hd_firs.htm",
        "difficulty": "high",
        "subcategory": "مصر: عصر الانتقال الأول",
        "tags": [
          "هيراكليوبوليس",
          "طيبة",
          "منتوحتب الثاني"
        ],
        "external_id": "hist-ane-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يفسر نتيجة معركة قادش بين رمسيس الثاني ومواتالي الثاني تفسيرًا تاريخيًا متوازنًا؟",
        "options": [
          "نصر مصري حاسم أدى فورًا إلى سقوط الدولة الحيثية",
          "انتصار حيثي أنهى الدولة المصرية الحديثة",
          "مواجهة غير حاسمة استغلها الطرفان دعائيًا، وظلت قادش في المجال الحيثي ثم تلاها سلام لاحق",
          "معركة بحرية ضد شعوب البحر"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قدمت نقوش رمسيس المعركة كإنجاز شخصي هائل، لكن مصر لم تنتزع قادش، ولم تُسقط المعركة أيًا من الدولتين. بعد سنوات من التنافس أبرم رمسيس الثاني وحتوسيلي الثالث معاهدة سلام، وهو ما يميز الحدث الفعلي عن الدعاية الملكية.",
        "source": "The British Museum — Peace treaty between Ramesses II and Hattusili III: https://www.britishmuseum.org/collection/object/W_1919-1011-1",
        "difficulty": "high",
        "subcategory": "مصر: الدولة الحديثة والدبلوماسية",
        "tags": [
          "قادش",
          "رمسيس الثاني",
          "الحيثيون"
        ],
        "external_id": "hist-ane-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفرق الأدق بين السومرية والأكدية في تاريخ الكتابة الرافدينية؟",
        "options": [
          "كلتاهما لهجتان يونانيتان كتبتا بالأبجدية",
          "السومرية خط فقط والأكدية لغة بلا كتابة",
          "الأكدية أقدم دائمًا من جميع نصوص السومرية",
          "السومرية لغة معزولة، والأكدية لغة سامية؛ واستعملتا النظام المسماري مع تكييفه لقيم لغوية مختلفة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "السومرية لا تُنسب بثقة إلى أسرة لغوية معروفة، بينما الأكدية سامية شرقية. تبنى الناطقون بالأكدية المسمارية الموروثة وطوعوا علاماتها المقطعية واللوغوغرافية، وبقيت السومرية لغة علم وطقس بعد تراجعها كلامًا.",
        "source": "Encyclopaedia Britannica — Cuneiform: https://www.britannica.com/topic/cuneiform",
        "difficulty": "high",
        "subcategory": "الرافدان: اللغات والكتابة",
        "tags": [
          "السومرية",
          "الأكدية",
          "المسمارية"
        ],
        "external_id": "hist-ane-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يسمح لعلماء الآثار بتمييز مدينة تلّ رافدينية متعددة الطبقات عن مستوطنة ذات مرحلة واحدة؟",
        "options": [
          "وجود قمة طبيعية بركانية فقط",
          "تراكم طبقات بناء وهدم وإعادة تشييد متعاقبة يمكن فصلها طبقيًا وربط لقى كل طبقة بسياقها",
          "العثور على نص ملكي واحد فوق السطح",
          "تشابه جميع الفخار في كل الأعماق"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتكون التل من تراكم العمارة الطينية والردم والنشاط البشري عبر أجيال. يتيح التحليل الطبقي تتبع التعاقب الزمني؛ أما خلط اللقى المنقولة أو الاعتماد على قطعة منفردة فيفصلها عن سياقها ولا يثبت مرحلة كاملة.",
        "source": "University of Chicago, Institute for the Study of Ancient Cultures — Archaeology of Mesopotamia: https://isac.uchicago.edu/research/projects",
        "difficulty": "high",
        "subcategory": "منهج علم الآثار",
        "tags": [
          "تل أثري",
          "طبقات",
          "سياق"
        ],
        "external_id": "hist-ane-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يُعد لقب حتشبسوت وصورها الملكية موضوعًا مهمًا لفهم الملكية المصرية؟",
        "options": [
          "لأنها أخفت اسمها ولم تستخدم ألقاب الملك قط",
          "لأنها استخدمت ألقاب الفرعون وصورًا تجمع أحيانًا بين هيئة أنثوية وعلامات ملكية ذكورية لتأكيد أهلية الحكم",
          "لأنها حكمت بصفتها ملكة حيثية في الأناضول",
          "لأن جميع صورها دُمرت قبل تتويجها"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بدأت حتشبسوت وصية ثم اتخذت ألقاب الملك الكاملة. تتنوع تماثيلها ونقوشها بين إشارات إلى جسدها الأنثوي وصياغات بصرية ملكية تقليدية، ومنها اللحية الاحتفالية؛ وهذا يعكس تكييف مؤسسة مصوغة غالبًا بعبارات ذكورية، لا إنكارًا بسيطًا لهويتها.",
        "source": "The Metropolitan Museum of Art — Hatshepsut: https://www.metmuseum.org/toah/hd/hatsh/hd_hatsh.htm",
        "difficulty": "high",
        "subcategory": "مصر: الدولة الحديثة والملكية",
        "tags": [
          "حتشبسوت",
          "الملكية",
          "التمثيل الفني"
        ],
        "external_id": "hist-ane-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مقارنة بين سقوط نينوى سنة 612 ق.م. وسقوط بابل سنة 539 ق.م. صحيحة؟",
        "options": [
          "نينوى سقطت أمام تحالف بابلي-ميدي منهِيًا قلب الدولة الآشورية الحديثة، أما بابل فدخلت تحت حكم كورش الفارسي",
          "كلاهما حدث في الحرب نفسها على يد رمسيس الثاني",
          "بابل سقطت أولًا وأسست الإمبراطورية الآشورية الحديثة",
          "نينوى فتحها الإسكندر وبابل فتحها حمورابي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دمر البابليون والميديون نينوى عام 612 ق.م. ضمن انهيار آشور الحديثة، ثم أصبحت بابل مركز الدولة البابلية الحديثة. وبعد نحو سبعة عقود استولى كورش الثاني على بابل سنة 539 ق.م. وأدخلها في الإمبراطورية الأخمينية؛ فالحدثان متعاقبان لا متزامنان.",
        "source": "Encyclopaedia Britannica — Mesopotamian history: https://www.britannica.com/place/Mesopotamia-historical-region-Asia/The-Neo-Assyrian-Empire-746-609",
        "difficulty": "high",
        "subcategory": "الرافدان: آشور وبابل الحديثة",
        "tags": [
          "نينوى",
          "بابل",
          "كورش"
        ],
        "external_id": "hist-ane-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-history-modern-wars-diplomacy-02",
    "user_id": "system",
    "title": "الحروب الحديثة والدبلوماسية العالمية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "تاريخ",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في التسوية الأوروبية التي صاغها مؤتمر فيينا بين سبتمبر 1814 ويونيو 1815، أي ترتيب أُنشئ خصوصًا ليكون حاجزًا شمال فرنسا؟",
        "options": [
          "إنشاء اتحاد ألماني بقيادة بروسية مباشرة",
          "إعادة جمهورية البندقية مستقلة",
          "توحيد سويسرا وسافوا في مملكة واحدة",
          "ضم بلجيكا إلى هولندا في مملكة الأراضي المنخفضة المتحدة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع مؤتمر فيينا المقاطعات البلجيكية السابقة مع هولندا في مملكة الأراضي المنخفضة المتحدة تحت أسرة أوراني، ضمن سياسة إقامة دول حاجزة حول فرنسا. أما الاتحاد الألماني فكان رابطة من 39 دولة ولم يكن دولة بروسية موحدة.",
        "source": "Encyclopaedia Britannica — Congress of Vienna: https://www.britannica.com/event/Congress-of-Vienna",
        "difficulty": "medium",
        "subcategory": "النظام الأوروبي بعد نابليون",
        "tags": [
          "مؤتمر فيينا",
          "1815",
          "توازن القوى"
        ],
        "external_id": "hist-mwd-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي بند في معاهدة باريس الموقعة في 30 مارس 1856 بعد حرب القرم غيّر الوضع العسكري للبحر الأسود؟",
        "options": [
          "وضع المضائق كلها تحت سيادة روسية",
          "تحييد البحر الأسود ومنع الترسانات والسفن الحربية فيه",
          "منح النمسا قاعدة بحرية في القرم",
          "نقل القسطنطينية إلى إدارة دولية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نصت معاهدة باريس لعام 1856 على تحييد البحر الأسود، فحظر وجود السفن الحربية والترسانات البحرية على سواحله. قُيّد بذلك كل من روسيا والدولة العثمانية، ولم تُنقل السيادة على المضائق أو القسطنطينية.",
        "source": "Encyclopaedia Britannica — Treaty of Paris (1856): https://www.britannica.com/event/Treaty-of-Paris-1856",
        "difficulty": "medium",
        "subcategory": "حرب القرم",
        "tags": [
          "معاهدة باريس",
          "1856",
          "البحر الأسود"
        ],
        "external_id": "hist-mwd-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في اتفاقية الهدنة الكورية الموقعة في بانمونجوم في 27 يوليو 1953، ما الهيئة التي أُنشئت للإشراف على تنفيذ شروط الهدنة؟",
        "options": [
          "لجنة الهدنة العسكرية مع لجنة دول محايدة للرقابة",
          "مجلس وصاية تابع للأمم المتحدة",
          "لجنة عسكرية مشتركة من دول الكومنولث",
          "محكمة دائمة في سيول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشأت الهدنة لجنة الهدنة العسكرية للإشراف على التطبيق، ولجنة الأمم المحايدة للرقابة لتنفيذ مهام تفتيش محددة. الاتفاق أوقف الأعمال القتالية وأنشأ المنطقة المنزوعة السلاح، لكنه لم يكن معاهدة سلام نهائية.",
        "source": "United Nations Peacemaker — Korean Armistice Agreement (1953): https://peacemaker.un.org/korea-armistice53",
        "difficulty": "medium",
        "subcategory": "الحرب الكورية",
        "tags": [
          "بانمونجوم",
          "1953",
          "هدنة"
        ],
        "external_id": "hist-mwd-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الأثر الإقليمي المباشر لمعاهدة فرانكفورت في 10 مايو 1871 التي أنهت الحرب الفرنسية البروسية؟",
        "options": [
          "تخلت بروسيا عن الراين لفرنسا",
          "أصبحت لوكسمبورغ مقاطعة فرنسية",
          "ضمت إيطاليا سافوا ونيس",
          "تنازل فرنسا لألمانيا عن معظم الألزاس وجزء من اللورين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أكدت معاهدة فرانكفورت تنازل فرنسا للإمبراطورية الألمانية الجديدة عن معظم الألزاس وأجزاء من اللورين، إلى جانب تعويض مالي واحتلال مؤقت مرتبط بالسداد. سافوا ونيس انتقلتا إلى فرنسا قبل ذلك في 1860.",
        "source": "Encyclopaedia Britannica — Treaty of Frankfurt: https://www.britannica.com/event/Treaty-of-Frankfurt",
        "difficulty": "medium",
        "subcategory": "توحيد ألمانيا",
        "tags": [
          "فرانكفورت",
          "1871",
          "الألزاس واللورين"
        ],
        "external_id": "hist-mwd-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق البروتوكول السري الملحق بمعاهدة عدم الاعتداء الألمانية السوفيتية في 23 أغسطس 1939، في أي مجال وقع تقسيم مناطق النفوذ؟",
        "options": [
          "البلقان والأناضول فقط",
          "شرق آسيا والمحيط الهادئ",
          "المستعمرات الأفريقية الألمانية السابقة",
          "أوروبا الشرقية، بما فيها تقسيم مجال بولندا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وزّع البروتوكول السري مناطق نفوذ في شرق أوروبا بين ألمانيا والاتحاد السوفيتي، وتناول فنلندا وإستونيا ولاتفيا وليتوانيا وبولندا وبيسارابيا. ثم عُدلت بعض الحدود التقديرية في معاهدة الحدود والصداقة في 28 سبتمبر 1939.",
        "source": "Avalon Project, Yale Law School — Nazi-Soviet Relations 1939–1941: https://avalon.law.yale.edu/20th_century/addsepro.asp",
        "difficulty": "medium",
        "subcategory": "الدبلوماسية قبيل الحرب العالمية الثانية",
        "tags": [
          "مولوتوف ريبنتروب",
          "1939",
          "بروتوكول سري"
        ],
        "external_id": "hist-mwd-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المبدأ الإجرائي الذي أقره ميثاق بريان–كيلوغ الموقّع في باريس في 27 أغسطس 1928؟",
        "options": [
          "إنشاء جيش دولي دائم",
          "التخلي عن الحرب أداةً للسياسة الوطنية وتسوية النزاعات سلميًا",
          "إلغاء حق الدفاع عن النفس بنص صريح",
          "فرض عقوبات آلية بواسطة عصبة الأمم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعهدت الأطراف في المادتين الأولى والثانية بإدانة اللجوء إلى الحرب لحل المنازعات والتخلي عنها أداةً للسياسة الوطنية، وبطلب الحل بالوسائل السلمية. لم ينشئ الميثاق جهاز إنفاذ أو جيشًا دوليًا.",
        "source": "U.S. National Archives — Kellogg-Briand Pact (1928): https://www.archives.gov/milestone-documents/kellogg-briand-pact",
        "difficulty": "medium",
        "subcategory": "الأمن الجماعي بين الحربين",
        "tags": [
          "بريان كيلوغ",
          "1928",
          "نبذ الحرب"
        ],
        "external_id": "hist-mwd-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي التزام يميز المادة الخامسة من معاهدة شمال الأطلسي الموقعة في 4 أبريل 1949؟",
        "options": [
          "الرد العسكري المتماثل إلزامي تلقائيًا لكل عضو",
          "الهجوم على عضو يُعد هجومًا على الجميع، ويتخذ كل عضو ما يراه ضروريًا بما فيه القوة المسلحة",
          "أي نزاع تجاري يُحال إلى محكمة العدل الدولية",
          "لا تسري المعاهدة إلا بعد تفويض جديد من مجلس الأمن"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعد المادة الخامسة الهجوم المسلح على طرف أو أكثر هجومًا عليهم جميعًا، لكنها تترك لكل طرف اتخاذ الإجراء الذي يراه ضروريًا، بما في ذلك استخدام القوة المسلحة. لذلك لا تنص على رد عسكري متماثل وآلي حرفيًا.",
        "source": "NATO — The North Atlantic Treaty, Article 5: https://www.nato.int/cps/en/natohq/official_texts_17120.htm",
        "difficulty": "medium",
        "subcategory": "تحالفات الحرب الباردة",
        "tags": [
          "الناتو",
          "المادة الخامسة",
          "1949"
        ],
        "external_id": "hist-mwd-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في اتفاقيات جنيف الخاصة بالهند الصينية في يوليو 1954، كيف وُصف الخط عند دائرة العرض 17 في فيتنام؟",
        "options": [
          "خط ترسيم عسكري مؤقت مع منطقة منزوعة السلاح",
          "حد دولي دائم تعترف به الأمم المتحدة",
          "حد استعماري يعيد تونكين للصين",
          "ممر بحري خاضع لفرنسا خمسين عامًا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نص اتفاق وقف الأعمال القتالية على خط ترسيم عسكري مؤقت ومنطقة منزوعة السلاح، وأكد الإعلان الختامي أن الخط لا ينبغي تفسيره حدًا سياسيًا أو إقليميًا. كان مقررًا إجراء انتخابات عامة في يوليو 1956، لكنها لم تُجرَ.",
        "source": "Avalon Project, Yale Law School — Geneva Conference Documents (1954): https://avalon.law.yale.edu/20th_century/inch001.asp",
        "difficulty": "medium",
        "subcategory": "الهند الصينية",
        "tags": [
          "جنيف",
          "1954",
          "فيتنام"
        ],
        "external_id": "hist-mwd-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بموجب معاهدة الدولة النمساوية الموقعة في فيينا في 15 مايو 1955، ما التسوية الأساسية التي مهّدت لإنهاء احتلال الحلفاء؟",
        "options": [
          "تقسيم النمسا إلى دولتين",
          "إعادة الاتحاد السياسي مع ألمانيا",
          "استعادة النمسا دولة مستقلة ديمقراطية وحظر الاتحاد مع ألمانيا",
          "ضم تيرول كله إلى إيطاليا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أعادت المعاهدة تأسيس النمسا دولة مستقلة وديمقراطية، وحظرت الاتحاد السياسي أو الاقتصادي مع ألمانيا. وبعد دخولها حيز النفاذ انسحبت قوات الاحتلال؛ أما الحياد الدائم فأعلنه قانون دستوري نمساوي منفصل في 26 أكتوبر 1955.",
        "source": "Austrian Parliament — State Treaty and Neutrality: https://www.parlament.gv.at/en/explore/political-system/history-of-parliamentarism/the-second-republic/state-treaty-and-neutrality",
        "difficulty": "medium",
        "subcategory": "تسويات ما بعد الحرب العالمية الثانية",
        "tags": [
          "النمسا",
          "1955",
          "معاهدة الدولة"
        ],
        "external_id": "hist-mwd-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي قرره قرار مجلس الأمن 242 الصادر في 22 نوفمبر 1967 بشأن إطار التسوية بعد حرب يونيو؟",
        "options": [
          "إنشاء دولة فلسطينية بحدود مرسومة تفصيليًا",
          "فرض إدارة أممية دائمة للقدس",
          "إلغاء اتفاقيات الهدنة لعام 1949 فورًا",
          "الدعوة إلى انسحاب القوات الإسرائيلية من أراضٍ احتُلت في النزاع وإقرار حق دول المنطقة في العيش بسلام ضمن حدود آمنة ومعترف بها"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "جمع القرار 242 بين مبدأ الانسحاب من أراضٍ احتُلت في نزاع 1967 وبين إنهاء حالات الحرب والاعتراف بسيادة كل دولة وحقها في العيش ضمن حدود آمنة ومعترف بها. لم يرسم القرار حدودًا تفصيلية ولم ينشئ إدارة دائمة للقدس.",
        "source": "United Nations Security Council — Resolution 242 (1967): https://undocs.org/S/RES/242(1967)",
        "difficulty": "medium",
        "subcategory": "الصراع العربي الإسرائيلي",
        "tags": [
          "قرار 242",
          "1967",
          "مجلس الأمن"
        ],
        "external_id": "hist-mwd-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي صيغة دستورية اعتمدها القانون الختامي لمؤتمر فيينا في 9 يونيو 1815 للفضاء الألماني بعد حل الإمبراطورية الرومانية المقدسة؟",
        "options": [
          "إمبراطورية وراثية تحت آل هابسبورغ",
          "اتحاد فدرالي مركزي ببرلمان منتخب",
          "كونفدرالية من 39 دولة ذات مجلس اتحادي في فرانكفورت برئاسة نمساوية",
          "اتحاد جمركي تقوده فرنسا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنشأ قانون الاتحاد الألماني كونفدرالية من 39 دولة، لها جمعية اتحادية دائمة في فرانكفورت وترأسها النمسا. لم تكن الكونفدرالية دولة قومية مركزية ولا برلمانًا منتخبًا على أساس الاقتراع العام.",
        "source": "German History in Documents and Images — German Federal Act (1815): https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/german-federal-act-june-8-1815",
        "difficulty": "high",
        "subcategory": "مؤتمر فيينا",
        "tags": [
          "الاتحاد الألماني",
          "1815",
          "فرانكفورت"
        ],
        "external_id": "hist-mwd-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في معاهدة سان ستيفانو في 3 مارس 1878 ثم مراجعتها في مؤتمر برلين في 13 يوليو 1878، ما التغيير الأبرز الذي طال بلغاريا؟",
        "options": [
          "قُسّمت المملكة البلغارية الكبرى المقترحة إلى إمارة بلغاريا وروميليا الشرقية، مع إعادة مقدونيا للسلطان",
          "تحولت إلى مستعمرة بريطانية",
          "ضُمت كلها إلى روسيا",
          "اتحدت فورًا مع صربيا ورومانيا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قلّصت معاهدة برلين بلغاريا الكبرى التي رسمتها سان ستيفانو: أصبحت بلغاريا إمارة ذاتية الحكم شمال البلقان، وأُنشئت روميليا الشرقية جنوبه بحكم ذاتي إداري، وأعيدت مقدونيا إلى الحكم العثماني المباشر.",
        "source": "Encyclopaedia Britannica — Treaty of Berlin (1878): https://www.britannica.com/event/Treaty-of-Berlin-1878",
        "difficulty": "high",
        "subcategory": "المسألة الشرقية",
        "tags": [
          "سان ستيفانو",
          "برلين",
          "1878"
        ],
        "external_id": "hist-mwd-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف عالجت المادة 231 من معاهدة فرساي الموقعة في 28 يونيو 1919 أساس المسؤولية عن التعويضات؟",
        "options": [
          "حمّلت ألمانيا وحلفاءها مسؤولية الخسائر الناجمة عن الحرب المفروضة بعدوانهم كأساس للتعويض",
          "برأت جميع الأطراف من المسؤولية القانونية",
          "فرضت التعويضات على النمسا وحدها",
          "حددت فورًا مبلغًا نهائيًا بالدولار داخل المادة نفسها"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قبلت ألمانيا وحلفاؤها في المادة 231 المسؤولية عن الخسائر والأضرار التي لحقت بالحلفاء نتيجة الحرب المفروضة بعدوان ألمانيا وحلفائها. خدمت المادة أساسًا قانونيًا للتعويضات؛ أما المبلغ التفصيلي فلم تحدده المادة نفسها.",
        "source": "Avalon Project, Yale Law School — Treaty of Versailles, Part VIII: https://avalon.law.yale.edu/imt/partviii.asp",
        "difficulty": "high",
        "subcategory": "تسوية فرساي",
        "tags": [
          "فرساي",
          "المادة 231",
          "تعويضات"
        ],
        "external_id": "hist-mwd-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الآلية التي أضافتها اتفاقيات لوكارنو الموقعة في 16 أكتوبر 1925 لضمان حدود ألمانيا الغربية؟",
        "options": [
          "ضم الراين إلى عصبة الأمم",
          "تحالف هجومي فرنسي سوفيتي",
          "ضمان بريطاني وإيطالي متبادل لحدود ألمانيا مع فرنسا وبلجيكا مع ميثاق الراين",
          "اعتراف ألماني مماثل ونهائي بحدودها الشرقية مع بولندا وتشيكوسلوفاكيا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ضمن ميثاق الراين الوضع الإقليمي بين ألمانيا وفرنسا وبلجيكا، وكانت بريطانيا وإيطاليا ضامنتين ضد خرق الحدود أو نزع سلاح الراين. لم تحصل حدود ألمانيا الشرقية على الضمان الجماعي نفسه؛ عولجت عبر معاهدات تحكيم منفصلة.",
        "source": "Encyclopaedia Britannica — Locarno Treaties: https://www.britannica.com/event/Locarno-Pact",
        "difficulty": "high",
        "subcategory": "الدبلوماسية بين الحربين",
        "tags": [
          "لوكارنو",
          "1925",
          "ميثاق الراين"
        ],
        "external_id": "hist-mwd-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في اتفاق ميونيخ الموقّع ليلة 29–30 سبتمبر 1938، أي أطراف قررت نقل السوديت إلى ألمانيا دون مشاركة تشيكوسلوفاكيا في التفاوض النهائي؟",
        "options": [
          "بريطانيا وفرنسا وألمانيا وإيطاليا",
          "ألمانيا وإيطاليا وبولندا والاتحاد السوفيتي",
          "بريطانيا والولايات المتحدة وفرنسا وتشيكوسلوفاكيا",
          "ألمانيا والاتحاد السوفيتي وبريطانيا واليابان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وقع الاتفاق هتلر وموسوليني وتشامبرلين ودالادييه عن ألمانيا وإيطاليا وبريطانيا وفرنسا. أُلزمت تشيكوسلوفاكيا بإخلاء مناطق السوديت وفق جدول زمني، مع أنها لم تكن طرفًا مشاركًا في صنع الاتفاق النهائي.",
        "source": "Avalon Project, Yale Law School — Munich Pact (1938): https://avalon.law.yale.edu/imt/munich1.asp",
        "difficulty": "high",
        "subcategory": "أزمة ميونيخ",
        "tags": [
          "ميونيخ",
          "السوديت",
          "1938"
        ],
        "external_id": "hist-mwd-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مسألة تركها بروتوكول مؤتمر بوتسدام الصادر في 2 أغسطس 1945 لتسوية سلام نهائية، رغم وضع الأراضي الألمانية شرق خط الأودر–نايسه تحت إدارة بولندية مؤقتة؟",
        "options": [
          "حل القوات المسلحة الألمانية",
          "تقسيم برلين إلى قطاعات احتلال",
          "الحد النهائي لألمانيا",
          "محاكمة مجرمي الحرب"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وضع بروتوكول بوتسدام الأراضي الألمانية السابقة شرق الأودر–نايسه تحت الإدارة البولندية، لكنه نص على أن التحديد النهائي للحد الغربي لبولندا ينتظر تسوية السلام. ثُبّت الاعتراف النهائي في سياق معاهدة التسوية النهائية بشأن ألمانيا عام 1990 ومعاهدة الحدود الألمانية البولندية.",
        "source": "Avalon Project, Yale Law School — Potsdam Agreement (1945): https://avalon.law.yale.edu/20th_century/decade17.asp",
        "difficulty": "high",
        "subcategory": "تسويات الحرب العالمية الثانية",
        "tags": [
          "بوتسدام",
          "الأودر نايسه",
          "1945"
        ],
        "external_id": "hist-mwd-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في مؤتمر يالطا بين 4 و11 فبراير 1945، ما الصيغة المعتمدة للتصويت في مجلس الأمن التي عالجت مسألة امتياز القوى الكبرى؟",
        "options": [
          "إجماع جميع أعضاء الأمم المتحدة في كل قرار",
          "موافقة الأعضاء الدائمين في القرارات الموضوعية، مع امتناع طرف النزاع عن التصويت في بعض قرارات الفصل السادس",
          "صوتان لكل دولة دائمة دون حق نقض",
          "تسعة أصوات فقط بصرف النظر عن موقف الدائمين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أنتجت يالطا صيغة التصويت التي اشترطت تلاقي أصوات الأعضاء الدائمين في المسائل غير الإجرائية، وهي أصل حق النقض. وتضمنت الصيغة قيد امتناع طرف النزاع في قرارات معينة متصلة بالتسوية السلمية؛ ثم صيغ ذلك في المادة 27 من الميثاق.",
        "source": "U.S. Department of State, Office of the Historian — The Yalta Conference, 1945: https://history.state.gov/milestones/1937-1945/yalta-conf",
        "difficulty": "high",
        "subcategory": "نشأة الأمم المتحدة",
        "tags": [
          "يالطا",
          "مجلس الأمن",
          "حق النقض"
        ],
        "external_id": "hist-mwd-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي فرق قانوني جوهري ميّز اتفاقية جنيف الثالثة لعام 1949 الخاصة بأسرى الحرب عن اتفاقيتي جنيف لعام 1929؟",
        "options": [
          "ألغت حماية الأسرى عند الاستسلام",
          "وسّعت فئات المستفيدين ونظمت الأسر والعمل والمحاكمة والإعادة بتفصيل أكبر",
          "اقتصرت على الحروب البحرية",
          "سمحت للدولة الحاجزة بالتخلي عن مسؤوليتها بنقل الأسرى لأي دولة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استفادت اتفاقية 1949 من خبرة الحرب العالمية الثانية، فوسعت تعريف الفئات المشمولة ووضعت قواعد أكثر تفصيلًا للاحتجاز والعمل والعقوبات القضائية والإفراج والإعادة. كما أبقت مسؤولية الدولة الناقلة إذا أخفقت الدولة المستقبلة في تطبيق الاتفاقية.",
        "source": "International Committee of the Red Cross — Geneva Convention III (1949), overview and text: https://ihl-databases.icrc.org/en/ihl-treaties/gciii-1949",
        "difficulty": "high",
        "subcategory": "القانون الدولي الإنساني",
        "tags": [
          "جنيف الثالثة",
          "أسرى الحرب",
          "1949"
        ],
        "external_id": "hist-mwd-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في التسوية الدبلوماسية لأزمة الصواريخ الكوبية في أكتوبر 1962، أي ترتيب كان علنيًا وأي ترتيب ظل سريًا آنذاك؟",
        "options": [
          "علنًا سحب صواريخ جوبيتر؛ سرًا حصار كوبا",
          "علنًا انضمام كوبا للناتو؛ سرًا تقسيم برلين",
          "علنًا انسحاب السوفييت من ألمانيا؛ سرًا اعتراف أمريكي بكوبا",
          "علنًا سحب الصواريخ السوفيتية من كوبا وتعهد أمريكي بعدم غزوها؛ سرًا سحب صواريخ جوبيتر الأمريكية من تركيا لاحقًا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قبل خروتشوف إزالة الصواريخ الهجومية من كوبا مقابل تعهد علني أمريكي بعدم غزو الجزيرة. وبقناة منفصلة وافقت واشنطن سرًا على إزالة صواريخ جوبيتر من تركيا خلال مدة لاحقة، مع منع تصوير ذلك كمقايضة علنية.",
        "source": "U.S. Department of State, Office of the Historian — Cuban Missile Crisis: https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
        "difficulty": "high",
        "subcategory": "أزمات الحرب الباردة",
        "tags": [
          "أزمة الصواريخ الكوبية",
          "جوبيتر",
          "1962"
        ],
        "external_id": "hist-mwd-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف عالجت معاهدة حظر التجارب النووية الجزئي الموقعة في 5 أغسطس 1963 بيئات الاختبار المختلفة؟",
        "options": [
          "حظرت التجارب في الجو والفضاء الخارجي وتحت الماء، ولم تحظر الاختبارات الجوفية ما لم تتجاوز الحطام الإشعاعي حدود الدولة",
          "حظرت كل اختبار نووي بلا استثناء",
          "حظرت التجارب الجوفية فقط",
          "سمحت بالتجارب في الفضاء وحظرتها في الصحارى"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حظرت المعاهدة التفجيرات النووية في الغلاف الجوي والفضاء الخارجي وتحت الماء، وكذلك أي بيئة إذا تسبب الانفجار في حطام إشعاعي خارج حدود الدولة. لذلك بقي الاختبار الجوفي المحتوى داخل الحدود غير محظور بموجبها.",
        "source": "United Nations Office for Disarmament Affairs — Treaty Banning Nuclear Weapon Tests (1963): https://treaties.unoda.org/t/test_ban",
        "difficulty": "high",
        "subcategory": "الحد من التسلح النووي",
        "tags": [
          "حظر جزئي للتجارب",
          "1963",
          "نووي"
        ],
        "external_id": "hist-mwd-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي التزامين شكّلا المقايضة المركزية في معاهدة عدم انتشار الأسلحة النووية التي فُتحت للتوقيع في 1 يوليو 1968 ودخلت حيز النفاذ في 5 مارس 1970؟",
        "options": [
          "احتكار دائم بلا التزام تفاوضي مقابل حظر الطاقة النووية المدنية",
          "تسليم كل المواد الانشطارية للأمم المتحدة مقابل ضمان حدود الدول",
          "عدم اقتناء الدول غير النووية للسلاح وقبول الضمانات، مقابل تسهيل الاستخدام السلمي والتزام الأطراف بالتفاوض نحو نزع السلاح",
          "حظر الصواريخ الباليستية مقابل السماح بالتجارب الجوية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تلزم المعاهدة الدول غير الحائزة بعدم صنع أو تلقي السلاح النووي وبضمانات الوكالة الدولية، وتحمي حق الاستخدام السلمي والتعاون فيه. كما تلزم المادة السادسة جميع الأطراف بالسعي بحسن نية إلى مفاوضات بشأن وقف سباق التسلح ونزع السلاح النووي.",
        "source": "United Nations Office for Disarmament Affairs — Treaty on the Non-Proliferation of Nuclear Weapons: https://treaties.unoda.org/t/npt",
        "difficulty": "high",
        "subcategory": "نظام عدم الانتشار",
        "tags": [
          "NPT",
          "1968",
          "الضمانات النووية"
        ],
        "external_id": "hist-mwd-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في وثيقة هلسنكي الختامية الموقعة في 1 أغسطس 1975، كيف اقترنت حرمة الحدود بإمكان تغييرها؟",
        "options": [
          "حُظر أي تغيير للحدود حتى بالاتفاق",
          "أُقرت حرمة الحدود، مع إمكان تغييرها وفق القانون الدولي بوسائل سلمية وبالاتفاق",
          "أُعطي الاتحاد السوفيتي وحده حق تعديل الحدود",
          "أصبحت الوثيقة معاهدة دفاع جماعي ملزمة عسكريًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أكدت الوثيقة الامتناع عن الاعتداء على حدود الدول، لكنها نصت أيضًا على إمكان تغيير الحدود وفق القانون الدولي وبالوسائل السلمية والاتفاق. كانت الوثيقة التزامًا سياسيًا واسعًا شمل الأمن والتعاون وحقوق الإنسان، لا معاهدة دفاع جماعي.",
        "source": "OSCE — Helsinki Final Act (1975): https://www.osce.org/helsinki-final-act",
        "difficulty": "high",
        "subcategory": "الانفراج الأوروبي",
        "tags": [
          "هلسنكي",
          "1975",
          "حرمة الحدود"
        ],
        "external_id": "hist-mwd-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الترتيب الأمني الذي نصت عليه معاهدة السلام المصرية الإسرائيلية الموقعة في 26 مارس 1979 في شبه جزيرة سيناء؟",
        "options": [
          "بقاء سيناء تحت إدارة مشتركة دائمة",
          "نشر قوات هجومية مصرية بلا قيود على الحدود",
          "انسحاب إسرائيلي مرحلي مع مناطق متفاوتة القيود على القوات وترتيبات مراقبة",
          "تأجير شرم الشيخ لإسرائيل 99 عامًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "رتبت المعاهدة انسحابًا إسرائيليًا كاملًا على مراحل إلى الحدود الدولية، وقسم ملحقها الأمني سيناء والنقب الحدودي إلى مناطق بقيود مختلفة على القوات والتسليح، مع آليات مراقبة. وبعد تعذر قوة أممية أنشئت القوة متعددة الجنسيات والمراقبون باتفاق لاحق.",
        "source": "United Nations Peacemaker — Egypt-Israel Peace Treaty (1979): https://peacemaker.un.org/egyptisrael-peacetreaty79",
        "difficulty": "high",
        "subcategory": "دبلوماسية الشرق الأوسط",
        "tags": [
          "معاهدة السلام المصرية الإسرائيلية",
          "سيناء",
          "1979"
        ],
        "external_id": "hist-mwd-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا سميت معاهدة 12 سبتمبر 1990 بشأن ألمانيا باتفاق «اثنين زائد أربعة»، وما الأثر السيادي الأساسي لدخولها حيز النفاذ في 15 مارس 1991؟",
        "options": [
          "دولتا ألمانيا زائد أربع دول مجاورة؛ أنشأت كونفدرالية مؤقتة",
          "حزبان ألمانيان زائد أربع منظمات؛ أبقت برلين محتلة",
          "ولايتان ألمانيتان زائد أربعة جيوش؛ قسمت ألمانيا ست مناطق",
          "ألمانيا الشرقية والغربية زائد القوى الأربع المحتلة؛ أنهت حقوق ومسؤوليات القوى الأربع وأعادت لألمانيا الموحدة السيادة الكاملة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شارك البلدان الألمانيان والقوى الأربع ذات الحقوق في ألمانيا—الولايات المتحدة والاتحاد السوفيتي وبريطانيا وفرنسا—في التسوية. أنهت المعاهدة حقوق القوى الأربع المتعلقة ببرلين وألمانيا ككل، فأصبحت ألمانيا الموحدة ذات سيادة كاملة على شؤونها الداخلية والخارجية.",
        "source": "German Federal Foreign Office — Two Plus Four Treaty: https://www.auswaertiges-amt.de/en/aussenpolitik/themen/two-plus-four-treaty-228294",
        "difficulty": "high",
        "subcategory": "نهاية الحرب الباردة",
        "tags": [
          "اثنان زائد أربعة",
          "توحيد ألمانيا",
          "1990"
        ],
        "external_id": "hist-mwd-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في الاتفاق الإطاري العام للسلام في البوسنة والهرسك، الموقّع في باريس في 14 ديسمبر 1995 بعد التفاوض في دايتون، كيف نُظمت الدولة داخليًا؟",
        "options": [
          "قُسمت إلى ثلاث دول مستقلة ذات سيادة",
          "أصبحت محمية تابعة لحلف الناتو بلا مؤسسات محلية",
          "أُلحقت سراييفو بكرواتيا وبانيا لوكا بصربيا",
          "استمرت البوسنة والهرسك دولة واحدة تتكون من كيانين: اتحاد البوسنة والهرسك وجمهورية صربسكا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أكد دستور الملحق الرابع استمرار الوجود القانوني للبوسنة والهرسك بحدودها المعترف بها دوليًا، ونص على أنها تتكون من كيانين: اتحاد البوسنة والهرسك وجمهورية صربسكا. لم يمنح الكيانين سيادة دولية مستقلة.",
        "source": "Office of the High Representative — General Framework Agreement for Peace in Bosnia and Herzegovina: https://www.ohr.int/dayton-peace-agreement/",
        "difficulty": "high",
        "subcategory": "حروب يوغوسلافيا",
        "tags": [
          "دايتون",
          "البوسنة والهرسك",
          "1995"
        ],
        "external_id": "hist-mwd-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-specialized-06-01",
    "user_id": "system",
    "title": "تشريح وفسيولوجيا جسم الإنسان",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "علوم وطب",
    "language": "ar",
    "quiz_difficulty": "medium_high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "human-anaphys-001",
        "question_text": "عند انقباض الحجاب الحاجز في شهيق هادئ لدى شخص سليم، أي تغير مباشر يفسر دخول الهواء إلى الرئتين؟",
        "options": [
          "ينقص حجم الصدر ويرتفع الضغط السنخي فوق الضغط الجوي",
          "يرتفع الضغط داخل الجنبة إلى قيمة موجبة فيدفع الهواء للداخل",
          "يزداد الحجم الرأسي للصدر وينخفض الضغط السنخي دون الضغط الجوي",
          "تنقبض العضلات الوربية الداخلية فتخفض الأضلاع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يهبط الحجاب الحاجز عند انقباضه، فيزيد حجم التجويف الصدري. وبفعل اقتران الرئة بجدار الصدر عبر السائل الجنبي تتمدد الأسناخ وينخفض ضغطها قليلًا دون الضغط الجوي، فيتحرك الهواء إلى الداخل. أما الوربيات الداخلية فتشارك أساسًا في الزفير القسري.",
        "difficulty": "medium",
        "subcategory": "الجهاز التنفسي",
        "tags": [
          "الحجاب الحاجز",
          "الشهيق",
          "الضغط السنخي"
        ],
        "source": "West's Respiratory Physiology: The Essentials, 11th ed., Ch. 7, Mechanics of Breathing (Wolters Kluwer, 2021)",
        "external_id": "human-anaphys-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-002",
        "question_text": "أي وعاء يحمل عادةً دمًا غير مؤكسج من البطين الأيمن نحو الرئتين؟",
        "options": [
          "الأوردة الرئوية",
          "الأبهر الصاعد",
          "الوريد الأجوف العلوي",
          "الجذع الرئوي وفروعه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يدفع البطين الأيمن الدم الوريدي عبر الصمام الرئوي إلى الجذع الرئوي ثم الشريانين الرئويين للتبادل الغازي. تسمية الشريان تتعلق باتجاه الجريان بعيدًا عن القلب لا بمحتوى الأكسجين؛ أما الأوردة الرئوية فتعيد الدم المؤكسج إلى الأذين الأيسر.",
        "difficulty": "medium",
        "subcategory": "القلب والدوران",
        "tags": [
          "الدورة الرئوية",
          "البطين الأيمن",
          "الشرايين"
        ],
        "source": "Moore, Clinically Oriented Anatomy, 9th ed., Ch. 1: Thorax—Heart and Great Vessels (Wolters Kluwer, 2023)",
        "external_id": "human-anaphys-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-003",
        "question_text": "في الكلية، أين يبدأ الترشيح الذي ينقل الماء والجزيئات الصغيرة من الشعيرات الدموية إلى الحيز البولي؟",
        "options": [
          "عروة هنلي والقناة الجامعة",
          "الكبيبة ومحفظة بومان",
          "الحويضة الكلوية والحالب",
          "الجهاز المجاور للكبيبات فقط"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتكون الجسيم الكلوي من كبيبة شعيرية تحيط بها محفظة بومان. يعبر الرشاح حاجزًا من البطانة المثقبة والغشاء القاعدي وشقوق الخلايا القدمية إلى حيز بومان؛ ثم تعدل النبيبات تركيبه بإعادة الامتصاص والإفراز.",
        "difficulty": "medium",
        "subcategory": "الجهاز البولي",
        "tags": [
          "النفرون",
          "الكبيبة",
          "الترشيح"
        ],
        "source": "Junqueira's Basic Histology: Text and Atlas, 16th ed., Ch. 19: The Urinary System (McGraw Hill, 2021)",
        "external_id": "human-anaphys-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-004",
        "question_text": "أي جزء من الجهاز العصبي الذاتي يرفع عادةً معدل القلب عبر إفراز النورإبينفرين على العقدة الجيبية الأذينية؟",
        "options": [
          "الألياف نظيرة الودية قبل العقدية",
          "العصبونات الحسية الجسدية",
          "الألياف الودية بعد العقدية",
          "الألياف الحركية الجسدية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنبه الألياف الودية القلبية مستقبلات بيتا-1 في خلايا الناظمة، فتزيد سرعة زوال الاستقطاب التلقائي ومعدل النبض. في المقابل يحرر العصب المبهم أستيل كولين عند القلب ويبطئ العقدة الجيبية والعقدة الأذينية البطينية.",
        "difficulty": "medium",
        "subcategory": "الجهاز العصبي الذاتي",
        "tags": [
          "الجهاز الودي",
          "العقدة الجيبية",
          "معدل القلب"
        ],
        "source": "Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 61: The Autonomic Nervous System (Elsevier, 2021)",
        "external_id": "human-anaphys-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-005",
        "question_text": "أي نوع من الخلايا البنكرياسية يفرز الإنسولين استجابةً لارتفاع غلوكوز الدم؟",
        "options": [
          "خلايا ألفا في الجزر",
          "الخلايا العنيبية الخارجية الإفراز",
          "خلايا القنوات البنكرياسية",
          "خلايا بيتا في جزر لانغرهانس"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "خلايا بيتا هي المصدر الصماوي للإنسولين، الذي يعزز دخول الغلوكوز إلى أنسجة حساسة له وتخزين الوقود ويحد من إنتاج الغلوكوز الكبدي. خلايا ألفا تفرز الغلوكاغون، بينما تنتج الخلايا العنيبية إنزيمات هضمية إلى القنوات.",
        "difficulty": "medium",
        "subcategory": "الغدد الصماء",
        "tags": [
          "البنكرياس",
          "الإنسولين",
          "خلايا بيتا"
        ],
        "source": "Williams Textbook of Endocrinology, 14th ed., Ch. 33: Insulin Biosynthesis, Secretion, and Action (Elsevier, 2020)",
        "external_id": "human-anaphys-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-006",
        "question_text": "أي بنية في الأذن الداخلية تحول اهتزازات الصوت إلى إشارات عصبية سمعية؟",
        "options": [
          "القنوات نصف الدائرية في الدهليز",
          "الغشاء الطبلي وحده",
          "الخلايا الشعرية في عضو كورتي داخل القوقعة",
          "عظيمات المطرقة والسندان والركاب وحدها"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنقل العظيمات الطاقة الميكانيكية إلى النافذة البيضوية، فتولّد موجة على الغشاء القاعدي. يثني القص حزم الأهداب المجسمة للخلايا الشعرية في عضو كورتي، فتتغير موصليتها وتحرر ناقلًا إلى ألياف العصب القوقعي.",
        "difficulty": "medium",
        "subcategory": "الحواس الخاصة",
        "tags": [
          "القوقعة",
          "عضو كورتي",
          "السمع"
        ],
        "source": "Kandel et al., Principles of Neural Science, 6th ed., Ch. 30: Auditory Transduction (McGraw Hill, 2021)",
        "external_id": "human-anaphys-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-007",
        "question_text": "ما الحركة الأساسية التي تنتجها العضلة ذات الرأسين العضدية عندما يكون الساعد حرًا؟",
        "options": [
          "ثني المرفق واستلقاء الساعد",
          "بسط المرفق وكب الساعد",
          "تبعيد العضد ودورانه الإنسي",
          "بسط الرسغ وانحرافه الزندي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترتكز العضلة ذات الرأسين على الحدبة الكعبرية والصفاق ذي الرأسين؛ لذلك تثني المرفق وتدير الكعبرة إلى وضع الاستلقاء، وتكون مستلقيًا قويًا خصوصًا مع ثني المرفق. البسط وظيفة رئيسة للعضلة ثلاثية الرؤوس.",
        "difficulty": "medium",
        "subcategory": "الجهاز العضلي الهيكلي",
        "tags": [
          "ذات الرأسين",
          "المرفق",
          "الاستلقاء"
        ],
        "source": "Moore, Clinically Oriented Anatomy, 9th ed., Ch. 3: Upper Limb—Anterior Compartment of Arm (Wolters Kluwer, 2023)",
        "external_id": "human-anaphys-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-008",
        "question_text": "أين يحدث معظم امتصاص المغذيات المهضومة في القناة الهضمية؟",
        "options": [
          "المعدة عبر الغدد القاعية",
          "الأمعاء الدقيقة بفضل الطيات والزغابات والزغيبات",
          "القولون الصاعد عبر الخبايا فقط",
          "المريء عبر الظهارة الحرشفية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توفر الأمعاء الدقيقة مساحة سطح واسعة بفعل الطيات الدائرية والزغابات والزغيبات، وتحمل خلاياها نواقل وإنزيمات حدود الفرشاة. يختص القولون أكثر باسترداد الماء والشوارد والتعامل مع نواتج الميكروبيوم، لا بامتصاص معظم المغذيات.",
        "difficulty": "medium",
        "subcategory": "الجهاز الهضمي",
        "tags": [
          "الأمعاء الدقيقة",
          "الزغابات",
          "الامتصاص"
        ],
        "source": "Boron & Boulpaep, Medical Physiology, 3rd ed., Ch. 45: Intestinal Fluid and Electrolyte Movement (Elsevier, 2017)",
        "external_id": "human-anaphys-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-009",
        "question_text": "أي خلية دموية ناضجة تنقل معظم الأكسجين بفضل الهيموغلوبين وتفتقر عادةً إلى نواة؟",
        "options": [
          "كرية الدم الحمراء",
          "العدلة",
          "الخلية اللمفاوية",
          "الوحيدة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفقد الكرية الحمراء البشرية نواتها وعضيات كثيرة أثناء النضج، ما يفسح حيزًا للهيموغلوبين ويمنحها مرونة لعبور الشعيرات. وهي تحمل الأكسجين أساسًا مرتبطًا بالهيموغلوبين، في حين تحتفظ الكريات البيضاء المذكورة بأنويتها وتؤدي وظائف مناعية.",
        "difficulty": "medium",
        "subcategory": "الدم",
        "tags": [
          "الكريات الحمراء",
          "الهيموغلوبين",
          "الأكسجين"
        ],
        "source": "Junqueira's Basic Histology: Text and Atlas, 16th ed., Ch. 12: Blood (McGraw Hill, 2021)",
        "external_id": "human-anaphys-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-010",
        "question_text": "أي فص من قشرة المخ يضم القشرة البصرية الأولية حول الثلم المهمازي؟",
        "options": [
          "الفص الجبهي",
          "الفص الصدغي",
          "الفص القذالي",
          "الفص الجزيري"
        ],
        "correct_index": 2,
        "time_limit_seconds": 25,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقع القشرة البصرية الأولية، المساحة 17، على السطح الإنسي للفص القذالي بمحاذاة الثلم المهمازي، وتستقبل مدخلات المهاد البصري عبر الإشعاع البصري. توجد مسارات معالجة بصرية لاحقة تمتد نحو الفصين الجداري والصدغي.",
        "difficulty": "medium",
        "subcategory": "الجهاز العصبي المركزي",
        "tags": [
          "القشرة البصرية",
          "الفص القذالي",
          "الثلم المهمازي"
        ],
        "source": "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed., Ch. 25: Cerebral Cortex (Elsevier, 2020)",
        "external_id": "human-anaphys-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-011",
        "question_text": "لماذا يؤدي تنبيه مستقبلات بيتا-1 في خلايا العقدة الجيبية إلى تسارع معدل القلب؟",
        "options": [
          "يفتح قنوات بوتاسيوم مرتبطة بالأستيل كولين فيفرط الاستقطاب",
          "يثبط الأدينيلات سيكلاز ويبطئ بلوغ العتبة",
          "يثبت جهد الغشاء عند جهد الراحة ويمنع التلقائية",
          "يزيد cAMP وتيار If وتيارات الكالسيوم، فتزداد سرعة زوال الاستقطاب في الطور الرابع"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترتبط مستقبلات بيتا-1 ببروتين Gs فتزيد الأدينيلات سيكلاز وcAMP. ينشط ذلك مباشرة قنوات HCN الحاملة لتيار If ويعزز تيارات الكالسيوم، فتبلغ خلية الناظمة العتبة أسرع. فتح قنوات البوتاسيوم وتثبيط cAMP يميزان تأثير M2 المبهمي المعاكس.",
        "difficulty": "high",
        "subcategory": "الفيزيولوجيا القلبية",
        "tags": [
          "بيتا-1",
          "تيار If",
          "العقدة الجيبية"
        ],
        "source": "Boron & Boulpaep, Medical Physiology, 3rd ed., Ch. 21: The Electrical Activity of the Heart (Elsevier, 2017)",
        "external_id": "human-anaphys-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-012",
        "question_text": "أي حدث يفسر انغلاق الصمام التاجي في بداية الانقباض البطيني الطبيعي؟",
        "options": [
          "تجاوز ضغط الأبهر ضغط البطين الأيسر",
          "هبوط ضغط البطين دون ضغط الأذين",
          "انقباض العضلات الحليمية وسحب الشرفات إلى البطين",
          "تجاوز ضغط البطين الأيسر ضغط الأذين الأيسر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الصمامات سلبية الحركة وتستجيب لفروق الضغط. حين يبدأ البطين الأيسر بالانقباض ويتجاوز ضغطه ضغط الأذين، يُدفع التاجي إلى الإغلاق مولدًا جزءًا من الصوت الأول. تمنع العضلات الحليمية والحبال انقلاب الشرفات نحو الأذين؛ ولا تغلق الصمام بسحبه.",
        "difficulty": "high",
        "subcategory": "ديناميكا القلب",
        "tags": [
          "الصمام التاجي",
          "الانقباض",
          "فروق الضغط"
        ],
        "source": "Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 9: Cardiac Muscle; The Heart as a Pump (Elsevier, 2021)",
        "external_id": "human-anaphys-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-013",
        "question_text": "في الوصلة العصبية العضلية، ما التسلسل الذي يربط وصول جهد الفعل العصبي بإزالة استقطاب اللوحة النهائية؟",
        "options": [
          "دخول Ca2+ قبل مشبكي، إفراز أستيل كولين، فتح مستقبلات نيكوتينية كاتيونية",
          "دخول Na+ قبل مشبكي، إفراز نورإبينفرين، فتح مستقبلات بيتا",
          "خروج Ca2+ من الليف العضلي، إفراز GABA، فتح قنوات كلوريد",
          "تثبيط أستيل كولين إستيراز، إغلاق المستقبلات النيكوتينية، خروج Na+"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفتح جهد الفعل قنوات كالسيوم جهدية في النهاية الحركية، فيحفز اندماج الحويصلات وإطلاق الأستيل كولين. يرتبط الناقل بمستقبلات نيكوتينية عضلية فتفتح قناة كاتيونية؛ يغلب دخول الصوديوم، فينشأ جهد اللوحة النهائية الذي يطلق جهد فعل عضليًا.",
        "difficulty": "high",
        "subcategory": "العضلات والأعصاب",
        "tags": [
          "الوصلة العصبية العضلية",
          "أستيل كولين",
          "المستقبل النيكوتيني"
        ],
        "source": "Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 7: Excitation of Skeletal Muscle (Elsevier, 2021)",
        "external_id": "human-anaphys-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-014",
        "question_text": "ما الآلية التي تجعل الطرف الصاعد الغليظ لعروة هنلي جزءًا مولدًا للتدرج الأسموزي اللبي مع أنه غير منفذ للماء؟",
        "options": [
          "يفرز اليوريا حصريًا إلى اللمعة عبر ناقل GLUT2",
          "يعيد امتصاص Na+ وK+ وCl− عبر ناقل NKCC2 من دون أن يتبعه الماء",
          "يعيد امتصاص الماء عبر AQP2 استجابةً للألدوستيرون",
          "يرشح البروتينات عبر شقوق الخلايا القدمية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينقل NKCC2 الأملاح من اللمعة في الطرف الصاعد الغليظ، بينما تكون ظهارته شبه غير منفذة للماء؛ لذلك يخف السائل الأنبوبي ويزداد أسمولال السائل الخلالي اللبي. مع الجريان المعاكس وإعادة تدوير اليوريا ينشأ تدرج يسمح للقناة الجامعة بتركيز البول عند وجود الهرمون المضاد لإدرار البول.",
        "difficulty": "high",
        "subcategory": "الفيزيولوجيا الكلوية",
        "tags": [
          "عروة هنلي",
          "NKCC2",
          "المضاعف المعاكس"
        ],
        "source": "Brenner & Rector's The Kidney, 11th ed., Ch. 5: Renal Concentrating and Diluting Mechanisms (Elsevier, 2020)",
        "external_id": "human-anaphys-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-015",
        "question_text": "عند ارتفاع أسمولالية البلازما، كيف يزيد الهرمون المضاد لإدرار البول امتصاص الماء في القناة الجامعة؟",
        "options": [
          "ينشط مستقبل V1 فيُدرج NKCC2 في الكبيبة",
          "يثبط cAMP فيزيل AQP1 من الشعيرات حول النبيبية",
          "يفتح قنوات ENaC مباشرةً في الطرف النازل الرقيق",
          "ينشط مستقبل V2 في الخلايا الرئيسية فيُدرج قنوات AQP2 في الغشاء القِمّي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يرتبط الفازوبريسين بمستقبل V2 المقترن بـGs على الجانب القاعدي الوحشي للخلايا الرئيسية، فيرفع cAMP ويحفز إدراج حويصلات تحمل AQP2 في السطح القِمّي. يدخل الماء عبر AQP2 ويغادر نحو الدم عبر AQP3 وAQP4 القاعديتين الوحشيتين.",
        "difficulty": "high",
        "subcategory": "تنظيم سوائل الجسم",
        "tags": [
          "الفازوبريسين",
          "AQP2",
          "القناة الجامعة"
        ],
        "source": "Boron & Boulpaep, Medical Physiology, 3rd ed., Ch. 38: Urine Concentration and Dilution (Elsevier, 2017)",
        "external_id": "human-anaphys-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-016",
        "question_text": "لماذا يسهّل انزياح منحنى تفكك الأوكسيهيموغلوبين إلى اليمين تحرير الأكسجين في نسيج نشط استقلابيًا؟",
        "options": [
          "لأنه يرفع ألفة الهيموغلوبين ويمنع انفصال الأكسجين",
          "لأنه يحول الهيموغلوبين إلى ميوغلوبين",
          "لأنه يوقف ذوبان الأكسجين في البلازما",
          "لأنه يخفض ألفة الهيموغلوبين للأكسجين عند الضغط الجزئي نفسه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "زيادة CO2 والحموضة والحرارة و2,3-BPG تثبت نسبيًا الحالة T منخفضة الألفة للهيموغلوبين. لذلك يكون التشبع أقل عند PO2 معين وتتحرر كمية أكبر من الأكسجين إلى النسيج؛ وهذا جوهر تأثير بوهر بالنسبة للحموضة وثاني أكسيد الكربون.",
        "difficulty": "high",
        "subcategory": "نقل الغازات",
        "tags": [
          "الهيموغلوبين",
          "تأثير بوهر",
          "ألفة الأكسجين"
        ],
        "source": "West's Respiratory Physiology: The Essentials, 11th ed., Ch. 6: Gas Transport by the Blood (Wolters Kluwer, 2021)",
        "external_id": "human-anaphys-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-017",
        "question_text": "أي علاقة تشريحية تفسر مرور العصب الحنجري الراجع الأيسر حول الصدر قبل صعوده إلى الحنجرة؟",
        "options": [
          "يلتف تحت الشريان تحت الترقوة الأيمن",
          "يلتف تحت قوس الأبهر قرب الرباط الشرياني",
          "يعبر الثقبة الوداجية ثم يلتف حول السباتي الداخلي",
          "يمر أمام قوس الأبهر مباشرةً من دون انعطاف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينزل الفرع الأيسر من العصب المبهم إلى الصدر ويلتف خلفيًا تحت قوس الأبهر بجوار الرباط الشرياني، ثم يصعد في الثلم الرغامي المريئي. أما الراجع الأيمن فيلتف تحت الشريان تحت الترقوة الأيمن؛ وينشأ عدم التناظر من تطور الأقواس الشريانية وهبوط القلب.",
        "difficulty": "high",
        "subcategory": "تشريح الرأس والعنق والصدر",
        "tags": [
          "العصب الحنجري الراجع",
          "قوس الأبهر",
          "العصب المبهم"
        ],
        "source": "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed., Ch. 56: Vagus Nerve and Laryngeal Nerves (Elsevier, 2020)",
        "external_id": "human-anaphys-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-018",
        "question_text": "في منعكس الشد العضلي، أي مستقبل يرصد أساسًا طول العضلة وسرعة تغيره؟",
        "options": [
          "عضو وتر غولجي وألياف Ib فقط",
          "جسيم باتشيني في الجلد",
          "المغزل العضلي وأليافه الحسية Ia وII",
          "المستقبل النيكوتيني في اللوحة النهائية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقع الألياف داخل المغزل موازية للألياف العضلية خارج المغزل؛ لذا يتغير شد نهاياتها الحسية مع طول العضلة. تنقل Ia مكونًا ديناميكيًا قويًا وII معلومات طول ثابتة. يقع عضو وتر غولجي على التوالي مع العضلة ويرصد التوتر عبر ألياف Ib.",
        "difficulty": "high",
        "subcategory": "الفيزيولوجيا العصبية",
        "tags": [
          "المغزل العضلي",
          "منعكس الشد",
          "Ia"
        ],
        "source": "Kandel et al., Principles of Neural Science, 6th ed., Ch. 34: Spinal Reflexes (McGraw Hill, 2021)",
        "external_id": "human-anaphys-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-019",
        "question_text": "أي طبقة من قشرة الكظر تنتج الألدوستيرون، وما المنظم الفسيولوجي الأهم لإفرازه؟",
        "options": [
          "المنطقة الكبيبية؛ الأنجيوتنسين II وارتفاع بوتاسيوم البلازما",
          "المنطقة الحزمية؛ الهرمون المنبه للدرقية",
          "المنطقة الشبكية؛ الإنسولين",
          "لب الكظر؛ الهرمون المضاد لإدرار البول"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفتقر المنطقة الكبيبية إلى إنزيم 17α-hydroxylase وتمتلك aldosterone synthase، فتنتج القشراني المعدني الألدوستيرون. ينبهها الأنجيوتنسين II والبوتاسيوم مباشرةً، بينما يؤدي ACTH دورًا ثانويًا قصير الأمد؛ وتنتج الحزمية الكورتيزول أساسًا.",
        "difficulty": "high",
        "subcategory": "الغدد الصماء",
        "tags": [
          "الألدوستيرون",
          "قشرة الكظر",
          "الأنجيوتنسين II"
        ],
        "source": "Williams Textbook of Endocrinology, 14th ed., Ch. 15: The Adrenal Cortex (Elsevier, 2020)",
        "external_id": "human-anaphys-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-020",
        "question_text": "كيف تمنع البطانة الوعائية السليمة تجمع الصفائح وتساعد على توسع الوعاء؟",
        "options": [
          "تفرز الثرومبين وعامل النسيج باستمرار",
          "تنتج أكسيد النتريك والبروستاسيكلين اللذين يثبطان الصفائح ويرخيان العضلة الملساء",
          "تعرض الكولاجين تحت البطاني مباشرةً للدم",
          "تحول البلازمين إلى فيبرين داخل اللمعة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينتشر NO إلى العضلة الملساء وينشط الغوانيلات سيكلاز وcGMP، بينما يرفع البروستاسيكلين cAMP؛ وكلاهما يحد من تنشيط الصفائح ويسهم في التوسع. عند أذية البطانة ينكشف الكولاجين ويظهر عامل النسيج وتتبدل البيئة نحو الإرقاء.",
        "difficulty": "high",
        "subcategory": "الأوعية والإرقاء",
        "tags": [
          "البطانة الوعائية",
          "أكسيد النتريك",
          "البروستاسيكلين"
        ],
        "source": "Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 18: Nervous Regulation of the Circulation and Rapid Control of Arterial Pressure (Elsevier, 2021)",
        "external_id": "human-anaphys-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-021",
        "question_text": "أي خاصية نسيجية تميز الحاجز الدموي الهوائي الرقيق في الأسناخ وتسمح بالانتشار السريع للغازات؟",
        "options": [
          "تقارب ظهارة سنخية حرشفية من النمط I وبطانة شعيرية مع غشائين قاعديين ملتحمين غالبًا",
          "ظهارة عمودية مطبقة فوق غضروف زجاجي",
          "طبقة عضلية ملساء سميكة تفصل الهواء عن الدم",
          "ظهارة مكعبة مهدبة متعددة الصفوف تحيط بكل شعيرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتكون أنحف جزء من الحاجز من السيتوبلازم الرقيق للخلية السنخية I وغشائها القاعدي الملتحم غالبًا بغشاء الخلية البطانية ثم البطانة الشعرية. يقلل ذلك مسافة الانتشار. تنتج خلايا النمط II الفاعل بالسطح ويمكنها تجديد الظهارة، لكنها ليست معظم مساحة السطح.",
        "difficulty": "high",
        "subcategory": "نسج الجهاز التنفسي",
        "tags": [
          "الحاجز الدموي الهوائي",
          "الخلايا السنخية I",
          "الانتشار"
        ],
        "source": "Junqueira's Basic Histology: Text and Atlas, 16th ed., Ch. 17: The Respiratory System (McGraw Hill, 2021)",
        "external_id": "human-anaphys-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-022",
        "question_text": "في الاقتران بين الإثارة والانقباض في العضلة الهيكلية، ما الدور المباشر لمستقبلات الديهيدروبيريدين في النبيبات المستعرضة؟",
        "options": [
          "تحلل الأستيل كولين في الشق المشبكي",
          "تستشعر تغير الجهد وتغيّر بوابات مستقبلات الريانودين في الشبكة الساركوبلازمية ميكانيكيًا",
          "تضخ Ca2+ من السيتوسول إلى الشبكة باستخدام ATP",
          "ترتبط بالتروبونين C بدل الكالسيوم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يعمل Cav1.1، أو مستقبل الديهيدروبيريدين، حساسًا للجهد في غشاء النبيب T ويرتبط ميكانيكيًا بـRyR1 في الشبكة، فيفتح مخزون الكالسيوم. يرتبط Ca2+ بالتروبونين C ليزيح التروبوميوسين. تعيد مضخة SERCA الكالسيوم إلى الشبكة عند الارتخاء.",
        "difficulty": "high",
        "subcategory": "فيزيولوجيا العضلات",
        "tags": [
          "النبيب T",
          "RyR1",
          "الاقتران الإثاري الانقباضي"
        ],
        "source": "Boron & Boulpaep, Medical Physiology, 3rd ed., Ch. 14: Skeletal Muscle (Elsevier, 2017)",
        "external_id": "human-anaphys-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-023",
        "question_text": "أي مسار تشريحي تسلكه معظم ألياف الإحساس باللمس الدقيق والاهتزاز من الجذع قبل بلوغ القشرة؟",
        "options": [
          "تعبر فور دخول الحبل ثم تصعد في السبيل الشوكي المهادي الأمامي",
          "تتشابك أولًا في القرن الأمامي ثم تنزل إلى المخيخ",
          "تصعد مماثلة الجانب في الأعمدة الخلفية، تتشابك في البصلة، ثم تعبر في الليمينسكوس الإنسي",
          "تصعد في السبيل القشري الشوكي وتعبر في الأهرام"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تدخل الألياف الأولية الأعمدة الخلفية وتصعد في الحزمتين الرشيقة والإسفينية على الجانب نفسه. تتشابك في نواتيهما بالبصلة، وتعبر محاور العصبونات الثانية كألياف مقوسة داخلية لتكوّن الليمينسكوس الإنسي نحو المهاد. يختلف ذلك عن مسار الألم والحرارة الذي يعبر شوكيًا مبكرًا.",
        "difficulty": "high",
        "subcategory": "المسارات العصبية",
        "tags": [
          "الأعمدة الخلفية",
          "الليمينسكوس الإنسي",
          "اللمس الدقيق"
        ],
        "source": "Snell's Clinical Neuroanatomy, 9th ed., Ch. 4: Ascending Tracts of the Spinal Cord (Wolters Kluwer, 2019)",
        "external_id": "human-anaphys-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-024",
        "question_text": "أي ترتيب صحيح لمرور الصفراء من الخلايا الكبدية نحو الاثني عشر خارج أوقات التخزين؟",
        "options": [
          "جيبانيات كبدية ثم وريد بابي ثم قناة مرارية",
          "قنيات صفراوية ثم قنوات داخل الكبد ثم القناتان الكبديتان فالكبدية المشتركة ثم الصفراوية المشتركة",
          "قناة بنكرياسية ثم قناة مرارية ثم وريد كبدي",
          "مسافة ديسه ثم الوريد المركزي ثم أمبولة فاتر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تفرز الخلايا الكبدية الصفراء إلى القنيات الواقعة بين الخلايا، وتسير بعكس اتجاه الدم نحو قنوات متزايدة الحجم ثم القناتين الكبديتين اليمنى واليسرى والكبدية المشتركة. باتحادها مع القناة المرارية تتكون القناة الصفراوية المشتركة التي تنتهي عادةً عند الحليمة الكبرى مع القناة البنكرياسية.",
        "difficulty": "high",
        "subcategory": "تشريح الكبد والطرق الصفراوية",
        "tags": [
          "الصفراء",
          "القنيات الصفراوية",
          "القناة الصفراوية المشتركة"
        ],
        "source": "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed., Ch. 66: Liver and Biliary Tract (Elsevier, 2020)",
        "external_id": "human-anaphys-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "human-anaphys-025",
        "question_text": "كيف يحافظ المنعكس الضغطي الشرياني سريعًا على الضغط عند ارتفاعه المفاجئ لدى شخص سليم؟",
        "options": [
          "يزيد إطلاق مستقبلات الجيب السباتي وقوس الأبهر، فيقل الخرج الودي ويزداد المبهمي",
          "يقل إطلاق المستقبلات، فيزداد الودي وتقبض الأوعية",
          "يزيد الرينين فورًا فيتكون أنجيوتنسين II",
          "تنبه مستقبلات الحجم الأذينية إفراز الفازوبريسين"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمدد الضغط المرتفع مستقبلات الضغط في الجيب السباتي وقوس الأبهر، فيزداد تواترها عبر العصبين IX وX إلى النواة المفردة. تخفض المراكز البصلية النشاط الودي وتزيد النغمة المبهمية، فيتباطأ القلب ويقل التقلص وتتوسع أوعية المقاومة؛ وهو ضبط سريع لا طويل الأمد.",
        "difficulty": "high",
        "subcategory": "تنظيم ضغط الدم",
        "tags": [
          "المنعكس الضغطي",
          "الجيب السباتي",
          "الجهاز الودي"
        ],
        "source": "Guyton and Hall Textbook of Medical Physiology, 14th ed., Ch. 18: Nervous Regulation of the Circulation and Rapid Control of Arterial Pressure (Elsevier, 2021)",
        "external_id": "human-anaphys-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-science-theoretical-physics-chemical-reactions-02",
    "user_id": "system",
    "title": "الفيزياء النظرية والتفاعلات الكيميائية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "علوم وطب",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في تجربة الشقين بإلكترونات مفردة، ما التغيير الذي يزيل نمط التداخل حتى إن لم تُقرأ نتيجة القياس لاحقًا؟",
        "options": [
          "إتاحة معلومة قابلة للتمييز عن الشق الذي مر منه الإلكترون",
          "خفض شدة الحزمة مع إبقاء التماسك",
          "زيادة المسافة إلى الشاشة فقط",
          "استبدال الشاشة بكاشف أعلى كفاءة دون كشف المسار"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينشأ التداخل من جمع سعات مسارين غير قابلين للتمييز. إذا تشابكت حالة الإلكترون مع واسم يحمل معلومة المسار، تصبح حالتا المسار قابلتين للتمييز وتضمحل الحدود التداخلية عند تجاهل الواسم؛ ليست ضرورة أن يطالع إنسان النتيجة.",
        "source": "Feynman, Leighton & Sands — The Feynman Lectures on Physics, Vol. III, Ch. 1: https://www.feynmanlectures.caltech.edu/III_01.html",
        "difficulty": "medium",
        "subcategory": "ميكانيكا الكم",
        "tags": [
          "التداخل",
          "معلومة المسار",
          "التماسك"
        ],
        "external_id": "physchem-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تناظر مستمر يقود، وفق مبرهنة نويثر، إلى حفظ الطاقة؟",
        "options": [
          "تناظر الدوران المكاني",
          "تناظر الانعكاس المرآتي",
          "ثبات قوانين النظام تحت الإزاحة الزمنية",
          "تناظر تبديل الجسيمات المتطابقة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إذا لم يعتمد الفعل صراحة على اختيار مبدأ الزمن، أي بقي ثابتًا تحت الإزاحات الزمنية المستمرة، تعطي مبرهنة نويثر كمية محفوظة هي الطاقة. تناظر الدوران يقترن بدلًا من ذلك بحفظ الزخم الزاوي.",
        "source": "MIT OpenCourseWare — Classical Mechanics III, Noether's Theorem: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/",
        "difficulty": "medium",
        "subcategory": "التناظرات وقوانين الحفظ",
        "tags": [
          "نويثر",
          "الطاقة",
          "التناظر الزمني"
        ],
        "external_id": "physchem-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في النسبية الخاصة، حدثان متباعدان مكانيًا ولهما فاصل زمكاني شبيه بالفضاء. ما النتيجة الصحيحة؟",
        "options": [
          "يمكن لإشارة ضوئية أن تصل بينهما",
          "يتفق جميع المراقبين على ترتيبهما الزمني",
          "يمكن اختيار إطار قصوري يكونان فيه متزامنين",
          "لا يمكن أن يتغير ترتيب أي حدثين تحت تحويل لورنتز"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "للفاصل الشبيه بالفضاء يمكن إيجاد إطار قصوري يجعل فرق الزمن صفرًا، كما قد يختلف ترتيب الحدثين بين الأطر. ولا تستطيع إشارة سببية لا تتجاوز سرعة الضوء وصل الحدثين.",
        "source": "Einstein Online, Max Planck Institute — Spacetime interval: https://www.einstein-online.info/en/spotlight/light_cones/",
        "difficulty": "medium",
        "subcategory": "النسبية الخاصة",
        "tags": [
          "الفاصل الزمكاني",
          "التزامن",
          "السببية"
        ],
        "external_id": "physchem-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الدليل التجريبي المباشر الذي أعلن مرصدا LIGO اكتشافه أول مرة عام 2016 عن حدث وقع في 2015؟",
        "options": [
          "جسيمات غرافيتون منفردة",
          "إشعاع هوكينغ من ثقب أسود فلكي",
          "طاقة مظلمة متذبذبة",
          "تموجات زمكانية من اندماج ثقبين أسودين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت الإشارة GW150914 موجة ثقالية ناتجة من التحام ثقبين أسودين، قيس أثرها كتغير بالغ الصغر في طولي ذراعي مقياسي التداخل. لم تكن رصدًا لكمّ منفرد من مجال الجاذبية ولا لإشعاع هوكينغ.",
        "source": "LIGO Scientific Collaboration — Observation of Gravitational Waves from a Binary Black Hole Merger, Physical Review Letters 116, 061102 (2016): https://doi.org/10.1103/PhysRevLett.116.061102",
        "difficulty": "medium",
        "subcategory": "الجاذبية التجريبية",
        "tags": [
          "LIGO",
          "GW150914",
          "موجات الجاذبية"
        ],
        "external_id": "physchem-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في النموذج القياسي، أي حقل يمنح بوزوني W وZ كتلتيهما عبر الكسر التلقائي للتناظر الكهروضعيف؟",
        "options": [
          "حقل هيغز",
          "حقل الغلوون",
          "حقل الفوتون",
          "حقل النيوترينو"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تأخذ مركبة حقل هيغز قيمة توقع فراغية غير صفرية، فتولد حدود كتلة لـW وZ مع بقاء الفوتون عديم الكتلة. اكتشاف بوزون هيغز دعم وجود الإثارة الكمية للحقل، ولا يعني أن كل كتلة المادة مصدرها الوحيد هيغز.",
        "source": "CERN — The Higgs boson: https://home.cern/science/physics/higgs-boson",
        "difficulty": "medium",
        "subcategory": "فيزياء الجسيمات",
        "tags": [
          "هيغز",
          "التناظر الكهروضعيف",
          "W وZ"
        ],
        "external_id": "physchem-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لتفاعل أولي واحد، ما أثر رفع درجة الحرارة عادة في ثابت السرعة وفق معادلة أرهينيوس إذا بقي عامل التردد وطاقة التنشيط تقريبًا ثابتين؟",
        "options": [
          "ينخفض لأن التصادمات تصبح أقل",
          "يبقى ثابتًا لأن ثابت السرعة لا يعتمد على الحرارة",
          "يتغير فقط إذا كان التفاعل طاردًا للحرارة",
          "يزداد بسبب ازدياد العامل الأسي exp(−Ea/RT)"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في k=A exp(−Ea/RT)، يؤدي رفع T إلى جعل الأس السالب أقل مقدارًا، فيزداد k عادة. هذا حكم حركي ولا يعتمد في ذاته على كون التفاعل الكلي طاردًا أو ماصًا للحرارة.",
        "source": "IUPAC Gold Book — Arrhenius equation: https://goldbook.iupac.org/terms/view/A00446",
        "difficulty": "medium",
        "subcategory": "الحركية الكيميائية",
        "tags": [
          "أرهينيوس",
          "طاقة التنشيط",
          "ثابت السرعة"
        ],
        "external_id": "physchem-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أُضيف حفاز إلى تفاعل عكوس في وعاء مغلق عند ثبات الحرارة. أي عبارة صحيحة عند بلوغ الاتزان؟",
        "options": [
          "يزيد ثابت الاتزان",
          "يجعل طاقة غيبس القياسية سالبة",
          "يرفع مردود النواتج دائمًا",
          "يخفض طاقة تنشيط المسارين الأمامي والعكسي ويسرّع بلوغ الاتزان دون تغيير موضعه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يوفر الحفاز مسارًا بديلًا أقل حاجزًا للتفاعل في الاتجاهين، فيسرع الوصول إلى الاتزان. أما ثابت الاتزان وموضعه فيحددهما الديناميكا الحرارية ودرجة الحرارة، فلا يغيرهما الحفاز.",
        "source": "IUPAC Gold Book — catalyst: https://goldbook.iupac.org/terms/view/C00876",
        "difficulty": "medium",
        "subcategory": "الحفز والاتزان",
        "tags": [
          "حفاز",
          "الاتزان",
          "طاقة التنشيط"
        ],
        "external_id": "physchem-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لتفاعل عند ثبوت الضغط والحرارة، ماذا يعني أن ΔG للتغير المحدد سالبة؟",
        "options": [
          "أن التفاعل سريع حتمًا",
          "أن الاتجاه الأمامي مفضل ترموديناميكيًا للتراكيب الحالية، دون تحديد سرعته",
          "أن التفاعل طارد للحرارة حتمًا",
          "أن النظام بلغ الاتزان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تشير ΔG السالبة إلى إمكانية التقدم التلقائي في الاتجاه الأمامي عند الشروط والتركيب الحاليين. لكنها لا تصف حاجز التنشيط، ولذلك قد يكون التفاعل بطيئًا جدًا؛ وعند الاتزان تكون ΔG للتقدم التفاضلي صفرًا.",
        "source": "IUPAC Gold Book — Gibbs energy of reaction: https://goldbook.iupac.org/terms/view/G02691",
        "difficulty": "medium",
        "subcategory": "الديناميكا الحرارية الكيميائية",
        "tags": [
          "طاقة غيبس",
          "التلقائية",
          "سرعة التفاعل"
        ],
        "external_id": "physchem-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في منحنى طاقة الوضع لتفاعل أولي، ما الذي تمثله الحالة الانتقالية؟",
        "options": [
          "نوعًا مستقرًا يمكن عزله دائمًا",
          "أعلى نقطة على مسار أقل طاقة بين حوضي المتفاعلات والنواتج",
          "أدنى نقطة بين المتفاعلات والنواتج",
          "النواتج بعد اكتمال الاتزان"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحالة الانتقالية بنية حرجة عند قمة حاجز الطاقة على إحداثي التفاعل، ولها اتجاه واحد غير مستقر نحو المتفاعلات أو النواتج. تختلف عن الوسيط الذي يقع عند حد أدنى محلي وقد يمتلك عمرًا قابلًا للقياس.",
        "source": "IUPAC Gold Book — transition state: https://goldbook.iupac.org/terms/view/T06468",
        "difficulty": "medium",
        "subcategory": "آليات التفاعل",
        "tags": [
          "الحالة الانتقالية",
          "الوسيط",
          "سطح الطاقة"
        ],
        "external_id": "physchem-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في تفاعل أكسدة واختزال، ما الوصف الصحيح للعامل المؤكسد؟",
        "options": [
          "يفقد إلكترونات ويُختزل",
          "يكتسب بروتونات فقط ولا تتغير حالة أكسدته",
          "يخفض طاقة التنشيط دون أن يُستهلك",
          "يكتسب إلكترونات ويُختزل"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العامل المؤكسد يؤكسد النوع الآخر بقبول إلكتروناته، ولذلك يتعرض هو للاختزال وتنخفض حالة أكسدته. أما النوع الذي يمنح الإلكترونات فهو العامل المختزل ويتأكسد.",
        "source": "IUPAC Gold Book — oxidizing agent: https://goldbook.iupac.org/terms/view/O04362",
        "difficulty": "medium",
        "subcategory": "الكيمياء الكهربية",
        "tags": [
          "أكسدة واختزال",
          "عامل مؤكسد",
          "إلكترونات"
        ],
        "external_id": "physchem-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا لا تسمح نظرية بيل بإبقاء كل من المحلية والواقعية المحددة مسبقًا مع إعادة إنتاج جميع تنبؤات ميكانيكا الكم؟",
        "options": [
          "لأن مبدأ عدم اليقين يمنع أي قياس متزامن",
          "لأن التشابك يرسل رسائل أسرع من الضوء",
          "لأن نظريات المتغيرات الخفية المحلية تخضع لمتباينات تنتهكها ترابطات كمومية مقاسة",
          "لأن معادلة شرودنغر غير خطية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 55,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اشتق بيل قيودًا إحصائية تحققها فئة النظريات ذات المتغيرات الخفية المحلية. تنتهك التجارب الملائمة هذه القيود بما يوافق الكم؛ لكن الترابط غير المحلي لا يتيح وحده إرسال معلومات قابلة للتحكم أسرع من الضوء.",
        "source": "Bell, J. S. — On the Einstein Podolsky Rosen paradox, Physics 1, 195–200 (1964): https://cds.cern.ch/record/111654/files/vol1p195-200_001.pdf",
        "difficulty": "high",
        "subcategory": "أسس ميكانيكا الكم",
        "tags": [
          "مبرهنة بيل",
          "المحلية",
          "التشابك"
        ],
        "external_id": "physchem-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نظرية الحقول الكمية، ماذا يعني أن اقترانًا «يجري» مع مقياس الطاقة؟",
        "options": [
          "أن ثابت الاقتران يتغير مع مقياس إعادة التطبيع بسبب التقلبات الكمية",
          "أن الشحنة الكهربائية لا تُحفظ",
          "أن سرعة الضوء تعتمد على طاقة الجسيم",
          "أن قيمة الاقتران تتذبذب دوريًا مع الزمن المختبري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصف مجموعة إعادة التطبيع اعتماد المعلمات الفعالة، ومنها الاقتران، على مقياس الطاقة الذي تُفحص عنده العملية. يعكس ذلك تأثير استقطاب الفراغ والتقلبات الافتراضية، ولا يعني خرق حفظ الشحنة.",
        "source": "Particle Data Group — Quantum Chromodynamics review: https://pdg.lbl.gov/2024/reviews/rpp2024-rev-qcd.pdf",
        "difficulty": "high",
        "subcategory": "نظرية الحقول الكمية",
        "tags": [
          "إعادة التطبيع",
          "الاقتران الجاري",
          "مقياس الطاقة"
        ],
        "external_id": "physchem-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الخاصية المميزة للحرية التقاربية في الديناميكا اللونية الكمية QCD؟",
        "options": [
          "يزداد الاقتران القوي بلا حد عند الطاقات العالية",
          "تصبح الغلوونات عديمة التفاعل عند جميع الطاقات",
          "يضعف الاقتران القوي عند المسافات القصيرة أو انتقال الزخم الكبير",
          "تتحول الكواركات إلى جسيمات عديمة الكتلة حتمًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إشارة دالة بيتا في QCD تجعل الاقتران الفعال أصغر عند مقاييس الطاقة العالية، فيمكن استخدام الاضطراب لوصف التصادمات الصلبة. لا ينفي ذلك الحصر عند المقاييس المنخفضة، ولا يجعل التفاعل منعدمًا تمامًا.",
        "source": "Particle Data Group — Quantum Chromodynamics review: https://pdg.lbl.gov/2024/reviews/rpp2024-rev-qcd.pdf",
        "difficulty": "high",
        "subcategory": "الديناميكا اللونية الكمية",
        "tags": [
          "QCD",
          "الحرية التقاربية",
          "الكواركات"
        ],
        "external_id": "physchem-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي رصد يثبت أن النيوترينوات ذات النكهات المختلفة لا يمكن أن تكون جميعها حالات كتلة متطابقة عديمة الكتلة؟",
        "options": [
          "تذبذب النيوترينو مع المسافة والطاقة",
          "إنتاج أزواج إلكترون-بوزيترون",
          "انحلال البروتون",
          "حيود النيوترونات البلوري"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتطلب تغير احتمال النكهة فروقًا في مربعات كتل حالات الانتشار ومزجًا غير صفري بينها. تقيس تجارب التذبذب هذه الفروق، لكنها لا تحدد وحدها الكتلة المطلقة لكل نيوترينو.",
        "source": "Particle Data Group — Neutrino Masses, Mixing, and Oscillations: https://pdg.lbl.gov/2024/reviews/rpp2024-rev-neutrino-mixing.pdf",
        "difficulty": "high",
        "subcategory": "فيزياء النيوترينو",
        "tags": [
          "تذبذب النيوترينو",
          "مزج النكهات",
          "الكتلة"
        ],
        "external_id": "physchem-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في النسبية العامة، ماذا يقرر مبدأ التكافؤ محليًا لمراقب في سقوط حر ضمن مجال جاذبية منتظم تقريبًا؟",
        "options": [
          "يمكن جعل قوانين الفيزياء محليًا شبيهة بإطار قصوري، مع بقاء التأثيرات المدّية المرتبطة بالانحناء",
          "يمكن إزالة جميع آثار الجاذبية عبر منطقة ممتدة مهما كان انحناؤها",
          "تختفي الجاذبية عالميًا بتغيير الإحداثيات",
          "تتساوى كل الحقول الجاذبية في شدتها"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمكن في جوار صغير لمراقب ساقط حر اختيار إطار محلي قصوري تزول فيه عجلة الجاذبية المنتظمة. لكن مشتقات المجال، أي قوى المد والجزر التي يقيسها انحناء ريمان، لا يمكن حذفها على منطقة منتهية إذا كان الزمكان منحنيًا.",
        "source": "Einstein Online, Max Planck Institute — The equivalence principle: https://www.einstein-online.info/en/spotlight/equivalence_principle/",
        "difficulty": "high",
        "subcategory": "النسبية العامة",
        "tags": [
          "مبدأ التكافؤ",
          "السقوط الحر",
          "قوى المد"
        ],
        "external_id": "physchem-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة تميز أفق الحدث عن التفرد في حل شفارزشيلد المثالي؟",
        "options": [
          "كلاهما تفرد انحناء فيزيائي",
          "الأفق سطح مادي صلب",
          "التفرد يقع دائمًا خارج الأفق",
          "أفق الحدث حد سببي قد يكون منتظمًا محليًا، بينما يتباعد الانحناء عند التفرد المركزي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اللانهاية الظاهرية في إحداثيات شفارزشيلد عند الأفق أثر إحداثي يزول بإحداثيات ملائمة، ويمكن للعابر ألا يلحظ ظاهرة محلية خاصة هناك. أما r=0 في الحل الكلاسيكي فيتميز بتباعد ثوابت الانحناء ويمثل تفردًا حقيقيًا.",
        "source": "Carroll, S. — Lecture Notes on General Relativity, Ch. 7 (arXiv:gr-qc/9712019): https://arxiv.org/abs/gr-qc/9712019",
        "difficulty": "high",
        "subcategory": "الثقوب السوداء",
        "tags": [
          "أفق الحدث",
          "تفرد",
          "شفارزشيلد"
        ],
        "external_id": "physchem-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نموذج التضخم الكوني البطيء، ما الدور النظري الأساسي لمرحلة التمدد شبه الأسي؟",
        "options": [
          "إنتاج العناصر الثقيلة داخل النجوم",
          "جعل مناطق كانت متصلة سببيًا تتمدد إلى مقاييس كونية وتوليد بذور اضطرابات من تقلبات كمية",
          "إثبات أن الكون بدأ من لا شيء",
          "إلغاء الحاجة إلى المادة المظلمة تجريبيًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 55,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمدد التضخم رقعة صغيرة متجانسة سببيًا إلى حجم هائل، فيعالج مشكلة الأفق ضمن النموذج، كما يمد تقلبات كمية أولية لتصبح بذور بنية واسعة النطاق. هذه آلية نموذجية تدعمها بصمات رصدية، وليست رصدًا مباشرًا لحقل تضخم بعينه.",
        "source": "Planck Collaboration — Planck 2018 results. X. Constraints on inflation, Astronomy & Astrophysics 641, A10 (2020): https://doi.org/10.1051/0004-6361/201833887",
        "difficulty": "high",
        "subcategory": "علم الكون النظري",
        "tags": [
          "التضخم",
          "مشكلة الأفق",
          "التقلبات الأولية"
        ],
        "external_id": "physchem-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يُعد إشعاع الجسم الأسود حاسمًا تاريخيًا لنشأة التكميم؟",
        "options": [
          "لأن قانون رايلي–جينز الكلاسيكي يؤدي إلى كارثة فوق بنفسجية، بينما افترض بلانك تبادل الطاقة بحزم",
          "لأن الفيزياء الكلاسيكية تنبأت بطيف مطابق تمامًا",
          "لأنه أثبت وجود النيوترينو",
          "لأنه قاس انحناء الزمكان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يؤدي توزيع تساوي الطاقة الكلاسيكي إلى كثافة طاقة تتباعد عند الترددات العالية، خلاف القياس. أعاد قانون بلانك إنتاج الطيف بافتراض عناصر طاقة تتناسب مع التردد، فكان خطوة تأسيسية نحو نظرية الكم.",
        "source": "NIST — CODATA Value: Planck constant and historical context: https://physics.nist.gov/cgi-bin/cuu/Value?h",
        "difficulty": "high",
        "subcategory": "نشأة نظرية الكم",
        "tags": [
          "الجسم الأسود",
          "بلانك",
          "الكارثة فوق البنفسجية"
        ],
        "external_id": "physchem-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لتفاعل مركب، لماذا لا يجوز عادة استنتاج قانون السرعة من المعادلة الكيميائية الإجمالية الموزونة وحدها؟",
        "options": [
          "لأن حفظ الكتلة لا ينطبق على الآليات",
          "لأن معاملات المعادلة الإجمالية لا تكشف الخطوات الأولية ولا الخطوة المحددة للسرعة",
          "لأن رتبة كل تفاعل تساوي صفرًا",
          "لأن ثابت الاتزان يساوي ثابت السرعة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تختزل المعادلة الإجمالية وسائط وخطوات قد تتحكم في السرعة، لذا يحدد قانون السرعة تجريبيًا أو يشتق من آلية متسقة. فقط في خطوة أولية يمكن ربط الأسس عادة بالستوكيومترية الجزيئية لتلك الخطوة.",
        "source": "IUPAC Gold Book — rate law: https://goldbook.iupac.org/terms/view/R05141",
        "difficulty": "high",
        "subcategory": "حركية الآليات",
        "tags": [
          "قانون السرعة",
          "آلية التفاعل",
          "الخطوة الأولية"
        ],
        "external_id": "physchem-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في تقريب الحالة المستقرة لوسيط تفاعلي قصير العمر، ما الفرض المستخدم بعد طور ابتدائي وجيز؟",
        "options": [
          "تركيز الوسيط يساوي صفرًا تمامًا",
          "الوسيط في اتزان حراري مع النواتج دائمًا",
          "كل خطوة في الآلية لها ثابت السرعة نفسه",
          "معدل تكوّن الوسيط يقارب معدل استهلاكه، فيكون مشتق تركيزه الزمني قريبًا من الصفر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يفترض التقريب غياب الوسيط، بل ثبات تركيزه تقريبًا لأن إنتاجه واستهلاكه يتوازنان حركيًا خلال معظم المسار. وهو مختلف عن فرض الاتزان المسبق الذي يشترط اتزان خطوة عكوسة سريعة.",
        "source": "IUPAC Gold Book — steady state approximation: https://goldbook.iupac.org/terms/view/S05960",
        "difficulty": "high",
        "subcategory": "الحركية المتقدمة",
        "tags": [
          "الحالة المستقرة",
          "وسيط تفاعلي",
          "اشتقاق قانون السرعة"
        ],
        "external_id": "physchem-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نظرية ماركوس لانتقال الإلكترون، ماذا تتنبأ «المنطقة المعكوسة» عندما تصبح القوة الدافعة الطاردة كبيرة جدًا؟",
        "options": [
          "يزداد معدل الانتقال إلى ما لا نهاية",
          "قد ينخفض معدل انتقال الإلكترون رغم ازدياد طردية التفاعل",
          "تختفي طاقة إعادة التنظيم",
          "يتحول انتقال الإلكترون إلى تفاعل نووي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 55,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تعتمد طاقة التنشيط في نموذج ماركوس على القوة الدافعة وطاقة إعادة التنظيم. بعد النقطة المثلى، يؤدي جعل ΔG أكثر سلبية إلى زيادة الحاجز مجددًا وانخفاض المعدل؛ وقد رُصد هذا السلوك في أنظمة انتقال إلكتروني ملائمة.",
        "source": "Marcus, R. A. — Electron transfer reactions in chemistry: theory and experiment, Reviews of Modern Physics 65, 599 (1993): https://doi.org/10.1103/RevModPhys.65.599",
        "difficulty": "high",
        "subcategory": "انتقال الإلكترون",
        "tags": [
          "نظرية ماركوس",
          "المنطقة المعكوسة",
          "إعادة التنظيم"
        ],
        "external_id": "physchem-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق مبدأ هاموند، إذا كانت خطوة أولية شديدة الطرد للحرارة، إلى أي طرف تميل بنية حالتها الانتقالية أن تكون أقرب؟",
        "options": [
          "النواتج لأنها الأكثر استقرارًا",
          "وسيط منفصل لا علاقة له بالطرفين",
          "المتفاعلات لأن الحالة الانتقالية المبكرة أقرب طاقة وبنية إليها",
          "لا يمكن للمبدأ أن يقدم أي توقع نوعي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يربط مبدأ هاموند تشابه البنية بقرب الطاقة: في خطوة طاردة للحرارة تكون الحالة الانتقالية عادة مبكرة وأقرب في الطاقة والبنية إلى المتفاعلات. هذا استدلال نوعي وليس تصويرًا مباشرًا لبنية الحالة الانتقالية.",
        "source": "Hammond, G. S. — A Correlation of Reaction Rates, Journal of the American Chemical Society 77, 334–338 (1955): https://doi.org/10.1021/ja01607a027",
        "difficulty": "high",
        "subcategory": "الكيمياء الفيزيائية العضوية",
        "tags": [
          "مبدأ هاموند",
          "الحالة الانتقالية",
          "طارد للحرارة"
        ],
        "external_id": "physchem-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في تفاعل بيريسايكلي حراري، على ماذا تعتمد قواعد وودورد–هوفمان في تقرير المسار المسموح تناظريًا؟",
        "options": [
          "حفظ تناظر المدارات الجزيئية المشغولة أثناء التحول المتضافر",
          "قيمة pH وحدها",
          "وجود جذور حرة في كل الحالات",
          "كون التفاعل طاردًا للحرارة فقط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 55,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصنف القواعد المسارات المتضافرة بحسب إمكان استمرار الترابط المداري دون تقاطعات محرمة تناظريًا، مع اختلاف النتيجة بين الإثارة الحرارية والضوئية. السماح التناظري لا يضمن وحده سرعة عالية أو مردودًا مرتفعًا.",
        "source": "Woodward & Hoffmann — The Conservation of Orbital Symmetry, Angewandte Chemie International Edition 8, 781–853 (1969): https://doi.org/10.1002/anie.196907811",
        "difficulty": "high",
        "subcategory": "التفاعلات البيريسايكلية",
        "tags": [
          "وودورد–هوفمان",
          "تناظر المدارات",
          "تفاعل متضافر"
        ],
        "external_id": "physchem-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا قد يكون نفق البروتون مهمًا في بعض التفاعلات حتى عند طاقات أقل من قمة الحاجز الكلاسيكي؟",
        "options": [
          "لأن البروتون لا يمتلك كتلة",
          "لأن دالة موجته قد تنفذ عبر حاجز محدود، ويزداد الأثر عادة للجسيم الأخف والحاجز الأضيق",
          "لأن حفظ الطاقة يُخرق مؤقتًا",
          "لأن النفق يزيل حاجز الطاقة من سطح الوضع"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يعطي الوصف الكمي احتمال نفاذ غير صفري عبر حاجز محدود دون أن يمتلك الجسيم طاقة كلاسيكية تتجاوز قمته. حساسية الاحتمال للكتلة وعرض الحاجز تفسر آثار النظائر الحركية الكبيرة أحيانًا، مع بقاء حفظ الطاقة قائمًا.",
        "source": "IUPAC Gold Book — tunnelling: https://goldbook.iupac.org/terms/view/T06531",
        "difficulty": "high",
        "subcategory": "الحركية الكمية",
        "tags": [
          "النفق الكمي",
          "البروتون",
          "أثر النظائر"
        ],
        "external_id": "physchem-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في حسابات نظرية دالة الكثافة DFT، ما العبارة الأدق عن مبرهنتي هوهنبرغ–كوهن؟",
        "options": [
          "تقدمان الصيغة الدقيقة العامة الواضحة لدالة التبادل والارتباط",
          "تثبتان أن جميع الحالات المثارة تحسب بلا تقريب",
          "تقرران أن كثافة الحالة الأرضية تحدد الجهد الخارجي وخواص الحالة الأرضية، لكن التقريبات العملية للدالة تبقى ضرورية",
          "تلغيان تآثر الإلكترونات وتحولان النظام إلى غاز مثالي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 60,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تؤسس المبرهنتان أن كثافة الحالة الأرضية متغير كافٍ من حيث المبدأ وأن الطاقة تبلغ حدها الأدنى عند الكثافة الصحيحة. لكنهما لا توفران الشكل العملي الدقيق لدالة التبادل والارتباط؛ لذلك تعتمد نتائج DFT الحسابية على اختيار تقريبها والتحقق من ملاءمته.",
        "source": "Hohenberg & Kohn — Inhomogeneous Electron Gas, Physical Review 136, B864 (1964): https://doi.org/10.1103/PhysRev.136.B864",
        "difficulty": "high",
        "subcategory": "الكيمياء الكمومية",
        "tags": [
          "DFT",
          "هوهنبرغ–كوهن",
          "كثافة الإلكترون"
        ],
        "external_id": "physchem-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-specialized-07-01",
    "user_id": "system",
    "title": "بلاغة وإعراب وشعر جاهلي",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أدب ولغة عربية",
    "language": "ar",
    "quiz_difficulty": "medium_high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "id": "arabic-rhetoric-001",
        "question_text": "في قول امرئ القيس: «وليلٍ كموج البحر أرخى سدوله»، ما الصورة البيانية في تشبيه الليل بموج البحر؟",
        "options": [
          "استعارة مكنية",
          "تشبيه بليغ",
          "تشبيه مرسل مجمل",
          "كناية عن صفة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ذُكرت أداة التشبيه «الكاف»، فالتشبيه مرسل، وحُذف وجه الشبه، فهو مجمل. والمشبَّه الليل والمشبَّه به موج البحر في تراكب ظلمته وهوله.",
        "difficulty": "medium",
        "subcategory": "علم البيان",
        "tags": [
          "التشبيه",
          "امرؤ القيس",
          "معلقة"
        ],
        "source": "الزوزني، شرح المعلقات السبع، شرح معلقة امرئ القيس عند البيت: «وليل كموج البحر أرخى سدوله»؛ والخطيب القزويني، الإيضاح في علوم البلاغة، باب التشبيه: باعتبار الأداة والوجه",
        "external_id": "arabic-rhetoric-001",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-002",
        "question_text": "في الجملة «رأيتُ أسدًا يحمل سيفًا في المعركة»، والمراد رجل شجاع، ما نوع المجاز؟",
        "options": [
          "استعارة تصريحية",
          "استعارة مكنية",
          "مجاز مرسل بعلاقة الجزئية",
          "كناية عن موصوف"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "شُبّه الرجل الشجاع بالأسد، ثم حُذف المشبَّه وصرّح بلفظ المشبَّه به «أسد»، ولذلك فهي استعارة تصريحية، والقرينة المانعة من إرادة الحيوان حمل السيف في المعركة.",
        "difficulty": "medium",
        "subcategory": "علم البيان",
        "tags": [
          "الاستعارة",
          "المجاز",
          "القرينة"
        ],
        "source": "الخطيب القزويني، الإيضاح في علوم البلاغة، الفن الثاني: علم البيان، القول في الاستعارة التصريحية والمكنية",
        "external_id": "arabic-rhetoric-002",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-003",
        "question_text": "في العبارة «فلان كثير الرماد» عند إرادة وصفه بالكرم، كيف يصنفها علم البيان؟",
        "options": [
          "كناية عن موصوف",
          "مجاز مرسل سببي",
          "استعارة تمثيلية",
          "كناية عن صفة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كثرة الرماد دليل على كثرة إيقاد النار للطبخ وكثرة الضيوف، فينتقل الذهن منها إلى صفة الكرم مع جواز المعنى الأصلي؛ لذا فهي كناية عن صفة.",
        "difficulty": "medium",
        "subcategory": "علم البيان",
        "tags": [
          "الكناية",
          "الكرم",
          "الصفة"
        ],
        "source": "عبد القاهر الجرجاني، دلائل الإعجاز، فصل في الكناية والتعريض؛ والخطيب القزويني، الإيضاح في علوم البلاغة، باب الكناية وأقسامها",
        "external_id": "arabic-rhetoric-003",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-004",
        "question_text": "ما إعراب «العلمَ» في قولنا: «إنَّ العلمَ نورٌ»؟",
        "options": [
          "خبر إن منصوب",
          "اسم إن منصوب",
          "مبتدأ مرفوع",
          "مفعول به منصوب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 20,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«إنَّ» من الحروف الناسخة التي تنصب الاسم وترفع الخبر؛ فـ«العلمَ» اسمها منصوب بالفتحة، و«نورٌ» خبرها مرفوع.",
        "difficulty": "medium",
        "subcategory": "النواسخ",
        "tags": [
          "إن وأخواتها",
          "الإعراب",
          "الحروف الناسخة"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب إن وأخواتها",
        "external_id": "arabic-rhetoric-004",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-005",
        "question_text": "في «كان الجوُّ معتدلًا»، ما الوظيفة الإعرابية لكلمة «معتدلًا»؟",
        "options": [
          "خبر كان منصوب",
          "حال منصوب",
          "مفعول به ثانٍ",
          "تمييز منصوب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 20,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«كان» فعل ناقص يرفع الاسم وينصب الخبر؛ فـ«الجوُّ» اسم كان مرفوع، و«معتدلًا» خبرها منصوب.",
        "difficulty": "medium",
        "subcategory": "النواسخ",
        "tags": [
          "كان وأخواتها",
          "الخبر",
          "الإعراب"
        ],
        "source": "ابن هشام الأنصاري، أوضح المسالك إلى ألفية ابن مالك، باب كان وأخواتها",
        "external_id": "arabic-rhetoric-005",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-006",
        "question_text": "في «جاء الطالبان كلاهما»، ما إعراب «كلاهما» إذا أريد بها توكيد الطالبين؟",
        "options": [
          "بدل منصوب بالياء",
          "حال مرفوعة بالألف",
          "فاعل ثانٍ مرفوع",
          "توكيد معنوي مرفوع بالألف وهو مضاف"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«كلا» من ألفاظ التوكيد المعنوي إذا أضيفت إلى ضمير يطابق المؤكَّد. وهي هنا تابعة لـ«الطالبان» في الرفع، وعلامة رفعها الألف لأنها ملحقة بالمثنى، و«هما» مضاف إليه.",
        "difficulty": "medium",
        "subcategory": "التوابع",
        "tags": [
          "التوكيد",
          "كلا",
          "المثنى"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب التوكيد، مبحث كلا وكلتا",
        "external_id": "arabic-rhetoric-006",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-007",
        "question_text": "أي بيت يفتتح به امرؤ القيس معلقته؟",
        "options": [
          "أمِن أمِّ أوفى دمنةٌ لم تكلَّمِ",
          "هل غادر الشعراء من متردَّمِ",
          "لخولة أطلالٌ ببرقة ثهمدِ",
          "قِفا نبكِ من ذكرى حبيبٍ ومنزلِ"
        ],
        "correct_index": 3,
        "time_limit_seconds": 25,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "معلقة امرئ القيس تفتتح بـ«قفا نبك من ذكرى حبيب ومنزلِ». أما الأبيات الأخرى فهي مطالع معلقات زهير وعنترة وطرفة على الترتيب.",
        "difficulty": "medium",
        "subcategory": "الشعر الجاهلي",
        "tags": [
          "المعلقات",
          "امرؤ القيس",
          "المطالع"
        ],
        "source": "الزوزني، شرح المعلقات السبع، مطلع معلقة امرئ القيس ومطالع معلقات زهير وعنترة وطرفة",
        "external_id": "arabic-rhetoric-007",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-008",
        "question_text": "من قائل البيت الجاهلي: «هل غادر الشعراء من متردَّمِ أم هل عرفت الدار بعد توهُّمِ»؟",
        "options": [
          "عنترة بن شداد",
          "زهير بن أبي سلمى",
          "لبيد بن ربيعة",
          "الحارث بن حلزة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 25,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "البيت مطلع معلقة عنترة بن شداد. و«المتردَّم» الموضع المسترقع أو المستصلح، وفي المطلع تساؤل عن بقاء معنى لم يسبق الشعراء إليه.",
        "difficulty": "medium",
        "subcategory": "الشعر الجاهلي",
        "tags": [
          "عنترة",
          "المعلقة",
          "المطلع"
        ],
        "source": "الزوزني، شرح المعلقات السبع، شرح معلقة عنترة بن شداد، البيت الأول",
        "external_id": "arabic-rhetoric-008",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-009",
        "question_text": "أي غرض يهيمن على مقطع زهير: «ومن لا يَذُدْ عن حوضه بسلاحه يُهدَّمْ، ومن لا يَظلم الناس يُظلمِ»؟",
        "options": [
          "النسيب ووصف المحبوبة",
          "الاعتذار إلى الملك",
          "الحكمة المستخلصة من خبرة الحرب والمجتمع",
          "وصف الناقة في الرحلة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينتمي البيت إلى سلسلة حكم في معلقة زهير تصوغ خبرته بطباع الناس والحرب في قضايا شرطية عامة، وليس إلى النسيب أو الرحلة أو الاعتذار.",
        "difficulty": "medium",
        "subcategory": "أغراض الشعر الجاهلي",
        "tags": [
          "زهير",
          "الحكمة",
          "المعلقة"
        ],
        "source": "الزوزني، شرح المعلقات السبع، شرح معلقة زهير بن أبي سلمى عند أبيات «ومن لا يذد عن حوضه...»",
        "external_id": "arabic-rhetoric-009",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-010",
        "question_text": "في قول لبيد: «ألا كلُّ شيءٍ ما خلا اللهَ باطلٌ»، ما إعراب لفظ الجلالة على الوجه الذي تكون فيه «خلا» فعلًا؟",
        "options": [
          "مفعول به منصوب",
          "مستثنى مجرور",
          "فاعل مرفوع",
          "بدل مرفوع"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إذا عُدّت «خلا» فعلًا ماضيًا للاستثناء كان فاعلها ضميرًا مستترًا، ونُصب ما بعدها مفعولًا به؛ لذلك جاء «اللهَ» منصوبًا. أما الجر فيكون عند عدّ «خلا» حرف جر.",
        "difficulty": "medium",
        "subcategory": "الاستثناء",
        "tags": [
          "خلا",
          "لبيد",
          "المفعول به"
        ],
        "source": "ابن هشام الأنصاري، أوضح المسالك إلى ألفية ابن مالك، باب الاستثناء بـخلا وعدا وحاشا؛ وديوان لبيد بن ربيعة، قصيدة «ألا كل شيء ما خلا الله باطل»",
        "external_id": "arabic-rhetoric-010",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-011",
        "question_text": "في قول امرئ القيس: «مِكرٍّ مِفرٍّ مُقبلٍ مُدبرٍ معًا كجلمودِ صخرٍ حطَّه السيلُ من علِ»، ما سر التشبيه في الشطر الثاني؟",
        "options": [
          "تشبيه لون الفرس بلون الصخر فقط",
          "تمثيل هيئة الفرس في سرعة اندفاعه وصلابته بهيئة صخرة يهوي بها السيل",
          "كناية عن بطء الفرس وثقله",
          "مجاز مرسل علاقته المحلية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجه الشبه هيئة منتزعة من أمور: سرعة الانقضاض وقوة الاندفاع واجتماع الحركة والصلابة، لا صفة مفردة كاللون؛ ولذلك يقرأ تشبيهًا تمثيليًا يبرز حركة الفرس.",
        "difficulty": "high",
        "subcategory": "التشبيه التمثيلي",
        "tags": [
          "امرؤ القيس",
          "التشبيه المركب",
          "وصف الفرس"
        ],
        "source": "عبد القاهر الجرجاني، أسرار البلاغة، فصل التشبيه المنتزع من مجموع؛ والزوزني، شرح المعلقات السبع، شرح بيت «مكر مفر...»",
        "external_id": "arabic-rhetoric-011",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-012",
        "question_text": "في «ما محمدٌ إلا رسولٌ»، أي مسلك بلاغي حقق القصر؟",
        "options": [
          "إنما",
          "النفي والاستثناء",
          "تقديم ما حقه التأخير",
          "العطف بـ«بل»"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اجتمع النفي بـ«ما» والاستثناء بـ«إلا»، فقُصر محمد على الرسالة في سياق رد ما قد يتوهم من الخلود. هذا أحد طرق القصر الاصطلاحية، وهو غير القصر بـ«إنما» أو التقديم.",
        "difficulty": "high",
        "subcategory": "علم المعاني",
        "tags": [
          "القصر",
          "النفي والاستثناء",
          "طرق القصر"
        ],
        "source": "الخطيب القزويني، الإيضاح في علوم البلاغة، الفن الأول: علم المعاني، باب القصر وطرقه",
        "external_id": "arabic-rhetoric-012",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-013",
        "question_text": "في قولنا «إياك نعبد»، ما الدلالة البلاغية الأصلية لتقديم المفعول «إياك» على فعله؟",
        "options": [
          "مجرد مراعاة السجع",
          "تحويل الخبر إلى إنشاء طلبي",
          "إفادة الشك في وقوع العبادة",
          "الاختصاص والقصر بحسب المقام"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقديم المعمول الذي حقه التأخير يفيد الاختصاص في هذا المقام: نخصك بالعبادة ولا نعبد غيرك. فالقيمة ناشئة من ترتيب أجزاء الكلام ومقتضى الحال، لا من السجع.",
        "difficulty": "high",
        "subcategory": "التقديم والتأخير",
        "tags": [
          "القصر",
          "تقديم المفعول",
          "النظم"
        ],
        "source": "عبد القاهر الجرجاني، دلائل الإعجاز، باب التقديم والتأخير؛ والخطيب القزويني، الإيضاح، باب أحوال متعلقات الفعل",
        "external_id": "arabic-rhetoric-013",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-014",
        "question_text": "في «زيدٌ طويلُ النجاد» إذا أريد طول قامته، ما سبب عدّ التعبير كناية لا مجازًا مانعًا من الحقيقة؟",
        "options": [
          "لأن لفظ النجاد استُعمل في غير معناه مع قرينة مانعة",
          "لأن المشبه به مذكور والمشبه محذوف",
          "لأن طول النجاد يمكن أن يكون حقيقيًا مع الانتقال منه إلى طول القامة",
          "لأن العلاقة بين اللفظ والمعنى هي الكلية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من فارق الكناية عن المجاز أن إرادة لازم المعنى لا تمنع جواز المعنى الأصلي. فطول حمائل السيف قد يتحقق حقيقة، ويُستدل به على طول القامة؛ فلا توجد قرينة مانعة من الحقيقة كما في المجاز.",
        "difficulty": "high",
        "subcategory": "الكناية والمجاز",
        "tags": [
          "طويل النجاد",
          "الكناية",
          "جواز الحقيقة"
        ],
        "source": "الخطيب القزويني، الإيضاح في علوم البلاغة، باب الكناية، الفرق بين الكناية والمجاز",
        "external_id": "arabic-rhetoric-014",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-015",
        "question_text": "في قولهم «بنى الأميرُ المدينةَ» إذا كان الآمر بالبناء لا المباشر له، ما علاقة المجاز العقلي؟",
        "options": [
          "الإسناد إلى الزمان",
          "الإسناد إلى المكان",
          "الإسناد إلى السببية",
          "المجاز المرسل بعلاقة الجزئية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الفعل أُسند إلى الأمير لأنه سبب البناء بأمره وتمويله، مع أن العمال باشروا الفعل؛ فالمجاز في الإسناد وعلاقته السببية، ولذلك يسمى مجازًا عقليًا.",
        "difficulty": "high",
        "subcategory": "المجاز العقلي",
        "tags": [
          "الإسناد",
          "السببية",
          "المجاز"
        ],
        "source": "الخطيب القزويني، الإيضاح في علوم البلاغة، باب أحوال الإسناد الخبري، المجاز العقلي وعلاقاته",
        "external_id": "arabic-rhetoric-015",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-016",
        "question_text": "في الجملة «ما جاءني من أحدٍ»، ما الوظيفة النحوية لـ«من» وما أثرها في «أحد»؟",
        "options": [
          "حرف جر زائد للتوكيد، و«أحد» فاعل مجرور لفظًا مرفوع محلًا",
          "حرف جر أصلي، و«أحد» مفعول به",
          "اسم شرط جازم، و«أحد» مبتدأ",
          "حرف تبعيض، و«أحد» بدل"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تزاد «من» بعد نفي وقبل نكرة لتأكيد الاستغراق. و«أحد» هو الذي أسند إليه المجيء، فهو فاعل في المحل، لكنه مجرور في اللفظ بـ«من» الزائدة.",
        "difficulty": "high",
        "subcategory": "حروف الجر الزائدة",
        "tags": [
          "من الزائدة",
          "المحل الإعرابي",
          "الاستغراق"
        ],
        "source": "ابن هشام الأنصاري، مغني اللبيب عن كتب الأعاريب، باب الميم: «من»، مواضع زيادتها؛ وابن عقيل، شرح الألفية، باب حروف الجر",
        "external_id": "arabic-rhetoric-016",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-017",
        "question_text": "في «إنْ تدرسْ تنجحْ»، ما الإعراب الأدق للفعلين؟",
        "options": [
          "«تدرسْ» فعل الشرط مجزوم، و«تنجحْ» جوابه مجزوم",
          "كلاهما منصوب بأن مضمرة",
          "الأول مجزوم والثاني مرفوع للاستئناف",
          "الأول مرفوع والثاني مجزوم في جواب الطلب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«إنْ» حرف شرط جازم يجزم فعلين مضارعين: الأول فعل الشرط والثاني جوابه وجزاؤه؛ وعلامة الجزم في كليهما السكون لصحّة الآخر.",
        "difficulty": "high",
        "subcategory": "الشرط والجزم",
        "tags": [
          "إن الشرطية",
          "الجزم",
          "جواب الشرط"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب عوامل الجزم، الجوازم لفعلين",
        "external_id": "arabic-rhetoric-017",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-018",
        "question_text": "في «لا طالبَ علمٍ مهملٌ»، كيف يعرب التركيب «طالبَ علمٍ»؟",
        "options": [
          "اسم لا مبني على الفتح و«علمٍ» نعت",
          "مبتدأ منصوب و«علمٍ» تمييز",
          "منادى مضاف و«علمٍ» مجرور",
          "اسم لا منصوب وهو مضاف، و«علمٍ» مضاف إليه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اسم «لا» النافية للجنس إذا كان مضافًا يكون معربًا منصوبًا، لا مبنيًا على ما ينصب به. لذا «طالبَ» اسم لا منصوب وهو مضاف، و«علمٍ» مضاف إليه، و«مهملٌ» خبر لا.",
        "difficulty": "high",
        "subcategory": "لا النافية للجنس",
        "tags": [
          "لا النافية",
          "الاسم المضاف",
          "الإعراب"
        ],
        "source": "ابن هشام الأنصاري، أوضح المسالك إلى ألفية ابن مالك، باب لا التي لنفي الجنس، أحوال اسمها",
        "external_id": "arabic-rhetoric-018",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-019",
        "question_text": "في «يا طالبًا علمًا، اجتهد»، لماذا نُصب «طالبًا» ونُوِّن؟",
        "options": [
          "لأنه منادى علم مفرد مبني على الضم",
          "لأنه منادى شبيه بالمضاف عمل فيما بعده",
          "لأنه مفعول به لفعل النداء المحذوف فقط ولا صلة له بما بعده",
          "لأنه مستغاث به مجرور"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«طالبًا» اسم فاعل اتصل به معموله «علمًا»، فشابه المضاف من غير إضافة صريحة. والمنادى الشبيه بالمضاف منصوب منون، بخلاف العلم المفرد والنكرة المقصودة اللذين يبنيان على ما يرفعان به.",
        "difficulty": "high",
        "subcategory": "النداء",
        "tags": [
          "المنادى",
          "الشبيه بالمضاف",
          "اسم الفاعل"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب النداء، المنادى المضاف والشبيه بالمضاف",
        "external_id": "arabic-rhetoric-019",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-020",
        "question_text": "في «أعجبني الطالبُ خُلُقُه»، ما نوع البدل في «خُلُقُه»؟",
        "options": [
          "بدل بعض من كل",
          "بدل اشتمال",
          "بدل كل من كل",
          "بدل مباين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الخُلُق معنى يشتمل عليه الطالب وليس جزءًا ماديًا منه، والضمير في «خلقه» رابط يعود إلى المبدل منه؛ لذلك هو بدل اشتمال لا بدل بعض من كل.",
        "difficulty": "high",
        "subcategory": "البدل",
        "tags": [
          "بدل الاشتمال",
          "التوابع",
          "الرابط"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب البدل، بدل البعض وبدل الاشتمال",
        "external_id": "arabic-rhetoric-020",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-021",
        "question_text": "في «لولا العلمُ ما تقدمت الأمم»، لماذا جاء الاسم بعد «لولا» مرفوعًا؟",
        "options": [
          "لأنه فاعل لفعل محذوف",
          "لأنه اسم لولا مرفوع على عملها كـ«كان»",
          "لأنه مبتدأ خبره محذوف وجوبًا تقديره موجود",
          "لأنه بدل من ضمير مستتر"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«لولا» الامتناعية تدخل على جملة اسمية؛ فالاسم بعدها مبتدأ، ويُحذف خبره العام وجوبًا، ويقدّر «موجود» أو «حاصل». ولا تعمل «لولا» في الاسم عمل الأفعال الناسخة.",
        "difficulty": "high",
        "subcategory": "الأدوات والجمل",
        "tags": [
          "لولا",
          "حذف الخبر",
          "المبتدأ"
        ],
        "source": "ابن هشام الأنصاري، مغني اللبيب عن كتب الأعاريب، باب اللام: «لولا»؛ وأوضح المسالك، باب المبتدأ والخبر وحذف الخبر وجوبًا",
        "external_id": "arabic-rhetoric-021",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-022",
        "question_text": "في مطلع معلقة زهير «أمِن أمِّ أوفى دِمنةٌ لم تكلَّمِ»، ما المقصود بـ«الدِّمنة» في سياق الوقوف على الأطلال؟",
        "options": [
          "سحابة ممطرة فوق الحي",
          "ناقة سريعة في الرحلة",
          "ساحة الحرب بعد انقضائها",
          "آثار الدار وما سوّدته وبقي من حطامها"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الدِّمنة أثر الدار وما اسودّ من البعر والرماد ونحوهما بعد رحيل أهلها. لذلك خاطب زهير آثار منزل أم أوفى في تقليد الوقوف على الطلل.",
        "difficulty": "high",
        "subcategory": "لغة الشعر الجاهلي",
        "tags": [
          "زهير",
          "الدمنة",
          "الأطلال"
        ],
        "source": "الزوزني، شرح المعلقات السبع، شرح مطلع معلقة زهير؛ ابن منظور، لسان العرب، مادة «دمن»",
        "external_id": "arabic-rhetoric-022",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-023",
        "question_text": "في معلقة طرفة: «ستُبدي لك الأيامُ ما كنتَ جاهلًا ويأتيك بالأخبار من لم تُزوِّدِ»، ما الفكرة التي يقررها البيت؟",
        "options": [
          "لا يُقبل الخبر إلا من رسول مزوّد بالمال",
          "تكشف الأيام المجهول، وقد يأتي الخبر ممن لم تكلّفه أو تهيئه لذلك",
          "السفر يمنع وصول الأخبار الصحيحة",
          "العلم بالمستقبل مقصور على الشاعر"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يصوغ طرفة حكمة في انكشاف الخفي بمرور الزمن؛ و«من لم تزود» هو من لم ترسله ولم تمنحه زادًا ليأتيك بالخبر، ومع ذلك يحمله إليك.",
        "difficulty": "high",
        "subcategory": "حكمة الشعر الجاهلي",
        "tags": [
          "طرفة",
          "الأيام",
          "الحكمة"
        ],
        "source": "الزوزني، شرح المعلقات السبع، شرح معلقة طرفة عند بيت «ستبدي لك الأيام...»",
        "external_id": "arabic-rhetoric-023",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-024",
        "question_text": "في قول عمرو بن كلثوم: «ألا لا يجهلنْ أحدٌ علينا فنجهلَ فوق جهل الجاهلينا»، ما توجيه نصب «نجهلَ»؟",
        "options": [
          "مجزوم عطفًا على «يجهلن»",
          "مرفوع لأنه مستأنف",
          "منصوب بأن مضمرة وجوبًا بعد فاء السببية الواقعة في جواب النهي",
          "منصوب على أنه مفعول به"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سبق الفاء نهيٌ محض في «لا يجهلن»، وجاء المضارع بعدها مسببًا عنه؛ فينصب بـ«أن» مضمرة وجوبًا بعد فاء السببية. لذلك ففتحة «نجهلَ» علامة نصب لا جزم.",
        "difficulty": "high",
        "subcategory": "نصب المضارع",
        "tags": [
          "فاء السببية",
          "عمرو بن كلثوم",
          "جواب النهي"
        ],
        "source": "ابن عقيل، شرح ابن عقيل على ألفية ابن مالك، باب إعراب الفعل، إضمار أن بعد فاء السببية؛ والزوزني، شرح المعلقات السبع، معلقة عمرو بن كلثوم",
        "external_id": "arabic-rhetoric-024",
        "is_verified": true,
        "version": 1
      },
      {
        "id": "arabic-rhetoric-025",
        "question_text": "في قول النابغة الذبياني: «فإنك كالليل الذي هو مُدركي وإن خِلتُ أن المنتأى عنك واسعُ»، ما وظيفة التشبيه في سياق الاعتذار؟",
        "options": [
          "وصف سواد لون الممدوح",
          "تصوير حتمية بلوغ سلطان الممدوح للشاعر كما يدرك الليل كل هارب",
          "التغزل بليل هادئ بعيد عن الخوف",
          "إثبات أن الشاعر أسرع من الليل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يشبه النابغة النعمان بالليل في إحاطة سلطانه وحتمية إدراكه؛ فمهما ظن الشاعر أن البعد واسع فلن يفلت. يخدم التشبيه الاعتذار بإظهار هيبة المخاطب وعجز الشاعر عن الفرار.",
        "difficulty": "high",
        "subcategory": "الشعر الجاهلي والبلاغة",
        "tags": [
          "النابغة",
          "الاعتذار",
          "التشبيه"
        ],
        "source": "ديوان النابغة الذبياني، تحقيق محمد أبو الفضل إبراهيم، قصيدة «يا دار مية بالعلياء فالسند»، شرح بيت «فإنك كالليل...»؛ عبد القاهر الجرجاني، أسرار البلاغة، مباحث أغراض التشبيه",
        "external_id": "arabic-rhetoric-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-arabic-rare-words-schools-02",
    "user_id": "system",
    "title": "غريب الألفاظ والمذاهب الأدبية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أدب ولغة عربية",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في قول امرئ القيس «وجيدٍ كجيدِ الرئمِ ليس بفاحشٍ»، ما الرئم؟",
        "options": [
          "صغير النعام",
          "الثور الوحشي",
          "الوعل طويل القرنين",
          "الظبي الأبيض الخالص البياض"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرِّئم في المعاجم الظبي الأبيض الخالص البياض؛ ومن ثم شبّه امرؤ القيس جيد محبوبته بجيد الظبي، لا بالنعام أو الوعل.",
        "source": "ابن منظور، لسان العرب، مادة «رأم»؛ ديوان امرئ القيس، شرح الأعلم الشنتمري، القصيدة اللامية",
        "difficulty": "medium",
        "subcategory": "غريب الشعر الجاهلي",
        "tags": [
          "امرؤ القيس",
          "الرئم",
          "المعجم"
        ],
        "external_id": "ara-rare-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما معنى «السُّرى» في قولهم: سَرَوا من آخر الليل؟",
        "options": [
          "الراحة عند الظهيرة",
          "السير ليلًا",
          "السير أول النهار",
          "الإقامة في المنزل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "السُّرى هو سير عامة الليل أو بعضه، والفعل سَرَى وأسرى يدل على السير ليلًا؛ فلا يعني القيلولة أو البكور.",
        "source": "مجمع اللغة العربية بالقاهرة، المعجم الوسيط، مادة «سرى»، الطبعة الرابعة",
        "difficulty": "medium",
        "subcategory": "غريب الألفاظ",
        "tags": [
          "السُّرى",
          "دلالة",
          "معجم"
        ],
        "external_id": "ara-rare-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا وُصف الرجل في العربية القديمة بأنه «أشمط»، فأي صفة غلبت على شعره؟",
        "options": [
          "شدة الجعودة",
          "اختلاط البياض بالسواد",
          "الطول حتى المنكبين",
          "الحمرة الخالصة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الشَّمَط بياض شعر الرأس يخالط سواده؛ ولذلك فالأشمط ليس من ابيض شعره كله، بل من اختلط بياضه بسواده.",
        "source": "الفيروزآبادي، القاموس المحيط، مادة «شمط»، مؤسسة الرسالة، الطبعة الثامنة",
        "difficulty": "medium",
        "subcategory": "صفات عربية قديمة",
        "tags": [
          "أشمط",
          "الشعر",
          "القاموس المحيط"
        ],
        "external_id": "ara-rare-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يطابق «الهَزِيع» في الاستعمال العربي القديم؟",
        "options": [
          "طائفة من الليل",
          "أول ضوء من الفجر",
          "حرّ منتصف النهار",
          "مطر قصير عند الغروب"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الهزيع طائفة أو نحو ثلث من الليل؛ ولذلك يقال هزيع من الليل، ولا يراد به الفجر نفسه ولا وقت الظهيرة.",
        "source": "ابن منظور، لسان العرب، مادة «هزع»؛ مجمع اللغة العربية، المعجم الوسيط، مادة «هزع»",
        "difficulty": "medium",
        "subcategory": "ألفاظ الزمن",
        "tags": [
          "هزيع",
          "الليل",
          "لسان العرب"
        ],
        "external_id": "ara-rare-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سمة جعلها كتّاب الواقعية في القرن التاسع عشر محورًا مقابل النزعة الرومانسية؟",
        "options": [
          "تمثيل الحياة اليومية والوسط الاجتماعي تمثيلًا تفصيليًا",
          "إحياء الأسطورة وحدها ورفض المجتمع",
          "إلغاء السببية من السرد",
          "حصر الأدب في الاعتراف الذاتي الغنائي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سعت الواقعية إلى تقديم الحياة المعاصرة العادية وبيئاتها الاجتماعية بتفصيل وملاحظة، في ابتعاد عن التخييل الرومانسي المثالي أو الغنائي الخالص.",
        "source": "Encyclopaedia Britannica, “Realism — literature”: https://www.britannica.com/art/realism-art",
        "difficulty": "medium",
        "subcategory": "المذاهب الأدبية",
        "tags": [
          "الواقعية",
          "الرومانسية",
          "السرد"
        ],
        "external_id": "ara-rare-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المبدأ الذي يدل عليه شعار البرناسية «الفن للفن» في صورته الأساسية؟",
        "options": [
          "إخضاع القصيدة للدعاية السياسية",
          "تسجيل اللاوعي بالكتابة الآلية",
          "محاكاة الوثيقة العلمية بلا عناية بالشكل",
          "استقلال القيمة الجمالية عن الوعظ والمنفعة المباشرة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أكد البرناسيون الصنعة والانضباط الشكلي واستقلال الفن، فرفضوا قياس القصيدة بمنفعتها الأخلاقية أو السياسية المباشرة.",
        "source": "Encyclopaedia Britannica, “Parnassian”: https://www.britannica.com/art/Parnassian",
        "difficulty": "medium",
        "subcategory": "المذاهب الأدبية",
        "tags": [
          "البرناسية",
          "الفن للفن",
          "الجماليات"
        ],
        "external_id": "ara-rare-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي اقتران يصف جماعة «الديوان» في النقد العربي الحديث؟",
        "options": [
          "شوقي وحافظ ومطران، مع الالتزام بالمحاكاة الكلاسيكية",
          "نعيمة وجبران وأبو ماضي، بوصفهم جماعة مصرية",
          "العقاد والمازني وشكري، مع الدعوة إلى الوحدة العضوية والصدق النفسي",
          "السياب ونازك والبياتي، بوصفهم مدرسة نثرية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُنسَب جماعة الديوان إلى عباس محمود العقاد وإبراهيم المازني وعبد الرحمن شكري، ودعت إلى صدق التجربة ووحدة القصيدة العضوية في مواجهة التقليد.",
        "source": "شوقي ضيف، الأدب العربي المعاصر في مصر، دار المعارف، فصل «مدرسة الديوان»",
        "difficulty": "medium",
        "subcategory": "مدارس الأدب العربي الحديث",
        "tags": [
          "الديوان",
          "العقاد",
          "المازني",
          "شكري"
        ],
        "external_id": "ara-rare-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في المصطلح النقدي، ماذا يميز «تيار الوعي»؟",
        "options": [
          "تمثيل تدفق الإدراك والأفكار والانطباعات الداخلية للشخصية",
          "ترتيب الأحداث زمنيًا بلسان مؤرخ محايد",
          "اقتصار السرد على الحوار المسرحي",
          "إخفاء العالم النفسي والاكتفاء بوصف المكان"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تيار الوعي تقنية تسعى إلى محاكاة الحركة المتصلة للوعي بما فيها الخواطر والإحساسات والذكريات، وقد تستعمل المونولوج الداخلي لكنها أوسع منه.",
        "source": "Encyclopaedia Britannica, “Stream of consciousness”: https://www.britannica.com/art/stream-of-consciousness",
        "difficulty": "medium",
        "subcategory": "تقنيات السرد",
        "tags": [
          "تيار الوعي",
          "السرد",
          "المونولوج الداخلي"
        ],
        "external_id": "ara-rare-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في بيت طرفة «على مثلها أمضي إذا قال صاحبي ألا ليتني أفديك منها وأفتدي»، إلى ماذا يعود ضمير «مثلها» في سياق المعلقة؟",
        "options": [
          "ناقة موصوفة بالقوة والسرعة",
          "خمر معتقة",
          "امرأة من الحي",
          "سفينة في البحر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يرد البيت داخل وصف طويل لناقة طرفة؛ فالضمير يعود إلى الناقة التي يمضي على مثلها في المخاوف، لا إلى الخمر أو المرأة.",
        "source": "ديوان طرفة بن العبد، شرح الأعلم الشنتمري، قسم المعلقة؛ الزوزني، شرح المعلقات السبع، معلقة طرفة",
        "difficulty": "high",
        "subcategory": "غريب الشعر الجاهلي",
        "tags": [
          "طرفة",
          "المعلقة",
          "الناقة"
        ],
        "external_id": "ara-rare-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفارق المعجمي الأدق بين «الحَمْل» و«الحِمْل» كما قرره الخليل؟",
        "options": [
          "الحَمْل للخفيف والحِمْل للثقيل",
          "الحَمْل للإنسان والحِمْل للحيوان",
          "الحَمْل لما في البطن أو على الشجر، والحِمْل لما حُمل على الظهر",
          "هما لغتان بلا فرق دلالي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفرّق كتاب العين بين الحَمْل، ومنه ما في البطن أو على الشجر، والحِمْل الذي يُحمل على ظهر أو رأس؛ وهو فرق بالحركة والدلالة.",
        "source": "الخليل بن أحمد الفراهيدي، كتاب العين، تحقيق مهدي المخزومي وإبراهيم السامرائي، مادة «حمل»",
        "difficulty": "high",
        "subcategory": "فروق لغوية",
        "tags": [
          "الحَمْل",
          "الحِمْل",
          "كتاب العين"
        ],
        "external_id": "ara-rare-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي معنى معجمي يلائم لفظ «العِهن» في عبارة «كالعهن المنفوش»؟",
        "options": [
          "الصوف المصبوغ بألوان",
          "القطن الأبيض غير المغزول",
          "الحرير الخالص",
          "وبر الإبل الأسود"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العِهن هو الصوف، وقيل المصبوغ منه خاصة؛ ووصفه بالمنفوش يصور الجبال يوم القيامة في خفة الصوف المتفرق وتعدد ألوانه.",
        "source": "الراغب الأصفهاني، المفردات في غريب القرآن، مادة «عهن»؛ ابن منظور، لسان العرب، مادة «عهن»",
        "difficulty": "high",
        "subcategory": "غريب القرآن",
        "tags": [
          "العهن",
          "المفردات",
          "الصوف"
        ],
        "external_id": "ara-rare-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا قالت العرب «ثَكِلَتْه أمه»، فما الأصل الدلالي للفعل «ثَكِل»؟",
        "options": [
          "مرض ولدها",
          "هجرها زوجها",
          "افتقرت بعد غنى",
          "فقدت ولدها"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الثُّكل فقدان المرأة ولدها، فهي ثاكل وثكلى؛ وقد ترد العبارة دعاءً أو على مجرى كلام العرب من غير إرادة ظاهرها، لكن أصلها المعجمي هو فقد الولد.",
        "source": "ابن الأثير، النهاية في غريب الحديث والأثر، مادة «ثكل»؛ ابن منظور، لسان العرب، مادة «ثكل»",
        "difficulty": "high",
        "subcategory": "غريب الحديث",
        "tags": [
          "ثكل",
          "غريب الحديث",
          "دلالة"
        ],
        "external_id": "ara-rare-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المقصود بـ«الأوابد» في قول امرئ القيس «وقد أغتدي والطير في وكناتها بمنجرد قيد الأوابد هيكل»؟",
        "options": [
          "الطيور في أعشاشها",
          "الوحوش النافرة",
          "الإبل المعلَّمة",
          "الخيول المربوطة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الأوابد الوحوش التي توحشت ونفرت؛ و«قيد الأوابد» وصف للفرس كأنه يقيد الوحوش بسرعة إدراكه لها، لا أنه يقيد خيلًا مربوطة.",
        "source": "الزوزني، شرح المعلقات السبع، شرح معلقة امرئ القيس؛ ابن منظور، لسان العرب، مادة «أبد»",
        "difficulty": "high",
        "subcategory": "غريب الشعر الجاهلي",
        "tags": [
          "الأوابد",
          "امرؤ القيس",
          "الخيل"
        ],
        "external_id": "ara-rare-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة تميز «الطَّلْح» في أشهر تفسير لغوي لآية «وطلح منضود»؟",
        "options": [
          "نخل باسق قليل الثمر",
          "سدر منزوع الشوك",
          "شجر الموز المتراكب الثمر",
          "عنب مجفف في عناقيد"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نقل أهل اللغة والتفسير أن الطلح في الآية هو الموز، والمنضود المتراكب بعضه فوق بعض. أما السدر فقد ذُكر مستقلًا قبلها في «سدر مخضود».",
        "source": "الراغب الأصفهاني، المفردات في غريب القرآن، مادة «طلح»؛ الطبري، جامع البيان، تفسير سورة الواقعة: 29",
        "difficulty": "high",
        "subcategory": "غريب القرآن",
        "tags": [
          "الطلح",
          "المنضود",
          "الواقعة"
        ],
        "external_id": "ara-rare-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا تختلف الطبيعية الأدبية عند إميل زولا عن الواقعية العامة؟",
        "options": [
          "تنفي أثر المجتمع وترد السلوك إلى المصادفة",
          "تؤكد أثر الوراثة والبيئة وتستلهم المنهج التجريبي",
          "تجعل الرمز الغامض غاية العمل الوحيدة",
          "تلتزم بوحدة الوزن والقافية في كل الأجناس"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دفعت الطبيعية مبادئ الواقعية نحو تصور حتمي متأثر بالعلم الوضعي: الشخصيات نتاج الوراثة والوسط والظروف، وزولا أبرز منظّري «الرواية التجريبية».",
        "source": "Encyclopaedia Britannica, “Naturalism — literature”: https://www.britannica.com/art/naturalism-literature",
        "difficulty": "high",
        "subcategory": "المذاهب الأدبية",
        "tags": [
          "الطبيعية",
          "زولا",
          "الواقعية"
        ],
        "external_id": "ara-rare-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي ممارسة ترتبط بالسريالية تاريخيًا أكثر من غيرها؟",
        "options": [
          "الوصف الاجتماعي المحايد وفق وثائق الإحصاء",
          "تقليد نماذج القدماء مع وحدة الأجناس",
          "تنقية القصيدة من الصورة والمجاز",
          "الكتابة الآلية لاستكشاف تداعيات اللاوعي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استلهم السرياليون التحليل النفسي وسعوا إلى تحرير عمل اللاوعي؛ وكانت الكتابة الآلية إحدى وسائل تجاوز الرقابة العقلية الواعية.",
        "source": "André Breton, Manifesto of Surrealism (1924)؛ Encyclopaedia Britannica, “Surrealism”: https://www.britannica.com/art/Surrealism",
        "difficulty": "high",
        "subcategory": "المذاهب الأدبية",
        "tags": [
          "السريالية",
          "الكتابة الآلية",
          "اللاوعي"
        ],
        "external_id": "ara-rare-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في الرمزية الفرنسية، ما الوظيفة الأبرز لـ«المراسلات» بين الحواس والأشياء؟",
        "options": [
          "إثبات الوقائع بتقرير علمي مباشر",
          "إلغاء الموسيقى اللفظية من القصيدة",
          "الإيحاء بعلاقات باطنية عبر الرمز والتشابك الحسي",
          "قصر الدلالة على المعنى المعجمي الحرفي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترى الرمزية أن الظاهر يومئ إلى حقائق خفية، فتستعمل الرمز والموسيقى وتراسل الحواس لاقتراح المعنى بدل تقريره المباشر.",
        "source": "Encyclopaedia Britannica, “Symbolism — literary and artistic movement”: https://www.britannica.com/art/Symbolism-literary-and-artistic-movement",
        "difficulty": "high",
        "subcategory": "المذاهب الأدبية",
        "tags": [
          "الرمزية",
          "تراسل الحواس",
          "الإيحاء"
        ],
        "external_id": "ara-rare-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي قضية نقدية كانت مركزية عند جماعة أبولو المصرية مقارنة بالإحيائيين؟",
        "options": [
          "المحافظة الصارمة على معجم المدائح العباسية",
          "رفض التعبير الذاتي تمامًا",
          "التجربة الوجدانية والصورة العضوية المتصلة بالطبيعة",
          "تحويل الشعر إلى توثيق تاريخي محض"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مثلت أبولو اتجاهًا رومانسيًا أبرز الوجدان والطبيعة والخيال ووحدة التجربة، في مقابل عناية الإحيائيين الأكبر بمحاكاة النموذج التراثي.",
        "source": "شوقي ضيف، الأدب العربي المعاصر في مصر، دار المعارف، فصل «جماعة أبولو»؛ أحمد زكي أبو شادي، مجلة أبولو، العدد الأول (1932)",
        "difficulty": "high",
        "subcategory": "مدارس الأدب العربي الحديث",
        "tags": [
          "أبولو",
          "الرومانسية",
          "أبو شادي"
        ],
        "external_id": "ara-rare-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يفصل «المونولوج الداخلي المباشر» عن السرد النفسي غير المباشر في التصنيف الشائع؟",
        "options": [
          "لا ينقل أي فكرة للشخصية",
          "يشترط راويا عليمًا يفسر كل إحساس",
          "لا يمكن أن يرد إلا في المسرح المنظوم",
          "يعرض كلام الشخصية الباطني دون تدخل شارح ظاهر من الراوي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المونولوج الداخلي المباشر يقدم المحتوى الذهني كما لو أنه يجري في وعي الشخصية مع تقليل الوساطة السردية؛ أما التحليل النفسي غير المباشر فيصوغه الراوي ويشرحه.",
        "source": "Robert Humphrey, Stream of Consciousness in the Modern Novel, University of California Press, 1954, chapter 2",
        "difficulty": "high",
        "subcategory": "تقنيات السرد",
        "tags": [
          "المونولوج الداخلي",
          "الراوي",
          "تيار الوعي"
        ],
        "external_id": "ara-rare-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تعريف يطابق «التناص» عند جوليا كريستيفا في أصله النظري؟",
        "options": [
          "نقل عبارة من مصدر مع توثيقها فقط",
          "تشكل النص بوصفه تقاطعًا وتحويلًا لنصوص وخطابات سابقة",
          "مطابقة وزن قصيدة لوزن قصيدة أخرى",
          "ترجمة النص إلى لغتين في صفحة واحدة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التناص أوسع من الاقتباس المعلن؛ فالنص يتكون داخل شبكة من نصوص وخطابات يمتصها ويحوّلها، وهو تصور طورته كريستيفا انطلاقًا من حوارية باختين.",
        "source": "Julia Kristeva, Desire in Language, Columbia University Press, 1980, “Word, Dialogue and Novel”",
        "difficulty": "high",
        "subcategory": "النظرية الأدبية",
        "tags": [
          "التناص",
          "كريستيفا",
          "باختين"
        ],
        "external_id": "ara-rare-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-logic-sequences-deduction-01",
    "user_id": "system",
    "title": "ألغاز متواليات واستنتاج منطقي",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أدلة وألغاز ومنطق",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "متوالية حسابية حدها الأول 7 وفرقها الثابت 5. ما حدها الثامن؟",
        "options": [
          "42",
          "40",
          "47",
          "35"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في المتوالية الحسابية a_n=a_1+(n-1)d؛ لذلك a_8=7+7×5=42.",
        "source": "OpenStax, Algebra and Trigonometry 2e — Sequences and Their Notations: https://openstax.org/books/algebra-and-trigonometry-2e/pages/12-1-sequences-and-their-notations",
        "difficulty": "medium",
        "subcategory": "متواليات حسابية",
        "tags": [
          "متوالية حسابية",
          "حد عام"
        ],
        "external_id": "logic-seq-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "متوالية هندسية موجبة تبدأ بـ 3، 6، 12. إذا ظلت النسبة ثابتة، فما الحد السادس؟",
        "options": [
          "48",
          "72",
          "192",
          "96"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "النسبة المشتركة 2، ومن ثم الحدود التالية 24 ثم 48 ثم 96؛ أو a_6=3×2^5=96.",
        "source": "OpenStax, College Algebra 2e — Geometric Sequences: https://openstax.org/books/college-algebra-2e/pages/13-3-geometric-sequences",
        "difficulty": "medium",
        "subcategory": "متواليات هندسية",
        "tags": [
          "متوالية هندسية",
          "نسبة مشتركة"
        ],
        "external_id": "logic-seq-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تُعرّف المتوالية بـ a₁=2 وaₙ=aₙ₋₁+n لكل n≥2. ما قيمة a₅؟",
        "options": [
          "14",
          "20",
          "16",
          "12"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نضيف رقم الحد في كل خطوة: a₂=4، a₃=7، a₄=11، a₅=16.",
        "source": "MIT OpenCourseWare, Mathematics for Computer Science — Sequences and Recurrences: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/",
        "difficulty": "medium",
        "subcategory": "علاقات عودية",
        "tags": [
          "عودية",
          "متواليات"
        ],
        "external_id": "logic-seq-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا كانت العبارة «كل الباحثين دقيقون» صحيحة، وكان سامر باحثًا، فأي نتيجة تلزم منطقيًا؟",
        "options": [
          "سامر دقيق",
          "كل الدقيقين باحثون",
          "سامر الباحث الوحيد",
          "لا يوجد دقيق غير سامر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من ∀x(باحث(x)→دقيق(x)) ومن باحث(سامر)، ينتج دقيق(سامر) بقاعدة إثبات المقدم. عكس الشرط أو ادعاء التفرد لا يلزمان.",
        "source": "Open Logic Project — Natural Deduction: https://openlogicproject.org/",
        "difficulty": "medium",
        "subcategory": "استدلال شرطي",
        "tags": [
          "إثبات المقدم",
          "منطق محمولات"
        ],
        "external_id": "logic-seq-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أحد الصناديق الثلاثة A وB وC يحوي المفتاح. العبارات هي: «المفتاح ليس في A»، «المفتاح في C»، «المفتاح ليس في A ولا B». إذا كانت عبارة واحدة فقط صحيحة، فأين المفتاح؟",
        "options": [
          "في A",
          "في C",
          "في B",
          "لا يمكن تحديده"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إن كان في A كذبت العبارات الثلاث، وإن كان في C صدقت العبارات الثلاث. أما إن كان في B فتصدق الأولى وحدها وتكذب الثانية والثالثة؛ لذا B هو الحل الوحيد.",
        "source": "Raymond Smullyan, What Is the Name of This Book? — truth-value case analysis",
        "difficulty": "medium",
        "subcategory": "تحليل حالات",
        "tags": [
          "قيم صدق",
          "صناديق"
        ],
        "external_id": "logic-seq-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في صف من ثلاثة مقاعد، تجلس ليلى قبل مريم، وتجلس مريم قبل نور. ما الترتيب الوحيد من اليسار إلى اليمين؟",
        "options": [
          "مريم، ليلى، نور",
          "ليلى، مريم، نور",
          "نور، مريم، ليلى",
          "ليلى، نور، مريم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العلاقتان تفرضان ليلى < مريم < نور بالتعدي، ومع وجود ثلاثة أشخاص وثلاثة مقاعد يكون هذا الترتيب وحيدًا.",
        "source": "Kenneth Rosen, Discrete Mathematics and Its Applications — relations and transitivity",
        "difficulty": "medium",
        "subcategory": "ترتيب منطقي",
        "tags": [
          "تعدي",
          "ترتيب"
        ],
        "external_id": "logic-seq-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا كان نفي العبارة «سافر أحمد وكتب التقرير» صحيحًا، فأي صياغة تكافئه وفق قوانين دي مورغان؟",
        "options": [
          "لم يسافر أحمد ولم يكتب التقرير",
          "سافر أحمد أو كتب التقرير",
          "لم يسافر أحمد أو لم يكتب التقرير",
          "إذا سافر أحمد فلن يكتب التقرير"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نفي الاقتران ¬(P∧Q) يكافئ ¬P∨¬Q، ولا يشترط أن يكون الحدثان كلاهما منفيين.",
        "source": "OpenStax, Contemporary Mathematics — Logic: https://openstax.org/books/contemporary-mathematics/pages/2-5-logic",
        "difficulty": "medium",
        "subcategory": "تكافؤ منطقي",
        "tags": [
          "دي مورغان",
          "نفي الاقتران"
        ],
        "external_id": "logic-seq-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تبدأ متوالية فيبوناتشي هنا بـ 1، 1، وكل حد لاحق مجموع سابقيه. ما الحد السابع؟",
        "options": [
          "13",
          "8",
          "21",
          "11"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحدود هي 1، 1، 2، 3، 5، 8، 13، لذا السابع 13.",
        "source": "OEIS A000045 — Fibonacci numbers: https://oeis.org/A000045",
        "difficulty": "medium",
        "subcategory": "متواليات عودية",
        "tags": [
          "فيبوناتشي",
          "جمع"
        ],
        "external_id": "logic-seq-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لتكن a₁=1 وaₙ=2aₙ₋₁+1. أي صيغة مغلقة صحيحة لـ aₙ؟",
        "options": [
          "2ⁿ+1",
          "2ⁿ−1",
          "2n−1",
          "n²−1"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بالتعويض تعطي الصيغة 2¹−1=1. وإذا aₙ₋₁=2ⁿ⁻¹−1 فإن 2aₙ₋₁+1=2ⁿ−1، فتثبت بالاستقراء.",
        "source": "MIT OpenCourseWare, Mathematics for Computer Science — Induction and Recursive Data: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/",
        "difficulty": "high",
        "subcategory": "علاقات عودية",
        "tags": [
          "صيغة مغلقة",
          "استقراء"
        ],
        "external_id": "logic-seq-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "متوالية كثيرة حدود من الدرجة الثانية قيمها عند n=1,2,3,4 هي 2، 6، 12، 20. ما قيمة الحد الخامس؟",
        "options": [
          "28",
          "32",
          "26",
          "30"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الفروق الأولى 4، 6، 8 وفروقها الثانية ثابتة وتساوي 2؛ لذا الفرق التالي 10 والحد الخامس 20+10=30. القيد بأنها تربيعية يجعل الاستكمال وحيدًا.",
        "source": "NIST Digital Library of Mathematical Functions — finite differences: https://dlmf.nist.gov/3.3",
        "difficulty": "high",
        "subcategory": "فروق منتهية",
        "tags": [
          "فروق ثانية",
          "كثيرة حدود"
        ],
        "external_id": "logic-seq-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في جزيرة، الصادق يصدق دائمًا والكاذب يكذب دائمًا. قال أ: «ب كاذب». وقال ب: «نحن من النوع نفسه». ما نوع كل منهما؟",
        "options": [
          "أ كاذب وب صادق",
          "أ صادق وب كاذب",
          "كلاهما صادق",
          "كلاهما كاذب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إن صدق أ فب كاذب، وقول ب إنهما من النوع نفسه كذب، فيتسق الحل. وإن كذب أ كان ب صادقًا، لكن قول ب إنهما من النوع نفسه يصبح كذبًا، فتناقض. إذن الحل وحيد.",
        "source": "Raymond Smullyan, What Is the Name of This Book? — knights and knaves method",
        "difficulty": "high",
        "subcategory": "صادق وكاذب",
        "tags": [
          "تحليل حالات",
          "اتساق"
        ],
        "external_id": "logic-seq-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أربع مهام A وB وC وD في ترتيب خطي. A قبل B، وC بعد B مباشرة، وD قبل A. ما الترتيب الوحيد؟",
        "options": [
          "A، D، B، C",
          "D، B، C، A",
          "B، C، D، A",
          "D، A، B، C"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "B وC كتلة متجاورة بالترتيب BC. يجب أن يسبقها A، وأن يسبق D العنصر A؛ فتُفرض السلسلة D<A<B<C.",
        "source": "Kenneth Rosen, Discrete Mathematics and Its Applications — partial orders and linear extensions",
        "difficulty": "high",
        "subcategory": "ترتيب بقيود",
        "tags": [
          "ترتيب خطي",
          "تجاور"
        ],
        "external_id": "logic-seq-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لدينا المقدمات: إذا نجح الاختبار فالنظام يعمل. إذا عمل النظام وصل الإشعار. لم يصل الإشعار. ما النتيجة اللازمة؟",
        "options": [
          "نجح الاختبار ولم يعمل النظام",
          "لم ينجح الاختبار",
          "وصل الإشعار متأخرًا",
          "لا يمكن استنتاج شيء عن الاختبار"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "من P→S وS→N نحصل على P→N بالقياس الشرطي. ومع ¬N نستنتج ¬P بنفي التالي (modus tollens).",
        "source": "Open Logic Project — Propositional Logic and Natural Deduction: https://openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "استدلال شرطي",
        "tags": [
          "نفي التالي",
          "قياس شرطي"
        ],
        "external_id": "logic-seq-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة هي النقيض المنطقي الدقيق لعبارة «لكل طالب كتاب واحد على الأقل»؟",
        "options": [
          "لا يملك أي طالب كتابًا",
          "يوجد طالب يملك كتابًا واحدًا",
          "لكل طالب كتابان على الأقل",
          "يوجد طالب لا يملك أي كتاب"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نفي ∀x∃y يمتلك(x,y) هو ∃x∀y ¬يمتلك(x,y): يوجد طالب لا يملك أي كتاب. لا يعني النفي أن جميع الطلاب بلا كتب.",
        "source": "Open Logic Project — Quantifiers: https://openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "منطق محمولات",
        "tags": [
          "كميات",
          "نفي"
        ],
        "external_id": "logic-seq-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "إذا كانت P↔Q صحيحة وP كاذبة، فما قيمة Q بالضرورة؟",
        "options": [
          "صحيحة",
          "غير قابلة للتحديد",
          "كاذبة",
          "صحيحة وكاذبة معًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التكافؤ الثنائي يكون صادقًا عندما تتساوى قيمتا الطرفين فقط؛ وبما أن P كاذبة، يلزم أن تكون Q كاذبة.",
        "source": "OpenStax, Contemporary Mathematics — Logic: https://openstax.org/books/contemporary-mathematics/pages/2-5-logic",
        "difficulty": "high",
        "subcategory": "جداول صدق",
        "tags": [
          "تكافؤ ثنائي",
          "قيم صدق"
        ],
        "external_id": "logic-seq-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تتبع المتوالية القاعدة a₁=4 وaₙ=aₙ₋₁+2n−1. أي حد يساوي 103؟",
        "options": [
          "التاسع",
          "الحادي عشر",
          "الثاني عشر",
          "العاشر"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مجموع الأعداد الفردية من 3 حتى 2n−1 يساوي n²−1؛ لذا aₙ=4+(n²−1)=n²+3. بحل n²+3=103 نحصل على n=10.",
        "source": "OEIS A000290 — square numbers and first differences: https://oeis.org/A000290",
        "difficulty": "high",
        "subcategory": "علاقات عودية",
        "tags": [
          "أعداد فردية",
          "مربعات"
        ],
        "external_id": "logic-seq-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ثلاث بطاقات مرقمة 1 و2 و3 توضع في صف. البطاقة 1 ليست في الطرف، والبطاقة 3 تقع يسار البطاقة 2. ما الترتيب الوحيد؟",
        "options": [
          "2، 1، 3",
          "1، 3، 2",
          "3، 1، 2",
          "3، 2، 1"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بما أن 1 ليست طرفًا فهي في الوسط. يبقى الطرفان لـ2 و3، وشرط وقوع 3 يسار 2 يفرض 3،1،2.",
        "source": "Kenneth Rosen, Discrete Mathematics and Its Applications — permutations with constraints",
        "difficulty": "high",
        "subcategory": "تباديل مقيدة",
        "tags": [
          "تباديل",
          "مواضع"
        ],
        "external_id": "logic-seq-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في رسم بياني بسيط، درجات الرؤوس هي 3، 3، 2، 2، 2، 2. كم عدد الحواف؟",
        "options": [
          "7",
          "6",
          "8",
          "14"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مجموع الدرجات 14. وفق مبرهنة المصافحة يساوي مجموع الدرجات ضعفي عدد الحواف، لذا عدد الحواف 14÷2=7.",
        "source": "MIT OpenCourseWare, Mathematics for Computer Science — Graph Theory: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/",
        "difficulty": "high",
        "subcategory": "منطق الرسوم البيانية",
        "tags": [
          "مبرهنة المصافحة",
          "درجات"
        ],
        "external_id": "logic-seq-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لدينا أربع عبارات عن عدد صحيح n: (1) n زوجي، (2) n>10، (3) n من مضاعفات 3، (4) n<15. إذا كانت ثلاث عبارات فقط صحيحة وكان n أحد الأعداد 9 أو12 أو15 أو18، فما n؟",
        "options": [
          "18",
          "12",
          "9",
          "15"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عند 12 تكون العبارات الأربع: صحيحة، صحيحة، صحيحة، صحيحة؛ وهذا يخالف الشرط. عند 18: صحيحة، صحيحة، صحيحة، خاطئة، فتتحقق ثلاث. إذن الصحيح هو 18 لا 12.",
        "source": "Raymond Smullyan, What Is the Name of This Book? — exhaustive truth-value analysis",
        "difficulty": "high",
        "subcategory": "تحليل حالات",
        "tags": [
          "قيود عددية",
          "قيم صدق"
        ],
        "external_id": "logic-seq-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "المقدمات: بعض الشعراء علماء، ولا عالم مهمل. أي نتيجة تلزم؟",
        "options": [
          "كل الشعراء علماء",
          "بعض الشعراء ليسوا مهملين",
          "لا شاعر مهمل",
          "بعض المهملين شعراء"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يوجد شخص شاعر وعالم بمقتضى المقدمة الأولى. وبما أن كل عالم غير مهمل، فهذا الشخص نفسه شاعر غير مهمل؛ ولا يلزم تعميم الحكم على كل الشعراء.",
        "source": "Open Logic Project — First-order Logic: https://openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "قياس حملي",
        "tags": [
          "وجود",
          "منطق محمولات"
        ],
        "external_id": "logic-seq-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-logic-formal-paradoxes-02",
    "user_id": "system",
    "title": "المسائل الصورية والمفارقات المنطقية",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "أدلة وألغاز ومنطق",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "إذا كانت P صادقة وQ كاذبة، فما قيمة الصيغة ¬(P ∧ Q) ↔ (¬P ∨ ¬Q)؟",
        "options": [
          "صادقة لأن طرفي التكافؤ صادقان",
          "كاذبة لأن طرفه الأيسر فقط صادق",
          "كاذبة لأن طرفه الأيمن فقط صادق",
          "لا يمكن تحديدها من القيم المعطاة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "P ∧ Q كاذبة، فنفيها صادق. كذلك ¬P كاذبة و¬Q صادقة، ولذلك ¬P ∨ ¬Q صادقة. والتكافؤ بين قضيتين صادقتين صادق؛ وهذا تطبيق مباشر لقانون دي مورغان.",
        "source": "Open Logic Project, forall x: Calgary — Truth-functional logic, De Morgan's laws: https://forallx.openlogicproject.org/",
        "difficulty": "medium",
        "subcategory": "جداول الصدق",
        "tags": [
          "دي مورغان",
          "تكافؤ",
          "روابط منطقية"
        ],
        "external_id": "logic-formal-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي صيغة هي النفي الصحيح لعبارة «كل باحث قرأ كتابًا واحدًا على الأقل» إذا رمز R(x,y) إلى «x قرأ y» وكان مجال y هو الكتب؟",
        "options": [
          "∀x∃y ¬R(x,y)",
          "∃x∃y ¬R(x,y)",
          "∀x∀y ¬R(x,y)",
          "∃x∀y ¬R(x,y)"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "العبارة الأصلية صورتها ∀x∃y R(x,y). عند نفي الكمّين نعكسهما وننفي المحمول: ¬∀x∃yR يكافئ ∃x∀y¬R؛ أي يوجد باحث لم يقرأ أي كتاب.",
        "source": "Open Logic Project, forall x: Calgary — Quantifiers and negation: https://forallx.openlogicproject.org/",
        "difficulty": "medium",
        "subcategory": "منطق المحمولات",
        "tags": [
          "كم كلي",
          "كم وجودي",
          "نفي"
        ],
        "external_id": "logic-formal-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من المقدمتين P → Q و¬Q، أي نتيجة تلزم في المنطق الكلاسيكي؟",
        "options": [
          "P",
          "Q",
          "¬P",
          "P ↔ Q"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لو كانت P صادقة للزم Q من الشرطية، لكن ¬Q معطاة؛ إذن P كاذبة. هذه قاعدة نفي التالي (modus tollens)، وهي صورة استدلال صحيحة.",
        "source": "Internet Encyclopedia of Philosophy — Propositional Logic, rules of inference: https://iep.utm.edu/prop-log/",
        "difficulty": "medium",
        "subcategory": "قواعد الاستدلال",
        "tags": [
          "نفي التالي",
          "شرطية",
          "صلاحية"
        ],
        "external_id": "logic-formal-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في عالم لا يضم إلا أمل وبدر، كانت F(x) صادقة لأمل فقط. أي قضية تكون صادقة؟",
        "options": [
          "∃x F(x) ∧ ¬∀x F(x)",
          "∀x F(x)",
          "¬∃x F(x)",
          "∀x ¬F(x)"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "وجود أمل التي تحقق F يجعل ∃xF(x) صادقة، وعدم تحقق F لبدر يجعل ∀xF(x) كاذبة، ومن ثم نفيها صادق. لذلك يصدق اقتران الوجود مع نفي العموم وحده.",
        "source": "Open Logic Project, forall x: Calgary — Semantics for first-order logic: https://forallx.openlogicproject.org/",
        "difficulty": "medium",
        "subcategory": "دلالات منطق الرتبة الأولى",
        "tags": [
          "نموذج",
          "كم",
          "مجال"
        ],
        "external_id": "logic-formal-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي حالة تُبطل الحجة: «إذا نجح الاختبار نُشر البرنامج؛ نُشر البرنامج؛ إذن نجح الاختبار»؟",
        "options": [
          "الاختبار لم ينجح والبرنامج نُشر لسبب آخر",
          "الاختبار نجح والبرنامج نُشر",
          "الاختبار لم ينجح والبرنامج لم يُنشر",
          "الاختبار نجح والبرنامج لم يُنشر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الحجة من صورة إثبات التالي: P→Q، Q، إذن P. الحالة P كاذبة وQ صادقة تجعل المقدمتين صادقتين والنتيجة كاذبة، فتكون مثالًا مضادًا يثبت عدم الصلاحية.",
        "source": "Internet Encyclopedia of Philosophy — Fallacies, affirming the consequent: https://iep.utm.edu/fallacy/",
        "difficulty": "medium",
        "subcategory": "المغالطات الصورية",
        "tags": [
          "إثبات التالي",
          "مثال مضاد",
          "صلاحية"
        ],
        "external_id": "logic-formal-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لدينا: «لا شاعرَ مهندسٌ»، و«بعض المعلمين شعراء». ما النتيجة اللازمة؟",
        "options": [
          "لا معلم مهندس",
          "بعض المهندسين معلمون",
          "بعض المعلمين ليسوا مهندسين",
          "كل الشعراء معلمون"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يوجد بمقتضى المقدمة الثانية فرد معلم وشاعر. وبما أن مجموعة الشعراء منفصلة عن المهندسين وفق الأولى، فهذا الفرد نفسه ليس مهندسًا؛ لذا تلزم النتيجة الوجودية فقط، لا تعميم على جميع المعلمين.",
        "source": "Stanford Encyclopedia of Philosophy — Aristotle's Logic, categorical syllogistic: https://plato.stanford.edu/entries/aristotle-logic/",
        "difficulty": "medium",
        "subcategory": "القياس الحملي",
        "tags": [
          "قياس",
          "قضايا حملية",
          "وجود"
        ],
        "external_id": "logic-formal-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في لغز الفرسان والكذابين، يقول شخص واحد: «أنا كاذب». مع افتراض أن الفارس يصدق دائمًا والكاذب يكذب دائمًا، فما الوصف الأدق؟",
        "options": [
          "لا يمكن لأي من النوعين قولها على نحو متسق",
          "لا بد أنه فارس",
          "لا بد أنه كاذب",
          "يمكن أن يكون أيًا منهما بلا تناقض"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إن كان فارسًا فقوله إنه كاذب كذب، وهذا يناقض كونه فارسًا. وإن كان كاذبًا فالجملة «أنا كاذب» صادقة، وهذا يناقض اشتراط كذبه دائمًا. لذلك لا يوجد إسناد متسق ضمن الفرضين.",
        "source": "Raymond Smullyan, What Is the Name of This Book? — قواعد ألغاز الفرسان والكذابين والاستدلال بالتناقض",
        "difficulty": "medium",
        "subcategory": "ألغاز الصدق والكذب",
        "tags": [
          "فرسان وكذابون",
          "اتساق",
          "إحالة ذاتية"
        ],
        "external_id": "logic-formal-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي علاقة تصف قضيتي «كل A هو B» و«بعض A ليس B» في مربع التقابل التقليدي مع افتراض وجود أفراد من A؟",
        "options": [
          "متضادتان: قد تكذبان معًا",
          "متداخلتان: صدق الأولى يستلزم صدق الثانية",
          "متناقضتان: تصدق إحداهما وتكذب الأخرى",
          "لا علاقة دلالية بينهما"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "«كل A هو B» قضية كلية موجبة (A)، و«بعض A ليس B» جزئية سالبة (O). كل واحدة نفي للأخرى: نفي ∀x(A→B) يكافئ ∃x(A∧¬B)، لذا لا تصدقان ولا تكذبان معًا.",
        "source": "Stanford Encyclopedia of Philosophy — The Traditional Square of Opposition: https://plato.stanford.edu/entries/square/",
        "difficulty": "medium",
        "subcategory": "مربع التقابل",
        "tags": [
          "تناقض",
          "قضايا حملية",
          "كم"
        ],
        "external_id": "logic-formal-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي إسناد للقيم يجعل الصيغة ((P → Q) ∧ (Q → R)) → (P → R) كاذبة؟",
        "options": [
          "P صادقة وQ كاذبة وR كاذبة",
          "لا يوجد؛ الصيغة صادقة في كل إسناد",
          "P كاذبة وQ صادقة وR كاذبة",
          "P صادقة وQ صادقة وR كاذبة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لكي تكذب الشرطية الكلية يجب أن يصدق مقدمها وتكذب P→R، أي P صادقة وR كاذبة. عندئذ يفرض P→Q صدق Q، لكن Q→R تصبح كاذبة، فلا يصدق المقدم. لذلك لا يوجد مثال مضاد والصيغة تحصيل حاصل.",
        "source": "Open Logic Project, forall x: Calgary — Tautologies and truth tables: https://forallx.openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "جداول الصدق المتقدمة",
        "tags": [
          "تعدي الشرطية",
          "تحصيل حاصل",
          "مثال مضاد"
        ],
        "external_id": "logic-formal-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي زوج من الصيغ غير متكافئ عمومًا في منطق الرتبة الأولى؟",
        "options": [
          "¬∀xP(x) و∃x¬P(x)",
          "∀x(P(x) ∨ Q(x)) و(∀xP(x) ∨ ∀xQ(x))",
          "¬∃xP(x) و∀x¬P(x)",
          "∀x(P(x) ∧ Q(x)) و(∀xP(x) ∧ ∀xQ(x))"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قد يحقق كل فرد واحدًا من P أو Q من دون أن يحقق جميع الأفراد P ولا جميعهم Q؛ مثال ذلك فرد يحقق P فقط وآخر يحقق Q فقط. أما نفي الكمّين في الزوجين التاليين وتوزيع الكلي على الاقتران فهي تكافؤات صحيحة.",
        "source": "Open Logic Project, forall x: Calgary — Logical equivalence with quantifiers: https://forallx.openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "تكافؤات الكم",
        "tags": [
          "توزيع الكم",
          "فصل",
          "نموذج مضاد"
        ],
        "external_id": "logic-formal-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في الاستدلال الطبيعي، لماذا لا يجوز من ∃x P(x) اختيار ثابت قديم a سبق أن ورد في فرض مفتوح ثم استنتاج P(a)؟",
        "options": [
          "لأن حذف الكم الوجودي ممنوع في جميع البراهين",
          "لأن P(a) يستلزم دائمًا ∀xP(x)",
          "لأن الثوابت لا يجوز أن تظهر داخل المحمولات",
          "لأن a قد يدل على فرد مخصوص لا على شاهد اعتباطي للوجود"
        ],
        "correct_index": 3,
        "time_limit_seconds": 55,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قاعدة حذف الوجود تشترط اسمًا جديدًا لا يحمل معلومات مستقلة، حتى يمثل شاهدًا اعتباطيًا. استعمال ثابت مرتبط بفرض سابق قد ينقل خصائص ذلك الفرد الخاص إلى الشاهد بلا مبرر، فيفسد البرهان.",
        "source": "Open Logic Project, forall x: Calgary — Natural deduction, existential elimination restriction: https://forallx.openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "الاستدلال الطبيعي",
        "tags": [
          "حذف الوجود",
          "ثابت جديد",
          "شاهد"
        ],
        "external_id": "logic-formal-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لتكن Γ = {P ∨ Q, ¬P}. أي عبارة ميتامنطقية صحيحة؟",
        "options": [
          "Γ ⊨ P",
          "Γ غير قابلة للإشباع",
          "Γ ⊨ ¬Q",
          "Γ ⊨ Q"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كل إسناد يحقق ¬P يجعل P كاذبة، ولكي يحقق كذلك P∨Q لا بد أن يجعل Q صادقة. لذلك Q نتيجة دلالية من Γ وفق تعريف اللزوم الدلالي.",
        "source": "Stanford Encyclopedia of Philosophy — Classical Logic, semantic consequence: https://plato.stanford.edu/entries/logic-classical/",
        "difficulty": "high",
        "subcategory": "اللّزوم الدلالي",
        "tags": [
          "نتيجة دلالية",
          "إشباع",
          "فصل"
        ],
        "external_id": "logic-formal-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي خاصية لنظرية حسابية متسقة وقابلة للتمثيل بفاعلية هي التي تمنعها مبرهنة غودل الأولى إذا كانت قوية بما يكفي لتمثيل الحساب الأساسي؟",
        "options": [
          "السلامة: ألا تثبت تناقضًا",
          "قابلية تعداد بديهياتها آليًا",
          "الاكتمال: أن تثبت كل جملة أو نفيها",
          "اشتمالها على عمليات الجمع والضرب"
        ],
        "correct_index": 2,
        "time_limit_seconds": 55,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تقرر المبرهنة أن كل نسق صوري متسق، قابل للتأكسم الفعال، وقوي حسابيًا بالقدر الكافي يكون غير كامل: توجد جملة في لغته لا يثبتها ولا يثبت نفيها. الشروط الأخرى من فروض النتيجة وليست الخاصية المنفية.",
        "source": "Stanford Encyclopedia of Philosophy — Gödel's Incompleteness Theorems: https://plato.stanford.edu/entries/goedel-incompleteness/",
        "difficulty": "high",
        "subcategory": "عدم الاكتمال",
        "tags": [
          "غودل",
          "اكتمال",
          "حساب صوري"
        ],
        "external_id": "logic-formal-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الخطوة التي تولّد التناقض في مفارقة راسل للمجموعة R = {x | x ∉ x}؟",
        "options": [
          "افتراض أن كل مجموعتين متساويتان",
          "منع المجموعة الخالية من الانتماء إلى نفسها",
          "حصر جميع المجموعات في مجموعات منتهية",
          "السؤال هل R ∈ R، إذ ينتج R ∈ R ↔ R ∉ R"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بتطبيق شرط تعريف R على R نفسها نحصل على أن R عضو في ذاتها إذا وفقط إذا لم تكن عضوًا في ذاتها. كشفت المفارقة عيب مبدأ الاستيعاب غير المقيد، وعالجته نظريات بديهية مثل ZF بتقييد تكوين المجموعات.",
        "source": "Stanford Encyclopedia of Philosophy — Russell's Paradox: https://plato.stanford.edu/entries/russell-paradox/",
        "difficulty": "high",
        "subcategory": "مفارقات نظرية المجموعات",
        "tags": [
          "راسل",
          "استيعاب غير مقيد",
          "انتماء ذاتي"
        ],
        "external_id": "logic-formal-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في مفارقة كَري، افترض جملة C تقول: «إذا كانت C صادقة فإن 0=1». ما الذي يميز المفارقة عن مفارقة الكذاب؟",
        "options": [
          "تعتمد حصرًا على غموض كلمة «كاذبة»",
          "يمكن اشتقاق نتيجة اعتباطية باستعمال الشرطية والإحالة الذاتية من دون نفي صريح",
          "لا تستخدم الإحالة الذاتية مطلقًا",
          "لا تظهر إلا في منطق متعدد القيم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 60,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "مفارقة كَري تبني جملة ذاتية المرجع من صورة «إذا كانت هذه الجملة صادقة فـA»، ويمكن ضمن مبادئ استدلال مناسبة الوصول إلى A من غير استعمال نفي أو محمول الكذب. لذلك تكشف أن المشكلة أوسع من مجرد تناقض الصدق والكذب.",
        "source": "Stanford Encyclopedia of Philosophy — Curry's Paradox: https://plato.stanford.edu/entries/curry-paradox/",
        "difficulty": "high",
        "subcategory": "مفارقات دلالية",
        "tags": [
          "مفارقة كري",
          "إحالة ذاتية",
          "شرطية"
        ],
        "external_id": "logic-formal-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تمييز يمنع صياغة مفارقة الكذاب داخل نظرية تارسكي الهرمية للصدق؟",
        "options": [
          "لغة الموضوع لا تحتوي محمول صدق ينطبق على جملها نفسها؛ ويُعرّف الصدق في لغة فوقية",
          "كل جملة في لغة الموضوع تُعد كاذبة",
          "تُحذف الروابط الشرطية من اللغة",
          "يُسمح فقط بالجمل ذات القيمة الثالثة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 55,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يفصل تارسكي بين لغة موضوع نتحدث عن جملها ولغة فوقية أغنى نُسند فيها الصدق إلى تلك الجمل. منع محمول صدق شامل داخل اللغة نفسها يحظر الحلقة الدلالية التي تحتاجها جملة الكذاب.",
        "source": "Stanford Encyclopedia of Philosophy — Tarski's Truth Definitions: https://plato.stanford.edu/entries/tarski-truth/",
        "difficulty": "high",
        "subcategory": "نظريات الصدق",
        "tags": [
          "تارسكي",
          "لغة فوقية",
          "مفارقة الكذاب"
        ],
        "external_id": "logic-formal-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في المنطق الكلاسيكي، إذا كانت مجموعة المقدمات Γ غير متسقة، فما الذي يترتب دلاليًا وفق تعريف Γ ⊨ φ؟",
        "options": [
          "لا صيغة تلزم من Γ",
          "تلزم التناقضات فقط",
          "كل صيغة φ تلزم من Γ لأن لا نموذج يحقق جميع مقدماتها",
          "تلزم القضايا الذرية دون المركبة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "اللزوم الدلالي يعني أن كل نموذج للمقدمات نموذج للنتيجة. إذا لم يوجد أي نموذج للمقدمات غير المتسقة، فلا يوجد مثال مضاد، فيصدق الشرط على نحو خالٍ؛ وهذا يقابل مبدأ الانفجار برهانيًا.",
        "source": "Stanford Encyclopedia of Philosophy — Logic of Paradox, discussion of explosion and classical consequence: https://plato.stanford.edu/entries/logic-paraconsistent/",
        "difficulty": "high",
        "subcategory": "الاتساق والانفجار",
        "tags": [
          "انفجار",
          "لزوم خالٍ",
          "عدم اتساق"
        ],
        "external_id": "logic-formal-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي عبارة تميّز المنطق المتسامح مع التناقض (paraconsistent) عن المنطق الكلاسيكي؟",
        "options": [
          "يرفض جميع صور نفي التالي",
          "لا يجعل كل قضية نتيجة تلقائية من تناقض واحد",
          "يمنع وجود جمل صادقة",
          "يجعل كل تناقض تحصيل حاصل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "السمة التعريفية للمنطق المتسامح مع التناقض هي فشل الانفجار: يمكن أن تحتوي النظرية A و¬A من دون أن تستنتج منها كل B. ولا يعني ذلك بالضرورة رفض سائر قواعد الاستدلال أو اعتبار التناقض صادقًا دائمًا.",
        "source": "Stanford Encyclopedia of Philosophy — Paraconsistent Logic: https://plato.stanford.edu/entries/logic-paraconsistent/",
        "difficulty": "high",
        "subcategory": "منطقات غير كلاسيكية",
        "tags": [
          "منطق متسامح",
          "انفجار",
          "تناقض"
        ],
        "external_id": "logic-formal-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تضم شبكة أربعة رؤوس A وB وC وD، وحوافها AB وBC وCD وDA وAC. كم لونًا على الأقل يلزم لتلوين الرؤوس بحيث يختلف لون كل رأسين متجاورين؟",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct_index": 1,
        "time_limit_seconds": 55,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "المثلث A-B-C-A يفرض ثلاثة ألوان على الأقل. وتكفي ثلاثة: لوّن A وB وC بألوان مختلفة، ثم أعط D لون B؛ فـD مجاور لـA وC وغير مجاور لـB. إذن العدد اللوني يساوي 3.",
        "source": "Douglas B. West, Introduction to Graph Theory, 2nd ed. — تعريف العدد اللوني وحدّه السفلي بوجود زمرة كاملة",
        "difficulty": "high",
        "subcategory": "منطق توافقي ونظرية الرسوم",
        "tags": [
          "تلوين رسوم",
          "عدد لوني",
          "مثلث"
        ],
        "external_id": "logic-formal-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لدينا المقدمات: ∀x(P(x)→Q(x))، ∃x(P(x)∧R(x))، ∀x(R(x)→¬Q(x)). ما الحكم الصحيح؟",
        "options": [
          "المقدمات قابلة للإشباع إذا كان المجال فارغًا",
          "تلزم منها ∀x¬P(x) مع بقائها متسقة",
          "لا يوجد تعارض لأن الشاهدين الوجوديين قد يختلفان",
          "المقدمات غير قابلة للإشباع"
        ],
        "correct_index": 3,
        "time_limit_seconds": 60,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تضمن المقدمة الوجودية شاهدًا واحدًا a يحقق P وR معًا. من P(a) والكلي الأول ينتج Q(a)، ومن R(a) والكلي الثالث ينتج ¬Q(a)، فلا يمكن لأي بنية أن تحقق المقدمات الثلاث معًا.",
        "source": "Open Logic Project, forall x: Calgary — First-order models, satisfiability, and quantifier rules: https://forallx.openlogicproject.org/",
        "difficulty": "high",
        "subcategory": "الإشباع في منطق المحمولات",
        "tags": [
          "عدم إشباع",
          "شاهد وجودي",
          "تناقض"
        ],
        "external_id": "logic-formal-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-tech-networks-os-01",
    "user_id": "system",
    "title": "الشبكات وأنظمة التشغيل",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "تكنولوجيا",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "يرسل مضيف رزمة IPv4 أكبر من MTU للوصلة التالية، وكانت راية DF مفعّلة. ما السلوك المعياري للموجّه؟",
        "options": [
          "يجزّئ الرزمة رغم راية DF",
          "يحوّلها إلى IPv6 تلقائيًا",
          "يسقط الرزمة ويرسل ICMP Destination Unreachable برمز Fragmentation Needed",
          "يخفض نافذة TCP ثم يعيد إرسالها"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تمنع راية Don't Fragment تجزئة رزمة IPv4. إذا تجاوز حجمها MTU، يسقطها الموجّه ويرسل رسالة ICMP من النوع Destination Unreachable والرمز Fragmentation Needed لتمكين اكتشاف MTU للمسار.",
        "source": "IETF RFC 1191 — Path MTU Discovery: https://www.rfc-editor.org/rfc/rfc1191",
        "difficulty": "medium",
        "subcategory": "IPv4 وMTU",
        "tags": [
          "IPv4",
          "PMTUD",
          "ICMP"
        ],
        "external_id": "tech-netos-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بعد أن يرسل عميل TCP مقطع SYN، يتلقى SYN-ACK صالحًا. ما المقطع الذي يكمل المصافحة الثلاثية؟",
        "options": [
          "ACK",
          "FIN-ACK",
          "RST",
          "SYN جديد"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تبدأ المصافحة بـSYN ثم يرد الخادم بـSYN-ACK، ويؤكد العميل رقم تسلسل الخادم بمقطع ACK؛ عندها يصبح الاتصال مؤسسًا.",
        "source": "IETF RFC 9293 — Transmission Control Protocol, Establishing a Connection: https://www.rfc-editor.org/rfc/rfc9293",
        "difficulty": "medium",
        "subcategory": "TCP",
        "tags": [
          "TCP",
          "مصافحة ثلاثية"
        ],
        "external_id": "tech-netos-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "يريد محلّل DNS معرفة خوادم البريد المسؤولة عن نطاق وترتيب أفضليتها. أي نوع سجل يطلب؟",
        "options": [
          "MX",
          "NS",
          "PTR",
          "TXT"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحمل سجل MX اسم مضيف مبادل البريد وقيمة preference؛ تُفضّل القيمة العددية الأقل. أما NS فيحدد خادم أسماء وPTR للبحث العكسي.",
        "source": "IETF RFC 1035 — Domain Names: Implementation and Specification, section 3.3.9: https://www.rfc-editor.org/rfc/rfc1035",
        "difficulty": "medium",
        "subcategory": "DNS",
        "tags": [
          "DNS",
          "MX"
        ],
        "external_id": "tech-netos-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في شبكة Ethernet محلية، يعرف المضيف عنوان IPv4 للبوابة لكنه لا يعرف عنوانها الفيزيائي. ما البروتوكول الذي يستخدمه للحصول على عنوان MAC؟",
        "options": [
          "ICMP",
          "DHCP",
          "NDP",
          "ARP"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يربط ARP عنوان بروتوكول IPv4 بعنوان Ethernet داخل الشبكة المحلية. NDP يؤدي وظيفة مقابلة ضمن IPv6، وليس IPv4.",
        "source": "IETF RFC 826 — An Ethernet Address Resolution Protocol: https://www.rfc-editor.org/rfc/rfc826",
        "difficulty": "medium",
        "subcategory": "شبكات محلية",
        "tags": [
          "ARP",
          "Ethernet",
          "MAC"
        ],
        "external_id": "tech-netos-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نظام بذاكرة افتراضية، حاولت عملية الوصول إلى صفحة صالحة منطقيًا لكنها غير موجودة حاليًا في الذاكرة الفعلية. ما الحدث المتوقع؟",
        "options": [
          "تقسيم فوري للعملية إلى خيطين",
          "خطأ صفحة يعالجه النظام بجلب الصفحة",
          "تجاوز تلقائي لذاكرة التخزين المؤقت للمعالج",
          "إرسال إشارة إنهاء حتمًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يولد الوصول إلى صفحة غير مقيمة page fault. إذا كان العنوان جزءًا صالحًا من فضاء العملية، يستطيع النواة جلب الصفحة إلى الذاكرة وتحديث جدول الصفحات ثم استئناف التنفيذ؛ ليس الخطأ قاتلًا بالضرورة.",
        "source": "Linux kernel documentation — Page Tables: https://docs.kernel.org/mm/page_tables.html",
        "difficulty": "medium",
        "subcategory": "الذاكرة الافتراضية",
        "tags": [
          "page fault",
          "ذاكرة افتراضية"
        ],
        "external_id": "tech-netos-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي آلية تتيح لبرنامج Unix إنشاء عملية جديدة تبدأ كنسخة من العملية المستدعية قبل تنفيذ برنامج آخر عادةً؟",
        "options": [
          "execve()",
          "fork()",
          "wait()",
          "mmap()"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تنشئ fork() عملية ابنًا بفضاء عناوين منطقي منسوخ من الأب، وغالبًا تُتبع في الابن بـexecve() لاستبدال صورة العملية ببرنامج جديد؛ execve() وحدها لا تنشئ عملية جديدة.",
        "source": "The Open Group Base Specifications Issue 7 — fork(): https://pubs.opengroup.org/onlinepubs/9699919799/functions/fork.html",
        "difficulty": "medium",
        "subcategory": "العمليات",
        "tags": [
          "POSIX",
          "fork",
          "exec"
        ],
        "external_id": "tech-netos-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الخاصية التي تميز الرابط الصلب hard link في نظام ملفات POSIX عن الرابط الرمزي؟",
        "options": [
          "يخزن دائمًا مسارًا نصيًا إلى الهدف",
          "يمكنه عبور أنظمة الملفات بلا قيود",
          "له inode الهدف نفسه فقط عندما يكون الهدف مجلدًا",
          "يشير إلى inode نفسه ويظل صالحًا بعد حذف الاسم الأصلي ما دام رابط صلب آخر موجودًا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الرابط الصلب اسم دليل إضافي للكائن نفسه، لذلك يزيد عدّاد الروابط ولا يعتمد على بقاء الاسم الأصلي. الرابط الرمزي كائن مستقل يحتوي مسارًا وقد يصبح معلقًا.",
        "source": "The Open Group Base Specifications Issue 7 — link(): https://pubs.opengroup.org/onlinepubs/9699919799/functions/link.html",
        "difficulty": "medium",
        "subcategory": "أنظمة الملفات",
        "tags": [
          "inode",
          "hard link",
          "POSIX"
        ],
        "external_id": "tech-netos-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في IPv6، ما الآلية القياسية التي تحل محل ARP لاكتشاف عنوان طبقة الوصلة لجار على الشبكة المحلية؟",
        "options": [
          "DHCPv6 فقط",
          "IGMP",
          "Neighbor Discovery باستخدام ICMPv6",
          "OSPFv3"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يستخدم IPv6 بروتوكول Neighbor Discovery ورسائل Neighbor Solicitation وNeighbor Advertisement ضمن ICMPv6 لحل عناوين طبقة الوصلة، بدل ARP المستخدم في IPv4.",
        "source": "IETF RFC 4861 — Neighbor Discovery for IP version 6: https://www.rfc-editor.org/rfc/rfc4861",
        "difficulty": "medium",
        "subcategory": "IPv6",
        "tags": [
          "IPv6",
          "NDP",
          "ICMPv6"
        ],
        "external_id": "tech-netos-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "يعلن موجّه مسارين في جدول IPv4: ‎10.0.0.0/8 عبر A و‎10.1.2.0/24 عبر B. إلى أي قفزة تُرسل رزمة وجهتها ‎10.1.2.77؟",
        "options": [
          "A لأن /8 أُضيف أولًا",
          "B لأن /24 هو التطابق الأطول",
          "كلاهما بالتناوب حتمًا",
          "تُسقط بسبب وجود مسارين متداخلين"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تطابق الوجهة كلا البادئتين، لكن قرار التوجيه يختار أطول بادئة مطابقة؛ /24 أكثر تحديدًا من /8، لذلك تُستخدم القفزة B.",
        "source": "IETF RFC 1812 — Requirements for IP Version 4 Routers, section 5.2.4.3: https://www.rfc-editor.org/rfc/rfc1812",
        "difficulty": "high",
        "subcategory": "التوجيه",
        "tags": [
          "CIDR",
          "longest prefix match"
        ],
        "external_id": "tech-netos-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "اتصال TCP لديه نافذة ازدحام cwnd=12 MSS ونافذة استقبال rwnd=8 MSS، ولا توجد بيانات غير مؤكدة. ما الحد الأقصى المبدئي للبيانات التي يمكن أن تكون قيد الإرسال؟",
        "options": [
          "12 MSS",
          "8 MSS",
          "20 MSS",
          "96 MSS"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحد الإرسال كل من التحكم في الازدحام والتحكم في التدفق، لذا نافذة الإرسال الفعلية لا تتجاوز min(cwnd,rwnd)=min(12,8)=8 MSS.",
        "source": "IETF RFC 5681 — TCP Congestion Control, section 2: https://www.rfc-editor.org/rfc/rfc5681",
        "difficulty": "high",
        "subcategory": "TCP المتقدم",
        "tags": [
          "cwnd",
          "rwnd",
          "تدفق"
        ],
        "external_id": "tech-netos-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "خلال استعلام DNS تكراري، أعاد الخادم سجلًا بقيمة TTL تساوي 300. بعد 120 ثانية، ما أكبر TTL ينبغي أن تعرضه نسخة مخبأة لذلك السجل، بافتراض عدم تحديثه؟",
        "options": [
          "300 ثانية",
          "420 ثانية",
          "صفر دائمًا",
          "180 ثانية"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "TTL يحدد الزمن الذي يجوز خلاله تخزين السجل مؤقتًا، وتُنقصه المدة المنقضية في المخبأ. بعد 120 ثانية من 300 يبقى بحد أقصى 180 ثانية.",
        "source": "IETF RFC 1035 — Domain Names: Implementation and Specification, section 3.2.1: https://www.rfc-editor.org/rfc/rfc1035",
        "difficulty": "high",
        "subcategory": "DNS",
        "tags": [
          "DNS cache",
          "TTL"
        ],
        "external_id": "tech-netos-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف دقيق لما تفعله ترجمة PAT/NAPT عند مشاركة عدة مضيفين عنوان IPv4 عامًا واحدًا؟",
        "options": [
          "تستبدل عناوين MAC فقط ولا تلمس ترويسة IP",
          "تشفّر حمولة كل رزمة تلقائيًا",
          "تضيف مسارًا ثابتًا منفصلًا لكل مضيف بلا تعديل للرزم",
          "تميز التدفقات بتعديل عناوين وأرقام منافذ النقل مع حفظ حالة الربط"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يسمح NAPT بتعدد المضيفين خلف عنوان خارجي واحد عبر ترجمة عنوان IP ومعرّف النقل، مثل منفذ TCP أو UDP، والاحتفاظ بربط يعيد الرزم الواردة إلى التدفق الداخلي الصحيح.",
        "source": "IETF RFC 3022 — Traditional IP Network Address Translator: https://www.rfc-editor.org/rfc/rfc3022",
        "difficulty": "high",
        "subcategory": "NAT",
        "tags": [
          "NAPT",
          "PAT",
          "منافذ"
        ],
        "external_id": "tech-netos-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في OSPF، لماذا لا يكفي عدد القفزات وحده لاختيار المسار الأفضل؟",
        "options": [
          "لأنه بروتوكول path-vector يعتمد AS_PATH",
          "لأن OSPF يحسب أقصر مسار وفق كلفة الروابط المعلنة لا عدد الموجّهات فقط",
          "لأنه لا يحتفظ بقاعدة حالة وصلات",
          "لأنه يختار دائمًا المسار ذي أعلى MTU"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "OSPF بروتوكول حالة وصلات، ويبني شجرة أقصر المسارات باستخدام metric هي مجموع كلف الواجهات. قد يتفوق مسار أكثر قفزات إذا كان مجموع كلفته أقل.",
        "source": "IETF RFC 2328 — OSPF Version 2, sections 2.1 and 16: https://www.rfc-editor.org/rfc/rfc2328",
        "difficulty": "high",
        "subcategory": "بروتوكولات التوجيه",
        "tags": [
          "OSPF",
          "link-state",
          "metric"
        ],
        "external_id": "tech-netos-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "شبكة IPv4 هي ‎192.0.2.0/26. بعد استبعاد عنواني الشبكة والبث، كم عنوانًا يمكن إسناده عادةً إلى مضيفين؟",
        "options": [
          "62",
          "64",
          "60",
          "126"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تترك بادئة /26 ست بتات للمضيف، أي 2^6=64 عنوانًا. في شبكة البث التقليدية يُحجز أول عنوان للشبكة وآخر عنوان للبث، فيبقى 62.",
        "source": "IETF RFC 4632 — Classless Inter-domain Routing (CIDR): https://www.rfc-editor.org/rfc/rfc4632",
        "difficulty": "high",
        "subcategory": "العنونة والتقسيم",
        "tags": [
          "CIDR",
          "subnetting",
          "IPv4"
        ],
        "external_id": "tech-netos-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "تحت خوارزمية الاستبدال LRU، الذاكرة تحوي الصفحات [1،2،3] وكانت 1 الأقل استخدامًا حديثًا. بعد الوصول إلى 2 ثم حدوث خطأ صفحة للصفحة 4، أي صفحة تُستبدل؟",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الوصول إلى 2 يجعلها حديثة الاستخدام، بينما تبقى 1 أقدم صفحة استعمالًا من بين الصفحات المقيمة؛ لذلك تختار LRU الصفحة 1 ضحية للاستبدال.",
        "source": "Silberschatz, Galvin & Gagne, Operating System Concepts, 10th ed., chapter 10 — Virtual Memory",
        "difficulty": "high",
        "subcategory": "إدارة الذاكرة",
        "tags": [
          "LRU",
          "page replacement"
        ],
        "external_id": "tech-netos-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي مجموعة تمثل الشروط الأربعة اللازمة معًا لحدوث الاختناق المتبادل وفق نموذج كوفمان؟",
        "options": [
          "الاستبعاد المتبادل، الإمساك والانتظار، عدم نزع المورد، الانتظار الدائري",
          "التزامن، الإنصاف، الأولوية، المقاطعة",
          "الترحيل، التجزئة، التخزين المؤقت، الاستبدال",
          "الانتظار المشغول، التبديل السياقي، الجوع، الانقلاب الأولوي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يمكن أن يقع deadlock إلا مع اجتماع mutual exclusion وhold-and-wait وno preemption وcircular wait. كسر أي شرط منها يمنع الاختناق ضمن هذا النموذج.",
        "source": "Silberschatz, Galvin & Gagne, Operating System Concepts, 10th ed., chapter 8 — Deadlocks",
        "difficulty": "high",
        "subcategory": "التزامن",
        "tags": [
          "deadlock",
          "Coffman conditions"
        ],
        "external_id": "tech-netos-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نظام يستخدم copy-on-write بعد fork()، متى تُنسخ صفحة ذاكرة فعلية عادةً إلى صفحة مستقلة للابن أو الأب؟",
        "options": [
          "فور استدعاء fork() لكل الصفحات",
          "عند أول قراءة من الصفحة",
          "فقط عند انتهاء العملية الأب",
          "عندما يحاول أحدهما الكتابة إلى الصفحة المشتركة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يسمح copy-on-write للأب والابن بمشاركة الصفحات مبدئيًا على أنها للقراءة. تُنشأ نسخة خاصة عند محاولة الكتابة، مما يؤجل النسخ ويتجنب نسخ صفحات لن تتغير.",
        "source": "Linux man-pages — fork(2): https://man7.org/linux/man-pages/man2/fork.2.html",
        "difficulty": "high",
        "subcategory": "العمليات والذاكرة",
        "tags": [
          "copy-on-write",
          "fork"
        ],
        "external_id": "tech-netos-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "عملية ذات ثلاثة خيوط مستخدم تنتقل من النمط المستخدم إلى النواة لتنفيذ system call حاجب. في نموذج one-to-one، ما النتيجة الأصح؟",
        "options": [
          "تُحجب العملية كلها بالضرورة لأن الخيوط تشترك في فضاء العناوين",
          "يتحول الاستدعاء الحاجب تلقائيًا إلى غير حاجب",
          "يمكن للنواة حجب ذلك الخيط وحده مع استمرار خيوط العملية الأخرى القابلة للتشغيل",
          "تنشئ النواة عملية جديدة لكل استدعاء"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في نموذج one-to-one يقابل كل خيط مستخدم خيطًا قابلًا للجدولة في النواة، ولذلك يمكن أن ينام الخيط الذي نفذ الاستدعاء الحاجب بينما تستمر خيوط أخرى من العملية نفسها.",
        "source": "Silberschatz, Galvin & Gagne, Operating System Concepts, 10th ed., chapter 4 — Threads & Concurrency",
        "difficulty": "high",
        "subcategory": "الخيوط",
        "tags": [
          "threads",
          "system call",
          "one-to-one"
        ],
        "external_id": "tech-netos-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نظام ملفات يستخدم journaling للبيانات الوصفية فقط، ما الضمان الأساسي المقصود بعد انقطاع مفاجئ للطاقة؟",
        "options": [
          "إعادة بنية نظام الملفات إلى حالة متسقة، دون ضمان أن أحدث محتوى للملفات كُتب كاملًا",
          "استعادة كل بايت من آخر عملية كتابة تطبيقية حتمًا",
          "منع تلف القرص الفيزيائي",
          "الاستغناء عن التخزين المؤقت للكتابة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تسجيل تغييرات البيانات الوصفية في journal يسمح بإعادة تشغيل المعاملات واستعادة اتساق البنية بعد الانهيار. لكنه لا يساوي تسجيل بيانات الملفات نفسها، لذا قد لا تكون أحدث البيانات التطبيقية محفوظة.",
        "source": "Linux kernel documentation — ext4 Journal (jbd2): https://docs.kernel.org/filesystems/ext4/journal.html",
        "difficulty": "high",
        "subcategory": "أنظمة الملفات",
        "tags": [
          "journaling",
          "ext4",
          "metadata"
        ],
        "external_id": "tech-netos-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في جدولة Round Robin، ماذا يحدث عادةً إذا صُغّرت الشريحة الزمنية كثيرًا جدًا مقارنة بزمن التبديل السياقي؟",
        "options": [
          "تتحول الخوارزمية إلى FCFS تمامًا",
          "يختفي زمن الاستجابة من دون أي كلفة",
          "ترتفع كلفة التبديل السياقي وتنخفض كفاءة المعالج",
          "تُمنع العمليات ذات الدفعات الطويلة من التنفيذ كليًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الشريحة الصغيرة تحسن سرعة التناوب حتى حد ما، لكن إذا قاربت كلفة تبديل السياق يُستهلك جزء كبير من وقت المعالج في الحفظ والاستعادة بدل تنفيذ العمل الفعلي.",
        "source": "Silberschatz, Galvin & Gagne, Operating System Concepts, 10th ed., chapter 5 — CPU Scheduling",
        "difficulty": "high",
        "subcategory": "جدولة المعالج",
        "tags": [
          "Round Robin",
          "context switch",
          "quantum"
        ],
        "external_id": "tech-netos-020",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-technology-ai-cybersecurity-02",
    "user_id": "system",
    "title": "الذكاء الاصطناعي والأمن السيبراني",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "تكنولوجيا",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في تعلم الآلة الخاضع للإشراف، ما الوظيفة الأساسية لمجموعة التحقق (validation set)؟",
        "options": [
          "تقدير التعميم النهائي بعد تثبيت جميع القرارات",
          "زيادة عدد أمثلة التدريب بنسخها",
          "تخزين الأوزان بعد كل دفعة",
          "ضبط المعلمات الفائقة واختيار النموذج دون التدريب عليها مباشرة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 35,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تُستخدم مجموعة التحقق للمفاضلة بين النماذج وضبط المعلمات الفائقة، بينما تُحجز مجموعة الاختبار لتقدير الأداء النهائي بعد انتهاء الاختيارات؛ وإلا تسرب أثر الاختيار إلى التقييم.",
        "source": "James, Witten, Hastie & Tibshirani — An Introduction to Statistical Learning, 2nd ed., §5.1: https://www.statlearning.com/",
        "difficulty": "medium",
        "subcategory": "تعلم الآلة",
        "tags": [
          "مجموعة التحقق",
          "تعميم",
          "معلمات فائقة"
        ],
        "external_id": "tech-ai-cyber-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف يميز التصيد الاحتيالي الموجّه (spear phishing) عن التصيد العام؟",
        "options": [
          "يستهدف شخصًا أو جهة بعينها برسالة مصممة من معلومات سياقية",
          "يعمل حصرًا عبر رسائل SMS",
          "يستغل ثغرة ذاكرة بلا تفاعل بشري",
          "يمنع الضحية من فتح المرفقات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التصيد الموجّه يستخدم سياقًا يخص ضحية أو مؤسسة محددة لرفع مصداقية الخداع، بخلاف الحملات العامة واسعة التوزيع؛ ولا يرتبط بوسيلة اتصال واحدة.",
        "source": "NIST Computer Security Resource Center Glossary — spear phishing: https://csrc.nist.gov/glossary/term/spear_phishing",
        "difficulty": "medium",
        "subcategory": "هندسة اجتماعية",
        "tags": [
          "تصيد موجّه",
          "هندسة اجتماعية",
          "هوية"
        ],
        "external_id": "tech-ai-cyber-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ماذا يحقق التجزئة المملحة لكلمات المرور مقارنة بتجزئة كل كلمة منفردة بلا ملح؟",
        "options": [
          "تجعل كلمة المرور قابلة للاسترجاع بمفتاح خاص",
          "تمنع أي تخمين متصل بالشبكة",
          "تجعل القيم المتطابقة تنتج تجزئات مختلفة وتضعف فاعلية الجداول المحسوبة مسبقًا",
          "تستبدل الحاجة إلى دالة اشتقاق بطيئة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الملح قيمة عشوائية فريدة تُدخل مع كلمة المرور؛ لذا لا تتساوى التجزئات حتى عند تساوي الكلمات، وتصبح الجداول المسبقة غير مجدية على نطاق واسع. لكنه لا يمنع التخمين ولا يغني عن دالة اشتقاق مناسبة.",
        "source": "NIST SP 800-63B — Memorized Secrets: https://pages.nist.gov/800-63-4/sp800-63b.html",
        "difficulty": "medium",
        "subcategory": "مصادقة",
        "tags": [
          "تجزئة",
          "ملح",
          "كلمات مرور"
        ],
        "external_id": "tech-ai-cyber-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في مصفوفة الالتباس لمصنف ثنائي، ماذا تعني الحالة الإيجابية الكاذبة؟",
        "options": [
          "تنبأ النموذج بالسالب وكانت الحقيقة موجبة",
          "تنبأ النموذج بالموجب وكانت الحقيقة سالبة",
          "تنبأ النموذج بالموجب وكانت الحقيقة موجبة",
          "رفض النموذج إصدار تنبؤ"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الإيجابي الكاذب هو إنذار أو تصنيف موجب لحالة سالبة في الحقيقة. ويقابله السلبي الكاذب، حيث يفوّت المصنف حالة موجبة فعلية.",
        "source": "NIST AI 100-1 — Artificial Intelligence Risk Management Framework, Appendix A: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
        "difficulty": "medium",
        "subcategory": "تقييم النماذج",
        "tags": [
          "مصفوفة الالتباس",
          "إيجابي كاذب",
          "تصنيف"
        ],
        "external_id": "tech-ai-cyber-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي خاصية أمنية توفرها التوقيعات الرقمية مباشرة عند التحقق الصحيح؟",
        "options": [
          "سرية محتوى الرسالة",
          "إخفاء عنوان المرسل الشبكي",
          "أصالة المنشأ وسلامة البيانات",
          "منع نسخ الملف الموقّع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يتيح التوقيع الرقمي كشف تعديل البيانات وربط التوقيع بحائز المفتاح الخاص، فيدعم السلامة وأصالة المنشأ. أما السرية فتحتاج إلى التشفير، والتوقيع لا يمنع النسخ.",
        "source": "NIST FIPS 186-5 — Digital Signature Standard: https://csrc.nist.gov/pubs/fips/186-5/final",
        "difficulty": "medium",
        "subcategory": "تشفير تطبيقي",
        "tags": [
          "توقيع رقمي",
          "سلامة",
          "أصالة"
        ],
        "external_id": "tech-ai-cyber-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يُعد مبدأ أقل امتياز (least privilege) مفيدًا حتى إذا اختُرق حساب مستخدم؟",
        "options": [
          "لأنه يحد الصلاحيات المتاحة للحساب، فيقل نطاق الضرر المحتمل",
          "لأنه يضمن اكتشاف الاختراق فورًا",
          "لأنه يشفر جميع الملفات تلقائيًا",
          "لأنه يلغي الحاجة إلى المصادقة المتعددة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يقصر أقل امتياز كل كيان على الصلاحيات اللازمة لمهمته. وعند اختراقه لا يرث المهاجم تلقائيًا قدرات إدارية أو وصولًا أوسع، فينخفض نصف قطر الانفجار.",
        "source": "NIST SP 800-53 Rev. 5 — AC-6 Least Privilege: https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "difficulty": "medium",
        "subcategory": "ضبط الوصول",
        "tags": [
          "أقل امتياز",
          "صلاحيات",
          "تقليل الأثر"
        ],
        "external_id": "tech-ai-cyber-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الفرق الجوهري بين التشفير المتماثل وغير المتماثل؟",
        "options": [
          "المتماثل يضمن التوقيع دائمًا، وغير المتماثل يضمن السرية دائمًا",
          "غير المتماثل لا يعتمد على مسائل رياضية",
          "المتماثل يستخدم مفتاحًا مشتركًا للتشفير وفكّه، وغير المتماثل يستخدم زوج مفتاحين مترابطين",
          "المتماثل لا يمكن تطبيقه على البيانات الرقمية"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في التشفير المتماثل يشترك الطرفان في مفتاح سري، أما الأنظمة غير المتماثلة فتستخدم مفتاحًا عامًا وآخر خاصًا بعلاقة رياضية. ولا يعني نوع المفتاح وحده تحقق كل غرض أمني تلقائيًا.",
        "source": "NIST SP 800-175B Rev. 1 — Guideline for Using Cryptographic Standards: https://csrc.nist.gov/pubs/sp/800/175/b/r1/final",
        "difficulty": "medium",
        "subcategory": "تشفير",
        "tags": [
          "متماثل",
          "غير متماثل",
          "مفاتيح"
        ],
        "external_id": "tech-ai-cyber-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في هجوم حقن SQL، ما الإجراء البرمجي الأكثر مباشرة لمنع مدخل المستخدم من تغيير بنية الاستعلام؟",
        "options": [
          "ترميز قاعدة البيانات بـ UTF-8",
          "استخدام استعلامات معلّمة (parameterized queries) تفصل البيانات عن الشيفرة",
          "إخفاء رسائل الخطأ وحده",
          "زيادة طول كلمة مرور مدير القاعدة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 35,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تربط الاستعلامات المعلّمة المدخلات كقيم لا كأجزاء قابلة للتفسير من صياغة SQL، فتمنعها من تعديل بنية الأمر. إخفاء الأخطاء مفيد لكنه لا يزيل الثغرة.",
        "source": "OWASP Cheat Sheet Series — SQL Injection Prevention: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
        "difficulty": "medium",
        "subcategory": "أمن التطبيقات",
        "tags": [
          "SQL injection",
          "استعلامات معلّمة",
          "مدخلات"
        ],
        "external_id": "tech-ai-cyber-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المقصود بفرط التكيّف (overfitting) في نموذج تعلم آلة؟",
        "options": [
          "انخفاض الأداء على التدريب والاختبار معًا بسبب بساطة النموذج",
          "استخدام بيانات أقل من سعة التخزين",
          "تشغيل النموذج على أكثر من معالج",
          "تعلم النموذج تفاصيل وضوضاء بيانات التدريب على حساب التعميم على بيانات جديدة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحدث فرط التكيّف حين يطابق النموذج خصائص خاصة بعينة التدريب، بما فيها الضوضاء، فيبدو أداؤه التدريبي قويًا بينما يتدهور على أمثلة لم يرها.",
        "source": "Goodfellow, Bengio & Courville — Deep Learning, §5.2: https://www.deeplearningbook.org/contents/ml.html",
        "difficulty": "medium",
        "subcategory": "تعلم الآلة",
        "tags": [
          "فرط التكيّف",
          "تعميم",
          "ضوضاء"
        ],
        "external_id": "tech-ai-cyber-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في نموذج السرية والسلامة والتوافر (CIA triad)، أي حادث يمس التوافر أساسًا؟",
        "options": [
          "قراءة ملف سري بلا تصريح",
          "إغراق خدمة بطلبات يمنع المستخدمين الشرعيين من الوصول",
          "تعديل سجل مالي خلسة",
          "انتحال توقيع مطور"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التوافر يعني إتاحة المعلومات والخدمات عند الحاجة. إغراق الخدمة يعطل الوصول المشروع، بينما القراءة غير المصرح بها تمس السرية والتعديل الخفي يمس السلامة.",
        "source": "NIST SP 800-12 Rev. 1 — An Introduction to Information Security: https://csrc.nist.gov/pubs/sp/800/12/r1/final",
        "difficulty": "medium",
        "subcategory": "مبادئ الأمن",
        "tags": [
          "CIA",
          "توافر",
          "حجب خدمة"
        ],
        "external_id": "tech-ai-cyber-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في محول (Transformer)، ما الذي تسمح به آلية الانتباه الذاتي تحديدًا؟",
        "options": [
          "تحديث الأوزان من دون دالة خسارة",
          "ربط تمثيل كل موضع بمواضع أخرى عبر أوزان مشتقة من الاستعلامات والمفاتيح",
          "ضغط جميع الرموز إلى قيمة ثابتة قبل المعالجة",
          "استبدال التضمينات بقواعد نحوية مكتوبة يدويًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحسب الانتباه توافق الاستعلام مع مفاتيح المواضع، ثم يستخدم الأوزان لدمج قيمها؛ وهكذا يعتمد تمثيل الرمز على سياقه حتى لو كان بعيدًا، من دون اشتراط تكرار زمني.",
        "source": "Vaswani et al. — Attention Is All You Need (2017), §3.2: https://arxiv.org/abs/1706.03762",
        "difficulty": "high",
        "subcategory": "نماذج عميقة",
        "tags": [
          "Transformer",
          "انتباه ذاتي",
          "استعلام ومفتاح وقيمة"
        ],
        "external_id": "tech-ai-cyber-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا لا تكفي دالة تجزئة عادية سريعة مثل SHA-256 وحدها لتخزين كلمات المرور بأمان؟",
        "options": [
          "لأنها لا تنتج خرجًا ثابت الطول",
          "لأنها تستخدم مفتاحًا عامًا",
          "لأن سرعتها تمكّن المهاجم من اختبار عدد هائل من التخمينات، بخلاف دوال اشتقاق قابلة لزيادة الكلفة",
          "لأنها تعيد كلمة المرور عند اصطدام تجزئتين"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "صُممت SHA-256 للكفاءة العامة، وهذه السرعة تفيد التخمين غير المتصل بعد تسريب التجزئات. دوال اشتقاق كلمات المرور تضيف ملحًا وكلفة قابلة للضبط، وقد تضيف كلفة ذاكرة، لإبطاء كل محاولة.",
        "source": "OWASP Cheat Sheet Series — Password Storage: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
        "difficulty": "high",
        "subcategory": "مصادقة وتجزئة",
        "tags": [
          "SHA-256",
          "KDF",
          "تخمين غير متصل"
        ],
        "external_id": "tech-ai-cyber-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في TLS 1.3، ما فائدة استخدام تبادل مفاتيح (EC)DHE في المصافحة العادية؟",
        "options": [
          "يجعل شهادة الخادم غير ضرورية في كل الحالات",
          "يمنع الخادم من مصادقة العميل",
          "يحوّل التشفير المتماثل إلى تجزئة بلا مفتاح",
          "يوفر سرية أمامية لأن مفاتيح الجلسة لا تُشتق من مفتاح الخادم طويل الأمد وحده"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يولّد (EC)DHE أسرارًا مؤقتة للجلسة؛ لذلك لا يكشف الاستيلاء اللاحق على مفتاح مصادقة الخادم طويل الأمد مفاتيح جلسات سابقة مسجلة، وهي خاصية السرية الأمامية.",
        "source": "IETF RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3, §1.2: https://www.rfc-editor.org/rfc/rfc8446",
        "difficulty": "high",
        "subcategory": "أمن الشبكات",
        "tags": [
          "TLS 1.3",
          "ECDHE",
          "سرية أمامية"
        ],
        "external_id": "tech-ai-cyber-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي سيناريو يصف هجوم تسميم بيانات التدريب (data poisoning)؟",
        "options": [
          "تعديل مدخل وقت الاستدلال فقط لإرباك نموذج ثابت",
          "سرقة أوزان النموذج عبر نسخة احتياطية",
          "إدخال أمثلة خبيثة في بيانات التدريب للتأثير في سلوك النموذج المتعلم",
          "قياس زمن الاستجابة لاستنتاج مفتاح تشفير"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التسميم يستهدف مرحلة التدريب أو بياناتها ليغيّر النموذج الناتج، وقد يخفض دقته أو يزرع بابًا خلفيًا. أما تعديل مثال عند الاستدلال فهو تهرب خصومي لا تسميم تدريب.",
        "source": "NIST AI 100-2e2023 — Adversarial Machine Learning: A Taxonomy and Terminology: https://csrc.nist.gov/pubs/ai/100/2/e2023/final",
        "difficulty": "high",
        "subcategory": "أمن تعلم الآلة",
        "tags": [
          "تسميم البيانات",
          "باب خلفي",
          "تعلم خصومي"
        ],
        "external_id": "tech-ai-cyber-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الضمان المركزي للخصوصية التفاضلية عند مقارنة مجموعتي بيانات تختلفان في سجل فرد واحد؟",
        "options": [
          "تبقى احتمالات المخرجات متقاربة ضمن حد مضبوط، فيصعب استنتاج مشاركة الفرد",
          "يجب أن تكون مخرجات الآلية متطابقة حرفيًا",
          "تُحذف جميع السمات الحساسة من البيانات",
          "لا يمكن للمهاجم معرفة أي إحصاء سكاني"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تحد الخصوصية التفاضلية من مقدار تغير توزيع المخرجات عند إضافة سجل فرد أو حذفه، باستخدام معاملي الخصوصية ε وδ بحسب التعريف؛ وهي لا تتطلب تطابق النتائج ولا تمنع الإحصاءات المفيدة.",
        "source": "Dwork & Roth — The Algorithmic Foundations of Differential Privacy, Definition 2.4: https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf",
        "difficulty": "high",
        "subcategory": "خصوصية البيانات",
        "tags": [
          "خصوصية تفاضلية",
          "epsilon",
          "بيانات متجاورة"
        ],
        "external_id": "tech-ai-cyber-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما سبب خطورة إعادة استخدام nonce مع المفتاح نفسه في نمط AES-GCM؟",
        "options": [
          "يزيد طول النص المشفر فقط",
          "يحوّل AES تلقائيًا إلى RSA",
          "يمنع فك التشفير حتى بالمفتاح الصحيح من دون أي أثر آخر",
          "قد يكشف علاقات بين النصوص الصريحة ويقوض سلامة وسوم المصادقة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يعتمد GCM على عدم تكرار متجه البدء مع المفتاح. التكرار يعيد استخدام تدفق العداد فيكشف XOR النصوص الصريحة، كما يتيح علاقات جبرية قد تؤدي إلى تزوير وسوم المصادقة.",
        "source": "NIST SP 800-38D — Galois/Counter Mode, §8: https://csrc.nist.gov/pubs/sp/800/38/d/final",
        "difficulty": "high",
        "subcategory": "تشفير موثّق",
        "tags": [
          "AES-GCM",
          "nonce",
          "إعادة استخدام"
        ],
        "external_id": "tech-ai-cyber-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في بنية انعدام الثقة (Zero Trust)، على أي افتراض يجب ألا يعتمد قرار الوصول؟",
        "options": [
          "هوية الكيان وسلامة جهازه",
          "الثقة الضمنية لمجرد وجود الطلب داخل شبكة المؤسسة",
          "سياسة وصول ديناميكية",
          "الحد الأدنى من الصلاحيات اللازمة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يلغي انعدام الثقة الامتياز الضمني الناتج من الموقع الشبكي. تُقيّم طلبات الوصول وفق الهوية والجهاز والسياسة والسياق، سواء جاء الطلب من داخل المحيط التقليدي أم خارجه.",
        "source": "NIST SP 800-207 — Zero Trust Architecture, §2.1: https://csrc.nist.gov/pubs/sp/800/207/final",
        "difficulty": "high",
        "subcategory": "معمارية أمنية",
        "tags": [
          "Zero Trust",
          "ثقة ضمنية",
          "سياسة وصول"
        ],
        "external_id": "tech-ai-cyber-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما المقياس الأنسب عندما تكون الفئة الموجبة نادرة وتريد موازنة الدقة الإيجابية (precision) والاستدعاء (recall) في رقم واحد؟",
        "options": [
          "درجة F1 بوصفها المتوسط التوافقي لـ precision وrecall",
          "المتوسط الحسابي للدقة الكلية والخسارة",
          "معدل الإيجابيات الحقيقية وحده",
          "الخطأ التربيعي المتوسط للملصقات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "درجة F1 هي المتوسط التوافقي للدقة الإيجابية والاستدعاء، فتكون مرتفعة فقط إذا كان الاثنان مرتفعين. أما الدقة الكلية فقد تبدو ممتازة في بيانات غير متوازنة لمجرد توقع الفئة الشائعة.",
        "source": "Powers — Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation: https://arxiv.org/abs/2010.16061",
        "difficulty": "high",
        "subcategory": "تقييم النماذج",
        "tags": [
          "F1",
          "precision",
          "recall"
        ],
        "external_id": "tech-ai-cyber-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا يُستخدم HMAC بدل الاكتفاء بحساب تجزئة عادية للرسالة عند طلب مصادقة مصدرها؟",
        "options": [
          "لأن HMAC يشفر الرسالة ويخفي طولها",
          "لأن HMAC يضم مفتاحًا سريًا في بناء مصمم لمقاومة التزوير، بخلاف التجزئة العامة التي يستطيع أي شخص حسابها",
          "لأن التجزئة العادية لا تكشف التعديل إطلاقًا",
          "لأن HMAC لا يحتاج إلى خوارزمية تجزئة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يمكن لأي طرف حساب تجزئة رسالة معدلة، فلا تثبت مصدرًا. أما HMAC فيربط وسم السلامة بمفتاح سري مشترك عبر بناء محدد، فيدعم مصادقة الرسالة وسلامتها من مهاجم لا يملك المفتاح.",
        "source": "IETF RFC 2104 — HMAC: Keyed-Hashing for Message Authentication: https://www.rfc-editor.org/rfc/rfc2104",
        "difficulty": "high",
        "subcategory": "تشفير تطبيقي",
        "tags": [
          "HMAC",
          "مصادقة رسالة",
          "مفتاح سري"
        ],
        "external_id": "tech-ai-cyber-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي شرط يميز هجوم نقل الحالة (CSRF) الكلاسيكي على تطبيق ويب؟",
        "options": [
          "ينفذ المتصفح طلبًا غير مرغوب فيه مستفيدًا من بيانات اعتماد يرفقها تلقائيًا لجلسة الضحية",
          "يشغّل المهاجم شيفرة SQL داخل قاعدة البيانات بلا جلسة",
          "يقرأ المهاجم الذاكرة الفيزيائية عبر DMA فقط",
          "يغيّر خادم DNS المفتاح الخاص للشهادة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يخدع CSRF متصفح مستخدم مصادق عليه لإرسال طلب تغييري، وتلحق به ملفات الارتباط أو بيانات الجلسة تلقائيًا. لذلك تشمل الدفاعات رموز CSRF وSameSite والتحقق من المصدر.",
        "source": "OWASP Cheat Sheet Series — Cross-Site Request Forgery Prevention: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
        "difficulty": "high",
        "subcategory": "أمن الويب",
        "tags": [
          "CSRF",
          "جلسة",
          "SameSite"
        ],
        "external_id": "tech-ai-cyber-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في MITRE ATT&CK، ما الفرق بين التكتيك والتقنية؟",
        "options": [
          "التكتيك أداة برمجية، والتقنية عنوان IP",
          "التقنية مرحلة أعلى من التكتيك دائمًا",
          "لا فرق؛ المصطلحان مترادفان",
          "التكتيك يصف هدف الخصم المرحلي، والتقنية تصف الكيفية التي يسعى بها لتحقيقه"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التكتيك يمثل الغاية المرحلية مثل اكتساب الاعتماد أو الحركة الجانبية، بينما التقنية تمثل الأسلوب المستخدم لتحقيق تلك الغاية؛ وقد تُسهم تقنية في أكثر من سياق تكتيكي.",
        "source": "MITRE ATT&CK — Design and Philosophy, Tactics and Techniques: https://attack.mitre.org/docs/ATTACK_Design_and_Philosophy_March_2020.pdf",
        "difficulty": "high",
        "subcategory": "نمذجة سلوك الخصوم",
        "tags": [
          "MITRE ATT&CK",
          "تكتيك",
          "تقنية"
        ],
        "external_id": "tech-ai-cyber-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الذي يميز هجوم استدلال العضوية (membership inference) على نموذج تعلم آلة؟",
        "options": [
          "يحاول تحديد هل كان سجل معين ضمن بيانات تدريب النموذج",
          "يستخرج المفتاح الخاص من شهادة TLS",
          "يضيف أمثلة مسمومة قبل التدريب",
          "يحوّل نموذج التصنيف إلى نموذج انحدار"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هدف استدلال العضوية هو تمييز ما إذا استُخدم سجل بعينه في التدريب، غالبًا باستغلال اختلافات الثقة أو السلوك بين أمثلة التدريب وغيرها؛ لذا فهو تهديد خصوصية لا تسميم بيانات.",
        "source": "Shokri et al. — Membership Inference Attacks Against Machine Learning Models, IEEE S&P 2017: https://arxiv.org/abs/1610.05820",
        "difficulty": "high",
        "subcategory": "خصوصية تعلم الآلة",
        "tags": [
          "استدلال العضوية",
          "خصوصية",
          "تدريب"
        ],
        "external_id": "tech-ai-cyber-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في DNSSEC، ماذا تثبت سلسلة الثقة بنجاح، وماذا لا توفر؟",
        "options": [
          "تخفي اسم النطاق وتضمن توافر الخادم",
          "تستبدل TLS وتثبت محتوى صفحة الويب",
          "تثبت أصالة وسلامة بيانات DNS الموقعة، لكنها لا تشفر استعلام DNS أو جوابه",
          "تمنع تسجيل أي نطاق مشابه بصريًا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتحقق DNSSEC بالتوقيعات وسلسلة المفاتيح من أن بيانات DNS أصلية ولم تُعدّل، لكنها لا تضيف سرية للنقل؛ يمكن لمراقب الشبكة رؤية الاستعلام والجواب ما لم تُستخدم قناة مشفرة منفصلة.",
        "source": "IETF RFC 4033 — DNS Security Introduction and Requirements, §3: https://www.rfc-editor.org/rfc/rfc4033",
        "difficulty": "high",
        "subcategory": "أمن DNS",
        "tags": [
          "DNSSEC",
          "سلسلة ثقة",
          "سلامة"
        ],
        "external_id": "tech-ai-cyber-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في التعلم الاتحادي (federated learning)، لماذا لا يعني بقاء البيانات الخام على الأجهزة تحقق الخصوصية تلقائيًا؟",
        "options": [
          "لأن الخادم يجب أن ينسخ جميع البيانات الخام قبل كل جولة",
          "لأن تحديثات النموذج نفسها قد تسرب معلومات، فتظل الحاجة إلى تجميع آمن أو خصوصية تفاضلية بحسب التهديد",
          "لأن النموذج لا يتعلم إلا من بيانات عامة",
          "لأن التشفير يمنع جمع التحديثات نهائيًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "التعلم الاتحادي يقلل مركزية البيانات الخام، لكن التدرجات أو تحديثات المعلمات قد تحمل إشارات عن أمثلة العملاء. لذلك تُضاف تقنيات مثل التجميع الآمن والخصوصية التفاضلية وفق نموذج التهديد.",
        "source": "Kairouz et al. — Advances and Open Problems in Federated Learning, Foundations and Trends in Machine Learning (2021), §4: https://arxiv.org/abs/1912.04977",
        "difficulty": "high",
        "subcategory": "تعلم موزع آمن",
        "tags": [
          "تعلم اتحادي",
          "تسرب التدرجات",
          "تجميع آمن"
        ],
        "external_id": "tech-ai-cyber-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي وصف أدق لهجوم حقن التعليمات (prompt injection) على تطبيق يستخدم نموذجًا لغويًا مع أدوات خارجية؟",
        "options": [
          "تعديل أوزان النموذج أثناء التدريب فقط",
          "تجاوز جدار ناري عبر تجزئة كلمة المرور",
          "زيادة طول السياق لتحسين الدقة بلا أثر أمني",
          "مدخل غير موثوق يحاول تغيير تعليمات النموذج أو حمله على استخدام أدوات بما يخالف قصد التطبيق"
        ],
        "correct_index": 3,
        "time_limit_seconds": 50,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينشأ الحقن حين تُعامل بيانات الخصم كتعليمات مؤثرة، مباشرة أو عبر محتوى مسترجع. وتزداد الخطورة مع الأدوات؛ لذا يلزم تقييد الصلاحيات والتحقق من الإجراءات وعدم اعتبار الفصل النصي حدًا أمنيًا كافيًا.",
        "source": "NIST AI 100-2e2025 — Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations: https://csrc.nist.gov/pubs/ai/100/2/e2025/final",
        "difficulty": "high",
        "subcategory": "أمن النماذج اللغوية",
        "tags": [
          "prompt injection",
          "أدوات",
          "مدخل غير موثوق"
        ],
        "external_id": "tech-ai-cyber-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-sports-world-cup-major-tournaments-01",
    "user_id": "system",
    "title": "تاريخ كأس العالم والبطولات الكبرى",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "رياضة",
    "language": "ar",
    "quiz_difficulty": "medium",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "في النسخة الافتتاحية لكأس العالم عام 1930، أي منتخب فاز باللقب وعلى حساب مَن في المباراة النهائية؟",
        "options": [
          "الأرجنتين على أوروغواي",
          "إيطاليا على تشيكوسلوفاكيا",
          "البرازيل على يوغوسلافيا",
          "أوروغواي على الأرجنتين"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استضافت أوروغواي النسخة الأولى، وهزمت الأرجنتين 4–2 في النهائي بملعب سنتيناريو لتصبح أول بطلة للعالم.",
        "source": "FIFA — Uruguay 1930: https://www.fifa.com/tournaments/mens/worldcup/1930uruguay",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "أوروغواي 1930",
          "النهائي",
          "أوروغواي"
        ],
        "external_id": "sport-history-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "لماذا لا تُعد مباراة البرازيل وأوروغواي الحاسمة في مونديال 1950 نهائيًا تقليديًا من مباراة واحدة؟",
        "options": [
          "لأنها أُعيدت مرتين",
          "لأن المرحلة الختامية كانت مجموعة من أربعة منتخبات",
          "لأن اللقب حُسم بفارق الأهداف قبلها",
          "لأنها كانت مباراة فاصلة بعد تعادل نهائي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "حُسم مونديال 1950 عبر مجموعة نهائية رباعية. جاءت مباراة أوروغواي والبرازيل في جولتها الأخيرة وحسم فوز أوروغواي 2–1 اللقب، لكنها لم تكن نهائيًا بنظام خروج المغلوب.",
        "source": "FIFA — Brazil 1950: https://www.fifa.com/tournaments/mens/worldcup/1950brazil",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "البرازيل 1950",
          "ماراكانا",
          "نظام البطولة"
        ],
        "external_id": "sport-history-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي إنجاز فردي حققه جيف هيرست في نهائي كأس العالم 1966 وظل فريدًا في نهائيات الرجال حتى نسخة 2022؟",
        "options": [
          "سجل في كل مباريات البطولة",
          "سجل ثلاثية في المباراة النهائية",
          "أحرز هدفًا من منتصف الملعب",
          "صد ركلتي جزاء في النهائي"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجل هيرست ثلاثة أهداف لإنجلترا في فوزها 4–2 على ألمانيا الغربية. ظل صاحب الثلاثية الوحيدة في نهائي كأس العالم للرجال إلى أن سجل كيليان مبابي ثلاثية في نهائي 2022.",
        "source": "FIFA — Geoff Hurst and the 1966 final: https://www.fifa.com/tournaments/mens/worldcup/1966england",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "إنجلترا 1966",
          "جيف هيرست",
          "هاتريك"
        ],
        "external_id": "sport-history-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الأثر المباشر لفوز البرازيل بكأس العالم للمرة الثالثة عام 1970 على كأس جول ريميه؟",
        "options": [
          "مُنحت البرازيل حق الاحتفاظ بها نهائيًا",
          "أُعيدت الكأس إلى أوروغواي",
          "أُلغيت قاعدة احتساب الأهداف",
          "أصبح اسمها كأس القارات"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نصت القاعدة على احتفاظ أول منتخب يفوز بالبطولة ثلاث مرات بكأس جول ريميه. حققت البرازيل فوزها الثالث في 1970، فاحتفظت بالكأس واستُحدثت كأس جديدة للنسخ التالية.",
        "source": "FIFA Museum — The Jules Rimet Cup: https://www.fifamuseum.com/en/explore/fifamuseumplus/blog/the-jules-rimet-cup",
        "difficulty": "medium",
        "subcategory": "كؤوس ورموز",
        "tags": [
          "البرازيل 1970",
          "جول ريميه",
          "الكأس"
        ],
        "external_id": "sport-history-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي تغيير بنيوي بارز شهدته نهائيات كأس العالم في إسبانيا 1982؟",
        "options": [
          "إدخال ركلات الترجيح لأول مرة",
          "رفع عدد المنتخبات من 16 إلى 24",
          "إلغاء دور المجموعات",
          "رفع عدد المنتخبات من 24 إلى 32"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "كانت إسبانيا 1982 أول نسخة تضم 24 منتخبًا بدلًا من 16، ما وسّع تمثيل الاتحادات القارية وفرض مرحلتين من المجموعات قبل نصف النهائي.",
        "source": "FIFA — Spain 1982: https://www.fifa.com/tournaments/mens/worldcup/1982spain",
        "difficulty": "medium",
        "subcategory": "نظم البطولات",
        "tags": [
          "إسبانيا 1982",
          "التوسع",
          "24 منتخبًا"
        ],
        "external_id": "sport-history-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما السابقة التي سجلها نهائي كأس العالم 1994 بين البرازيل وإيطاليا؟",
        "options": [
          "أول نهائي يُحسم بهدف ذهبي",
          "أول نهائي يُعاد في اليوم التالي",
          "أول نهائي يُحسم بركلات الترجيح",
          "أول نهائي بلا بطاقات"
        ],
        "correct_index": 2,
        "time_limit_seconds": 30,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "انتهى النهائي بالتعادل 0–0 بعد الوقت الإضافي، ثم فازت البرازيل بركلات الترجيح، فكان أول نهائي لكأس العالم يُحسم بهذه الوسيلة.",
        "source": "FIFA — USA 1994: https://www.fifa.com/tournaments/mens/worldcup/1994usa",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "الولايات المتحدة 1994",
          "ركلات الترجيح",
          "البرازيل"
        ],
        "external_id": "sport-history-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "بماذا تميزت استضافة كأس العالم 2002 تاريخيًا؟",
        "options": [
          "أول نسخة خارج أوروبا فقط",
          "أول نسخة في آسيا وأول استضافة مشتركة",
          "أول نسخة تقام شتاءً",
          "أول نسخة بثلاث دول مضيفة"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نظمت كوريا الجنوبية واليابان بطولة 2002، فكانت أول كأس عالم في آسيا وأول نسخة يشترك بلدان في استضافتها.",
        "source": "FIFA — Korea/Japan 2002: https://www.fifa.com/tournaments/mens/worldcup/2002korea-japan",
        "difficulty": "medium",
        "subcategory": "استضافة البطولات",
        "tags": [
          "كوريا واليابان 2002",
          "آسيا",
          "استضافة مشتركة"
        ],
        "external_id": "sport-history-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الإنجاز الجغرافي الذي حققته إسبانيا بتتويجها في جنوب أفريقيا 2010؟",
        "options": [
          "أول منتخب أفريقي يفوز باللقب",
          "أول منتخب أوروبي يفوز بكأس العالم خارج أوروبا",
          "أول حامل لقب يفوز بكل مبارياته",
          "أول منتخب يفوز دون استقبال أهداف"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بتغلبها على هولندا في جوهانسبرغ، أصبحت إسبانيا أول منتخب أوروبي يتوج بكأس العالم في بطولة أقيمت خارج القارة الأوروبية.",
        "source": "FIFA — South Africa 2010: https://www.fifa.com/tournaments/mens/worldcup/2010south-africa",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "جنوب أفريقيا 2010",
          "إسبانيا",
          "أوروبا"
        ],
        "external_id": "sport-history-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منتخب أصبح في 2014 أول منتخب أوروبي يحرز كأس العالم في قارتي أمريكا؟",
        "options": [
          "ألمانيا",
          "إيطاليا",
          "فرنسا",
          "إسبانيا"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "فازت ألمانيا على الأرجنتين 1–0 في ريو دي جانيرو، فكانت أول دولة أوروبية تتوج بكأس العالم على أرض من قارتي أمريكا.",
        "source": "FIFA — Brazil 2014: https://www.fifa.com/tournaments/mens/worldcup/2014brazil",
        "difficulty": "medium",
        "subcategory": "كأس العالم لكرة القدم",
        "tags": [
          "البرازيل 2014",
          "ألمانيا",
          "ماراكانا"
        ],
        "external_id": "sport-history-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما أول بطولة دولية كبرى للمنتخبات أُقيمت ضمن الألعاب الأولمبية للسيدات عام 1996، ومن فاز بها؟",
        "options": [
          "الرجبي؛ نيوزيلندا",
          "الكريكيت؛ أستراليا",
          "كرة القدم؛ النرويج",
          "كرة القدم؛ الولايات المتحدة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "دخلت كرة القدم النسائية البرنامج الأولمبي في أتلانتا 1996، وفازت الولايات المتحدة بالذهب بعد تغلبها على الصين في النهائي.",
        "source": "IOC Olympics — Football at Atlanta 1996: https://olympics.com/en/olympic-games/atlanta-1996/results/football",
        "difficulty": "medium",
        "subcategory": "الألعاب الأولمبية",
        "tags": [
          "أتلانتا 1996",
          "كرة القدم النسائية",
          "الولايات المتحدة"
        ],
        "external_id": "sport-history-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من المدرب الوحيد الذي قاد منتخبًا إلى لقبين متتاليين في كأس العالم للرجال، وفي أي نسختين؟",
        "options": [
          "هيلمو شون؛ 1970 و1974",
          "كارلوس بيلاردو؛ 1986 و1990",
          "ماريو زاغالو؛ 1958 و1962",
          "فيتوريو بوتسو؛ 1934 و1938"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "قاد فيتوريو بوتسو إيطاليا إلى لقبي 1934 و1938، وهو المدرب الوحيد الذي فاز بكأس العالم للرجال في نسختين متتاليتين.",
        "source": "FIFA — Vittorio Pozzo, the only two-time winning coach: https://www.fifa.com/tournaments/mens/worldcup/1938france",
        "difficulty": "high",
        "subcategory": "مدربون",
        "tags": [
          "فيتوريو بوتسو",
          "إيطاليا",
          "1934 و1938"
        ],
        "external_id": "sport-history-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منتخب سجل 27 هدفًا في مونديال 1954، وهو أعلى رصيد لمنتخب في نسخة واحدة؟",
        "options": [
          "أوروغواي",
          "ألمانيا الغربية",
          "المجر",
          "النمسا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجل منتخب المجر 27 هدفًا في خمس مباريات بسويسرا 1954. ورغم قوته الهجومية، خسر النهائي 3–2 أمام ألمانيا الغربية.",
        "source": "FIFA — Switzerland 1954: https://www.fifa.com/tournaments/mens/worldcup/1954switzerland",
        "difficulty": "high",
        "subcategory": "سجلات كأس العالم",
        "tags": [
          "المجر",
          "سويسرا 1954",
          "27 هدفًا"
        ],
        "external_id": "sport-history-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما الرقم العمري الذي ارتبط ببيليه في نهائي كأس العالم 1958؟",
        "options": [
          "أصغر لاعب يسجل في نهائي، بعمر 17 عامًا و249 يومًا",
          "أصغر قائد يرفع الكأس",
          "أصغر حارس يحافظ على شباكه",
          "أصغر لاعب يطرد في نهائي"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "سجل بيليه هدفين أمام السويد في النهائي وهو في السابعة عشرة و249 يومًا، فأصبح أصغر مسجل في نهائي كأس العالم.",
        "source": "FIFA — Pele's 1958 records: https://www.fifa.com/tournaments/mens/worldcup/1958sweden",
        "difficulty": "high",
        "subcategory": "سجلات كأس العالم",
        "tags": [
          "بيليه",
          "السويد 1958",
          "أصغر مسجل"
        ],
        "external_id": "sport-history-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي كأس رُفعت لأول مرة في مونديال 1974 بعد إحالة كأس جول ريميه إلى التقاعد؟",
        "options": [
          "كأس القارات",
          "كأس النصر الأولمبي",
          "كأس العالم FIFA الحالية",
          "كأس هنري ديلوناي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استُحدثت كأس العالم FIFA التي صممها سيلفيو غازانيغا، ورفعها منتخب ألمانيا الغربية لأول مرة بعد فوزه بنهائي 1974.",
        "source": "FIFA Museum — The FIFA World Cup Trophy: https://www.fifamuseum.com/en/explore/fifamuseumplus/blog/the-fifa-world-cup-trophy",
        "difficulty": "high",
        "subcategory": "كؤوس ورموز",
        "tags": [
          "كأس العالم",
          "1974",
          "غازانيغا"
        ],
        "external_id": "sport-history-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منتخب حقق أول فوز لمنتخب أفريقي في تاريخ نهائيات كأس العالم، وفي أي نسخة؟",
        "options": [
          "المغرب في 1970",
          "الجزائر في 1982",
          "الكاميرون في 1990",
          "تونس في 1978"
        ],
        "correct_index": 3,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "هزمت تونس المكسيك 3–1 في الأرجنتين 1978، مسجلة أول انتصار لمنتخب أفريقي في نهائيات كأس العالم.",
        "source": "FIFA — Tunisia's historic 1978 victory: https://www.fifa.com/tournaments/mens/worldcup/1978argentina",
        "difficulty": "high",
        "subcategory": "أفريقيا في كأس العالم",
        "tags": [
          "تونس",
          "الأرجنتين 1978",
          "أول فوز أفريقي"
        ],
        "external_id": "sport-history-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ما السابقة الأفريقية التي حققها المغرب في كأس العالم 1986؟",
        "options": [
          "أول منتخب أفريقي يبلغ النهائي",
          "أول منتخب أفريقي يفوز بركلات الترجيح",
          "أول منتخب أفريقي يتصدر مجموعته ويبلغ دور الـ16",
          "أول منتخب أفريقي يستضيف البطولة"
        ],
        "correct_index": 2,
        "time_limit_seconds": 40,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تصدر المغرب مجموعته أمام إنجلترا وبولندا والبرتغال، وأصبح أول منتخب أفريقي يعبر دور المجموعات إلى دور الـ16.",
        "source": "FIFA — Morocco at Mexico 1986: https://www.fifa.com/tournaments/mens/worldcup/1986mexico",
        "difficulty": "high",
        "subcategory": "أفريقيا في كأس العالم",
        "tags": [
          "المغرب",
          "المكسيك 1986",
          "دور الـ16"
        ],
        "external_id": "sport-history-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منتخب أصبح في إيطاليا 1990 أول ممثل لأفريقيا يبلغ ربع نهائي كأس العالم؟",
        "options": [
          "الكاميرون",
          "نيجيريا",
          "الجزائر",
          "مصر"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بلغت الكاميرون ربع النهائي بعد الفوز على الأرجنتين ورومانيا وكولومبيا، ثم خسرت أمام إنجلترا بعد وقت إضافي.",
        "source": "FIFA — Cameroon at Italy 1990: https://www.fifa.com/tournaments/mens/worldcup/1990italy",
        "difficulty": "high",
        "subcategory": "أفريقيا في كأس العالم",
        "tags": [
          "الكاميرون",
          "إيطاليا 1990",
          "ربع النهائي"
        ],
        "external_id": "sport-history-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي نسخة كانت الأولى التي تضم 32 منتخبًا في نهائيات كأس العالم للرجال؟",
        "options": [
          "فرنسا 1998",
          "الولايات المتحدة 1994",
          "كوريا واليابان 2002",
          "ألمانيا 2006"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "توسعت النهائيات من 24 إلى 32 منتخبًا في فرنسا 1998، موزعة على ثماني مجموعات من أربعة منتخبات.",
        "source": "FIFA — France 1998: https://www.fifa.com/tournaments/mens/worldcup/1998france",
        "difficulty": "high",
        "subcategory": "نظم البطولات",
        "tags": [
          "فرنسا 1998",
          "32 منتخبًا",
          "التوسع"
        ],
        "external_id": "sport-history-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من تُوج بالنسخة الأولى من بطولة أمم أوروبا عام 1960، وأين أُقيمت المرحلة النهائية؟",
        "options": [
          "إسبانيا؛ إيطاليا",
          "يوغوسلافيا؛ الاتحاد السوفيتي",
          "الاتحاد السوفيتي؛ فرنسا",
          "ألمانيا الغربية؛ بلجيكا"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استضافت فرنسا المرحلة النهائية للبطولة الأوروبية الأولى، وفاز الاتحاد السوفيتي على يوغوسلافيا 2–1 بعد وقت إضافي في النهائي.",
        "source": "UEFA — EURO 1960 history: https://www.uefa.com/uefaeuro/history/seasons/1960/",
        "difficulty": "high",
        "subcategory": "كأس أمم أوروبا",
        "tags": [
          "يورو 1960",
          "الاتحاد السوفيتي",
          "فرنسا"
        ],
        "external_id": "sport-history-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "ارتبط اسم أنتونين بانينكا بنهائي بطولة أمم أوروبا 1976 بسبب أي لقطة؟",
        "options": [
          "هدف ذهبي بالرأس",
          "تصديه لثلاث ركلات جزاء",
          "ركلة جزاء ساقطة حسمت ركلات الترجيح",
          "أسرع هدف في تاريخ النهائي"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "نفذ بانينكا الركلة الحاسمة لتشيكوسلوفاكيا بتسديدة ساقطة في وسط المرمى أمام ألمانيا الغربية، فأصبح هذا الأسلوب يحمل اسمه.",
        "source": "UEFA — EURO 1976 history: https://www.uefa.com/uefaeuro/history/seasons/1976/",
        "difficulty": "high",
        "subcategory": "كأس أمم أوروبا",
        "tags": [
          "بانينكا",
          "يورو 1976",
          "ركلات الترجيح"
        ],
        "external_id": "sport-history-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "كيف وصلت الدنمارك إلى نهائيات يورو 1992 التي فازت بلقبها؟",
        "options": [
          "دُعيت بدل يوغوسلافيا المستبعدة",
          "تأهلت بصفتها حاملة اللقب",
          "فازت بملحق بعد بدء البطولة",
          "تأهلت بصفتها الدولة المضيفة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "احتلت الدنمارك المركز الثاني خلف يوغوسلافيا في مجموعتها، ثم دخلت النهائيات بدل يوغوسلافيا المستبعدة قبل البطولة، وتوجت بالفوز على ألمانيا في النهائي.",
        "source": "UEFA — EURO 1992 history: https://www.uefa.com/uefaeuro/history/seasons/1992/",
        "difficulty": "high",
        "subcategory": "كأس أمم أوروبا",
        "tags": [
          "الدنمارك",
          "يورو 1992",
          "يوغوسلافيا"
        ],
        "external_id": "sport-history-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي بطولة بدأت في الأرجنتين عام 1916 وتعد أقدم بطولة قارية لمنتخبات كرة القدم؟",
        "options": [
          "كأس أمم أوروبا",
          "الكأس الذهبية",
          "كأس آسيا",
          "كوبا أمريكا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "أقيمت بطولة أمريكا الجنوبية الأولى في الأرجنتين عام 1916 بالتزامن مع تأسيس اتحاد كونميبول، وتطورت لاحقًا إلى كوبا أمريكا.",
        "source": "CONMEBOL — History of the Copa America: https://copaamerica.com/en/history",
        "difficulty": "high",
        "subcategory": "كوبا أمريكا",
        "tags": [
          "كوبا أمريكا",
          "1916",
          "كونميبول"
        ],
        "external_id": "sport-history-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "من فاز بالنسخة الأولى من كأس العالم للرجبي عام 1987، وعلى حساب أي منتخب في النهائي؟",
        "options": [
          "أستراليا على إنجلترا",
          "جنوب أفريقيا على نيوزيلندا",
          "فرنسا على ويلز",
          "نيوزيلندا على فرنسا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "استضافت نيوزيلندا وأستراليا النسخة الأولى، وفازت نيوزيلندا على فرنسا 29–9 في نهائي أوكلاند.",
        "source": "World Rugby — Rugby World Cup 1987: https://www.rugbyworldcup.com/2027/en/past-tournaments/1987",
        "difficulty": "high",
        "subcategory": "كأس العالم للرجبي",
        "tags": [
          "الرجبي",
          "1987",
          "نيوزيلندا"
        ],
        "external_id": "sport-history-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي منتخب فاز بكأس العالم الأولى للكريكيت للرجال عام 1975، وأين أقيم النهائي؟",
        "options": [
          "أستراليا؛ ملبورن",
          "جزر الهند الغربية؛ لوردز",
          "إنجلترا؛ ذا أوفال",
          "الهند؛ إيدن غاردنز"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تغلبت جزر الهند الغربية على أستراليا في نهائي 1975 بملعب لوردز في لندن، لتصبح أول بطلة لكأس العالم للكريكيت للرجال.",
        "source": "International Cricket Council — ICC Cricket World Cup 1975: https://www.icc-cricket.com/tournaments/cricketworldcup/history/1975",
        "difficulty": "high",
        "subcategory": "كأس العالم للكريكيت",
        "tags": [
          "الكريكيت",
          "1975",
          "جزر الهند الغربية"
        ],
        "external_id": "sport-history-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "أي نادٍ أصبح أول بطل للمسابقة بعد اعتماد اسم «دوري أبطال أوروبا» في موسم 1992–1993؟",
        "options": [
          "ميلان",
          "برشلونة",
          "بايرن ميونخ",
          "مارسيليا"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "فاز أولمبيك مارسيليا على ميلان 1–0 في نهائي ميونخ، فأصبح أول بطل تحت مسمى دوري أبطال أوروبا في موسم 1992–1993.",
        "source": "UEFA — 1992/93 Champions League season: https://www.uefa.com/uefachampionsleague/history/seasons/1992/",
        "difficulty": "high",
        "subcategory": "دوري أبطال أوروبا",
        "tags": [
          "مارسيليا",
          "دوري أبطال أوروبا",
          "1993"
        ],
        "external_id": "sport-history-025",
        "is_verified": true,
        "version": 1
      }
    ]
  },
  {
    "id": "lib-sports-rare-stats-rules-02",
    "user_id": "system",
    "title": "إحصائيات وقوانين رياضية نادرة",
    "created_at": "2026-08-05T00:00:00.000Z",
    "is_public": true,
    "category": "رياضة",
    "language": "ar",
    "quiz_difficulty": "high",
    "archived": false,
    "launch_enabled": true,
    "questions": [
      {
        "question_text": "وفق قوانين IFAB للعبة 2025/2026، متى تصبح الكرة في اللعب عند ركلة البداية؟",
        "options": [
          "عندما يلمسها لاعب ثانٍ",
          "عندما تُركل وتتحرك بوضوح",
          "عندما تتحرك إلى نصف ملعب الخصم",
          "عند إطلاق الحكم صافرة ثانية"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 0,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ينص القانون 8 على أن الكرة تصبح في اللعب بمجرد ركلها وتحركها بوضوح؛ ولا يشترط اتجاهها إلى الأمام أو لمس لاعب ثانٍ.",
        "source": "IFAB — Laws of the Game 2025/26, Law 8 (The Start and Restart of Play): https://www.theifab.com/laws/latest/the-start-and-restart-of-play/",
        "difficulty": "medium",
        "subcategory": "كرة القدم",
        "tags": [
          "IFAB",
          "ركلة البداية",
          "القانون 8"
        ],
        "external_id": "sports-rare-rules-001",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قانون IFAB 14 لموسم 2025/2026، ما الوضع القانوني المطلوب لقدمي حارس المرمى لحظة تنفيذ ركلة الجزاء؟",
        "options": [
          "كلتا القدمين أمام خط المرمى",
          "كلتا القدمين تلامسان خط المرمى حتمًا",
          "قدم واحدة على الأقل تلامس خط المرمى أو تكون بمحاذاته أو خلفه",
          "قدم واحدة على الأقل داخل منطقة المرمى دون صلة بالخط"
        ],
        "correct_index": 2,
        "time_limit_seconds": 35,
        "order_index": 1,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عند ركل الكرة يجب أن يكون جزء من قدم واحدة على الأقل ملامسًا لخط المرمى أو بمحاذاته أو خلفه؛ لذلك لا يلزم إبقاء القدمين كلتيهما على الخط.",
        "source": "IFAB — Laws of the Game 2025/26, Law 14 (The Penalty Kick): https://www.theifab.com/laws/latest/the-penalty-kick/",
        "difficulty": "medium",
        "subcategory": "كرة القدم",
        "tags": [
          "IFAB",
          "ركلة الجزاء",
          "حارس المرمى"
        ],
        "external_id": "sports-rare-rules-002",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد FIBA الرسمية 2024، إذا استعاد الفريق المهاجم الكرة بعد أن لمست تسديدته الحلقة، إلى كم يُضبط جهاز توقيت التسديدة؟",
        "options": [
          "24 ثانية",
          "20 ثانية",
          "8 ثوانٍ",
          "14 ثانية"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 2,
        "image_url": null,
        "question_type": "multi",
        "explanation": "عندما تلمس التسديدة الحلقة ثم يسيطر الفريق نفسه مجددًا على الكرة، يُضبط توقيت التسديدة على 14 ثانية، لا على دورة جديدة كاملة من 24 ثانية.",
        "source": "FIBA — Official Basketball Rules 2024, Article 29 (24 seconds): https://www.fiba.basketball/documents/official-basketball-rules/current.pdf",
        "difficulty": "medium",
        "subcategory": "كرة السلة",
        "tags": [
          "FIBA",
          "توقيت التسديدة",
          "متابعة هجومية"
        ],
        "external_id": "sports-rare-rules-003",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في قواعد FIBA الرسمية 2024، خلال كم ثانية يجب على رامي الرمية الحرة إطلاق الكرة بعد أن يضعها الحكم تحت تصرفه؟",
        "options": [
          "3 ثوانٍ",
          "8 ثوانٍ",
          "10 ثوانٍ",
          "5 ثوانٍ"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 3,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تلزم المادة 43 الرامي بإطلاق الكرة خلال خمس ثوانٍ من وضعها تحت تصرفه؛ تجاوز المدة مخالفة للرمية الحرة.",
        "source": "FIBA — Official Basketball Rules 2024, Article 43 (Free throws): https://www.fiba.basketball/documents/official-basketball-rules/current.pdf",
        "difficulty": "medium",
        "subcategory": "كرة السلة",
        "tags": [
          "FIBA",
          "رمية حرة",
          "خمس ثوانٍ"
        ],
        "external_id": "sports-rare-rules-004",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد FIVB للكرة الطائرة داخل الصالات 2025–2028، هل تُحسب ملامسة حائط الصد ضمن اللمسات الثلاث المسموحة للفريق؟",
        "options": [
          "نعم، وتكون اللمسة الأولى دائمًا",
          "لا، ويحق للفريق ثلاث لمسات أخرى بعد الصد",
          "لا، لكن لا يبقى إلا لمستان",
          "تُحسب فقط إذا لمسها لاعبان في الصد"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 4,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ملامسة الصد لا تُعد ضربة من ضربات الفريق؛ لذلك يمكن للفريق تنفيذ ثلاث ضربات بعد ملامسة الصد لإعادة الكرة.",
        "source": "FIVB — Official Volleyball Rules 2025–2028, Rules 9.1 and 14.4.1: https://www.fivb.com/volleyball/the-game/official-volleyball-rules/",
        "difficulty": "medium",
        "subcategory": "الكرة الطائرة",
        "tags": [
          "FIVB",
          "حائط الصد",
          "لمسات الفريق"
        ],
        "external_id": "sports-rare-rules-005",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد ITF للتنس 2025، ما ترتيب الإرسال الأساسي في شوط كسر التعادل؟",
        "options": [
          "يرسل اللاعب الأول نقطة واحدة، ثم يرسل كل لاعب نقطتين بالتناوب",
          "يرسل اللاعب الأول نقطتين ثم يتناوبان كل نقطة",
          "يتناوب اللاعبان بعد كل نقطة طوال الشوط",
          "يرسل مستقبل الشوط السابق أول ثلاث نقاط"
        ],
        "correct_index": 0,
        "time_limit_seconds": 35,
        "order_index": 5,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يبدأ اللاعب الذي حان دوره بنقطة واحدة من جهة اليمين، ثم يرسل الخصم نقطتين، وبعد ذلك يستمر التناوب بواقع نقطتين لكل لاعب.",
        "source": "ITF — Rules of Tennis 2025, Rule 5 (Score in a Game): https://www.itftennis.com/media/7221/2025-rules-of-tennis-english.pdf",
        "difficulty": "medium",
        "subcategory": "التنس",
        "tags": [
          "ITF",
          "كسر التعادل",
          "ترتيب الإرسال"
        ],
        "external_id": "sports-rare-rules-006",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قوانين BWF للريشة الطائرة، إذا أصبحت نتيجة الشوط 29–29، فما الذي يحسم الشوط؟",
        "options": [
          "فارق نقطتين مهما طال اللعب",
          "ثلاث نقاط فاصلة متتالية",
          "إعادة الشوط من الصفر",
          "النقطة التالية؛ فيفوز من يبلغ 30"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 6,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بعد 20–20 يلزم فارق نقطتين، لكن النظام يضع سقفًا: عند 29–29 يفوز بالشوط من يسجل النقطة الثلاثين أولًا.",
        "source": "BWF — Statutes, Section 4.1 Laws of Badminton, Law 7 (Scoring system): https://corporate.bwfbadminton.com/statutes/",
        "difficulty": "medium",
        "subcategory": "الريشة الطائرة",
        "tags": [
          "BWF",
          "احتساب النقاط",
          "29-29"
        ],
        "external_id": "sports-rare-rules-007",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في سباق التتابع المتنوع 4×100 متر وفق قواعد World Aquatics، ما الترتيب الصحيح للسباحات الأربع؟",
        "options": [
          "ظهر، صدر، فراشة، حرة",
          "فراشة، ظهر، صدر، حرة",
          "صدر، فراشة، ظهر، حرة",
          "ظهر، فراشة، صدر، حرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 30,
        "order_index": 7,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترتيب التتابع المتنوع هو الظهر ثم الصدر ثم الفراشة ثم الحرة. ويختلف ذلك عن ترتيب الفردي المتنوع الذي يبدأ بالفراشة.",
        "source": "World Aquatics — Competition Regulations, Swimming Rule SW 9.2 (Medley Relay): https://www.worldaquatics.com/rules/competition-regulations",
        "difficulty": "medium",
        "subcategory": "السباحة",
        "tags": [
          "World Aquatics",
          "تتابع متنوع",
          "ترتيب السباحات"
        ],
        "external_id": "sports-rare-rules-008",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قوانين ITTF، ما أقل ارتفاع رأسي يجب أن ترتفع إليه الكرة بعد قذفها من الكف في الإرسال الصحيح بتنس الطاولة؟",
        "options": [
          "10 سم",
          "16 سم",
          "12 سم",
          "20 سم"
        ],
        "correct_index": 1,
        "time_limit_seconds": 30,
        "order_index": 8,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يجب قذف الكرة شبه رأسي من كف مفتوحة بحيث ترتفع 16 سم على الأقل من دون إكسابها دورانًا عمدًا قبل ضربها.",
        "source": "ITTF — Handbook, Laws of Table Tennis, Law 2.06.02: https://www.ittf.com/handbook/",
        "difficulty": "medium",
        "subcategory": "تنس الطاولة",
        "tags": [
          "ITTF",
          "الإرسال",
          "16 سم"
        ],
        "external_id": "sports-rare-rules-009",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في سلاح الشيش (Foil) وفق قواعد FIE، أي منطقة تُعد هدفًا صالحًا أساسيًا؟",
        "options": [
          "الجسم كله بما فيه القناع والساقان",
          "الجزء الواقع فوق الخصر بما فيه الذراعان",
          "الرأس والذراع المسلحة فقط",
          "الجذع فقط وفق سطح الهدف المحدد، دون الأطراف"
        ],
        "correct_index": 3,
        "time_limit_seconds": 30,
        "order_index": 9,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الهدف الصالح في الشيش هو الجذع المحدد بالسترة الكهربائية، بخلاف سيف المبارزة الذي يجعل الجسم كله هدفًا، والسيف العربي الذي يستهدف ما فوق الخصر مع استثناءات القاعدة.",
        "source": "FIE — Technical Rules, Foil: Valid target (t.77): https://fie.org/fie/documents/rules",
        "difficulty": "medium",
        "subcategory": "المبارزة",
        "tags": [
          "FIE",
          "الشيش",
          "الهدف الصالح"
        ],
        "external_id": "sports-rare-rules-010",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد FIVB للكرة الطائرة داخل الصالات 2025–2028، متى يرتكب الليبيرو خطأ إكمال ضربة هجومية؟",
        "options": [
          "إذا كانت الكرة لحظة الضرب أعلى من قمة الشبكة بالكامل",
          "كلما ضرب الكرة بيد واحدة",
          "إذا قفز من خلف خط الهجوم ولو كانت الكرة منخفضة",
          "إذا كانت الضربة هي اللمسة الثالثة للفريق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 10,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يجوز لليبيرو إكمال ضربة هجومية من أي مكان إذا كانت الكرة بكاملها أعلى من الحافة العليا للشبكة لحظة الضرب؛ المعيار هو ارتفاع الكرة لا عدد اللمسات.",
        "source": "FIVB — Official Volleyball Rules 2025–2028, Rule 19.3.1.2: https://www.fivb.com/volleyball/the-game/official-volleyball-rules/",
        "difficulty": "high",
        "subcategory": "الكرة الطائرة",
        "tags": [
          "FIVB",
          "الليبيرو",
          "ضربة هجومية"
        ],
        "external_id": "sports-rare-rules-011",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد ITF للتنس 2025، ارتدت الكرة صحيحة داخل ملعب الخصم ثم لمست سياجًا ثابتًا قبل أن يتمكن الخصم من ردها. لمن النقطة؟",
        "options": [
          "للخصم لأن السياج خارج الملعب",
          "لضارب الكرة",
          "تُعاد النقطة دائمًا",
          "تُحتسب خطأ إرسال إن حدثت أثناء التبادل"
        ],
        "correct_index": 1,
        "time_limit_seconds": 45,
        "order_index": 11,
        "image_url": null,
        "question_type": "multi",
        "explanation": "إذا لمست الكرة الأرض داخل الملعب الصحيح ثم أصابت أحد الملحقات الثابتة قبل ردها، يفوز ضاربها بالنقطة؛ أما إصابة الملحق الثابت قبل الارتداد الصحيح فتُفقده النقطة.",
        "source": "ITF — Rules of Tennis 2025, Rule 13 (Ball Touches a Permanent Fixture): https://www.itftennis.com/media/7221/2025-rules-of-tennis-english.pdf",
        "difficulty": "high",
        "subcategory": "التنس",
        "tags": [
          "ITF",
          "ملحق ثابت",
          "كسب النقطة"
        ],
        "external_id": "sports-rare-rules-012",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قانون ITTF للعب السريع (expedite system)، ما الذي يحدث إذا أعاد المستقبل الكرة 13 مرة بصورة صحيحة في تبادل واحد بعد تفعيل النظام؟",
        "options": [
          "يفوز المستقبل بالنقطة",
          "يفوز المرسل بالنقطة",
          "تُعاد النقطة بإرسال جديد",
          "ينتهي الشوط لمصلحة المتقدم"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 12,
        "image_url": null,
        "question_type": "multi",
        "explanation": "بعد تفعيل نظام التعجيل، إذا أتم المستقبل 13 ردًا صحيحًا في التبادل فإنه يربح النقطة، ما يمنع استمرار التبادلات الدفاعية بلا نهاية.",
        "source": "ITTF — Handbook, Laws of Table Tennis, Law 2.15 (Expedite System): https://www.ittf.com/handbook/",
        "difficulty": "high",
        "subcategory": "تنس الطاولة",
        "tags": [
          "ITTF",
          "نظام التعجيل",
          "13 ردًا"
        ],
        "external_id": "sports-rare-rules-013",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد World Athletics، أي ترتيب يمثل مسابقات اليوم الثاني من العشاري للرجال؟",
        "options": [
          "100 م، وثب طويل، جلة، وثب عالٍ، 400 م",
          "110 م حواجز، جلة، وثب عالٍ، رمح، 800 م",
          "110 م حواجز، قرص، قفز بالزانة، رمح، 1500 م",
          "قرص، 400 م، قفز بالزانة، رمح، 5000 م"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 13,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يبدأ اليوم الثاني للعشاري بـ110 م حواجز، ثم رمي القرص، فالقفز بالزانة، فرمي الرمح، وينتهي بسباق 1500 م؛ أما الخيار الثاني فهو ترتيب اليوم الأول.",
        "source": "World Athletics — Competition and Technical Rules 2026, Combined Events (TR39): https://worldathletics.org/about-iaaf/documents/book-of-rules",
        "difficulty": "high",
        "subcategory": "ألعاب القوى",
        "tags": [
          "World Athletics",
          "العشاري",
          "اليوم الثاني"
        ],
        "external_id": "sports-rare-rules-014",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في الفردي المتنوع بالسباحة وفق World Aquatics، ما الترتيب القانوني للأساليب الأربعة؟",
        "options": [
          "فراشة، ظهر، صدر، حرة",
          "ظهر، صدر، فراشة، حرة",
          "فراشة، صدر، ظهر، حرة",
          "صدر، ظهر، فراشة، حرة"
        ],
        "correct_index": 0,
        "time_limit_seconds": 40,
        "order_index": 14,
        "image_url": null,
        "question_type": "multi",
        "explanation": "ترتيب الفردي المتنوع هو الفراشة ثم الظهر ثم الصدر ثم الحرة، بينما يبدأ التتابع المتنوع بالظهر لأسباب مرتبطة ببداية سباحة الظهر.",
        "source": "World Aquatics — Competition Regulations, Swimming Rule SW 9.1 (Individual Medley): https://www.worldaquatics.com/rules/competition-regulations",
        "difficulty": "high",
        "subcategory": "السباحة",
        "tags": [
          "World Aquatics",
          "فردي متنوع",
          "ترتيب الأساليب"
        ],
        "external_id": "sports-rare-rules-015",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قوانين World Rugby للاتحاد (15 لاعبًا)، إذا أمسك لاعب الكرة وهو خارج خط الـ22 ثم أعادها إلى داخل الـ22 وركلها مباشرة إلى التماس، فما الأصل في مكان تنفيذ رمية التماس؟",
        "options": [
          "حيث عبرت الكرة خط التماس دائمًا",
          "مقابل موضع الركلة، لأن الفريق أعاد الكرة إلى داخل الـ22",
          "على خط الـ22 حتمًا",
          "عند منتصف الملعب"
        ],
        "correct_index": 1,
        "time_limit_seconds": 50,
        "order_index": 15,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا يستفيد الفريق من كسب الأرض بالركل المباشر إلى التماس إذا كان هو من أعاد الكرة إلى داخل منطقة الـ22؛ تكون الرمية مقابل مكان الركلة، ما لم تقع حالة استثنائية منصوص عليها.",
        "source": "World Rugby — Laws of the Game, Law 18 (Touch, quick throw and lineout): https://www.world.rugby/the-game/laws/law/18",
        "difficulty": "high",
        "subcategory": "الرجبي",
        "tags": [
          "World Rugby",
          "خط 22",
          "ركلة إلى التماس"
        ],
        "external_id": "sports-rare-rules-016",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في ركلة الجزاء الركنية بهوكي الميدان وفق قواعد FIH، ما الحد الأقصى للاعبي الفريق المدافع الذين يجوز أن يقفوا خلف خط المرمى عند بدء التنفيذ، مع احتساب حارس المرمى إن وُجد؟",
        "options": [
          "أربعة",
          "ستة",
          "جميع اللاعبين الأحد عشر",
          "خمسة"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 16,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يسمح بوجود خمسة مدافعين كحد أقصى، ومن بينهم حارس المرمى إن كان حاضرًا، خلف خط المرمى؛ ويقف بقية المدافعين خلف خط المنتصف.",
        "source": "FIH — Rules of Hockey, Rule 13.3 (Penalty corner): https://www.fih.hockey/about-fih/official-documents/rules-of-hockey",
        "difficulty": "high",
        "subcategory": "هوكي الميدان",
        "tags": [
          "FIH",
          "ركلة ركنية جزائية",
          "خمسة مدافعين"
        ],
        "external_id": "sports-rare-rules-017",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قوانين MCC للكريكيت (إصدار 2022)، كم مهلة اللاعب القادم كي يكون جاهزًا لاستقبال الكرة أو ليكون شريكه جاهزًا بعد سقوط الويكيت، قبل إمكان إخراجه Timed out؟",
        "options": [
          "ثلاث دقائق",
          "دقيقة واحدة",
          "دقيقتان",
          "خمس دقائق"
        ],
        "correct_index": 0,
        "time_limit_seconds": 45,
        "order_index": 17,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يحدد قانون MCC رقم 40 مهلة ثلاث دقائق. هذا السؤال يتعمد تحديد قوانين MCC؛ فقد تفرض شروط بعض البطولات الدولية مهلة أقصر.",
        "source": "Marylebone Cricket Club — Laws of Cricket 2022, Law 40 (Timed out): https://www.lords.org/mcc/the-laws-of-cricket/timed-out",
        "difficulty": "high",
        "subcategory": "الكريكيت",
        "tags": [
          "MCC",
          "Timed out",
          "ثلاث دقائق"
        ],
        "external_id": "sports-rare-rules-018",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قانون MCC للكريكيت 19.5، قفز مدافع من داخل الحد لصد كرة في الهواء، ثم هبط خارج الحد وهو لا يزال يلمس الكرة. ما الحكم؟",
        "options": [
          "لا تُحتسب حدود لأن أول قفزة كانت من الداخل",
          "كرة ميتة بلا نقاط",
          "تُحتسب حدود لأن آخر تماس للمدافع مع الأرض قبل لمس الكرة لم يبقَ كله داخل الحد",
          "يُترك القرار لقائد الفريق المدافع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 18,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لكي لا يُعد المدافع ملامسًا للحد، يجب أن يكون آخر تماس له مع الأرض قبل أول لمس للكرة داخل الحد، وألا يلامس الأرض خارجه وهو يلمس الكرة؛ الهبوط خارجًا مع استمرار اللمس يجعلها حدودًا.",
        "source": "Marylebone Cricket Club — Laws of Cricket 2022, Law 19.5 (Fielder grounded beyond the boundary): https://www.lords.org/mcc/the-laws-of-cricket/boundaries",
        "difficulty": "high",
        "subcategory": "الكريكيت",
        "tags": [
          "MCC",
          "الحدود",
          "التقاط هوائي"
        ],
        "external_id": "sports-rare-rules-019",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في البيسبول وفق قواعد WBSC، متى يمكن إعلان الكرة الطائرة داخل الملعب Infield Fly؟",
        "options": [
          "عند أقل من خروجين ووجود عدّائين على الأولى والثانية، أو امتلاء القواعد، مع كرة سهلة نسبيًا للاعب داخلي",
          "عند وجود عدّاء على القاعدة الأولى فقط مهما كان عدد الخارجين",
          "عند خروجين ووجود عدّاء على الثالثة",
          "في أي كرة عالية داخل المنطقة الترابية"
        ],
        "correct_index": 0,
        "time_limit_seconds": 50,
        "order_index": 19,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تتطلب القاعدة أقل من خروجين، وعدّائين على الأولى والثانية أو قواعد ممتلئة، وكرة طائرة صحيحة يمكن للاعب داخلي التقاطها بجهد عادي؛ والغرض منع إسقاط متعمد يخلق إخراجًا مزدوجًا سهلًا.",
        "source": "WBSC — Official Rules of Baseball, Definitions (Infield Fly) and Rule 5.09: https://www.wbsc.org/en/organisation/baseball/documents",
        "difficulty": "high",
        "subcategory": "البيسبول",
        "tags": [
          "WBSC",
          "Infield Fly",
          "عداؤون"
        ],
        "external_id": "sports-rare-rules-020",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد الاتحاد العالمي للكيرلنغ، كم حجرًا في بداية كل شوط تشملها منطقة الحماية الحرة بحيث لا يجوز للفريق المنافس إخراج حجر الخصم منها من اللعب؟",
        "options": [
          "أول ثلاثة أحجار",
          "أول أربعة أحجار",
          "أول خمسة أحجار",
          "أول ستة أحجار"
        ],
        "correct_index": 2,
        "time_limit_seconds": 45,
        "order_index": 20,
        "image_url": null,
        "question_type": "multi",
        "explanation": "تسري قاعدة منطقة الحماية الحرة خلال الأحجار الخمسة الأولى من الشوط؛ لا يجوز إخراج حجر للخصم واقع في المنطقة الحرة من اللعب قبل رمي الحجر السادس.",
        "source": "World Curling — Rules of Curling, Rule R6 (Free Guard Zone): https://worldcurling.org/competitions/rules/",
        "difficulty": "high",
        "subcategory": "الكيرلنغ",
        "tags": [
          "World Curling",
          "منطقة الحماية الحرة",
          "خمسة أحجار"
        ],
        "external_id": "sports-rare-rules-021",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد الغولف المشتركة بين R&A وUSGA، حرّك اللاعب كرته عرضًا أثناء بحث معقول عنها في المنطقة العامة. ما الإجراء المعتاد؟",
        "options": [
          "ضربة جزاء وتُلعب الكرة من مكانها الجديد",
          "خسارة الحفرة تلقائيًا",
          "لا جزاء وتبقى الكرة حيث توقفت",
          "لا جزاء وتُعاد الكرة إلى موضعها الأصلي"
        ],
        "correct_index": 3,
        "time_limit_seconds": 45,
        "order_index": 21,
        "image_url": null,
        "question_type": "multi",
        "explanation": "لا عقوبة على التحريك العرضي أثناء محاولة معقولة للعثور على الكرة أو تحديدها، لكن يجب إعادة الكرة إلى موضعها الأصلي، ويُقدّر الموضع إن لم يكن معلومًا بدقة.",
        "source": "R&A/USGA — Rules of Golf, Rule 7.4 (Ball Accidentally Moved in Trying to Find or Identify It): https://www.randa.org/rog/the-rules-of-golf/rule-7",
        "difficulty": "high",
        "subcategory": "الغولف",
        "tags": [
          "R&A",
          "USGA",
          "تحريك عرضي"
        ],
        "external_id": "sports-rare-rules-022",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قوانين IFAB 2025/2026، لمس الحكم الكرة داخل الملعب وبقيت لدى الفريق نفسه، لكن اللمسة بدأت هجمة واعدة. ما الاستئناف؟",
        "options": [
          "يستمر اللعب لأن الاستحواذ لم يتغير",
          "ركلة حرة غير مباشرة ضد آخر لاعب لمسها",
          "كرة ساقطة للفريق الذي كان يملك أو كان سيملك الاستحواذ، في موضع اللمس وفق أحكام القانون",
          "رمية تماس لأقرب فريق"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 22,
        "image_url": null,
        "question_type": "multi",
        "explanation": "يوقف الحكم اللعب إذا لامسته الكرة وبدأت هجمة واعدة، حتى لو لم يتغير الفريق المستحوذ. ويُستأنف بكرة ساقطة وفق القانون 8، مع القاعدة الخاصة للحارس إذا كان الموضع داخل منطقة الجزاء.",
        "source": "IFAB — Laws of the Game 2025/26, Law 9 (The Ball in and out of Play) and Law 8: https://www.theifab.com/laws/latest/the-ball-in-and-out-of-play/",
        "difficulty": "high",
        "subcategory": "كرة القدم",
        "tags": [
          "IFAB",
          "لمس الحكم",
          "كرة ساقطة"
        ],
        "external_id": "sports-rare-rules-023",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "في كرة السلة وفق FIBA 2024، فريق يسيطر على الكرة في منطقته الخلفية وحصل على وقت مستقطع بعد مرور 5 ثوانٍ من مهلة الثماني ثواني. كم يتبقى له لعبور الكرة عند استئنافها من الخلف؟",
        "options": [
          "8 ثوانٍ جديدة",
          "5 ثوانٍ",
          "3 ثوانٍ",
          "تُلغى المهلة بعد الوقت المستقطع"
        ],
        "correct_index": 2,
        "time_limit_seconds": 50,
        "order_index": 23,
        "image_url": null,
        "question_type": "multi",
        "explanation": "الوقت المستقطع لا يعيد عدّ الثماني ثواني في هذا الاستئناف؛ إذا انقضت خمس ثوانٍ قبل التوقف، يبقى للفريق ثلاث ثوانٍ لنقل الكرة إلى منطقته الأمامية.",
        "source": "FIBA — Official Basketball Rules Interpretations 2024, Article 28 (8 seconds): https://www.fiba.basketball/documents/official-basketball-rules/current.pdf",
        "difficulty": "high",
        "subcategory": "كرة السلة",
        "tags": [
          "FIBA",
          "ثماني ثوانٍ",
          "وقت مستقطع"
        ],
        "external_id": "sports-rare-rules-024",
        "is_verified": true,
        "version": 1
      },
      {
        "question_text": "وفق قواعد FIE، أي سلاح مبارزة يجعل كامل جسم الخصم، بما فيه اليدان والقدمان، هدفًا صالحًا للمسة؟",
        "options": [
          "الشيش Foil",
          "سيف المبارزة Épée",
          "السيف العربي Sabre",
          "الأسلحة الثلاثة جميعًا"
        ],
        "correct_index": 1,
        "time_limit_seconds": 40,
        "order_index": 24,
        "image_url": null,
        "question_type": "multi",
        "explanation": "في سيف المبارزة Épée يشمل الهدف كامل سطح جسم المبارز وملابسه ومعداته، بخلاف الشيش والسيف العربي اللذين يحددان مناطق هدف أضيق.",
        "source": "FIE — Technical Rules, Épée: Valid target (t.90): https://fie.org/fie/documents/rules",
        "difficulty": "high",
        "subcategory": "المبارزة",
        "tags": [
          "FIE",
          "Épée",
          "الهدف الكامل"
        ],
        "external_id": "sports-rare-rules-025",
        "is_verified": true,
        "version": 1
      }
    ]
  }
];
