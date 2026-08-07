DO $$
DECLARE
  v_lib_id_14 uuid;
BEGIN
  SELECT id INTO v_lib_id_14 FROM quizzes WHERE title = 'فيزياء وكيمياء الحياة اليومية' LIMIT 1;
  IF v_lib_id_14 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('فيزياء وكيمياء الحياة اليومية', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_14;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الرمز الكيميائي لعنصر البوتاسيوم؟', '["P","K","Po","B"]'::jsonb, 1, 20, 0, 'multi', 'الرمز مشتق من الاسم اللاتيني كاليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الجسيم الذي يحمل شحنة سالبة داخل الذرة؟', '["البروتون","النيوترون","الإلكترون","النواة"]'::jsonb, 2, 20, 1, 'multi', 'البروتون موجب والنيوترون متعادل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الوحدة التي تُقاس بها القوة في النظام الدولي؟', '["الجول","النيوتن","الواط","الباسكال"]'::jsonb, 1, 20, 2, 'multi', 'الجول للطاقة والواط للقدرة والباسكال للضغط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما درجة غليان الماء النقي عند مستوى سطح البحر بالمقياس المئوي؟', '["90","95","100","110"]'::jsonb, 2, 20, 3, 'multi', 'تنخفض كلما ارتفعنا عن سطح البحر لانخفاض الضغط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'أي عضية في الخلية تُلقّب بمصنع الطاقة؟', '["الريبوسوم","الميتوكوندريا","جهاز غولجي","الليسوسوم"]'::jsonb, 1, 20, 4, 'multi', 'فيها يتم التنفس الخلوي وإنتاج جزيء الطاقة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الغاز الذي تنتجه عملية التنفس الخلوي ويخرج مع الزفير بكميات أكبر؟', '["الأكسجين","النيتروجين","ثاني أكسيد الكربون","الهيليوم"]'::jsonb, 2, 20, 5, 'multi', 'ينقله الدم إلى الرئتين للتخلص منه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'أي نوع من الدم يُعرف بالمتبرع العام لخلايا الدم الحمراء؟', '["O سالب","AB موجب","A موجب","B سالب"]'::jsonb, 0, 20, 6, 'multi', 'لخلوّه من مستضدات A وB وعامل ريسوس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما القانون الذي ينص على أن لكل فعل رد فعل مساوٍ في المقدار ومعاكس في الاتجاه؟', '["قانون نيوتن الأول","قانون نيوتن الثالث","قانون هوك","قانون أوم"]'::jsonb, 1, 20, 7, 'multi', 'وهو أساس عمل الدفع الصاروخي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما العنصر الذي يشكّل أساس كل المركبات العضوية؟', '["الكربون","السيليكون","الأكسجين","الكبريت"]'::jsonb, 0, 20, 8, 'multi', 'قدرته على تكوين أربع روابط تجعله عماد الكيمياء العضوية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الجزء من الدماغ المسؤول عن التوازن وتنسيق الحركة؟', '["المخيخ","القشرة الجبهية","الحُصين","النخاع المستطيل"]'::jsonb, 0, 20, 9, 'multi', 'يقع أسفل خلف الدماغ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما اسم العملية التي تنقسم فيها الخلية إلى خليتين متطابقتين وراثيًا؟', '["الانقسام المنصف","الانقسام المتساوي","الإخصاب","الطفرة"]'::jsonb, 1, 20, 10, 'multi', 'أما المنصف فينتج الأمشاج بنصف عدد الكروموسومات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_14, 'ما الحمض الموجود في المعدة والذي يساعد على هضم البروتينات؟', '["حمض الكبريتيك","حمض الهيدروكلوريك","حمض الستريك","حمض اللاكتيك"]'::jsonb, 1, 20, 11, 'multi', 'ينشّط إنزيم الببسين لتفكيك البروتين.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_15 uuid;
BEGIN
  SELECT id INTO v_lib_id_15 FROM quizzes WHERE title = 'علوم متقدمة — تحدٍّ' LIMIT 1;
  IF v_lib_id_15 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('علوم متقدمة — تحدٍّ', 'علوم وطب', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_15;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما السرعة التقريبية للضوء في الفراغ؟', '["300 ألف كم/ثانية","300 ألف كم/ساعة","30 ألف كم/ثانية","3 ملايين كم/ثانية"]'::jsonb, 0, 25, 0, 'multi', 'بدقة أكبر 299792 كم في الثانية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما العدد الذري لعنصر الحديد؟', '["24","26","29","30"]'::jsonb, 1, 25, 1, 'multi', 'الرمز Fe وله دور محوري في الهيموغلوبين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما القانون الذي يربط الجهد الكهربائي بالتيار والمقاومة؟', '["قانون فاراداي","قانون أوم","قانون كولوم","قانون لينز"]'::jsonb, 1, 25, 2, 'multi', 'ينص على أن الجهد يساوي حاصل ضرب التيار في المقاومة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما المصطلح الذي يصف تحول الطاقة النووية إلى طاقة عبر دمج نوى خفيفة كما يحدث في الشمس؟', '["الانشطار","الاندماج","الإشعاع","التحلل"]'::jsonb, 1, 25, 3, 'multi', 'يندمج الهيدروجين مكوّنًا الهيليوم مع إطلاق طاقة هائلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما اسم الجزيء الذي يحمل الشيفرة الوراثية داخل نواة الخلية؟', '["البروتين","الحمض النووي منقوص الأكسجين","الدهون الفوسفورية","الجليكوجين"]'::jsonb, 1, 25, 4, 'multi', 'يُعرف اختصارًا بالـ DNA ويتكون من شريطين لولبيين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'أي جزء من الطيف الكهرومغناطيسي يمتلك أقصر طول موجي؟', '["الأشعة تحت الحمراء","الموجات الراديوية","أشعة غاما","الضوء المرئي"]'::jsonb, 2, 25, 5, 'multi', 'قصر الطول الموجي يعني طاقة أعلى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما الظاهرة التي تفسر انحناء الضوء عند انتقاله بين وسطين مختلفي الكثافة؟', '["الانعكاس","الانكسار","الحيود","الاستقطاب"]'::jsonb, 1, 25, 6, 'multi', 'بسببها تبدو العصا مكسورة داخل الماء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما الرقم الهيدروجيني التقريبي للماء النقي عند 25 درجة مئوية؟', '["5","6","7","8"]'::jsonb, 2, 25, 7, 'multi', 'القيمة 7 تعني تعادلًا بين الحموضة والقاعدية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما اسم أول مضاد حيوي اكتُشف عام 1928؟', '["الستربتومايسين","البنسلين","التتراسيكلين","الأموكسيسيلين"]'::jsonb, 1, 25, 8, 'multi', 'اكتشفه ألكسندر فلمنغ صدفة من فطر العفن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما الوحدة التي تُقاس بها كمية المادة في النظام الدولي؟', '["الغرام","المول","اللتر","الدالتون"]'::jsonb, 1, 25, 9, 'multi', 'يحوي المول عدد أفوغادرو من الجسيمات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما الغدة التي تُلقب بسيدة الغدد لتحكمها في إفرازات غدد أخرى؟', '["الدرقية","النخامية","الكظرية","البنكرياس"]'::jsonb, 1, 25, 10, 'multi', 'تقع في قاعدة الدماغ وتفرز هرمونات منظّمة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_15, 'ما القوة التي تفسر بقاء الأقمار في مدارات حول الكواكب؟', '["الكهرومغناطيسية","الجاذبية","النووية القوية","الاحتكاك"]'::jsonb, 1, 25, 11, 'multi', 'وصفها نيوتن ثم فسّرها أينشتاين بانحناء الزمكان.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_16 uuid;
BEGIN
  SELECT id INTO v_lib_id_16 FROM quizzes WHERE title = 'كرة القدم حول العالم' LIMIT 1;
  IF v_lib_id_16 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('كرة القدم حول العالم', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_16;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'كم عدد لاعبي فريق كرة القدم داخل الملعب لكل جانب؟', '["9","10","11","12"]'::jsonb, 2, 20, 0, 'multi', 'بينهم حارس المرمى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'أي منتخب توّج بأكبر عدد من ألقاب كأس العالم؟', '["ألمانيا","البرازيل","إيطاليا","الأرجنتين"]'::jsonb, 1, 20, 1, 'multi', 'خمسة ألقاب حتى الآن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'ما اسم البطولة الأوروبية الأهم للأندية؟', '["الدوري الأوروبي","دوري أبطال أوروبا","كأس السوبر","كأس الاتحاد"]'::jsonb, 1, 20, 2, 'multi', 'كانت تُعرف سابقًا بكأس الأندية البطلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'كم مدة الشوط الواحد في مباراة كرة القدم؟', '["30 دقيقة","40 دقيقة","45 دقيقة","50 دقيقة"]'::jsonb, 2, 20, 3, 'multi', 'يضاف إليها الوقت البدل عن الضائع.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'في أي دولة أقيمت أول بطولة كأس عالم عام 1930؟', '["البرازيل","الأوروغواي","إيطاليا","فرنسا"]'::jsonb, 1, 20, 4, 'multi', 'وفاز بها المنتخب المضيف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'ما اسم الجائزة الفردية الأشهر التي تُمنح لأفضل لاعب في العالم سنويًا من مجلة فرنسية؟', '["الحذاء الذهبي","الكرة الذهبية","القفاز الذهبي","جائزة بوشكاش"]'::jsonb, 1, 20, 5, 'multi', 'انطلقت عام 1956.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'كم عدد الأشواط في مباراة كرة السلة وفق قوانين الاتحاد الدولي؟', '["اثنان","ثلاثة","أربعة","خمسة"]'::jsonb, 2, 20, 6, 'multi', 'كل ربع عشر دقائق.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'ما الرياضة التي يُستخدم فيها مصطلح لوف عند احتساب النقاط؟', '["التنس","الغولف","الكريكيت","الاسكواش"]'::jsonb, 0, 20, 7, 'multi', 'يعني صفرًا في احتساب نقاط التنس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'كل كم سنة تُقام دورة الألعاب الأولمبية الصيفية؟', '["سنتان","ثلاث","أربع","خمس"]'::jsonb, 2, 20, 8, 'multi', 'تتناوب مع الأولمبياد الشتوي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'ما عدد الحلقات في شعار الألعاب الأولمبية؟', '["أربع","خمس","ست","سبع"]'::jsonb, 1, 20, 9, 'multi', 'ترمز إلى القارات الخمس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'أي دولة استضافت كأس العالم لكرة القدم عام 2022؟', '["روسيا","قطر","الإمارات","اليابان"]'::jsonb, 1, 20, 10, 'multi', 'أول نسخة تُقام في الشرق الأوسط وفي الشتاء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_16, 'ما اسم أشهر سباق دراجات في فرنسا؟', '["جيرو ديتاليا","طواف فرنسا","فويلتا","باريس روبيه"]'::jsonb, 1, 20, 11, 'multi', 'يمتد ثلاثة أسابيع كل صيف.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_17 uuid;
BEGIN
  SELECT id INTO v_lib_id_17 FROM quizzes WHERE title = 'رياضة — أسئلة صعبة' LIMIT 1;
  IF v_lib_id_17 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('رياضة — أسئلة صعبة', 'رياضة', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_17;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما المسافة الرسمية لسباق الماراثون؟', '["40 كم","41.5 كم","42.195 كم","45 كم"]'::jsonb, 2, 25, 0, 'multi', 'تحدّدت رسميًا في أولمبياد 1908.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'كم عدد اللاعبين في فريق الكرة الطائرة داخل الملعب؟', '["خمسة","ستة","سبعة","ثمانية"]'::jsonb, 1, 25, 1, 'multi', 'بينهم لاعب الليبرو الدفاعي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما اسم الضربة في الغولف التي تعني إنهاء الحفرة بضربة واحدة؟', '["بيردي","إيغل","هول إن وان","بار"]'::jsonb, 2, 25, 2, 'multi', 'من أندر الإنجازات في اللعبة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'في أي رياضة يُمنح الحزام الأسود كأعلى تدرج شائع؟', '["المصارعة الرومانية","الجودو","رفع الأثقال","الرماية"]'::jsonb, 1, 25, 3, 'multi', 'نظام الأحزمة شائع في فنون القتال اليابانية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما البطولة التي تُعرف بالسلام الكبير في التنس وتُقام على الملاعب العشبية؟', '["رولان غاروس","ويمبلدون","أستراليا المفتوحة","أمريكا المفتوحة"]'::jsonb, 1, 25, 4, 'multi', 'أقدم بطولات التنس الأربع الكبرى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'كم عدد الجولات القصوى في نزال الملاكمة للمحترفين على ألقاب عالمية؟', '["ثمانٍ","عشر","اثنتا عشرة","خمس عشرة"]'::jsonb, 2, 25, 5, 'multi', 'خُفضت من خمس عشرة لأسباب صحية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'أي نادٍ إسباني يُلقب بالميرينغي؟', '["برشلونة","ريال مدريد","أتلتيكو مدريد","إشبيلية"]'::jsonb, 1, 25, 6, 'multi', 'نسبة إلى زيّه الأبيض.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما الرياضة التي تُستخدم فيها أدوات تُسمى المضرب والقرص المطاطي على الجليد؟', '["الكيرلنغ","هوكي الجليد","التزلج الفني","البياتلون"]'::jsonb, 1, 25, 7, 'multi', 'شعبيتها كبيرة في كندا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'من الرياضي الحائز أكبر عدد من الميداليات الذهبية الأولمبية؟', '["أوسين بولت","مايكل فيلبس","كارل لويس","لاريسا لاتينينا"]'::jsonb, 1, 25, 8, 'multi', 'سباح أمريكي تجاوز عشرين ذهبية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما مدة مباراة الرغبي التقليدية بشوطيها؟', '["60 دقيقة","70 دقيقة","80 دقيقة","90 دقيقة"]'::jsonb, 2, 25, 9, 'multi', 'شوطان مدة كل منهما أربعون دقيقة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'في سباقات الفورمولا واحد ماذا يعني العلم الأصفر؟', '["نهاية السباق","خطر وتقليل السرعة","السماح بالتجاوز","دخول منطقة الصيانة"]'::jsonb, 1, 25, 10, 'multi', 'يُمنع التجاوز أثناء رفعه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_17, 'ما عدد النقاط التي تُمنح للرمية الناجحة من خلف قوس الثلاث نقاط في السلة؟', '["واحدة","اثنتان","ثلاث","أربع"]'::jsonb, 2, 25, 11, 'multi', 'الرمية الحرة نقطة واحدة فقط.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_18 uuid;
BEGIN
  SELECT id INTO v_lib_id_18 FROM quizzes WHERE title = 'أساسيات الحاسوب والإنترنت' LIMIT 1;
  IF v_lib_id_18 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('أساسيات الحاسوب والإنترنت', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_18;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ماذا يمثّل البروتوكول HTTP في تصفح المواقع؟', '["نظام تشفير الملفات","بروتوكول نقل النصوص التشعبية","نظام تسمية النطاقات","طبقة عرض الصور"]'::jsonb, 1, 20, 0, 'multi', 'نسخته المؤمّنة HTTPS تضيف طبقة تشفير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'كم بايت في الكيلوبايت الواحد وفق النظام الثنائي التقليدي؟', '["100","512","1000","1024"]'::jsonb, 3, 20, 1, 'multi', 'لأن الحوسبة تعتمد أساس اثنين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما الشركة التي طوّرت نظام التشغيل أندرويد قبل أن تشتريه غوغل؟', '["أندرويد إنك","نوكيا","بالم","بلاك بيري"]'::jsonb, 0, 20, 2, 'multi', 'استحوذت غوغل عليها عام 2005.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما وظيفة ذاكرة الوصول العشوائي في الجهاز؟', '["تخزين دائم للملفات","تخزين مؤقت للبيانات قيد التشغيل","معالجة الرسوميات","تبريد المعالج"]'::jsonb, 1, 20, 3, 'multi', 'تفقد محتواها عند انقطاع الطاقة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما اللغة الأساسية لتنسيق مظهر صفحات الويب؟', '["HTML","CSS","SQL","JSON"]'::jsonb, 1, 20, 4, 'multi', 'HTML للبنية وCSS للتنسيق.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما الاسم الذي يُطلق على العنوان الرقمي الذي يميّز كل جهاز على الشبكة؟', '["عنوان MAC فقط","عنوان IP","رقم المنفذ","اسم النطاق"]'::jsonb, 1, 20, 5, 'multi', 'النسخة الرابعة منه تتكون من أربع مجموعات رقمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما نوع البرمجيات الخبيثة التي تشفّر ملفات الضحية وتطلب فدية؟', '["حصان طروادة","برمجية الفدية","برنامج التجسس","الدودة"]'::jsonb, 1, 20, 6, 'multi', 'انتشرت عالميًا في هجمات مثل واناكراي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ماذا يعني اختصار VPN في سياق الشبكات؟', '["شبكة خاصة افتراضية","بروتوكول تحقق شخصي","شبكة عامة موثوقة","نظام تصفح مجهول محلي"]'::jsonb, 0, 20, 7, 'multi', 'ينشئ نفقًا مشفّرًا بين الجهاز والخادم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما الجزء المسؤول عن تنفيذ التعليمات الحسابية والمنطقية في الحاسوب؟', '["القرص الصلب","المعالج","اللوحة الأم","المزوّد"]'::jsonb, 1, 20, 8, 'multi', 'يحتوي على وحدة الحساب والمنطق.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما الشركة التي تقف خلف خدمة الحوسبة السحابية المعروفة اختصارًا بـ AWS؟', '["مايكروسوفت","أمازون","غوغل","أوراكل"]'::jsonb, 1, 20, 9, 'multi', 'أُطلقت عام 2006 وتُعد الأكبر سوقيًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما الامتداد الشائع لملف صورة يدعم الخلفية الشفافة؟', '["JPG","PNG","BMP","TIFF"]'::jsonb, 1, 20, 10, 'multi', 'يدعم قناة ألفا للشفافية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_18, 'ما التقنية اللاسلكية قصيرة المدى المستخدمة في سماعات الأذن؟', '["البلوتوث","الواي فاي","الأشعة تحت الحمراء","الجيل الخامس"]'::jsonb, 0, 20, 11, 'multi', 'تعمل في نطاق 2.4 غيغاهرتز.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_19 uuid;
BEGIN
  SELECT id INTO v_lib_id_19 FROM quizzes WHERE title = 'تقنية للمحترفين' LIMIT 1;
  IF v_lib_id_19 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تقنية للمحترفين', 'تكنولوجيا', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_19;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما بنية البيانات التي تعمل بمبدأ الداخل أخيرًا هو الخارج أولًا؟', '["الطابور","المكدس","القائمة المرتبطة","الشجرة"]'::jsonb, 1, 25, 0, 'multi', 'الطابور يعمل بالعكس: الداخل أولًا يخرج أولًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما اللغة المستخدمة للاستعلام عن قواعد البيانات العلائقية؟', '["SQL","XML","PHP","Bash"]'::jsonb, 0, 25, 1, 'multi', 'تشمل أوامر الاختيار والإدراج والتحديث.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما المنفذ الافتراضي لخدمة HTTPS؟', '["21","80","443","8080"]'::jsonb, 2, 25, 2, 'multi', 'المنفذ 80 مخصص لـ HTTP غير المشفّر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما اسم النموذج المرجعي المكوّن من سبع طبقات لوصف اتصالات الشبكات؟', '["نموذج OSI","نموذج TCP","نموذج MVC","نموذج REST"]'::jsonb, 0, 25, 3, 'multi', 'تبدأ بالطبقة الفيزيائية وتنتهي بطبقة التطبيقات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما أسلوب التحكم في الإصدارات الذي يعتمد عليه معظم المطورين اليوم؟', '["SVN","Git","CVS","Mercurial"]'::jsonb, 1, 25, 4, 'multi', 'طوّره لينوس تورفالدس عام 2005.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما التعقيد الزمني لخوارزمية البحث الثنائي في مصفوفة مرتبة؟', '["ثابت","لوغاريتمي","خطي","تربيعي"]'::jsonb, 1, 25, 5, 'multi', 'لأنها تنصّف مجال البحث في كل خطوة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما الغرض من خدمة DNS؟', '["تشفير البيانات","ترجمة أسماء النطاقات إلى عناوين رقمية","توزيع الحمل","ضغط الملفات"]'::jsonb, 1, 25, 6, 'multi', 'تعمل كدليل هاتف للإنترنت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'أي مفهوم يصف حزم التطبيق مع اعتمادياته في بيئة معزولة خفيفة؟', '["الحاويات","الأجهزة الافتراضية الكاملة","التقسيم القرصي","التخزين الكتلي"]'::jsonb, 0, 25, 7, 'multi', 'أشهر أدواتها دوكر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما الفرق الجوهري الذي يميّز الذاكرة من نوع SSD عن القرص الصلب التقليدي؟', '["يعتمد على أقراص دوّارة","لا يحتوي أجزاء متحركة","يخزّن على أشرطة مغناطيسية","يحتاج تبريدًا سائلًا"]'::jsonb, 1, 25, 8, 'multi', 'غياب الأجزاء المتحركة يرفع السرعة والمتانة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما الخوارزمية التي تُستخدم في تشفير المفتاح العام وسُميت بأحرف مطوّريها الثلاثة؟', '["AES","RSA","SHA","DES"]'::jsonb, 1, 25, 9, 'multi', 'تعتمد صعوبة تحليل الأعداد الكبيرة إلى عواملها الأولية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما المصطلح الذي يصف تقنية دفتر الحسابات الموزّع الذي تقوم عليه العملات الرقمية؟', '["سلسلة الكتل","قاعدة بيانات علائقية","الحوسبة الطرفية","التخزين السحابي"]'::jsonb, 0, 25, 10, 'multi', 'كل كتلة ترتبط بسابقتها ببصمة تشفيرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_19, 'ما رمز حالة HTTP الذي يعني أن المورد غير موجود؟', '["301","403","404","500"]'::jsonb, 2, 25, 11, 'multi', 'الرمز 500 يشير إلى خطأ في الخادم.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_20 uuid;
BEGIN
  SELECT id INTO v_lib_id_20 FROM quizzes WHERE title = 'سيرة النبي محمد (ص)' LIMIT 1;
  IF v_lib_id_20 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة النبي محمد (ص)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_20;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما التاريخ المشهور عند الإمامية لولادة النبي محمد (ص)؟', '["12 ربيع الأول","15 شعبان","27 رجب","17 ربيع الأول"]'::jsonb, 3, 20, 0, 'multi', 'ينقل المجلسي اتفاق علماء الإمامية على السابع عشر من ربيع الأول.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'في أي مدينة وُلد النبي محمد (ص)؟', '["المدينة","الطائف","القدس","مكة"]'::jsonb, 3, 15, 1, 'multi', 'تورد روايات مولده أنه وُلد في مكة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من هو والد النبي محمد (ص)؟', '["أبو طالب","عبد الله بن عبد المطلب","حمزة","عبد المطلب"]'::jsonb, 1, 15, 2, 'multi', 'نسبه هو محمد بن عبد الله بن عبد المطلب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من كفل النبي (ص) بعد وفاة جده عبد المطلب؟', '["العباس","حمزة","أبو طالب","أبو لهب"]'::jsonb, 2, 15, 3, 'multi', 'انتقلت كفالته بعد وفاة عبد المطلب إلى عمه أبي طالب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'كم كان عمر النبي (ص) حين تزوج السيدة خديجة (ع)؟', '["عشرون سنة","خمس وثلاثون سنة","ثلاثون سنة","خمس وعشرون سنة"]'::jsonb, 3, 20, 4, 'multi', 'تزوج النبي خديجة وهو ابن خمس وعشرين سنة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من ألقى خطبة زواج النبي (ص) من السيدة خديجة (ع)؟', '["عبد المطلب","أبو طالب","العباس","حمزة"]'::jsonb, 1, 20, 5, 'multi', 'حفظت الرواية خطبة أبي طالب في طلب خديجة لابن أخيه.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'كم كان عمر النبي (ص) عند بعثته بالرسالة؟', '["ثلاثون سنة","خمس وثلاثون سنة","خمس وأربعون سنة","أربعون سنة"]'::jsonb, 3, 15, 6, 'multi', 'كانت بعثته بعد مضي أربعين سنة من عمره الشريف.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما التاريخ المشهور عند الإمامية لبعثة النبي (ص)؟', '["17 ربيع الأول","27 رجب","15 شعبان","13 رجب"]'::jsonb, 1, 20, 7, 'multi', 'المشهور الإمامي أن المبعث وقع في السابع والعشرين من رجب.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من كانت أول امرأة آمنت برسالة النبي (ص)؟', '["خديجة بنت خويلد","أم سلمة","فاطمة بنت أسد","أسماء بنت عميس"]'::jsonb, 0, 15, 8, 'multi', 'كانت خديجة أول من صدّق النبي وآمن به من النساء.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من كان أول الرجال إيمانًا بالنبي (ص)؟', '["حمزة بن عبد المطلب","علي بن أبي طالب","زيد بن حارثة","جعفر بن أبي طالب"]'::jsonb, 1, 15, 9, 'multi', 'علي أول من آمن من الرجال، بعد خديجة.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'أين جمع النبي (ص) بني عبد المطلب عند إنذار عشيرته الأقربين؟', '["دار الأرقم","دار أبي طالب","المسجد الحرام","جبل الصفا"]'::jsonb, 1, 25, 10, 'multi', 'جمع بني عبد المطلب في دار أبي طالب في واقعة حديث الدار.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما المقاطعة التي فرضتها قريش على بني هاشم؟', '["منع البيع والزواج والمخالطة","منع السفر إلى الشام","منع الحج وحده","منع دخول المسجد فقط"]'::jsonb, 0, 25, 11, 'multi', 'تضمنت الصحيفة منع البيع والزواج والمخالطة حتى يسلموا النبي.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من أنفق ماله في نصرة النبي (ص) زمن حصار الشعب؟', '["العباس","حمزة","السيدة خديجة","أبو سلمة"]'::jsonb, 2, 20, 12, 'multi', 'أنفقت خديجة من مالها في شدة الحصار على المحاصرين.', 'البعثة والدعوة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من نام في فراش النبي (ص) ليلة خروجه للهجرة؟', '["حمزة","جعفر","علي بن أبي طالب","سلمان"]'::jsonb, 2, 15, 13, 'multi', 'بات علي في فراش النبي تمويهًا على المتآمرين.', 'الهجرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما أول عمل عمراني قام به النبي (ص) عند وصوله إلى قباء؟', '["بناء مسجد قباء","حفر خندق","بناء دار الإمارة","بناء السوق"]'::jsonb, 0, 20, 14, 'multi', 'أقام النبي في قباء وبنى مسجدها قبل دخوله المدينة.', 'الهجرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'بين أي جماعتين عقد النبي (ص) المؤاخاة بعد الهجرة؟', '["قريش وثقيف","الأوس والخزرج فقط","أهل مكة واليهود","المهاجرين والأنصار"]'::jsonb, 3, 20, 15, 'multi', 'آخى النبي بين المهاجرين والأنصار، واتخذ عليًا أخًا له.', 'بناء المجتمع');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما أول معركة كبرى انتصر فيها المسلمون بقيادة النبي (ص)؟', '["أحد","الخندق","بدر","خيبر"]'::jsonb, 2, 15, 16, 'multi', 'كانت بدر أول مواجهة كبرى وانتهت بنصر المسلمين.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ما الوسيلة الدفاعية التي استُخدمت حول المدينة في غزوة الأحزاب؟', '["حفر الخندق","أبراج خشبية","متاريس بحرية","سور حجري"]'::jsonb, 0, 15, 17, 'multi', 'حُفر الخندق في الجهة المكشوفة من المدينة فعاق الأحزاب.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'لمن أعطى النبي (ص) الراية يوم خيبر بعد قوله إنه يحب الله ورسوله؟', '["علي بن أبي طالب","سعد بن أبي وقاص","خالد بن الوليد","الزبير بن العوام"]'::jsonb, 0, 20, 18, 'multi', 'دعا النبي عليًا ودفع إليه الراية، وكان الفتح على يديه.', 'الغزوات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من الذين خرج بهم النبي (ص) لمباهلة نصارى نجران؟', '["العباس وحمزة وجعفر وعقيل","علي وفاطمة والحسن والحسين","زوجاته وبناته جميعًا","أبو ذر وسلمان والمقداد وعمار"]'::jsonb, 1, 25, 19, 'multi', 'خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين.', 'المواقف المفصلية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'ماذا أعلن النبي (ص) في غدير خم بشأن الإمام علي (ع)؟', '["تعيينه قائدًا على اليمن فقط","تكليفه بجمع الصدقات","أنه مولى من كان النبي مولاه","إرساله إلى خيبر"]'::jsonb, 2, 25, 20, 'multi', 'أعلن النبي في غدير خم: من كنت مولاه فعلي مولاه.', 'المواقف المفصلية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_20, 'من تولى غسل النبي (ص) وتجهيزه بعد وفاته؟', '["علي بن أبي طالب","أبو ذر","سلمان","العباس وحده"]'::jsonb, 0, 20, 21, 'multi', 'أوصى النبي أن يتولى علي غسله، فغسله وكفنه.', 'الرحيل');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_21 uuid;
BEGIN
  SELECT id INTO v_lib_id_21 FROM quizzes WHERE title = 'سيرة الإمام علي بن أبي طالب (ع)' LIMIT 1;
  IF v_lib_id_21 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي بن أبي طالب (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_21;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'أين كانت ولادة الإمام علي (ع)؟', '["في البيت الحرام بمكة","في دار أبي طالب بمكة","في المسجد النبوي بالمدينة","في شعب أبي طالب"]'::jsonb, 0, 20, 0, 'multi', 'يذكر الشيخ المفيد أن الإمام عليًا (ع) وُلد في البيت الحرام بمكة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'في أي يوم من رجب وُلد الإمام علي (ع) بحسب الإرشاد؟', '["العاشر","الثالث عشر","الخامس عشر","السابع والعشرون"]'::jsonb, 1, 20, 1, 'multi', 'حدد الإرشاد ولادته يوم الجمعة، الثالث عشر من شهر رجب.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'من هي والدة الإمام علي (ع)؟', '["أم البنين","فاطمة الزهراء","فاطمة بنت أسد","صفية بنت عبد المطلب"]'::jsonb, 2, 20, 2, 'multi', 'أمه فاطمة بنت أسد بن هاشم بن عبد مناف.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'ما كنية الإمام علي (ع) التي يذكرها الشيخ المفيد؟', '["أبو الحسن","أبو محمد","أبو جعفر","أبو القاسم"]'::jsonb, 0, 20, 3, 'multi', 'نص الشيخ المفيد على أن كنيته أبو الحسن.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كيف وصف الإرشاد صلة فاطمة بنت أسد بالنبي (ص)؟', '["كانت له بمنزلة الأم","كانت أخته من الرضاعة","كانت عمته","كانت مرضعته الوحيدة"]'::jsonb, 0, 25, 4, 'multi', 'ذكر الإرشاد أنها كانت للنبي (ص) بمنزلة الأم، وقد نشأ في رعايتها.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'ما منزلة الإمام علي (ع) في السبق إلى الإسلام بحسب الإرشاد؟', '["أول مؤذن في الإسلام","أول مهاجر إلى الحبشة","أول خطيب في المدينة","أول ذكر دعاه النبي فأجاب"]'::jsonb, 3, 25, 5, 'multi', 'يقرر الإرشاد أنه أول ذكر دعاه النبي (ص) إلى الإسلام فأجابه.', 'بدايات الإسلام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم سنة صحب الإمام علي (ع) النبي بعد البعثة في مكة؟', '["ثلاث وعشرون سنة","عشر سنوات","خمس عشرة سنة","ثلاث عشرة سنة"]'::jsonb, 3, 20, 6, 'multi', 'قسم الإرشاد صحبته بعد البعثة إلى ثلاث عشرة سنة في مكة وعشر في المدينة.', 'بدايات الإسلام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم سنة صحب الإمام علي (ع) النبي بعد الهجرة في المدينة؟', '["ثماني سنوات","عشر سنوات","ثلاث عشرة سنة","خمس سنوات"]'::jsonb, 1, 20, 7, 'multi', 'ذكر الإرشاد عشر سنوات في المدينة بعد الهجرة دافع فيها عن النبي (ص).', 'العهد المدني');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم كان عمر الإمام علي (ع) يوم رحيل النبي (ص) بحسب الإرشاد؟', '["ثلاثًا وستين سنة","ثلاثين سنة","أربعين سنة","ثلاثًا وثلاثين سنة"]'::jsonb, 3, 20, 8, 'multi', 'ينص الإرشاد على أن عمره يوم رحيل النبي (ص) كان ثلاثًا وثلاثين سنة.', 'العهد النبوي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'ما العمل الذي ربطه الإرشاد بآية الولاية (المائدة: 55)؟', '["فتح باب خيبر","إطعام المسكين عند الإفطار","المبيت في فراش النبي","إيتاء الزكاة حال الركوع"]'::jsonb, 3, 25, 9, 'multi', 'استدل الإرشاد بالآية وذكر أن الإمام عليًا (ع) تصدق وهو راكع.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'من لبّى دعوة النبي (ص) إلى نصرته في اجتماع بني عبد المطلب؟', '["حمزة بن عبد المطلب","الإمام علي (ع)","جعفر بن أبي طالب","العباس بن عبد المطلب"]'::jsonb, 1, 20, 10, 'multi', 'قام الإمام علي (ع)، وكان أصغر القوم، وقال للنبي (ص): أنا أنصرك.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'أي عبارة قالها النبي (ص) في غدير خم بحسب الإرشاد؟', '["أنا مدينة العلم وعلي بابها","علي مني وأنا من علي","من كنت مولاه فعلي مولاه","لا فتى إلا علي"]'::jsonb, 2, 20, 11, 'multi', 'أورد الإرشاد قول النبي (ص): من كنت مولاه فعلي مولاه، في خطبة غدير خم.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'بمن شبّه النبي (ص) منزلة علي (ع) منه عند الخروج إلى تبوك؟', '["إسماعيل من إبراهيم","يوشع من موسى","هارون من موسى","يحيى من زكريا"]'::jsonb, 2, 20, 12, 'multi', 'قال له: أنت مني بمنزلة هارون من موسى إلا أنه لا نبي بعدي.', 'الفضائل والدلالات');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم دامت إمامة الإمام علي (ع) بعد النبي بحسب الإرشاد؟', '["خمسًا وعشرين سنة","ثلاثين سنة","خمس سنوات وستة أشهر","ثلاثًا وثلاثين سنة"]'::jsonb, 1, 20, 13, 'multi', 'ذكر الشيخ المفيد أن مدة إمامته بعد النبي (ص) كانت ثلاثين سنة.', 'الإمامة والخلافة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم استمرت مدة حكم الإمام علي (ع) الفعلي المضطربة بالحروب؟', '["أربع وعشرون سنة وستة أشهر","أربع سنوات","عشر سنوات","خمس سنوات وستة أشهر"]'::jsonb, 3, 25, 14, 'multi', 'يفصل الإرشاد ثلاثين سنة إلى 24 سنة و6 أشهر منع فيها من التصرف، و5 سنوات و6 أشهر واجه فيها الحروب.', 'الإمامة والخلافة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'في أي مسجد ضُرب الإمام علي (ع) الضربة التي استشهد بسببها؟', '["المسجد الحرام","مسجد الكوفة","المسجد النبوي","مسجد قباء"]'::jsonb, 1, 20, 15, 'multi', 'ذكر الإرشاد أن ابن ملجم ضربه في مسجد الكوفة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'من نفّذ ضربة اغتيال الإمام علي (ع)؟', '["الأشعث بن قيس","عمرو بن العاص","معاوية بن أبي سفيان","عبد الرحمن بن ملجم المرادي"]'::jsonb, 3, 20, 16, 'multi', 'ينسب الإرشاد الضربة القاتلة إلى عبد الرحمن بن ملجم المرادي.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'متى وقعت ضربة الإمام علي (ع) في مسجد الكوفة؟', '["ليلة الحادي والعشرين من رمضان","ليلة السابع عشر من رمضان","ليلة التاسع عشر من رمضان","ليلة الثالث والعشرين من رمضان"]'::jsonb, 2, 20, 17, 'multi', 'خرج لإيقاظ الناس لصلاة الفجر ليلة التاسع عشر من رمضان فضربه ابن ملجم.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'ما الوصف الذي يذكره الإرشاد لسيف ابن ملجم؟', '["كان مكسورًا","كان مسمومًا","كان ذا نصلين","كان من غنائم بدر"]'::jsonb, 1, 20, 18, 'multi', 'نص الإرشاد على أن ابن ملجم ضرب أعلى رأس الإمام بسيف مسموم.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'في أي تاريخ كانت شهادة الإمام علي (ع) بحسب الإرشاد؟', '["21 رمضان سنة 41هـ","19 رمضان سنة 40هـ","21 رمضان سنة 40هـ","19 رمضان سنة 39هـ"]'::jsonb, 2, 20, 19, 'multi', 'كانت وفاته شهيدًا قبل فجر الجمعة، الحادي والعشرين من رمضان سنة 40هـ.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'من تولّى غسل الإمام علي (ع) وتكفينه تنفيذًا لوصيته؟', '["الحسن والحسين (ع)","محمد بن الحنفية وعبد الله بن جعفر","عمار بن ياسر والمقداد","قنبر والأصبغ بن نباتة"]'::jsonb, 0, 25, 20, 'multi', 'تولى الإمامان الحسن والحسين (ع) غسله وتكفينه وفق وصيته.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'إلى أي موضع حُمل الإمام علي (ع) لدفنه؟', '["مقبرة المعلاة في مكة","البقيع في المدينة","الغري في النجف","وادي السلام في البصرة"]'::jsonb, 2, 20, 21, 'multi', 'حمله الحسنان (ع) إلى الغري في النجف من أرض الكوفة ودفناه هناك.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'لماذا أُخفي أثر قبر الإمام علي (ع) أول الأمر؟', '["انتظار بناء مدينة النجف","لمنع السيول من الوصول إليه","خشية اعتداء الأمويين عليه","لوقوع خلاف على موضع الدفن"]'::jsonb, 2, 25, 22, 'multi', 'أوصى بإخفاء أثر قبره لما علمه من عداوة الحكم الأموي وخشية العبث به.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'من دلّ الشيعة على قبر الإمام علي (ع) في العصر العباسي؟', '["الإمام جعفر الصادق (ع)","الإمام محمد الباقر (ع)","الإمام موسى الكاظم (ع)","زيد بن علي"]'::jsonb, 0, 25, 23, 'multi', 'ذكر الإرشاد أن الإمام جعفر الصادق (ع) عرّف القبر في العصر العباسي، فعرفته الشيعة وزارته.', 'الدفن والمزار');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_21, 'كم كان عمر الإمام علي (ع) عند استشهاده بحسب الإرشاد؟', '["ثلاثًا وستين سنة","ستين سنة","خمسًا وستين سنة","ثمانٍ وخمسين سنة"]'::jsonb, 0, 20, 24, 'multi', 'ختم الشيخ المفيد ترجمته المختصرة بذكر أن عمر الإمام عند وفاته كان 63 سنة.', 'الاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_22 uuid;
BEGIN
  SELECT id INTO v_lib_id_22 FROM quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1;
  IF v_lib_id_22 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة السيدة فاطمة الزهراء (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_22;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'من هي والدة السيدة فاطمة الزهراء (ع)؟', '["خديجة بنت خويلد","فاطمة بنت أسد","أم سلمة","صفية بنت عبد المطلب"]'::jsonb, 0, 20, 0, 'multi', 'الزهراء (ع) ابنة النبي محمد (ص) من زوجته خديجة بنت خويلد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'في أي مدينة ولدت السيدة فاطمة الزهراء (ع)؟', '["الكوفة","المدينة المنورة","الطائف","مكة المكرمة"]'::jsonb, 3, 20, 1, 'multi', 'ولدت (ع) في مكة في بيت النبوة قبل الهجرة إلى المدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ما اليوم المشهور لولادة الزهراء (ع) في الرواية الإمامية؟', '["15 شعبان","13 رجب","20 جمادى الآخرة","10 ربيع الأول"]'::jsonb, 2, 20, 2, 'multi', 'العشرون من جمادى الآخرة هو تاريخ الولادة المشهور عند الإمامية.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'أي كنية اشتهرت بها الزهراء (ع) وتعبّر عن شدة قربها من النبي (ص)؟', '["أم المؤمنين","أم البنين","أم أبيها","أم عبد الله"]'::jsonb, 2, 20, 3, 'multi', '«أم أبيها» من كناها المشهورة في كتب المناقب الإمامية.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'بمن تزوجت السيدة فاطمة الزهراء (ع)؟', '["العباس بن عبد المطلب","جعفر بن أبي طالب","زيد بن حارثة","الإمام علي بن أبي طالب (ع)"]'::jsonb, 3, 20, 4, 'multi', 'زوّج النبي (ص) فاطمة (ع) من الإمام علي بن أبي طالب (ع).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ما الذي بيع لتجهيز مهر الزهراء (ع) في الرواية المشهورة؟', '["سيفه ذو الفقار","درع الإمام علي (ع)","ناقته","خاتمه"]'::jsonb, 1, 20, 5, 'multi', 'أمر النبي (ص) عليًا (ع) ببيع درعه ليجعل ثمنها في المهر وتجهيز البيت.', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'أي حفيدين للنبي (ص) هما ابنا الزهراء (ع)؟', '["محمد وإبراهيم","الحسن والحسين (ع)","جعفر وعقيل","القاسم وعبد الله"]'::jsonb, 1, 20, 6, 'multi', 'الحسن والحسين (ع) ابنا علي وفاطمة، وهما سبطا رسول الله (ص).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'من ابنتا الزهراء (ع) اللتان تذكرهما كتب السيرة ضمن أولادها؟', '["خديجة وصفية","رقية وسكينة","فاطمة وحكيمة","زينب وأم كلثوم"]'::jsonb, 3, 20, 7, 'multi', 'تعد المصادر زينب وأم كلثوم مع الحسن والحسين ضمن أولاد فاطمة وعلي (ع).', 'الزواج والأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'كيف قسّم النبي (ص) العمل بين علي وفاطمة (ع)؟', '["جعله كله على علي","لعلي عمل البيت ولفاطمة ما خارجه","لفاطمة عمل البيت ولعلي ما خارجه","جعله كله على فاطمة"]'::jsonb, 2, 25, 8, 'multi', 'قضى النبي (ص) على فاطمة بخدمة ما دون الباب، وعلى علي بما خلفه.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ماذا علّم النبي (ص) فاطمة (ع) بدل الخادم؟', '["زيارة عاشوراء","دعاء كميل","صلاة جعفر","تسبيح الزهراء"]'::jsonb, 3, 20, 9, 'multi', 'علّمها النبي (ص) ذكرًا صار معروفًا بتسبيح فاطمة الزهراء.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'كيف يبدأ الترتيب المروي لتسبيح الزهراء (ع) بعد الصلاة؟', '["33 مرة «سبحان الله»","34 مرة «الحمد لله»","34 مرة «الله أكبر»","33 مرة «لا إله إلا الله»"]'::jsonb, 2, 25, 10, 'multi', 'يبدأ بأربع وثلاثين تكبيرة، ثم 33 تحميدة، ثم 33 تسبيحة.', 'بيت الزهراء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'من المرأة التي اصطحبها النبي (ص) إلى المباهلة مع نصارى نجران؟', '["صفية بنت عبد المطلب","أم سلمة","زينب بنت جحش","فاطمة الزهراء (ع)"]'::jsonb, 3, 20, 11, 'multi', 'خرج النبي للمباهلة بعلي وفاطمة والحسن والحسين (ع).', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'من ضمهم الكساء مع النبي (ص) في الرواية الإمامية؟', '["أبو بكر وعمر وعثمان وعلي","العباس وجعفر وعقيل وزيد","علي وفاطمة والحسن والحسين","حمزة والعباس وجعفر وعقيل"]'::jsonb, 2, 20, 12, 'multi', 'اجتمع تحت الكساء النبي وعلي وفاطمة والحسن والحسين، وهم الخمسة.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'أي آية ارتبطت بأصحاب الكساء ومنهم الزهراء (ع)؟', '["آية التطهير","آية الكرسي","آية الدين","آية النجوى"]'::jsonb, 0, 20, 13, 'multi', 'نزلت آية التطهير في النبي وعلي وفاطمة والحسن والحسين (ع).', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'أي سورة ربطت الروايات بإطعام أهل البيت المسكين واليتيم والأسير؟', '["سورة الإنسان","سورة الفتح","سورة الجمعة","سورة الملك"]'::jsonb, 0, 20, 14, 'multi', 'تذكر الروايات نزول آيات الإطعام من سورة الإنسان في أهل هذا البيت.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'بماذا وصف النبي (ص) فاطمة في الحديث المشهور «فاطمة بضعة مني»؟', '["عمته","خادمته","أخته","بضعة منه"]'::jsonb, 3, 20, 15, 'multi', 'قال النبي (ص): «فاطمة بضعة مني»، دلالة على شدة اتصالها به.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ما اللقب الدال على انقطاع الزهراء (ع) إلى الله وتميزها؟', '["العقيلة","البتول","الحوراء","الكريمة"]'::jsonb, 1, 20, 16, 'multi', '«البتول» من ألقاب فاطمة (ع) الواردة في أبواب أسمائها وفضائلها.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ما اسم الأرض التي طالبت الزهراء (ع) بحقها فيها بعد رحيل النبي (ص)؟', '["خيبر","فدك","قباء","العقيق"]'::jsonb, 1, 20, 17, 'multi', 'احتجت الزهراء (ع) في قضية فدك وخطبت مطالبة بحقها ومستدلة بالقرآن.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'أين ألقت الزهراء (ع) خطبتها المعروفة في قضية فدك؟', '["مسجد النبي (ص)","مسجد قباء","المسجد الحرام","مسجد الكوفة"]'::jsonb, 0, 20, 18, 'multi', 'دخلت فاطمة (ع) مسجد رسول الله (ص) وخاطبت الحاضرين في خطبتها.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'بأي نوع من الأدلة احتجت الزهراء (ع) في خطبتها بشأن الميراث؟', '["بأشعار الجاهلية","بآيات من القرآن","بأعراف الروم","برسائل ملوك اليمن"]'::jsonb, 1, 25, 19, 'multi', 'استشهدت بآيات وراثة الأنبياء وأحكام المواريث لتقيم حجتها.', 'المواقف بعد رحيل النبي');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'من تولّى غسل الزهراء (ع) ودفنها بحسب وصيتها؟', '["سلمان الفارسي","العباس بن عبد المطلب","الإمام علي (ع)","عمار بن ياسر"]'::jsonb, 2, 20, 20, 'multi', 'أوصت فاطمة (ع) عليًا (ع)، فتولى تجهيزها ودفنها ليلًا.', 'الأيام الأخيرة والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_22, 'ما الذي ترتب على دفن الزهراء (ع) ليلًا وإخفاء موضع قبرها؟', '["لم يُعرف موضع قبرها يقينًا","نُقل قبرها إلى مكة","دُفنت في الكوفة","نُقش اسمها على باب المسجد"]'::jsonb, 0, 25, 21, 'multi', 'عُفّي موضع قبرها، ولذلك بقي تحديد موضعه غير مقطوع به.', 'الأيام الأخيرة والاستشهاد');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_23 uuid;
BEGIN
  SELECT id INTO v_lib_id_23 FROM quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1;
  IF v_lib_id_23 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام الحسن المجتبى (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_23;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'في أي مدينة وُلد الإمام الحسن المجتبى (ع)؟', '["المدينة المنورة","مكة المكرمة","الكوفة","البصرة"]'::jsonb, 0, 20, 0, 'multi', 'وُلد الإمام الحسن (ع) في المدينة المنورة في شهر رمضان سنة 3 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'ما الشهر الهجري الذي شهد ولادة الإمام الحسن (ع)؟', '["رجب","شعبان","رمضان","محرم"]'::jsonb, 2, 20, 1, 'multi', 'يذكر الشيخ المفيد أن ولادته (ع) كانت في النصف من شهر رمضان سنة 3 هـ.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'ما كنية الإمام الحسن المجتبى (ع)؟', '["أبو عبد الله","أبو محمد","أبو الحسن","أبو جعفر"]'::jsonb, 1, 20, 2, 'multi', 'كنية الإمام الحسن بن علي (ع) هي أبو محمد.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من أم الإمام الحسن المجتبى (ع)؟', '["فاطمة الزهراء (ع)","أم البنين (ع)","خديجة الكبرى (ع)","فاطمة بنت أسد (ع)"]'::jsonb, 0, 20, 3, 'multi', 'الإمام الحسن (ع) هو الابن الأكبر للإمام علي (ع) والسيدة فاطمة الزهراء (ع).', 'النسب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من تولى الإمامة بعد استشهاد الإمام علي (ع)؟', '["الإمام الحسين (ع)","الإمام الحسن (ع)","محمد بن الحنفية","عبد الله بن عباس"]'::jsonb, 1, 20, 4, 'multi', 'انتقلت الإمامة بعد أمير المؤمنين (ع) إلى ابنه الإمام الحسن المجتبى (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'في أي يوم بايع أهل العراق الإمام الحسن (ع) بعد استشهاد أبيه؟', '["الجمعة 21 رمضان سنة 40 هـ","الجمعة 11 رمضان سنة 40 هـ","الاثنين 21 رمضان سنة 41 هـ","الجمعة 10 محرم سنة 40 هـ"]'::jsonb, 0, 30, 5, 'multi', 'تمت البيعة للإمام الحسن (ع) يوم الجمعة الحادي والعشرين من رمضان سنة 40 هـ.', 'البيعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من دعا الناس إلى بيعة الإمام الحسن (ع) عقب خطبته في الكوفة؟', '["قيس بن سعد","عبد الله بن العباس","حجر بن عدي","سليمان بن صرد"]'::jsonb, 1, 25, 6, 'multi', 'قام عبد الله بن العباس بعد خطبة الإمام ودعا الناس إلى بيعته، فأجابوه.', 'البيعة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'إلى أي مدينة أرسل الإمام الحسن (ع) عبد الله بن العباس بعد البيعة؟', '["البصرة","المدائن","واسط","المدينة"]'::jsonb, 0, 20, 7, 'multi', 'بعد تثبيت الولاة والعمال أرسل الإمام عبد الله بن العباس إلى البصرة.', 'إدارة الدولة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'إلى أي منطقتين أرسل معاوية جاسوسين بعد بيعة الإمام الحسن (ع)؟', '["اليمن والحجاز","المدينة ومكة","المدائن وواسط","الكوفة والبصرة"]'::jsonb, 3, 25, 8, 'multi', 'أرسل معاوية رجلًا إلى الكوفة وآخر من بني القين إلى البصرة لجمع الأخبار والإفساد.', 'مواجهة معاوية');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من قائد مقدمة جيش الإمام الحسن (ع) التي وُجهت إلى مسكن؟', '["حجر بن عدي","قيس بن سعد","عدي بن حاتم","عبيد الله بن العباس"]'::jsonb, 3, 25, 9, 'multi', 'قدّم الإمام عبيد الله بن العباس على اثني عشر ألفًا، وجعل قيس بن سعد وسعيد بن قيس من بعده.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'كم كان عدد جنود مقدمة الإمام الحسن (ع) بقيادة عبيد الله بن العباس؟', '["عشرون ألفًا","ثمانية آلاف","اثنا عشر ألفًا","أربعون ألفًا"]'::jsonb, 2, 25, 10, 'multi', 'جهز الإمام الحسن (ع) مقدمة قوامها اثنا عشر ألف مقاتل وأمرها بالتوجه إلى مسكن.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'في أي موضع نزل الإمام الحسن (ع) حين خرج لمواجهة جيش الشام؟', '["النخيلة","ساباط المدائن","صفين","النهروان"]'::jsonb, 1, 20, 11, 'multi', 'تحرك الإمام من الكوفة حتى نزل ساباط المدائن، وهناك اختبر استعداد الناس.', 'التحرك العسكري');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من الذي طعن الإمام الحسن (ع) في ساباط؟', '["بسر بن أرطاة","الجراح بن سنان","الضحاك بن قيس","عمرو بن العاص"]'::jsonb, 1, 25, 12, 'multi', 'اعترض الجراح بن سنان الأسدي الإمام في مظلم ساباط وطعنه في فخذه بمعول.', 'المحنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'إلى بيت أي والي نُقل الإمام الحسن (ع) للعلاج بعد طعنه؟', '["زياد بن أبيه","المغيرة بن شعبة","سعد بن مسعود الثقفي","النعمان بن بشير"]'::jsonb, 2, 25, 13, 'multi', 'حُمل الإمام إلى المدائن ونزل على سعد بن مسعود الثقفي، والي أمير المؤمنين عليها.', 'المحنة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'ما الغاية التي صرّح بها الإمام الحسن (ع) لقبول الصلح؟', '["نقل العاصمة إلى المدينة","زيادة خراج العراق","توسيع حدود الدولة","حقن دماء المسلمين"]'::jsonb, 3, 25, 14, 'multi', 'بيّن الإمام أن رأيه في الصلح يقوم على حقن الدماء ودفع الفتنة بعد خذلان أصحابه.', 'الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'أي شرط سياسي ورد في عهد الصلح بشأن ما بعد معاوية؟', '["أن يجعلها شورى أموية","أن يعهد بها ليزيد","ألا يعهد بالخلافة إلى أحد","أن يسلمها لعمرو بن العاص"]'::jsonb, 2, 25, 15, 'multi', 'تضمن العهد ألا يعهد معاوية بالأمر إلى أحد من بعده، وفق رواية الشيخ المفيد.', 'الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'أين أقام الإمام الحسن (ع) بعد إتمام الصلح؟', '["البصرة","الكوفة","دمشق","المدينة المنورة"]'::jsonb, 3, 20, 16, 'multi', 'غادر الإمام الحسن (ع) الكوفة بعد الصلح وعاد إلى المدينة، فأقام فيها بقية حياته.', 'ما بعد الصلح');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'من التي سمّت الإمام الحسن (ع) بحسب رواية الشيخ المفيد؟', '["ميسون بنت بحدل","هند بنت عتبة","جعدة بنت الأشعث","أم الحكم بنت أبي سفيان"]'::jsonb, 2, 25, 17, 'multi', 'يروي المفيد أن معاوية راسل جعدة بنت الأشعث، زوج الإمام، وحملها على سمه.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'كم يومًا بقي الإمام الحسن (ع) مريضًا بعد السم بحسب الإرشاد؟', '["سبعين يومًا","عشرة أيام","عشرين يومًا","أربعين يومًا"]'::jsonb, 3, 20, 18, 'multi', 'ذكر الشيخ المفيد أن الإمام (ع) بقي مريضًا من أثر السم أربعين يومًا.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_23, 'أين دُفن الإمام الحسن المجتبى (ع)؟', '["مقبرة البقيع","المسجد النبوي","النجف الأشرف","كربلاء المقدسة"]'::jsonb, 0, 20, 19, 'multi', 'دُفن الإمام الحسن (ع) في البقيع إلى جوار جدته فاطمة بنت أسد.', 'الدفن');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_24 uuid;
BEGIN
  SELECT id INTO v_lib_id_24 FROM quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1;
  IF v_lib_id_24 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام الحسين (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_24;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من هي والدة الإمام الحسين (ع)؟', '["أسماء بنت عميس","أم البنين","فاطمة الزهراء (ع)","أم سلمة"]'::jsonb, 2, 20, 0, 'multi', 'الإمام الحسين (ع) هو ابن الإمام علي وفاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'ما التاريخ المشهور لولادة الإمام الحسين (ع)؟', '["17 ربيع الأول سنة 4 هـ","15 رمضان سنة 3 هـ","10 محرم سنة 5 هـ","3 شعبان سنة 4 هـ"]'::jsonb, 3, 25, 1, 'multi', 'المشهور في المصادر الإمامية أن ولادته كانت في الثالث من شعبان سنة أربع للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من سمّى سبط النبي الأصغر «الحسين»؟', '["النبي محمد (ص)","الإمام علي (ع)","فاطمة الزهراء (ع)","الإمام الحسن (ع)"]'::jsonb, 0, 20, 2, 'multi', 'تذكر الروايات أن رسول الله (ص) سمّاه حسينًا بعد ولادته.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'أي كنية اشتهر بها الإمام الحسين (ع)؟', '["أبو جعفر","أبو محمد","أبو الحسن","أبو عبد الله"]'::jsonb, 3, 20, 3, 'multi', 'تذكر كتب السيرة أن كنية الإمام الحسين (ع) هي أبو عبد الله.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'أي عبارة نبوية مشهورة تصف مكانة الحسن والحسين (ع)؟', '["كاتبا الوحي","أمينا وحي السماء","صاحبا الهجرتين","سيدا شباب أهل الجنة"]'::jsonb, 3, 20, 4, 'multi', 'ورد عن النبي (ص) أن الحسن والحسين سيدا شباب أهل الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'أي آية ارتبطت بالنبي وعلي وفاطمة والحسن والحسين (ع)؟', '["آية الدين","آية التطهير","آية النجوى","آية الكلالة"]'::jsonb, 1, 20, 5, 'multi', 'تربط الروايات الإمامية آية التطهير بأصحاب الكساء الخمسة ومنهم الحسين (ع).', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من الإمام الذي سبق الحسين (ع) مباشرة في الإمامة؟', '["الإمام السجاد (ع)","الإمام علي (ع)","الإمام الحسن (ع)","الإمام الباقر (ع)"]'::jsonb, 2, 20, 6, 'multi', 'تولى الحسين (ع) الإمامة بعد أخيه الإمام الحسن المجتبى (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'كم دامت إمامة الحسين (ع) بحسب ما يذكره الشيخ المفيد؟', '["نحو خمس سنين","نحو عشر سنين","نحو عشرين سنة","أقل من سنة"]'::jsonb, 1, 25, 7, 'multi', 'امتدت إمامته من وفاة أخيه سنة 50 هـ إلى استشهاده سنة 61 هـ، أي نحو عشر سنين.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'لماذا غادر الإمام الحسين (ع) المدينة بعد موت معاوية؟', '["لزيارة اليمن","لطلب ولاية مكة","للتجارة في الشام","لرفضه البيعة ليزيد"]'::jsonb, 3, 20, 8, 'multi', 'خرج من المدينة بعدما طُلبت منه البيعة ليزيد فامتنع عنها.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'إلى أي مدينة توجه الحسين (ع) عند خروجه من المدينة؟', '["الكوفة","مكة المكرمة","البصرة","دمشق"]'::jsonb, 1, 20, 9, 'multi', 'غادر المدينة متوجهًا إلى مكة، وأقام فيها قبل مسيره نحو العراق.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من أرسله الحسين (ع) إلى الكوفة ليتحقق من موقف أهلها؟', '["مسلم بن عقيل","قيس بن مسهر","هاني بن عروة","حبيب بن مظاهر"]'::jsonb, 0, 20, 10, 'multi', 'بعث الحسين (ع) ابن عمه مسلم بن عقيل إلى الكوفة ليستطلع اجتماع الناس وبيعتهم.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من كان والي الكوفة الذي واجه حركة مسلم بن عقيل؟', '["النعمان بن بشير","عبيد الله بن زياد","عمر بن سعد","الوليد بن عتبة"]'::jsonb, 1, 20, 11, 'multi', 'ولى يزيد عبيد الله بن زياد الكوفة، فتولى قمع حركة مسلم بن عقيل.', 'الخروج والنهضة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'في أي يوم غادر الحسين (ع) مكة متوجهًا إلى العراق؟', '["1 محرم سنة 61 هـ","10 ذي الحجة سنة 60 هـ","8 ذي الحجة سنة 60 هـ","15 شعبان سنة 60 هـ"]'::jsonb, 2, 25, 12, 'multi', 'خرج من مكة يوم التروية، الثامن من ذي الحجة سنة 60 هـ.', 'الطريق إلى كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من قائد القوة التي التقت ركب الحسين (ع) في الطريق؟', '["عمر بن سعد","الحر بن يزيد الرياحي","شمر بن ذي الجوشن","حصين بن نمير"]'::jsonb, 1, 20, 13, 'multi', 'التقى الركب قوة يقودها الحر بن يزيد الرياحي، ثم لازمته حتى النزول بكربلاء.', 'الطريق إلى كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'كيف عامل الحسين (ع) جيش الحر عند وصوله عطشانًا؟', '["أخذ سلاحهم","منع عنهم الماء","أعادهم إلى الكوفة","أمر بسقيهم وخيلهم"]'::jsonb, 3, 20, 14, 'multi', 'أمر الحسين (ع) أصحابه أن يسقوا القوم ويرشفوا الخيل، في موقف رحمة واضح.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'في أي أرض انتهى مسير ركب الحسين (ع)؟', '["البصرة","النجف","المدائن","كربلاء"]'::jsonb, 3, 20, 15, 'multi', 'انتهى المسير بنزول الحسين وأهل بيته وأصحابه بأرض كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'في أي تاريخ نزل الإمام الحسين (ع) كربلاء؟', '["8 ذي الحجة سنة 61 هـ","1 محرم سنة 60 هـ","2 محرم سنة 61 هـ","10 صفر سنة 61 هـ"]'::jsonb, 2, 25, 16, 'multi', 'تذكر روايات المقتل نزوله كربلاء في اليوم الثاني من المحرم سنة 61 هـ.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من قاد الجيش المقابل للحسين (ع) في كربلاء؟', '["عمر بن سعد","عبيد الله بن زياد","الحر بن يزيد","الوليد بن عتبة"]'::jsonb, 0, 20, 17, 'multi', 'تولى عمر بن سعد قيادة الجيش الذي حاصر الحسين (ع) في كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'ماذا طلب الحسين (ع) ليلة عاشوراء من القوم؟', '["تأجيل القتال شهرًا","السماح له بدخول الكوفة","إمهاله ليلة للصلاة والدعاء","إرسال وفد إلى المدينة"]'::jsonb, 2, 25, 18, 'multi', 'طلب إمهاله تلك الليلة لما كان يحبه من الصلاة وتلاوة القرآن والدعاء.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'ماذا أذن الحسين (ع) لأصحابه أن يفعلوا ليلة عاشوراء؟', '["الانصراف واتخاذ الليل سترًا","بدء القتال ليلًا","مبايعة عمر بن سعد","العودة جميعًا إلى مكة"]'::jsonb, 0, 25, 19, 'multi', 'رفع عن أصحابه الحرج وأذن لهم بالانصراف، فاختاروا الوفاء والبقاء معه.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من عاد إلى نصرة الحسين (ع) صباح عاشوراء بعد أن كان في الجيش المقابل؟', '["الحر بن يزيد الرياحي","عمر بن سعد","شمر بن ذي الجوشن","عبيد الله بن زياد"]'::jsonb, 0, 20, 20, 'multi', 'تاب الحر بن يزيد، وانتقل إلى معسكر الحسين (ع) وقاتل بين يديه.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من حمل لواء الحسين (ع) في كربلاء؟', '["القاسم بن الحسن","علي الأكبر (ع)","أبو الفضل العباس (ع)","حبيب بن مظاهر"]'::jsonb, 2, 20, 21, 'multi', 'كان لواء الحسين (ع) مع أخيه أبي الفضل العباس (ع).', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'أي ابن للإمام الحسين (ع) بقي بعد كربلاء وصار الإمام من بعده؟', '["علي زين العابدين (ع)","علي الأكبر (ع)","عبد الله الرضيع","جعفر بن الحسين"]'::jsonb, 0, 20, 22, 'multi', 'بقي الإمام علي بن الحسين زين العابدين (ع)، وانتقلت إليه الإمامة بعد أبيه.', 'ما بعد كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'في أي يوم استشهد الإمام الحسين (ع)؟', '["9 محرم سنة 60 هـ","10 محرم سنة 61 هـ","20 صفر سنة 61 هـ","21 رمضان سنة 61 هـ"]'::jsonb, 1, 20, 23, 'multi', 'استشهد الإمام الحسين (ع) يوم عاشوراء، العاشر من المحرم سنة 61 هـ.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'كم كان عمر الإمام الحسين (ع) عند استشهاده؟', '["نحو 47 سنة","نحو 57 سنة","نحو 67 سنة","نحو 37 سنة"]'::jsonb, 1, 25, 24, 'multi', 'ولد سنة 4 هـ واستشهد سنة 61 هـ، وتذكر المصادر أن عمره كان نحو سبع وخمسين سنة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_24, 'من تولى دفن الإمام الحسين (ع) بحسب الرواية الإمامية؟', '["الإمام زين العابدين (ع)","محمد بن الحنفية","عمر بن سعد","الحر بن يزيد"]'::jsonb, 0, 25, 25, 'multi', 'تنص الرواية الإمامية على أن الإمام زين العابدين (ع) تولى دفن أبيه الحسين (ع).', 'ما بعد كربلاء');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_25 uuid;
BEGIN
  SELECT id INTO v_lib_id_25 FROM quizzes WHERE title = 'سيرة السيدة زينب (ع)' LIMIT 1;
  IF v_lib_id_25 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة السيدة زينب (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_25;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'إلى أي بيت تنتسب السيدة زينب (ع) من جهة والديها؟', '["بيت جعفر وأسماء بنت عميس","بيت الإمام علي وفاطمة (ع)","بيت العباس وأم الفضل","بيت عقيل وفاطمة بنت عتبة"]'::jsonb, 1, 20, 0, 'multi', 'زينب الكبرى هي ابنة الإمام علي والسيدة فاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'من هما أخوا السيدة زينب (ع) الشقيقان؟', '["جعفر وعقيل","محمد بن الحنفية والعباس","الحسن والحسين (ع)","القاسم وعبد الله"]'::jsonb, 2, 15, 1, 'multi', 'زينب والحسن والحسين من أولاد الإمام علي وفاطمة الزهراء (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بمن تزوجت السيدة زينب (ع)؟', '["مسلم بن عقيل","عبد الله بن عباس","محمد بن الحنفية","عبد الله بن جعفر"]'::jsonb, 3, 15, 2, 'multi', 'تزوجت زينب الكبرى ابن عمها عبد الله بن جعفر بن أبي طالب.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ما صلة زوج السيدة زينب (ع) بجعفر الطيار؟', '["حفيده","أخوه","ابنه","ابن أخيه"]'::jsonb, 2, 20, 3, 'multi', 'عبد الله زوج زينب هو ابن جعفر بن أبي طالب المعروف بالطيار.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'أي إمام كان ابن أخي زينب (ع) ورافق ركب كربلاء؟', '["موسى الكاظم (ع)","محمد الباقر (ع)","جعفر الصادق (ع)","علي بن الحسين (ع)"]'::jsonb, 3, 20, 4, 'multi', 'الإمام السجاد ابن الإمام الحسين، وكان في ركب كربلاء ثم مسير السبايا.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'مع أي إمام خرجت زينب (ع) في الرحلة التي انتهت بكربلاء؟', '["الإمام الحسن (ع)","الإمام الحسين (ع)","الإمام السجاد (ع)","الإمام الباقر (ع)"]'::jsonb, 1, 15, 5, 'multi', 'حضرت زينب مع أخيها الإمام الحسين في الركب حتى كربلاء.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'من أخبر زينب (ع) ليلة عاشوراء بقرب الأجل؟', '["أبو الفضل العباس (ع)","الإمام السجاد (ع)","الإمام الحسين (ع)","حبيب بن مظاهر"]'::jsonb, 2, 20, 6, 'multi', 'أنشد الحسين أبياتًا في تقلّب الدهر، فعلمت زينب بدنو المصاب.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بماذا وجّه الحسين (ع) أخته زينب ليلة عاشوراء؟', '["الرجوع إلى المدينة","مغادرة المخيم","طلب الأمان","الصبر والتقوى"]'::jsonb, 3, 20, 7, 'multi', 'وعظها الحسين بالصبر والتقوى والتعزي بعزاء الله.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'من كان حاضرًا مريضًا في حديث الحسين وزينب ليلة عاشوراء؟', '["مسلم بن عقيل","عبد الله بن جعفر","محمد بن الحنفية","الإمام السجاد (ع)"]'::jsonb, 3, 20, 8, 'multi', 'نقل الإمام السجاد الواقعة وذكر أنه كان مريضًا.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ما الدور الذي ذكره السجاد (ع) لعمته زينب ليلة عاشوراء؟', '["كانت تمرّضه","كانت تفاوض الجيش","كانت تحمل الراية","كانت تكتب للكوفة"]'::jsonb, 0, 20, 9, 'multi', 'ذكر الإمام السجاد أن عمته زينب كانت تمرّضه بسبب مرضه.', 'كربلاء');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'من تولّى دورًا بارزًا في رعاية العيال بعد مقتل الحسين (ع)؟', '["أم البنين","السيدة زينب (ع)","أسماء بنت عميس","أم سلمة"]'::jsonb, 1, 20, 10, 'multi', 'برزت زينب في رعاية النساء والأطفال وحماية الركب بعد الطف.', 'ما بعد الطف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'كيف حمت زينب (ع) الإمام السجاد حين هدده ابن زياد؟', '["اعتنقته وطلبت أن تُقتل معه","طلبت إعادته للمدينة","لاذت بالصمت بعيدًا","طلبت إخراجه سرًا"]'::jsonb, 0, 25, 11, 'multi', 'تعلقت به وقالت إنها إن قُتل تُقتل معه، فكف ابن زياد.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'أين وبّخت زينب (ع) الناس بعد واقعة الطف؟', '["الكوفة","مكة","البصرة","المدينة"]'::jsonb, 0, 15, 12, 'multi', 'أورد الاحتجاج خطبتها في أهل الكوفة عند مرور السبايا.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بأي صفة خاطبت زينب (ع) أهل الكوفة في خطبتها؟', '["حماة العهد","أهل الوفاء والنصرة","أهل الختل والغدر","أنصار الحق"]'::jsonb, 2, 20, 13, 'multi', 'وصفتهم بالختل والغدر ونقض العهد بسبب خذلان الحسين.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بماذا شبّهت زينب (ع) نقض أهل الكوفة لعهدهم؟', '["أصحاب السفينة","أصحاب الكهف","ناقضة غزلها بعد قوة","أصحاب الجنة"]'::jsonb, 2, 25, 14, 'multi', 'استشهدت بمضمون آية النحل في نقض الغزل بعد توكيده.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'كيف استجاب أهل الكوفة لخطبة زينب (ع)؟', '["ردّوا أيديهم لأفواههم وبكوا","غادروا بلا تأثر","احتفلوا بالنصر","قاطعوا الخطبة"]'::jsonb, 0, 20, 15, 'multi', 'يصف الاحتجاج بكاء الجمع بعد أن كشفت الخطبة فداحة فعلهم.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بأي منطق ردّت زينب (ع) على شماتة ابن زياد؟', '["كرامة الشهداء والابتلاء","منع النسب للمصائب","براءة أهل الكوفة","إنكار الرحلة للعراق"]'::jsonb, 0, 25, 16, 'multi', 'أكدت منزلة الشهداء ورفضت اعتبار المصاب نصرًا أخلاقيًا للقاتل.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بأي عبارة لخّصت زينب (ع) رؤيتها للمصاب أمام ابن زياد؟', '["إن مع العسر يسرًا","ما رأيت إلا جميلًا","حسبنا الله","الصبر مفتاح الفرج"]'::jsonb, 1, 15, 17, 'multi', 'قالت: ما رأيت إلا جميلًا، وبيّنت أن الشهداء برزوا إلى مضاجعهم.', 'الكوفة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'أين واجهت زينب (ع) يزيد بخطبتها المشهورة؟', '["في موسم الحج","في مسجد الكوفة","في المدينة","في مجلسه بالشام"]'::jsonb, 3, 15, 18, 'multi', 'ألقت خطابها في مجلس يزيد بعد إدخال أهل البيت إلى الشام.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'بأي آية ردّت زينب (ع) على اغترار يزيد بالإمهال؟', '["والعصر إن الإنسان لفي خسر","إن مع العسر يسرًا","لا إكراه في الدين","ولا يحسبن الذين كفروا أنما نملي لهم"]'::jsonb, 3, 25, 19, 'multi', 'استشهدت بآل عمران 178 لتبيّن أن الإمهال قد يكون زيادة في الإثم.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ماذا تحدّت زينب (ع) يزيد أن يفعل بذكر أهل البيت؟', '["أن يحصره في المدينة","أن ينقله لبلد آخر","أن يمحو ذكرهم ولن يقدر","أن يكتبه في السجلات"]'::jsonb, 2, 20, 20, 'multi', 'قالت له: فوالله لا تمحو ذكرنا، مثبتة بقاء الرسالة رغم القمع.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ماذا أنكرت زينب (ع) على يزيد في شأن النساء؟', '["منع نساء الشام من السفر","ستر حرائره وسوق بنات النبي سبايا","تأخير زواج نساء بني أمية","تخصيص عطايا لنساء المدينة"]'::jsonb, 1, 25, 21, 'multi', 'أنكرت صونه نساءه مع كشفه وسوقه بنات رسول الله من بلد إلى بلد.', 'الشام');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ما أبرز هدف لخطاب زينب (ع) في الكوفة والشام؟', '["طلب منصب إداري","كشف الجريمة والدفاع عن الرسالة","التفاوض التجاري","اعتزال الشأن العام"]'::jsonb, 1, 20, 22, 'multi', 'واجهت خطاب السلطة وذكّرت بمكانة أهل البيت ومسؤولية المعتدين والخاذلين.', 'المواقف والفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'إلى أي مدينة طلب أهل البيت التوجه بعد خروجهم من الشام؟', '["المدينة المنورة","الكوفة","البصرة","مكة"]'::jsonb, 0, 15, 23, 'multi', 'اختار أهل البيت العودة إلى المدينة، موطن جدهم رسول الله (ص).', 'العودة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_25, 'ماذا اختار نساء أهل البيت بعد عرض الإقامة أو الرحيل؟', '["التوجه إلى مصر","الإقامة في دمشق","الرجوع إلى المدينة","الرجوع إلى الكوفة"]'::jsonb, 2, 20, 24, 'multi', 'نقل اللهوف اختيارهن العودة إلى المدينة بعد ما جرى في الشام.', 'العودة');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_26 uuid;
BEGIN
  SELECT id INTO v_lib_id_26 FROM quizzes WHERE title = 'سيرة أبي الفضل العباس (ع)' LIMIT 1;
  IF v_lib_id_26 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة أبي الفضل العباس (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_26;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'من هو والد أبي الفضل العباس (ع)؟', '["جعفر بن أبي طالب","الإمام الحسن (ع)","عقيل بن أبي طالب","الإمام علي (ع)"]'::jsonb, 3, 20, 0, 'multi', 'أبو الفضل العباس هو ابن أمير المؤمنين الإمام علي بن أبي طالب (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'من هي والدة أبي الفضل العباس (ع)؟', '["فاطمة الكلابية أم البنين","فاطمة الزهراء (ع)","أسماء بنت عميس","ليلى بنت مسعود"]'::jsonb, 0, 20, 1, 'multi', 'والدته فاطمة بنت حزام الكلابية، المشهورة بكنية أم البنين.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'ما صلة العباس (ع) بالإمام الحسين (ع)؟', '["خاله","ابن أخيه","ابن عمه","أخوه لأبيه"]'::jsonb, 3, 20, 2, 'multi', 'العباس والحسين ابنا الإمام علي (ع)، وأمهما مختلفة، فهو أخوه لأبيه.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'أي مجموعة تضم إخوة العباس (ع) من أمه الذين حضروا كربلاء؟', '["محمد وعون وعبد الله","عبد الله وجعفر وعثمان","علي والقاسم وأبو بكر","مسلم وجعفر وعقيل"]'::jsonb, 1, 25, 3, 'multi', 'كان عبد الله وجعفر وعثمان بنو علي إخوة العباس من أم البنين، وشهدوا كربلاء.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'كم كان عمر العباس (ع) عند استشهاده بحسب الخبر المنقول في البحار؟', '["25 سنة","34 سنة","40 سنة","48 سنة"]'::jsonb, 1, 25, 4, 'multi', 'ينقل المجلسي أن العباس بن علي قُتل وله أربع وثلاثون سنة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'ما المهمة العسكرية الأبرز للعباس (ع) في معسكر الحسين؟', '["إدارة المفاوضات","كتابة الرسائل","قيادة ميمنة الجيش","حمل اللواء"]'::jsonb, 3, 20, 5, 'multi', 'جعل الإمام الحسين (ع) لواءه مع أخيه العباس يوم عاشوراء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'إلى أين أرسل الحسين (ع) العباس مع جماعة قبل عاشوراء؟', '["إلى الفرات لجلب الماء","إلى الكوفة لطلب الأنصار","إلى مكة لإبلاغ بني هاشم","إلى المدينة لإحضار السلاح"]'::jsonb, 0, 20, 6, 'multi', 'بعث الحسين أخاه العباس مع رجال نحو الفرات ليأتوا المخيم بالماء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'كم فارسًا رافق العباس (ع) في بعثة جلب الماء المذكورة في الإرشاد؟', '["سبعون فارسًا","عشرة فرسان","خمسون فارسًا","ثلاثون فارسًا"]'::jsonb, 3, 25, 7, 'multi', 'يذكر الإرشاد أن الحسين بعث العباس في ثلاثين فارسًا ومعهم عشرون راجلًا.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'كم راجلًا كان مع فرسان العباس (ع) في بعثة الماء؟', '["خمسة رجال","أربعون راجلًا","عشرون راجلًا","ستون راجلًا"]'::jsonb, 2, 25, 8, 'multi', 'رافق الفرسانَ العشرين راجلًا، فتمكنوا من ملء القرب والعودة بها.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'من كلّف بحماية جماعة العباس (ع) أثناء ملء القرب؟', '["زهير بن القين","حبيب بن مظاهر","نافع بن هلال","الحر الرياحي"]'::jsonb, 2, 25, 9, 'multi', 'تقدم نافع بن هلال نحو الفرات، وحمى الرجال حتى ملؤوا القرب وعادوا.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'متى جاء شمر يعرض الأمان على العباس وإخوته؟', '["بعد انتهاء القتال","صباح الثاني من المحرم","ليلة السابع من المحرم","عشية التاسع من المحرم"]'::jsonb, 3, 25, 10, 'multi', 'جاء شمر عشية الخميس لتسع مضين من المحرم، قبيل زحف الجيش على المخيم.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'كيف واجه العباس وإخوته عرض الأمان من شمر؟', '["قبلوه ثم عادوا","رفضوه ولعنوا أمانه","طلبوا مهلة للتفكير","اشترطوا خروج العيال"]'::jsonb, 1, 20, 11, 'multi', 'رفضوا العرض وقالوا لشمر إن أمانه لا قيمة له والحسين ابن رسول الله لا أمان له.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'ماذا أمر الحسين (ع) العباس حين اقترب جيش عمر بن سعد مساء تاسوعاء؟', '["العودة إلى المدينة","بدء القتال فورًا","استقبال القوم وسؤالهم عما جاء بهم","إحراق الخيام"]'::jsonb, 2, 25, 12, 'multi', 'طلب الحسين من العباس أن يركب ويلقى القوم ويسألهم عن سبب زحفهم.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'بماذا عاد العباس (ع) إلى الحسين بعد سؤال الجيش عن سبب زحفه؟', '["أنهم قرروا الانسحاب","أنهم يريدون النزول على حكم ابن زياد أو القتال","أنهم طلبوا الماء","أنهم بايعوا الحسين"]'::jsonb, 1, 25, 13, 'multi', 'أبلغه أن القوم خُيّروا بين إنزال الحسين على حكم ابن زياد وبين المناجزة.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'ما الطلب الذي بلغه العباس (ع) إلى القوم ليلة عاشوراء؟', '["تسليم السلاح","فتح طريق إلى الكوفة","تأخير القتال إلى الغد","إرسال وفد إلى يزيد"]'::jsonb, 2, 20, 14, 'multi', 'عاد العباس فطلب من القوم إمهال الحسين وأصحابه تلك الليلة للصلاة والدعاء.', 'كربلاء والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'أي أخ للعباس (ع) طلب منه أن يتقدم قبله لأنه لا ولد له؟', '["عبد الله بن علي","عثمان بن علي","جعفر بن علي","محمد بن علي"]'::jsonb, 0, 25, 15, 'multi', 'طلب العباس من أخيه لأبيه وأمه عبد الله أن يتقدم، وذكر أنه لا ولد له.', 'عاشوراء والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'أي عضوين فقدهما العباس (ع) وهو يدافع عن اللواء والقربة؟', '["يداه","قدماه","عيناه","كتفاه"]'::jsonb, 0, 20, 16, 'multi', 'تذكر رواية الإمام السجاد أن العباس آثر أخاه حتى قُطعت يداه.', 'عاشوراء والاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'بماذا عوّض الله العباس (ع) عن يديه وفق حديث الإمام السجاد؟', '["رايتين يوم القيامة","قصرين في المدينة","جناحين يطير بهما في الجنة","عينين من الجنة"]'::jsonb, 2, 20, 17, 'multi', 'قال الإمام السجاد إن الله أبدله بيديه جناحين يطير بهما مع الملائكة في الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'بمن شبّه حديث الإمام السجاد تعويض العباس (ع) بجناحين؟', '["جعفر بن أبي طالب","حمزة بن عبد المطلب","عقيل بن أبي طالب","مسلم بن عقيل"]'::jsonb, 0, 25, 18, 'multi', 'شبّه الإمام السجاد ذلك بما جعله الله لجعفر بن أبي طالب من جناحين في الجنة.', 'الفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_26, 'أي وصف لخّص به الإمام السجاد (ع) موقف عمه العباس؟', '["عاد إلى المدينة بعد المعركة","آثر وأبلى وفدى أخاه بنفسه","تولى كتابة رسائل الكوفة","قاد ركب السبايا إلى الشام"]'::jsonb, 1, 20, 19, 'multi', 'دعا له الإمام السجاد وذكر إيثاره وبلاءه وفداءه أخاه الحسين بنفسه.', 'الفضائل');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_27 uuid;
BEGIN
  SELECT id INTO v_lib_id_27 FROM quizzes WHERE title = 'سيرة الإمام علي زين العابدين (ع)' LIMIT 1;
  IF v_lib_id_27 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام علي زين العابدين (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_27;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'من هو والد الإمام علي زين العابدين (ع)؟', '["الإمام الحسين (ع)","الإمام الحسن (ع)","الإمام علي (ع)","الإمام محمد الباقر (ع)"]'::jsonb, 0, 15, 0, 'multi', 'الإمام السجاد هو علي بن الحسين بن علي بن أبي طالب (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'أين وُلد الإمام علي بن الحسين (ع) بحسب الشيخ المفيد؟', '["الكوفة","مكة","المدينة","دمشق"]'::jsonb, 2, 15, 1, 'multi', 'نص الشيخ المفيد في ترجمته على أن مولده كان بالمدينة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'في أي سنة وُلد الإمام السجاد (ع) وفق اختيار الشيخ المفيد؟', '["38 هـ","35 هـ","40 هـ","44 هـ"]'::jsonb, 0, 20, 2, 'multi', 'اختار المفيد أن مولده كان سنة ثمان وثلاثين للهجرة، مع وجود أقوال أخرى.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ما الكنية التي يذكرها الشيخ المفيد للإمام علي بن الحسين (ع)؟', '["أبو الحسن الثالث","أبو عبد الله","أبو جعفر","أبو محمد"]'::jsonb, 3, 20, 3, 'multi', 'يذكر المفيد أن كنيته أبو محمد، ويذكر له أيضًا أبا الحسن.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ما الذي حال دون قتل الإمام السجاد (ع) يوم عاشوراء؟', '["كان في المدينة","كان خارج كربلاء","كان رسولًا إلى الكوفة","كان مريضًا لا يقدر على القتال"]'::jsonb, 3, 20, 4, 'multi', 'كان مريضًا على فراشه، فبقي بعد استشهاد أبيه الحسين (ع).', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'من دافع عن الإمام السجاد (ع) حين أمر ابن زياد بقتله؟', '["السيدة زينب (ع)","أم كلثوم","الرباب","فاطمة بنت الحسين"]'::jsonb, 0, 20, 5, 'multi', 'تعلقت زينب بابن أخيها وقالت إن قُتل تُقتل معه، فكف ابن زياد عنه.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'إلى أي مدينة أُرسل الإمام السجاد (ع) بعد مجلس ابن زياد؟', '["دمشق","المدينة","مكة","البصرة"]'::jsonb, 0, 15, 6, 'multi', 'أرسل ابن زياد علي بن الحسين والنساء إلى يزيد في الشام.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ماذا طلب الإمام السجاد (ع) عند تهيئة عودة أهل البيت؟', '["إرسالهم إلى الكوفة","الإقامة الدائمة في دمشق","أمينًا يصحبهم إلى المدينة","تفريق الركب بين البلدان"]'::jsonb, 2, 20, 7, 'multi', 'اختار الرجوع إلى المدينة، وطلب رجلًا أمينًا يصحبهم في الطريق.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'من بشّر أهل المدينة بوصول ركب الإمام ونعا إليهم الحسين؟', '["أبو حمزة الثمالي","جابر بن عبد الله","بشير بن حذلم","سعيد بن المسيب"]'::jsonb, 2, 20, 8, 'multi', 'أمره الإمام أن يدخل المدينة فينعي الحسين ويخبر الناس بوصول الركب.', 'كربلاء وما بعدها');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'إلى من انتقلت الإمامة بعد استشهاد الإمام الحسين (ع)؟', '["محمد بن الحنفية","علي بن الحسين (ع)","زيد بن علي","عبد الله بن جعفر"]'::jsonb, 1, 15, 9, 'multi', 'دلت النصوص التي أوردها المفيد على إمامة علي بن الحسين بعد أبيه.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ما الذي أودعه الحسين (ع) عند أم سلمة علامةً لطالب الإمامة؟', '["كتاب والي المدينة","راية المختار","خاتم ابن عباس","ودائع الإمامة"]'::jsonb, 3, 20, 10, 'multi', 'أودع الحسين أم سلمة ما قبضه علي بن الحسين من بعده، وجعل طلبه علامة.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ماذا كان يجني جليس الإمام السجاد (ع) بحسب رواية ابن أخته؟', '["علم الأنساب فقط","خشية أو علمًا مستفادًا","مالًا في كل مجلس","تكليفًا بكتابة الرسائل"]'::jsonb, 1, 20, 11, 'multi', 'قال الراوي إنه كان يقوم بخير: خشية تحدث في قلبه أو علم يستفيده.', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'أي معنى أرشد إليه الإمام بقوله: «أحبونا حب الإسلام»؟', '["كتمان الانتساب لأهل البيت","ترك الفرائض للمحبة","المحبة بلا غلو","حصر المحبة في القرابة"]'::jsonb, 2, 20, 12, 'multi', 'نهى عن تجاوز المحبة التي يقتضيها الإسلام حتى تصير غلوًا وشينًا.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'ما الأثر الذي ظهر على مواضع سجود الإمام السجاد (ع)؟', '["أثر حناء دائم","ثفنات كركب البعير","جرح من سيف","وشم على الجبهة"]'::jsonb, 1, 20, 13, 'multi', 'أحدثت كثرة سجوده ثفنات، ولذلك اشتهر بلقب السجاد.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'كيف كان الإمام السجاد (ع) يعين فقراء المدينة ليلًا؟', '["يطلب منهم خدمة مزرعته","يرسلهم إلى بيت المال","يعلن أسماءهم في المسجد","يحمل إليهم الطعام سرًا"]'::jsonb, 3, 15, 14, 'multi', 'كان يحمل جراب الخبز على ظهره ليلًا إلى بيوت الفقراء من غير أن يعرفوه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'متى عرف فقراء المدينة صاحب عطاياهم السرية؟', '["عند ولادة الإمام الباقر","يوم عاشوراء","عند الرجوع من الشام","بعد وفاة الإمام"]'::jsonb, 3, 20, 15, 'multi', 'لما فقدوا الصدقات الخفية بعد وفاته عرفوا أنها كانت تأتيهم منه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'كيف قابل الإمام السجاد (ع) رجلًا شتمه ثم انصرف؟', '["أمر بحبسه","عرض عليه المعونة والصفح","هجره عامًا","أخذ منه غرامة"]'::jsonb, 1, 20, 16, 'multi', 'خاطبه بلين وسأله عن حاجته فأعانه، فتحول الرجل إلى الثناء عليه.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'من أنشد قصيدته المشهورة في الإمام عند البيت الحرام؟', '["السيد الحميري","الكميت","دعبل الخزاعي","الفرزدق"]'::jsonb, 3, 15, 17, 'multi', 'أنشد الفرزدق قصيدته في مكانة الإمام حين تجاهله هشام بن عبد الملك.', 'الفضائل والمواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'من الابن الذي نص الإمام السجاد (ع) على إمامته من بعده؟', '["زيد الشهيد","محمد الباقر (ع)","عبد الله الباهر","عمر الأشرف"]'::jsonb, 1, 15, 18, 'multi', 'انتقلت الإمامة بعده إلى ابنه أبي جعفر محمد الباقر (ع).', 'الإمامة والعلم');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'في أي سنة توفي الإمام السجاد (ع) وفق قول الشيخ المفيد؟', '["95 هـ","92 هـ","99 هـ","101 هـ"]'::jsonb, 0, 20, 19, 'multi', 'يذكر المفيد وفاته بالمدينة سنة خمس وتسعين للهجرة.', 'الاستشهاد والدفن');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'كم كان عمر الإمام السجاد (ع) عند وفاته بحسب الشيخ المفيد؟', '["57 سنة","50 سنة","63 سنة","70 سنة"]'::jsonb, 0, 20, 20, 'multi', 'صرح المفيد بأن عمره عند وفاته كان سبعًا وخمسين سنة.', 'الاستشهاد والدفن');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_27, 'أين دُفن الإمام علي بن الحسين (ع)؟', '["النجف","كربلاء","البقيع","الكاظمية"]'::jsonb, 2, 15, 21, 'multi', 'دُفن في بقيع المدينة مع عمه الإمام الحسن بن علي (ع).', 'الاستشهاد والدفن');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_28 uuid;
BEGIN
  SELECT id INTO v_lib_id_28 FROM quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1;
  IF v_lib_id_28 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('سيرة الإمام محمد الباقر (ع)', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_28;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'من هو والد الإمام محمد الباقر (ع)؟', '["الإمام الحسن المجتبى (ع)","الإمام علي زين العابدين (ع)","الإمام جعفر الصادق (ع)","زيد بن علي (ع)"]'::jsonb, 1, 15, 0, 'multi', 'هو محمد بن الإمام علي بن الحسين زين العابدين (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'إلى أي سبطي النبي (ص) ينتهي نسب الباقر (ع) من جهة أمه؟', '["الإمام الحسين (ع)","كلاهما من جهة الأب","لا ينتهي إلى أحدهما","الإمام الحسن (ع)"]'::jsonb, 3, 20, 1, 'multi', 'أمه أم عبد الله بنت الحسن بن الحسن، فينتهي نسبه من جهتها إلى الإمام الحسن (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ما اسم أم الإمام الباقر (ع) المشهور في المصادر؟', '["أم عبد الله بنت الحسن","فاطمة بنت أسد","أم فروة بنت القاسم","شهربانو"]'::jsonb, 0, 15, 2, 'multi', 'نص المفيد على أن أمه أم عبد الله بنت الحسن بن الحسن (ع).', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'في أي مدينة كانت ولادة الإمام الباقر (ع)؟', '["مكة المكرمة","الكوفة","المدينة المنورة","دمشق"]'::jsonb, 2, 15, 3, 'multi', 'كان مولده (ع) في المدينة المنورة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ما السنة الهجرية المشهورة لولادة الإمام الباقر (ع)؟', '["50 هـ","61 هـ","57 هـ","70 هـ"]'::jsonb, 2, 15, 4, 'multi', 'يورد الشيخ المفيد مولده سنة سبع وخمسين للهجرة.', 'الولادة والنشأة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'أي واقعة كبرى أدركها الإمام الباقر (ع) في طفولته؟', '["كربلاء","بدر","صفين","فتح مكة"]'::jsonb, 0, 15, 5, 'multi', 'أدرك واقعة كربلاء سنة 61 هـ وهو صغير.', 'الطفولة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'بعد أي إمام تولّى الباقر (ع) الإمامة؟', '["الحسين (ع)","الحسن (ع)","جعفر الصادق (ع)","علي زين العابدين (ع)"]'::jsonb, 3, 15, 6, 'multi', 'تولى الإمامة بعد أبيه الإمام علي زين العابدين (ع).', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ماذا سلّم السجاد (ع) إلى الباقر (ع) في خبر الوصية؟', '["راية بدر وحدها","صندوقًا فيه سلاح النبي وكتبه","خاتم سليمان","مصحفًا بلا كتب أخرى"]'::jsonb, 1, 20, 7, 'multi', 'دفع إليه صندوقًا فيه سلاح رسول الله (ص) وكتبه علامة للوصية.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'أي صحابي بلّغ الإمام الباقر (ع) سلام رسول الله (ص)؟', '["جابر بن عبد الله الأنصاري","سلمان الفارسي","أبو ذر الغفاري","عمار بن ياسر"]'::jsonb, 0, 15, 8, 'multi', 'بلّغه جابر بن عبد الله الأنصاري سلام النبي (ص).', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ماذا طلب جابر من الباقر (ع) قبل أن يتعرف إليه؟', '["أن يقرأ صحيفة","أن يؤذن للصلاة","أن يقبل ثم يدبر","أن ينشد شعرًا"]'::jsonb, 2, 20, 9, 'multi', 'طلب منه أن يقبل ثم يدبر، فتأمل شمائله وتعرف إليه.', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'كيف أجاب الباقر (ع) سلام النبي (ص) الذي بلغه جابر؟', '["اكتفى بالصمت","رد السلام على النبي وعلى جابر","طلب كتمان الخبر","أرسل كتابًا للمدينة"]'::jsonb, 1, 20, 10, 'multi', 'رد السلام على رسول الله (ص)، وشكر جابرًا على تبليغه.', 'المناقب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'لماذا لُقّب الإمام محمد بن علي بـ«الباقر»؟', '["لكثرة سفره إلى البصرة","لأنه بنى بستانًا","لأنه أكبر إخوته","لأنه بقر العلم وأظهره"]'::jsonb, 3, 20, 11, 'multi', 'فسرت الرواية اللقب بتبقّره في العلم، أي شقه وإظهاره والتوسع فيه.', 'العلم والفضائل');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ما كنية الإمام محمد الباقر (ع) المشهورة؟', '["أبو محمد","أبو الحسن","أبو عبد الله","أبو جعفر"]'::jsonb, 3, 15, 12, 'multi', 'كنيته المشهورة أبو جعفر، ويقال له أبو جعفر الأول.', 'الأسماء والألقاب');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'أي أخ للباقر (ع) حمل إليه كتب أهل الكوفة الداعية للخروج؟', '["محمد بن الحنفية","زيد بن علي","عبد الله بن جعفر","يحيى بن زيد"]'::jsonb, 1, 20, 13, 'multi', 'دخل زيد بن علي على أخيه أبي جعفر ومعه كتب أهل الكوفة.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'ما المبدأ الذي أكده الباقر (ع) لزيد بشأن أهل البيت؟', '["الطاعة للجميع معًا","ترك المودة عند الخلاف","الطاعة لواحد والمودة للجميع","المودة لأهل المدينة فقط"]'::jsonb, 2, 20, 14, 'multi', 'قال له إن الطاعة لواحد من أهل البيت والمودة للجميع.', 'المواقف');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'من أبرز أبناء الباقر (ع) الذي نص عليه بالإمامة بعده؟', '["جعفر الصادق (ع)","موسى الكاظم (ع)","زيد بن علي","إسماعيل بن جعفر"]'::jsonb, 0, 15, 15, 'multi', 'نص الإمام الباقر (ع) على ابنه جعفر الصادق (ع) من بعده.', 'الإمامة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'كم ولدًا تذكر الرواية التي أوردها المجلسي للباقر (ع)؟', '["خمسة","سبعة","تسعة","أحد عشر"]'::jsonb, 1, 15, 16, 'multi', 'أورد المجلسي خبرًا ينص على أن أولاده (ع) كانوا سبعة.', 'الأسرة');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'متى توفي الإمام الباقر (ع) بحسب قول الشيخ المفيد؟', '["114 هـ","110 هـ","117 هـ","121 هـ"]'::jsonb, 0, 20, 17, 'multi', 'ذكر الشيخ المفيد وفاته سنة أربع عشرة ومائة للهجرة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'في أي مدينة كانت وفاة الإمام الباقر (ع)؟', '["الكوفة","دمشق","مكة المكرمة","المدينة المنورة"]'::jsonb, 3, 15, 18, 'multi', 'كانت وفاته (ع) في المدينة المنورة.', 'الاستشهاد');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_28, 'أين دُفن الإمام محمد الباقر (ع)؟', '["النجف","كربلاء","البقيع","الكاظمية"]'::jsonb, 2, 15, 19, 'multi', 'دفن في البقيع مع أبيه الإمام السجاد وعمه الإمام الحسن (ع).', 'الاستشهاد');
  END IF;
END $$;

