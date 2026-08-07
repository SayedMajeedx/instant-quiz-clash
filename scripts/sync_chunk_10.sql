DO $$
DECLARE
  v_sync_id_179 uuid;
BEGIN
  SELECT id INTO v_sync_id_179 FROM quizzes WHERE title = 'التاريخ والحضارات — الجزء 2' LIMIT 1;
  IF v_sync_id_179 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والحضارات — الجزء 2', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_179;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما اسم الأسرة الحاكمة التي أسّست إمبراطورية فارسية عظيمة امتدت من مصر إلى الهند، وكان من أبرز ملوكها كورش الكبير؟', '["الأسرة الساسانية","الأسرة الأخمينية","الأسرة البارثية","الأسرة السلوقية"]'::jsonb, 1, 25, 0, 'multi', 'الأسرة الأخمينية (550-330 ق.م) أسسها كورش الكبير وبنت أوسع إمبراطورية في العالم القديم امتدت من مصر واليونان حتى الهند.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'البتراء الأردنية كانت عاصمة مملكة الأنباط قبل الفتح الروماني.', '["صح","خطأ"]'::jsonb, 0, 25, 1, 'boolean', 'كانت البتراء عاصمة المملكة النبطية التي ازدهرت بين القرنين الرابع قبل الميلاد والثاني الميلادي، قبل أن يضمها الرومان عام 106م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما اسم القائد العثماني الذي فتح القسطنطينية عام 1453م؟', '["سليمان القانوني","بايزيد الثاني","محمد الفاتح","سلجوق بك"]'::jsonb, 2, 25, 2, 'multi', 'قاد السلطان العثماني محمد الثاني الملقب بالفاتح حملة فتح القسطنطينية عام 1453م، وبذلك أسقط الإمبراطورية البيزنطية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 3, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945م بالقاهرة بمشاركة سبع دول عربية مؤسِّسة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما هي الحضارة التي بنت مدينة أوغاريت الأثرية الواقعة في سوريا الحديثة؟', '["الفينيقيون","الكنعانيون الأوغاريتيون","الآراميون","الحيثيون"]'::jsonb, 1, 25, 4, 'multi', 'أوغاريت مدينة كنعانية قديمة ازدهرت في الألفية الثانية قبل الميلاد، وتُنسب إليها أبجدية أوغاريتية تُعدّ من أقدم الأبجديات المعروفة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'معركة حطين عام 1187م كانت بين صلاح الدين الأيوبي والصليبيين وانتهت بانتصار صلاح الدين.', '["صح","خطأ"]'::jsonb, 0, 25, 5, 'boolean', 'في معركة حطين بالقرب من طبرية حقق صلاح الدين الأيوبي انتصاراً حاسماً على الصليبيين مهّد لاسترداد القدس في العام ذاته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'أيّ خليفة أموي أمر ببناء قبة الصخرة في القدس؟', '["معاوية بن أبي سفيان","عبد الملك بن مروان","الوليد بن عبد الملك","هشام بن عبد الملك"]'::jsonb, 1, 25, 6, 'multi', 'أمر الخليفة الأموي عبد الملك بن مروان ببناء قبة الصخرة عام 691م لتكون أول قبة إسلامية كبرى فوق الصخرة المشرفة في القدس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما اسم الرحالة المغربي الذي جاب العالم الإسلامي في القرن الرابع عشر الميلادي وكتب ''تحفة النظار''؟', '["الإدريسي","ابن بطوطة","ابن جبير","المسعودي"]'::jsonb, 1, 25, 7, 'multi', 'ابن بطوطة التنجي المغربي قطع نحو 120 ألف كيلومتر خلال رحلاته الممتدة بين 1325 و1354م، وسجّل مشاهداته في كتابه الشهير ''تحفة النظار في غرائب الأمصار''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'مدينة تدمر السورية الأثرية كانت تُعرف في العصور القديمة باسم ''بالميرا'' باللاتينية.', '["صح","خطأ"]'::jsonb, 0, 25, 8, 'boolean', 'تدمر عُرفت باسم ''بالميرا'' اللاتيني أي مدينة النخيل، وكانت مركزاً تجارياً مهماً على طريق الحرير في العصر الروماني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'من هو مؤسس الدولة الأموية في الأندلس بعد أن فرّ من ملاحقة العباسيين؟', '["طارق بن زياد","عبد الرحمن الداخل","موسى بن نصير","يوسف بن تاشفين"]'::jsonb, 1, 25, 9, 'multi', 'عبد الرحمن بن معاوية الأموي نجا من مجزرة العباسيين وفرّ إلى الأندلس، وأسس الإمارة الأموية في قرطبة عام 756م ملقَّباً بـ''صقر قريش''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 10, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945 بتوقيع ميثاقها في القاهرة من قِبل سبع دول عربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'كانت بغداد عاصمة الخلافة العباسية منذ تأسيسها عام 762م حتى سقوطها على يد المغول عام 1258م.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'أسس الخليفة العباسي المنصور مدينة بغداد عام 762م عاصمةً للخلافة، وظلت كذلك حتى دمّرها المغول بقيادة هولاكو عام 1258م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما هو الاسم القديم لمدينة إسطنبول قبل الفتح العثماني عام 1453م؟', '["أنقرة","بيزنطة / القسطنطينية","أزمير","أدرنة"]'::jsonb, 1, 25, 12, 'multi', 'أُسِّست المدينة باسم بيزنطة، ثم أُعيد تسميتها القسطنطينية نسبةً إلى الإمبراطور قسطنطين، قبل أن يفتحها العثمانيون ويسمّوها إسطنبول.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'من القائد العربي الذي فتح مصر في عهد الخليفة عمر بن الخطاب؟', '["خالد بن الوليد","عمرو بن العاص","سعد بن أبي وقاص","أبو عبيدة بن الجراح"]'::jsonb, 1, 25, 13, 'multi', 'قاد عمرو بن العاص الجيوش الإسلامية لفتح مصر بين عامَي 639 و641م في عهد الخليفة عمر بن الخطاب، وأسّس مدينة الفسطاط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما هو الاسم الذي أطلقه العثمانيون على منطقة بلاد الشام وفلسطين في تقسيماتهم الإدارية؟', '["ولاية الشام","ولاية سوريا","إيالة دمشق","ولاية بيروت"]'::jsonb, 2, 25, 14, 'multi', 'في المراحل الأولى للحكم العثماني أُطلق على المنطقة ''إيالة دمشق'' قبل أن يُعاد تنظيمها لاحقاً إلى ولايات متعددة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'من هو مؤسس الدولة الأموية وأول خلفائها؟', '["عبد الملك بن مروان","معاوية بن أبي سفيان","يزيد بن معاوية","مروان بن الحكم"]'::jsonb, 1, 25, 15, 'multi', 'معاوية بن أبي سفيان أسس الدولة الأموية عام 661م واتخذ دمشق عاصمة لها، وكان أول خلفائها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'ما هي الحضارة التي بنت مدينة تدمر (بالمور) في الصحراء السورية وبلغت أوجها في القرن الثالث الميلادي؟', '["الحضارة الفينيقية","مملكة تدمر الآرامية","الحضارة النبطية","الحضارة الرومانية"]'::jsonb, 1, 25, 16, 'multi', 'تدمر كانت مملكة آرامية ازدهرت كمحطة تجارية بين الشرق والغرب، وبلغت أوجها في عهد الملكة زنوبيا في القرن الثالث الميلادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_179, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 17, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945م بتوقيع ميثاقها في القاهرة من قِبل سبع دول عربية.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_180 uuid;
BEGIN
  SELECT id INTO v_sync_id_180 FROM quizzes WHERE title = 'التاريخ والحضارات — الجزء 3' LIMIT 1;
  IF v_sync_id_180 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والحضارات — الجزء 3', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_180;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم القائد العثماني الذي فتح القسطنطينية عام 1453م؟', '["سليمان القانوني","السلطان مراد الثاني","السلطان محمد الفاتح","السلطان بايزيد الأول"]'::jsonb, 2, 25, 0, 'multi', 'قاد السلطان محمد الثاني الملقب بالفاتح الجيوشَ العثمانية لفتح القسطنطينية عام 1453م، مما أسقط الإمبراطورية البيزنطية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'البتراء المدينة الأثرية الأردنية الشهيرة كانت عاصمة للأنباط.', '["صح","خطأ"]'::jsonb, 0, 25, 1, 'boolean', 'كانت البتراء عاصمة المملكة النبطية التي ازدهرت بين القرن الرابع قبل الميلاد والقرن الأول الميلادي في منطقة جنوب الأردن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم الأسرة الحاكمة التي أسست الدولة الفاطمية في مصر؟', '["بنو أمية","بنو العباس","بنو عبيد","بنو طولون"]'::jsonb, 2, 25, 2, 'multi', 'أسس الدولة الفاطمية بنو عبيد الله من الإسماعيليين، وقد أسسوها في المغرب أولاً ثم انتقلوا لفتح مصر عام 969م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم الملك المؤسس الذي وحّد المملكة العربية السعودية عام 1932م؟', '["الملك سعود","الملك فيصل","الملك عبد العزيز بن سعود","الملك خالد"]'::jsonb, 2, 25, 3, 'multi', 'أعلن الملك عبد العزيز بن عبد الرحمن آل سعود توحيد المملكة العربية السعودية في 23 سبتمبر 1932م بعد سنوات من الفتوحات والتوحيد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم الحضارة القديمة التي ازدهرت في وادي الرافدين وعُرفت بأول مجموعة قوانين مكتوبة في التاريخ؟', '["الحضارة السومرية","الحضارة البابلية","الحضارة الأكادية","الحضارة الآشورية"]'::jsonb, 1, 25, 4, 'multi', 'أصدر الملك حمورابي البابلي شريعة حمورابي حوالي 1754 ق.م، وهي أقدم مجموعة قوانين مكتوبة ومنظمة وصلت إلينا في التاريخ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم المعركة التي هزم فيها صلاح الدين الأيوبي الصليبيين عام 1187م واستعاد بها القدس؟', '["معركة عين جالوت","معركة حطين","معركة المنصورة","معركة مرج دابق"]'::jsonb, 1, 25, 5, 'multi', 'في معركة حطين عام 1187م قرب طبريا بفلسطين، حقق صلاح الدين انتصاراً حاسماً على الصليبيين مهّد لاستعادة القدس بعدها بأشهر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'كانت دولة الإمارات العربية المتحدة تُعرف سابقاً بـ''إمارات الهدنة'' قبل استقلالها عام 1971م.', '["صح","خطأ"]'::jsonb, 0, 25, 6, 'boolean', 'أطلق البريطانيون على المنطقة اسم ''إمارات الهدنة'' نسبةً إلى معاهدات الهدنة البحرية المبرمة مع الشيوخ المحليين في القرن التاسع عشر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما اسم الممر الجبلي الاستراتيجي في سيناء الذي شهد معارك ضارية في حروب 1956 و1967 و1973‏؟', '["ممر رفح","ممر الميتلا","ممر أبو عجيلة","ممر القنطرة"]'::jsonb, 1, 25, 7, 'multi', 'يُعدّ ممر الميتلا في وسط سيناء أبرز الممرات الاستراتيجية التي تتحكم في حركة الجيوش، وقد شهد اشتباكات حاسمة في الحروب العربية الإسرائيلية الثلاث.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'مملكة سبأ القديمة كانت تقع في منطقة اليمن الحالية.', '["صح","خطأ"]'::jsonb, 0, 25, 8, 'boolean', 'تمركزت مملكة سبأ القديمة في جنوب الجزيرة العربية في المنطقة المقابلة لليمن الحالية، وعاصمتها مأرب الشهيرة بسدّها التاريخي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 9, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945 بالقاهرة بمشاركة سبع دول عربية مؤسِّسة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما هي العاصمة التاريخية للدولة الأموية؟', '["بغداد","القاهرة","دمشق","المدينة المنورة"]'::jsonb, 2, 25, 10, 'multi', 'اتخذ الخليفة معاوية بن أبي سفيان دمشق عاصمةً للدولة الأموية عام 661م، وظلت كذلك حتى سقوطها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'أي خليفة عباسي أسّس مدينة بغداد عام 762م؟', '["هارون الرشيد","المنصور","المأمون","المهدي"]'::jsonb, 1, 25, 11, 'multi', 'أسس الخليفة أبو جعفر المنصور مدينة بغداد (مدينة السلام) عام 762م لتكون عاصمة الخلافة العباسية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'في أي دولة عربية تقع مدينة قرطاج الأثرية؟', '["المغرب","الجزائر","ليبيا","تونس"]'::jsonb, 3, 25, 12, 'multi', 'قرطاج مدينة أثرية تقع على الساحل الشمالي لتونس قرب العاصمة تونس، وكانت عاصمة الإمبراطورية القرطاجية قبل أن يدمرها الرومان.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'كانت صنعاء عاصمة اليمن الجنوبي قبل توحيد اليمن عام 1990.', '["صح","خطأ"]'::jsonb, 1, 25, 13, 'boolean', 'عاصمة اليمن الجنوبي كانت عدن، أما صنعاء فكانت عاصمة اليمن الشمالي (الجمهورية العربية اليمنية).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'ما هو اسم المعاهدة التي أنهت الحرب العثمانية مع الحلفاء عام 1920 وقسّمت الأراضي العربية؟', '["معاهدة فرساي","اتفاقية سايكس-بيكو","معاهدة سيفر","معاهدة لوزان"]'::jsonb, 2, 25, 14, 'multi', 'معاهدة سيفر عام 1920 هي المعاهدة التي فُرضت على الدولة العثمانية بعد هزيمتها في الحرب العالمية الأولى، وأفضت إلى تقسيم أراضيها بين الحلفاء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'أي من هذه المدن كانت عاصمة للمملكة المصرية في عهد الفراعنة خلال الدولة الحديثة؟', '["منف","الإسكندرية","طيبة (الأقصر)","أخيتاتون فقط"]'::jsonb, 2, 25, 15, 'multi', 'طيبة (الأقصر حالياً) كانت العاصمة الرئيسية لمصر خلال عصر الدولة الحديثة (نحو 1550-1070 ق.م)، وكانت مركزاً دينياً وسياسياً كبيراً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'من هو القائد الذي حرر بيت المقدس من الصليبيين عام 1187م في معركة حطين؟', '["نور الدين زنكي","عماد الدين زنكي","صلاح الدين الأيوبي","بيبرس"]'::jsonb, 2, 25, 16, 'multi', 'انتصر صلاح الدين الأيوبي في معركة حطين عام 1187م على الصليبيين، ثم دخل بيت المقدس محرراً إياه بعد نحو تسعين عاماً من الاحتلال الصليبي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_180, 'في أي عام أُسِّست مدينة القاهرة على يد الفاطميين؟', '["969 م","642 م","1021 م","750 م"]'::jsonb, 0, 25, 17, 'multi', 'أسَّس الفاطميون مدينة القاهرة عام 969 م بقيادة القائد جوهر الصقلي بعد فتحه لمصر.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_181 uuid;
BEGIN
  SELECT id INTO v_sync_id_181 FROM quizzes WHERE title = 'التاريخ والحضارات — الجزء 4' LIMIT 1;
  IF v_sync_id_181 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والحضارات — الجزء 4', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_181;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'ما اسم المعاهدة التي أنهت الحرب بين مصر وإسرائيل عام 1979‏؟', '["اتفاقية أوسلو","معاهدة كامب ديفيد","اتفاقية وادي عربة","إعلان القاهرة"]'::jsonb, 1, 25, 0, 'multi', 'وُقِّعت معاهدة السلام المصرية الإسرائيلية عام 1979 إثر مفاوضات كامب ديفيد برعاية الرئيس الأمريكي جيمي كارتر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'من هو الخليفة العباسي الذي أسَّس مدينة بغداد عام 762 م؟', '["هارون الرشيد","المأمون","المنصور","المعتصم"]'::jsonb, 2, 25, 1, 'multi', 'أسَّس الخليفة العباسي أبو جعفر المنصور مدينة بغداد عام 762 م وجعلها عاصمة للخلافة العباسية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'ما هو الاسم التاريخي لمنطقة بلاد الشام في العصور القديمة؟', '["بلاد النهرين","فينيقيا","كنعان","أرام"]'::jsonb, 2, 25, 2, 'multi', 'عُرفت منطقة بلاد الشام في العصور القديمة باسم ''كنعان''، وهو الاسم الوارد في المصادر التاريخية والنصوص الدينية القديمة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'من هو مؤسس الدولة السعودية الأولى الذي تحالف مع محمد بن عبد الوهاب؟', '["عبد العزيز بن سعود","تركي بن عبدالله","محمد بن سعود","فيصل بن تركي"]'::jsonb, 2, 25, 3, 'multi', 'أبرم محمد بن سعود حاكم الدرعية عام 1744 م تحالفاً مع الشيخ محمد بن عبد الوهاب أسَّس الدولة السعودية الأولى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'كانت الإسكندرية عاصمة لمصر في عهد الدولة الفاطمية.', '["صح","خطأ"]'::jsonb, 1, 25, 4, 'boolean', 'اتخذ الفاطميون القاهرة عاصمةً لدولتهم بعد تأسيسها عام 969 م، وليس الإسكندرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'اتفاقية سايكس-بيكو عام 1916 كانت بين بريطانيا وفرنسا لتقسيم منطقة الشرق الأوسط العربي.', '["صح","خطأ"]'::jsonb, 0, 25, 5, 'boolean', 'وقّع الدبلوماسيان مارك سايكس البريطاني وفرانسوا جورج بيكو الفرنسي عام 1916 اتفاقية سرية لتقسيم بلاد الشام والعراق بين بريطانيا وفرنسا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'من هو العالِم العربي الذي يُلقَّب بـ''أبي الجبر'' لإسهاماته في علم الرياضيات؟', '["ابن الهيثم","الخوارزمي","البيروني","الكندي"]'::jsonb, 1, 25, 6, 'multi', 'محمد بن موسى الخوارزمي هو مؤسس علم الجبر، إذ ألّف كتاب ''المختصر في حساب الجبر والمقابلة'' الذي اشتُقّ منه مصطلح ⁦Algebra⁩.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'ما اسم الحاكم المصري الذي أمر ببناء قناة السويس في القرن التاسع عشر؟', '["محمد علي باشا","إسماعيل باشا","الخديوي توفيق","عباس حلمي"]'::jsonb, 1, 25, 7, 'multi', 'افتُتحت قناة السويس عام 1869 في عهد الخديوي إسماعيل باشا الذي أشرف على استكمال مشروع حفرها وأقام حفل افتتاحها الكبير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'أي من هذه الحضارات القديمة كانت تسكن منطقة اليمن وتشتهر بسد مأرب؟', '["حضارة دلمون","حضارة سبأ","حضارة عاد","حضارة أكاد"]'::jsonb, 1, 25, 8, 'multi', 'قامت مملكة سبأ في اليمن القديم وبنت سد مأرب الشهير الذي يُعدّ من أعظم المنشآت الهيدروليكية في العالم القديم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'في أي عام تأسست جامعة الدول العربية رسمياً؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 9, 'multi', 'تأسست جامعة الدول العربية رسمياً في 22 مارس 1945م بتوقيع ميثاقها في القاهرة من قِبَل سبع دول عربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'كانت مدينة سامراء عاصمة للخلافة العباسية لفترة من الزمن في القرن التاسع الميلادي.', '["صح","خطأ"]'::jsonb, 0, 25, 10, 'boolean', 'نقل الخليفة المعتصم العاصمة العباسية من بغداد إلى سامراء عام 836م، وظلت عاصمة حتى عام 892م حين أعادها المعتمد إلى بغداد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'من هو الفيلسوف والطبيب العربي الذي أُطلق عليه لقب ''الشيخ الرئيس'' وكتب موسوعة ''القانون في الطب''؟', '["الفارابي","ابن رشد","ابن سينا","الرازي"]'::jsonb, 2, 25, 11, 'multi', 'ابن سينا (980-1037م) طبيب وفيلسوف إسلامي لُقّب بالشيخ الرئيس، وموسوعته ''القانون في الطب'' ظلت مرجعاً طبياً في أوروبا وآسيا لقرون.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'ما اسم المعركة التي انتصر فيها صلاح الدين الأيوبي على الصليبيين عام 1187م واستعاد بها القدس؟', '["معركة عين جالوت","معركة حطين","معركة اليرموك","معركة المنصورة"]'::jsonb, 1, 25, 12, 'multi', 'في معركة حطين عام 1187م دمّر صلاح الدين الأيوبي الجيوش الصليبية في شمال فلسطين، مما مهّد لاستعادة القدس بعدها بأشهر قليلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'من هو الخليفة العباسي الذي أسس مدينة بغداد عام 762م؟', '["هارون الرشيد","المأمون","المنصور","المعتصم"]'::jsonb, 2, 25, 13, 'multi', 'أسس الخليفة العباسي أبو جعفر المنصور مدينة بغداد (مدينة السلام) عام 762م لتكون عاصمة للخلافة العباسية بدلاً من الكوفة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'كانت قرطاج عاصمة الإمبراطورية الفينيقية الكبرى الواقعة في ما يُعرف اليوم بتونس.', '["صح","خطأ"]'::jsonb, 0, 25, 14, 'boolean', 'قرطاج مدينة فينيقية أسسها الفينيقيون القادمون من صور حوالي 814 ق.م وأصبحت عاصمة لإمبراطوريتهم في شمال أفريقيا بتونس الحالية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'أي من هذه المدن كانت عاصمة الدولة الأموية في الأندلس؟', '["إشبيلية","غرناطة","قرطبة","طليطلة"]'::jsonb, 2, 25, 15, 'multi', 'اتخذ عبد الرحمن الداخل قرطبة عاصمةً للإمارة الأموية في الأندلس عام 756م، وبلغت أوج ازدهارها في عهد عبد الرحمن الناصر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'أي حضارة قديمة ابتكرت أول نظام للكتابة في التاريخ المعروف بالخط المسماري؟', '["الأكاديون","البابليون","السومريون","الآشوريون"]'::jsonb, 2, 25, 16, 'multi', 'ابتكر السومريون الخط المسماري حوالي 3200 ق.م في بلاد ما بين النهرين، وهو أقدم نظام كتابة موثّق في التاريخ البشري.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_181, 'أُسست إمارة دبي على يد الشيخ مكتوم بن بطي آل مكتوم عام 1833م عندما انفصلت عن أبوظبي.', '["صح","خطأ"]'::jsonb, 0, 25, 17, 'boolean', 'في عام 1833م قاد مكتوم بن بطي آل مكتوم نحو 800 شخص من قبيلة بني ياس للاستقرار في دبي مستقلاً بها عن أبوظبي، مؤسساً بذلك إمارة دبي.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_sync_id_182 uuid;
BEGIN
  SELECT id INTO v_sync_id_182 FROM quizzes WHERE title = 'التاريخ والحضارات — الجزء 5' LIMIT 1;
  IF v_sync_id_182 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والحضارات — الجزء 5', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_sync_id_182;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'من هو الرحّالة العربي المغربي الشهير الذي قطع نحو 120,000 كيلومتر في رحلاته خلال القرن الرابع عشر الميلادي؟', '["الإدريسي","ابن بطوطة","ابن جبير","المسعودي"]'::jsonb, 1, 25, 0, 'multi', 'ابن بطوطة المغربي (1304-1368م) جاب الأرض لأكثر من 29 عاماً وقطع نحو 120,000 كم مسجلاً رحلاته في كتابه الشهير ''تحفة النظار''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'أي من الأسرات الحاكمة أنشأت مدينة القاهرة عام 969م وجعلتها عاصمة لها؟', '["الأيوبيون","الطولونيون","الفاطميون","المماليك"]'::jsonb, 2, 25, 1, 'multi', 'أسس القائد الفاطمي جوهر الصقلي مدينة القاهرة عام 969م بعد فتحه لمصر، لتكون عاصمةً للخلافة الفاطمية الشيعية الإسماعيلية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'في أي مدينة عراقية تقع أسطورة برج بابل التاريخي؟', '["الموصل","بابل","أور","نينوى"]'::jsonb, 1, 25, 2, 'multi', 'برج بابل أو ''زقورة بابل'' ارتبط بمدينة بابل القديمة في العراق، والتي كانت عاصمة الإمبراطورية البابلية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'كانت مدينة صور اللبنانية القديمة مركزاً رئيسياً لصناعة الأرجوان الفينيقي الشهير.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'اشتُهرت مدينة صور الفينيقية بإنتاج صبغة الأرجوان (البنفسجي) المستخرجة من حلزون المورِكس، وكانت تُصدَّر للملوك والأباطرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'من هو الخليفة العباسي الذي أسس مدينة بغداد عام 762م؟', '["هارون الرشيد","المأمون","المنصور","المعتصم"]'::jsonb, 2, 25, 4, 'multi', 'أسس الخليفة أبو جعفر المنصور ثاني خلفاء الدولة العباسية مدينة بغداد عام 762م وجعلها عاصمة الخلافة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'أي حضارة قديمة ابتكرت أول نظام كتابي يُعرف بالكتابة المسمارية؟', '["الفينيقية","الفرعونية","السومرية","الآكادية"]'::jsonb, 2, 25, 5, 'multi', 'ابتكر السومريون في جنوب بلاد الرافدين الكتابة المسمارية حوالي 3200 ق.م، وهي تُعدّ أقدم نظام كتابي موثق في التاريخ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 6, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945م بالقاهرة بميثاق وقّعته سبع دول عربية هي مصر والعراق والأردن ولبنان والسعودية وسوريا واليمن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'كانت مدينة سمرقند عاصمةً لإمبراطورية تيمورلنك في القرن الرابع عشر الميلادي.', '["صح","خطأ"]'::jsonb, 0, 25, 7, 'boolean', 'اتخذ تيمورلنك من سمرقند (في أوزبكستان حاليًا) عاصمةً لإمبراطوريته التيمورية التي أسسها عام 1370م وجعلها مركزًا حضاريًا وثقافيًا بارزًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'من أسّس الدولة الأموية وجعل دمشق عاصمةً لها؟', '["عمر بن الخطاب","معاوية بن أبي سفيان","عثمان بن عفان","عبد الملك بن مروان"]'::jsonb, 1, 25, 8, 'multi', 'أسس معاوية بن أبي سفيان الدولة الأموية عام 41هـ بعد تنازل الحسن بن علي له، واتخذ دمشق عاصمةً لها كونها كانت مقر ولايته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'أُسّست منظمة أوبك عام 1960م في بغداد بمبادرة من المملكة العربية السعودية وإيران والعراق وفنزويلا والكويت.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'تأسست منظمة أوبك في مؤتمر بغداد في سبتمبر 1960م بمشاركة الدول الخمس المؤسِّسة: السعودية وإيران والعراق وفنزويلا والكويت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'في أي عام تأسست جامعة الأزهر في القاهرة؟', '["970م","988م","1000م","952م"]'::jsonb, 0, 25, 10, 'multi', 'أسس الفاطميون جامعة الأزهر عام 970م إبان فتحهم لمصر، لتكون منارة للعلم الإسلامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'من هو الخليفة العباسي الذي أسّس مدينة بغداد عام 762م؟', '["هارون الرشيد","المنصور","المأمون","المعتصم"]'::jsonb, 1, 25, 11, 'multi', 'أسس الخليفة العباسي أبو جعفر المنصور مدينة بغداد (مدينة السلام) عام 762م لتكون عاصمة للخلافة العباسية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'البتراء الأثرية في الأردن كانت عاصمة للمملكة النبطية.', '["صح","خطأ"]'::jsonb, 0, 25, 12, 'boolean', 'كانت البتراء عاصمة الأنباط الذين أسسوا مملكتهم في جنوب الأردن وازدهروا بالتجارة بين القرن الرابع ق.م والقرن الأول م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'أيّ من الحضارات القديمة التالية نشأت في وادي الرافدين بين نهري دجلة والفرات وابتكرت أول نظام كتابي منظم؟', '["الفينيقية","الفرعونية","السومرية","الكنعانية"]'::jsonb, 2, 25, 13, 'multi', 'ابتكر السومريون في جنوب بلاد الرافدين الكتابة المسمارية حوالي 3200 ق.م، وهي أقدم نظام كتابي منظم عُرف في التاريخ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'ما هي معركة الفتح الإسلامي التي حسمت السيطرة على بلاد الشام عام 636م وهُزمت فيها الإمبراطورية البيزنطية؟', '["معركة القادسية","معركة اليرموك","معركة أجنادين","معركة ذي قار"]'::jsonb, 1, 25, 14, 'multi', 'دارت معركة اليرموك عام 636م على ضفاف نهر اليرموك وانتهت بهزيمة ساحقة للبيزنطيين أمام الجيوش الإسلامية بقيادة خالد بن الوليد، مما فتح الطريق للسيطرة الكاملة على بلاد الشام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'من أسّس الدولة الأموية وجعل دمشق عاصمةً لها؟', '["عمر بن الخطاب","معاوية بن أبي سفيان","يزيد بن معاوية","عثمان بن عفان"]'::jsonb, 1, 25, 15, 'multi', 'معاوية بن أبي سفيان أسّس الدولة الأموية عام 661م بعد تنازل الحسن بن علي له، واتخذ دمشق عاصمةً لها لكونها مركز نفوذه إبان ولايته على الشام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'أيّ حاكم مصري أمر ببناء قناة السويس الحديثة التي افتُتحت رسمياً عام 1869م؟', '["محمد علي باشا","إسماعيل باشا","عباس الأول","توفيق باشا"]'::jsonb, 1, 25, 16, 'multi', 'أشرف إسماعيل باشا على استكمال مشروع قناة السويس وافتتحها رسمياً في نوفمبر 1869م باحتفالية كبرى، وإن كانت فكرة المشروع قد بدأت في عهد سعيد باشا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_sync_id_182, 'ما اسم الحرب التي اندلعت بين العراق وإيران وامتدت من عام 1980 إلى 1988م؟', '["حرب الخليج الأولى","حرب الخليج الثانية","حرب تحرير الكويت","حرب الأيام الستة"]'::jsonb, 0, 25, 17, 'multi', 'تُعرف الحرب العراقية الإيرانية (1980-1988م) بـ''حرب الخليج الأولى''، وقد بدأها صدام حسين بغزو إيران وانتهت بوقف إطلاق النار دون تغيير الحدود.', '');
  END IF;
END $$;

