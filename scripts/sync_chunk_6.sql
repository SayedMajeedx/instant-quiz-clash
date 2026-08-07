DO $$
DECLARE
  v_sync_id_99 uuid;
BEGIN
  SELECT id INTO v_sync_id_99 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 20' LIMIT 1;
  IF v_sync_id_99 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 20', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_99;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي أكبر دولة في العالم مساحةً وتعتمد منطقة زمنية واحدة فقط؟', '["الصين","كندا","الهند","روسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي اللغة الرسمية في كوستاريكا؟', '["الإنجليزية","الإسبانية","البرتغالية","الكريولية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي عاصمة نيوزيلندا؟', '["أوكلاند","كرايستشرش","ويلينغتون","ملبورن"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي مساحة مدينة الفاتيكان؟', '["⁦0.10⁩ كم²","⁦0.86⁩ كم²","⁦12.00⁩ كم²","⁦0.44⁩ كم²"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'إلى أي دولة يتبع أرخبيل سفالبارد؟', '["النرويج","الدنمارك","آيسلندا","روسيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أي من هذه الدول لم تكن جزءاً من يوغوسلافيا السابقة؟', '["كرواتيا","ألبانيا","صربيا","مقدونيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'هل مدينة تارتو هي عاصمة إستونيا؟', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أي من الدول الحبيسة التالية تقع بالكامل داخل دولة أخرى؟', '["بوركينا فاسو","منغوليا","لوكسمبورغ","ليسوتو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أين يقع ممر كولشستر العلوي، المعروف باسم "جسر رجل الأرنب"؟', '["مقاطعة فيرفاكس، فيرجينيا","ميدفورد، أوريغون","مقاطعة براكستون، فيرجينيا","ليمون غروف، كاليفورنيا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي عاصمة لاوس؟', '["تاراوا","فيينتيان","فادوز","تيغوسيغالبا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي أصغر ولاية في الولايات المتحدة؟', '["مين","فيرمونت","رود آيلاند","ماساتشوستس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي سلسلة الجبال التي تمتد على طول الحدود بين إسبانيا وفرنسا؟', '["جبال الألب","جبال الكاربات","جبال الأورال","جبال البرانس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'جمهورية مالطا هي أصغر دولة مجهرية في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هو الاسم الرسمي بالألمانية للسكك الحديدية الفيدرالية السويسرية؟', '["⁦Schweizerische Nationalbahnen⁩","⁦Schweizerische Bundesbahnen⁩","⁦Bundesbahnen der Schweiz⁩","⁦Schweizerische Staatsbahnen⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي عاصمة تركيا؟', '["إسطنبول","إزمير","أنقرة","بورصة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'ما هي عاصمة سويسرا؟', '["زيورخ","فرانكفورت","فيينا","بيرن"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أي من الدول التالية لا تُعتبر من الدول "شديدة التنوع" (التي تأوي عدداً كبيراً من الأنواع المستوطنة في العالم)‏؟', '["تايلاند","بيرو","المكسيك","جنوب أفريقيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أي من دول المملكة المتحدة يظهر تنين على علمها؟', '["إنجلترا","ويلز","أيرلندا الشمالية","اسكتلندا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_99, 'أين تقع "صحراء سونوران"؟', '["أمريكا الجنوبية","آسيا","أمريكا الشمالية","أفريقيا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_100 uuid;
BEGIN
  SELECT id INTO v_sync_id_100 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 3' LIMIT 1;
  IF v_sync_id_100 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 3', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_100;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'ما هي عاصمة الولايات المتحدة الأمريكية؟', '["واشنطن العاصمة","سياتل","ألباني","لوس أنجلوس"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي من أحياء مدينة نيويورك يقع في أقصى الشمال؟', '["كوينز","برونكس","بروكلين","مانهاتن"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'إلى ماذا يرمز الحرف "⁦C⁩" في اسم العاصمة الأمريكية واشنطن (⁦Washington⁩, ⁦D.C⁩)‏؟', '["كاليدونيا","كورنثيا","كولومبيا","سيتي (مدينة)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'كم يبلغ ارتفاع مبنى مركز التجارة العالمي الواحد (⁦One World Trade Center⁩) في مدينة نيويورك؟', '["1,888 قدم","1,225 قدم","1,960 قدم","1,776 قدم"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي من المعالم الجغرافية التالية عبارة عن شعاب مرجانية دائرية الشكل أو جزيرة أو سلسلة من الجزر الصغيرة؟', '["جزيرة شعب مرجانية (أطول)","شبه جزيرة","برزخ","دلتا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'بين أي دولتين تقع أطول حدود مشتركة في العالم؟', '["تشيلي والأرجنتين","كندا والولايات المتحدة","روسيا والصين","الهند وباكستان"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'ما هو أول متنزه وطني تم إنشاؤه في الولايات المتحدة؟', '["سيكويا","يوسيميتي","يلوستون","روكي ماونتن"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي معلم سياحي في أمريكا الشمالية تخدمه شركة الرحلات "⁦Maid of the Mist⁩" (خادمة الضباب)‏؟', '["ويسلر، كولومبيا البريطانية","عالم ديزني","متنزه يوسيميتي الوطني","شلالات نياجرا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'في أي مدينة كندية يقع نُصب "النيكل الكبير" (⁦Big Nickel⁩)‏؟', '["سودبوري، أونتاريو","كالغاري، ألبرتا","هاليفاكس، نوفا سكوشا","فيكتوريا، كولومبيا البريطانية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'في أي قارة تقع دولة أنغولا؟', '["أمريكا الجنوبية","أفريقيا","أوروبا","آسيا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'ما هي أصغر دولة في العالم؟', '["ليسوتو","مدينة موناكو","الفاتيكان","تيتانيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي مدينة ألمانية تقع على نهر إيسار؟', '["برلين","هامبورغ","دورتموند","ميونخ"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'عاصمة ولاية أوهايو الأمريكية هي مدينة تشيليكوث.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'ماذا يُطلق على الكتلة الأرضية لتركيا الحديثة؟', '["برزخ أوتوما","الأناضول","أوتوما","برزخ الأناضول"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي دولة تتميز بوجود ورقة قيقب على علمها؟', '["المكسيك","البرازيل","كندا","الهند"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'أي من الدول التالية تعتبر جزيرة؟', '["أذربيجان","السلفادور","جيبوتي","قبرص"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'في أي مقاطعة إنجليزية يقع نصب ستونهنج (⁦Stonehenge⁩)‏؟', '["ويلتشر","سومرست","كامبريا","هيرفوردشير"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'كم عدد المقاطعات في هولندا؟', '["14","12","10","13"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_100, 'ما هو المركز الإداري وأكبر مستوطنة في أرخبيل سفالبارد النرويجي؟', '["سفيغروفا","ني آليسوند","لونغياربين","بارنتسبورغ"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_101 uuid;
BEGIN
  SELECT id INTO v_sync_id_101 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 4' LIMIT 1;
  IF v_sync_id_101 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 4', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_101;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هي عاصمة الهند؟', '["نيودلهي","بكين","مونتريال","تيثي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هو اسم الدولة السابقة التي خلفتها دول مثل صربيا وكرواتيا وسلوفينيا؟', '["تشيكوسلوفاكيا","يوغوسلافيا","أبخازيا","أوسيتيا الجنوبية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هي عاصمة البرازيل؟', '["ريو دي جانيرو","ساو باولو","برازيليا","كوريتيبا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'أي مما يلي ليست جزيرة تابعة للفلبين؟', '["لوزون","مينداناو","بالاوان","جاوة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'تمتلك سويسرا أربع لغات وطنية، والإنجليزية واحدة منها.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هي عاصمة ولاية تكساس الأمريكية؟', '["دالاس","أوستن","سانتا في","هيوستن"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'غرينلاند مغطاة بالعشب وآيسلندا مغطاة بالجليد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'غوتنبرغ هي عاصمة السويد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'أي من هذه الدول الأفريقية تدرج اللغة الإسبانية كلغة رسمية لها؟', '["غينيا الاستوائية","غينيا","الكاميرون","أنغولا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'في أي مقاطعة إنجليزية تقع جامعة شرق أنجليا؟', '["سوفولك","نورفولك","إسكس","كامبريدجشاير"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'في أي قارة تقع سلسلة جبال الأنديز؟', '["أوروبا","آسيا","أمريكا الجنوبية","أفريقيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هي عاصمة ولاية واشنطن في الولايات المتحدة؟', '["واشنطن العاصمة","سياتل","يوكون","أولمبيا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'أي دولة تحمل الرمز الاختصاري "⁦CH⁩"؟', '["سويسرا","الصين","كندا","لا توجد دولة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هي عاصمة سلوفاكيا؟', '["صوفيا","براتيسلافا","ليوبليانا","سراييفو"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هو اسم المنطقة التي تربط بين باكستان والهند والصين وتخضع لسيادة متنازع عليها؟', '["أندورا","جبل طارق","كشمير","كوين"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'واغادوغو هي عاصمة أي دولة أفريقية؟', '["جمهورية أفريقيا الوسطى","السنغال","زامبيا","بوركينا فاسو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'أي من الدول التالية تقع ضمن منطقة اليورو ولكنها خارج منطقة شنغن؟', '["قبرص","مالطا","اليونان","البرتغال"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'ما هو لون الدائرة الموجودة على علم اليابان؟', '["أبيض","أحمر","أصفر","أسود"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_101, 'أي من هذه الأماكن يقع في كورنوال؟', '["مدريد","أليكانتي","برشلونة","لشبونة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_102 uuid;
BEGIN
  SELECT id INTO v_sync_id_102 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 5' LIMIT 1;
  IF v_sync_id_102 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 5', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_102;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'يمتد الطريق 66 في الولايات المتحدة عبر البر الرئيسي لأمريكا بالكامل، من كاليفورنيا إلى نيويورك.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'في أي دولة أوروبية تقع جزيرة غوتلاند؟', '["الدانمرك","السويد","النرويج","ألمانيا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'حتى عام 1939، كانت لاوس تسمى سيام.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'كم عدد المناطق الزمنية في روسيا؟', '["8","5","2","11"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي عاصمة مقاطعة كولومبيا البريطانية في كندا؟', '["فيكتوريا","فانكوفر","هوب","كيلونا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'أين يقع المقر الرئيسي لسلسلة مطاعم الوجبات السريعة "باندا إكسبريس"؟', '["ساكرامنتو، كاليفورنيا","روزميد، كاليفورنيا","فريزنو، كاليفورنيا","سان دييغو، كاليفورنيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'أي من المدن التالية هي عاصمة لاتفيا؟', '["مينسك","تالين","ريغا","فيلنيوس"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي أكبر دولة إسلامية في العالم؟', '["باكستان","المملكة العربية السعودية","إيران","إندونيسيا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'تمتلك النرويج مساحة برية أكبر من السويد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'تسمانيا هي ولاية جزيرية تابعة لأستراليا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'في أي دولة تقع جزيرة بيكيني الحلقية؟', '["فيجي","جزر الكريسماس","جزر مارشال","جزر البهاما"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'في أي محيط تقع جزيرة ريونيون؟', '["المحيط الأطلسي","جنوب المحيط الهادئ","شمال المحيط الهادئ","المحيط الهندي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'توجد جزيرة تسمى "جاوة".', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'توجد 47 محافظة في اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي الدولة الوحيدة التي تحد كلاً من الأوروغواي وفنزويلا؟', '["المكسيك","تشيلي","البرازيل","بنما"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي الولاية الأمريكية الوحيدة التي تقع بالكامل ضمن منطقة جبال الأبالاش؟', '["بنسلفانيا","ألاباما","كنتاكي","فرجينيا الغربية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي الدولة التي تمتلك ثلاث عواصم؟', '["جنوب أفريقيا","الصومال","الصين","المملكة المتحدة"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هو أعلى جبل في كندا؟', '["جبل تريمبلانت","جبل لوغان","جبل ويسلر","الجبل الأزرق"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_102, 'ما هي المدينة الروسية المعروفة اليوم باسم كونيغسبرغ (عاصمة بروسيا الشرقية سابقاً)‏؟', '["قازان","كورسك","كالينينغراد","كراسنودار"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_103 uuid;
BEGIN
  SELECT id INTO v_sync_id_103 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 6' LIMIT 1;
  IF v_sync_id_103 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 6', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_103;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هي أكبر مدينة في المغرب؟', '["الدار البيضاء","الرباط","فاس","سلا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هي عاصمة جزر برمودا؟', '["سانتو دومينغو","هاميلتون","سان خوان","هافانا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هو الحرف الخامس عشر في الأبجدية اليونانية؟', '["سيغما (Σ)","باي (Π)","أوميكرون (Ο)","نيو (Ν)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'أين تقع مدينة هارلم؟', '["ألمانيا","الولايات المتحدة","سويسرا","هولندا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ألاسكا هي أكبر ولاية في الولايات المتحدة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هو الشيء المميز في بحيرة تيتيكاكا؟', '["أطول بحيرة في العالم","أعلى بحيرة قابلة للملاحة في العالم","أعمق بحيرة في العالم","تظل متجمدة طوال العام"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'مع كم دولة تشترك الولايات المتحدة في حدود برية؟', '["1","3","2","4"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'فيتنام هي الدولة الوحيدة في العالم التي يبدأ اسمها بحرف الـ ⁦V⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'في أي دولة تقع مدينة ريو دي جانيرو؟', '["البرازيل","بيرو","تشيلي","فنزويلا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هو اللقب المميز لولاية ديلاوير الأمريكية؟', '["الولاية الخمسون","الولاية الأولى","الولاية الثانية","الولاية السادسة عشرة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'أين تقع مدينة البتراء الأثرية؟', '["مصر","إسرائيل","الأردن","إيطاليا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'أستراليا أكبر من غرينلاند في المساحة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'ما هي الكلمة الفنلندية لاسم "فنلندا"؟', '["سومي","إيستي","ماجيارورسزاغ","سويري"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'في أي ولاية أمريكية تقع مدينة فرانكنموث الملقبة بـ "بافاريا الصغيرة"؟', '["بنسلفانيا","ميشيغان","كنتاكي","فرجينيا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'يحتوي علم جنوب أفريقيا على 7 ألوان.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'في أي بلد تقع بلدات بروجيليت وأرلون وأث؟', '["أندورا","فرنسا","لوكسمبورغ","بلجيكا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'أي نهر تم بناء سد عليه لإنشاء بحيرة غاتون وقناة بنما؟', '["نهر تشاغريس","نهر تويرا","نهر تشوكوناكي","نهر تشيبو"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'على حدود أي دولتين تقع جبال البرانس؟', '["إيطاليا وسويسرا","فرنسا وإسبانيا","النرويج والسويد","روسيا وأوكرانيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_103, 'بريدجتاون هي عاصمة أي دولة جزيرية في البحر الكاريبي؟', '["كوبا","جامايكا","باربادوس","دومينيكا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_104 uuid;
BEGIN
  SELECT id INTO v_sync_id_104 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 7' LIMIT 1;
  IF v_sync_id_104 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 7', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_104;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'بروم هي بلدة تقع في أي ولاية أسترالية؟', '["أستراليا الغربية","الإقليم الشمالي","أستراليا الجنوبية","تسمانيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'كم عدد الدول التي تشكل المملكة المتحدة؟', '["اثنتان","أربعة","ثلاثة","واحدة"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي عاصمة إندونيسيا؟', '["باندونغ","ميدان","جاكرتا","بالمبانغ"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي أكبر ولاية في الولايات المتحدة الأمريكية؟', '["كاليفورنيا","تكساس","واشنطن","ألاسكا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'إلى أي جنسية تشير البادئة (⁦Sino⁩-) (كما في ⁦Sino-American⁩)‏؟', '["الصينية","اليابانية","الروسية","الهندية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هو اسم الدوقية الكبرى الوحيدة المتبقية في العالم؟', '["الجبل الأسود","لوكسمبورغ","ليختنشتاين","أندورا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي الدولة التي تضم أكبر عدد من السكان اليابانيين خارج اليابان؟', '["الصين","روسيا","البرازيل","الولايات المتحدة"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما اسم مناطق الصيد الغنية سابقاً قبالة جزيرة نيوفاوندلاند الكندية؟', '["الحاجز المرجاني العظيم","خندق ماريانا","خليج هدسون","الضفاف الكبرى"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي الدولة المحاطة بالكامل بجنوب أفريقيا؟', '["ليسوتو","سوازيلاند","بوتسوانا","زيمبابوي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'جسد تمثال أبي الهول المصري مستوحى من أي حيوان؟', '["الثور","الأسد","الحصان","الكلب"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي عاصمة بيلاروسيا؟', '["وارسو","كييف","مينسك","فيلنيوس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي عاصمة ليتوانيا؟', '["تالين","هلسنكي","ريغا","فيلنيوس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'أي مدينة تُعرف باسم "عاصمة الورد في العالم"؟', '["تايلر، تكساس","سان دييجو، كاليفورنيا","ميامي، فلوريدا","أناهيم، كاليفورنيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي الولاية الأمريكية التي تُلقب بـ "الولاية الذهبية"؟', '["فلوريدا","كاليفورنيا","نيومكسيكو","ألاسكا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي عاصمة جرينلاند؟', '["سيسيميوت","نارساك","نوك","مانيتسوك"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'ما هي عاصمة كوريا الجنوبية؟', '["بيونغ يانغ","دايغو","كيتاكيوشو","سول"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'كم عدد الولايات الأمريكية التي تبدأ بحرف الـ ⁦K⁩‏؟', '["ولايتان","ولاية واحدة","لا يوجد","ثلاث ولايات"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'أي مما يلي ليس ولاية أو إقليماً أسترالياً؟', '["نيو ساوث ويلز","ألبرتا","فيكتوريا","كوينزلاند"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_104, 'في أي قارة تقع سلسلة جبال الألب؟', '["أمريكا الشمالية","آسيا","أوروبا","أفريقيا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_105 uuid;
BEGIN
  SELECT id INTO v_sync_id_105 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 8' LIMIT 1;
  IF v_sync_id_105 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 8', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_105;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'كولومبيا هي ثالث أكبر دولة (من حيث المساحة بالكيلومتر المربع) في أمريكا الجنوبية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي عاصمة جامايكا؟', '["سان خوان","كينغستون","بورت أو برانس","بريدج تاون"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي عاصمة سيشل؟', '["لواندا","نجامينا","فيكتوريا","طرابلس"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي الولاية الأمريكية المعروفة أيضاً باسم "ولاية النجمة الوحيدة"؟', '["ألاباما","تينيسي","كنتاكي","تكساس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'كم عدد المقاطعات في جمهورية أيرلندا؟', '["26","32","28","30"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'أين توجد "السلالم الإسبانية"؟', '["برشلونة، إسبانيا","روما، إيطاليا","برلين، ألمانيا","لندن، إنجلترا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'مساحة سطح روسيا أكبر بقليل من مساحة سطح كوكب بلوتو القزم.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'كم عدد الجزر التي تمتلكها الكويت؟', '["3","6","2","9"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي عاصمة الدنمارك؟', '["كوبنهاجن","آرهوس","أودنسه","ألبورغ"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي عاصمة الإكوادور؟', '["بوغوتا","كيتو","سانتياغو","سانتا في"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'تُعتبر واشنطن العاصمة ولاية أمريكية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي أصغر دولة في أمريكا الجنوبية من حيث المساحة؟', '["البرازيل","أوروغواي","شيلي","سورينام"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'كم عدد الدول المستقلة في قارة أمريكا الجنوبية؟', '["12","8","9","10"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هي أصغر مقاطعة في كندا؟', '["نيو برونزويك","جزيرة الأمير إدوارد","نوفا سكوشا","يوكون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'تمتلك جنوب أفريقيا أكثر من عاصمة واحدة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'أي من هذه المناطق الأفريقية لا تحد جمهورية الكونغو الديمقراطية مباشرة؟', '["جمهورية أفريقيا الوسطى","تنزانيا","زامبيا","السودان"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'في أي دولة بغرب أفريقيا تقع مدينة تمبكتو التاريخية؟', '["مالي","السنغال","النيجر","بوركينا فاسو"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'ما هو أطول نهر في العالم؟', '["نهر ميزوري","نهر النيل","نهر الأمازون","نهر يانغتسي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_105, 'أي من عائلات اللغات التالية هي الأكثر جدلاً بين علماء اللغة الحديثين؟', '["الصينية التبتية","الدرافيدية","الألطية","الهندية الأوروبية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_106 uuid;
BEGIN
  SELECT id INTO v_sync_id_106 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 9' LIMIT 1;
  IF v_sync_id_106 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 9', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_106;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي دولة في أوقيانوسيا تُعرف بلغة الماوري باسم "أوتياروا"؟', '["نيوزيلندا","أستراليا","جزر سليمان","كاليدونيا الجديدة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هي أصغر دولة في العالم؟', '["جزر المالديف","الفاتيكان","موناكو","مالطا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'بين أي دولتين تقع بحيرة تيتيكاكا؟', '["كينيا وأوغندا","المكسيك والولايات المتحدة","بيرو وبوليفيا","الهند وبنغلاديش"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي من هذه الدول تعتبر "حبيسة مرتين" (محاطة بالكامل بدول حبيسة أخرى)‏؟', '["سويسرا","بوليفيا","إثيوبيا","أوزبكستان"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي من هذه الدول تشترك في الحدود مع بولندا؟', '["ليتوانيا","فرنسا","النرويج","هولندا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هي الولاية الأمريكية الأكثر اكتظاظاً بالسكان؟', '["نيويورك","كاليفورنيا","تكساس","فلوريدا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'يشير الاختصار الساخر "⁦PIIGS⁩" إلى أي من الدول الأوروبية التالية وأوضاعها الاقتصادية؟', '["بولندا، أيسلندا، إيطاليا، اليونان، صربيا","بولندا، أيسلندا، إيطاليا، جرينلاند، إسبانيا","البرتغال، أيرلندا، إيطاليا، اليونان، إسبانيا","البرتغال، أيسلندا، أيرلندا، اليونان، صربيا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هو أطول نهر في أوروبا؟', '["نهر الدانوب","نهر الراين","نهر التايمز","نهر الفولغا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي دولة تطالب بملكية القارة القطبية الجنوبية (أنتاركتيكا)‏؟', '["لا أحد، ولكن هناك مطالبات.","الولايات المتحدة الأمريكية","الأمم المتحدة","أستراليا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'عنوان فيلم عام 1969 "كراكاتوا، شرق جاوة" غير صحيح، لأن كراكاتوا تقع في الواقع غرب جاوة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'في أي قارة تقع إريتريا، التي أصبحت العضو رقم 182 في الأمم المتحدة عام 1993‏؟', '["أوروبا","آسيا","أفريقيا","أمريكا الجنوبية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هو البر (البرزخ) الذي يربط بين أمريكا الشمالية وأمريكا الجنوبية؟', '["برزخ السويس","جبال الأورال","أسترالاسيا","برزخ بنما"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'مدينة نيو هيفن هي عاصمة ولاية كونيتيكت في الولايات المتحدة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هي ثاني أكبر مدينة في روسيا؟', '["مينسك","سانت بطرسبرغ","نيجني نوفغورود","فلاديفوستوك"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي من هذه الدول ليست دولة عضواً في الأمم المتحدة؟', '["توفالو","جنوب السودان","نييوي","الجبل الأسود"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'كم عدد الدول المستقلة الأعضاء في الأمم المتحدة؟', '["201","153","178","195"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هي عاصمة ولاية نيويورك الأمريكية؟', '["ألباني","بافالو","نيويورك","روتشستر"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'أي مما يلي ليس مدينة في الهند؟', '["حيدر آباد","إسلام آباد","أحمد آباد","غازي آباد"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_106, 'ما هي الدولة ذات الأغلبية المسلمة الأكثر اكتظاظاً بالسكان في عام 2010‏؟', '["المملكة العربية السعودية","إيران","إندونيسيا","السودان"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_107 uuid;
BEGIN
  SELECT id INTO v_sync_id_107 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 1' LIMIT 1;
  IF v_sync_id_107 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 1', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_107;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'متى استقلت كندا عن الاتحاد الكونفدرالي لتصبح دولة مستقلة؟', '["1 يوليو 1867","1 يوليو 1763","1 يوليو 1832","1 يوليو 1902"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'من من علماء الفيزياء التاليين لم يعمل في مشروع مانهاتن؟', '["ريتشارد فاينمان","موراي جيل مان","جيه. روبرت أوبنهايمر","جون فون نيومان"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'كم كان الطول الإجمالي لسفينة تايتانيك؟', '["759 قدمًا | ⁦231.3⁩ مترًا","1042 قدمًا | ⁦317.6⁩ مترًا","882 قدمًا | ⁦268.8⁩ مترًا","825 قدمًا | ⁦251.5⁩ مترًا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'في أي عام حدث انهيار سوق ألعاب الفيديو في أمريكا الشمالية؟', '["1982","1993","1970","1983"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'من أصبح أول قيصر لروسيا عام 1547‏؟', '["إيفان الرهيب","أليكسيس الروسي","ميخائيل رومانوف","بطرس الأكبر"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'في عام 1720، كانت إنجلترا غارقة في ديون طائلة وتورطت في كارثة ''فقاعة بحر الجنوب''. من كان العقل المدبر وراءها؟', '["دانيال ديفو","جون بلانت","روبرت هارلي","جون تشرشل"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'في أي بلدة بولاية فرجينيا هاجم المناهض للعبودية جون براون مستودع الأسلحة؟', '["ريتشموند","هاريسونبرغ","هاربرز فيري","مارتينسبورغ"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'أي من هذه الدول لم تكن جزءاً من الاتحاد السوفيتي؟', '["تركمانستان","كازاخستان","أوزبكستان","أفغانستان"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'متى تأسست جمهورية الصين الشعبية؟', '["1 أكتوبر 1949","3 أبريل 1947","7 مايو 1945","6 ديسمبر 1950"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'ضد أي دولة تشكل تحالف ''الوفاق الصغير''؟', '["ألمانيا","المجر","فرنسا","بروسيا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'في أي عام حدث انهيار بورصة وول ستريت؟', '["1932","1930","1929","1925"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'ما هي عاصمة فيتنام الجنوبية قبل حرب فيتنام؟', '["مدينة هو تشي منه","هانوي","هوي","سايغون"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'في أي عام تأسست شركة ألعاب الفيديو إلكترونيك آرتس (⁦EA⁩)‏؟', '["1982","1999","1981","2005"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'بدأت احتجاجات وثورات الربيع العربي في أي من هذه الدول العربية؟', '["المغرب","تونس","سوريا","مصر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'استمرت الحملة الصليبية الرابعة من عام 1095 إلى عام 1099 ميلادي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'ماذا كان هدف ''ثورة المظلات'' في هونغ كونغ عام 2014‏؟', '["نيل الاستقلال","العودة إلى الحكم البريطاني","تخفيض الضرائب","حق الاقتراع العام الحقيقي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'تعتبر ''الفيداس'' (وهي مجموعة من الترانيم والقصائد السنسكريتية) نصوصاً مقدسة في أي ديانة؟', '["الهندوسية","اليهودية","الإسلام","البوذية"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'تُعرف الصراعات التي دارت في القرن الخامس عشر بين عائلتي يورك ولانكستر بحرب الـ...', '["حرب الزنابق","حرب الوردتين","حرب النرجس","حرب التوليب"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'ما اسم السفينة التي كانت على بعد أميال قليلة من تايتانيك عندما اصطدمت بجبل جليدي في 14 أبريل 1912‏؟', '["كارباثيا","كريستول","كاليفورنيان","كوميرس"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_107, 'كانت البرازيل إمبراطورية في السابق.', '["صحيح","خطأ"]'::jsonb, 0, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_108 uuid;
BEGIN
  SELECT id INTO v_sync_id_108 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 10' LIMIT 1;
  IF v_sync_id_108 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 10', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_108;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'على أي قطاع صناعي أُطلق في الأصل مصطلح ''اللوديون'' (⁦Luddite⁩) للإشارة إلى العمال الساخطين؟', '["صناعة النسيج","الزراعة","التعدين","صناعة الخزف"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'أُقيمت احتجاجات ساحة تيانانمن عام 1989 في هونغ كونغ.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'في أي عام انتهت الحرب العالمية الأولى؟', '["1914","1916","1918","1912"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'كم كان عمر الملك الشهير توت عنخ آمون (توت) عندما توفي؟', '["21","15","30","19"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'إلى أي ديانة كان ينتمي جون موسى براونينغ، مصمم بندقية ⁦M1918 BAR⁩ (بندقية براونينغ الآلية)‏؟', '["المورمونية","الكاثوليكية","اليهودية","الإلحاد"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'من عام 1940 إلى عام 1942، ما هي عاصمة فرنسا الحرة في المنفى؟', '["الجزائر","برازافيل","باريس","تونس"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'ما هي المعركة الأكثر دموية في يوم واحد خلال الحرب الأهلية الأمريكية؟', '["حصار فيكسبورغ","معركة غيتيسبيرغ","معركة أنتيتام","معارك تشانسلورسفيل"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'كانت الولايات المتحدة عضواً في عصبة الأمم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'كان فرانز جوزيف الأول آخر إمبراطور للنمسا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'ما هي أطول معركة في الحرب العالمية الأولى، والتي استمرت حوالي 303 أيام؟', '["معركة باشنديل","معركة فردان","معركة أميان","معركة ستالينغراد"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'من الذي ركب الحصان لتحذير ''رجال الدقيقة'' (⁦Minutemen⁩) من أن البريطانيين قادمون خلال حرب الاستقلال الأمريكية؟', '["توماس بين","هنري لونغفيلو","بول ريفير","ناثان هيل"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'بماذا تحتفل الولايات المتحدة الأمريكية في الرابع من يوليو؟', '["الذكرى السنوية لمعركة غيتيسبيرغ","عبور نهر ديلاوير","المصادقة على الدستور","التوقيع على إعلان الاستقلال"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'من كان أول رجل يسافر إلى الفضاء الخارجي مرتين؟', '["غاس غريسوم","فلاديمير كوماروف","تشارلز كونراد","يوري غاغارين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'كان الفايكنج أول أوروبيين يكتشفون أمريكا الشمالية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'كم سنة استمرت حرب المئة عام؟', '["100","90","116","101"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'من قاد فرنسا خلال "عهد الإرهاب"؟', '["نابليون بونابرت","جان بول مارا","لويس السادس عشر","ماكسيميليان روبسبير"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'أي من علماء الفيزياء التاليين ساعد ألمانيا النازية في إنتاج سلاح نووي؟', '["فيرنر هايزنبرغ","جون فون نيومان","ألبيرت أينشتاين","ماكس بلانك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'أي قائد عالمي مشهور اشتهر بمقولة "فليأكلوا الكعك"، ومع ذلك يُشاع أنه لم يقلها على الإطلاق؟', '["القيصر نيكولاس الثاني","ماري أنطوانيت","إليزابيث الأولى","هنري الثامن"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_108, 'متى نالت جامايكا استقلالها عن إنجلترا؟', '["1492","1963","1962","1987"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_109 uuid;
BEGIN
  SELECT id INTO v_sync_id_109 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 11' LIMIT 1;
  IF v_sync_id_109 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 11', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_109;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'أي من هذه المرافق لم يكن موجوداً على متن سفينة تايتانيك؟', '["غرفة الإغماء","الحمام التركي","مكان إيواء الكلاب","ملعب الإسكواش"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'كان سرجون الثاني، ملك الإمبراطورية الآشورية الحديثة، سليلًا مباشرًا لسرجون الأكدي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'في أي عام وقعت معركة أجينكور؟', '["1463","1401","1415","1422"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'في عام 1939، أعلنت بريطانيا وفرنسا الحرب على ألمانيا بعد غزوها لأي دولة؟', '["تشيكوسلوفاكيا","النمسا","المجر","بولندا"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'من بين عجائب الدنيا السبع، ما هي الأعجوبة الوحيدة التي نجت حتى يومنا هذا؟', '["الهرم الأكبر بالجيزة","عملاق رودس","منارة الإسكندرية","تمثال زيوس في أوليمبيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'ما هو الحدث الذي مثل بداية الحرب العالمية الثانية؟', '["غزو روسيا (1942)","غزو بولندا (1939)","معركة بريطانيا (1940)","غزو نورماندي (1944)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'انتهت الحرب الكورية في عام 1953 دون أي وقف لإطلاق النار.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'خلال الغزوات المغولية لليابان, ما الذي أوقف السفن المغولية في الغالب؟', '["الأعاصير القمعية","الكساد الاقتصادي","الساموراي","الأعاصير"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'ما اسم المادة الكيميائية التي أُلقيت على فيتنام خلال حرب فيتنام؟', '["العامل البرتقالي","الفوسجين","غاز الخردل","سيانيد الهيدروجين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'كانت مؤامرة البارود محاولة اغتيال فاشلة معروفة ضد من من ملوك إنجلترا الحاكمين آنذاك؟', '["إليزابيث الأولى","جيمس الأول","تشارلز الثاني","تشارلز الأول"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'انتهت الحرب الباردة بوفاة جوزيف ستالين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'أي من هذه المعالم ليس مدرجاً في قائمة ''عجائب الدنيا السبع القديمة'' الأصلية؟', '["الهرم الأكبر بالجيزة","عملاق رودس","حدائق بابل المعلقة","سور الصين العظيم"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'في أي بلد وقعت معركة السوم في الحرب العالمية الأولى؟', '["فرنسا","ألمانيا","إيطاليا","النمسا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'ما هي الديانة التي أسسها جوزيف سميث؟', '["البوذية","المورمونية","المسيحية","الهندوسية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'متى بدأت معركة السوم؟', '["1 أغسطس 1916","2 يوليو 1916","1 يوليو 1916","30 يونيو 1916"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'اُعتبر تدمير الملك الآشوري سنحاريب لبابل عام 689 قبل الميلاد انتصاراً من قبل المواطنين الآشوريين الآخرين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'في أي بلد زُرعت البطاطس لأول مرة؟', '["بيرو","الولايات المتحدة","أيرلندا","نيوزيلندا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'ما هو الحدث الأكثر دموية في تاريخ الولايات المتحدة من حيث عدد الضحايا؟', '["بيرل هاربور","معركة أنتيتام","أحداث 11 سبتمبر","إنزال نورماندي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_109, 'كم سنة استمرت الحرب العالمية الثانية؟', '["4 سنوات","5 سنوات","6 سنوات","7 سنوات"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_110 uuid;
BEGIN
  SELECT id INTO v_sync_id_110 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 12' LIMIT 1;
  IF v_sync_id_110 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 12', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_110;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'خُيضت حرب المئة عام لأكثر من مئة عام.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'أي خائن أوروبي سيئ السمعة كان يُعرف بـ "آخر شخص دخل البرلمان بنوايا صادقة"؟', '["روبرت كاتسبي","غاي فوكس","فرانسيس تريشام","إيفرارد ديغبي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'في أي عام هبط نيل آرمسترونغ وبوز ألدرين على سطح القمر؟', '["1965","1966","1969","1973"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'خلال أي حملة في الحرب الأهلية الأمريكية حفرت قوات الاتحاد نفقاً تحت قوات الكونفدرالية لتفجير المتفجرات تحتهم؟', '["حصار فيكسبورغ","حملة أنتيتام","حملة غيتيسبيرغ","حصار بيترسبرغ"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'من هو المهندس المعماري الذي صمم منزل شلالات المياه (⁦Fallingwater⁩) الواقع في بنسلفانيا؟', '["فرانك لويد رايت","أنطوني غاودي","فرانك جيري","لو كوربوزييه"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'أين تأسست أول منظمة معروفة لحقوق المثليات في الولايات المتحدة، والمعروفة باسم ''بنات بيليتيس'' (⁦Daughters of Bilitis⁩)‏؟', '["نيويورك","سان فرانسيسكو","شيكاغو","لوس أنجلوس"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'في أي عام أُطلق سراح نيلسون مانديلا من السجن؟', '["1994","1992","1990","1980"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'دخلت شوكة الطعام إلى إيطاليا قبل أي دولة أوروبية أخرى.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'ماذا كان الهدف الرئيسي للعملية الألمانية "الحالة الزرقاء" (⁦Case Blue⁩) في الأصل خلال الحرب العالمية الثانية؟', '["القوقاز","ستالينغراد","شبه جزيرة القرم","فارونيش"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'في الحرب العالمية الثانية، استخدمت بريطانيا دبابات قابلة للنفخ في الموانئ لتشتيت هتلر بعيداً عن إنزال نورماندي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'أي من هؤلاء الحكام لم يكن ينتمي إلى سلالة هابسبورغ؟', '["تشارلز الخامس","فيليب الثاني","فيليب الخامس","فرانز جوزيف"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'من الذي قاد الثورة الشيوعية في روسيا؟', '["جوزيف ستالين","فلاديمير بوتين","ميخائيل غورباتشوف","فلاديمير لينين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'في عام 1900، ما هي الأسماء الأكثر شعبية التي أُطلقت على المواليد الذكور والإناث في الولايات المتحدة؟', '["جون وماري","جوزيف وكاثرين","ويليام وإليزابيث","جورج وآن"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'كانت الأبجدية الرومانية الأصلية تفتقر إلى الحروف التالية باستثناء:', '["⁦W⁩","⁦X⁩","⁦U⁩","⁦J⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'في أي حرب حدث الهجوم بالقنابل الذرية على هيروشيما وناغاساكي؟', '["الحرب العالمية الأولى","الحرب الروسية اليابانية","الحرب العالمية الثانية","الحرب الصينية اليابانية الأولى"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'ما اسم زعيم قبيلة الأباتشي الشهير الذي توفي عام 1909 عن عمر يناهز 70 عاماً؟', '["سيتينغ بول (الثور الجالس)","ريد كلاود (السحابة الحمراء)","كريزي هورس (الحصان الجامح)","جيرونيمو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'بلغت قوة قنبلة القيصر، وهي أقوى قنبلة نووية تم اختبارها على الإطلاق، 50 ميغاطن، ولكن من الناحية النظرية، كم كانت قوتها القصوى؟', '["100 ميغاطن","200 ميغاطن","75 ميغاطن","150 ميغاطن"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'ما اسم العملية الهجومية الألمانية في أكتوبر 1941 للسيطرة على موسكو قبل الشتاء؟', '["عملية عباد الشمس (⁦Operation Sunflower⁩)","عملية الإعصار (⁦Operation Typhoon⁩)","عملية بارباروسا (⁦Operation Barbarossa⁩)","الحالة الزرقاء (⁦Case Blue⁩)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_110, 'كم عدد النساء اللواتي انضممن إلى القوات المسلحة الأمريكية خلال الحرب العالمية الثانية؟', '["225,000","100,000","350,000","500,000"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_111 uuid;
BEGIN
  SELECT id INTO v_sync_id_111 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 13' LIMIT 1;
  IF v_sync_id_111 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 13', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_111;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'ما هو الاسم الرمزي لغزو الحلفاء لجنوب فرنسا في 15 أغسطس 1944‏؟', '["عملية دراغون","عملية أوفرلورد","عملية ماركت غاردن","عملية الشعلة (⁦Torch⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'من هو أول رئيس ولد في الولايات المتحدة المستقلة؟', '["جون آدامز","مارتن فان بيورين","جورج واشنطن","جيمس مونرو"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'في أي بلد وقع تمرد يوريكا، وهي معركة دارت عام 1856 ضد الحكم الاستعماري؟', '["الهند","كندا","أستراليا","البرازيل"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'ما هو المرض الذي تسبب في شلل الرئيس فرانكلين روزفلت ودفعه لمساعدة البلاد في العثور على علاج له؟', '["السرطان","التهاب السحايا","فيروس نقص المناعة البشرية (الإيدز)","شلل الأطفال"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'أي من الدول الاستعمارية التالية ارتكبت إبادة هيريرو الجماعية في أفريقيا؟', '["ألمانيا","بريطانيا","بلجيكا","فرنسا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'ما هي الدول التي شاركت في حرب جراد البحر؟', '["كندا والنرويج","فرنسا والبرازيل","أستراليا ونيوزيلندا","الولايات المتحدة وإنجلترا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'أطلق غالبية سكان الإمبراطورية البيزنطية على أنفسهم اسم الرومان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'من هو الرئيس الأمريكي الذي قيل إنه كان صادقاً جداً لدرجة تمنعه من الكذب على والده بشأن قطعه لشجرة كرز؟', '["أبراهام لينكون","توماس جيفرسون","جيمس مونرو","جورج واشنطن"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'من هو الديكتاتور الذي قتل أكبر عدد من الناس؟', '["ماو تسي تونغ","جوزيف ستالين","أدولف هتلر","كيم إيل سونغ"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'أي دولة أهدت تمثال الحرية إلى الولايات المتحدة الأمريكية؟', '["إسبانيا","فرنسا","إنجلترا","ألمانيا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'اغتيل الرئيس الأمريكي جون كينيدي أثناء موكبه الرئاسي في مدينة أتلانتا بولاية جورجيا في 22 نوفمبر 1963.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'أي من هذه الدبابات من القرن العشرين صُممت وصُنعت قبل بقية الدبابات؟', '["إم 4 شيرمان","بانزر 4","كرومويل","رينو إف تي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'في أي عام سيطر ويليام الفاتح على إنجلترا؟', '["1066","1123","1205","901"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'كانت الولايات المتحدة الأمريكية أول دولة تطلق إنساناً إلى الفضاء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'مع دفع الفقر والتوترات العرقية بالأمريكيين من أصل أفريقي إلى خارج جنوب الولايات المتحدة، انتقل العديد منهم إلى الشمال في حدث يُعرف باسم ماذا؟', '["الصحوة الكبرى","نهضة هارلم","الهجرة الكبرى","إعادة التوطين"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'أي من المعارك التالية تُعتبر غالباً علامة على بداية سقوط الإمبراطورية الرومانية الغربية؟', '["معركة تسالونيكي","معركة بولينتيا","معركة القسطنطينية","معركة أدريانوبل"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'من اخترع "المكوك الطائر" عام 1738، وهو أحد التطورات الرئيسية في تطوير صناعة النسيج؟', '["جون كاي","جيمس هاريغريفز","ريتشارد آركرايت","جون دير"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'خلال أي حرب حدثت "أزمة الصواريخ الكوبية"؟', '["الحرب العالمية الأولى","الحرب الباردة","الحرب العالمية الثانية","الحرب الثورية الأمريكية"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_111, 'في أي عام أصبحت أستراليا اتحاداً فيدرالياً؟', '["1910","1899","1901","1911"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_112 uuid;
BEGIN
  SELECT id INTO v_sync_id_112 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 14' LIMIT 1;
  IF v_sync_id_112 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 14', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_112;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ما هو الاسم الأصلي لمدينة نيويورك؟', '["نيو أمستردام","نيو لندن","نيو باريس","نيو روما"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'كان "درب الدموع" نتيجة لسياسة ترحيل السكان الأصليين التي اتبعها أي رئيس للولايات المتحدة؟', '["هاري ترومان","أندرو جاكسون","مارتن فان بيورين","جون كوينسي آدامز"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'متى انتهت الحرب الوطنية العظمى في الاتحاد السوفيتي؟', '["2 سبتمبر 1945","9 أغسطس 1945","9 مايو 1945","11 ديسمبر 1945"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'في أي عام تم تصميم مسدس ⁦M1911⁩‏؟', '["1907","1899","1917","1911"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'من هو صاحب المقولة الشهيرة "أنا أفكر، إذن أنا موجود"؟', '["ديكارت","أفلاطون","أرسطو","شكسبير"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'كان عصر التنوير حقبة مليئة بالفلسفات والتقدم والنظريات العلمية لتحسين المجتمع.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ما هو اللقب الشهير لمانفريد فون ريشتهوفن؟', '["الطيار الماهر المحلق عالياً","الثعبان الأزرق","البارون الأحمر","المدفعي الألماني"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'قبل أن تتحول المستعمرات الأمريكية إلى التقويم الغريغوري عام 1752، في أي تاريخ كانت تبدأ سنتهم الجديدة؟', '["1 يونيو","25 سبتمبر","1 ديسمبر","25 مارس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'أي مما يلي لا يُصنف كأحد اللغات السامية؟', '["السومرية","المالطية","الأكادية","المندائية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ماذا كان اسم نابليون بونابرت قبل أن يغيره؟', '["ناابوليون فان بونيبارت","نابليوني دي بونابرت","نابوليون دو بوابارت","نابليونا دي بوينوبارتي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'من هو أول أمريكي يصعد إلى الفضاء؟', '["نيل آرمسترونغ","جون غلين","ألان شيبارد","جيم لوفيل"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ما هي بندقية الهجوم الروسية الآلية التي تعمل بالغاز وتم تطويرها في الاتحاد السوفيتي عام 1947، ولا تزال تستخدم بشكل شائع حتى اليوم؟', '["⁦RPK⁩","⁦M16⁩","⁦MG 42⁩","⁦AK-47⁩"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ابن أي بابا يُزعم أنه أقام حفلاً ماجناً شاركت فيه 50 محظية في القصر البابوي؟', '["ألكسندر السادس","إينوسنت الخامس","أوربان الثاني","بيوس الثالث"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'كم كان عمر الملك هنري الخامس عندما توفي؟', '["62","35","87","73"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'إذا أمسكت بالنصل الحاد للسيف الطويل بطريقة معينة، فلن تجرح نفسك.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'ما هي العملة الرسمية لألمانيا حتى عام 2002‏؟', '["فرنك","جنيه إسترليني","رايخ توكن","مارك"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'في أي عام غرقت سفينة تايتانيك؟', '["1912","1930","1917","1941"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'متى انهارت الإمبراطورية البيزنطية؟', '["1299","1453","1353","1498"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_112, 'كانت اليابان جزءاً من قوات الحلفاء خلال الحرب العالمية الأولى.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_113 uuid;
BEGIN
  SELECT id INTO v_sync_id_113 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 15' LIMIT 1;
  IF v_sync_id_113 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 15', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_113;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'تم التنازل عن كندا لبريطانيا بموجب شروط معاهدة باريس عام 1763.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'من كان الجنرال الكونفدرالي في الحرب الأهلية الأمريكية؟', '["جورج كاستر","روبرت إي لي","يوليسيس غرانت","جورج ماكليلان"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'الرجل الذي أطلق النار على ألكسندر هاميلتون كان يُدعى آرون بور.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'ما هو اسم سفينة التجسس التابعة للبحرية الأمريكية التي هاجمتها القوات الكورية الشمالية واستولت عليها عام 1968‏؟', '["يو إس إس نورث كارولاينا","يو إس إس كونستيتيوشن","يو إس إس إنديانابوليس","يو إس إس بويبلو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'في أي من هذه المدن افتُتح أول متنزه "ليغولاند" عام 1968‏؟', '["بيلوند، الدنمارك","كارلسباد، كاليفورنيا","وينتر هافن، فلوريدا","ناغويا، اليابان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'شغل السير إسحاق نيوتن منصب عضو في البرلمان، ولكن المرة الوحيدة المسجلة التي تحدث فيها كانت للشكوى من تيار هواء بارد في القاعة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'متى انتهى بناء قناة السويس؟', '["1859","1860","1869","1850"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'ما هي العبارة التذكيرية المستخدمة لتذكر مصائر زوجات الملك هنري الثامن؟', '["مقطوعة الرأس، متوفاة، مطلقة، مطلقة، مقطوعة الرأس, ناجية","متوفاة، مقطوعة الرأس، مطلقة، مقطوعة الرأس، ناجية، مطلقة","ناجية، مقطوعة الرأس، متوفاة، مطلقة، مطلقة، مقطوعة الرأس","مطلقة، مقطوعة الرأس، متوفاة، مطلقة، مقطوعة الرأس، ناجية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'أي من هؤلاء الفيزيائيين النظريين تنبأ أولاً بوجود المادة المضادة؟', '["بول ديراك","نيلز بور","ألبيرت أينشتاين","فيرنر هايزنبرغ"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'من هو إمبراطور الإمبراطورية البيزنطية الذي أمر ببناء آيا صوفيا؟', '["قسطنطين الرابع","جستنيان الأول","أركاديوس","ثيودوسيوس العظيم"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'ما هو أول ثديي تم إطلاقه بنجاح إلى مدار الأرض؟', '["الشمبانزي هام","القردة بيكر","الكلبة لايكا","الكلبة بيلكا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'مع أي فيلسوف يوناني تربط مقولة "أنا أعلم أنني لا أعلم شيئاً"؟', '["أرسطو","أفلاطون","فيثاغورس","سقراط"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'من هو أول رئيس للولايات المتحدة؟', '["جورج واشنطن","جيمس ماديسون","توماس جيفرسون","جيمس بولك"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'في أي تاريخ ولد أدولف هتلر؟', '["12 يونيو 1889","20 أبريل 1889","6 فبراير 1889","16 أبريل 1889"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'من كان من بين الذين لقوا حتفهم في مأساة تحطم طائرة سمولينسك في روسيا عام 2010‏؟', '["البابا يوحنا بولس الثاني","بانغ-دينغ أو","الرئيس البولندي","ألبرت بوتين"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'أي قرية أيرلندية في مقاطعة مايو أنشأت قطاعاً سياحياً بناءً على ظهور مزعوم للعذراء مريم عام 1879‏؟', '["باليكاسل","سوينفورد","تورلو","نوك"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'متى سلمت بريطانيا سيادة هونغ كونغ مجدداً إلى الصين؟', '["1997","1999","1841","1900"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'كم كان عمر ليندون جونسون عندما تولى رئاسة الولايات المتحدة؟', '["50","55","60","54"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_113, 'أين قُتل المستكشف البرتغالي فرديناند ماجلان في عام 1521‏؟', '["جزر الكناري","غوام","الفلبين","الأرجنتين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_114 uuid;
BEGIN
  SELECT id INTO v_sync_id_114 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 16' LIMIT 1;
  IF v_sync_id_114 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 16', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_114;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'عن أي إنجاز فاز ألبرت أينشتاين بجائزة نوبل عام 1921‏؟', '["التأثير الكهروضوئي","النسبية","ثنائية الموجة والجسيم","طاقة نقطة الصفر"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من كان أول مستشار لألمانيا الموحدة عام 1871‏؟', '["القيصر فيلهلم","أوتو فون بسمارك","فريدريك الثاني","روبرت كوخ"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من كان الاستراتيجي العسكري في فترة زو الشرقية؟', '["لو بو","جنكيز خان","سون تزو","فلاد المخوزق"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من خلف جوزيف ستالين في قيادة الاتحاد السوفيتي؟', '["لافرينتي بيريا","فياتشيسلاف مولوتوف","جيورجي مالينكوف","نيكيتا خروتشوف"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'أي دولة صغيرة جداً يُعتبر دستورها الأقدم ولا يزال سارياً حتى اليوم؟', '["سان مارينو","أندورا","موناكو","سانت كيتس ونيفيس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'ولد مارتن لوثر كينغ الابن وآن فرانك في نفس العام.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'ماذا يعني الاختصار "⁦RMS⁩" في سفينة "⁦RMS Titanic⁩" عام 1912‏؟', '["خدمة الجلالة الملكية","الجدول البحري المنتظم","سفينة البريد الملكي","مستشعر الدوامات المنظم"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من اغتال الرئيس الأمريكي جيمس غارفيلد؟', '["سرحان سرحان","ليون تشولغوش","جون ويلكس بوث","تشارلز غيتو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'أي دولة من هذه الدول كانت من قوات الحلفاء في الحرب العالمية الثانية؟', '["الاتحاد السوفيتي","إيطاليا","ألمانيا","اليابان"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'أي من هذه الدول تم رسم خريطتها البحرية في عام 1500 من قبل الاستكشافات البحرية البرتغالية؟', '["الهند","البرازيل","موزمبيق","مدغشقر"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'في عام 1967، نشرت إحدى المجلات قصة حول استخراج مواد كيميائية مهلوسة من الموز لإثارة تساؤلات أخلاقية حول حظر المخدرات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'ماذا كانت تبيع أولى آلات البيع الذاتي في أوائل ثمانينيات القرن التاسع عشر؟', '["الكحول","السجائر","المشروبات الغازية","بطاقات بريدية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من كان قائد السويد في حرب الشمال العظمى؟', '["كارل الثاني عشر","بير ألبين هانسون","بطرس الأكبر","غوستافوس أدولفوس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'من هو رئيس الولايات المتحدة الوحيد الذي انتخب أربع مرات؟', '["ثيودور روزفلت","فرانكلين روزفلت","جورج واشنطن","أبراهام لينكون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'تأسست إسبانيا عام 1469 بزواج إيزابيلا الأولى ملكة قشتالة وفرديناند الثاني ملك أي مملكة أيبيرية أخرى؟', '["غاليسيا","ليون","أراغون","نافارا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'في الحرب العالمية الثانية، خدمت طائرات ''هوكر تيفون'' في مسرح عمليات المحيط الهادئ.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'بماذا كان يشتهر ويليام فريدريك كودي؟', '["بوفالو بيل","بيلي ذا كيد","وايلد بيل هيكوك","بوني بيل"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'لا تزال دبابة ''إم 41 ووكر بولدوغ'' في الخدمة في بعض الدول حتى يومنا هذا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_114, 'بأي معاهدة انتهت حرب الثلاثين عاماً؟', '["معاهدة فرساي","معاهدة باريس","صلح وستفاليا","صلح براغ"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_115 uuid;
BEGIN
  SELECT id INTO v_sync_id_115 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 17' LIMIT 1;
  IF v_sync_id_115 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 17', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_115;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'أي إله يوناني كان إله الشمس؟', '["هيليوس","زيوس","هاديس","بوسيدون"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'من الذي صاغ فكرة الاشتراكية وطورها？', '["فلاديمير لينين","كارل ماركس","جوزيف ستالين","فلاديمير بوتين"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'ماذا حدث في 6 يونيو 1944‏؟', '["القصف الذري على هيروشيما وناجازاكي","الهجوم على بيرل هاربر","يوم الإنزال","تحرير باريس"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'أي معركة بحرية كانت تعتبر نقطة التحول في مسرح عمليات المحيط الهادئ خلال الحرب العالمية الثانية؟', '["الهجوم على جزيرة تروك","الهجوم على بيرل هاربر","معركة بحر المرجان","معركة ميدواي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'في عهد أي رئيس أمريكي تم الانتهاء من حفر قناة بنما؟', '["وودرو ويلسون","فرانكلين ديلانو روزفلت","هربرت هوفر","ثيودور روزفلت"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'أعلنت الولايات المتحدة الأمريكية استقلالها عن الإمبراطورية البريطانية في 4 يوليو 1776.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'ما هو الرقم الذي يرمز إليه الحرف الروماني ''⁦D⁩''؟', '["100","1000","500","50"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'من كان رئيس الولايات المتحدة عندما بدأت حرب الخليج؟', '["ريتشارد نيكسون","جورج بوش الابن","رونالد ريجان","جورج بوش الأب"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'ما هو أول جسم مسجل يصل إلى الفضاء الخارجي على الإطلاق؟', '["بامبر-واك (⁦Bumper-WAC⁩)","غطاء بالوعة أمريكي","سبوتنيك 1","سبوتنيك 2"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'متى أعلنت الولايات المتحدة الحرب رسمياً على اليابان، لتدخل بذلك الحرب العالمية الثانية؟', '["6 يونيو 1944","8 ديسمبر 1941","22 يونيو 1941","1 سبتمبر 1939"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'أي من هذه الدبابات صممتها وشغلتها المملكة المتحدة؟', '["إم 4 شيرمان","تايجر إتش 1","توج 2 (⁦Tog II⁩)","تي-34"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'تحت أي اسم نُصِّب رودريغو بورجيا بابا للفاتيكان؟', '["رودريغو الأول","يوحنا بولس الثاني","بيوس السابع","ألكسندر السادس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'ما هي الدولة التي انضمت إلى الاتحاد الأوروبي في عام 2013‏؟', '["كرواتيا","بلغاريا","سلوفينيا","تركيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'أي من هذه المناصب لم يشغلها عالم الفلك والفيزياء إسحاق نيوتن؟', '["أستاذ رياضيات","مساح مدينة لندن","حارس دار السك الملكية","عضو في البرلمان"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'ما هي الدولة الواقعة في جنوب شرق آسيا والتي كانت تُعرف سابقاً باسم ''لان تسانغ''؟', '["كمبوديا","فيتنام","لاوس","تايلاند"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'كان أدولف هتلر جندياً ألمانياً في الحرب العالمية الأولى.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'من هو الإمبراطور الروماني الذي وصلت الإمبراطورية الرومانية في عهده إلى أقصى اتساع جغرافي لها؟', '["ترايان","يوليوس قيصر","كلوديوس","قسطنطين العظيم"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'البرازيل كانت مستعمرة سابقة لأي من الدول التالية؟', '["إسبانيا","البرتغال","هولندا","فرنسا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_115, 'كانت هونغ كونغ جزءاً من أراضي أي دولة قبل أن تستعيدها بريطانيا في عام 1945？', '["الصين","الفلبين","اليابان","إندونيسيا الفرنسية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_116 uuid;
BEGIN
  SELECT id INTO v_sync_id_116 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 18' LIMIT 1;
  IF v_sync_id_116 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 18', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_116;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'متى بدأت أزمة القرن الثالث؟', '["235 ميلادي","235 قبل الميلاد","242 ميلادي","210 ميلادي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما هو المحرك الذي كانت تستخدمه طائرة ''سبتفاير إل إف إم كيه 9'' (⁦Spitfire L.F⁩. ⁦Mk IX⁩)‏؟', '["غريفون 65","ميرلين 66","ميرلين 50","ميرلين ⁦X⁩"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'خاضت جمهورية هولندا حرب الثمانين عاماً ضد أي دولة؟', '["فرنسا","إنجلترا","إسبانيا","البرتغال"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'الاسم الحقيقي لجوزيف ستالين هو ''يوسف بيساريونيس دزه جوغاشفيلي''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'في أي عام أصبحت كنتاكي الولاية رقم 15 التي تنضم إلى الاتحاد الأمريكي؟', '["1792","1782","1798","1788"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'من هو أول إنسان يسافر إلى الفضاء الخارجي؟', '["فيرجيل إيفان \"غاس\" غريسوم","يوري غاغارين","نيل آرمسترونغ","بز ألدرين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما هي جنسية مخترع آلة التشفير الشهيرة ''إنجما''؟', '["أمريكي","بريطاني","ألماني","بولندي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'من هو المخترع البريطاني الذي اخترع آلة بذار البذور (السطارة)‏؟', '["تشارلز بابيج","إسحاق نيوتن","جوزيف جون طومسون","جيثرو تال"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما اسم شبكة التجسس التي ساعدت الولايات المتحدة على الفوز بحرب الاستقلال؟', '["شبكة كولبر","شبكة تجسس نيويورك","جواسيس واشنطن","غير مسماة"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'من كان آخر إمبراطور روماني في عام الأباطرة الأربعة (69 ميلادي)‏؟', '["فيتيليوس","فيسباسيان","أوتو","غالبا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما اسم طائرة بوينغ ⁦B-29⁩ التي ألقت القنبلة الذرية ''الولد الصغير'' (⁦Little Boy⁩) على هيروشيما؟', '["الشر الضروري","الفنان العظيم","إينولا غي","البيت الممتلئ"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما هو الاسم غير الرسمي لألمانيا بين عامي 1919 و1933‏؟', '["جمهورية ألمانيا الديمقراطية","جمهورية ألمانيا الاتحادية","النمسا","جمهورية فايمار"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'اغتيال أي شخصية ملكية أدى إلى اندلاع الحرب العالمية الأولى؟', '["الأرشيدوق فرانز فرديناند","لويس مونتباتن","الملك تشارلز الأول","نيقولا الثاني"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'الرئيس الأمريكي رونالد ريجان هو أول رئيس يعين امرأة في المحكمة العليا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'في أي يوم بدأ بناء مبنى البنتاغون، وهو مقر وزارة دفاع الولايات المتحدة؟', '["15 يونيو 1947","15 يناير 1943","11 سبتمبر 1941","2 سبتمبر 1962"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'أي من هذه الدول لم تكن ضمن قوات دول المحور (دول الوسط) خلال الحرب العالمية الأولى؟', '["النمسا-المجر","تركيا","ألمانيا","إسبانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'ما هو النشاط الإجرامي الذي تضمنه الماضي الإجرامي لجوزيف ستالين؟', '["سرقة القطارات","القتل المأجور","التهرب الضريبي","تزوير الهوية"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'كم يوماً استمرت انتفاضة وارسو خلال الحرب العالمية الثانية؟', '["20 يوماً","63 يوماً","55 يوماً","224 يوماً"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_116, 'كم عدد عمليات هبوط البشر على سطح القمر التي تمت بالفعل؟', '["1","3","6","7"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_117 uuid;
BEGIN
  SELECT id INTO v_sync_id_117 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 19' LIMIT 1;
  IF v_sync_id_117 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 19', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_117;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'في أي عام بدأت الحرب العالمية الأولى؟', '["1914","1905","1919","1925"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'كم مرة تزوج ألبرت أينشتاين في حياته؟', '["خمس مرات","مرتين","ثلاث مرات","مرة واحدة"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'أي مما يلي لم يكن من مواقع الإنزال على الشواطئ خلال غزو نورماندي؟', '["غولد","جونو","سيلفر","سورد"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'في أي عام حدث زلزال وتسونامي يوم عيد الصناديق (بوسكينغ داي) في المحيط الهندي؟', '["2006","2008","2002","2004"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'كل ما يلي أسماء للولايات المتحاربة السبع في الصين القديمة ما عدا:', '["جاي (翟)","جاو (趙)","تشين (秦)","تشي (齊)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'وقعت معركة طرف الغار (ترافالغار) في 23 أكتوبر 1805.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'من كان بوهدان خميلنيتسكي من بين الخيارات التالية؟', '["الأمين العام للحزب الشيوعي في الاتحاد السوفيتي","أمير الأفلاق","قائد القوزاق الأوكرانيين","أمير نوفغورود الأكبر"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'جامعة أكسفورد أقدم من إمبراطورية الأزتيك.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'ما هي الحرب التي تطوع فيها الكاتب جورج أورويل وكاد أن يلقى حتفه فيها؟', '["الحرب الأهلية الإسبانية","الحرب العالمية الأولى","الحرب العالمية الثانية","الحرب الأهلية الروسية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'من الذي اكتشف البنسلين؟', '["ماري كوري","ألكسندر فليمنغ","ألفرد نوبل","لويس باستور"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'ما هو الاسم الرمزي للغزو الألماني للاتحاد السوفيتي في الحرب العالمية الثانية؟', '["عملية القيصر (كايسرشلاخت)","عملية غير معقولة (أنثينكابل)","عملية بارباروسا","عملية مولوتوف"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'من من الثوار السوفييت التاليين تم نفيُه من الاتحاد السوفيتي واغتيل لاحقاً في عام 1940 بسبب انتقاده للستالينية؟', '["ليف كامينيف","ميخائيل كالينين","فلاديمير لينين","ليون تروتسكي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'في عام 1961، تحطمت طائرة أمريكية من طراز ⁦B-52⁩ وكادت أن تفجر قنبلتين نوويتين بقوة 4 ميغاطن فوق أي مدينة أمريكية؟', '["غولدسبورو، كارولاينا الشمالية","هيكسفيل، نيويورك","جاكسونفيل، فلوريدا","كونواي، أركنساس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'أي من الشعوب القديمة التالية لم يُصنف ضمن الشعوب الهيلينية (اليونانية)‏؟', '["الدوريون","الإيليريون","الآخيون","الأيونيون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'تفككت الدولة العثمانية بعد خسارتها في أي حرب؟', '["حرب القرم","الثورة الصربية","الحرب العالمية الأولى","حرب البلقان الثانية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'في أي يوم بدأت محاولة الانقلاب عام 1991 في الاتحاد السوفيتي؟', '["21 أغسطس","26 ديسمبر","24 ديسمبر","19 أغسطس"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'في أي عام افتُتح أول مطعم بيتزا هت؟', '["1958","1976","1965","1942"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'من يُعتقد أنه أول أوروبي ''اكتشف'' نيوزيلندا؟', '["كريستوفر كولومبوس","أبل تاسمان","جين باريه","جون كابوت"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_117, 'متى تأسست مدينة روما في إيطاليا؟', '["902 قبل الميلاد","524 قبل الميلاد","753 قبل الميلاد","697 قبل الميلاد"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_118 uuid;
BEGIN
  SELECT id INTO v_sync_id_118 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 2' LIMIT 1;
  IF v_sync_id_118 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 2', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_118;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'كيف أُعدم الفيلسوف سقراط؟', '["بالسم","بقطع الرأس","رمياً بالرصاص","بالصلب"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'متى أعلنت ليتوانيا استقلالها عن الاتحاد السوفيتي؟', '["25 ديسمبر 1991","11 مارس 1990","5 ديسمبر 1991","20 أبريل 1989"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'متى تُوّج نابليون بونابرت إمبراطوراً لفرنسا؟', '["3 يوليو 1802","8 مارس 1803","2 ديسمبر 1804","15 أكتوبر 1804"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'من ينسب إليه كتابة الملحمة الشعرية ''الأوديسة''؟', '["أرسطو","أوديسيوس","سقراط","هوميروس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'أي من اللغات التالية لا تنتمي إلى عائلة اللغات الهندوأوروبية؟', '["الفنلندية","الإنجليزية","الهندية","الروسية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'هل قوبلاي خان هو حفيد جنكيز خان؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'متى بدأت حرب شبه الجزيرة الإيبيرية (حرب الاستقلال الإسبانية)‏؟', '["1806","1810","1808","1809"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'فيما يتعلق بالاحتلال البريطاني لأيرلندا، إلى ماذا يرمز الاختصار (⁦IRA⁩)‏؟', '["تحالف المتمردين الأيرلنديين","جيش الإصلاح الأيرلندي","التحالف الملكي الأيرلندي","الجيش الجمهوري الأيرلندي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'كانت آخر خدمة للمركبة الحربية الأمريكية ''يو إس إس ميسوري'' (⁦BB-63⁩) في الحرب الكورية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'من من رؤساء الولايات المتحدة التاليين تعرض للاغتيال؟', '["ليندون جونسون","ويليام ماكينلي","تشيستر آرثر","فرانكلين روزفلت"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'متى بدأت الثورة الفرنسية؟', '["1823","1756","1789","1799"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'هل صُممت طائرة ''سبتفاير'' الحربية في الأصل بناءً على طائرة سباق؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'ما هو التاريخ الدقيق لبدء الثورة الفرنسية؟', '["5 مايو 1789","12 أبريل 1789","5 أبريل 1789","6 مايو 1799"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'أين كان أبراهام لينكولن عندما اغتاله جون ويلكس بوث عام 1865‏؟', '["على متن قارب","في المسرح","على ظهر حصانه","في السرير"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'لأي غرض بُني قمة (تاج) مبنى إمباير ستيت في الأصل؟', '["مانعة صواعق","هوائي إرسال","مرسى للمناطيد","سارية علم"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'في أي سنوات وقعت معركة جاليبولي؟', '["1914 - 1918","1914 - 1915","1915 - 1918","1915 - 1916"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'تأسست الدولة العثمانية في عام 1299.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'كم بلغت نسبة سكان العالم الذين توفوا بسبب ''الإنفلونزا الإسبانية'' التي تعتبر من أكثر الأوبئة فتكاً بالبشر؟', '["6 إلى 10 بالمئة","3 إلى 6 بالمئة","1 إلى 3 بالمئة","أقل من 1 بالمئة"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'كانت المدخنة الرابعة لسفينة تايتانيك وهمية (غير حقيقية)، وصُممت لجعل السفينة تبدو أكثر قوة وتناسقاً.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_118, 'في أي عام انتهت الحرب العالمية الثانية؟', '["1943","1947","1950","1945"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;

