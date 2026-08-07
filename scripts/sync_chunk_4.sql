DO $$
DECLARE
  v_sync_id_59 uuid;
BEGIN
  SELECT id INTO v_sync_id_59 FROM quizzes WHERE title = 'عالم الحيوانات والتنوع الحيوي — الجزء 4' LIMIT 1;
  IF v_sync_id_59 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم الحيوانات والتنوع الحيوي — الجزء 4', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_59;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'أي من هذه الفصائل ليست منقرضة؟', '["تنين كومودو","أسد البحر الياباني","نمر تسمانيا","الغزال السعودي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو الاسم العلمي لطائر البادجي (الببغاء الأسترالي)‏؟', '["⁦Nymphicus hollandicus⁩","⁦Melopsittacus undulatus⁩","⁦Pyrrhura molinae⁩","⁦Ara macao⁩"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'أي حيوان كان جزءاً من تجربة استئناس روسية عام 1959‏؟', '["الحمام","الدببة","الثعالب","التمساح الأمريكي (الأليغيتور)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو متوسط عمر الأرنب الأليف؟', '["1-2 سنوات","4-7 سنوات","14-20 سنة","8-12 سنوات"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'الضباع أقرب صلة بالقطط منها بالكلاب.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هي أطول أفعى سامة في العالم؟', '["الأناكوندا الخضراء","الكوبرا الملك","تايبان البراري","ثعبان البحر أصفر البطن"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو الاسم العلمي للذئب الرمادي؟', '["⁦Canis Aureus⁩","⁦Canis Latrans⁩","⁦Canis Lupus⁩","⁦Canis Lupus Lycaon⁩"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'أين يعيش الحيوان الذي ينتمي لمنطقة الأعماق السحيقة (⁦Abyssopelagic⁩)‏؟', '["في الصحراء","على قمة جبل","داخل شجرة","في قاع المحيط"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'تمتلك النمور لون جلد واحد بالرغم من فرائها المخطط.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو سبب "ضحك" الضبع المرقط؟', '["الحماس","التوتر","العدوانية","الإرهاق"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو لون جلد الدب القطبي؟', '["أبيض","وردي","أسود","أخضر"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما هو الاسم العلمي للفهد (الشيتا)‏؟', '["⁦Panthera onca⁩","⁦Lynx rufus⁩","⁦Felis catus⁩","⁦Acinonyx jubatus⁩"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ما اسم البروتين الغني بالنحاس الذي يجعل دم أخطبوط القطب الجنوبي أزرق اللون؟', '["هيموسيانين","سيتوكروم","الحديد","ميثيونين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'أي الفصائل التالية يطلق عليها اسم "دجاج الجبل"؟', '["دجاجة","ضفدع","حصان","ذبابة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ماذا تعني كلمة "فرس النهر" (⁦Hippopotamus⁩) وبأي لغة؟', '["حصان النهر (اللاتينية)","خنزير سمين (اليونانية)","حصان النهر (اليونانية)","خنزير سمين (اللاتينية)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'أي من سلالات الكلاب سميت على اسم منطقة في كرواتيا؟', '["بكينيز","تشيواوا","بوميرانيان","دالميشن (الكلب المرقّط)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'إلى أي طائفة من الحيوانات ينتمي سمندل الماء (⁦Newt⁩)‏؟', '["البرمائيات","الأسماك","الزواحف","الثدييات"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'من يصيب مرض الهزال المزمن (⁦CWD⁩) حصرياً من فصائل الحيوانات؟', '["أشباه البشر (البشريات)","الأيليات (الغزلان)","السنوريات (القططيات)","الكلبيات"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'ماذا يُسمى صغير الخفاش؟', '["شبل","فرخ","جرو","جدي"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_59, 'الأرانب من القوارض.', '["صحيح","خطأ"]'::jsonb, 1, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_60 uuid;
BEGIN
  SELECT id INTO v_sync_id_60 FROM quizzes WHERE title = 'عالم الحيوانات والتنوع الحيوي — الجزء 5' LIMIT 1;
  IF v_sync_id_60 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم الحيوانات والتنوع الحيوي — الجزء 5', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_60;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'على عكس معظم السلمندرات، أي جزء من سمندل الماء (⁦Newt⁩) يكون مسطحاً؟', '["الذيل","الرأس","الأسنان","الأقدام"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'ما هو الاسم الحقيقي للقط الغاضب (⁦Grumpy Cat⁩)‏؟', '["سوس","تاردار سوس (⁦Tardar Sauce⁩)","ميني","بروكلي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'سمندل المكسيك (الأكسولوتل) هو حيوان برمائي يمكنه قضاء حياته بأكملها في طور اليرقة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'تمتلك القطط شوارب (شعيرات حسية) خلف أرجلها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'الفيلة غير قادرة جسدياً على القفز.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'كم عدد فصائل الضباع الحية المعروفة؟', '["8","4","2","6"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'أي مما يلي عبارة عن مستعمرة من الكائنات المجهرية (⁦Polyps⁩) وليس قنديل بحر حقيقي؟', '["دبور البحر","إيروكاندجي","رجل الحرب البرتغالي (⁦Portuguese Man-of-War⁩)","قرصع البحر (⁦Sea Nettle⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'الحمر الوحشية بيضاء اللون ولديها خطوط سوداء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'أي فصيلة من الدببة البنية ليست منقرضة؟', '["الدب البني السوري","دب كاليفورنيا الرمادي","دب الأطلس","الدب الرمادي المكسيكي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'دم البزّاقة (البزّاق) أخضر اللون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'خلد الماء (البلاتيبوس) من الثدييات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'متوسط عمر القط البري يتراوح بين 5 إلى 6 سنوات فقط.', '["صحيح","خطأ"]'::jsonb, 1, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'يمكن للأخطبوط المرور عبر أي فتحة تكون أكبر من منقاره.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'ما هو الاسم العلمي للإنسان المعاصر؟', '["⁦Homo Ergaster⁩ (إنسان العمل)","⁦Homo Sapiens⁩ (الإنسان العاقل)","⁦Homo Erectus⁩ (الإنسان المنتصب)","⁦Homo Neanderthalensis⁩ (إنسان نياندرتال)"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'حيوان "دجاج الجبل" هو في الواقع دجاجة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'كم تبلغ تقريباً كمية الطعام التي يتناولها قضاعة البحر (ثعلب الماء) يومياً مقارنة بوزن جسمه؟', '["10%","80%","45%","25%"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'يمكن لحيوان إسفنج البحر أن يمتلك قلباً.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'طائر الكاكابو هو ببغاء كبير الحجم، غير قادر على الطيران، ونشاطه ليلي. ما هو موطنه الأصلي؟', '["جنوب أفريقيا","نيوزيلندا","أستراليا","مدغشقر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_60, 'ما هو أسرع حيوان في العالم؟', '["العقاب الذهبي","الفهد (الشيتا)","صقر الشاهين","ذبابة الخيل"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_61 uuid;
BEGIN
  SELECT id INTO v_sync_id_61 FROM quizzes WHERE title = 'الأجهزة والتقنيات الحديثة — الجزء 1' LIMIT 1;
  IF v_sync_id_61 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الأجهزة والتقنيات الحديثة — الجزء 1', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_61;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'متى تم اختراع قرص الـ ⁦DVD⁩‏؟', '["1995","2000","1990","1980"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'في أي عام تم الكشف عن نظارة ''أوكولوس ريفت'' للجمهور عبر حملة على منصة كيك ستارتر؟', '["2010","2012","2011","2013"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'إلى ماذا يرمز الاختصار ⁦SSD⁩ في وحدات تخزين الكمبيوتر؟', '["جهاز تخزين البرمجيات","بيانات فائقة السرعة","قرص الحالة الصلبة","قرص النظام الآمن"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'في أي عام تم إصدار أول هاتف آيفون؟', '["2005","2006","2004","2007"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هي وحدة قياس المقاومة الكهربائية في النظام الدولي للوحدات؟', '["الأوم","الأمبير","السيمنز","الفولت"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'يعتبر هاتف آيفون ⁦3G⁩ الجيل الثاني من هواتف الآيفون.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هو المساعد الصوتي الافتراضي الذي طورته شركة أمازون؟', '["مساعد جوجل","سيري","أليكسا","كورتانا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هو اسم الآلة البسيطة التي تتكون من ذراع صلبة تتحرك بحرية حول نقطة ارتكاز ثابتة؟', '["الأسفين","البرغي","البكرة","الرافعة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'من بين جميع مكاكيك الفضاء التابعة لوكالة ناسا، ما هما المكوكان اللذان دُمِّرا في كوارث؟', '["تشالنجر وكولومبيا","إنتربرايز وأتلانتس","ديسكفري وإنديفور","لاشيء مما سبق"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هي الكلمة الشهيرة التي استخدمتها شركة آبل لوصف إزالتها لمنفذ سماعة الرأس؟', '["الابتكار","الشجاعة","الثورة","الجرأة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'من هو مهندس القوات الجوية ووكالة ناسا السابق الذي اخترع مسدس الماء الشهير ''سوبر سوكر'' (⁦Super Soaker⁩)‏؟', '["بروس داندراد","فرانسيس نورثكوت","لوني جونسون","أشيتي تريبي-أولينو"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'في أي دولة تأسست شركة ''بلاك بيري المحدودة'' (⁦BlackBerry Limited⁩) لبرمجيات وأجهزة الهواتف المحمولة؟', '["النرويج","الولايات المتحدة الأمريكية","المملكة المتحدة","كندا"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'متى تم إصدار أول مشغل أقراص مضغوطة (⁦CD player⁩) في الأسواق؟', '["1982","1983","1981","1980"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'على أي هاتف آيفون ظهر المساعد الصوتي ''سيري'' (⁦Siri⁩) من آبل لأول مرة؟', '["آيفون ⁦6S⁩","آيفون ⁦4S⁩","آيفون ⁦3GS⁩","آيفون ⁦5S⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هي أول أفعوانية من نوع ''إنفينيتي كوستر'' (⁦Infinity Coaster⁩) في العالم وأين تقع؟', '["مدغشقر ماد بيرسوت، موشنجيت دبي، الإمارات","غولد راش، سلاغهارين، هولندا","ذا سمايلر، ألتون تاورز، المملكة المتحدة","مونستر، أدفنتشرلاند ألتونا، الولايات المتحدة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'خلال المراحل الأولى من حرب فيتنام، كان لبندقية ⁦M16⁩ سمعة سيئة فيما يتعلق بقلة موثوقيتها وأعطالها المتكررة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هو أبرز مشروع جانبي دخلت فيه شركة ريمنغتون (⁦Remington⁩) الشهيرة للأسلحة النارية؟', '["الآلات الكاتبة","الخلاطات الكهربائية","مراوح السقف","مقابض الأبواب"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'أي من شركات الهواتف المحمولة التالية لا يقع مقرها الرئيسي في قارة آسيا؟', '["إل جي للإلكترونيات","نوكيا","سامسونج","إتش تي سي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'ما هي الشركة التي صنعت آلة الطبول الإلكترونية الشهيرة ⁦TR-808⁩‏؟', '["تيكنيكس","كورج","رولاند","كاسيو"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_61, 'متى بدأت الأقراص المضغوطة (⁦CD⁩) بالظهور في الأسواق الاستهلاكية؟', '["1992","1972","1962","1982"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_62 uuid;
BEGIN
  SELECT id INTO v_sync_id_62 FROM quizzes WHERE title = 'الأجهزة والتقنيات الحديثة — الجزء 2' LIMIT 1;
  IF v_sync_id_62 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الأجهزة والتقنيات الحديثة — الجزء 2', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_62;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هي الذخيرة (العيار) التي تطلقها بندقية ⁦M1 Garand⁩ التي استخدمت في الحرب العالمية الثانية؟', '[".30-06",".308","⁦7.62⁩","⁦7.62x51mm⁩"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ماذا تسمى أجهزة التتبع (المحطات القاعدية) المستخدمة مع نظارة الواقع الافتراضي ⁦HTC Vive⁩‏؟', '["الحركة","المنارة","الكوكبة","أجهزة التتبع"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'إلى ماذا يرمز الاختصار ⁦GPS⁩‏؟', '["النظام الشخصي العالمي","نظام تحديد المواقع العام","نظام تحديد المواقع العالمي","القمر الصناعي الشخصي العام"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'يستخدم هاتف ''ويسترن إليكتريك موديل 500'' (⁦Western Electric Model 500⁩) الاتصال بالنغمة لطلب الأرقام الهاتفيّة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'كيف يقوم جهاز الطرد المركزي بفصل الجسيمات الثقيلة عن الخفيفة؟', '["الدوران","الاهتزاز","الغربلة","التأيين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هو جهاز ''ميتسوبيشي واكامارو'' (⁦Mitsubishi Wakamaru⁩)‏؟', '["شاحنة بيك آب","روبوت","دراجة نارية","قارب بمحرك"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'من صنع أول جهاز ليزر في العالم؟', '["نيكولا تسلا","جاك كيلبي","ثيودور هارولد ميمان","إيديث كلارك"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'يرمز بروتوكول الاتصال ⁦NFC⁩ إلى ''⁦Near-Field Control⁩'' (التحكم في المجال القريب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هي رصاصة العيار الأساسي التي تستخدمها بندقية كلاشينكوف ⁦AK-47⁩ الكلاسيكية؟', '["⁦7.62x39⁩ ملم","⁦7.62x51⁩ ملم","⁦5.56x45⁩ ملم","⁦5.45x39⁩ ملم"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'أي مما يلي هو التردد القياسي لقطع مضخم الصوت (⁦Subwoofer Crossover Frequency⁩) المعتمد من ⁦THX⁩‏؟', '["70 هرتز","80 هرتز","90 هرتز","100 هرتز"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'اخترعت شركة ⁦iRobot⁩ مكنستها الكهربائية الثورية لتنظيف الأرضيات ''رومبا'' (⁦Roomba⁩) لأول مرة في عام 2002.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'أي من الأجهزة التالية يُستخدم لقياس ضغط الدم؟', '["البارومتر (مقياس الضغط الجوي)","المسطرة","مقياس هيموإريثرومتر","مقياس ضغط الدم"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'متى تم إصدار الحيوان الأليف الرقمي ''تاماجوتشي'' (⁦Tamagotchi⁩) لأول مرة؟', '["1996","1989","1992","1990"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'أي مما يلي ليس نوعاً من أنواع فئران الكمبيوتر (الماوس)‏؟', '["فأرة الأسطوانة","فأرة السموذي","فأرة كرة التتبع","الفأرة الضوئية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هي منصة ألعاب الفيديو (الكونسول) التي طورتها شركة سوني؟', '["إكس بوكس","أتاري","بلايستيشن","نينتندو سويتش"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هي الشركة التي صممت صيغة أشرطة الفيديو ''بيتاماكس'' (⁦Betamax⁩)‏؟', '["باناسونيك","إل جي","فوجيتسو","سوني"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'من هو أول من صاغ مصطلح ''البطارية'' (⁦Battery⁩) لوصف جهاز تخزين الكهرباء؟', '["بنجامين فرانكلين","نيكولا تسلا","لويجي جلفاني","أليساندرو فولتا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'ما هي الشركة التي طورت نظارة الواقع المختلط ''هولولينز'' (⁦HoloLens⁩)‏؟', '["إتش تي سي","مايكروسوفت","أوكولوس","توبي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'لا يقتصر استخدام الميكروفونات على التقاط الصوت فحسب، بل يمكن استخدامها أيضاً لإخراج الصوت وإصداره بشكل مشابه لمكبر الصوت.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_62, 'من الذي نال براءة اختراع لمحرك بخاري ينتج حركة دورانية مستمرة؟', '["نيكولا تسلا","ألبرت أينشتاين","أليساندرو فولتا","جيمس واط"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_63 uuid;
BEGIN
  SELECT id INTO v_sync_id_63 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 1' LIMIT 1;
  IF v_sync_id_63 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 1', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_63;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'أي من الدول التالية لم تكن طرفاً محارباً في الحرب العالمية الأولى؟', '["الدنمارك","البرتغال","اليونان","رومانيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'يحتوي منتج "تشيز ويز" من كرافت على مستنبتات الجبن، ولكنه لا يحتوي على جبن حقيقي في الواقع.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هي الشركة المالكة لخدمة أوتلوك؟', '["جوجل","أبل","مايكروسوفت","ياهو"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'منتجعات وفيلات العطلات "دي إيمهوف" و"بورت زيلاند" و"هيت هايدربوس" مملوكة لأي شركة؟', '["يلو فيليج","كيكامب","فيلا بلس","سنتر باركس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما معنى كلمة "أستازيا" (⁦Astasia⁩) من بين الخيارات التالية؟', '["عدم القدرة على الوقوف","عدم القدرة على اتخاذ القرارات","عدم القدرة على التركيز في أي شيء","رغبة حمى شديدة في تمزيق الملابس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هو الاسم الذي يطلق في لعبة البوكر على اليد التي تحتوي على ثلاث بطاقات من نفس النوع وبطاقتين متطابقتين (زوج)‏؟', '["فلاش","فول هاوس","ستريت","هايت كارد"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'من هو الرئيس الأمريكي الذي لا توجد صورته على جبل راشمور؟', '["ثيودور روزفلت","أبراهام لينكولن","جون كينيدي","توماس جيفرسون"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هي اللعبة الأكثر مبيعاً لعام 1983 والتي سببت هوساً كبيراً أدى إلى اندلاع أعمال شغب في المتاجر؟', '["المتحولون","كير بيرز","مكعب روبيك","دمى كابج باتش كيدز"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'أي من اللغات التالية ليست لغة هندوأوروبية؟', '["المجرية","الروسية","اليونانية","اللاتفية"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'متى تأسس موقع "يوتيوب"؟', '["22 مايو 2004","14 فبراير 2005","12 سبتمبر 2005","19 يوليو 2009"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'سلسلتا مطاعم الوجبات السريعة "كارلز جونيور" و"هارديز" مملوكتان للشركة نفسها.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'من ماذا تُصنع قبعات بنما الشهيرة؟', '["الحرير","القنب","الكتان","القش"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'من أي بلد يأتي السوشي والكاريوكي؟', '["اليابان","الصين","كوريا الجنوبية","فيتنام"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما اسم الدواسة الإضافية في السيارات ذات ناقل الحركة اليدوي (القير العادي)‏؟', '["مغير السرعة","القابض (الكلتش)","المعزز","فرامل اليد"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هي الكلمة التي ينتهي بها شعار صحيفة نيويورك تايمز: "كل الأخبار الصالحة لـ..."؟', '["الاستيعاب","الرؤية","النشر","القراءة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هي العبارة اللاتينية التي تُترجم تقريباً إلى "اغتنم اليوم"؟', '["مومينتو موري","بلس ألترا","سيك سيمبر تيرانبس","كاربي ديم"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'أي من المواد الكيميائية التالية توجد في بذور الباذنجان؟', '["النيكوتين","الميسكالين","السيانيد","السيبلوسيبين"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'ما هي تسمانيا？', '["نكهة آيس كريم من بين آند جيريز","ولاية أسترالية","اضطراب نفسي","اسم شخصية كرتونية من وارنر برذرز"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'متى تأسس موقع ريديت الشهير؟', '["2008","2004","2005","2006"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_63, 'في أي عام تم طرح جهاز آيبود الأول من شركة أبل؟', '["2000","1999","1998","2001"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_64 uuid;
BEGIN
  SELECT id INTO v_sync_id_64 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 10' LIMIT 1;
  IF v_sync_id_64 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 10', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_64;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو الاسم الحقيقي لقطة الإنترنت الشهيرة ''جرامبي كات''؟', '["تاردار سوس","ليل باب","مارو","كولونيل مياو"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو اللقب الرسمي الكامل لرئيس وزراء المملكة المتحدة؟', '["دوق كامبريدج","اللورد الأول للخزانة","المعارضة الوفية لجلالة الملكة","مدير عقارات التاج الملكي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو رمز برج الجوزاء الفلكي؟', '["السمك","الميزان","التوأم","العذراء"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'سلوفاكيا عضو في الاتحاد الأوروبي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'في المتوسط، يُقتل شخص واحد على الأقل كل ساعة في الولايات المتحدة بسبب سائق مخمور.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'كان ألبرت أينشتاين يواجه صعوبة في الرياضيات عندما كان في المدرسة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو الجبل الذي يملك أعلى قمة في أمريكا الشمالية؟', '["جبل سانت إلياس، الحدود الأمريكية الكندية","جبل لوغان، كندا","دينالي، الولايات المتحدة الأمريكية","بيكو دي أوريزابا، المكسيك"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'الماء ملون باللون الأزرق بشكل طبيعي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو الشعار الترويجي الأصلي لمشروب ماونتن ديو؟', '["ياهو! ماونتن ديو... سوف يداعب أحشاءك!","أعطني ديو","افعل الديو","احصل على شعور السير حافي القدمين عند شرب ماونتن ديو"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'اللغة الفرنسية هي لغة رسمية في كندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو متوسط عمر نملة الحدائق؟', '["24 ساعة","أسبوع واحد","15 عاماً","3 أعوام"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما اسم لوحة شفيق السيئة في حلقة سبونج بوب ''فنان مجهول''؟', '["استراحة شفيق","قطع ممزقة","منظور مائل","جريء ومتهور"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'بلوتو كوكب.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هي اللغة الأكثر تحدثاً في نصف الكرة الأرضية الجنوبي؟', '["الإنجليزية","البرتغالية","الإسبانية","الفرنسية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هي اللغة الرسمية في البرازيل؟', '["البرازيلية","الإسبانية","البرتغالية","الإنجليزية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما الاسم الذي أُطلق على الديكتاتوريين العسكريين اليابانيين الذين حكموا البلاد بين القرنين الثاني عشر والتاسع عشر؟', '["نينجا","ساموراي","شينوبي","شوغون"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'تم شراء موقع مشاركة الفيديوهات يوتيوب بالكامل من قِبل فيسبوك مقابل ⁦1.65⁩ مليار دولار أمريكي على شكل أسهم.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'ما هو الجبل الذي يملك أعلى قمة في أمريكا الجنوبية؟', '["أوخوس ديل سالادو، الحدود الأرجنتينية التشيلية","أكونكاغوا، الأرجنتين","مونتي بيسيس، الأرجنتين","هواسكاران، بيرو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'الباسودوبل (⁦Pasodoble⁩) هو نوع من صلصة المعكرونة الإيطالية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_64, 'كان لون كوكاكولا الأصلي أخضر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 19, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_65 uuid;
BEGIN
  SELECT id INTO v_sync_id_65 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 11' LIMIT 1;
  IF v_sync_id_65 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 11', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_65;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'أي من نجوم السينما لديه تمثال في ساحة ليستر (⁦Leicester Square⁩)‏؟', '["تشارلي تشابلن","بول نيومان","روان أتكينسون","ألفريد هيتشكوك"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'أي من المعالم التالية لا يقع في مدينة نيويورك؟', '["مبنى إمباير ستيت","نصب لينكون التذكاري","تايمز سكوير","سنترال بارك"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'أي دولة تضع علم الاتحاد البريطاني (⁦Union Jack⁩) في علمها؟', '["جنوب أفريقيا","كندا","نيوزيلندا","هونغ كونغ"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'ما هو الجبل الذي يملك أعلى قمة في أستراليا؟', '["جبل أوسا، تسمانيا","جبل بارتل فرير، كوينزلاند","جبل زيل، الإقليم الشمالي","جبل كوسيوسكو، نيوساوث ويلز"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'ما هي اللغة الرسمية والأكثر انتشاراً في كوبا؟', '["الإسبانية","البرتغالية","الفرنسية","الإيطالية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'كم عدد الحروف في الأبجدية الإنجليزية؟', '["28","26","23","24"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'كم سعرة حرارية توجد في علبة بيبسي كولا سعة 355 مل؟', '["200","100","150","155"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'من بين هذه المباني الأربعة، أيها الأطول بارتفاع 1,776 قدماً (⁦541.3⁩ متراً)‏؟', '["تايبيه 101، تايوان","برج ويليس، الولايات المتحدة","برج جين ماو، الصين","مركز التجارة العالمي الواحد، الولايات المتحدة"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'تُستخدم كلمة ''أناناس'' (⁦Ananas⁩) في معظم اللغات الأخرى للإشارة إلى فاكهة الأناناس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'أي مما يلي هو رمز اتحاد النقل الجوي الدولي (⁦IATA⁩) لمطار مانشستر؟', '["⁦EGLL⁩","⁦MAN⁩","⁦LHR⁩","⁦EGCC⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'في عام 2013، كم من الأموال خُسرت بسبب عمليات الاحتيال النيجيرية؟', '["95 مليون دولار","956 مليون دولار","⁦12.7⁩ مليار دولار","⁦2.7⁩ مليار دولار"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'خمسة دولارات تعادل كم قطعة من فئة النيكل؟', '["50","25","69","100"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'رهاب الـ ''زانثوفوبيا'' (⁦Xanthophobia⁩) هو الخوف من أي لون؟', '["الأصفر","الأزرق","الأحمر","الأخضر"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'من من المغنين وكتاب الأغاني الأمريكيين التاليين فاز بجائزة نوبل في الأدب؟', '["بادي هولي","بوب ديلن","جوني كاش","أليس كوبر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'إلى أي عائلة لغوية تنتمي اللغة الكازاخية؟', '["المغولية","الهندية الأوروبية","التركية","الأورالية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'ما هو المنتج الذي كانت تبيعه شركة الاتصالات ''نوكيا'' في الأصل؟', '["الهواتف","الحواسيب","المعالجات","الورق"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'أي من أدوات المائدة هي الأنسب لتناول الحساء (الشوربة)‏؟', '["الملعقة","الشوكة","السكين","عيدان تناول الطعام"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'في مقابلة مع قناة ⁦CBS⁩ عام 1994، ما هي الحركة الغريبة التي قام بها بيل غيتس، المؤسس المشارك لشركة مايكروسوفت، أمام الكاميرا؟', '["القفز للخلف فوق مكتب","القفز فوق كرسي مكتب","الوقوف على رأسه","الكتابة على لوحة المفاتيح أثناء الوقوف على اليدين"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'ما هو وزن سبائك الذهب في لعبة ''فول آوت: نيو فيغاس'' (⁦Fallout⁩: ⁦New Vegas⁩)‏؟', '["30 رطلاً","40 رطلاً","35 رطلاً","⁦32.50⁩ رطلاً"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_65, 'عندما يقال عن شخص إنه ''حسود''، فبأي لون يوصف عادةً؟', '["الأحمر","الأزرق","الأصفر","الأخضر"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_66 uuid;
BEGIN
  SELECT id INTO v_sync_id_66 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 12' LIMIT 1;
  IF v_sync_id_66 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 12', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_66;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'أي من هذه البنوك غير مخول بإصدار الأوراق النقدية في هونغ كونغ؟', '["⁦OCBC⁩","⁦HSBC⁩","ستاندرد تشارترد","بنك الصين"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'مشروب الويسكي الإسكتلندي والدامبوي (⁦Drambuie⁩) يكونان أي كوكتيل؟', '["سكرودرايفر","رستي نيل","سكس أون ذا بيتش","مانهاتن"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'في أي عام تأسست شركة آبل؟', '["1978","1980","1976","1974"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'القرآن هو الكتاب المقدس لأي من الديانات الإبراهيمية؟', '["المسيحية","اليهودية","الراستافارية","الإسلام"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'في أي عام توقفت كندا عن إنتاج قطعة السنت الواحد (البنس) المعدنية؟', '["2012","2013","2011","2010"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'كان ⁦SCP-173⁩ هو أول مقال عن ⁦SCP⁩ يُكتب لمشروع الخيال التعاوني القائم على الويب والمعروف باسم ''مؤسسة ⁦SCP⁩'' (⁦SCP Foundation⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'كان المعماري المعروف باسم ''لو كوربوزييه'' شخصية بارزة في أي طراز معماري؟', '["الكلاسيكية الجديدة","الباروك","الحداثة","النيوغوطية"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'متى تم طرح علكة هوبا بوبا (⁦Hubba Bubba⁩) لأول مرة؟', '["1984","1972","1980","1979"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, '''نادي الـ 27'' (⁦27 Club⁩) هو مصطلح يُستخدم للإشارة إلى قائمة من الممثلين والموسيقيين والفنانين المشهورين الذين توفوا في سن السابعة والعشرين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'أي نهر يتدفق عبر مدينة غلاسكو الإسكتلندية؟', '["تاي","كلايد","دي","تويد"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'إذا وُصف شعر شخص ما بأنه ''تيتيان'' (⁦Titian⁩)، فما هو لونه؟', '["الأشقر","البني","الأحمر","الأسود"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'كم عدد الأصابع (بدون الإبهام) في يد الإنسان الواحدة؟', '["خمسة","عشرة","ثمانية","أربعة"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'بعد كم عاماً يتم الاحتفال باليوبيل الكريستالي (ذكرى الزواج الكريستالية)‏؟', '["15","20","10","25"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'أي من هذه الألوان غير موجود في شعار جوجل؟', '["الأصفر","الوردي","الأزرق","الأخضر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'كم عدد المفاتيح (النوتات) في البيانو الكبير القياسي (⁦Grand Piano⁩)‏؟', '["98","108","88","78"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'ما هو العضو في الجسم الذي ينتج العصارة الصفراوية؟', '["المرارة","البنكرياس","المعدة","الكبد"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'ما هو الوصف الأنسب لـ ''كوادرانجولاريس ريفيرسوم'' (⁦Quadrangularis Reversum⁩)‏؟', '["آلة إيقاعية موسيقية","مبنى في جامعة أكسفورد","نقلة في الشطرنج","نظرية هندسية"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'مما تتكون أكلة الهاجيس (⁦Haggis⁩) الحقيقية؟', '["قلب وكليتي ورئتي الخروف","قلب وكبد ورئتي الخروف","كبد وكليتي وعيني الخروف","الخروف بأكمله"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_66, 'من بين هذه المباني الأربعة، أيها الأطول بارتفاع 2,717 قدماً (828 متراً)‏؟', '["برج شانغهاي، الصين","برج لوته العالمي، كوريا الجنوبية","برج خليفة، الإمارات العربية المتحدة","مركز بينغ آن المالي، الصين"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_67 uuid;
BEGIN
  SELECT id INTO v_sync_id_67 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 13' LIMIT 1;
  IF v_sync_id_67 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 13', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_67;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'أي دولة قامت بتطوير البندقية الهجومية كلاشينكوف (⁦AK-47⁩)‏؟', '["الاتحاد السوفيتي","إيران","إسرائيل","بولندا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'وفقاً لأغنية الأطفال، ما هي الفاكهة التي أخرجها ليتل جاك هورنر من فطيرة عيد الميلاد الخاصة به؟', '["التفاح","البرقوق","الخوخ","الكمثرى"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'في لعبة "كاتاماري داماسي"، تتحكم بشخصية تُعرف باسم:', '["فوجيو","إيتشيغو","الأمير","فومين"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'البخار الناتج عن السجائر الإلكترونية هو عبارة عن ماء في الواقع.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'يُعرف يوم 10 مارس أيضاً باسم يوم ماريو (⁦Mar10⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'أي من مكونات الدم التالية يُشكل سدادة لإغلاق الجروح عند موضع الإصابة؟', '["خلايا الدم الحمراء","الصفائح الدموية","خلايا الدم البيضاء","بلازما الدم"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'من هو مؤلف رواية "جوراسيك بارك" (حديقة الديناصورات)‏؟', '["بيتر بينشلي","تشاك بالاهنيوك","مايكل كرايتون","إيرفين ويلش"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'ما هي البوكيمونات الثلاثة المتاحة للبدء في لعبتي "بوكيمون بلاك آند وايت"؟', '["سنايفي، فينيكين، فروكي","تشيسبين، تيبيغ، فروكي","تشيسبين، فينيكين، أوشاووت","سنايفي، تيبيغ، أوشاووت"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'في التعبيرات الإنجليزية، عندما يوصف شخص بالجبن، يُقال إن لديه بطناً من أي لون؟', '["أصفر","أخضر","أحمر","أزرق"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'في أي عام اقترب مذنب هالي (الذي لن يظهر مجدداً حتى عام 2061) من الأرض في آخر ظهور له؟', '["2001","1986","1942","1909"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'في أنظمة الطيران، إلى ماذا يرمز الاختصار "⁦TCAS⁩"؟', '["نظام التنبيه للاتصالات المرورية","نظام محاذاة تكوين المرور","نظام تجنب التصادم الجوي","نظام اختصار إشارة نداء المرور"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'أي من المباني التالية يُعد مثالاً بارزاً على نمط العمارة الفنية "آرت ديكو" (⁦Art Deco⁩)‏؟', '["تايبيه 101","ون ديترويت سنتر","ويستيندشتراسه 1","مبنى نياجرا موهوك"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'ماذا يعني المصطلح الطبي "أبروسيكسيا" (⁦Aprosexia⁩)‏؟', '["عدم القدرة على التركيز على أي شيء","عدم القدرة على اتخاذ القرارات","رغبة هوسية في تمزيق ملابس المرء","عدم القدرة على الوقوف"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'الكلمة الفرنسية التي تعني "يسافر" هي "⁦Travail⁩".', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'وفقاً لسِفر التكوين في العهد القديم، كم يوماً استغرق خلق العالم؟', '["سبعة","واحد","ستة","اثنا عشر"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'أي من الأبراج الفلكية يُمثله السرطان؟', '["برج الميزان","برج العذراء","برج القوس","برج السرطان"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'في تحديد فصائل الدم، تُسمى الإشارة (+) أو (-) بعد فصيلة الدم (مثل ⁦A⁩ أو ⁦B⁩) بعامل ⁦Rh⁩ (الرايزيسي). ما هو مصدر تسميته واكتشافه؟', '["قرود الريسوس","مرضى الروماتيزم","ذوو الشعر الأحمر","الجذامير النباتية"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'اللون الـ "شارتريز" (⁦Chartreuse⁩) هو درجة لونية تقع بين الأصفر وأي لون آخر؟', '["الأحمر","الأخضر","الأسود","الأرجواني"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_67, 'ما هو عنوان أول مقطع فيديو تم رفعه على موقع يوتيوب على الإطلاق؟', '["تحية (⁦tribute⁩)","كاري تركب شاحنة (⁦carrie rides a truck⁩)","أنا في حديقة الحيوان (⁦Me at the zoo⁩)","جروها الجديد من الجد الأكبر فيرن (⁦Her new puppy⁩)"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_68 uuid;
BEGIN
  SELECT id INTO v_sync_id_68 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 14' LIMIT 1;
  IF v_sync_id_68 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 14', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_68;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هو اسم المشروب المصنوع من البطاطس أو الحبوب والذي يعود أصله إلى بولندا وروسيا؟', '["الفودكا","الأفسنتين","الرم","الساكي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'في الديناميكا الهوائية، ما هي القوة التي تدفع الجسم إلى الأعلى؟', '["قوة السحب","قوة الرفع","الوزن","قوة الدفع"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'محطة أمستردام المركزية للقطارات توأمت مع أي محطة？', '["فرانكفورت الرئيسية","باريس غار دو نورد","لندن ليفربول ستريت","بروكسل ميدي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'توفي ستيف جوبز، الشريك المؤسس لشركة آبل، بسبب مضاعفات أي نوع من أنواع السرطان؟', '["سرطان العظام","سرطان الكبد","سرطان المعدة","سرطان البنكرياس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'إلى ماذا يرمز حرف الـ "⁦S⁩" في اختصار "⁦SIM⁩" الخاص ببطاقة الهاتف (⁦SIM card⁩)‏؟', '["المشترك (⁦Subscriber⁩)","فردي (⁦Single⁩)","آمن (⁦Secure⁩)","صلب (⁦Solid⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'كانت شركة "ستيج كوتش" (⁦Stagecoach⁩) تمتلك شركة "ساوث ويست ترينز" للقطارات قبل أن تفقد حقوق تشغيلها لصالح شركتي "فيرست جروب" و"⁦MTR⁩" في مارس 2017.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'أي من الأبراج الفلكية يقع بين برجي العذراء والعقرب؟', '["برج الجوزاء","برج الثور","برج الميزان","برج الجدي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'في أي جيل من ألعاب سلسلة بوكيمون الرئيسية ظهر النوع "الخرافي" (⁦Fairy⁩) لأول مرة؟', '["الجيل الثاني","الجيل السابع","الجيل الرابع","الجيل السادس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'في أي مدينة بأمريكا الجنوبية نشأت عصابة (كارتيل) المخدرات التي كان يديرها بابلو إسكوبار؟', '["ميديلين","بوغوتا","كيتو","كالي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هي سرعة طيران طائر السنونو (بدون حمولة) بالسرعة الجوية؟', '["15 ميل في الساعة","24 ميل في الساعة","20 ميل في الساعة","200 ميل في الساعة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ماذا تعني ممارسة الـ "نيفيلوكوكيجيا" (⁦Nephelococcygia⁩)‏؟', '["النوم بأعين مفتوحة","تحطيم الزجاج بنبرة الصوت","رؤية وتخيل أشكال وصور في السحب","السباحة في مياه متجمدة"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'متى تم إطلاق جهاز بلايستيشن 3 (⁦PlayStation 3⁩) لأول مرة؟', '["8 يناير 2007","25 ديسمبر 2007","16 يوليو 2006","11 نوفمبر 2006"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هو العنصر الكيميائي الذي يحمل الرقم الذري 11 في الجدول الدوري ورمزه (⁦Na⁩)‏؟', '["الصوديوم","الكربون","الرصاص","النيتروجين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'في الماضي، ماذا كان يحتفظ الرجل الأنيق عادةً في جيبه الصغير المخصص لذلك (⁦fob pocket⁩)‏؟', '["نقود","ساعة","مفاتيح","دفتر ملاحظات"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هو نوع المشروب المكسيكي الشهير "كورونا" (⁦Corona⁩)‏؟', '["إنديا بايل آيل (⁦IPA⁩)","بيلسنر (⁦Pilsner⁩)","لاجر خفيف (⁦Pale Lager⁩)","بالتيك بورتر (⁦Baltic Porter⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'في أي عام تم تأسيس سلسلة مطاعم ماكدونالدز؟', '["1964","1951","1947","1955"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هو الاسم الذي يمثل حرف "⁦M⁩" في أبجدية الناتو الصوتية؟', '["مايك (⁦Mike⁩)","ماثيو (⁦Matthew⁩)","مارك (⁦Mark⁩)","ماكس (⁦Max⁩)"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'من هو الشخص الذي يظهر وجهه باللونين الأبيض والأسود في رمز "كابا" (⁦Kappa⁩) التعبيري الشهير على منصة تويتش؟', '["جاستن ديسينو","جوش ديسينو","جون ديسينو","جيمي ديسينو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_68, 'ما هي الصفة المميزة للشخص الذي يوصف بـ "⁦hirsute⁩" باللغة الإنجليزية؟', '["فظ أو وقح","مرح أو مضحك","كثير الشعر","طويل القامة"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_69 uuid;
BEGIN
  SELECT id INTO v_sync_id_69 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 15' LIMIT 1;
  IF v_sync_id_69 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 15', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_69;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'ما هو الخوف المعروف بـ "التريبوفوبيا" (⁦Trypophobia⁩)？', '["الخوف من الثقوب الصغيرة المتجمعة","الخوف من السباحة في المياه العميقة","الخوف من التحدث أمام الجمهور","الخوف من تناول الطعام بكثرة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'ما هي المكسرات المستخدمة بشكل أساسي في صناعة حلوى "المرزبان" (⁦Marzipan⁩)‏؟', '["الفول السوداني","اللوز","عين الجمل (الجوز)","الفستق"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أي من أنواع المشروبات التالية يحتوي عادةً على نسبة أعلى من المتوسط من نبات الجنجل (⁦Hops⁩)‏؟', '["ستوت (⁦Stout⁩)","إكسترا سبيشال بيتر (⁦ESB⁩)","إنديا بايل آيل (⁦India Pale Ale⁩)","سكوتش آيل (⁦Scotch Ale⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'من أي سلالة كلاب يأتي "هاندسوم دان" (⁦Handsome Dan⁩)، وهو جالب الحظ الرسمي لجامعة ييل؟', '["يوركشاير تيرير","بوكسر","باغ (⁦Pug⁩)","بولدوغ (⁦Bulldog⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'تم بيع مشروب "كريستال بيبسي" (⁦Crystal Pepsi⁩) لأول مرة في الأسواق الأمريكية في عام 1993.', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'لأي معدن يُعد منجم "إل تينيينتي" (⁦El Teniente⁩) الواقع في تشيلي أكبر منجم تحت الأرض في العالم؟', '["الحديد","النحاس","النيكل","الفضة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أي مما يلي يصف ترتيب الكلمات الصحيح في الجملة اليابانية؟', '["فاعل - فعل - مفعول به (⁦Subject Verb Object⁩)","فعل - فاعل - مفعول به (⁦Verb Subject Object⁩)","فاعل - مفعول به - فعل (⁦Subject Object Verb⁩)","فعل - مفعول به - فاعل (⁦Verb Object Subject⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'ما هي الكلمة الصينية المكتوبة بالحروف اللاتينية والتي تعني "طائرة"؟', '["كيتشي (⁦Qiche⁩)","زونغشيان (⁦Zongxian⁩)","هواجايين (⁦Huojian⁩)","فيجي (⁦Feiji⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'صوّتت اسكتلندا لتصبح دولة مستقلة خلال الاستفتاء الذي أُجري في سبتمبر 2014.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'ما هي الكلمة الإيطالية التي تعني "طماطم"؟', '["آليو (⁦Aglio⁩)","بومودورو (⁦Pomodoro⁩)","تشيبولا (⁦Cipolla⁩)","بيبيرونشينو (⁦Peperoncino⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'سُمي لباس البحر "البيكيني" بهذا الاسم نسبةً إلى "جزيرة بيكيني الحلقية" (⁦Bikini Atoll⁩)، حيث أجرت الولايات المتحدة تجارب للقنابل الذرية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'وفقاً لهيئة العمل العادل الأسترالية (⁦Fair Work⁩)، كم سنة يجب أن تعمل في نفس الوظيفة لتستحق إجازة الخدمة الطويلة (⁦Long Service Leave⁩)‏؟', '["سنتان","8 سنوات","6 أشهر","7 سنوات"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'ما هو الاسم العامي الذي تُعرف به عملة الدولار الكندي المعدنية؟', '["لوني (⁦Loonie⁩)","بولي (⁦Boolie⁩)","فولي (⁦Foolie⁩)","مودي (⁦Moodie⁩)"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'حساء "الغامبو" (⁦Gumbo⁩) هو يخنة نشأت في الأصل في ولاية لويزيانا الأمريكية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, '"⁦A3⁩" و"⁦B1⁩" و"⁦Legal⁩" هي تسميات قياسية شائعة لمقاسات أي من الأشياء التالية؟', '["الطائرات","كتب القانون","الورق","شاشات الهواتف"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أي من هذه الشركات السويدية تأسست في عام 1943‏؟', '["إتش آند إم (⁦H⁩&⁦M⁩)","ليندكس (⁦Lindex⁩)","كلاس أولسون (⁦Clas Ohlson⁩)","إيكيا (⁦IKEA⁩)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أُطلقت لعبة الأطفال الشهيرة "فيربي" (⁦Furby⁩) لأول مرة في عام 1998.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أي من جامعات رابطة اللبلاب (⁦Ivy League⁩) التالية كُتب شعارها الرسمي باللغة العبرية واللاتينية معاً؟', '["جامعة برينستون","جامعة ييل","جامعة هارفارد","جامعة كولومبيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_69, 'أي من الرموز التالية كان يُعتبر في الماضي الحرف السابع والعشرين في الأبجدية الإنجليزية؟', '["علامة الاستفهام والتعجب المدمجة (⁦Interrobang⁩)","علامة المدة (⁦Tilde⁩)","علامة العطف & (⁦Ampersand⁩)","علامة الفقرة (⁦Pilcrow⁩)"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_70 uuid;
BEGIN
  SELECT id INTO v_sync_id_70 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 16' LIMIT 1;
  IF v_sync_id_70 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 16', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_70;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'في أي عام تم إطلاق موقع "فيسبوك" (⁦Facebook⁩)‏؟', '["2004","2005","2003","2006"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'في أي عام تأسس تطبيق التواصل الشهير "واتساب" (⁦WhatsApp⁩)‏؟', '["2007","2009","2012","2010"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما هي الدولة الثالثة في العالم التي افتتحت مطعماً لسلسلة "ماكدونالدز"؟', '["اليابان","فرنسا","كوستاريكا","أستراليا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'مرض السرطان في حد ذاته ليس مرضاً معدياً.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما هي الدولة -باستثناء اليابان- التي تضم أكبر عدد من الأشخاص من أصول يابانية؟', '["البرازيل","الصين","كوريا الجنوبية","الولايات المتحدة الأمريكية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما اسم جماعة الأشرار في لعبة "دانغانرونبا أنوذر إبيسود: أولترا ديسبير غيرلز" (⁦Danganronpa Another Episode⁩: ⁦Ultra Despair Girls⁩)‏؟', '["مونوكوبس","محاربو الأمل","محاربو اليأس","اليأس المطلق"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما هي الشركة التي طورت برنامج الفوكالويد الشهير "هاتسوني ميكو"؟', '["سيجا","سوني","كريبتون فيوثر ميديا","مؤسسة ياماها"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'أي مما يلي ليس من تصميمات السيوف الأوروبية التقليدية؟', '["فالشيوني","أولفبرت","فلامبيرج","السيف المقوس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'من أي دولة أوروبية نشأت سلطة الكولسلو؟', '["هولندا","المملكة المتحدة","الدنمارك","ألمانيا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'أي من ألعاب مارفل التالية تم إصدارها على جهاز بلايستيشن 2‏؟', '["سيلفر سيرفر","سبايدرمان 2","هوارد ذا داك","ولفرين: أدامانتيوم ريج"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'إذا قال لك شخص ما بالإنجليزية "أنت أوليد" (⁦you are olid⁩)، فماذا يعني ذلك؟', '["بنيتك ضعيفة أو لست في حالة بدنية جيدة.","مظهرك منفر.","رائحتك كريهة للغاية.","أنت شخص غير مفهوم أو أحمق."]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما هي العملة الرسمية لدولة لاوس؟', '["الروبل","الكونرا","الدولار","الكيب"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ما هي الخطوة في عملية التنفس الخلوي التي تنتج جزيئات الـ ⁦ATP⁩‏؟', '["الفسفرة التأكسدية","التحلل السكري","أكسدة البيروفات","دورة كالفن"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'شركات فيرجن للقطارات، وفيرجن أتلانتيك، وفيرجن ريسينغ، هي جميعها شركات مملوكة لأي رجل أعمال شهير؟', '["ألان شوجر","ريتشارد برانسون","دونالد ترامب","بيل غيتس"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'من هو مؤسس الباستافاريانية (ديانة وحش السباغيتي الطائر)‏؟', '["إريك تيغنور","بيل ناي","بوبي هندرسون","زاك سولدي"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'تأتي كلمة "⁦news⁩" (أخبار) من الحروف الأولى للاتجاهات الأربعة الرئيسية على البوصلة (الشمال، الشرق، الغرب، الجنوب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'كانت فوانيس الهالوين الأصلية (⁦Jack-o-Lanterns⁩) تُصنع في الأصل من اللفت المجوف.', '["صحيح","خطأ"]'::jsonb, 0, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'ارتفعت شهرة منتج الموسيقى الإلكترونية "كايغو" (⁦Kygo⁩) بشكل كبير بعد ريمكس معين، ما هي الأغنية التي قام بإعادة توزيعها؟', '["مارفين غي - سيكشوال هيلينغ","إيد شيران - آي سي فاير","كولدبلاي - ميدنايت","آ-ها - تيك أون مي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_70, 'كم عدد المقاطع اللفظية التي تتكون منها قصيدة الهايكو؟', '["15","10","17","21"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_71 uuid;
BEGIN
  SELECT id INTO v_sync_id_71 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 17' LIMIT 1;
  IF v_sync_id_71 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 17', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_71;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هي الكلمة الإسبانية التي تعني "حمار"؟', '["بورو","كابايو","تورو","بيرو"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'تستخدم الإكوادور البيزو المكسيكي كعملة رسمية لها.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'أي من هذه الكلمات الإنجليزية تعني "متفرج كسول أو فضولي"؟', '["⁦Gossypiboma⁩","⁦Jentacular⁩","⁦Gongoozler⁩","⁦Meupareunia⁩"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو نوع الألعاب أو الوسائط التي يراجعها موقع "شات أب آند سيت داون" (⁦Shut Up⁩ & ⁦Sit Down⁩)‏؟', '["البرامج التلفزيونية","ألعاب الفيديو","الأفلام","الألعاب اللوحية"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'أي مغالطة منطقية تعني مهاجمة شخصية الخصم بدلاً من مناقشة حججه؟', '["مغالطة الشخصنة (⁦Ad hominem⁩)","مغالطة التزامن (⁦Post hoc ergo propter hoc⁩)","مغالطة \"وأنت كذلك\" (⁦Tu quoque⁩)","مغالطة التوسل بالأغلبية (⁦Argumentum ad populum⁩)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو أقصر شهر في السنة؟', '["ديسمبر","فبراير","أبريل","سبتمبر"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما الذي حظرته منطقة كتالونيا ذاتية الحكم في إسبانيا عام 2010، ودخل حيز التنفيذ في عام 2012‏؟', '["المهرجانات الشعبية","رقص الفلامنكو","مصارعة الثيران","موسيقى المارياتشي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'أي شركة تصنيع سيارات إيطالية حصلت على حصة الأغلبية في شركة كرايسلر الأمريكية لصناعة السيارات في عام 2011‏؟', '["مازيراتي","ألفا روميو","فيراري","فيات"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'يعتبر حوض بادواتر في وادي الموت أخفض نقطة في أمريكا الشمالية، فكم قدماً يبلغ انخفاضه تحت مستوى سطح البحر؟', '["282 قدماً","79 قدماً","1,640 قدماً","12,092 قدماً"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو الاسم الذي يطلق على رأس السنة اليهودية؟', '["إيلول","روش هاشانا","رأس السنة الجديدة","سوكوت"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو اللقب الشهير لولاية كاليفورنيا الأمريكية؟', '["ولاية أشعة الشمس","ولاية الخليج","الولاية الذهبية","ولاية الكنز"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'إلى ماذا يرمز حرف الـ ⁦F⁩ في مكتب التحقيقات الفيدرالي (⁦FBI⁩)‏؟', '["أجنبي","رسمي","أول","فيدرالي"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو المصطلح الأكثر شيوعاً للتعبير عن محيط الدائرة؟', '["المحيط","القطر","نصف القطر","القوس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'في اللغات الاسكندنافية، يعني حرف ⁦Å⁩ "نهر".', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'هذه هي الطريقة الصحيحة لكتابة الكلمة الإنجليزية الشهيرة "⁦Supercalifragilisticexpialidocious⁩".', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'أي من الأشهر التالية يحتوي على أكبر عدد من الأيام؟', '["أبريل","سبتمبر","نوفمبر","ديسمبر"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هو اللون الذي يعتبر اللون الموف (الخبازي) درجة من درجاته، والمسمى نسبة إلى زهرة الخبازى؟', '["البنفسجي","الأحمر","البني","الوردي"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما هي الكلمة الفرنسية التي تعني "سمكة"؟', '["⁦fiche⁩","⁦poisson⁩","⁦escargot⁩","⁦mer⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_71, 'ما كان اسم فريق المصارعة الثنائي الشهير في اتحاد ⁦WWF⁩ والمكون من المصارعين "أكس" و"سماش"؟', '["ذا دريم تيم","ذا بوشواكرز","ديموليشن","ذا بريتيش بولدوغز"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_72 uuid;
BEGIN
  SELECT id INTO v_sync_id_72 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 18' LIMIT 1;
  IF v_sync_id_72 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 18', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_72;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'أي من المؤسسين المشاركين لشركة الواقع الافتراضي "أوكولوس في آر" (⁦Oculus VR⁩) توفي في حادث سيارة مأساوي عام 2013‏؟', '["أندرو سكوت ريس","نيت ميتشل","جاك مكاولي","بالمر لوكي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هي سلسلة مطاعم الوجبات السريعة التي تمتلك أكبر عدد من الفروع عالمياً؟', '["ستاربكس","صَب واي","ماكدونالدز","كي إف سي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'في اليونان القديمة، إذا كانت وظيفتك هي "هيبوس" (⁦hippeus⁩)، فماذا كنت لتمتلك؟', '["نول حياكة","قيثارة","حصان","قارب"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هي الكلمة الروسية المكتوبة بالأحرف اللاتينية والتي تعني "الشتاء"؟', '["⁦Leto⁩","⁦Vesna⁩","⁦Osen⁩","⁦Zima⁩"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هو الموقع الإلكتروني الأكثر زيارة من بين هذه الخيارات؟', '["جوجل","يوتيوب","فيسبوك","ويكيبيديا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'أي من الشخصيات التالية ليس مقدماً لبرنامج على إذاعة ⁦NPR⁩ الأمريكية؟', '["تيري غروس","بين شابيرو","إيرا غلاس","بيتر ساغال"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'يُصنع "رصاص" قلم الرصاص عادة من الجرافيت وليس من معدن الرصاص.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هي الكلمة الفرنسية التي تعني "قبعة"؟', '["⁦Bonnet⁩","⁦Écharpe⁩","⁦Casque⁩","⁦Chapeau⁩"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'من هو مؤسس أكاديمية خان التعليمية؟', '["سال خان","بين خان","كيت خان","أديل خان"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ماذا يرمز حرف الـ "⁦G⁩" في مصطلح "جي-مان" (⁦G-Man⁩)‏؟', '["مستمر","حكومة","شبح","جيرونيمو"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هو الشيء الذي يمثل الخوف المرضي غير العقلاني منه ما يعرف بـ "فوبيا البرق والرعد" (⁦Astraphobia⁩)‏؟', '["المطر","الرياح","الرعد","الثلج"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما الاسم الأصلي الذي أطلق في البداية على محرك البحث "جوجل"؟', '["كات مساج","سيرش برو","نتسكيب نافيجيتور","باك رب"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'كم عدد الفيرلونغ (وحدة قياس مسافة) في الميل الواحد؟', '["ثمانية","اثنان","أربعة","ستة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ينجذب الثيران إلى اللون الأحمر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'صورة أي رئيس أمريكي مطبوعة على ورقة النقد النادرة من فئة الدولارين؟', '["مارتن فان بيورين","أوليسيس غرانت","توماس جيفرسون","جون كوينسي آدامز"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما ترجمة العبارة اللاتينية الشهيرة "⁦Veni⁩, ⁦vidi⁩, ⁦vici⁩" باللغة العربية؟', '["لا أرى شراً، لا أسمع شراً، لا أتكلم شراً","الحياة والحرية والسعادة","الماضي والحاضر والمستقبل","أتيت، ورأيت، وانتصرت"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'ما هي وسادة "داكيماكورا" (⁦dakimakura⁩)‏؟', '["وسادة الجسم","وجبة صينية تتكون بشكل أساسي من السمك","وضعية من وضعيات اليوجا","كلمة تُستخدم لوصف شخصين يحبان بعضهما بصدق"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'تعتبر "نظرية الملاعق" (⁦Spoon theory⁩) نموذجاً تعبيرياً يستعين بـ "الملاعق" كرمز لمقدار الطاقة اليومية المتاحة للشخص.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_72, 'كل كم سنة يتم منح ميدالية فيلدز، التي تعد واحدة من أرفع الجوائز في مجال الرياضيات؟', '["3","5","4","6"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_73 uuid;
BEGIN
  SELECT id INTO v_sync_id_73 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 19' LIMIT 1;
  IF v_sync_id_73 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 19', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_73;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'يرمز اسم القناة التلفزيونية البريطانية التجارية ⁦ITV⁩ إلى "⁦International Television⁩" (التلفزيون الدولي).', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'في أي عام تم صياغة مصطلح "عالم" (⁦scientist⁩) لأول مرة؟', '["1933","1833","1942","1796"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'أي من الأبراج الفلكية يمثله الميزان؟', '["برج الحمل","برج الجدي","برج الميزان","برج القوس"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'هل الكلب من الثدييات؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'على لوحة الهدف في لعبة السهام المريشة (الدارتس)، ما الرقم المقابل مباشرة للرقم 1‏؟', '["19","20","12","15"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'كم عدد النجوم الموجودة على علم الاتحاد الأوروبي؟', '["10","12","14","16"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'أي من المناسبات التالية لا يُحتفل بها عادة في شهر ديسمبر؟', '["عيد الميلاد","عيد الكوانزا","عيد الشكر","عيد الأنوار"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'في أي شهر يُحتفل بشهر تاريخ السود في الولايات المتحدة الأمريكية؟', '["مايو","نوفمبر","أغسطس","فبراير"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'من هو صاحب مقولة "ما لا يقتلك يجعلك أقوى"؟', '["فريدريش نيتشه","جي جوردون ليدي","كيلي كلاركسون","كريستوفر هيتشنز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'أي كوكب لم يُسمَّ تيمناً بإله يوناني أو روماني؟', '["المشتري","الأرض","المريخ","عطارد"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'أي دولة تضم أكبر عدد من مصانع جعة التراپيست؟', '["هولندا","فرنسا","بلجيكا","الولايات المتحدة الأمريكية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'من أين تأتي مياه زجاجات مياه "بولاند سبرينغ"؟', '["هسن، ألمانيا","مازوفيا، بولندا","بافاريا، بولندا","مين، الولايات المتحدة"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'وفقاً لمراكز السيطرة على الأمراض والوقاية منها (⁦CDC⁩) في الولايات المتحدة، يموت شخص واحد من بين كل كم أمريكي سنوياً بسبب التدخين؟', '["خمسة","عشرين","عشرة","مئة"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'في لغة مورس، ما هو الحرف الذي يرمز إليه بثلاث نقاط؟', '["⁦O⁩","⁦S⁩","⁦A⁩","⁦C⁩"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'ما هو مركب ⁦H2O⁩‏؟', '["الأكسجين","الهيدروجين","الماء","لا شيء مما سبق"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'متى تم إصدار لعبة بونغ (⁦Pong⁩)‏؟', '["29 مارس 2017","29 نوفمبر 1970","14 ديسمبر 1974","29 نوفمبر 1972"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'ماذا يطلق البحارة على الجانب الأيسر من القارب أو السفينة؟', '["بورت (⁦Port⁩)","ستاربورد (⁦Starboard⁩)","المقدمة (⁦Bow⁩)","المؤخرة (⁦Stern⁩)"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'أي مما يلي ليست من خرافات إيسوب؟', '["الثعلب والعنب (⁦The Fox and the Grapes⁩)","الثعلب وكلب الصيد (⁦The Fox and the Hound⁩)","السلحفاة والأرنب (⁦The Tortoise and the Hare⁩)","الضفدع والثور (⁦The Frog and the Ox⁩)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_73, 'من هو أول رئيس للمكسيك؟', '["بينيتو خواريز","ميغيل هيدالغو إي كوستيا","غوادالوبي فيكتوريا","فيسنتي غيريرو"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_74 uuid;
BEGIN
  SELECT id INTO v_sync_id_74 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 2' LIMIT 1;
  IF v_sync_id_74 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 2', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_74;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'ما هي الكلمة التي تمثل حرف ''⁦T⁩'' في أبجدية الناتو الصوتية؟', '["تانغو","تارجت","تاكسي","تركي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'أي من المصطلحات التشريحية التالية يشير إلى الطرف الذي يحتوي على الذيل لدى الكائن الحي؟', '["بطني (⁦Ventral⁩)","ذيلي (⁦Caudal⁩)","قريب (⁦Proximal⁩)","إكليلي (⁦Coronal⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'ما هو الشعار الذي استخدمته شركة الوجبات السريعة ماكدونالدز قبل شعارها الحالي "أنا أحبه"؟', '["لماذا تدفع أكثر؟!","احصل عليها بطريقتك","نحب أن نرى ابتسامتك","إسعاد الناس من خلال الطعام"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'في التقويم الميلادي القياسي، كم شهراً يبدأ اسمه بالحرف الإنجليزي ''⁦J⁩''؟', '["أربعة","خمسة","اثنان","ثلاثة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'أي من المشروبات الغازية التالية تم طرحه في الأسواق أولاً؟', '["دكتور بيبر","كوكاكولا","سبرايت","ماونتن ديو"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'تُنتج نوتيلا بواسطة شركة فيريرو الألمانية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'كم عدد الأوراق في ورق اللعب (الكوتشينة) القياسي؟', '["32","40","52","64"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'توفي الفيلسوف فرانسيس بيكون بسبب حالة التهاب رئوي حادة أثناء محاولته حفظ اللحم عن طريق حشو دجاجة بالثلج.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'الميتوكوندريا هي مركز توليد الطاقة في الخلية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'من أي بلد أوروبي تأتي جبنة جودا الشهيرة؟', '["بلجيكا","هولندا","ألمانيا","فرنسا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'من هي أصغر شخصية حصلت على جائزة نوبل في التاريخ؟', '["لورنس براغ","فيرنر هايزنبرغ","ملالا يوسفزاي","ياسر عرفات"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'إلى ماذا ترمز الحروف الثلاثة لسلسلة مطاعم "⁦KFC⁩"؟', '["كنتاكي فريش تشيز","كيبلد فريكي كاو","كيوي فود كت","كنتاكي فرايد تشيكن"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'من هو المهندس المعماري الذي صمم برج التجارة العالمي الجديد (⁦One World Trade Center⁩) في مانهاتن بنيويورك؟', '["ديفيد تشايلدز","بياركي إنجلز","مايكل أراد","فوميهيكو ماكي"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'من هو الموسيقي الذي تعاون مع المنتج الأمريكي بورتر روبنسون لإصدار أغنية "شيلتر" عام 2016‏؟', '["مات زو","ماديون","ديد ماوس","زيد"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'أي من المجالات التالية يُعرف أحياناً باسم "العلم الكئيب"؟', '["الفلسفة","السياسة","علم الاقتصاد","الفيزياء"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'ما هي اللغة الرسمية في مدينة برشلونة بجانب اللغة الإسبانية؟', '["الغاليسية","الفرنسية","الباسكية","الكتالونية"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'في أي عام وُلد والت ديزني؟', '["1901","1902","1903","1900"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'في لعبة هالف لايف (⁦Half-Life⁩)، ما هو اسم المخلوق الفضائي الذي يلتصق بالرؤوس؟', '["بولسكويد","هيدكراب","فورتيغاونت","فيس هجر"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'من بين هذه المباني الأربعة، أيهم الأطول بارتفاع يبلغ 1,483 قدماً (⁦451.9⁩ متراً)‏؟', '["برج زيفينج، الصين","فندق وبرج ترامب الدولي، الولايات المتحدة","أبراج بتروناس التوأم، ماليزيا","برج الحمراء، الكويت"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_74, 'ماذا يُقصد بمصطلح "المجمع التجاري الميت" (⁦Dead Mall⁩)‏؟', '["مجمع تجاري لا يحتوي على أي متاجر","مجمع تجاري صدر قرار بإغلاقه وإدانته","مجمع تجاري بعد ساعات العمل الرسمية","مجمع تجاري يعاني من معدلات خلو مرتفعة أو حركة إقبال منخفضة جداً من المستهلكين"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_75 uuid;
BEGIN
  SELECT id INTO v_sync_id_75 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 20' LIMIT 1;
  IF v_sync_id_75 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 20', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_75;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'يُسمح قانوناً بتناول الكحول أثناء القيادة في ولاية مسيسيبي الأمريكية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'الجلوس لأكثر من ثلاث ساعات في اليوم يمكن أن يقلل من عمر الإنسان المتوقع بمقدار عامين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'تشير الدراسات إلى أن ما يقارب 40% من سكان العالم يستخدمون اليد اليسرى (عُسر).', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'أي عنصر كيميائي يحمل الرمز ⁦Kr⁩‏؟', '["الكيروسين","الكينيتيكيوم","الكوريوم","الكريبتون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'أي من هذه الدول تقود السيارات على الجانب الأيسر من الطريق؟', '["اليابان","ألمانيا","روسيا","الصين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'ما هي عاصمة إسبانيا؟', '["باريس","مدريد","برشلونة","لشبونة"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'من أي اتجاه جغرافي تشرق الشمس؟', '["الغرب","الشمال","الشرق","الجنوب"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'ماذا يطلق الهولنديون على لغتهم؟', '["دانسك (⁦Dansk⁩)","دويتش (⁦Deutsch⁩)","هولاندر (⁦Hollander⁩)","نيدرلاندس (⁦Nederlands⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'تُؤكل وجبة الهاجيس تقليدياً في ليلة بيرنز (⁦Burns Night⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'يعد قصر ديزني المسكون (⁦Haunted Mansion⁩) موطناً لثلاثي من أشباح الأوتوستوب (الهيتشهايكر). أي من هؤلاء ليس واحداً منهم؟', '["غاس","هاري","فينياس","إيزرا"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'أي من حبوب الإفطار المرعبة لشركة "جنرال ميلز" كانت الأخيرة التي تم إصدارها في السبعينيات؟', '["كونت شوكولا (⁦Count Chocula⁩)","فرانكن بيري (⁦Franken Berry⁩)","فروت بروت (⁦Fruit Brute⁩)","بو بيري (⁦Boo-Berry⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'إلى ماذا يرمز الاختصار ⁦VR⁩‏؟', '["حقيقي جداً (⁦Very Real⁩)","التعرف البصري (⁦Visual Recognition⁩)","التعرف على الصوت (⁦Voice Recognition⁩)","الواقع الافتراضي (⁦Virtual Reality⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'تنتمي اللغة الرومانية إلى عائلة اللغات الرومانسية، والتي تشترك فيها مع الفرنسية والإسبانية والبرتغالية والإيطالية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'يمكن تشغيل ألبوم فرقة "كينغ غيزارد آند ذا ليزرد ويزارد" بعنوان "نونغون إنفينيتي" (⁦Nonagon Infinity⁩) بشكل متكرر دون انقطاع مسموع.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'في لعبة "ريزيدنت إيفل 3"، كم عدد خانات المخزن (الحقيبة) التي تمتلكها جيل في بداية اللعبة؟', '["6","10","8","12"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'أي مما يلي ليس اسماً آخر للباذنجان؟', '["برينجال (⁦Brinjal⁩)","قرع غينيا (⁦Guinea Squash⁩)","ميلونجين (⁦Melongene⁩)","بوتيمارون (⁦Potimarron⁩)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'كم عدد بذور التفاح التقريبي التي يجب ابتلاعها للحصول على جرعة قاتلة من السيانيد؟', '["200","20","2,000","20,000"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'اشتهر الشقيقان بوب ومايك براين في أي رياضة؟', '["كرة السلة","التنس (كرة المضرب)","كرة القدم","البيسبول (كرة القاعدة)"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_75, 'تقبيل شخص ما لمدة دقيقة واحدة يحرق حوالي سعرتين حراريتين.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_76 uuid;
BEGIN
  SELECT id INTO v_sync_id_76 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 21' LIMIT 1;
  IF v_sync_id_76 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 21', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_76;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'ما هو الجزء الميكانيكي الموجود في مركز ألعاب سبينر (⁦Fidget Spinners⁩)‏؟', '["المحامل (رولمان بلي)","المحاور","التروس","الأحزمة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'أي من برامج نيكتونز (⁦Nicktoons⁩) هذه لم تكن في الأصل فقرة قصيرة في برنامج "أوه ييه! كارتونز" قبل أن تصبح مسلسلاً خاصاً بها؟', '["منطقة الطباشير (⁦ChalkZone⁩)","داني المراهق (⁦Danny Phantom⁩)","جيني المراهقة الآلية (⁦My Life as a Teenage Robot⁩)","الوالدان السحريان (⁦The Fairly OddParents⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'ما هو أكبر نظام نقل سريع (مترو) في العالم من حيث عدد المحطات، بوجود 472 محطة قيد التشغيل؟', '["مترو شانغهاي","مترو أنفاق لندن","مترو أنفاق مدينة نيويورك","مترو أنفاق برلين"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'ما هي الفاكهة التي تعد مكوناً تقليدياً في كعكة الغابة السوداء (بلاك فورست)‏؟', '["المشمش","الزبيب","التفاح","الكرز"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'السكيوفوبيا (⁦Sciophobia⁩) هي الخوف من ماذا؟', '["الظلال","الأكل","الأضواء الساطعة","وسائل النقل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'فرانك لويد رايت كان المهندس المعماري وراء تصميم أي مبنى شهير؟', '["فيلا سافوي","متحف غوغنهايم","دار أوبرا سيدني","إبرة الفضاء (ذا سبيس نيدل)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'أين يقع المقر الرئيسي لشركة أبل (⁦Apple Inc⁩.)‏؟', '["ريدوود سيتي، كاليفورنيا","ريدموند، واشنطن","كوبيرتينو، كاليفورنيا","سانتا مونيكا، كاليفورنيا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'في عالم ⁦SCP⁩ الخيالي، ما هي "فئة الكائن" (⁦Object Class⁩) التي تُمنح لكيانات ⁦SCP⁩ التي لا يمكن احتواؤها على الإطلاق؟', '["ثوميل (⁦Thaumiel⁩)","كيتير-ثوميل (⁦Keter-Thaumiel⁩)","الفئات الباطنية/السردية (⁦Esoteric/Narrative Classes⁩)","أبوليون (⁦Apollyon⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'أي دولة تنتج ما يقارب 40% من الفانيليا في العالم؟', '["مدغشقر","إندونيسيا","الصين","المكسيك"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'من هو مؤسس مجموعة ليغو (⁦The Lego Group⁩)‏؟', '["ينس نيلز كريستيانسن","أولي كيرك كريستيانسن","كيرستين كريستيانسن","جيرهارد كيرك كريستيانسن"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'ما هي الكلمة اليابانية المكتوبة بالأحرف اللاتينية (روماجي) والتي تعني "جامعة"؟', '["توشوكان (⁦Toshokan⁩)","جيموشو (⁦Jimusho⁩)","دايغاكو (⁦Daigaku⁩)","شوكودو (⁦Shokudou⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'ما هي الشركة التي تعاونت معها شركة فالف (⁦Valve⁩) لصناعة نظارة الواقع الافتراضي فايف (⁦Vive⁩)‏؟', '["أوكولوس (⁦Oculus⁩)","جوجل (⁦Google⁩)","رايزر (⁦Razer⁩)","⁦HTC⁩"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'أي مهندس معماري شهير، توفي عام 2019 عن عمر يناهز 102 عاماً، صمم الهرم الزجاجي في متحف اللوفر بباريس؟', '["آي إم بي (⁦I⁩. ⁦M⁩. ⁦Pei⁩)","بسكال غيدو (⁦Pascale Guédot⁩)","فرانك جيري","وانغ شو"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'هل مايكل جاكسون هو من اخترع رقصة مشية القمر (⁦Moonwalk⁩)‏؟', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'كانت أغنية "جينغل بيلز" (⁦Jingle Bells⁩) مخصصة في الأصل لعيد الشكر.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'من يُعتبر "أبو الفلسفة الحديثة"؟', '["أفلاطون","ألبرت أينشتاين","أنطوان لافوازييه","رينيه ديكارت"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'من هي الشخصية المرسومة على ورقة المئة دولار الأمريكية؟', '["بنجامين فرانكلين","جورج واشنطن","أبراهام لينكون","توماس جيفرسون"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'في أي عام حصلت غانا على استقلالها؟', '["1947","1957","1960","1958"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_76, 'في أي دولة أقيمت الألعاب الأولمبية الصيفية لعام 1992‏؟', '["روسيا","كوريا","إسبانيا","الولايات المتحدة الأمريكية"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_77 uuid;
BEGIN
  SELECT id INTO v_sync_id_77 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 22' LIMIT 1;
  IF v_sync_id_77 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 22', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_77;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'ما هي الكلمة البرتغالية المقابلة لـ "البرازيل"؟', '["⁦Brasil⁩","⁦Brazil⁩","⁦Brasilia⁩","⁦Brasíl⁩"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'كليتا "أول سولز" (⁦All Souls⁩) و"ميرتون" (⁦Merton⁩) هما كليتان تتبعان لأي جامعة؟', '["كامبريدج","أكسفورد","مانشستر","ليدز"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'ولد أدولف هتلر في أستراليا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'تم ابتكار الوجه السعيد (⁦The Happy Face⁩) بواسطة الرسام التجاري هارفي بال.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'ما هو اسم الشركة في لعبة ليزال كومباني (⁦Lethal Company⁩)‏؟', '["الشركة (⁦The Company⁩)","شركة خردة الكواكب (⁦Planet Scrap Co⁩.)","ليزال للروبوتات (⁦Lethal Robotics⁩)","شركة غورديان للشحن (⁦Gordian Shipping Co⁩.)"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'من أي بلد نشأت قصة روبن هود؟', '["فرنسا","إنجلترا","البرتغال","إسكتلندا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'أي دولة تولى فيها رئاسة الوزراء شخصيات بالأسماء التالية: إيدن، وميجور، وبيل، ولو، وبراون، وهيث؟', '["أستراليا","نيوزيلندا","المملكة المتحدة","كندا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'كم يبلغ ارتفاع برج خليفة؟', '["2,717 قدم","2,546 قدم","3,024 قدم","2,722 قدم"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'في أي يوم تم إطلاق خدمة استضافة الملفات "جوجل درايف" (⁦Google Drive⁩)‏؟', '["24 أبريل 2012","12 يناير 2014","14 نوفمبر 2008","20 يناير 2010"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'بين نصب واشنطن والبركة العاكسة (⁦Reflecting Pool⁩) مباشرة، يوجد نصب تذكاري لأي حرب؟', '["حرب فيتنام","الحرب العالمية الثانية","الحرب الأهلية الأمريكية","حرب الاستقلال الأمريكية"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'أي من التوابل الأساسية التالية يُعرف أيضاً بالفجل الياباني الحار؟', '["مينتسويو","كاراشي","الواسابي","بونزو"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'ما هي القناة التي تربط بين البحر الأبيض المتوسط والبحر الأحمر؟', '["قناة بنما","قناة سيناء","قناة قره قوم","قناة السويس"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'الرئيس التنفيذي لشركة التكنولوجيا آبل الذي خلف ستيف جوبز يُدعى تيم آبل.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'أي رشاش أمريكي الصنع كان معروفاً بشكل غير رسمي بين الجنود الأمريكيين الذين استخدموه باسم "مسدس الشحم" (⁦Grease Gun⁩)‏؟', '["كولت 9 ملم","⁦M3⁩","تومبسون","ماك-10"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'بأي منتج غذائي تشتهر الشركة الأمريكية "كامبلز" (⁦Campbell''s⁩) بشكل أكبر؟', '["الشوكولاتة","المشروبات الغازية","الحساء المعلب","السجق"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'التكملة الأقل شهرة للمثل القائل "الفضول قتل القط..." هي:', '["\"...والفأر الصامت بقي مكانه.\"","\"...مما علمه ألا يفعل ذلك مجدداً.\"","\"...لكن الموت بالمعرفة أفضل من الجهل.\"","\"...لكن الرضا أعاده للحياة.\""]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'كم من الوقت استغرق منظفو النوافذ الآليون في مركز التجارة العالمي الأصلي لتنظيف واجهة المبنى الخارجية بأكملها؟', '["شهر واحد","3 أسابيع","أسبوع واحد","شهران"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'ما هو المشروب الكحولي الذي يُصنع بشكل أساسي من عرعر الشرب (ثمار الجونيبير)‏؟', '["الفودكا","الجين","الرم","التيكيلا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_77, 'رقم خط الطوارئ الساخن في الولايات المتحدة هو 911 بسبب هجمات 11 سبتمبر الإرهابية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_78 uuid;
BEGIN
  SELECT id INTO v_sync_id_78 FROM quizzes WHERE title = 'شامل المعلومات العامة — الجزء 23' LIMIT 1;
  IF v_sync_id_78 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شامل المعلومات العامة — الجزء 23', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_78;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هو البيرجي (⁦Burgee⁩)‏؟', '["علم","حبل","نافذة","نوع من الطعام"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'أي من الألوان التالية لا يُعتبر من ألوان قوس قزح؟', '["الأزرق","الوردي","البنفسجي","البرتقالي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'في الولايات المتحدة، يُعتبر الأمر تلقائياً إيقاعاً غير قانوني في الشرك (⁦Entrapment⁩) إذا باعتك الشرطة مواد غير قانونية دون الكشف عن هويتها.', '["صحيح","خطأ"]'::jsonb, 1, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هي اللغة الأكثر انتشاراً وتحدثاً في سويسرا؟', '["الفرنسية","الإيطالية","السويسرية","الألمانية"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'في علم اللغويات، أي مما يلي لا يُعد من قواعد غرايس (⁦Gricean Maxims⁩) تحت مبدأ التعاون؟', '["الطول","الجودة","الصلة","الأسلوب"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما اسم بولندا باللغة البولندية؟', '["بوبشيا (⁦Pupcia⁩)","بولسكا (⁦Polska⁩)","بولشكا (⁦Polszka⁩)","بولاند (⁦Poland⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'كيف تقول "وداعاً" باللغة الإسبانية؟', '["هولا (⁦Hola⁩)","أو ريفوار (⁦Au Revoir⁩)","أديوس (⁦Adiós⁩)","سالير (⁦Salir⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هو الحرف الأكثر استخداماً في الأبجدية الإنجليزية؟', '["⁦A⁩","⁦I⁩","⁦O⁩","⁦E⁩"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'في أي سلسلة مطاعم للوجبات السريعة يمكنك طلب مخفوق الحليب "جاموكا" (⁦Jamocha Shake⁩)‏؟', '["آربيز (⁦Arby''s⁩)","ماكدونالدز","برجر كنج","وينديز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ريد فاينز (⁦Red Vines⁩) هي علامة تجارية لأي نوع من الحلوى؟', '["المصاصات","العرقسوس الأحمر (⁦Licorice⁩)","الشوكولاتة","العلكة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'كم عدد الألوان في قوس قزح؟', '["8","9","7","10"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'من هي سيدة الأعمال الغانية التي تُعتبر من رواد الإقراض متناهي الصغر؟', '["فريدة بدوي","أما آتا آيدو","سيون نيلي","إستير أفوا أوكلو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هو أطول جسر في العالم؟', '["جسر دانيانغ-كونشان الكبير، الصين","جسر بحيرة بونتشارترين، الولايات المتحدة","جسر الملك فهد الأول، المملكة العربية السعودية","جسر السلطان عبد الحليم معظم شاه، ماليزيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'وفقاً لـ شيرلوك هولمز: "إذا استبعدت المستحيل، فإن ما يتبقى، مهما بدا مستبعداً، لا بد أن يكون هو..."', '["الجواب","الحقيقة","السبب","المصدر"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'أي من هذه الكلمات تشير إلى شيء تم صنعه أو توزيعه أو بيعه بطريقة غير قانونية ومهرّبة؟', '["بوتبلاك (⁦Bootblack⁩)","بوتليس (⁦Bootlace⁩)","بوتليغ (⁦Bootleg⁩)","بوتستراب (⁦Bootstrap⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هي اللعبة التي ظهر فيها والويجي لأول مرة؟', '["واريو لاند: سوبر ماريو لاند 3","ماريو بارتي (على جهاز نينتندو 64)","سوبر سماش برذرز ألتيميت","ماريو تينس 64 (على جهاز نينتندو 64)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'أي من هذه المطاعم جالب حظه (التميمة) هو مهرج؟', '["ماكدونالدز","واتابورجر","برجر كنج","سونيك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'ما هو الكوكب الأقرب إلى شمس مجموعتنا الشمسية؟', '["المريخ","عطارد","المشتري","الأرض"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_78, 'في أي عام كانت نسبة الأسر التي تمتلك جهاز تلفاز في الولايات المتحدة 9% فقط؟', '["1965","1913","1950","1969"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;

