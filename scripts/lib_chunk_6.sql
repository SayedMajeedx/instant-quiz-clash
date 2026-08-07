DO $$
DECLARE
  v_lib_id_74 uuid;
BEGIN
  SELECT id INTO v_lib_id_74 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 2' LIMIT 1;
  IF v_lib_id_74 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 2', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_74;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'ما هي الكلمة التي تمثل حرف ''⁦T⁩'' في أبجدية الناتو الصوتية؟', '["تانغو","تارجت","تاكسي","تركي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'أي من المصطلحات التشريحية التالية يشير إلى الطرف الذي يحتوي على الذيل لدى الكائن الحي؟', '["بطني (⁦Ventral⁩)","ذيلي (⁦Caudal⁩)","قريب (⁦Proximal⁩)","إكليلي (⁦Coronal⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'ما هو الشعار الذي استخدمته شركة الوجبات السريعة ماكدونالدز قبل شعارها الحالي "أنا أحبه"؟', '["لماذا تدفع أكثر؟!","احصل عليها بطريقتك","نحب أن نرى ابتسامتك","إسعاد الناس من خلال الطعام"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'في التقويم الميلادي القياسي، كم شهراً يبدأ اسمه بالحرف الإنجليزي ''⁦J⁩''؟', '["أربعة","خمسة","اثنان","ثلاثة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'أي من المشروبات الغازية التالية تم طرحه في الأسواق أولاً؟', '["دكتور بيبر","كوكاكولا","سبرايت","ماونتن ديو"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'تُنتج نوتيلا بواسطة شركة فيريرو الألمانية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'كم عدد الأوراق في ورق اللعب (الكوتشينة) القياسي؟', '["32","40","52","64"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'توفي الفيلسوف فرانسيس بيكون بسبب حالة التهاب رئوي حادة أثناء محاولته حفظ اللحم عن طريق حشو دجاجة بالثلج.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'الميتوكوندريا هي مركز توليد الطاقة في الخلية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'من أي بلد أوروبي تأتي جبنة جودا الشهيرة؟', '["بلجيكا","هولندا","ألمانيا","فرنسا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'من هي أصغر شخصية حصلت على جائزة نوبل في التاريخ؟', '["لورنس براغ","فيرنر هايزنبرغ","ملالا يوسفزاي","ياسر عرفات"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'إلى ماذا ترمز الحروف الثلاثة لسلسلة مطاعم "⁦KFC⁩"؟', '["كنتاكي فريش تشيز","كيبلد فريكي كاو","كيوي فود كت","كنتاكي فرايد تشيكن"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'من هو المهندس المعماري الذي صمم برج التجارة العالمي الجديد (⁦One World Trade Center⁩) في مانهاتن بنيويورك؟', '["ديفيد تشايلدز","بياركي إنجلز","مايكل أراد","فوميهيكو ماكي"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'من هو الموسيقي الذي تعاون مع المنتج الأمريكي بورتر روبنسون لإصدار أغنية "شيلتر" عام 2016‏؟', '["مات زو","ماديون","ديد ماوس","زيد"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'أي من المجالات التالية يُعرف أحياناً باسم "العلم الكئيب"؟', '["الفلسفة","السياسة","علم الاقتصاد","الفيزياء"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'ما هي اللغة الرسمية في مدينة برشلونة بجانب اللغة الإسبانية؟', '["الغاليسية","الفرنسية","الباسكية","الكتالونية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'في أي عام وُلد والت ديزني؟', '["1901","1902","1903","1900"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'في لعبة هالف لايف (⁦Half-Life⁩)، ما هو اسم المخلوق الفضائي الذي يلتصق بالرؤوس؟', '["بولسكويد","هيدكراب","فورتيغاونت","فيس هجر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'من بين هذه المباني الأربعة، أيهم الأطول بارتفاع يبلغ 1,483 قدماً (⁦451.9⁩ متراً)‏؟', '["برج زيفينج، الصين","فندق وبرج ترامب الدولي، الولايات المتحدة","أبراج بتروناس التوأم، ماليزيا","برج الحمراء، الكويت"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_74, 'ماذا يُقصد بمصطلح "المجمع التجاري الميت" (⁦Dead Mall⁩)‏؟', '["مجمع تجاري لا يحتوي على أي متاجر","مجمع تجاري صدر قرار بإغلاقه وإدانته","مجمع تجاري بعد ساعات العمل الرسمية","مجمع تجاري يعاني من معدلات خلو مرتفعة أو حركة إقبال منخفضة جداً من المستهلكين"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_75 uuid;
BEGIN
  SELECT id INTO v_lib_id_75 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 20' LIMIT 1;
  IF v_lib_id_75 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 20', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_75;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'يُسمح قانوناً بتناول الكحول أثناء القيادة في ولاية مسيسيبي الأمريكية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'الجلوس لأكثر من ثلاث ساعات في اليوم يمكن أن يقلل من عمر الإنسان المتوقع بمقدار عامين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'تشير الدراسات إلى أن ما يقارب 40% من سكان العالم يستخدمون اليد اليسرى (عُسر).', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'أي عنصر كيميائي يحمل الرمز ⁦Kr⁩‏؟', '["الكيروسين","الكينيتيكيوم","الكوريوم","الكريبتون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'أي من هذه الدول تقود السيارات على الجانب الأيسر من الطريق؟', '["اليابان","ألمانيا","روسيا","الصين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'ما هي عاصمة إسبانيا؟', '["باريس","مدريد","برشلونة","لشبونة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'من أي اتجاه جغرافي تشرق الشمس؟', '["الغرب","الشمال","الشرق","الجنوب"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'ماذا يطلق الهولنديون على لغتهم؟', '["دانسك (⁦Dansk⁩)","دويتش (⁦Deutsch⁩)","هولاندر (⁦Hollander⁩)","نيدرلاندس (⁦Nederlands⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'تُؤكل وجبة الهاجيس تقليدياً في ليلة بيرنز (⁦Burns Night⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'يعد قصر ديزني المسكون (⁦Haunted Mansion⁩) موطناً لثلاثي من أشباح الأوتوستوب (الهيتشهايكر). أي من هؤلاء ليس واحداً منهم؟', '["غاس","هاري","فينياس","إيزرا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'أي من حبوب الإفطار المرعبة لشركة "جنرال ميلز" كانت الأخيرة التي تم إصدارها في السبعينيات؟', '["كونت شوكولا (⁦Count Chocula⁩)","فرانكن بيري (⁦Franken Berry⁩)","فروت بروت (⁦Fruit Brute⁩)","بو بيري (⁦Boo-Berry⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'إلى ماذا يرمز الاختصار ⁦VR⁩‏؟', '["حقيقي جداً (⁦Very Real⁩)","التعرف البصري (⁦Visual Recognition⁩)","التعرف على الصوت (⁦Voice Recognition⁩)","الواقع الافتراضي (⁦Virtual Reality⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'تنتمي اللغة الرومانية إلى عائلة اللغات الرومانسية، والتي تشترك فيها مع الفرنسية والإسبانية والبرتغالية والإيطالية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'يمكن تشغيل ألبوم فرقة "كينغ غيزارد آند ذا ليزرد ويزارد" بعنوان "نونغون إنفينيتي" (⁦Nonagon Infinity⁩) بشكل متكرر دون انقطاع مسموع.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'في لعبة "ريزيدنت إيفل 3"، كم عدد خانات المخزن (الحقيبة) التي تمتلكها جيل في بداية اللعبة؟', '["6","10","8","12"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'أي مما يلي ليس اسماً آخر للباذنجان؟', '["برينجال (⁦Brinjal⁩)","قرع غينيا (⁦Guinea Squash⁩)","ميلونجين (⁦Melongene⁩)","بوتيمارون (⁦Potimarron⁩)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'كم عدد بذور التفاح التقريبي التي يجب ابتلاعها للحصول على جرعة قاتلة من السيانيد؟', '["200","20","2,000","20,000"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'اشتهر الشقيقان بوب ومايك براين في أي رياضة؟', '["كرة السلة","التنس (كرة المضرب)","كرة القدم","البيسبول (كرة القاعدة)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_75, 'تقبيل شخص ما لمدة دقيقة واحدة يحرق حوالي سعرتين حراريتين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_76 uuid;
BEGIN
  SELECT id INTO v_lib_id_76 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 21' LIMIT 1;
  IF v_lib_id_76 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 21', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_76;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'ما هو الجزء الميكانيكي الموجود في مركز ألعاب سبينر (⁦Fidget Spinners⁩)‏؟', '["المحامل (رولمان بلي)","المحاور","التروس","الأحزمة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'أي من برامج نيكتونز (⁦Nicktoons⁩) هذه لم تكن في الأصل فقرة قصيرة في برنامج "أوه ييه! كارتونز" قبل أن تصبح مسلسلاً خاصاً بها؟', '["منطقة الطباشير (⁦ChalkZone⁩)","داني المراهق (⁦Danny Phantom⁩)","جيني المراهقة الآلية (⁦My Life as a Teenage Robot⁩)","الوالدان السحريان (⁦The Fairly OddParents⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'ما هو أكبر نظام نقل سريع (مترو) في العالم من حيث عدد المحطات، بوجود 472 محطة قيد التشغيل؟', '["مترو شانغهاي","مترو أنفاق لندن","مترو أنفاق مدينة نيويورك","مترو أنفاق برلين"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'ما هي الفاكهة التي تعد مكوناً تقليدياً في كعكة الغابة السوداء (بلاك فورست)‏؟', '["المشمش","الزبيب","التفاح","الكرز"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'السكيوفوبيا (⁦Sciophobia⁩) هي الخوف من ماذا؟', '["الظلال","الأكل","الأضواء الساطعة","وسائل النقل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'فرانك لويد رايت كان المهندس المعماري وراء تصميم أي مبنى شهير؟', '["فيلا سافوي","متحف غوغنهايم","دار أوبرا سيدني","إبرة الفضاء (ذا سبيس نيدل)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'أين يقع المقر الرئيسي لشركة أبل (⁦Apple Inc⁩.)‏؟', '["ريدوود سيتي، كاليفورنيا","ريدموند، واشنطن","كوبيرتينو، كاليفورنيا","سانتا مونيكا، كاليفورنيا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'في عالم ⁦SCP⁩ الخيالي، ما هي "فئة الكائن" (⁦Object Class⁩) التي تُمنح لكيانات ⁦SCP⁩ التي لا يمكن احتواؤها على الإطلاق؟', '["ثوميل (⁦Thaumiel⁩)","كيتير-ثوميل (⁦Keter-Thaumiel⁩)","الفئات الباطنية/السردية (⁦Esoteric/Narrative Classes⁩)","أبوليون (⁦Apollyon⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'أي دولة تنتج ما يقارب 40% من الفانيليا في العالم؟', '["مدغشقر","إندونيسيا","الصين","المكسيك"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'من هو مؤسس مجموعة ليغو (⁦The Lego Group⁩)‏؟', '["ينس نيلز كريستيانسن","أولي كيرك كريستيانسن","كيرستين كريستيانسن","جيرهارد كيرك كريستيانسن"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'ما هي الكلمة اليابانية المكتوبة بالأحرف اللاتينية (روماجي) والتي تعني "جامعة"؟', '["توشوكان (⁦Toshokan⁩)","جيموشو (⁦Jimusho⁩)","دايغاكو (⁦Daigaku⁩)","شوكودو (⁦Shokudou⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'ما هي الشركة التي تعاونت معها شركة فالف (⁦Valve⁩) لصناعة نظارة الواقع الافتراضي فايف (⁦Vive⁩)‏؟', '["أوكولوس (⁦Oculus⁩)","جوجل (⁦Google⁩)","رايزر (⁦Razer⁩)","⁦HTC⁩"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'أي مهندس معماري شهير، توفي عام 2019 عن عمر يناهز 102 عاماً، صمم الهرم الزجاجي في متحف اللوفر بباريس؟', '["آي إم بي (⁦I⁩. ⁦M⁩. ⁦Pei⁩)","بسكال غيدو (⁦Pascale Guédot⁩)","فرانك جيري","وانغ شو"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'هل مايكل جاكسون هو من اخترع رقصة مشية القمر (⁦Moonwalk⁩)‏؟', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'كانت أغنية "جينغل بيلز" (⁦Jingle Bells⁩) مخصصة في الأصل لعيد الشكر.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'من يُعتبر "أبو الفلسفة الحديثة"؟', '["أفلاطون","ألبرت أينشتاين","أنطوان لافوازييه","رينيه ديكارت"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'من هي الشخصية المرسومة على ورقة المئة دولار الأمريكية؟', '["بنجامين فرانكلين","جورج واشنطن","أبراهام لينكون","توماس جيفرسون"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'في أي عام حصلت غانا على استقلالها؟', '["1947","1957","1960","1958"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_76, 'في أي دولة أقيمت الألعاب الأولمبية الصيفية لعام 1992‏؟', '["روسيا","كوريا","إسبانيا","الولايات المتحدة الأمريكية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_77 uuid;
BEGIN
  SELECT id INTO v_lib_id_77 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 22' LIMIT 1;
  IF v_lib_id_77 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 22', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_77;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'ما هي الكلمة البرتغالية المقابلة لـ "البرازيل"؟', '["⁦Brasil⁩","⁦Brazil⁩","⁦Brasilia⁩","⁦Brasíl⁩"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'كليتا "أول سولز" (⁦All Souls⁩) و"ميرتون" (⁦Merton⁩) هما كليتان تتبعان لأي جامعة؟', '["كامبريدج","أكسفورد","مانشستر","ليدز"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'ولد أدولف هتلر في أستراليا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'تم ابتكار الوجه السعيد (⁦The Happy Face⁩) بواسطة الرسام التجاري هارفي بال.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'ما هو اسم الشركة في لعبة ليزال كومباني (⁦Lethal Company⁩)‏؟', '["الشركة (⁦The Company⁩)","شركة خردة الكواكب (⁦Planet Scrap Co⁩.)","ليزال للروبوتات (⁦Lethal Robotics⁩)","شركة غورديان للشحن (⁦Gordian Shipping Co⁩.)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'من أي بلد نشأت قصة روبن هود؟', '["فرنسا","إنجلترا","البرتغال","إسكتلندا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'أي دولة تولى فيها رئاسة الوزراء شخصيات بالأسماء التالية: إيدن، وميجور، وبيل، ولو، وبراون، وهيث؟', '["أستراليا","نيوزيلندا","المملكة المتحدة","كندا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'كم يبلغ ارتفاع برج خليفة؟', '["2,717 قدم","2,546 قدم","3,024 قدم","2,722 قدم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'في أي يوم تم إطلاق خدمة استضافة الملفات "جوجل درايف" (⁦Google Drive⁩)‏؟', '["24 أبريل 2012","12 يناير 2014","14 نوفمبر 2008","20 يناير 2010"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'بين نصب واشنطن والبركة العاكسة (⁦Reflecting Pool⁩) مباشرة، يوجد نصب تذكاري لأي حرب؟', '["حرب فيتنام","الحرب العالمية الثانية","الحرب الأهلية الأمريكية","حرب الاستقلال الأمريكية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'أي من التوابل الأساسية التالية يُعرف أيضاً بالفجل الياباني الحار؟', '["مينتسويو","كاراشي","الواسابي","بونزو"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'ما هي القناة التي تربط بين البحر الأبيض المتوسط والبحر الأحمر؟', '["قناة بنما","قناة سيناء","قناة قره قوم","قناة السويس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'الرئيس التنفيذي لشركة التكنولوجيا آبل الذي خلف ستيف جوبز يُدعى تيم آبل.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'أي رشاش أمريكي الصنع كان معروفاً بشكل غير رسمي بين الجنود الأمريكيين الذين استخدموه باسم "مسدس الشحم" (⁦Grease Gun⁩)‏؟', '["كولت 9 ملم","⁦M3⁩","تومبسون","ماك-10"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'بأي منتج غذائي تشتهر الشركة الأمريكية "كامبلز" (⁦Campbell''s⁩) بشكل أكبر؟', '["الشوكولاتة","المشروبات الغازية","الحساء المعلب","السجق"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'التكملة الأقل شهرة للمثل القائل "الفضول قتل القط..." هي:', '["\"...والفأر الصامت بقي مكانه.\"","\"...مما علمه ألا يفعل ذلك مجدداً.\"","\"...لكن الموت بالمعرفة أفضل من الجهل.\"","\"...لكن الرضا أعاده للحياة.\""]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'كم من الوقت استغرق منظفو النوافذ الآليون في مركز التجارة العالمي الأصلي لتنظيف واجهة المبنى الخارجية بأكملها؟', '["شهر واحد","3 أسابيع","أسبوع واحد","شهران"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'ما هو المشروب الكحولي الذي يُصنع بشكل أساسي من عرعر الشرب (ثمار الجونيبير)‏؟', '["الفودكا","الجين","الرم","التيكيلا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_77, 'رقم خط الطوارئ الساخن في الولايات المتحدة هو 911 بسبب هجمات 11 سبتمبر الإرهابية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_78 uuid;
BEGIN
  SELECT id INTO v_lib_id_78 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 23' LIMIT 1;
  IF v_lib_id_78 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 23', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_78;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هو البيرجي (⁦Burgee⁩)‏؟', '["علم","حبل","نافذة","نوع من الطعام"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'أي من الألوان التالية لا يُعتبر من ألوان قوس قزح؟', '["الأزرق","الوردي","البنفسجي","البرتقالي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'في الولايات المتحدة، يُعتبر الأمر تلقائياً إيقاعاً غير قانوني في الشرك (⁦Entrapment⁩) إذا باعتك الشرطة مواد غير قانونية دون الكشف عن هويتها.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هي اللغة الأكثر انتشاراً وتحدثاً في سويسرا؟', '["الفرنسية","الإيطالية","السويسرية","الألمانية"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'في علم اللغويات، أي مما يلي لا يُعد من قواعد غرايس (⁦Gricean Maxims⁩) تحت مبدأ التعاون؟', '["الطول","الجودة","الصلة","الأسلوب"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما اسم بولندا باللغة البولندية؟', '["بوبشيا (⁦Pupcia⁩)","بولسكا (⁦Polska⁩)","بولشكا (⁦Polszka⁩)","بولاند (⁦Poland⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'كيف تقول "وداعاً" باللغة الإسبانية؟', '["هولا (⁦Hola⁩)","أو ريفوار (⁦Au Revoir⁩)","أديوس (⁦Adiós⁩)","سالير (⁦Salir⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هو الحرف الأكثر استخداماً في الأبجدية الإنجليزية؟', '["⁦A⁩","⁦I⁩","⁦O⁩","⁦E⁩"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'في أي سلسلة مطاعم للوجبات السريعة يمكنك طلب مخفوق الحليب "جاموكا" (⁦Jamocha Shake⁩)‏؟', '["آربيز (⁦Arby''s⁩)","ماكدونالدز","برجر كنج","وينديز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ريد فاينز (⁦Red Vines⁩) هي علامة تجارية لأي نوع من الحلوى؟', '["المصاصات","العرقسوس الأحمر (⁦Licorice⁩)","الشوكولاتة","العلكة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'كم عدد الألوان في قوس قزح؟', '["8","9","7","10"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'من هي سيدة الأعمال الغانية التي تُعتبر من رواد الإقراض متناهي الصغر؟', '["فريدة بدوي","أما آتا آيدو","سيون نيلي","إستير أفوا أوكلو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هو أطول جسر في العالم؟', '["جسر دانيانغ-كونشان الكبير، الصين","جسر بحيرة بونتشارترين، الولايات المتحدة","جسر الملك فهد الأول، المملكة العربية السعودية","جسر السلطان عبد الحليم معظم شاه، ماليزيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'وفقاً لـ شيرلوك هولمز: "إذا استبعدت المستحيل، فإن ما يتبقى، مهما بدا مستبعداً، لا بد أن يكون هو..."', '["الجواب","الحقيقة","السبب","المصدر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'أي من هذه الكلمات تشير إلى شيء تم صنعه أو توزيعه أو بيعه بطريقة غير قانونية ومهرّبة؟', '["بوتبلاك (⁦Bootblack⁩)","بوتليس (⁦Bootlace⁩)","بوتليغ (⁦Bootleg⁩)","بوتستراب (⁦Bootstrap⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هي اللعبة التي ظهر فيها والويجي لأول مرة؟', '["واريو لاند: سوبر ماريو لاند 3","ماريو بارتي (على جهاز نينتندو 64)","سوبر سماش برذرز ألتيميت","ماريو تينس 64 (على جهاز نينتندو 64)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'أي من هذه المطاعم جالب حظه (التميمة) هو مهرج؟', '["ماكدونالدز","واتابورجر","برجر كنج","سونيك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'ما هو الكوكب الأقرب إلى شمس مجموعتنا الشمسية؟', '["المريخ","عطارد","المشتري","الأرض"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_78, 'في أي عام كانت نسبة الأسر التي تمتلك جهاز تلفاز في الولايات المتحدة 9% فقط؟', '["1965","1913","1950","1969"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_79 uuid;
BEGIN
  SELECT id INTO v_lib_id_79 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 24' LIMIT 1;
  IF v_lib_id_79 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 24', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_79;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'في المتوسط، كم يستهلك الأمريكيون من أي من المواد التالية بمعدل 100 رطل (حوالي 45 كجم) في الثانية الواحدة؟', '["الشوكولاتة","البطاطس","الدونات","الكوكايين"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, '"سانتا كلوز" (⁦Santa Claus⁩) هو نوع من أنواع الشمام.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'أين يقع المقر الرئيسي لمجموعة "إنديتكس" (⁦Inditex⁩)، أكبر مجموعة أزياء في العالم، في مقاطعة لا كورونيا الإسبانية؟', '["سانخينخو (⁦Sanjenjo⁩)","موخيا (⁦Muxía⁩)","أرتيخو (⁦Arteijo⁩)","أوردينس (⁦Órdenes⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هي ثاني أكبر لغة محلية يتحدث بها السكان في إسبانيا من حيث عدد المتحدثين؟', '["البرتغالية","الإسبانية","الفرنسية","الكتالونية"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هي قطعة الملابس التي يرتديها الرجل الإسكتلندي عادةً في حفلات الزفاف؟', '["التنورة الإسكتلندية (⁦Kilt⁩)","تنورة عادية","فستان","أردية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما المعروض في متحف "مدام توسو" في لندن؟', '["ملابس المصممين","تماثيل الشمع","بكرات أفلام لم تُعرض بعد","سيارات كلاسيكية قديمة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'أي نوع من الحيوانات كان "هارامبي"، الذي تم إطلاق النار عليه بعد سقوط طفل في حظيرته في حديقة حيوان سينسيناتي؟', '["نمر","باندا","غوريلا","تمساح"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هي الكلمة الألمانية التي تعني "ملعقة"؟', '["غابل (⁦Gabel⁩)","ميسر (⁦Messer⁩)","إسشتيبشن (⁦Essstäbchen⁩)","لوفل (⁦Löffel⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'من لغات أي دولة تنحدر الكلمتان "بنغالو" (منزل من طابق واحد) و"شامبو"؟', '["الهند","بابوا غينيا الجديدة","إثيوبيا","الصين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هي العملة الرسمية لبولندا؟', '["الروبل","الزلوتي","اليورو","الكرونة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'في أي دولة تأسست شركة إطارات "ميشلان" عام 1889‏؟', '["المملكة المتحدة","إيطاليا","فرنسا","ألمانيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هو البرج الفلكي لشخص ولد في عيد الحب (14 فبراير)‏؟', '["الحوت","الجدي","العقرب","الدلو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هو السفر الأول من العهد القديم؟', '["سفر التكوين","سفر الخروج","سفر اللاويين","سفر العدد"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'أطلق شركة ماكنتوش أسماء فصائل السنوريات الكبيرة على ستة من أنظمة التشغيل الخاصة بها. فما هو السنور الكبير الذي أطلقت ماكنتوش اسمه على إصدارها لعام 2007‏؟', '["تايجر (النمر)","ليوبارد (الفهد)","بانثر (النمر الأسود)","بوما"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ظهر مصطلح "بريد عشوائي" (⁦Spam⁩) قبل ظهور المنتج الغذائي المعلب الشهير "سبام" (⁦Spam⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'أين تقع محطة القطار ذات الاسم الطويل جداً "⁦Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch⁩"؟', '["مولدوفا","جمهورية التشيك","الدنمارك","ويلز"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'المنظمة البريطانية "كامرا" (⁦CAMRA⁩) هي اختصار لـ "الحملة من أجل البيرة الحقيقية" (⁦The Campaign for Real Ale⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'أي من مصانع البيرة المملوكة لأمريكيين تصدرت المبيعات في البلاد من حيث الحجم في عام 2015‏؟', '["أنهاوزر بوش (⁦Anheuser Busch⁩)","دي جي يونغلينغ آند سون (⁦D⁩. ⁦G⁩. ⁦Yuengling and Son⁩, ⁦Inc⁩)","شركة بوسطن للبيرة (⁦Boston Beer Company⁩)","ميلر كورس (⁦Miller Coors⁩)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_79, 'ما هو شكل اللعبة الشهيرة التي اخترعها البروفيسور المجري إرنو روبيك؟', '["كرة","أسطوانة","مكعب","هرم"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_80 uuid;
BEGIN
  SELECT id INTO v_lib_id_80 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 3' LIMIT 1;
  IF v_lib_id_80 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 3', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_80;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'مترو أنفاق نيويورك هو أقدم مترو أنفاق تحت الأرض في العالم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'في مجموعة أوراق اللعب القياسية، من هو ملك الرمز (النقش) الوحيد الذي يظهر بدون شارب؟', '["البستوني","القلوب","الديناري","السباتي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'ما هي الوجهة التي كانت تقصدها الطائرة المفقودة في الرحلة (⁦MH370⁩)‏؟', '["كوالالمبور","سنغافورة","بكين","طوكيو"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'أي مما يلي هو اسم نظام ياباني للطب البديل، ويعني حرفياً "الضغط بالأصابع"؟', '["أوكيو","ماجيمي","إيكيغاي","شياتسو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'مع أي فرقة كوميدية بريطانية عمل رسام الرسوم المتحركة تيري غيليام؟', '["مونتي بايثون","ذا غوديز","ذا ليغ أوف جينتلمن","ذا بيني دريدفولس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'سُمّي اللون البرتقالي نسبةً إلى فاكهة البرتقال.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'ما هي أغلى توابل العالم من حيث الوزن؟', '["القرفة","الهيل","الزعفران","الفانيليا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'أي جبل يضم أعلى قمة جبلية في إفريقيا؟', '["جبل كينيا، كينيا","جبل ستانلي، جمهورية الكونغو الديمقراطية/أوغندا","جبل بيك، أوغندا","جبل كليمنجارو، تنزانيا"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'إذا قمت بزراعة بذور نبات "⁦Quercus robur⁩" (السنديان القوي)، فما الذي سينمو؟', '["أشجار","حبوب","خضروات","زهور"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'ما اسم العملة المستخدمة في إثيوبيا؟', '["الدرهم","البير","الدولار الأمريكي","الراند"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'مادة "أكسيد ثنائي الهيدروجين" هي مادة كيميائية خطيرة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'يقل طول المرأة المتوسطة بمقدار 5 بوصات / 13 سنتيمتراً عن طول الرجل المتوسط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'وفقاً للجمعية البريطانية للبيرة والحانات (⁦BBPA⁩)، ما هو الاسم الأكثر شيوعاً للحانات في المملكة المتحدة؟', '["الأسد الأحمر (⁦Red Lion⁩)","البلوط الملكي (⁦Royal Oak⁩)","الأيل الأبيض (⁦White Hart⁩)","رأس الملك (⁦King''s Head⁩)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'أي من الجامعات التالية ليست من جامعات رابطة اللبلاب (⁦Ivy League⁩) المرموقة؟', '["جامعة بنسلفانيا","ستانفورد","هارفارد","برينستون"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'ما هو اسم تلسكوب الفضاء الأكثر شهرة التابع لوكالة ناسا؟', '["العين الكبيرة","نجم الموت","تلسكوب هابل الفضائي","ميلينيوم فالكون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'ما هو أكبر عضو في جسم الإنسان؟', '["القلب","الأمعاء الغليظة","الكبد","الجلد"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'كلمة "⁦Typewriter⁩" هي أطول كلمة يمكن كتابتها باستخدام الصف الأول فقط من لوحة مفاتيح كويرتي (⁦QWERTY⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'إلى كم عدد من الأشياء تشير كلمة "درزن" أو "دزينة" عادةً؟', '["6","12","20","10"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'هل اللغة اللوكسمبورغية هي لغة حقيقية؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_80, 'إذا كنت تسير بسرعة 80 ميلاً في الساعة، فكم من الوقت ستحتاج لقطع مسافة 80 ميلاً؟', '["90 دقيقة","30 دقيقة","50 دقيقة","60 دقيقة"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_81 uuid;
BEGIN
  SELECT id INTO v_lib_id_81 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 4' LIMIT 1;
  IF v_lib_id_81 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 4', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_81;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'الاسم العلمي للأضواء الجنوبية (الشفق القطبي الجنوبي) هو أورورا أوستراليس؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'أي من ألعاب الورق التالية تعتمد على الأرقام والعمليات الحسابية البسيطة؟', '["جو فيش","أونو","تويستر","منشكين"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'أي مما يلي هي عائلة موجودة في لعبة "ذا سيمز"؟', '["العائلة","عائلة سيموليون","عائلة غوث","عائلة براود"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'في اللغة الإنجليزية، ما هو اسم الرمز "&"؟', '["إيت سلاش","علامة و","أوبيلوس","أمبرساند"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما الاسم الذي طُرح به المشروب الغازي بيبسي في الأصل؟', '["شراب براد","ببسين بوب","كارولينا كولا","شراب الببسين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما هي التقنية التي سُميت على اسم حاكم الدنمارك والنرويج في القرن العاشر؟', '["واي فاي","بلوتوث","جي بي إس","الإنترنت"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'كل ثمار الفراولة حمراء اللون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'تأسست مجموعة ليغو في عام 1932.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'الماء النقي يوصل الكهرباء بشكل فعال.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'في عام 2010، عقدت منصة تويتر ومكتبة الكونغرس الأمريكي شراكة لأرشفة كل تغريدة يكتبها المواطنون الأمريكيون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما الاسم الذي يطلق على الطعام الهندي المطبوخ على الفحم في فرن طيني؟', '["برياني","باني بوري","تندوري","تيكي ماسالا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'في أي عام ولدت الملكة إليزابيث الثانية؟', '["1923","1929","1930","1926"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما هي حركة الـ "دابينغ" (⁦Dabbing⁩)‏؟', '["رقصة","إجراء طبي","رياضة","لغة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'الحيوان الوطني لاسكتلندا هو أحادي القرن (اليونيكورن).', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ماذا يسمي البحارة مقدمة القارب؟', '["المؤخرة","الجانب الأيسر","المقدمة","الجانب الأيمن"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما هو الاسم الأخير لـ "بابا جون" الشهير؟', '["تشاودر","ويليامز","أندرسون","شنيتر"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'من هو الممثل الكوميدي الذي أدى صوت شخصية "الحمار" في فيلم "شريك"؟', '["إيدي ميرفي","كريس روك","ريتشارد بريور","بيرني ماك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما معنى الكلمة السويدية "غرونكا" (⁦Grunka⁩) باللغة الإنجليزية؟', '["أشخاص","شيء","مكان","أناناس"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'يُسمح لك ببيع روحك على موقع إيباي (⁦eBay⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_81, 'ما هي الشركة التي استحوذت على شركة تصنيع الكمبيوتر "كومباك" (⁦Compaq⁩) مقابل 25 مليار دولار في عام 2002‏؟', '["توشيبا","أسوس","ديل","هيوليت-باكارد (⁦HP⁩)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_82 uuid;
BEGIN
  SELECT id INTO v_lib_id_82 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 5' LIMIT 1;
  IF v_lib_id_82 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 5', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_82;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'أي من هذه اللغات الهندية لا تنتمي إلى عائلة اللغات الهندو أوروبية؟', '["التاميلية","الهندية","البنجابية","الأردية"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما هو أقصى عدد من نجوم ميشلان يمكن للمطعم الحصول عليه؟', '["أربعة","ثلاثة","خمسة","ستة"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'اسم "موقف الحافلات رقم 16" (⁦Number 16 Bus Shelter⁩) كان اسماً لطفل وافقت عليه حكومة نيوزيلندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'في يناير 2019، تم العثور في لندن على الرفات المدفون لأي مستكشف إنجليزي لأستراليا؟', '["ويليام بورك","أبل تاسمان","ديرك هارتوغ","ماثيو فليندرز"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'كم عدد الحروف في الأبجدية الإنجليزية؟', '["26","30","17","5"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'في لعبة الأدوار متعددة اللاعبين على الإنترنت "ريلم أوف ذا ماد غود" (⁦Realm of the Mad God⁩)، ما هو الدهليز الذي يُعتبر الأكثر صعوبة على نطاق واسع؟', '["عرين الثعبان","ذا شاترز","مقبرة القدماء","مسرح صانع الدمى"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'اليوم الواحد يحتوي على 86400 ثانية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'أي من ألعاب الإيقاع الموسيقي التالية من إنتاج شركة هارمونيكس (⁦Harmonix⁩)‏؟', '["ميت بيت مانيا","غيتار هيرو لايف","دانس دانس ريفولوشن","روك باند"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما هي الكلمة السويدية التي تعني "نافذة"؟', '["⁦Fönster⁩","⁦Hål⁩","⁦Skärm⁩","⁦Ruta⁩"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'اخترع فريدريك رويكهايم الفشار في عام 1871 في الولايات المتحدة الأمريكية، حيث كان يبيع هذه الوجبة الخفيفة في شوارع شيكاغو.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'يتكون الخيار عادةً من ماء بنسبة تزيد عن 90%.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما اسم مجسم السمكة المغنية المتحركة الشهير، الذي يغني أغانٍ معروفة مثل "لا تقلق، كن سعيداً"؟', '["بيغ بيلي باس","السمكة المغنية","سردين","بيغ ماوث بيلي باس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'طبق "فوا جرا" (⁦Foie gras⁩) الشهير في المطبخ الفرنسي يُصنع عادةً من أي جزء من البط أو الإوز؟', '["الكبد","القلب","المعدة","الأمعاء"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'أي كلمة إنجليزية تعني "التفكير بعمق"؟', '["⁦Confiscate⁩","⁦Contemplate⁩","⁦Constipate⁩","⁦Condensate⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما نوع الطائرات التي طورها إيغور سيكورسكي في الولايات المتحدة عام 1942‏؟', '["منطاد التخفي","الطائرة النفاثة","المروحية (الهليكوبتر)","كبسولة الفضاء"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'يمكن رؤية سور الصين العظيم من القمر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما هي أكبر فصيلة حية من البطاريق؟', '["البطريق الإمبراطور","البطريق الملك","بطريق جنتو","بطريق أديلي"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'ما هو المشروب الكحولي الذي يُصنع من الدبس (عسل قصب السكر)‏؟', '["الجين","الرم","الفودكا","الويسكي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'أي رئيس أمريكي تظهر صورته على ورقة الدولار الواحد؟', '["توماس جيفرسون","أبراهام لينكون","جورج واشنطن","بنجامين فرانكلين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_82, 'في أي ولاية أمريكية تقع المنطقة 51 (⁦Area 51⁩)‏؟', '["أريزونا","نيومكسيكو","يوتا","نيفادا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_83 uuid;
BEGIN
  SELECT id INTO v_lib_id_83 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 6' LIMIT 1;
  IF v_lib_id_83 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 6', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_83;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'يرمز الاختصار "⁦NCIS⁩" إلى "⁦Navy Corps Investigative Service⁩".', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'أي من هذه الشركات لا تصنع السيارات؟', '["نيسان","دوكاتي","جي إم سي","فيات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'ماذا تعني ممارسة الـ "نيفيلوكوكيميديا" (⁦Nephelococcygia⁩)‏؟', '["النوم والعينان مفتوحتان","كسر الزجاج بالصوت","رؤية أو تخيل أشكال في السحب","السباحة في مياه متجمدة"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'في سلسلة ألعاب الفيديو "كينغدوم هارتس" (⁦Kingdom Hearts⁩)، ما شكل السلاح الذي يحمله البطل الرئيسي؟', '["سيف","قلم","هاتف محمول","مفتاح"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'ماذا يصنع ويبيع صانع القبعات (⁦Milliner⁩)‏؟', '["القبعات","الأحذية","الأحزمة","القمصان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'ما المعنى الكامل للاختصار "⁦RAM⁩" في الكمبيوتر؟', '["ذاكرة المساعدة العشوائية","ذاكرة الوصول العشوائي","تفويض المساعدة العشوائية","رام"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'ماذا يسمي البحارة مؤخرة القارب؟', '["المقدمة","الجانب الأيمن","المؤخرة","الجانب الأيسر"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'وفقاً للمكتب الأسترالي للإحصاء لعامي 2014-2015، ما هي نسبة الأستراليين الذين ولدوا خارج البلاد؟', '["13%","20%","7%","28%"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'في أي اتجاه يتجه تمثال الحرية؟', '["الجنوب الشرقي","الجنوب الغربي","الشمال الغربي","الشمال الشرقي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'الباذنجان هو نوع من الخضار.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'حامل شهادة الدكتوراه (⁦PhD⁩) هو دكتور في ماذا؟', '["علم النفس","علم فراسة الدماغ","الفلسفة","العلاج الطبيعي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'من هو المؤسس المشارك لخدمة بث الموسيقى "سبوتيفاي" (⁦Spotify⁩)‏؟', '["شون باركر","فيليكس ميلر","مايكل بريدنبروكير","دانيال إيك"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'ما هو نوع المنتجات التي تتخصص فيها شركة رولكس (⁦Rolex⁩)‏؟', '["الساعات","السيارات","أجهزة الكمبيوتر","المعدات الرياضية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'تم اختراع البطاطس المهروسة الفورية من قِبل الكندي إدوارد أسيلبرغز في عام 1962.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'قبل القرن التاسع عشر، كانت "غرفة المعيشة" تُسمى في الأصل...', '["الغرفة المفتوحة","غرفة الجلوس","غرفة الاستقبال","السقيفة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'مجموع كل الأرقام الموجودة على عجلة الروليت هو 666.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'من أين نشأ نبات الأناناس في الأصل؟', '["أمريكا الجنوبية","هاواي","أوروبا","آسيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'في أي متحف بلندن يقع تمثال تشارلز داروين؟', '["متحف تيت","متحف التاريخ الطبيعي","المتحف البريطاني","متحف العلوم"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'العلم الوطني لفيتنام يتكون من نجمة حمراء على خلفية صفراء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_83, 'أي جبل يضم أعلى قمة في أوروبا؟', '["جبل شخارا، جورجيا","جبل أرارات، تركيا","جبل مون بلان، فرنسا","جبل إلبروس، روسيا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_84 uuid;
BEGIN
  SELECT id INTO v_lib_id_84 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 7' LIMIT 1;
  IF v_lib_id_84 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 7', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_84;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما هي الكلمة الكورية المكتوبة بالأحرف اللاتينية والتي تعني "قلب"؟', '["سيمجانغ (⁦Simjang⁩)","آيجونغ (⁦Aejeong⁩)","جيونغسين (⁦Jeongsin⁩)","سيغسو (⁦Segseu⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'لماذا تبدو السماء مظلمة في الليل؟', '["سحب الغبار تمتص الضوء","الكون محدود العمر والحجم","الانزياح نحو الأحمر يمنعنا من رؤية النجوم البعيدة","ميكانيكا الكم"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما الذي تؤخذ المضادات الحيوية عادةً لمحاربته؟', '["الفيروسات","الصداع النصفي","الالتهابات البكتيرية","آلام العضلات"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'عبارة "حادث على وشك الوقوع" (⁦accident waiting to happen⁩) هي مثال على أي نوع من الأساليب التعبيرية؟', '["تشبيه (⁦Simile⁩)","استعارة (⁦Metaphor⁩)","تناظر (⁦Analogy⁩)","تعبير اصطلاحي (⁦Idiom⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما اللقب الذي أُطلق على طائرة النقل الثقيل المائية "هوز إتش-4 هيركوليز" التي طارت لأول مرة عام 1947‏؟', '["إوزة التنوب (⁦Spruce Goose⁩)","سفينة نوح (⁦Noah''s Ark⁩)","الرجل البدين (⁦Fat Man⁩)","حصان طروادة (⁦Trojan Horse⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'من هو رائد الفضاء الوحيد من بين طاقم رحلة "أبولو 11" الذي لم يمشِ على سطح القمر؟', '["باز ألدرين","مايكل كولينز","نيل آرمسترونغ","لا أحد منهم"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'من أدى دور الجنرال علاء الدين في فيلم "الديكتاتور" (⁦The Dictator⁩)‏؟', '["جوني ديب","جيمس فرانكو","ساشا بارون كوهين","ليوناردو دي كابريو"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'في أي مجرة يقع كوكب الأرض؟', '["مجرة المريخ","مجرة نوت (⁦Galaxy Note⁩)","الثقب الأسود","مجرة درب التبانة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'نشأت لعبة تنس الطاولة (بينغ بونغ) في إنجلترا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'إذا تم ضبطك متلبساً بـ "التهرب من العمل" (⁦Goldbricking⁩)، فما الخطأ الذي ترتكبه؟', '["التدخين","التكاسل والتهرب","السرقة","الغش"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما هي الكلمة العربية المكتوبة بالأحرف اللاتينية والتي تعني "قمر"؟', '["⁦Najma⁩","⁦Kawkab⁩","⁦Qamar⁩","⁦Shams⁩"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'أي من الملوك البريطانيين التاليين لم تظهر صورته قط على عملة الجنيه الإسترليني المتداولة؟', '["الملكة فيكتوريا","جورج السادس","تشارلز الثاني","إدوارد الثامن"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما هو الاسم (⁦Noun⁩) الأكثر استخداماً في اللغة الإنجليزية؟', '["⁦Time⁩ (الوقت)","⁦Home⁩ (المنزل)","⁦Water⁩ (الماء)","⁦Man⁩ (الرجل)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما هي مهنة "ماي ماسك"، والدة الملياردير إيلون ماسك؟', '["أستاذة جامعية","عارضة أزياء","عالمة أحياء","موسيقية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'في أي عام تم إصدار لعبة الروبوت الشهيرة "روبوسابيان" (⁦RoboSapien⁩)‏؟', '["2000","2001","2004","2006"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'فاز لاينوس باولينغ بجائزتي نوبل؛ الأولى كانت في الكيمياء، ففي أي مجال كانت الجائزة الثانية؟', '["الفيزياء","الاقتصاد","علم وظائف الأعضاء أو الطب","السلام"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'أُضيف مخلل الخيار لأول مرة إلى الهامبرغر لأن قانون الصحة الأمريكي كان يفرض على جميع مطاعم الوجبات السريعة تضمين مصدر لفيتامين سي (⁦C⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'متى وافق الكونغرس القاري الثاني على إعلان الاستقلال الأمريكي؟', '["4 مايو 1776","4 يوليو 1776","4 يونيو 1776","2 يوليو 1776"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'عند البكاء في الفضاء، تلتصق الدموع بوجهك ولا تسقط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_84, 'ما هي عملة الهند وباكستان بالإضافة إلى بعض الدول الآسيوية الأخرى؟', '["الريال","البيزو","الدينار","الروبية"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_85 uuid;
BEGIN
  SELECT id INTO v_lib_id_85 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 8' LIMIT 1;
  IF v_lib_id_85 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 8', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_85;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'نسبة صغيرة فقط من سكان العالم تعاني من عدم تحمل اللاكتوز (حساسية الحليب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'وجدت دراسة علمية أجريت على الفول السوداني المتوفر في الحانات آثاراً لأكثر من 100 عينة بول مختلفة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'على ماذا يمشي السيرك البهلواني المعروف بـ (⁦Funambulist⁩)‏؟', '["زجاج مكسور","كرات","حبل مشدود","سطح القمر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'تعتبر جملة "⁦Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo⁩" صحيحة من الناحية النحوية في اللغة الإنجليزية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'ما هو ارتفاع قطار الموت "كينغدا كا" (⁦Kingda Ka⁩)، الذي كان أطول قطار ملاهي ترفيهي في العالم من عام 2005 إلى عام 2024‏؟', '["456 قدماً","500 قدم","429 قدماً","396 قدماً"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'إلى ماذا ترمز الحروف في التوقيت العالمي (⁦GMT⁩)‏؟', '["التوقيت الزوالي العالمي (⁦Global Meridian Time⁩)","توقيت جرينتش المتوسط (⁦Greenwich Mean Time⁩)","التوقيت المتوسط العام (⁦General Median Time⁩)","توقيت غلاسكو للرجال (⁦Glasgow Man Time⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'أي من معالم ديزني لاند الشهيرة تم إغلاقه في عام 2017 ليعاد تصميمه ليصبح مستوحى من فيلم "حراس المجرة" (⁦Guardians of the Galaxy⁩)‏؟', '["القصر المسكون (⁦The Haunted Mansion⁩)","قراصنة الكاريبي (⁦Pirates of the Caribbean⁩)","برج الرعب لمنطقة الغسق (⁦Twilight Zone Tower of Terror⁩)","رحلة بيتر بان (⁦Peter Pan''s Flight⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'ماذا يعني المصطلح الطبي "أبوليا" (⁦abulia⁩)‏؟', '["العجز عن الوقوف","العجز عن التركيز على أي شيء","رغبة حمّى لتمزيق ملابس الشخص","العجز عن اتخاذ القرارات"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'في بداية أي عقد بدأت ثقافة "القوط" (⁦Goth Subculture⁩) الفرعية بالظهور؟', '["الثمانينيات","التسعينيات","الألفينيات","السبعينيات"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'أي من اللغات التالية لا تستخدم التذكير والتأنيث (الجنس النحوي) في قواعدها؟', '["الألمانية","التركية","الدانماركية","البولندية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'ما اسم الشخصية الرئيسية في سلسلة ألعاب الرعب "ديد سبيس" (⁦Dead Space⁩)‏؟', '["إلين ريبلي","القائد شيبارد","آيزاك كلارك","الكابتن كيرك"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'يتكون "الصمغ العربي" من العصارة المتصلبة لأي نوع من الأشجار؟', '["أشجار النخيل","أشجار الفيكس","أشجار الكافور","أشجار السنط (الأكاسيا)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'أي كاتدرائية في مدينة الفاتيكان صمم جزأها الداخلي عام 1503 فنانون من عصر النهضة مثل برامانتي وميكيلانجيلو وبرنيني؟', '["كاتدرائية القديس بطرس","كاتدرائية كاتانيا","كاتدرائية القديس مرقص","كاتدرائية فلورنسا (الدوومو)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'ما هو اللون الذي تمثل كلمة "كوكليكوت" (⁦Coquelicot⁩) إحدى درجاته، والتي كانت تعني في الأصل زهرة الخشخاش؟', '["الأخضر","الأحمر","الأزرق","الوردي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'من بين هذه المباني الأربعة، أيها الأطول بارتفاع يصل إلى 1250 قدماً (381 متراً)‏؟', '["برج بنك الصين، هونغ كونغ","برج الاتحاد، روسيا","مبنى إمباير ستيت، الولايات المتحدة","فندق جيفورا، الإمارات العربية المتحدة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'يؤدي شخصية "دون شيتو" دور المذيع في محطة الراديو "⁦East Los FM⁩" في لعبة ⁦GTA V⁩.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'أي من سلاسل مطاعم الوجبات السريعة التالية غير معروفة ببيع البيتزا بشكل أساسي؟', '["وينديز (⁦Wendy''s⁩)","دومينوز (⁦Domino''s⁩)","ليتل سيزرز (⁦Little Caesars⁩)","بابا جونز (⁦Papa John''s⁩)"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'أين يعيش البطل الخارق "السهم الأخضر" (أوليفر كوين) في قصص دي سي (⁦DC⁩) المصورة؟', '["سنترال سيتي (المدينة المركزية)","ستار سيتي (مدينة النجوم)","غوثام سيتي (مدينة غوثام)","متروبوليس"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'في لعبة "معركة القطط" (⁦Battle Cats⁩)، ما هي النسبة المئوية للضربة القاضية (⁦Critical Rate⁩) للشخصية مونيكو (⁦Moneko⁩)‏؟', '["20%","10%","15%","25%"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_85, 'يُطلق مصطلح "سامهينوفوبيا" (⁦Samhainophobia⁩) على الخوف المرضي والمستمر من الهالوين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_86 uuid;
BEGIN
  SELECT id INTO v_lib_id_86 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 9' LIMIT 1;
  IF v_lib_id_86 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 9', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_86;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'الكلمة الفرنسية التي تعني "زجاج" هي "⁦glace⁩".', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'في أي بلد تأسست شركة "هيونداي" للسيارات؟', '["روسيا","كوريا الجنوبية","اليابان","الصين"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'أي من قطع الحلوى التالية ليست من إنتاج شركة "مارس" (⁦Mars⁩)‏؟', '["إم آند إمز (⁦M⁩&⁦M''s⁩)","تويكس (⁦Twix⁩)","ألموند جوي (⁦Almond Joy⁩)","سنيكرز (⁦Snickers⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'أي شركة طيران كانت مالكة للطائرة التي تحطمت قبالة سواحل نوفا سكوشا في عام 1998‏؟', '["الخطوط الجوية الفرنسية (⁦Air France⁩)","الخطوط الجوية البريطانية (⁦British Airways⁩)","تي دبليو إيه (⁦TWA⁩)","السويسرية للطيران (⁦Swiss Air⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'من هو الرئيس الأمريكي الذي افتتح قناة بنما رسمياً؟', '["وودرو ويلسون","كالفين كوليدج","هربرت هوفر","ثيودور روزفلت"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'شاي "إيرل غري" (⁦Earl Grey⁩) هو شاي أسود يتميز بنكهة ماذا؟', '["الخزامى (اللافندر)","زيت البرغموت","الفانيليا","العسل"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'وفقاً لمدونة الإشارات الدولية، أي علم فردي يعني "أحتاج إلى المساعدة (وليس استغاثة)"؟', '["كيلو (⁦Kilo⁩)","بابا (⁦Papa⁩)","فيكتور (⁦Victor⁩)","ديلتا (⁦Delta⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ماذا يسمي البحارة الجانب الأيمن من السفينة؟', '["ميسرة السفينة (⁦Port⁩)","مؤخرة السفينة (⁦Stern⁩)","مقدمة السفينة (⁦Bow⁩)","ميمنة السفينة (⁦Starboard⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ما هو الحرف الأخير في الأبجدية اليونانية؟', '["أوميغا","ميّو","إبسيلون","كابا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'في الهندسة المعمارية، يعبر مصطلح "بيكلستاينر" (⁦pecklesteiner⁩) عن مجموعة أبواب تتداخل مع بعضها البعض عند إغلاقها، ويمكن قفلها من خلال ثقب مفتاح واحد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ما هو أول خط تم بناؤه في مترو أنفاق لندن؟', '["الخط الدائري (⁦Circle Line⁩)","خط بيكرلو (⁦Bakerloo Line⁩)","خط متروبوليتان (⁦Metropolitan Line⁩)","خط فيكتوريا (⁦Victoria Line⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'في التعبيرات المجازية، عندما يقال إن شخصاً ما يفتقر إلى الخبرة، يُوصف بأنه يمثل أي لون؟', '["الأحمر","الأزرق","الأصفر","الأخضر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ما هو الرهاب المعروف بـ "سينوفوبيا" (⁦Cynophobia⁩)‏؟', '["الخوف من الكلاب","الخوف من الطيور","الخوف من الطيران","الخوف من الجراثيم"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'متى تأسست شركة نينتندو (⁦Nintendo⁩)‏؟', '["19 أكتوبر 1891","23 سبتمبر 1889","4 مارس 1887","27 ديسمبر 1894"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'تشرق الشمس من جهة الشمال.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'من هو مخترع أول قالب شوكولاتة صلبة في التاريخ عام 1847‏؟', '["أندرو جونسون","جون كادبوري","جون تايلر","جوزيف فراي"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ما هو الشكل الهندسي المستخدم عادةً في لافتات التوقف في الشوارع؟', '["ثُماني الأضلاع","سُداسي الأضلاع","دائرة","مثلث"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'أي من هذه المدن الأمريكية لا توجد بها دار لسك العملات المعدنية تابعة للولايات المتحدة؟', '["سان فرانسيسكو، كاليفورنيا","سانت لويس، ميزوري","فيلادلفيا، بنسيلفانيا","ويست بوينت، نيويورك"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'المجرم الذي يقوم بـ "تزييف الحسابات والكتب المالية" (⁦Cook the books⁩) قد ارتكب أي نوع من السلوكيات غير القانونية؟', '["غسيل الأموال","الابتزاز المالي","الاحتيال المحاسبي","الابتزاز والتهديد"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_86, 'ما الاسم الأصلي الذي تأسس به بنك أمريكا (⁦Bank of America⁩) في البداية؟', '["بنك لونغ آيلاند (⁦Bank of Long Island⁩)","بنك بنسيلفانيا (⁦Bank of Pennsylvania⁩)","بنك شارلوت (⁦Bank of Charlotte⁩)","بنك إيطاليا (⁦Bank of Italy⁩)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_87 uuid;
BEGIN
  SELECT id INTO v_lib_id_87 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 1' LIMIT 1;
  IF v_lib_id_87 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 1', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_87;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'ما هو الاسم الذي كان يُطلق تاريخياً على المدينة التركية المعروفة حالياً بإسطنبول؟', '["القسطنطينية","هودافينديغار","سوغوت","أدريانوبل"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أي من هذه الدول هي الأصغر من حيث عدد السكان؟', '["سلوفاكيا","النرويج","فنلندا","هونغ كونغ"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'ما هي المدينة البولندية التي يعرفها الألمان باسم دانزيغ؟', '["وارسو","زاكوباني","غدانسك","بوزنان"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'تسبق إسرائيل نيويورك بـ 7 ساعات زمنية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'سان مارينو هي الدولة الوحيدة المحاطة بالكامل بدولة أخرى.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'تورونتو هي عاصمة دولة كندا الواقعة في أمريكا الشمالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'كم عدد الدول التي تفوق أستراليا مساحةً؟', '["4","3","5","6"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أي من لغات الإنويت التالية كانت الأولى في استخدام نظام كتابة فريد لا يعتمد على الأبجدية اللاتينية؟', '["الإنوينّاكتونية","الغرينلاندية","الإنوبياتية","الإنوكتيتوتية"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'ما هو اسم النشيد الوطني الكندي؟', '["يا كندا","يا أيتها القيقب الحمراء","الراية المزينة بأوراق الشجر","مارش إسقاط القرص"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'حركة المرور في اليابان تكون على الجانب الأيسر من الطريق.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'تقع بلدة لانفايربولغوينغيلغوغيريتشويرندروبولانتيسيليوغوغوغوتش (⁦Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch⁩) في أي جزيرة ويلزية؟', '["باري","باردسي","أنجلسي","كالدي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'ما هي اللغة الرسمية في ليختنشتاين؟', '["الفرنسية","الإنجليزية","الإيطالية","الألمانية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'كل اللغات التالية تُصنف ضمن اللغات الفنلندية الأوغرية ما عدا:', '["السامودية","المجرية","الفنلندية","الإستونية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أين تقع المنطقة المعروفة باسم مثلث برمودا؟', '["شمال المحيط الهادئ، بين اليابان والولايات المتحدة","شمال المحيط الأطلسي، بين فلوريدا وبورتوريكو","في البحر الكاريبي","جنوب المحيط الهادئ، بعيداً عن تشيلي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أي من الأوبلاستات (المحافظات) الروسية التالية تشترك في الحدود مع بولندا؟', '["سامارا","نيجني نوفغورود","كالينينغراد","أومسك"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'يمكنك السير مشياً على الأقدام من النرويج إلى كوريا الشمالية عبر المرور بروسيا فقط.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أي مدينة في ولاية تكساس تُلقب بـ "الوردة الصفراء لتكساس"؟', '["أماريلو","كوربوس كريستي","فريسكو","هيوستن"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أي من هذه المدن تقع على خط طول 4 درجات شرقاً؟', '["ريو دي جانيرو","أمستردام","تورونتو","هونغ كونغ"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'في أي مدينة تقع جامعة هارفارد؟', '["بروفيدنس","نيويورك","كامبريدج","واشنطن العاصمة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_87, 'أين تقع سلسلة جبال هونوا (⁦Hunua Ranges⁩)‏؟', '["نيبال","الصين","المكسيك","نيوزيلندا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_88 uuid;
BEGIN
  SELECT id INTO v_lib_id_88 FROM quizzes WHERE title = 'جغرافيا العالم والمعالم — الجزء 10' LIMIT 1;
  IF v_lib_id_88 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والمعالم — الجزء 10', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_88;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي قارة تُعتبر الأكبر والأكثر اكتظاظاً بالسكان في العالم؟', '["آسيا","أفريقيا","أوروبا","أمريكا الشمالية"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هو الاسم الأصلي لمدينة هو تشي منه؟', '["هانوي","سايغون","دار السلام","أنغكور وات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي لاوس؟', '["منطقة","نهر","دولة","مدينة"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'تقع صحراء سونوران في شرق أفريقيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي عاصمة الولايات المتحدة؟', '["واشنطن العاصمة","لوس أنجلوس، كاليفورنيا","مدينة نيويورك، نيويورك","هيوستن، تكساس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هو المتحف الوطني الذي ستجده في كوبرستاون، نيويورك؟', '["متحف المتروبوليتان للفنون","القاعة الوطنية لمشاهير البيسبول","القاعة الوطنية لمشاهير الألعاب","متحف الفن الحديث"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي عاصمة ولاية داكوتا الجنوبية؟', '["سيوكس فالز","رابيد سيتي","بيير","واترتاون"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي مما يلي ليس مدينة في المملكة العربية السعودية؟', '["الرياض","مكة","المدينة","دبي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي من هذه الدول ليست في أفريقيا؟', '["غيانا","السنغال","ليبيريا","الصومال"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي الدولة الأولى عالمياً من حيث عدد البراكين النشطة تاريخياً؟', '["اليابان","إندونيسيا","الولايات المتحدة الأمريكية","الهند"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'كم منطقة زمنية توجد في الصين؟', '["3","4","1","2"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي مدينة أوروبية تشتهر بلقب "مدينة النور"؟', '["روما","لندن","مدريد","باريس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما اسم إحدى اللغات الآرامية الحديثة التي يتحدث بها السكان اليهود من شمال غرب العراق؟', '["ليشانا ديني","هولاولا","ليشان ديدان","الآرامية الكلدانية الحديثة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي عاصمة بنغلاديش؟', '["خولنا","دكا","لندن","لاهور"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي من هذه الجزر الأربع هي الأكبر مساحة؟', '["بريطانيا العظمى","كوبا","بورنيو","مدغشقر"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'ما هي عاصمة بيرو؟', '["سانتياغو","مونتيفيديو","بوينس آيرس","ليما"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'كل الدول التالية لديها مطالبات رسمية بأراضٍ في القارة القطبية الجنوبية (أنتاركتيكا) باستثناء:', '["الولايات المتحدة","أستراليا","تشيلي","النرويج"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'أي من الدول التالية لا تعترف بأرمينيا كدولة مستقلة؟', '["إيران","باكستان","تركيا","أذربيجان"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_88, 'المجر (⁦Hungary⁩) هي الدولة الوحيدة في العالم التي يبدأ اسمها باللغة الإنجليزية بحرف ⁦H⁩.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;

