DO $$
DECLARE
  v_quiz_id_26 uuid;
BEGIN
  INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
  VALUES ('علماء ومراجع بحرينيين معروفين تاريخياً', 'إسلاميات', 'علماء البحرين', 'standard', 'ar', true)
  RETURNING id INTO v_quiz_id_26;

  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحريني الشهير صاحب كتاب ''الحدائق الناضرة في أحكام العترة الطاهرة''؟', '["الشيخ ميثم البحراني","الشيخ سليمان الماحوزي","الشيخ علي بن سليمان البحراني","الشيخ يوسف البحراني"]'::jsonb, 3, 20, 0, 'multi', 'الشيخ يوسف البحراني المتوفى سنة 1186هـ هو صاحب موسوعة ''الحدائق الناضرة'' الفقهية الكبرى، وهو من أبرز علماء الإمامية في القرن الثاني عشر الهجري.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني الفيلسوف والمتكلم صاحب كتاب ''قواعد المرام في علم الكلام''؟', '["الشيخ أحمد بن صالح البحراني","الشيخ سليمان الماحوزي","الشيخ ميثم بن علي البحراني","الشيخ يوسف البحراني"]'::jsonb, 2, 20, 1, 'multi', 'الشيخ ميثم بن علي البحراني المتوفى سنة 679هـ عالم جليل في الفلسفة والكلام، وله أيضاً شرح شهير على نهج البلاغة.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'ما اسم العالم البحراني الذي لُقِّب بـ''شيخ البحرين'' وكان من أبرز علمائها في القرن الحادي عشر الهجري، وصاحب كتاب ''معراج أهل الكمال''؟', '["الشيخ أحمد بن محمد البلادي","الشيخ سليمان بن عبدالله الماحوزي","الشيخ علي بن سليمان القدمي","الشيخ حسين بن شهاب الدين العاملي"]'::jsonb, 1, 20, 2, 'multi', 'الشيخ سليمان الماحوزي المتوفى سنة 1121هـ من أبرز علماء البحرين وفقهائها، وقد ترك آثاراً علمية جليلة في الفقه والرجال.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني صاحب كتاب ''أنوار البدرين في تراجم علماء القطيف والأحساء والبحرين''؟', '["الشيخ عبدالله بن صالح السماهيجي","الشيخ ميثم البحراني","الشيخ يوسف البحراني","الشيخ علي بن حسن البلادي البحراني"]'::jsonb, 3, 20, 3, 'multi', 'الشيخ علي بن حسن البلادي البحراني المتوفى سنة 1340هـ هو مؤلف كتاب ''أنوار البدرين''، وهو مرجع تراجمي مهم لعلماء المنطقة.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني الذي كان من أبرز تلامذة العلامة الحلي وأسهم في نشر الفقه الإمامي، وهو صاحب كتاب ''إشارة السبق''؟', '["الشيخ علي بن سليمان البحراني القدمي","الشيخ يوسف البحراني","الشيخ ميثم البحراني","الشيخ إبراهيم الكفعمي"]'::jsonb, 0, 20, 4, 'multi', 'الشيخ علي بن سليمان البحراني القدمي من علماء القرن الثامن الهجري وتلميذ العلامة الحلي، وكتابه ''إشارة السبق'' في الفقه الإمامي.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني الشهير بالأخبارية ومؤلف ''لؤلؤة البحرين'' في تراجم العلماء؟', '["الشيخ سليمان الماحوزي","الشيخ عبدالله السماهيجي","الشيخ يوسف البحراني","الشيخ ميثم البحراني"]'::jsonb, 2, 20, 5, 'multi', 'الشيخ يوسف البحراني هو مؤلف كتاب ''لؤلؤة البحرين'' أيضاً إلى جانب ''الحدائق الناضرة''، وقد كان يميل في بداياته للأخبارية ثم اتخذ موقفاً وسطياً.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني الذي كتب شرحاً موسعاً على نهج البلاغة في خمسة مجلدات ويُعدّ من أشهر شروحه؟', '["الشيخ سليمان الماحوزي","الشيخ ميثم بن علي البحراني","الشيخ عبدالله السماهيجي","الشيخ يوسف البحراني"]'::jsonb, 1, 20, 6, 'multi', 'الشيخ ميثم البحراني المتوفى سنة 679هـ صنّف شرحاً كبيراً على نهج البلاغة في خمسة مجلدات يُعدّ من أمهات شروحه حتى اليوم.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني المتوفى سنة 1135هـ الذي تميّز بعلم الرجال والحديث وكتب ''منية الممارسين''؟', '["الشيخ سليمان الماحوزي","الشيخ علي البلادي","الشيخ يوسف البحراني","الشيخ عبدالله بن صالح السماهيجي"]'::jsonb, 3, 20, 7, 'multi', 'الشيخ عبدالله بن صالح السماهيجي المتوفى سنة 1135هـ من كبار علماء البحرين، وله مؤلفات في الرجال والفقه والحديث.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'ما النسبة التي اشتُهر بها الشيخ يوسف البحراني في كتبه ومؤلفاته؟', '["الماحوزي","الستراوي","الدرازي","السماهيجي"]'::jsonb, 2, 20, 8, 'multi', 'الشيخ يوسف البحراني ينتسب إلى قرية ''دراز'' في البحرين، ولهذا يُعرف بـ''الدرازي'' نسبةً إليها، وهو ما يُذكر في مؤلفاته.', 'علماء البحرين');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_26, 'من هو العالم البحراني الذي جمع بين الفقه والأدب والشعر، وكان من شيوخ إجازة الحديث في البحرين في القرن الثاني عشر الهجري، ويُكنّى بـ''أبي علي''؟', '["الشيخ أحمد بن صالح البحراني المعروف بابن طعان","الشيخ ميثم البحراني","الشيخ سليمان الماحوزي","الشيخ علي البلادي"]'::jsonb, 0, 20, 9, 'multi', 'الشيخ أحمد بن صالح البحراني المعروف بابن طعان من علماء البحرين البارزين الذين جمعوا بين الفقه والأدب وإجازة الحديث.', 'علماء البحرين');
END $$;



DO $$
DECLARE
  v_quiz_id_27 uuid;
BEGIN
  INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
  VALUES ('طقوس عاشوراء بالطابع الخليجي والبحريني', 'إسلاميات', 'المناسبات الخليجية الدينية', 'standard', 'ar', true)
  RETURNING id INTO v_quiz_id_27;

  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما الاسم المحلي البحريني الذي يُطلق على مجالس العزاء التي تُقام في أيام عاشوراء؟', '["الحسينيات","التكايا","المآتم","الزوايا"]'::jsonb, 2, 20, 0, 'multi', 'تُعرف مجالس العزاء في البحرين والخليج بـ''المآتم'' وهي مراكز دينية واجتماعية تُقام فيها شعائر إحياء ذكرى استشهاد الإمام الحسين عليه السلام.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما الفن الشعري الخليجي والبحريني الذي يُنشد في مجالس عاشوراء ويتناول مصاب أهل البيت عليهم السلام؟', '["اللطميات","الفجري","الصوت","العرضة"]'::jsonb, 0, 20, 1, 'multi', 'اللطميات هي القصائد الحزينة التي تُنشد في مجالس العزاء وتصف مصاب الإمام الحسين وأهل بيته، وهي الفن الديني الأبرز في عاشوراء الخليجية.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما اسم الموكب التقليدي الذي يخرج في شوارع القرى البحرينية في عاشوراء ويتضمن إنشاد الأناشيد الحزينة والمشي الجماعي؟', '["موكب الذكر","موكب الفرح","موكب الأفراح","موكب العزاء"]'::jsonb, 3, 20, 2, 'multi', 'تخرج في البحرين مواكب العزاء الجماعية في ليلة العاشر من محرم وتتجول في الأحياء والقرى وسط إنشاد اللطميات وإقامة شعائر الحداد.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'أي من هذه الأيام يُعدّ ذروة إحياء شعائر عاشوراء في البحرين والخليج؟', '["اليوم الأول من محرم","اليوم العاشر من محرم","اليوم الخامس عشر من محرم","اليوم السابع والعشرين من رجب"]'::jsonb, 1, 20, 3, 'multi', 'يوم العاشر من محرم المعروف بـ''يوم عاشوراء'' هو ذروة إحياء ذكرى استشهاد الإمام الحسين عليه السلام في كربلاء عام 61 هجرية.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما الطعام الذي يُعدّ ويُوزَّع في أيام عاشوراء بالبحرين تبركاً وإطعاماً للزائرين والمعزين؟', '["المجبوس","المشكل","الهريس","الكبسة"]'::jsonb, 2, 20, 4, 'multi', 'يُعدّ الهريس وهو طبق من القمح المطحون مع اللحم من أبرز الأطعمة التي توزعها المآتم والعائلات البحرينية في أيام عاشوراء تقرباً وإطعاماً.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما اللون الذي يرتديه أبناء الطائفة الشيعية في البحرين والخليج طوال أيام عاشوراء تعبيراً عن الحزن؟', '["الأسود","الأبيض","الأخضر","الأزرق"]'::jsonb, 0, 20, 5, 'multi', 'يرتدي الشيعة في البحرين والخليج الملابس السوداء طوال أيام عاشوراء حداداً على الإمام الحسين وأهل بيته الكرام.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما الشعيرة الصوتية التي يؤديها الرجال في مواكب عاشوراء البحرينية بإيقاع جماعي على الصدور؟', '["الترتيل","التهليل","الإنشاد المنفرد","اللطم"]'::jsonb, 3, 20, 6, 'multi', 'اللطم هو ضرب الصدر باليدين بشكل جماعي منتظم يؤديه الرجال في المواكب تعبيراً عن الحزن والتفجع على مصاب الإمام الحسين.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما القرية البحرينية التي تشتهر بأحد أكبر مواكب عاشوراء وأعرقها على مستوى الخليج؟', '["الرفاع","الدراز","المنامة","عوالي"]'::jsonb, 1, 20, 7, 'multi', 'تشتهر قرية الدراز في البحرين بامتلاكها من أعرق المآتم وأضخم مواكب عاشوراء على المستوى الخليجي وتجذب الزوار من مختلف المناطق.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما اليوم الذي يُحيي فيه شيعة البحرين ذكرى شهادة مسلم بن عقيل رسول الإمام الحسين قبل عاشوراء؟', '["اليوم الثامن من محرم","اليوم الثالث من محرم","اليوم الثاني عشر من محرم","اليوم الأول من صفر"]'::jsonb, 0, 20, 8, 'multi', 'يُحيي شيعة البحرين والخليج ذكرى استشهاد مسلم بن عقيل في الثامن من محرم ضمن سلسلة الإحياءات التي تسبق ذروة عاشوراء.', 'المناسبات الخليجية الدينية');
  INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
  VALUES (v_quiz_id_27, 'ما المصطلح المستخدم في البحرين للدلالة على الشاعر أو المنشد الذي يقود اللطميات في مجالس العزاء؟', '["المنشد الحر","الشاعر الشعبي","المطرب","الرادود"]'::jsonb, 3, 20, 9, 'multi', 'يُطلق لقب ''الرادود'' على من يقود مجالس اللطميات والأناشيد الحسينية في المآتم البحرينية والخليجية وهو يتمتع بمكانة دينية واجتماعية رفيعة.', 'المناسبات الخليجية الدينية');
END $$;
