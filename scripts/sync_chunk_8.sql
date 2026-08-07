DO $$
DECLARE
  v_sync_id_139 uuid;
BEGIN
  SELECT id INTO v_sync_id_139 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 2' LIMIT 1;
  IF v_sync_id_139 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 2', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_139;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'أي مكوك فضاء تابع لناسا تحطم أثناء دخوله الغلاف الجوي في 1 فبراير 2003‏؟', '["كولومبيا","تشالنجر","ديكفري","أنديفور"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للكتلة؟', '["الطن","الكيلوغرام","الرطل","الغرام"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هو أول كائن حي صعد إلى الفضاء؟', '["القرد","الكلب","ذباب الفاكهة","الفأر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'فاز ألبرت أينشتاين بجائزة نوبل عن نظريته النسبية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'إلى أي عنصر يشير الرمز "⁦Au⁩" في الجدول الدوري؟', '["الذهب","الفضة","الأكسجين","النيكل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للتيار الكهربائي؟', '["الفولت","الأمبير","الأوم","الواط"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هي درجة الحرارة المتساوية في مقياسي السيلسيوس والفهرنهايت؟', '["32","-39","-40","-42"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هو فرط صوديوم الدم (⁦Hypernatremia⁩)‏؟', '["انخفاض نسبة البوتاسيوم في الدم","ارتفاع نسبة الجلوكوز في الدم","انخفاض نسبة الحديد في الدم","ارتفاع نسبة الصوديوم في الدم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'أي مما يلي ليس جزءاً من بنية العصبون (الخلية العصبية) النموذجي؟', '["جزر لانجرهانز","عقدة رانفييه","خلية شوان","غمد المايلين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'في أي مهمة تحطم مكوك الفضاء كولومبيا أثناء دخوله الغلاف الجوي؟', '["⁦STS-51-L⁩","⁦STS-107⁩","⁦STS-61-C⁩","⁦STS-109⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما الذي يسبب صوت نبضات القلب؟', '["انقباض حجرات القلب","خروج الدم من القلب","انغلاق صمامات القلب","ارتخاء حجرات القلب"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'كم عدد النسخ التي تمتلكها الخلايا البشرية عادة من كل جين؟', '["1","4","3","2"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'كم عدد حجرات قلب الإنسان؟', '["4","2","6","3"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هو اللون الذي لا يمكن إنتاجه في الورود، حتى من خلال التعديل الوراثي؟', '["الأسود","الأزرق","البرتقالي","البني"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'نجم الشمال (⁦Polaris⁩) هو ألمع نجم في سماء الليل في نصف الكرة الشمالي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'أي غاز نبيل لديه أقل عدد ذري؟', '["النيون","الأرجون","الكريبتون","الهيليوم"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'أي من مهمات أبولو كانت الأولى التي هبطت على سطح القمر؟', '["أبولو 11","أبولو 10","أبولو 9","أبولو 13"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'ما هو "مصنع الطاقة" في الخلية الحيوانية حقيقية النواة؟', '["النواة","الميتوكوندريا (المتقدرات)","البلاستيدات الخضراء","الشبكة الإندوبلازمية"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'من أين تنحدر سلالة الكلاب "تشيواوا" (⁦Chihuahua⁩)‏؟', '["فرنسا","إسبانيا","المكسيك","روسيا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_139, 'تتشكل الصخور النارية بفعل الحرارة والضغط الشديدين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_140 uuid;
BEGIN
  SELECT id INTO v_sync_id_140 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 3' LIMIT 1;
  IF v_sync_id_140 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 3', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_140;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'الماء منزوع الأيونات هو ماء تمت إزالة أي مما يلي منه؟', '["الحديد","الأكسجين","الهيدروجين","الذرات غير المشحونة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هو العنصر الأول في الجدول الدوري؟', '["الهيليوم","الهيدروجين","الأكسجين","الليثيوم"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'من صاغ نظرية "الانفجار العظيم" لأول مرة كان كاهناً ينتمي لأي طائفة دينية؟', '["المسيحية العامة","اليهودية","الكاثوليكية","الإسلامية"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما مقدار الإشعاع الذي تصدره موزة واحدة؟', '["⁦0.3⁩ ميكروسيفيرت","⁦0.5⁩ ميكروسيفيرت","⁦0.7⁩ ميكروسيفيرت","⁦0.1⁩ ميكروسيفيرت"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'أي قمر اصطناعي من سلسلة لاندسات (⁦Landsat⁩) لديه أطول فترة تشغيلية حتى الآن؟', '["لاندسات 5","لاندسات 8","لاندسات 7","لاندسات 6"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ماذا يسمى الغلاف الغازي للمذنب (الذي يشكّل الذيل)‏؟', '["المجرى الخلفي (⁦The wake⁩)","الذؤابة (⁦Coma⁩)","الارتداد الموجي (⁦The backwash⁩)","الطبقة المذابة (⁦The ablative⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'الديوتيريوم هو نظير لأي عنصر؟', '["النيتروجين","الهيليوم","الهيدروجين","النيون"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'تتكون الألياف العضلية من حزم من العضيات الطويلة والصغيرة تسمى ماذا؟', '["غلاف العضلة (⁦Epimysium⁩)","الخيوط العضلية (⁦Myofilaments⁩)","عضلة القلب (⁦Myocardium⁩)","اللييفات العضلية (⁦Myofibrils⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للوقت؟', '["الثانية","الدقيقة","الساعة","اليوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هي مرحلة النمو التي تقضي فيها معظم الخلايا حقيقية النواة غالبية دورة حياتها؟', '["الطور التمهيدي (⁦Prophase⁩)","الطور البيني (⁦Interphase⁩)","الطور الساكن (⁦Stasis⁩)","الطور النهائي (⁦Telophase⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'من هو مكتشف الأشعة السينية (أشعة إكس)‏؟', '["توماس ألفا إديسون","جيمس واط","فيلهلم كونراد رونتغن (⁦Wilhelm Conrad Röntgen⁩)","ألبرت أينشتاين"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'كم تبلغ مدة السنة الواحدة تقريباً على كوكب أورانوس؟', '["47 سنة أرضية","62 سنة أرضية","109 سنة أرضية","84 سنة أرضية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هي صيغة كيميائية للأمونيا (النشادر)‏؟', '["⁦NH3⁩","⁦CO2⁩","⁦NO3⁩","⁦CH4⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هو أقوى سم معروف على الإطلاق؟', '["الريسين","سم البوتولينوم (⁦Botulinum toxin⁩)","السيانيد","الأسبستوس"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'أي مما يلي هو نوع من منعكسات التمدد/منعكسات الوتر العميق؟', '["منعكس القيء (⁦Gag reflex⁩)","المنعكس الحدقي الضوئي (⁦Pupillary light reflex⁩)","منعكس نفضة الكاحل (⁦Ankle jerk reflex⁩)","منعكس الحك (⁦Scratch reflex⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ينطبق تأثير دوبلر على الضوء.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'كم تبلغ نسبة الماء تقريباً من مساحة سطح الأرض؟', '["70%","30%","50%","90%"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هو البوليمر المستخدم في صناعة الأقراص المدمجة (⁦CDs⁩)، ونظارات السلامة، ودروع مكافحة الشغب؟', '["المطاط","البولي كربونيت (⁦Polycarbonate⁩)","النايلون","الباكليت"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'كم يبلغ عمر كوكب الأرض تقريباً؟', '["⁦3.5⁩ مليار سنة","⁦2.5⁩ مليار سنة","⁦4.5⁩ مليار سنة","⁦5.5⁩ مليار سنة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_140, 'ما هو الدواء الذي كان يُستخدم سابقاً بشكل شائع كسم للفئران؟', '["أسبرين","إليكويس","تايلينول","كومادين"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_141 uuid;
BEGIN
  SELECT id INTO v_sync_id_141 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 4' LIMIT 1;
  IF v_sync_id_141 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 4', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_141;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما هو العنصر في الجدول الدوري الذي يحتوي على 92 إلكتروناً؟', '["اليورانيوم","الكبريت","الهيدروجين","الحديد"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'يغلي الماء دائماً عند 100 درجة مئوية، أو 212 درجة فهرنهايت، أو ⁦373.15⁩ كلفن، بغض النظر عن مكان وجودك.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما هو الاسم العلمي (اللينيني) لشجرة التفاح المستأنسة؟', '["مالوس أميريكانا (⁦Malus americana⁩)","بوموس دوميستيكا (⁦Pomus domestica⁩)","مالوس بوميلا (⁦Malus pumila⁩)","أبيلوس ديليكتيكا (⁦Appelus delectica⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'توفر ظاهرة صعود مياه القاع في المحيط مياهاً أكثر برودة وغنية بالمواد المغذية للنباتات والمحللات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'وفقاً لمقياس سكوفيل، ما هي المادة الكيميائية الأكثر حرارة؟', '["ريزينيفراتوكسين (⁦Resiniferatoxin⁩)","كابسيسين (⁦Capsaicin⁩)","ثنائي هيدروكابسيسين (⁦Dihydrocapsaicin⁩)","تنياتوكسين (⁦Tinyatoxin⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'أي مما يلي ليس نوعاً من الخلايا العصبية؟', '["الخلية العصبية الحسية","الخلية العصبية الإدراكية","الخلية العصبية الحركية","الخلية العصبية الموصلة (البينية)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ماذا يعني الاختصار العلمي (⁦DNA⁩)‏؟', '["حمض ديوكسي ريبوجينيتيك","ذرات ديوكسي ريبوجينيتيك","الحمض النووي الريبوزي منقوص الأكسجين","حمض إزالة السموم"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'تعتبر الشمس نجماً.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'أي مما يلي ليس من المجموعات التصنيفية في الجدول الدوري؟', '["الفلورينات","الفلزات القلوية","الهالوجينات","الغازات الخاملة (النبيلة)"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'من الناحية النباتية، أي من هذه الفواكه لا تُعتبر من التوتيات؟', '["التوت الأزرق","الفراولة","الموز","عنب كونكورد"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما الذي ينتج اللون الأخضر لمعظم أوراق النباتات؟', '["انكسار الضوء","الأصباغ الطبيعية","الكلوروفيل","الأشعة فوق البنفسجية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'عند أي عمق يجب عليك التوقف لتخفيف الضغط (وقفة الأمان) أثناء الغوص العادي؟', '["25 قدماً / ⁦7.5⁩ أمتار","50 قدماً / 15 متراً","75 قدماً / 23 متراً","15 قدماً / 5 أمتار"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما هو اسم الطبقة الدنيا (الأقرب للأرض) من الغلاف الجوي؟', '["التروبوسفير","الستراتوسفير","الميزوسفير","الثرموسفير"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'أي مما يلي يُعد كودون وقف (⁦Stop Codon⁩) في الحمض النووي (⁦DNA⁩)‏؟', '["⁦ACT⁩","⁦TAA⁩","⁦ACA⁩","⁦GTA⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'في أي عضو من أعضاء جسم الإنسان توجد ''جزر لانغرهانز''؟', '["الكلية","الكبد","البنكرياس","الدماغ"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'من من العلماء التاليين ليس لديه عنصر كيميائي مسمى باسمه؟', '["ألبرت أينشتاين","نيلز بور","إنريكو فيرمي","سير إسحاق نيوتن"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'كم عدد الفصوص في الرئة اليمنى للإنسان؟', '["3","4","2","1"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'يستطيع الجمبري (الروبيان) السباحة إلى الخلف.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما هو الوزن الذري القياسي لنواة البلوتونيوم؟', '["94","481","244","128"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_141, 'ما الذي يسبب داء لايم؟', '["فيروس","ديدان طفيلية","أميبا","بكتيريا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_142 uuid;
BEGIN
  SELECT id INTO v_sync_id_142 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 5' LIMIT 1;
  IF v_sync_id_142 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 5', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_142;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هو الاسم العلمي لرضفة الركبة (صابونة الركبة)‏؟', '["الرضفة (⁦Patella⁩)","عظم الفخذ (⁦Femur⁩)","الثقبة العظمى (⁦Foramen Magnum⁩)","لوح الكتف (⁦Scapula⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'تلتقي عظام العضد والكعبرة والزند معاً لتشكل أي مفصل؟', '["الركبة","المرفق (الكوع)","الكتف","الكاحل"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ماذا تدرس إذا كنت تدرس علم الحشرات (⁦Entomology⁩)‏؟', '["البشر","الدماغ","الحشرات","الأسماك"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما اسم الانحياز المعرفي الذي يخطئ فيه الشخص ذو القدرة المنخفضة في مهارة معينة فيظن نفسه متفوقاً؟', '["تأثير مايرز بريغز (⁦Meyers-Briggs effect⁩)","تأثير مولر-لاير (⁦Müller-Lyer effect⁩)","تأثير فرويد-هال (⁦Freud-Hall effect⁩)","تأثير دانينغ-كروجر (⁦Dunning-Kruger effect⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'أي مما يلي ليس مصطلحاً يُستخدم لوصف الزلازل؟', '["الانهيار الانزلاقي (⁦Drop-slide⁩)","الهزة الارتدادية المسبقة (⁦Foreshock⁩)","صدع الانزلاق المضربي (⁦Strike-slip⁩)","الهزة الأرضية (⁦Temblor⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'تتكون النجوم بشكل أساسي من الهيدروجين وأي غاز آخر؟', '["الأكسجين","الهيليوم","الأرغون","النيتروجين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هي الدولة التي نجحت لأول مرة في تفريخ وتربية تونة ذات زعانف زرقاء في المزارع عام 1979‏؟', '["فرنسا","الولايات المتحدة الأمريكية","اليابان","الفلبين"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هو الاسم البديل لاضطراب تعدد الشخصيات؟', '["اضطراب سلامة الهوية الجسدية (⁦Body integrity identity disorder⁩)","أزمة الهوية","الفصام (⁦Schizophrenia⁩)","اضطراب الهوية الانفصامي (⁦Dissociative identity disorder⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'يمكن للصوت أن ينتقل عبر الفراغ.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'تعتبر نبتة "جيمبي ستينجر" النبتة الأكثر فتكاً في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هو الاسم الرسمي للنجم الأقرب إلى القطب السماوي الشمالي؟', '["النهر (⁦Eridanus⁩)","جاما الملتهب (⁦Gamma Cephei⁩)","نجم الشمال (⁦Polaris⁩)","إيوتا الملتهب (⁦Iota Cephei⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هو العدد الذري لعنصر الاسترونشيوم؟', '["73","47","11","38"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'أي نوع من الصخور يتكون بفعل الحرارة والضغط الشديدين؟', '["الصخور المتحولة","الصخور الرسوبية","الصخور النارية","الألماس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'أي مما يلي هي خلايا تابعة لجهاز المناعة التكيفي؟', '["الخلايا التغصنية","الخلايا التائية القاتلة","الخلايا القاتلة الطبيعية","خلايا الدم البيضاء"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'أي مما يلي هو الجزء التناسلي الذكري المنتج لحبوب اللقاح في الزهرة؟', '["السبلة","المدقة","السداة","البتلة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'أي جزء من نبات الماريجوانا ينتج المادة المؤثرة عقلياً المعروفة باسم ⁦THC⁩‏؟', '["الأوراق","الزهرة الذكرية","كتلة الجذور","الزهرة الأنثوية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'طور العالمان الفرنسيان لويس باستور وإيميل رو أول لقاح لداء الكلب في عام 1885.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'قتل العلماء بالخطأ أقدم مخلوق حي معروف في العالم، وهو حيوان رخوي، تبين أن عمره يبلغ 507 سنوات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'ما هو الرمز الكيميائي لعنصر الهيليوم؟', '["⁦H⁩","⁦Hg⁩","⁦He⁩","⁦Hs⁩"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_142, 'تنبع كلمة "⁦Science⁩" (علم) من الكلمة اللاتينية "⁦Scire⁩" والتي تعني ماذا؟', '["أن تقيس","أن تعيش","أن تعد","أن تعرف (المعرفة)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_143 uuid;
BEGIN
  SELECT id INTO v_sync_id_143 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 6' LIMIT 1;
  IF v_sync_id_143 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 6', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_143;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هي وحدة السعة الكهربائية؟', '["الفاراد","الغاوس","الهنري","الواط"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'كم قمراً للأرض؟', '["0","1","2","3"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو المصطلح العلمي لـ ''حاسة التذوق''؟', '["حاسة الشم","الحس الجسدي","الإدراك الذوقي","الإدراك السمعي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'أي عنصر لديه أعلى درجة انصهار؟', '["التنجستن","البلاتين","الأوزميوم","الكربون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ماذا استخدم غريغور مندل لاختبار العبور الجيني وعلم الوراثة؟', '["البازلاء","القطط","الزهور","الببّغاوات"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو أكبر كوكب في النظام الشمسي؟', '["زحل","المشتري","الأرض","المريخ"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'كم يبلغ عمر الكون؟', '["⁦4.5⁩ مليار سنة","⁦7.9⁩ مليار سنة","⁦13.8⁩ مليار سنة","⁦16.2⁩ مليار سنة"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'أين تقع الغدة الصنوبرية في جسم الإنسان؟', '["المنطقة الأربية (أعلى الفخذ)","الصدر","الحلق","الدماغ"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو المصطلح الأكثر ارتباطاً بسيغموند فرويد؟', '["التحليل النفسي","العلاج المعرفي السلوكي","نظرية الجاذبية","العلاج السلوكي الجدلي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هي الصيغة الجزيئية للجلوكوز؟', '["⁦C2H4O2⁩","⁦C6H12O6⁩","⁦K⁩+","⁦CH4⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو العلم الذي يدرس خلايا وأنسجة النباتات والحيوانات؟', '["علم الأحياء الدقيقة","علم التشريح","علم الأنسجة (⁦Histology⁩)","الكيمياء الحيوية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هي المادة الأساسية المسببة للإدمان والموجودة في التبغ؟', '["الكاثينون","الإيفيدرين","الغلاوسين","النيكوتين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'كم عدد الأرجل التي يستحيل بيولوجياً أن تكون لدى أم أربعة وأربعين (حريش)‏؟', '["100","26","50","74"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو التركيب الكيميائي للماء؟', '["⁦C12H6O2⁩","⁦H20⁩","⁦CO2⁩","⁦H⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'في علم النفس، أي من الاحتياجات التالية تقع في أعلى هرم "ماسلو للاحتياجات الإنسانية"؟', '["الحب والانتماء","الأمان","تقدير الذات (الاحترام)","الاحتياجات الفسيولوجية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'أي من الأوعية الدموية التالية يحمل دماً غير مؤكسج (خالٍ من الأكسجين)‏؟', '["الوريد الرئوي","الشريان الأورطي (الأبهر)","الشريان التاجي","الشريان الرئوي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو أول مركب عضوي تم تحضيره (تخليقه) من مركبات غير عضوية؟', '["اليوريا (البولينا)","البروبان","الإيثانول","الفورمالديهايد"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'كان إنسان النياندرتال سلفاً مباشراً للإنسان الحديث.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'ما هو الاسم العلمي للثعلب الأحمر؟', '["فولبيس ريدوس (⁦Vulpes Redus⁩)","الثعلب الأحمر (⁦Red Fox⁩)","فولبيس فولبيس (⁦Vulpes Vulpes⁩)","فولبيس فولبي (⁦Vulpes Vulpie⁩)"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_143, 'أي مما يلي هو المصطلح العلمي لـ "تجمد الدماغ"؟', '["هايسنثويدس إيتاليكا","أمارانثوس ريتروفليكسوس","أمبليوما أمريكانوم","سفينوبالاتين غانغليونورالجيا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_144 uuid;
BEGIN
  SELECT id INTO v_sync_id_144 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 7' LIMIT 1;
  IF v_sync_id_144 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 7', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_144;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هو نوع عمى الألوان الأكثر ندرة على الإطلاق؟', '["الأزرق","الأحمر","الأخضر","البنفسجي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'كل العناصر الفلزية التالية تكون سائلة عند درجة حرارة الغرفة أو قريباً منها ما عدا:', '["الغاليوم","البيريليوم","السيزيوم","الزئبق"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هو الاسم العلمي لغوريلا السهول الغربية؟', '["غوريلا غوريلا ديهلي","غوريلا بيرنغي غراويري","غوريلا غوريلا غوريلا","غوريلا بيرنغي بيرنغي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هو العنصر الذي يتحول إلى ألماس عند تعرضه لحرارة وضغط شديدين؟', '["النيتروجين","الأكسجين","الهيدروجين","الكربون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'أي جزء من جسم الإنسان يصيبه مرض ألزهايمر بشكل أساسي؟', '["الدماغ","الرئتان","الجلد","القلب"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'حمض الفوليك هو الشكل الاصطناعي لأي من الفيتامينات التالية؟', '["فيتامين أ","فيتامين ب","فيتامين ج","فيتامين د"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'أي جزء من الدماغ يأخذ اسمه من الكلمة اليونانية التي تعني "حصان البحر"؟', '["المخيخ","المهاد","الحصين","اللوزة الدماغية"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هي وحدة قياس المقاومة الكهربائية؟', '["المهو","التسلا","الجول","الأوم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'كم عدد أنواع الكواركات في النموذج القياسي للفيزياء؟', '["6","2","3","4"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'من هو عالم النفس السويسري الذي يرتبط اسمه بمفهومي الشخصية الانطوائية والانبساطية؟', '["جان بياجيه","كارل يونغ","أليس ميلر","هيرمان رورشاخ"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'يقوم القرش الأبيض الكبير أحياناً بهجوم "الضربة والعضة" (عضة اختبارية) على ضحاياه.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هي الوحدة القياسية الدولية لشدة الإضاءة؟', '["اللومن","الفاراداي","الكولوم","الكانديلا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'أي غاز يشكل حوالي 78% من الغلاف الجوي للأرض؟', '["النيتروجين","الأكسجين","الأرغون","ثاني أكسيد الكربون"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'لأقرب دقيقة، كم من الوقت يستغرق ضوء الشمس للوصول إلى الأرض؟', '["6 دقائق","8 دقائق","دقيقتان","12 دقيقة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'تيمناً بمن تم تسمية العنصر الكيميائي الكوريوم؟', '["مسبار كوريوسيتي","جورج الفضولي","ماري وبيير كوري","ستيفن كوري"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هو أكبر كائن حي معروف للإنسان حالياً؟', '["الحوت الأزرق","شجرة الخشب الأحمر","الشعاب المرجانية","فطر العسل"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'ما هو العضيو الذي يعتبر "محطة طاقة الخلية"؟', '["الميتوكوندريا","الريبوسوم","ريد بول","النواة"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'يُعتبر المركب العضوي كحولاً إذا كان يحتوي على أي من المجموعات الوظيفية التالية؟', '["الكربونيل","الهيدروكسيل","الألكيل","الألدهيد"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'إلى ماذا يشير مصطلح "العزل" في علم الأحياء الدقيقة؟', '["نقص التغذية في البيئات الدقيقة","مستوى النيتروجين في التربة","فصل سلالة معينة من تجمع طبيعي ومختلط للميكروبات الحية","اختبار تأثيرات كائنات دقيقة معينة في بيئات معزولة مثل الكهوف"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_144, 'أي مصطلح نفسي يشير إلى التوتر الناتج عن حمل معتقدات متناقضة؟', '["متلازمة التقلب","انقسام الدماغ","الرؤية العمياء","التنافر المعرفي"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_145 uuid;
BEGIN
  SELECT id INTO v_sync_id_145 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 8' LIMIT 1;
  IF v_sync_id_145 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 8', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_145;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما هو الكوكب الأكثر سخونة في المجموعة الشمسية؟', '["الزهرة","المشتري","عطارد","المريخ"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما هي الصيغة الجزيئية لغاز الأوزون؟', '["⁦C6H2O6⁩","⁦O3⁩","⁦N2O⁩","⁦SO4⁩"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'من الذي طور أول لقاح ناجح لشلل الأطفال في خمسينيات القرن الماضي؟', '["جون إندرز","توماس ويلر","جوناس سالك","فريدريك روبنز"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ماذا يعني الاسم العلمي للمخلوق البحري "أنومالوكاريس" الذي عاش في العصر الكامبري؟', '["السمكة المشوهة","السرطان الغريب","المحار الشاذ","الروبيان غير الطبيعي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما هو النوكليوتيد الذي يرتبط مع الغوانين؟', '["السيتوزين","الثايمين","الأدينين","اليوراسيل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'أي كواكب المجموعة الشمسية هو الأقرب إلى الشمس؟', '["الأرض","عطارد","المريخ","الزهرة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'علم النفس هو علم دراسة السلوك والعقل.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما الاسم الشائع لحمض إيزوبوتيل فينيل بروبيونيك؟', '["المورفين","الكيتامين","الأسبرين","الإيبوبروفين"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'مما تتكون أظافر الإنسان؟', '["الكيراتين","العظام","الكيتين","الكالسيوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'يتكون معظم الشمس من أي عنصرين؟', '["الهيدروجين والنيتروجين","الهيدروجين والهيليوم","الكربون والنيتروجين","الكربون والهيليوم"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'أي قمر هو التابع الوحيد في مجموعتنا الشمسية الذي يمتلك غلافاً جوياً كثيفاً؟', '["أوروبا","ميراندا","تيتان","كاليستو"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما الذي يقع في مركز مجرتنا؟', '["ثقب دودي","مستعر أعظم","شبه نجم (كوازار)","ثقب أسود"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'ما هي أطول عظمة في جسم الإنسان؟', '["عظمة الفخذ","لوح الكتف","الشظية","الزند"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'أي من هذه الصفائح هي الأكثر شهرة بالتسبب في حدوث الزلازل والتسونامي؟', '["حدود الصفائح المتباعدة/المتقاربة/القشرة المحيطية","حدود الصفائح المتقاربة/القشرة المحيطية","حدود الصفائح التحويلية/حدود الصفائح المتباعدة","القشرة المحيطية والقارية/حدود الصفائح التحويلية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'أي من البلاستيك التالي يُسخدم عادةً في إطارات النوافذ والمزاريب وأنابيب الصرف؟', '["بولي إيثيلين (⁦PE⁩)","بولي بروبيلين (⁦PP⁩)","بولي فينيل كلورايد (⁦PVC⁩)","بولي ستيرين (⁦PS⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'أي مما يلي ليس عنصراً حقيقياً في الجدول الدوري؟', '["براسيديوميوم","هاسيوم","لوتيتيوم","فيترينيوم"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'متى تم استنساخ أول ثديي بنجاح؟', '["1996","2009","1999","1985"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'المرض الجوفي (السيلياك) هو مرض يصيب القلب، مما يجعل المصابين به غير قادرين على تناول اللحوم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'الفولاذ هو سبيكة من الحديد والكربون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_145, 'كم عدد الكروموسومات في خلايا جسمك؟', '["21","22","24","23"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_146 uuid;
BEGIN
  SELECT id INTO v_sync_id_146 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 9' LIMIT 1;
  IF v_sync_id_146 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 9', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_146;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'كان يُعتقد في الماضي أن حقن غضروف القرش في البشر يمنعهم من الإصابة بالسرطان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي كوكبة تحتوي على مركز مجرة درب التبانة؟', '["العقرب","الرامي (القوس)","الحواء","الجدي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'تيتسويا فوجيتا كان عالماً طور مقياساً لأي من الكوارث الطبيعية التالية؟', '["الأعاصير الاستوائية (الهوريكان)","الزلازل","الأعاصير القمعية (التورنادو)","البراكين"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'كولروفوبيا (⁦Coulrophobia⁩) هي الخوف غير العقلاني من ماذا؟', '["المقابر","الإبر","الأنفاق","المهرجين"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي من هذه النجوم هو الأكبر حجماً؟', '["يو واي سكوتي (⁦UY Scuti⁩)","في واي الكلب الأكبر (⁦VY Canis Majoris⁩)","منكب الجوزاء (⁦Betelgeuse⁩)","آر دبليو الملتهب (⁦RW Cephei⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'في الفيزياء، يعتبر حفظ الطاقة وحفظ الزخم كلاهما نتيجة لأي مما يلي؟', '["مبرهنة بيل","مبرهنة نويثر","مبرهنة ويك","مبرهنة كارنو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ما اسم أول قمر صناعي للأرض أطلقه الاتحاد السوفيتي عام 1957‏؟', '["سويوز ⁦7K-OK⁩","زينيت-2","سبوتنيك 1","فوسخود ⁦3KV⁩"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'الميوبيا (⁦Myopia⁩) هو المصطلح العلمي لأي حالة؟', '["طول النظر","الرؤية المزدوجة","الرؤية الضبابية","قصر النظر"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي من هذه العناصر يعتبر من أشباه الفلزات؟', '["الأنتيمون","القصدير","البروم","الروبيديوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ما هي سرعة الضوء في الفراغ؟', '["50,461 م/ث","299,792,458 م/ث","308,215,043 م/ث","751,665,014,151 م/ث"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي مما يلي ليس مكوناً كهربائياً خاملاً؟', '["المقاوم","المكثف","الترانزستور","المحث"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ما هو المصطلح الطبي لانخفاض نسبة السكر في الدم؟', '["قصور الغدة الدرقية","انخفاض حرارة الجسم","نقص الأكسجين","نقص سكر الدم"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ما هو لون الدم غير المؤكسج؟', '["الأحمر","الأزرق","البنفسجي","الأخضر"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي من هذه العناصر في الجدول الدوري يعتبر غازاً نبيلاً؟', '["البوتاسيوم","النيون","اليود","الكوبالت"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ما هو العضيو الخلوي المعروف بـ "محطة طاقة الخلية"؟', '["النواة","جهاز جولجي","الميتوكوندريا","الشبكة الإندوبلازمية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'إذا غمست منشفة جافة في حوض مليء بالماء، سيرتفع الماء إلى أعلى المنشفة بفعل ظاهرة تسمى "الخاصية الكارتيلرية" (⁦Cartillary Action⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'ماذا يمثل المعين الأصفر في معين الحرائق (⁦NFPA 704⁩)‏؟', '["التفاعلية","المخاطر الصحية","القابلية للاشتعال","النشاط الإشعاعي"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي من المركبات الفضائية التالية لم تلمس القمر مطلقاً؟', '["أبولو 11","مارينر 4","لونا 2","سمارت-1"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_146, 'أي جزء من الجسم يفرز الأنسولين؟', '["الكلية","الكبد","البنكرياس","المعدة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_147 uuid;
BEGIN
  SELECT id INTO v_sync_id_147 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 1' LIMIT 1;
  IF v_sync_id_147 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 1', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_147;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'من هو سائق الفورمولا 1 الذي لُقِّب بـ ''البروفيسور''؟', '["ألان بروست","أيرتون سينا","نيكي لاودا","إيمرسون فيتيبالدي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'في الفورمولا 1، تم إدخال سيارة الأمان الافتراضية بعد الحادث المميت لأي سائق؟', '["أيرتون سينا","جول بيانكي","رونالد راتزنبرجر","جيل فيلنوف"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'ملعب ''ستاديوم أوف لايت'' (ملعب النور) هو الملعب الرئيسي لأي فريق كرة قدم؟', '["نادي برشلونة","باريس سان جيرمان","نادي سندرلاند","مانشستر يونايتد"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'من هو اللاعب الذي شارك في أكبر عدد من البطولات مع منتخب ألمانيا لكرة القدم؟', '["ميروسلاف كلوزه","فيليب لام","أوليفر كان","لوثار ماتيوس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'عند أي جسر يبدأ سباق القوارب السنوي بين أكسفورد وكامبريدج؟', '["باتني","هامرسميث","فوكسهول","باترسي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'بأي حدث مأساوي يُذكر موسم 1994 للفورمولا 1‏؟', '["المواجهة الحاسمة (أستراليا)","وفاة أيرتون سينا (سان مارينو)","احتراق سيارة فيرستابين (ألمانيا)","إيقاف شوماخر (بريطانيا)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'أي من هذه المدن الروسية لم تحتوي على ملعب استُخدم في كأس العالم لكرة القدم 2018‏؟', '["روستوف على نهر الدون","يكاترينبورغ","فلاديفوستوك","كالينينغراد"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'ما هو الرقم القياسي الشخصي للعداء كينينيسا بيكيلي في الماراثون؟', '["2:01:12","2:01:45","2:01:51","2:01:41"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'عُرضت الحلقة الأولى من برنامج ''⁦WWF Monday Night RAW⁩'' في 11 يناير 1990.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'أُدرجت رياضة التزلج على الألواح (⁦Skateboarding⁩) في دورة الألعاب الأولمبية الصيفية لعام 2020 في طوكيو.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'من هو لاعب دوري السلة الأمريكي (⁦NBA⁩) الذي فاز بجائزة اللاعب الأكثر قيمة (⁦MVP⁩) لموسم 1999-2000‏؟', '["ألين إيفرسون","كوبي براينت","شاكيل أونيل","بول بيرس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'متى أُقيمت أول مباراة دولية رسمية في تاريخ كرة القدم؟', '["1880","1863","1865","1872"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'افتتح لاعب كرة القدم كريستيانو رونالدو متحفاً مخصصاً لنفسه.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'في أي دولة أُقيمت دورة الألعاب الأولمبية الشتوية لعام 2014 في مدينة سوتشي؟', '["كوريا الجنوبية","روسيا","النرويج","كندا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'ما هو المنتخب الوطني الذي فاز بأول نسخة من دوري الأمم الأوروبية؟', '["هولندا","إنجلترا","البرتغال","سويسرا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'من يُعتبر أفضل لاعب كرة قدم روماني على مر العصور؟', '["كريستيان كيفو","نيكولاي دوبرين","جورجي بوبيسكو","جورجي هاجي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'من هو لاعب السهام المريشة (⁦Darts⁩) الذي فاز بأكبر عدد من ألقاب بطولة العالم؟', '["فيل تايلور","مايكل فان جيروين","ريموند فان بارنيفيلد","إيريك بريستو"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'ما هي النتيجة النهائية لمباراة ألمانيا ضد البرازيل في كأس العالم 2014‏؟', '["0 - 1","7 - 1","3 - 4","16 - 0"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_147, 'كم عدد النقاط التي سجلها ليبرون جيمس في أول مباراة له في دوري السلة الأمريكي (⁦NBA⁩)‏؟', '["19","69","25","41"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_148 uuid;
BEGIN
  SELECT id INTO v_sync_id_148 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 2' LIMIT 1;
  IF v_sync_id_148 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 2', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_148;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في أي عام فاز جينسون باتون بأول بطولة عالم لسائقي الفورمولا 1 في مسيرته؟', '["2009","2010","2007","2006"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من هو سائق الفورمولا 1 الذي انتقل إلى فريق آخر في منتصف موسم 2017‏؟', '["دانييل كفيات","كارلوس ساينز الابن","جوليون بالمر","ريو هاريانتو"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من هو اللاعب الأكثر مشاركة في المباريات تاريخياً مع نادي مانشستر يونايتد؟', '["ديفيد بيكهام","واين روني","رايان غيغز","إيريك كانتونا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من فاز بدوري أبطال أوروبا في عام 2016‏؟', '["بايرن ميونخ","أتلتيكو مدريد","مانشستر سيتي","ريال مدريد"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في عام 2008، حقق يوسين بولت الرقم القياسي العالمي لسباق 100 متر برباط حذاء واحد غير مربوط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في كأس العالم 2014، ما هي النتيجة النهائية لمباراة البرازيل ضد ألمانيا؟', '["1-5","1-7","1-6","2-6"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'ما اسم ملعب نادي مانشستر يونايتد الرئيسي؟', '["أنفيلد","ملعب مدينة مانشستر","أولد ترافورد","سانت جيمس بارك"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في موسم 1988 للفورمولا 1، فاز فريق ماكلارين بجميع السباقات باستثناء سباق واحد فقط، ما هو هذا السباق؟', '["سباق جائزة اليابان الكبرى","سباق جائزة موناكو الكبرى","سباق جائزة البرازيل الكبرى","سباق جائزة إيطاليا الكبرى"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'أي من هذه الفرق لم يلعب لصالحها اللاعب يارومير ياغر؟', '["نيويورك آيلاندرز","كالغاري فليمز","نيوجيرسي ديفلز","دالاس ستارز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'كم عدد لاعبي كرة القدم الذين يجب أن يتواجدوا في الملعب في نفس الوقت (لكلا الفريقين)‏؟', '["20","22","24","26"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'أي شركة تصنيع سيارات فازت بسباق لو مان 24 ساعة لعام 2017‏؟', '["تويوتا","أودي","بورشه","شيفروليه"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في عام 2016، من فاز ببطولة العالم لـ ''الصانعين'' في الفورمولا 1 للمرة الثالثة على التوالي؟', '["سكوديريا فيراري","ماكلارين هوندا","ريد بول ريسينغ رينو","مرسيدس إيه إم جي بتروناس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'كم عدد ألقاب الدوري الإنجليزي الممتاز التي حققها السير أليكس فيرغسون خلال فترة تدريبه لمانشستر يونايتد؟', '["13","11","20","22"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'ملعب الاتحاد هو الملعب الرئيسي لأي فريق؟', '["مانشستر يونايتد","مانشستر سيتي","أرسنال","بلاكبول"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'في أي عام فاز نادي ستيوا بوخارست بكأس أوروبا (المعروف حالياً بدوري أبطال أوروبا) ضد نادي برشلونة؟', '["1990","1982","1986","1989"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من فاز بسباق دايتونا 500 (⁦Daytona 500⁩) لعام 1998‏؟', '["جون أندرسون","جيف غوردون","مايكل والتريب","ديل إيرنهاردت"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'أي شركة ملابس رياضية ألمانية تستخدم شعار ''فورم سترايب'' (الخط المقوس المميز)‏؟', '["بوما","نايكي","أديداس","ريبوك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من هو الهداف التاريخي لنادي مانشستر يونايتد في الدوري الإنجليزي الممتاز؟', '["السير بوبي تشارلتون","واين روني","رايان غيغز","ديفيد بيكهام"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_148, 'من فاز ببطولة العالم للفورمولا 1 لعام 2015‏؟', '["نيكو روزبرغ","سيباستيان فيتيل","لويس هاملتون","جينسون باتون"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_149 uuid;
BEGIN
  SELECT id INTO v_sync_id_149 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 3' LIMIT 1;
  IF v_sync_id_149 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 3', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_149;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'دوري أبطال أوروبا هو بطولة سنوية لأندية كرة القدم تضم أندية من أي قارة؟', '["أوروبا","أمريكا الجنوبية","أفريقيا","آسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'أي دولة استضافت دورة الألعاب الأولمبية الشتوية لعام 2014‏؟', '["كندا","روسيا","الولايات المتحدة","ألمانيا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'من فاز بكأس ستانلي (⁦Stanley Cup⁩) لعام 2011‏؟', '["مونتريال كاناديانز","نيويورك رينجرز","بوسطن بروينز","تورونتو ميبل ليفز"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'روجيه فيدرر هو لاعب كرة قدم مشهور.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'ما هي الأداة التي يُطلق اسمها على ميزة الرمية الأخيرة (الحجر الأخير) في جولة لعبة الكيرلنج؟', '["المطرقة","مفتاح الربط","المثقاب","مفك البراغي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'سجل ويلت تشامبرلين 100 نقطة في مباراته الشهيرة ضد نيويورك نيكس عام 1962.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'أي فريق فاز بالدوري الإنجليزي الممتاز لموسم 2015-2016‏؟', '["ليفربول","تشيلسي","ليستر سيتي","مانشستر يونايتد"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'استضافت رابطة محترفي التنس (⁦ATP⁩) عدة بطولات على ملاعب مفروشة بالسجاد (⁦carpet court⁩) قبل أن يتم استبدالها لتقليل الإصابات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'من هي اللاعبّة التي فازت بالميدالية الذهبية لفردي تنس الطاولة في الألعاب الأولمبية لعام 2016‏؟', '["دينغ نينغ (الصين)","لي شياو شيا (الصين)","آي فوكوهارا (اليابان)","سونغ كيم (كوريا الشمالية)"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'أي من اللاعبين التاليين سجل هاتريك (ثلاثة أهداف) في أول ظهور له مع مانشستر يونايتد؟', '["كريستيانو رونالدو","واين روني","روبين فان بيرسي","ديفيد بيكهام"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'قبل عام 2018، ما هي شركة السيارات اليابانية الوحيدة التي فازت بسباق لو مان 24 ساعة؟', '["تويوتا","سوبارو","مازدا","نيسان"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'ما هو مصطلح الكريكت الذي يشير إلى خروج الضارب دون تسجيل أي نقطة (صفر)‏؟', '["باي (⁦Bye⁩)","بيمر (⁦Beamer⁩)","كاري (⁦Carry⁩)","داك (⁦Duck⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'في رياضة الغولف، ما الاسم الذي يُطلق على تسجيل ضربتين تحت المعدل في حفرة واحدة؟', '["إيغل","بيردي","بوغي","ألباتروس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'في أي سباق حُسم لقب بطولة العالم لسائقي الفورمولا 1 لعام 2018‏؟', '["الولايات المتحدة","المكسيك","بلجيكا","أبو ظبي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'أي من بطولات التنس الكبرى التالية (الجراند سلام) تقام في نهاية العام؟', '["بطولة فرنسا المفتوحة","بطولة ويمبلدون","بطولة أمريكا المفتوحة","بطولة أستراليا المفتوحة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'أين أقيمت دورة الألعاب الأولمبية الصيفية الثانية والعشرون؟', '["برشلونة","طوكيو","لوس أنجلوس","موسكو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'كم مرة فازت مارتينا نافراتيلوفا ببطولة ويمبلدون لفردي السيدات؟', '["تسع مرات","عشر مرات","سبع مرات","ثماني مرات"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'في كرة القدم، يتم استئناف اللعب بركلة ركنية بعد أن يسجل أحد الفريقين هدفاً.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_149, 'في أي رياضة تُستخدم المصطلحات: لوف (⁦love⁩)، ديوس (⁦deuce⁩)، ماتش (⁦match⁩)، وفولي (⁦volley⁩)‏؟', '["الكريكت","كرة السلة","التنس","الكيرلنج"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_150 uuid;
BEGIN
  SELECT id INTO v_sync_id_150 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 4' LIMIT 1;
  IF v_sync_id_150 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 4', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_150;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'من هو شريك الزوجي الذي حقق معه لاعب التنس جون ماكنرو أكبر نجاحاته؟', '["بيتر فليمنغ","مارك وودفورد","مايكل ستيتش","ماري كاريلو"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'أي من منتخبات الدول التالية تأهل إلى كأس العالم لكرة القدم 2018 في روسيا؟', '["الولايات المتحدة الأمريكية","تونس","إيطاليا","هولندا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'من هو اللاعب الذي فاز بالميدالية الذهبية في فردي كرة الطاولة للرجال في أولمبياد 2016‏؟', '["تشانغ جيكي (الصين)","جون ميزوتاني (اليابان)","ما لونغ (الصين)","فلاديمير سامسونوف (بيلاروسيا)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'أي من المدن الأوروبية التالية كانت الأولى التي تستضيف الألعاب الأولمبية الصيفية الحديثة ثلاث مرات؟', '["باريس","أثينا","روما","لندن"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'ما هي الدولة التي استضافت كأس العالم لكرة القدم عام 2022‏؟', '["قطر","أوغندا","فيتنام","بوليفيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'أي نادٍ إنجليزي لكرة القدم يُلقب بـ ''الثعالب''؟', '["نورثهامبتون تاون","ليستر سيتي","برادفورد سيتي","وست بروميتش ألبيون"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'كان هناك ما مجموعه 20 سباقاً في موسم فورمولا 1 لعام 2016.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'من فاز بسباق جائزة موناكو الكبرى لعام 2018‏؟', '["سباستيان فيتيل","كيمي رايكونن","لويس هاملتون","دانيال ريكاردو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'ما هو أعلى حزام يمكن الحصول عليه في رياضة التايكوندو؟', '["الأسود","الأبيض","الأحمر","الأخضر"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'من فاز ببطولة العالم لسائقي الفورمولا 1 لعام 2016‏؟', '["لويس هاملتون","نيكو روزبرغ","ماكس فيرستابن","كيمي رايكونن"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'أي دولة فازت بكأس العالم لكرة القدم 2018 التي استضافتها روسيا؟', '["كرواتيا","بلجيكا","فرنسا","إنجلترا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'لماذا تم بناء جدار ''الوحش الأخضر'' في ملعب فينواي بارك في الأصل؟', '["لجعل تسجيل الضربات الساحقة أكثر صعوبة.","لعرض الإعلانات التجارية.","لتوفير مقاعد إضافية للجمهور.","لمنع مشاهدة المباريات من خارج الملعب."]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'ما هي الرياضة التي تُعرف بـ ''رياضة الملوك''؟', '["سباق الخيل","الشطرنج","المبارزة بالرماح","المبارزة بالسيف"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'من أي مدينة أمريكية جاء فريق لوس أنجلوس دودجرز في الأصل؟', '["لاس فيغاس","بروكلين","بوسطن","سياتل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'جوش منصور هو لاعب في أي فريق من فرق دوري الرغبي الوطني (⁦NRL⁩)‏؟', '["ملبورن ستورم","سيدني روسترز","بينريث بانثرز","نورث كوينزلاند كاوبويز"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'أي من منافسات ألعاب القوى التالية غير مدرجة في مسابقة العشاري للرجال في الأولمبياد؟', '["القفز بالزانة","الوثب الطويل","دفع الجلة","رمي المطرقة"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'متى تأسس نادي شالكه 04 الألماني لكرة القدم؟', '["1904","1909","2008","1999"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_150, 'ما هي الدولة التي أنجبت لاعبي كرة قدم مثل كافو، وروبيرتو كارلوس، وبيليه؟', '["الأرجنتين","البرازيل","البرتغال","إسبانيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_151 uuid;
BEGIN
  SELECT id INTO v_sync_id_151 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 5' LIMIT 1;
  IF v_sync_id_151 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 5', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_151;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'أي مصارع فاز ببطولة رويال رامبل للرجال لعام 2019‏؟', '["سيث رولينز","برون سترومان","إيه جيه ستايلز","أندرادي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'كم عدد ألقاب بطولة فرنسا المفتوحة للتنس التي فاز بها بيورن بورغ؟', '["4","6","9","2"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'من فاز بدوري أبطال أوروبا في عام 2017‏؟', '["أتلتيكو مدريد","موناكو","ريال مدريد","يوفنتوس"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'ما هو لقب نادي رغبي يونيون لبلدة نورثهامبتون؟', '["هارليكوينز","ساراسينز","واسبس","السينتس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'ما هو الطول الدقيق للجزء المستقيم في الحارة الأولى من مضمار أولمبي؟', '["⁦84.39⁩ متر","100 متر","100 ياردة","⁦109.36⁩ ياردة"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'في أي عام تأسس نادي باري الإيطالي لكرة القدم؟', '["1945","1908","2014","1895"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'من كان هداف بطولة كأس العالم لكرة القدم لعام 2014‏؟', '["توماس مولر","ليونيل ميسي","خاميس رودريغيز","نيمار"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'أي فريق فاز ببطولة دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩) لموسم 2014-2015‏؟', '["كليفلاند كافالييرز","هوستون روكتس","أتلانتا هوكس","غولدن ستيت واريورز"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'من هو السائق الذي توج بلقب بطولة العالم للفورمولا 1 برقم قياسي بلغ 7 مرات؟', '["مايكل شوماخر","آيرتون سينا","فرناندو ألونسو","جيم كلارك"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'مع أي فريق فاز ستيفن جيرارد بلقب دوري أبطال أوروبا؟', '["ريال مدريد","ليفربول","تشيلسي","مانشستر سيتي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'ما اسم الأداة المستخدمة لضرب الكرة البيضاء في السنوكر أو البلياردو؟', '["المضرب","المضرب الخشبي","العصا","المطرقة"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'ما هي الدولة التي استضافت كأس العالم لكرة القدم عام 2022‏؟', '["الولايات المتحدة الأمريكية","اليابان","سويسرا","قطر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'كم كان معدل ضربات السير دونالد برادمان في مباريات الاختبار في الكريكت؟', '["⁦99.94⁩","100","⁦69.51⁩","⁦44.78⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'أي منتخب هزمه المنتخب الإنجليزي في دور نصف النهائي قبل أن يفوز بنهائي كأس العالم عام 1966‏؟', '["ألمانيا الغربية","البرتغال","الاتحاد السوفيتي","البرازيل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'إدسون أرانتيس دو ناسيمنتو هو الاسم الكامل لأي لاعب كرة قدم أسطوري؟', '["روماريو","زيكو","بيليه","رونالدينيو"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'من أي جزيرة برتغالية ينحدر لاعب كرة القدم كريستيانو رونالدو؟', '["تيرسيرا","سانتا ماريا","بورتو سانتو","ماديرا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'ما هو فريق كرة السلة الذي خاض أكبر عدد من نهائيات دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩)‏؟', '["لوس أنجلوس ليكرز","بوسطن سلتكس","فيلادلفيا سفنتي سيكسرز","غولدن ستيت واريورز"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_151, 'أي شركة مصنعة للسيارات فازت بسباق لومان 24 ساعة لعام 2016‏؟', '["تويوتا","بورشه","أودي","فيراري"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_152 uuid;
BEGIN
  SELECT id INTO v_sync_id_152 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 6' LIMIT 1;
  IF v_sync_id_152 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 6', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_152;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'ما هو اللقب الشهير الذي عُرف به المصارع المحترف البريطاني شيرلي كرابتري؟', '["بيغ دادي","جاينت هاستاكس","كيندو ناغاساكي","ماسامبولا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'أي فريق توج بلقب بطولة دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩) لموسم 2015-2016‏؟', '["غولدن ستيت واريورز","كليفلاند كافالييرز","تورونتو رابتورز","أوكلاهوما سيتي ثاندر"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'ملعب التنس في الأولمبياد هو عبارة عن شاشة خضراء عملاقة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'ما هو الاسم الكامل للاعب كرة القدم ''كريستيانو رونالدو''؟', '["كريستيانو رونالدو لوس سانتوس دييغو","كريستيانو أرماندو دييغو رونالدو","كريستيانو لويس أرماندو رونالدو","كريستيانو رونالدو دوس سانتوس أفيرو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'خلال بطولة ويمبلدون، يمكن للمتفرجين في الملعب شراء كرات التنس التي تم استخدامها في المباريات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'من هو مدرب كرة القدم الذي فاز بأكبر عدد من الألقاب خلال فترة تدريبه لنادي مانشستر يونايتد الإنجليزي؟', '["ديفيد مويس","السير أليكس فيرجسون","لويس فان غال","جوزيه ميرنيو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'في البولينج، ما هو المصطلح المستخدم للإشارة إلى تسجيل ثلاث ضربات ساحقة متتالية؟', '["فلامينغو","بيردي","تيركي","إيغل"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'في أي رياضة تنافس اللاعبة فاني شميلار لصالح ألمانيا؟', '["السباحة","قفز الحواجز","الجمباز","التزلج"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'ما هو المنتخب الوطني الذي فاز بنسخة عام 2016 من بطولة أمم أوروبا (اليورو)‏؟', '["البرتغال","فرنسا","ألمانيا","إنجلترا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'أي مدينة تتميز جميع فرقها الرياضية المحترفة بقمصان ذات نفس الألوان؟', '["نيويورك","بيتسبرغ","سياتل","تامبا باي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'مع أي فريق سجل مايكل شوماخر ظهوره الأول في الفورمولا 1 في سباق جائزة بلجيكا الكبرى عام 1991‏؟', '["بينيتون","فيراري","جوردان","مرسيدس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'من الذي يُطلق عليه غالباً لقب "المايسترو" في ملاعب التنس للرجال؟', '["بيل تيلدن","بوريس بيكر","بيت سامبراس","روجر فيدرر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'أي دولة استضافت بطولة كأس العالم لكرة القدم في عام 2006‏؟', '["ألمانيا","المملكة المتحدة","البرازيل","جنوب أفريقيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'سجل شاكيل أونيل رمية ثلاثية واحدة فقط طوال مسيرته الرياضية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'في أي عام فازت سيارة مازدا ⁦787B⁩ بسباق لومان 24 ساعة؟', '["1990","2000","1991","1987"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'أي منتخب فاز ببطولة كأس العالم لكرة القدم لعام 2014 في البرازيل؟', '["الأرجنتين","البرازيل","هولندا","ألمانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'في لعبة السنوكر، ما هو لون الكرة التي تساوي 3 نقاط؟', '["الأخضر","الأصفر","البني","الأزرق"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_152, 'ما هو المنتخب الذي هزمه منتخب إنجلترا ليفوز بنهائي كأس العالم عام 1966‏؟', '["الاتحاد السوفيتي","ألمانيا الغربية","البرتغال","البرازيل"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_153 uuid;
BEGIN
  SELECT id INTO v_sync_id_153 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 7' LIMIT 1;
  IF v_sync_id_153 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 7', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_153;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'كم عدد اللاعبين في فريق كرة القدم الواحد داخل الملعب؟', '["11","10","9","8"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من الذي فاز بلقب الدوري الإنجليزي الممتاز في موسم 2015-2016 بعد مسيرة تاريخية أشبه بالمعجزة؟', '["توتنهام هوتسبير","ليستر سيتي","واتفورد","ستوك سيتي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من أحرز هدف الفوز القاتل في الوقت بدل الضائع في نهائي دوري أبطال أوروبا عام 1999 بين مانشستر يونايتد وبايرن ميونخ؟', '["دوايت يورك","أندي كول","أولي غونار سولشاير","ديفيد بيكهام"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'في دوري الرغبي، يُعاقب على ركلة "40-20" بركلة حرة للفريق المنافس.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'لأي حدث كروي كبير في عام 1996 أُنتجت أغنية "الأسود الثلاثة" (⁦Three Lions⁩) لفرقة "لايتنينج سيدز"؟', '["بطولة أمم أوروبا","كأس العالم","دوري أبطال أوروبا","كأس القارات"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'أي من أرقام القمصان التالية لم يرتدها شاكيل أونيل قط؟', '["36","35","33","32"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من كان أول لاعب كرة قدم يسجل 200 هدف في الدوري الإنجليزي الممتاز؟', '["واين روني","روبي فاولر","آلان شيرر","تييري هنري"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'أي من أندية كرة القدم الإنجليزية التالية يقع مقره في مدينة ليفربول؟', '["وست هام يونايتد","كريستال بالاس","أرسنال","إيفرتون"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو اللاعب الذي قام بـ "ركلة كونغ فو" ضد مشجع لفريق كريستال بالاس في يناير 1995‏؟', '["إيريك كانتونا","ديفيد سيمان","أشلي كول","مارك هيوز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'كم عدد مناطق تسجيل النقاط في لوحة السهام (الدارتس) التقليدية؟', '["62","82","42","102"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'كم عدد المباريات التي خاضها نادي أرسنال دون هزيمة خلال موسم 2003-2004 في الدوري الإنجليزي الممتاز؟', '["51","49","38","22"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو لاعب كرة القدم الإيطالي الذي أشار للحارس نوير إلى الزاوية التي سيسدد فيها ثم أضاع الركلة خارج المرمى، أثناء مباراة إيطاليا وألمانيا في بطولة أمم أوروبا 2016‏؟', '["إنسيني","بارزالي","جياكيريني","بيليه"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو اللاعب الذي سجل أكبر عدد من الأهداف في تاريخ الدوري الإنجليزي الممتاز (⁦EPL⁩)‏؟', '["آلان شيرر","واين روني","ليونيل ميسي","ديدييه دروغبا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'أي دولة استضافت بطولة كأس العالم لكرة القدم لعام 2018‏؟', '["ألمانيا","روسيا","الولايات المتحدة","المملكة العربية السعودية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو المصارع المحترف الذي سقط من دعامات السقف ليلقى حتفه أثناء عرض مباشر مدفوع الثمن (⁦Pay-Per-View⁩) في عام 1999‏؟', '["كريس بنوا","ليكس لوجر","أوين هارت","آل سنو"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو اللاعب الذي شارك في أكبر عدد من المباريات مع منتخب البرازيل لكرة القدم؟', '["رونالدو","كاكا","روبيرتو كارلوس","كافو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'من هو الملاكم الذي تم إيقافه بسبب قضم جزء من أذن إيفاندر هوليفيلد في عام 1997‏؟', '["مايك تايسون","روي جونز جونيور","إيفاندر هوليفيلد","لينوكس لويس"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_153, 'ما هي المدينة التي كان يمثلها فريق ليكرز (⁦Lakers⁩) قبل انتقاله إلى لوس أنجلوس؟', '["فيلادلفيا","منيابوليس","شيكاغو","سان فرانسيسكو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_154 uuid;
BEGIN
  SELECT id INTO v_sync_id_154 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 8' LIMIT 1;
  IF v_sync_id_154 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 8', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_154;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي من الرماة (⁦pitchers⁩) التاليين فاز بجائزة أفضل لاعب مبتدئ (⁦Rookie of the Year⁩) في الدوري الوطني لموسم 2013‏؟', '["خوسيه فرنانديز","جاكوب ديغروم","شيلبي ميلر","مات هارفي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'في أي تاريخ أقيم الحفل الختامي لدورة الألعاب الأولمبية الصيفية في ريو 2016‏؟', '["23 أغسطس","21 أغسطس","19 أغسطس","17 أغسطس"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي دولة استضافت دورة الألعاب الأولمبية الصيفية لعام 2020‏؟', '["الصين","أستراليا","اليابان","ألمانيا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من الذي فاز ببطولة العالم لسباقات الفورمولا 1 للسائقين لعام 2017‏؟', '["سباستيان فيتل","نيكو روزبرغ","ماكس فيرستابن","لويس هاملتون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي منتخب فاز ببطولة كوبا أمريكا المئوية عام 2016‏؟', '["تشيلي","الأرجنتين","البرازيل","كولومبيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من أي دولة نشأت رياضة "الكابادي"، وهي رياضة تلاحمية تعتمد على الدفاع والالتحام؟', '["أستراليا","الهند","تركيا","كمبوديا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي من الرياضات التالية ليست جزءاً من السباق الثلاثي (الترياتلون)‏؟', '["ركوب الدراجات","السباحة","ركوب الخيل","الجري"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'ما هي أفضل نتيجة (معدل ضربات) حققها تايجر وودز في مسيرته الاحترافية في رياضة الغولف؟', '["65","63","67","61"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من الذي فاز بسباق جائزة سان مارينو الكبرى عام 1994، وهو السباق الذي لقي فيه آيرتون سينا حتفه؟', '["مايكل شوماخر","نيكولا لاريني","جيرهارد بيرجر","ميكا هاكينين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'في كرة القدم الكندية، كم عدد النقاط التي يمنحها تسجيل الـ "روج" (⁦rouge⁩)‏؟', '["2","1","3","4"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي فريق كرة قدم إنجليزي يُلقب بـ "النمور" (⁦The Tigers⁩)‏؟', '["كارديف سيتي","بريستول سيتي","هال سيتي","مانشستر سيتي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من هو لاعب كرة السلة (⁦NBA⁩) الذي خاض أكبر عدد من المباريات طوال مسيرته الرياضية؟', '["كريم عبد الجبار","كيفن غارنيت","كوبي براينت","روبرت باريش"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من كان الهداف التاريخي للمنتخب الإنجليزي لكرة القدم؟', '["واين روني","ديفيد بيكهام","ستيفن جيرارد","مايكل أوين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'سباقات الفورمولا إي (⁦Formula E⁩) هي سلسلة سباقات سيارات تستخدم سيارات سباق كهربائية هجينة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'من فاز بلقب "دوري أبطال أوروبا" في عام 1999‏؟', '["برشلونة","بايرن ميونخ","مانشستر يونايتد","ليفربول"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'يقيس جهاز الـ "ستيمبميتر" (⁦stimpmeter⁩) سرعة الكرة على أي سطح؟', '["ملعب كرة القدم","المنطقة الخارجية لملعب الكريكت","طاولة البينبول","المنطقة الخضراء لملعب الغولف"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'كانت رياضة التنس تُعرف في السابق باسم راكيت بول (كرة المضرب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_154, 'أي منتخب فاز ببطولة كوبا أمريكا لعام 2015‏؟', '["الأرجنتين","تشيلي","البرازيل","باراغواي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_155 uuid;
BEGIN
  SELECT id INTO v_sync_id_155 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 1' LIMIT 1;
  IF v_sync_id_155 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 1', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_155;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ما هي شركة إطارات السيارات الشهيرة بإنتاج سلسلة "⁦P Zero⁩"؟', '["بيريللي","جودير","بريدجستون","ميشلان"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ماذا تمثل الحلقات الأربع في شعار سيارات أودي؟', '["الولايات التي تحقق فيها أودي أعلى مبيعات","شركات تصنيع سيارات كانت مستقلة سابقاً","المدن الرئيسية الحيوية لشركة أودي","الدول التي تحقق فيها أودي أعلى مبيعات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'في عام 1991، أصبحت مازدا أول شركة سيارات يابانية تفوز بسباق لومان (⁦Le Mans⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ما هي زاوية ميل الأسطوانات في محرك ⁦VR6⁩ الأسطوري من فولكس واجن؟', '["30 درجة","45 درجة","90 درجة","15 درجة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ما هي شركة السيارات الخارقة التي تنتمي إلى السويد؟', '["كوينيجسيج","بوغاتي","لامبورغيني","ماكلارين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'أي دولة ترمز إليها لوحات تسجيل المركبات الدولية بالحرف ''⁦A⁩''؟', '["أفغانستان","النمسا","أستراليا","أرمينيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'كم تبلغ سعة محرك ⁦LS7⁩ بالبوصة المكعبة؟', '["346","364","427","376"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'أكمل التناظر التالي: أودي بالنسبة لفولكس واجن مثل إنفينيتي بالنسبة لـ...؟', '["هوندا","هيونداي","سوبارو","نيسان"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'شركة النقل "أريفا" (⁦Arriva⁩) مملوكة لشركة السكك الحديدية الألمانية "دويتشه بان".', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'أي من ماركات السيارات التالية نشأت في السويد؟', '["مرسيدس","فولفو","أكورا","لينكون"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'تعتبر سيارة "بنز باتنت موتورواجن" لعام 1886 أول سيارة حقيقية صُنعت في التاريخ.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'أي من السيارات التالية ليست من إنتاج شركة فورد؟', '["فيوجن","موديل إيه (⁦Model A⁩)","إف-150 (⁦F-150⁩)","كامري"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'حطم قطار الطلقة الياباني "شينكانسن" الرقم القياسي لسرعة أسرع قطار كهربائي المسجل باسم قطار ⁦TGV⁩ الفرنسي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'تأسست شركة هوندا للمحركات في اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'اخترع الكندي جوزيف-أرماند بومباردييه عربة الجليد الآلية (السنوموبيل) في عام 1937.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ما هي شركة السيارات التي كان إنزو فيراري يتسابق لصالحها قبل تأسيس شركته الخاصة؟', '["أوتو يونيون","مرسيدس بنز","بنتلي","ألفا روميو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'تُصنع غالبية سيارات سوبارو في الصين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_155, 'ما هو المحرك المستخدم في سيارة لكزس ⁦SC400⁩‏؟', '["⁦2JZ-GTE⁩","⁦1UZ-FE⁩","⁦7M-GTE⁩","⁦5M-GE⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_156 uuid;
BEGIN
  SELECT id INTO v_sync_id_156 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 2' LIMIT 1;
  IF v_sync_id_156 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 2', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_156;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'في أي عام ظهرت الشاحنة الصغيرة "شيفروليه لوف" (⁦LUV⁩) لأول مرة؟', '["1972","1982","1975","1973"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'طوال تاريخها، صُنعت سيارة شيفروليه كورفيت حصرياً بمحركات ⁦V8⁩ فقط.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'أي من موديلات السيارات التالية تنتجها شركة لامبورغيني؟', '["هوايرا","918","أفنتادور","شيرون"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'إلى أي عائلة قطارات تنتمي الفئات البريطانية ⁦Class 700⁩ و ⁦Class 707⁩ و ⁦Class 717⁩‏؟', '["نتوركر (⁦Networker⁩)","أفنترا (⁦Aventra⁩)","إلكتروستار (⁦Electrostar⁩)","ديسيرو سيتي (⁦Desiro City⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'كم تبلغ سعة محرك ⁦LS3⁩ بالبوصة المكعبة؟', '["376","346","364","427"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'فرق الطول بين طائرتي بوينغ ⁦777-300ER⁩ وإيرباص ⁦A350-1000⁩ أقرب إلى:', '["1 متر","⁦0.1⁩ متر","10 أمتار","100 متر"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'أي من شركات السيارات التالية سُميت حرب باسمها؟', '["هوندا","فورد","تويوتا","فولكس واجن"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'كم تبلغ سعة محرك ⁦LS2⁩ بالبوصة المكعبة؟', '["346","376","402","364"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'متى تأسست شركة كاديلاك للسيارات؟', '["1902","1964","1898","1985"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'أي من هذه الشركات لا تصنع الدراجات النارية؟', '["هوندا","تويوتا","كاواساكي","ياماها"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'أي من الدول التالية حظرت رسمياً استخدام كاميرات لوحة القيادة (داش كام) في السيارات للمدنيين؟', '["الولايات المتحدة","التشيك","النمسا","كوريا الجنوبية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'أي جزء في محرك السيارة يستخدم فصوصاً لفتح وإغلاق صمامات السحب والعادم للسماح بدخول خليط الهواء والوقود؟', '["المكبس (بستون)","عمود القيادة","عمود المرفق (كرنك)","عمود الحدبات"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'كانت سيارة ⁦GM EV1⁩ من جنرال موتورز أول سيارة كهربائية إنتاجية مسموح بقيادتها قانونياً في الطرقات العامة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'في عام 2014، تم استدعاء أكثر من 6 ملايين سيارة من جنرال موتورز بسبب أي عيب مصنعي خطير؟', '["خلل في دواسة الوقود","خلل في مفتاح التشغيل","تلف خراطيم الوقود","خلل في مكابح السيارة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'يوجد طراز لسيارات رولز رويس يُطلق عليه اسم "سبيكتر" (⁦Spectre⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'كم عجلة للدراجة أحادية العجلة؟', '["4","3","6","1"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_156, 'في أي دولة صُنعت سيارة ترابانت 601 (⁦Trabant 601⁩)‏؟', '["ألمانيا الشرقية","الاتحاد السوفيتي","المجر","فرنسا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_157 uuid;
BEGIN
  SELECT id INTO v_sync_id_157 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 3' LIMIT 1;
  IF v_sync_id_157 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 3', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_157;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي شركة سيارات صممت طراز "أفنتادور"؟', '["لامبورغيني","فيراري","باغاني","بوغاتي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'على أي نوع من أنواع الطاقة تعمل سيارات تسلا؟', '["البنزين","الكهرباء","الديزل","الطاقة النووية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'كم تبلغ القوة الحصانية التي تنتجها قاطرة ⁦SD40-2⁩‏؟', '["3,200","2,578","3,000","2,190"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي من سيارات أودي التالية لا تستخدم نظام الدفع الرباعي القائم على هالدكس (⁦Haldex⁩)‏؟', '["أودي ⁦TT⁩","أودي ⁦S3⁩","أودي ⁦A3⁩","أودي ⁦A8⁩"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'ما هو الحيوان المرسوم على شعار شركة "أبارث" (⁦Abarth⁩)، القسم الرياضي لشركة فيات؟', '["العقرب","الأفعى","الثور","الحصان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'ما اسم أشهر سيارة كهربائية تنتجها شركة نيسان؟', '["تري (⁦Tree⁩)","ليف (⁦Leaf⁩)","دير (⁦Deer⁩)","روتس (⁦Roots⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي من الشركات التالية ليست تابعة لمجموعة فولكس واجن؟', '["بورش","بوغاتي","أوبل","بنتلي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'في عام 1993، أجرت شركة تصنيع السيارات السويدية "ساب" (⁦Saab⁩) تجربة لاستبدال عجلة القيادة بعصا تحكم في سيارة ⁦Saab 9000⁩.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي مدينة إيطالية تُعد موطناً لشركة تصنيع السيارات "فيات"؟', '["تورينو","مارانيلو","مودينا","روما"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'ما هي أسرع سيارة إنتاجية مسموح قانونياً بقيادتها على الطرقات في العالم؟', '["هينيسي فينوم جي تي (⁦Hennessey Venom GT⁩)","كوينيجسيج أجيرا آر إس (⁦Koenigsegg Agera RS⁩)","بوغاتي فيرون سوبر سبورت (⁦Bugatti Veyron Super Sport⁩)","باغاني هوايرا بي سي (⁦Pagani Huayra BC⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي من الموديلات التالية ليس سيارة من إنتاج شركة بروتون (⁦Proton⁩) الماليزية؟', '["ساجا (⁦Saga⁩)","بيردانا (⁦Perdana⁩)","كيليسا (⁦Kelisa⁩)","إنسبيرّا (⁦Inspira⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'ما اسم أول سيارة تعمل بالدفع الأمامي أنتجتها شركة داتسون (نيسان حالياً)‏؟', '["ساني (⁦Sunny⁩)","بلوبيرد (⁦Bluebird⁩)","سكايلاين (⁦Skyline⁩)","تشيري (⁦Cherry⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي من أكواد الهيكل (الشاسيه) التالية تُستخدم لسيارات بي إم دبليو الفئة الثالثة؟', '["⁦E46⁩","⁦E39⁩","⁦E85⁩","⁦F10⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'ما هي شركة إطارات السيارات الشهيرة بإنتاج إطارات "إيغل" (⁦Eagle⁩)، والمزود الرسمي لإطارات سباقات ناسكار؟', '["بيريللي","جودير","بريدجستون","ميشلان"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'أي من القطارات البريطانية التالية لا تتجاوز سرعته 125 ميلاً في الساعة؟', '["كلاس 43 (⁦Class 43⁩)","جافلين (⁦Javelin⁩)","سبرينتر (⁦Sprinter⁩)","بندولينو (⁦Pendolino⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'تعتبر ⁦BMW M GmbH⁩ شركة تابعة لـ ⁦BMW AG⁩ وتركز على إنتاج السيارات ذات الأداء الرياضي العالي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_157, 'متى تأسست شركة تسلا؟', '["2003","2008","2005","2007"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_158 uuid;
BEGIN
  SELECT id INTO v_sync_id_158 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 4' LIMIT 1;
  IF v_sync_id_158 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 4', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_158;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من موديلات السيارات التالية تم تسويقه وتغيير علامته التجارية (⁦Rebadged⁩) تحت أكبر عدد من الأسماء التجارية الأخرى؟', '["إيسوزو تروبر (⁦Isuzu Trooper⁩)","هولدن مونارو (⁦Holden Monaro⁩)","سوزوكي سويفت (⁦Suzuki Swift⁩)","شيفروليه كامارو (⁦Chevy Camaro⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما اللقب الذي أُطلق على طائرة رحلة طيران كندا رقم 143 بعد نفاد وقودها وهبوطها الشراعي بسلام في عام 1983‏؟', '["غيملي مايكرولايت (⁦Gimli Microlight⁩)","طائرة غيملي الشراعية (⁦Gimli Glider⁩)","غيملي تشيسر (⁦Gimli Chaser⁩)","غيملي سوبيرب (⁦Gimli Superb⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من علامات السيارات التالية لا تنتمي إلى شركة جنرال موتورز؟', '["بويك","كاديلاك","فورد","شيفروليه"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'لم تصنع فيراري مطلقاً محرك ⁦V10⁩ لأي من سياراتها المخصصة للطرقات.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما هي الشركة اليابانية التي تعد أكبر مصنع للدراجات النارية في العالم؟', '["هوندا","ياماها","سوزوكي","كاواساكي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي مما يلي ليست شركة تصنيع سيارات روسية؟', '["سيلانت (⁦Silant⁩)","بي واي دي (⁦BYD⁩)","دراغون (⁦Dragon⁩)","جاز (⁦GAZ⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من سيارات رالي الاتحاد الدولي للسيارات (⁦FIA⁩) التالية تم اعتمادها للاستخدام في فئة المجموعة ب (⁦Group B⁩) أولاً؟', '["أودي كواترو ⁦A2⁩","بي إم دبليو ⁦M1⁩","بورش 911 توربو","لانشيا رالي 037"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما هي الشركة المصنعة للسيارة المستخدمة في فيلم العودة إلى المستقبل (⁦Back to the Future⁩)‏؟', '["فورد","تويوتا","ديهاتسو","ديلوريان (⁦DeLorean⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من أنظمة تجنب التصادم التالية يساعد الطائرات على تجنب الاصطدام ببعضها البعض؟', '["⁦TCAS⁩","⁦GPWS⁩","⁦OCAS⁩","⁦TAWS⁩"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما هو الحيوان الذي تتخذه شركة صناعة السيارات الإيطالية لامبورغيني شعاراً لها؟', '["الخفاش","الثور","الحصان","الأفعى"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من المركبات التالية تميزت بوجود سقف زجاجي بالكامل في طرازها الأساسي؟', '["شيفروليه فولت","مرسيدس-بنز الفئة ⁦A⁩","رينو أفانتايم","هوندا أوديسي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما هي شركة تصنيع السيارات التي تنازلت عن براءة اختراع حزام الأمان بهدف إنقاذ الأرواح؟', '["فيراري","فورد","رينو","فولفو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من سيارات فورد التالية سميت على اسم طائرة مقاتلة من الحرب العالمية الثانية؟', '["موستانج","إكسبلورر","رينجر","جالاكسي"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي مما يلي ليس من وظائف زيت المحرك في محركات السيارات؟', '["التزييت","الاحتراق","التبريد","تقليل التآكل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'ما هو طراز السيارة الرياضية التي أهدتها الحكومة الفرنسية ليوري غاغارين في عام 1965‏؟', '["بورش 911","ألبين ⁦A110⁩","ماترا دجيت","إيه سي كوبرا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'أي من هذه السيارات لا تعتبر واحدة من السيارات الخارقة الخمس الحديثة من فيراري؟', '["إنزو فيراري","إف 40","288 جي تي أو","تستاروسا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_158, 'كانت شركة بوغاتي مصنعاً إيطالياً للسيارات.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
  END IF;
END $$;

