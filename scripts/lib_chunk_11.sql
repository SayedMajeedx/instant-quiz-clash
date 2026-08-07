DO $$
DECLARE
  v_lib_id_149 uuid;
BEGIN
  SELECT id INTO v_lib_id_149 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 3' LIMIT 1;
  IF v_lib_id_149 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 3', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_149;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'دوري أبطال أوروبا هو بطولة سنوية لأندية كرة القدم تضم أندية من أي قارة؟', '["أوروبا","أمريكا الجنوبية","أفريقيا","آسيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'أي دولة استضافت دورة الألعاب الأولمبية الشتوية لعام 2014‏؟', '["كندا","روسيا","الولايات المتحدة","ألمانيا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'من فاز بكأس ستانلي (⁦Stanley Cup⁩) لعام 2011‏؟', '["مونتريال كاناديانز","نيويورك رينجرز","بوسطن بروينز","تورونتو ميبل ليفز"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'روجيه فيدرر هو لاعب كرة قدم مشهور.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'ما هي الأداة التي يُطلق اسمها على ميزة الرمية الأخيرة (الحجر الأخير) في جولة لعبة الكيرلنج؟', '["المطرقة","مفتاح الربط","المثقاب","مفك البراغي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'سجل ويلت تشامبرلين 100 نقطة في مباراته الشهيرة ضد نيويورك نيكس عام 1962.', '["صحيح","خطأ"]'::jsonb, 0, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'أي فريق فاز بالدوري الإنجليزي الممتاز لموسم 2015-2016‏؟', '["ليفربول","تشيلسي","ليستر سيتي","مانشستر يونايتد"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'استضافت رابطة محترفي التنس (⁦ATP⁩) عدة بطولات على ملاعب مفروشة بالسجاد (⁦carpet court⁩) قبل أن يتم استبدالها لتقليل الإصابات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'من هي اللاعبّة التي فازت بالميدالية الذهبية لفردي تنس الطاولة في الألعاب الأولمبية لعام 2016‏؟', '["دينغ نينغ (الصين)","لي شياو شيا (الصين)","آي فوكوهارا (اليابان)","سونغ كيم (كوريا الشمالية)"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'أي من اللاعبين التاليين سجل هاتريك (ثلاثة أهداف) في أول ظهور له مع مانشستر يونايتد؟', '["كريستيانو رونالدو","واين روني","روبين فان بيرسي","ديفيد بيكهام"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'قبل عام 2018، ما هي شركة السيارات اليابانية الوحيدة التي فازت بسباق لو مان 24 ساعة؟', '["تويوتا","سوبارو","مازدا","نيسان"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'ما هو مصطلح الكريكت الذي يشير إلى خروج الضارب دون تسجيل أي نقطة (صفر)‏؟', '["باي (⁦Bye⁩)","بيمر (⁦Beamer⁩)","كاري (⁦Carry⁩)","داك (⁦Duck⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'في رياضة الغولف، ما الاسم الذي يُطلق على تسجيل ضربتين تحت المعدل في حفرة واحدة؟', '["إيغل","بيردي","بوغي","ألباتروس"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'في أي سباق حُسم لقب بطولة العالم لسائقي الفورمولا 1 لعام 2018‏؟', '["الولايات المتحدة","المكسيك","بلجيكا","أبو ظبي"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'أي من بطولات التنس الكبرى التالية (الجراند سلام) تقام في نهاية العام؟', '["بطولة فرنسا المفتوحة","بطولة ويمبلدون","بطولة أمريكا المفتوحة","بطولة أستراليا المفتوحة"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'أين أقيمت دورة الألعاب الأولمبية الصيفية الثانية والعشرون؟', '["برشلونة","طوكيو","لوس أنجلوس","موسكو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'كم مرة فازت مارتينا نافراتيلوفا ببطولة ويمبلدون لفردي السيدات؟', '["تسع مرات","عشر مرات","سبع مرات","ثماني مرات"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'في كرة القدم، يتم استئناف اللعب بركلة ركنية بعد أن يسجل أحد الفريقين هدفاً.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_149, 'في أي رياضة تُستخدم المصطلحات: لوف (⁦love⁩)، ديوس (⁦deuce⁩)، ماتش (⁦match⁩)، وفولي (⁦volley⁩)‏؟', '["الكريكت","كرة السلة","التنس","الكيرلنج"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_150 uuid;
BEGIN
  SELECT id INTO v_lib_id_150 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 4' LIMIT 1;
  IF v_lib_id_150 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 4', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_150;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'من هو شريك الزوجي الذي حقق معه لاعب التنس جون ماكنرو أكبر نجاحاته؟', '["بيتر فليمنغ","مارك وودفورد","مايكل ستيتش","ماري كاريلو"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'أي من منتخبات الدول التالية تأهل إلى كأس العالم لكرة القدم 2018 في روسيا؟', '["الولايات المتحدة الأمريكية","تونس","إيطاليا","هولندا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'من هو اللاعب الذي فاز بالميدالية الذهبية في فردي كرة الطاولة للرجال في أولمبياد 2016‏؟', '["تشانغ جيكي (الصين)","جون ميزوتاني (اليابان)","ما لونغ (الصين)","فلاديمير سامسونوف (بيلاروسيا)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'أي من المدن الأوروبية التالية كانت الأولى التي تستضيف الألعاب الأولمبية الصيفية الحديثة ثلاث مرات؟', '["باريس","أثينا","روما","لندن"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'ما هي الدولة التي استضافت كأس العالم لكرة القدم عام 2022‏؟', '["قطر","أوغندا","فيتنام","بوليفيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'أي نادٍ إنجليزي لكرة القدم يُلقب بـ ''الثعالب''؟', '["نورثهامبتون تاون","ليستر سيتي","برادفورد سيتي","وست بروميتش ألبيون"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'كان هناك ما مجموعه 20 سباقاً في موسم فورمولا 1 لعام 2016.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'من فاز بسباق جائزة موناكو الكبرى لعام 2018‏؟', '["سباستيان فيتيل","كيمي رايكونن","لويس هاملتون","دانيال ريكاردو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'ما هو أعلى حزام يمكن الحصول عليه في رياضة التايكوندو؟', '["الأسود","الأبيض","الأحمر","الأخضر"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'من فاز ببطولة العالم لسائقي الفورمولا 1 لعام 2016‏؟', '["لويس هاملتون","نيكو روزبرغ","ماكس فيرستابن","كيمي رايكونن"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'أي دولة فازت بكأس العالم لكرة القدم 2018 التي استضافتها روسيا؟', '["كرواتيا","بلجيكا","فرنسا","إنجلترا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'لماذا تم بناء جدار ''الوحش الأخضر'' في ملعب فينواي بارك في الأصل؟', '["لجعل تسجيل الضربات الساحقة أكثر صعوبة.","لعرض الإعلانات التجارية.","لتوفير مقاعد إضافية للجمهور.","لمنع مشاهدة المباريات من خارج الملعب."]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'ما هي الرياضة التي تُعرف بـ ''رياضة الملوك''؟', '["سباق الخيل","الشطرنج","المبارزة بالرماح","المبارزة بالسيف"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'من أي مدينة أمريكية جاء فريق لوس أنجلوس دودجرز في الأصل؟', '["لاس فيغاس","بروكلين","بوسطن","سياتل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'جوش منصور هو لاعب في أي فريق من فرق دوري الرغبي الوطني (⁦NRL⁩)‏؟', '["ملبورن ستورم","سيدني روسترز","بينريث بانثرز","نورث كوينزلاند كاوبويز"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'أي من منافسات ألعاب القوى التالية غير مدرجة في مسابقة العشاري للرجال في الأولمبياد؟', '["القفز بالزانة","الوثب الطويل","دفع الجلة","رمي المطرقة"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'متى تأسس نادي شالكه 04 الألماني لكرة القدم؟', '["1904","1909","2008","1999"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_150, 'ما هي الدولة التي أنجبت لاعبي كرة قدم مثل كافو، وروبيرتو كارلوس، وبيليه؟', '["الأرجنتين","البرازيل","البرتغال","إسبانيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_151 uuid;
BEGIN
  SELECT id INTO v_lib_id_151 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 5' LIMIT 1;
  IF v_lib_id_151 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 5', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_151;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'أي مصارع فاز ببطولة رويال رامبل للرجال لعام 2019‏؟', '["سيث رولينز","برون سترومان","إيه جيه ستايلز","أندرادي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'كم عدد ألقاب بطولة فرنسا المفتوحة للتنس التي فاز بها بيورن بورغ؟', '["4","6","9","2"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'من فاز بدوري أبطال أوروبا في عام 2017‏؟', '["أتلتيكو مدريد","موناكو","ريال مدريد","يوفنتوس"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'ما هو لقب نادي رغبي يونيون لبلدة نورثهامبتون؟', '["هارليكوينز","ساراسينز","واسبس","السينتس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'ما هو الطول الدقيق للجزء المستقيم في الحارة الأولى من مضمار أولمبي؟', '["⁦84.39⁩ متر","100 متر","100 ياردة","⁦109.36⁩ ياردة"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'في أي عام تأسس نادي باري الإيطالي لكرة القدم؟', '["1945","1908","2014","1895"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'من كان هداف بطولة كأس العالم لكرة القدم لعام 2014‏؟', '["توماس مولر","ليونيل ميسي","خاميس رودريغيز","نيمار"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'أي فريق فاز ببطولة دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩) لموسم 2014-2015‏؟', '["كليفلاند كافالييرز","هوستون روكتس","أتلانتا هوكس","غولدن ستيت واريورز"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'من هو السائق الذي توج بلقب بطولة العالم للفورمولا 1 برقم قياسي بلغ 7 مرات؟', '["مايكل شوماخر","آيرتون سينا","فرناندو ألونسو","جيم كلارك"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'مع أي فريق فاز ستيفن جيرارد بلقب دوري أبطال أوروبا؟', '["ريال مدريد","ليفربول","تشيلسي","مانشستر سيتي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'ما اسم الأداة المستخدمة لضرب الكرة البيضاء في السنوكر أو البلياردو؟', '["المضرب","المضرب الخشبي","العصا","المطرقة"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'ما هي الدولة التي استضافت كأس العالم لكرة القدم عام 2022‏؟', '["الولايات المتحدة الأمريكية","اليابان","سويسرا","قطر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'كم كان معدل ضربات السير دونالد برادمان في مباريات الاختبار في الكريكت؟', '["⁦99.94⁩","100","⁦69.51⁩","⁦44.78⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'أي منتخب هزمه المنتخب الإنجليزي في دور نصف النهائي قبل أن يفوز بنهائي كأس العالم عام 1966‏؟', '["ألمانيا الغربية","البرتغال","الاتحاد السوفيتي","البرازيل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'إدسون أرانتيس دو ناسيمنتو هو الاسم الكامل لأي لاعب كرة قدم أسطوري؟', '["روماريو","زيكو","بيليه","رونالدينيو"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'من أي جزيرة برتغالية ينحدر لاعب كرة القدم كريستيانو رونالدو؟', '["تيرسيرا","سانتا ماريا","بورتو سانتو","ماديرا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'ما هو فريق كرة السلة الذي خاض أكبر عدد من نهائيات دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩)‏؟', '["لوس أنجلوس ليكرز","بوسطن سلتكس","فيلادلفيا سفنتي سيكسرز","غولدن ستيت واريورز"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_151, 'أي شركة مصنعة للسيارات فازت بسباق لومان 24 ساعة لعام 2016‏؟', '["تويوتا","بورشه","أودي","فيراري"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_152 uuid;
BEGIN
  SELECT id INTO v_lib_id_152 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 6' LIMIT 1;
  IF v_lib_id_152 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 6', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_152;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'ما هو اللقب الشهير الذي عُرف به المصارع المحترف البريطاني شيرلي كرابتري؟', '["بيغ دادي","جاينت هاستاكس","كيندو ناغاساكي","ماسامبولا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'أي فريق توج بلقب بطولة دوري كرة السلة الأمريكي للمحترفين (⁦NBA⁩) لموسم 2015-2016‏؟', '["غولدن ستيت واريورز","كليفلاند كافالييرز","تورونتو رابتورز","أوكلاهوما سيتي ثاندر"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'ملعب التنس في الأولمبياد هو عبارة عن شاشة خضراء عملاقة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'ما هو الاسم الكامل للاعب كرة القدم ''كريستيانو رونالدو''؟', '["كريستيانو رونالدو لوس سانتوس دييغو","كريستيانو أرماندو دييغو رونالدو","كريستيانو لويس أرماندو رونالدو","كريستيانو رونالدو دوس سانتوس أفيرو"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'خلال بطولة ويمبلدون، يمكن للمتفرجين في الملعب شراء كرات التنس التي تم استخدامها في المباريات.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'من هو مدرب كرة القدم الذي فاز بأكبر عدد من الألقاب خلال فترة تدريبه لنادي مانشستر يونايتد الإنجليزي؟', '["ديفيد مويس","السير أليكس فيرجسون","لويس فان غال","جوزيه ميرنيو"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'في البولينج، ما هو المصطلح المستخدم للإشارة إلى تسجيل ثلاث ضربات ساحقة متتالية؟', '["فلامينغو","بيردي","تيركي","إيغل"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'في أي رياضة تنافس اللاعبة فاني شميلار لصالح ألمانيا؟', '["السباحة","قفز الحواجز","الجمباز","التزلج"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'ما هو المنتخب الوطني الذي فاز بنسخة عام 2016 من بطولة أمم أوروبا (اليورو)‏؟', '["البرتغال","فرنسا","ألمانيا","إنجلترا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'أي مدينة تتميز جميع فرقها الرياضية المحترفة بقمصان ذات نفس الألوان؟', '["نيويورك","بيتسبرغ","سياتل","تامبا باي"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'مع أي فريق سجل مايكل شوماخر ظهوره الأول في الفورمولا 1 في سباق جائزة بلجيكا الكبرى عام 1991‏؟', '["بينيتون","فيراري","جوردان","مرسيدس"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'من الذي يُطلق عليه غالباً لقب "المايسترو" في ملاعب التنس للرجال؟', '["بيل تيلدن","بوريس بيكر","بيت سامبراس","روجر فيدرر"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'أي دولة استضافت بطولة كأس العالم لكرة القدم في عام 2006‏؟', '["ألمانيا","المملكة المتحدة","البرازيل","جنوب أفريقيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'سجل شاكيل أونيل رمية ثلاثية واحدة فقط طوال مسيرته الرياضية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'في أي عام فازت سيارة مازدا ⁦787B⁩ بسباق لومان 24 ساعة؟', '["1990","2000","1991","1987"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'أي منتخب فاز ببطولة كأس العالم لكرة القدم لعام 2014 في البرازيل؟', '["الأرجنتين","البرازيل","هولندا","ألمانيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'في لعبة السنوكر، ما هو لون الكرة التي تساوي 3 نقاط؟', '["الأخضر","الأصفر","البني","الأزرق"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_152, 'ما هو المنتخب الذي هزمه منتخب إنجلترا ليفوز بنهائي كأس العالم عام 1966‏؟', '["الاتحاد السوفيتي","ألمانيا الغربية","البرتغال","البرازيل"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_153 uuid;
BEGIN
  SELECT id INTO v_lib_id_153 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 7' LIMIT 1;
  IF v_lib_id_153 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 7', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_153;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'كم عدد اللاعبين في فريق كرة القدم الواحد داخل الملعب؟', '["11","10","9","8"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من الذي فاز بلقب الدوري الإنجليزي الممتاز في موسم 2015-2016 بعد مسيرة تاريخية أشبه بالمعجزة؟', '["توتنهام هوتسبير","ليستر سيتي","واتفورد","ستوك سيتي"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من أحرز هدف الفوز القاتل في الوقت بدل الضائع في نهائي دوري أبطال أوروبا عام 1999 بين مانشستر يونايتد وبايرن ميونخ؟', '["دوايت يورك","أندي كول","أولي غونار سولشاير","ديفيد بيكهام"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'في دوري الرغبي، يُعاقب على ركلة "40-20" بركلة حرة للفريق المنافس.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'لأي حدث كروي كبير في عام 1996 أُنتجت أغنية "الأسود الثلاثة" (⁦Three Lions⁩) لفرقة "لايتنينج سيدز"؟', '["بطولة أمم أوروبا","كأس العالم","دوري أبطال أوروبا","كأس القارات"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'أي من أرقام القمصان التالية لم يرتدها شاكيل أونيل قط؟', '["36","35","33","32"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من كان أول لاعب كرة قدم يسجل 200 هدف في الدوري الإنجليزي الممتاز؟', '["واين روني","روبي فاولر","آلان شيرر","تييري هنري"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'أي من أندية كرة القدم الإنجليزية التالية يقع مقره في مدينة ليفربول؟', '["وست هام يونايتد","كريستال بالاس","أرسنال","إيفرتون"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو اللاعب الذي قام بـ "ركلة كونغ فو" ضد مشجع لفريق كريستال بالاس في يناير 1995‏؟', '["إيريك كانتونا","ديفيد سيمان","أشلي كول","مارك هيوز"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'كم عدد مناطق تسجيل النقاط في لوحة السهام (الدارتس) التقليدية؟', '["62","82","42","102"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'كم عدد المباريات التي خاضها نادي أرسنال دون هزيمة خلال موسم 2003-2004 في الدوري الإنجليزي الممتاز؟', '["51","49","38","22"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو لاعب كرة القدم الإيطالي الذي أشار للحارس نوير إلى الزاوية التي سيسدد فيها ثم أضاع الركلة خارج المرمى، أثناء مباراة إيطاليا وألمانيا في بطولة أمم أوروبا 2016‏؟', '["إنسيني","بارزالي","جياكيريني","بيليه"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو اللاعب الذي سجل أكبر عدد من الأهداف في تاريخ الدوري الإنجليزي الممتاز (⁦EPL⁩)‏؟', '["آلان شيرر","واين روني","ليونيل ميسي","ديدييه دروغبا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'أي دولة استضافت بطولة كأس العالم لكرة القدم لعام 2018‏؟', '["ألمانيا","روسيا","الولايات المتحدة","المملكة العربية السعودية"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو المصارع المحترف الذي سقط من دعامات السقف ليلقى حتفه أثناء عرض مباشر مدفوع الثمن (⁦Pay-Per-View⁩) في عام 1999‏؟', '["كريس بنوا","ليكس لوجر","أوين هارت","آل سنو"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو اللاعب الذي شارك في أكبر عدد من المباريات مع منتخب البرازيل لكرة القدم؟', '["رونالدو","كاكا","روبيرتو كارلوس","كافو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'من هو الملاكم الذي تم إيقافه بسبب قضم جزء من أذن إيفاندر هوليفيلد في عام 1997‏؟', '["مايك تايسون","روي جونز جونيور","إيفاندر هوليفيلد","لينوكس لويس"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_153, 'ما هي المدينة التي كان يمثلها فريق ليكرز (⁦Lakers⁩) قبل انتقاله إلى لوس أنجلوس؟', '["فيلادلفيا","منيابوليس","شيكاغو","سان فرانسيسكو"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_154 uuid;
BEGIN
  SELECT id INTO v_lib_id_154 FROM quizzes WHERE title = 'الرياضة والألعاب العالمية — الجزء 8' LIMIT 1;
  IF v_lib_id_154 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضة والألعاب العالمية — الجزء 8', 'رياضة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_154;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي من الرماة (⁦pitchers⁩) التاليين فاز بجائزة أفضل لاعب مبتدئ (⁦Rookie of the Year⁩) في الدوري الوطني لموسم 2013‏؟', '["خوسيه فرنانديز","جاكوب ديغروم","شيلبي ميلر","مات هارفي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'في أي تاريخ أقيم الحفل الختامي لدورة الألعاب الأولمبية الصيفية في ريو 2016‏؟', '["23 أغسطس","21 أغسطس","19 أغسطس","17 أغسطس"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي دولة استضافت دورة الألعاب الأولمبية الصيفية لعام 2020‏؟', '["الصين","أستراليا","اليابان","ألمانيا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من الذي فاز ببطولة العالم لسباقات الفورمولا 1 للسائقين لعام 2017‏؟', '["سباستيان فيتل","نيكو روزبرغ","ماكس فيرستابن","لويس هاملتون"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي منتخب فاز ببطولة كوبا أمريكا المئوية عام 2016‏؟', '["تشيلي","الأرجنتين","البرازيل","كولومبيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من أي دولة نشأت رياضة "الكابادي"، وهي رياضة تلاحمية تعتمد على الدفاع والالتحام؟', '["أستراليا","الهند","تركيا","كمبوديا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي من الرياضات التالية ليست جزءاً من السباق الثلاثي (الترياتلون)‏؟', '["ركوب الدراجات","السباحة","ركوب الخيل","الجري"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'ما هي أفضل نتيجة (معدل ضربات) حققها تايجر وودز في مسيرته الاحترافية في رياضة الغولف؟', '["65","63","67","61"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من الذي فاز بسباق جائزة سان مارينو الكبرى عام 1994، وهو السباق الذي لقي فيه آيرتون سينا حتفه؟', '["مايكل شوماخر","نيكولا لاريني","جيرهارد بيرجر","ميكا هاكينين"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'في كرة القدم الكندية، كم عدد النقاط التي يمنحها تسجيل الـ "روج" (⁦rouge⁩)‏؟', '["2","1","3","4"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي فريق كرة قدم إنجليزي يُلقب بـ "النمور" (⁦The Tigers⁩)‏؟', '["كارديف سيتي","بريستول سيتي","هال سيتي","مانشستر سيتي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من هو لاعب كرة السلة (⁦NBA⁩) الذي خاض أكبر عدد من المباريات طوال مسيرته الرياضية؟', '["كريم عبد الجبار","كيفن غارنيت","كوبي براينت","روبرت باريش"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من كان الهداف التاريخي للمنتخب الإنجليزي لكرة القدم؟', '["واين روني","ديفيد بيكهام","ستيفن جيرارد","مايكل أوين"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'سباقات الفورمولا إي (⁦Formula E⁩) هي سلسلة سباقات سيارات تستخدم سيارات سباق كهربائية هجينة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'من فاز بلقب "دوري أبطال أوروبا" في عام 1999‏؟', '["برشلونة","بايرن ميونخ","مانشستر يونايتد","ليفربول"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'يقيس جهاز الـ "ستيمبميتر" (⁦stimpmeter⁩) سرعة الكرة على أي سطح؟', '["ملعب كرة القدم","المنطقة الخارجية لملعب الكريكت","طاولة البينبول","المنطقة الخضراء لملعب الغولف"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'كانت رياضة التنس تُعرف في السابق باسم راكيت بول (كرة المضرب).', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_154, 'أي منتخب فاز ببطولة كوبا أمريكا لعام 2015‏؟', '["الأرجنتين","تشيلي","البرازيل","باراغواي"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_155 uuid;
BEGIN
  SELECT id INTO v_lib_id_155 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 1' LIMIT 1;
  IF v_lib_id_155 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 1', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_155;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ما هي شركة إطارات السيارات الشهيرة بإنتاج سلسلة "⁦P Zero⁩"؟', '["بيريللي","جودير","بريدجستون","ميشلان"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ماذا تمثل الحلقات الأربع في شعار سيارات أودي؟', '["الولايات التي تحقق فيها أودي أعلى مبيعات","شركات تصنيع سيارات كانت مستقلة سابقاً","المدن الرئيسية الحيوية لشركة أودي","الدول التي تحقق فيها أودي أعلى مبيعات"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'في عام 1991، أصبحت مازدا أول شركة سيارات يابانية تفوز بسباق لومان (⁦Le Mans⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ما هي زاوية ميل الأسطوانات في محرك ⁦VR6⁩ الأسطوري من فولكس واجن؟', '["30 درجة","45 درجة","90 درجة","15 درجة"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ما هي شركة السيارات الخارقة التي تنتمي إلى السويد؟', '["كوينيجسيج","بوغاتي","لامبورغيني","ماكلارين"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'أي دولة ترمز إليها لوحات تسجيل المركبات الدولية بالحرف ''⁦A⁩''؟', '["أفغانستان","النمسا","أستراليا","أرمينيا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'كم تبلغ سعة محرك ⁦LS7⁩ بالبوصة المكعبة؟', '["346","364","427","376"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'أكمل التناظر التالي: أودي بالنسبة لفولكس واجن مثل إنفينيتي بالنسبة لـ...؟', '["هوندا","هيونداي","سوبارو","نيسان"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'شركة النقل "أريفا" (⁦Arriva⁩) مملوكة لشركة السكك الحديدية الألمانية "دويتشه بان".', '["صحيح","خطأ"]'::jsonb, 0, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'أي من ماركات السيارات التالية نشأت في السويد؟', '["مرسيدس","فولفو","أكورا","لينكون"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'تعتبر سيارة "بنز باتنت موتورواجن" لعام 1886 أول سيارة حقيقية صُنعت في التاريخ.', '["صحيح","خطأ"]'::jsonb, 0, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'أي من السيارات التالية ليست من إنتاج شركة فورد؟', '["فيوجن","موديل إيه (⁦Model A⁩)","إف-150 (⁦F-150⁩)","كامري"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'حطم قطار الطلقة الياباني "شينكانسن" الرقم القياسي لسرعة أسرع قطار كهربائي المسجل باسم قطار ⁦TGV⁩ الفرنسي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'تأسست شركة هوندا للمحركات في اليابان.', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'اخترع الكندي جوزيف-أرماند بومباردييه عربة الجليد الآلية (السنوموبيل) في عام 1937.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ما هي شركة السيارات التي كان إنزو فيراري يتسابق لصالحها قبل تأسيس شركته الخاصة؟', '["أوتو يونيون","مرسيدس بنز","بنتلي","ألفا روميو"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'تُصنع غالبية سيارات سوبارو في الصين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_155, 'ما هو المحرك المستخدم في سيارة لكزس ⁦SC400⁩‏؟', '["⁦2JZ-GTE⁩","⁦1UZ-FE⁩","⁦7M-GTE⁩","⁦5M-GE⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_156 uuid;
BEGIN
  SELECT id INTO v_lib_id_156 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 2' LIMIT 1;
  IF v_lib_id_156 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 2', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_156;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'في أي عام ظهرت الشاحنة الصغيرة "شيفروليه لوف" (⁦LUV⁩) لأول مرة؟', '["1972","1982","1975","1973"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'طوال تاريخها، صُنعت سيارة شيفروليه كورفيت حصرياً بمحركات ⁦V8⁩ فقط.', '["صحيح","خطأ"]'::jsonb, 1, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'أي من موديلات السيارات التالية تنتجها شركة لامبورغيني؟', '["هوايرا","918","أفنتادور","شيرون"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'إلى أي عائلة قطارات تنتمي الفئات البريطانية ⁦Class 700⁩ و ⁦Class 707⁩ و ⁦Class 717⁩‏؟', '["نتوركر (⁦Networker⁩)","أفنترا (⁦Aventra⁩)","إلكتروستار (⁦Electrostar⁩)","ديسيرو سيتي (⁦Desiro City⁩)"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'كم تبلغ سعة محرك ⁦LS3⁩ بالبوصة المكعبة؟', '["376","346","364","427"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'فرق الطول بين طائرتي بوينغ ⁦777-300ER⁩ وإيرباص ⁦A350-1000⁩ أقرب إلى:', '["1 متر","⁦0.1⁩ متر","10 أمتار","100 متر"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'أي من شركات السيارات التالية سُميت حرب باسمها؟', '["هوندا","فورد","تويوتا","فولكس واجن"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'كم تبلغ سعة محرك ⁦LS2⁩ بالبوصة المكعبة؟', '["346","376","402","364"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'متى تأسست شركة كاديلاك للسيارات؟', '["1902","1964","1898","1985"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'أي من هذه الشركات لا تصنع الدراجات النارية؟', '["هوندا","تويوتا","كاواساكي","ياماها"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'أي من الدول التالية حظرت رسمياً استخدام كاميرات لوحة القيادة (داش كام) في السيارات للمدنيين؟', '["الولايات المتحدة","التشيك","النمسا","كوريا الجنوبية"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'أي جزء في محرك السيارة يستخدم فصوصاً لفتح وإغلاق صمامات السحب والعادم للسماح بدخول خليط الهواء والوقود؟', '["المكبس (بستون)","عمود القيادة","عمود المرفق (كرنك)","عمود الحدبات"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'كانت سيارة ⁦GM EV1⁩ من جنرال موتورز أول سيارة كهربائية إنتاجية مسموح بقيادتها قانونياً في الطرقات العامة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'في عام 2014، تم استدعاء أكثر من 6 ملايين سيارة من جنرال موتورز بسبب أي عيب مصنعي خطير؟', '["خلل في دواسة الوقود","خلل في مفتاح التشغيل","تلف خراطيم الوقود","خلل في مكابح السيارة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'يوجد طراز لسيارات رولز رويس يُطلق عليه اسم "سبيكتر" (⁦Spectre⁩).', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'كم عجلة للدراجة أحادية العجلة؟', '["4","3","6","1"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_156, 'في أي دولة صُنعت سيارة ترابانت 601 (⁦Trabant 601⁩)‏؟', '["ألمانيا الشرقية","الاتحاد السوفيتي","المجر","فرنسا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_157 uuid;
BEGIN
  SELECT id INTO v_lib_id_157 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 3' LIMIT 1;
  IF v_lib_id_157 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 3', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_157;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي شركة سيارات صممت طراز "أفنتادور"؟', '["لامبورغيني","فيراري","باغاني","بوغاتي"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'على أي نوع من أنواع الطاقة تعمل سيارات تسلا؟', '["البنزين","الكهرباء","الديزل","الطاقة النووية"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'كم تبلغ القوة الحصانية التي تنتجها قاطرة ⁦SD40-2⁩‏؟', '["3,200","2,578","3,000","2,190"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي من سيارات أودي التالية لا تستخدم نظام الدفع الرباعي القائم على هالدكس (⁦Haldex⁩)‏؟', '["أودي ⁦TT⁩","أودي ⁦S3⁩","أودي ⁦A3⁩","أودي ⁦A8⁩"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'ما هو الحيوان المرسوم على شعار شركة "أبارث" (⁦Abarth⁩)، القسم الرياضي لشركة فيات؟', '["العقرب","الأفعى","الثور","الحصان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'ما اسم أشهر سيارة كهربائية تنتجها شركة نيسان؟', '["تري (⁦Tree⁩)","ليف (⁦Leaf⁩)","دير (⁦Deer⁩)","روتس (⁦Roots⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي من الشركات التالية ليست تابعة لمجموعة فولكس واجن؟', '["بورش","بوغاتي","أوبل","بنتلي"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'في عام 1993، أجرت شركة تصنيع السيارات السويدية "ساب" (⁦Saab⁩) تجربة لاستبدال عجلة القيادة بعصا تحكم في سيارة ⁦Saab 9000⁩.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي مدينة إيطالية تُعد موطناً لشركة تصنيع السيارات "فيات"؟', '["تورينو","مارانيلو","مودينا","روما"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'ما هي أسرع سيارة إنتاجية مسموح قانونياً بقيادتها على الطرقات في العالم؟', '["هينيسي فينوم جي تي (⁦Hennessey Venom GT⁩)","كوينيجسيج أجيرا آر إس (⁦Koenigsegg Agera RS⁩)","بوغاتي فيرون سوبر سبورت (⁦Bugatti Veyron Super Sport⁩)","باغاني هوايرا بي سي (⁦Pagani Huayra BC⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي من الموديلات التالية ليس سيارة من إنتاج شركة بروتون (⁦Proton⁩) الماليزية؟', '["ساجا (⁦Saga⁩)","بيردانا (⁦Perdana⁩)","كيليسا (⁦Kelisa⁩)","إنسبيرّا (⁦Inspira⁩)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'ما اسم أول سيارة تعمل بالدفع الأمامي أنتجتها شركة داتسون (نيسان حالياً)‏؟', '["ساني (⁦Sunny⁩)","بلوبيرد (⁦Bluebird⁩)","سكايلاين (⁦Skyline⁩)","تشيري (⁦Cherry⁩)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي من أكواد الهيكل (الشاسيه) التالية تُستخدم لسيارات بي إم دبليو الفئة الثالثة؟', '["⁦E46⁩","⁦E39⁩","⁦E85⁩","⁦F10⁩"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'ما هي شركة إطارات السيارات الشهيرة بإنتاج إطارات "إيغل" (⁦Eagle⁩)، والمزود الرسمي لإطارات سباقات ناسكار؟', '["بيريللي","جودير","بريدجستون","ميشلان"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'أي من القطارات البريطانية التالية لا تتجاوز سرعته 125 ميلاً في الساعة؟', '["كلاس 43 (⁦Class 43⁩)","جافلين (⁦Javelin⁩)","سبرينتر (⁦Sprinter⁩)","بندولينو (⁦Pendolino⁩)"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'تعتبر ⁦BMW M GmbH⁩ شركة تابعة لـ ⁦BMW AG⁩ وتركز على إنتاج السيارات ذات الأداء الرياضي العالي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_157, 'متى تأسست شركة تسلا؟', '["2003","2008","2005","2007"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_158 uuid;
BEGIN
  SELECT id INTO v_lib_id_158 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 4' LIMIT 1;
  IF v_lib_id_158 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 4', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_158;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من موديلات السيارات التالية تم تسويقه وتغيير علامته التجارية (⁦Rebadged⁩) تحت أكبر عدد من الأسماء التجارية الأخرى؟', '["إيسوزو تروبر (⁦Isuzu Trooper⁩)","هولدن مونارو (⁦Holden Monaro⁩)","سوزوكي سويفت (⁦Suzuki Swift⁩)","شيفروليه كامارو (⁦Chevy Camaro⁩)"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما اللقب الذي أُطلق على طائرة رحلة طيران كندا رقم 143 بعد نفاد وقودها وهبوطها الشراعي بسلام في عام 1983‏؟', '["غيملي مايكرولايت (⁦Gimli Microlight⁩)","طائرة غيملي الشراعية (⁦Gimli Glider⁩)","غيملي تشيسر (⁦Gimli Chaser⁩)","غيملي سوبيرب (⁦Gimli Superb⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من علامات السيارات التالية لا تنتمي إلى شركة جنرال موتورز؟', '["بويك","كاديلاك","فورد","شيفروليه"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'لم تصنع فيراري مطلقاً محرك ⁦V10⁩ لأي من سياراتها المخصصة للطرقات.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما هي الشركة اليابانية التي تعد أكبر مصنع للدراجات النارية في العالم؟', '["هوندا","ياماها","سوزوكي","كاواساكي"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي مما يلي ليست شركة تصنيع سيارات روسية؟', '["سيلانت (⁦Silant⁩)","بي واي دي (⁦BYD⁩)","دراغون (⁦Dragon⁩)","جاز (⁦GAZ⁩)"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من سيارات رالي الاتحاد الدولي للسيارات (⁦FIA⁩) التالية تم اعتمادها للاستخدام في فئة المجموعة ب (⁦Group B⁩) أولاً؟', '["أودي كواترو ⁦A2⁩","بي إم دبليو ⁦M1⁩","بورش 911 توربو","لانشيا رالي 037"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما هي الشركة المصنعة للسيارة المستخدمة في فيلم العودة إلى المستقبل (⁦Back to the Future⁩)‏؟', '["فورد","تويوتا","ديهاتسو","ديلوريان (⁦DeLorean⁩)"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من أنظمة تجنب التصادم التالية يساعد الطائرات على تجنب الاصطدام ببعضها البعض؟', '["⁦TCAS⁩","⁦GPWS⁩","⁦OCAS⁩","⁦TAWS⁩"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما هو الحيوان الذي تتخذه شركة صناعة السيارات الإيطالية لامبورغيني شعاراً لها؟', '["الخفاش","الثور","الحصان","الأفعى"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من المركبات التالية تميزت بوجود سقف زجاجي بالكامل في طرازها الأساسي؟', '["شيفروليه فولت","مرسيدس-بنز الفئة ⁦A⁩","رينو أفانتايم","هوندا أوديسي"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما هي شركة تصنيع السيارات التي تنازلت عن براءة اختراع حزام الأمان بهدف إنقاذ الأرواح؟', '["فيراري","فورد","رينو","فولفو"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من سيارات فورد التالية سميت على اسم طائرة مقاتلة من الحرب العالمية الثانية؟', '["موستانج","إكسبلورر","رينجر","جالاكسي"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي مما يلي ليس من وظائف زيت المحرك في محركات السيارات؟', '["التزييت","الاحتراق","التبريد","تقليل التآكل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'ما هو طراز السيارة الرياضية التي أهدتها الحكومة الفرنسية ليوري غاغارين في عام 1965‏؟', '["بورش 911","ألبين ⁦A110⁩","ماترا دجيت","إيه سي كوبرا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'أي من هذه السيارات لا تعتبر واحدة من السيارات الخارقة الخمس الحديثة من فيراري؟', '["إنزو فيراري","إف 40","288 جي تي أو","تستاروسا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_158, 'كانت شركة بوغاتي مصنعاً إيطالياً للسيارات.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_159 uuid;
BEGIN
  SELECT id INTO v_lib_id_159 FROM quizzes WHERE title = 'عالم السيارات والمركبات — الجزء 5' LIMIT 1;
  IF v_lib_id_159 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم السيارات والمركبات — الجزء 5', 'تكنولوجيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_159;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'عندما تأسست شركة بي إم دبليو في عام 1916، كانت تنتج السيارات.', '["صحيح","خطأ"]'::jsonb, 1, 20, 0, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هي تقنية توقيت الصمامات المتغير التي تستخدمها شركة بي إم دبليو؟', '["⁦VVT-iw⁩","⁦VANOS⁩","⁦VVEL⁩","⁦MultiAir⁩"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'أي من قاطرات يونيون باسيفيك من طراز ''بيغ بوي'' التالية تمت إعادتها إلى الخدمة والعمل في عام 2019‏؟', '["4012","4004","4014","4000"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هو نوع القطار ''ستيبني'' على سكة حديد بلوبيل والمعروف بظهوره في ''سلسلة السكك الحديدية'' (⁦The Railway Series⁩)‏؟', '["⁦LB⁩&⁦SCR E2⁩","⁦LB⁩&⁦SCR J1⁩","⁦LB⁩&⁦SCR D1⁩","⁦LB⁩&⁦SCR A1X⁩"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'في أي دولة يتم تجميع السيارة الخارقة ''هوساريا'' التي تنتجها شركة ''أرينيرا'' لصناعة السيارات؟', '["بولندا","الصين","السويد","إيطاليا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هو رقم تسجيل آخر طائرة كونكورد تم تصنيعها؟', '["⁦F-BTSC⁩","⁦G-BOAF⁩","⁦G-BOAC⁩","⁦F-BVFF⁩"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'تتمتع شركة ميتسوبيشي موتورز بشراكة دامت 30 عاماً مع جاكي شان، حيث ظهرت سياراتهم بشكل بارز في أفلامه.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هي أول سيارة هجينة تم إنتاجها بكميات تجارية؟', '["شيفروليه فولت","هوندا فيت","بيجو 308 آر هايبرد","تويوتا بريوس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'خلال الحرب العالمية الثانية، ما هي الدبابة التي كان الحلفاء يخشونها أكثر من غيرها؟', '["بانزر-كامبف-واجن 5 بانثر","ماردر 3","ماتيلدا 2","بانزر-كامبف-واجن 6 تايجر"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هي القطع الشبيهة بالأسطوانات التي تتحرك صعوداً وهبوطاً داخل المحرك؟', '["النوابض الصفائحية","المكابس","المبردات","نظام ⁦ABS⁩"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'كم تبلغ سعة محرك ⁦LS1⁩ بالبوصة المكعبة؟', '["350","355","346","360"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هي أول سيارة تم تزويدها بنظام تكييف الهواء كميزة قياسية من المصنع؟', '["تاكر","فورد","هادسن","باكارد"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'أين يتم تصنيع سيارات العلامة التجارية ''فيراري''؟', '["إيطاليا","رومانيا","ألمانيا","روسيا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'أي من طائرات الركاب النفاثة التالية هي الأطول؟', '["إيرباص ⁦A350-1000⁩","بوينغ 747-8","إيرباص ⁦A330-200⁩","بوينغ 787-10"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'هل مصطلح ''⁦GTO⁩'' نشأ في الأصل من شركة فيراري؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'الاسم الإنجليزي الكامل لشركة تصنيع السيارات بي إم دبليو (⁦BMW⁩) هو ''⁦Bavarian Motor Works⁩''.', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_159, 'ما هي شركة السيارات التي كانت تملك شركة جاغوار سابقاً؟', '["فورد","كرايسلر","جنرال موتورز","فيات"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_160 uuid;
BEGIN
  SELECT id INTO v_lib_id_160 FROM quizzes WHERE title = 'شعراء أهل البيت والشعر العربي — الجزء 1' LIMIT 1;
  IF v_lib_id_160 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شعراء أهل البيت والشعر العربي — الجزء 1', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_160;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'أيُّ شاعر لُقِّب بـ''حسّان أهل البيت'' لكثرة مدحه ورثائه للأئمة عليهم السلام؟', '["الكميت بن زيد الأسدي","دعبل الخزاعي","السيد الحميري","أبو فراس الحمداني"]'::jsonb, 2, 25, 0, 'multi', 'السيد إسماعيل بن محمد الحميري لُقِّب بـ''حسّان أهل البيت'' لغزارة شعره في مدح النبي وآله وبلغت قصائده في أهل البيت أكثر من ألفَي بيت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الذي رثى الإمام الحسين (ع) بقصيدته الشهيرة ''مدارس آيات خلت من تلاوة'' ودفع ثمن ذلك نفياً وملاحقةً من السلطة العباسية؟', '["الكميت بن زيد الأسدي","دعبل الخزاعي","ابن الرومي","مهيار الديلمي"]'::jsonb, 1, 25, 1, 'multi', 'دعبل بن علي الخزاعي قال قصيدته ''التائية'' الشهيرة التي مطلعها ''مدارس آيات'' بحضور الإمام الرضا (ع)، وعاش خائفاً من بطش السلطة طوال حياته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'ما البيت الأول من قصيدة الكميت بن زيد الأسدي الشهيرة في مدح آل البيت المعروفة بـ''الهاشميات''؟', '["''طربتُ وما شوقاً إلى البِيض أطربُ ولا لعباً منّي وذو الشيب يلعبُ''","''أبكي النبيَّ محمداً وبكائيَ حرٌّ على الأحشاء منه مقيمُ''","''مدارسُ آياتٍ خلَت من تلاوةٍ ومنزلُ وحيٍ مقفرُ العرصاتِ''","''لا أرى في الوجود مثل عليٍّ جامعاً للفضائل الغرّاءِ''"]'::jsonb, 0, 25, 2, 'multi', 'هذا المطلع الشهير للكميت بن زيد في أولى قصائد الهاشميات، إذ يُبرر طربه لا بالنساء والعبث بل بحبه لآل بيت النبي (ص).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي المعروف بـ''شاعر العقيدة'' الذي أبدع في رثاء الإمام علي (ع) بقصيدته الشهيرة ''يا صاح هل حمّت لديك رحيل''؟', '["دعبل الخزاعي","السيد حيدر الحلي","الشريف الرضي","محمد مهدي الجواهري"]'::jsonb, 1, 25, 3, 'multi', 'السيد حيدر الحلي (ت1304هـ) شاعر شيعي عراقي برز في رثاء أهل البيت وله قصائد طويلة في رثاء الإمام علي والحسين (ع) تُعدّ من عيون الشعر الشيعي الحديث.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'ما اسم القصيدة الشهيرة للشاعر الكبير محمد مهدي الجواهري التي رثى فيها أخاه جعفر الذي قُتل خلال أحداث وثبة عام 1948 في العراق؟', '["أخي جعفر","ثأرٌ لجعفر","يا جعفرُ الطيّار","أيها الثائر"]'::jsonb, 0, 25, 4, 'multi', 'قصيدة ''أخي جعفر'' للجواهري من أشهر قصائد الرثاء والثورة في الشعر العربي الحديث، رثى فيها أخاه الذي استُشهد في وثبة يناير 1948 ببغداد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'أيُّ الشعراء الشيعة المعاصرين اشتُهر بلقب ''شاعر الطف'' وكان من أبرز شعراء العزاء في القرن العشرين، وله ديوان ''الدمعة الساكبة''؟', '["الشيخ كاظم آل نوح","السيد محمد سعيد الحبوبي","الشيخ جعفر الهلالي","السيد محسن الأمين"]'::jsonb, 0, 25, 5, 'multi', 'الشيخ كاظم آل نوح شاعر شيعي بحريني-خليجي اشتُهر بقصائد الرثاء الحسيني وأُطلق عليه لقب ''شاعر الطف''، وتُنشد قصائده في مجالس العزاء حتى اليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'ما اسم الشاعر الذي لُقِّب بـ''بحتري الشيعة'' لجمال أسلوبه وسلاسة قصائده في مدح آل البيت (ع)، وهو من شعراء القرن الثالث الهجري؟', '["دعبل الخزاعي","السيد الحميري","ابن الرومي","منصور النمري"]'::jsonb, 0, 25, 6, 'multi', 'دعبل الخزاعي اشتُهر بجمال شعره ورقّته في مدح الأئمة حتى شُبِّه بالبحتري في الأسلوب، وقصيدته ''مدارس آيات'' من أشهر قصائده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'أيُّ شاعر من شعراء أهل البيت (ع) في العصر الحديث عُرف بقصيدته الشهيرة ''لله درّ الشمّر'' في رثاء الإمام الحسين (ع) وكان من علماء جبل عامل؟', '["الشيخ محمد حسين الأصفهاني","السيد محسن الأمين","الشيخ جعفر شرف الدين","الشيخ محمد علي يعقوب"]'::jsonb, 2, 25, 7, 'multi', 'الشيخ جعفر شرف الدين العاملي من أبرز شعراء الرثاء الحسيني في جبل عامل، وقصائده في الإمام الحسين (ع) مشهورة في الأوساط العلمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر العباسي الشيعي الذي اشتُهر بمدح الأئمة الاثني عشر ورثائهم، ولُقِّب بـ''أبي الحسن'' وله قصيدة شهيرة مطلعها ''أبكي لآل النبي بدمع سرب''؟', '["دعبل الخزاعي","السيد الحميري","الكميت بن زيد","مهيار الديلمي"]'::jsonb, 0, 25, 8, 'multi', 'دعبل الخزاعي (ت 246هـ) من أبرز شعراء أهل البيت في العصر العباسي، واشتُهر بجرأته في الهجاء السياسي والمديح العلوي، وقصيدته ''التائية'' من أشهر قصائده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'ما اسم القصيدة الذهبية الشهيرة للسيد الحميري التي مدح فيها الإمام علي (ع) ومطلعها ''أمِن آل مية رائحٌ أو مغتدِ''، ومنها اقتبس كثير من الشعراء الشيعة؟', '["القصيدة الهائية","القصيدة المذهّبة","القصيدة العلوية","الرائية الكبرى"]'::jsonb, 1, 25, 9, 'multi', 'القصيدة المذهّبة للسيد الحميري (ت 173هـ) من أشهر قصائد المديح العلوي، لُقِّبت بهذا الاسم لنفاستها كالذهب، وروى عنها ابن الأثير وغيره من المؤرخين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''شاعر الغري'' لكثرة مدائحه ورثائه للإمام علي (ع) في مدينة النجف، وله قصيدة شهيرة مطلعها ''علّمتني الحياة كيف أناضل''؟', '["الشيخ كاظم الأزري","الشيخ صالح الكواز الحلي","السيد رضا الهندي","محمد سعيد الحبوبي"]'::jsonb, 3, 25, 10, 'multi', 'الحبوبي عالم وشاعر نجفي بارز لُقِّب بشاعر الغري لإقامته ومدائحه المتعددة في حرم الإمام علي بالنجف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر اللبناني الشيعي صاحب الديوان المشهور ''أغاني المحراب'' والذي عُرف بقصائده الوجدانية الراقية في مدح الرسول (ص) وآل البيت (ع) في القرن العشرين؟', '["سعيد عقل","جوزيف حرب","شفيق المعلوف","ميشيل طراد"]'::jsonb, 2, 25, 11, 'multi', 'شفيق المعلوف شاعر لبناني أبدع في قصائد المديح النبوي وآل البيت ومن أبرز ما نُسب إليه ديوان أغاني المحراب ذو الطابع الروحاني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''شاعر أهل البيت'' في العراق، وصاحب القصيدة الشهيرة ''يا صاحب القبة البيضاء في النجف'' التي تُنشد حتى اليوم في المجالس الحسينية؟', '["السيد جعفر الحلي","الشيخ كاظم الأزري","السيد حيدر الحلي","السيد مهدي بحر العلوم"]'::jsonb, 2, 25, 12, 'multi', 'السيد حيدر الحلي (1246-1304هـ) شاعر شيعي عراقي كبير، اشتُهر برثائياته الحسينية العميقة ومدائح أهل البيت، ومن أشهر قصائده تلك المخصصة للإمام علي (ع) في النجف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'أيُّ قصيدة للشاعر دعبل بن علي الخزاعي تُعدّ من أشهر قصائد الرثاء والسياسة الشيعية، وقد أنشدها أمام الإمام علي بن موسى الرضا (ع) فبكى الإمام عند سماعها؟', '["مدارس آيات خلت من تلاوة","رأيت الفضل في حب الحسين","أبكي لآل النبي بدمع سرب","أما والذي أبكى وأضحك والذي"]'::jsonb, 0, 25, 13, 'multi', 'قصيدة دعبل الخزاعي الشهيرة ''مدارس آيات خلت من تلاوة'' أنشدها أمام الإمام الرضا (ع) في خراسان، فبكى الإمام وأجازه عليها بثوبه المبارك.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''حسّان أهل البيت'' لكثرة مدائحه للأئمة (ع)، والذي عاش في العصر العباسي وكان على صلة وثيقة بالإمام الصادق (ع)‏؟', '["السيد الحميري","الكميت بن زيد الأسدي","دعبل الخزاعي","أبو تمام الطائي"]'::jsonb, 1, 25, 14, 'multi', 'الكميت بن زيد الأسدي (60-126هـ) لُقّب بـ''حسّان أهل البيت'' لغزارة مدائحه في الأئمة، وهاشمياته الشهيرة تُعدّ ذروة الشعر الشيعي في العصر الأموي-العباسي المبكر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'أيُّ شعراء أهل البيت (ع) هو صاحب القصيدة الميمية الشهيرة المعروفة بـ''التائية الكبرى'' أو ''العلوية الكبرى'' التي بلغت نحو مئة بيت في مدح الإمام علي (ع)، وقد عاش في القرن الثالث الهجري؟', '["السيد الحميري","دعبل الخزاعي","ابن الرومي","أبو فراس الحمداني"]'::jsonb, 1, 25, 15, 'multi', 'دعبل بن علي الخزاعي (148-246هـ) اشتُهر بقصائده الطويلة في مدح آل البيت ورثائهم، ومن أشهر قصائده الميمية والتائية في علي (ع) التي رواها عنه تلاميذه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي العراقي الكبير صاحب قصيدة ''أقرأ الفاتحة يا عين'' التي تُعدّ من أشهر القصائد الحسينية في القرن العشرين، وقد لُقّب بـ''شاعر الحسين'' لإكثاره من رثاء سيد الشهداء (ع)‏؟', '["محمد مهدي الجواهري","كاظم إسماعيل الكاظمي","عبد المحسن الكاظمي","محمد سعيد الحبوبي"]'::jsonb, 3, 25, 16, 'multi', 'محمد سعيد الحبوبي (ت 1333هـ) فقيه وشاعر نجفي لُقّب بـ''شاعر الحسين'' لغزارة إنتاجه الرثائي في آل البيت (ع).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي الكبير من القرن الرابع الهجري المعروف بـ''أبي فراس الحمداني'' صاحب القصائد العلوية، وله قصيدة شهيرة مطلعها ''أراك عصيَّ الدمع'' التي نظمها وهو أسير في بيزنطة؟', '["أبو فراس الحمداني","الشريف الرضي","ابن هانئ الأندلسي","المتنبي"]'::jsonb, 0, 25, 17, 'multi', 'أبو فراس الحمداني (320-357هـ) أمير شاعر حمداني شيعي، ونظم ''الروميات'' أثناء أسره، وتُعدّ قصيدة ''أراك عصيَّ الدمع'' من أشهر قصائد الغزل العربي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''شاعر العلويين'' في العصر العباسي، والذي كان من أشد المناصرين لآل البيت شعراً، وله قصيدة مشهورة في رثاء الحسين (ع) مطلعها ''ألا يا عين ويحكِ أسعِدينا''؟', '["الكميت بن زيد الأسدي","السيد الحميري","أبو تمام الطائي","منصور النمري"]'::jsonb, 0, 25, 18, 'multi', 'الكميت بن زيد الأسدي هو صاحب ''الهاشميات'' الشهيرة وأبرز شعراء التشيع في العصر الأموي والعباسي المبكر، ولُقّب بشاعر آل البيت لمناصرته المتحمسة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_160, 'الشاعر السيد رضا الهندي، صاحب قصيدة ''لمن الشمس مشرقاً والضياء''، يُعدّ من أبرز شعراء أهل البيت (ع) في العراق في القرن التاسع عشر الميلادي، وله ديوان شعر كبير في مدح ورثاء الأئمة.', '["صح","خطأ"]'::jsonb, 0, 25, 19, 'boolean', 'السيد رضا الهندي (1849-1927م) من أبرز شعراء أهل البيت العراقيين ومن أكثرهم إنتاجاً في المدح والرثاء الحسيني، وديوانه يزخر بالقصائد الدينية الرفيعة.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_161 uuid;
BEGIN
  SELECT id INTO v_lib_id_161 FROM quizzes WHERE title = 'شعراء أهل البيت والشعر العربي — الجزء 2' LIMIT 1;
  IF v_lib_id_161 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('شعراء أهل البيت والشعر العربي — الجزء 2', 'سلسلة مسابقات أهل البيت (ع)', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_161;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير من القرن العاشر الهجري، المعروف بـ''المحقق الكركي الشاعر''، والذي يُعدّ من أبرز من نظم شعراً في مدح أهل البيت (ع) في العهد الصفوي، وله مدائح رفيعة في الإمام علي (ع)‏؟', '["المحقق الكركي علي بن عبد العالي","الشيخ البهائي محمد بن الحسين","ابن أبي الحديد المعتزلي","السيد نعمة الله الجزائري"]'::jsonb, 1, 25, 0, 'multi', 'الشيخ البهاء الدين العاملي (ت 1030هـ) اشتُهر بجمعه بين الفقه والشعر الديني في مدح أهل البيت (ع) في عصر الدولة الصفوية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي البحريني المعروف في القرن الثالث عشر الهجري، الملقَّب بـ''شاعر البحرين''، وله ديوان كبير في مدح أهل البيت (ع) ورثائهم، وكان من تلامذة العلماء في الحوزة العلمية؟', '["الشيخ عبد الله الجشي","السيد حسين القزويني","الشيخ محمد صالح بن طعان البحراني","الشيخ يوسف البحراني صاحب الحدائق"]'::jsonb, 2, 25, 1, 'multi', 'الشيخ محمد صالح بن طعان البحراني (ت 1258هـ) من أبرز شعراء البحرين في مدح ورثاء أهل البيت (ع) وله ديوان مطبوع يشهد بمكانته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''حسّان أهل البيت'' لكثرة مدائحه ورثائه للأئمة (ع)، وهو من شعراء القرن الثالث الهجري، وكان يتكسّب بشعره في مجالس العلويين ببغداد؟', '["دعبل الخزاعي","الكميت بن زيد الأسدي","السيد الحميري","أبو تمام الطائي"]'::jsonb, 0, 25, 2, 'multi', 'دعبل الخزاعي (ت 246هـ) لُقّب بـ''حسّان أهل البيت'' لإكثاره من مدحهم ورثائهم، وقصيدته ''مدارس آيات'' من أشهر القصائد العلوية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'الشاعر الكميت بن زيد الأسدي هو أول من نظم قصائد طويلة متكاملة في مدح آل البيت (ع) تُعرف بـ''الهاشميات''، وكان يتخفّى في نشرها خوفاً من بني أمية.', '["صح","خطأ"]'::jsonb, 0, 25, 3, 'boolean', 'الكميت (ت 126هـ) نظم ''الهاشميات'' في مدح بني هاشم وآل البيت، وكان يخاطر بحياته لذلك في عهد الأمويين، وقد مدحه الإمام الباقر (ع) ودعا له.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي المعروف بـ''شاعر الغري''، الذي أقام قرب مرقد الإمام علي (ع) في النجف وكرّس شعره كلّه لمدح أمير المؤمنين ورثاء الحسين (ع)، وتوفي في القرن الثالث عشر الهجري؟', '["السيد حيدر الحلي","محمد سعيد الحبوبي","السيد جعفر الحلي","الشيخ محمد مهدي الخالصي"]'::jsonb, 0, 25, 4, 'multi', 'السيد حيدر الحلي (1246-1304هـ) اشتُهر بـ''شاعر الغري'' لإقامته الدائمة قرب العتبة العلوية ولكثرة مدائحه ورثائه لأهل البيت (ع).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'الشاعر دعبل بن علي الخزاعي من أشهر شعراء أهل البيت (ع) في العصر العباسي، وله قصيدة تائية مشهورة مطلعها ''مدارس آيات خلت من تلاوةٍ''، فماذا تُسمّى هذه القصيدة؟', '["قصيدة المدارس","التائية الكبرى أو قصيدة التائية","الهاشميات","قصيدة العلويين"]'::jsonb, 1, 25, 5, 'multi', 'قصيدة دعبل الخزاعي المشهورة بالتائية الكبرى مطلعها ''مدارس آيات خلت من تلاوة''، وقد أنشدها للإمام الرضا (ع) الذي أجازه عليها بخلعته الشريفة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير من القرن الثاني الهجري، المعروف بـ''السيد الحِميَري''، والذي يُعدّ من أغزر شعراء مدح أهل البيت (ع) إنتاجاً، وكان من المؤمنين بعقيدة الرجعة؟', '["إسماعيل بن محمد الحِميَري","الكميت بن زيد الأسدي","أبو تمام حبيب بن أوس","منصور النمري"]'::jsonb, 0, 25, 6, 'multi', 'إسماعيل بن محمد الحِميَري (ت 173هـ) لقّبه العلماء بـ''السيد'' لشدة تمسكه بولاء أهل البيت، وقيل إن شعره بلغ ألفي قصيدة وكان من المؤمنين بالرجعة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي المعروف بـ''ابن الرومي''، صاحب الديوان الضخم الذي يضم آلاف الأبيات، والذي عُرف بمدائحه لآل البيت (ع) ورثائه للإمام الحسين (ع) ضمن شعره الوجداني الواسع؟', '["علي بن العباس بن جريج","البحتري الوليد بن عبيد","أبو نواس الحسن بن هانئ","ابن المعتز عبدالله"]'::jsonb, 0, 25, 7, 'multi', 'ابن الرومي هو علي بن العباس بن جريج (ت 283هـ)، من أكبر شعراء العصر العباسي، وله مراثٍ وجدانية عميقة في آل البيت (ع) ضمن ديوانه الضخم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''شاعر أهل البيت'' في العصر الأموي، والذي كان يتنقّل بين المدينة والكوفة ينشد مراثيه في الحسين (ع)، وقد هدده الحجاج بن يوسف الثقفي بسبب شعره الولائي؟', '["الفرزدق بن غالب","سليمان بن قتّة التيمي","عوف بن عبدالله الأحمر","مسكين الدارمي"]'::jsonb, 1, 25, 8, 'multi', 'سليمان بن قتّة التيمي من أوائل شعراء الرثاء الحسيني في العصر الأموي وقد عُرضت حياته للخطر بسبب قصائده.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر اللبناني الشيعي المعاصر الملقَّب بـ''شاعر المقاومة''، صاحب القصيدة الشهيرة ''إلى أمّي'' وقصائد عديدة في رثاء شهداء جنوب لبنان ومدح أهل البيت (ع)‏؟', '["محمد مهدي الجواهري","جوزيف حرب","محمد حسين بزّي","شوقي بزيع"]'::jsonb, 2, 25, 9, 'multi', 'محمد حسين بزّي شاعر لبناني شيعي معاصر اشتُهر بقصائده الولائية ومراثيه لأهل البيت (ع) وقصائد المقاومة في جنوب لبنان.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''حسّان أهل البيت'' لكثرة مدائحه ومراثيه في آل النبي (ص)، والذي عاش في العصر العباسي وكان مقرّباً من الإمام الرضا (ع)، وله قصيدة مشهورة في رثاء الإمام الحسين (ع) مطلعها ''أفاطم لو خلتِ الحسين مجدّلاً''؟', '["دعبل الخزاعي","أبو تمام الطائي","الكميت بن زيد الأسدي","منصور النمري"]'::jsonb, 0, 25, 10, 'multi', 'دعبل الخزاعي لُقِّب بـ''حسّان أهل البيت'' لغزارة شعره في مدحهم ورثائهم، وهو صاحب القصيدة الشهيرة التي أنشدها للإمام الرضا (ع).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'في الشعر الشيعي الكلاسيكي، مَن هو شاعر القرن السادس الهجري الملقَّب بـ''أبو فراس الحمدانيّ الثاني'' لشجاعته وفروسيته في شعره، وهو في الوقت ذاته من أبرز شعراء مدح آل البيت (ع) في بلاد الشام، وله ديوان مشهور في رثاء الحسين (ع)‏؟', '["ابن أبي الحديد المعتزلي","الشريف الرضي","ابن المعتز","القاضي ابن قيس الرافعي"]'::jsonb, 1, 25, 11, 'multi', 'الشريف الرضي أبو الحسن محمد الموسوي من أبرز شعراء القرن الرابع الهجري، وهو جامع نهج البلاغة وصاحب ديوان شعري ضخم في مدح أهل البيت ورثائهم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي العراقي الكبير من القرن العشرين، الملقَّب بـ''شاعر الكربلائيات''، صاحب القصيدة الشهيرة ''يا ربّ هل يعلو على الطفّ بناء'' والتي تُعدّ من أعظم القصائد الحسينية في الأدب العربي الحديث؟', '["محمد مهدي الجواهري","السيد محمد سعيد الحبوبي","الشيخ كاظم الأزري","السيد رضا الهندي"]'::jsonb, 3, 25, 12, 'multi', 'السيد رضا الهندي (ت 1362هـ) شاعر نجفي كبير اشتُهر بكربلائياته الحسينية ومنها قصيدته الشهيرة التي مطلعها ''يا ربّ هل يعلو على الطفّ بناء''.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'في الشعر الشيعي الكلاسيكي، مَن هو الشاعر الملقَّب بـ''ابن الحجاج البغدادي'' الذي اشتُهر بمدائحه الصريحة لأهل البيت (ع) وهجائه الحاد لأعدائهم في العصر البويهي، وكان شعره يجمع بين الغزل والمديح والهجاء في قالب فكاهي لاذع؟', '["محمد بن همّام الإسكافي","أبو عبدالله الحسين بن أحمد بن الحجاج","الشريف المرتضى","مهيار الديلمي"]'::jsonb, 1, 25, 13, 'multi', 'ابن الحجاج البغدادي (ت 391هـ) شاعر بويهي مشهور بأسلوبه الساخر واللاذع في مدح آل البيت وهجاء أعدائهم، وديوانه من أطرف الدواوين الشيعية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير صاحب القصيدة الشهيرة ''لك الله من مظلوم كل عشيّة'' في رثاء الإمام الحسين (ع)، والملقَّب بـ''شاعر العلويين'' في العصر العباسي، وكان يُقيم في الكوفة ويُعدّ من أخصّ شعراء أهل البيت (ع) في القرن الثالث الهجري؟', '["دعبل الخزاعي","الكميت بن زيد الأسدي","السيد الحميري","أبو تمام الطائي"]'::jsonb, 0, 25, 14, 'multi', 'دعبل الخزاعي (توفي 246هـ) شاعر شيعي متعصب لآل البيت، صاحب قصيدة ''مدارس آيات'' الشهيرة، وكان مقرّباً من الإمام الرضا (ع) الذي أعطاه خلعةً من ثيابه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر البحريني المعاصر الملقَّب بـ''شاعر الخليج'' والمعروف بقصائده الوجدانية التي تمزج بين الموروث الشعبي الخليجي والفصحى الرفيعة، وله ديوان شهير بعنوان ''على مرافئ الحب''؟', '["قاسم حداد","إبراهيم العريض","علي الشرقاوي","أحمد محمد الخليفة"]'::jsonb, 0, 25, 15, 'multi', 'قاسم حداد شاعر بحريني بارز يُعدّ من أبرز أصوات الشعر الحديث في الخليج، واشتُهر بتجديده للقصيدة العربية مع احتفاظه بجذوره الخليجية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير من القرن الرابع الهجري، صاحب قصيدة ''العلويات السبع'' الشهيرة في مدح أمير المؤمنين علي (ع) وآل البيت، والذي عاش في كنف الدولة الحمدانية وكان نديماً لسيف الدولة الحمداني؟', '["أبو فراس الحمداني","المتنبي","الشريف الرضي","ابن هانئ الأندلسي"]'::jsonb, 3, 25, 16, 'multi', 'ابن هانئ الأندلسي (ت362هـ) شاعر فاطمي كبير لُقّب بـ''متنبّي المغرب''، وعُرف بمدائحه الغالية في الخلفاء الفاطميين وفي آل البيت (ع)، ومن أشهر قصائده العلويات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر الشيعي الكبير الملقَّب بـ''شاعر أهل البيت'' في العصر الصفوي، صاحب القصيدة المشهورة ''سلام على أهل القبور من الغري'' والتي تُعدّ من أجمل القصائد في رثاء الإمام علي (ع)، وكان من أبرز شعراء البلاط الصفوي في القرن العاشر الهجري؟', '["المحتشم الكاشاني","الصفي الحلي","ابن العودي النجفي","فضولي البغدادي"]'::jsonb, 0, 25, 17, 'multi', 'المحتشم الكاشاني (ت. 996 هـ) هو أبرز شعراء أهل البيت في العصر الصفوي، واشتُهر بـ''الترکیب‌بند'' الحسيني الذي يقع في اثني عشر مقطعاً ويُنشد في إيران حتى اليوم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'في الشعر الحسيني الكلاسيكي، مَن هو صاحب القصيدة الشهيرة التي مطلعها ''أقول لصاحبٍ لي في الثرى دُفِنا'' والتي رثى فيها الإمام الحسين (ع) وصحبه رثاءً مؤثراً، وهو شاعر عراقي من القرن الثالث الهجري عُرف بصدق عاطفته الولائية؟', '["دعبل الخزاعي","الكميت الأسدي","السيد الحميري","أبو تمام الطائي"]'::jsonb, 0, 25, 18, 'multi', 'دعبل الخزاعي (ت. 246 هـ) هو أبرز شعراء أهل البيت في العصر العباسي، وقصيدته ''مدارس آيات'' من أشهر القصائد الولائية التي أنشدها أمام الإمام الرضا (ع).', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_161, 'مَن هو الشاعر العراقي الكبير الملقَّب بـ''حسّان أهل البيت'' في القرن العشرين، صاحب الديوان الضخم في رثاء الإمام الحسين (ع) والمعروف بقصيدته التي مطلعها ''وامعتصماه انطلقت ملء أفواه''، والذي يُعدّ من أبرز شعراء المنبر الحسيني في العراق الحديث؟', '["الشيخ محمد مهدي الجواهري","السيد حيدر الحلي","الشيخ كاظم آل نوح","السيد جعفر الحلي"]'::jsonb, 1, 25, 19, 'multi', 'السيد حيدر الحلي (ت 1304هـ) من أبرز شعراء أهل البيت في القرن التاسع عشر وأُطلق عليه لقب ''حسان أهل البيت'' لكثرة مراثيه الحسينية البليغة.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_162 uuid;
BEGIN
  SELECT id INTO v_lib_id_162 FROM quizzes WHERE title = 'عالم الأنمي والكرتون — الجزء 1' LIMIT 1;
  IF v_lib_id_162 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم الأنمي والكرتون — الجزء 1', 'أنمي', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_162;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''كابتن ماجد'' (⁦Captain Tsubasa⁩)، ما اسم الفريق الياباني الذي ينتمي إليه ماجد في المراحل الأولى من المسلسل؟', '["فريق طوكيو","فريق ناينتس","فريق نانكاتسو","فريق أوساكا"]'::jsonb, 2, 25, 0, 'multi', 'ماجد (تسوباسا أوزورا) ينتمي إلى فريق نانكاتسو المدرسي الذي يُعدّ قاعدته الأولى في رحلته نحو كرة القدم الاحترافية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في مسلسل ''سيلور مون'' (⁦Sailor Moon⁩)، ما اسم القمر الخيالي الذي تنحدر منه أميرة سيرينيتي وهو مملكة المحاربات؟', '["مملكة كريستال طوكيو","مملكة المملكة الفضية","مملكة هيليوس","مملكة كريستال طوكيو الجديدة"]'::jsonb, 1, 25, 1, 'multi', 'تنتمي الأميرة سيرينيتي (أساغي تسوكينو) إلى ''المملكة الفضية'' (⁦Silver Millennium⁩) الواقعة على القمر، وهي حضارة قديمة دُمِّرت في حرب كونية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''دراغون بول ⁦Z⁩''، ما اسم الكوكب الأصلي لجنس السايانز الذي دمّره فريزا خوفاً منهم؟', '["كوكب نامك","كوكب فيجيتا","كوكب زينو","كوكب أرليان"]'::jsonb, 1, 25, 2, 'multi', 'كوكب فيجيتا (⁦Planet Vegeta⁩) هو الكوكب الأصلي لجنس السايانز، دمّره فريزا لخشيته من قوتهم المتنامية، وكان غوكو (كاكاروت) قد أُرسل إلى الأرض قبل التدمير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''هجوم العمالقة'' (⁦Attack on Titan⁩)، ما اسم القوة الخاصة التي يمتلكها إيرين ييغر والتي تُمكّنه من التحوّل إلى عملاق والتحكم في العمالقة النقيين؟', '["عملاق المدرّع","عملاق الهجوم","عملاق التيتان الأساسي","عملاق المؤسِّس"]'::jsonb, 3, 25, 3, 'multi', 'عملاق المؤسِّس (⁦Founding Titan⁩) هو القوة الأعظم التي ورثها إيرين، وتُمكّنه من التحكم في العمالقة النقيين وذاكرة أبناء يمير، وهي محور الأحداث الرئيسي في الجزء الأخير.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''ون بيس'' (⁦One Piece⁩)، ما اسم السجن البحري المحصّن الذي يقع تحت الماء وأقدم على اقتحامه مونكي دي لوفي لإنقاذ أخيه إيس؟', '["إمبل داون","إنيس لوبي","ماريفورد","روكي بورت"]'::jsonb, 0, 25, 4, 'multi', 'إمبل داون هو السجن الحكومي المرعب الواقع تحت الماء، اقتحمه لوفي في قوس إنقاذ إيس من الإعدام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''ناروتو'' (⁦Naruto⁩)، ما اسم التقنية التي ابتكرها الجيل الرابع هوكاجي مينامين نامي كازي وأودت بحياته عند إبعاد مخلب الثعلب التسعة الأذناب؟', '["هيراشين نو جوتسو","راسينغان","كاجي ريو","أماتيراسو"]'::jsonb, 0, 25, 5, 'multi', 'هيراشين نو جوتسو أو ''تقنية برق النار'' هي جوتسو الانتقال الفوري الذي اشتُهر به الهوكاجي الرابع مينامين وتمكّن به من إنقاذ القرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''فولميتال ألكيميست: برذرهود'' (⁦Fullmetal Alchemist Brotherhood⁩)، ما اسم الخطيئة المجسَّدة التي تمثّل ''الكسل'' وتستطيع النوم لفترات طويلة جداً؟', '["غريد (⁦Greed⁩)","سلوث (⁦Sloth⁩)","إنفي (⁦Envy⁩)","غلوتوني (⁦Gluttony⁩)"]'::jsonb, 1, 25, 6, 'multi', 'سلوث يمثّل خطيئة الكسل في المسلسل، وهو من أضخم الخطايا المجسّدة جسماً وأبطأها بسبب طبيعته الكسولة رغم قوّته الهائلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''يو-غي-أوه!'' (⁦Yu-Gi-Oh⁩!) الأصلي، ما اسم اللعبة الإلكترونية المصغّرة التي كان البطل يوغي يحملها وتضمّنت الروح القديمة للفرعون؟', '["الشطرنج الملكي","مكعب المليونير","لغز الألف وجه (⁦Millennium Puzzle⁩)","درع المحارب"]'::jsonb, 2, 25, 7, 'multi', '⁦Millennium Puzzle⁩ هو القطعة الذهبية المثلثة التي أمضى يوغي موتو ثماني سنوات في تجميعها، وكانت تحمل روح الفرعون أتيم وهي أصل قوّته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''ديث نوت'' (⁦Death Note⁩)، ما اسم المحقق الشهير الغامض الذي تصدّى للكشف عن هوية كيرا وكان يجلس بطريقة غريبة ويُحبّ الحلوى بشكل مفرط؟', '["⁦Near⁩","⁦Mello⁩","⁦L Lawliet⁩","⁦Light Yagami⁩"]'::jsonb, 2, 25, 8, 'multi', '⁦L Lawliet⁩ هو المحقق العبقري في ⁦Death Note⁩ الذي عرف باسم ''⁦L⁩'' فقط، ويتميز بجلسته الغريبة وشغفه الاستثنائي بالسكريات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''سيلور مون'' (⁦Sailor Moon⁩) الكلاسيكي، ما اسم الفيلق الشرير الرئيسي في الجزء الأول من الأنمي الذي كان يسعى للحصول على طاقة البشر بأوامر الملكة بيريل؟', '["⁦Death Busters⁩","⁦Dead Moon Circus⁩","⁦Dark Kingdom⁩","⁦Shadow Galactica⁩"]'::jsonb, 2, 25, 9, 'multi', 'المملكة المظلمة (⁦Dark Kingdom⁩) بقيادة الملكة بيريل هي التنظيم الشرير الرئيسي في الجزء الأول من سيلور مون الكلاسيكي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''هجوم العمالقة'' (⁦Attack on Titan⁩)، ما اسم الفيلق الاستكشافي الذي ينضمّ إليه إيرين ييغر بعد تخرّجه ويُعدّ الأكثر تضحيةً بالأرواح بين فيالق الجيش؟', '["فيلق الحراسة","فيلق الشرطة العسكرية","فيلق الاستطلاع","فيلق حرّاس الجدار"]'::jsonb, 2, 25, 10, 'multi', 'فيلق الاستطلاع (⁦Survey Corps⁩) هو الفيلق الذي يخرج خارج الأسوار لمواجهة العمالقة واستكشاف الأراضي الخارجية، وانضمّ إليه إيرين بعد تخرجه باختياره الواعي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''كود غياس'' (⁦Code Geass⁩)، ما اسم القوة الخارقة التي يمتلكها ليلوش لامبيروج والتي تمكّنه من إصدار أوامر مطلقة يلتزم بها أي شخص ينظر في عينيه مرة واحدة؟', '["القوة الجيّاشة (⁦Geass⁩)","الهالة الملكية (⁦Royal Aura⁩)","قوة الغاسق (⁦Geas Power⁩)","العين الحمراء (⁦Crimson Eye⁩)"]'::jsonb, 0, 25, 11, 'multi', 'الـ ⁦Geass⁩ هي القوة الخارقة التي منحها ⁦C.C⁩. لليلوش، تُمكّنه من إصدار أمر واحد لا يُقاوَم لكل شخص تقع عليه عينه لأول مرة، وهي محور القصة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''نانا'' (⁦NANA⁩) الياباني الشهير، ما اسم الفرقة الموسيقية البانك التي تُغنّي فيها نانا أوساكي وتسعى لتحقيق النجاح في طوكيو؟', '["⁦BLAST⁩","⁦TRAPNEST⁩","⁦BLACK STONES⁩","⁦LUNACY⁩"]'::jsonb, 2, 25, 12, 'multi', 'فرقة ⁦BLAST⁩ أو ⁦BLACKSTONES⁩ هي الفرقة البانك التي تُغنّي فيها نانا أوساكي بصوتها القوي، وتسعى معها للوصول إلى الشهرة في طوكيو بالتوازي مع قصة نانا كوماتسو.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''ون بيس'' (⁦One Piece⁩)، ما اسم أسلوب القتال الذي يستخدمه روفي في شكله المتقدم ''غير الرابع'' (⁦Gear Fourth⁩) حيث يضخّ الهواء في عضلاته ويتحوّل إلى شكل ضخم مرن يشبه المطاط الملتهب؟', '["⁦Boundman⁩","⁦Snakeman⁩","⁦Tankman⁩","⁦Bounceman⁩"]'::jsonb, 0, 25, 13, 'multi', '⁦Boundman⁩ هو الشكل الأساسي والأول لـ ⁦Gear Fourth⁩ الذي ظهر في معركة دريسروزا ضد دوفلامينغو، ويتميز بجسم ضخم منتفخ وقدرة على التحرك السريع.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''ناروتو'' (⁦Naruto⁩)، ما اسم التقنية الأسطورية التي يستخدمها ناروتو أوزوماكي لاستدعاء عدد هائل من نسخه المستنسخة في وقت واحد، وتُعدّ من أقوى تقنياته في الجزء الأول؟', '["كاجي بوشين نو جوتسو","راسينغان","سيكي تسوشين","أوموي نو جوتسو"]'::jsonb, 0, 25, 14, 'multi', 'كاجي بوشين نو جوتسو (⁦Multi Shadow Clone Jutsu⁩) هي تقنية استنساخ الظل الجماعي التي تعلّمها ناروتو من لفافة المحظور وتميّز بها عن غيره من الشينوبي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_162, 'في أنمي ''كاودبوي بيبوب'' (⁦Cowboy Bebop⁩) الكلاسيكي، ما اسم السفينة التي يستخدمها سبايك سبيغل وشركاؤه قاعدةً للعمليات وتنقّلاتهم في الفضاء؟', '["⁦Red Tail⁩","⁦Bebop⁩","⁦Swordfish II⁩","⁦Hammerhead⁩"]'::jsonb, 1, 25, 15, 'multi', '⁦Bebop⁩ هي السفينة الأم التي تعمل مقرّاً لفريق الصيادين، سُمّي الأنمي باسمها تيمّناً بموسيقى البيبوب الجازية التي تُلوّن الأنمي طوال مساره.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_163 uuid;
BEGIN
  SELECT id INTO v_lib_id_163 FROM quizzes WHERE title = 'عالم الأنمي والكرتون — الجزء 2' LIMIT 1;
  IF v_lib_id_163 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('عالم الأنمي والكرتون — الجزء 2', 'أنمي', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_163;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''فولميتال ألكيميست: برذرهود'' (⁦Fullmetal Alchemist⁩: ⁦Brotherhood⁩)، ما اسم الكيان الشرير الرئيسي الذي خلق الهومونكولي السبعة ويسعى لامتصاص قوى إله الأرض (⁦Truth⁩) بأكمله؟', '["إنفي","أبوهم (⁦Father⁩)","برايد","كينغ برادلي"]'::jsonb, 1, 25, 0, 'multi', '⁦Father⁩ هو الكيان الرئيسي الشرير في ⁦Brotherhood⁩، وهو مخلوق من دم الملك هوهنهايم وخلق الهومونكولي ليمتص طاقة جميع أرواح شيمبالا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''دراغون بول زد'' (⁦Dragon Ball Z⁩)، ما اسم التحوّل الأسطوري الأول الذي يبلغه غوكو ويظهر فيه شعره أصفر وعيناه خضراوان، ويُعدّ نقلة نوعية في قوة أبطال السايا؟', '["سوبر سايا 2","سوبر سايا غود","سوبر سايا 1","أولترا إنستينكت"]'::jsonb, 2, 25, 1, 'multi', 'تحوّل ⁦Super Saiyan 1⁩ هو التحوّل التاريخي الأول الذي بلغه غوكو في معركته مع فريزا على كوكب نامك، وغيّر مسار السلسلة كلياً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''بليتش'' (⁦Bleach⁩)، ما اسم القدرة الخاصة بالنوم الروحي (⁦Zanpakuto⁩) التي يمتلكها إيشيغو كوروساكي في شكلها الأوّلي، والتي تُطلق موجات طاقة هائلة تُعرف بـ''⁦Getsuga Tensho⁩''؟', '["⁦Senbonzakura⁩","⁦Zangetsu⁩","⁦Tensa Zangetsu⁩","⁦Hyorinmaru⁩"]'::jsonb, 1, 25, 2, 'multi', '⁦Zangetsu⁩ هو اسم سيف الروح (⁦Zanpakuto⁩) الخاص بإيشيغو كوروساكي، وهو من يمنحه قدرة ⁦Getsuga Tensho⁩ الشهيرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''هانتر ⁦×⁩ هانتر'' (⁦Hunter x Hunter⁩)، ما اسم نوع قوة الـ ⁦Nen⁩ الذي يتخصص فيه كيلوا زولديك والذي يُمكّنه من توليد الكهرباء والتحكم بها في جسده؟', '["⁦Transmutation⁩ (التحويل)","⁦Emission⁩ (الإرسال)","⁦Enhancement⁩ (التعزيز)","⁦Manipulation⁩ (التحكم)"]'::jsonb, 0, 25, 3, 'multi', 'كيلوا زولديك من فئة ⁦Transmutation⁩ أي يُحوّل طاقة الـ ⁦Nen⁩ إلى خصائص الكهرباء، وهو ما يُشكّل أساس تقنياته القتالية كـ ⁦Godspeed⁩.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''ديمون سلاير'' (⁦Demon Slayer⁩)، ما اسم أسلوب التنفس الأصلي الذي اشتُقّت منه جميع أساليب التنفس الأخرى المستخدمة في صيد الشياطين؟', '["تنفس الشمس (⁦Sun Breathing⁩)","تنفس اللهب (⁦Flame Breathing⁩)","تنفس الماء (⁦Water Breathing⁩)","تنفس الريح (⁦Wind Breathing⁩)"]'::jsonb, 0, 25, 4, 'multi', 'تنفس الشمس أو ''⁦Hinokami Kagura⁩'' هو الأسلوب الأصلي الذي ابتكره يوريتشي تسوجيكوني وانبثقت منه جميع الأساليب الأخرى كالماء واللهب والريح.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''أتاك أوف أون تايتان'' (⁦Attack on Titan⁩)، ما اسم قوة التيتان الخاصة بيمير فريتز الأصلية والتي تُعدّ أصل جميع قوى التيتانات التسعة؟', '["تيتان الهجوم","تيتان المؤسِّس","تيتان العظام","تيتان الضربة القاضية"]'::jsonb, 1, 25, 5, 'multi', 'تيتان المؤسِّس (⁦Founding Titan⁩) هو القوة الأصلية التي منحها الشيطان ليمير فريتز، ومنها تفرّعت التيتانات التسعة جميعها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''فيري تيل'' (⁦Fairy Tail⁩)، ما اسم سحر الفريق السري الذي يمتلكه ناتسو دراغنيل والذي يُخفيه طوال معظم القصة، ويُكشف أنه مرتبط بشيطان الكتاب الأسود؟', '["⁦Dragon Force⁩","⁦Etherious Form⁩ - ⁦E.N.D⁩","⁦Fire Dragon King Mode⁩","⁦Lightning Flame Dragon Mode⁩"]'::jsonb, 1, 25, 6, 'multi', 'ناتسو هو في الحقيقة ⁦E.N.D⁩ (⁦Etherious Natsu Dragneel⁩) وهو أقوى شياطين الكتاب الأسود الذي صنعه أخوه زيريف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''ماي هيرو أكاديميا'' (⁦My Hero Academia⁩)، ما اسم تقنية إيزوكو ميدوريا التي طوّرها للتغلّب على الضرر الذي يلحق بجسده عند استخدام ⁦One For All⁩ بنسبة 100%، وتعتمد على توزيع القوة بدلاً من تركيزها؟', '["⁦Full Cowling⁩","⁦Delaware Smash Air Force⁩","⁦Shoot Style⁩","⁦Black Whip⁩"]'::jsonb, 0, 25, 7, 'multi', 'تقنية ⁦Full Cowling⁩ تتيح لميدوريا توزيع طاقة ⁦One For All⁩ على كامل جسده بنسبة محدودة بدلاً من تركيزها في نقطة واحدة، مما يقلّل الأضرار الجسدية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''ون بيس'' (⁦One Piece⁩)، ما اسم أسلوب القتال الذي طوّره زورو روانوا في جزيرة ثريلر بارك، والذي يجمع بين سيوفه الثلاثة وتقنية الأساليب التسعة في ضربة واحدة هائلة؟', '["⁦Asura⁩","⁦Shishi Sonson⁩","⁦Oni Giri⁩","⁦Three Thousand Worlds⁩"]'::jsonb, 0, 25, 8, 'multi', 'أسلوب ⁦Asura⁩ هو تقنية زورو السرية التي يظهر فيها بستة أذرع وثلاثة رؤوس حاملاً تسعة سيوف، وهي ضربته الأشد فتكاً في مرحلة ما قبل الزمن الفاصل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''نارُتو شيبودن'' (⁦Naruto Shippuden⁩)، ما اسم الفنّ الإبداعي الذي ابتكره ناروتو أوزوماكي بنفسه بالجمع بين طاقة الخيلاء (⁦Sage Mode⁩) وطاقة الثعلب الأحمر (⁦Kurama''s Chakra⁩) لتشكيل ضربة الراسنغان العملاقة؟', '["⁦Sage Art⁩: ⁦Super Big Ball Rasengan⁩","⁦Wind Style⁩: ⁦Rasenshuriken⁩","⁦Tailed Beast Bomb Rasenshuriken⁩","⁦Sage Art⁩: ⁦Magnet Release Rasengan⁩"]'::jsonb, 2, 25, 9, 'multi', '⁦Tailed Beast Bomb Rasenshuriken⁩ هي التقنية التي جمع فيها ناروتو بين قوة مودات الحيوانات المُذيَّلة وأسلوب الراسنغان، وظهرت في المعارك الكبرى ضد مادارا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''فولميتال ألكيميست: براذرهود'' (⁦Fullmetal Alchemist⁩: ⁦Brotherhood⁩)، ما اسم الشخصية التي تُلقَّب بـ''⁦Greed⁩'' (الجشع) وهي إحدى خطايا الأب السبع، والتي تمتلك قدرة تحويل جسمها إلى درع كربوني لا يُخترق؟', '["إنفي","غريد","برايد","غلاتوني"]'::jsonb, 1, 25, 10, 'multi', 'غريد (⁦Greed⁩) هو الهومنكولوس الممثِّل للجشع، ويمتلك قدرة ⁦Ultimate Shield⁩ التي تحوّل جسمه إلى درع كربوني صلب تقريباً لا يُقهر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''ون بانش مان'' (⁦One Punch Man⁩)، ما اسم المنظمة التي تُصنِّف الأبطال وفق درجات من ⁦C⁩ إلى ⁦S⁩ وتُشرف على مكافحة التهديدات في العالم؟', '["⁦Hero Association⁩","⁦Monster Association⁩","⁦Justice League⁩","⁦Neo Heroes⁩"]'::jsonb, 0, 25, 11, 'multi', '⁦Hero Association⁩ هي المنظمة الرسمية في عالم ⁦One Punch Man⁩ التي تُصنّف الأبطال وتُوفّر لهم الدعم اللوجستي وتُحدّد مستوياتهم من ⁦C⁩ إلى ⁦S⁩.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''بلاك كلوفر'' (⁦Black Clover⁩)، ما اسم نوع السحر النادر الذي يمتلكه أستا ويُعدّ فريداً من نوعه لأنه لا يعتمد على قوة السحر (⁦Mana⁩) بل يُبطل السحر تماماً؟', '["⁦Dark Magic⁩","⁦Anti-Magic⁩","⁦Void Magic⁩","⁦Gravity Magic⁩"]'::jsonb, 1, 25, 12, 'multi', 'أستا لا يمتلك أي قوة سحرية (⁦Mana⁩) لكنه يستخدم ⁦Anti-Magic⁩ المستخرجة من شيطانه لإبطال أي سحر، وهو ما يجعله فريداً في عالم البلاك كلوفر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''هانتر ⁦×⁩ هانتر'' (⁦Hunter × Hunter⁩)، ما اسم نوع قدرة النِن (⁦Nen⁩) التي يستخدمها هيسوكا موريو، والتي تُتيح له إلصاق الأشياء ومطّها كالمطاط بفضل قدرتَي ''⁦Bungee Gum⁩'' و''⁦Texture Surprise⁩''؟', '["⁦Transmutation⁩ (التحويل)","⁦Emission⁩ (الإطلاق)","⁦Manipulation⁩ (التحكم)","⁦Enhancement⁩ (التعزيز)"]'::jsonb, 0, 25, 13, 'multi', 'هيسوكا من فئة ⁦Transmutation⁩، وقدرته ''⁦Bungee Gum⁩'' تُحوّل طاقة النِن لتكتسب خصائص المطاط والصمغ معاً.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''ديمون سلاير'' (⁦Demon Slayer⁩ - ⁦Kimetsu no Yaiba⁩)، ما اسم أسلوب التنفس الأصلي الذي اشتُقّت منه جميع أساليب التنفس الأخرى المستخدمة في قتل الشياطين؟', '["تنفس الشمس (⁦Sun Breathing⁩)","تنفس اللهب (⁦Flame Breathing⁩)","تنفس الماء (⁦Water Breathing⁩)","تنفس الرياح (⁦Wind Breathing⁩)"]'::jsonb, 0, 25, 14, 'multi', 'تنفس الشمس هو الأسلوب الأصلي الذي ابتكره يوريتشي تسوجيكوني، واشتُقّت منه جميع الأساليب الأخرى كالماء والنار والرياح.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_163, 'في أنمي ''أتاك أون تايتان'' (⁦Attack on Titan⁩)، ما اسم القدرة الخاصة التي يمتلكها إيرن ييغر والتي تُتيح له استدعاء ذكريات وأفعال كل حاملي قوة التيتان من الماضي والمستقبل معاً؟', '["قوة المؤسِّس (⁦The Founding Titan⁩)","قوة التيتان الهاجوم (⁦Attack Titan⁩)","قوة التيتان المتصلّب (⁦Armored Titan⁩)","مسار الرؤى (⁦Path Vision⁩)"]'::jsonb, 0, 25, 15, 'multi', 'قوة المؤسِّس هي أصل جميع قوى التيتان وتُتيح لحاملها التواصل عبر المسارات مع جميع أبناء يمير والتأثير في ذكرياتهم.', '');
  END IF;
END $$;

