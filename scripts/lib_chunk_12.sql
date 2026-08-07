DO $$
DECLARE
  v_lib_id_164 uuid;
BEGIN
  SELECT id INTO v_lib_id_164 FROM quizzes WHERE title = 'عالم الأنمي والكرتون — الجزء 3' LIMIT 1;
  IF v_lib_id_164 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم الأنمي والكرتون — الجزء 3', 'أنمي', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_164;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''جوجوتسو كايسن'' (⁦Jujutsu Kaisen⁩)، ما اسم التقنية الخاصة بساتورو غوجو التي تجعله يرى كل شيء بدقة مطلقة وتُتيح له معالجة المعلومات بسرعة فائقة مع عرض مجال لا نهائي؟', '["⁦Purple Hollow⁩ (الفراغ الأرجواني)","⁦Six Eyes⁩ (العيون الست)","⁦Infinity⁩ (اللانهاية)","⁦Unlimited Void⁩ (الفراغ اللامحدود)"]'::jsonb, 1, 25, 0, 'multi', 'العيون الست هي القدرة البصرية النادرة لغوجو التي تُتيح له رؤية الطاقة اللعنية بدقة مطلقة والتحكم في تقنية اللانهاية بكفاءة استثنائية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''ناروتو شيبودن'' (⁦Naruto Shippuden⁩)، ما اسم التقنية الفريدة التي يستخدمها إيتاشي أوتشيها وتُعدّ أقوى تقنيات شرينغان، وتحبس الضحية في عالم وهمي تُعذَّب فيه لأيام كثيرة في ثوانٍ معدودة من الواقع؟', '["تسوكويومي","سوسانو","أماتيراسو","إيزاناغي"]'::jsonb, 0, 25, 1, 'multi', 'تسوكويومي هي تقنية غنجتسو خاصة بإيتاشي أوتشيها تحبس الخصم في وهم يتحكم فيه إيتاشي بالزمان والمكان لتعذيبه نفسياً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''ون بيس'' (⁦One Piece⁩)، ما اسم نوع قوة الشيطان (⁦Devil Fruit⁩) التي تُتيح لصاحبها التحوّل إلى عنصر طبيعي كالنار والجليد والضوء، وتجعله غير قابل للإصابة بالضربات العادية؟', '["⁦Logia⁩","⁦Paramecia⁩","⁦Zoan⁩","⁦Ancient Zoan⁩"]'::jsonb, 0, 25, 2, 'multi', 'نوع ⁦Logia⁩ هو الأعلى تصنيفاً في فئات ثمار الشيطان لأنه يمنح صاحبه القدرة على التحوّل إلى عنصر طبيعي واستخدامه هجوماً ودفاعاً وتجعله غير ملموس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''فولميتال ألكيميست: برذرهود'' (⁦Fullmetal Alchemist⁩: ⁦Brotherhood⁩)، ما اسم القانون الأساسي الذي يحكم علم الكيمياء في هذا العالم، والذي يُشترط فيه أن يقدّم المستخدم شيئاً مساوياً في القيمة لما يريد الحصول عليه؟', '["قانون المعادلة الذرية","قانون التبادل المكافئ","قانون الإسقاط الكيميائي","قانون الانتقال الجوهري"]'::jsonb, 1, 25, 3, 'multi', 'قانون التبادل المكافئ (⁦Equivalent Exchange⁩) هو الأساس الفلسفي والعلمي لكيمياء الأنمي، ويقضي بأنه لا يمكن الحصول على شيء دون أن تُقدّم شيئاً مساوياً له في القيمة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''نارتو'' (⁦Naruto⁩)، ما اسم مجموعة الأفراد التي أسّسها ماداره أوتشيها والتي تسعى إلى جمع التحف المانعة (بيجودامه) لتنفيذ مخطط ''مشروع القمر'') المتعلق بتسيير الجين سيكا؟', '["منظمة أكاتسوكي","تحالف الكاجيز","مجلس الأنبياء السبعة","عصبة جاشين"]'::jsonb, 0, 25, 4, 'multi', 'أكاتسوكي هي المنظمة السرية التي أسّسها ماداره وأدارها بعد ذلك بالعرائس، وتسعى إلى جمع الوحوش المانعة التسعة لتنفيذ مخطط الهيمنة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''هنتر ⁦×⁩ هنتر'' (⁦Hunter x Hunter⁩)، ما اسم النوع النادر من تقنيات النين (⁦Nen⁩) الذي يستخدمه كيلوا زولديك، والقائم على توليد الكهرباء وتوجيهها عبر الجسم لتسريع الحركة وتقوية الضربات؟', '["⁦Godspeed⁩ (الملك البرق)","⁦Rhythm Echo⁩","⁦Lightning Palm⁩","⁦Narukami⁩"]'::jsonb, 0, 25, 5, 'multi', '⁦Godspeed⁩ أو ''⁦Kanmuru⁩'' هي تقنية كيلوا النهائية التي يولّد فيها كمية هائلة من الكهرباء تجعل ردود أفعاله تعمل بصورة تلقائية فائقة السرعة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''ديمون سلاير'' (⁦Demon Slayer⁩ / ⁦Kimetsu no Yaiba⁩)، ما اسم أسلوب التنفس النادر الذي يستخدمه تانجيرو كاميادو والمشتق أصلاً من أسلوب تنفّس الشمس، وهو الأسلوب الأصلي الأول الذي نشأت منه بقية أساليب التنفس؟', '["تنفّس الشمس (⁦Sun Breathing⁩)","تنفّس الماء (⁦Water Breathing⁩)","تنفّس اللهب (⁦Flame Breathing⁩)","تنفّس القمر (⁦Moon Breathing⁩)"]'::jsonb, 0, 25, 6, 'multi', 'تنفّس الشمس هو الأسلوب الأصلي الذي طوّره يوريتشي تسوجيكوني، وهو الأقوى والأساس الذي اشتُقّت منه كل أساليب التنفس الأخرى، وورثه تانجيرو عبر سلالة أجداده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''كود غياس'' (⁦Code Geass⁩)، ما اسم القوة الخارقة التي يمتلكها ليلوش لمبروج (زيرو)، والتي تُتيح له إصدار أوامر مطلقة لأي شخص ينظر إلى عينيه مباشرةً ولا يستطيع الضحية مقاومتها أو نسيانها؟', '["غياس (⁦Geass⁩)","القيادة المطلقة (⁦Absolute Command⁩)","العين الإمبراطورية (⁦Imperial Eye⁩)","البصيرة (⁦Clairvoyance⁩)"]'::jsonb, 0, 25, 7, 'multi', 'غياس هو القوة التي منحه إيّاها ⁦C.C⁩.، وتُسمّى ''قوة الملوك''، وتتجلّى في عين ليلوش اليسرى برمز محدد، وتجعل أوامره مطاعةً بشكل مطلق ولا رجعة فيه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''أتاك أون تايتان'' (⁦Attack on Titan⁩)، ما اسم القوة التي يمتلكها إيرين ييغر والتي تُتيح له رؤية ذكريات أصحاب قوى العمالقة السابقين عبر اللمس، وتُعدّ من أخطر قدرات العمالقة التسعة؟', '["قوة العملاق المؤسِّس","قوة العملاق الهاجوم","قوة العملاق المدرَّع","قوة عملاق الفكّ"]'::jsonb, 0, 25, 8, 'multi', 'قوة العملاق المؤسِّس (⁦Founding Titan⁩) هي الأقوى بين العمالقة التسعة، وتمنح صاحبها القدرة على التحكم بالعمالقة والإلديان والوصول إلى ذاكرة الأجداد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''دراغون بول ⁦Z⁩'' (⁦Dragon Ball Z⁩)، ما اسم الشكل التحويلي الأسطوري للسايان الذي وصل إليه غوكو لأول مرة عند مواجهته فريزا على كوكب ناميك، والذي يتميز بتحوّل شعر صاحبه إلى اللون الأصفر الذهبي؟', '["سوبر سايان","سوبر سايان 2","سوبر سايان غود","أولترا إنستينكت"]'::jsonb, 0, 25, 9, 'multi', 'تحوّل غوكو إلى سوبر سايان للمرة الأولى في المواجهة الشهيرة مع فريزا على كوكب ناميك، وغدا هذا التحوّل من أيقونات الأنمي العالمي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''ون بيس'' (⁦One Piece⁩)، ما اسم تقنية لوفي الأسطورية التي طوّرها خلال تدريبه مع رالي في جزيرة سابودي، والتي تُتيح له الإحساس بأرواح الآخرين ونواياهم وطاقاتهم من مسافات بعيدة، وتُعدّ من أعلى مراتب الهاكي؟', '["هاكي الملاحظة المتقدم (⁦Advanced Observation Haki⁩)","هاكي التسليح الكامل (⁦Full Body Armament⁩)","هاكي الملوك (⁦Conqueror''s Haki⁩)","هاكي الرؤية المستقبلية (⁦Future Sight⁩)"]'::jsonb, 0, 25, 10, 'multi', 'المرحلة المتقدمة من هاكي الملاحظة تمنح صاحبها القدرة على ''رؤية المستقبل القريب'' ولمس أرواح الآخرين، وقد طوّرها لوفي في جزيرة واانو لاحقاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''بليتش'' (⁦Bleach⁩)، ما اسم الشكل النهائي لسيف إيتشيغو كوروساكي الروحي (زانباكوتو) الذي يُعدّ الأقوى في الأنمي، والذي اكتسبه من تدريباته في عالم الأرواح مع أبيه ويمزج فيه بين قوى الشينيغامي والهولو؟', '["موغيتسو (⁦Mugetsu⁩)","تنسيغا (⁦Tensa Zangetsu⁩)","فاينال غيتسوغا تنشو (⁦Final Getsuga Tensho⁩)","فول هولوفيكيشن (⁦Full Hollowfication⁩)"]'::jsonb, 0, 25, 11, 'multi', 'موغيتسو هو الضربة النهائية المطلقة التي استخدمها إيتشيغو ضد آيزن، وتعني ''بلا قمر''، وكانت تكلفته فقدان قواه الشينيغامية بشكل كامل مؤقتاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''فولميتال ألكيميست: برذرهود'' (⁦Fullmetal Alchemist⁩: ⁦Brotherhood⁩)، ما اسم القانون الأساسي الذي يحكم علم الكيمياء في عالم الأنمي، والذي ينصّ على أنه لا يمكن خلق شيء من العدم وأن أي تحويل يستلزم تقديم شيء مكافئ في القيمة؟', '["قانون التوازن الكيميائي","قانون التبادل المتكافئ","قانون الانتقال الجوهري","قانون الطاقة المطلقة"]'::jsonb, 1, 25, 12, 'multi', 'قانون التبادل المتكافئ (⁦Equivalent Exchange⁩) هو المبدأ الجوهري في عالم ⁦FMA⁩: ⁦Brotherhood⁩، إذ يشترط تقديم شيء ذي قيمة مساوية لما يُراد الحصول عليه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''ناروتو شيبودن'' (⁦Naruto Shippuden⁩)، ما اسم التقنية الأسطورية التي طوّرها مينا توكازي (الأب الرابع هوكاغي) وتُعدّ من أسرع وأقوى التقنيات في عالم الأنمي، إذ تُتيح لمستخدمها الانتقال الفوري إلى أي علامة سبق وضعها في مكان ما؟', '["الراسينغان","تقنية الانتقال الذهبي","تقنية الإزاحة الزمنية","تقنية الخطوة الذهبية الفورية"]'::jsonb, 3, 25, 13, 'multi', 'تقنية الخطوة الذهبية الفورية (⁦Flying Thunder God⁩ / ⁦Hiraishin no Jutsu⁩) هي ابتكار مينا توكازي وتتيح الانتقال الفوري إلى أي علامة مزروعة مسبقاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_164, 'في أنمي ''جوجو بيزار أدفنتشر'' (⁦JoJo''s Bizarre Adventure⁩)، ما اسم قوة الظل (⁦Stand⁩) الأسطورية التي يمتلكها ديافولو زعيم منظمة باسيوني، والتي تُتيح له حذف فترة زمنية من الواقع بحيث يتحرك هو وحده خلالها بينما يبقى الآخرون مجمّدين وعاجزين عن إدراك ما جرى؟', '["⁦King Crimson⁩","⁦Gold Experience⁩","⁦Sticky Fingers⁩","⁦Purple Haze⁩"]'::jsonb, 0, 25, 14, 'multi', '⁦King Crimson⁩ هو ستاند ديافولو في الجزء الخامس، وقدرته حذف فترة زمنية (⁦Time Erase⁩) بحيث تختفي الأحداث من وعي الجميع ويتحرك ديافولو وحده بحرية كاملة خلالها.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_165 uuid;
BEGIN
  SELECT id INTO v_lib_id_165 FROM quizzes WHERE title = 'تاريخ وتراث البحرين — الجزء 1' LIMIT 1;
  IF v_lib_id_165 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تاريخ وتراث البحرين — الجزء 1', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_165;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما اسم الحضارة القديمة التي قامت في البحرين وامتدت إلى الساحل الشرقي للجزيرة العربية وجنوب العراق وعُرفت بحدائقها وعيونها العذبة؟', '["حضارة ماجان","حضارة دلمون","حضارة أوبيد","حضارة تلمون"]'::jsonb, 1, 25, 0, 'multi', 'دلمون حضارة عريقة أُشير إليها في النصوص السومرية باعتبارها ''أرض الأحياء'' وجنة الخلود، وقامت في منطقة البحرين وامتدت نحو الساحل الشرقي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم التراثي الذي يُطلقه البحرينيون على الغائص الذي يتولى شدَّ الحبل وسحب الغوّاص من القاع أثناء موسم الغوص على اللؤلؤ؟', '["النهّام","السيب","التبّان","الميدام"]'::jsonb, 1, 25, 1, 'multi', 'السيب هو المساعد المتخصص الذي يمسك الحبل فوق السفينة ويسحب الغوّاص عند الإشارة، وهو ركن أساسي في منظومة الغوص التقليدي البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما المثل البحريني الشعبي الذي يُضرب لمن يُظهر اهتماماً بشيء لا يعنيه أو يتدخل فيما لا يخصه؟', '["''اللي ما يعرف الصقر يشويه''","''يدخل بين البصلة وقشرتها''","''طبخة ما فيها ملح''","''راعي الخيل ما يركب الحمار''"]'::jsonb, 0, 25, 2, 'multi', 'هذا المثل الخليجي المتداول في البحرين يُضرب لمن يجهل قيمة شيء نفيس فيُتلفه أو يسيء التعامل معه، وهو تحذير من الجهل بالقيم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما اسم العين الشهيرة في البحرين التي كان يشرب من مائها الغواصون تاريخياً وتتفجر من قاع البحر مباشرةً، وتُعدّ من عجائب الجزيرة؟', '["عين أم الصفير","عين أبو زيدان","عين عذاري","عين الحمام"]'::jsonb, 1, 25, 3, 'multi', 'عين أبو زيدان من العيون العذبة التي تتفجر في قاع خليج البحرين وكان الغواصون يستقون منها في البحر، وهي ظاهرة فريدة ارتبطت بالحياة التراثية للبحرين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'في الموروث الشعبي البحريني لموسم الغوص، ما اسم الشخص الذي يتولى قيادة سفينة الغوص وإدارة شؤون الرحلة البحرية بأكملها؟', '["الغيّاص","النوخذة","السيّب","المجذوف"]'::jsonb, 1, 25, 4, 'multi', 'النوخذة هو ربّان السفينة ومسؤولها الأول في رحلات الغوص على اللؤلؤ، وكانت له صلاحيات تامة على طاقم السفينة وكان يتفاوض مع التجار في بيع اللؤلؤ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'المثل البحريني ''اللي ما يعرف الصقر يشويه'' يُضرب لمن يُهين شيئاً ثميناً أو شخصاً شريفاً جهلاً بقيمته الحقيقية.', '["صح","خطأ"]'::jsonb, 0, 25, 5, 'boolean', 'هذا المثل الخليجي المتداول في البحرين يُضرب لمن يجهل قيمة الأشياء النفيسة أو الأشخاص الكرام، فيُسيء التعامل معهم بسبب قصور معرفته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما اسم الميناء التاريخي الرئيسي في البحرين الذي كان مركزاً لتجارة اللؤلؤ والبضائع القادمة من الهند وبلاد فارس في العصور الوسطى؟', '["ميناء المنامة","ميناء البلاد القديم","ميناء عراد","ميناء الديه"]'::jsonb, 1, 25, 6, 'multi', 'البلاد القديم كانت من أعرق المناطق التجارية في البحرين وتحتضن من أقدم المساجد وكانت منطلقاً لتجارة اللؤلؤ عبر التاريخ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم الذي يُطلقه البحرينيون تقليدياً على العريشة المصنوعة من سعف النخيل التي يستخدمها الصيادون والغواصون مسكناً موسمياً على الشاطئ؟', '["البرزة","العشة","الصيفية","المضيف"]'::jsonb, 1, 25, 7, 'multi', 'العشة هي المسكن الموسمي المؤقت من سعف النخيل الذي يُقيمه الصيادون على الشواطئ خلال مواسم الصيد والغوص في التراث البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'أيُّ المثل البحرينية الشعبية يُضرب لمن يُبالغ في الاحتياط لدرجة تُعيق العمل وتُفوّت الفرص؟', '["اللي يخاف من العين ما يحب","المركب اللي له ربّانين تغرق","خذ الحيطة قبل الوقوع","من أمن المكر حلّت به النقم"]'::jsonb, 1, 25, 8, 'multi', 'هذا المثل يُضرب في الأصل لتعدد القيادات وتضارب القرارات، لكنه يُستخدم أيضاً للدلالة على أن كثرة التحوط والتشاور المُفرط يُفشل الأمور.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما اسم الجزيرة البحرينية التي تضم أكبر مجمّع للمقابر الأثرية في العالم من حضارة دلمون، ويُقدَّر عدد الأتلال الجنائزية فيها بعشرات الآلاف؟', '["جزيرة سترة","جزيرة النبيه صالح","جزيرة عالي","جزيرة أم النعسان"]'::jsonb, 2, 25, 9, 'multi', 'تحتضن منطقة عالي أكبر مقبرة دلمونية في العالم، تضم ما يزيد على 170,000 تلّة جنائزية يعود أقدمها إلى الألفية الثالثة قبل الميلاد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'المثل البحريني ''خذ من الطبّال طبلة'' يُضرب للحثّ على الاستفادة من أهل الخبرة والاختصاص في كل مجال.', '["صح","خطأ"]'::jsonb, 0, 25, 10, 'boolean', 'المثل يحثّ على تعلّم الصنعة أو الفن من أصحابه المختصين، فالطبّال أعلم بطبلته من غيره، والحكمة أخذ العلم من معدنه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم الشعبي التراثي الذي يُطلقه أهل البحرين على موسم هبوب الرياح الجنوبية الرطبة والحارة صيفاً، والذي كان يُعيق رحلات الغوص ويُسبّب الانزعاج للبحّارة؟', '["الشمال","الكوس","البارح","السهيلي"]'::jsonb, 1, 25, 11, 'multi', 'الكوس هو الريح الجنوبية الشرقية الحارة الرطبة التي تهبّ صيفاً في الخليج، وكان البحّارة والغوّاصون يتجنّبون الإبحار خلالها لخطورتها وشدّة حرارتها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'في حضارة دلمون البحرينية القديمة، ما اسم الإله الرئيسي للمياه العذبة الذي كان يُعبده سكان دلمون، والذي ارتبط اسمه بأسطورة الفردوس والحياة الأبدية في الأساطير السومرية؟', '["إنليل","إنكي","أنو","مردوخ"]'::jsonb, 1, 25, 12, 'multi', 'إنكي (أو إيا) هو إله المياه العذبة السومري المرتبط بدلمون في أسطورة الفردوس، وكانت ينابيع البحرين العذبة تُنسب إليه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'اللؤلؤ البحريني المعروف بـ''الجيوم'' هو النوع الأعلى قيمةً والأكثر كمالاً في التصنيف التراثي البحريني للؤلؤ.', '["صح","خطأ"]'::jsonb, 1, 25, 13, 'boolean', 'أعلى أنواع اللؤلؤ البحريني قيمةً هو ''البدلة'' أو ''الجيوم الصافي''، لكن التصنيف الأول للجودة يُعرف بـ''البدلة'' وليس الجيوم وحده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم التراثي الذي يُطلقه أهل البحرين على الغواص الذي يتخصص في قطع حبال المحار وفصلها من قاع البحر بسكينه الخاص خلال موسم الغوص؟', '["الغيص","السيب","الردّيف","التبّان"]'::jsonb, 0, 25, 14, 'multi', 'الغيص هو الغواص المتخصص في النزول إلى القاع والتقاط المحار وقطعه، وهو العنصر الأساسي في طاقم سفينة الغوص البحرينية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم التراثي الذي يُطلقه أهل الخليج العربي والبحرين على رئيس رحلة الغوص المسؤول عن تسيير السفينة واتخاذ القرارات البحرية وتوزيع الغنائم؟', '["الغيّاص","النوخذة","المحمّل","الساروج"]'::jsonb, 1, 25, 15, 'multi', 'النوخذة هو ربّان السفينة وقائد رحلة الغوص في تراث الخليج، وكان يتمتع بصلاحيات واسعة في الإدارة والتوزيع وحلّ النزاعات بين الغواصين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'في التراث البحريني، ما اسم الغناء البحري التقليدي الذي كان يؤدّيه البحّارة والغواصون بإيقاع جماعي لتنسيق جهودهم أثناء سحب الشباك أو رفع الأشرعة؟', '["الليوا","الفجري","الصوت","العازي"]'::jsonb, 1, 25, 16, 'multi', 'الفجري فن غنائي بحري أصيل متوارث في البحرين وقطر والكويت، كان يؤدّيه بحّارة الغوص جماعياً لتنسيق العمل البحري، وقد أدرجته اليونسكو في قوائم التراث غير المادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'حضارة دلمون البحرينية القديمة كانت تعتمد اعتماداً رئيسياً على المياه العذبة النابعة من الينابيع البحرية تحت سطح الخليج (الكيران) في تأمين احتياجاتها المائية.', '["صح","خطأ"]'::jsonb, 0, 25, 17, 'boolean', 'اعتمد سكان دلمون على الينابيع العذبة الطبيعية النابعة من باطن الأرض والقاع البحري (الكيران)، وهي ظاهرة جيولوجية فريدة في البحرين ذُكرت في الأساطير السومرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما اسم النظام التقليدي المعروف في البحرين الذي كان يُنظّم العلاقة التعاقدية بين صاحب السفينة (المجهّز) والغواصين، وكان يقوم على مبدأ المشاركة في الأرباح بنسب محددة مسبقاً؟', '["نظام الكفالة","نظام التسقام","نظام الشراكة البحرية","نظام العُقدة"]'::jsonb, 1, 25, 18, 'multi', 'التسقام هو النظام التعاقدي التقليدي البحريني الذي ينظّم توزيع الغنائم والديون بين الغواصين وأصحاب السفن، وكان يُقيّد الغواصين بالديون أحياناً لأجيال.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_165, 'ما الاسم الذي يُطلقه أهل البحرين والخليج تراثياً على الشخص المتخصص في فتح المحار وتقدير قيمة اللؤلؤ المستخرج وفرزه وتصنيفه حسب الحجم والجودة؟', '["الطوّاش","النوخذة","المحتسب","الغيّاص"]'::jsonb, 0, 25, 19, 'multi', 'الطوّاش هو التاجر المتخصص في شراء اللؤلؤ من الغواصين وتصنيفه وتقديره وإعادة بيعه، وكان يمتلك خبرة دقيقة في تمييز جودة اللؤلؤ وأصنافه.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_166 uuid;
BEGIN
  SELECT id INTO v_lib_id_166 FROM quizzes WHERE title = 'تاريخ وتراث البحرين — الجزء 2' LIMIT 1;
  IF v_lib_id_166 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تاريخ وتراث البحرين — الجزء 2', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_166;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني، كانت ''قرقيعان'' تحتفالية شعبية تقام في منتصف شهر رمضان المبارك (الليلة الخامسة عشر) يخرج فيها الأطفال يطرقون أبواب الجيران طالبين الحلوى والمكسرات.', '["صح","خطأ"]'::jsonb, 0, 25, 0, 'boolean', 'قرقيعان احتفالية خليجية وبحرينية أصيلة تقام ليلة 15 رمضان، يرتدي فيها الأطفال ملابس تراثية ملونة ويجوبون الأحياء منشدين أغاني التراث طالبين الحلوى من الجيران.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث الغوص البحريني، ما اسم الآلة الموسيقية الإيقاعية الرئيسية ذات الجلد المشدود التي كانت تُضرب على ظهر السفينة لتحفيز الغواصين وإيقاع حركتهم الجماعية أثناء رفع الحبال؟', '["الطبل الكبير (المرواس)","الجاهلية","الدمّام","الكاسر"]'::jsonb, 2, 25, 1, 'multi', 'الدمّام هو الطبل الجلدي التقليدي الأساسي في الموسيقى البحرية الخليجية، وكان لا يفارق سفن الغوص لإيقاع الأعمال الجماعية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'كانت جزيرة البحرين في العصور الوسطى الإسلامية تُعرف بـ''أوال'' وهو الاسم الذي كان يُطلقه عليها العرب قبل أن يشيع اسم ''البحرين'' للدلالة على الجزيرة تحديداً.', '["صح","خطأ"]'::jsonb, 0, 25, 2, 'boolean', 'الاسم القديم للجزيرة الرئيسية هو ''أوال'' نسبةً إلى صنم قبلي، وقد كان اسم ''البحرين'' تاريخياً يُطلق على منطقة أوسع تشمل الأحساء والقطيف قبل أن يختص بالجزيرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني، كان ''النوخذة'' في رحلات الغوص مسؤولاً أيضاً عن تسجيل ديون الغواصين وضبط الحسابات المالية لكل فرد في الرحلة، مما جعله يجمع بين السلطتين البحرية والمالية.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'النوخذة كان يتمتع بصلاحيات مطلقة على السفينة تشمل القيادة البحرية والإدارة المالية وتسجيل ديون الغواصين (نظام السلفة)، مما منحه نفوذاً واسعاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني والخليجي، ما الاسم الذي يُطلق على الغواص الماهر المتمرّس الذي يستطيع البقاء تحت الماء لفترة أطول من غيره ويُكلَّف باستخراج المحار من الأعماق الكبيرة؟', '["الغيص","السيب","الرضيف","المجداف"]'::jsonb, 0, 25, 4, 'multi', 'الغيص (جمع: غيّاصة أو غواصة) هو لقب الغواص المتخصص في النزول إلى أعماق البحر لانتشال المحار، وهو الركيزة الأساسية في رحلات اللؤلؤ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث الشعبي البحريني، ما اسم الاحتفال التقليدي الذي يُقام في موسم العودة من رحلة الغوص ويُستقبل فيه الغواصون على الشاطئ بالأغاني والطبول ويُعدّ من أجمل مظاهر التراث البحري؟', '["القفال","الركبة","الريدة","الفجري"]'::jsonb, 0, 25, 5, 'multi', '''القفال'' هو موسم العودة من الغوص، ويُحتفل فيه باستقبال السفن العائدة بالأغاني والرقصات الشعبية وهو من أعرق تقاليد التراث البحري البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني والخليجي، ما معنى المثل الشعبي المشهور ''اللي ما يعرف الصقر يشويه''؟', '["الجهل بقيمة الأشياء النفيسة يؤدي إلى إتلافها","الطيور الجارحة لا تصلح طعاماً","الصيد يحتاج إلى خبرة وتدريب طويل","من لا يملك الصقر لا يستطيع الصيد"]'::jsonb, 0, 25, 6, 'multi', 'المثل الخليجي ''اللي ما يعرف الصقر يشويه'' يُضرب لمن يجهل قيمة شيء نفيس فيُتلفه أو يُهينه، والصقر من أثمن ما يملكه العربي الخليجي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث الغوص البحريني، ما الاسم الذي يُطلق على العقد التقليدي الذي يُبرَم في بداية موسم الغوص بين النوخذة والغواصين، والذي يُحدّد فيه نصيب كل طرف من اللؤلؤ المستخرج؟', '["الملقط","السلفة","التوار","الدين"]'::jsonb, 1, 25, 7, 'multi', 'السلفة هي المبلغ المُقدَّم للغواص قبل الرحلة كسُلفة على حصته، وكانت أداة التزام وربط للغواص بموسم الغوص.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'كانت جزيرة دلمون، التي تُطابقها كثير من الدراسات الأثرية مع البحرين، تُعدّ في الأساطير السومرية أرضاً مقدسة خالدة يقطنها الأبطال المُخلَّدون، ومنها انطلقت ملحمة جلجامش للبحث عن العشبة.', '["صح","خطأ"]'::jsonb, 0, 25, 8, 'boolean', 'الأساطير السومرية تصف دلمون بأنها أرض خلود طاهرة، وإليها توجّه أوتنابشتيم الناجي من الطوفان وكذلك جلجامش باحثاً عن سر الخلود.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث الشعبي البحريني والخليجي، كان ''الصياد'' المختص بالقنص يُسمّى ''البحري''، أما الغواص المختص بسحب الشبكة من قاع البحر فيُسمّى ''الرضيف''.', '["صح","خطأ"]'::jsonb, 1, 25, 9, 'boolean', 'الرضيف في تراث الغوص هو المساعد الذي يبقى في القارب ويسحب حبل الغواص، وليس غواصاً يسحب شبكة، وهو مصطلح موثّق في تراث الغوص البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني، ما الاسم الذي يُطلق على الشخص المتخصص في تقدير قيمة اللؤلؤ وتصنيف جودته وأحجامه داخل سوق اللؤلؤ؟', '["الطوّاش","الغيّاص","السيّب","النقّاد"]'::jsonb, 0, 25, 10, 'multi', 'الطوّاش هو التاجر المتجوّل المتخصص في شراء وبيع اللؤلؤ وتقييمه، وكان يجوب الأسواق والسفن لشراء المحاصيل من النواخذة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث البحرين الأثري، ما الاسم الذي يُعطى للتلال الجنائزية الأثرية الضخمة المنتشرة في البحرين والتي تعود إلى حضارة دلمون، وتُعدّ من أكبر مقابر ما قبل التاريخ في العالم؟', '["تلال عالي","قلعة البحرين","بربار","سار"]'::jsonb, 0, 25, 11, 'multi', 'تلال عالي هي مجموعة التلال الجنائزية الملكية الضخمة في البحرين التي تعود إلى حضارة دلمون، وبعضها يبلغ ارتفاعه خمسة عشر متراً، وتُعدّ من أضخم المقابر الأثرية في العالم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث الشعبي البحريني، كانت الأغنية البحرية المعروفة بـ''الفجري'' تُؤدَّى فقط في رحلات الصيد بالشباك، ولم تكن مرتبطة برحلات الغوص على الإطلاق.', '["صح","خطأ"]'::jsonb, 1, 25, 12, 'boolean', 'الفجري هو من أشهر الأغاني البحرية البحرينية المرتبطة برحلات الغوص على اللؤلؤ تحديداً، وكان يُؤدَّى في الصباح الباكر على ظهر السفينة لرفع روح الغواصين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث الغوص البحريني، ما الاسم الذي يُطلق على الوعاء الجلدي الصغير الذي يضعه الغواص على أنفه لمنع دخول الماء أثناء النزول إلى الأعماق؟', '["الفطام","الخبط","الميجر","الزبن"]'::jsonb, 0, 25, 13, 'multi', 'الفطام هو غلاف جلدي صغير يُثبَّت على الأنف ويُستخدم لمنع دخول الماء عند الغواص البحريني أثناء الغوص عن اللؤلؤ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث البحريني الشعبي، ما المقصود بمصطلح ''الرداد'' في سياق موسم الغوص؟', '["الشخص الذي يُرتّب الحساب ويوزّع الأرباح بعد نهاية الموسم","الغواص الذي يعود دون أن يجد لؤلؤاً في الموسم كله","القارب الصغير المستخدم لنقل اللؤلؤ من السفينة الكبيرة إلى الشاطئ","الشخص الذي يمدّ الحبل للغواص أثناء نزوله"]'::jsonb, 3, 25, 14, 'multi', 'الرداد (أو السيب) هو البحّار الذي يُمسك الحبل المربوط بالغواص ويُساعده على النزول والصعود، وهو ركن أساسي في منظومة الغوص التقليدي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث الشعبي البحريني، يُطلق مصطلح ''الحدّاء'' على الشخص الذي يُنشد الأغاني البحرية لرفع معنويات البحارة والغواصين أثناء العمل في البحر، وهو ما يُعادل ''النهّام'' في الكويت.', '["صح","خطأ"]'::jsonb, 0, 25, 15, 'boolean', 'النهّام في الكويت والبحرين هو المنشد الرئيسي في السفينة الذي يرفع أغاني العمل البحري، وقد يُطلق عليه محلياً ألقاب متعددة بحسب المنطقة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث البحرين المائي، ما الاسم الذي يُطلق على ظاهرة العيون المائية العذبة التي تنبع من قاع البحر قرب الشاطئ البحريني، وكان الغواصون قديماً يملؤون منها قِرَبهم في عرض البحر؟', '["الكِرار","الكرز","العين الجارية","الزبارة"]'::jsonb, 1, 25, 16, 'multi', 'يُطلق البحريون اسم ''الكرز'' على العيون العذبة النابعة من قاع البحر، وهي ظاهرة فريدة في البحرين كان الغواصون يستعذبون منها الماء وسط الخليج.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'كانت البحرين في العصر الإسلامي الأول تشمل جغرافياً منطقة أوسع بكثير من الجزيرة الحالية، وكانت تمتد لتشمل الأحساء والقطيف وجزءاً من الساحل الشرقي للجزيرة العربية.', '["صح","خطأ"]'::jsonb, 0, 25, 17, 'boolean', 'البحرين تاريخياً كانت تُطلق على الإقليم الساحلي الممتد من البصرة جنوباً حتى عُمان، وتشمل الأحساء والقطيف وليس الجزيرة وحدها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في التراث الشعبي البحريني، ما المقصود بمصطلح ''التبّان'' الذي كان يرتديه غواصو اللؤلؤ أثناء النزول إلى الأعماق؟', '["سروال قصير من القماش الخشن يرتديه الغواص","حزام جلدي يُثبَّت حول الخصر لحمل الأوزان","كيس شبكي لتجميع المحار","غطاء للرأس يقي من أشعة الشمس"]'::jsonb, 0, 25, 18, 'multi', 'التبّان هو الملبس الوحيد الذي يرتديه الغواص أثناء نزوله، وهو سروال قصير خفيف من القماش لا يُعيق حركته تحت الماء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_166, 'في تراث الغوص البحريني، ما الاسم الذي يُطلق على القائد الأعلى للسفينة الذي يتولى الإشراف على الغواصين ويتحكم في توزيع الأرباح وتسوية الحسابات في نهاية الموسم؟', '["النوخذة","المطوّع","السيّب","الغيّاص"]'::jsonb, 0, 25, 19, 'multi', 'النوخذة هو ربّان السفينة ومسؤولها الأعلى في رحلات الغوص، ويتولى إدارة الحسابات المالية لطاقم السفينة.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_167 uuid;
BEGIN
  SELECT id INTO v_lib_id_167 FROM quizzes WHERE title = 'تاريخ وتراث البحرين — الجزء 3' LIMIT 1;
  IF v_lib_id_167 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تاريخ وتراث البحرين — الجزء 3', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_167;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'حضارة دلمون التي ازدهرت في البحرين القديمة كانت تُعرف في النصوص السومارية باسم ''أرض الأحياء'' أو ''جنة الآلهة''، وكانت مركزاً تجارياً مهماً يربط بلاد الرافدين بحضارة وادي السند.', '["صح","خطأ"]'::jsonb, 0, 25, 0, 'boolean', 'الألواح السومارية تُشير إلى دلمون (البحرين) على أنها ''أرض الأحياء المقدسة'' ومركز تجاري محوري بين الرافدين وحضارة الإندوس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في التراث الشعبي البحريني، ما اسم الاحتفال الشعبي التقليدي الذي كان يُقام عند عودة سفن الغوص في نهاية الموسم، حيث يخرج الأهل والأبناء لاستقبال الغواصين على الشاطئ بالأغاني والطبول؟', '["القفال","الردّة","المحمّل","الدشّة"]'::jsonb, 0, 25, 1, 'multi', 'القفال هو موسم عودة سفن الغوص إلى الشاطئ في نهاية الموسم، وهو مناسبة احتفالية تراثية بحرينية تُرافقها الأغاني الشعبية والفرح.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في التراث البحريني العمراني القديم، ما الاسم الذي يُطلق على برج التهوية التقليدي المبني فوق المنازل البحرينية القديمة لتلطيف الهواء الداخل وتوزيعه على أرجاء البيت دون استخدام الكهرباء؟', '["البادغير (الباذهنج)","الليوان","الدهليز","المجاز"]'::jsonb, 0, 25, 2, 'multi', 'البادغير أو الباذهنج هو برج التهوية التقليدي المعروف في العمارة الخليجية والفارسية، ويُعدّ من أبرز عناصر العمارة الإيكولوجية التقليدية في البحرين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'كانت جزيرة البحرين تُعرف في النصوص البرتغالية والأوروبية القديمة باسم ''أوال''، وهو الاسم الذي أطلقه عليها العرب قبل الإسلام نسبةً إلى بطن من بطون قبيلة وائل.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'البحرين عُرفت قديماً باسم ''أوال'' المنسوب إلى صنم أو إلى بطن من قبيلة وائل، وهو اسم لا يزال يُستخدم أحياناً في الأدبيات التاريخية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في التراث البحريني الشعبي، ما اسم اللعبة الشعبية التقليدية التي كانت تُمارَس في المناسبات والأعياد، وتعتمد على التراشق بالأحجار أو الكرات بين فريقين من الأولاد، وكانت من أبرز الألعاب الحركية في أحياء البحرين القديمة؟', '["الصّيد (الغمّيضة البحرية)","الجفن","السدة","الطيّارة"]'::jsonb, 2, 25, 4, 'multi', 'السدة من الألعاب الشعبية البحرينية التقليدية التي تُمارَس في الفضاء المفتوح وتعتمد على المواجهة الجماعية بين فريقين، وكانت شائعة في أحياء المنامة والمحرق القديمة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث صيد اللؤلؤ البحريني، ما الاسم الذي يُطلق على العملية التي يقوم بها الغواص عند نزوله إلى قاع البحر، إذ يضع قدمه في حلقة حبل ثقيل لتسريع هبوطه، وكان يُصنع هذا الثقل تقليدياً من الحجر أو الرصاص؟', '["الديّن","الحجر","الزيبق","الحجل"]'::jsonb, 3, 25, 5, 'multi', 'يُسمّى الحجر الثقيل الذي يضع فيه الغواص قدمه لتسريع هبوطه إلى القاع ''الحجل'' أو ''الجاص'' في بعض روايات التراث البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تاريخ البحرين الإسلامي، مَن هو القائد العربي الذي فتح البحرين في عهد الخليفة أبي بكر الصديق، وتصدّى لردة أهلها بقيادة المنذر بن النعمان، وأُرسل في صدر الجيش الإسلامي لإخماد هذه الفتنة؟', '["العلاء بن الحضرمي","خالد بن الوليد","عمرو بن العاص","عكرمة بن أبي جهل"]'::jsonb, 0, 25, 6, 'multi', 'العلاء بن الحضرمي هو والي البحرين الذي تصدّى لحركة الردة فيها بقيادة المنذر بن النعمان وأخمدها في عهد أبي بكر الصديق.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث البحرين المعماري القديم، ما الاسم الذي يُطلق على الفتحات الصغيرة والمشبّكة التي كانت تُصنع في جدران البيوت البحرينية الساحلية القديمة لإدخال الهواء البحري المنعش وتصريف الرطوبة دون أن تسمح بدخول الحشرات أو أشعة الشمس المباشرة؟', '["الروشان","الخوخة","القمرية","المشربية"]'::jsonb, 3, 25, 7, 'multi', 'المشربية هي الفتحة المشبّكة التقليدية في جدران البيوت الخليجية والبحرينية، تسمح بتدفق الهواء وتوفير الخصوصية مع حجب الشمس المباشرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث الغوص البحريني، ما الاسم الذي يُطلق على العامل الذي يبقى في السفينة ويشدّ الحبال ويُساعد الغواص على الصعود والنزول، وهو الرفيق الأساسي للغواص طوال موسم صيد اللؤلؤ؟', '["السيب","الرضيف","التبّان","النهّام"]'::jsonb, 0, 25, 8, 'multi', 'السيب هو المسؤول عن شدّ حبل الغواص وإنقاذه عند الطلب، وكان الغواص والسيب يرتبطان بعلاقة تكاملية أساسية في رحلات الغوص البحرينية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'كانت البحرين في العصور القديمة تُصدَّر منها التمور إلى بلاد ما بين النهرين، وقد أشارت إليها النصوص السومارية باعتبارها مصدراً رئيسياً للنحاس والتمر والأصواف.', '["صح","خطأ"]'::jsonb, 1, 25, 9, 'boolean', 'النصوص السومارية أشارت إلى دلمون (البحرين) كمصدر للنحاس واللازورد والأخشاب القادمة من الهند، أما التمر فلم يكن من سلعها التصديرية الرئيسية المذكورة في تلك النصوص.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في الأمثال الشعبية البحرينية، ما المعنى المقصود من المثل الشائع ''اللي ما يعرف الصقر يشويه''، والذي يُضرب في سياقات اجتماعية وتجارية معيّنة؟', '["جهل الإنسان بقيمة الأشياء النفيسة يجعله يُهدرها","الجاهل يُؤذي نفسه باستهتاره","من لا يعرف قيمة الآخرين لا يستحق صحبتهم","التسرع في الأحكام يؤدي إلى الخسارة"]'::jsonb, 0, 25, 10, 'multi', 'يُضرب هذا المثل لمن يجهل قيمة شيء نفيس فيُتلفه أو يُهينه، إذ كان الصقر عند العرب من أثمن الطيور، فمن يجهل قيمته يعامله معاملة طعام عادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'جزيرة دلمون التي أشارت إليها النصوص السومارية كانت تُعرف بـ''أرض الأحياء'' أو ''جنة الخلود''، وتُعرَّف في الغالب بجزيرة البحرين الحالية.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'وصفت النصوص السومارية دلمون بأنها أرض مقدسة طاهرة تشبه الجنة، وتُجمع معظم الأبحاث الأثرية على تحديدها بالبحرين الحالية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث البحرين الشعبي، ما اسم الفن الغنائي البحريني الذي يُؤدَّى عادةً في حفلات الأعراس والمناسبات الفرحة، ويتميز بإيقاعاته الحماسية المتأثرة بالموروث الأفريقي والخليجي معاً، وأُدرج في قائمة اليونسكو للتراث الإنساني غير المادي؟', '["الفجري","الصوت","العرضة","الليوا"]'::jsonb, 3, 25, 12, 'multi', 'الليوا فن غنائي وإيقاعي ذو جذور أفريقية، يُمارَس في البحرين والإمارات وعُمان، وقد أُدرج على قائمة التراث الثقافي غير المادي لليونسكو.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في التراث الشعبي البحريني، ما الاسم الذي يُطلق على الشخص المتخصص في قراءة فاتحة الأموات وأداء مراسم العزاء في البيوت البحرينية التقليدية، والذي كان يُستدعى فور وفاة أحد أفراد الأسرة ليتلو القرآن ويُنظّم طقوس العزاء؟', '["الملّا","النوحة","الزاير","القارئ"]'::jsonb, 0, 25, 13, 'multi', 'يُطلق أهل البحرين لقب ''الملّا'' على رجل الدين أو المتخصص الذي يُدعى لقراءة القرآن وإحياء مجالس العزاء، وهو لقب شائع في المجتمع البحريني والخليجي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث الغوص البحريني، ما الاسم الذي يُطلق على المبلغ المالي الذي يتقاضاه الغواص مُقدَّماً من التاجر (المُحتسِب) قبل بدء موسم الغوص، والذي يُشكّل قيداً مالياً يُلزمه بالعمل مع ذلك التاجر موسماً بعد موسم حتى يُسدَّد الدين بالكامل؟', '["السَّلَف","التسلُّف","الدَّيْن","النصيب"]'::jsonb, 0, 25, 14, 'multi', 'نظام ''السلف'' كان الركيزة الاقتصادية لصناعة اللؤلؤ البحرينية، وكثيراً ما تحوّل إلى عبودية مقنّعة إذ كان الغواصون يرثون ديون آبائهم لتاجر اللؤلؤ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تاريخ البحرين، ما اسم القلعة الأثرية التي تقع في شمال جزيرة البحرين والتي يعود تاريخها إلى الحضارة البرتغالية في القرن السادس عشر الميلادي، وقد بُنيت فوق طبقات حضارية أقدم تعود إلى العصر الدلموني والفينيقي، وهي مدرجة اليوم في قائمة اليونسكو للتراث العالمي؟', '["قلعة البحرين (قلعة البرتغال)","قلعة عراد","قلعة الرفاع","قلعة سار"]'::jsonb, 0, 25, 15, 'multi', 'قلعة البحرين المعروفة بـ''قلعة البرتغال'' أُدرجت في قائمة اليونسكو للتراث العالمي عام 2005م، وتحتوي على طبقات أثرية تمتد من الألف الثالث قبل الميلاد حتى العصر الإسلامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في التراث الشعبي البحريني، كانت مهنة ''الحدّاد'' (صانع الأدوات المعدنية) تُعدّ من أرفع المهن الاجتماعية في المجتمع البحريني التقليدي، وكان أصحابها يحظون بمكانة اجتماعية تفوق مكانة التجار.', '["صح","خطأ"]'::jsonb, 1, 25, 16, 'boolean', 'في المجتمع البحريني التقليدي، كانت مهنة الحدادة وبعض الحِرَف اليدوية تحمل وصمة اجتماعية نسبية، فيما احتلّ التجار وكبار ملاك السفن وتجار اللؤلؤ قمة السلم الاجتماعي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث البحرين المائي، ما الاسم الذي يُطلق على قائد رحلة الغوص المسؤول عن إدارة السفينة والطاقم وتحديد مناطق الصيد والفصل في النزاعات بين أفراد الطاقم، وهو المرجع الأعلى على ظهر السفينة خلال موسم اللؤلؤ؟', '["المُحتسِب","النوخذة","السيّب","الغيّاص"]'::jsonb, 1, 25, 17, 'multi', 'النوخذة هو ربّان سفينة الغوص ومديرها الأعلى، ويتولى قيادة الرحلة وإدارة الطاقم وتحديد مواقع الغوص في تراث صيد اللؤلؤ البحريني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'كانت جزيرة البحرين في العصور الوسطى الإسلامية تُعدّ مركزاً رئيسياً لحركة القرامطة، حيث أسّسوا فيها دولتهم واحتلوا مكة المكرمة واقتلعوا الحجر الأسود ونقلوه إلى البحرين لأكثر من عشرين سنة.', '["صح","خطأ"]'::jsonb, 0, 25, 18, 'boolean', 'استولى القرامطة على الحجر الأسود عام 317هـ وأبقوه في مقرّهم بالبحرين (هجر) قرابة اثنتين وعشرين سنة قبل إعادته عام 339هـ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_167, 'في تراث المثل الشعبي البحريني والخليجي، ما المعنى المقصود من المثل القائل ''البحر ما يرضى بفنجان''، والذي يُضرب في سياق الكرم والعطاء؟', '["البحر لا يُستأنس به لعظم خطورته","الكريم الحقيقي لا يُقيّد عطاءه بشيء يسير ولا يرضى بالقليل","لا ينبغي للإنسان أن يأخذ من البحر أكثر من حاجته","الطبيعة أكبر من أن يسيطر عليها الإنسان"]'::jsonb, 1, 25, 19, 'multi', 'يُضرب هذا المثل الخليجي في وصف الكريم الذي لا يقنع بالعطاء اليسير، كما أن البحر الواسع لا يُقاس بفنجان صغير.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_168 uuid;
BEGIN
  SELECT id INTO v_lib_id_168 FROM quizzes WHERE title = 'ثقافة ومعارف عامة — الجزء 1' LIMIT 1;
  IF v_lib_id_168 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('ثقافة ومعارف عامة — الجزء 1', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_168;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'مَن هو المعماري الذي صمّم برج الكهرباء الشهير في بيروت الذي دُمّر خلال الحرب الأهلية اللبنانية؟', '["أوسكار نيماير","أنطوان تابيت","جيوفاني موريتي","فؤاد كوسا"]'::jsonb, 1, 25, 0, 'multi', 'صمّم المعماري اللبناني أنطوان تابيت برج الكهرباء (مبنى البرج) في بيروت، الذي غدا رمزاً للحرب الأهلية اللبنانية بعد تدميره.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'الشاعر أبو الطيب المتنبي وُلد في مدينة الكوفة بالعراق.', '["صح","خطأ"]'::jsonb, 0, 25, 1, 'boolean', 'وُلد أبو الطيب أحمد بن الحسين المتنبي عام 915م في الكوفة بالعراق، وهو ما تجمع عليه أغلب المصادر التاريخية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو الفيلسوف العربي الذي لُقِّب بـ''الفارابي'' ويُعدّ من أبرز فلاسفة الإسلام، واشتهر بلقب ''المعلم الثاني''؟', '["ابن سينا","ابن رشد","أبو نصر الفارابي","الكندي"]'::jsonb, 2, 25, 2, 'multi', 'أبو نصر الفارابي لُقِّب بـ''المعلم الثاني'' بعد أرسطو لغزارة علمه وإسهاماته الفلسفية والمنطقية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'أي خليفة عباسي يُنسب إليه تأسيس ''بيت الحكمة'' في بغداد مركزاً للترجمة والعلوم؟', '["هارون الرشيد","المأمون","المعتصم","المنصور"]'::jsonb, 1, 25, 3, 'multi', 'الخليفة العباسي المأمون (813-833م) هو من طوّر بيت الحكمة وجعله مركزاً علمياً بارزاً للترجمة والبحث في بغداد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو العالم العربي الذي وضع أسس علم الجبر وكتب مؤلَّفه الشهير ''الكتاب المختصر في حساب الجبر والمقابلة''؟', '["الخوارزمي","البيروني","ابن الهيثم","الإدريسي"]'::jsonb, 0, 25, 4, 'multi', 'محمد بن موسى الخوارزمي (القرن 9م) هو مؤسس علم الجبر، وكتابه ''المختصر في حساب الجبر والمقابلة'' أعطى العلم اسمه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'ما اسم الشاعر العربي الجاهلي الذي قيل عنه إنه ''أشعر العرب'' وصاحب المعلقة المشهورة التي مطلعها ''قفا نبكِ''؟', '["عنترة بن شداد","زهير بن أبي سُلمى","امرؤ القيس","طرفة بن العبد"]'::jsonb, 2, 25, 5, 'multi', 'امرؤ القيس الكندي الجاهلي لُقّب بـ''أشعر العرب'' وصاحب أشهر المعلقات التي تبدأ بـ''قفا نبكِ من ذكرى حبيب ومنزل''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو المهندس المعماري الذي صمم برج خليفة في دبي؟', '["نورمان فوستر","زها حديد","أدريان سميث","فرانك غيري"]'::jsonb, 2, 25, 6, 'multi', 'صمم المهندس المعماري الأمريكي أدريان سميث برج خليفة خلال عمله في شركة ⁦SOM⁩، وافتُتح البرج عام 2010.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو الفيلسوف والطبيب العربي الذي أُطلق عليه لقب ''الشيخ الرئيس'' وألّف كتاب القانون في الطب؟', '["الفارابي","ابن رشد","ابن سينا","الرازي"]'::jsonb, 2, 25, 7, 'multi', 'ابن سينا (980-1037م) عالم وفيلسوف إسلامي لُقّب بالشيخ الرئيس، وكتابه القانون في الطب ظل مرجعاً طبياً في أوروبا وآسيا لقرون.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو الشاعر الجاهلي الذي تُنسب إليه معلقة تبدأ بـ''قفا نبكِ من ذكرى حبيبٍ ومنزلِ''؟', '["عنترة بن شداد","زهير بن أبي سلمى","امرؤ القيس","لبيد بن ربيعة"]'::jsonb, 2, 25, 8, 'multi', 'معلقة امرئ القيس الكندي هي أشهر المعلقات السبع وتستهل بهذا المطلع الشهير، وقد لُقِّب بـ''الملك الضليل''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو الفيلسوف العربي الذي لُقِّب بـ''المعلم الثاني'' نسبةً إلى أرسطو؟', '["ابن سينا","ابن رشد","الفارابي","الكندي"]'::jsonb, 2, 25, 9, 'multi', 'لُقِّب أبو نصر الفارابي بـ''المعلم الثاني'' لعمقه في شرح فلسفة أرسطو وتطويرها، بينما اعتُبر أرسطو نفسه ''المعلم الأول''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'الشاعر المتنبي وُلد في الكوفة بالعراق وعاش معظم حياته في بلاط سيف الدولة الحمداني في حلب.', '["صح","خطأ"]'::jsonb, 0, 25, 10, 'boolean', 'وُلد أبو الطيب المتنبي في الكوفة عام 915م، وأمضى أزهى فترات حياته الشعرية في بلاط الأمير سيف الدولة الحمداني بحلب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'الكاتبة نوال السعداوي مصرية الجنسية وتُعدّ من أبرز الأصوات النسوية في الأدب العربي الحديث.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'نوال السعداوي (1931-2021) طبيبة وأديبة مصرية، اشتُهرت بكتاباتها النسوية الجريئة ومناهضتها للتمييز ضد المرأة في المجتمعات العربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو العالم العربي الذي وضع أسس علم الجبر وكُتبت باسمه كلمة ''⁦Algorithm⁩'' في الرياضيات الحديثة؟', '["ابن الهيثم","البيروني","الخوارزمي","الكندي"]'::jsonb, 2, 25, 12, 'multi', 'محمد بن موسى الخوارزمي (القرن التاسع الميلادي) وضع كتاب ''الجبر والمقابلة''، وكلمة ⁦Algorithm⁩ مشتقة من اسمه اللاتيني ⁦Algoritmi⁩.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'من هو الفيلسوف العربي الملقب بـ''المعلم الثاني'' لأنه جاء بعد أرسطو في الفلسفة؟', '["ابن سينا","ابن رشد","الكندي","الفارابي"]'::jsonb, 3, 25, 13, 'multi', 'لُقِّب أبو نصر الفارابي بـ''المعلم الثاني'' تقديراً لمكانته الفلسفية التي جاءت في مرتبة بعد أرسطو ''المعلم الأول''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_168, 'الشاعر المتنبي وُلد في الكوفة بالعراق.', '["صح","خطأ"]'::jsonb, 0, 25, 14, 'boolean', 'وُلد أبو الطيب المتنبي عام 915م في الكوفة بالعراق، وهو ما أجمع عليه أغلب المؤرخين والمصادر الأدبية.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_169 uuid;
BEGIN
  SELECT id INTO v_lib_id_169 FROM quizzes WHERE title = 'ثقافة ومعارف عامة — الجزء 2' LIMIT 1;
  IF v_lib_id_169 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('ثقافة ومعارف عامة — الجزء 2', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_169;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو العالم العربي الذي وصف الغلاف الجوي للأرض واكتشف طبيعة الضوء في العصر الإسلامي الذهبي؟', '["ابن البيطار","ابن الهيثم","جابر بن حيان","البيروني"]'::jsonb, 1, 25, 0, 'multi', 'وضع الحسن ابن الهيثم (965-1040م) أسس علم البصريات الحديث في كتابه ''المناظر''، وأثبت أن الضوء يصدر من الأجسام لا من العين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو المهندس المعماري الذي صمم متحف اللوفر أبوظبي؟', '["زها حديد","جان نوفيل","فرانك غيري","رنزو بيانو"]'::jsonb, 1, 25, 1, 'multi', 'صمم المعماري الفرنسي جان نوفيل متحف اللوفر أبوظبي الذي افتُتح عام 2017، واشتُهر بقبته المستوحاة من النخيل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'الشاعر العربي المتنبي وُلد في مدينة الكوفة بالعراق.', '["صح","خطأ"]'::jsonb, 0, 25, 2, 'boolean', 'وُلد أبو الطيب المتنبي عام 915م في الكوفة بالعراق، وهو ما أجمع عليه أغلب المؤرخين والمترجِمين لحياته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو عالم الرياضيات والفلك العربي الذي يُنسب إليه تطوير علم الجبر؟', '["ابن سينا","البيروني","الخوارزمي","الكندي"]'::jsonb, 2, 25, 3, 'multi', 'محمد بن موسى الخوارزمي عالم رياضيات من القرن التاسع الميلادي، ألّف كتاب ''المختصر في حساب الجبر والمقابلة'' الذي أسّس لعلم الجبر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'ما هو اسم الكاتب اللبناني صاحب رواية ''موسم الهجرة إلى الشمال''؟', '["جبران خليل جبران","الطيب صالح","نجيب محفوظ","غسان كنفاني"]'::jsonb, 1, 25, 4, 'multi', 'رواية ''موسم الهجرة إلى الشمال'' من تأليف الأديب السوداني الطيب صالح، وهي من أبرز الروايات العربية في القرن العشرين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'أي مدينة عربية تُعرف بـ''مدينة الألف منارة''؟', '["فاس","القاهرة","إسطنبول","دمشق"]'::jsonb, 1, 25, 5, 'multi', 'اشتُهرت القاهرة بلقب ''مدينة الألف منارة'' نظراً لكثرة مساجدها ومآذنها عبر التاريخ الإسلامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو الشاعر العربي الجاهلي صاحب معلقة ''قفا نبكِ من ذكرى حبيبٍ ومنزلِ''؟', '["عنترة بن شداد","زهير بن أبي سلمى","امرؤ القيس","لبيد بن ربيعة"]'::jsonb, 2, 25, 6, 'multi', 'معلقة ''قفا نبكِ'' هي من أشهر المعلقات السبع وتُنسب إلى امرئ القيس الكندي، أحد أبرز شعراء العصر الجاهلي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'أي مدينة عُمانية تشتهر بمينائها التاريخي الذي كان مركزاً لتجارة اللبان على مدى آلاف السنين؟', '["مسقط","صلالة","صور","نزوى"]'::jsonb, 1, 25, 7, 'multi', 'صلالة في ظفار كانت مركز تجارة اللبان العالمي قديماً، وتقع بالقرب من مناطق جني اللبان التاريخية المدرجة على قائمة التراث العالمي لليونسكو.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'ما اسم الشاعر العربي الجاهلي الملقّب بـ''امرئ القيس'' والذي يُعدّ صاحب إحدى أشهر المعلقات السبع؟', '["حُندج بن حجر","زهير بن أبي سلمى","لبيد بن ربيعة","عمرو بن كلثوم"]'::jsonb, 0, 25, 8, 'multi', 'امرؤ القيس اسمه الحقيقي حُندج بن حجر الكندي، وهو صاحب معلقة ''قفا نبكِ'' الشهيرة ولقّبه النقاد بأول شعراء الجاهلية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو المفكر والفيلسوف العربي الأندلسي الذي لُقّب بـ''الشارح الأكبر'' لفلسفة أرسطو؟', '["ابن سينا","ابن رشد","الفارابي","ابن خلدون"]'::jsonb, 1, 25, 9, 'multi', 'اشتُهر ابن رشد القرطبي (1126-1198م) بشروحاته الواسعة والعميقة على فلسفة أرسطو، مما أكسبه لقب ''الشارح الأكبر'' في الفكر الأوروبي والعربي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو الشاعر العربي الجاهلي الذي تُنسب إليه معلقة ''قفا نبكِ من ذكرى حبيب ومنزلِ''؟', '["عنترة بن شداد","زهير بن أبي سلمى","امرؤ القيس","طرفة بن العبد"]'::jsonb, 2, 25, 10, 'multi', 'مطلع ''قفا نبكِ من ذكرى حبيب ومنزلِ'' هو مطلع معلقة امرئ القيس الكندي، الملك الضليل، أشهر شعراء العصر الجاهلي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو المفكر والفيلسوف العربي الذي يُلقّب بـ''معلم الثاني'' بعد أرسطو؟', '["ابن سينا","ابن رشد","الفارابي","الكندي"]'::jsonb, 2, 25, 11, 'multi', 'لُقّب أبو نصر الفارابي بـ''المعلم الثاني'' لعمق فهمه لفلسفة أرسطو وشروحه عليها، فيما عُدّ أرسطو المعلم الأول.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'الشاعر العربي الجاهلي امرؤ القيس ينتمي إلى قبيلة كندة.', '["صح","خطأ"]'::jsonb, 0, 25, 12, 'boolean', 'امرؤ القيس بن حجر الكندي شاعر جاهلي ينتمي إلى قبيلة كندة اليمنية الأصل، وكان أبوه حجر ملكاً عليها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'ما هي اللغة الرسمية لدولة إيران؟', '["الكردية","العربية","الفارسية","التركية"]'::jsonb, 2, 25, 13, 'multi', 'الفارسية (الفارسي/الدري) هي اللغة الرسمية لإيران وفقاً لدستورها، وهي لغة هندوأوروبية تختلف عن العربية والتركية والكردية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_169, 'من هو الرحّالة المغربي الشهير الذي زار معظم أرجاء العالم الإسلامي في القرن الرابع عشر الميلادي وسجّل رحلاته في كتاب ''تحفة النظار''؟', '["ابن بطوطة","ابن جبير","المسعودي","الإدريسي"]'::jsonb, 0, 25, 14, 'multi', 'ابن بطوطة الطنجي (1304-1368م) رحّالة مغربي قطع نحو 120,000 كيلومتر عبر العالم الإسلامي وما وراءه، وسجّل رحلاته في كتاب ''تحفة النظار في غرائب الأمصار وعجائب الأسفار''.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_170 uuid;
BEGIN
  SELECT id INTO v_lib_id_170 FROM quizzes WHERE title = 'الفقه والأحكام الإسلامية — الجزء 1' LIMIT 1;
  IF v_lib_id_170 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الفقه والأحكام الإسلامية — الجزء 1', 'إسلاميات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_170;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، يجب على المكلَّف أن يُقلِّد المرجع الأعلم حتى لو كان ميتاً إذا لم يوجد أعلم منه في الأحياء.', '["صح","خطأ"]'::jsonb, 1, 25, 0, 'boolean', 'جمهور مراجع الشيعة يرون وجوب تقليد الأعلم الحي، وتقليد الميت ابتداءً غير جائز عند أكثرهم وإن جاز البقاء على تقليده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'كتاب ''شرائع الإسلام في مسائل الحلال والحرام'' للمحقق الحلي يُعدّ من أوسع الموسوعات الفقهية الشيعية وما زال يُدرَّس في الحوزات العلمية.', '["صح","خطأ"]'::jsonb, 0, 25, 1, 'boolean', 'شرائع الإسلام للمحقق الحلي (ت 676هـ) يُعدّ من أهم المتون الفقهية الإمامية ولا يزال مقرراً دراسياً في الحوزات الشيعية حتى اليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للمسألة التي تقول: إذا علم المكلّف إجمالاً بنجاسة أحد الإناءين ولم يعرف بعينه، فيجب عليه الاجتناب عنهما معاً؟', '["الاشتغال العقلي","العلم الإجمالي المنجِّز","الاحتياط الاستحبابي","قاعدة الفراغ"]'::jsonb, 1, 25, 2, 'multi', 'العلم الإجمالي المنجِّز مصطلح أصولي فقهي يُوجب الاجتناب عن أطراف الشبهة المحصورة، وهو من أهم مسائل علم الأصول التي تُبنى عليها أحكام ابتلائية كثيرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'كتاب ''مفتاح الكرامة في شرح قواعد العلّامة'' للسيد محمد جواد العاملي يُعدّ من أضخم الموسوعات الفقهية الشيعية ويقع في أكثر من عشرين مجلداً.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'مفتاح الكرامة للسيد محمد جواد العاملي (ت1226هـ) موسوعة فقهية ضخمة تزيد على عشرين مجلداً وهو شرح تفصيلي لكتاب قواعد الأحكام للعلّامة الحلي، ويُدرَّس في الحوزات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للمبدأ الفقهي الذي يقضي بأن كل شيء طاهر حتى تعلم بنجاسته يقيناً؟', '["قاعدة الطهارة","أصالة الاحتياط","قاعدة اليد","أصالة الصحة"]'::jsonb, 0, 25, 4, 'multi', 'قاعدة الطهارة من القواعد الأصولية الكبرى في الفقه الإمامي، ومستندها حديث ''كل شيء نظيف حتى تعلم أنه قذر''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'كتاب ''النهاية في مجرد الفقه والفتاوى'' للشيخ الطوسي يُعدّ أول موسوعة فقهية شيعية تعتمد الفتوى المباشرة دون ذكر الأدلة، وكان مرجعاً للشيعة قروناً طويلة.', '["صح","خطأ"]'::jsonb, 0, 25, 5, 'boolean', 'النهاية لشيخ الطائفة الطوسي هو كتاب فتوائي بامتياز ظلّ مرجعاً فقهياً للشيعة الإمامية لأكثر من قرنين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، يجوز للمرأة المطلّقة رجعياً أن تتزوج من رجل آخر قبل انقضاء عدّتها إذا أذن لها زوجها الأول بذلك.', '["صح","خطأ"]'::jsonb, 1, 25, 6, 'boolean', 'المطلّقة رجعياً لا يحق لها الزواج من غير زوجها طوال فترة العدة بغض النظر عن الإذن، لأنها لا تزال في حكم الزوجة شرعاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للقاعدة التي تُقرّر أن الاشتغال اليقيني بالتكليف يستدعي الفراغ اليقيني منه؟', '["قاعدة الاشتغال","قاعدة الفراغ","أصالة البراءة","قاعدة التجاوز"]'::jsonb, 0, 25, 7, 'multi', 'قاعدة الاشتغال (أو الاحتياط العقلي) تعني أن من تيقّن بوجود تكليف في ذمّته وشكّ في امتثاله يجب عليه الإتيان بما يُحقق اليقين بالفراغ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'أيُّ الأعلام الفقهية الشيعية ألَّف كتاب ''المكاسب'' الذي غدا عمدة الدراسة الفقهية في الحوزات العلمية في باب المعاملات حتى اليوم؟', '["الشيخ محمد حسن النجفي","الشيخ مرتضى الأنصاري","الشيخ محمد حسين النائيني","السيد محسن الحكيم"]'::jsonb, 1, 25, 8, 'multi', 'كتاب ''المكاسب'' للشيخ الأنصاري (ت 1281هـ) يُدرَّس حتى اليوم في المرحلة العليا من الحوزة، ويتناول فقه المعاملات والبيع والخيارات بعمق أصولي بالغ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، يُعدّ الخمس واجباً على أرباح المكاسب والمكتسبات السنوية بعد استثناء مؤونة السنة للشخص وعياله.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'الخمس في الفقه الإمامي يجب في سبعة موارد منها أرباح المكاسب، ويُحسب بعد استخراج مؤونة السنة للمكلّف وعائلته، وهو من ضروريات الفقه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للأصل العملي الذي يقضي بأن المكلَّف عند الشك في وجوب شيء أو حرمته يرجع إليه لرفع الحكم المشكوك؟', '["قاعدة الفراغ","أصالة الاحتياط","أصالة البراءة","استصحاب الحال"]'::jsonb, 2, 25, 10, 'multi', 'أصالة البراءة هي الأصل العملي الذي يُطبَّق عند الشك في التكليف ابتداءً، ومستندها حديث الرفع المشهور عن النبي (ص).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'ما اسم الكتاب الفقهي الشهير للمحقق الحلي الذي يُعدّ من أبرز مراجع الفقه الشيعي في القرن السابع الهجري، والذي درسه الطلاب قروناً واستُشهد به في أغلب كتب الفقه اللاحقة؟', '["شرائع الإسلام","المختصر النافع","تحرير الأحكام","إرشاد الأذهان"]'::jsonb, 0, 25, 11, 'multi', 'شرائع الإسلام للمحقق الحلي جعفر بن الحسن يُعدّ من أمّهات الكتب الفقهية الشيعية ولا يزال متناً دراسياً في الحوزات العلمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، تجوز صلاة الجمعة في زمن الغيبة الكبرى على نحو الوجوب التعييني وفق فتوى جميع المراجع دون خلاف.', '["صح","خطأ"]'::jsonb, 1, 25, 12, 'boolean', 'صلاة الجمعة في زمن الغيبة الكبرى مسألة خلافية؛ فبعض المراجع يُفتي بوجوبها التخييري مع صلاة الظهر، وآخرون بالاستحباب، ولا إجماع على الوجوب التعييني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، تُعدّ النيّة شرطاً في صحة الوضوء، ويجب أن تكون النية قربةً إلى الله، ولا يصح الوضوء إذا قصد به التبرّد أو التنظّف فحسب بنية الامتثال.', '["صح","خطأ"]'::jsonb, 0, 25, 13, 'boolean', 'النية شرط في الوضوء عند الإمامية، ويُشترط فيها قصد القربة إلى الله تعالى، فمن توضأ لمجرد التبرد دون نية التقرب لا يصح وضوؤه للصلاة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'مَن هو العالم الشيعي الفقيه الملقَّب بـ''المفيد'' الذي يُعدّ من أبرز المؤسسين لمنهج العقل في الفقه والكلام الشيعي، وكان أستاذاً للشريف المرتضى والشيخ الطوسي؟', '["أبو جعفر محمد بن علي بن بابويه (الصدوق)","أبو عبدالله محمد بن النعمان (الشيخ المفيد)","أبو القاسم علي بن الحسين (الشريف المرتضى)","محمد بن يعقوب الكليني"]'::jsonb, 1, 25, 14, 'multi', 'الشيخ المفيد (336-413هـ) هو رأس مدرسة بغداد الكلامية العقلانية الشيعية، وقد ربّى جيلاً من كبار العلماء أبرزهم الشريف المرتضى والشيخ الطوسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، يُعدّ الشيخ الطوسي صاحب كتابَي ''المبسوط'' و''الخلاف'' من أبرز مؤسسي المنهج الاجتهادي المنظّم في الفقه الإمامي، ويُلقَّب بـ''شيخ الطائفة''.', '["صح","خطأ"]'::jsonb, 0, 25, 15, 'boolean', 'الشيخ الطوسي (385-460هـ) يُلقَّب فعلاً بـ''شيخ الطائفة''، وكتاباه ''المبسوط'' و''الخلاف'' يُعدّان نقلة نوعية في تطوير الفقه الإمامي المقارن والاجتهادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للقاعدة الفقهية التي تقضي بأن كل ما يتوقف عليه الواجب ولم يكن حاصلاً يكون واجباً تحصيله، وهي من أبرز القواعد الأصولية المستخدمة في الاستنباط؟', '["قاعدة الملازمة","قاعدة وجوب المقدمة","قاعدة الاشتغال","قاعدة التلازم العقلي"]'::jsonb, 1, 25, 16, 'multi', 'قاعدة ''وجوب المقدمة'' أو ''المقدمة الواجبة'' تقرر أن مقدمة الواجب واجبة عقلاً، وهي من المسائل الخلافية الكبرى في علم الأصول بين الفقهاء الإماميين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_170, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للمسألة التي تبحث في أن الأمر بالشيء هل يقتضي النهي عن ضده الخاص، وهي من أكثر مسائل أصول الفقه إثارةً للخلاف بين الأصوليين؟', '["مسألة الترتّب","مسألة الضد","مسألة الإجزاء","مسألة المقدمة الموصلة"]'::jsonb, 1, 25, 17, 'multi', 'مسألة الضد تبحث هل الأمر بالشيء يستلزم النهي عن ضده، وهي من المسائل الخلافية الكبرى في أصول الفقه الإمامي.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_171 uuid;
BEGIN
  SELECT id INTO v_lib_id_171 FROM quizzes WHERE title = 'الفقه والأحكام الإسلامية — الجزء 2' LIMIT 1;
  IF v_lib_id_171 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الفقه والأحكام الإسلامية — الجزء 2', 'إسلاميات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_171;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم الكتاب الفقهي الاستدلالي الضخم الذي ألّفه السيد محمد مهدي بحر العلوم، ويُعدّ من أمّهات المصادر الفقهية في المذهب الإمامي؟', '["مستند الشيعة","جواهر الكلام","الحدائق الناضرة","مصابيح الأحكام"]'::jsonb, 3, 25, 0, 'multi', 'كتاب ''مصابيح الأحكام'' للسيد بحر العلوم (ت1212هـ) من أمّهات الكتب الفقهية الاستدلالية الشيعية التي تُدرّس في الحوزات العلمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، تجب الزكاة في تسعة أشياء فقط وفق المشهور، وهي: الذهب والفضة والحنطة والشعير والتمر والزبيب والإبل والبقر والغنم، ولا تجب في غيرها استحباباً.', '["صح","خطأ"]'::jsonb, 1, 25, 1, 'boolean', 'الصحيح أن الزكاة واجبة في التسعة المذكورة، لكنّ الفقه الإمامي يُقرّ باستحباب الزكاة في غيرها كالحبوب والتجارة، فالجملة الأخيرة (لا تجب في غيرها استحباباً) خاطئة إذ يُستحب في غيرها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'ما اسم الكتاب الفقهي الشهير الذي ألّفه المحقق الحلي جعفر بن الحسن، ويُعدّ من أكثر المتون الفقهية الإمامية تداولاً وشرحاً على مر القرون؟', '["شرائع الإسلام","المقنعة","اللمعة الدمشقية","النهاية"]'::jsonb, 0, 25, 2, 'multi', 'كتاب ''شرائع الإسلام في مسائل الحلال والحرام'' للمحقق الحلي من أبرز المتون الفقهية الإمامية وقد حظي بعشرات الشروح والحواشي على مر الأجيال.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما الحكم الشرعي للصلاة خلف إمام جماعة لا تعلم عدالته ولا فسقه؟', '["لا تصح الصلاة خلفه لاشتراط إحراز العدالة","تصح مع الإعادة احتياطاً","تصح لأن الأصل في المسلم العدالة","يجب الاستفسار عن حاله قبل الاقتداء"]'::jsonb, 0, 25, 3, 'multi', 'المشهور في الفقه الإمامي أن إحراز عدالة إمام الجماعة شرط في صحة الاقتداء، فمع الشك في العدالة لا تصح صلاة الجماعة خلفه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي لمبدأ اشتراط ''الإباحة الأصلية'' في الأشياء قبل ورود الحكم الشرعي، والذي يُعبَّر عنه بالقاعدة: ''كل شيء لك حلال حتى تعرف أنه حرام بعينه''؟', '["أصالة الاحتياط","أصالة الحل","أصالة البراءة العقلية","قاعدة الضرر"]'::jsonb, 1, 25, 4, 'multi', 'أصالة الحِل هي الأصل العملي الذي يُثبت إباحة الأشياء ما لم يرد دليل على تحريمها، ومستنده روايات كثيرة عن أهل البيت (ع).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم الكتاب الذي ألّفه الشيخ يوسف البحراني ويُعدّ من أضخم الموسوعات الفقهية الإمامية التي اعتمدت منهج الإخباريين في الاستدلال بالروايات مباشرةً؟', '["الحدائق الناضرة","جواهر الكلام","مستند الشيعة","الوسائل المحكمة"]'::jsonb, 0, 25, 5, 'multi', 'كتاب ''الحدائق الناضرة في أحكام العترة الطاهرة'' للشيخ يوسف البحراني (ت 1186هـ) موسوعة فقهية ضخمة تميل للمنهج الإخباري في الاستدلال.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما الاسم الاصطلاحي للقاعدة الفقهية التي تنصّ على أن ''الضرر المتوقّع يُسوّغ ارتكاب المحظور بمقدار رفع الضرر''، وهي من أهم قواعد الفقه الإمامي المستنبطة من حديث ''لا ضرر ولا ضرار''؟', '["قاعدة لا ضرر","قاعدة الميسور","قاعدة الاضطرار","قاعدة التسامح في أدلة السنن"]'::jsonb, 0, 25, 6, 'multi', 'قاعدة ''لا ضرر ولا ضرار'' مستنبطة من الحديث النبوي الشريف، وهي من أوسع القواعد تطبيقاً في الفقه الإمامي لرفع الأحكام الضررية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم المسألة الأصولية التي تبحث في حجيّة القطع والظنّ والشكّ وأقسامها، وتُعدّ من أوائل مباحث الكتب الأصولية المعاصرة كـ''الكفاية'' للآخوند الخراساني؟', '["مبحث القطع","مبحث البراءة","مبحث الاشتغال","مبحث التعادل والتراجيح"]'::jsonb, 0, 25, 7, 'multi', 'مبحث القطع يفتتح به الآخوند الخراساني كتابه ''كفاية الأصول''، وهو يبحث في الحجج والأمارات العقلية من قطع وظنّ وشك وأحكامها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'مَن هو العالم الفقيه الشيعي الكبير المعروف بـ''الشيخ الأنصاري'' أو ''خاتم الفقهاء والمجتهدين''، صاحب كتاب ''المكاسب'' الذي لا يزال يُدرَّس في الحوزات العلمية حتى اليوم؟', '["الشيخ مرتضى الأنصاري","الشيخ محمد حسن النجفي","الشيخ جعفر كاشف الغطاء","الميرزا محمد تقي الشيرازي"]'::jsonb, 0, 25, 8, 'multi', 'الشيخ مرتضى الأنصاري (ت 1281هـ) لُقّب بـ''خاتم الفقهاء والمجتهدين''، وكتابه ''المكاسب'' في البيع والخيارات لا يزال من أهم متون الدراسة في الحوزة النجفية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، يُعدّ كتاب ''جواهر الكلام'' للشيخ محمد حسن النجفي أضخم موسوعة فقهية استدلالية في تاريخ الفقه الإمامي، إذ يقع في أكثر من أربعين جزءاً.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'جواهر الكلام للشيخ محمد حسن النجفي (ت 1266هـ) يقع في 43 جزءاً ويُعدّ من أوسع الموسوعات الفقهية الاستدلالية الإمامية على الإطلاق.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'مَن هو صاحب المنظومة الفقهية الشهيرة المعروفة بـ''اللمعة الدمشقية''، التي ألّفها في سجنه في دمشق في سبعة أيام فقط، وهي من أشهر متون الفقه الإمامي؟', '["المحقق الكركي","الشهيد الأول محمد بن مكي العاملي","الشهيد الثاني زين الدين العاملي","العلامة الحلي"]'::jsonb, 1, 25, 10, 'multi', 'اللمعة الدمشقية ألّفها الشهيد الأول محمد بن مكي العاملي (ت 786هـ) خلال سجنه في دمشق، وشرحها لاحقاً الشهيد الثاني في كتابه ''الروضة البهية''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم القاعدة الأصولية التي تنصّ على أن الأصل في الأشياء هو الطهارة ما لم يثبت نجاستها بدليل شرعي معتبر؟', '["قاعدة الطهارة","قاعدة الاستصحاب","قاعدة اليد","قاعدة الفراغ"]'::jsonb, 0, 25, 11, 'multi', 'قاعدة الطهارة مستنبطة من حديث ''كل شيء نظيف حتى تعلم أنه قذر'' وتُعدّ من القواعد الفقهية الكبرى المتعلقة بالطهارة الظاهرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'مَن هو الفقيه الشيعي الكبير المعروف بـ''المحقق الحلّي''، صاحب كتاب ''شرائع الإسلام'' الذي لا يزال من أهم المتون الفقهية المدرَّسة في الحوزات العلمية؟', '["جعفر بن الحسن الحلّي","الحسن بن يوسف ابن المطهّر الحلّي","محمد بن مكي العاملي","الشيخ الطوسي"]'::jsonb, 0, 25, 12, 'multi', 'المحقق الحلي هو جعفر بن الحسن الحلي (ت 676هـ)، وكتابه ''شرائع الإسلام'' من أشمل متون الفقه الإمامي الاستدلالي وعليه عشرات الشروح.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، يجوز أداء صلاة الجمعة فرادى (منفردة) دون إمام جماعة في زمن الغيبة الكبرى وفق رأي المشهور من الفقهاء.', '["صح","خطأ"]'::jsonb, 1, 25, 13, 'boolean', 'المشهور عند فقهاء الإمامية أن صلاة الجمعة واجبة تخييرية في زمن الغيبة ومشترطة بالجماعة وإمام عادل، ولا تصح فرادى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم الكتاب الفقهي الذي ألّفه الشيخ المفيد وهو من أوائل الكتب الفقهية الاستدلالية في الحوزة، ويُعدّ أساساً لكثير من المسائل الفقهية اللاحقة؟', '["المقنعة","النهاية","الانتصار","الخلاف"]'::jsonb, 0, 25, 14, 'multi', 'كتاب ''المقنعة'' للشيخ المفيد (ت 413هـ) من أقدم المتون الفقهية الشيعية الاستدلالية وقد شرحه الشيخ الطوسي في كتاب ''تهذيب الأحكام''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما المصطلح الأصولي الذي يُطلق على الأمارة أو الدليل الشرعي الظنّي الذي جعله الشارع حجةً معتبرة للمكلَّف كخبر الثقة والظهورات اللفظية؟', '["الأصل العملي","الدليل الاجتهادي","القطع الوجداني","الاستصحاب الحكمي"]'::jsonb, 1, 25, 15, 'multi', 'الأدلة الاجتهادية (كالأمارات) هي ما جعله الشارع حجةً للمكلَّف وتُقدَّم على الأصول العملية عند التعارض في علم الأصول الشيعي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، يذهب المشهور من الفقهاء إلى أن خمس أرباح المكاسب (الفوائد) يجب إخراجه فوراً عند حصوله دون انتظار مضي الحول (السنة الكاملة).', '["صح","خطأ"]'::jsonb, 1, 25, 16, 'boolean', 'المشهور عند الفقهاء الشيعة أن الخمس في أرباح المكاسب يُستحق بعد استثناء مؤونة السنة، أي يُنتظر انقضاء السنة لمعرفة ما زاد عن حوائج المكلَّف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_171, 'في الفقه الشيعي الإمامي، ما اسم المسألة الفقهية التي تنصّ على أن المسافر الذي يقصد الإقامة عشرة أيام في مكان واحد يجب عليه إتمام صلاته (أربع ركعات) بدلاً من القصر؟', '["نية الإقامة","الاستيطان","التخيير في القصر","التوطّن"]'::jsonb, 0, 25, 17, 'multi', 'في الفقه الإمامي، نية الإقامة عشرة أيام في مكان واحد ترفع حكم السفر وتوجب إتمام الصلاة وصيام شهر رمضان كالمقيم.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_172 uuid;
BEGIN
  SELECT id INTO v_lib_id_172 FROM quizzes WHERE title = 'الفقه والأحكام الإسلامية — الجزء 3' LIMIT 1;
  IF v_lib_id_172 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الفقه والأحكام الإسلامية — الجزء 3', 'إسلاميات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_172;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'مَن هو صاحب كتاب ''مسالك الأفهام إلى تنقيح شرائع الإسلام''، الشرح الفقهي الضخم الذي يُعدّ من أوسع شروح ''شرائع الإسلام'' للمحقق الحلّي، وصاحبه من كبار فقهاء القرن العاشر الهجري؟', '["الشهيد الثاني زين الدين الجبعي العاملي","العلامة الحلّي","الشيخ الطوسي","المحقق الكركي"]'::jsonb, 0, 25, 0, 'multi', 'الشهيد الثاني زين الدين العاملي ألّف ''مسالك الأفهام'' شرحاً موسعاً على ''شرائع الإسلام''، وهو من أمّهات كتب الفقه الاستدلالي الإمامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، يرى مشهور الفقهاء أن الغناء المحرّم هو الصوت المطرب الذي يُثير الطرب واللهو، بصرف النظر عن مضمون الكلام، فيحرم حتى لو كانت الكلمات مدحاً لأهل البيت (ع) إذا كان بالكيفية المحرّمة.', '["صح","خطأ"]'::jsonb, 0, 25, 1, 'boolean', 'المشهور في الفقه الإمامي أن ملاك تحريم الغناء هو الكيفية الصوتية المطربة اللهوية لا مجرد المضمون، فيحرم الغناء الذي يُهيّج اللهو ولو كان في مدح أهل البيت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، تذهب مشهور الفقهاء إلى أن صلاة الاحتياط الواجبة في الشك بين الثلاث والأربع تُصلَّى منفصلةً بعد إتمام الصلاة وسلامها، لا موصولةً بها.', '["صح","خطأ"]'::jsonb, 0, 25, 2, 'boolean', 'يذهب مشهور الفقهاء الإماميين إلى وجوب الفصل بين الصلاة الأصلية وصلاة الاحتياط بالتسليم، فتُصلَّى الاحتياط منفصلة بعد السلام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'مَن هو مؤلف كتاب ''الحدائق الناضرة في أحكام العترة الطاهرة''، الموسوعة الفقهية الضخمة التي تُعدّ من أبرز مصادر الفقه الأخباري الشيعي، وصاحبها من كبار علماء البحرين في القرن الثاني عشر الهجري؟', '["الشيخ يوسف البحراني","الشيخ ميثم البحراني","الشيخ سليمان الماحوزي","الشيخ علي بن سليمان القدمي"]'::jsonb, 0, 25, 3, 'multi', 'الشيخ يوسف البحراني (ت 1186هـ) صاحب موسوعة ''الحدائق الناضرة'' التي تُعدّ أبرز عمل فقهي ضخم للتيار الأخباري، وهو من أعلام علماء البحرين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، يجوز للمرأة المسلمة أن تتولّى منصب القضاء (القاضي الشرعي) استناداً إلى رأي مشهور الفقهاء المعاصرين.', '["صح","خطأ"]'::jsonb, 1, 25, 4, 'boolean', 'يذهب مشهور الفقهاء الإماميين إلى اشتراط الذكورة في القاضي الشرعي، فلا تجوز ولاية القضاء للمرأة وفق هذا الرأي المشهور.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، ما اسم القاعدة الفقهية التي تنصّ على أن ''كل ما يضطر إليه المكلّف من المحرّمات يُباح له بمقدار الضرورة''، وهي من أهم القواعد المخفِّفة للتكاليف الشرعية في حالات الإكراه والاضطرار؟', '["قاعدة الاضطرار","قاعدة لا حرج","قاعدة الضرر","قاعدة اليسر"]'::jsonb, 0, 25, 5, 'multi', 'قاعدة الاضطرار مستنبطة من قوله تعالى ''إلا ما اضطررتم إليه'' وتُبيح المحرّم بمقدار رفع الضرورة لا أكثر، وهي مستقلة عن قاعدة نفي الحرج.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'مَن هو المرجع الفقهي الشيعي الكبير صاحب كتاب ''جواهر الكلام في شرح شرائع الإسلام''، الذي يُعدّ أضخم موسوعة فقهية استدلالية في الفقه الإمامي ويقع في ثلاثة وأربعين جزءاً، وقد أنجزه في القرن الثالث عشر الهجري؟', '["الشيخ محمد حسن النجفي","الشيخ مرتضى الأنصاري","المحقق الكركي","الشيخ جعفر كاشف الغطاء"]'::jsonb, 0, 25, 6, 'multi', 'الشيخ محمد حسن النجفي (توفي 1266هـ) أمضى أكثر من أربعين سنة في تأليف ''جواهر الكلام'' الذي يُعدّ المرجع الفقهي الأشمل في الفقه الشيعي الاستدلالي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، يذهب مشهور الفقهاء إلى أن تغسيل الميت المسلم واجب كفائي، بمعنى أنه إذا قام به البعض سقط عن الباقين، ولا يجب على كل مسلم بعينه.', '["صح","خطأ"]'::jsonb, 0, 25, 7, 'boolean', 'تغسيل الميت وتكفينه والصلاة عليه ودفنه من الواجبات الكفائية في الفقه الشيعي، تسقط بقيام عدد كافٍ من المكلّفين بها، ولا تتعيّن على فرد بعينه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، ما اسم الكتاب الفقهي الذي ألّفه الشيخ المفيد والذي يُعدّ من أوائل الموسوعات الفقهية الاستدلالية في الفقه الإمامي، وهو مرجع أساسي في دراسة الفقه الكلاسيكي الشيعي؟', '["المقنعة","النهاية","المبسوط","الخلاف"]'::jsonb, 0, 25, 8, 'multi', 'كتاب ''المقنعة'' للشيخ المفيد (ت413هـ) من أقدم المدوّنات الفقهية الجامعة في الفقه الإمامي، وقد شرحه الشيخ الطوسي في كتابه ''التهذيب''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، يرى مشهور الفقهاء أن الخمس واجب في أرباح المكاسب (ما يفضل عن مؤونة السنة)، وليس مقتصراً على الغنائم الحربية فحسب.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'يُوجب مشهور فقهاء الإمامية الخمس في سبعة موارد أبرزها أرباح المكاسب، استناداً لآية الخمس وروايات أهل البيت (ع)، خلافاً لجمهور العامة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، ما اسم الكتاب الذي ألّفه المحقق الحلي والذي يُعدّ المتن الفقهي الأكثر شرحاً وتدريساً في الحوزات العلمية الشيعية عبر القرون، حتى قيل إن من لم يشرحه من كبار الفقهاء فكأنه لم يتفقّه؟', '["شرائع الإسلام","المختصر النافع","المعتبر","نهج المسترشدين"]'::jsonb, 0, 25, 10, 'multi', 'كتاب ''شرائع الإسلام'' للمحقق الحلي (ت676هـ) هو المتن الفقهي الأشهر في الحوزات الشيعية، وقد حظي بعشرات الشروح أبرزها ''مسالك الأفهام'' و''جواهر الكلام''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، يذهب مشهور الفقهاء إلى أن الوضوء ينتقض بالنوم الذي يغلب على العقل والحواس، بحيث لا يسمع المتوضئ النداء ولا يرى ما أمامه، سواء كان النوم في حال الجلوس أو الاضطجاع.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'النوم الغالب على الحواس ناقض للوضوء بالإجماع عند الإمامية، والمعيار هو غلبة النوم وزوال الإدراك لا مجرد الإغفاء الخفيف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'مَن هو الفقيه الشيعي الكبير الملقَّب بـ''المحقق الثاني'' أو ''المحقق الكركي''، الذي نقل مركز الفقه الشيعي إلى إيران الصفوية في القرن العاشر الهجري، وكان يُعدّ نائب الإمام المهدي (ع) بحسب رأيه الفقهي الذي أثار جدلاً واسعاً؟', '["علي بن عبد العالي الكركي","الشهيد الثاني زين الدين الجبعي","المقداد السيوري الحلي","ابن فهد الحلي"]'::jsonb, 0, 25, 12, 'multi', 'المحقق الكركي (ت. 940 هـ) أسّس لنظرية ''ولاية الفقيه'' بصورة مبكّرة وقال بأن الفقيه الجامع للشرائط هو نائب الإمام الغائب في جميع شؤون الولاية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، ما اسم المصطلح الفقهي الذي يُشير إلى الحالة التي يتعارض فيها دليلان شرعيان تعارضاً تاماً بحيث لا يمكن الجمع بينهما، وعلى الفقيه أن يُرجّح أحدهما على الآخر وفق ضوابط علم أصول الفقه؟', '["التعارض والتراجيح","الإجمال والبيان","التزاحم الحكمي","الانسداد والانفتاح"]'::jsonb, 0, 25, 13, 'multi', 'علم التعارض والتراجيح هو أحد أدق أبواب أصول الفقه الشيعي، ويبحث في كيفية التعامل مع الأدلة المتعارضة وفق مرجّحات محددة كالأشهرية والأوثقية وموافقة الكتاب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، ما اسم المصطلح الذي يُطلق على الصلاة التي يؤدّيها المسافر مقصورةً (ركعتين بدلاً من أربع)، وهي واجبة في السفر الشرعي الذي يبلغ المسافة المحددة، خلافاً لمذهب أهل السنة الذين يجعلونها رخصة لا إلزاماً؟', '["صلاة الخوف","صلاة المسافر","صلاة القصر","صلاة الجمع"]'::jsonb, 2, 25, 14, 'multi', 'يرى مشهور فقهاء الإمامية أن القصر في السفر واجب لا رخصة، بخلاف الجمهور، وذلك إذا بلغت المسافة ثمانية فراسخ شرعية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'مَن هو الفقيه الشيعي الكبير صاحب كتاب ''الحدائق الناضرة في أحكام العترة الطاهرة''، وهو موسوعة فقهية ضخمة في خمسة وعشرين جزءاً، وكان من أبرز علماء الأخباريين في القرن الثاني عشر الهجري ويُعدّ آخر كبار الأخباريين قبل انتصار الأصوليين؟', '["الشيخ يوسف البحراني","الشيخ الحر العاملي","الوحيد البهبهاني","الشيخ محمد تقي المجلسي"]'::jsonb, 0, 25, 15, 'multi', 'الشيخ يوسف البحراني (ت 1186هـ) صاحب الحدائق الناضرة، وهو من أبرز علماء البحرين ومن آخر كبار الأخباريين الذين واجهوا الوحيد البهبهاني في جدل أصولي-أخباري شهير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_172, 'في الفقه الشيعي الإمامي، تذهب أغلب المراجع إلى أن العقد على المرأة المعتدّة من طلاق رجعي باطل بطلاناً مطلقاً حتى لو أذنت المرأة بذلك، ولا يُبيحه شيء ما دامت العدة قائمة.', '["صح","خطأ"]'::jsonb, 0, 25, 16, 'boolean', 'يرى مشهور الفقهاء الإماميين أن عقد الزواج على المعتدة من طلاق رجعي باطل لأنها لا تزال في حكم الزوجة، وهذا من الحرمة الأبدية إن تعمّد العلم بها.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_173 uuid;
BEGIN
  SELECT id INTO v_lib_id_173 FROM quizzes WHERE title = 'معالم وعواصم العالم — الجزء 1' LIMIT 1;
  IF v_lib_id_173 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('معالم وعواصم العالم — الجزء 1', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_173;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'في أيّ مدينة يقع المسجد الأقصى والمسجد الإبراهيمي معاً كمعلمَين إسلاميَّين بارزَين في فلسطين؟', '["القدس والخليل","القدس وبيت لحم","نابلس ورام الله","جنين وطولكرم"]'::jsonb, 0, 25, 0, 'multi', 'المسجد الأقصى يقع في مدينة القدس، بينما يقع المسجد الإبراهيمي في مدينة الخليل حيث يُعتقد أنه يضم مقام النبي إبراهيم عليه السلام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'في أي مدينة سورية تقع قلعة الحصن (كراك دي شيفالييه) التي تُعدّ من أفضل القلاع الصليبية المحفوظة في العالم؟', '["حمص","حلب","اللاذقية","طرطوس"]'::jsonb, 0, 25, 1, 'multi', 'قلعة الحصن تقع في محافظة حمص شمال غرب سوريا، على تلة مشرفة تبعد نحو 40 كم عن مدينة حمص.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'ما اسم أطول سور في الإمارات العربية المتحدة الذي يحيط بمدينة تاريخية في أبوظبي؟', '["سور العين","سور الحصن","سور شخبوط","سور الجهيلي"]'::jsonb, 0, 25, 2, 'multi', 'سور العين هو السور الأثري التاريخي الذي يحيط بمدينة العين في إمارة أبوظبي، ويُعدّ من أبرز المعالم التراثية في الإمارات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'البتراء، عاصمة الأنباط، محفورة أساساً في صخور الجرانيت الرمادي.', '["صح","خطأ"]'::jsonb, 1, 25, 3, 'boolean', 'البتراء محفورة في صخور الحجر الرملي الوردي والأحمر وليس الجرانيت، وهو ما أكسبها لقب ''المدينة الوردية''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'ما هو الاسم الآخر لـ''جبل موسى'' في سيناء الذي تُقام عنده أقدم الأديرة المسيحية في العالم؟', '["جبل الطور","دير القديسة كاترين","جبل سربال","جبل أم شومر"]'::jsonb, 1, 25, 4, 'multi', 'دير القديسة كاترين أُسس في القرن السادس الميلادي عند سفح جبل موسى في سيناء، وهو من أقدم الأديرة المسيحية في العالم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'في أي مدينة عراقية تقع الأضرحة الدينية لكل من الإمام علي والإمام الحسين؟', '["بغداد وسامراء","النجف وكربلاء","الكوفة والبصرة","الموصل وكركوك"]'::jsonb, 1, 25, 5, 'multi', 'يقع ضريح الإمام علي بن أبي طالب في النجف، بينما يقع ضريح الإمام الحسين في كربلاء، وكلتاهما من أقدس المدن الشيعية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'مسجد قبة الصخرة في القدس بناه الخليفة الأموي عبد الملك بن مروان.', '["صح","خطأ"]'::jsonb, 0, 25, 6, 'boolean', 'أمر الخليفة الأموي عبد الملك بن مروان ببناء قبة الصخرة عام 691م لتكون من أقدم المباني الإسلامية الباقية حتى اليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'أي دولة عربية تحتضن مدينة قرطاج الأثرية؟', '["الجزائر","ليبيا","تونس","المغرب"]'::jsonb, 2, 25, 7, 'multi', 'تقع مدينة قرطاج الأثرية على الساحل الشمالي لتونس قرب العاصمة تونس، وهي موقع تراث عالمي لليونسكو.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'أي من المدن التالية تضم الحي التاريخي ''خان الخليلي'' الشهير؟', '["بيروت","دمشق","القاهرة","بغداد"]'::jsonb, 2, 25, 8, 'multi', 'خان الخليلي سوق تاريخي أُنشئ عام 1382م في قلب القاهرة الفاطمية بمصر، ويُعدّ من أعرق الأسواق الشرقية وأشهر المعالم السياحية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'ما هو اسم المعبد النبطي الشهير المنحوت في الصخر بمدينة البتراء؟', '["معبد الأقصر","الخزنة","معبد بعلبك","معبد الديوان"]'::jsonb, 1, 25, 9, 'multi', 'الخزنة هي أشهر منشآت البتراء الأردنية، نُحتت في الصخر الوردي في القرن الأول قبل الميلاد على يد الأنباط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_173, 'ما اسم القلعة العثمانية الشهيرة المطلّة على مدينة حلب السورية؟', '["قلعة الحصن","قلعة حلب","قلعة صلاح الدين","قلعة الرحبة"]'::jsonb, 1, 25, 10, 'multi', 'قلعة حلب إحدى أعرق القلاع في العالم، تعلو تلة وسط المدينة وقد طوّرها الأيوبيون والمماليك والعثمانيون عبر القرون.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_174 uuid;
BEGIN
  SELECT id INTO v_lib_id_174 FROM quizzes WHERE title = 'معالم وعواصم العالم — الجزء 2' LIMIT 1;
  IF v_lib_id_174 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('معالم وعواصم العالم — الجزء 2', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_174;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'مسجد قبة الصخرة في القدس بناه الخليفة الأموي عبد الملك بن مروان.', '["صح","خطأ"]'::jsonb, 0, 25, 0, 'boolean', 'أمر الخليفة الأموي عبد الملك بن مروان ببناء قبة الصخرة عام 691م، وهي من أقدم المباني الإسلامية القائمة حتى اليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما هي العاصمة التاريخية للمملكة النبطية التي نحتت مبانيها في الصخر؟', '["تدمر","البتراء","قرطاج","مأرب"]'::jsonb, 1, 25, 1, 'multi', 'البتراء كانت عاصمة المملكة النبطية في الأردن، واشتُهرت بمبانيها المنحوتة في الصخر الوردي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'في أي دولة عربية تقع مدينة ''جرش'' الأثرية الرومانية الشهيرة؟', '["سوريا","لبنان","الأردن","ليبيا"]'::jsonb, 2, 25, 2, 'multi', 'تقع مدينة جرش الأثرية شمال الأردن وتُعدّ من أبرز مدن الديكابوليس الرومانية وأفضل المدن الرومانية المحفوظة في الشرق الأوسط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما اسم المعبد النبطي الشهير المنحوت في الصخر والذي يُعدّ أيقونة الأردن السياحية؟', '["معبد زيوس","الخزنة","الديرالكبير","القصر الأموي"]'::jsonb, 1, 25, 3, 'multi', 'الخزنة هي أبرز منشآت مدينة البتراء الأثرية النبطية في الأردن، منحوتة في الصخر الوردي وتعود إلى القرن الأول قبل الميلاد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما اسم الموقع الأثري الأردني المحفور في الصخر والمعروف بـ''المدينة الوردية''؟', '["جرش","البتراء","عجلون","مادبا"]'::jsonb, 1, 25, 4, 'multi', 'البتراء عاصمة الأنباط محفورة في صخور الحجر الرملي الوردي اللون بجنوب الأردن، ولذلك تُلقَّب بـ''المدينة الوردية''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما اسم القلعة الإسلامية الشهيرة في القاهرة التي بناها صلاح الدين الأيوبي؟', '["قلعة بعلبك","قلعة الجندي","قلعة صلاح الدين (قلعة الجبل)","قلعة قايتباي"]'::jsonb, 2, 25, 5, 'multi', 'أمر صلاح الدين الأيوبي ببناء قلعة الجبل في القاهرة عام 1176م لتكون حصنًا دفاعيًا ومقرًا للحكم، وظلت مركزًا للسلطة قرونًا طويلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما اسم المبنى الديني الإسلامي الذي يُعدّ أقدس مواقع اليهودية والموجود تحته جبل الهيكل في القدس؟', '["المسجد الأقصى","قبة الصخرة","مسجد قبة النبي","مسجد البراق"]'::jsonb, 1, 25, 6, 'multi', 'قبة الصخرة بُنيت عام 691م فوق الصخرة المشرفة على جبل الهيكل، الموقع الأقدس في اليهودية، وهي تختلف عن المسجد الأقصى المجاور لها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'ما اسم القلعة التاريخية التي بناها صلاح الدين الأيوبي في القاهرة؟', '["قلعة بعلبك","قلعة الجندية","قلعة صلاح الدين (قلعة الجبل)","قلعة قايتباي"]'::jsonb, 2, 25, 7, 'multi', 'بنى صلاح الدين الأيوبي قلعة الجبل في القاهرة في القرن الثاني عشر الميلادي لتكون مقراً للحكم ومنشأةً دفاعية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'أيّ مدينة يمنية تُعرف بـ''مدينة الألف قصر'' وتتميز بمبانيها الطينية متعددة الطوابق؟', '["عدن","صنعاء","شبام","زبيد"]'::jsonb, 2, 25, 8, 'multi', 'تُعرف شبام في حضرموت بـ''مانهاتن الصحراء'' أو ''مدينة الألف قصر'' لناطحات سحابها الطينية التي يعود بعضها إلى القرن السادس عشر الميلادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_174, 'مدينة جرش الأردنية تضم بقايا مدينة رومانية قديمة تُعدّ من أفضل المواقع الرومانية المحفوظة خارج إيطاليا.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'تحتوي جرش (جيراسا القديمة) على آثار رومانية استثنائية الحفظ تشمل أعمدة، ومدرّجات، وساحات، مما يجعلها من أبرز المدن الرومانية المحفوظة خارج إيطاليا.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_175 uuid;
BEGIN
  SELECT id INTO v_lib_id_175 FROM quizzes WHERE title = 'جغرافيا العالم والدول — الجزء 1' LIMIT 1;
  IF v_lib_id_175 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والدول — الجزء 1', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_175;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'كانت مدينة صنعاء عاصمة اليمن الجنوبي قبل توحيد اليمن عام 1990.', '["صح","خطأ"]'::jsonb, 1, 25, 0, 'boolean', 'كانت عدن هي عاصمة اليمن الجنوبي (جمهورية اليمن الديمقراطية الشعبية)، أما صنعاء فكانت عاصمة اليمن الشمالي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'نهر الأردن هو أعمق نهر في منطقة الشرق الأوسط.', '["صح","خطأ"]'::jsonb, 1, 25, 1, 'boolean', 'نهر الأردن ليس أعمق أنهار الشرق الأوسط، إذ تتميز المنطقة بأنهار أخرى أعمق كدجلة والفرات، كما أن شهرة الأردن ترتبط بانخفاض مصبّه لا بعمقه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'أيّ دولة عربية تحتضن جبل توبقال، أعلى قمة في شمال أفريقيا والعالم العربي؟', '["الجزائر","ليبيا","المغرب","تونس"]'::jsonb, 2, 25, 2, 'multi', 'يقع جبل توبقال في جبال الأطلس الكبير بالمغرب، ويبلغ ارتفاعه نحو 4167 متراً، مما يجعله أعلى قمة في شمال أفريقيا والعالم العربي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'البحر الميت يقع بالكامل داخل الأراضي الأردنية.', '["صح","خطأ"]'::jsonb, 1, 25, 3, 'boolean', 'البحر الميت بحيرة حدودية تتقاسمها كل من الأردن وفلسطين (الضفة الغربية) وإسرائيل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'أيّ مضيق يفصل بين المغرب وإسبانيا ويربط البحر المتوسط بالمحيط الأطلسي؟', '["مضيق هرمز","مضيق جبل طارق","مضيق باب المندب","مضيق تيران"]'::jsonb, 1, 25, 4, 'multi', 'مضيق جبل طارق يقع بين الساحل المغربي جنوباً والساحل الإسباني شمالاً، ويمثل المنفذ الوحيد بين البحر المتوسط والمحيط الأطلسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'ما اسم المضيق الذي يفصل بين المغرب وإسبانيا؟', '["مضيق هرمز","مضيق باب المندب","مضيق جبل طارق","مضيق تيران"]'::jsonb, 2, 25, 5, 'multi', 'مضيق جبل طارق يفصل جنوب إسبانيا عن شمال المغرب ويربط البحر الأبيض المتوسط بالمحيط الأطلسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'أي من هذه المدن تقع على ضفاف نهر دجلة مباشرةً؟', '["الموصل","حلب","دمشق","عمّان"]'::jsonb, 0, 25, 6, 'multi', 'تقع مدينة الموصل العراقية على الضفة الغربية لنهر دجلة، وهي من أعرق المدن المطلة عليه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'تُعدّ صحراء الربع الخالي في شبه الجزيرة العربية أكبر صحراء رملية متواصلة في العالم.', '["صح","خطأ"]'::jsonb, 0, 25, 7, 'boolean', 'تبلغ مساحة الربع الخالي نحو 650,000 كم² مما يجعلها أكبر صحراء رملية متواصلة على وجه الأرض.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'ما هو اسم البحيرة الملحية التي تقع على الحدود بين الأردن وفلسطين المحتلة وتُعدّ الأخفض في العالم؟', '["بحيرة طبريا","البحر الميت","بحيرة قارون","بحيرة ناصر"]'::jsonb, 1, 25, 8, 'multi', 'يقع البحر الميت على ارتفاع سالب يتجاوز 430 متراً تحت مستوى سطح البحر مما يجعله أخفض نقطة على سطح الأرض.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'يُعدّ جبل قاسيون الواقع في دمشق من أعلى الجبال في منطقة الشرق الأوسط، إذ يتجاوز ارتفاعه 3000 متر.', '["صح","خطأ"]'::jsonb, 1, 25, 9, 'boolean', 'جبل قاسيون ارتفاعه نحو 1151 متراً فقط فوق سطح البحر، وهو أبعد ما يكون عن أعلى جبال الشرق الأوسط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'ما اسم الممر المائي الذي يربط البحر الأحمر بخليج عدن ويُعدّ من أهم الممرات الملاحية في العالم؟', '["مضيق هرمز","مضيق تيران","باب المندب","قناة السويس"]'::jsonb, 2, 25, 10, 'multi', 'باب المندب هو المضيق الذي يفصل اليمن عن جيبوتي والصومال، ويربط البحر الأحمر بخليج عدن والمحيط الهندي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'تُعدّ تركيا الدولة الوحيدة في منطقة الشرق الأوسط التي تمتد أراضيها على قارتَي آسيا وأوروبا معاً.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'تركيا هي الدولة الوحيدة في الشرق الأوسط التي تمتد على قارتين، إذ تقع منطقة تراقيا الغربية في أوروبا والأناضول في آسيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'في أي مدينة عراقية تقع مرقد الإمام علي بن أبي طالب؟', '["كربلاء","النجف","سامراء","الكوفة"]'::jsonb, 1, 25, 12, 'multi', 'مرقد الإمام علي بن أبي طالب يقع في مدينة النجف العراقية، وهو من أقدس المراقد الإسلامية لدى المسلمين الشيعة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'أي من هذه الأنهار يصبّ في الخليج العربي بعد التقاء دجلة والفرات؟', '["نهر الأردن","شط العرب","نهر الليطاني","نهر الزاب"]'::jsonb, 1, 25, 13, 'multi', 'يتشكل شط العرب من التقاء نهري دجلة والفرات قرب مدينة القرنة العراقية، ثم يصب في الخليج العربي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'مدينة صنعاء اليمنية هي أعلى عاصمة عربية من حيث الارتفاع عن سطح البحر.', '["صح","خطأ"]'::jsonb, 0, 25, 14, 'boolean', 'تقع صنعاء على ارتفاع يبلغ نحو 2300 متر فوق سطح البحر، مما يجعلها أعلى عاصمة عربية ارتفاعاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'جبل طارق الواقع عند مدخل البحر الأبيض المتوسط يقع تحت السيادة الإسبانية.', '["صح","خطأ"]'::jsonb, 1, 25, 15, 'boolean', 'جبل طارق إقليم بريطاني ما وراء البحار منذ معاهدة أوترخت عام 1713م، وليس تحت السيادة الإسبانية رغم مطالبة إسبانيا به.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'أي مدينة سعودية تحتضن ميناء جدة وتُعدّ بوابة الحرمين الشريفين؟', '["الدمام","ينبع","جدة","الجبيل"]'::jsonb, 2, 25, 16, 'multi', 'جدة تقع على ساحل البحر الأحمر وتضم أكبر موانئ المملكة، وهي المدخل الرئيسي للحجاج القادمين إلى مكة المكرمة والمدينة المنورة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'مضيق هرمز الاستراتيجي يفصل بين إيران وسلطنة عُمان.', '["صح","خطأ"]'::jsonb, 0, 25, 17, 'boolean', 'مضيق هرمز يقع بين الشاطئ الإيراني شمالاً وشبه جزيرة مسندم العُمانية جنوباً، وهو ممر حيوي لصادرات النفط الخليجي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'في أي دولة عربية يقع جبل شمر الذي يُعدّ من أبرز جبال شبه الجزيرة العربية؟', '["اليمن","الأردن","المملكة العربية السعودية","سلطنة عُمان"]'::jsonb, 2, 25, 18, 'multi', 'جبال شمر تقع في منطقة حائل شمال وسط المملكة العربية السعودية، وكانت مقراً لإمارة آل رشيد التاريخية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_175, 'ما اسم المضيق الذي يفصل بين المغرب وإسبانيا؟', '["مضيق هرمز","مضيق باب المندب","مضيق جبل طارق","مضيق تيران"]'::jsonb, 2, 25, 19, 'multi', 'مضيق جبل طارق يفصل بين المغرب شمال أفريقيا وإسبانيا جنوب أوروبا، ويربط البحر الأبيض المتوسط بالمحيط الأطلسي.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_176 uuid;
BEGIN
  SELECT id INTO v_lib_id_176 FROM quizzes WHERE title = 'جغرافيا العالم والدول — الجزء 2' LIMIT 1;
  IF v_lib_id_176 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والدول — الجزء 2', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_176;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أي مدينة عربية تقع على ضفتي نهر العاصي وتُعدّ من أقدم المدن المأهولة في التاريخ؟', '["حلب","دمشق","حمص","اللاذقية"]'::jsonb, 2, 25, 0, 'multi', 'تقع مدينة حمص السورية على ضفتَي نهر العاصي، وهي من أقدم المدن المأهولة باستمرار في التاريخ منذ آلاف السنين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'ما هي أعلى قمة جبلية في شبه الجزيرة العربية؟', '["جبل شمس في عُمان","جبل النبي شعيب في اليمن","جبل سودة في السعودية","جبل طبق في اليمن"]'::jsonb, 1, 25, 1, 'multi', 'جبل النبي شعيب في اليمن هو أعلى قمة في شبه الجزيرة العربية، إذ يبلغ ارتفاعه نحو 3666 متراً فوق مستوى سطح البحر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أي من هذه الدول لا تطل على البحر الأحمر؟', '["الأردن","إريتريا","عُمان","جيبوتي"]'::jsonb, 2, 25, 2, 'multi', 'عُمان تطل على بحر العرب وخليج عُمان وخليج عدن، وليس لها أي ساحل على البحر الأحمر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'نهر الأردن هو أطول أنهار منطقة المشرق العربي.', '["صح","خطأ"]'::jsonb, 1, 25, 3, 'boolean', 'نهر الفرات هو الأطول في المشرق العربي، إذ يتجاوز طوله 2700 كم، بينما نهر الأردن لا يتجاوز 360 كم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'تُعدّ صحراء الربع الخالي في جنوب شرق الجزيرة العربية أكبر صحراء رملية متصلة في العالم.', '["صح","خطأ"]'::jsonb, 0, 25, 4, 'boolean', 'يمتد الربع الخالي على مساحة تتجاوز 650,000 كم² مما يجعله أكبر صحراء رملية متصلة في العالم، ويغطي أجزاء من السعودية واليمن وعُمان والإمارات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أي من هذه المضائق يربط البحر الأحمر بخليج عدن؟', '["مضيق هرمز","مضيق باب المندب","مضيق تيران","مضيق جبل طارق"]'::jsonb, 1, 25, 5, 'multi', 'يقع مضيق باب المندب عند الطرف الجنوبي للبحر الأحمر ويفصله عن خليج عدن بين اليمن وجيبوتي وإريتريا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'نهر الفرات يمر عبر ثلاث دول هي تركيا وسوريا والعراق.', '["صح","خطأ"]'::jsonb, 0, 25, 6, 'boolean', 'ينبع نهر الفرات من المرتفعات الأناضولية في تركيا ثم يعبر سوريا والعراق حتى يصب في شط العرب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أين يقع جبل الشيخ الذي يُعدّ أعلى قمة في بلاد الشام؟', '["في لبنان فقط","على الحدود السورية اللبنانية","في الأردن","في فلسطين"]'::jsonb, 1, 25, 7, 'multi', 'يقع جبل الشيخ (حرمون) على الحدود بين سوريا ولبنان، ويبلغ ارتفاعه نحو 2814 متراً ليكون أعلى قمة في بلاد الشام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أي من هذه العواصم العربية تقع على نهر دجلة؟', '["عمّان","دمشق","بغداد","الخرطوم"]'::jsonb, 2, 25, 8, 'multi', 'تقع بغداد على ضفتي نهر دجلة وسط العراق، وقد اختار الخليفة المنصور موقعها بالقرب من النهر عند تأسيسها عام 762م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'نهر الفرات يمر عبر ثلاث دول هي تركيا وسوريا والعراق.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'ينبع الفرات من تركيا ثم يخترق سوريا فالعراق قبل أن يصب في شط العرب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'البحر الميت يقع على الحدود بين الأردن وإسرائيل فقط، ولا يشترك فيه أي طرف آخر.', '["صح","خطأ"]'::jsonb, 0, 25, 10, 'boolean', 'البحر الميت محاط بالأردن من الشرق وإسرائيل والأراضي الفلسطينية من الغرب، دون أي دولة ثالثة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'ما هو أطول نهر يقع بالكامل داخل الأراضي العربية؟', '["نهر النيل","نهر الفرات","نهر دجلة","نهر الأردن"]'::jsonb, 1, 25, 11, 'multi', 'نهر الفرات هو الأطول الذي يجري بالكامل داخل الدول العربية (سوريا والعراق)، إذ ينبع الجزء العربي منه من الحدود التركية-السورية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'ما هي أعلى قمة جبلية في شبه الجزيرة العربية؟', '["جبل الشفا","جبل النبي شعيب","جبل أخضر","جبل رام"]'::jsonb, 1, 25, 12, 'multi', 'جبل النبي شعيب في اليمن هو أعلى قمة في شبه الجزيرة العربية، إذ يبلغ ارتفاعه نحو 3666 متراً فوق مستوى سطح البحر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'مضيق هرمز يربط بين الخليج العربي وبحر العرب، وتشرف عليه كل من إيران وسلطنة عُمان.', '["صح","خطأ"]'::jsonb, 0, 25, 13, 'boolean', 'مضيق هرمز يصل الخليج العربي ببحر العرب عبر خليج عُمان، وتتقاسم إيران وسلطنة عُمان السيطرة على ضفتيه الشمالية والجنوبية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'بحيرة طبريا (بحر الجليل) هي أعمق بحيرة مياه عذبة في العالم.', '["صح","خطأ"]'::jsonb, 1, 25, 14, 'boolean', 'أعمق بحيرة مياه عذبة في العالم هي بحيرة بايكال في روسيا، وليست بحيرة طبريا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'يقع جبل أرارات، المقدس في الموروث الديني، ضمن الأراضي التركية الحالية.', '["صح","خطأ"]'::jsonb, 0, 25, 15, 'boolean', 'يقع جبل أرارات في أقصى شرق تركيا بالقرب من الحدود الأرمينية والإيرانية، وهو جزء من الأراضي التركية الحالية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'أي نهر يُشكِّل الحدود الطبيعية بين سوريا والعراق في جزء منه؟', '["النيل","دجلة","الفرات","الأردن"]'::jsonb, 2, 25, 16, 'multi', 'يمر نهر الفرات عبر سوريا والعراق ويشكّل في بعض مساراته حداً طبيعياً بين البلدين قبل أن يصبّ في شط العرب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'ما هو الاسم الذي أطلقه العرب قديماً على المحيط الهندي؟', '["بحر الروم","البحر المحيط","بحر الهند","بحر فارس"]'::jsonb, 2, 25, 17, 'multi', 'اعتاد الجغرافيون والرحالة العرب القدامى تسمية المحيط الهندي بـ''بحر الهند'' نسبةً إلى شبه القارة الهندية المطلة عليه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_176, 'مضيق هرمز يربط بين الخليج العربي وبحر العرب، وتُشرف عليه إيران وسلطنة عُمان.', '["صح","خطأ"]'::jsonb, 0, 25, 18, 'boolean', 'يقع مضيق هرمز بين إيران شمالاً وسلطنة عُمان جنوباً، ويربط الخليج العربي ببحر عُمان وصولاً إلى بحر العرب.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_177 uuid;
BEGIN
  SELECT id INTO v_lib_id_177 FROM quizzes WHERE title = 'جغرافيا العالم والدول — الجزء 3' LIMIT 1;
  IF v_lib_id_177 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا العالم والدول — الجزء 3', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_177;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما هي أطول سلسلة جبلية في شبه الجزيرة العربية؟', '["جبال الحجاز","جبال الأخضر","جبال عسير","جبال الحجر"]'::jsonb, 0, 25, 0, 'multi', 'تمتد جبال الحجاز على طول الساحل الغربي لشبه الجزيرة العربية من خليج العقبة حتى منطقة عسير، مما يجعلها أطول سلسلة جبلية فيها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'أي من هذه الدول تمتلك أطول ساحل على البحر الأحمر؟', '["مصر","السعودية","اليمن","السودان"]'::jsonb, 1, 25, 1, 'multi', 'تمتلك المملكة العربية السعودية أطول ساحل على البحر الأحمر بامتداد يتجاوز 1800 كيلومتر على طول الساحل الغربي للجزيرة العربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'نهر الفرات أطول من نهر دجلة.', '["صح","خطأ"]'::jsonb, 0, 25, 2, 'boolean', 'يبلغ طول نهر الفرات نحو 2800 كيلومتر، وهو أطول من نهر دجلة الذي يبلغ طوله نحو 1950 كيلومتراً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'تُعدّ بحيرة أورميا في إيران من أكثر البحيرات ملوحةً في العالم.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'بحيرة أورميا في شمال غرب إيران من أملح البحيرات في العالم إذ قد تتجاوز ملوحتها 300 غرام لكل لتر، وهي أعلى بكثير من ملوحة البحر الميت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما اسم جبل أعلى قمة في شبه الجزيرة العربية الواقع في اليمن؟', '["جبل النبي شعيب","جبل عاصم","جبل الأخضر","جبل حضور"]'::jsonb, 0, 25, 4, 'multi', 'جبل النبي شعيب في اليمن يبلغ ارتفاعه نحو 3666 متراً، مما يجعله أعلى قمة في شبه الجزيرة العربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'تُعدّ الكويت أصغر دول الخليج العربي من حيث المساحة الجغرافية.', '["صح","خطأ"]'::jsonb, 0, 25, 5, 'boolean', 'تبلغ مساحة الكويت نحو 17,818 كم² مما يجعلها أصغر دول مجلس التعاون الخليجي من حيث المساحة الجغرافية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما اسم المضيق الذي يفصل بين المغرب وإسبانيا ويربط البحر الأبيض المتوسط بالمحيط الأطلسي؟', '["مضيق هرمز","مضيق جبل طارق","مضيق باب المندب","مضيق تيران"]'::jsonb, 1, 25, 6, 'multi', 'مضيق جبل طارق يفصل جنوب إسبانيا عن شمال المغرب ويمتد بطول 58 كم، وهو المنفذ الوحيد الطبيعي بين البحر الأبيض المتوسط والمحيط الأطلسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما اسم البحيرة الملحية التي تقع على الحدود بين الأردن وإسرائيل وفلسطين؟', '["بحيرة طبريا","البحر الميت","بحيرة قارون","بحيرة ناصر"]'::jsonb, 1, 25, 7, 'multi', 'البحر الميت بحيرة ملحية مغلقة تقع على الحدود بين الأردن وإسرائيل والضفة الغربية، وهو أخفض نقطة على سطح الأرض.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'تُعدّ قناة السويس المصرية أطول من قناة بنما من حيث الطول الإجمالي.', '["صح","خطأ"]'::jsonb, 0, 25, 8, 'boolean', 'يبلغ طول قناة السويس نحو 193 كم، بينما لا يتجاوز طول قناة بنما 82 كم، مما يجعل السويس أطول بفارق كبير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'جبل أرارات الذي يُعدّ رمزاً وطنياً لأرمينيا يقع جغرافياً داخل الأراضي التركية.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'رغم أن جبل أرارات يمثل الرمز القومي لأرمينيا ويظهر على علمها، إلا أنه يقع فعلياً داخل الحدود التركية في منطقة شرق الأناضول.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما اسم الممر المائي الذي يفصل بين شبه جزيرة عُمان وإيران ويربط الخليج العربي ببحر عُمان؟', '["مضيق باب المندب","مضيق هرمز","مضيق تيران","مضيق البوسفور"]'::jsonb, 1, 25, 10, 'multi', 'مضيق هرمز يقع بين شبه جزيرة مسندم العُمانية وإيران، وهو المنفذ الوحيد للخليج العربي نحو بحر عُمان والمحيط الهندي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'الرياض هي أكبر مدينة في المملكة العربية السعودية من حيث عدد السكان وليس جدة.', '["صح","خطأ"]'::jsonb, 0, 25, 11, 'boolean', 'الرياض عاصمة المملكة العربية السعودية وأكبر مدنها سكانًا، إذ يتجاوز عدد سكانها سبعة ملايين نسمة متفوقةً على جدة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'أي من هذه الدول الشرق أوسطية تمتلك أكبر احتياطي نفطي مؤكد في العالم؟', '["الكويت","الإمارات","المملكة العربية السعودية","العراق"]'::jsonb, 2, 25, 12, 'multi', 'تحتل المملكة العربية السعودية المرتبة الثانية عالميًا في الاحتياطيات النفطية المؤكدة وتُعدّ الأولى على مستوى الشرق الأوسط، مع وجود حقل الغوار الأكبر في العالم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'نهر الفرات هو أطول نهر في منطقة الشرق الأوسط وأكثر تدفقاً من نهر دجلة.', '["صح","خطأ"]'::jsonb, 0, 25, 13, 'boolean', 'يبلغ طول نهر الفرات نحو 2800 كم مما يجعله أطول أنهار الشرق الأوسط، كما أن حوضه أوسع من حوض دجلة مما يمنحه تدفقًا أكبر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'مضيق هرمز يقع بين سلطنة عُمان وإيران، ويُعدّ من أهم الممرات البحرية في العالم لنقل النفط.', '["صح","خطأ"]'::jsonb, 0, 25, 14, 'boolean', 'مضيق هرمز يفصل بين سلطنة عُمان وإيران ويمر عبره نحو 20% من نفط العالم مما يجعله ممراً استراتيجياً بالغ الأهمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'ما هو الاسم التاريخي لمنطقة تضم سوريا ولبنان وفلسطين والأردن وكانت تُعرف في العصور القديمة؟', '["بلاد المغرب","بلاد الشام","بلاد النهرين","الهلال الخصيب الشرقي"]'::jsonb, 1, 25, 15, 'multi', 'بلاد الشام هو الاسم التاريخي الذي أُطلق على المنطقة الجغرافية الممتدة من سوريا شمالاً حتى فلسطين والأردن جنوباً ولبنان غرباً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'نهر النيل يصبّ في البحر الأحمر عند مصبّه الشمالي.', '["صح","خطأ"]'::jsonb, 1, 25, 16, 'boolean', 'نهر النيل يصبّ في البحر الأبيض المتوسط عبر دلتاه في شمال مصر، وليس في البحر الأحمر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'أيّ دولة خليجية تحتضن أكبر حقل للغاز الطبيعي في العالم والمعروف بـ''الشمال'' أو ''بارس الجنوبي''؟', '["الكويت","الإمارات","قطر","البحرين"]'::jsonb, 2, 25, 17, 'multi', 'حقل الشمال القطري (المعروف في الجانب الإيراني بـ''بارس الجنوبي'') هو أكبر حقل للغاز الطبيعي في العالم، ويمتد تحت مياه الخليج العربي بين قطر وإيران.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_177, 'جبل أرارات الذي يُعدّ رمزاً للهوية الأرمنية يقع جغرافياً داخل الحدود الإيرانية.', '["صح","خطأ"]'::jsonb, 1, 25, 18, 'boolean', 'جبل أرارات يقع جغرافياً داخل الأراضي التركية في منطقة الأناضول الشرقية، وليس في إيران، رغم كونه الرمز القومي للشعب الأرمني.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_178 uuid;
BEGIN
  SELECT id INTO v_lib_id_178 FROM quizzes WHERE title = 'التاريخ والحضارات — الجزء 1' LIMIT 1;
  IF v_lib_id_178 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والحضارات — الجزء 1', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_178;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'في أي عام أُعلن عن اكتشاف النفط في المنطقة المحايدة بين الكويت والمملكة العربية السعودية؟', '["1938","1953","1945","1960"]'::jsonb, 1, 25, 0, 'multi', 'اكتُشف النفط في المنطقة المحايدة عام 1953 على يد شركة أمريكان إنديبندنت أويل كومباني (أمينويل).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما هو الاسم التاريخي لمدينة إزمير التركية في العهد الإغريقي والروماني؟', '["أفسوس","سميرنا","برغامة","أنطاكية"]'::jsonb, 1, 25, 1, 'multi', 'عُرفت إزمير في العصور الإغريقية والرومانية باسم سميرنا، وكانت من أبرز مدن الحضارة الهيلينية على ساحل بحر إيجة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'أيّ خليفة عباسي بنى مدينة بغداد عام 762م على شكل دائري؟', '["هارون الرشيد","المنصور","المعتصم","المأمون"]'::jsonb, 1, 25, 2, 'multi', 'أسّس الخليفة العباسي أبو جعفر المنصور مدينة بغداد عام 762م بتصميم دائري فريد عُرفت بـ''مدينة السلام''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما هو اسم المعركة التي انتصر فيها صلاح الدين الأيوبي على الصليبيين عام 1187م واستعاد بها القدس؟', '["معركة عين جالوت","معركة حطين","معركة مرج دابق","معركة أرسوف"]'::jsonb, 1, 25, 3, 'multi', 'في معركة حطين عام 1187م دمّر صلاح الدين الجيوشَ الصليبية وأسر ملكهم، مما مهّد لاستعادة القدس بعدها بأشهر قليلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'اتفاقية سايكس-بيكو عام 1916 كانت بين فرنسا وبريطانيا فقط لتقسيم منطقة الهلال الخصيب.', '["صح","خطأ"]'::jsonb, 1, 25, 4, 'boolean', 'شاركت روسيا القيصرية أيضاً في مفاوضات اتفاقية سايكس-بيكو وحصلت على حصة من مناطق النفوذ في الأناضول، فلم تكن ثنائية بحتة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما هي العاصمة الفعلية التي اتخذها الملك عبد العزيز بن سعود مقراً للحكم قبل أن تُعلن الرياض عاصمةً رسمية؟', '["مكة المكرمة","جدة","الطائف","المدينة المنورة"]'::jsonb, 1, 25, 5, 'multi', 'اتخذ الملك عبد العزيز من جدة مقراً فعلياً للحكم وإدارة الشؤون الدبلوماسية لموقعها الساحلي الاستراتيجي، قبل أن تُرسَّخ الرياض عاصمةً رسمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'أيّ حضارة قديمة أنشأت مدينة البتراء المنحوتة في الصخر بالأردن؟', '["الأنباط","الفينيقيون","الآشوريون","الكنعانيون"]'::jsonb, 0, 25, 6, 'multi', 'البتراء كانت عاصمة مملكة الأنباط العربية التي ازدهرت بين القرنين الرابع قبل الميلاد والثاني الميلادي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'مَن أسّس الدولة الأموية وجعل دمشق عاصمةً لها؟', '["معاوية بن أبي سفيان","عمر بن عبد العزيز","عبد الملك بن مروان","يزيد بن معاوية"]'::jsonb, 0, 25, 7, 'multi', 'معاوية بن أبي سفيان أسّس الدولة الأموية عام 661م واتخذ دمشق عاصمةً لها بعد تنازل الحسن بن علي عن الخلافة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما هو الاسم الذي أطلقه الفرس القدماء على منطقة بلاد ما بين النهرين؟', '["بلاد الرافدين","ميزوبوتاميا","آريانا","پارس"]'::jsonb, 1, 25, 8, 'multi', 'ميزوبوتاميا كلمة إغريقية الأصل تعني ''الأرض بين النهرين''، وهي التسمية التي شاعت قديماً للإشارة إلى المنطقة الواقعة بين نهري دجلة والفرات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'قناة السويس افتُتحت رسمياً عام 1869 في عهد الخديوي إسماعيل.', '["صح","خطأ"]'::jsonb, 0, 25, 9, 'boolean', 'افتُتحت قناة السويس رسمياً في نوفمبر 1869 في عهد الخديوي إسماعيل بعد عشر سنوات من الحفر بإشراف المهندس الفرنسي فرديناند دي لسبس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'أيّ ملك عربي قاد مسيرة الأخضر عام 1975 لاستعادة الصحراء الغربية من إسبانيا؟', '["الملك فيصل","الملك الحسن الثاني","الملك محمد الخامس","الملك عبد الله الأول"]'::jsonb, 1, 25, 10, 'multi', 'نظّم الملك الحسن الثاني ملك المغرب المسيرة الخضراء في أكتوبر 1975، إذ قاد نحو 350,000 مغربي للضغط على إسبانيا للتخلي عن الصحراء الغربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما هو أقدم نظام كتابة معروف في التاريخ نشأ في منطقة الشرق الأوسط؟', '["الكتابة الهيروغليفية","الكتابة المسمارية","الكتابة الفينيقية","الكتابة النبطية"]'::jsonb, 1, 25, 11, 'multi', 'ابتكر السومريون في جنوب بلاد الرافدين الكتابة المسمارية حوالي 3200 قبل الميلاد، مما يجعلها أقدم نظام كتابة موثق في التاريخ البشري.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'في أي عام تأسست جامعة الدول العربية؟', '["1943","1945","1948","1950"]'::jsonb, 1, 25, 12, 'multi', 'تأسست جامعة الدول العربية في 22 مارس 1945م بتوقيع ميثاقها في القاهرة من قِبل سبع دول عربية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'كانت بغداد عاصمة الخلافة العباسية منذ تأسيسها عام 762 ميلادي على يد الخليفة المنصور.', '["صح","خطأ"]'::jsonb, 0, 25, 13, 'boolean', 'أسّس الخليفة العباسي أبو جعفر المنصور مدينة بغداد عام 762م وجعلها عاصمة للخلافة العباسية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما اسم المعركة التي هزم فيها صلاح الدين الأيوبي الصليبيين عام 1187م واستعاد بها القدس؟', '["معركة عين جالوت","معركة حطين","معركة المنصورة","معركة مرج دابق"]'::jsonb, 1, 25, 14, 'multi', 'في معركة حطين عام 1187م دمّر صلاح الدين الأيوبي الجيوش الصليبية مما مهّد لاستعادة القدس بعدها بأشهر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'كانت سلطنة عُمان تُعرف تاريخياً باسم ''مسقط وعُمان'' قبل توحيدها تحت هذا الاسم عام 1970م.', '["صح","خطأ"]'::jsonb, 0, 25, 15, 'boolean', 'أعاد السلطان قابوس بن سعيد تسمية البلاد رسمياً من ''مسقط وعُمان'' إلى ''سلطنة عُمان'' عام 1970م إثر توليه الحكم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'من أسّس الدولة الأموية وجعل دمشق عاصمةً لها؟', '["عمر بن الخطاب","معاوية بن أبي سفيان","يزيد بن معاوية","عبد الملك بن مروان"]'::jsonb, 1, 25, 16, 'multi', 'أسّس معاوية بن أبي سفيان الدولة الأموية عام 661م واتخذ من دمشق عاصمةً لها بعد توليه الخلافة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'ما اسم الحضارة القديمة التي قامت في اليمن وكانت عاصمتها مأرب واشتهرت بسدّها العظيم؟', '["حضارة دلمون","حضارة سبأ","حضارة أكسوم","حضارة نبط"]'::jsonb, 1, 25, 17, 'multi', 'مملكة سبأ قامت في اليمن القديم وعاصمتها مأرب، واشتُهرت ببناء سد مأرب العظيم الذي روى أراضيها وجعلها مزدهرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_178, 'أُعلن قيام دولة إسرائيل رسمياً في الخامس عشر من مايو عام 1948 ميلادي.', '["صح","خطأ"]'::jsonb, 1, 25, 18, 'boolean', 'أُعلن قيام دولة إسرائيل في 14 مايو 1948 (الخامس عشر من مايو كان اليوم الذي انتهى فيه الانتداب البريطاني رسمياً وبدأت حرب 1948).', '');
  END IF;
END $$;

