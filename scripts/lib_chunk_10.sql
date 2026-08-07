DO $$
DECLARE
  v_lib_id_134 uuid;
BEGIN
  SELECT id INTO v_lib_id_134 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 11' LIMIT 1;
  IF v_lib_id_134 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 11', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_134;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'يشير مصطلح "تسارع ضربات القلب" إلى معدل ضربات قلب أثناء الراحة يقارب أو يتجاوز 100 نبضة في الدقيقة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'يمكن أن يصاب الشخص بحروق الشمس في اليوم الغائم.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'كم عدد الأسنان في فم الشخص البالغ كمتوسط (باستثناء أسنان العقل)‏؟', '["36","20","32","28"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'كم عدد الأسنان اللبنية لدى طفل الإنسان إجمالاً؟', '["10","15","25","20"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'حرق أي من هذه المعادن ينتج لهباً أبيض ساطعاً؟', '["المغنيسيوم","النحاس","الليثيوم","الرصاص"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'أي من العضيات التالية يساعد في تصنيع الحمض النووي (⁦DNA⁩) في الخلايا؟', '["النواة","الريبوسومات","الليزوسومات","الميتوكوندريا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'تمت تسمية عنصر الليثيوم الكيميائي نسبةً إلى دولة ليتوانيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ما هو الاسم الشائع للحالة الطبية المعروفة باسم متلازمة الإجهاد الظنبوبي الإنسي (⁦MTSS⁩)‏؟', '["مرفق التنس","النفق الرسغي","ركبة خادمة المنزل","ألم قصبة الساق"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'أي من السوائل التالية هو الأقل لزوجة؟ (بافتراض أن درجة الحرارة 25 مئوية)', '["الأسيتون","الماء","عطارد","البنزين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ماذا يعني اختصار كلمة "ليزر" (⁦LASER⁩) باللغة الإنجليزية؟', '["تحليل الضوء بواسطة الإيكوريزر المجسم","تضخيم الضوء بانبعاث الإشعاع المحفز","مضخم الضوء بواسطة طاقة الراديو الاحتياطية","المادة المضادة للحياة عن طريق الدخول الدائم للنطاق"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'شكل الأرض عبارة عن كرة مثالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ما هو المثال على مسبب أمراض بكتيري؟', '["الحصبة","الإيدز","القوباء الحلقية","الكوليرا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ماذا يمثل حرف "⁦S⁩" في اختصار وكالة الفضاء الأمريكية "⁦NASA⁩"؟', '["الفضاء","العلوم","المجتمع","النجم"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'البوزيترون هو الجسيم المضاد لأي مما يلي؟', '["النيوترون","الإلكترون","البروتون","الفوتون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ما هو الاسم الذي يُطلق على صغار الحيوانات الجرابية؟', '["عجل","جرو","جوي","شبل"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'أي من هذه الحيوانات ينتمي إلى طائفة الأسماك الغضروفية (⁦Chondrichthyes⁩)‏؟', '["الأخطبوط","الحوت القاتل","سمك السلور","القرش الأبيض الكبير"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ما هي وحدة المحاثة الكهربائية (الحث المغناطيسي)‏؟', '["الهنري","الويبر","الكولوم","المو (وحدة موصلية)"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'أي مما يلي هو جهاز تضخيم من أشباه الموصلات؟', '["الأنبوب المفرغ","الترانزستور","الديود (الوصلة الثنائية)","وصلة ⁦P-N⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_134, 'ما هو الرمز الكيميائي للرصاص؟', '["⁦Ld⁩","⁦Le⁩","⁦Pb⁩","⁦Pm⁩"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_135 uuid;
BEGIN
  SELECT id INTO v_lib_id_135 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 12' LIMIT 1;
  IF v_lib_id_135 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 12', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_135;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'فاز فريدريك بانتينغ وجون ماكلويد بجائزة نوبل لمساهماتهما في المجالات العلمية لميكانيكا الكم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'تيمناً بأي مدينة دنماركية تمت تسمية العنصر رقم 72 في الجدول الدوري؟', '["أودنسه","كوبنهاجن","هيرنينغ","سكاجن"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'مثلما حدث مع إنسان نياندرتال، تزاوج الإنسان العاقل (⁦Homo sapiens sapiens⁩) أيضاً مع إنسان دينيسوفان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'جميع كواكب النظام الشمسي تدور حول الشمس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'أي جزء من الجسم تؤثر عليه المياه الزرقاء (الجلوكوما)‏؟', '["العينين","الحلق","المعدة","الدم"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'تدفع ظاهرة "النينيو" المياه الدافئة إلى سواحل غرب المحيط الهادئ خلال فصل الشتاء.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'في الجدول الدوري، الرمز الكيميائي للبوتاسيوم هو حرف ⁦K⁩.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ما هو المصطلح الطبي لسرة البطن من بين الخيارات التالية؟', '["الشامة","المنخرين","باكسيلوس","السرة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'أي من العظام التالية ليست موجودة في الساق؟', '["الكعبرة","الرضفة","الظنبوب","الشظية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'كم تبلغ مسافة السنة الضوئية؟', '["1 وحدة فلكية","⁦9.461⁩ تريليون كيلومتر","⁦105.40⁩ سنة أرضية","⁦501.2⁩ مليون ميل"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ما هو الكوكب الأكثر حرارة في النظام الشمسي؟', '["المريخ","عطارد","الزهرة","المشتري"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ما هو العنصر الأكثر وفرة في الكون؟', '["الهيليوم","الليثيوم","الأكسجين","الهيدروجين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'يمكن للإنسان العادي أن يعيش لمدة أسبوعين بدون ماء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'الوحدة الفلكية هي المسافة بين الأرض والقمر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ما هو العدد الذري لليورانيوم؟', '["235","17","92","167"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ما هو الرمز الكيميائي للزئبق؟', '["⁦Me⁩","⁦Mc⁩","⁦Hy⁩","⁦Hg⁩"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'أي حدث انقراض رئيسي نتج عن اصطدام كويكب وأدى إلى القضاء على غالبية الديناصورات غير الطائرة؟', '["العصر الطباشيري-الباليوجيني","العصر الثلاثي-الجراسي","العصر البرمي-الثلاثي","العصر الأوردوفيشي-السيلوري"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'في مجال الطيران، تُستخدم القلابات والجنيحات المساعدة (⁦flaps and slats⁩) للتحكم في ماذا على الطائرة؟', '["الدفع","الرفع","السحب","الوزن"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_135, 'ماذا يعني اختصار ⁦CPR⁩، وهو الإجراء الطارئ لمساعدة شخص يعاني من توقف القلب؟', '["تخفيف الآلام المزمنة","تخفيف آلام السرطان","الإنعاش القلبي الرئوي","معدل انتشار وسائل منع الحمل"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_136 uuid;
BEGIN
  SELECT id INTO v_lib_id_136 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 13' LIMIT 1;
  IF v_lib_id_136 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 13', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_136;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'أي وحدة علمية سميت تيمناً بنبيل إيطالي؟', '["الفولت","الباسكال","الأوم","الهيرتز"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'ما هو عمر النصف لليورانيوم-235‏؟', '["4,300,400,000 سنة","703,800,000 سنة","1,260,900,000 سنة","اليورانيوم-235 نظير مستقر"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'كم تساوي 100 درجة مئوية بالفهرنهايت؟', '["326","100","212","451"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'ما هو الكروموسوم الذي تتسبب نسخة إضافية منه عادة في الإصابة بمتلازمة داون؟', '["23","15","24","21"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'في فيزياء الكم، أي من هذه الجسيمات دون الذرية الافتراضية لم يتم رصدها بعد؟', '["غرافيتون","بوزون ⁦Z⁩","نيوترينو تاو","غلوون"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'إلى جانب الأكسجين، ما هو العنصر المسؤول بشكل أساسي عن ظهور السماء باللون الأزرق؟', '["الهيليوم","النيتروجين","الكربون","الهيدروجين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'كم عدد الجسيمات التي تعادل مولاً واحداً؟', '["⁦6.002 × 10⁩^22","⁦6.022 × 10⁩^22","⁦6.022 × 10⁩^23","⁦6.002 × 10⁩^23"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'في الجدول الدوري للعناصر، ما هو الرمز الكيميائي للقصدير؟', '["⁦Ti⁩","⁦Ni⁩","⁦Na⁩","⁦Sn⁩"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'تحتوي الذرة على نواة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'الغضروف الهلالي الإنسي يشكل جزءاً من أي مفصل في جسم الإنسان؟', '["المرفق","الركبة","الكاحل","الكتف"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'كم قلباً يمتلك الأخطبوط؟', '["واحد","اثنان","ثلاثة","أربعة"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'أي من العناصر التالية يُستخدم عادة في تطعيم شبه الموصل (السيليكون)‏؟', '["الأكسجين","الكربون","الحديد","البورون"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'أي كوكب أرسلت له المركبة الفضائية ''فايكنغ 1'' صوراً لسطحه بدءاً من عام 1976‏؟', '["المريخ","زحل","المشتري","الزهرة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'من أي نظير يتكون اليورانيوم الطبيعي بشكل أساسي؟', '["235","238","239","233"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'تدور الأقمار ميراندا، وأرييل، وأومبريل، وتيتانيا، وأوبيرون حول أي كوكب؟', '["المشتري","الزهرة","أورانوس","نبتون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'ما هي الفئة التي صُنّف بها إعصار كاترينا عام 2005 وفقاً لمقياس سفير-سمبسون لرياح الأعاصير؟', '["الفئة الأولى","الفئة الرابعة","الفئة الثانية","الفئة الخامسة"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'أين توجد عظمة ''الظنبوب'' (قصبة الساق) في جسم الإنسان؟', '["الساق","الذراع","اليد","الرأس"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'ما هي الصيغة الجزيئية للمكون النشط في الفلفل الحار (الكابسيسين)‏؟', '["⁦C21H23NO3⁩","⁦C18H27NO3⁩","⁦C6H4Cl2⁩","⁦C13H25NO4⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_136, 'متلازمة العطس الضوئي المنعكس (الخلل البصري الشمسي القهري السائد) هي الحاجة إلى القيام بماذا عند رؤية الشمس؟', '["السعال","التثاؤب","العطس","الفواق"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_137 uuid;
BEGIN
  SELECT id INTO v_lib_id_137 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 14' LIMIT 1;
  IF v_lib_id_137 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 14', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_137;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للمسافة؟', '["المتر","الأنغستروم","القدم","القامة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'الكائن الحي الموصوف بأنه ''منتحٍ ضوئي'' يميل إلى التحرك نحو أي من هذه الأشياء؟', '["الماء","الضوء","الأشجار","حبوب اللقاح"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'ما الاسم الذي يطلق على الوهم السمعي لنغمة يبدو أنها ترتفع في حدتها إلى ما لا نهاية؟', '["وهم غليساندو","تأثير فرانتسن","نغمة شيبارد","تأثير ماكغورك"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'من هو مكتشف قانون الجاذبية؟', '["غاليليو غاليلي","تشارلز داروين","ألبيرت أينشتاين","سير إسحاق نيوتن"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'ما هو المبدأ الفيزيائي الذي يربط بين صافي التدفق الكهربائي الخارج من سطح مغلق والشحنة الموجودة داخل هذا السطح؟', '["قانون غاوس","قانون فاراداي","قانون أمبير","قانون بيو-سافارت"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'بأي وحدة يُقاس الإشعاع؟', '["واط","غراي","ديسيبل","كلفن"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'يدور حول كوكب المريخ قمران.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'ما هي النسبة المئوية التقريبية للأكسجين في الغلاف الجوي للأرض؟', '["54%","78%","7%","21%"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'أي من هذه العظام هو الأصعب كسرًا؟', '["عظم الفخذ","الجمجمة","عظم العضد","قصبة الساق"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'تتشارك مجموعات هابلوغروب الجينية البشرية التالية نفس الأسماء بين كروموسوم ⁦Y⁩ والحمض النووي للميتوكوندريا باستثناء:', '["هابلوغروب ⁦L⁩","هابلوغروب ⁦U⁩","هابلوغروب ⁦T⁩","هابلوغروب ⁦J⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'أين تقع العضلة الألوية الكبرى في الجسم؟', '["الذراع","الرأس","الأرداف","الجذع"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'ما هو الحيوان الذي شارك في أشهر تجربة فكرية للعالم شرودنغر؟', '["الكلب","الخفاش","الفراشة","القط"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'عملية تجميل الأنف (⁦Rhinoplasty⁩) هي إجراء جراحي يُجرى على أي جزء من جسم الإنسان؟', '["الأنف","الأذنان","الذقن","الرقبة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'أي من العناصر الكيميائية لديه أدنى درجة غليان؟', '["الهيدروجين","الهيليوم","النيون","النيتروجين"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'أي من المركبات الكيميائية التالية لا يوجد في حمض المعدة؟', '["حمض الهيدروكلوريك","كلوريد البوتاسيوم","حمض الكبريتيك","كلوريد الصوديوم"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'تدور الأرض حول الشمس في سنة واحدة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'تقوم ذكور الباندا بالوقوف على أيديها أثناء التبول على الأشجار.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'الفرق الأكبر بين الخلايا حقيقية النواة والخلايا بدائية النواة هو:', '["الحجم الإجمالي","وجود النواة أو غيابها","وجود أو غياب بعض العضيات","طريقة التكاثر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_137, 'في الكيمياء، كم عدد المتصاوغات التي يمتلكها البيوتانول (⁦C4H9OH⁩)‏؟', '["3","5","4","6"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_138 uuid;
BEGIN
  SELECT id INTO v_lib_id_138 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 15' LIMIT 1;
  IF v_lib_id_138 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 15', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_138;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'أي مما يلي يُعتبر مثالاً على الإشراط الكلاسيكي؟', '["تجارب كلاب بافلوف","تجربة صندوق سكينر","تجربة قطة شرودنغر","تجارب قرود هارلو"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كم عدد الكواكب القزمة المعترف بها رسمياً في النظام الشمسي والتي سميت تيمناً بآلهة بولينيزية؟', '["0","2","1","5"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'يتكون ملح الطعام بنسبة 100% من الصوديوم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كتلة الأرض والقمر متساوية تقريباً.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'ما هو المعدن الذي يمتلك أقل درجة على مقياس موهس لصلابة المعادن؟', '["التلك","الكوارتز","الألماس","الجبس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) لدرجة الحرارة؟', '["فهرنهايت","كلفن","سيلسيوس","رانكين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'ما هو أكبر حيوان يعيش حالياً على وجه الأرض؟', '["الأوركا","الحبار الضخم","الحوت الأزرق","الزرافة"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كم عدد قوانين الديناميكا الحرارية؟', '["ثلاثة","اثنان","خمسة","أربعة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كم عدد العظام في جسم الإنسان؟', '["206","203","209","200"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'قوة الجذب المركزي هي قوة ظاهرة تؤثر إلى الخارج على جسم يتحرك حول مركز، وتنشأ عن قصور الجسم الذاتي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كم عدد الكواكب في نظامنا الشمسي؟', '["تسعة","سبعة","ثمانية","عشرة"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'أين ضربت العاصفة العظيمة عام 1987 اليابسة أولاً؟', '["ساري","ويلز","الميدلاندز","كورنوال"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'ما اسم الثقب الأسود الفائق الكتلة الموجود في مركز مجرة درب التبانة؟', '["ساجيتاريوس ⁦A⁩*","مسييه 87","ألفا قنطورس","أندروميدا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'كم عدد الأقمار التي يمتلكها كوكب بلوتو؟', '["اثنان","خمسة","ثلاثة","واحد"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'يدرس علم التشريح أشكال البنى العيانية مثل الأعضاء والأجهزة العضوية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'يحدث مرض السكري من النوع الأول نتيجة لخلل في عمل الكبد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'أي جزء من الجسم تؤثر عليه حالة هشاشة العظام المرضية؟', '["العظام","الجلد","الدماغ","القلب"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'يحتوي السكر على الدهون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_138, 'رهاب الكلمات الطويلة (هيبوبوتومونستروسيسكيبيداليوفوبيا) هو الخوف غير العقلاني من الكلمات الطويلة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_139 uuid;
BEGIN
  SELECT id INTO v_lib_id_139 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 2' LIMIT 1;
  IF v_lib_id_139 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 2', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_139;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'أي مكوك فضاء تابع لناسا تحطم أثناء دخوله الغلاف الجوي في 1 فبراير 2003‏؟', '["كولومبيا","تشالنجر","ديكفري","أنديفور"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للكتلة؟', '["الطن","الكيلوغرام","الرطل","الغرام"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هو أول كائن حي صعد إلى الفضاء؟', '["القرد","الكلب","ذباب الفاكهة","الفأر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'فاز ألبرت أينشتاين بجائزة نوبل عن نظريته النسبية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'إلى أي عنصر يشير الرمز "⁦Au⁩" في الجدول الدوري؟', '["الذهب","الفضة","الأكسجين","النيكل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للتيار الكهربائي؟', '["الفولت","الأمبير","الأوم","الواط"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هي درجة الحرارة المتساوية في مقياسي السيلسيوس والفهرنهايت؟', '["32","-39","-40","-42"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هو فرط صوديوم الدم (⁦Hypernatremia⁩)‏؟', '["انخفاض نسبة البوتاسيوم في الدم","ارتفاع نسبة الجلوكوز في الدم","انخفاض نسبة الحديد في الدم","ارتفاع نسبة الصوديوم في الدم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'أي مما يلي ليس جزءاً من بنية العصبون (الخلية العصبية) النموذجي؟', '["جزر لانجرهانز","عقدة رانفييه","خلية شوان","غمد المايلين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'في أي مهمة تحطم مكوك الفضاء كولومبيا أثناء دخوله الغلاف الجوي؟', '["⁦STS-51-L⁩","⁦STS-107⁩","⁦STS-61-C⁩","⁦STS-109⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما الذي يسبب صوت نبضات القلب؟', '["انقباض حجرات القلب","خروج الدم من القلب","انغلاق صمامات القلب","ارتخاء حجرات القلب"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'كم عدد النسخ التي تمتلكها الخلايا البشرية عادة من كل جين؟', '["1","4","3","2"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'كم عدد حجرات قلب الإنسان؟', '["4","2","6","3"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هو اللون الذي لا يمكن إنتاجه في الورود، حتى من خلال التعديل الوراثي؟', '["الأسود","الأزرق","البرتقالي","البني"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'نجم الشمال (⁦Polaris⁩) هو ألمع نجم في سماء الليل في نصف الكرة الشمالي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'أي غاز نبيل لديه أقل عدد ذري؟', '["النيون","الأرجون","الكريبتون","الهيليوم"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'أي من مهمات أبولو كانت الأولى التي هبطت على سطح القمر؟', '["أبولو 11","أبولو 10","أبولو 9","أبولو 13"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'ما هو "مصنع الطاقة" في الخلية الحيوانية حقيقية النواة؟', '["النواة","الميتوكوندريا (المتقدرات)","البلاستيدات الخضراء","الشبكة الإندوبلازمية"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'من أين تنحدر سلالة الكلاب "تشيواوا" (⁦Chihuahua⁩)‏؟', '["فرنسا","إسبانيا","المكسيك","روسيا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_139, 'تتشكل الصخور النارية بفعل الحرارة والضغط الشديدين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_140 uuid;
BEGIN
  SELECT id INTO v_lib_id_140 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 3' LIMIT 1;
  IF v_lib_id_140 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 3', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_140;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'الماء منزوع الأيونات هو ماء تمت إزالة أي مما يلي منه؟', '["الحديد","الأكسجين","الهيدروجين","الذرات غير المشحونة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هو العنصر الأول في الجدول الدوري؟', '["الهيليوم","الهيدروجين","الأكسجين","الليثيوم"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'من صاغ نظرية "الانفجار العظيم" لأول مرة كان كاهناً ينتمي لأي طائفة دينية؟', '["المسيحية العامة","اليهودية","الكاثوليكية","الإسلامية"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما مقدار الإشعاع الذي تصدره موزة واحدة؟', '["⁦0.3⁩ ميكروسيفيرت","⁦0.5⁩ ميكروسيفيرت","⁦0.7⁩ ميكروسيفيرت","⁦0.1⁩ ميكروسيفيرت"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'أي قمر اصطناعي من سلسلة لاندسات (⁦Landsat⁩) لديه أطول فترة تشغيلية حتى الآن؟', '["لاندسات 5","لاندسات 8","لاندسات 7","لاندسات 6"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ماذا يسمى الغلاف الغازي للمذنب (الذي يشكّل الذيل)‏؟', '["المجرى الخلفي (⁦The wake⁩)","الذؤابة (⁦Coma⁩)","الارتداد الموجي (⁦The backwash⁩)","الطبقة المذابة (⁦The ablative⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'الديوتيريوم هو نظير لأي عنصر؟', '["النيتروجين","الهيليوم","الهيدروجين","النيون"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'تتكون الألياف العضلية من حزم من العضيات الطويلة والصغيرة تسمى ماذا؟', '["غلاف العضلة (⁦Epimysium⁩)","الخيوط العضلية (⁦Myofilaments⁩)","عضلة القلب (⁦Myocardium⁩)","اللييفات العضلية (⁦Myofibrils⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هي وحدة القياس العالمية الأساسية (⁦SI⁩) للوقت؟', '["الثانية","الدقيقة","الساعة","اليوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هي مرحلة النمو التي تقضي فيها معظم الخلايا حقيقية النواة غالبية دورة حياتها؟', '["الطور التمهيدي (⁦Prophase⁩)","الطور البيني (⁦Interphase⁩)","الطور الساكن (⁦Stasis⁩)","الطور النهائي (⁦Telophase⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'من هو مكتشف الأشعة السينية (أشعة إكس)‏؟', '["توماس ألفا إديسون","جيمس واط","فيلهلم كونراد رونتغن (⁦Wilhelm Conrad Röntgen⁩)","ألبرت أينشتاين"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'كم تبلغ مدة السنة الواحدة تقريباً على كوكب أورانوس؟', '["47 سنة أرضية","62 سنة أرضية","109 سنة أرضية","84 سنة أرضية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هي صيغة كيميائية للأمونيا (النشادر)‏؟', '["⁦NH3⁩","⁦CO2⁩","⁦NO3⁩","⁦CH4⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هو أقوى سم معروف على الإطلاق؟', '["الريسين","سم البوتولينوم (⁦Botulinum toxin⁩)","السيانيد","الأسبستوس"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'أي مما يلي هو نوع من منعكسات التمدد/منعكسات الوتر العميق؟', '["منعكس القيء (⁦Gag reflex⁩)","المنعكس الحدقي الضوئي (⁦Pupillary light reflex⁩)","منعكس نفضة الكاحل (⁦Ankle jerk reflex⁩)","منعكس الحك (⁦Scratch reflex⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ينطبق تأثير دوبلر على الضوء.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'كم تبلغ نسبة الماء تقريباً من مساحة سطح الأرض؟', '["70%","30%","50%","90%"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هو البوليمر المستخدم في صناعة الأقراص المدمجة (⁦CDs⁩)، ونظارات السلامة، ودروع مكافحة الشغب؟', '["المطاط","البولي كربونيت (⁦Polycarbonate⁩)","النايلون","الباكليت"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'كم يبلغ عمر كوكب الأرض تقريباً؟', '["⁦3.5⁩ مليار سنة","⁦2.5⁩ مليار سنة","⁦4.5⁩ مليار سنة","⁦5.5⁩ مليار سنة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_140, 'ما هو الدواء الذي كان يُستخدم سابقاً بشكل شائع كسم للفئران؟', '["أسبرين","إليكويس","تايلينول","كومادين"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_141 uuid;
BEGIN
  SELECT id INTO v_lib_id_141 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 4' LIMIT 1;
  IF v_lib_id_141 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 4', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_141;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما هو العنصر في الجدول الدوري الذي يحتوي على 92 إلكتروناً؟', '["اليورانيوم","الكبريت","الهيدروجين","الحديد"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'يغلي الماء دائماً عند 100 درجة مئوية، أو 212 درجة فهرنهايت، أو ⁦373.15⁩ كلفن، بغض النظر عن مكان وجودك.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما هو الاسم العلمي (اللينيني) لشجرة التفاح المستأنسة؟', '["مالوس أميريكانا (⁦Malus americana⁩)","بوموس دوميستيكا (⁦Pomus domestica⁩)","مالوس بوميلا (⁦Malus pumila⁩)","أبيلوس ديليكتيكا (⁦Appelus delectica⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'توفر ظاهرة صعود مياه القاع في المحيط مياهاً أكثر برودة وغنية بالمواد المغذية للنباتات والمحللات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'وفقاً لمقياس سكوفيل، ما هي المادة الكيميائية الأكثر حرارة؟', '["ريزينيفراتوكسين (⁦Resiniferatoxin⁩)","كابسيسين (⁦Capsaicin⁩)","ثنائي هيدروكابسيسين (⁦Dihydrocapsaicin⁩)","تنياتوكسين (⁦Tinyatoxin⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'أي مما يلي ليس نوعاً من الخلايا العصبية؟', '["الخلية العصبية الحسية","الخلية العصبية الإدراكية","الخلية العصبية الحركية","الخلية العصبية الموصلة (البينية)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ماذا يعني الاختصار العلمي (⁦DNA⁩)‏؟', '["حمض ديوكسي ريبوجينيتيك","ذرات ديوكسي ريبوجينيتيك","الحمض النووي الريبوزي منقوص الأكسجين","حمض إزالة السموم"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'تعتبر الشمس نجماً.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'أي مما يلي ليس من المجموعات التصنيفية في الجدول الدوري؟', '["الفلورينات","الفلزات القلوية","الهالوجينات","الغازات الخاملة (النبيلة)"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'من الناحية النباتية، أي من هذه الفواكه لا تُعتبر من التوتيات؟', '["التوت الأزرق","الفراولة","الموز","عنب كونكورد"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما الذي ينتج اللون الأخضر لمعظم أوراق النباتات؟', '["انكسار الضوء","الأصباغ الطبيعية","الكلوروفيل","الأشعة فوق البنفسجية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'عند أي عمق يجب عليك التوقف لتخفيف الضغط (وقفة الأمان) أثناء الغوص العادي؟', '["25 قدماً / ⁦7.5⁩ أمتار","50 قدماً / 15 متراً","75 قدماً / 23 متراً","15 قدماً / 5 أمتار"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما هو اسم الطبقة الدنيا (الأقرب للأرض) من الغلاف الجوي؟', '["التروبوسفير","الستراتوسفير","الميزوسفير","الثرموسفير"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'أي مما يلي يُعد كودون وقف (⁦Stop Codon⁩) في الحمض النووي (⁦DNA⁩)‏؟', '["⁦ACT⁩","⁦TAA⁩","⁦ACA⁩","⁦GTA⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'في أي عضو من أعضاء جسم الإنسان توجد ''جزر لانغرهانز''؟', '["الكلية","الكبد","البنكرياس","الدماغ"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'من من العلماء التاليين ليس لديه عنصر كيميائي مسمى باسمه؟', '["ألبرت أينشتاين","نيلز بور","إنريكو فيرمي","سير إسحاق نيوتن"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'كم عدد الفصوص في الرئة اليمنى للإنسان؟', '["3","4","2","1"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'يستطيع الجمبري (الروبيان) السباحة إلى الخلف.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما هو الوزن الذري القياسي لنواة البلوتونيوم؟', '["94","481","244","128"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_141, 'ما الذي يسبب داء لايم؟', '["فيروس","ديدان طفيلية","أميبا","بكتيريا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_142 uuid;
BEGIN
  SELECT id INTO v_lib_id_142 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 5' LIMIT 1;
  IF v_lib_id_142 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 5', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_142;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هو الاسم العلمي لرضفة الركبة (صابونة الركبة)‏؟', '["الرضفة (⁦Patella⁩)","عظم الفخذ (⁦Femur⁩)","الثقبة العظمى (⁦Foramen Magnum⁩)","لوح الكتف (⁦Scapula⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'تلتقي عظام العضد والكعبرة والزند معاً لتشكل أي مفصل؟', '["الركبة","المرفق (الكوع)","الكتف","الكاحل"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ماذا تدرس إذا كنت تدرس علم الحشرات (⁦Entomology⁩)‏؟', '["البشر","الدماغ","الحشرات","الأسماك"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما اسم الانحياز المعرفي الذي يخطئ فيه الشخص ذو القدرة المنخفضة في مهارة معينة فيظن نفسه متفوقاً؟', '["تأثير مايرز بريغز (⁦Meyers-Briggs effect⁩)","تأثير مولر-لاير (⁦Müller-Lyer effect⁩)","تأثير فرويد-هال (⁦Freud-Hall effect⁩)","تأثير دانينغ-كروجر (⁦Dunning-Kruger effect⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'أي مما يلي ليس مصطلحاً يُستخدم لوصف الزلازل؟', '["الانهيار الانزلاقي (⁦Drop-slide⁩)","الهزة الارتدادية المسبقة (⁦Foreshock⁩)","صدع الانزلاق المضربي (⁦Strike-slip⁩)","الهزة الأرضية (⁦Temblor⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'تتكون النجوم بشكل أساسي من الهيدروجين وأي غاز آخر؟', '["الأكسجين","الهيليوم","الأرغون","النيتروجين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هي الدولة التي نجحت لأول مرة في تفريخ وتربية تونة ذات زعانف زرقاء في المزارع عام 1979‏؟', '["فرنسا","الولايات المتحدة الأمريكية","اليابان","الفلبين"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هو الاسم البديل لاضطراب تعدد الشخصيات؟', '["اضطراب سلامة الهوية الجسدية (⁦Body integrity identity disorder⁩)","أزمة الهوية","الفصام (⁦Schizophrenia⁩)","اضطراب الهوية الانفصامي (⁦Dissociative identity disorder⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'يمكن للصوت أن ينتقل عبر الفراغ.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'تعتبر نبتة "جيمبي ستينجر" النبتة الأكثر فتكاً في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هو الاسم الرسمي للنجم الأقرب إلى القطب السماوي الشمالي؟', '["النهر (⁦Eridanus⁩)","جاما الملتهب (⁦Gamma Cephei⁩)","نجم الشمال (⁦Polaris⁩)","إيوتا الملتهب (⁦Iota Cephei⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هو العدد الذري لعنصر الاسترونشيوم؟', '["73","47","11","38"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'أي نوع من الصخور يتكون بفعل الحرارة والضغط الشديدين؟', '["الصخور المتحولة","الصخور الرسوبية","الصخور النارية","الألماس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'أي مما يلي هي خلايا تابعة لجهاز المناعة التكيفي؟', '["الخلايا التغصنية","الخلايا التائية القاتلة","الخلايا القاتلة الطبيعية","خلايا الدم البيضاء"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'أي مما يلي هو الجزء التناسلي الذكري المنتج لحبوب اللقاح في الزهرة؟', '["السبلة","المدقة","السداة","البتلة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'أي جزء من نبات الماريجوانا ينتج المادة المؤثرة عقلياً المعروفة باسم ⁦THC⁩‏؟', '["الأوراق","الزهرة الذكرية","كتلة الجذور","الزهرة الأنثوية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'طور العالمان الفرنسيان لويس باستور وإيميل رو أول لقاح لداء الكلب في عام 1885.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'قتل العلماء بالخطأ أقدم مخلوق حي معروف في العالم، وهو حيوان رخوي، تبين أن عمره يبلغ 507 سنوات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'ما هو الرمز الكيميائي لعنصر الهيليوم؟', '["⁦H⁩","⁦Hg⁩","⁦He⁩","⁦Hs⁩"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_142, 'تنبع كلمة "⁦Science⁩" (علم) من الكلمة اللاتينية "⁦Scire⁩" والتي تعني ماذا؟', '["أن تقيس","أن تعيش","أن تعد","أن تعرف (المعرفة)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_143 uuid;
BEGIN
  SELECT id INTO v_lib_id_143 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 6' LIMIT 1;
  IF v_lib_id_143 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 6', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_143;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هي وحدة السعة الكهربائية؟', '["الفاراد","الغاوس","الهنري","الواط"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'كم قمراً للأرض؟', '["0","1","2","3"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو المصطلح العلمي لـ ''حاسة التذوق''؟', '["حاسة الشم","الحس الجسدي","الإدراك الذوقي","الإدراك السمعي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'أي عنصر لديه أعلى درجة انصهار؟', '["التنجستن","البلاتين","الأوزميوم","الكربون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ماذا استخدم غريغور مندل لاختبار العبور الجيني وعلم الوراثة؟', '["البازلاء","القطط","الزهور","الببّغاوات"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو أكبر كوكب في النظام الشمسي؟', '["زحل","المشتري","الأرض","المريخ"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'كم يبلغ عمر الكون؟', '["⁦4.5⁩ مليار سنة","⁦7.9⁩ مليار سنة","⁦13.8⁩ مليار سنة","⁦16.2⁩ مليار سنة"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'أين تقع الغدة الصنوبرية في جسم الإنسان؟', '["المنطقة الأربية (أعلى الفخذ)","الصدر","الحلق","الدماغ"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو المصطلح الأكثر ارتباطاً بسيغموند فرويد؟', '["التحليل النفسي","العلاج المعرفي السلوكي","نظرية الجاذبية","العلاج السلوكي الجدلي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هي الصيغة الجزيئية للجلوكوز؟', '["⁦C2H4O2⁩","⁦C6H12O6⁩","⁦K⁩+","⁦CH4⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو العلم الذي يدرس خلايا وأنسجة النباتات والحيوانات؟', '["علم الأحياء الدقيقة","علم التشريح","علم الأنسجة (⁦Histology⁩)","الكيمياء الحيوية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هي المادة الأساسية المسببة للإدمان والموجودة في التبغ؟', '["الكاثينون","الإيفيدرين","الغلاوسين","النيكوتين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'كم عدد الأرجل التي يستحيل بيولوجياً أن تكون لدى أم أربعة وأربعين (حريش)‏؟', '["100","26","50","74"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو التركيب الكيميائي للماء؟', '["⁦C12H6O2⁩","⁦H20⁩","⁦CO2⁩","⁦H⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'في علم النفس، أي من الاحتياجات التالية تقع في أعلى هرم "ماسلو للاحتياجات الإنسانية"؟', '["الحب والانتماء","الأمان","تقدير الذات (الاحترام)","الاحتياجات الفسيولوجية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'أي من الأوعية الدموية التالية يحمل دماً غير مؤكسج (خالٍ من الأكسجين)‏؟', '["الوريد الرئوي","الشريان الأورطي (الأبهر)","الشريان التاجي","الشريان الرئوي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو أول مركب عضوي تم تحضيره (تخليقه) من مركبات غير عضوية؟', '["اليوريا (البولينا)","البروبان","الإيثانول","الفورمالديهايد"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'كان إنسان النياندرتال سلفاً مباشراً للإنسان الحديث.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'ما هو الاسم العلمي للثعلب الأحمر؟', '["فولبيس ريدوس (⁦Vulpes Redus⁩)","الثعلب الأحمر (⁦Red Fox⁩)","فولبيس فولبيس (⁦Vulpes Vulpes⁩)","فولبيس فولبي (⁦Vulpes Vulpie⁩)"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_143, 'أي مما يلي هو المصطلح العلمي لـ "تجمد الدماغ"؟', '["هايسنثويدس إيتاليكا","أمارانثوس ريتروفليكسوس","أمبليوما أمريكانوم","سفينوبالاتين غانغليونورالجيا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_144 uuid;
BEGIN
  SELECT id INTO v_lib_id_144 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 7' LIMIT 1;
  IF v_lib_id_144 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 7', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_144;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هو نوع عمى الألوان الأكثر ندرة على الإطلاق؟', '["الأزرق","الأحمر","الأخضر","البنفسجي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'كل العناصر الفلزية التالية تكون سائلة عند درجة حرارة الغرفة أو قريباً منها ما عدا:', '["الغاليوم","البيريليوم","السيزيوم","الزئبق"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هو الاسم العلمي لغوريلا السهول الغربية؟', '["غوريلا غوريلا ديهلي","غوريلا بيرنغي غراويري","غوريلا غوريلا غوريلا","غوريلا بيرنغي بيرنغي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هو العنصر الذي يتحول إلى ألماس عند تعرضه لحرارة وضغط شديدين؟', '["النيتروجين","الأكسجين","الهيدروجين","الكربون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'أي جزء من جسم الإنسان يصيبه مرض ألزهايمر بشكل أساسي؟', '["الدماغ","الرئتان","الجلد","القلب"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'حمض الفوليك هو الشكل الاصطناعي لأي من الفيتامينات التالية؟', '["فيتامين أ","فيتامين ب","فيتامين ج","فيتامين د"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'أي جزء من الدماغ يأخذ اسمه من الكلمة اليونانية التي تعني "حصان البحر"؟', '["المخيخ","المهاد","الحصين","اللوزة الدماغية"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هي وحدة قياس المقاومة الكهربائية؟', '["المهو","التسلا","الجول","الأوم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'كم عدد أنواع الكواركات في النموذج القياسي للفيزياء؟', '["6","2","3","4"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'من هو عالم النفس السويسري الذي يرتبط اسمه بمفهومي الشخصية الانطوائية والانبساطية؟', '["جان بياجيه","كارل يونغ","أليس ميلر","هيرمان رورشاخ"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'يقوم القرش الأبيض الكبير أحياناً بهجوم "الضربة والعضة" (عضة اختبارية) على ضحاياه.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هي الوحدة القياسية الدولية لشدة الإضاءة؟', '["اللومن","الفاراداي","الكولوم","الكانديلا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'أي غاز يشكل حوالي 78% من الغلاف الجوي للأرض؟', '["النيتروجين","الأكسجين","الأرغون","ثاني أكسيد الكربون"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'لأقرب دقيقة، كم من الوقت يستغرق ضوء الشمس للوصول إلى الأرض؟', '["6 دقائق","8 دقائق","دقيقتان","12 دقيقة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'تيمناً بمن تم تسمية العنصر الكيميائي الكوريوم؟', '["مسبار كوريوسيتي","جورج الفضولي","ماري وبيير كوري","ستيفن كوري"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هو أكبر كائن حي معروف للإنسان حالياً؟', '["الحوت الأزرق","شجرة الخشب الأحمر","الشعاب المرجانية","فطر العسل"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'ما هو العضيو الذي يعتبر "محطة طاقة الخلية"؟', '["الميتوكوندريا","الريبوسوم","ريد بول","النواة"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'يُعتبر المركب العضوي كحولاً إذا كان يحتوي على أي من المجموعات الوظيفية التالية؟', '["الكربونيل","الهيدروكسيل","الألكيل","الألدهيد"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'إلى ماذا يشير مصطلح "العزل" في علم الأحياء الدقيقة؟', '["نقص التغذية في البيئات الدقيقة","مستوى النيتروجين في التربة","فصل سلالة معينة من تجمع طبيعي ومختلط للميكروبات الحية","اختبار تأثيرات كائنات دقيقة معينة في بيئات معزولة مثل الكهوف"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_144, 'أي مصطلح نفسي يشير إلى التوتر الناتج عن حمل معتقدات متناقضة؟', '["متلازمة التقلب","انقسام الدماغ","الرؤية العمياء","التنافر المعرفي"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_145 uuid;
BEGIN
  SELECT id INTO v_lib_id_145 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 8' LIMIT 1;
  IF v_lib_id_145 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 8', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_145;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما هو الكوكب الأكثر سخونة في المجموعة الشمسية؟', '["الزهرة","المشتري","عطارد","المريخ"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما هي الصيغة الجزيئية لغاز الأوزون؟', '["⁦C6H2O6⁩","⁦O3⁩","⁦N2O⁩","⁦SO4⁩"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'من الذي طور أول لقاح ناجح لشلل الأطفال في خمسينيات القرن الماضي؟', '["جون إندرز","توماس ويلر","جوناس سالك","فريدريك روبنز"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ماذا يعني الاسم العلمي للمخلوق البحري "أنومالوكاريس" الذي عاش في العصر الكامبري؟', '["السمكة المشوهة","السرطان الغريب","المحار الشاذ","الروبيان غير الطبيعي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما هو النوكليوتيد الذي يرتبط مع الغوانين؟', '["السيتوزين","الثايمين","الأدينين","اليوراسيل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'أي كواكب المجموعة الشمسية هو الأقرب إلى الشمس؟', '["الأرض","عطارد","المريخ","الزهرة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'علم النفس هو علم دراسة السلوك والعقل.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما الاسم الشائع لحمض إيزوبوتيل فينيل بروبيونيك؟', '["المورفين","الكيتامين","الأسبرين","الإيبوبروفين"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'مما تتكون أظافر الإنسان؟', '["الكيراتين","العظام","الكيتين","الكالسيوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'يتكون معظم الشمس من أي عنصرين؟', '["الهيدروجين والنيتروجين","الهيدروجين والهيليوم","الكربون والنيتروجين","الكربون والهيليوم"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'أي قمر هو التابع الوحيد في مجموعتنا الشمسية الذي يمتلك غلافاً جوياً كثيفاً؟', '["أوروبا","ميراندا","تيتان","كاليستو"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما الذي يقع في مركز مجرتنا؟', '["ثقب دودي","مستعر أعظم","شبه نجم (كوازار)","ثقب أسود"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'ما هي أطول عظمة في جسم الإنسان؟', '["عظمة الفخذ","لوح الكتف","الشظية","الزند"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'أي من هذه الصفائح هي الأكثر شهرة بالتسبب في حدوث الزلازل والتسونامي؟', '["حدود الصفائح المتباعدة/المتقاربة/القشرة المحيطية","حدود الصفائح المتقاربة/القشرة المحيطية","حدود الصفائح التحويلية/حدود الصفائح المتباعدة","القشرة المحيطية والقارية/حدود الصفائح التحويلية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'أي من البلاستيك التالي يُسخدم عادةً في إطارات النوافذ والمزاريب وأنابيب الصرف؟', '["بولي إيثيلين (⁦PE⁩)","بولي بروبيلين (⁦PP⁩)","بولي فينيل كلورايد (⁦PVC⁩)","بولي ستيرين (⁦PS⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'أي مما يلي ليس عنصراً حقيقياً في الجدول الدوري؟', '["براسيديوميوم","هاسيوم","لوتيتيوم","فيترينيوم"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'متى تم استنساخ أول ثديي بنجاح؟', '["1996","2009","1999","1985"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'المرض الجوفي (السيلياك) هو مرض يصيب القلب، مما يجعل المصابين به غير قادرين على تناول اللحوم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'الفولاذ هو سبيكة من الحديد والكربون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_145, 'كم عدد الكروموسومات في خلايا جسمك؟', '["21","22","24","23"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_146 uuid;
BEGIN
  SELECT id INTO v_lib_id_146 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 9' LIMIT 1;
  IF v_lib_id_146 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 9', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_146;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'كان يُعتقد في الماضي أن حقن غضروف القرش في البشر يمنعهم من الإصابة بالسرطان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي كوكبة تحتوي على مركز مجرة درب التبانة؟', '["العقرب","الرامي (القوس)","الحواء","الجدي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'تيتسويا فوجيتا كان عالماً طور مقياساً لأي من الكوارث الطبيعية التالية؟', '["الأعاصير الاستوائية (الهوريكان)","الزلازل","الأعاصير القمعية (التورنادو)","البراكين"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'كولروفوبيا (⁦Coulrophobia⁩) هي الخوف غير العقلاني من ماذا؟', '["المقابر","الإبر","الأنفاق","المهرجين"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي من هذه النجوم هو الأكبر حجماً؟', '["يو واي سكوتي (⁦UY Scuti⁩)","في واي الكلب الأكبر (⁦VY Canis Majoris⁩)","منكب الجوزاء (⁦Betelgeuse⁩)","آر دبليو الملتهب (⁦RW Cephei⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'في الفيزياء، يعتبر حفظ الطاقة وحفظ الزخم كلاهما نتيجة لأي مما يلي؟', '["مبرهنة بيل","مبرهنة نويثر","مبرهنة ويك","مبرهنة كارنو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ما اسم أول قمر صناعي للأرض أطلقه الاتحاد السوفيتي عام 1957‏؟', '["سويوز ⁦7K-OK⁩","زينيت-2","سبوتنيك 1","فوسخود ⁦3KV⁩"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'الميوبيا (⁦Myopia⁩) هو المصطلح العلمي لأي حالة؟', '["طول النظر","الرؤية المزدوجة","الرؤية الضبابية","قصر النظر"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي من هذه العناصر يعتبر من أشباه الفلزات؟', '["الأنتيمون","القصدير","البروم","الروبيديوم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ما هي سرعة الضوء في الفراغ؟', '["50,461 م/ث","299,792,458 م/ث","308,215,043 م/ث","751,665,014,151 م/ث"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي مما يلي ليس مكوناً كهربائياً خاملاً؟', '["المقاوم","المكثف","الترانزستور","المحث"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ما هو المصطلح الطبي لانخفاض نسبة السكر في الدم؟', '["قصور الغدة الدرقية","انخفاض حرارة الجسم","نقص الأكسجين","نقص سكر الدم"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ما هو لون الدم غير المؤكسج؟', '["الأحمر","الأزرق","البنفسجي","الأخضر"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي من هذه العناصر في الجدول الدوري يعتبر غازاً نبيلاً؟', '["البوتاسيوم","النيون","اليود","الكوبالت"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ما هو العضيو الخلوي المعروف بـ "محطة طاقة الخلية"؟', '["النواة","جهاز جولجي","الميتوكوندريا","الشبكة الإندوبلازمية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'إذا غمست منشفة جافة في حوض مليء بالماء، سيرتفع الماء إلى أعلى المنشفة بفعل ظاهرة تسمى "الخاصية الكارتيلرية" (⁦Cartillary Action⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'ماذا يمثل المعين الأصفر في معين الحرائق (⁦NFPA 704⁩)‏؟', '["التفاعلية","المخاطر الصحية","القابلية للاشتعال","النشاط الإشعاعي"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي من المركبات الفضائية التالية لم تلمس القمر مطلقاً؟', '["أبولو 11","مارينر 4","لونا 2","سمارت-1"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_146, 'أي جزء من الجسم يفرز الأنسولين؟', '["الكلية","الكبد","البنكرياس","المعدة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_147 uuid;
BEGIN
  SELECT id INTO v_lib_id_147 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 1' LIMIT 1;
  IF v_lib_id_147 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 1', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_147;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'من هو سائق الفورمولا 1 الذي لُقِّب بـ ''البروفيسور''؟', '["ألان بروست","أيرتون سينا","نيكي لاودا","إيمرسون فيتيبالدي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'في الفورمولا 1، تم إدخال سيارة الأمان الافتراضية بعد الحادث المميت لأي سائق؟', '["أيرتون سينا","جول بيانكي","رونالد راتزنبرجر","جيل فيلنوف"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'ملعب ''ستاديوم أوف لايت'' (ملعب النور) هو الملعب الرئيسي لأي فريق كرة قدم؟', '["نادي برشلونة","باريس سان جيرمان","نادي سندرلاند","مانشستر يونايتد"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'من هو اللاعب الذي شارك في أكبر عدد من البطولات مع منتخب ألمانيا لكرة القدم؟', '["ميروسلاف كلوزه","فيليب لام","أوليفر كان","لوثار ماتيوس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'عند أي جسر يبدأ سباق القوارب السنوي بين أكسفورد وكامبريدج؟', '["باتني","هامرسميث","فوكسهول","باترسي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'بأي حدث مأساوي يُذكر موسم 1994 للفورمولا 1‏؟', '["المواجهة الحاسمة (أستراليا)","وفاة أيرتون سينا (سان مارينو)","احتراق سيارة فيرستابين (ألمانيا)","إيقاف شوماخر (بريطانيا)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'أي من هذه المدن الروسية لم تحتوي على ملعب استُخدم في كأس العالم لكرة القدم 2018‏؟', '["روستوف على نهر الدون","يكاترينبورغ","فلاديفوستوك","كالينينغراد"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'ما هو الرقم القياسي الشخصي للعداء كينينيسا بيكيلي في الماراثون؟', '["2:01:12","2:01:45","2:01:51","2:01:41"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'عُرضت الحلقة الأولى من برنامج ''⁦WWF Monday Night RAW⁩'' في 11 يناير 1990.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'أُدرجت رياضة التزلج على الألواح (⁦Skateboarding⁩) في دورة الألعاب الأولمبية الصيفية لعام 2020 في طوكيو.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'من هو لاعب دوري السلة الأمريكي (⁦NBA⁩) الذي فاز بجائزة اللاعب الأكثر قيمة (⁦MVP⁩) لموسم 1999-2000‏؟', '["ألين إيفرسون","كوبي براينت","شاكيل أونيل","بول بيرس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'متى أُقيمت أول مباراة دولية رسمية في تاريخ كرة القدم؟', '["1880","1863","1865","1872"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'افتتح لاعب كرة القدم كريستيانو رونالدو متحفاً مخصصاً لنفسه.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'في أي دولة أُقيمت دورة الألعاب الأولمبية الشتوية لعام 2014 في مدينة سوتشي؟', '["كوريا الجنوبية","روسيا","النرويج","كندا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'ما هو المنتخب الوطني الذي فاز بأول نسخة من دوري الأمم الأوروبية؟', '["هولندا","إنجلترا","البرتغال","سويسرا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'من يُعتبر أفضل لاعب كرة قدم روماني على مر العصور؟', '["كريستيان كيفو","نيكولاي دوبرين","جورجي بوبيسكو","جورجي هاجي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'من هو لاعب السهام المريشة (⁦Darts⁩) الذي فاز بأكبر عدد من ألقاب بطولة العالم؟', '["فيل تايلور","مايكل فان جيروين","ريموند فان بارنيفيلد","إيريك بريستو"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'ما هي النتيجة النهائية لمباراة ألمانيا ضد البرازيل في كأس العالم 2014‏؟', '["0 - 1","7 - 1","3 - 4","16 - 0"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_147, 'كم عدد النقاط التي سجلها ليبرون جيمس في أول مباراة له في دوري السلة الأمريكي (⁦NBA⁩)‏؟', '["19","69","25","41"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_148 uuid;
BEGIN
  SELECT id INTO v_lib_id_148 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 2' LIMIT 1;
  IF v_lib_id_148 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 2', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_148;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في أي عام فاز جينسون باتون بأول بطولة عالم لسائقي الفورمولا 1 في مسيرته؟', '["2009","2010","2007","2006"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من هو سائق الفورمولا 1 الذي انتقل إلى فريق آخر في منتصف موسم 2017‏؟', '["دانييل كفيات","كارلوس ساينز الابن","جوليون بالمر","ريو هاريانتو"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من هو اللاعب الأكثر مشاركة في المباريات تاريخياً مع نادي مانشستر يونايتد؟', '["ديفيد بيكهام","واين روني","رايان غيغز","إيريك كانتونا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من فاز بدوري أبطال أوروبا في عام 2016‏؟', '["بايرن ميونخ","أتلتيكو مدريد","مانشستر سيتي","ريال مدريد"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في عام 2008، حقق يوسين بولت الرقم القياسي العالمي لسباق 100 متر برباط حذاء واحد غير مربوط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في كأس العالم 2014، ما هي النتيجة النهائية لمباراة البرازيل ضد ألمانيا؟', '["1-5","1-7","1-6","2-6"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'ما اسم ملعب نادي مانشستر يونايتد الرئيسي؟', '["أنفيلد","ملعب مدينة مانشستر","أولد ترافورد","سانت جيمس بارك"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في موسم 1988 للفورمولا 1، فاز فريق ماكلارين بجميع السباقات باستثناء سباق واحد فقط، ما هو هذا السباق؟', '["سباق جائزة اليابان الكبرى","سباق جائزة موناكو الكبرى","سباق جائزة البرازيل الكبرى","سباق جائزة إيطاليا الكبرى"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'أي من هذه الفرق لم يلعب لصالحها اللاعب يارومير ياغر؟', '["نيويورك آيلاندرز","كالغاري فليمز","نيوجيرسي ديفلز","دالاس ستارز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'كم عدد لاعبي كرة القدم الذين يجب أن يتواجدوا في الملعب في نفس الوقت (لكلا الفريقين)‏؟', '["20","22","24","26"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'أي شركة تصنيع سيارات فازت بسباق لو مان 24 ساعة لعام 2017‏؟', '["تويوتا","أودي","بورشه","شيفروليه"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في عام 2016، من فاز ببطولة العالم لـ ''الصانعين'' في الفورمولا 1 للمرة الثالثة على التوالي؟', '["سكوديريا فيراري","ماكلارين هوندا","ريد بول ريسينغ رينو","مرسيدس إيه إم جي بتروناس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'كم عدد ألقاب الدوري الإنجليزي الممتاز التي حققها السير أليكس فيرغسون خلال فترة تدريبه لمانشستر يونايتد؟', '["13","11","20","22"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'ملعب الاتحاد هو الملعب الرئيسي لأي فريق؟', '["مانشستر يونايتد","مانشستر سيتي","أرسنال","بلاكبول"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'في أي عام فاز نادي ستيوا بوخارست بكأس أوروبا (المعروف حالياً بدوري أبطال أوروبا) ضد نادي برشلونة؟', '["1990","1982","1986","1989"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من فاز بسباق دايتونا 500 (⁦Daytona 500⁩) لعام 1998‏؟', '["جون أندرسون","جيف غوردون","مايكل والتريب","ديل إيرنهاردت"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'أي شركة ملابس رياضية ألمانية تستخدم شعار ''فورم سترايب'' (الخط المقوس المميز)‏؟', '["بوما","نايكي","أديداس","ريبوك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من هو الهداف التاريخي لنادي مانشستر يونايتد في الدوري الإنجليزي الممتاز؟', '["السير بوبي تشارلتون","واين روني","رايان غيغز","ديفيد بيكهام"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_148, 'من فاز ببطولة العالم للفورمولا 1 لعام 2015‏؟', '["نيكو روزبرغ","سيباستيان فيتيل","لويس هاملتون","جينسون باتون"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;

