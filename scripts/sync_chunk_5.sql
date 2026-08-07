DO $$
DECLARE
  v_sync_id_79 uuid;
BEGIN
  SELECT id INTO v_sync_id_79 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 24' LIMIT 1;
  IF v_sync_id_79 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 24', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_79;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'في المتوسط، كم يستهلك الأمريكيون من أي من المواد التالية بمعدل 100 رطل (حوالي 45 كجم) في الثانية الواحدة؟', '["الشوكولاتة","البطاطس","الدونات","الكوكايين"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, '"سانتا كلوز" (⁦Santa Claus⁩) هو نوع من أنواع الشمام.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'أين يقع المقر الرئيسي لمجموعة "إنديتكس" (⁦Inditex⁩)، أكبر مجموعة أزياء في العالم، في مقاطعة لا كورونيا الإسبانية؟', '["سانخينخو (⁦Sanjenjo⁩)","موخيا (⁦Muxía⁩)","أرتيخو (⁦Arteijo⁩)","أوردينس (⁦Órdenes⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هي ثاني أكبر لغة محلية يتحدث بها السكان في إسبانيا من حيث عدد المتحدثين؟', '["البرتغالية","الإسبانية","الفرنسية","الكتالونية"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هي قطعة الملابس التي يرتديها الرجل الإسكتلندي عادةً في حفلات الزفاف؟', '["التنورة الإسكتلندية (⁦Kilt⁩)","تنورة عادية","فستان","أردية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما المعروض في متحف "مدام توسو" في لندن؟', '["ملابس المصممين","تماثيل الشمع","بكرات أفلام لم تُعرض بعد","سيارات كلاسيكية قديمة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'أي نوع من الحيوانات كان "هارامبي"، الذي تم إطلاق النار عليه بعد سقوط طفل في حظيرته في حديقة حيوان سينسيناتي؟', '["نمر","باندا","غوريلا","تمساح"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هي الكلمة الألمانية التي تعني "ملعقة"؟', '["غابل (⁦Gabel⁩)","ميسر (⁦Messer⁩)","إسشتيبشن (⁦Essstäbchen⁩)","لوفل (⁦Löffel⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'من لغات أي دولة تنحدر الكلمتان "بنغالو" (منزل من طابق واحد) و"شامبو"؟', '["الهند","بابوا غينيا الجديدة","إثيوبيا","الصين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هي العملة الرسمية لبولندا؟', '["الروبل","الزلوتي","اليورو","الكرونة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'في أي دولة تأسست شركة إطارات "ميشلان" عام 1889‏؟', '["المملكة المتحدة","إيطاليا","فرنسا","ألمانيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هو البرج الفلكي لشخص ولد في عيد الحب (14 فبراير)‏؟', '["الحوت","الجدي","العقرب","الدلو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هو السفر الأول من العهد القديم؟', '["سفر التكوين","سفر الخروج","سفر اللاويين","سفر العدد"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'أطلق شركة ماكنتوش أسماء فصائل السنوريات الكبيرة على ستة من أنظمة التشغيل الخاصة بها. فما هو السنور الكبير الذي أطلقت ماكنتوش اسمه على إصدارها لعام 2007‏؟', '["تايجر (النمر)","ليوبارد (الفهد)","بانثر (النمر الأسود)","بوما"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ظهر مصطلح "بريد عشوائي" (⁦Spam⁩) قبل ظهور المنتج الغذائي المعلب الشهير "سبام" (⁦Spam⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'أين تقع محطة القطار ذات الاسم الطويل جداً "⁦Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch⁩"؟', '["مولدوفا","جمهورية التشيك","الدنمارك","ويلز"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'المنظمة البريطانية "كامرا" (⁦CAMRA⁩) هي اختصار لـ "الحملة من أجل البيرة الحقيقية" (⁦The Campaign for Real Ale⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'أي من مصانع البيرة المملوكة لأمريكيين تصدرت المبيعات في البلاد من حيث الحجم في عام 2015‏؟', '["أنهاوزر بوش (⁦Anheuser Busch⁩)","دي جي يونغلينغ آند سون (⁦D⁩. ⁦G⁩. ⁦Yuengling and Son⁩, ⁦Inc⁩)","شركة بوسطن للبيرة (⁦Boston Beer Company⁩)","ميلر كورس (⁦Miller Coors⁩)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_79, 'ما هو شكل اللعبة الشهيرة التي اخترعها البروفيسور المجري إرنو روبيك؟', '["كرة","أسطوانة","مكعب","هرم"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_80 uuid;
BEGIN
  SELECT id INTO v_sync_id_80 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 3' LIMIT 1;
  IF v_sync_id_80 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 3', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_80;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'مترو أنفاق نيويورك هو أقدم مترو أنفاق تحت الأرض في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'في مجموعة أوراق اللعب القياسية، من هو ملك الرمز (النقش) الوحيد الذي يظهر بدون شارب؟', '["البستوني","القلوب","الديناري","السباتي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'ما هي الوجهة التي كانت تقصدها الطائرة المفقودة في الرحلة (⁦MH370⁩)‏؟', '["كوالالمبور","سنغافورة","بكين","طوكيو"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'أي مما يلي هو اسم نظام ياباني للطب البديل، ويعني حرفياً "الضغط بالأصابع"؟', '["أوكيو","ماجيمي","إيكيغاي","شياتسو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'مع أي فرقة كوميدية بريطانية عمل رسام الرسوم المتحركة تيري غيليام؟', '["مونتي بايثون","ذا غوديز","ذا ليغ أوف جينتلمن","ذا بيني دريدفولس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'سُمّي اللون البرتقالي نسبةً إلى فاكهة البرتقال.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'ما هي أغلى توابل العالم من حيث الوزن؟', '["القرفة","الهيل","الزعفران","الفانيليا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'أي جبل يضم أعلى قمة جبلية في إفريقيا؟', '["جبل كينيا، كينيا","جبل ستانلي، جمهورية الكونغو الديمقراطية/أوغندا","جبل بيك، أوغندا","جبل كليمنجارو، تنزانيا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'إذا قمت بزراعة بذور نبات "⁦Quercus robur⁩" (السنديان القوي)، فما الذي سينمو؟', '["أشجار","حبوب","خضروات","زهور"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'ما اسم العملة المستخدمة في إثيوبيا؟', '["الدرهم","البير","الدولار الأمريكي","الراند"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'مادة "أكسيد ثنائي الهيدروجين" هي مادة كيميائية خطيرة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'يقل طول المرأة المتوسطة بمقدار 5 بوصات / 13 سنتيمتراً عن طول الرجل المتوسط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'وفقاً للجمعية البريطانية للبيرة والحانات (⁦BBPA⁩)، ما هو الاسم الأكثر شيوعاً للحانات في المملكة المتحدة؟', '["الأسد الأحمر (⁦Red Lion⁩)","البلوط الملكي (⁦Royal Oak⁩)","الأيل الأبيض (⁦White Hart⁩)","رأس الملك (⁦King''s Head⁩)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'أي من الجامعات التالية ليست من جامعات رابطة اللبلاب (⁦Ivy League⁩) المرموقة؟', '["جامعة بنسلفانيا","ستانفورد","هارفارد","برينستون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'ما هو اسم تلسكوب الفضاء الأكثر شهرة التابع لوكالة ناسا؟', '["العين الكبيرة","نجم الموت","تلسكوب هابل الفضائي","ميلينيوم فالكون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'ما هو أكبر عضو في جسم الإنسان؟', '["القلب","الأمعاء الغليظة","الكبد","الجلد"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'كلمة "⁦Typewriter⁩" هي أطول كلمة يمكن كتابتها باستخدام الصف الأول فقط من لوحة مفاتيح كويرتي (⁦QWERTY⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'إلى كم عدد من الأشياء تشير كلمة "درزن" أو "دزينة" عادةً؟', '["6","12","20","10"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'هل اللغة اللوكسمبورغية هي لغة حقيقية؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_80, 'إذا كنت تسير بسرعة 80 ميلاً في الساعة، فكم من الوقت ستحتاج لقطع مسافة 80 ميلاً؟', '["90 دقيقة","30 دقيقة","50 دقيقة","60 دقيقة"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_81 uuid;
BEGIN
  SELECT id INTO v_sync_id_81 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 4' LIMIT 1;
  IF v_sync_id_81 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 4', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_81;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'الاسم العلمي للأضواء الجنوبية (الشفق القطبي الجنوبي) هو أورورا أوستراليس؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'أي من ألعاب الورق التالية تعتمد على الأرقام والعمليات الحسابية البسيطة؟', '["جو فيش","أونو","تويستر","منشكين"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'أي مما يلي هي عائلة موجودة في لعبة "ذا سيمز"؟', '["العائلة","عائلة سيموليون","عائلة غوث","عائلة براود"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'في اللغة الإنجليزية، ما هو اسم الرمز "&"؟', '["إيت سلاش","علامة و","أوبيلوس","أمبرساند"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما الاسم الذي طُرح به المشروب الغازي بيبسي في الأصل؟', '["شراب براد","ببسين بوب","كارولينا كولا","شراب الببسين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما هي التقنية التي سُميت على اسم حاكم الدنمارك والنرويج في القرن العاشر؟', '["واي فاي","بلوتوث","جي بي إس","الإنترنت"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'كل ثمار الفراولة حمراء اللون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'تأسست مجموعة ليغو في عام 1932.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'الماء النقي يوصل الكهرباء بشكل فعال.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'في عام 2010، عقدت منصة تويتر ومكتبة الكونغرس الأمريكي شراكة لأرشفة كل تغريدة يكتبها المواطنون الأمريكيون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما الاسم الذي يطلق على الطعام الهندي المطبوخ على الفحم في فرن طيني؟', '["برياني","باني بوري","تندوري","تيكي ماسالا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'في أي عام ولدت الملكة إليزابيث الثانية؟', '["1923","1929","1930","1926"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما هي حركة الـ "دابينغ" (⁦Dabbing⁩)‏؟', '["رقصة","إجراء طبي","رياضة","لغة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'الحيوان الوطني لاسكتلندا هو أحادي القرن (اليونيكورن).', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ماذا يسمي البحارة مقدمة القارب؟', '["المؤخرة","الجانب الأيسر","المقدمة","الجانب الأيمن"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما هو الاسم الأخير لـ "بابا جون" الشهير؟', '["تشاودر","ويليامز","أندرسون","شنيتر"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'من هو الممثل الكوميدي الذي أدى صوت شخصية "الحمار" في فيلم "شريك"؟', '["إيدي ميرفي","كريس روك","ريتشارد بريور","بيرني ماك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما معنى الكلمة السويدية "غرونكا" (⁦Grunka⁩) باللغة الإنجليزية؟', '["أشخاص","شيء","مكان","أناناس"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'يُسمح لك ببيع روحك على موقع إيباي (⁦eBay⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_81, 'ما هي الشركة التي استحوذت على شركة تصنيع الكمبيوتر "كومباك" (⁦Compaq⁩) مقابل 25 مليار دولار في عام 2002‏؟', '["توشيبا","أسوس","ديل","هيوليت-باكارد (⁦HP⁩)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_82 uuid;
BEGIN
  SELECT id INTO v_sync_id_82 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 5' LIMIT 1;
  IF v_sync_id_82 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 5', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_82;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'أي من هذه اللغات الهندية لا تنتمي إلى عائلة اللغات الهندو أوروبية؟', '["التاميلية","الهندية","البنجابية","الأردية"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما هو أقصى عدد من نجوم ميشلان يمكن للمطعم الحصول عليه؟', '["أربعة","ثلاثة","خمسة","ستة"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'اسم "موقف الحافلات رقم 16" (⁦Number 16 Bus Shelter⁩) كان اسماً لطفل وافقت عليه حكومة نيوزيلندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'في يناير 2019، تم العثور في لندن على الرفات المدفون لأي مستكشف إنجليزي لأستراليا؟', '["ويليام بورك","أبل تاسمان","ديرك هارتوغ","ماثيو فليندرز"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'كم عدد الحروف في الأبجدية الإنجليزية؟', '["26","30","17","5"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'في لعبة الأدوار متعددة اللاعبين على الإنترنت "ريلم أوف ذا ماد غود" (⁦Realm of the Mad God⁩)، ما هو الدهليز الذي يُعتبر الأكثر صعوبة على نطاق واسع؟', '["عرين الثعبان","ذا شاترز","مقبرة القدماء","مسرح صانع الدمى"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'اليوم الواحد يحتوي على 86400 ثانية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'أي من ألعاب الإيقاع الموسيقي التالية من إنتاج شركة هارمونيكس (⁦Harmonix⁩)‏؟', '["ميت بيت مانيا","غيتار هيرو لايف","دانس دانس ريفولوشن","روك باند"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما هي الكلمة السويدية التي تعني "نافذة"؟', '["⁦Fönster⁩","⁦Hål⁩","⁦Skärm⁩","⁦Ruta⁩"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'اخترع فريدريك رويكهايم الفشار في عام 1871 في الولايات المتحدة الأمريكية، حيث كان يبيع هذه الوجبة الخفيفة في شوارع شيكاغو.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'يتكون الخيار عادةً من ماء بنسبة تزيد عن 90%.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما اسم مجسم السمكة المغنية المتحركة الشهير، الذي يغني أغانٍ معروفة مثل "لا تقلق، كن سعيداً"؟', '["بيغ بيلي باس","السمكة المغنية","سردين","بيغ ماوث بيلي باس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'طبق "فوا جرا" (⁦Foie gras⁩) الشهير في المطبخ الفرنسي يُصنع عادةً من أي جزء من البط أو الإوز؟', '["الكبد","القلب","المعدة","الأمعاء"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'أي كلمة إنجليزية تعني "التفكير بعمق"؟', '["⁦Confiscate⁩","⁦Contemplate⁩","⁦Constipate⁩","⁦Condensate⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما نوع الطائرات التي طورها إيغور سيكورسكي في الولايات المتحدة عام 1942‏؟', '["منطاد التخفي","الطائرة النفاثة","المروحية (الهليكوبتر)","كبسولة الفضاء"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'يمكن رؤية سور الصين العظيم من القمر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما هي أكبر فصيلة حية من البطاريق؟', '["البطريق الإمبراطور","البطريق الملك","بطريق جنتو","بطريق أديلي"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'ما هو المشروب الكحولي الذي يُصنع من الدبس (عسل قصب السكر)‏؟', '["الجين","الرم","الفودكا","الويسكي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'أي رئيس أمريكي تظهر صورته على ورقة الدولار الواحد؟', '["توماس جيفرسون","أبراهام لينكون","جورج واشنطن","بنجامين فرانكلين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_82, 'في أي ولاية أمريكية تقع المنطقة 51 (⁦Area 51⁩)‏؟', '["أريزونا","نيومكسيكو","يوتا","نيفادا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_83 uuid;
BEGIN
  SELECT id INTO v_sync_id_83 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 6' LIMIT 1;
  IF v_sync_id_83 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 6', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_83;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'يرمز الاختصار "⁦NCIS⁩" إلى "⁦Navy Corps Investigative Service⁩".', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'أي من هذه الشركات لا تصنع السيارات؟', '["نيسان","دوكاتي","جي إم سي","فيات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'ماذا تعني ممارسة الـ "نيفيلوكوكيميديا" (⁦Nephelococcygia⁩)‏؟', '["النوم والعينان مفتوحتان","كسر الزجاج بالصوت","رؤية أو تخيل أشكال في السحب","السباحة في مياه متجمدة"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'في سلسلة ألعاب الفيديو "كينغدوم هارتس" (⁦Kingdom Hearts⁩)، ما شكل السلاح الذي يحمله البطل الرئيسي؟', '["سيف","قلم","هاتف محمول","مفتاح"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'ماذا يصنع ويبيع صانع القبعات (⁦Milliner⁩)‏؟', '["القبعات","الأحذية","الأحزمة","القمصان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'ما المعنى الكامل للاختصار "⁦RAM⁩" في الكمبيوتر؟', '["ذاكرة المساعدة العشوائية","ذاكرة الوصول العشوائي","تفويض المساعدة العشوائية","رام"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'ماذا يسمي البحارة مؤخرة القارب؟', '["المقدمة","الجانب الأيمن","المؤخرة","الجانب الأيسر"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'وفقاً للمكتب الأسترالي للإحصاء لعامي 2014-2015، ما هي نسبة الأستراليين الذين ولدوا خارج البلاد؟', '["13%","20%","7%","28%"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'في أي اتجاه يتجه تمثال الحرية؟', '["الجنوب الشرقي","الجنوب الغربي","الشمال الغربي","الشمال الشرقي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'الباذنجان هو نوع من الخضار.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'حامل شهادة الدكتوراه (⁦PhD⁩) هو دكتور في ماذا؟', '["علم النفس","علم فراسة الدماغ","الفلسفة","العلاج الطبيعي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'من هو المؤسس المشارك لخدمة بث الموسيقى "سبوتيفاي" (⁦Spotify⁩)‏؟', '["شون باركر","فيليكس ميلر","مايكل بريدنبروكير","دانيال إيك"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'ما هو نوع المنتجات التي تتخصص فيها شركة رولكس (⁦Rolex⁩)‏؟', '["الساعات","السيارات","أجهزة الكمبيوتر","المعدات الرياضية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'تم اختراع البطاطس المهروسة الفورية من قِبل الكندي إدوارد أسيلبرغز في عام 1962.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'قبل القرن التاسع عشر، كانت "غرفة المعيشة" تُسمى في الأصل...', '["الغرفة المفتوحة","غرفة الجلوس","غرفة الاستقبال","السقيفة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'مجموع كل الأرقام الموجودة على عجلة الروليت هو 666.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'من أين نشأ نبات الأناناس في الأصل؟', '["أمريكا الجنوبية","هاواي","أوروبا","آسيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'في أي متحف بلندن يقع تمثال تشارلز داروين؟', '["متحف تيت","متحف التاريخ الطبيعي","المتحف البريطاني","متحف العلوم"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'العلم الوطني لفيتنام يتكون من نجمة حمراء على خلفية صفراء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_83, 'أي جبل يضم أعلى قمة في أوروبا؟', '["جبل شخارا، جورجيا","جبل أرارات، تركيا","جبل مون بلان، فرنسا","جبل إلبروس، روسيا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_84 uuid;
BEGIN
  SELECT id INTO v_sync_id_84 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 7' LIMIT 1;
  IF v_sync_id_84 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 7', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_84;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما هي الكلمة الكورية المكتوبة بالأحرف اللاتينية والتي تعني "قلب"؟', '["سيمجانغ (⁦Simjang⁩)","آيجونغ (⁦Aejeong⁩)","جيونغسين (⁦Jeongsin⁩)","سيغسو (⁦Segseu⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'لماذا تبدو السماء مظلمة في الليل؟', '["سحب الغبار تمتص الضوء","الكون محدود العمر والحجم","الانزياح نحو الأحمر يمنعنا من رؤية النجوم البعيدة","ميكانيكا الكم"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما الذي تؤخذ المضادات الحيوية عادةً لمحاربته؟', '["الفيروسات","الصداع النصفي","الالتهابات البكتيرية","آلام العضلات"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'عبارة "حادث على وشك الوقوع" (⁦accident waiting to happen⁩) هي مثال على أي نوع من الأساليب التعبيرية؟', '["تشبيه (⁦Simile⁩)","استعارة (⁦Metaphor⁩)","تناظر (⁦Analogy⁩)","تعبير اصطلاحي (⁦Idiom⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما اللقب الذي أُطلق على طائرة النقل الثقيل المائية "هوز إتش-4 هيركوليز" التي طارت لأول مرة عام 1947‏؟', '["إوزة التنوب (⁦Spruce Goose⁩)","سفينة نوح (⁦Noah''s Ark⁩)","الرجل البدين (⁦Fat Man⁩)","حصان طروادة (⁦Trojan Horse⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'من هو رائد الفضاء الوحيد من بين طاقم رحلة "أبولو 11" الذي لم يمشِ على سطح القمر؟', '["باز ألدرين","مايكل كولينز","نيل آرمسترونغ","لا أحد منهم"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'من أدى دور الجنرال علاء الدين في فيلم "الديكتاتور" (⁦The Dictator⁩)‏؟', '["جوني ديب","جيمس فرانكو","ساشا بارون كوهين","ليوناردو دي كابريو"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'في أي مجرة يقع كوكب الأرض؟', '["مجرة المريخ","مجرة نوت (⁦Galaxy Note⁩)","الثقب الأسود","مجرة درب التبانة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'نشأت لعبة تنس الطاولة (بينغ بونغ) في إنجلترا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'إذا تم ضبطك متلبساً بـ "التهرب من العمل" (⁦Goldbricking⁩)، فما الخطأ الذي ترتكبه؟', '["التدخين","التكاسل والتهرب","السرقة","الغش"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما هي الكلمة العربية المكتوبة بالأحرف اللاتينية والتي تعني "قمر"؟', '["⁦Najma⁩","⁦Kawkab⁩","⁦Qamar⁩","⁦Shams⁩"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'أي من الملوك البريطانيين التاليين لم تظهر صورته قط على عملة الجنيه الإسترليني المتداولة؟', '["الملكة فيكتوريا","جورج السادس","تشارلز الثاني","إدوارد الثامن"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما هو الاسم (⁦Noun⁩) الأكثر استخداماً في اللغة الإنجليزية؟', '["⁦Time⁩ (الوقت)","⁦Home⁩ (المنزل)","⁦Water⁩ (الماء)","⁦Man⁩ (الرجل)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما هي مهنة "ماي ماسك"، والدة الملياردير إيلون ماسك؟', '["أستاذة جامعية","عارضة أزياء","عالمة أحياء","موسيقية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'في أي عام تم إصدار لعبة الروبوت الشهيرة "روبوسابيان" (⁦RoboSapien⁩)‏؟', '["2000","2001","2004","2006"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'فاز لاينوس باولينغ بجائزتي نوبل؛ الأولى كانت في الكيمياء، ففي أي مجال كانت الجائزة الثانية؟', '["الفيزياء","الاقتصاد","علم وظائف الأعضاء أو الطب","السلام"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'أُضيف مخلل الخيار لأول مرة إلى الهامبرغر لأن قانون الصحة الأمريكي كان يفرض على جميع مطاعم الوجبات السريعة تضمين مصدر لفيتامين سي (⁦C⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'متى وافق الكونغرس القاري الثاني على إعلان الاستقلال الأمريكي؟', '["4 مايو 1776","4 يوليو 1776","4 يونيو 1776","2 يوليو 1776"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'عند البكاء في الفضاء، تلتصق الدموع بوجهك ولا تسقط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_84, 'ما هي عملة الهند وباكستان بالإضافة إلى بعض الدول الآسيوية الأخرى؟', '["الريال","البيزو","الدينار","الروبية"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_85 uuid;
BEGIN
  SELECT id INTO v_sync_id_85 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 8' LIMIT 1;
  IF v_sync_id_85 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 8', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_85;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'نسبة صغيرة فقط من سكان العالم تعاني من عدم تحمل اللاكتوز (حساسية الحليب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'وجدت دراسة علمية أجريت على الفول السوداني المتوفر في الحانات آثاراً لأكثر من 100 عينة بول مختلفة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'على ماذا يمشي السيرك البهلواني المعروف بـ (⁦Funambulist⁩)‏؟', '["زجاج مكسور","كرات","حبل مشدود","سطح القمر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'تعتبر جملة "⁦Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo⁩" صحيحة من الناحية النحوية في اللغة الإنجليزية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'ما هو ارتفاع قطار الموت "كينغدا كا" (⁦Kingda Ka⁩)، الذي كان أطول قطار ملاهي ترفيهي في العالم من عام 2005 إلى عام 2024‏؟', '["456 قدماً","500 قدم","429 قدماً","396 قدماً"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'إلى ماذا ترمز الحروف في التوقيت العالمي (⁦GMT⁩)‏؟', '["التوقيت الزوالي العالمي (⁦Global Meridian Time⁩)","توقيت جرينتش المتوسط (⁦Greenwich Mean Time⁩)","التوقيت المتوسط العام (⁦General Median Time⁩)","توقيت غلاسكو للرجال (⁦Glasgow Man Time⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'أي من معالم ديزني لاند الشهيرة تم إغلاقه في عام 2017 ليعاد تصميمه ليصبح مستوحى من فيلم "حراس المجرة" (⁦Guardians of the Galaxy⁩)‏؟', '["القصر المسكون (⁦The Haunted Mansion⁩)","قراصنة الكاريبي (⁦Pirates of the Caribbean⁩)","برج الرعب لمنطقة الغسق (⁦Twilight Zone Tower of Terror⁩)","رحلة بيتر بان (⁦Peter Pan''s Flight⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'ماذا يعني المصطلح الطبي "أبوليا" (⁦abulia⁩)‏؟', '["العجز عن الوقوف","العجز عن التركيز على أي شيء","رغبة حمّى لتمزيق ملابس الشخص","العجز عن اتخاذ القرارات"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'في بداية أي عقد بدأت ثقافة "القوط" (⁦Goth Subculture⁩) الفرعية بالظهور؟', '["الثمانينيات","التسعينيات","الألفينيات","السبعينيات"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'أي من اللغات التالية لا تستخدم التذكير والتأنيث (الجنس النحوي) في قواعدها؟', '["الألمانية","التركية","الدانماركية","البولندية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'ما اسم الشخصية الرئيسية في سلسلة ألعاب الرعب "ديد سبيس" (⁦Dead Space⁩)‏؟', '["إلين ريبلي","القائد شيبارد","آيزاك كلارك","الكابتن كيرك"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'يتكون "الصمغ العربي" من العصارة المتصلبة لأي نوع من الأشجار؟', '["أشجار النخيل","أشجار الفيكس","أشجار الكافور","أشجار السنط (الأكاسيا)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'أي كاتدرائية في مدينة الفاتيكان صمم جزأها الداخلي عام 1503 فنانون من عصر النهضة مثل برامانتي وميكيلانجيلو وبرنيني؟', '["كاتدرائية القديس بطرس","كاتدرائية كاتانيا","كاتدرائية القديس مرقص","كاتدرائية فلورنسا (الدوومو)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'ما هو اللون الذي تمثل كلمة "كوكليكوت" (⁦Coquelicot⁩) إحدى درجاته، والتي كانت تعني في الأصل زهرة الخشخاش؟', '["الأخضر","الأحمر","الأزرق","الوردي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'من بين هذه المباني الأربعة، أيها الأطول بارتفاع يصل إلى 1250 قدماً (381 متراً)‏؟', '["برج بنك الصين، هونغ كونغ","برج الاتحاد، روسيا","مبنى إمباير ستيت، الولايات المتحدة","فندق جيفورا، الإمارات العربية المتحدة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'يؤدي شخصية "دون شيتو" دور المذيع في محطة الراديو "⁦East Los FM⁩" في لعبة ⁦GTA V⁩.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'أي من سلاسل مطاعم الوجبات السريعة التالية غير معروفة ببيع البيتزا بشكل أساسي؟', '["وينديز (⁦Wendy''s⁩)","دومينوز (⁦Domino''s⁩)","ليتل سيزرز (⁦Little Caesars⁩)","بابا جونز (⁦Papa John''s⁩)"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'أين يعيش البطل الخارق "السهم الأخضر" (أوليفر كوين) في قصص دي سي (⁦DC⁩) المصورة؟', '["سنترال سيتي (المدينة المركزية)","ستار سيتي (مدينة النجوم)","غوثام سيتي (مدينة غوثام)","متروبوليس"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'في لعبة "معركة القطط" (⁦Battle Cats⁩)، ما هي النسبة المئوية للضربة القاضية (⁦Critical Rate⁩) للشخصية مونيكو (⁦Moneko⁩)‏؟', '["20%","10%","15%","25%"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_85, 'يُطلق مصطلح "سامهينوفوبيا" (⁦Samhainophobia⁩) على الخوف المرضي والمستمر من الهالوين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_86 uuid;
BEGIN
  SELECT id INTO v_sync_id_86 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 9' LIMIT 1;
  IF v_sync_id_86 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 9', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_86;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'الكلمة الفرنسية التي تعني "زجاج" هي "⁦glace⁩".', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'في أي بلد تأسست شركة "هيونداي" للسيارات؟', '["روسيا","كوريا الجنوبية","اليابان","الصين"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'أي من قطع الحلوى التالية ليست من إنتاج شركة "مارس" (⁦Mars⁩)‏؟', '["إم آند إمز (⁦M⁩&⁦M''s⁩)","تويكس (⁦Twix⁩)","ألموند جوي (⁦Almond Joy⁩)","سنيكرز (⁦Snickers⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'أي شركة طيران كانت مالكة للطائرة التي تحطمت قبالة سواحل نوفا سكوشا في عام 1998‏؟', '["الخطوط الجوية الفرنسية (⁦Air France⁩)","الخطوط الجوية البريطانية (⁦British Airways⁩)","تي دبليو إيه (⁦TWA⁩)","السويسرية للطيران (⁦Swiss Air⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'من هو الرئيس الأمريكي الذي افتتح قناة بنما رسمياً؟', '["وودرو ويلسون","كالفين كوليدج","هربرت هوفر","ثيودور روزفلت"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'شاي "إيرل غري" (⁦Earl Grey⁩) هو شاي أسود يتميز بنكهة ماذا؟', '["الخزامى (اللافندر)","زيت البرغموت","الفانيليا","العسل"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'وفقاً لمدونة الإشارات الدولية، أي علم فردي يعني "أحتاج إلى المساعدة (وليس استغاثة)"؟', '["كيلو (⁦Kilo⁩)","بابا (⁦Papa⁩)","فيكتور (⁦Victor⁩)","ديلتا (⁦Delta⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ماذا يسمي البحارة الجانب الأيمن من السفينة؟', '["ميسرة السفينة (⁦Port⁩)","مؤخرة السفينة (⁦Stern⁩)","مقدمة السفينة (⁦Bow⁩)","ميمنة السفينة (⁦Starboard⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ما هو الحرف الأخير في الأبجدية اليونانية؟', '["أوميغا","ميّو","إبسيلون","كابا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'في الهندسة المعمارية، يعبر مصطلح "بيكلستاينر" (⁦pecklesteiner⁩) عن مجموعة أبواب تتداخل مع بعضها البعض عند إغلاقها، ويمكن قفلها من خلال ثقب مفتاح واحد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ما هو أول خط تم بناؤه في مترو أنفاق لندن؟', '["الخط الدائري (⁦Circle Line⁩)","خط بيكرلو (⁦Bakerloo Line⁩)","خط متروبوليتان (⁦Metropolitan Line⁩)","خط فيكتوريا (⁦Victoria Line⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'في التعبيرات المجازية، عندما يقال إن شخصاً ما يفتقر إلى الخبرة، يُوصف بأنه يمثل أي لون؟', '["الأحمر","الأزرق","الأصفر","الأخضر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ما هو الرهاب المعروف بـ "سينوفوبيا" (⁦Cynophobia⁩)‏؟', '["الخوف من الكلاب","الخوف من الطيور","الخوف من الطيران","الخوف من الجراثيم"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'متى تأسست شركة نينتندو (⁦Nintendo⁩)‏؟', '["19 أكتوبر 1891","23 سبتمبر 1889","4 مارس 1887","27 ديسمبر 1894"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'تشرق الشمس من جهة الشمال.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'من هو مخترع أول قالب شوكولاتة صلبة في التاريخ عام 1847‏؟', '["أندرو جونسون","جون كادبوري","جون تايلر","جوزيف فراي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ما هو الشكل الهندسي المستخدم عادةً في لافتات التوقف في الشوارع؟', '["ثُماني الأضلاع","سُداسي الأضلاع","دائرة","مثلث"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'أي من هذه المدن الأمريكية لا توجد بها دار لسك العملات المعدنية تابعة للولايات المتحدة؟', '["سان فرانسيسكو، كاليفورنيا","سانت لويس، ميزوري","فيلادلفيا، بنسيلفانيا","ويست بوينت، نيويورك"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'المجرم الذي يقوم بـ "تزييف الحسابات والكتب المالية" (⁦Cook the books⁩) قد ارتكب أي نوع من السلوكيات غير القانونية؟', '["غسيل الأموال","الابتزاز المالي","الاحتيال المحاسبي","الابتزاز والتهديد"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_86, 'ما الاسم الأصلي الذي تأسس به بنك أمريكا (⁦Bank of America⁩) في البداية؟', '["بنك لونغ آيلاند (⁦Bank of Long Island⁩)","بنك بنسيلفانيا (⁦Bank of Pennsylvania⁩)","بنك شارلوت (⁦Bank of Charlotte⁩)","بنك إيطاليا (⁦Bank of Italy⁩)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_87 uuid;
BEGIN
  SELECT id INTO v_sync_id_87 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 1' LIMIT 1;
  IF v_sync_id_87 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 1', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_87;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'ما هو الاسم الذي كان يُطلق تاريخياً على المدينة التركية المعروفة حالياً بإسطنبول؟', '["القسطنطينية","هودافينديغار","سوغوت","أدريانوبل"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أي من هذه الدول هي الأصغر من حيث عدد السكان؟', '["سلوفاكيا","النرويج","فنلندا","هونغ كونغ"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'ما هي المدينة البولندية التي يعرفها الألمان باسم دانزيغ؟', '["وارسو","زاكوباني","غدانسك","بوزنان"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'تسبق إسرائيل نيويورك بـ 7 ساعات زمنية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'سان مارينو هي الدولة الوحيدة المحاطة بالكامل بدولة أخرى.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'تورونتو هي عاصمة دولة كندا الواقعة في أمريكا الشمالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'كم عدد الدول التي تفوق أستراليا مساحةً؟', '["4","3","5","6"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أي من لغات الإنويت التالية كانت الأولى في استخدام نظام كتابة فريد لا يعتمد على الأبجدية اللاتينية؟', '["الإنوينّاكتونية","الغرينلاندية","الإنوبياتية","الإنوكتيتوتية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'ما هو اسم النشيد الوطني الكندي؟', '["يا كندا","يا أيتها القيقب الحمراء","الراية المزينة بأوراق الشجر","مارش إسقاط القرص"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'حركة المرور في اليابان تكون على الجانب الأيسر من الطريق.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'تقع بلدة لانفايربولغوينغيلغوغيريتشويرندروبولانتيسيليوغوغوغوتش (⁦Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch⁩) في أي جزيرة ويلزية؟', '["باري","باردسي","أنجلسي","كالدي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'ما هي اللغة الرسمية في ليختنشتاين؟', '["الفرنسية","الإنجليزية","الإيطالية","الألمانية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'كل اللغات التالية تُصنف ضمن اللغات الفنلندية الأوغرية ما عدا:', '["السامودية","المجرية","الفنلندية","الإستونية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أين تقع المنطقة المعروفة باسم مثلث برمودا؟', '["شمال المحيط الهادئ، بين اليابان والولايات المتحدة","شمال المحيط الأطلسي، بين فلوريدا وبورتوريكو","في البحر الكاريبي","جنوب المحيط الهادئ، بعيداً عن تشيلي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أي من الأوبلاستات (المحافظات) الروسية التالية تشترك في الحدود مع بولندا؟', '["سامارا","نيجني نوفغورود","كالينينغراد","أومسك"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'يمكنك السير مشياً على الأقدام من النرويج إلى كوريا الشمالية عبر المرور بروسيا فقط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أي مدينة في ولاية تكساس تُلقب بـ "الوردة الصفراء لتكساس"؟', '["أماريلو","كوربوس كريستي","فريسكو","هيوستن"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أي من هذه المدن تقع على خط طول 4 درجات شرقاً؟', '["ريو دي جانيرو","أمستردام","تورونتو","هونغ كونغ"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'في أي مدينة تقع جامعة هارفارد؟', '["بروفيدنس","نيويورك","كامبريدج","واشنطن العاصمة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_87, 'أين تقع سلسلة جبال هونوا (⁦Hunua Ranges⁩)‏؟', '["نيبال","الصين","المكسيك","نيوزيلندا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_88 uuid;
BEGIN
  SELECT id INTO v_sync_id_88 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 10' LIMIT 1;
  IF v_sync_id_88 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 10', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_88;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي قارة تُعتبر الأكبر والأكثر اكتظاظاً بالسكان في العالم؟', '["آسيا","أفريقيا","أوروبا","أمريكا الشمالية"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هو الاسم الأصلي لمدينة هو تشي منه؟', '["هانوي","سايغون","دار السلام","أنغكور وات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي لاوس؟', '["منطقة","نهر","دولة","مدينة"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'تقع صحراء سونوران في شرق أفريقيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي عاصمة الولايات المتحدة؟', '["واشنطن العاصمة","لوس أنجلوس، كاليفورنيا","مدينة نيويورك، نيويورك","هيوستن، تكساس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هو المتحف الوطني الذي ستجده في كوبرستاون، نيويورك؟', '["متحف المتروبوليتان للفنون","القاعة الوطنية لمشاهير البيسبول","القاعة الوطنية لمشاهير الألعاب","متحف الفن الحديث"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي عاصمة ولاية داكوتا الجنوبية؟', '["سيوكس فالز","رابيد سيتي","بيير","واترتاون"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي مما يلي ليس مدينة في المملكة العربية السعودية؟', '["الرياض","مكة","المدينة","دبي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي من هذه الدول ليست في أفريقيا؟', '["غيانا","السنغال","ليبيريا","الصومال"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي الدولة الأولى عالمياً من حيث عدد البراكين النشطة تاريخياً؟', '["اليابان","إندونيسيا","الولايات المتحدة الأمريكية","الهند"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'كم منطقة زمنية توجد في الصين؟', '["3","4","1","2"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي مدينة أوروبية تشتهر بلقب "مدينة النور"؟', '["روما","لندن","مدريد","باريس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما اسم إحدى اللغات الآرامية الحديثة التي يتحدث بها السكان اليهود من شمال غرب العراق؟', '["ليشانا ديني","هولاولا","ليشان ديدان","الآرامية الكلدانية الحديثة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي عاصمة بنغلاديش؟', '["خولنا","دكا","لندن","لاهور"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي من هذه الجزر الأربع هي الأكبر مساحة؟', '["بريطانيا العظمى","كوبا","بورنيو","مدغشقر"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'ما هي عاصمة بيرو؟', '["سانتياغو","مونتيفيديو","بوينس آيرس","ليما"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'كل الدول التالية لديها مطالبات رسمية بأراضٍ في القارة القطبية الجنوبية (أنتاركتيكا) باستثناء:', '["الولايات المتحدة","أستراليا","تشيلي","النرويج"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'أي من الدول التالية لا تعترف بأرمينيا كدولة مستقلة؟', '["إيران","باكستان","تركيا","أذربيجان"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_88, 'المجر (⁦Hungary⁩) هي الدولة الوحيدة في العالم التي يبدأ اسمها باللغة الإنجليزية بحرف ⁦H⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_89 uuid;
BEGIN
  SELECT id INTO v_sync_id_89 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 11' LIMIT 1;
  IF v_sync_id_89 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 11', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_89;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'في أي قارة تقع دولة غيانا؟', '["أمريكا الجنوبية","أفريقيا","أمريكا الشمالية","آسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أي محيط يحد الساحل الغربي للولايات المتحدة؟', '["المحيط الأطلسي","المحيط الهادئ","المحيط الهندي","المحيط المتجمد الشمالي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'ما الحدث الذي أدى إلى إضافة تاج إلى علم ليختنشتاين؟', '["تتويج الأمير يوهان الأول جوزيف عام 1805","مرسوم تشارلز السادس عام 1719","الألعاب الأولمبية لعام 1936","توقيع دستور ليختنشتاين لعام 1862"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'ما هي السنة المكتوبة على علم ولاية ويسكونسن الأمريكية؟', '["1634","1783","1901","1848"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أي دولة تحد دولة بليز؟', '["غواتيمالا","لاوس","بيرو","كينيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'لا توجد صحاري في أوروبا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'كم عدد المحطات في خط سنترال (الخط المركزي) في مترو أنفاق لندن؟', '["51","43","49","47"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أي من هذه الدول الجزرية تقع في منطقة الكاريبي؟', '["فيجي","جزر المالديف","سيشل","باربادوس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'كم عدد الدول التي تحد قرغيزستان؟', '["4","3","1","6"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'ما هي عاصمة ولاية ويسكونسن الأمريكية؟', '["ميلووكي","ماديسون","ويسكونسن ديلز","غرين باي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أي من هذه الجزر الواقعة في البحر الأبيض المتوسط تخضع للسيادة الفرنسية؟', '["مايوركا","سردينيا","كورسيكا","مالطا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'ما هي المدينة الأكثر اكتظاظاً بالسكان في الأمريكتين في عام 2015‏؟', '["نيويورك","مكسيكو سيتي","لوس أنجلوس","ساو باولو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'في أي جزء من ويلز تقع قرية لانفايربولغوينغيلغوغيريتشويرندروبوليلانتيسيليوغوغوغوتش؟', '["أنغلزي","بيمبروكشاير","ريكسهام","بريدجند"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'في أي بلد تقع تالين؟', '["فنلندا","إستونيا","السويد","بولندا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أي من الدول التالية يتميز علمها بوجود أسد أصفر يحمل سيفاً على خلفية حمراء داكنة؟', '["كيريباتي","إسكتلندا","سريلانكا","بوتان"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'ما هي الطريقة الصحيحة لكتابة اسم عاصمة المجر باللغة الإنجليزية؟', '["⁦Boodapest⁩","⁦Bhudapest⁩","⁦Budapast⁩","⁦Budapest⁩"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'سانتوريني هي جزيرة تابعة لأي دولة أوروبية؟', '["اليونان","إيطاليا","إسبانيا","تركيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'كم عدد الولايات الاتحادية في ألمانيا؟', '["13","16","32","25"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_89, 'أين يقع نهر الفولغا؟', '["بلغاريا","الهند","روسيا","السويد"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_90 uuid;
BEGIN
  SELECT id INTO v_sync_id_90 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 12' LIMIT 1;
  IF v_sync_id_90 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 12', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_90;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أي جزيرة في جزر الكناري كانت مسرحاً لواحدة من أسوأ كوارث الطيران في التاريخ بعد تصادم طائرتي جامبو؟', '["تينيريفي","فورتيفنتورا","غران كناريا","ماوي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'لا توجد مطارات في ليختنشتاين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أي من الدول العربية التالية لا يحتوي علمها على ألوان الوحدة العربية فقط؟', '["الكويت","الإمارات العربية المتحدة","قطر","الأردن"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هي أكبر دولة في العالم؟', '["الصين","كندا","البرازيل","الاتحاد الروسي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'في استطلاع مؤشر السلام العالمي لعام 2016، من بين 163 دولة، ما كان ترتيب الولايات المتحدة الأمريكية؟', '["103","10","59","79"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما الاسم السابق لدولة زيمبابوي الأفريقية؟', '["زامبيا","روديسيا","موزمبيق","بولاوايو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أين يقع سور هادريان؟', '["روما، إيطاليا","الإسكندرية، مصر","كارلايل، إنجلترا","دبلن، أيرلندا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'في أي مدينة يقع جيش التراكوتا (جيش الطين)‏؟', '["بكين","شنغهاي","هونغ كونغ","شيان"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هي أكبر مدينة والعاصمة التجارية لسريلانكا؟', '["كولومبو","موراتوا","نيغومبو","كاندي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'يتميز الشعار الموجود على علم جمهورية طاجيكستان بشروق الشمس فوق الجبال تحت أي رمز؟', '["طائر","تاج","منجل","شجرة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'كم عدد النجوم الموجودة على علم نيوزيلندا؟', '["5","2","4","0"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هو مسار التسلق الأكثر شيوعاً لثاني أعلى جبل في العالم (جبل ⁦K2⁩)‏؟', '["ماجيك لاين","مسار سيسين","المسار البولندي","حافة أبروتسي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هي أكبر جزيرة غير قارية في العالم؟', '["جرينلاند","غينيا الجديدة","بورنيو","مدغشقر"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هي عاصمة ولاية نيفادا الأمريكية؟', '["لاس فيغاس","كارسن سيتي","هندرسون","رينو"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'كل ما يلي عبارة عن بلدات/قرى في دولة كيريباتي الواقعة في المحيط الهادئ باستثناء:', '["رونغاتا","لندن","أوروتورا","واشنطن"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أي من الدول التالية حظرت استخدام فحوصات السلالة الجينية الشخصية؟', '["النمسا","كندا","السويد","ألمانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أي من هذه المدن ليست في إنجلترا؟', '["إدنبرة","أكسفورد","مانشستر","ساوثهامبتون"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'ما هي عاصمة سورينام؟', '["أنتاناناريفو","باراماريبو","تيغوسيغالبا","سوكري"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_90, 'أي من اللغات الأوروبية التالية تُصنف كـ "لغة معزولة"؟', '["الغاليسية","المالطية","الباسكية","المجرية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_91 uuid;
BEGIN
  SELECT id INTO v_sync_id_91 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 13' LIMIT 1;
  IF v_sync_id_91 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 13', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_91;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'ما هي عاصمة إسبانيا؟', '["مدريد","برشلونة","إشبيلية","طليطلة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'مدينة سانت لويس هي عاصمة ولاية ميزوري الأمريكية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'سُميت كولومبيا نسبةً إلى كريستوفر كولومبوس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'ما هي عاصمة ولاية أريزونا الأمريكية؟', '["مونتغومري","تالاهاسي","رالي","فينيكس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'في أي مدينة يقع برج "سبيس نيدل"؟', '["سياتل","لوس أنجلوس","تورونتو","فانكوفر"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'أي من هذه الدول تقع في أبعد نقطة عن بحر الصين الجنوبي؟', '["ماليزيا","بنغلاديش","فيتنام","الفلبين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'أي من الجزر اليابانية التالية هي الأكبر مساحة؟', '["هوكايدو","شيكوكو","هونشو","كيوشو"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'إمارة سيلاند هي دولة مجهرية غير معترف بها تقع قبالة سواحل أي دولة؟', '["اليابان","أستراليا","الأرجنتين","المملكة المتحدة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'ما هي عاصمة فنلندا؟', '["هلسنكي","جبل طارق","مقدونيا","أوسلو"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'كم عدد الدول التي تشترك مع إسبانيا في حدود برية؟', '["2","5","3","4"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'كم دولة تشترك في الحدود مع المكسيك؟', '["2","4","3","1"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'أي منطقة في شرق أوروبا تشتهر بارتباطها بمصاصي الدماء؟', '["سيليزيا","مقدونيا","سلوفاكيا","ترانسيلفانيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'تعتبر مدينة الفاتيكان دولة مستقلة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'في أي قارة (أو قارات) تقع إسبانيا عند أخذ جميع أراضيها بعين الاعتبار؟', '["أوروبا وإفريقيا وآسيا","أوروبا وإفريقيا","أوروبا","أوروبا وآسيا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'ما هو لون ''خط سيركل'' (الخط الدائري) على خريطة مترو أنفاق لندن؟', '["الأحمر","الأزرق","الأصفر","الأخضر"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'في أي دولة تقع بلدية أرتيخو؟', '["المغرب","فرنسا","بلجيكا","إسبانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'أين تقع خطوط نازكا الشهيرة؟', '["بيرو","البرازيل","كولومبيا","الإكوادور"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'أين تقع مدينة تمبكتو؟', '["أذربيجان، آسيا","مالي، إفريقيا","بنجلاديش، آسيا","موريتانيا، إفريقيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_91, 'ما هي الدولتان المعاصرتان اللتان كانتا تعرفان باسم منطقة ''روديسيا'' بين تسعينيات القرن التاسع عشر وعام 1980‏؟', '["توجو وبنين","ليسوتو وسوازيلاند","زامبيا وزيمبابوي","رواندا وبوروندي"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_92 uuid;
BEGIN
  SELECT id INTO v_sync_id_92 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 14' LIMIT 1;
  IF v_sync_id_92 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 14', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_92;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي أصغر دولة في العالم من حيث عدد السكان؟', '["مدينة الفاتيكان","ناورو","جزر مارشال","ليختنشتاين"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما اسم المنطقة الصخرية الكبيرة التي تغطي معظم شرق كندا؟', '["جبال روكي","الدرع الكندي","جبال الأبالاش","جبال الهيمالايا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'يربط ممر خيبر الجبلي بين أي من الدولتين التاليتين؟', '["الهند ونيبال","باكستان والهند","أفغانستان وباكستان","طاجيكستان وقيرغيزستان"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'تقع دولة البوسنة والهرسك في منطقة بحر البلطيق في أوروبا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي عاصمة رومانيا؟', '["بوخارست","براتيسلافا","بلجراد","بودابست"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أي من هذه المدن الأمريكية يقل عدد سكانها عن مليون نسمة？', '["فينيكس، أريزونا","سان فرانسيسكو، كاليفورنيا","سان أنطونيو، تكساس","فيلادلفيا، بنسيلفانيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي عاصمة ولاية ميشيغان الأمريكية؟', '["كالامازو","آن أربور","لانسينغ","ديترويت"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي أبعد مستوطنة بشرية في أقصى الشمال يقطنها سكان على مدار العام؟', '["ناغورسكوي، روسيا","محطة ماكموردو، القارة القطبية الجنوبية","هونينغسفاغ، النرويج","أليرت، كندا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي الولايات الأمريكية الأربع التي تلتقي حدودها في نقطة واحدة (الولايات الزوايا الأربع)‏؟', '["يوتا، كولورادو، أريزونا، نيومكسيكو","أوريغون، أيداهو، نيفادا، يوتا","كانساس، أوكلاهوما، أركنساس، لويزيانا","داكوتا الجنوبية، مينيسوتا، نبراسكا، آيوا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما هي اللغة الوطنية الرسمية في باكستان؟', '["الهندية","الأوردية","البنجابية","البشتوية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'في أي دولة يقع نهر تايدونغ؟', '["كوريا الجنوبية","اليابان","كوريا الشمالية","الصين"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أي من هذه الدول ليست الدولة الوحيدة التي يبدأ اسمها بذلك الحرف في الأبجدية الإنجليزية؟', '["قطر","اليمن","عُمان","زامبيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أين تقع منطقة ''بير طويل''، وهي أرض غير مأهولة بالسكان لا تطالب بها أي دولة، على الحدود بين أي دولتين؟', '["مصر والسودان","إسرائيل والأردن","تشاد وليبيا","العراق والمملكة العربية السعودية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'ما اسم شبه الجزيرة التي تضم إسبانيا والبرتغال؟', '["شبه الجزيرة الأوروبية","شبه الجزيرة الإيبيرية","شبه جزيرة بيلوبونيز","شبه الجزيرة الإسكندنافية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'تقع المقاطعات الإسبانية التالية في شمال إسبانيا باستثناء مقاطعة واحدة، فما هي؟', '["أستورياس","نافارا","مرسية","ليون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'مع أي دولة تتشارك فرنسا أطول حدود برية لها؟', '["ألمانيا","إسبانيا","كندا","البرازيل"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أي مما يلي ليس مقاطعة صينية؟', '["يانغتسي","فوجيان","سيتشوان","غوانغدونغ"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أوتاوا هي عاصمة كندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_92, 'أي من الأسماء التالية يعود لقلعة حقيقية؟', '["فرانك كاسل","ريتشارد كاسل","قلعة إليزابيث","أوليفيا كاسل"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_93 uuid;
BEGIN
  SELECT id INTO v_sync_id_93 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 15' LIMIT 1;
  IF v_sync_id_93 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 15', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_93;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'أين تقع أقدم قاعدة إطلاق فضاء ما زالت تعمل في العالم؟', '["كازاخستان","روسيا","إيران","الولايات المتحدة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'كم عدد المناطق الزمنية في روسيا؟', '["6","11","24","16"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'ما هي الجزر التي تطالب بها كل من اليابان وروسيا؟', '["جزر باراسيل","جزر تشاغوس","جزر كوريل","جزر سبراتلي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'أي من هذه الدول ليست جزءاً من قارة آسيا؟', '["جورجيا","روسيا","سنغافورة","سورينام"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'تسمى مجموعة الجزر المتقاربة ''أرخبيل''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'متى تحتفل فنلندا بيوم استقلالها؟', '["2 يناير","6 ديسمبر","12 نوفمبر","8 فبراير"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'ما هي ثاني أكبر مدينة في ليتوانيا؟', '["بانيفيزيس","فيلنيوس","كاوناس","كلايبيدا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'تشترك روسيا في حدود برية مع كوريا الشمالية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'ما هي أكبر بحيرة مياه عذبة في العالم؟', '["بحيرة سوبيريور","بحر قزوين","بحيرة ميشيغان","بحيرة هورون"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'ما هي عاصمة موريشيوس؟', '["بورت مورسبي","بورت لويس","بورت فيلا","بورت أو برانس"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'في أي قارة تقع دولة غامبيا؟', '["آسيا","أمريكا الجنوبية","إفريقيا","أوروبا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'كانت الأراضي الحديثة للبرتغال جزءاً من الإمبراطورية الرومانية في الماضي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'أي من هذه الدول لا تشترك في حدود مع النمسا؟', '["فرنسا","سلوفينيا","سويسرا","سلوفاكيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'تبلغ مساحة غرينلاند تقريباً نفس مساحة قارة إفريقيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'كوالالمبور هي عاصمة أي دولة؟', '["إندونيسيا","سنغافورة","ماليزيا","تايلاند"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'سيول هي عاصمة كوريا الشمالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'ما هي عاصمة السنغال؟', '["داكار","نواكشوط","كوناكري","مونروفيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'كم دولة تشترك في حدود برية مع لوكسمبورغ؟', '["4","3","2","5"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_93, 'المجموعتان العرقيتان الأكبر في بلجيكا هما الفلمنك والوالون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_94 uuid;
BEGIN
  SELECT id INTO v_sync_id_94 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 16' LIMIT 1;
  IF v_sync_id_94 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 16', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_94;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'عاصمة البرازيل هي ريو دي جانيرو.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'كم عدد الدول التي تشترك في حدود برية مع روسيا؟ (دون احتساب المناطق المتنازع عليها)', '["12","14","10","8"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أي من هذه الدول الأوروبية ليست عضواً في الاتحاد الأوروبي؟', '["ليتوانيا","أيرلندا","النرويج","التشيك"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هي أكبر دولة في العالم من حيث المساحة؟', '["كندا","الصين","الولايات المتحدة","روسيا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'يعود أصل اسم الأرجنتين إلى الكلمة اللاتينية التي تعني الفضة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هي عاصمة قبرص؟', '["بافوس","نيقوسيا","ليماسول","لارنكا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أي من هذه الدول تبدأ عاصمتها بحرف الباء؟', '["الأردن","الكويت","لبنان","قطر"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أي من المدن التالية ليست عاصمة دولة؟', '["القاهرة","موسكو","بكين","سيدني"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هي الدولة الوحيدة في العالم التي لا يحتوي علمها على أربع زوايا قائمة؟', '["نيبال","بنما","أنغولا","مصر"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما اسم المحيط الذي تقع فيه جزر هاواي؟', '["المحيط الأطلسي","المحيط الهادئ","المحيط الهندي","المحيط المتجمد الشمالي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'في أي مقاطعة إنجليزية تقع مدينة بورتسموث؟', '["أكسفوردشاير","باكنغهامشاير","هامبشاير","سري"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أي مقاطعة كندية عاصمتها هي تشارلوت تاون؟', '["ساسكاتشوان","الأقاليم الشمالية الغربية","أونتاريو","جزيرة الأمير إدوارد"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'لا توجد طرق برية تؤدي إلى مدينة جونو بآلاسكا أو تخرج منها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هي اللغة الرسمية في بوتان؟', '["اللاداخية","الدزونكا","الكارين","الغروما"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هو اسم السكان الأصليين لنيوزيلندا؟', '["الفايكنج","البولينيزيون","الماوري","السامويون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أطول اسم مكان في الولايات المتحدة هو بحيرة ''تشارغوغوغوغمانشوغوغوغشوبوناغونغاماغ''، الواقعة بالقرب من ويبستر بولاية ماساتشوستس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'أي من هذه الدول لم تكن جزءاً من الاتحاد السوفيتي؟', '["رومانيا","تركمانستان","بيلاروسيا","طاجيكستان"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'يظهر أسد يحمل سيفاً على العلم الوطني لأي دولة؟', '["ألبانيا","سريلانكا","زامبيا","مولدوفا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_94, 'ما هي عاصمة تشيلي؟', '["فالبارايسو","كوبيابو","سانتياغو","أنتوفاغاستا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_95 uuid;
BEGIN
  SELECT id INTO v_sync_id_95 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 17' LIMIT 1;
  IF v_sync_id_95 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 17', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_95;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'تقع مقاطعة نوفا سكوشا على الساحل الشرقي لكندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'تنقسم جزيرة بورنيو في جنوب شرق آسيا سياسياً بين 3 دول.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هي عاصمة ولاية تكساس الأمريكية؟', '["دالاس","هيوستن","أوستن","سان أنطونيو"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هو مقر مقاطعة كينغ في ولاية واشنطن؟', '["بيلفيو","إينومكلاو","سكايكوميش","سياتل"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أي من هذه الدول ليس مكتوباً بلغتها الأصلية？', '["سلوفاشكو","سومي","شوايتس","إيلادا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أي دولة تمتلك علماً بلونين أفقيين أحمر وأبيض؟', '["البحرين","موناكو","مالطا","ليختنشتاين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أي من هذه الدول الأفريقية يظهر سلاح ناري (بندقية) على علمها؟', '["أوغندا","إثيوبيا","موزمبيق","نيجيريا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أي من اللغات التالية لا تستخدم الأبجدية اللاتينية؟', '["التركية","السواحيلية","الفيتنامية","الجورجية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'يحتوي علم بيلاروسيا على نمط تطريز باللونين الأحمر والأبيض على جانب السارية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هي عاصمة إستونيا؟', '["هلسنكي","تالين","تارتو","ريغا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هي أكبر جزيرة في كندا؟', '["جزيرة الأمير إدوارد","جزيرة فانكوفر","جزيرة بافن","نيوفاوندلاند"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أي ولاية أمريكية تقع في أقصى الشمال الشرقي؟', '["نيويورك","جورجيا","فلوريدا","مين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'كم عدد الولايات في أستراليا؟', '["6","7","8","5"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'إذا كانت كرة القدم تُسمى ''فوتبول'' في إنجلترا، فماذا تُسمى كرة القدم الأمريكية هناك؟', '["كومبول","كرة القدم الأمريكية","كرة اليد","تاتشداون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'جبل طارق، الواقع جنوب شبه الجزيرة الأيبيرية مباشرة، هو إقليم تابع لأي دولة في غرب أوروبا؟', '["إسبانيا","البرتغال","المملكة المتحدة","فرنسا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'أين تقع مدينة بومبي الأثرية؟', '["شرق أفريقيا","أمريكا الجنوبية","بومبيلانوس","إيطاليا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'في أي دولة تقع منحدرات دوفر البيضاء؟', '["المملكة المتحدة","الولايات المتحدة","هولندا","السويد"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هي عاصمة فيتنام؟', '["دا نانغ","هانوي","هاي فونغ","مدينة هو تشي منه"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_95, 'ما هي عاصمة إسكتلندا؟', '["غلاسكو","دندي","إدنبرة","لندن"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_96 uuid;
BEGIN
  SELECT id INTO v_sync_id_96 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 18' LIMIT 1;
  IF v_sync_id_96 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 18', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_96;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'أي من دول يوغوسلافيا السابقة التالية هي دولة حبيسة (لا تطل على بحار)‏؟', '["صربيا","البوسنة والهرسك","الجبل الأسود","كرواتيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'إلى أي دولة تنتمي جزر ملوك (المعروفة بشكل غير رسمي باسم جزر التوابل)‏؟', '["تشيلي","إندونيسيا","نيوزيلندا","فيجي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'دولة واحدة فقط في العالم يبدأ اسمها باللغة الإنجليزية بحرف ''⁦Q⁩''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'في أي مدينة هندية يقع تاج محل？', '["مومباي","فريد آباد","ثين","أغرا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'غرينلاند هي جزء من أي مملكة؟', '["الدنمارك","السويد","النرويج","المملكة المتحدة"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'تحت سيادة أي دولة تقع جزر أندمان ونيكوبار في جنوب شرق آسيا؟', '["فيتنام","الهند","تايلاند","إندونيسيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ما هي عاصمة أستراليا؟', '["سيدني","ملبورن","كانبرا","بريزبان"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'أي مما يلي هي العملة الرسمية لجزر كوك؟', '["الدولار الأمريكي","الجنيه الإسترليني","الدولار الأسترالي","الدولار النيوزيلندي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ما هي عاصمة بوركينا فاسو؟', '["واغادوغو","ياوندي","ياموسوكرو","أبيدجان"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ما هو الميناء الأكثر نشاطاً في أوروبا؟', '["ميناء أنتويرب","ميناء روتردام","ميناء هامبورغ","ميناء أمستردام"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'طوكيو هي عاصمة اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ما هي الولاية الوحيدة في الولايات المتحدة التي لا يملك علمها شكلاً رباعي الأضلاع؟', '["فلوريدا","أيداهو","نيومكسيكو","أوهايو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'مدينة الفاتيكان، أصغر دولة في العالم، محاطة بالكامل بأي دولة؟', '["إيطاليا","فرنسا","إسبانيا","ألمانيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ولاية كاليفورنيا أكبر مساحةً من اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'القارة القطبية الجنوبية (أنتاركتيكا) هي أكبر صحراء في العالم.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'أي من الجزر اليابانية التالية هي الأكبر مساحة؟', '["إكي","أودايبا","أوكيناوا","شيكوكو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'أي دولة داخل المملكة المتحدة لا يمثلها علمها الوطني (علم الاتحاد)‏؟', '["ويلز","إسكتلندا","أيرلندا","جزيرة وايت"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'أي دولة تطالب بالسيادة على إقليم كوسوفو المتنازع عليه؟', '["كرواتيا","صربيا","ألبانيا","مقدونيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_96, 'ما هي أكبر صحراء حارة في العالم؟', '["صحراء غوبي","صحراء موهافي","الصحراء الكبرى","صحراء كالاهاري"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_97 uuid;
BEGIN
  SELECT id INTO v_sync_id_97 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 19' LIMIT 1;
  IF v_sync_id_97 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 19', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_97;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'أفريقيا هي عبارة عن دولة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'في أي دولة أفريقية تقع قناة السويس؟', '["ليبيا","مصر","غانا","نيجيريا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ما هو اسم أكبر مدينة في ولاية تينيسي الأمريكية؟', '["طيبة","الإسكندرية","ممفيس","الأقصر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'بأي لقب تُعرف منطقة أكيهابارا اليابانية أيضاً؟', '["نهر مشية القمر","مركز الأوتاكو","العيون الكبيرة","مدينة الكهرباء"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'كانت دولة ''منغوليا'' جزءاً من الاتحاد السوفيتي السابق.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'أي من هذه الأرخبيلات (مجموعات الجزر) ليست جزءاً من المملكة المتحدة؟', '["جزر أوركني","جزر القنال الإنجليزي","جزر سيلي","جزر شتلاند"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ما هي عاصمة سلوفينيا؟', '["ماريبور","فيلينيه","ليوبليانا","تربوفلي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'تقع ولاية رود آيلاند في الواقع على اليابسة الرئيسية للولايات المتحدة، على الرغم من اسمها (الذي يعني جزيرة رود).', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ما هي أكبر بحيرة في القارة الأفريقية؟', '["بحيرة فيكتوريا","بحيرة تنجانيقا","بحيرة ملاوي","بحيرة توركانا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'أي من هذه الدول لا تقع في أفريقيا؟', '["بوركينا فاسو","سورينام","موزمبيق","الجزائر"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'في أي دولة أوروبية يقع مقر منظمة الصحة العالمية؟', '["المملكة المتحدة","فرنسا","سويسرا","بلجيكا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'هناك جزيرة في اليابان تُدعى ''أوكونوشيما''، وتُعرف أيضاً باسم ''جزيرة الأرانب'' نظراً لعدد الأرانب الهائل فيها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ما هو الممر المائي الذي يربط المحيط الأطلسي بالبحر الأبيض المتوسط؟', '["مضيق جبل طارق","ممر جبل طارق","المضائق الإسبانية","قناة طنجة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'كم عدد الأنهار في المملكة العربية السعودية؟', '["1","0","2","3"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'في أي مقاطعة كندية تقع مدينة مونتريال؟', '["أونتاريو","نوفا سكوشا","كيبيك","ألبرتا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ألاسكا وهاواي هما الولايتان الأمريكيتان الوحيدتان اللتان تمتلكان منطقتين زمنيتين خاصتين بهما.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'إيطاليا وأيرلندا هما الدولتان الوحيدتان في أوروبا اللتان تبدآن بحرف ⁦I⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'عدد سكان ولاية نيويورك الأمريكية يعادل تقريباً عدد سكان دولة:', '["بولندا","رومانيا","ألمانيا","المجر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_97, 'ما هي خامس أكبر دولة في العالم من حيث المساحة؟', '["الولايات المتحدة","أستراليا","البرازيل","الهند"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_98 uuid;
BEGIN
  SELECT id INTO v_sync_id_98 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 2' LIMIT 1;
  IF v_sync_id_98 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 2', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_98;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'في مقاطعة ألبرتا الكندية، تقع مدينة كالغاري في أقصى الشمال أكثر من مدينة إدمونتون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هو أعلى جبل في العالم؟', '["جبل غودوين أوستن","جبل إيفرست","كانغشينجونغا","أنابورا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'توجد مدينة تسمى روما في كل قارة على وجه الأرض.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هي أكبر مدينة في كندا؟', '["مونتريال","فانكوفر","أوتاوا","تورونتو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي مما يلي ليست صفيحة تكتونية حقيقية؟', '["صفيحة المحيط الأطلسي","صفيحة أمريكا الشمالية","الصفيحة الأوراسية","صفيحة نازكا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أين تقع قلعة مارلبورو (⁦Fort Marlborough⁩)‏؟', '["سنغافورة","بنغكولو","لندن","دوفر"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'كم عدد الدول في العالم تقريباً؟', '["100","300","200","500"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي مدينة تمتلك المطار الأكثر ازدحاماً في العالم؟', '["لندن، إنجلترا","شيكاغو، إلينوي، الولايات المتحدة الأمريكية","طوكيو، اليابان","أتلانتا، جورجيا، الولايات المتحدة الأمريكية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'في أي حوض يصب نهر الأردن؟', '["البحر الميت","بحر آرال","بحر قزوين","بحر سالتون"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'عاصمة إندونيسيا هي بالي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'في عام 2012، كم كان عدد سكان دولة "ليختنشتاين" الصغيرة المتحدثة بالألمانية في وسط أوروبا؟', '["2,400","90,000","36,600","323,400"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هي أكبر بحيرة مياه عذبة في العالم من حيث الحجم؟', '["بحيرة سوبيريور","بحيرة هورون","بحيرة ميشيغان","بحيرة بايكال"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي مدينة أوروبية تمتلك أطول شبكة قنوات مائية في العالم؟', '["برمنغهام","البندقية (فينيسيا)","أمستردام","برلين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي مما يلي هو أطول نهر في أوروبا؟', '["نهر الدانوب","نهر الفولغا","نهر الأورال","نهر الدنيبر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي من هذه الدول ليست جزءاً من إقليم إسكندنافيا؟', '["النرويج","السويد","فنلندا","الدنمارك"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هي الدولة الأفريقية التي تعد اللغة البرتغالية لغتها الرسمية؟', '["بوتسوانا","الغابون","توغو","موزمبيق"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ميامي هي أكبر مدينة في ولاية فلوريدا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هي الإمارة الصغيرة التي تقع بين إسبانيا وفرنسا؟', '["ليختنشتاين","أندورا","موناكو","سان مارينو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'أي دولة صغيرة تقع بين حدود فرنسا وإسبانيا؟', '["سان مارينو","الفاتيكان","أندورا","ليختنشتاين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_98, 'ما هي ثاني أكبر دولة في العالم من حيث المساحة؟', '["روسيا","الصين","الولايات المتحدة الأمريكية","كندا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;

