DO $$
DECLARE
  v_lib_id_89 uuid;
BEGIN
  SELECT id INTO v_lib_id_89 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 11' LIMIT 1;
  IF v_lib_id_89 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 11', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_89;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'في أي قارة تقع دولة غيانا؟', '["أمريكا الجنوبية","أفريقيا","أمريكا الشمالية","آسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أي محيط يحد الساحل الغربي للولايات المتحدة؟', '["المحيط الأطلسي","المحيط الهادئ","المحيط الهندي","المحيط المتجمد الشمالي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'ما الحدث الذي أدى إلى إضافة تاج إلى علم ليختنشتاين؟', '["تتويج الأمير يوهان الأول جوزيف عام 1805","مرسوم تشارلز السادس عام 1719","الألعاب الأولمبية لعام 1936","توقيع دستور ليختنشتاين لعام 1862"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'ما هي السنة المكتوبة على علم ولاية ويسكونسن الأمريكية؟', '["1634","1783","1901","1848"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أي دولة تحد دولة بليز؟', '["غواتيمالا","لاوس","بيرو","كينيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'لا توجد صحاري في أوروبا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'كم عدد المحطات في خط سنترال (الخط المركزي) في مترو أنفاق لندن؟', '["51","43","49","47"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أي من هذه الدول الجزرية تقع في منطقة الكاريبي؟', '["فيجي","جزر المالديف","سيشل","باربادوس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'كم عدد الدول التي تحد قرغيزستان؟', '["4","3","1","6"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'ما هي عاصمة ولاية ويسكونسن الأمريكية؟', '["ميلووكي","ماديسون","ويسكونسن ديلز","غرين باي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أي من هذه الجزر الواقعة في البحر الأبيض المتوسط تخضع للسيادة الفرنسية؟', '["مايوركا","سردينيا","كورسيكا","مالطا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'ما هي المدينة الأكثر اكتظاظاً بالسكان في الأمريكتين في عام 2015‏؟', '["نيويورك","مكسيكو سيتي","لوس أنجلوس","ساو باولو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'في أي جزء من ويلز تقع قرية لانفايربولغوينغيلغوغيريتشويرندروبوليلانتيسيليوغوغوغوتش؟', '["أنغلزي","بيمبروكشاير","ريكسهام","بريدجند"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'في أي بلد تقع تالين؟', '["فنلندا","إستونيا","السويد","بولندا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أي من الدول التالية يتميز علمها بوجود أسد أصفر يحمل سيفاً على خلفية حمراء داكنة؟', '["كيريباتي","إسكتلندا","سريلانكا","بوتان"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'ما هي الطريقة الصحيحة لكتابة اسم عاصمة المجر باللغة الإنجليزية؟', '["⁦Boodapest⁩","⁦Bhudapest⁩","⁦Budapast⁩","⁦Budapest⁩"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'سانتوريني هي جزيرة تابعة لأي دولة أوروبية؟', '["اليونان","إيطاليا","إسبانيا","تركيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'كم عدد الولايات الاتحادية في ألمانيا؟', '["13","16","32","25"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_89, 'أين يقع نهر الفولغا؟', '["بلغاريا","الهند","روسيا","السويد"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_90 uuid;
BEGIN
  SELECT id INTO v_lib_id_90 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 12' LIMIT 1;
  IF v_lib_id_90 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 12', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_90;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أي جزيرة في جزر الكناري كانت مسرحاً لواحدة من أسوأ كوارث الطيران في التاريخ بعد تصادم طائرتي جامبو؟', '["تينيريفي","فورتيفنتورا","غران كناريا","ماوي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'لا توجد مطارات في ليختنشتاين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أي من الدول العربية التالية لا يحتوي علمها على ألوان الوحدة العربية فقط؟', '["الكويت","الإمارات العربية المتحدة","قطر","الأردن"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هي أكبر دولة في العالم؟', '["الصين","كندا","البرازيل","الاتحاد الروسي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'في استطلاع مؤشر السلام العالمي لعام 2016، من بين 163 دولة، ما كان ترتيب الولايات المتحدة الأمريكية؟', '["103","10","59","79"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما الاسم السابق لدولة زيمبابوي الأفريقية؟', '["زامبيا","روديسيا","موزمبيق","بولاوايو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أين يقع سور هادريان؟', '["روما، إيطاليا","الإسكندرية، مصر","كارلايل، إنجلترا","دبلن، أيرلندا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'في أي مدينة يقع جيش التراكوتا (جيش الطين)‏؟', '["بكين","شنغهاي","هونغ كونغ","شيان"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هي أكبر مدينة والعاصمة التجارية لسريلانكا؟', '["كولومبو","موراتوا","نيغومبو","كاندي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'يتميز الشعار الموجود على علم جمهورية طاجيكستان بشروق الشمس فوق الجبال تحت أي رمز؟', '["طائر","تاج","منجل","شجرة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'كم عدد النجوم الموجودة على علم نيوزيلندا؟', '["5","2","4","0"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هو مسار التسلق الأكثر شيوعاً لثاني أعلى جبل في العالم (جبل ⁦K2⁩)‏؟', '["ماجيك لاين","مسار سيسين","المسار البولندي","حافة أبروتسي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هي أكبر جزيرة غير قارية في العالم؟', '["جرينلاند","غينيا الجديدة","بورنيو","مدغشقر"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هي عاصمة ولاية نيفادا الأمريكية؟', '["لاس فيغاس","كارسن سيتي","هندرسون","رينو"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'كل ما يلي عبارة عن بلدات/قرى في دولة كيريباتي الواقعة في المحيط الهادئ باستثناء:', '["رونغاتا","لندن","أوروتورا","واشنطن"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أي من الدول التالية حظرت استخدام فحوصات السلالة الجينية الشخصية؟', '["النمسا","كندا","السويد","ألمانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أي من هذه المدن ليست في إنجلترا؟', '["إدنبرة","أكسفورد","مانشستر","ساوثهامبتون"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'ما هي عاصمة سورينام؟', '["أنتاناناريفو","باراماريبو","تيغوسيغالبا","سوكري"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_90, 'أي من اللغات الأوروبية التالية تُصنف كـ "لغة معزولة"؟', '["الغاليسية","المالطية","الباسكية","المجرية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_91 uuid;
BEGIN
  SELECT id INTO v_lib_id_91 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 13' LIMIT 1;
  IF v_lib_id_91 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 13', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_91;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'ما هي عاصمة إسبانيا؟', '["مدريد","برشلونة","إشبيلية","طليطلة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'مدينة سانت لويس هي عاصمة ولاية ميزوري الأمريكية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'سُميت كولومبيا نسبةً إلى كريستوفر كولومبوس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'ما هي عاصمة ولاية أريزونا الأمريكية؟', '["مونتغومري","تالاهاسي","رالي","فينيكس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'في أي مدينة يقع برج "سبيس نيدل"؟', '["سياتل","لوس أنجلوس","تورونتو","فانكوفر"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'أي من هذه الدول تقع في أبعد نقطة عن بحر الصين الجنوبي؟', '["ماليزيا","بنغلاديش","فيتنام","الفلبين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'أي من الجزر اليابانية التالية هي الأكبر مساحة؟', '["هوكايدو","شيكوكو","هونشو","كيوشو"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'إمارة سيلاند هي دولة مجهرية غير معترف بها تقع قبالة سواحل أي دولة؟', '["اليابان","أستراليا","الأرجنتين","المملكة المتحدة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'ما هي عاصمة فنلندا؟', '["هلسنكي","جبل طارق","مقدونيا","أوسلو"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'كم عدد الدول التي تشترك مع إسبانيا في حدود برية؟', '["2","5","3","4"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'كم دولة تشترك في الحدود مع المكسيك؟', '["2","4","3","1"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'أي منطقة في شرق أوروبا تشتهر بارتباطها بمصاصي الدماء؟', '["سيليزيا","مقدونيا","سلوفاكيا","ترانسيلفانيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'تعتبر مدينة الفاتيكان دولة مستقلة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'في أي قارة (أو قارات) تقع إسبانيا عند أخذ جميع أراضيها بعين الاعتبار؟', '["أوروبا وإفريقيا وآسيا","أوروبا وإفريقيا","أوروبا","أوروبا وآسيا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'ما هو لون ''خط سيركل'' (الخط الدائري) على خريطة مترو أنفاق لندن؟', '["الأحمر","الأزرق","الأصفر","الأخضر"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'في أي دولة تقع بلدية أرتيخو؟', '["المغرب","فرنسا","بلجيكا","إسبانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'أين تقع خطوط نازكا الشهيرة؟', '["بيرو","البرازيل","كولومبيا","الإكوادور"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'أين تقع مدينة تمبكتو؟', '["أذربيجان، آسيا","مالي، إفريقيا","بنجلاديش، آسيا","موريتانيا، إفريقيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_91, 'ما هي الدولتان المعاصرتان اللتان كانتا تعرفان باسم منطقة ''روديسيا'' بين تسعينيات القرن التاسع عشر وعام 1980‏؟', '["توجو وبنين","ليسوتو وسوازيلاند","زامبيا وزيمبابوي","رواندا وبوروندي"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_92 uuid;
BEGIN
  SELECT id INTO v_lib_id_92 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 14' LIMIT 1;
  IF v_lib_id_92 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 14', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_92;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي أصغر دولة في العالم من حيث عدد السكان؟', '["مدينة الفاتيكان","ناورو","جزر مارشال","ليختنشتاين"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما اسم المنطقة الصخرية الكبيرة التي تغطي معظم شرق كندا؟', '["جبال روكي","الدرع الكندي","جبال الأبالاش","جبال الهيمالايا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'يربط ممر خيبر الجبلي بين أي من الدولتين التاليتين؟', '["الهند ونيبال","باكستان والهند","أفغانستان وباكستان","طاجيكستان وقيرغيزستان"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'تقع دولة البوسنة والهرسك في منطقة بحر البلطيق في أوروبا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي عاصمة رومانيا؟', '["بوخارست","براتيسلافا","بلجراد","بودابست"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أي من هذه المدن الأمريكية يقل عدد سكانها عن مليون نسمة？', '["فينيكس، أريزونا","سان فرانسيسكو، كاليفورنيا","سان أنطونيو، تكساس","فيلادلفيا، بنسيلفانيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي عاصمة ولاية ميشيغان الأمريكية؟', '["كالامازو","آن أربور","لانسينغ","ديترويت"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي أبعد مستوطنة بشرية في أقصى الشمال يقطنها سكان على مدار العام؟', '["ناغورسكوي، روسيا","محطة ماكموردو، القارة القطبية الجنوبية","هونينغسفاغ، النرويج","أليرت، كندا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي الولايات الأمريكية الأربع التي تلتقي حدودها في نقطة واحدة (الولايات الزوايا الأربع)‏؟', '["يوتا، كولورادو، أريزونا، نيومكسيكو","أوريغون، أيداهو، نيفادا، يوتا","كانساس، أوكلاهوما، أركنساس، لويزيانا","داكوتا الجنوبية، مينيسوتا، نبراسكا، آيوا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما هي اللغة الوطنية الرسمية في باكستان؟', '["الهندية","الأوردية","البنجابية","البشتوية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'في أي دولة يقع نهر تايدونغ؟', '["كوريا الجنوبية","اليابان","كوريا الشمالية","الصين"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أي من هذه الدول ليست الدولة الوحيدة التي يبدأ اسمها بذلك الحرف في الأبجدية الإنجليزية؟', '["قطر","اليمن","عُمان","زامبيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أين تقع منطقة ''بير طويل''، وهي أرض غير مأهولة بالسكان لا تطالب بها أي دولة، على الحدود بين أي دولتين؟', '["مصر والسودان","إسرائيل والأردن","تشاد وليبيا","العراق والمملكة العربية السعودية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'ما اسم شبه الجزيرة التي تضم إسبانيا والبرتغال؟', '["شبه الجزيرة الأوروبية","شبه الجزيرة الإيبيرية","شبه جزيرة بيلوبونيز","شبه الجزيرة الإسكندنافية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'تقع المقاطعات الإسبانية التالية في شمال إسبانيا باستثناء مقاطعة واحدة، فما هي؟', '["أستورياس","نافارا","مرسية","ليون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'مع أي دولة تتشارك فرنسا أطول حدود برية لها؟', '["ألمانيا","إسبانيا","كندا","البرازيل"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أي مما يلي ليس مقاطعة صينية؟', '["يانغتسي","فوجيان","سيتشوان","غوانغدونغ"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أوتاوا هي عاصمة كندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_92, 'أي من الأسماء التالية يعود لقلعة حقيقية؟', '["فرانك كاسل","ريتشارد كاسل","قلعة إليزابيث","أوليفيا كاسل"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_93 uuid;
BEGIN
  SELECT id INTO v_lib_id_93 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 15' LIMIT 1;
  IF v_lib_id_93 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 15', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_93;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'أين تقع أقدم قاعدة إطلاق فضاء ما زالت تعمل في العالم؟', '["كازاخستان","روسيا","إيران","الولايات المتحدة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'كم عدد المناطق الزمنية في روسيا؟', '["6","11","24","16"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'ما هي الجزر التي تطالب بها كل من اليابان وروسيا؟', '["جزر باراسيل","جزر تشاغوس","جزر كوريل","جزر سبراتلي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'أي من هذه الدول ليست جزءاً من قارة آسيا؟', '["جورجيا","روسيا","سنغافورة","سورينام"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'تسمى مجموعة الجزر المتقاربة ''أرخبيل''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'متى تحتفل فنلندا بيوم استقلالها؟', '["2 يناير","6 ديسمبر","12 نوفمبر","8 فبراير"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'ما هي ثاني أكبر مدينة في ليتوانيا؟', '["بانيفيزيس","فيلنيوس","كاوناس","كلايبيدا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'تشترك روسيا في حدود برية مع كوريا الشمالية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'ما هي أكبر بحيرة مياه عذبة في العالم؟', '["بحيرة سوبيريور","بحر قزوين","بحيرة ميشيغان","بحيرة هورون"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'ما هي عاصمة موريشيوس؟', '["بورت مورسبي","بورت لويس","بورت فيلا","بورت أو برانس"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'في أي قارة تقع دولة غامبيا؟', '["آسيا","أمريكا الجنوبية","إفريقيا","أوروبا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'كانت الأراضي الحديثة للبرتغال جزءاً من الإمبراطورية الرومانية في الماضي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'أي من هذه الدول لا تشترك في حدود مع النمسا؟', '["فرنسا","سلوفينيا","سويسرا","سلوفاكيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'تبلغ مساحة غرينلاند تقريباً نفس مساحة قارة إفريقيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'كوالالمبور هي عاصمة أي دولة؟', '["إندونيسيا","سنغافورة","ماليزيا","تايلاند"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'سيول هي عاصمة كوريا الشمالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'ما هي عاصمة السنغال؟', '["داكار","نواكشوط","كوناكري","مونروفيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'كم دولة تشترك في حدود برية مع لوكسمبورغ؟', '["4","3","2","5"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_93, 'المجموعتان العرقيتان الأكبر في بلجيكا هما الفلمنك والوالون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_94 uuid;
BEGIN
  SELECT id INTO v_lib_id_94 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 16' LIMIT 1;
  IF v_lib_id_94 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 16', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_94;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'عاصمة البرازيل هي ريو دي جانيرو.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'كم عدد الدول التي تشترك في حدود برية مع روسيا؟ (دون احتساب المناطق المتنازع عليها)', '["12","14","10","8"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أي من هذه الدول الأوروبية ليست عضواً في الاتحاد الأوروبي؟', '["ليتوانيا","أيرلندا","النرويج","التشيك"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هي أكبر دولة في العالم من حيث المساحة؟', '["كندا","الصين","الولايات المتحدة","روسيا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'يعود أصل اسم الأرجنتين إلى الكلمة اللاتينية التي تعني الفضة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هي عاصمة قبرص؟', '["بافوس","نيقوسيا","ليماسول","لارنكا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أي من هذه الدول تبدأ عاصمتها بحرف الباء؟', '["الأردن","الكويت","لبنان","قطر"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أي من المدن التالية ليست عاصمة دولة؟', '["القاهرة","موسكو","بكين","سيدني"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هي الدولة الوحيدة في العالم التي لا يحتوي علمها على أربع زوايا قائمة؟', '["نيبال","بنما","أنغولا","مصر"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما اسم المحيط الذي تقع فيه جزر هاواي؟', '["المحيط الأطلسي","المحيط الهادئ","المحيط الهندي","المحيط المتجمد الشمالي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'في أي مقاطعة إنجليزية تقع مدينة بورتسموث؟', '["أكسفوردشاير","باكنغهامشاير","هامبشاير","سري"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أي مقاطعة كندية عاصمتها هي تشارلوت تاون؟', '["ساسكاتشوان","الأقاليم الشمالية الغربية","أونتاريو","جزيرة الأمير إدوارد"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'لا توجد طرق برية تؤدي إلى مدينة جونو بآلاسكا أو تخرج منها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هي اللغة الرسمية في بوتان؟', '["اللاداخية","الدزونكا","الكارين","الغروما"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هو اسم السكان الأصليين لنيوزيلندا؟', '["الفايكنج","البولينيزيون","الماوري","السامويون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أطول اسم مكان في الولايات المتحدة هو بحيرة ''تشارغوغوغوغمانشوغوغوغشوبوناغونغاماغ''، الواقعة بالقرب من ويبستر بولاية ماساتشوستس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'أي من هذه الدول لم تكن جزءاً من الاتحاد السوفيتي؟', '["رومانيا","تركمانستان","بيلاروسيا","طاجيكستان"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'يظهر أسد يحمل سيفاً على العلم الوطني لأي دولة؟', '["ألبانيا","سريلانكا","زامبيا","مولدوفا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_94, 'ما هي عاصمة تشيلي؟', '["فالبارايسو","كوبيابو","سانتياغو","أنتوفاغاستا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_95 uuid;
BEGIN
  SELECT id INTO v_lib_id_95 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 17' LIMIT 1;
  IF v_lib_id_95 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 17', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_95;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'تقع مقاطعة نوفا سكوشا على الساحل الشرقي لكندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'تنقسم جزيرة بورنيو في جنوب شرق آسيا سياسياً بين 3 دول.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هي عاصمة ولاية تكساس الأمريكية؟', '["دالاس","هيوستن","أوستن","سان أنطونيو"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هو مقر مقاطعة كينغ في ولاية واشنطن؟', '["بيلفيو","إينومكلاو","سكايكوميش","سياتل"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أي من هذه الدول ليس مكتوباً بلغتها الأصلية？', '["سلوفاشكو","سومي","شوايتس","إيلادا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أي دولة تمتلك علماً بلونين أفقيين أحمر وأبيض؟', '["البحرين","موناكو","مالطا","ليختنشتاين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أي من هذه الدول الأفريقية يظهر سلاح ناري (بندقية) على علمها؟', '["أوغندا","إثيوبيا","موزمبيق","نيجيريا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أي من اللغات التالية لا تستخدم الأبجدية اللاتينية؟', '["التركية","السواحيلية","الفيتنامية","الجورجية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'يحتوي علم بيلاروسيا على نمط تطريز باللونين الأحمر والأبيض على جانب السارية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هي عاصمة إستونيا؟', '["هلسنكي","تالين","تارتو","ريغا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هي أكبر جزيرة في كندا؟', '["جزيرة الأمير إدوارد","جزيرة فانكوفر","جزيرة بافن","نيوفاوندلاند"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أي ولاية أمريكية تقع في أقصى الشمال الشرقي؟', '["نيويورك","جورجيا","فلوريدا","مين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'كم عدد الولايات في أستراليا؟', '["6","7","8","5"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'إذا كانت كرة القدم تُسمى ''فوتبول'' في إنجلترا، فماذا تُسمى كرة القدم الأمريكية هناك؟', '["كومبول","كرة القدم الأمريكية","كرة اليد","تاتشداون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'جبل طارق، الواقع جنوب شبه الجزيرة الأيبيرية مباشرة، هو إقليم تابع لأي دولة في غرب أوروبا؟', '["إسبانيا","البرتغال","المملكة المتحدة","فرنسا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'أين تقع مدينة بومبي الأثرية؟', '["شرق أفريقيا","أمريكا الجنوبية","بومبيلانوس","إيطاليا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'في أي دولة تقع منحدرات دوفر البيضاء؟', '["المملكة المتحدة","الولايات المتحدة","هولندا","السويد"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هي عاصمة فيتنام؟', '["دا نانغ","هانوي","هاي فونغ","مدينة هو تشي منه"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_95, 'ما هي عاصمة إسكتلندا؟', '["غلاسكو","دندي","إدنبرة","لندن"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_96 uuid;
BEGIN
  SELECT id INTO v_lib_id_96 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 18' LIMIT 1;
  IF v_lib_id_96 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 18', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_96;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'أي من دول يوغوسلافيا السابقة التالية هي دولة حبيسة (لا تطل على بحار)‏؟', '["صربيا","البوسنة والهرسك","الجبل الأسود","كرواتيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'إلى أي دولة تنتمي جزر ملوك (المعروفة بشكل غير رسمي باسم جزر التوابل)‏؟', '["تشيلي","إندونيسيا","نيوزيلندا","فيجي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'دولة واحدة فقط في العالم يبدأ اسمها باللغة الإنجليزية بحرف ''⁦Q⁩''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'في أي مدينة هندية يقع تاج محل？', '["مومباي","فريد آباد","ثين","أغرا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'غرينلاند هي جزء من أي مملكة؟', '["الدنمارك","السويد","النرويج","المملكة المتحدة"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'تحت سيادة أي دولة تقع جزر أندمان ونيكوبار في جنوب شرق آسيا؟', '["فيتنام","الهند","تايلاند","إندونيسيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ما هي عاصمة أستراليا؟', '["سيدني","ملبورن","كانبرا","بريزبان"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'أي مما يلي هي العملة الرسمية لجزر كوك؟', '["الدولار الأمريكي","الجنيه الإسترليني","الدولار الأسترالي","الدولار النيوزيلندي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ما هي عاصمة بوركينا فاسو؟', '["واغادوغو","ياوندي","ياموسوكرو","أبيدجان"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ما هو الميناء الأكثر نشاطاً في أوروبا؟', '["ميناء أنتويرب","ميناء روتردام","ميناء هامبورغ","ميناء أمستردام"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'طوكيو هي عاصمة اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ما هي الولاية الوحيدة في الولايات المتحدة التي لا يملك علمها شكلاً رباعي الأضلاع؟', '["فلوريدا","أيداهو","نيومكسيكو","أوهايو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'مدينة الفاتيكان، أصغر دولة في العالم، محاطة بالكامل بأي دولة؟', '["إيطاليا","فرنسا","إسبانيا","ألمانيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ولاية كاليفورنيا أكبر مساحةً من اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'القارة القطبية الجنوبية (أنتاركتيكا) هي أكبر صحراء في العالم.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'أي من الجزر اليابانية التالية هي الأكبر مساحة؟', '["إكي","أودايبا","أوكيناوا","شيكوكو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'أي دولة داخل المملكة المتحدة لا يمثلها علمها الوطني (علم الاتحاد)‏؟', '["ويلز","إسكتلندا","أيرلندا","جزيرة وايت"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'أي دولة تطالب بالسيادة على إقليم كوسوفو المتنازع عليه؟', '["كرواتيا","صربيا","ألبانيا","مقدونيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_96, 'ما هي أكبر صحراء حارة في العالم؟', '["صحراء غوبي","صحراء موهافي","الصحراء الكبرى","صحراء كالاهاري"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_97 uuid;
BEGIN
  SELECT id INTO v_lib_id_97 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 19' LIMIT 1;
  IF v_lib_id_97 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 19', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_97;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'أفريقيا هي عبارة عن دولة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'في أي دولة أفريقية تقع قناة السويس؟', '["ليبيا","مصر","غانا","نيجيريا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ما هو اسم أكبر مدينة في ولاية تينيسي الأمريكية؟', '["طيبة","الإسكندرية","ممفيس","الأقصر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'بأي لقب تُعرف منطقة أكيهابارا اليابانية أيضاً؟', '["نهر مشية القمر","مركز الأوتاكو","العيون الكبيرة","مدينة الكهرباء"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'كانت دولة ''منغوليا'' جزءاً من الاتحاد السوفيتي السابق.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'أي من هذه الأرخبيلات (مجموعات الجزر) ليست جزءاً من المملكة المتحدة؟', '["جزر أوركني","جزر القنال الإنجليزي","جزر سيلي","جزر شتلاند"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ما هي عاصمة سلوفينيا؟', '["ماريبور","فيلينيه","ليوبليانا","تربوفلي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'تقع ولاية رود آيلاند في الواقع على اليابسة الرئيسية للولايات المتحدة، على الرغم من اسمها (الذي يعني جزيرة رود).', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ما هي أكبر بحيرة في القارة الأفريقية؟', '["بحيرة فيكتوريا","بحيرة تنجانيقا","بحيرة ملاوي","بحيرة توركانا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'أي من هذه الدول لا تقع في أفريقيا؟', '["بوركينا فاسو","سورينام","موزمبيق","الجزائر"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'في أي دولة أوروبية يقع مقر منظمة الصحة العالمية؟', '["المملكة المتحدة","فرنسا","سويسرا","بلجيكا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'هناك جزيرة في اليابان تُدعى ''أوكونوشيما''، وتُعرف أيضاً باسم ''جزيرة الأرانب'' نظراً لعدد الأرانب الهائل فيها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ما هو الممر المائي الذي يربط المحيط الأطلسي بالبحر الأبيض المتوسط؟', '["مضيق جبل طارق","ممر جبل طارق","المضائق الإسبانية","قناة طنجة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'كم عدد الأنهار في المملكة العربية السعودية؟', '["1","0","2","3"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'في أي مقاطعة كندية تقع مدينة مونتريال؟', '["أونتاريو","نوفا سكوشا","كيبيك","ألبرتا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ألاسكا وهاواي هما الولايتان الأمريكيتان الوحيدتان اللتان تمتلكان منطقتين زمنيتين خاصتين بهما.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'إيطاليا وأيرلندا هما الدولتان الوحيدتان في أوروبا اللتان تبدآن بحرف ⁦I⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'عدد سكان ولاية نيويورك الأمريكية يعادل تقريباً عدد سكان دولة:', '["بولندا","رومانيا","ألمانيا","المجر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_97, 'ما هي خامس أكبر دولة في العالم من حيث المساحة؟', '["الولايات المتحدة","أستراليا","البرازيل","الهند"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_98 uuid;
BEGIN
  SELECT id INTO v_lib_id_98 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 2' LIMIT 1;
  IF v_lib_id_98 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 2', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_98;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'في مقاطعة ألبرتا الكندية، تقع مدينة كالغاري في أقصى الشمال أكثر من مدينة إدمونتون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هو أعلى جبل في العالم؟', '["جبل غودوين أوستن","جبل إيفرست","كانغشينجونغا","أنابورا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'توجد مدينة تسمى روما في كل قارة على وجه الأرض.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هي أكبر مدينة في كندا؟', '["مونتريال","فانكوفر","أوتاوا","تورونتو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي مما يلي ليست صفيحة تكتونية حقيقية؟', '["صفيحة المحيط الأطلسي","صفيحة أمريكا الشمالية","الصفيحة الأوراسية","صفيحة نازكا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أين تقع قلعة مارلبورو (⁦Fort Marlborough⁩)‏؟', '["سنغافورة","بنغكولو","لندن","دوفر"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'كم عدد الدول في العالم تقريباً؟', '["100","300","200","500"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي مدينة تمتلك المطار الأكثر ازدحاماً في العالم؟', '["لندن، إنجلترا","شيكاغو، إلينوي، الولايات المتحدة الأمريكية","طوكيو، اليابان","أتلانتا، جورجيا، الولايات المتحدة الأمريكية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'في أي حوض يصب نهر الأردن؟', '["البحر الميت","بحر آرال","بحر قزوين","بحر سالتون"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'عاصمة إندونيسيا هي بالي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'في عام 2012، كم كان عدد سكان دولة "ليختنشتاين" الصغيرة المتحدثة بالألمانية في وسط أوروبا؟', '["2,400","90,000","36,600","323,400"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هي أكبر بحيرة مياه عذبة في العالم من حيث الحجم؟', '["بحيرة سوبيريور","بحيرة هورون","بحيرة ميشيغان","بحيرة بايكال"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي مدينة أوروبية تمتلك أطول شبكة قنوات مائية في العالم؟', '["برمنغهام","البندقية (فينيسيا)","أمستردام","برلين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي مما يلي هو أطول نهر في أوروبا؟', '["نهر الدانوب","نهر الفولغا","نهر الأورال","نهر الدنيبر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي من هذه الدول ليست جزءاً من إقليم إسكندنافيا؟', '["النرويج","السويد","فنلندا","الدنمارك"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هي الدولة الأفريقية التي تعد اللغة البرتغالية لغتها الرسمية؟', '["بوتسوانا","الغابون","توغو","موزمبيق"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ميامي هي أكبر مدينة في ولاية فلوريدا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هي الإمارة الصغيرة التي تقع بين إسبانيا وفرنسا؟', '["ليختنشتاين","أندورا","موناكو","سان مارينو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'أي دولة صغيرة تقع بين حدود فرنسا وإسبانيا؟', '["سان مارينو","الفاتيكان","أندورا","ليختنشتاين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_98, 'ما هي ثاني أكبر دولة في العالم من حيث المساحة؟', '["روسيا","الصين","الولايات المتحدة الأمريكية","كندا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_99 uuid;
BEGIN
  SELECT id INTO v_lib_id_99 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 20' LIMIT 1;
  IF v_lib_id_99 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 20', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_99;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي أكبر دولة في العالم مساحةً وتعتمد منطقة زمنية واحدة فقط؟', '["الصين","كندا","الهند","روسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي اللغة الرسمية في كوستاريكا؟', '["الإنجليزية","الإسبانية","البرتغالية","الكريولية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي عاصمة نيوزيلندا؟', '["أوكلاند","كرايستشرش","ويلينغتون","ملبورن"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي مساحة مدينة الفاتيكان؟', '["⁦0.10⁩ كم²","⁦0.86⁩ كم²","⁦12.00⁩ كم²","⁦0.44⁩ كم²"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'إلى أي دولة يتبع أرخبيل سفالبارد؟', '["النرويج","الدنمارك","آيسلندا","روسيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أي من هذه الدول لم تكن جزءاً من يوغوسلافيا السابقة؟', '["كرواتيا","ألبانيا","صربيا","مقدونيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'هل مدينة تارتو هي عاصمة إستونيا؟', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أي من الدول الحبيسة التالية تقع بالكامل داخل دولة أخرى؟', '["بوركينا فاسو","منغوليا","لوكسمبورغ","ليسوتو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أين يقع ممر كولشستر العلوي، المعروف باسم "جسر رجل الأرنب"؟', '["مقاطعة فيرفاكس، فيرجينيا","ميدفورد، أوريغون","مقاطعة براكستون، فيرجينيا","ليمون غروف، كاليفورنيا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي عاصمة لاوس؟', '["تاراوا","فيينتيان","فادوز","تيغوسيغالبا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي أصغر ولاية في الولايات المتحدة؟', '["مين","فيرمونت","رود آيلاند","ماساتشوستس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي سلسلة الجبال التي تمتد على طول الحدود بين إسبانيا وفرنسا؟', '["جبال الألب","جبال الكاربات","جبال الأورال","جبال البرانس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'جمهورية مالطا هي أصغر دولة مجهرية في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هو الاسم الرسمي بالألمانية للسكك الحديدية الفيدرالية السويسرية؟', '["⁦Schweizerische Nationalbahnen⁩","⁦Schweizerische Bundesbahnen⁩","⁦Bundesbahnen der Schweiz⁩","⁦Schweizerische Staatsbahnen⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي عاصمة تركيا؟', '["إسطنبول","إزمير","أنقرة","بورصة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'ما هي عاصمة سويسرا؟', '["زيورخ","فرانكفورت","فيينا","بيرن"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أي من الدول التالية لا تُعتبر من الدول "شديدة التنوع" (التي تأوي عدداً كبيراً من الأنواع المستوطنة في العالم)‏؟', '["تايلاند","بيرو","المكسيك","جنوب أفريقيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أي من دول المملكة المتحدة يظهر تنين على علمها؟', '["إنجلترا","ويلز","أيرلندا الشمالية","اسكتلندا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_99, 'أين تقع "صحراء سونوران"؟', '["أمريكا الجنوبية","آسيا","أمريكا الشمالية","أفريقيا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_100 uuid;
BEGIN
  SELECT id INTO v_lib_id_100 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 3' LIMIT 1;
  IF v_lib_id_100 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 3', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_100;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'ما هي عاصمة الولايات المتحدة الأمريكية؟', '["واشنطن العاصمة","سياتل","ألباني","لوس أنجلوس"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي من أحياء مدينة نيويورك يقع في أقصى الشمال؟', '["كوينز","برونكس","بروكلين","مانهاتن"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'إلى ماذا يرمز الحرف "⁦C⁩" في اسم العاصمة الأمريكية واشنطن (⁦Washington⁩, ⁦D.C⁩)‏؟', '["كاليدونيا","كورنثيا","كولومبيا","سيتي (مدينة)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'كم يبلغ ارتفاع مبنى مركز التجارة العالمي الواحد (⁦One World Trade Center⁩) في مدينة نيويورك؟', '["1,888 قدم","1,225 قدم","1,960 قدم","1,776 قدم"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي من المعالم الجغرافية التالية عبارة عن شعاب مرجانية دائرية الشكل أو جزيرة أو سلسلة من الجزر الصغيرة؟', '["جزيرة شعب مرجانية (أطول)","شبه جزيرة","برزخ","دلتا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'بين أي دولتين تقع أطول حدود مشتركة في العالم؟', '["تشيلي والأرجنتين","كندا والولايات المتحدة","روسيا والصين","الهند وباكستان"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'ما هو أول متنزه وطني تم إنشاؤه في الولايات المتحدة؟', '["سيكويا","يوسيميتي","يلوستون","روكي ماونتن"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي معلم سياحي في أمريكا الشمالية تخدمه شركة الرحلات "⁦Maid of the Mist⁩" (خادمة الضباب)‏؟', '["ويسلر، كولومبيا البريطانية","عالم ديزني","متنزه يوسيميتي الوطني","شلالات نياجرا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'في أي مدينة كندية يقع نُصب "النيكل الكبير" (⁦Big Nickel⁩)‏؟', '["سودبوري، أونتاريو","كالغاري، ألبرتا","هاليفاكس، نوفا سكوشا","فيكتوريا، كولومبيا البريطانية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'في أي قارة تقع دولة أنغولا؟', '["أمريكا الجنوبية","أفريقيا","أوروبا","آسيا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'ما هي أصغر دولة في العالم؟', '["ليسوتو","مدينة موناكو","الفاتيكان","تيتانيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي مدينة ألمانية تقع على نهر إيسار؟', '["برلين","هامبورغ","دورتموند","ميونخ"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'عاصمة ولاية أوهايو الأمريكية هي مدينة تشيليكوث.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'ماذا يُطلق على الكتلة الأرضية لتركيا الحديثة؟', '["برزخ أوتوما","الأناضول","أوتوما","برزخ الأناضول"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي دولة تتميز بوجود ورقة قيقب على علمها؟', '["المكسيك","البرازيل","كندا","الهند"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'أي من الدول التالية تعتبر جزيرة؟', '["أذربيجان","السلفادور","جيبوتي","قبرص"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'في أي مقاطعة إنجليزية يقع نصب ستونهنج (⁦Stonehenge⁩)‏؟', '["ويلتشر","سومرست","كامبريا","هيرفوردشير"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'كم عدد المقاطعات في هولندا؟', '["14","12","10","13"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_100, 'ما هو المركز الإداري وأكبر مستوطنة في أرخبيل سفالبارد النرويجي؟', '["سفيغروفا","ني آليسوند","لونغياربين","بارنتسبورغ"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_101 uuid;
BEGIN
  SELECT id INTO v_lib_id_101 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 4' LIMIT 1;
  IF v_lib_id_101 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 4', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_101;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هي عاصمة الهند؟', '["نيودلهي","بكين","مونتريال","تيثي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هو اسم الدولة السابقة التي خلفتها دول مثل صربيا وكرواتيا وسلوفينيا؟', '["تشيكوسلوفاكيا","يوغوسلافيا","أبخازيا","أوسيتيا الجنوبية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هي عاصمة البرازيل؟', '["ريو دي جانيرو","ساو باولو","برازيليا","كوريتيبا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'أي مما يلي ليست جزيرة تابعة للفلبين؟', '["لوزون","مينداناو","بالاوان","جاوة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'تمتلك سويسرا أربع لغات وطنية، والإنجليزية واحدة منها.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هي عاصمة ولاية تكساس الأمريكية؟', '["دالاس","أوستن","سانتا في","هيوستن"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'غرينلاند مغطاة بالعشب وآيسلندا مغطاة بالجليد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'غوتنبرغ هي عاصمة السويد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'أي من هذه الدول الأفريقية تدرج اللغة الإسبانية كلغة رسمية لها؟', '["غينيا الاستوائية","غينيا","الكاميرون","أنغولا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'في أي مقاطعة إنجليزية تقع جامعة شرق أنجليا؟', '["سوفولك","نورفولك","إسكس","كامبريدجشاير"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'في أي قارة تقع سلسلة جبال الأنديز؟', '["أوروبا","آسيا","أمريكا الجنوبية","أفريقيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هي عاصمة ولاية واشنطن في الولايات المتحدة؟', '["واشنطن العاصمة","سياتل","يوكون","أولمبيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'أي دولة تحمل الرمز الاختصاري "⁦CH⁩"؟', '["سويسرا","الصين","كندا","لا توجد دولة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هي عاصمة سلوفاكيا؟', '["صوفيا","براتيسلافا","ليوبليانا","سراييفو"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هو اسم المنطقة التي تربط بين باكستان والهند والصين وتخضع لسيادة متنازع عليها؟', '["أندورا","جبل طارق","كشمير","كوين"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'واغادوغو هي عاصمة أي دولة أفريقية؟', '["جمهورية أفريقيا الوسطى","السنغال","زامبيا","بوركينا فاسو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'أي من الدول التالية تقع ضمن منطقة اليورو ولكنها خارج منطقة شنغن؟', '["قبرص","مالطا","اليونان","البرتغال"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'ما هو لون الدائرة الموجودة على علم اليابان؟', '["أبيض","أحمر","أصفر","أسود"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_101, 'أي من هذه الأماكن يقع في كورنوال؟', '["مدريد","أليكانتي","برشلونة","لشبونة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_102 uuid;
BEGIN
  SELECT id INTO v_lib_id_102 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 5' LIMIT 1;
  IF v_lib_id_102 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 5', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_102;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'يمتد الطريق 66 في الولايات المتحدة عبر البر الرئيسي لأمريكا بالكامل، من كاليفورنيا إلى نيويورك.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'في أي دولة أوروبية تقع جزيرة غوتلاند؟', '["الدانمرك","السويد","النرويج","ألمانيا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'حتى عام 1939، كانت لاوس تسمى سيام.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'كم عدد المناطق الزمنية في روسيا؟', '["8","5","2","11"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي عاصمة مقاطعة كولومبيا البريطانية في كندا؟', '["فيكتوريا","فانكوفر","هوب","كيلونا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'أين يقع المقر الرئيسي لسلسلة مطاعم الوجبات السريعة "باندا إكسبريس"؟', '["ساكرامنتو، كاليفورنيا","روزميد، كاليفورنيا","فريزنو، كاليفورنيا","سان دييغو، كاليفورنيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'أي من المدن التالية هي عاصمة لاتفيا؟', '["مينسك","تالين","ريغا","فيلنيوس"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي أكبر دولة إسلامية في العالم؟', '["باكستان","المملكة العربية السعودية","إيران","إندونيسيا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'تمتلك النرويج مساحة برية أكبر من السويد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'تسمانيا هي ولاية جزيرية تابعة لأستراليا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'في أي دولة تقع جزيرة بيكيني الحلقية؟', '["فيجي","جزر الكريسماس","جزر مارشال","جزر البهاما"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'في أي محيط تقع جزيرة ريونيون؟', '["المحيط الأطلسي","جنوب المحيط الهادئ","شمال المحيط الهادئ","المحيط الهندي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'توجد جزيرة تسمى "جاوة".', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'توجد 47 محافظة في اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي الدولة الوحيدة التي تحد كلاً من الأوروغواي وفنزويلا؟', '["المكسيك","تشيلي","البرازيل","بنما"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي الولاية الأمريكية الوحيدة التي تقع بالكامل ضمن منطقة جبال الأبالاش؟', '["بنسلفانيا","ألاباما","كنتاكي","فرجينيا الغربية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي الدولة التي تمتلك ثلاث عواصم؟', '["جنوب أفريقيا","الصومال","الصين","المملكة المتحدة"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هو أعلى جبل في كندا؟', '["جبل تريمبلانت","جبل لوغان","جبل ويسلر","الجبل الأزرق"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_102, 'ما هي المدينة الروسية المعروفة اليوم باسم كونيغسبرغ (عاصمة بروسيا الشرقية سابقاً)‏؟', '["قازان","كورسك","كالينينغراد","كراسنودار"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_103 uuid;
BEGIN
  SELECT id INTO v_lib_id_103 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 6' LIMIT 1;
  IF v_lib_id_103 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 6', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_103;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هي أكبر مدينة في المغرب؟', '["الدار البيضاء","الرباط","فاس","سلا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هي عاصمة جزر برمودا؟', '["سانتو دومينغو","هاميلتون","سان خوان","هافانا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هو الحرف الخامس عشر في الأبجدية اليونانية؟', '["سيغما (Σ)","باي (Π)","أوميكرون (Ο)","نيو (Ν)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'أين تقع مدينة هارلم؟', '["ألمانيا","الولايات المتحدة","سويسرا","هولندا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ألاسكا هي أكبر ولاية في الولايات المتحدة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هو الشيء المميز في بحيرة تيتيكاكا؟', '["أطول بحيرة في العالم","أعلى بحيرة قابلة للملاحة في العالم","أعمق بحيرة في العالم","تظل متجمدة طوال العام"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'مع كم دولة تشترك الولايات المتحدة في حدود برية؟', '["1","3","2","4"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'فيتنام هي الدولة الوحيدة في العالم التي يبدأ اسمها بحرف الـ ⁦V⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'في أي دولة تقع مدينة ريو دي جانيرو؟', '["البرازيل","بيرو","تشيلي","فنزويلا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هو اللقب المميز لولاية ديلاوير الأمريكية؟', '["الولاية الخمسون","الولاية الأولى","الولاية الثانية","الولاية السادسة عشرة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'أين تقع مدينة البتراء الأثرية؟', '["مصر","إسرائيل","الأردن","إيطاليا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'أستراليا أكبر من غرينلاند في المساحة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'ما هي الكلمة الفنلندية لاسم "فنلندا"؟', '["سومي","إيستي","ماجيارورسزاغ","سويري"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'في أي ولاية أمريكية تقع مدينة فرانكنموث الملقبة بـ "بافاريا الصغيرة"؟', '["بنسلفانيا","ميشيغان","كنتاكي","فرجينيا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'يحتوي علم جنوب أفريقيا على 7 ألوان.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'في أي بلد تقع بلدات بروجيليت وأرلون وأث؟', '["أندورا","فرنسا","لوكسمبورغ","بلجيكا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'أي نهر تم بناء سد عليه لإنشاء بحيرة غاتون وقناة بنما؟', '["نهر تشاغريس","نهر تويرا","نهر تشوكوناكي","نهر تشيبو"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'على حدود أي دولتين تقع جبال البرانس؟', '["إيطاليا وسويسرا","فرنسا وإسبانيا","النرويج والسويد","روسيا وأوكرانيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_103, 'بريدجتاون هي عاصمة أي دولة جزيرية في البحر الكاريبي؟', '["كوبا","جامايكا","باربادوس","دومينيكا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;

