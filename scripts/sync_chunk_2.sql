DO $$
DECLARE
  v_sync_id_19 uuid;
BEGIN
  SELECT id INTO v_sync_id_19 FROM quizzes WHERE title = 'تقنية للمحترفين' LIMIT 1;
  IF v_sync_id_19 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تقنية للمحترفين', 'تكنولوجيا', '', 'challenge', 'ar', true)
    RETURNING id INTO v_sync_id_19;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما بنية البيانات التي تعمل بمبدأ الداخل أخيرًا هو الخارج أولًا؟', '["الطابور","المكدس","القائمة المرتبطة","الشجرة"]'::jsonb, 1, 25, 0, 'multi', 'الطابور يعمل بالعكس: الداخل أولًا يخرج أولًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما اللغة المستخدمة للاستعلام عن قواعد البيانات العلائقية؟', '["SQL","XML","PHP","Bash"]'::jsonb, 0, 25, 1, 'multi', 'تشمل أوامر الاختيار والإدراج والتحديث.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما المنفذ الافتراضي لخدمة HTTPS؟', '["21","80","443","8080"]'::jsonb, 2, 25, 2, 'multi', 'المنفذ 80 مخصص لـ HTTP غير المشفّر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما اسم النموذج المرجعي المكوّن من سبع طبقات لوصف اتصالات الشبكات؟', '["نموذج OSI","نموذج TCP","نموذج MVC","نموذج REST"]'::jsonb, 0, 25, 3, 'multi', 'تبدأ بالطبقة الفيزيائية وتنتهي بطبقة التطبيقات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما أسلوب التحكم في الإصدارات الذي يعتمد عليه معظم المطورين اليوم؟', '["SVN","Git","CVS","Mercurial"]'::jsonb, 1, 25, 4, 'multi', 'طوّره لينوس تورفالدس عام 2005.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما التعقيد الزمني لخوارزمية البحث الثنائي في مصفوفة مرتبة؟', '["ثابت","لوغاريتمي","خطي","تربيعي"]'::jsonb, 1, 25, 5, 'multi', 'لأنها تنصّف مجال البحث في كل خطوة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما الغرض من خدمة DNS؟', '["تشفير البيانات","ترجمة أسماء النطاقات إلى عناوين رقمية","توزيع الحمل","ضغط الملفات"]'::jsonb, 1, 25, 6, 'multi', 'تعمل كدليل هاتف للإنترنت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'أي مفهوم يصف حزم التطبيق مع اعتمادياته في بيئة معزولة خفيفة؟', '["الحاويات","الأجهزة الافتراضية الكاملة","التقسيم القرصي","التخزين الكتلي"]'::jsonb, 0, 25, 7, 'multi', 'أشهر أدواتها دوكر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما الفرق الجوهري الذي يميّز الذاكرة من نوع SSD عن القرص الصلب التقليدي؟', '["يعتمد على أقراص دوّارة","لا يحتوي أجزاء متحركة","يخزّن على أشرطة مغناطيسية","يحتاج تبريدًا سائلًا"]'::jsonb, 1, 25, 8, 'multi', 'غياب الأجزاء المتحركة يرفع السرعة والمتانة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما الخوارزمية التي تُستخدم في تشفير المفتاح العام وسُميت بأحرف مطوّريها الثلاثة؟', '["AES","RSA","SHA","DES"]'::jsonb, 1, 25, 9, 'multi', 'تعتمد صعوبة تحليل الأعداد الكبيرة إلى عواملها الأولية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما المصطلح الذي يصف تقنية دفتر الحسابات الموزّع الذي تقوم عليه العملات الرقمية؟', '["سلسلة الكتل","قاعدة بيانات علائقية","الحوسبة الطرفية","التخزين السحابي"]'::jsonb, 0, 25, 10, 'multi', 'كل كتلة ترتبط بسابقتها ببصمة تشفيرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_19, 'ما رمز حالة HTTP الذي يعني أن المورد غير موجود؟', '["301","403","404","500"]'::jsonb, 2, 25, 11, 'multi', 'الرمز 500 يشير إلى خطأ في الخادم.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_20 uuid;
BEGIN
  SELECT id INTO v_sync_id_20 FROM quizzes WHERE title = 'سيرة النبي محمد (ص)' LIMIT 1;
  IF v_sync_id_20 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة النبي محمد (ص)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_20;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما التاريخ المشهور عند الإمامية لولادة النبي محمد (ص)؟', '["12 ربيع الأول","15 شعبان","27 رجب","17 ربيع الأول"]'::jsonb, 3, 20, 0, 'multi', 'ينقل المجلسي اتفاق علماء الإمامية على السابع عشر من ربيع الأول.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'في أي مدينة وُلد النبي محمد (ص)؟', '["المدينة","الطائف","القدس","مكة"]'::jsonb, 3, 15, 1, 'multi', 'تورد روايات مولده أنه وُلد في مكة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من هو والد النبي محمد (ص)؟', '["أبو طالب","عبد الله بن عبد المطلب","حمزة","عبد المطلب"]'::jsonb, 1, 15, 2, 'multi', 'نسبه هو محمد بن عبد الله بن عبد المطلب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من كفل النبي (ص) بعد وفاة جده عبد المطلب؟', '["العباس","حمزة","أبو طالب","أبو لهب"]'::jsonb, 2, 15, 3, 'multi', 'انتقلت كفالته بعد وفاة عبد المطلب إلى عمه أبي طالب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'كم كان عمر النبي (ص) حين تزوج السيدة خديجة (ع)؟', '["عشرون سنة","خمس وثلاثون سنة","ثلاثون سنة","خمس وعشرون سنة"]'::jsonb, 3, 20, 4, 'multi', 'تزوج النبي خديجة وهو ابن خمس وعشرين سنة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من ألقى خطبة زواج النبي (ص) من السيدة خديجة (ع)؟', '["عبد المطلب","أبو طالب","العباس","حمزة"]'::jsonb, 1, 20, 5, 'multi', 'حفظت الرواية خطبة أبي طالب في طلب خديجة لابن أخيه.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'كم كان عمر النبي (ص) عند بعثته بالرسالة؟', '["ثلاثون سنة","خمس وثلاثون سنة","خمس وأربعون سنة","أربعون سنة"]'::jsonb, 3, 15, 6, 'multi', 'كانت بعثته بعد مضي أربعين سنة من عمره الشريف.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما التاريخ المشهور عند الإمامية لبعثة النبي (ص)؟', '["17 ربيع الأول","27 رجب","15 شعبان","13 رجب"]'::jsonb, 1, 20, 7, 'multi', 'المشهور الإمامي أن المبعث وقع في السابع والعشرين من رجب.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من كانت أول امرأة آمنت برسالة النبي (ص)؟', '["خديجة بنت خويلد","أم سلمة","فاطمة بنت أسد","أسماء بنت عميس"]'::jsonb, 0, 15, 8, 'multi', 'كانت خديجة أول من صدّق النبي وآمن به من النساء.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من كان أول الرجال إيمانًا بالنبي (ص)؟', '["حمزة بن عبد المطلب","علي بن أبي طالب","زيد بن حارثة","جعفر بن أبي طالب"]'::jsonb, 1, 15, 9, 'multi', 'علي أول من آمن من الرجال، بعد خديجة.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'أين جمع النبي (ص) بني عبد المطلب عند إنذار عشيرته الأقربين؟', '["دار الأرقم","دار أبي طالب","المسجد الحرام","جبل الصفا"]'::jsonb, 1, 25, 10, 'multi', 'جمع بني عبد المطلب في دار أبي طالب في واقعة حديث الدار.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما المقاطعة التي فرضتها قريش على بني هاشم؟', '["منع البيع والزواج والمخالطة","منع السفر إلى الشام","منع الحج وحده","منع دخول المسجد فقط"]'::jsonb, 0, 25, 11, 'multi', 'تضمنت الصحيفة منع البيع والزواج والمخالطة حتى يسلموا النبي.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من أنفق ماله في نصرة النبي (ص) زمن حصار الشعب؟', '["العباس","حمزة","السيدة خديجة","أبو سلمة"]'::jsonb, 2, 20, 12, 'multi', 'أنفقت خديجة من مالها في شدة الحصار على المحاصرين.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من نام في فراش النبي (ص) ليلة خروجه للهجرة؟', '["حمزة","جعفر","علي بن أبي طالب","سلمان"]'::jsonb, 2, 15, 13, 'multi', 'بات علي في فراش النبي تمويهًا على المتآمرين.', 'الهجرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما أول عمل عمراني قام به النبي (ص) عند وصوله إلى قباء؟', '["بناء مسجد قباء","حفر خندق","بناء دار الإمارة","بناء السوق"]'::jsonb, 0, 20, 14, 'multi', 'أقام النبي في قباء وبنى مسجدها قبل دخوله المدينة.', 'الهجرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'بين أي جماعتين عقد النبي (ص) المؤاخاة بعد الهجرة؟', '["قريش وثقيف","الأوس والخزرج فقط","أهل مكة واليهود","المهاجرين والأنصار"]'::jsonb, 3, 20, 15, 'multi', 'آخى النبي بين المهاجرين والأنصار، واتخذ عليًا أخًا له.', 'بناء المجتمع');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما أول معركة كبرى انتصر فيها المسلمون بقيادة النبي (ص)؟', '["أحد","الخندق","بدر","خيبر"]'::jsonb, 2, 15, 16, 'multi', 'كانت بدر أول مواجهة كبرى وانتهت بنصر المسلمين.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ما الوسيلة الدفاعية التي استُخدمت حول المدينة في غزوة الأحزاب؟', '["حفر الخندق","أبراج خشبية","متاريس بحرية","سور حجري"]'::jsonb, 0, 15, 17, 'multi', 'حُفر الخندق في الجهة المكشوفة من المدينة فعاق الأحزاب.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'لمن أعطى النبي (ص) الراية يوم خيبر بعد قوله إنه يحب الله ورسوله؟', '["علي بن أبي طالب","سعد بن أبي وقاص","خالد بن الوليد","الزبير بن العوام"]'::jsonb, 0, 20, 18, 'multi', 'دعا النبي عليًا ودفع إليه الراية، وكان الفتح على يديه.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من الذين خرج بهم النبي (ص) لمباهلة نصارى نجران؟', '["العباس وحمزة وجعفر وعقيل","علي وفاطمة والحسن والحسين","زوجاته وبناته جميعًا","أبو ذر وسلمان والمقداد وعمار"]'::jsonb, 1, 25, 19, 'multi', 'خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين.', 'المواقف المفصلية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'ماذا أعلن النبي (ص) في غدير خم بشأن الإمام علي (ع)؟', '["تعيينه قائدًا على اليمن فقط","تكليفه بجمع الصدقات","أنه مولى من كان النبي مولاه","إرساله إلى خيبر"]'::jsonb, 2, 25, 20, 'multi', 'أعلن النبي في غدير خم: من كنت مولاه فعلي مولاه.', 'المواقف المفصلية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_20, 'من تولى غسل النبي (ص) وتجهيزه بعد وفاته؟', '["علي بن أبي طالب","أبو ذر","سلمان","العباس وحده"]'::jsonb, 0, 20, 21, 'multi', 'أوصى النبي أن يتولى علي غسله، فغسله وكفنه.', 'الرحيل');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_21 uuid;
BEGIN
  SELECT id INTO v_sync_id_21 FROM quizzes WHERE title = 'سيرة الإمام علي بن أبي طالب (ع)' LIMIT 1;
  IF v_sync_id_21 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي بن أبي طالب (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_21;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'أين كانت ولادة الإمام علي (ع)؟', '["في البيت الحرام بمكة","في دار أبي طالب بمكة","في المسجد النبوي بالمدينة","في شعب أبي طالب"]'::jsonb, 0, 20, 0, 'multi', 'يذكر الشيخ المفيد أن الإمام عليًا (ع) وُلد في البيت الحرام بمكة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'في أي يوم من رجب وُلد الإمام علي (ع) بحسب الإرشاد؟', '["العاشر","الثالث عشر","الخامس عشر","السابع والعشرون"]'::jsonb, 1, 20, 1, 'multi', 'حدد الإرشاد ولادته يوم الجمعة، الثالث عشر من شهر رجب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'من هي والدة الإمام علي (ع)؟', '["أم البنين","فاطمة الزهراء","فاطمة بنت أسد","صفية بنت عبد المطلب"]'::jsonb, 2, 20, 2, 'multi', 'أمه فاطمة بنت أسد بن هاشم بن عبد مناف.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'ما كنية الإمام علي (ع) التي يذكرها الشيخ المفيد؟', '["أبو الحسن","أبو محمد","أبو جعفر","أبو القاسم"]'::jsonb, 0, 20, 3, 'multi', 'نص الشيخ المفيد على أن كنيته أبو الحسن.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كيف وصف الإرشاد صلة فاطمة بنت أسد بالنبي (ص)؟', '["كانت له بمنزلة الأم","كانت أخته من الرضاعة","كانت عمته","كانت مرضعته الوحيدة"]'::jsonb, 0, 25, 4, 'multi', 'ذكر الإرشاد أنها كانت للنبي (ص) بمنزلة الأم، وقد نشأ في رعايتها.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'ما منزلة الإمام علي (ع) في السبق إلى الإسلام بحسب الإرشاد؟', '["أول مؤذن في الإسلام","أول مهاجر إلى الحبشة","أول خطيب في المدينة","أول ذكر دعاه النبي فأجاب"]'::jsonb, 3, 25, 5, 'multi', 'يقرر الإرشاد أنه أول ذكر دعاه النبي (ص) إلى الإسلام فأجابه.', 'بدايات الإسلام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم سنة صحب الإمام علي (ع) النبي بعد البعثة في مكة؟', '["ثلاث وعشرون سنة","عشر سنوات","خمس عشرة سنة","ثلاث عشرة سنة"]'::jsonb, 3, 20, 6, 'multi', 'قسم الإرشاد صحبته بعد البعثة إلى ثلاث عشرة سنة في مكة وعشر في المدينة.', 'بدايات الإسلام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم سنة صحب الإمام علي (ع) النبي بعد الهجرة في المدينة؟', '["ثماني سنوات","عشر سنوات","ثلاث عشرة سنة","خمس سنوات"]'::jsonb, 1, 20, 7, 'multi', 'ذكر الإرشاد عشر سنوات في المدينة بعد الهجرة دافع فيها عن النبي (ص).', 'العهد المدني');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم كان عمر الإمام علي (ع) يوم رحيل النبي (ص) بحسب الإرشاد؟', '["ثلاثًا وستين سنة","ثلاثين سنة","أربعين سنة","ثلاثًا وثلاثين سنة"]'::jsonb, 3, 20, 8, 'multi', 'ينص الإرشاد على أن عمره يوم رحيل النبي (ص) كان ثلاثًا وثلاثين سنة.', 'العهد النبوي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'ما العمل الذي ربطه الإرشاد بآية الولاية (المائدة: 55)؟', '["فتح باب خيبر","إطعام المسكين عند الإفطار","المبيت في فراش النبي","إيتاء الزكاة حال الركوع"]'::jsonb, 3, 25, 9, 'multi', 'استدل الإرشاد بالآية وذكر أن الإمام عليًا (ع) تصدق وهو راكع.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'من لبّى دعوة النبي (ص) إلى نصرته في اجتماع بني عبد المطلب؟', '["حمزة بن عبد المطلب","الإمام علي (ع)","جعفر بن أبي طالب","العباس بن عبد المطلب"]'::jsonb, 1, 20, 10, 'multi', 'قام الإمام علي (ع)، وكان أصغر القوم، وقال للنبي (ص): أنا أنصرك.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'أي عبارة قالها النبي (ص) في غدير خم بحسب الإرشاد؟', '["أنا مدينة العلم وعلي بابها","علي مني وأنا من علي","من كنت مولاه فعلي مولاه","لا فتى إلا علي"]'::jsonb, 2, 20, 11, 'multi', 'أورد الإرشاد قول النبي (ص): من كنت مولاه فعلي مولاه، في خطبة غدير خم.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'بمن شبّه النبي (ص) منزلة علي (ع) منه عند الخروج إلى تبوك؟', '["إسماعيل من إبراهيم","يوشع من موسى","هارون من موسى","يحيى من زكريا"]'::jsonb, 2, 20, 12, 'multi', 'قال له: أنت مني بمنزلة هارون من موسى إلا أنه لا نبي بعدي.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم دامت إمامة الإمام علي (ع) بعد النبي بحسب الإرشاد؟', '["خمسًا وعشرين سنة","ثلاثين سنة","خمس سنوات وستة أشهر","ثلاثًا وثلاثين سنة"]'::jsonb, 1, 20, 13, 'multi', 'ذكر الشيخ المفيد أن مدة إمامته بعد النبي (ص) كانت ثلاثين سنة.', 'الإمامة والخلافة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم استمرت مدة حكم الإمام علي (ع) الفعلي المضطربة بالحروب؟', '["أربع وعشرون سنة وستة أشهر","أربع سنوات","عشر سنوات","خمس سنوات وستة أشهر"]'::jsonb, 3, 25, 14, 'multi', 'يفصل الإرشاد ثلاثين سنة إلى 24 سنة و6 أشهر منع فيها من التصرف، و5 سنوات و6 أشهر واجه فيها الحروب.', 'الإمامة والخلافة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'في أي مسجد ضُرب الإمام علي (ع) الضربة التي استشهد بسببها؟', '["المسجد الحرام","مسجد الكوفة","المسجد النبوي","مسجد قباء"]'::jsonb, 1, 20, 15, 'multi', 'ذكر الإرشاد أن ابن ملجم ضربه في مسجد الكوفة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'من نفّذ ضربة اغتيال الإمام علي (ع)؟', '["الأشعث بن قيس","عمرو بن العاص","معاوية بن أبي سفيان","عبد الرحمن بن ملجم المرادي"]'::jsonb, 3, 20, 16, 'multi', 'ينسب الإرشاد الضربة القاتلة إلى عبد الرحمن بن ملجم المرادي.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'متى وقعت ضربة الإمام علي (ع) في مسجد الكوفة؟', '["ليلة الحادي والعشرين من رمضان","ليلة السابع عشر من رمضان","ليلة التاسع عشر من رمضان","ليلة الثالث والعشرين من رمضان"]'::jsonb, 2, 20, 17, 'multi', 'خرج لإيقاظ الناس لصلاة الفجر ليلة التاسع عشر من رمضان فضربه ابن ملجم.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'ما الوصف الذي يذكره الإرشاد لسيف ابن ملجم؟', '["كان مكسورًا","كان مسمومًا","كان ذا نصلين","كان من غنائم بدر"]'::jsonb, 1, 20, 18, 'multi', 'نص الإرشاد على أن ابن ملجم ضرب أعلى رأس الإمام بسيف مسموم.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'في أي تاريخ كانت شهادة الإمام علي (ع) بحسب الإرشاد؟', '["21 رمضان سنة 41هـ","19 رمضان سنة 40هـ","21 رمضان سنة 40هـ","19 رمضان سنة 39هـ"]'::jsonb, 2, 20, 19, 'multi', 'كانت وفاته شهيدًا قبل فجر الجمعة، الحادي والعشرين من رمضان سنة 40هـ.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'من تولّى غسل الإمام علي (ع) وتكفينه تنفيذًا لوصيته؟', '["الحسن والحسين (ع)","محمد بن الحنفية وعبد الله بن جعفر","عمار بن ياسر والمقداد","قنبر والأصبغ بن نباتة"]'::jsonb, 0, 25, 20, 'multi', 'تولى الإمامان الحسن والحسين (ع) غسله وتكفينه وفق وصيته.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'إلى أي موضع حُمل الإمام علي (ع) لدفنه؟', '["مقبرة المعلاة في مكة","البقيع في المدينة","الغري في النجف","وادي السلام في البصرة"]'::jsonb, 2, 20, 21, 'multi', 'حمله الحسنان (ع) إلى الغري في النجف من أرض الكوفة ودفناه هناك.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'لماذا أُخفي أثر قبر الإمام علي (ع) أول الأمر؟', '["انتظار بناء مدينة النجف","لمنع السيول من الوصول إليه","خشية اعتداء الأمويين عليه","لوقوع خلاف على موضع الدفن"]'::jsonb, 2, 25, 22, 'multi', 'أوصى بإخفاء أثر قبره لما علمه من عداوة الحكم الأموي وخشية العبث به.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'من دلّ الشيعة على قبر الإمام علي (ع) في العصر العباسي؟', '["الإمام جعفر الصادق (ع)","الإمام محمد الباقر (ع)","الإمام موسى الكاظم (ع)","زيد بن علي"]'::jsonb, 0, 25, 23, 'multi', 'ذكر الإرشاد أن الإمام جعفر الصادق (ع) عرّف القبر في العصر العباسي، فعرفته الشيعة وزارته.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_21, 'كم كان عمر الإمام علي (ع) عند استشهاده بحسب الإرشاد؟', '["ثلاثًا وستين سنة","ستين سنة","خمسًا وستين سنة","ثمانٍ وخمسين سنة"]'::jsonb, 0, 20, 24, 'multi', 'ختم الشيخ المفيد ترجمته المختصرة بذكر أن عمر الإمام عند وفاته كان 63 سنة.', 'الاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_22 uuid;
BEGIN
  SELECT id INTO v_sync_id_22 FROM quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1;
  IF v_sync_id_22 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة السيدة فاطمة الزهراء (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_22;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'من هي والدة السيدة فاطمة الزهراء (ع)؟', '["خديجة بنت خويلد","فاطمة بنت أسد","أم سلمة","صفية بنت عبد المطلب"]'::jsonb, 0, 20, 0, 'multi', 'الزهراء (ع) ابنة النبي محمد (ص) من زوجته خديجة بنت خويلد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'في أي مدينة ولدت السيدة فاطمة الزهراء (ع)؟', '["الكوفة","المدينة المنورة","الطائف","مكة المكرمة"]'::jsonb, 3, 20, 1, 'multi', 'ولدت (ع) في مكة في بيت النبوة قبل الهجرة إلى المدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ما اليوم المشهور لولادة الزهراء (ع) في الرواية الإمامية؟', '["15 شعبان","13 رجب","20 جمادى الآخرة","10 ربيع الأول"]'::jsonb, 2, 20, 2, 'multi', 'العشرون من جمادى الآخرة هو تاريخ الولادة المشهور عند الإمامية.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'أي كنية اشتهرت بها الزهراء (ع) وتعبّر عن شدة قربها من النبي (ص)؟', '["أم المؤمنين","أم البنين","أم أبيها","أم عبد الله"]'::jsonb, 2, 20, 3, 'multi', '«أم أبيها» من كناها المشهورة في كتب المناقب الإمامية.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'بمن تزوجت السيدة فاطمة الزهراء (ع)؟', '["العباس بن عبد المطلب","جعفر بن أبي طالب","زيد بن حارثة","الإمام علي بن أبي طالب (ع)"]'::jsonb, 3, 20, 4, 'multi', 'زوّج النبي (ص) فاطمة (ع) من الإمام علي بن أبي طالب (ع).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ما الذي بيع لتجهيز مهر الزهراء (ع) في الرواية المشهورة؟', '["سيفه ذو الفقار","درع الإمام علي (ع)","ناقته","خاتمه"]'::jsonb, 1, 20, 5, 'multi', 'أمر النبي (ص) عليًا (ع) ببيع درعه ليجعل ثمنها في المهر وتجهيز البيت.', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'أي حفيدين للنبي (ص) هما ابنا الزهراء (ع)؟', '["محمد وإبراهيم","الحسن والحسين (ع)","جعفر وعقيل","القاسم وعبد الله"]'::jsonb, 1, 20, 6, 'multi', 'الحسن والحسين (ع) ابنا علي وفاطمة، وهما سبطا رسول الله (ص).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'من ابنتا الزهراء (ع) اللتان تذكرهما كتب السيرة ضمن أولادها؟', '["خديجة وصفية","رقية وسكينة","فاطمة وحكيمة","زينب وأم كلثوم"]'::jsonb, 3, 20, 7, 'multi', 'تعد المصادر زينب وأم كلثوم مع الحسن والحسين ضمن أولاد فاطمة وعلي (ع).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'كيف قسّم النبي (ص) العمل بين علي وفاطمة (ع)؟', '["جعله كله على علي","لعلي عمل البيت ولفاطمة ما خارجه","لفاطمة عمل البيت ولعلي ما خارجه","جعله كله على فاطمة"]'::jsonb, 2, 25, 8, 'multi', 'قضى النبي (ص) على فاطمة بخدمة ما دون الباب، وعلى علي بما خلفه.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ماذا علّم النبي (ص) فاطمة (ع) بدل الخادم؟', '["زيارة عاشوراء","دعاء كميل","صلاة جعفر","تسبيح الزهراء"]'::jsonb, 3, 20, 9, 'multi', 'علّمها النبي (ص) ذكرًا صار معروفًا بتسبيح فاطمة الزهراء.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'كيف يبدأ الترتيب المروي لتسبيح الزهراء (ع) بعد الصلاة؟', '["33 مرة «سبحان الله»","34 مرة «الحمد لله»","34 مرة «الله أكبر»","33 مرة «لا إله إلا الله»"]'::jsonb, 2, 25, 10, 'multi', 'يبدأ بأربع وثلاثين تكبيرة، ثم 33 تحميدة، ثم 33 تسبيحة.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'من المرأة التي اصطحبها النبي (ص) إلى المباهلة مع نصارى نجران؟', '["صفية بنت عبد المطلب","أم سلمة","زينب بنت جحش","فاطمة الزهراء (ع)"]'::jsonb, 3, 20, 11, 'multi', 'خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين (ع).', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'من ضمهم الكساء مع النبي (ص) في الرواية الإمامية؟', '["أبو بكر وعمر وعثمان وعلي","العباس وجعفر وعقيل وزيد","علي وفاطمة والحسن والحسين","حمزة والعباس وجعفر وعقيل"]'::jsonb, 2, 20, 12, 'multi', 'اجتمع تحت الكساء النبي وعلي وفاطمة والحسن والحسين، وهم الخمسة.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'أي آية ارتبطت بأصحاب الكساء ومنهم الزهراء (ع)؟', '["آية التطهير","آية الكرسي","آية الدين","آية النجوى"]'::jsonb, 0, 20, 13, 'multi', 'نزلت آية التطهير في النبي وعلي وفاطمة والحسن والحسين (ع).', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'أي سورة ربطت الروايات بإطعام أهل البيت المسكين واليتيم والأسير؟', '["سورة الإنسان","سورة الفتح","سورة الجمعة","سورة الملك"]'::jsonb, 0, 20, 14, 'multi', 'تذكر الروايات نزول آيات الإطعام من سورة الإنسان في أهل هذا البيت.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'بماذا وصف النبي (ص) فاطمة في الحديث المشهور «فاطمة بضعة مني»؟', '["عمته","خادمته","أخته","بضعة منه"]'::jsonb, 3, 20, 15, 'multi', 'قال النبي (ص): «فاطمة بضعة مني»، دلالة على شدة اتصالها به.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ما اللقب الدال على انقطاع الزهراء (ع) إلى الله وتميزها؟', '["العقيلة","البتول","الحوراء","الكريمة"]'::jsonb, 1, 20, 16, 'multi', '«البتول» من ألقاب فاطمة (ع) الواردة في أبواب أسمائها وفضائلها.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ما اسم الأرض التي طالبت الزهراء (ع) بحقها فيها بعد رحيل النبي (ص)؟', '["خيبر","فدك","قباء","العقيق"]'::jsonb, 1, 20, 17, 'multi', 'احتجت الزهراء (ع) في قضية فدك وخطبت مطالبة بحقها ومستدلة بالقرآن.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'أين ألقت الزهراء (ع) خطبتها المعروفة في قضية فدك؟', '["مسجد النبي (ص)","مسجد قباء","المسجد الحرام","مسجد الكوفة"]'::jsonb, 0, 20, 18, 'multi', 'دخلت فاطمة (ع) مسجد رسول الله (ص) وخاطبت الحاضرين في خطبتها.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'بأي نوع من الأدلة احتجت الزهراء (ع) في خطبتها بشأن الميراث؟', '["بأشعار الجاهلية","بآيات من القرآن","بأعراف الروم","برسائل ملوك اليمن"]'::jsonb, 1, 25, 19, 'multi', 'استشهدت بآيات وراثة الأنبياء وأحكام المواريث لتقيم حجتها.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'من تولّى غسل الزهراء (ع) ودفنها بحسب وصيتها؟', '["سلمان الفارسي","العباس بن عبد المطلب","الإمام علي (ع)","عمار بن ياسر"]'::jsonb, 2, 20, 20, 'multi', 'أوصت فاطمة (ع) عليًا (ع)، فتولى تجهيزها ودفنها ليلًا.', 'الأيام الأخيرة والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_22, 'ما الذي ترتب على دفن الزهراء (ع) ليلًا وإخفاء موضع قبرها؟', '["لم يُعرف موضع قبرها يقينًا","نُقل قبرها إلى مكة","دُفنت في الكوفة","نُقش اسمها على باب المسجد"]'::jsonb, 0, 25, 21, 'multi', 'عُفّي موضع قبرها، ولذلك بقي تحديد موضعه غير مقطوع به.', 'الأيام الأخيرة والاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_23 uuid;
BEGIN
  SELECT id INTO v_sync_id_23 FROM quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1;
  IF v_sync_id_23 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام الحسن المجتبى (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_23;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'في أي مدينة وُلد الإمام الحسن المجتبى (ع)؟', '["المدينة المنورة","مكة المكرمة","الكوفة","البصرة"]'::jsonb, 0, 20, 0, 'multi', 'وُلد الإمام الحسن (ع) في المدينة المنورة في شهر رمضان سنة 3 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'ما الشهر الهجري الذي شهد ولادة الإمام الحسن (ع)؟', '["رجب","شعبان","رمضان","محرم"]'::jsonb, 2, 20, 1, 'multi', 'يذكر الشيخ المفيد أن ولادته (ع) كانت في النصف من شهر رمضان سنة 3 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'ما كنية الإمام الحسن المجتبى (ع)؟', '["أبو عبد الله","أبو محمد","أبو الحسن","أبو جعفر"]'::jsonb, 1, 20, 2, 'multi', 'كنية الإمام الحسن بن علي (ع) هي أبو محمد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من أم الإمام الحسن المجتبى (ع)؟', '["فاطمة الزهراء (ع)","أم البنين (ع)","خديجة الكبرى (ع)","فاطمة بنت أسد (ع)"]'::jsonb, 0, 20, 3, 'multi', 'الإمام الحسن (ع) هو الابن الأكبر للإمام علي (ع) والسيدة فاطمة الزهراء (ع).', 'النسب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من تولى الإمامة بعد استشهاد الإمام علي (ع)؟', '["الإمام الحسين (ع)","الإمام الحسن (ع)","محمد بن الحنفية","عبد الله بن عباس"]'::jsonb, 1, 20, 4, 'multi', 'انتقلت الإمامة بعد أمير المؤمنين (ع) إلى ابنه الإمام الحسن المجتبى (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'في أي يوم بايع أهل العراق الإمام الحسن (ع) بعد استشهاد أبيه؟', '["الجمعة 21 رمضان سنة 40 هـ","الجمعة 11 رمضان سنة 40 هـ","الاثنين 21 رمضان سنة 41 هـ","الجمعة 10 محرم سنة 40 هـ"]'::jsonb, 0, 30, 5, 'multi', 'تمت البيعة للإمام الحسن (ع) يوم الجمعة الحادي والعشرين من رمضان سنة 40 هـ.', 'البيعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من دعا الناس إلى بيعة الإمام الحسن (ع) عقب خطبته في الكوفة؟', '["قيس بن سعد","عبد الله بن العباس","حجر بن عدي","سليمان بن صرد"]'::jsonb, 1, 25, 6, 'multi', 'قام عبد الله بن العباس بعد خطبة الإمام ودعا الناس إلى بيعته، فأجابوه.', 'البيعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'إلى أي مدينة أرسل الإمام الحسن (ع) عبد الله بن العباس بعد البيعة؟', '["البصرة","المدائن","واسط","المدينة"]'::jsonb, 0, 20, 7, 'multi', 'بعد تثبيت الولاة والعمال أرسل الإمام عبد الله بن العباس إلى البصرة.', 'إدارة الدولة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'إلى أي منطقتين أرسل معاوية جاسوسين بعد بيعة الإمام الحسن (ع)؟', '["اليمن والحجاز","المدينة ومكة","المدائن وواسط","الكوفة والبصرة"]'::jsonb, 3, 25, 8, 'multi', 'أرسل معاوية رجلًا إلى الكوفة وآخر من بني القين إلى البصرة لجمع الأخبار والإفساد.', 'مواجهة معاوية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من قائد مقدمة جيش الإمام الحسن (ع) التي وُجهت إلى مسكن؟', '["حجر بن عدي","قيس بن سعد","عدي بن حاتم","عبيد الله بن العباس"]'::jsonb, 3, 25, 9, 'multi', 'قدّم الإمام عبيد الله بن العباس على اثني عشر ألفًا، وجعل قيس بن سعد وسعيد بن قيس من بعده.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'كم كان عدد جنود مقدمة الإمام الحسن (ع) بقيادة عبيد الله بن العباس؟', '["عشرون ألفًا","ثمانية آلاف","اثنا عشر ألفًا","أربعون ألفًا"]'::jsonb, 2, 25, 10, 'multi', 'جهز الإمام الحسن (ع) مقدمة قوامها اثنا عشر ألف مقاتل وأمرها بالتوجه إلى مسكن.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'في أي موضع نزل الإمام الحسن (ع) حين خرج لمواجهة جيش الشام؟', '["النخيلة","ساباط المدائن","صفين","النهروان"]'::jsonb, 1, 20, 11, 'multi', 'تحرك الإمام من الكوفة حتى نزل ساباط المدائن، وهناك اختبر استعداد الناس.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من الذي طعن الإمام الحسن (ع) في ساباط؟', '["بسر بن أرطاة","الجراح بن سنان","الضحاك بن قيس","عمرو بن العاص"]'::jsonb, 1, 25, 12, 'multi', 'اعترض الجراح بن سنان الأسدي الإمام في مظلم ساباط وطعنه في فخذه بمعول.', 'المحنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'إلى بيت أي والي نُقل الإمام الحسن (ع) للعلاج بعد طعنه؟', '["زياد بن أبيه","المغيرة بن شعبة","سعد بن مسعود الثقفي","النعمان بن بشير"]'::jsonb, 2, 25, 13, 'multi', 'حُمل الإمام إلى المدائن ونزل على سعد بن مسعود الثقفي، والي أمير المؤمنين عليها.', 'المحنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'ما الغاية التي صرّح بها الإمام الحسن (ع) لقبول الصلح؟', '["نقل العاصمة إلى المدينة","زيادة خراج العراق","توسيع حدود الدولة","حقن دماء المسلمين"]'::jsonb, 3, 25, 14, 'multi', 'بيّن الإمام أن رأيه في الصلح يقوم على حقن الدماء ودفع الفتنة بعد خذلان أصحابه.', 'الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'أي شرط سياسي ورد في عهد الصلح بشأن ما بعد معاوية؟', '["أن يجعلها شورى أموية","أن يعهد بها ليزيد","ألا يعهد بالخلافة إلى أحد","أن يسلمها لعمرو بن العاص"]'::jsonb, 2, 25, 15, 'multi', 'تضمن العهد ألا يعهد معاوية بالأمر إلى أحد من بعده، وفق رواية الشيخ المفيد.', 'الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'أين أقام الإمام الحسن (ع) بعد إتمام الصلح؟', '["البصرة","الكوفة","دمشق","المدينة المنورة"]'::jsonb, 3, 20, 16, 'multi', 'غادر الإمام الحسن (ع) الكوفة بعد الصلح وعاد إلى المدينة، فأقام فيها بقية حياته.', 'ما بعد الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'من التي سمّت الإمام الحسن (ع) بحسب رواية الشيخ المفيد؟', '["ميسون بنت بحدل","هند بنت عتبة","جعدة بنت الأشعث","أم الحكم بنت أبي سفيان"]'::jsonb, 2, 25, 17, 'multi', 'يروي المفيد أن معاوية راسل جعدة بنت الأشعث، زوج الإمام، وحملها على سمه.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'كم يومًا بقي الإمام الحسن (ع) مريضًا بعد السم بحسب الإرشاد؟', '["سبعين يومًا","عشرة أيام","عشرين يومًا","أربعين يومًا"]'::jsonb, 3, 20, 18, 'multi', 'ذكر الشيخ المفيد أن الإمام (ع) بقي مريضًا من أثر السم أربعين يومًا.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_23, 'أين دُفن الإمام الحسن المجتبى (ع)؟', '["مقبرة البقيع","المسجد النبوي","النجف الأشرف","كربلاء المقدسة"]'::jsonb, 0, 20, 19, 'multi', 'دُفن الإمام الحسن (ع) في البقيع إلى جوار جدته فاطمة بنت أسد.', 'الدفن');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_24 uuid;
BEGIN
  SELECT id INTO v_sync_id_24 FROM quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1;
  IF v_sync_id_24 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام الحسين (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_24;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من هي والدة الإمام الحسين (ع)؟', '["أسماء بنت عميس","أم البنين","فاطمة الزهراء (ع)","أم سلمة"]'::jsonb, 2, 20, 0, 'multi', 'الإمام الحسين (ع) هو ابن الإمام علي وفاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'ما التاريخ المشهور لولادة الإمام الحسين (ع)؟', '["17 ربيع الأول سنة 4 هـ","15 رمضان سنة 3 هـ","10 محرم سنة 5 هـ","3 شعبان سنة 4 هـ"]'::jsonb, 3, 25, 1, 'multi', 'المشهور في المصادر الإمامية أن ولادته كانت في الثالث من شعبان سنة أربع للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من سمّى سبط النبي الأصغر «الحسين»؟', '["النبي محمد (ص)","الإمام علي (ع)","فاطمة الزهراء (ع)","الإمام الحسن (ع)"]'::jsonb, 0, 20, 2, 'multi', 'تذكر الروايات أن رسول الله (ص) سمّاه حسينًا بعد ولادته.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'أي كنية اشتهر بها الإمام الحسين (ع)؟', '["أبو جعفر","أبو محمد","أبو الحسن","أبو عبد الله"]'::jsonb, 3, 20, 3, 'multi', 'تذكر كتب السيرة أن كنية الإمام الحسين (ع) هي أبو عبد الله.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'أي عبارة نبوية مشهورة تصف مكانة الحسن والحسين (ع)؟', '["كاتبا الوحي","أمينا وحي السماء","صاحبا الهجرتين","سيدا شباب أهل الجنة"]'::jsonb, 3, 20, 4, 'multi', 'ورد عن النبي (ص) أن الحسن والحسين سيدا شباب أهل الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'أي آية ارتبطت بالنبي وعلي وفاطمة والحسن والحسين (ع)؟', '["آية الدين","آية التطهير","آية النجوى","آية الكلالة"]'::jsonb, 1, 20, 5, 'multi', 'تربط الروايات الإمامية آية التطهير بأصحاب الكساء الخمسة ومنهم الحسين (ع).', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من الإمام الذي سبق الحسين (ع) مباشرة في الإمامة؟', '["الإمام السجاد (ع)","الإمام علي (ع)","الإمام الحسن (ع)","الإمام الباقر (ع)"]'::jsonb, 2, 20, 6, 'multi', 'تولى الحسين (ع) الإمامة بعد أخيه الإمام الحسن المجتبى (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'كم دامت إمامة الحسين (ع) بحسب ما يذكره الشيخ المفيد؟', '["نحو خمس سنين","نحو عشر سنين","نحو عشرين سنة","أقل من سنة"]'::jsonb, 1, 25, 7, 'multi', 'امتدت إمامته من وفاة أخيه سنة 50 هـ إلى استشهاده سنة 61 هـ، أي نحو عشر سنين.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'لماذا غادر الإمام الحسين (ع) المدينة بعد موت معاوية؟', '["لزيارة اليمن","لطلب ولاية مكة","للتجارة في الشام","لرفضه البيعة ليزيد"]'::jsonb, 3, 20, 8, 'multi', 'خرج من المدينة بعدما طُلبت منه البيعة ليزيد فامتنع عنها.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'إلى أي مدينة توجه الحسين (ع) عند خروجه من المدينة؟', '["الكوفة","مكة المكرمة","البصرة","دمشق"]'::jsonb, 1, 20, 9, 'multi', 'غادر المدينة متوجهًا إلى مكة، وأقام فيها قبل مسيره نحو العراق.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من أرسله الحسين (ع) إلى الكوفة ليتحقق من موقف أهلها؟', '["مسلم بن عقيل","قيس بن مسهر","هاني بن عروة","حبيب بن مظاهر"]'::jsonb, 0, 20, 10, 'multi', 'بعث الحسين (ع) ابن عمه مسلم بن عقيل إلى الكوفة ليستطلع اجتماع الناس وبيعتهم.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من كان والي الكوفة الذي واجه حركة مسلم بن عقيل؟', '["النعمان بن بشير","عبيد الله بن زياد","عمر بن سعد","الوليد بن عتبة"]'::jsonb, 1, 20, 11, 'multi', 'ولى يزيد عبيد الله بن زياد الكوفة، فتولى قمع حركة مسلم بن عقيل.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'في أي يوم غادر الحسين (ع) مكة متوجهًا إلى العراق؟', '["1 محرم سنة 61 هـ","10 ذي الحجة سنة 60 هـ","8 ذي الحجة سنة 60 هـ","15 شعبان سنة 60 هـ"]'::jsonb, 2, 25, 12, 'multi', 'خرج من مكة يوم التروية، الثامن من ذي الحجة سنة 60 هـ.', 'الطريق إلى كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من قائد القوة التي التقت ركب الحسين (ع) في الطريق؟', '["عمر بن سعد","الحر بن يزيد الرياحي","شمر بن ذي الجوشن","حصين بن نمير"]'::jsonb, 1, 20, 13, 'multi', 'التقى الركب قوة يقودها الحر بن يزيد الرياحي، ثم لازمته حتى النزول بكربلاء.', 'الطريق إلى كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'كيف عامل الحسين (ع) جيش الحر عند وصوله عطشانًا؟', '["أخذ سلاحهم","منع عنهم الماء","أعادهم إلى الكوفة","أمر بسقيهم وخيلهم"]'::jsonb, 3, 20, 14, 'multi', 'أمر الحسين (ع) أصحابه أن يسقوا القوم ويرشفوا الخيل، في موقف رحمة واضح.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'في أي أرض انتهى مسير ركب الحسين (ع)؟', '["البصرة","النجف","المدائن","كربلاء"]'::jsonb, 3, 20, 15, 'multi', 'انتهى المسير بنزول الحسين وأهل بيته وأصحابه بأرض كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'في أي تاريخ نزل الإمام الحسين (ع) كربلاء؟', '["8 ذي الحجة سنة 61 هـ","1 محرم سنة 60 هـ","2 محرم سنة 61 هـ","10 صفر سنة 61 هـ"]'::jsonb, 2, 25, 16, 'multi', 'تذكر روايات المقتل نزوله كربلاء في اليوم الثاني من المحرم سنة 61 هـ.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من قاد الجيش المقابل للحسين (ع) في كربلاء؟', '["عمر بن سعد","عبيد الله بن زياد","الحر بن يزيد","الوليد بن عتبة"]'::jsonb, 0, 20, 17, 'multi', 'تولى عمر بن سعد قيادة الجيش الذي حاصر الحسين (ع) في كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'ماذا طلب الحسين (ع) ليلة عاشوراء من القوم؟', '["تأجيل القتال شهرًا","السماح له بدخول الكوفة","إمهاله ليلة للصلاة والدعاء","إرسال وفد إلى المدينة"]'::jsonb, 2, 25, 18, 'multi', 'طلب إمهاله تلك الليلة لما كان يحبه من الصلاة وتلاوة القرآن والدعاء.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'ماذا أذن الحسين (ع) لأصحابه أن يفعلوا ليلة عاشوراء؟', '["الانصراف واتخاذ الليل سترًا","بدء القتال ليلًا","مبايعة عمر بن سعد","العودة جميعًا إلى مكة"]'::jsonb, 0, 25, 19, 'multi', 'رفع عن أصحابه الحرج وأذن لهم بالانصراف، فاختاروا الوفاء والبقاء معه.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من عاد إلى نصرة الحسين (ع) صباح عاشوراء بعد أن كان في الجيش المقابل؟', '["الحر بن يزيد الرياحي","عمر بن سعد","شمر بن ذي الجوشن","عبيد الله بن زياد"]'::jsonb, 0, 20, 20, 'multi', 'تاب الحر بن يزيد، وانتقل إلى معسكر الحسين (ع) وقاتل بين يديه.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من حمل لواء الحسين (ع) في كربلاء؟', '["القاسم بن الحسن","علي الأكبر (ع)","أبو الفضل العباس (ع)","حبيب بن مظاهر"]'::jsonb, 2, 20, 21, 'multi', 'كان لواء الحسين (ع) مع أخيه أبي الفضل العباس (ع).', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'أي ابن للإمام الحسين (ع) بقي بعد كربلاء وصار الإمام من بعده؟', '["علي زين العابدين (ع)","علي الأكبر (ع)","عبد الله الرضيع","جعفر بن الحسين"]'::jsonb, 0, 20, 22, 'multi', 'بقي الإمام علي بن الحسين زين العابدين (ع)، وانتقلت إليه الإمامة بعد أبيه.', 'ما بعد كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'في أي يوم استشهد الإمام الحسين (ع)؟', '["9 محرم سنة 60 هـ","10 محرم سنة 61 هـ","20 صفر سنة 61 هـ","21 رمضان سنة 61 هـ"]'::jsonb, 1, 20, 23, 'multi', 'استشهد الإمام الحسين (ع) يوم عاشوراء، العاشر من المحرم سنة 61 هـ.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'كم كان عمر الإمام الحسين (ع) عند استشهاده؟', '["نحو 47 سنة","نحو 57 سنة","نحو 67 سنة","نحو 37 سنة"]'::jsonb, 1, 25, 24, 'multi', 'ولد سنة 4 هـ واستشهد سنة 61 هـ، وتذكر المصادر أن عمره كان نحو سبع وخمسين سنة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_24, 'من تولى دفن الإمام الحسين (ع) بحسب الرواية الإمامية؟', '["الإمام زين العابدين (ع)","محمد بن الحنفية","عمر بن سعد","الحر بن يزيد"]'::jsonb, 0, 25, 25, 'multi', 'تنص الرواية الإمامية على أن الإمام زين العابدين (ع) تولى دفن أبيه الحسين (ع).', 'ما بعد كربلاء');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_25 uuid;
BEGIN
  SELECT id INTO v_sync_id_25 FROM quizzes WHERE title = 'سيرة السيدة زينب (ع)' LIMIT 1;
  IF v_sync_id_25 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة السيدة زينب (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_25;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'إلى أي بيت تنتسب السيدة زينب (ع) من جهة والديها؟', '["بيت جعفر وأسماء بنت عميس","بيت الإمام علي وفاطمة (ع)","بيت العباس وأم الفضل","بيت عقيل وفاطمة بنت عتبة"]'::jsonb, 1, 20, 0, 'multi', 'زينب الكبرى هي ابنة الإمام علي والسيدة فاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'من هما أخوا السيدة زينب (ع) الشقيقان؟', '["جعفر وعقيل","محمد بن الحنفية والعباس","الحسن والحسين (ع)","القاسم وعبد الله"]'::jsonb, 2, 15, 1, 'multi', 'زينب والحسن والحسين من أولاد الإمام علي وفاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بمن تزوجت السيدة زينب (ع)؟', '["مسلم بن عقيل","عبد الله بن عباس","محمد بن الحنفية","عبد الله بن جعفر"]'::jsonb, 3, 15, 2, 'multi', 'تزوجت زينب الكبرى ابن عمها عبد الله بن جعفر بن أبي طالب.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ما صلة زوج السيدة زينب (ع) بجعفر الطيار؟', '["حفيده","أخوه","ابنه","ابن أخيه"]'::jsonb, 2, 20, 3, 'multi', 'عبد الله زوج زينب هو ابن جعفر بن أبي طالب المعروف بالطيار.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'أي إمام كان ابن أخي زينب (ع) ورافق ركب كربلاء؟', '["موسى الكاظم (ع)","محمد الباقر (ع)","جعفر الصادق (ع)","علي بن الحسين (ع)"]'::jsonb, 3, 20, 4, 'multi', 'الإمام السجاد ابن الإمام الحسين، وكان في ركب كربلاء ثم مسير السبايا.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'مع أي إمام خرجت زينب (ع) في الرحلة التي انتهت بكربلاء؟', '["الإمام الحسن (ع)","الإمام الحسين (ع)","الإمام السجاد (ع)","الإمام الباقر (ع)"]'::jsonb, 1, 15, 5, 'multi', 'حضرت زينب مع أخيها الإمام الحسين في الركب حتى كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'من أخبر زينب (ع) ليلة عاشوراء بقرب الأجل؟', '["أبو الفضل العباس (ع)","الإمام السجاد (ع)","الإمام الحسين (ع)","حبيب بن مظاهر"]'::jsonb, 2, 20, 6, 'multi', 'أنشد الحسين أبياتًا في تقلّب الدهر، فعلمت زينب بدنو المصاب.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بماذا وجّه الحسين (ع) أخته زينب ليلة عاشوراء؟', '["الرجوع إلى المدينة","مغادرة المخيم","طلب الأمان","الصبر والتقوى"]'::jsonb, 3, 20, 7, 'multi', 'وعظها الحسين بالصبر والتقوى والتعزي بعزاء الله.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'من كان حاضرًا مريضًا في حديث الحسين وزينب ليلة عاشوراء؟', '["مسلم بن عقيل","عبد الله بن جعفر","محمد بن الحنفية","الإمام السجاد (ع)"]'::jsonb, 3, 20, 8, 'multi', 'نقل الإمام السجاد الواقعة وذكر أنه كان مريضًا.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ما الدور الذي ذكره السجاد (ع) لعمته زينب ليلة عاشوراء؟', '["كانت تمرّضه","كانت تفاوض الجيش","كانت تحمل الراية","كانت تكتب للكوفة"]'::jsonb, 0, 20, 9, 'multi', 'ذكر الإمام السجاد أن عمته زينب كانت تمرّضه بسبب مرضه.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'من تولّى دورًا بارزًا في رعاية العيال بعد مقتل الحسين (ع)؟', '["أم البنين","السيدة زينب (ع)","أسماء بنت عميس","أم سلمة"]'::jsonb, 1, 20, 10, 'multi', 'برزت زينب في رعاية النساء والأطفال وحماية الركب بعد الطف.', 'ما بعد الطف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'كيف حمت زينب (ع) الإمام السجاد حين هدده ابن زياد؟', '["اعتنقته وطلبت أن تُقتل معه","طلبت إعادته للمدينة","لاذت بالصمت بعيدًا","طلبت إخراجه سرًا"]'::jsonb, 0, 25, 11, 'multi', 'تعلقت به وقالت إنها إن قُتل تُقتل معه، فكف ابن زياد.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'أين وبّخت زينب (ع) الناس بعد واقعة الطف؟', '["الكوفة","مكة","البصرة","المدينة"]'::jsonb, 0, 15, 12, 'multi', 'أورد الاحتجاج خطبتها في أهل الكوفة عند مرور السبايا.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بأي صفة خاطبت زينب (ع) أهل الكوفة في خطبتها؟', '["حماة العهد","أهل الوفاء والنصرة","أهل الختل والغدر","أنصار الحق"]'::jsonb, 2, 20, 13, 'multi', 'وصفتهم بالختل والغدر ونقض العهد بسبب خذلان الحسين.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بماذا شبّهت زينب (ع) نقض أهل الكوفة لعهدهم؟', '["أصحاب السفينة","أصحاب الكهف","ناقضة غزلها بعد قوة","أصحاب الجنة"]'::jsonb, 2, 25, 14, 'multi', 'استشهدت بمضمون آية النحل في نقض الغزل بعد توكيده.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'كيف استجاب أهل الكوفة لخطبة زينب (ع)؟', '["ردّوا أيديهم لأفواههم وبكوا","غادروا بلا تأثر","احتفلوا بالنصر","قاطعوا الخطبة"]'::jsonb, 0, 20, 15, 'multi', 'يصف الاحتجاج بكاء الجمع بعد أن كشفت الخطبة فداحة فعلهم.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بأي منطق ردّت زينب (ع) على شماتة ابن زياد؟', '["كرامة الشهداء والابتلاء","منع النسب للمصائب","براءة أهل الكوفة","إنكار الرحلة للعراق"]'::jsonb, 0, 25, 16, 'multi', 'أكدت منزلة الشهداء ورفضت اعتبار المصاب نصرًا أخلاقيًا للقاتل.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بأي عبارة لخّصت زينب (ع) رؤيتها للمصاب أمام ابن زياد؟', '["إن مع العسر يسرًا","ما رأيت إلا جميلًا","حسبنا الله","الصبر مفتاح الفرج"]'::jsonb, 1, 15, 17, 'multi', 'قالت: ما رأيت إلا جميلًا، وبيّنت أن الشهداء برزوا إلى مضاجعهم.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'أين واجهت زينب (ع) يزيد بخطبتها المشهورة؟', '["في موسم الحج","في مسجد الكوفة","في المدينة","في مجلسه بالشام"]'::jsonb, 3, 15, 18, 'multi', 'ألقت خطابها في مجلس يزيد بعد إدخال أهل البيت إلى الشام.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'بأي آية ردّت زينب (ع) على اغترار يزيد بالإمهال؟', '["والعصر إن الإنسان لفي خسر","إن مع العسر يسرًا","لا إكراه في الدين","ولا يحسبن الذين كفروا أنما نملي لهم"]'::jsonb, 3, 25, 19, 'multi', 'استشهدت بآل عمران 178 لتبيّن أن الإمهال قد يكون زيادة في الإثم.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ماذا تحدّت زينب (ع) يزيد أن يفعل بذكر أهل البيت؟', '["أن يحصره في المدينة","أن ينقله لبلد آخر","أن يمحو ذكرهم ولن يقدر","أن يكتبه في السجلات"]'::jsonb, 2, 20, 20, 'multi', 'قالت له: فوالله لا تمحو ذكرنا، مثبتة بقاء الرسالة رغم القمع.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ماذا أنكرت زينب (ع) على يزيد في شأن النساء؟', '["منع نساء الشام من السفر","ستر حرائره وسوق بنات النبي سبايا","تأخير زواج نساء بني أمية","تخصيص عطايا لنساء المدينة"]'::jsonb, 1, 25, 21, 'multi', 'أنكرت صونه نساءه مع كشفه وسوقه بنات رسول الله من بلد إلى بلد.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ما أبرز هدف لخطاب زينب (ع) في الكوفة والشام؟', '["طلب منصب إداري","كشف الجريمة والدفاع عن الرسالة","التفاوض التجاري","اعتزال الشأن العام"]'::jsonb, 1, 20, 22, 'multi', 'واجهت خطاب السلطة وذكّرت بمكانة أهل البيت ومسؤولية المعتدين والخاذلين.', 'المواقف والفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'إلى أي مدينة طلب أهل البيت التوجه بعد خروجهم من الشام؟', '["المدينة المنورة","الكوفة","البصرة","مكة"]'::jsonb, 0, 15, 23, 'multi', 'اختار أهل البيت العودة إلى المدينة، موطن جدهم رسول الله (ص).', 'العودة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_25, 'ماذا اختار نساء أهل البيت بعد عرض الإقامة أو الرحيل؟', '["التوجه إلى مصر","الإقامة في دمشق","الرجوع إلى المدينة","الرجوع إلى الكوفة"]'::jsonb, 2, 20, 24, 'multi', 'نقل اللهوف اختيارهن العودة إلى المدينة بعد ما جرى في الشام.', 'العودة');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_26 uuid;
BEGIN
  SELECT id INTO v_sync_id_26 FROM quizzes WHERE title = 'سيرة أبي الفضل العباس (ع)' LIMIT 1;
  IF v_sync_id_26 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة أبي الفضل العباس (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_26;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'من هو والد أبي الفضل العباس (ع)؟', '["جعفر بن أبي طالب","الإمام الحسن (ع)","عقيل بن أبي طالب","الإمام علي (ع)"]'::jsonb, 3, 20, 0, 'multi', 'أبو الفضل العباس هو ابن أمير المؤمنين الإمام علي بن أبي طالب (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'من هي والدة أبي الفضل العباس (ع)؟', '["فاطمة الكلابية أم البنين","فاطمة الزهراء (ع)","أسماء بنت عميس","ليلى بنت مسعود"]'::jsonb, 0, 20, 1, 'multi', 'والدته فاطمة بنت حزام الكلابية، المشهورة بكنية أم البنين.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'ما صلة العباس (ع) بالإمام الحسين (ع)؟', '["خاله","ابن أخيه","ابن عمه","أخوه لأبيه"]'::jsonb, 3, 20, 2, 'multi', 'العباس والحسين ابنا الإمام علي (ع)، وأمهما مختلفة، فهو أخوه لأبيه.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'أي مجموعة تضم إخوة العباس (ع) من أمه الذين حضروا كربلاء؟', '["محمد وعون وعبد الله","عبد الله وجعفر وعثمان","علي والقاسم وأبو بكر","مسلم وجعفر وعقيل"]'::jsonb, 1, 25, 3, 'multi', 'كان عبد الله وجعفر وعثمان بنو علي إخوة العباس من أم البنين، وشهدوا كربلاء.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'كم كان عمر العباس (ع) عند استشهاده بحسب الخبر المنقول في البحار؟', '["25 سنة","34 سنة","40 سنة","48 سنة"]'::jsonb, 1, 25, 4, 'multi', 'ينقل المجلسي أن العباس بن علي قُتل وله أربع وثلاثون سنة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'ما المهمة العسكرية الأبرز للعباس (ع) في معسكر الحسين؟', '["إدارة المفاوضات","كتابة الرسائل","قيادة ميمنة الجيش","حمل اللواء"]'::jsonb, 3, 20, 5, 'multi', 'جعل الإمام الحسين (ع) لواءه مع أخيه العباس يوم عاشوراء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'إلى أين أرسل الحسين (ع) العباس مع جماعة قبل عاشوراء؟', '["إلى الفرات لجلب الماء","إلى الكوفة لطلب الأنصار","إلى مكة لإبلاغ بني هاشم","إلى المدينة لإحضار السلاح"]'::jsonb, 0, 20, 6, 'multi', 'بعث الحسين أخاه العباس مع رجال نحو الفرات ليأتوا المخيم بالماء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'كم فارسًا رافق العباس (ع) في بعثة جلب الماء المذكورة في الإرشاد؟', '["سبعون فارسًا","عشرة فرسان","خمسون فارسًا","ثلاثون فارسًا"]'::jsonb, 3, 25, 7, 'multi', 'يذكر الإرشاد أن الحسين بعث العباس في ثلاثين فارسًا ومعهم عشرون راجلًا.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'كم راجلًا كان مع فرسان العباس (ع) في بعثة الماء؟', '["خمسة رجال","أربعون راجلًا","عشرون راجلًا","ستون راجلًا"]'::jsonb, 2, 25, 8, 'multi', 'رافق الفرسانَ العشرين راجلًا، فتمكنوا من ملء القرب والعودة بها.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'من كلّف بحماية جماعة العباس (ع) أثناء ملء القرب؟', '["زهير بن القين","حبيب بن مظاهر","نافع بن هلال","الحر الرياحي"]'::jsonb, 2, 25, 9, 'multi', 'تقدم نافع بن هلال نحو الفرات، وحمى الرجال حتى ملؤوا القرب وعادوا.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'متى جاء شمر يعرض الأمان على العباس وإخوته؟', '["بعد انتهاء القتال","صباح الثاني من المحرم","ليلة السابع من المحرم","عشية التاسع من المحرم"]'::jsonb, 3, 25, 10, 'multi', 'جاء شمر عشية الخميس لتسع مضين من المحرم، قبيل زحف الجيش على المخيم.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'كيف واجه العباس وإخوته عرض الأمان من شمر؟', '["قبلوه ثم عادوا","رفضوه ولعنوا أمانه","طلبوا مهلة للتفكير","اشترطوا خروج العيال"]'::jsonb, 1, 20, 11, 'multi', 'رفضوا العرض وقالوا لشمر إن أمانه لا قيمة له والحسين ابن رسول الله لا أمان له.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'ماذا أمر الحسين (ع) العباس حين اقترب جيش عمر بن سعد مساء تاسوعاء؟', '["العودة إلى المدينة","بدء القتال فورًا","استقبال القوم وسؤالهم عما جاء بهم","إحراق الخيام"]'::jsonb, 2, 25, 12, 'multi', 'طلب الحسين من العباس أن يركب ويلقى القوم ويسألهم عن سبب زحفهم.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'بماذا عاد العباس (ع) إلى الحسين بعد سؤال الجيش عن سبب زحفه؟', '["أنهم قرروا الانسحاب","أنهم يريدون النزول على حكم ابن زياد أو القتال","أنهم طلبوا الماء","أنهم بايعوا الحسين"]'::jsonb, 1, 25, 13, 'multi', 'أبلغه أن القوم خُيّروا بين إنزال الحسين على حكم ابن زياد وبين المناجزة.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'ما الطلب الذي بلغه العباس (ع) إلى القوم ليلة عاشوراء؟', '["تسليم السلاح","فتح طريق إلى الكوفة","تأخير القتال إلى الغد","إرسال وفد إلى يزيد"]'::jsonb, 2, 20, 14, 'multi', 'عاد العباس فطلب من القوم إمهال الحسين وأصحابه تلك الليلة للصلاة والدعاء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'أي أخ للعباس (ع) طلب منه أن يتقدم قبله لأنه لا ولد له؟', '["عبد الله بن علي","عثمان بن علي","جعفر بن علي","محمد بن علي"]'::jsonb, 0, 25, 15, 'multi', 'طلب العباس من أخيه لأبيه وأمه عبد الله أن يتقدم، وذكر أنه لا ولد له.', 'عاشوراء والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'أي عضوين فقدهما العباس (ع) وهو يدافع عن اللواء والقربة؟', '["يداه","قدماه","عيناه","كتفاه"]'::jsonb, 0, 20, 16, 'multi', 'تذكر رواية الإمام السجاد أن العباس آثر أخاه حتى قُطعت يداه.', 'عاشوراء والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'بماذا عوّض الله العباس (ع) عن يديه وفق حديث الإمام السجاد؟', '["رايتين يوم القيامة","قصرين في المدينة","جناحين يطير بهما في الجنة","عينين من الجنة"]'::jsonb, 2, 20, 17, 'multi', 'قال الإمام السجاد إن الله أبدله بيديه جناحين يطير بهما مع الملائكة في الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'بمن شبّه حديث الإمام السجاد تعويض العباس (ع) بجناحين؟', '["جعفر بن أبي طالب","حمزة بن عبد المطلب","عقيل بن أبي طالب","مسلم بن عقيل"]'::jsonb, 0, 25, 18, 'multi', 'شبّه الإمام السجاد ذلك بما جعله الله لجعفر بن أبي طالب من جناحين في الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_26, 'أي وصف لخّص به الإمام السجاد (ع) موقف عمه العباس؟', '["عاد إلى المدينة بعد المعركة","آثر وأبلى وفدى أخاه بنفسه","تولى كتابة رسائل الكوفة","قاد ركب السبايا إلى الشام"]'::jsonb, 1, 20, 19, 'multi', 'دعا له الإمام السجاد وذكر إيثاره وبلاءه وفداءه أخاه الحسين بنفسه.', 'الفضائل');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_27 uuid;
BEGIN
  SELECT id INTO v_sync_id_27 FROM quizzes WHERE title = 'سيرة الإمام علي زين العابدين (ع)' LIMIT 1;
  IF v_sync_id_27 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي زين العابدين (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_27;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'من هو والد الإمام علي زين العابدين (ع)؟', '["الإمام الحسين (ع)","الإمام الحسن (ع)","الإمام علي (ع)","الإمام محمد الباقر (ع)"]'::jsonb, 0, 15, 0, 'multi', 'الإمام السجاد هو علي بن الحسين بن علي بن أبي طالب (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'أين وُلد الإمام علي بن الحسين (ع) بحسب الشيخ المفيد؟', '["الكوفة","مكة","المدينة","دمشق"]'::jsonb, 2, 15, 1, 'multi', 'نص الشيخ المفيد في ترجمته على أن مولده كان بالمدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'في أي سنة وُلد الإمام السجاد (ع) وفق اختيار الشيخ المفيد؟', '["38 هـ","35 هـ","40 هـ","44 هـ"]'::jsonb, 0, 20, 2, 'multi', 'اختار المفيد أن مولده كان سنة ثمان وثلاثين للهجرة، مع وجود أقوال أخرى.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ما الكنية التي يذكرها الشيخ المفيد للإمام علي بن الحسين (ع)؟', '["أبو الحسن الثالث","أبو عبد الله","أبو جعفر","أبو محمد"]'::jsonb, 3, 20, 3, 'multi', 'يذكر المفيد أن كنيته أبو محمد، ويذكر له أيضًا أبا الحسن.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ما الذي حال دون قتل الإمام السجاد (ع) يوم عاشوراء؟', '["كان في المدينة","كان خارج كربلاء","كان رسولًا إلى الكوفة","كان مريضًا لا يقدر على القتال"]'::jsonb, 3, 20, 4, 'multi', 'كان مريضًا على فراشه، فبقي بعد استشهاد أبيه الحسين (ع).', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'من دافع عن الإمام السجاد (ع) حين أمر ابن زياد بقتله؟', '["السيدة زينب (ع)","أم كلثوم","الرباب","فاطمة بنت الحسين"]'::jsonb, 0, 20, 5, 'multi', 'تعلقت زينب بابن أخيها وقالت إن قُتل تُقتل معه، فكف ابن زياد عنه.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'إلى أي مدينة أُرسل الإمام السجاد (ع) بعد مجلس ابن زياد؟', '["دمشق","المدينة","مكة","البصرة"]'::jsonb, 0, 15, 6, 'multi', 'أرسل ابن زياد علي بن الحسين والنساء إلى يزيد في الشام.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ماذا طلب الإمام السجاد (ع) عند تهيئة عودة أهل البيت؟', '["إرسالهم إلى الكوفة","الإقامة الدائمة في دمشق","أمينًا يصحبهم إلى المدينة","تفريق الركب بين البلدان"]'::jsonb, 2, 20, 7, 'multi', 'اختار الرجوع إلى المدينة، وطلب رجلًا أمينًا يصحبهم في الطريق.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'من بشّر أهل المدينة بوصول ركب الإمام ونعا إليهم الحسين؟', '["أبو حمزة الثمالي","جابر بن عبد الله","بشير بن حذلم","سعيد بن المسيب"]'::jsonb, 2, 20, 8, 'multi', 'أمره الإمام أن يدخل المدينة فينعي الحسين ويخبر الناس بوصول الركب.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'إلى من انتقلت الإمامة بعد استشهاد الإمام الحسين (ع)؟', '["محمد بن الحنفية","علي بن الحسين (ع)","زيد بن علي","عبد الله بن جعفر"]'::jsonb, 1, 15, 9, 'multi', 'دلت النصوص التي أوردها المفيد على إمامة علي بن الحسين بعد أبيه.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ما الذي أودعه الحسين (ع) عند أم سلمة علامةً لطالب الإمامة؟', '["كتاب والي المدينة","راية المختار","خاتم ابن عباس","ودائع الإمامة"]'::jsonb, 3, 20, 10, 'multi', 'أودع الحسين أم سلمة ما قبضه علي بن الحسين من بعده، وجعل طلبه علامة.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ماذا كان يجني جليس الإمام السجاد (ع) بحسب رواية ابن أخته؟', '["علم الأنساب فقط","خشية أو علمًا مستفادًا","مالًا في كل مجلس","تكليفًا بكتابة الرسائل"]'::jsonb, 1, 20, 11, 'multi', 'قال الراوي إنه كان يقوم بخير: خشية تحدث في قلبه أو علم يستفيده.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'أي معنى أرشد إليه الإمام بقوله: «أحبونا حب الإسلام»؟', '["كتمان الانتساب لأهل البيت","ترك الفرائض للمحبة","المحبة بلا غلو","حصر المحبة في القرابة"]'::jsonb, 2, 20, 12, 'multi', 'نهى عن تجاوز المحبة التي يقتضيها الإسلام حتى تصير غلوًا وشينًا.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'ما الأثر الذي ظهر على مواضع سجود الإمام السجاد (ع)؟', '["أثر حناء دائم","ثفنات كركب البعير","جرح من سيف","وشم على الجبهة"]'::jsonb, 1, 20, 13, 'multi', 'أحدثت كثرة سجوده ثفنات، ولذلك اشتهر بلقب السجاد.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'كيف كان الإمام السجاد (ع) يعين فقراء المدينة ليلًا؟', '["يطلب منهم خدمة مزرعته","يرسلهم إلى بيت المال","يعلن أسماءهم في المسجد","يحمل إليهم الطعام سرًا"]'::jsonb, 3, 15, 14, 'multi', 'كان يحمل جراب الخبز على ظهره ليلًا إلى بيوت الفقراء من غير أن يعرفوه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'متى عرف فقراء المدينة صاحب عطاياهم السرية؟', '["عند ولادة الإمام الباقر","يوم عاشوراء","عند الرجوع من الشام","بعد وفاة الإمام"]'::jsonb, 3, 20, 15, 'multi', 'لما فقدوا الصدقات الخفية بعد وفاته عرفوا أنها كانت تأتيهم منه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'كيف قابل الإمام السجاد (ع) رجلًا شتمه ثم انصرف؟', '["أمر بحبسه","عرض عليه المعونة والصفح","هجره عامًا","أخذ منه غرامة"]'::jsonb, 1, 20, 16, 'multi', 'خاطبه بلين وسأله عن حاجته فأعانه، فتحول الرجل إلى الثناء عليه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'من أنشد قصيدته المشهورة في الإمام عند البيت الحرام؟', '["السيد الحميري","الكميت","دعبل الخزاعي","الفرزدق"]'::jsonb, 3, 15, 17, 'multi', 'أنشد الفرزدق قصيدته في مكانة الإمام حين تجاهله هشام بن عبد الملك.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'من الابن الذي نص الإمام السجاد (ع) على إمامته من بعده؟', '["زيد الشهيد","محمد الباقر (ع)","عبد الله الباهر","عمر الأشرف"]'::jsonb, 1, 15, 18, 'multi', 'انتقلت الإمامة بعده إلى ابنه أبي جعفر محمد الباقر (ع).', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'في أي سنة توفي الإمام السجاد (ع) وفق قول الشيخ المفيد؟', '["95 هـ","92 هـ","99 هـ","101 هـ"]'::jsonb, 0, 20, 19, 'multi', 'يذكر المفيد وفاته بالمدينة سنة خمس وتسعين للهجرة.', 'الاستشهاد والدفن');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'كم كان عمر الإمام السجاد (ع) عند وفاته بحسب الشيخ المفيد؟', '["57 سنة","50 سنة","63 سنة","70 سنة"]'::jsonb, 0, 20, 20, 'multi', 'صرح المفيد بأن عمره عند وفاته كان سبعًا وخمسين سنة.', 'الاستشهاد والدفن');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_27, 'أين دُفن الإمام علي بن الحسين (ع)؟', '["النجف","كربلاء","البقيع","الكاظمية"]'::jsonb, 2, 15, 21, 'multi', 'دُفن في بقيع المدينة مع عمه الإمام الحسن بن علي (ع).', 'الاستشهاد والدفن');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_28 uuid;
BEGIN
  SELECT id INTO v_sync_id_28 FROM quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1;
  IF v_sync_id_28 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام محمد الباقر (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_28;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'من هو والد الإمام محمد الباقر (ع)؟', '["الإمام الحسن المجتبى (ع)","الإمام علي زين العابدين (ع)","الإمام جعفر الصادق (ع)","زيد بن علي (ع)"]'::jsonb, 1, 15, 0, 'multi', 'هو محمد بن الإمام علي بن الحسين زين العابدين (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'إلى أي سبطي النبي (ص) ينتهي نسب الباقر (ع) من جهة أمه؟', '["الإمام الحسين (ع)","كلاهما من جهة الأب","لا ينتهي إلى أحدهما","الإمام الحسن (ع)"]'::jsonb, 3, 20, 1, 'multi', 'أمه أم عبد الله بنت الحسن بن الحسن، فينتهي نسبه من جهتها إلى الإمام الحسن (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ما اسم أم الإمام الباقر (ع) المشهور في المصادر؟', '["أم عبد الله بنت الحسن","فاطمة بنت أسد","أم فروة بنت القاسم","شهربانو"]'::jsonb, 0, 15, 2, 'multi', 'نص المفيد على أن أمه أم عبد الله بنت الحسن بن الحسن (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'في أي مدينة كانت ولادة الإمام الباقر (ع)؟', '["مكة المكرمة","الكوفة","المدينة المنورة","دمشق"]'::jsonb, 2, 15, 3, 'multi', 'كان مولده (ع) في المدينة المنورة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ما السنة الهجرية المشهورة لولادة الإمام الباقر (ع)؟', '["50 هـ","61 هـ","57 هـ","70 هـ"]'::jsonb, 2, 15, 4, 'multi', 'يورد الشيخ المفيد مولده سنة سبع وخمسين للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'أي واقعة كبرى أدركها الإمام الباقر (ع) في طفولته؟', '["كربلاء","بدر","صفين","فتح مكة"]'::jsonb, 0, 15, 5, 'multi', 'أدرك واقعة كربلاء سنة 61 هـ وهو صغير.', 'الطفولة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'بعد أي إمام تولّى الباقر (ع) الإمامة؟', '["الحسين (ع)","الحسن (ع)","جعفر الصادق (ع)","علي زين العابدين (ع)"]'::jsonb, 3, 15, 6, 'multi', 'تولى الإمامة بعد أبيه الإمام علي زين العابدين (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ماذا سلّم السجاد (ع) إلى الباقر (ع) في خبر الوصية؟', '["راية بدر وحدها","صندوقًا فيه سلاح النبي وكتبه","خاتم سليمان","مصحفًا بلا كتب أخرى"]'::jsonb, 1, 20, 7, 'multi', 'دفع إليه صندوقًا فيه سلاح رسول الله (ص) وكتبه علامة للوصية.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'أي صحابي بلّغ الإمام الباقر (ع) سلام رسول الله (ص)؟', '["جابر بن عبد الله الأنصاري","سلمان الفارسي","أبو ذر الغفاري","عمار بن ياسر"]'::jsonb, 0, 15, 8, 'multi', 'بلّغه جابر بن عبد الله الأنصاري سلام النبي (ص).', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ماذا طلب جابر من الباقر (ع) قبل أن يتعرف إليه؟', '["أن يقرأ صحيفة","أن يؤذن للصلاة","أن يقبل ثم يدبر","أن ينشد شعرًا"]'::jsonb, 2, 20, 9, 'multi', 'طلب منه أن يقبل ثم يدبر، فتأمل شمائله وتعرف إليه.', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'كيف أجاب الباقر (ع) سلام النبي (ص) الذي بلغه جابر؟', '["اكتفى بالصمت","رد السلام على النبي وعلى جابر","طلب كتمان الخبر","أرسل كتابًا للمدينة"]'::jsonb, 1, 20, 10, 'multi', 'رد السلام على رسول الله (ص)، وشكر جابرًا على تبليغه.', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'لماذا لُقّب الإمام محمد بن علي بـ«الباقر»؟', '["لكثرة سفره إلى البصرة","لأنه بنى بستانًا","لأنه أكبر إخوته","لأنه بقر العلم وأظهره"]'::jsonb, 3, 20, 11, 'multi', 'فسرت الرواية اللقب بتبقّره في العلم، أي شقه وإظهاره والتوسع فيه.', 'العلم والفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ما كنية الإمام محمد الباقر (ع) المشهورة؟', '["أبو محمد","أبو الحسن","أبو عبد الله","أبو جعفر"]'::jsonb, 3, 15, 12, 'multi', 'كنيته المشهورة أبو جعفر، ويقال له أبو جعفر الأول.', 'الأسماء والألقاب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'أي أخ للباقر (ع) حمل إليه كتب أهل الكوفة الداعية للخروج؟', '["محمد بن الحنفية","زيد بن علي","عبد الله بن جعفر","يحيى بن زيد"]'::jsonb, 1, 20, 13, 'multi', 'دخل زيد بن علي على أخيه أبي جعفر ومعه كتب أهل الكوفة.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'ما المبدأ الذي أكده الباقر (ع) لزيد بشأن أهل البيت؟', '["الطاعة للجميع معًا","ترك المودة عند الخلاف","الطاعة لواحد والمودة للجميع","المودة لأهل المدينة فقط"]'::jsonb, 2, 20, 14, 'multi', 'قال له إن الطاعة لواحد من أهل البيت والمودة للجميع.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'من أبرز أبناء الباقر (ع) الذي نص عليه بالإمامة بعده؟', '["جعفر الصادق (ع)","موسى الكاظم (ع)","زيد بن علي","إسماعيل بن جعفر"]'::jsonb, 0, 15, 15, 'multi', 'نص الإمام الباقر (ع) على ابنه جعفر الصادق (ع) من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'كم ولدًا تذكر الرواية التي أوردها المجلسي للباقر (ع)؟', '["خمسة","سبعة","تسعة","أحد عشر"]'::jsonb, 1, 15, 16, 'multi', 'أورد المجلسي خبرًا ينص على أن أولاده (ع) كانوا سبعة.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'متى توفي الإمام الباقر (ع) بحسب قول الشيخ المفيد؟', '["114 هـ","110 هـ","117 هـ","121 هـ"]'::jsonb, 0, 20, 17, 'multi', 'ذكر الشيخ المفيد وفاته سنة أربع عشرة ومائة للهجرة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'في أي مدينة كانت وفاة الإمام الباقر (ع)؟', '["الكوفة","دمشق","مكة المكرمة","المدينة المنورة"]'::jsonb, 3, 15, 18, 'multi', 'كانت وفاته (ع) في المدينة المنورة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_28, 'أين دُفن الإمام محمد الباقر (ع)؟', '["النجف","كربلاء","البقيع","الكاظمية"]'::jsonb, 2, 15, 19, 'multi', 'دفن في البقيع مع أبيه الإمام السجاد وعمه الإمام الحسن (ع).', 'الاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_29 uuid;
BEGIN
  SELECT id INTO v_sync_id_29 FROM quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1;
  IF v_sync_id_29 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام جعفر الصادق (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_29;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'من هو والد الإمام جعفر الصادق (ع)؟', '["الإمام علي زين العابدين (ع)","الإمام محمد الباقر (ع)","الإمام موسى الكاظم (ع)","زيد بن علي (ع)"]'::jsonb, 1, 15, 0, 'multi', 'أبوه الإمام محمد الباقر (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما كنية الإمام جعفر الصادق (ع) الأشهر؟', '["أبو جعفر","أبو الحسن","أبو محمد","أبو عبد الله"]'::jsonb, 3, 15, 1, 'multi', 'كنيته الأشهر أبو عبد الله.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'من هي أم الإمام جعفر الصادق (ع)؟', '["أم فروة بنت القاسم","أم عبد الله بنت الحسن","حميدة المصفاة","نجمة خاتون"]'::jsonb, 0, 15, 2, 'multi', 'أمه أم فروة بنت القاسم بن محمد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'في أي مدينة ولد الإمام الصادق (ع)؟', '["مكة المكرمة","الكوفة","المدينة المنورة","دمشق"]'::jsonb, 2, 15, 3, 'multi', 'كان مولده (ع) في المدينة المنورة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما سنة ولادة الإمام الصادق (ع) عند الشيخ المفيد؟', '["80 هـ","95 هـ","83 هـ","100 هـ"]'::jsonb, 2, 15, 4, 'multi', 'ذكر المفيد أن ولادته كانت سنة 83 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'أي إمام سبق الصادق (ع) مباشرة في الإمامة؟', '["الإمام محمد الباقر (ع)","الإمام زين العابدين (ع)","الإمام موسى الكاظم (ع)","الإمام الحسن المجتبى (ع)"]'::jsonb, 0, 15, 5, 'multi', 'تولى الإمامة بعد أبيه الإمام الباقر (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'بماذا أوصى الباقر (ع) ابنه جعفرًا عند قرب وفاته؟', '["أن يغادر المدينة","أن يعتزل تعليم الناس","أن يبيع كتبه","أن يحسن إلى أصحابه"]'::jsonb, 3, 20, 6, 'multi', 'أوصاه بأصحابه خيرًا، فوعد بتفقيههم.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ماذا فعل الباقر (ع) حين سئل عمن يقوم بالأمر بعده؟', '["أشار إلى زيد بن علي","وضع يده على جعفر (ع)","كتب اسم إسماعيل","امتنع عن الجواب"]'::jsonb, 1, 20, 7, 'multi', 'وضع يده على جعفر وعيّنه قائمًا بالأمر بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'لماذا أشهد الباقر (ع) جماعة على وصيته إلى جعفر؟', '["لتكون له حجة ولا يغلب","لتقسيم أموال التجارة","لتعيين والي المدينة","لإعلان رحلة إلى مكة"]'::jsonb, 0, 20, 8, 'multi', 'أراد أن تكون لجعفر حجة وألا يقال إنه لم يوص إليه.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كم سنة دامت إمامة الإمام الصادق (ع)؟', '["19 سنة","25 سنة","34 سنة","40 سنة"]'::jsonb, 2, 15, 9, 'multi', 'دامت إمامته أربعًا وثلاثين سنة.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كم راويًا جمع أصحاب الحديث ممن رووا عن الصادق (ع)؟', '["ألفان","أربعة آلاف","سبعمائة","عشرة آلاف"]'::jsonb, 1, 20, 10, 'multi', 'جمع أصحاب الحديث أسماء أربعة آلاف راوٍ عنه.', 'العلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كيف انتشر علم الإمام الصادق (ع) في الآفاق؟', '["بقي محصورًا في أسرته","اقتصر على رسائل سياسية","لم يروه إلا أهل المدينة","حمله الرواة إلى البلدان"]'::jsonb, 3, 20, 11, 'multi', 'حمل الرواة علومه إلى البلدان فانتشر ذكره.', 'العلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'إلى من تنتهي سلسلة حديث الإمام الصادق (ع)؟', '["إلى علماء المدينة فقط","إلى كتب اليونان","إلى اجتهاده الشخصي","إلى رسول الله ثم الله"]'::jsonb, 3, 20, 12, 'multi', 'حديثه عن آبائه عن الرسول، وحديث الرسول قول الله.', 'العلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'من الشاب الذي قدّمه الصادق (ع) لمناظرة الشامي؟', '["جابر الجعفي","هشام بن الحكم","المفضل بن عمر","أبان بن تغلب"]'::jsonb, 1, 15, 13, 'multi', 'قدّم هشام بن الحكم لمناظرة الشامي في الإمامة.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كيف وصف الصادق (ع) نصرة هشام بن الحكم؟', '["يكثر السفر وحده","يجمع المال لأهله","ينصرنا بقلبه ولسانه ويده","يعتزل الخصومات كلها"]'::jsonb, 2, 20, 14, 'multi', 'قال عنه: ناصرنا بقلبه ولسانه ويده.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'أين كان مجلس مناظرة الشامي مع أصحاب الصادق (ع)؟', '["قرب حرم مكة","في مسجد الكوفة","في قصر دمشق","في مقبرة البقيع"]'::jsonb, 0, 20, 15, 'multi', 'كان المجلس في خيمة بطرف الحرم قبل الحج.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'بماذا استدل الصادق (ع) لأبي شاكر على حدوث العالم؟', '["بسفينة في البحر","ببيضة تنفلق عن طائر","بنخلة مثمرة","بحركة الشمس"]'::jsonb, 1, 20, 16, 'multi', 'استدل ببيضة محكمة تنفلق عن صورة طائر.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ماذا قال الصادق (ع) عن دور الحواس في الاستدلال؟', '["هي أدلة ويحتاج الاستنباط إلى العقل","تكفي وحدها لكل معرفة","لا قيمة لها مطلقًا","تختص بمعرفة الأحكام"]'::jsonb, 0, 20, 17, 'multi', 'الحواس أدلة، ولا يتم الاستنباط بها من دون العقل.', 'العلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'إلى كم أصل لخّص الصادق (ع) ما لا يسع الناس جهله؟', '["ثلاثة أصول","خمسة أصول","سبعة أصول","أربعة أصول"]'::jsonb, 3, 15, 18, 'multi', 'جمع ما لا يسع جهله في أربعة أصول.', 'الحكمة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما موقف الصادق (ع) من تشبيه الله بالأشياء؟', '["أجازه للتقريب","خصه بالأجرام","نفى أن يشبهه شيء","توقف فيه"]'::jsonb, 2, 15, 19, 'multi', 'نفى تشبيه الله بشيء أو تشبيه شيء به.', 'التوحيد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما الذي عدّه الصادق (ع) غفلةً في موعظته؟', '["قلة السفر","تأخير التوبة","ترك التجارة","الصمت الطويل"]'::jsonb, 1, 15, 20, 'multi', 'عدّ تأخير التوبة اغترارًا وغفلة.', 'الحكمة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما الذي يكمل السعادة في حكمة الإمام الصادق (ع)؟', '["كثرة المال والولد","طول العمر والسفر","العزلة وترك العمل","اجتماع النية والقدرة والتوفيق والإصابة"]'::jsonb, 3, 20, 21, 'multi', 'تكتمل السعادة باجتماع النية والقدرة والتوفيق والإصابة.', 'الحكمة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'من الإمام الذي نص عليه الصادق (ع) من بعده؟', '["الإمام موسى الكاظم (ع)","إسماعيل بن جعفر","عبد الله الأفطح","محمد الديباج"]'::jsonb, 0, 15, 22, 'multi', 'نص على ابنه الإمام موسى الكاظم (ع).', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كم ولدًا يذكر المفيد للإمام الصادق (ع)؟', '["سبعة","اثنا عشر","عشرة","أربعة عشر"]'::jsonb, 2, 15, 23, 'multi', 'ذكر المفيد له عشرة أولاد: سبعة ذكور وثلاث إناث.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'في أي شهر توفي الإمام الصادق (ع) بحسب المفيد؟', '["محرم","رمضان","شوال","ذو الحجة"]'::jsonb, 2, 15, 24, 'multi', 'ذكر المفيد أن وفاته كانت في شهر شوال.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'ما السنة الهجرية لوفاة الإمام الصادق (ع)؟', '["148 هـ","114 هـ","183 هـ","203 هـ"]'::jsonb, 0, 15, 25, 'multi', 'توفي سنة 148 هـ.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'كم كان عمر الإمام الصادق (ع) عند وفاته؟', '["55 سنة","70 سنة","75 سنة","65 سنة"]'::jsonb, 3, 15, 26, 'multi', 'توفي وله خمس وستون سنة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_29, 'أين دفن الإمام جعفر الصادق (ع)؟', '["النجف","البقيع","الكاظمية","كربلاء"]'::jsonb, 1, 15, 27, 'multi', 'دفن في البقيع مع عدد من آبائه (ع).', 'الاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_30 uuid;
BEGIN
  SELECT id INTO v_sync_id_30 FROM quizzes WHERE title = 'سيرة الإمام موسى الكاظم (ع)' LIMIT 1;
  IF v_sync_id_30 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام موسى الكاظم (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_30;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'أين كانت ولادة الإمام موسى الكاظم (ع) بحسب الإرشاد؟', '["المدينة المنورة","الأبواء","مكة المكرمة","الكوفة"]'::jsonb, 1, 15, 0, 'multi', 'يذكر الشيخ المفيد أن مولده (ع) كان في الأبواء بين مكة والمدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'في أي سنة وُلد الإمام الكاظم (ع) وفق رواية الإرشاد؟', '["120 هـ","132 هـ","148 هـ","128 هـ"]'::jsonb, 3, 15, 1, 'multi', 'نص الإرشاد على أن ولادته في الأبواء كانت سنة 128 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'من هو والد الإمام موسى الكاظم (ع)؟', '["الإمام جعفر الصادق (ع)","الإمام محمد الباقر (ع)","الإمام علي الرضا (ع)","إسماعيل بن جعفر"]'::jsonb, 0, 15, 2, 'multi', 'هو موسى بن الإمام جعفر الصادق (ع)، وقد نص أبوه على إمامته.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما اسم أم الإمام موسى الكاظم (ع) في الإرشاد؟', '["أم فروة بنت القاسم","نجمة","حميدة البربرية","سمانة"]'::jsonb, 2, 15, 3, 'multi', 'سمّى الشيخ المفيد أمه حميدة البربرية ووصفها بأنها أم ولد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما الكنية الأشهر للإمام موسى بن جعفر (ع) في أبواب الكافي؟', '["أبو جعفر","أبو محمد","أبو الحسن","أبو عبد الله"]'::jsonb, 2, 15, 4, 'multi', 'يعبّر الكليني عنه في باب النص عليه بأبي الحسن موسى (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'بعد أي إمام تولّى موسى الكاظم (ع) الإمامة؟', '["جعفر الصادق (ع)","محمد الباقر (ع)","علي الرضا (ع)","محمد الجواد (ع)"]'::jsonb, 0, 15, 5, 'multi', 'تولى الإمامة بعد وفاة أبيه الإمام جعفر الصادق (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'من قال له الصادق (ع): «هو صاحبكم» مشيرًا إلى موسى (ع)؟', '["هشام بن الحكم","صفوان الجمال","علي بن يقطين","المفضّل بن عمر"]'::jsonb, 3, 20, 6, 'multi', 'سأل المفضّل عن صاحب الأمر بعد الصادق، فأشار إلى موسى (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما علامة الإمام بعد الصادق (ع) في خبر فيض بن المختار؟', '["أنه أكبر أبنائه سنًا","أنه لا يلهو ولا يلعب","أنه يقيم في الكوفة","أنه يتولى القضاء"]'::jsonb, 1, 20, 7, 'multi', 'وجّه الصادق فيضًا إلى ملاحظة من لا يلهو ولا يلعب، فظهر موسى بهذه الصفة.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'بماذا وصف المفيد الإمام الكاظم (ع) بين أهل زمانه؟', '["أعبدهم وأسخاهم وأكرمهم نفسًا","أكثرهم اشتغالًا بالتجارة","أشهرهم بقيادة الجيوش","أوسعهم ولايةً في الدولة"]'::jsonb, 0, 20, 8, 'multi', 'عدّه المفيد أعبد أهل زمانه وأفقههم وأسخاهم كفًا وأكرمهم نفسًا.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما الدعاء الذي كرره الإمام الكاظم (ع) في سجوده ليلًا؟', '["رب زدني مالًا وولدًا","اللهم انصرني بالسيف","عظم الذنب من عبدك فليحسن العفو من عندك","رب اجعلني ملكًا"]'::jsonb, 2, 20, 9, 'multi', 'نقل المفيد طول سجوده وتكراره طلب العفو بهذه العبارة.', 'العبادة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'كيف كان الكاظم (ع) يعامل من بلغه عنه أذى؟', '["يهجره دائمًا","يرسل إليه صرّة من المال","يرفع أمره إلى الوالي","يأمر بإبعاده"]'::jsonb, 1, 15, 10, 'multi', 'كان إذا بلغه عن رجل ما يؤذيه بعث إليه بصرة من المال.', 'الأخلاق');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما مقدار صرر الإمام الكاظم (ع) المشهورة لأهل المدينة؟', '["من دينار إلى 5 دنانير","2000 دينار دائمًا","10 دراهم فقط","من 200 إلى 300 دينار"]'::jsonb, 3, 20, 11, 'multi', 'ذكر المفيد أن صراره كانت تتراوح بين مئتي دينار وثلاثمئة.', 'الكرم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'بأي لقب وصف المفيد الإمام الكاظم (ع) في صدر ترجمته؟', '["باقر العلم","زين العابدين","الرضا","العبد الصالح"]'::jsonb, 3, 15, 12, 'multi', 'صدر المفيد ترجمته بذكر أبي الحسن موسى بن جعفر العبد الصالح.', 'الألقاب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'أي ابن نصّ الكاظم (ع) على إمامته من بعده؟', '["إبراهيم بن موسى","علي الرضا (ع)","العباس بن موسى","إسحاق بن موسى"]'::jsonb, 1, 15, 13, 'multi', 'نص الإمام الكاظم على ابنه علي الرضا (ع) للإمامة بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'أي صاحب للكاظم (ع) عمل في بلاط هارون لمصالح المؤمنين؟', '["زرارة بن أعين","جابر الجعفي","علي بن يقطين","أبان بن تغلب"]'::jsonb, 2, 15, 14, 'multi', 'بقي علي بن يقطين في موقعه وقضى حوائج المؤمنين بتوجيه الإمام.', 'الأصحاب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'لماذا غيّر الكاظم (ع) وضوء علي بن يقطين مؤقتًا؟', '["لدفع تهمة التشيع عنه","لأنه كان مسافرًا","لعدم وجود الماء","لتعليمه وضوء الجبيرة"]'::jsonb, 0, 20, 15, 'multi', 'وجّهه مؤقتًا إلى هيئة يراقبها الرشيد، فلما اندفعت التهمة أعاده إلى وضوئه.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'أي خليفة أمر بأخذ الإمام الكاظم (ع) من المدينة وسجنه؟', '["أبو العباس السفاح","هارون الرشيد","المأمون","المعتصم"]'::jsonb, 1, 15, 16, 'multi', 'قبض هارون على الإمام في المدينة ثم وجّه به إلى العراق وأطال حبسه.', 'المحنة والسجون');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'إلى أي مدينة نُقل الكاظم (ع) ليُحبس عند عيسى بن جعفر؟', '["البصرة","الكوفة","سامراء","واسط"]'::jsonb, 0, 15, 17, 'multi', 'وجّه هارون الإمام إلى البصرة فحبسه عيسى بن جعفر قبل نقله إلى بغداد.', 'المحنة والسجون');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'إلى من كتب عيسى بن جعفر بعد طول حبس الكاظم (ع)؟', '["جعفر البرمكي","محمد الأمين","والي المدينة","هارون الرشيد"]'::jsonb, 3, 20, 18, 'multi', 'كتب عيسى إلى هارون طالبًا إعفاءه بعدما لم يجد على الإمام حجة.', 'المحنة والسجون');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'عند من كان آخر سجن للإمام الكاظم (ع)؟', '["عيسى بن جعفر","الفضل بن الربيع","السندي بن شاهك","الفضل بن يحيى"]'::jsonb, 2, 15, 19, 'multi', 'كان آخر مواضع حبسه حبس السندي بن شاهك في بغداد.', 'المحنة والسجون');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ماذا صنع السندي بعد وفاة الإمام الكاظم (ع)؟', '["دفنه سرًا بلا حضور","أحضر فقهاء ووجوهًا لمعاينة الجثمان","أرسله إلى المدينة","منع إعلان موته"]'::jsonb, 1, 20, 20, 'multi', 'أحضر فقهاء ووجوه بغداد وأراهم الجثمان لإثبات عدم وجود اعتداء ظاهر.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'ما سبب وفاة الكاظم (ع) الذي أورده الشيخ المفيد؟', '["جرح في معركة","مرض في الحج","سقوط أثناء السفر","السم في الطعام وقيل في تمر"]'::jsonb, 3, 20, 21, 'multi', 'ذكر المفيد أن السندي نفذ قتله بالسم في طعام، وقيل في تمر.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'في أي سنة توفي الإمام الكاظم (ع) بحسب الإرشاد؟', '["183 هـ","173 هـ","188 هـ","203 هـ"]'::jsonb, 0, 15, 22, 'multi', 'نص الشيخ المفيد على وفاته سنة ثلاث وثمانين ومائة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'كم كان عمر الإمام الكاظم (ع) عند وفاته وفق الإرشاد؟', '["47 سنة","60 سنة","55 سنة","75 سنة"]'::jsonb, 2, 15, 23, 'multi', 'صرح المفيد بأن عمره عند وفاته كان خمسًا وخمسين سنة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'كم استمرت إمامة الكاظم (ع) بعد أبيه بحسب الإرشاد؟', '["20 سنة","25 سنة","35 سنة","50 سنة"]'::jsonb, 2, 15, 24, 'multi', 'ذكر المفيد أنه عاش بعد أبيه خمسًا وثلاثين سنة مدة إمامته.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_30, 'أين دُفن الإمام موسى الكاظم (ع) بحسب الإرشاد؟', '["مقابر قريش عند باب التبن","البقيع","النجف","سامراء"]'::jsonb, 0, 15, 25, 'multi', 'دُفن في مقابر قريش عند باب التبن في بغداد، وهو موضع الكاظمية اليوم.', 'الاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_31 uuid;
BEGIN
  SELECT id INTO v_sync_id_31 FROM quizzes WHERE title = 'سيرة الإمام علي الرضا (ع)' LIMIT 1;
  IF v_sync_id_31 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي الرضا (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_31;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من هو والد الإمام علي الرضا (ع)؟', '["الإمام جعفر الصادق (ع)","الإمام موسى الكاظم (ع)","الإمام محمد الباقر (ع)","الإمام محمد الجواد (ع)"]'::jsonb, 1, 20, 0, 'multi', 'الإمام الرضا هو علي بن موسى، ابن الإمام موسى الكاظم (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'في أي مدينة وُلد الإمام الرضا (ع)؟', '["مكة المكرمة","الكوفة","البصرة","المدينة المنورة"]'::jsonb, 3, 20, 1, 'multi', 'وُلد الإمام الرضا (ع) في المدينة المنورة ونشأ فيها.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ما الاسم المشهور لأم الإمام الرضا (ع) في خبر مولده؟', '["نجمة","حميدة","حكيمة","سمانة"]'::jsonb, 0, 20, 2, 'multi', 'يذكر خبر مولده أن أمه أم ولد تسمى نجمة، ووردت لها أسماء أخرى.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ما كنية الإمام علي الرضا (ع)؟', '["أبو جعفر","أبو محمد","أبو الحسن","أبو عبد الله"]'::jsonb, 2, 20, 3, 'multi', 'كنيته أبو الحسن، ويعرف في كتب الحديث بأبي الحسن الثاني.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'أي إمام نصّ على إمامة علي الرضا (ع) من بعده؟', '["الإمام جعفر الصادق (ع)","الإمام محمد الجواد (ع)","الإمام موسى الكاظم (ع)","الإمام علي الهادي (ع)"]'::jsonb, 2, 20, 4, 'multi', 'وردت نصوص عن الإمام الكاظم (ع) بتعيين ابنه علي والرجوع إليه.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من الإمام الذي تولّى الإمامة بعد الرضا (ع)؟', '["الإمام محمد الجواد (ع)","الإمام علي الهادي (ع)","الإمام الحسن العسكري (ع)","الإمام موسى الكاظم (ع)"]'::jsonb, 0, 20, 5, 'multi', 'نص الإمام الرضا على ابنه محمد الجواد (ع)، الإمام التاسع.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ماذا كان يفعل الإمام الرضا (ع) بالطعام قبل أن يأكل؟', '["يدخره كله للغد","يرسله إلى المأمون","يمنع الخدم منه","يضع من أحسنه للمساكين"]'::jsonb, 3, 25, 6, 'multi', 'كان يضع من أطايب الطعام في صحفة ويأمر بها للمساكين.', 'الأخلاق والعبادة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'كيف عامل الإمام الرضا (ع) غلمانه عند الطعام؟', '["أوقفهم طوال الطعام","أجلسهم معه ولم يقم الآكل","فصل بينهم بحسب الأصل","منعهم من الأكل معه"]'::jsonb, 1, 25, 7, 'multi', 'كان يجلس مماليكه معه، ولا يستخدم من كان منهم يأكل حتى يفرغ.', 'الأخلاق والعبادة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'أي سورة أكثر الإمام الرضا (ع) تلاوتها في وصف سفره؟', '["سورة التوحيد","سورة البقرة","سورة المائدة","سورة الأنفال"]'::jsonb, 0, 20, 8, 'multi', 'وصف رجاء كثرة قراءته لسورة «قل هو الله أحد» في صلاته وذكره.', 'الأخلاق والعبادة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'كيف أجاب الإمام الرضا (ع) أصحاب اللغات المختلفة؟', '["بالعربية فقط","بالفارسية فقط","بلغة كل واحد منهم","بمترجم دائمًا"]'::jsonb, 2, 20, 9, 'multi', 'روى أبو الصلت أن الإمام كان يكلم الناس بألسنتهم.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'بماذا عُرف مجلس الإمام الرضا (ع) في المدينة؟', '["قيادة جند العباسيين","الإفتاء في مسجد النبي (ص)","جمع ضرائب الحجاز","إدارة بريد الدولة"]'::jsonb, 1, 20, 10, 'multi', 'ذكر الإمام أنه كان يجلس في الروضة ويفتي الناس.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من الخليفة الذي استدعى الإمام الرضا (ع) إلى خراسان؟', '["هارون الرشيد","الأمين العباسي","المتوكل العباسي","المأمون العباسي"]'::jsonb, 3, 20, 11, 'multi', 'استدعى المأمون الإمام من المدينة إلى مرو ثم عرض عليه ولاية العهد.', 'الرحلة إلى خراسان');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من صحب الإمام الرضا (ع) من المدينة بأمر المأمون؟', '["الفضل بن الربيع","هرثمة بن أعين","دعبل الخزاعي","رجاء بن أبي الضحاك"]'::jsonb, 3, 20, 12, 'multi', 'كُلّف رجاء بن أبي الضحاك بإشخاص الإمام إلى المأمون.', 'الرحلة إلى خراسان');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'في أي مدينة ألقى الإمام الرضا (ع) حديث سلسلة الذهب؟', '["قم","نيسابور","بغداد","الكوفة"]'::jsonb, 1, 20, 13, 'multi', 'أملى الإمام حديث التوحيد للمحدثين عند خروجه من نيسابور.', 'الرحلة إلى خراسان');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ما العبارة المركزية في حديث سلسلة الذهب؟', '["طلب العلم فريضة","الأعمال بالنيات","كلمة لا إله إلا الله حصني","المؤمن مرآة المؤمن"]'::jsonb, 2, 20, 14, 'multi', 'جاء فيه عن الله تعالى: «كلمة لا إله إلا الله حصني».', 'الرحلة إلى خراسان');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ما المنصب الذي قبله الإمام الرضا (ع) بعد إصرار المأمون؟', '["ولاية العهد","القضاء العام","قيادة الجيش","ولاية المدينة"]'::jsonb, 0, 20, 15, 'multi', 'رفض الخلافة ثم قبل ولاية العهد تحت الإلزام وبشروط.', 'ولاية العهد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'أي شرط وضعه الإمام الرضا (ع) لقبول ولاية العهد؟', '["أن يقود الجيش","ألا يولي ولا يعزل","أن ينتقل المأمون للمدينة","أن يجبي الخراج"]'::jsonb, 1, 25, 16, 'multi', 'اشترط ألا يأمر أو ينهى أو يولي أو يعزل أو يغير رسمًا قائمًا.', 'ولاية العهد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'ما لون الشعار بعد عقد ولاية العهد للإمام الرضا (ع)؟', '["الأخضر","الأسود","الأبيض","الأحمر"]'::jsonb, 0, 20, 17, 'multi', 'أمر المأمون بترك السواد العباسي ولبس الخضرة.', 'ولاية العهد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من جمع الإمام الرضا (ع) بأهل الأديان للمناظرة؟', '["الأمين العباسي","هارون الرشيد","محمد بن جعفر","المأمون العباسي"]'::jsonb, 3, 20, 18, 'multi', 'جمع المأمون رؤساء الملل والمتكلمين لمناظرة الإمام.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من مثّل النصارى في مناظرة الإمام الرضا (ع)؟', '["رأس الجالوت","الهربذ الأكبر","الجاثليق","عمران الصابي"]'::jsonb, 2, 20, 19, 'multi', 'ناظر الإمام الجاثليق، رأس النصارى، واحتج عليه بما يقر به من الإنجيل.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من أعلن الإسلام بعد مناظرة الإمام الرضا (ع)؟', '["الجاثليق","عمران الصابي","رأس الجالوت","سليمان المروزي"]'::jsonb, 1, 20, 20, 'multi', 'أعلن عمران الصابي الشهادتين بعد حواره مع الإمام في التوحيد.', 'المناظرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'من أنشد أمام الإمام الرضا (ع) قصيدته التائية؟', '["أبو نواس","الكميت الأسدي","السيد الحميري","دعبل الخزاعي"]'::jsonb, 3, 20, 21, 'multi', 'أنشد دعبل قصيدته التي مطلعها «مدارس آيات خلت من تلاوة».', 'المواقف والآداب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'كيف خرج الإمام الرضا (ع) لصلاة العيد؟', '["حافيًا مكبرًا على هيئة النبي","في موكب عسكري عباسي","لم يخرج من منزله","أرسل الفضل بن سهل"]'::jsonb, 0, 25, 22, 'multi', 'خرج حافيًا مشمرًا مكبرًا، فأمر المأمون بإرجاعه قبل الصلاة.', 'المواقف والآداب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_31, 'أين دُفن الإمام الرضا (ع)؟', '["البقيع في المدينة","الكاظمية في بغداد","سناباد من طوس بجوار قبر هارون","النجف قرب أمير المؤمنين"]'::jsonb, 2, 20, 23, 'multi', 'دُفن بسناباد من طوس في الموضع المجاور لقبر هارون الرشيد.', 'الاستشهاد والمرقد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_32 uuid;
BEGIN
  SELECT id INTO v_sync_id_32 FROM quizzes WHERE title = 'سيرة الإمام محمد الجواد (ع)' LIMIT 1;
  IF v_sync_id_32 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام محمد الجواد (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_32;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'من هو والد الإمام محمد الجواد (ع)؟', '["الإمام موسى الكاظم (ع)","الإمام علي الرضا (ع)","الإمام علي الهادي (ع)","الإمام جعفر الصادق (ع)"]'::jsonb, 1, 20, 0, 'multi', 'هو محمد بن علي بن موسى، ابن الإمام علي الرضا (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'في أي مدينة وُلد الإمام محمد الجواد (ع)؟', '["مكة المكرمة","بغداد","طوس","المدينة المنورة"]'::jsonb, 3, 20, 1, 'multi', 'تذكر كتب السيرة الإمامية أن مولده (ع) كان في المدينة المنورة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'في أي سنة هجرية وُلد الإمام الجواد (ع)؟', '["195هـ","183هـ","148هـ","212هـ"]'::jsonb, 0, 20, 2, 'multi', 'وُلد الإمام الجواد (ع) سنة خمس وتسعين ومائة للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'ما الشهر المذكور لمولد الإمام الجواد (ع) في رواية الكافي؟', '["شهر رجب","شهر شعبان","شهر رمضان","شهر محرم"]'::jsonb, 2, 20, 3, 'multi', 'نص الكافي على أن مولده (ع) كان في شهر رمضان سنة 195هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'ما الاسم المذكور لأم الإمام الجواد (ع) في الكافي؟', '["نجمة","حميدة","سبيكة النوبية","سمانة"]'::jsonb, 2, 20, 4, 'multi', 'ذكر الكليني أن أمه أم ولد يقال لها سبيكة النوبية.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'ما كنية الإمام محمد الجواد (ع)؟', '["أبو جعفر","أبو الحسن","أبو محمد","أبو عبد الله"]'::jsonb, 0, 20, 5, 'multi', 'كنيته أبو جعفر، ويقال له أبو جعفر الثاني تمييزًا له عن الإمام الباقر (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'أي إمام نصّ على إمامة محمد الجواد (ع) بعده؟', '["الإمام موسى الكاظم (ع)","الإمام علي الهادي (ع)","الإمام الحسن العسكري (ع)","الإمام علي الرضا (ع)"]'::jsonb, 3, 20, 6, 'multi', 'روى الكافي نصوصًا متعددة عن الإمام الرضا (ع) تشير إلى ابنه أبي جعفر من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'بمن قارن الإمام الرضا (ع) صغر سن ابنه عند بيان إمامته؟', '["موسى بن عمران (ع)","عيسى بن مريم (ع)","إبراهيم الخليل (ع)","نوح (ع)"]'::jsonb, 1, 20, 7, 'multi', 'احتج الإمام الرضا (ع) بأن عيسى (ع) قام بالحجة في سن صغيرة.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'إلى من وجّه الإمام الرضا (ع) صاحبَ الابن الذي طلب الدعاء له؟', '["إلى أبي جعفر الجواد (ع)","إلى علي بن جعفر","إلى يحيى بن أكثم","إلى المأمون"]'::jsonb, 0, 25, 8, 'multi', 'قال الرضا (ع) إن الغلام مولى أبي جعفر، وأمر بإرساله إليه ليدعو له.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'كيف أظهر علي بن جعفر احترامه للإمام الجواد (ع) في مسجد النبي؟', '["أرسل إليه كتابًا","قدّمه لإمامة الصلاة فقط","وثب فقبّل يده وعظّمه","أهداه فرسًا"]'::jsonb, 2, 25, 9, 'multi', 'وثب علي بن جعفر بلا حذاء ولا رداء، وقبّل يد الإمام الجواد (ع) وعظّمه.', 'المواقف والفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'بأي نبي استشهد الإمام الجواد (ع) في جواب الاعتراض على حداثة سنه؟', '["داود (ع)","يحيى بن زكريا (ع)","إسماعيل (ع)","أيوب (ع)"]'::jsonb, 1, 20, 10, 'multi', 'استشهد بقوله تعالى في يحيى (ع): «وآتيناه الحكم صبيًا» لإمكان إيتاء الحكم في الصغر.', 'العلم والإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'كم ذكر الإمام الجواد (ع) أن عمره كان عند جوابه عن حداثة سنه؟', '["خمس سنوات","اثنتا عشرة سنة","خمس عشرة سنة","تسع سنوات"]'::jsonb, 3, 20, 11, 'multi', 'قال (ع) في جوابه: «وأنا ابن تسع سنين».', 'العلم والإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'من زوّج الإمام الجواد (ع) ابنته أم الفضل؟', '["المعتصم العباسي","هارون الرشيد","الأمين العباسي","المأمون العباسي"]'::jsonb, 3, 20, 12, 'multi', 'زوّج المأمون ابنته أم الفضل من الإمام أبي جعفر الجواد (ع).', 'محطات الحياة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'من اختاره العباسيون لاختبار علم الإمام الجواد (ع) أمام المأمون؟', '["أحمد بن أبي دؤاد","يحيى بن أكثم","الفضل بن سهل","الريان بن شبيب"]'::jsonb, 1, 20, 13, 'multi', 'اتفق العباسيون مع يحيى بن أكثم على أن يسأل الإمام مسألة يختبر بها علمه.', 'المناظرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'ما موضوع المسألة التي طرحها يحيى بن أكثم على الإمام الجواد (ع)؟', '["ميراث ذوي الأرحام","زكاة الأنعام","حكم محرم قتل صيدًا","عدة المطلقة"]'::jsonb, 2, 20, 14, 'multi', 'سأل يحيى عن حكم محرم قتل صيدًا، ففصّل الإمام صور المسألة المتعددة.', 'المناظرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'ما أول تفصيل طلبه الإمام الجواد (ع) في مسألة قتل الصيد؟', '["أقتله في حل أم حرم؟","أكان الصائد غنيًا؟","أكان الصيد مملوكًا؟","أكان معه شاهدان؟"]'::jsonb, 0, 25, 15, 'multi', 'بدأ الإمام بتفريع السؤال: أقتله في حل أم حرم، ثم ذكر أحوالًا أخرى تغير الحكم.', 'المناظرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'كيف كان أثر تفصيل الإمام لمسألة الصيد على يحيى بن أكثم؟', '["أجاب عن كل الفروع","تحيّر وظهر عجزه","أنهى المجلس غاضبًا","حوّل السؤال إلى المأمون"]'::jsonb, 1, 20, 16, 'multi', 'تحيّر يحيى وبان العجز في وجهه بعد أن فصّل الإمام وجوه المسألة.', 'المناظرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'إلى أي مدينة عاد الإمام الجواد (ع) مع أم الفضل بعد الزواج؟', '["المدينة المنورة","طوس","الكوفة","سامراء"]'::jsonb, 0, 20, 17, 'multi', 'حمل المأمون أم الفضل مع الإمام، ثم توجه بها إلى المدينة.', 'محطات الحياة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'من الإمام الذي نصّ عليه الجواد (ع) خليفةً بعده؟', '["الإمام الحسن العسكري (ع)","الإمام علي الرضا (ع)","الإمام موسى الكاظم (ع)","الإمام علي الهادي (ع)"]'::jsonb, 3, 20, 18, 'multi', 'نص الإمام الجواد (ع) على ابنه علي، الإمام الهادي (ع)، من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'إلى أي مدينة استدعى المعتصم الإمام الجواد (ع) في آخر حياته؟', '["مرو","دمشق","بغداد","الكوفة"]'::jsonb, 2, 20, 19, 'multi', 'أشخص المعتصم الإمام الجواد (ع) إلى بغداد في السنة التي توفي فيها.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'في أي سنة هجرية توفي الإمام الجواد (ع)؟', '["203هـ","220هـ","254هـ","260هـ"]'::jsonb, 1, 20, 20, 'multi', 'توفي الإمام الجواد (ع) سنة عشرين ومائتين للهجرة.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'في أي شهر توفي الإمام الجواد (ع) بحسب الكافي؟', '["ذو الحجة","المحرم","صفر","ذو القعدة"]'::jsonb, 3, 20, 21, 'multi', 'ذكر الكافي أن وفاته (ع) كانت في آخر ذي القعدة سنة 220هـ.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'كم كان عمر الإمام الجواد (ع) عند وفاته بحسب الكافي؟', '["خمسًا وعشرين سنة","ثلاثًا وثلاثين سنة","سبعًا وأربعين سنة","أربعًا وخمسين سنة"]'::jsonb, 0, 20, 22, 'multi', 'ذكر الكافي أنه توفي وهو ابن خمس وعشرين سنة وشهرين وثمانية عشر يومًا.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_32, 'أين دُفن الإمام الجواد (ع)؟', '["البقيع في المدينة","طوس عند قبر والده الرضا","مقابر قريش عند قبر جده الكاظم","سامراء عند قبر الهادي"]'::jsonb, 2, 20, 23, 'multi', 'دُفن في بغداد بمقابر قريش عند قبر جده الإمام موسى الكاظم (ع).', 'الاستشهاد والمرقد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_33 uuid;
BEGIN
  SELECT id INTO v_sync_id_33 FROM quizzes WHERE title = 'سيرة الإمام علي الهادي (ع)' LIMIT 1;
  IF v_sync_id_33 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي الهادي (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_33;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من هو والد الإمام علي الهادي (ع)؟', '["الإمام علي الرضا (ع)","الإمام محمد الجواد (ع)","الإمام موسى الكاظم (ع)","الإمام الحسن العسكري (ع)"]'::jsonb, 1, 20, 0, 'multi', 'هو علي بن محمد بن علي، ابن الإمام محمد الجواد (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ما الاسم الذي تذكره المصادر لأم الإمام الهادي (ع)؟', '["نجمة","حميدة","حكيمة","سمانة"]'::jsonb, 3, 20, 1, 'multi', 'تذكر كتب السيرة أن أمه أم ولد يقال لها سمانة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أين وُلد الإمام الهادي (ع)؟', '["صريا قرب المدينة","سامراء","بغداد","طوس"]'::jsonb, 0, 20, 2, 'multi', 'كانت ولادته في صريا، وهي قرية أسسها الإمام الكاظم (ع) قرب المدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ما كنية الإمام علي الهادي (ع)؟', '["أبو جعفر","أبو محمد","أبو الحسن","أبو عبد الله"]'::jsonb, 2, 20, 3, 'multi', 'كنيته أبو الحسن، ويُعبّر عنه في كتب الحديث بأبي الحسن الثالث.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أي لقبين اشتهر بهما الإمام علي بن محمد (ع)؟', '["الرضا والجواد","السجاد والباقر","الهادي والنقي","العسكري والمنتظر"]'::jsonb, 2, 20, 4, 'multi', 'من أشهر ألقابه الهادي والنقي، وهما دالان على الهداية والطهارة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من نصّ على إمامة علي الهادي (ع) من بعده؟', '["الإمام محمد الجواد (ع)","الإمام علي الرضا (ع)","الإمام الحسن العسكري (ع)","الإمام موسى الكاظم (ع)"]'::jsonb, 0, 20, 5, 'multi', 'روت النصوص تعيين الإمام الجواد ابنه عليًا للإمامة من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من تولّى الإمامة بعد الإمام الهادي (ع)؟', '["الإمام محمد الجواد (ع)","الإمام موسى الكاظم (ع)","الإمام جعفر الصادق (ع)","الإمام الحسن العسكري (ع)"]'::jsonb, 3, 20, 6, 'multi', 'نص الإمام الهادي على ابنه أبي محمد الحسن العسكري (ع) من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من عيّنه العباسيون لتعليم الإمام صغيرًا ثم أقرّ بعلمه؟', '["ابن السكيت","الجنيدي","يحيى بن هرثمة","الفتح بن خاقان"]'::jsonb, 1, 25, 7, 'multi', 'عُيّن الجنيدي لملازمته وتعليمه، ثم شهد بأنه أعلم الناس وأنه يتعلم منه.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'بماذا فسّر اختلاف معجزات موسى وعيسى ومحمد (ص)؟', '["وافقت الغالب على أهل عصورهم","اختيرت بلا حكمة ظاهرة","كانت كلها من نوع واحد","اقتصرت على شفاء المرضى"]'::jsonb, 0, 25, 8, 'multi', 'بيّن لابن السكيت أن الحجة جاءت بما يغلب فن العصر: السحر والطب والكلام.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ما الحجة الباقية التي يُعرف بها الصادق وفق جواب الإمام؟', '["النسب","كثرة الأتباع","العقل","السلطان"]'::jsonb, 2, 20, 9, 'multi', 'قال الإمام لابن السكيت إن الحجة اليوم هي العقل، فيعرف به الصادق ويُكذّب المفتري.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ما الزيارة الجامعة المروية عن الإمام الهادي (ع)؟', '["زيارة عاشوراء","الزيارة الجامعة الكبيرة","زيارة وارث","زيارة أمين الله"]'::jsonb, 1, 20, 10, 'multi', 'علّم الإمام موسى النخعي نصًا جامعًا لزيارة الأئمة عُرف بالزيارة الجامعة الكبيرة.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أي مناسبة تناولتها زيارة مروية عنه لأمير المؤمنين (ع)؟', '["يوم المباهلة","ليلة القدر","يوم الفطر","يوم الغدير"]'::jsonb, 3, 20, 11, 'multi', 'رُويت عنه زيارة لأمير المؤمنين يوم الغدير تستعرض فضائله ومواقفه.', 'العلم والدلائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من سعى بالإمام الهادي (ع) إلى المتوكل في المدينة؟', '["يحيى بن هرثمة","سعيد الحاجب","ابن السكيت","عبد الله بن محمد"]'::jsonb, 3, 20, 12, 'multi', 'كان يتولى الحرب والصلاة بالمدينة، فوشى بالإمام إلى المتوكل وقصده بالأذى.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'كيف واجه الإمام الهادي وشاية والي المدينة؟', '["غادر المدينة سرًا","كتب إلى المتوكل وكذّبها","جمع جيشًا لمقاتلته","التزم الصمت تمامًا"]'::jsonb, 1, 20, 13, 'multi', 'كتب الإمام يذكر تحامل عبد الله بن محمد ويكذب ما سعى به.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'من أرسله المتوكل لإشخاص الإمام الهادي من المدينة؟', '["سعيد الحاجب","الفتح بن خاقان","يحيى بن هرثمة","أحمد بن الخصيب"]'::jsonb, 2, 20, 14, 'multi', 'حمل يحيى بن هرثمة كتاب المتوكل وصحب الإمام في رحلته إلى سامراء.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ماذا وجد يحيى بن هرثمة عند تفتيش دار الإمام؟', '["مصاحف وأدعية وكتب علم","أسلحة ورسائل عسكرية","أموال خراج الدولة","رايات معدة للقتال"]'::jsonb, 0, 20, 15, 'multi', 'لم يجد في الدار ما يؤيد الوشاية، بل وجد المصاحف والأدعية وكتب العلم.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'إلى أي مدينة استُدعي الإمام الهادي بأمر المتوكل؟', '["الكوفة","سامراء","طوس","دمشق"]'::jsonb, 1, 20, 16, 'multi', 'استدعاه المتوكل إلى عاصمة حكمه «سر من رأى»، وهي سامراء.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أين أُنزل الإمام الهادي عند وصوله سامراء أول مرة؟', '["خان الصعاليك","قصر الخلافة","دار الفتح بن خاقان","جامع سامراء"]'::jsonb, 0, 20, 17, 'multi', 'احتجب المتوكل عنه أول وصوله، فنزل في خان يُعرف بخان الصعاليك.', 'الانتقال إلى سامراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ماذا وجد رجال المتوكل عندما هجموا على دار الإمام؟', '["كان يجمع السلاح","كان يكتب إلى الروم","كان يقيم وليمة كبيرة","كان منفردًا يتلو القرآن"]'::jsonb, 3, 20, 18, 'multi', 'وجدوه وحده في بيت مغلق، عليه مدرعة من شعر، يتلو القرآن.', 'مواقفه مع المتوكل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ماذا صنع الإمام عندما ناوله المتوكل كأس الخمر؟', '["شربه مجاملة للمتوكل","ناوله للفتح بن خاقان","امتنع وقال إن لحمه ودمه لم يخالطاه","خرج من المجلس بلا جواب"]'::jsonb, 2, 25, 19, 'multi', 'رفض الإمام الشرب مؤكدًا أن الخمر لم تخالط لحمه ودمه قط.', 'مواقفه مع المتوكل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'ما أثر قصيدة الإمام في زوال الملوك على مجلس المتوكل؟', '["أمر المتوكل بسجن الإمام","بكى المتوكل والحاضرون","ضحك الحاضرون منها","انتهى المجلس بمناظرة فقهية"]'::jsonb, 1, 25, 20, 'multi', 'أنشد الإمام أبيات «باتوا على قلل الأجبال»، فبكى المتوكل حتى بلّت دموعه لحيته وبكى الحاضرون.', 'مواقفه مع المتوكل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'في أي سنة هجرية توفي الإمام الهادي (ع)؟', '["220 هـ","260 هـ","203 هـ","254 هـ"]'::jsonb, 3, 20, 21, 'multi', 'توفي الإمام الهادي في سامراء في رجب سنة أربع وخمسين ومئتين.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أين دُفن الإمام علي الهادي (ع)؟', '["في داره بسامراء","في البقيع بالمدينة","في الكاظمية ببغداد","في طوس"]'::jsonb, 0, 20, 22, 'multi', 'دُفن الإمام في الدار التي كان يسكنها في سامراء.', 'الاستشهاد والمرقد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_33, 'أي ابن للإمام الهادي دُفن معه لاحقًا في الدار نفسها؟', '["محمد بن علي","الحسين بن علي","الإمام الحسن العسكري (ع)","جعفر بن علي"]'::jsonb, 2, 20, 23, 'multi', 'صار الموضع مرقد الإمامين العسكريين بعد دفن ابنه الإمام الحسن العسكري معه.', 'الاستشهاد والمرقد');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_34 uuid;
BEGIN
  SELECT id INTO v_sync_id_34 FROM quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1;
  IF v_sync_id_34 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام الحسن العسكري (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_34;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'في أي مدينة وُلد الإمام الحسن العسكري (ع) بحسب الشيخ المفيد؟', '["سامراء","المدينة المنورة","بغداد","الكوفة"]'::jsonb, 1, 20, 0, 'multi', 'يذكر الشيخ المفيد أن مولد الإمام الحسن العسكري (ع) كان في المدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'في أي شهر كانت ولادة الإمام الحسن العسكري (ع) بحسب رواية الإرشاد؟', '["ربيع الأول","جمادى الآخرة","شعبان","ربيع الآخر"]'::jsonb, 3, 20, 1, 'multi', 'أثبت الإرشاد ولادته في شهر ربيع الآخر سنة 232هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'ما السنة الهجرية التي وُلد فيها الإمام الحسن العسكري (ع)؟', '["232هـ","220هـ","225هـ","238هـ"]'::jsonb, 0, 20, 2, 'multi', 'ولد الإمام الحسن العسكري (ع) سنة اثنتين وثلاثين ومئتين للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'ما كنية الإمام الحسن العسكري (ع)؟', '["أبو الحسن","أبو جعفر","أبو محمد","أبو عبد الله"]'::jsonb, 2, 15, 3, 'multi', 'كنية الإمام الحسن بن علي العسكري (ع) هي أبو محمد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'من والد الإمام الحسن العسكري (ع)؟', '["الإمام محمد الجواد (ع)","الإمام علي الرضا (ع)","الإمام علي الهادي (ع)","الإمام موسى الكاظم (ع)"]'::jsonb, 2, 20, 4, 'multi', 'الإمام العسكري (ع) هو ابن الإمام علي بن محمد الهادي (ع)، الإمام العاشر.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'لماذا اشتهر الإمام الحسن وأبوه الهادي بلقب «العسكريين»؟', '["لإقامتهما في محلة العسكر بسامراء","لقيادتهما جيشًا في الكوفة","لولادتهما في معسكر حدودي","لانتسابهما إلى قبيلة عسكر"]'::jsonb, 0, 25, 5, 'multi', 'نُسب الإمامان الهادي والعسكري (ع) إلى «العسكر»، وهي المحلة التي أُسكنا فيها بسامراء.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'من الإمام الذي نصّ على إمامة الحسن العسكري (ع) من بعده؟', '["الإمام محمد الجواد (ع)","الإمام علي الرضا (ع)","الإمام موسى الكاظم (ع)","الإمام علي الهادي (ع)"]'::jsonb, 3, 20, 6, 'multi', 'روى الكليني نصوصًا صريحة عن الإمام الهادي (ع) في تعيين ابنه أبي محمد للإمامة بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'في أي سنة بدأت إمامة الإمام الحسن العسكري (ع)؟', '["250هـ","254هـ","255هـ","260هـ"]'::jsonb, 1, 20, 7, 'multi', 'بدأت إمامته بعد وفاة أبيه الإمام الهادي (ع) سنة 254هـ.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'كم دامت إمامة الإمام الحسن العسكري (ع) تقريبًا؟', '["ست سنوات","أربع سنوات","عشر سنوات","عشرون سنة"]'::jsonb, 0, 20, 8, 'multi', 'امتدت إمامته من سنة 254هـ إلى سنة 260هـ، أي نحو ست سنوات.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'في أي مدينة قضى الإمام العسكري (ع) مدة إمامته تحت الرقابة العباسية؟', '["المدينة المنورة","الكوفة","سامراء","قم"]'::jsonb, 2, 20, 9, 'multi', 'عاش الإمام العسكري (ع) في سامراء، حيث أحاطت به السلطة العباسية ورجالها بالرقابة.', 'الرقابة العباسية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'عند من كان الإمام العسكري (ع) محبوسًا حين طلب العباسيون التشديد عليه؟', '["عبيد الله بن خاقان","صالح بن وصيف","أحمد بن طولون","الفتح بن خاقان"]'::jsonb, 1, 25, 10, 'multi', 'تروي المصادر أن الإمام (ع) حُبس عند صالح بن وصيف، وأن شدة العبادة أثرت في الموكلين به.', 'الرقابة العباسية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'ماذا حدث للرجلين الشديدين اللذين وُكّلا بالإمام في حبس صالح بن وصيف؟', '["نقلاه سرًا إلى المدينة","أطلقاه بلا أمر السلطان","كتبا كتابًا في الأنساب","صارا من أهل العبادة والصلاة"]'::jsonb, 3, 30, 11, 'multi', 'لما لازما الإمام في الحبس تأثرا بعبادته، فصارا كثيري الصلاة والعبادة.', 'العبادة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'من الوكيل الذي خدم الإمامين الهادي والعسكري ثم صار أول نواب المهدي (عج)؟', '["محمد بن عثمان العمري","الحسين بن روح","علي بن محمد السمري","عثمان بن سعيد العمري"]'::jsonb, 3, 25, 12, 'multi', 'وثّق الإمام العسكري (ع) عثمان بن سعيد، وكان وكيلًا له ولأبيه ثم صار أول النواب الخاصين للمهدي (عج).', 'الوكلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'بأي وسيلة كان عثمان بن سعيد يخفي الأموال المنقولة إلى الإمام؟', '["داخل كتب الفقه","في أوعية السمن","في أكياس الحبوب","تحت سروج الخيل"]'::jsonb, 1, 25, 13, 'multi', 'عُرف عثمان بن سعيد بالسمّان لأنه كان يجعل الأموال في أوعية السمن تمويهًا على رقابة السلطة.', 'الوكلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'من القمي الذي خاطبه الإمام العسكري (ع) في روايات الوكالة والمراسلات؟', '["زكريا بن آدم","علي بن بابويه","أحمد بن إسحاق","سعد بن عبد الله"]'::jsonb, 2, 25, 14, 'multi', 'كان أحمد بن إسحاق القمي من خواص الإمام العسكري (ع)، ووردت مخاطباته له في شؤون الإمامة والوكلاء.', 'التواصل مع الشيعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'ما اسم عمة الإمام العسكري (ع) التي روت خبر ولادة الإمام المهدي (عج)؟', '["حكيمة بنت محمد الجواد","فاطمة بنت موسى الكاظم","عليّة بنت موسى الكاظم","أمامة بنت علي الهادي"]'::jsonb, 0, 25, 15, 'multi', 'روت السيدة حكيمة بنت الإمام الجواد (ع)، عمة الإمام العسكري، تفاصيل ولادة الإمام المهدي (عج).', 'التمهيد للغيبة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'لماذا حرص الإمام العسكري (ع) على إخفاء ولادة ابنه عن السلطة؟', '["لأن الأسرة كانت في سفر","خوفًا من طلب العباسيين له","انتظارًا لموافقة قاضي سامراء","لعدم اكتمال بناء الدار"]'::jsonb, 1, 25, 16, 'multi', 'أُخفي أمر الولادة عن عامة الناس بسبب ترقب السلطة العباسية للمولود الموعود وسعيها للوصول إليه.', 'التمهيد للغيبة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'في أي سنة هجرية استشهد الإمام الحسن العسكري (ع)؟', '["260هـ","254هـ","255هـ","265هـ"]'::jsonb, 0, 20, 17, 'multi', 'توفي الإمام العسكري (ع) في سامراء سنة 260هـ، وبوفاته بدأت إمامة ابنه المهدي (عج).', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'كم كان عمر الإمام العسكري (ع) عند وفاته بحسب الإرشاد؟', '["خمس وعشرون سنة","اثنتان وثلاثون سنة","أربعون سنة","ثمانٍ وعشرون سنة"]'::jsonb, 3, 20, 18, 'multi', 'يذكر المفيد أن عمر الإمام العسكري (ع) عند وفاته كان ثمانيًا وعشرين سنة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_34, 'أين دُفن الإمام الحسن العسكري (ع)؟', '["في مقبرة البقيع","في الكاظمية","في داره بسامراء إلى جوار أبيه","في النجف الأشرف"]'::jsonb, 2, 20, 19, 'multi', 'دُفن الإمام العسكري (ع) في الدار التي دُفن فيها أبوه الإمام الهادي (ع) بسامراء.', 'الدفن');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_35 uuid;
BEGIN
  SELECT id INTO v_sync_id_35 FROM quizzes WHERE title = 'سيرة الإمام محمد المهدي (عج)' LIMIT 1;
  IF v_sync_id_35 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام محمد المهدي (عج)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_35;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما التاريخ المشهور عند الإمامية لولادة الإمام المهدي (عج)؟', '["15 شعبان سنة 254هـ","15 شعبان سنة 255هـ","17 ربيع الأول سنة 255هـ","15 رمضان سنة 256هـ"]'::jsonb, 1, 20, 0, 'multi', 'يورد الشيخ المفيد أن ولادته كانت ليلة النصف من شعبان سنة 255هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'في أي مدينة وُلد الإمام المهدي (عج)؟', '["المدينة المنورة","بغداد","الكوفة","سامراء"]'::jsonb, 3, 15, 1, 'multi', 'تذكر روايات مولده أنه وُلد في دار أبيه بسامراء.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من والد الإمام محمد المهدي (عج)؟', '["الإمام الحسن العسكري (ع)","الإمام علي الهادي (ع)","الإمام محمد الجواد (ع)","الإمام علي الرضا (ع)"]'::jsonb, 0, 15, 2, 'multi', 'الإمام محمد المهدي هو ابن الإمام الحسن بن علي العسكري (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما الاسم الأشهر لأم الإمام المهدي (عج) في روايات ولادته؟', '["حكيمة","حديث","نرجس","سمانة"]'::jsonb, 2, 20, 3, 'multi', 'اشتهرت أم الإمام المهدي في روايات الولادة باسم نرجس، مع ورود أسماء أخرى لها.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من العلوية التي روت حضورها ولادة الإمام المهدي (عج)؟', '["فاطمة بنت الإمام الكاظم (ع)","خديجة بنت الإمام الصادق (ع)","حكيمة بنت الإمام الجواد (ع)","أمامة بنت الإمام الرضا (ع)"]'::jsonb, 2, 20, 4, 'multi', 'استدعى الإمام العسكري عمته حكيمة، فحضرت ولادة نرجس للإمام المهدي.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما كنية الإمام المهدي (عج) المذكورة في كتب السيرة الإمامية؟', '["أبو القاسم","أبو محمد","أبو الحسن","أبو جعفر"]'::jsonb, 0, 15, 5, 'multi', 'يذكر الشيخ المفيد أن كنيته ككنية رسول الله (ص): أبو القاسم.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'أي لقب من الآتي اشتهر به الإمام محمد المهدي (عج)؟', '["السجاد","الكاظم","الجواد","القائم"]'::jsonb, 3, 15, 6, 'multi', 'تسميه النصوص الإمامية القائم والمهدي والحجة وصاحب الزمان.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'لماذا أحاط الإمام العسكري (ع) ولادة ابنه بالكتمان؟', '["لأنه كان مسافرًا خارج سامراء","خوفًا من طلب السلطة العباسية له","لأن الأسرة انتقلت إلى المدينة","لانقطاع الاتصال بأصحابه تمامًا"]'::jsonb, 1, 25, 7, 'multi', 'أُخفيت ولادته لشدة طلب السلطان له ومراقبته بيت الإمام العسكري.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ماذا فعل الإمام العسكري (ع) لإثبات ولادة ابنه لبعض ثقاته؟', '["أراه لعدد من أصحابه الخواص","أعلنه على منبر بغداد","أرسله إلى المدينة علنًا","سجله لدى ديوان الخلافة"]'::jsonb, 0, 20, 8, 'multi', 'عرض الإمام العسكري ابنه على جماعة مختارة من أصحابه وعرّفهم إمامهم بعده.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'كم كان عمر الإمام المهدي (عج) تقريبًا عند بدء إمامته سنة 260هـ؟', '["عشر سنوات","خمس عشرة سنة","خمس سنوات","عشرون سنة"]'::jsonb, 2, 20, 9, 'multi', 'وُلد سنة 255هـ وبدأت إمامته بعد أبيه سنة 260هـ، فكان عمره نحو خمس سنوات.', 'بدء الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'في أي سنة بدأت الغيبة الصغرى؟', '["255هـ","260هـ","275هـ","329هـ"]'::jsonb, 1, 15, 10, 'multi', 'بدأت الغيبة الصغرى بعد رحيل الإمام الحسن العسكري سنة 260هـ وتولي ابنه الإمامة.', 'الغيبة الصغرى');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'كم نائبًا خاصًا تعاقب في الغيبة الصغرى؟', '["ثلاثة","خمسة","سبعة","أربعة"]'::jsonb, 3, 15, 11, 'multi', 'تعاقب في السفارة الخاصة عثمان، ثم محمد، ثم الحسين بن روح، ثم علي السمري.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من كان أول النواب الأربعة؟', '["محمد بن عثمان العمري","الحسين بن روح النوبختي","علي بن محمد السمري","عثمان بن سعيد العمري"]'::jsonb, 3, 15, 12, 'multi', 'كان عثمان بن سعيد أول سفير للإمام المهدي في الغيبة الصغرى.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'أي حرفة اتخذها عثمان بن سعيد ستارًا لخدمته ونقل الأموال؟', '["نسخ الكتب","بيع السمن","صياغة الفضة","تجارة الورق"]'::jsonb, 1, 20, 13, 'multi', 'عُرف عثمان بالسمّان، وكان يجعل الأموال في أوعية السمن ويوصلها سترًا للأمر.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من تولى النيابة الخاصة بعد عثمان بن سعيد؟', '["الحسين بن روح","علي بن محمد السمري","ابنه محمد بن عثمان","أحمد بن إسحاق القمي"]'::jsonb, 2, 15, 14, 'multi', 'تولى محمد بن عثمان العمري السفارة بعد وفاة أبيه عثمان بن سعيد.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من كان ثالث النواب الأربعة؟', '["الحسين بن روح النوبختي","عثمان بن سعيد العمري","محمد بن عثمان العمري","علي بن محمد السمري"]'::jsonb, 0, 15, 15, 'multi', 'نص محمد بن عثمان على الحسين بن روح، فكان السفير الثالث.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'من كان آخر النواب الخاصين في الغيبة الصغرى؟', '["الحسين بن روح النوبختي","علي بن محمد السمري","محمد بن عثمان العمري","عثمان بن سعيد العمري"]'::jsonb, 1, 15, 16, 'multi', 'كان علي بن محمد السمري رابع السفراء وآخرهم.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما المهمة الأساسية للنواب الخاصين؟', '["إيصال التوقيعات وشؤون الشيعة بين الإمام وأتباعه","تولي منصب الخلافة العباسية","قيادة جيش ظاهر في سامراء","تأسيس مذهب فقهي جديد"]'::jsonb, 0, 25, 17, 'multi', 'كان السفراء وسطاء موثوقين في المكاتبات والتوقيعات والأموال والمسائل.', 'الغيبة الصغرى');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما اسم الرسائل الصادرة عن الإمام المهدي (عج) إلى وكلائه وشيعته؟', '["الصحائف","المقامات","المعلقات","التوقيعات"]'::jsonb, 3, 20, 18, 'multi', 'تسمّي المصادر كتب الإمام وأجوبته الخارجة إلى نوابه وشيعته «التوقيعات».', 'الغيبة الصغرى');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ما الترتيب الصحيح للنواب الأربعة؟', '["محمد، عثمان، السمري، الحسين بن روح","الحسين بن روح، عثمان، محمد، السمري","عثمان، محمد، الحسين بن روح، السمري","عثمان، الحسين بن روح، محمد، السمري"]'::jsonb, 2, 25, 19, 'multi', 'الترتيب هو عثمان بن سعيد، محمد بن عثمان، الحسين بن روح، ثم علي السمري.', 'النواب الأربعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'ماذا أمر التوقيع الأخير علي بن محمد السمري بشأن خليفته؟', '["أن يعيّن ابنه سفيرًا","ألا يوصي إلى أحد بعده","أن يعيد السفارة للحسين بن روح","أن ينقل السفارة إلى سامراء"]'::jsonb, 1, 25, 20, 'multi', 'أخبر التوقيع السمري بقرب وفاته وأمره ألا يعهد إلى أحد؛ فقد وقعت الغيبة التامة.', 'بداية الغيبة الكبرى');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_35, 'في أي سنة انتهت الغيبة الصغرى وبدأت الغيبة الكبرى؟', '["260هـ","305هـ","350هـ","329هـ"]'::jsonb, 3, 15, 21, 'multi', 'بوفاة السفير الرابع علي السمري سنة 329هـ انتهت السفارة الخاصة وبدأت الغيبة الكبرى.', 'بداية الغيبة الكبرى');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_36 uuid;
BEGIN
  SELECT id INTO v_sync_id_36 FROM quizzes WHERE title = 'تضاريس وظواهر طبيعية فريدة' LIMIT 1;
  IF v_sync_id_36 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تضاريس وظواهر طبيعية فريدة', 'جغرافيا', '', 'medium', 'ar', true)
    RETURNING id INTO v_sync_id_36;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي عملية جيومورفولوجية أنشأت الأعمدة السداسية الشهيرة في ممر العمالقة بأيرلندا الشمالية؟', '["ترسيب أملاح بحرية متعاقبة","تبريد حمم بازلتية وانكماشها","نحت الحجر الجيري بمياه جوفية","ضغط كثبان رملية متحجرة"]'::jsonb, 1, 30, 0, 'multi', 'تكوّنت الأعمدة عندما بردت تدفقات بازلتية قديمة فانكمشت وتشقق سطحها إلى مضلعات، يغلب عليها الشكل السداسي. لذلك فهي فواصل تبريد وليست نتاج إذابة كارستية أو ترسيب ملحي.', 'تضاريس بركانية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'لماذا يبدو نهر كانيو كريستاليس في كولومبيا متعدد الألوان خلال موسم محدد؟', '["تذوب فيه معادن نحاسية من مناجم قريبة","تعكس مياهه ألوان الطيور المهاجرة","تتلون نباتات مائية مستوطنة مع ملاءمة الضوء ومستوى الماء","تطلق ينابيع حارة أصباغًا كبريتية"]'::jsonb, 2, 30, 1, 'multi', 'يرتبط اللون الأحمر خصوصًا بالنبات المائي Macarenia clavigera الذي تظهر ألوانه حين يتوازن عمق الماء والضوء بين موسمي المطر والجفاف؛ وتضيف الصخور والرمال والطحالب ألوانًا أخرى.', 'أنهار وظواهر حيوية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما العامل الرئيس الذي حافظ على ملوحة البحر الميت الشديدة مقارنة بمعظم البحيرات؟', '["اتصاله المباشر ببحر شديد الملوحة","كونه حوضًا مغلقًا يفقد الماء أساسًا بالتبخر","ذوبان جليد غني بالأملاح فيه سنويًا","ارتفاعه الكبير الذي يمنع هطول المطر"]'::jsonb, 1, 30, 2, 'multi', 'البحر الميت بحيرة نهائية بلا مخرج نهري إلى البحر. يزيل التبخر الماء ويترك الأملاح الذائبة تتراكم، كما أن موقعه منخفض لا مرتفع.', 'بحيرات ملحية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي وصف يفسر تكوّن الأخاديد العميقة مثل غراند كانيون على نحو أدق؟', '["انهيار سقف كهف واحد ضخم","شق فتحه اصطدام نيزك حديث","حتّ نهري طويل ترافق مع رفع إقليمي لهضبة كولورادو","أخدود حفره نهر جليدي ساحلي"]'::jsonb, 2, 30, 3, 'multi', 'عمّق نهر كولورادو وروافده الوادي مع ارتفاع هضبة كولورادو، فكشفت التعرية طبقات صخرية تمتد إلى أزمنة سحيقة. لا يمثل الوادي فوهة صدم ولا كهفًا منهارًا.', 'أودية وأخاديد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'تتكون صواعد الكهوف الجيرية عادةً عندما يحدث ماذا؟', '["تتجمد مياه جوفية صاعدة داخل السقف","تضغط حركة الصفائح الطين إلى أعلى","تنحت الرياح أعمدة من الرمال المتماسكة","تترسب كربونات الكالسيوم من قطرات تسقط على أرضية الكهف"]'::jsonb, 3, 30, 4, 'multi', 'تفقد القطرات بعض ثاني أكسيد الكربون بعد وصولها إلى الكهف، فتترسب كربونات الكالسيوم على الأرض وتنمو الصواعد إلى أعلى؛ أما الهوابط فتنمو من السقف.', 'كارست وكهوف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما الذي يميز دلتا داخلية مثل دلتا أوكافانغو في بوتسوانا عن الدلتا الساحلية المعتادة؟', '["تتكون حصرًا من حمم تحت الماء","ترتفع فوق خط تقسيم المياه","يتبدد النهر في حوض قاري ولا يصل إلى المحيط","لا تحتوي أي رواسب نهرية"]'::jsonb, 2, 30, 5, 'multi', 'تصب مياه أوكافانغو داخل حوض كالاهاري المغلق، فتنتشر في شبكة مستنقعات وقنوات ثم تضيع بالتبخر والنتح والتسرب بدل بلوغ البحر.', 'أنهار ودلتات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'في أي بيئة تتشكل التربة المضلعة والدوائر الحجرية الطبيعية المرتبطة بظاهرة الأرض المنمطة؟', '["الغابات المدارية عديمة التباين الحراري","قيعان المحيط العميقة قرب الفتحات الحارة","الصحارى الحارة التي لا تتجمد","بيئات التجمد والذوبان المتكرر في الأقاليم الباردة"]'::jsonb, 3, 30, 6, 'multi', 'تدفع دورات التجمد والذوبان الحبيبات وتفرزها بحسب الحجم، فتتشكل مضلعات ودوائر وخطوط حجرية في البيئات المحيطة بالجليدية.', 'تضاريس جليدية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'لماذا تتخذ بحيرات كثيرة داخل الفوهات البركانية شكلًا دائريًا أو شبه دائري؟', '["لأن الأنهار ترسم دائمًا دوائر عند منابعها","لأن الماء يملأ منخفضًا أنشأه انفجار أو انهيار بركاني","لأن الرياح تدور في نصف الكرة الشمالي","لأن الجليد البحري يحفر حلقات منتظمة"]'::jsonb, 1, 30, 7, 'multi', 'قد يخلّف الثوران فوهة، أو ينهار سقف حجرة الصهارة ليكوّن كالديرا؛ وعندما تتجمع المياه داخل ذلك المنخفض تحاكي البحيرة حدوده الدائرية نسبيًا.', 'بحيرات بركانية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي آلية تجعل الكثيب الهلالي المعروف بالبرخان يتحرك تدريجيًا؟', '["يدفع المد البحري الكثيب كله من أسفله","تتمدد حبات الرمل ليلًا فتنزلق شرقًا","ترفع المياه الجوفية الكثيب ككتلة واحدة","تنقل الرياح الرمل صعودًا على الجانب المواجه ثم ينهال خلف القمة"]'::jsonb, 3, 30, 8, 'multi', 'تقفز الحبات وتتدحرج على المنحدر المواجه للريح، ثم تعبر القمة وتنهال على وجه الانزلاق، فيتقدم الكثيب باتجاه هبوب الريح وتبرز قرناه إلى الأمام.', 'تضاريس ريحية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما التفسير الجيولوجي المقبول لوجود أحافير بحرية في صخور عالية بجبال الهيمالايا؟', '["نقلتها طيور بحرية إلى القمم الحديثة","غطى مد يومي قمم الجبال قبل قرون","ارتفعت رواسب بحر تيثس القديم أثناء تصادم الهند بأوراسيا","قذفتها براكين المحيط الهندي إلى الجبال"]'::jsonb, 2, 35, 9, 'multi', 'ترسبت المواد في بحر تيثس بين الكتلتين القاريتين، ثم طُويت وارتفعت عندما اصطدمت الصفيحة الهندية بأوراسيا؛ لذا أصبحت الصخور الرسوبية البحرية جزءًا من أعلى سلسلة جبلية.', 'جبال وصفائح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'في الحواف الجليدية، ما الفرق الأدق بين الفيورد والوادي النهري العادي؟', '["الفيورد قناة حفرتها الحمم ولها مقطع V","الفيورد بحيرة مغلقة لا تتصل بالبحر","الفيورد أخدود ريحي يوجد فقط في الصحارى","الفيورد وادٍ جليدي عميق غمره البحر وله مقطع على هيئة U"]'::jsonb, 3, 35, 10, 'multi', 'تحفر الأنهار الجليدية أودية عريضة شديدة الجوانب ذات مقطع U، ثم يغمر البحر الجزء السفلي بعد تراجع الجليد أو تغير مستوى البحر، فينشأ الفيورد.', 'سواحل جليدية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي اقتران بين تضريس كارستي وآلية تكوّنه صحيح؟', '["الدولين: إذابة صخر قابل للذوبان وانهيار أو هبوط السطح","المورين: ترسيب كربونات من مياه الكهوف","الياردانغ: إذابة الجبس بالماء الجوفي فقط","الإسكر: انهيار سقف حجرة صهارية"]'::jsonb, 0, 40, 11, 'multi', 'الدولين منخفض كارستي يتشكل بالإذابة أو انهيار تجاويف في الحجر الجيري ونحوه. المورين ركام جليدي، والياردانغ نحت ريحي، والإسكر راسب نهري جليدي.', 'كارست وكهوف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما الشرط التكتوني الأكثر ارتباطًا بتكوين وادٍ صدعي قاري مثل أجزاء من صدع شرق أفريقيا؟', '["تمدد القشرة وهبوط كتل بين صدوع عادية","انضغاط القشرة وتراكب الدسرات","انزلاق أفقي محض بلا تمدد","اصطدام صفيحتين محيطيتين فقط"]'::jsonb, 0, 40, 12, 'multi', 'حين تتمدد القشرة القارية ترقّ وتتشقق بصدوع عادية، وقد تهبط كتلة وسطية لتكوّن غورًا أو واديًا صدعيًا. أما الانضغاط فيبني عادة أحزمة طي ودسر.', 'تكتونية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'تتكون بحيرات المنعطف المقطوع (قوس الثور) عندما يحدث أي تسلسل؟', '["ينهار بركان دائري ثم يملأ المطر فوهته","يضيق عنق منعطف نهري ثم يقطعه النهر وتسد الرواسب القناة القديمة","يسد ركام جليدي خليجًا بحريًا","تذيب المياه الجوفية قبة ملحية كاملة"]'::jsonb, 1, 40, 13, 'multi', 'تزيد التعرية على الضفتين الخارجيتين والترسيب داخليًا من تقارب عنق المنعطف؛ وعند الفيضان قد يفتح النهر مسارًا أقصر، ثم تعزل الرواسب الحلقة القديمة كبحيرة هلالية.', 'أنهار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'لماذا يمكن أن يكون قاع وادٍ جاف في القارة القطبية الجنوبية شبه خالٍ من الجليد رغم البرودة الشديدة؟', '["تسخن تيارات محيطية القاع فوق نقطة الغليان","تغطي الحمم الحديثة الوادي كل شتاء","تمنع الملوحة تجمد أي هطول جوي","تحد الرياح الهابطة الجافة من تراكم الثلج وتسرّع التسامي"]'::jsonb, 3, 40, 14, 'multi', 'تندفع رياح كاتاباتية باردة وكثيفة من المرتفعات، وتسخن بالانضغاط أثناء هبوطها وتزيل الثلج بالتسامي والنقل، بينما تحجب الجبال قدرًا كبيرًا من الهطول.', 'ظواهر قطبية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي تفسير يطابق تكوّن بحيرة توبا الهائلة في سومطرة؟', '["امتلأت كالديرا نتجت من ثوران انفجاري ضخم وانهيار السقف","سد نهر جليدي واديًا استوائيًا","كوّن اصطدام قاري حوضًا أماميًا ضحلًا","قطع منعطف نهري واسع عن مجراه"]'::jsonb, 0, 40, 15, 'multi', 'بحيرة توبا تشغل كالديرا تكونت خلال ثوران هائل قبل نحو 74 ألف سنة؛ أُفرغ مقدار كبير من الصهارة فانهار الجزء العلوي من النظام البركاني.', 'براكين وكالديرات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما الذي يجعل السهل الملحي سالار دي أويوني في بوليفيا يعمل كمرآة واسعة أحيانًا؟', '["تذوب بلورات الملح فتصبح زجاجًا دائمًا","تغطي طبقة رقيقة ساكنة من الماء سطح الملح شديد الاستواء","تكسو الطحالب الفضية سطحه في الشتاء","تترسب طبقة سنوية من الجليد البحري"]'::jsonb, 1, 40, 16, 'multi', 'خلال موسم الأمطار يمكن لماء ضحل أن يغطي القشرة الملحية المسطحة جدًا، فينشئ سطحًا عاكسًا متصلًا. الظاهرة انعكاس مائي وليست تحول الملح إلى زجاج.', 'سبخات وسهول ملحية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي ترتيب يمثل انتقال الرواسب الصحيح في نظام نهر جليدي ثم ذوبانه؟', '["يحمل الجليد ركامًا غير مفروز، بينما تفرز مياه الذوبان الحبيبات في رواسب طبقية","يفرز الجليد الحبيبات بدقة، بينما يترك ماء الذوبان ركامًا غير مفروز","كلاهما يترك رواسب ملحية فقط","لا ينقل الجليد إلا الطين ولا ينقل الماء الحصى"]'::jsonb, 0, 45, 17, 'multi', 'الركام الجليدي المباشر (التيل) خليط غير مفروز من أحجام متعددة، أما الجداول الجليدية فتفرز المواد بحسب سرعة الجريان وتبني رواسب طبقية مثل السهول الغسلية والإسكرات.', 'رواسب جليدية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'لماذا تُعد بحيرة بايكال مثالًا لبحيرة صدعية عميقة لا لحوض حفَرته الأنهار الجليدية أساسًا؟', '["تقع داخل فوهة نيزكية دائرية","نشأت خلف ركام جليدي طرفي حديث","تشغل منطقة قارية متمددة تهبط بين صدوع نشطة","عزلها حاجز رملي عن المحيط"]'::jsonb, 2, 45, 18, 'multi', 'يقع حوض بايكال ضمن نظام صدعي قاري نشط؛ أدى التمدد والهبوط الطويلان إلى حوض شديد العمق تراكمت فيه سماكات كبيرة من الرواسب.', 'بحيرات صدعية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'في جزيرة بركانية محيطية، ما الدليل التضاريسي الأكثر اتساقًا مع انتقال الصفيحة فوق بقعة ساخنة شبه ثابتة؟', '["سلسلة براكين يزداد عمرها تدريجيًا بعيدًا عن البركان النشط","حلقة جبال متساوية العمر حول قارة","أخاديد نهرية تتجه كلها شمالًا","كثبان تتناقص حجومها نحو الساحل"]'::jsonb, 0, 45, 19, 'multi', 'تتكون براكين جديدة فوق مصدر الصهارة، ثم تحملها حركة الصفيحة بعيدًا فتخمد وتتعرض للتعرية؛ لذا يسجل تدرج الأعمار اتجاه حركة الصفيحة، كما في سلسلة هاواي–الإمبراطور.', 'بقع ساخنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما الآلية التي تنشئ المدرجات النهرية المتعاقبة على جانبي وادٍ؟', '["ترتفع أمواج المد فتقص درجات متساوية داخل اليابسة","تترسب الحمم دوريًا داخل النهر فقط","يتحول النهر من بناء سهل فيضي إلى الحت الرأسي، فيترك أسطح الفيضان القديمة أعلى المجرى","تذيب المياه الجوفية طبقات أفقية من قاع الوادي"]'::jsonb, 2, 45, 20, 'multi', 'عندما ينخفض مستوى الأساس أو ترتفع اليابسة أو يتغير التصريف، يعمّق النهر مجراه. تبقى أجزاء من السهل الفيضي الأقدم معلقة كمدرجات تسجل مراحل سابقة للوادي.', 'جيومورفولوجيا نهرية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي وصف يميز الينابيع الحارة عن السخانات النافورية (الغيْزرات) من حيث آلية الثوران؟', '["كل ينبوع حار يثور دوريًا بالضرورة","لا يسخن الغيزر إلا من أشعة الشمس","ينشأ الغيزر فقط عند التقاء نهرين جليديين","يحتاج الغيزر إلى شبكة قنوات تقيد الحمل الحراري فتسمح بتراكم الضغط ثم التفريغ الدوري"]'::jsonb, 3, 45, 21, 'multi', 'يتطلب الغيزر حرارة وماءً ونظام قنوات مناسبًا؛ يرفع الحبس ضغط الماء فيبقى فائق السخونة، ثم يؤدي بدء الغليان وانخفاض الضغط إلى تفريغ انفجاري متكرر. الينبوع الحار المفتوح يدور ماؤه عادة بلا ثوران.', 'حرارة أرضية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'ما الذي يفسر بقاء صخور متحركة في مضمار السباق بوادي الموت وتركها مسارات طويلة؟', '["مجال مغناطيسي يسحب الصخور الحديدية","صفائح جليد رقيقة تتكسر وتدفعها رياح خفيفة فوق طين مبلل","زلازل يومية تقذفها بالتتابع","سيول عميقة تحملها وهي طافية"]'::jsonb, 1, 45, 22, 'multi', 'كشفت المراقبة أن البرك الضحلة تتجمد ليلًا حول الصخور، ثم تتكسر ألواح الجليد عند الذوبان وتدفعها الرياح ببطء فوق السطح الطيني الزلق، فتنقش المسارات.', 'ظواهر صحراوية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'أي تسلسل يصف نشأة الجزيرة الحاجزية الساحلية على نحو أدق؟', '["تبني الأنهار الجليدية جدارًا صخريًا عموديًا في المدار","ينهار بركان خطي وتملأه مياه عذبة","تعيد الأمواج والتيارات الساحلية توزيع الرمل في شريط موازٍ للشاطئ يفصله خليج أو بحيرة ضحلة","تذيب الأمواج الحجر الجيري تحت قارة فتفصلها كاملة"]'::jsonb, 2, 45, 23, 'multi', 'الجزر الحاجزية أجسام رملية طويلة موازية للساحل تفصلها عنه بحيرات أو خلجان ضحلة، وتعيد الأمواج والتيارات والانجراف الساحلي تشكيلها باستمرار، لذلك فهي تضاريس ديناميكية.', 'تضاريس ساحلية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_36, 'لماذا تظهر شلالات الترافرتين على هيئة مصاطب متتابعة في مواقع مثل باموق قلعة؟', '["تفقد المياه الغنية بالبيكربونات ثاني أكسيد الكربون فتترسب كربونات الكالسيوم عند الحواف","تتجمد الحمم البازلتية في طبقات بيضاء","تنحت الرياح درجات في الجرانيت ثم تملؤها الأمطار","تضغط الصفائح رواسب الملح إلى سلالم منتظمة"]'::jsonb, 0, 45, 24, 'multi', 'تصعد مياه حرارية محملة بالكالسيوم والبيكربونات، وعند انكشافها يخرج ثاني أكسيد الكربون فتترسب كربونات الكالسيوم كترافرتين. يتركز الترسيب عند الحواف فيبني أحواضًا ومصاطب بيضاء.', 'ترسيب كيميائي');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_37 uuid;
BEGIN
  SELECT id INTO v_sync_id_37 FROM quizzes WHERE title = 'حدود سياسية وجغرافيا تاريخية' LIMIT 1;
  IF v_sync_id_37 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('حدود سياسية وجغرافيا تاريخية', 'جغرافيا', '', 'high', 'ar', true)
    RETURNING id INTO v_sync_id_37;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'وفق الحدود البرية المعترف بها دوليًا في عام 2026، أي دولتين تفصل بينهما حدود تمتد على خط عرض 49° شمالًا لمسافة كبيرة، لكنها لا تلتزم به كاملًا؟', '["الولايات المتحدة والمكسيك","كندا والولايات المتحدة","النرويج والسويد","روسيا وكازاخستان"]'::jsonb, 1, 35, 0, 'multi', 'رسمت اتفاقية 1818 جانبًا مهمًا من الحدود الأمريكية الكندية على خط العرض 49 من بحيرة الغابات إلى جبال روكي، ثم وُسع المسار غربًا باتفاقية أوريغون عام 1846. لكن الحدود تنحرف عنه حول البحيرات العظمى وألاسكا ومناطق أخرى، لذلك ليست خطًا موازيًا كاملًا.', 'حدود فلكية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي دولة تُحاط أراضيها البرية بالكامل بدولة جنوب أفريقيا، وفق الوضع السياسي في عام 2026؟', '["ليسوتو","إسواتيني","بوتسوانا","ناميبيا"]'::jsonb, 0, 30, 1, 'multi', 'ليسوتو دولة جيبية ذات سيادة محاطة بجنوب أفريقيا من جميع الجهات. أما إسواتيني فتجاور جنوب أفريقيا وموزمبيق، في حين تمتلك بوتسوانا وناميبيا حدودًا مع عدة دول.', 'الدول الجيبية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي إقليم روسي يقع منفصلًا عن بقية أراضي روسيا بين بولندا وليتوانيا على بحر البلطيق في عام 2026؟', '["كاريليا","تشوكوتكا","كالينينغراد","داغستان"]'::jsonb, 2, 30, 2, 'multi', 'أوبلاست كالينينغراد جزء من روسيا لكنه منفصل جغرافيًا عن كتلتها الرئيسة، وتحده بولندا وليتوانيا وبحر البلطيق. انتقل القسم الشمالي من بروسيا الشرقية إلى الاتحاد السوفيتي بعد الحرب العالمية الثانية.', 'أقاليم منفصلة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي مضيق يفصل في الوقت نفسه بين إسبانيا والمغرب، وبين المحيط الأطلسي والبحر المتوسط؟', '["مضيق جبل طارق","مضيق البوسفور","مضيق أوترانتو","مضيق مسينا"]'::jsonb, 0, 30, 3, 'multi', 'يقع مضيق جبل طارق بين جنوب إسبانيا وشمال المغرب، ويصل الأطلسي بالمتوسط. وهو لذلك حاجز مائي بين دولتين وقارتين وممر بحري بين حوضين.', 'حدود بحرية ومضائق');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي معاهدة أنهت الحرب المكسيكية الأمريكية سنة 1848 ونقلت إلى الولايات المتحدة مساحة واسعة شملت كاليفورنيا الحالية؟', '["معاهدة آدامز–أونيس","معاهدة أوريغون","معاهدة باريس 1783","معاهدة غوادالوبي هيدالغو"]'::jsonb, 3, 35, 4, 'multi', 'أنهت معاهدة غوادالوبي هيدالغو الحرب عام 1848، واعترفت المكسيك بضم تكساس وتنازلت عن رقعة شاسعة في الغرب والشمال الغربي. أما شراء غادسدن فجاء لاحقًا عام 1853 واستكمل جزءًا من الحد الجنوبي.', 'معاهدات وحدود تاريخية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'عند استقلال الهند البريطانية سنة 1947، ما الكيانان السياديان اللذان أنشأهما قانون استقلال الهند البريطاني؟', '["الهند وبنغلادش","باكستان وبنغلادش","الهند وسريلانكا","الهند وباكستان"]'::jsonb, 3, 35, 5, 'multi', 'أنشأ قانون 1947 دومينيوني الهند وباكستان. وكانت باكستان تتألف من جناحين غربي وشرقي تفصل بينهما الهند؛ استقل الجناح الشرقي باسم بنغلادش عام 1971.', 'تقسيم الدول');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي خط هدنة رُسم سنة 1949 بين إسرائيل والأردن، واشتهر باسم «الخط الأخضر»؟', '["خط سايكس–بيكو","خط الهدنة المحدد على خرائط اتفاقيات رودس","خط بارليف","خط الهدنة بين لبنان وسوريا"]'::jsonb, 1, 35, 6, 'multi', 'نشأ الخط الأخضر من خطوط الهدنة لعام 1949، وسمي بلون القلم المستخدم على الخرائط. نصت اتفاقية الهدنة الأردنية الإسرائيلية على أن الخطوط لا تمس التسويات الإقليمية أو الحدود النهائية، لذا هو خط هدنة تاريخي لا معاهدة حدود نهائية بذاته.', 'خطوط هدنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي خط عرض اعتمدته الهدنة الكورية سنة 1953 بوصفه الحد الفعلي النهائي؟', '["خط العرض 38 كاملًا","خط العرض 39 كاملًا","لم تعتمد خط عرض ثابتًا؛ أنشأت خط ترسيم عسكريًا وفق مواقع الجبهات","خط العرض 37 كاملًا"]'::jsonb, 2, 35, 7, 'multi', 'كان خط العرض 38 أساس التقسيم الأول بعد الحرب العالمية الثانية، لكن اتفاقية هدنة 1953 رسمت خط الترسيم العسكري قرب مواقع القتال، تحيط به منطقة منزوعة السلاح. لذلك لا يطابق الحد الفعلي خط 38 على امتداده.', 'حدود عسكرية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي دولة أفريقية نالت استقلالها سنة 1993 بعد استفتاء، فأصبحت إثيوبيا دولة حبيسة؟', '["إريتريا","جيبوتي","جنوب السودان","الصومال"]'::jsonb, 0, 30, 8, 'multi', 'أفضى استفتاء أشرفت عليه الأمم المتحدة إلى استقلال إريتريا عام 1993. وبخروج الساحل الإريتري من السيادة الإثيوبية فقدت إثيوبيا منفذها إلى البحر الأحمر وأصبحت حبيسة.', 'استقلال وتغير حدود');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي نهر يشكل أجزاء مهمة من الحدود الحالية بين ألمانيا وبولندا، إلى جانب رافده نيسه اللوساتية؟', '["الأودر","الإلبه","الراين","الدانوب"]'::jsonb, 0, 30, 9, 'multi', 'يمثل خط أودر–نيسه أساس الحدود الألمانية البولندية التي تشكلت بعد الحرب العالمية الثانية وأكدتها ألمانيا الموحدة وبولندا بمعاهدة عام 1990. الأودر هو النهر الرئيس في هذا الوصف، والنيسه اللوساتية رافده الحدودي.', 'حدود نهرية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'في تسوية مؤتمر فيينا سنة 1815، أُنشئت «المملكة المتحدة للأراضي المنخفضة» أساسًا بضم أي منطقتين؟', '["هولندا والدنمارك","بلجيكا ولوكسمبورغ فقط","المقاطعات الهولندية شمالًا والأراضي البلجيكية جنوبًا","هولندا وهانوفر"]'::jsonb, 2, 45, 10, 'multi', 'جمع ترتيب ما بعد نابليون المقاطعات الهولندية في الشمال بالأراضي البلجيكية السابقة في الجنوب ضمن مملكة واحدة لتكون حاجزًا شمال فرنسا. انفصلت بلجيكا بثورة 1830 واعترف باستقلالها لاحقًا.', 'مؤتمرات التسوية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي تسوية أوروبية سنة 1648 ارتبطت بالاعتراف باستقلال المقاطعات المتحدة الهولندية والاتحاد السويسري عن الإمبراطورية الرومانية المقدسة؟', '["صلح أوترخت","معاهدة توردسيلاس","صلح وستفاليا","مؤتمر برلين"]'::jsonb, 2, 45, 11, 'multi', 'أنهت معاهدات وستفاليا حرب الثلاثين عامًا سنة 1648، واعترفت رسميًا باستقلال الجمهورية الهولندية والاتحاد السويسري. أما أوترخت فارتبط بحرب الخلافة الإسبانية في القرن الثامن عشر.', 'معاهدات أوروبا');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'ما الوظيفة الجغرافية السياسية الأساسية لـ«ممر واخان» كما تشكل في أواخر القرن التاسع عشر؟', '["منح روسيا منفذًا مباشرًا إلى المحيط الهندي","فصل أراضي الإمبراطورية الروسية عن الهند البريطانية بمنطقة أفغانية عازلة","ربط إيران بالصين عبر سيادة إيرانية","فصل أفغانستان عن الصين كليًا"]'::jsonb, 1, 45, 12, 'multi', 'ثُبت لسان واخان الأفغاني في سياق «اللعبة الكبرى» ليعمل حاجزًا بين مناطق النفوذ الروسية شمالًا والهند البريطانية جنوبًا. وهو يصل أفغانستان بحد قصير مع الصين بدل أن يفصل بينهما.', 'مناطق عازلة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'في خريطة التقسيم الاستعماري لجزيرة غينيا الجديدة قبل الحرب العالمية الأولى، أي قوة كانت تسيطر على النصف الغربي؟', '["هولندا","ألمانيا","بريطانيا","البرتغال"]'::jsonb, 0, 45, 13, 'multi', 'كان الغرب جزءًا من جزر الهند الشرقية الهولندية، بينما تقاسم الشرق نفوذ بريطاني/أسترالي في الجنوب وألماني في الشمال الشرقي. يفسر هذا الإرث بقاء الجزيرة اليوم مقسمة بين إندونيسيا وبابوا غينيا الجديدة.', 'تقسيم استعماري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي مبدأ قانوني استُخدم على نطاق واسع عند استقلال دول أمريكا اللاتينية ثم أفريقيا، ويقضي باحترام الحدود الإدارية السابقة بوصفها حدودًا دولية؟', '["أوتي بوسيديتيس يوريس","حرية البحار","الحدود الطبيعية الحتمية","السيادة المشتركة الدائمة"]'::jsonb, 0, 50, 14, 'multi', 'يقضي مبدأ uti possidetis juris بأن ترث الدول الجديدة الحدود الإدارية التي كانت قائمة عند الاستقلال، بهدف تقليل الفراغ والنزاع الإقليمي. أكدته محكمة العدل الدولية في قضية النزاع الحدودي بين بوركينا فاسو ومالي.', 'قانون الحدود');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي نوع من الخطوط يمثل «خط السيطرة» في كشمير وفق اتفاق شملا لعام 1972؟', '["حد دولي نهائي رسمته الأمم المتحدة بين الهند والصين","خط فصل للسيطرة الفعلية بين الهند وباكستان، وليس حدًا دوليًا نهائيًا متفقًا عليه","حد استعماري بين أفغانستان وباكستان","خط ملاحة نهرية بين الهند وبنغلادش"]'::jsonb, 1, 50, 15, 'multi', 'أعاد اتفاق شملا تسمية خط وقف إطلاق النار في كشمير «خط السيطرة» وألزم الطرفين باحترامه دون مساس بالمواقف القانونية لكل منهما. لذا يصف توزيع السيطرة بين الهند وباكستان، ولا يحسم السيادة النهائية.', 'حدود متنازع عليها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي وصف يميز «خط ماكماهون» المرسوم في مؤتمر شملا 1914؟', '["حد نهائي بين الهند وباكستان في البنجاب","خط اقترح للحد بين التبت والهند البريطانية في القطاع الشرقي، وتنازع الصين في شرعيته","خط فصل روسي أفغاني في واخان","حد بحري بين الصين واليابان"]'::jsonb, 1, 50, 16, 'multi', 'ارتبط خط ماكماهون بتفاهمات مؤتمر شملا بين ممثلي بريطانيا والتبت، وهو أساس مطالبة الهند بحدها الشرقي في منطقة أروناتشال براديش. لم تقبل الصين الاتفاق، ولذلك بقيت شرعية الخط موضع نزاع.', 'حدود آسيوية متنازع عليها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي قرار اتخذه مؤتمر منظمة الوحدة الأفريقية بالقاهرة سنة 1964 بشأن الحدود الموروثة؟', '["إعادة رسم كل الحدود وفق التوزيع اللغوي","إلغاء الحدود بين الدول الأعضاء","احترام الحدود القائمة عند نيل الاستقلال","إعادة حدود أفريقيا إلى وضع عام 1884"]'::jsonb, 2, 45, 17, 'multi', 'أعلن قرار القاهرة AHG/Res.16(I) التزام الدول الأعضاء باحترام الحدود القائمة وقت الاستقلال. كان المقصود الحد من موجة نزاعات إعادة الرسم في قارة ورثت حدودًا استعمارية كثيرة.', 'حدود أفريقيا');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'عند تفكك تشيكوسلوفاكيا سلميًا في 1 يناير 1993، ما الدولتان اللتان ورثتا أراضيها؟', '["التشيك وسلوفينيا","سلوفاكيا وكرواتيا","التشيك والمجر","جمهورية التشيك وسلوفاكيا"]'::jsonb, 3, 40, 18, 'multi', 'أنهى «الطلاق المخملي» الاتحاد التشيكوسلوفاكي وأنشأ جمهورية التشيك والجمهورية السلوفاكية. لا علاقة لسلوفينيا، وهي إحدى جمهوريات يوغوسلافيا السابقة، بهذا الانقسام.', 'تفكك الدول');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي جمهورية سوفيتية سابقة فصلت جغرافيًا بين الكتلة الرئيسة لأرمينيا وإقليم ناخيتشيفان التابع لأذربيجان بعد 1991؟', '["جورجيا","تركمانستان","أوكرانيا","أرمينيا نفسها تفصل الكتلة الأذربيجانية الرئيسة عن ناخيتشيفان"]'::jsonb, 3, 45, 19, 'multi', 'ناخيتشيفان جمهورية ذاتية الحكم تابعة لأذربيجان لكنها منفصلة عن كتلتها الرئيسة؛ تقع أرمينيا بينهما، بينما يحد ناخيتشيفان أيضًا إيران وتركيا. لذلك الصياغة الأدق أن أراضي أرمينيا تفصل الجزأين الأذربيجانيين.', 'أقاليم منفصلة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'بموجب اتفاقية الأمم المتحدة لقانون البحار، ما خط الأساس المعتاد الذي يقاس منه عرض البحر الإقليمي؟', '["خط أدنى الجَزْر على طول الساحل كما يظهر في الخرائط المعترف بها رسميًا","حافة الجرف القاري الجيولوجية","خط يبعد 200 ميل بحري عن الساحل","الحد الخارجي للمياه الدولية"]'::jsonb, 0, 50, 20, 'multi', 'تنص المادة 5 من الاتفاقية على أن خط الأساس العادي هو خط أدنى الجزر المرسوم على خرائط ساحلية كبيرة المقياس معترف بها رسميًا من الدولة الساحلية. أما 200 ميل بحري فترتبط بالمنطقة الاقتصادية الخالصة، لا بخط الأساس.', 'حدود بحرية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'في ترسيم بحر إقليمي بين دولتين متقابلتين أو متجاورتين وفق المادة 15 من اتفاقية قانون البحار، ما القاعدة الافتراضية عند غياب اتفاق أو حقوق تاريخية أو ظروف خاصة؟', '["امتداد الحدود البرية في خط مستقيم دائمًا","منح البحر كله للدولة ذات الساحل الأطول","خط الوسط المتساوي البعد عن أقرب نقاط خطي الأساس","اتباع أعمق مجرى ملاحي دون استثناء"]'::jsonb, 2, 50, 21, 'multi', 'تمنع المادة 15 مد البحر الإقليمي وراء خط وسط تتساوى نقاطه في البعد عن أقرب نقاط خطوط الأساس، ما لم يوجد اتفاق مختلف أو عنوان تاريخي أو ظروف خاصة تستلزم حلًا آخر.', 'ترسيم بحري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي خط حدودي استعماري رُسم باتفاق 1893 بين الأمير عبد الرحمن خان والسير مورتيمر دوراند؟', '["خط رادكليف بين الهند وباكستان","خط ماكماهون بين الهند والتبت","خط كرزون بين بولندا وروسيا","خط دوراند بين أفغانستان والهند البريطانية، وهو اليوم أساس الحدود الأفغانية الباكستانية"]'::jsonb, 3, 45, 22, 'multi', 'حدد اتفاق 1893 نطاقي النفوذ الأفغاني والبريطاني بخط دوراند. ورثت باكستان الجانب البريطاني عند استقلالها عام 1947، لكن قبول الخط حدًا دوليًا ظل موضع خلاف سياسي أفغاني باكستاني.', 'حدود استعمارية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'في عام 1919، أي ممر منحته أفغانستان للاتحاد السوفيتي فعليًا بفعل الحدود القائمة؟', '["ممر سووالكي","ممر فولدا","ممر كابريفي","لم تمنح ممرًا؛ السؤال يفترض واقعة غير صحيحة، وممر واخان كان قد ثُبت قبل قيام الاتحاد السوفيتي"]'::jsonb, 3, 50, 23, 'multi', 'هذا سؤال تدقيق زمني: الاتحاد السوفيتي لم يُنشأ إلا سنة 1922، وممر واخان تشكل في ترتيبات أواخر القرن التاسع عشر كمنطقة أفغانية عازلة بين الإمبراطوريتين الروسية والبريطانية. لذا لا تصح نسبة «منحه للاتحاد السوفيتي» إلى 1919.', 'تدقيق زمني جغرافي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_37, 'أي معاهدة عام 1923 حددت الإطار الدولي لحدود تركيا الحديثة وحلت محل معاهدة سيفر غير المنفذة؟', '["معاهدة سان ستيفانو","معاهدة لوزان","معاهدة برلين 1878","معاهدة مونترو"]'::jsonb, 1, 45, 24, 'multi', 'اعترفت معاهدة لوزان سنة 1923 بحدود الدولة التركية الجديدة في إطار تسوية ما بعد حرب الاستقلال التركية، وحلت محل تسوية سيفر لعام 1920 التي لم تدخل حيز التطبيق. أما مونترو 1936 فنظمت نظام المضائق التركية.', 'معاهدات الشرق الأوسط');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_38 uuid;
BEGIN
  SELECT id INTO v_sync_id_38 FROM quizzes WHERE title = 'أحداث ومصطلحات الشونين الكلاسيكي' LIMIT 1;
  IF v_sync_id_38 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('أحداث ومصطلحات الشونين الكلاسيكي', 'أنمي', '', 'challenge', 'ar', true)
    RETURNING id INTO v_sync_id_38;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في دراغون بول، عندما شرح كايو-ساما تقنية «كايو-كين»، ما الذي يميزها عن التحول إلى هيئة ثابتة؟', '["تحول طاقة الخصم إلى طاقة دائمة للمستخدم","تمنح الخلود ما دام المستخدم محافظًا على هالته","تستدعي طاقة الكائنات الحية في كرة واحدة","تضاعف الطاقة والسرعة مؤقتًا مع تعريض الجسد لإجهاد خطير"]'::jsonb, 3, 30, 0, 'multi', 'كايو-كين تضخّم طاقة غوكو وسرعته وقوته لفترة قصيرة، لكن رفع معاملها فوق قدرة الجسد يمزقه بالإجهاد. أما جمع طاقة الكائنات في كرة فهو مبدأ غينكي داما، لا كايو-كين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'أي شرط حاسم مكّن غوهان من هزيمة سيل الكامل في صدام الكاميها ميها الأخير؟', '["اندماجه المؤقت مع غوكو","دعم غوكو المعنوي من العالم الآخر وتشتيت فيجيتا لسيل","امتصاصه طاقة أندرويد 18","استخدامه كايو-كين فوق السوبر سايان"]'::jsonb, 1, 30, 1, 'multi', 'كان غوهان مصابًا ويطلق الموجة بيد واحدة؛ شجعه غوكو من العالم الآخر، ووفرت ضربة فيجيتا اللحظة التي كسر فيها غوهان مقاومة سيل. لم يقع اندماج أو امتصاص أو كايو-كين في هذا الحسم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في ون بيس، لماذا كانت قدرة إنيل الكهربائية عاجزة عن إيذاء لوفي مباشرة رغم تفوقها الهائل على معظم خصوم سكايبيا؟', '["لأن لوفي كان يستخدم هاكي التسلح دون وعي","لأن جسد لوفي المطاطي عازل للكهرباء","لأن قبعة القش تمتص الكهرباء","لأن جرس شاندورا أبطل فاكهة إنيل"]'::jsonb, 1, 25, 2, 'multi', 'جسد لوفي المطاطي لا يوصل الكهرباء، ولذلك لم تعمل صواعق إنيل عليه كما عملت على الآخرين. هذه مواجهة خصائص بين فاكهة المطاط وغورو غورو نو مي، وليست نتيجة هاكي أو أداة خارجية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'ما الوظيفة الأصلية لـ«البونغليف» ذي اللون الأزرق المعتاد مقارنةً بـ«رود بونغليف» الأحمر في ون بيس؟', '["الأزرق ينقل معلومات تاريخية أو تعليمات، والأحمر يعطي نقطة جغرافية لازمة لتحديد Laugh Tale","الأزرق يحدد إحداثيًا واحدًا للـLaugh Tale، والأحمر يسجل أسلحة فقط","الأزرق لا يقرأه إلا أصحاب حرف D، والأحمر يقرأه الجميع","الأزرق صنعته الحكومة العالمية، والأحمر صنعه القراصنة"]'::jsonb, 0, 35, 3, 'multi', 'البونغليفات العادية تحمل نصوصًا تاريخية أو معلومات، ومنها ما يرشد إلى موضع نوع آخر؛ أما أحجار الطريق الحمراء الأربعة فتعطي نقاطًا يُستخرج من تقاطعها موقع Laugh Tale.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في نظام التشاكرا بناروتو، ماذا يحدث عند مزج التحول في طبيعة الرياح بالتحول في طبيعة الماء وفق المثال الأشهر في السلسلة؟', '["ينتج عنصر الخشب","ينتج عنصر الجليد","ينتج عنصر الغليان","ينتج عنصر المغناطيس"]'::jsonb, 1, 25, 4, 'multi', 'إطلاق الجليد (Hyōton) كِكّاي غِنكاي يمزج طبيعتي الماء والرياح، كما يظهر مع هاكو. الخشب يمزج الماء والأرض، بينما الغليان يمزج الماء والنار.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'لماذا عُدّ ختم «الشينيغامي» الذي استخدمه الهوكاغي الثالث ضد أوروتشيمارو تضحية لا نينجتسو عادية؟', '["لأنه يمحو ذاكرة المستخدم نهائيًا","لأنه ينقل عمر المستخدم إلى الخصم","لأن الشينيغامي يلتهم روح المستخدم بعد انتزاع روح الهدف","لأنه يمنع المستخدم من استعمال التشاكرا شهرًا"]'::jsonb, 2, 30, 5, 'multi', 'شيكي فوجين يستدعي إله الموت لانتزاع الروح وختمها، ثم تكون روح المستعمل نفسه ثمن التقنية. لذلك مات هيروزن بعد أن ختم ذراعي أوروتشيمارو، كما مات ميناتو بعد استعمالها سابقًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'أي فرق جوهري يفصل «الشikai» عن «البانكاي» في بليتش؟', '["الشikai إطلاق أول لاسم وقوة الزانباكتو، والبانكاي إطلاقها النهائي المكتمل","الشikai خاص بالكيدو، والبانكاي خاص بالهولو","الشikai لا يحتاج زانباكتو، والبانكاي يحتاج سيفين","الشikai لا يستعمله إلا القادة، والبانكاي متاح لكل الشينيغامي"]'::jsonb, 0, 25, 6, 'multi', 'الشikai هو مرحلة الإطلاق الأول للزانباكتو بعد معرفة اسمه، بينما البانكاي هو الإطلاق النهائي الذي يتطلب تجسيد روح السيف وإخضاعها عادةً. امتلاك البانكاي نادر ومقياس تقليدي لقدرة القادة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'ما الذي كشفه أوراهارا عن «الهوجيوكو» بما يصحح الفكرة القائلة إنه مجرد أداة تفصل حدود الشينيغامي والهولو؟', '["أنه يخزن أرواحًا بشرية ثم يعيدها للحياة","أنه يحقق رغبات المحيطين به إذا امتلكوا القدرة الكامنة لتحقيقها","أنه يلغي أسماء الزانباكتو","أنه نسخة صناعية من ملك الأرواح بلا إرادة"]'::jsonb, 1, 35, 7, 'multi', 'يشرح أوراهارا أن القوة الحقيقية للهوجيوكو هي التقاط قلوب من حوله وتجسيد رغباتهم حين تكون لديهم قابلية تحقيقها؛ تجاوز حدود الشينيغامي والهولو كان تطبيقًا لهذه الخاصية، لا تعريفها الكامل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في هنتر × هنتر، أي مبدأ من مبادئ النين الأربعة يخفي الهالة ويجعل المستخدم أكثر عرضة لضربات النين؟', '["زيتسو Zetsu","تين Ten","رين Ren","هاتسو Hatsu"]'::jsonb, 0, 20, 8, 'multi', 'زيتسو يغلق عقد الهالة ويوقف تدفقها، فيفيد في إخفاء الحضور واستعادة النشاط، لكنه يترك الجسد بلا غلاف هالة واقٍ أمام هجوم نين. تين يحافظ على الغلاف، ورين يضخم الخرج.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'كيف زاد كورابيكا فاعلية «Chain Jail» إلى حد إخضاع أعضاء العنكبوت الأقوياء؟', '["ضحّى بحاسة البصر كلما استخدم السلسلة","اشترط أن يكون القمر مكتملًا","ربطها بقسم لاستخدامها على العنكبوت فقط، على أن يموت إن استعملها على غيرهم","نقل ملكية السلسلة إلى الإمبراطور تايم"]'::jsonb, 2, 30, 9, 'multi', 'فرض كورابيكا قيدًا وقسمًا شديدين: Chain Jail مخصصة لأعضاء فرقة العنكبوت، واستخدامها على سواهم يفعّل Judgement Chain المغروسة في قلبه ويقتله. شدة المخاطرة رفعت قوة السلسلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في يو يو هاكوشو، ما الصفة التي جعلت «ريغان» يوسكي ملائمًا لمواجهة الأرواح والشياطين؟', '["إنه سيف مصنوع من طاقة شيطانية مسروقة","إنه طاقة روحية مركزة يطلقها من إصبعه","إنه تعويذة توقف الزمن","إنه حاجز يعكس أي هجوم جسدي"]'::jsonb, 1, 20, 10, 'multi', 'الريغان، أو المسدس الروحي، يركز ريكي يوسكي في طلقة من السبابة. نمو مخزونه الروحي وتدريبه يرفعان عدد الطلقات وقوتها؛ ليست التقنية سيفًا أو حاجزًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'ما الغرض الحقيقي من بطولة الظلام في خطة توغورو الأصغر، بعيدًا عن الجائزة الرسمية للبطولة؟', '["الحصول على كتاب أسرار عالم الأرواح","فتح بوابة دائمة إلى عالم البشر","استعادة جسده البشري والتخلي عن الشيطنة","إجبار يوسكي على بلوغ قوة تكفي لمنحه قتالًا حتى الموت"]'::jsonb, 3, 30, 11, 'multi', 'دفع توغورو يوسكي وفريقه إلى البطولة ورفع الضغط عليهم كي ينضج يوسكي إلى خصم يستطيع قتاله بكامل قوته. كان يبحث عن اختبار نهائي وعقاب ذاتي مرتبط بماضيه، لا عن ثروة البطولة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في سانت سيا، ما العلاقة بين «الكوزمو» والحاسة السابعة التي يحتاجها البرونزيون لمجاراة فرسان الذهب؟', '["الحاسة السابعة تلغي الكوزمو وتستبدله بالسحر","الكوزمو درع مادي والحاسة السابعة سلاح مستقل","الحاسة السابعة لا تُستخدم إلا في العالم السفلي","إيقاظ الحاسة السابعة يعني تفجير الكوزمو إلى مستوى يتجاوز الحواس الست"]'::jsonb, 3, 25, 12, 'multi', 'الكوزمو هو الكون الداخلي الذي يحرقه القديس ليولد القوة؛ وإدراك الحاسة السابعة يرفع هذا الاحتراق إلى المجال الذي يتحرك ويقاتل فيه فرسان الذهب، بما في ذلك سرعة الضوء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'لماذا لم يكن الوصول إلى «الحاسة الثامنة» في فصل هاديس مجرد زيادة هجومية جديدة؟', '["لأنها تحول الدرع البرونزي إلى ذهبي دائمًا","لأنها تعيد جميع الموتى إلى الحياة","لأنها تسمح بالذهاب إلى العالم السفلي أحياءً مع الاحتفاظ بالإرادة والقدرة","لأنها تمنع آلهة الأولمب من استعمال الكوزمو"]'::jsonb, 2, 35, 13, 'multi', 'الحاسة الثامنة، أراياشيكي، تتيح للقديس أن يدخل عالم الموتى دون أن يخضع لقوانينه كروح ميتة فاقدة للحرية. لذا كانت مفتاح غزو عالم هاديس أحياءً، لا مضاعف ضرر بسيطًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في روروني كنشن، لماذا يستخدم كنشن سيف «ساكاباتو» ذا النصل المعكوس؟', '["لأنه لا يستطيع سحب سيف تقليدي من غمده","لأن النصل المعكوس وحده يقطع الدروع","لأنه سلاح رسمي تمنحه حكومة ميجي للشرطة","ليفي بنذره ألّا يقتل بعد عصر الباكوماتسو مع بقائه قادرًا على القتال"]'::jsonb, 3, 20, 14, 'multi', 'يحمل كنشن الساكاباتو كي يقاتل بحافة غير قاتلة بعد أن أقسم ألّا يعود إلى القتل الذي مارسه بصفته هيتوكيري باتوساي. السيف رمز عملي لتكفيره، لا سلاحًا حكوميًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'ما المبدأ الذي يجعل «أماكاكيرو ريو نو هيراميكي» أخطر من بقية تقنيات هيتن ميتسوروغي في تدريب كنشن؟', '["لا تعمل إلا إذا كان السيف مكسورًا","تمتص قوة ضربة الخصم بلا حركة","تتطلب خطوة أولى بالقدم اليسرى تتحدى غريزة المبارز وتحافظ على استمرار الدوران","تستلزم قتل المعلم لانتقال التقنية سحريًا"]'::jsonb, 2, 35, 15, 'multi', 'سر التقنية ضربة باتّوجوتسو فائقة تتقدم فيها القدم اليسرى؛ الخطوة غير المألوفة تمنع توقف الجسد وتزيد التسارع، لكن الخطأ يعرّض الساق والنفس لخطر قاتل. اجتيازها ارتبط أيضًا بإرادة كنشن في الحياة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في ناروتو، لماذا لم يكن «إيزاناغي» عند دانزو وسيلة مجانية لإلغاء الموت أو الإصابة؟', '["لأنه يحتاج موافقة الكيوبي في كل مرة","لأنه يعيد الزمن للعالم كله ويحذف ذاكرة المستخدم","لأنه يعمل مرة واحدة لكل عشيرة لا لكل شخص","لأن كل تفعيل يستهلك شارينغان ويغلق عينًا مستخدمة بعد مدة محدودة"]'::jsonb, 3, 30, 16, 'multi', 'إيزاناغي يحول الضرر والموت الواقعين على المستخدم إلى وهم خلال نافذة قصيرة، لكنه يفقد نور الشارينغان التي تديره. لذلك زرع دانزو عدة عيون في ذراعه لتمديد مرات الاستخدام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في ون بيس، ما الفارق الوظيفي بين «مانترا» سكايبيا و«هاكي التنبؤ» كما اتضح لاحقًا؟', '["لا فرق جوهريًا؛ مانترا هو الاسم المحلي في سكايبيا لهاكي التنبؤ","مانترا قدرة من فاكهة شيطان، والهاكي تقنية سيف","مانترا تسمع الموتى فقط، والهاكي يقرأ النصوص","مانترا أقوى دائمًا لأنها لا تعتمد على الهدوء"]'::jsonb, 0, 30, 17, 'multi', 'المصطلحان يشيران إلى القدرة نفسها: استشعار حضور الآخرين ونواياهم وحركاتهم. سماها أهل جزر السماء «مانترا»، ثم عرّف رايلي التصنيف العام باسم كينبونشوكو هاكي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في بليتش، ما الذي يجعل «غارغانتا» مختلفًا عن «سينكايمون» في التنقل بين العوالم؟', '["غارغانتا بوابة للبشر فقط، وسينكايمون للهولو فقط","كلاهما اسم للبوابة نفسها بحسب الترجمة","غارغانتا ممر فضائي يستخدمه الهولو والأرانكار عبر الفراغ، وسينكايمون بوابة الشينيغامي بين عالم الأرواح وعالم البشر","سينكايمون لا ينقل الأجساد بينما غارغانتا لا ينقل الأرواح"]'::jsonb, 2, 30, 18, 'multi', 'يفتح الهولو والأرانكار الغارغانتا في الفراغ الواقع بين العوالم، بينما يستعمل الشينيغامي السينكايمون للعبور المنظم، مارّين بالدانغاي عند الربط بين مجتمع الأرواح وعالم البشر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_38, 'في هنتر × هنتر، لماذا كان تحويل غون ضد نيفربيتو أقرب إلى «عقد نين» منه إلى تحول تدريبي طبيعي؟', '["لأنه قدّم كل موهبته ومستقبله المحتمل ثمنًا لقوة كان سيبلغها بعد سنوات","لأنه استعار هالة كيلوا ثم أعادها","لأنه أكل قلب ملك النمل","لأنه فعّل تخصص الإمبراطور تايم"]'::jsonb, 0, 35, 19, 'multi', 'في غضبه قيّد غون نفسه بحيث يحصل فورًا على كل القوة التي قد يبلغها مستقبلًا، مقابل التضحية بموهبته وقدرته وحالته الجسدية. لذلك كان الأثر اللاحق مدمرًا ولم يكن مرحلة تدريب قابلة للتكرار.', '');
  END IF;
END $$;

