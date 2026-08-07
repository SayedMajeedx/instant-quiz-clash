DO $$-- Seed ALL QUIZ_LIBRARY quizzes directly in SQL



DO $$
DECLARE
  v_lib_id_0 uuid;
BEGIN
  SELECT id INTO v_lib_id_0 FROM quizzes WHERE title = 'أنمي كلاسيكي وحديث' LIMIT 1;
  IF v_lib_id_0 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('أنمي كلاسيكي وحديث', 'أنمي', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_0;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'في أي أنمي يسعى البطل ليصبح ملك القراصنة؟', '["بليتش","ون بيس","ناروتو","فيري تيل"]'::jsonb, 1, 20, 0, 'multi', 'من تأليف إييتشيرو أودا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'ما اسم الدفتر الذي يقتل من يُكتب اسمه فيه في أنمي شهير؟', '["دفتر الأرواح","مذكرة الموت","سجل القدر","كتاب الظلال"]'::jsonb, 1, 20, 1, 'multi', 'بطله الطالب لايت ياغامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'في أنمي هجوم العمالقة، ما اسم السور الخارجي الأول؟', '["ماريا","روزا","سينا","شيغانشينا"]'::jsonb, 0, 20, 2, 'multi', 'سقط في الحلقة الأولى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'ما اسم القرية التي ينتمي إليها ناروتو؟', '["قرية الرمل","قرية الورق","قرية الضباب","قرية السحاب"]'::jsonb, 1, 20, 3, 'multi', 'كونوها أي ورقة الشجر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'أي استوديو ياباني أنتج فيلم المخطوف رحلة تشيهيرو؟', '["استوديو غيبلي","مادهاوس","بونز","توي أنيميشن"]'::jsonb, 0, 20, 4, 'multi', 'بإخراج هاياو ميازاكي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'في أنمي الخيميائي المعدني، ما المبدأ الذي يحكم الخيمياء؟', '["التبادل المتكافئ","قانون الظل","دورة الحياة","ميثاق الدم"]'::jsonb, 0, 20, 5, 'multi', 'لا يمكن الحصول على شيء دون تقديم مقابل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'ما اسم الوحش الأزرق ذو الشحنات الكهربائية الأشهر في بوكيمون؟', '["تشارمندر","بيكاتشو","بولباصور","سكويرتل"]'::jsonb, 1, 20, 6, 'multi', 'رفيق آش الدائم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'في أنمي كرة السلة كوروكو، ما اللعبة المحورية؟', '["كرة القدم","كرة السلة","الكرة الطائرة","البيسبول"]'::jsonb, 1, 20, 7, 'multi', 'يدور حول فريق مدرسي طموح.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'ما الاسم الذي يُطلق على الوحوش في أنمي قاتل الشياطين؟', '["الهولو","الأونى الشياطين","التيتان","الأكوما فقط"]'::jsonb, 1, 20, 8, 'multi', 'يقاتلهم فيلق قتلة الشياطين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'من مؤلف أنمي دراغون بول؟', '["ماساشي كيشيموتو","أكيرا تورياما","تيتي كوبو","هيرومو أراكاوا"]'::jsonb, 1, 20, 9, 'multi', 'بدأت المانغا عام 1984.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'ما التقنية الأشهر التي يستخدمها غوكو ويُطلقها من كفيه؟', '["الراسينغان","الكاميهاميها","الغيتسوغا","الجيان"]'::jsonb, 1, 20, 10, 'multi', 'شعاع طاقة مركّز.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_0, 'في أنمي ديث بيريد الرياضي هايكيو، ما الرياضة الأساسية؟', '["التنس","الكرة الطائرة","المصارعة","السباحة"]'::jsonb, 1, 20, 11, 'multi', 'يركز على فريق مدرسة كاراسونو.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_1 uuid;
BEGIN
  SELECT id INTO v_lib_id_1 FROM quizzes WHERE title = 'أنمي — للخبراء' LIMIT 1;
  IF v_lib_id_1 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('أنمي — للخبراء', 'أنمي', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_1;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما اسم منظمة الأشرار التي تجمع المستذئبين الذيول في ناروتو؟', '["الأكاتسكي","الأنبو","الأوتو","الرووت"]'::jsonb, 0, 25, 0, 'multi', 'يميّزها الرداء الأسود بالغيوم الحمراء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'في أنمي إيفانغيليون، ما اسم المنظمة التي تقود الروبوتات؟', '["نيرف","سيل","ويل","غيهيرن الحالية"]'::jsonb, 0, 25, 1, 'multi', 'يقودها غيندو إيكاري.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما القدرة الأساسية للبطل في أنمي هنتر × هنتر والمعروفة بطاقة الحياة؟', '["الشاكرا","النين","الهاكي","الريو"]'::jsonb, 1, 25, 2, 'multi', 'تنقسم إلى ست فئات رئيسية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما اسم السيف الذي يحمله البطل في بليتش؟', '["زانباكوتو","كاتانا الظل","موراماسا","كوساناغي"]'::jsonb, 0, 25, 3, 'multi', 'لكل شينيغامي سيف باسم خاص.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'أي أنمي يدور حول لعبة عقلية بين مقامرين في مدرسة نخبوية؟', '["كاكيغوروي","نو غيم نو لايف","ليار غيم","أكاغي"]'::jsonb, 0, 25, 4, 'multi', 'بطلته يوميكو جابامي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما اسم اللعنة الرئيسية التي تسكن جسد البطل في جوجوتسو كايسن؟', '["سوكونا","ماهيتو","جوغو","كينجاكو"]'::jsonb, 0, 25, 5, 'multi', 'يُلقّب بملك اللعنات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما الأنمي الذي يتناول رحلة صياد يبحث عن والده مع نظام صيادين رسمي؟', '["هنتر × هنتر","بلاك كلوفر","دي غراي مان","سول إيتر"]'::jsonb, 0, 25, 6, 'multi', 'بطله غون فريكس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'في أنمي كود غياس، ما القدرة التي يحصل عليها لولوش؟', '["قراءة الأفكار","إصدار أمر مطلق يُطاع مرة واحدة","إيقاف الزمن","التنقل الآني"]'::jsonb, 1, 25, 7, 'multi', 'تعمل عبر التواصل البصري.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما اسم المدرسة في أنمي أكاديميتي للأبطال؟', '["شيكيتسو","يو إيه","كيتسوني","سيتوكاي"]'::jsonb, 1, 25, 8, 'multi', 'أشهر أكاديميات تدريب الأبطال في القصة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'أي مخرج ياباني اشتهر بأفلام مثل اسمك وطقس معك؟', '["ماكوتو شينكاي","ساتوشي كون","مامورو هوسودا","إيسا"]'::jsonb, 0, 25, 9, 'multi', 'يميّزه أسلوب بصري شديد التفصيل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'في أنمي ستينز غيت، ما الجهاز الذي يُستخدم لإرسال الرسائل إلى الماضي؟', '["الميكروويف المعدّل","الهاتف الزمني الكمي","الحاسوب المركزي","بوابة النجوم"]'::jsonb, 0, 25, 10, 'multi', 'تحوّل صدفة إلى آلة زمن للرسائل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_1, 'ما اسم عائلة القتلة والجواسيس في أنمي سباي × فاميلي الظاهري؟', '["فورجر","ديزموند","بريار","بلاكبيل"]'::jsonb, 0, 25, 11, 'multi', 'عائلة مصطنعة لتنفيذ مهمة سرية.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_2 uuid;
BEGIN
  SELECT id INTO v_lib_id_2 FROM quizzes WHERE title = 'معلومات عامة — الجولة الأولى' LIMIT 1;
  IF v_lib_id_2 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('معلومات عامة — الجولة الأولى', 'معلومات عامة', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_2;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'ما العنصر الكيميائي الأكثر وفرة في الغلاف الجوي للأرض؟', '["الأكسجين","النيتروجين","ثاني أكسيد الكربون","الأرغون"]'::jsonb, 1, 20, 0, 'multi', 'يشكّل النيتروجين نحو 78% من الهواء مقابل 21% للأكسجين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'أي عملة رسمية تُستخدم في اليابان؟', '["الوون","اليوان","الين","الروبية"]'::jsonb, 2, 20, 1, 'multi', 'الوون كوري واليوان صيني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'كم عدد الأضلاع في شكل هندسي يُسمى المُثمَّن؟', '["ستة","سبعة","ثمانية","عشرة"]'::jsonb, 2, 20, 2, 'multi', 'المثمّن ثماني الأضلاع، ومنه شكل إشارة التوقف المرورية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'ما أكبر عضو في جسم الإنسان من حيث المساحة؟', '["الكبد","الجلد","الرئتان","الأمعاء الدقيقة"]'::jsonb, 1, 20, 3, 'multi', 'الجلد أكبر أعضاء الجسم، والكبد أكبر عضو داخلي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'أي غاز تمتصه النباتات من الهواء أثناء عملية البناء الضوئي؟', '["ثاني أكسيد الكربون","الأكسجين","الميثان","الهيدروجين"]'::jsonb, 0, 20, 4, 'multi', 'تأخذه مع الماء والضوء وتطلق الأكسجين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'ما اسم أطول نهر في القارة الأفريقية؟', '["الكونغو","النيجر","النيل","الزمبيزي"]'::jsonb, 2, 20, 5, 'multi', 'يمتد النيل أكثر من 6600 كم عبر عدة دول.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'في أي مجال تُمنح جائزة بوليتزر بشكل أساسي؟', '["الصحافة والأدب","الفيزياء","السينما","الاقتصاد"]'::jsonb, 0, 20, 6, 'multi', 'تُمنح سنويًا في الولايات المتحدة للصحافة والأدب والموسيقى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'ما المعدن السائل في درجة حرارة الغرفة؟', '["الرصاص","الزئبق","القصدير","الصوديوم"]'::jsonb, 1, 20, 7, 'multi', 'الزئبق المعدن الوحيد السائل في الظروف العادية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'كم عدد الحروف في الأبجدية العربية؟', '["26","28","29","30"]'::jsonb, 1, 20, 8, 'multi', 'ثمانية وعشرون حرفًا، وتُضاف الهمزة أحيانًا كحرف تاسع وعشرين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'أي كوكب في مجموعتنا الشمسية يمتلك أكبر عدد من الأقمار المؤكدة؟', '["المشتري","زحل","أورانوس","نبتون"]'::jsonb, 1, 20, 9, 'multi', 'تجاوز زحل المشتري بعد اكتشافات أقمار صغيرة متتالية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'ما الاسم العلمي للحالة التي يفقد فيها الدم قدرته على حمل الأكسجين بكفاءة بسبب نقص الحديد؟', '["السكري","فقر الدم","الروماتيزم","النقرس"]'::jsonb, 1, 20, 10, 'multi', 'نقص الحديد يقلل الهيموغلوبين فيقل نقل الأكسجين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_2, 'أي مدينة تُعرف تاريخيًا باسم القسطنطينية؟', '["أثينا","إزمير","إسطنبول","أنقرة"]'::jsonb, 2, 20, 11, 'multi', 'غُيّر الاسم رسميًا إلى إسطنبول عام 1930.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_3 uuid;
BEGIN
  SELECT id INTO v_lib_id_3 FROM quizzes WHERE title = 'معلومات عامة — تحدٍّ متقدم' LIMIT 1;
  IF v_lib_id_3 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('معلومات عامة — تحدٍّ متقدم', 'معلومات عامة', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_3;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما الوحدة التي تُقاس بها شدة الإضاءة في النظام الدولي؟', '["اللومن","الكانديلا","اللوكس","الواط"]'::jsonb, 1, 25, 0, 'multi', 'الكانديلا وحدة أساسية، أما اللومن واللوكس فمشتقان منها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'من صاحب نظرية أن الأرض تدور حول الشمس والتي نشرها في القرن السادس عشر؟', '["كوبرنيكوس","بطليموس","كبلر","برونو"]'::jsonb, 0, 25, 1, 'multi', 'نشر كتابه عن دوران الأجرام السماوية عام 1543.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما أعمق نقطة معروفة في محيطات الأرض؟', '["خندق بورتوريكو","خندق ماريانا","خندق جاوة","خندق التونغا"]'::jsonb, 1, 25, 2, 'multi', 'يبلغ عمقها نحو 11 كم في المحيط الهادئ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'أي مادة تُعد الأصلب طبيعيًا على مقياس موس؟', '["الكوارتز","الياقوت","الألماس","التوباز"]'::jsonb, 2, 25, 3, 'multi', 'يحتل الألماس الدرجة العاشرة وهي الأعلى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما العملية التي يتحول فيها الجسم الصلب إلى غاز مباشرة دون المرور بالحالة السائلة؟', '["التكثّف","التسامي","الانصهار","التبخّر"]'::jsonb, 1, 25, 4, 'multi', 'مثالها الثلج الجاف عند تعرضه للهواء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'في أي عام انتهت الحرب العالمية الأولى؟', '["1914","1917","1918","1920"]'::jsonb, 2, 25, 5, 'multi', 'وقّعت الهدنة في نوفمبر 1918 وتلتها معاهدة فرساي عام 1919.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما اسم أصغر وحدة تحمل خصائص المركّب الكيميائي؟', '["الذرة","الجزيء","الأيون","النواة"]'::jsonb, 1, 25, 6, 'multi', 'تفكيك الجزيء إلى ذراته يفقد المركب خصائصه.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'أي بحر يُصنّف الأعلى ملوحة بين المسطحات المائية المشهورة حتى صار الطفو فيه سهلًا؟', '["البحر الأحمر","البحر الميت","بحر قزوين","البحر الأسود"]'::jsonb, 1, 25, 7, 'multi', 'تصل ملوحته إلى نحو عشرة أضعاف مياه المحيط.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما المصطلح الاقتصادي الذي يصف الارتفاع المستمر في المستوى العام للأسعار؟', '["الكساد","التضخم","الركود","الانكماش"]'::jsonb, 1, 25, 8, 'multi', 'يقابله الانكماش وهو تراجع مستمر في الأسعار.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما اللغة التي تحتوي على أكبر عدد من الناطقين بها كلغة أم في العالم؟', '["الإنجليزية","الإسبانية","الصينية الماندرين","الهندية"]'::jsonb, 2, 25, 9, 'multi', 'الإنجليزية الأولى عند حساب المتحدثين كلغة ثانية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'ما الجهاز الذي يُستخدم لقياس الضغط الجوي؟', '["الأنيمومتر","البارومتر","الهيغرومتر","السيزموغراف"]'::jsonb, 1, 25, 10, 'multi', 'الأنيمومتر للرياح والهيغرومتر للرطوبة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_3, 'أي معاهدة أرست مبدأ سيادة الدول الحديثة عام 1648 بعد حرب الثلاثين عامًا؟', '["فرساي","وستفاليا","أوترخت","فيينا"]'::jsonb, 1, 25, 11, 'multi', 'صلح وستفاليا يُعد نقطة انطلاق نظام الدول القومية.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_4 uuid;
BEGIN
  SELECT id INTO v_lib_id_4 FROM quizzes WHERE title = 'خرائط وعواصم' LIMIT 1;
  IF v_lib_id_4 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('خرائط وعواصم', 'جغرافيا', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_4;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما عاصمة أستراليا؟', '["سيدني","ملبورن","كانبرا","بيرث"]'::jsonb, 2, 20, 0, 'multi', 'سيدني الأكبر سكانًا لكن العاصمة السياسية كانبرا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'أي دولة عربية تطل على المحيط الأطلسي والبحر المتوسط معًا؟', '["الجزائر","تونس","المغرب","ليبيا"]'::jsonb, 2, 20, 1, 'multi', 'يفصل مضيق جبل طارق بين واجهتيه البحريتين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما أكبر جزيرة في العالم من حيث المساحة؟', '["مدغشقر","بورنيو","غرينلاند","غينيا الجديدة"]'::jsonb, 2, 20, 2, 'multi', 'أستراليا تُصنّف قارة لا جزيرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'أي سلسلة جبال تفصل بين قارتي أوروبا وآسيا؟', '["الألب","الأورال","الكاربات","القوقاز الصغرى"]'::jsonb, 1, 20, 3, 'multi', 'تمتد جبال الأورال شمالًا وجنوبًا داخل روسيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما المضيق الذي يربط الخليج العربي ببحر عُمان؟', '["باب المندب","هرمز","جبل طارق","ملقا"]'::jsonb, 1, 20, 4, 'multi', 'يمر عبره جزء كبير من تجارة النفط العالمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'أي دولة تضم أكبر عدد من الجزر ضمن أرخبيلها المأهول؟', '["اليابان","الفلبين","إندونيسيا","اليونان"]'::jsonb, 2, 20, 5, 'multi', 'يتجاوز عدد جزرها سبعة عشر ألف جزيرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما البحيرة التي تُعد الأكبر مساحة في العالم؟', '["بحيرة سوبيريور","بحر قزوين","بحيرة فيكتوريا","بحيرة بايكال"]'::jsonb, 1, 20, 6, 'multi', 'رغم اسمها بحرًا فهي بحيرة مغلقة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'أي صحراء تُعد الأكبر حرارةً ومساحةً في أفريقيا؟', '["كالاهاري","الصحراء الكبرى","ناميب","النوبة"]'::jsonb, 1, 20, 7, 'multi', 'تمتد عبر أكثر من عشر دول شمال القارة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما عاصمة كندا؟', '["تورونتو","مونتريال","أوتاوا","فانكوفر"]'::jsonb, 2, 20, 8, 'multi', 'أوتاوا في مقاطعة أونتاريو رغم أن تورونتو أكبر مدنها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'أي دولة تشترك في أطول حدود برية مع الصين؟', '["روسيا","منغوليا","الهند","كازاخستان"]'::jsonb, 1, 20, 9, 'multi', 'تتجاوز حدود منغوليا مع الصين 4600 كم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما القارة التي لا توجد فيها دولة ذات سيادة؟', '["أوقيانوسيا","أنتاركتيكا","أمريكا الجنوبية","أفريقيا"]'::jsonb, 1, 20, 10, 'multi', 'تُدار بمعاهدة دولية وتقتصر على محطات بحثية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_4, 'ما النهر الذي يمر بالعاصمة العراقية بغداد؟', '["الفرات","دجلة","الزاب","ديالى"]'::jsonb, 1, 20, 11, 'multi', 'يقسم دجلة بغداد إلى جانبي الكرخ والرصافة.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_5 uuid;
BEGIN
  SELECT id INTO v_lib_id_5 FROM quizzes WHERE title = 'جغرافيا طبيعية — مستوى صعب' LIMIT 1;
  IF v_lib_id_5 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('جغرافيا طبيعية — مستوى صعب', 'جغرافيا', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_5;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما الخط الوهمي الذي يقسم الأرض إلى نصفين شمالي وجنوبي؟', '["خط غرينتش","خط الاستواء","مدار السرطان","الدائرة القطبية"]'::jsonb, 1, 25, 0, 'multi', 'خط غرينتش يقسمها شرقًا وغربًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما أعلى قمة جبلية في القارة الأفريقية؟', '["جبل كينيا","كليمنجارو","جبل توبقال","رأس دشن"]'::jsonb, 1, 25, 1, 'multi', 'يرتفع نحو 5895 مترًا في تنزانيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'أي ظاهرة مناخية دورية في المحيط الهادئ ترفع حرارة سطح المياه وتغيّر أنماط الأمطار عالميًا؟', '["النينيو","المونسون","الإعصار الحلزوني","الجبهة القطبية"]'::jsonb, 0, 25, 2, 'multi', 'يقابلها طور بارد يُعرف بالنينيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما الدولة التي تحتضن منابع النيل الأزرق؟', '["أوغندا","إثيوبيا","جنوب السودان","كينيا"]'::jsonb, 1, 25, 3, 'multi', 'ينبع من بحيرة تانا في المرتفعات الإثيوبية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'أي مدينة تقع على قارتين في آنٍ واحد؟', '["القاهرة","إسطنبول","بيروت","الجزائر"]'::jsonb, 1, 25, 4, 'multi', 'يفصل مضيق البوسفور جانبيها الأوروبي والآسيوي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما نوع الصخور الناتجة عن تبرد الصهارة وتصلبها؟', '["الرسوبية","النارية","المتحولة","الطينية"]'::jsonb, 1, 25, 5, 'multi', 'أشهر أمثلتها البازلت والغرانيت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما أطول سلسلة جبال متصلة فوق سطح الأرض؟', '["الهيمالايا","روكي","الأنديز","الأطلس"]'::jsonb, 2, 25, 6, 'multi', 'تمتد الأنديز نحو سبعة آلاف كيلومتر غرب أمريكا الجنوبية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما التسمية الجغرافية لمنطقة النشاط الزلزالي والبركاني المحيطة بالمحيط الهادئ؟', '["حزام الألب","حلقة النار","الصدع الأفريقي","منطقة الاندساس الأطلسية"]'::jsonb, 1, 25, 7, 'multi', 'تضم أغلب براكين العالم النشطة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'أي دولة أوروبية لا تطل على أي بحر؟', '["كرواتيا","النمسا","ألبانيا","البرتغال"]'::jsonb, 1, 25, 8, 'multi', 'النمسا دولة حبيسة تحيط بها اليابسة من كل جانب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما القناة التي تربط البحر المتوسط بالبحر الأحمر؟', '["قناة بنما","قناة السويس","قناة كييل","قناة كورنث"]'::jsonb, 1, 25, 9, 'multi', 'افتُتحت عام 1869 واختصرت طريق التجارة نحو آسيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'ما المصطلح الذي يصف مصبّ النهر المتشعب إلى فروع قبل التقائه بالبحر؟', '["الدلتا","المصب القمعي","الحوض","المنعطف"]'::jsonb, 0, 25, 10, 'multi', 'أشهرها دلتا النيل ودلتا الميسيسيبي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_5, 'أي دولة عربية تُعد الأكبر مساحة؟', '["السعودية","السودان","الجزائر","ليبيا"]'::jsonb, 2, 25, 11, 'multi', 'تجاوزت الجزائر السودان بعد انفصال جنوبه عام 2011.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_6 uuid;
BEGIN
  SELECT id INTO v_lib_id_6 FROM quizzes WHERE title = 'محطات في التاريخ العالمي' LIMIT 1;
  IF v_lib_id_6 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('محطات في التاريخ العالمي', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_6;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'أي حضارة قديمة بنت الأهرامات في الجيزة؟', '["السومرية","المصرية","الفينيقية","الآشورية"]'::jsonb, 1, 20, 0, 'multi', 'بُنيت في عصر الدولة القديمة قبل نحو 4500 عام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'من القائد الذي عبر جبال الألب بالفيلة لمهاجمة روما؟', '["يوليوس قيصر","حنبعل","الإسكندر","سبارتاكوس"]'::jsonb, 1, 20, 1, 'multi', 'قائد قرطاجي في الحرب البونية الثانية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'في أي عام سقطت الأندلس بسقوط غرناطة؟', '["1453","1492","1517","1258"]'::jsonb, 1, 20, 2, 'multi', 'العام نفسه الذي عبر فيه كولومبوس المحيط الأطلسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'ما المدينة التي فتحها العثمانيون عام 1453 منهين بذلك الإمبراطورية البيزنطية؟', '["أثينا","القسطنطينية","بلغراد","صوفيا"]'::jsonb, 1, 20, 3, 'multi', 'قادها السلطان محمد الثاني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'من أول رئيس للولايات المتحدة الأمريكية؟', '["توماس جيفرسون","جورج واشنطن","بنجامين فرانكلين","جون آدامز"]'::jsonb, 1, 20, 4, 'multi', 'تولى المنصب عام 1789.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'ما الحدث الذي أشعل شرارة الحرب العالمية الأولى مباشرة؟', '["غزو بولندا","اغتيال ولي عهد النمسا","معركة فردان","ثورة أكتوبر"]'::jsonb, 1, 20, 5, 'multi', 'اغتيل الأرشيدوق فرانز فرديناند في سراييفو عام 1914.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'أي معركة أوقفت الزحف المغولي في بلاد الشام عام 1260؟', '["حطين","عين جالوت","اليرموك","القادسية"]'::jsonb, 1, 20, 6, 'multi', 'انتصر فيها المماليك بقيادة قطز وبيبرس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'من مؤسس الدولة الأموية في دمشق؟', '["عبد الملك بن مروان","معاوية بن أبي سفيان","الوليد بن عبد الملك","هشام بن عبد الملك"]'::jsonb, 1, 20, 7, 'multi', 'اتخذ دمشق عاصمة للخلافة عام 41 هـ.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'في أي عام سقط جدار برلين؟', '["1985","1989","1991","1993"]'::jsonb, 1, 20, 8, 'multi', 'تلاه توحيد الألمانيتين عام 1990.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'ما الاسم الذي عُرفت به الفترة التي أعقبت اختراع غوتنبرغ للطباعة وازدهار الفنون في أوروبا؟', '["عصر النهضة","العصور المظلمة","عصر التنوير","الثورة الصناعية"]'::jsonb, 0, 20, 9, 'multi', 'بدأت في إيطاليا خلال القرن الخامس عشر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'أي إمبراطورية حكمها الإسكندر المقدوني؟', '["الرومانية","المقدونية اليونانية","الفارسية الساسانية","البيزنطية"]'::jsonb, 1, 20, 10, 'multi', 'وصلت فتوحاته إلى حدود الهند قبل وفاته عام 323 ق.م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_6, 'من الملكة التي حكمت مصر آخر عهد البطالمة؟', '["نفرتيتي","حتشبسوت","كليوباترا السابعة","زنوبيا"]'::jsonb, 2, 20, 11, 'multi', 'انتهى حكمها بضم مصر إلى روما عام 30 ق.م.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_7 uuid;
BEGIN
  SELECT id INTO v_lib_id_7 FROM quizzes WHERE title = 'التاريخ الإسلامي والعربي' LIMIT 1;
  IF v_lib_id_7 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ الإسلامي والعربي', 'تاريخ', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_7;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'في أي سنة هجرية وقعت معركة بدر الكبرى؟', '["السنة الأولى","السنة الثانية","الخامسة","الثامنة"]'::jsonb, 1, 25, 0, 'multi', 'وقعت في رمضان من السنة الثانية للهجرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'من الخليفة العباسي الذي أسس مدينة بغداد؟', '["أبو العباس السفاح","أبو جعفر المنصور","هارون الرشيد","المأمون"]'::jsonb, 1, 25, 1, 'multi', 'بُنيت عام 145 هـ وسُميت مدينة السلام.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'ما المعركة التي فتحت بلاد فارس أمام المسلمين في عهد عمر بن الخطاب؟', '["اليرموك","القادسية","ذات الصواري","نهاوند"]'::jsonb, 1, 25, 2, 'multi', 'قادها سعد بن أبي وقاص ضد الجيش الساساني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'من القائد الذي استعاد بيت المقدس من الصليبيين بعد معركة حطين؟', '["نور الدين زنكي","صلاح الدين الأيوبي","الظاهر بيبرس","قطز"]'::jsonb, 1, 25, 3, 'multi', 'وقعت حطين عام 1187 م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'ما الدولة التي حكمت مصر قبل الفتح العثماني لها عام 1517؟', '["الفاطمية","المملوكية","الأيوبية","الطولونية"]'::jsonb, 1, 25, 4, 'multi', 'انتهى حكم المماليك بمعركة الريدانية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'أي مدينة كانت عاصمة الدولة الأموية في الأندلس؟', '["إشبيلية","قرطبة","غرناطة","طليطلة"]'::jsonb, 1, 25, 5, 'multi', 'بلغت أوجها في عهد عبد الرحمن الناصر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'من العالم الذي وضع أسس علم الجبر وسُمي الكتاب باسمه؟', '["ابن الهيثم","الخوارزمي","البيروني","ابن سينا"]'::jsonb, 1, 25, 6, 'multi', 'من كتابه اشتُقت كلمة الخوارزمية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'ما الاتفاقية التي قسّمت مناطق النفوذ في المشرق العربي بين بريطانيا وفرنسا عام 1916؟', '["وعد بلفور","سايكس بيكو","معاهدة سيفر","مؤتمر سان ريمو"]'::jsonb, 1, 25, 7, 'multi', 'اتفاقية سرية كشفتها روسيا بعد الثورة البلشفية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'في أي عام أُلغيت الخلافة العثمانية رسميًا؟', '["1918","1922","1924","1928"]'::jsonb, 2, 25, 8, 'multi', 'ألغاها البرلمان التركي في مارس 1924.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'من مؤسس الدولة الفاطمية التي اتخذت القاهرة عاصمة لاحقًا؟', '["المعز لدين الله","عبيد الله المهدي","الحاكم بأمر الله","جوهر الصقلي"]'::jsonb, 1, 25, 9, 'multi', 'أسسها في المغرب قبل انتقالها إلى مصر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'ما الجامعة التي تُعد من أقدم المؤسسات التعليمية المستمرة في العالم وتأسست في فاس؟', '["الزيتونة","القرويين","الأزهر","النظامية"]'::jsonb, 1, 25, 10, 'multi', 'أسستها فاطمة الفهرية عام 859 م.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_7, 'أي ثورة عربية اندلعت عام 1916 ضد الحكم العثماني في الحجاز؟', '["ثورة العشرين","الثورة العربية الكبرى","ثورة الريف","ثورة عرابي"]'::jsonb, 1, 25, 11, 'multi', 'قادها الشريف حسين بن علي.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_8 uuid;
BEGIN
  SELECT id INTO v_lib_id_8 FROM quizzes WHERE title = 'القرآن والسيرة' LIMIT 1;
  IF v_lib_id_8 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('القرآن والسيرة', 'إسلاميات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_8;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'كم عدد سور القرآن الكريم؟', '["110","112","114","116"]'::jsonb, 2, 20, 0, 'multi', 'أطولها البقرة وأقصرها الكوثر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'ما السورة التي تُسمى قلب القرآن؟', '["الرحمن","يس","الملك","الكهف"]'::jsonb, 1, 20, 1, 'multi', 'وردت تسميتها في أثر مشهور.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'في أي غار نزل الوحي أول مرة على النبي محمد صلى الله عليه وآله؟', '["غار ثور","غار حراء","غار الكهف","غار المرسلات"]'::jsonb, 1, 20, 2, 'multi', 'يقع في جبل النور قرب مكة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'ما السورة الوحيدة التي لا تبدأ بالبسملة؟', '["الفاتحة","التوبة","النمل","الإخلاص"]'::jsonb, 1, 20, 3, 'multi', 'تُسمى أيضًا براءة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'من الصحابي الذي لُقّب بأمين هذه الأمة؟', '["أبو ذر الغفاري","أبو عبيدة بن الجراح","سلمان الفارسي","بلال بن رباح"]'::jsonb, 1, 20, 4, 'multi', 'ورد اللقب في حديث نبوي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'كم عدد أركان الإسلام عند جمهور المسلمين؟', '["أربعة","خمسة","ستة","سبعة"]'::jsonb, 1, 20, 5, 'multi', 'الشهادتان والصلاة والزكاة والصوم والحج.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'ما أول مسجد بُني في الإسلام؟', '["المسجد النبوي","مسجد قباء","المسجد الحرام","المسجد الأقصى"]'::jsonb, 1, 20, 6, 'multi', 'بُني عند وصول النبي إلى المدينة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'من النبي الذي لُقّب بكليم الله؟', '["إبراهيم","موسى","عيسى","نوح"]'::jsonb, 1, 20, 7, 'multi', 'لأن الله كلّمه تكليمًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'في أي شهر هجري فُرض صيام رمضان؟', '["شعبان","رمضان","رجب","محرم"]'::jsonb, 1, 20, 8, 'multi', 'الشهر التاسع في التقويم الهجري.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'ما اسم الهجرة الأولى للمسلمين قبل هجرة المدينة؟', '["الهجرة إلى الطائف","الهجرة إلى الحبشة","الهجرة إلى اليمن","الهجرة إلى الشام"]'::jsonb, 1, 20, 9, 'multi', 'كان ملكها النجاشي عادلًا فآواهم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'ما أطول آية في القرآن الكريم؟', '["آية الكرسي","آية الدَّين","آية المباهلة","آية النور"]'::jsonb, 1, 20, 10, 'multi', 'وردت في سورة البقرة وتتناول توثيق الديون.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_8, 'كم عدد الأشهر الحرم؟', '["اثنان","ثلاثة","أربعة","خمسة"]'::jsonb, 2, 20, 11, 'multi', 'ذو القعدة وذو الحجة والمحرم ورجب.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_9 uuid;
BEGIN
  SELECT id INTO v_lib_id_9 FROM quizzes WHERE title = 'إسلاميات — مستوى متقدم' LIMIT 1;
  IF v_lib_id_9 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('إسلاميات — مستوى متقدم', 'إسلاميات', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_9;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما السورة التي تُعرف بعروس القرآن؟', '["الرحمن","الواقعة","الحديد","المزمل"]'::jsonb, 0, 25, 0, 'multi', 'لتكرار الامتنان بالنعم فيها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'كم عدد آيات سورة البقرة؟', '["176","200","286","300"]'::jsonb, 2, 25, 1, 'multi', 'وهي أطول سور القرآن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما اسم الصحيفة التي كتبها النبي لتنظيم العلاقة بين سكان المدينة؟', '["صلح الحديبية","صحيفة المدينة","بيعة العقبة","عهد الذمة"]'::jsonb, 1, 25, 2, 'multi', 'تُعد من أوائل الوثائق الدستورية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'في أي سنة هجرية وقع صلح الحديبية؟', '["الرابعة","السادسة","الثامنة","العاشرة"]'::jsonb, 1, 25, 3, 'multi', 'وسُمي فتحًا مبينًا في القرآن.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'من أول من جمع القرآن في مصحف واحد بعد وفاة النبي؟', '["عمر بن الخطاب","أبو بكر الصديق","عثمان بن عفان","علي بن أبي طالب"]'::jsonb, 1, 25, 4, 'multi', 'بمشورة عمر وتنفيذ زيد بن ثابت.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما المصطلح الفقهي الذي يعني اتفاق العلماء على حكم شرعي؟', '["القياس","الإجماع","الاستحسان","العرف"]'::jsonb, 1, 25, 5, 'multi', 'أحد أدلة الأحكام عند الأصوليين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما السورة التي تُقرأ استحبابًا يوم الجمعة وتتضمن قصة أهل الكهف؟', '["الكهف","مريم","طه","القصص"]'::jsonb, 0, 25, 6, 'multi', 'تضم أربع قصص كبرى.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'كم عدد التكبيرات في صلاة العيد على المشهور؟', '["أربع","سبع في الأولى","ثلاث","تسع"]'::jsonb, 1, 25, 7, 'multi', 'تختلف التفاصيل بين المذاهب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'من النبي الذي ابتُلي بالصبر على المرض وضُرب به المثل؟', '["يونس","أيوب","زكريا","يعقوب"]'::jsonb, 1, 25, 8, 'multi', 'قال تعالى إنا وجدناه صابرًا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما اسم العلم الذي يبحث في أحوال رواة الحديث؟', '["علم الأصول","علم الجرح والتعديل","علم البلاغة","علم الفرائض"]'::jsonb, 1, 25, 9, 'multi', 'يُحدد به قبول الرواية أو ردها.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما الغزوة التي سُميت بغزوة الأحزاب أيضًا؟', '["أحد","الخندق","خيبر","حنين"]'::jsonb, 1, 25, 10, 'multi', 'حُفر الخندق بمشورة سلمان الفارسي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_9, 'ما العلم الذي يبحث في قسمة المواريث؟', '["الفرائض","المعاملات","المقاصد","القواعد"]'::jsonb, 0, 25, 11, 'multi', 'يُبنى على نصوص قرآنية محددة الأنصبة.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_10 uuid;
BEGIN
  SELECT id INTO v_lib_id_10 FROM quizzes WHERE title = 'الأدب العربي' LIMIT 1;
  IF v_lib_id_10 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الأدب العربي', 'لغة عربية وأدب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_10;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من الشاعر الملقب بأمير الشعراء؟', '["حافظ إبراهيم","أحمد شوقي","المتنبي","البارودي"]'::jsonb, 1, 20, 0, 'multi', 'بويع بالإمارة عام 1927 في القاهرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من مؤلف رواية الثلاثية التي تضم بين القصرين؟', '["يوسف إدريس","نجيب محفوظ","توفيق الحكيم","طه حسين"]'::jsonb, 1, 20, 1, 'multi', 'أول عربي ينال نوبل في الآداب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'ما اسم كتاب طه حسين الذي يروي فيه سيرته الذاتية؟', '["الأيام","دعاء الكروان","الشيخان","على هامش السيرة"]'::jsonb, 0, 20, 2, 'multi', 'صدر في ثلاثة أجزاء.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من الشاعر الذي قال: على قدر أهل العزم تأتي العزائم؟', '["أبو تمام","المتنبي","البحتري","أبو نواس"]'::jsonb, 1, 20, 3, 'multi', 'من قصائده في مدح سيف الدولة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'ما البحر الشعري الذي يُعد أكثر البحور استخدامًا في الشعر العربي القديم؟', '["الطويل","الرجز","الخفيف","المتقارب"]'::jsonb, 0, 20, 4, 'multi', 'لسعة تفعيلاته ومرونته.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من صاحب رسالة الغفران؟', '["الجاحظ","أبو العلاء المعري","ابن المقفع","بديع الزمان"]'::jsonb, 1, 20, 5, 'multi', 'عمل نثري تخيّلي عن رحلة في الآخرة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من ترجم كليلة ودمنة إلى العربية؟', '["ابن المقفع","الجاحظ","ابن خلدون","الأصمعي"]'::jsonb, 0, 20, 6, 'multi', 'نقلها عن الفارسية البهلوية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'ما اسم القصائد السبع المعلّقة على أستار الكعبة في الجاهلية بحسب الرواية المشهورة؟', '["الموشحات","المعلقات","المقامات","النقائض"]'::jsonb, 1, 20, 7, 'multi', 'من أشهر أصحابها امرؤ القيس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من كاتب مسرحية أهل الكهف؟', '["توفيق الحكيم","سعد الله ونوس","ألفريد فرج","يوسف وهبي"]'::jsonb, 0, 20, 8, 'multi', 'من رواد المسرح الذهني العربي.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'ما الفن النثري الذي اشتهر به بديع الزمان الهمذاني؟', '["الخطابة","المقامة","الرسالة","المقالة"]'::jsonb, 1, 20, 9, 'multi', 'نص قصير مسجوع ببطل متسوّل بارع.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من شاعر النيل؟', '["أحمد شوقي","حافظ إبراهيم","إيليا أبو ماضي","خليل مطران"]'::jsonb, 1, 20, 10, 'multi', 'اشتهر بشعره الاجتماعي والوطني.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_10, 'من مؤلف مقدمة تُعد أساسًا لعلم الاجتماع؟', '["ابن بطوطة","ابن خلدون","المسعودي","ابن رشد"]'::jsonb, 1, 20, 11, 'multi', 'مقدمة كتاب العِبر.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_11 uuid;
BEGIN
  SELECT id INTO v_lib_id_11 FROM quizzes WHERE title = 'أدب عالمي وشعر' LIMIT 1;
  IF v_lib_id_11 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('أدب عالمي وشعر', 'لغة عربية وأدب', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_11;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من مؤلف رواية الحرب والسلام؟', '["دوستويفسكي","تولستوي","تشيخوف","غوغول"]'::jsonb, 1, 25, 0, 'multi', 'رواية ملحمية عن الغزو النابليوني لروسيا.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من كتب مسرحية هاملت؟', '["مارلو","شكسبير","بن جونسون","ملتون"]'::jsonb, 1, 25, 1, 'multi', 'من أشهر مآسيه الأربع.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'ما الرواية التي تبدأ بعالم يخضع لمراقبة الأخ الأكبر؟', '["عالم جديد شجاع","1984","فهرنهايت 451","المحاكمة"]'::jsonb, 1, 25, 2, 'multi', 'من تأليف جورج أورويل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من مؤلف مئة عام من العزلة؟', '["بورخيس","غابرييل غارسيا ماركيز","يوسا","كورتاثار"]'::jsonb, 1, 25, 3, 'multi', 'أيقونة الواقعية السحرية.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من الشاعر الفلسطيني صاحب قصيدة سجل أنا عربي؟', '["سميح القاسم","محمود درويش","توفيق زياد","معين بسيسو"]'::jsonb, 1, 25, 4, 'multi', 'من ديوانه أوراق الزيتون.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'ما الملحمة الإغريقية التي تروي رحلة عودة أوديسيوس؟', '["الإلياذة","الأوديسة","الإنيادة","ثيوغونيا"]'::jsonb, 1, 25, 5, 'multi', 'تُنسب إلى هوميروس.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من مؤلف الكوميديا الإلهية؟', '["بترارك","دانتي","بوكاتشيو","ميكافيلي"]'::jsonb, 1, 25, 6, 'multi', 'رحلة رمزية عبر ثلاثة عوالم.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من الأديبة صاحبة رواية كبرياء وهوى؟', '["الأخوات برونتي","جين أوستن","فرجينيا وولف","ماري شيلي"]'::jsonb, 1, 25, 7, 'multi', 'صدرت عام 1813.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'ما اسم الشاعر اللبناني المهجري مؤلف كتاب النبي؟', '["ميخائيل نعيمة","جبران خليل جبران","إيليا أبو ماضي","أمين الريحاني"]'::jsonb, 1, 25, 8, 'multi', 'كُتب بالإنجليزية وتُرجم لعشرات اللغات.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'ما التيار الأدبي الذي ينتمي إليه شعر التفعيلة العربي الحديث؟', '["الكلاسيكية","الشعر الحر","الموشح","المقامة"]'::jsonb, 1, 25, 9, 'multi', 'رائداه نازك الملائكة وبدر شاكر السياب.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'من مؤلف رواية الجريمة والعقاب؟', '["تولستوي","دوستويفسكي","تورغينيف","بولغاكوف"]'::jsonb, 1, 25, 10, 'multi', 'تتناول صراع الضمير بعد جريمة قتل.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_11, 'ما الجائزة الأدبية العالمية التي تُمنح سنويًا من الأكاديمية السويدية؟', '["بوكر","نوبل للآداب","غونكور","بوليتزر"]'::jsonb, 1, 25, 11, 'multi', 'مُنحت لأول مرة عام 1901.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_12 uuid;
BEGIN
  SELECT id INTO v_lib_id_12 FROM quizzes WHERE title = 'ألغاز منطقية' LIMIT 1;
  IF v_lib_id_12 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('ألغاز منطقية', 'ألغاز ومنطق', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_12;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'إذا كان عمر أحمد ضعف عمر سالم، ومجموع عمريهما 36 سنة، فكم عمر سالم؟', '["10","12","14","18"]'::jsonb, 1, 20, 0, 'multi', '12 و24 مجموعهما 36.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'ما العدد التالي في المتتالية: 2، 6، 12، 20، 30، …؟', '["36","40","42","44"]'::jsonb, 2, 20, 1, 'multi', 'الفروق تزداد باثنين في كل خطوة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'ساعة تتأخر دقيقتين كل ساعة، كم تتأخر خلال نصف يوم؟', '["12 دقيقة","20 دقيقة","24 دقيقة","30 دقيقة"]'::jsonb, 2, 20, 2, 'multi', 'اثنتا عشرة ساعة مضروبة في دقيقتين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'خمس آلات تصنع خمس قطع في خمس دقائق، فكم دقيقة تحتاج مئة آلة لصنع مئة قطعة؟', '["خمس","عشرون","خمسون","مئة"]'::jsonb, 0, 20, 3, 'multi', 'كل آلة تنجز قطعة في خمس دقائق مهما زاد العدد.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'إذا كان كل الورود أزهارًا، وبعض الأزهار تذبل سريعًا، فأي استنتاج صحيح؟', '["كل الورود تذبل سريعًا","بعض الورود قد تذبل سريعًا","لا وردة تذبل","كل ما يذبل ورد"]'::jsonb, 1, 20, 4, 'multi', 'لا يمكن تعميم صفة بعض الأزهار على كل الورود.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'أب وابنه عمرهما معًا 60 سنة، والأب أكبر بأربعين سنة، فكم عمر الابن؟', '["8","10","12","15"]'::jsonb, 1, 20, 5, 'multi', '10 و50 يحققان الشرطين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'كم مثلثًا على الأقل نحتاج لتكوين شكل رباعي بخط مستقيم واحد يقسمه؟', '["واحد","اثنان","ثلاثة","أربعة"]'::jsonb, 1, 20, 6, 'multi', 'قطر المربع يقسمه إلى مثلثين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'إن كان اليوم الأربعاء، فما اليوم بعد مئة يوم؟', '["الاثنين","الثلاثاء","الجمعة","السبت"]'::jsonb, 2, 20, 7, 'multi', 'باقي قسمة مئة على سبعة يساوي اثنين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'سلة فيها ست تفاحات وستة أطفال، أخذ كل طفل تفاحة وبقيت واحدة في السلة، كيف؟', '["أحدهم لم يأخذ","الأخير أخذ السلة بما فيها","التفاحات كانت سبعًا","لا حل ممكنًا"]'::jsonb, 1, 20, 8, 'multi', 'أخذ نصيبه وهو داخل السلة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'ما العدد الذي إذا ضُرب في نفسه وأُضيف إليه خمسة أعطى ثلاثين؟', '["3","4","5","6"]'::jsonb, 2, 20, 9, 'multi', 'خمسة في خمسة زائد خمسة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'قطار يقطع 60 كم في 45 دقيقة، فما سرعته بالكيلومتر في الساعة؟', '["60","75","80","90"]'::jsonb, 2, 20, 10, 'multi', 'ستون مقسومة على ثلاثة أرباع الساعة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_12, 'أي الكلمات لا تنتمي للمجموعة: قلم، دفتر، ممحاة، مطر؟', '["قلم","دفتر","ممحاة","مطر"]'::jsonb, 3, 20, 11, 'multi', 'الثلاثة الأولى أدوات مدرسية.', '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_13 uuid;
BEGIN
  SELECT id INTO v_lib_id_13 FROM quizzes WHERE title = 'تحدي الذكاء المتقدم' LIMIT 1;
  IF v_lib_id_13 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('تحدي الذكاء المتقدم', 'ألغاز ومنطق', '', 'challenge', 'ar', true)
    RETURNING id INTO v_lib_id_13;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ما العدد التالي: 1، 1، 2، 3، 5، 8، 13، …؟', '["18","20","21","24"]'::jsonb, 2, 25, 0, 'multi', 'كل حد مجموع الحدين السابقين.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ثلاثة أشخاص دفعوا 30 ريالًا ثم أُعيد لهم 3 ريالات؛ كم دفع كل واحد فعليًا؟', '["9","9.5","10","11"]'::jsonb, 0, 25, 1, 'multi', '27 مقسومة على ثلاثة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'إذا كان بعض الأطباء شعراء، وكل الشعراء حالمون، فأيّ استنتاج يصح؟', '["كل الأطباء حالمون","بعض الأطباء حالمون","لا طبيب حالم","كل الحالمين أطباء"]'::jsonb, 1, 25, 2, 'multi', 'الاستنتاج يقتصر على الفئة المشتركة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ما مجموع زوايا المضلع الخماسي المحدّب؟', '["360","450","540","720"]'::jsonb, 2, 25, 3, 'multi', 'قانون مجموع الزوايا: (ن-2) في 180.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'لدينا 8 كرات إحداها أثقل؛ ما أقل عدد من الوزنات بميزان كفتين لتحديدها؟', '["واحدة","اثنتان","ثلاث","أربع"]'::jsonb, 1, 25, 4, 'multi', 'بتقسيمها إلى ثلاث مجموعات 3 و3 و2.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'شمعة تحترق في 60 دقيقة بالكامل؛ إن أُشعلت من طرفيها معًا فكم تستغرق؟', '["15 دقيقة","20 دقيقة","30 دقيقة","45 دقيقة"]'::jsonb, 2, 25, 5, 'multi', 'معدل الاحتراق يتضاعف.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ما احتمال ظهور وجهين متطابقين عند رمي عملة مرتين؟', '["الربع","النصف","الثلثان","ثلاثة أرباع"]'::jsonb, 1, 25, 6, 'multi', 'حالتان مناسبتان من أصل أربع.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'إذا كان أ أكبر من ب، وب أكبر من ج، وج أكبر من د، فمن الأصغر؟', '["أ","ب","ج","د"]'::jsonb, 3, 25, 7, 'multi', 'الترتيب تنازلي حتى د.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ما الرقم الناقص: 3، 9، 27، …، 243؟', '["54","72","81","108"]'::jsonb, 2, 25, 8, 'multi', 'كل حد يساوي السابق مضروبًا في ثلاثة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'خزان يمتلئ بصنبور في 6 ساعات وبآخر في 3 ساعات؛ كم يستغرق بفتحهما معًا؟', '["ساعة","ساعتان","ثلاث ساعات","أربع ساعات"]'::jsonb, 1, 25, 9, 'multi', 'مجموع المعدلين يعطي نصف الخزان في الساعة.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'في مجموعة من 5 أشخاص يصافح كل منهم الآخر مرة واحدة، فكم عدد المصافحات؟', '["8","10","12","20"]'::jsonb, 1, 25, 10, 'multi', 'عدد الأزواج الممكنة من خمسة عناصر.', '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_13, 'ما العلاقة الصحيحة: القدم للحذاء كما اليد لـ…؟', '["الساعة","القفاز","الخاتم","القلم"]'::jsonb, 1, 25, 11, 'multi', 'كلاهما غطاء يُلبس على الطرف.', '');
  END IF;
END $$;

