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
  }
];
