-- Upsert 16 Personality Quizzes into Supabase DB

-- Quiz: سيرة النبي محمد ﷺ
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-prophet-muhammad'::uuid ON CONFLICT DO NOTHING,
  'سيرة النبي محمد ﷺ',
  'إسلاميات',
  'سيرة النبي محمد ﷺ',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-prophet-muhammad'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'في أي عام وُلد النبي محمد ﷺ؟',
  '["عام الفيل","عام الحزن","عام الفتح","عام الوفود"]'::jsonb,
  0,
  20,
  0,
  'multi',
  'تذكر المصادر الإمامية أن مولده ﷺ كان عام الفيل. — الكافي؛ إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما اليوم المشهور عند الإمامية لولادته ﷺ؟',
  '["12 ربيع الأول","17 ربيع الأول","15 ربيع الأول","10 ربيع الأول"]'::jsonb,
  1,
  20,
  1,
  'multi',
  'المشهور عند الإمامية أن مولده ﷺ كان في السابع عشر من ربيع الأول. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'إلى أي بطن من قريش تنتمي والدته آمنة بنت وهب؟',
  '["بني تيم","بني زهرة","بني عدي","بني مخزوم"]'::jsonb,
  1,
  20,
  2,
  'multi',
  'آمنة هي بنت وهب بن عبد مناف بن زهرة. — الكافي؛ إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من تولّى كفالته ﷺ بعد وفاة أمه؟',
  '["عبد المطلب","العباس","حمزة","أبو طالب"]'::jsonb,
  0,
  20,
  3,
  'multi',
  'انتقلت كفالته بعد وفاة آمنة إلى جده عبد المطلب. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من تولّى كفالته ﷺ بعد وفاة عبد المطلب؟',
  '["أبو لهب","حمزة","العباس","أبو طالب"]'::jsonb,
  3,
  20,
  4,
  'multi',
  'أوصى عبد المطلب أبا طالب برعاية النبي ﷺ، فكفله بعد وفاته. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما اللقب الذي اشتهر به بين أهل مكة قبل البعثة؟',
  '["المرتضى","الصديق","الأمين","المختار"]'::jsonb,
  2,
  20,
  5,
  'multi',
  'عُرف ﷺ بين قريش بالصدق والأمانة قبل إعلان رسالته. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من خرج النبي ﷺ في مالها إلى الشام قبل زواجه منها؟',
  '["خديجة بنت خويلد","هند بنت عتبة","صفية بنت عبد المطلب","عاتكة بنت عبد المطلب"]'::jsonb,
  0,
  20,
  6,
  'multi',
  'خرج ﷺ في تجارة خديجة عليها السلام إلى الشام قبل زواجه منها. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'كم كان عمره ﷺ عند بعثته؟',
  '["خمس وأربعون سنة","خمس وثلاثون سنة","أربعون سنة","خمسون سنة"]'::jsonb,
  2,
  20,
  7,
  'multi',
  'بعث الله النبي محمدًا ﷺ بالرسالة وهو ابن أربعين سنة. — الكافي، باب مولد النبي ووفاته.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'في أي موضع ارتبط بدء نزول الوحي عليه ﷺ؟',
  '["جبل ثبير","غار ثور","غار حراء","جبل أحد"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'ارتبط بدء الوحي بخلوته ﷺ في حراء خارج مكة. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'كم سنة بقيت الدعوة في مكة بعد البعثة؟',
  '["اثنتا عشرة سنة","ثلاث عشرة سنة","عشر سنوات","إحدى عشرة سنة"]'::jsonb,
  1,
  20,
  9,
  'multi',
  'أقام ﷺ بعد البعثة ثلاث عشرة سنة بمكة قبل الهجرة. — الكافي، باب مولد النبي ووفاته.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'إلى أي بلد أذن للمسلمين بالهجرة هربًا من اضطهاد قريش؟',
  '["اليمن","البحرين","الحبشة","الشام"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'أذن ﷺ لجماعة من أصحابه بالهجرة إلى الحبشة اتقاءً لأذى قريش. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من كان ملك البلاد التي قصدها المهاجرون؟',
  '["كسرى","النجاشي","هرقل","المقوقس"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'قصد المسلمون الحبشة لما عُرف عن النجاشي من العدل. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'أين حوصر النبي ﷺ وبنو هاشم خلال مقاطعة قريش؟',
  '["شعب أبي طالب","وادي محسر","شعب عامر","وادي العقيق"]'::jsonb,
  0,
  20,
  12,
  'multi',
  'حاصرت قريش بني هاشم في شعب أبي طالب خلال سنوات المقاطعة. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'أي شخصيتين فقدهما النبي ﷺ في العام المعروف بعام الحزن؟',
  '["القاسم وإبراهيم","أبو طالب وخديجة","عبد المطلب وآمنة","حمزة وجعفر"]'::jsonb,
  1,
  20,
  13,
  'multi',
  'شهدت المرحلة المكية وفاة أبي طالب والسيدة خديجة عليها السلام في فترة متقاربة. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'إلى أي مدينة خرج بعد اشتداد الأذى عليه في مكة؟',
  '["نجران","يثرب","الطائف","خيبر"]'::jsonb,
  2,
  20,
  14,
  'multi',
  'توجه ﷺ إلى الطائف بعد اشتداد الأذى يلتمس النصرة لدعوته. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من لقيه ﷺ في بستان بعد خروجه من الطائف؟',
  '["صهيب","سلمان","بحيراء","عداس"]'::jsonb,
  3,
  20,
  15,
  'multi',
  'تذكر أخبار رحلة الطائف لقاءه بعداس في البستان بعد ما لقيه من أهل الطائف. — بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما الاسم الذي عُرفت به البيعة التي سبقت الهجرة مباشرة؟',
  '["العقبة الثانية","بيعة الرضوان","بيعة النساء","بيعة الفتح"]'::jsonb,
  0,
  20,
  16,
  'multi',
  'مهّدت بيعة العقبة الثانية مع أهل يثرب لانتقال النبي ﷺ والمسلمين إليها. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'في أي غار مكث النبي ﷺ أثناء طريق الهجرة؟',
  '["غار حراء","غار ثور","غار أحد","غار ثبير"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'مكث ﷺ في غار ثور خلال خروجه من مكة في طريقه إلى المدينة. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما أول مسجد أسسه ﷺ عند وصوله إلى أطراف المدينة؟',
  '["مسجد الفتح","مسجد قباء","مسجد القبلتين","مسجد الإجابة"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'نزل ﷺ بقباء عند وصوله وأسس مسجدها قبل دخوله المدينة. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما أول مواجهة عسكرية كبرى مع قريش بعد الهجرة؟',
  '["بدر","أحد","الخندق","الحديبية"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'وقعت بدر في السنة الثانية للهجرة وكانت أولى المواجهات الكبرى مع قريش. — إعلام الورى؛ الإرشاد.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'في أي معركة استشهد حمزة بن عبد المطلب؟',
  '["بدر","حنين","الخندق","أحد"]'::jsonb,
  3,
  20,
  20,
  'multi',
  'استشهد حمزة عليه السلام في غزوة أحد في السنة الثالثة للهجرة. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من أشار بحفر الخندق حول المدينة؟',
  '["عمار بن ياسر","المقداد بن الأسود","أبو ذر الغفاري","سلمان الفارسي"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'ارتبطت خطة حفر الخندق بمشورة سلمان الفارسي عند اقتراب الأحزاب. — بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما اسم الصلح الذي عقده ﷺ مع قريش في السنة السادسة للهجرة؟',
  '["صلح نجران","صلح خيبر","صلح تبوك","صلح الحديبية"]'::jsonb,
  3,
  20,
  22,
  'multi',
  'عقد ﷺ صلح الحديبية مع قريش في السنة السادسة للهجرة. — إعلام الورى؛ الإرشاد.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'إلى أي ملك أرسل النبي ﷺ كتابًا فمزقه بحسب الروايات؟',
  '["هرقل","النجاشي","كسرى","المقوقس"]'::jsonb,
  2,
  20,
  23,
  'multi',
  'تذكر كتب السيرة أن كسرى مزق كتاب النبي ﷺ الذي دعاه فيه إلى الإسلام. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'من كان حاكم مصر الذي أرسل إليه النبي ﷺ كتابًا يدعوه إلى الإسلام؟',
  '["النجاشي","المقوقس","هرقل","كسرى"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'كان المقوقس من الحكام الذين وجه إليهم النبي ﷺ رسائل الدعوة. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'في أي سنة هجرية دخل النبي ﷺ مكة فاتحًا؟',
  '["السادسة","التاسعة","الثامنة","السابعة"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'وقع فتح مكة في شهر رمضان من السنة الثامنة للهجرة. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'أي معركة وقعت بعد فتح مكة في مواجهة هوازن وثقيف؟',
  '["خيبر","تبوك","مؤتة","حنين"]'::jsonb,
  3,
  20,
  26,
  'multi',
  'خرج ﷺ بعد فتح مكة لمواجهة هوازن وثقيف في حنين. — إعلام الورى.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما آخر غزوة خرج فيها النبي ﷺ بجيش كبير بحسب المشهور؟',
  '["مؤتة","خيبر","حنين","تبوك"]'::jsonb,
  3,
  20,
  27,
  'multi',
  'كانت غزوة تبوك سنة 9 هـ آخر غزوات النبي ﷺ التي خرج فيها بنفسه. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'ما الاسم المشهور للحجة التي أداها ﷺ في السنة العاشرة للهجرة؟',
  '["حجة البلاغ","حجة الوداع","حجة الفتح","حجة الإسلام"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'حج النبي ﷺ في السنة العاشرة للهجرة حجته الأخيرة المعروفة بحجة الوداع. — إعلام الورى؛ بحار الأنوار.',
  'سيرة النبي محمد ﷺ'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة النبي محمد ﷺ' LIMIT 1),
  'كم كان عمر النبي ﷺ عند وفاته؟',
  '["أربع وستون سنة","اثنتان وستون سنة","ثلاث وستون سنة","إحدى وستون سنة"]'::jsonb,
  2,
  20,
  29,
  'multi',
  'ينص الكافي على أنه ﷺ قُبض وهو ابن ثلاث وستين سنة. — الكافي، باب مولد النبي ووفاته',
  'سيرة النبي محمد ﷺ'
);

-- Quiz: سيرة الإمام علي (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-ali'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام علي (ع)',
  'إسلاميات',
  'سيرة الإمام علي (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-ali'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'أين وُلد الإمام علي عليه السلام؟',
  '["جوف الكعبة","دار الندوة","شعب أبي طالب","دار أبي طالب"]'::jsonb,
  0,
  20,
  0,
  'multi',
  'يذكر الشيخ المفيد ولادته عليه السلام بمكة في البيت الحرام، وهي فضيلة اختص بها. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من هي والدته؟',
  '["فاطمة بنت أسد","أميمة بنت عبد المطلب","صفية بنت عبد المطلب","عاتكة بنت عبد المطلب"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'أمه فاطمة بنت أسد بن هاشم، كما نص الشيخ المفيد. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند بعثة النبي ﷺ؟',
  '["ست عشرة سنة","عشر سنوات","أربع عشرة سنة","اثنتا عشرة سنة"]'::jsonb,
  1,
  20,
  2,
  'multi',
  'يذكر المفيد أن عمره عليه السلام عند المبعث كان عشر سنين. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما الاسم المشهور للواقعة التي جمع فيها النبي ﷺ عشيرته الأقربين؟',
  '["يوم الدار","يوم العقبة","يوم الرحبة","يوم السقيفة"]'::jsonb,
  0,
  20,
  3,
  'multi',
  'عُرفت واقعة إنذار بني عبد المطلب في المصادر بيوم الدار. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'أين بات ليلة خروج النبي ﷺ من مكة؟',
  '["دار الأرقم","فراش النبي","غار حراء","شعب أبي طالب"]'::jsonb,
  1,
  20,
  4,
  'multi',
  'بات عليه السلام في فراش رسول الله ﷺ ليلة الهجرة معرضًا نفسه لخطر قريش. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما المهمة التي بقي لأجلها في مكة بعد خروج النبي ﷺ؟',
  '["تجهيز السرايا","رد الأمانات","كتابة العهود","جمع الصدقات"]'::jsonb,
  1,
  20,
  5,
  'multi',
  'أمره النبي ﷺ بأداء ودائعه وأماناته إلى أهلها قبل اللحاق به. — الإرشاد؛ إعلام الورى.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'بمن آخى النبي ﷺ الإمام علي عليه السلام بعد الهجرة؟',
  '["سلمان","حمزة","بنفسه","المقداد"]'::jsonb,
  2,
  20,
  6,
  'multi',
  'تذكر المصادر أن النبي ﷺ اختاره أخًا لنفسه عند المؤاخاة. — بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من بارزه في المبارزة الافتتاحية يوم بدر؟',
  '["أبو جهل","أمية بن خلف","الوليد بن عتبة","شيبة بن ربيعة"]'::jsonb,
  2,
  20,
  7,
  'multi',
  'خرج عليه السلام لمبارزة الوليد بن عتبة في بداية معركة بدر فقتله. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'أي عبارة اشتهرت في المصادر عند وصف بطولته يوم أحد؟',
  '["لا سيف إلا ذو الفقار","الحرب خدعة","النصر مع الصبر","اليوم يوم المرحمة"]'::jsonb,
  0,
  20,
  8,
  'multi',
  'رُوي النداء «لا سيف إلا ذو الفقار ولا فتى إلا علي» في أخبار أحد. — بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من واجهه في المبارزة الشهيرة يوم الخندق؟',
  '["ضرار بن الخطاب","عكرمة بن أبي جهل","عمرو بن عبد ود","هبيرة بن أبي وهب"]'::jsonb,
  2,
  20,
  9,
  'multi',
  'خرج عليه السلام إلى عمرو بن عبد ود بعد عبوره الخندق فقتله. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من تولّى كتابة وثيقة الصلح مع قريش؟',
  '["أبي بن كعب","زيد بن ثابت","علي بن أبي طالب","معاذ بن جبل"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'تولّى عليه السلام كتابة كتاب الصلح بأمر النبي ﷺ. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'في أي معركة ارتبط به حديث إعطاء الراية لمن يحب الله ورسوله؟',
  '["حنين","خيبر","بدر","أحد"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'دفع النبي ﷺ الراية إليه في خيبر بعد قوله المشهور في حاملها. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من قتله في المبارزة التي سبقت فتح حصن خيبر؟',
  '["مرحب","كنانة","حيي","سلام"]'::jsonb,
  0,
  20,
  12,
  'multi',
  'تذكر أخبار خيبر مبارزته عليه السلام لمرحب وقتله. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما المهمة التي أوكلها إليه النبي ﷺ في موسم الحج سنة 9 هـ؟',
  '["حراسة طرق مكة","قيادة حجاج المدينة","تبليغ سورة براءة","جمع زكاة اليمن"]'::jsonb,
  2,
  20,
  13,
  'multi',
  'بعثه النبي ﷺ ليتولى تبليغ آيات من سورة براءة في موسم الحج. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'إلى أي جهة بعثه النبي ﷺ في مهمة دعوية قبيل حجة الوداع؟',
  '["اليمامة","الشام","البحرين","اليمن"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'بعث النبي ﷺ أمير المؤمنين عليه السلام إلى اليمن للدعوة والقضاء في الناس. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'بأي نبي شُبّهت منزلته من النبي ﷺ في الحديث المشهور؟',
  '["يوشع","سليمان","هارون","إسماعيل"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'قال النبي ﷺ له: «أنت مني بمنزلة هارون من موسى إلا أنه لا نبي بعدي». — الكافي؛ الإرشاد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'في أي موضع وقع الإعلان الأشهر عن ولايته بعد حجة الوداع؟',
  '["مسجد قباء","جبل أحد","غدير خم","وادي العقيق"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'وقع حديث الغدير في طريق العودة من حجة الوداع عند غدير خم. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما العبارة المحورية الواردة في حديث الغدير؟',
  '["أنا مدينة العلم وعلي بابها","علي مع القرآن والقرآن معه","من كنت مولاه فعلي مولاه","علي مني وأنا منه"]'::jsonb,
  2,
  20,
  17,
  'multi',
  'نقلت المصادر الإمامية قول النبي ﷺ «من كنت مولاه فعلي مولاه» ضمن حديث الغدير. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما المهمة التي تولّاها بعد وفاة النبي ﷺ مباشرة؟',
  '["قيادة جيش أسامة","تجهيزه ودفنه","جمع صدقات المدينة","حراسة حدود المدينة"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'تولّى عليه السلام غسل رسول الله ﷺ وتجهيزه ودفنه بعد وفاته. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'إلى أي مدينة نقل مركز حكمه بعد وقعة الجمل؟',
  '["المدائن","الكوفة","البصرة","مكة"]'::jsonb,
  1,
  20,
  19,
  'multi',
  'اتخذ عليه السلام الكوفة مقرًا لحكمه بعد أحداث الجمل. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'قرب أي مدينة دارت وقعة الجمل؟',
  '["المدائن","البصرة","الموصل","الكوفة"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'وقعت معركة الجمل في محيط البصرة سنة 36 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من كان من أبرز قادة الطرف المقابل في وقعة الجمل؟',
  '["عمرو بن العاص","طلحة بن عبيد الله","النعمان بن بشير","معاوية بن أبي سفيان"]'::jsonb,
  1,
  20,
  21,
  'multi',
  'كان طلحة والزبير من أبرز قادة الطرف المقابل في وقعة الجمل. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من قاد جيش الشام في صفين؟',
  '["بسر بن أرطاة","حبيب بن مسلمة","معاوية بن أبي سفيان","مروان بن الحكم"]'::jsonb,
  2,
  20,
  22,
  'multi',
  'دارت صفين بين جيش أمير المؤمنين عليه السلام وجيش الشام بقيادة معاوية. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما الحيلة التي استُخدمت عند اشتداد القتال في صفين؟',
  '["إحراق الخيام","قطع الجسور","رفع المصاحف","هدم الأسوار"]'::jsonb,
  2,
  20,
  23,
  'multi',
  'رُفعت المصاحف والدعوة إلى التحكيم عندما اشتد القتال على جيش الشام. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من مثّل أهل الشام في التحكيم بعد صفين؟',
  '["حبيب بن مسلمة","معاوية بن أبي سفيان","أبو الأعور السلمي","عمرو بن العاص"]'::jsonb,
  3,
  20,
  24,
  'multi',
  'اختار أهل الشام عمرو بن العاص ممثلًا لهم في قضية التحكيم. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'أي جماعة واجهها في النهروان؟',
  '["الزبيريون","الخوارج","المرتدون","الأمويون"]'::jsonb,
  1,
  20,
  25,
  'multi',
  'وقعت النهروان بين أمير المؤمنين عليه السلام والخوارج بعد أحداث التحكيم. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'من نفذ الاعتداء الذي أدى إلى شهادته؟',
  '["وردان بن مجالد","عمرو بن بكر","عبد الرحمن بن ملجم","شبيب بن بجرة"]'::jsonb,
  2,
  20,
  26,
  'multi',
  'ضربه عبد الرحمن بن ملجم بالسيف في مسجد الكوفة. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'في أي موضع وقعت الضربة التي أدت إلى شهادته؟',
  '["مسجد السهلة","مسجد قباء","مسجد الكوفة","مسجد البصرة"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'ضُرب عليه السلام عند خروجه للصلاة في مسجد الكوفة. — الإرشاد للمفيد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'في أي يوم من رمضان استشهد عليه السلام؟',
  '["الثالث والعشرون","السابع عشر","الحادي والعشرون","التاسع عشر"]'::jsonb,
  2,
  20,
  28,
  'multi',
  'استشهد عليه السلام ليلة الحادي والعشرين من شهر رمضان سنة 40 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي (ع)' LIMIT 1),
  'ما الاسم التاريخي للمنطقة التي دُفن فيها سرًا؟',
  '["الغري","النخيلة","الرحبة","الحيرة"]'::jsonb,
  0,
  20,
  29,
  'multi',
  'دُفن عليه السلام سرًا في الغري، وهو موضع مرقده المعروف اليوم في النجف. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي (ع)'
);

-- Quiz: سيرة السيدة فاطمة الزهراء (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-fatima-al-zahra'::uuid ON CONFLICT DO NOTHING,
  'سيرة السيدة فاطمة الزهراء (ع)',
  'إسلاميات',
  'سيرة السيدة فاطمة الزهراء (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-fatima-al-zahra'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من هي والدة السيدة فاطمة الزهراء عليها السلام؟',
  '["صفية بنت عبد المطلب","فاطمة بنت أسد","عاتكة بنت عبد المطلب","خديجة بنت خويلد"]'::jsonb,
  3,
  20,
  0,
  'multi',
  'الزهراء عليها السلام بنت رسول الله ﷺ من السيدة خديجة الكبرى عليها السلام. — الإرشاد؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'في أي يوم من جمادى الآخرة كانت ولادتها بحسب المشهور الإمامي؟',
  '["العشرون","العاشر","الخامس عشر","الخامس والعشرون"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'المشهور عند الإمامية أن ولادتها عليها السلام كانت في العشرين من جمادى الآخرة. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'كم سنة بعد البعثة كانت ولادتها وفق الرواية الإمامية المشهورة؟',
  '["ثلاث سنوات","خمس سنوات","ست سنوات","أربع سنوات"]'::jsonb,
  1,
  20,
  2,
  'multi',
  'تذكر الرواية المشهورة عند الإمامية أن ولادتها كانت بعد المبعث بخمس سنين. — الكافي؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'بأي كنية اشتهرت لعظيم عنايتها بأبيها ﷺ؟',
  '["أم المؤمنين","أم المساكين","أم الكتاب","أم أبيها"]'::jsonb,
  3,
  20,
  3,
  'multi',
  '«أم أبيها» من أشهر كناها في كتب السيرة والمناقب الإمامية. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من رافقها في خروجها من مكة إلى المدينة بحسب أخبار الهجرة؟',
  '["زيد بن حارثة","مصعب بن عمير","سعد بن معاذ","علي بن أبي طالب"]'::jsonb,
  3,
  20,
  4,
  'multi',
  'خرج أمير المؤمنين عليه السلام بالفواطم من مكة بعد إتمام ما كلفه به النبي ﷺ. — الإرشاد؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'في أي سنة هجرية وقع زواجها بحسب المشهور؟',
  '["الثالثة","الثانية","الأولى","الرابعة"]'::jsonb,
  1,
  20,
  5,
  'multi',
  'المشهور أن زواجها من أمير المؤمنين عليه السلام كان في السنة الثانية للهجرة. — الإرشاد؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما الذي بيع للاستعانة بثمنه في أمر زواجها؟',
  '["فرس","درع","سيف","رمح"]'::jsonb,
  1,
  20,
  6,
  'multi',
  'تذكر الروايات أن النبي ﷺ أمر عليًا عليه السلام ببيع درعه للاستعانة بثمنها في الزواج. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من كان أول أبنائها ولادة؟',
  '["زينب بنت علي","الحسن بن علي","أم كلثوم بنت علي","الحسين بن علي"]'::jsonb,
  1,
  20,
  7,
  'multi',
  'كان الإمام الحسن عليه السلام أول أولادها، وولد في السنة الثالثة للهجرة. — الكافي؛ الإرشاد.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما اسم ابنتها التي ارتبطت لاحقًا بأحداث كربلاء؟',
  '["سكينة","رقية","فاطمة","زينب"]'::jsonb,
  3,
  20,
  8,
  'multi',
  'السيدة زينب عليها السلام ابنة أمير المؤمنين والزهراء عليهما السلام، وكان لها الدور المعروف بعد واقعة كربلاء. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما اسم الابن الذي تذكره المصادر الإمامية ضمن أولادها ولم يدرك الحياة بعد وفاة أمه؟',
  '["محسن","جعفر","إبراهيم","محمد"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'يذكر الشيخ المفيد محسنًا ضمن أولاد أمير المؤمنين من فاطمة عليها السلام. — الإرشاد للمفيد.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما العمل المنزلي الذي ورد أنها طلبت بسببه خادمًا يعينها؟',
  '["الخياطة","السقي","الطحن","النسج"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'تذكر الروايات ما أصاب يدها من أثر الرحى ضمن خبر طلبها من النبي ﷺ خادمًا. — الكافي؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ماذا علّمها النبي ﷺ بدلًا من الخادم؟',
  '["صيامًا","تسبيحًا","صلاةً","صدقةً"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'علّمها النبي ﷺ الذكر المعروف بتسبيح الزهراء عليها السلام. — الكافي، كتاب الصلاة.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'كم تكبيرة يبدأ بها تسبيحها المعروف؟',
  '["أربع وثلاثون","ثلاث وثلاثون","اثنتان وثلاثون","خمس وثلاثون"]'::jsonb,
  0,
  20,
  12,
  'multi',
  'يبدأ تسبيح الزهراء عليها السلام بأربع وثلاثين تكبيرة. — الكافي.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'كم يبلغ مجموع أذكار تسبيح الزهراء عليها السلام؟',
  '["تسعة وتسعين","ثمانية وتسعين","مئة","مئة وواحد"]'::jsonb,
  2,
  20,
  13,
  'multi',
  'يتكون من 34 تكبيرة و33 تحميدة و33 تسبيحة، ومجموعها مئة. — الكافي.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من كانت ممن يخدم في بيتها بحسب الروايات؟',
  '["أسماء","خولة","فضة","سلمى"]'::jsonb,
  2,
  20,
  14,
  'multi',
  'تذكر المصادر فضة ضمن من خدم السيدة الزهراء عليها السلام وعاش في بيتها. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما اسم الأرض التي أصبحت محور مطالبتها بعد وفاة النبي ﷺ؟',
  '["ينبع","تيماء","وادي القرى","فدك"]'::jsonb,
  3,
  20,
  15,
  'multi',
  'كانت فدك من أبرز القضايا التي احتجت فيها الزهراء عليها السلام بعد وفاة أبيها ﷺ. — الكافي؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'أين ألقت احتجاجها الأشهر في قضية فدك؟',
  '["مسجد النبي","بيت أم سلمة","مسجد قباء","بقيع الغرقد"]'::jsonb,
  0,
  20,
  16,
  'multi',
  'خرجت عليها السلام إلى مسجد رسول الله ﷺ وألقت خطبتها المعروفة بالفدكية. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'أي نبي ذكرته في احتجاجها القرآني على قضية الإرث؟',
  '["سليمان","يوسف","أيوب","يونس"]'::jsonb,
  0,
  20,
  17,
  'multi',
  'استشهدت بقوله تعالى ﴿وورث سليمان داود﴾ ضمن احتجاجها في الخطبة. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'أي نبي آخر استشهدت بدعائه في قضية الإرث؟',
  '["يحيى","زكريا","إلياس","إدريس"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'استشهدت بدعاء زكريا عليه السلام ﴿يرثني ويرث من آل يعقوب﴾. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'إلى أي قبيلتين وجّهت جانبًا من خطابها في المسجد؟',
  '["تميم وهوازن","ثقيف وكنانة","غطفان وهذيل","الأوس والخزرج"]'::jsonb,
  3,
  20,
  19,
  'multi',
  'تضمنت الخطبة خطابًا للأنصار وتذكيرهم بمكانتهم ونصرتهم للدين. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما اسم الخطبة التي اشتهرت باحتجاجها على ما جرى بعد وفاة النبي ﷺ؟',
  '["البيان","الشقشقية","الوسيلة","الفدكية"]'::jsonb,
  3,
  20,
  20,
  'multi',
  'عُرفت خطبتها في مسجد النبي ﷺ في التراث باسم الخطبة الفدكية. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من كان يحدّثها ويسليها بعد وفاة أبيها وفق روايات الكافي؟',
  '["ملك","شاعر","صحابي","طبيب"]'::jsonb,
  0,
  20,
  21,
  'multi',
  'تروي المصادر الإمامية أن الملَك كان يأتيها بعد وفاة النبي ﷺ فيحسن عزاءها ويخبرها بأمور. — الكافي، كتاب الحجة.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من كان يكتب ما كانت تسمعه في تلك الفترة؟',
  '["عمار بن ياسر","سلمان الفارسي","علي بن أبي طالب","المقداد بن الأسود"]'::jsonb,
  2,
  20,
  22,
  'multi',
  'تنص رواية الكافي على أن أمير المؤمنين عليه السلام كان يكتب ما تسمعه. — الكافي، كتاب الحجة.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما الاسم الذي أطلق على ما جُمع من تلك الأخبار؟',
  '["كتاب الحكمة","مصحف فاطمة","كتاب الوصية","صحيفة النور"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'تسمي الروايات الإمامية هذا الكتاب «مصحف فاطمة»، ولا تصفه بأنه قرآن آخر. — الكافي، كتاب الحجة.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'بحسب رواية في الكافي، كم عاشت بعد وفاة النبي ﷺ؟',
  '["خمسة وسبعين يومًا","خمسة وثمانين يومًا","خمسة وتسعين يومًا","مئة وخمسة أيام"]'::jsonb,
  0,
  20,
  24,
  'multi',
  'ورد في رواية صحيحة السند في الكافي أنها مكثت بعد رسول الله ﷺ خمسة وسبعين يومًا، مع وجود روايات أخرى في مدة بقائها. — الكافي، كتاب الحجة.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من أوصت أن يتولى أمر تجهيزها بعد وفاتها؟',
  '["العباس بن عبد المطلب","عمار بن ياسر","علي بن أبي طالب","سلمان الفارسي"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'تولى أمير المؤمنين عليه السلام غسلها وتجهيزها ودفنها تنفيذًا لوصيتها. — الكافي؛ الإرشاد.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'من ارتبط اسمها في الروايات بمساعدتها في إعداد النعش؟',
  '["أم أيمن","أسماء بنت عميس","أم سلمة","سلمى أم رافع"]'::jsonb,
  1,
  20,
  26,
  'multi',
  'تذكر الروايات خبر أسماء بنت عميس وما أرت الزهراء عليها السلام من هيئة النعش المستور. — بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'متى جرى دفنها تنفيذًا لوصيتها؟',
  '["ظهرًا","صباحًا","ليلًا","عصرًا"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'تنص المصادر الإمامية على دفنها عليها السلام ليلًا تنفيذًا لوصيتها. — الكافي؛ الإرشاد.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'ما الذي ميّز موضع قبرها بعد الدفن؟',
  '["نقله إلى الكوفة","بناء قبة عليه","نقله إلى مكة","خفاء موضعه"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'لم يُعرف موضع قبرها على وجه القطع، وورد الاختلاف في تحديد مكان دفنها. — الكافي؛ الإرشاد.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة فاطمة الزهراء (ع)' LIMIT 1),
  'أي موضع ورد ضمن الأقوال الإمامية في تحديد قبرها؟',
  '["جبل أحد","وادي العقيق","مسجد قباء","بيتها"]'::jsonb,
  3,
  20,
  29,
  'multi',
  'ورد في الروايات والآراء الإمامية أن قبرها قد يكون في بيتها، مع وجود أقوال أخرى في موضعه. — الكافي؛ بحار الأنوار.',
  'سيرة السيدة فاطمة الزهراء (ع)'
);

-- Quiz: سيرة الإمام الحسن المجتبى (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-hasan'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام الحسن المجتبى (ع)',
  'إسلاميات',
  'سيرة الإمام الحسن المجتبى (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-hasan'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'في أي شهر وُلد الإمام الحسن عليه السلام؟',
  '["شعبان","رمضان","شوال","رجب"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'ولد عليه السلام في شهر رمضان من السنة الثالثة للهجرة. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'في أي سنة هجرية كانت ولادته؟',
  '["الخامسة","الرابعة","الثالثة","الثانية"]'::jsonb,
  2,
  20,
  1,
  'multi',
  'تذكر المصادر الإمامية أن ولادته عليه السلام كانت سنة ثلاث للهجرة. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من تولّى تسميته بعد ولادته بحسب الروايات؟',
  '["حمزة بن عبد المطلب","العباس بن عبد المطلب","علي بن أبي طالب","رسول الله"]'::jsonb,
  3,
  20,
  2,
  'multi',
  'تذكر الروايات أن رسول الله ﷺ سمّاه حسنًا بعد ولادته. — بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما الكنية المشهورة للإمام الحسن عليه السلام؟',
  '["أبو الحسن","أبو عبد الله","أبو محمد","أبو القاسم"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'تذكر كتب التراجم الإمامية أن كنيته عليه السلام أبو محمد. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما اللقب الأشهر الذي اقترن باسمه؟',
  '["الباقر","الصادق","المجتبى","السجاد"]'::jsonb,
  2,
  20,
  4,
  'multi',
  'اشتهر الإمام الحسن عليه السلام في التراث الإمامي بلقب «المجتبى». — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند وفاة النبي ﷺ؟',
  '["خمس سنوات","تسع سنوات","سبع سنوات","إحدى عشرة سنة"]'::jsonb,
  2,
  20,
  5,
  'multi',
  'ولد سنة 3 هـ وتوفي النبي ﷺ سنة 11 هـ، فكان عمره نحو سبع سنوات. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'إلى أي مدينة أرسله أمير المؤمنين عليه السلام لاستنفار أهلها قبل وقعة الجمل؟',
  '["المدائن","واسط","الكوفة","البصرة"]'::jsonb,
  2,
  20,
  6,
  'multi',
  'أرسله أمير المؤمنين عليه السلام إلى الكوفة لاستنفار أهلها قبيل الجمل. — بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من رافقه في مهمة استنفار أهل الكوفة؟',
  '["عدي بن حاتم","حجر بن عدي","قيس بن سعد","عمار بن ياسر"]'::jsonb,
  3,
  20,
  7,
  'multi',
  'تذكر أخبار الجمل خروج الإمام الحسن عليه السلام وعمار بن ياسر إلى أهل الكوفة. — بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'بعد أي حدث انتقلت إليه الإمامة؟',
  '["وفاة رسول الله","انتهاء وقعة صفين","انتهاء وقعة الجمل","استشهاد أمير المؤمنين"]'::jsonb,
  3,
  20,
  8,
  'multi',
  'انتقلت الإمامة إليه بعد شهادة أبيه أمير المؤمنين عليه السلام سنة 40 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'كم كان عمره عند بدء إمامته تقريبًا؟',
  '["تسع وثلاثون سنة","إحدى وأربعون سنة","خمس وثلاثون سنة","سبع وثلاثون سنة"]'::jsonb,
  3,
  20,
  9,
  'multi',
  'ولد سنة 3 هـ وانتقلت إليه الإمامة سنة 40 هـ، فكان عمره نحو سبع وثلاثين سنة. — الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من كان خصمه السياسي والعسكري الرئيسي بعد توليه الأمر؟',
  '["معاوية بن أبي سفيان","عبد الله بن الزبير","عمرو بن العاص","مروان بن الحكم"]'::jsonb,
  0,
  20,
  10,
  'multi',
  'رفض معاوية الدخول في طاعته وتحرك بجيش الشام نحو العراق. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من بعثه معاوية إلى الكوفة والبصرة للتجسس وإثارة الاضطراب؟',
  '["أربعة رجال","رجلين","خمسة رجال","ثلاثة رجال"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'يذكر المفيد إرسال معاوية رجلًا من حمير إلى الكوفة وآخر من بني القين إلى البصرة للتجسس. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'إلى أي معسكر خرج لحشد قواته في مواجهة جيش الشام؟',
  '["ساباط","الرحبة","النخيلة","النهروان"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'خرج عليه السلام إلى معسكر النخيلة لتنظيم الجيش والتحرك لمواجهة معاوية. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من جعله قائدًا لمقدمة جيشه؟',
  '["عدي بن حاتم","قيس بن سعد","حجر بن عدي","عبيد الله بن العباس"]'::jsonb,
  3,
  20,
  13,
  'multi',
  'جعل عليه السلام عبيد الله بن العباس على مقدمة جيشه المتجهة لمواجهة جيش الشام. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'كم كان عدد القوة التي خرجت مع قائد المقدمة بحسب رواية الإرشاد؟',
  '["ثمانية آلاف","عشرة آلاف","اثنا عشر ألفًا","أربعة عشر ألفًا"]'::jsonb,
  2,
  20,
  14,
  'multi',
  'يذكر الشيخ المفيد أن مقدمة الجيش ضمت اثني عشر ألفًا. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من عيّنه الإمام ليخلف قائد المقدمة إذا أصابه مكروه؟',
  '["حجر بن عدي","عدي بن حاتم","سعيد بن قيس","قيس بن سعد"]'::jsonb,
  3,
  20,
  15,
  'multi',
  'أمر الإمام بأن يتولى قيس بن سعد القيادة بعد عبيد الله بن العباس عند الحاجة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما الذي فعله عبيد الله بن العباس بعد مراسلات معاوية؟',
  '["اعتزل الفريقين","عاد إلى الكوفة","التحق بمعاوية","توجه إلى المدينة"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'انحاز عبيد الله سرًا إلى معاوية بعد إغرائه بالمال، فانتقلت القيادة إلى قيس. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما الوسيلة الرئيسية التي استخدمها معاوية لاستمالة بعض قادة جيش الإمام؟',
  '["الأسر والرهائن","المصاهرة والأنساب","الأموال والوعود","العفو عن الأسرى"]'::jsonb,
  2,
  20,
  17,
  'multi',
  'تصف المصادر مراسلات معاوية وبذله الأموال والوعود لاستمالة شخصيات من جيش العراق. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما الإشاعة التي ساهمت في اضطراب معسكر الإمام؟',
  '["سقوط مدينة الكوفة","وفاة معاوية في الشام","أسر عبيد الله بن العباس","مقتل قيس بن سعد"]'::jsonb,
  3,
  20,
  18,
  'multi',
  'أشاع معاوية خبر مقتل قيس بن سعد لإضعاف معنويات جيش الإمام وإثارة الاضطراب. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'في أي موضع تعرض الإمام للاعتداء الذي أصابه في فخذه؟',
  '["النهروان","ساباط","النخيلة","الأنبار"]'::jsonb,
  1,
  20,
  19,
  'multi',
  'وقع الاعتداء عليه عليه السلام في ساباط أثناء اضطراب الجيش. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من اعتدى عليه في ساباط بحسب الإرشاد؟',
  '["عمرو بن الحجاج","شمر بن ذي الجوشن","شبث بن ربعي","الجراح بن سنان"]'::jsonb,
  3,
  20,
  20,
  'multi',
  'يذكر المفيد أن الجراح بن سنان هجم عليه وأصابه في فخذه. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'إلى أين نُقل للعلاج بعد إصابته؟',
  '["المدائن","البصرة","الأنبار","الكوفة"]'::jsonb,
  0,
  20,
  21,
  'multi',
  'نُقل عليه السلام بعد جرحه إلى المدائن للعلاج. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'في دار من أقام أثناء علاجه في المدائن؟',
  '["عدي بن حاتم","قيس بن سعد","حجر بن عدي","سعد بن مسعود"]'::jsonb,
  3,
  20,
  22,
  'multi',
  'نزل عليه السلام في المدائن على سعد بن مسعود الثقفي أثناء معالجة جرحه. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما الحدث الذي أنهى المواجهة العسكرية المباشرة مع معاوية؟',
  '["الانتصار","الصلح","التحكيم","الانسحاب"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'انتهت المواجهة بعقد الصلح في ظل تفكك الجيش والخذلان الذي واجهه الإمام. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'أي شرط ارتبط بموقف الإمام من مستقبل الحكم بعد معاوية؟',
  '["أن يعهد إلى أهل المدينة","ألا يعهد إلى أحد","أن يعهد إلى أهل الشورى","أن يعهد إلى الحسين"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'تذكر روايات شروط الصلح منع معاوية من فرض عهدٍ بالخلافة من بعده. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'إلى أي مدينة عاد بعد الصلح؟',
  '["البصرة","المدائن","المدينة","مكة"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'عاد عليه السلام إلى المدينة بعد الصلح وأقام فيها بقية حياته. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'كم دامات إمامته تقريبًا؟',
  '["تسع سنوات","عشر سنوات","إحدى عشرة سنة","ثماني سنوات"]'::jsonb,
  1,
  20,
  26,
  'multi',
  'امتدت إمامته من سنة 40 هـ حتى شهادته سنة 50 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'ما سبب وفاته بحسب المصادر الإمامية؟',
  '["الجراح","السم","الطاعون","الحمى"]'::jsonb,
  1,
  20,
  27,
  'multi',
  'تنص المصادر الإمامية على استشهاده عليه السلام مسمومًا. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'من نسبت إليها المصادر الإمامية دس السم إليه؟',
  '["هند بنت سهيل","أم بشير الأنصارية","خولة بنت منظور","جعدة بنت الأشعث"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'تنسب الروايات الإمامية تسميمه إلى جعدة بنت الأشعث بتحريض من معاوية. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن المجتبى (ع)' LIMIT 1),
  'أين دُفن بعد استشهاده؟',
  '["البقيع","أحد","قباء","الروضة"]'::jsonb,
  0,
  20,
  29,
  'multi',
  'دُفن عليه السلام في بقيع الغرقد بالمدينة. — الإرشاد؛ الكافي.',
  'سيرة الإمام الحسن المجتبى (ع)'
);

-- Quiz: سيرة الإمام الحسين (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-husayn'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام الحسين (ع)',
  'إسلاميات',
  'سيرة الإمام الحسين (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-husayn'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'في أي يوم من شعبان كانت ولادة الإمام الحسين عليه السلام بحسب المشهور الإمامي؟',
  '["السابع","الخامس","الثالث","الأول"]'::jsonb,
  2,
  20,
  0,
  'multi',
  'المشهور في المصادر الإمامية أن ولادته عليه السلام كانت في الثالث من شعبان سنة 4 هـ. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو الحسن","أبو محمد","أبو جعفر","أبو عبد الله"]'::jsonb,
  3,
  20,
  1,
  'multi',
  'تذكر المصادر الإمامية أن كنيته عليه السلام «أبو عبد الله». — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'إلى من انتقلت الإمامة بعد استشهاد الإمام الحسن عليه السلام؟',
  '["العباس بن علي","الحسين بن علي","عبد الله بن جعفر","محمد بن الحنفية"]'::jsonb,
  1,
  20,
  2,
  'multi',
  'نصت المصادر الإمامية على انتقال الإمامة إليه بعد أخيه الإمام الحسن عليه السلام. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'في أي سنة بدأت إمامته؟',
  '["51 هـ","50 هـ","48 هـ","49 هـ"]'::jsonb,
  1,
  20,
  3,
  'multi',
  'بدأت إمامته بعد شهادة الإمام الحسن عليه السلام سنة 50 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من كان يتولى الحكم عند بداية إمامته؟',
  '["يزيد بن معاوية","مروان بن الحكم","معاوية بن يزيد","معاوية بن أبي سفيان"]'::jsonb,
  3,
  20,
  4,
  'multi',
  'بدأت إمامته في عهد معاوية واستمرت هذه المرحلة حتى وفاة معاوية سنة 60 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من حاول معاوية تثبيت ولاية العهد له في أواخر حكمه؟',
  '["يزيد بن معاوية","الوليد بن عتبة","مروان بن الحكم","عمرو بن سعيد"]'::jsonb,
  0,
  20,
  5,
  'multi',
  'سعى معاوية لأخذ البيعة لابنه يزيد في حياته، وهو ما رفضه الإمام الحسين عليه السلام. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من كان والي المدينة حين وصل أمر أخذ البيعة بعد وفاة معاوية؟',
  '["سعيد بن العاص","عمرو بن سعيد","مروان بن الحكم","الوليد بن عتبة"]'::jsonb,
  3,
  20,
  6,
  'multi',
  'كتب يزيد إلى الوليد بن عتبة، والي المدينة، يأمره بأخذ البيعة من الإمام. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من كان حاضرًا عند الوالي وحثه على التشدد في أخذ البيعة؟',
  '["مروان بن الحكم","عمرو بن سعيد","عبد الله بن الزبير","سعيد بن العاص"]'::jsonb,
  0,
  20,
  7,
  'multi',
  'كان مروان حاضرًا عند الوليد وأشار عليه بالتشدد في أخذ البيعة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'إلى أي مدينة توجه الإمام بعد خروجه من المدينة؟',
  '["مكة","الكوفة","الطائف","البصرة"]'::jsonb,
  0,
  20,
  8,
  'multi',
  'خرج عليه السلام من المدينة متجهًا إلى مكة بعد رفض البيعة ليزيد. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'عند قبر من قضى جانبًا من ليلته قبل مغادرة المدينة؟',
  '["رسول الله","فاطمة الزهراء","الإمام الحسن","حمزة بن عبد المطلب"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'تذكر أخبار خروجه أنه أتى قبر جده رسول الله ﷺ قبل مغادرة المدينة. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من نصحه بالتوجه إلى اليمن بدل العراق؟',
  '["عبد الله بن جعفر","عبد الله بن عباس","عبد الله بن عمر","محمد بن الحنفية"]'::jsonb,
  3,
  20,
  10,
  'multi',
  'تضمنت وصية محمد بن الحنفية لأخيه اقتراح مكة ثم اليمن إن لم يأمن في مكة. — بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من أرسله الإمام إلى الكوفة بعد كثرة رسائل أهلها؟',
  '["مسلم بن عقيل","قيس بن مسهر","سليمان بن صرد","عبد الله بن يقطر"]'::jsonb,
  0,
  20,
  11,
  'multi',
  'بعث ابن عمه مسلم بن عقيل إلى الكوفة للتحقق من موقف أهلها وأخذ البيعة منهم. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من رافق مسلم بن عقيل دليلين في بداية طريقه إلى العراق؟',
  '["من كندة","من قيس","من أسد","من تميم"]'::jsonb,
  1,
  20,
  12,
  'multi',
  'يذكر المفيد أن مسلمًا استأجر دليلين من قيس في طريقه إلى الكوفة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'في دار من استقر مسلم بن عقيل بعد اشتداد المراقبة في الكوفة؟',
  '["مسلم بن عوسجة","هانئ بن عروة","حبيب بن مظاهر","سليمان بن صرد"]'::jsonb,
  1,
  20,
  13,
  'multi',
  'انتقل مسلم إلى دار هانئ بن عروة بعد وصول عبيد الله بن زياد وتشديده الرقابة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من أرسله يزيد لتولي الكوفة وإخماد حركة مسلم؟',
  '["عبيد الله بن زياد","حصين بن نمير","شمر بن ذي الجوشن","عمر بن سعد"]'::jsonb,
  0,
  20,
  14,
  'multi',
  'ضم يزيد الكوفة إلى عبيد الله بن زياد وأمره بملاحقة مسلم بن عقيل. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من أُرسل للتجسس على أنصار مسلم بن عقيل متظاهرًا بأنه منهم؟',
  '["سنان","مزاحم","معقل","كثير"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'أرسل ابن زياد مولىً له يُدعى معقلًا للتسلل إلى جماعة مسلم ومعرفة أخبارهم. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'ما مصير هانئ بن عروة بعد اعتقاله؟',
  '["سُجن","قُتل","نُفي","أُطلق"]'::jsonb,
  1,
  20,
  16,
  'multi',
  'أمر عبيد الله بن زياد بقتل هانئ بن عروة بعد اعتقاله. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'أين استشهد مسلم بن عقيل؟',
  '["دار هانئ","قصر الإمارة","مسجد الكوفة","سوق الكوفة"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'أُصعد مسلم إلى أعلى قصر الإمارة في الكوفة وقُتل بأمر ابن زياد. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'في أي يوم خرج الإمام من مكة متجهًا نحو العراق؟',
  '["الخامس من ذي الحجة","السادس من ذي الحجة","الثامن من ذي الحجة","السابع من ذي الحجة"]'::jsonb,
  2,
  20,
  18,
  'multi',
  'خرج عليه السلام من مكة يوم التروية، الثامن من ذي الحجة سنة 60 هـ. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من التقى به الإمام في الطريق وكان قادمًا من جهة الكوفة؟',
  '["الفرزدق","الكميت","الأخطل","جرير"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'التقى الإمام بالفرزدق في الطريق وسأله عن أحوال أهل الكوفة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من كان رسول الإمام الذي قبض عليه ابن زياد وأمر بإلقائه من القصر؟',
  '["قيس بن مسهر","نافع بن هلال","مسلم بن عوسجة","زهير بن القين"]'::jsonb,
  0,
  20,
  20,
  'multi',
  'قبض على قيس بن مسهر الصيداوي، وقُتل بأمر عبيد الله بن زياد. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من كان يقود القوة التي اعترضت الركب في الطريق؟',
  '["عمر بن سعد","حصين بن نمير","شمر بن ذي الجوشن","الحر بن يزيد"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'اعترض الحر بن يزيد الرياحي الركب بألف فارس في الطريق إلى العراق. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'ماذا فعل الإمام لجيش الحر عندما لقيهم وقد أصابهم العطش؟',
  '["أعادهم للكوفة","أعطاهم الطعام","ترك لهم الطريق","سقاهم الماء"]'::jsonb,
  3,
  20,
  22,
  'multi',
  'أمر عليه السلام بسقي رجال الحر وخيولهم عندما وصلوا وهم عطاشى. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'في أي يوم وصل الركب إلى أرض كربلاء؟',
  '["الثاني من المحرم","الثالث من المحرم","الرابع من المحرم","الأول من المحرم"]'::jsonb,
  0,
  20,
  23,
  'multi',
  'المشهور في الموروث الإمامي أن الوصول إلى كربلاء كان في الثاني من المحرم سنة 61 هـ. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من قاد الجيش الذي وصل لمواجهته في كربلاء؟',
  '["عمرو بن الحجاج","شمر بن ذي الجوشن","عمر بن سعد","عزرة بن قيس"]'::jsonb,
  2,
  20,
  24,
  'multi',
  'أرسل عبيد الله بن زياد عمر بن سعد بجيشه إلى كربلاء. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'أي ولاية كان عمر بن سعد يطمع في الحصول عليها؟',
  '["الموصل","المدائن","الري","أصفهان"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'كان ابن زياد قد ولاه الري، وربط أمرها بخروجه لمواجهة الإمام الحسين عليه السلام. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من حمل الأمر المشدد من ابن زياد إلى عمر بن سعد قبيل عاشوراء؟',
  '["شمر بن ذي الجوشن","عمرو بن الحجاج","حصين بن نمير","شبث بن ربعي"]'::jsonb,
  0,
  20,
  26,
  'multi',
  'حمل شمر كتاب ابن زياد إلى عمر بن سعد بالتشدد وعدم قبول الحلول التي لا تحقق أمر السلطة. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'ماذا طلب الإمام من القوم ليلة عاشوراء؟',
  '["مقابلة ابن زياد","فتح طريق الكوفة","تأخير القتال ليلة","الرجوع إلى مكة"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'طلب عليه السلام إمهاله ليلة ليصلي ويدعو ويستغفر، فأُخر القتال إلى صباح عاشوراء. — الإرشاد للمفيد.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من انتقل من الجيش المقابل إلى أصحاب الإمام صباح عاشوراء؟',
  '["شبث بن ربعي","الحر بن يزيد","عمرو بن الحجاج","عزرة بن قيس"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'ندم الحر الرياحي على اعتراضه الطريق والتحق بالإمام صباح عاشوراء ثم استشهد بين يديه. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسين (ع)' LIMIT 1),
  'من تولّى الإمامة بعد استشهاد الإمام الحسين عليه السلام؟',
  '["عبد الله بن جعفر","علي بن الحسين","محمد بن الحنفية","الحسن بن الحسن"]'::jsonb,
  1,
  20,
  29,
  'multi',
  'انتقلت الإمامة بعد شهادة الإمام الحسين عليه السلام إلى ابنه علي بن الحسين زين العابدين عليه السلام. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام الحسين (ع)'
);

-- Quiz: سيرة الإمام علي بن الحسين زين العابدين (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-sajjad'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام علي بن الحسين زين العابدين (ع)',
  'إسلاميات',
  'سيرة الإمام علي بن الحسين (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-sajjad'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام زين العابدين عليه السلام بحسب الرواية المشهورة؟',
  '["36 هـ","40 هـ","38 هـ","42 هـ"]'::jsonb,
  2,
  20,
  0,
  'multi',
  'المشهور في المصادر الإمامية أن ولادته عليه السلام كانت سنة 38 هـ. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما كنيته المشهورة في المصادر الإمامية؟',
  '["أبو محمد","أبو جعفر","أبو عبد الله","أبو الحسن"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'يذكر الشيخ المفيد أن كنية علي بن الحسين عليه السلام أبو محمد. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'أي لقب اشتهر به لكثرة عبادته؟',
  '["كاظم الغيظ","باقر العلوم","باب الحوائج","زين العابدين"]'::jsonb,
  3,
  20,
  2,
  'multi',
  'من أشهر ألقابه عليه السلام «زين العابدين» لما عُرف به من العبادة. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما اللقب الآخر المرتبط بكثرة سجوده؟',
  '["الرضا","الهادي","السجاد","الجواد"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'اشتهر عليه السلام بلقب السجاد لكثرة سجوده لله تعالى. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند واقعة كربلاء؟',
  '["سبع عشرة سنة","تسع عشرة سنة","خمس وعشرون سنة","ثلاث وعشرون سنة"]'::jsonb,
  3,
  20,
  4,
  'multi',
  'بناءً على ولادته سنة 38 هـ ووقوع كربلاء سنة 61 هـ كان عمره نحو ثلاث وعشرين سنة. — الإرشاد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما الذي منعه من المشاركة في القتال يوم عاشوراء؟',
  '["تكليف بالحراسة","المرض","جرح سابق","فقد السلاح"]'::jsonb,
  1,
  20,
  5,
  'multi',
  'كان عليه السلام مريضًا يوم عاشوراء، فبقي حيًا بعد استشهاد أبيه وأهل بيته. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'من دافعت عنه عندما أُريد قتله بعد المعركة بحسب الروايات؟',
  '["سكينة بنت الحسين","زينب بنت علي","أم كلثوم بنت علي","فاطمة بنت الحسين"]'::jsonb,
  1,
  20,
  6,
  'multi',
  'تذكر أخبار الواقعة موقف السيدة زينب عليها السلام في الدفاع عنه عندما تعرض للخطر. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'إلى أي مدينة سيق مع بقية أهل البيت بعد كربلاء أولًا؟',
  '["المدينة","البصرة","الكوفة","دمشق"]'::jsonb,
  2,
  20,
  7,
  'multi',
  'سيق أهل البيت عليهم السلام بعد الواقعة من كربلاء إلى الكوفة. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'أمام من أُدخل الإمام وأهل البيت في الكوفة؟',
  '["شمر بن ذي الجوشن","حصين بن نمير","عبيد الله بن زياد","عمر بن سعد"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'أُدخل الإمام السجاد وأهل البيت على عبيد الله بن زياد في قصر الكوفة. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'إلى أي مدينة نُقل أهل البيت بعد خروجهم من الكوفة؟',
  '["مكة","دمشق","الموصل","المدينة"]'::jsonb,
  1,
  20,
  9,
  'multi',
  'أُرسل الإمام وأهل البيت من الكوفة إلى الشام حيث كان يزيد بن معاوية. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'في مجلس من ألقى الإمام خطابًا عرّف فيه بنفسه ونسبه؟',
  '["يزيد بن معاوية","عبد الملك بن مروان","مروان بن الحكم","الوليد بن عتبة"]'::jsonb,
  0,
  20,
  10,
  'multi',
  'تروي المصادر خطبته عليه السلام في مجلس يزيد بالشام وتعريفه بمكانة أهل البيت. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما الذي طلبه الإمام ليخاطب الناس في مجلس الشام؟',
  '["الرحبة","المحراب","المنبر","الديوان"]'::jsonb,
  2,
  20,
  11,
  'multi',
  'طلب عليه السلام أن يصعد المنبر ليقول كلامًا فيه لله رضا وللحاضرين أجر وثواب. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'إلى أي مدينة عاد الإمام بعد انتهاء مرحلة الأسر؟',
  '["مكة","المدينة","الكوفة","البصرة"]'::jsonb,
  1,
  20,
  12,
  'multi',
  'عاد الإمام زين العابدين وأهل البيت عليهم السلام إلى المدينة بعد مرحلة الأسر. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما اسم الواقعة التي شهدت هجوم جيش السلطة الأموية على المدينة في زمانه؟',
  '["مرج راهط","عين الوردة","الحرة","الربذة"]'::jsonb,
  2,
  20,
  13,
  'multi',
  'وقعت واقعة الحرة في المدينة سنة 63 هـ خلال إمامة زين العابدين عليه السلام. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'من كان الخليفة الأموي عند وقوع واقعة الحرة؟',
  '["مروان بن الحكم","عبد الملك بن مروان","الوليد بن عبد الملك","يزيد بن معاوية"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'وقعت الحرة سنة 63 هـ في عهد يزيد بن معاوية. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما الموقف الذي عُرف به الإمام تجاه عدد من الأسر خلال اضطرابات المدينة؟',
  '["ألحقهم بجيشه","أرسلهم إلى مكة","آواهم في داره","نقلهم إلى الكوفة"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'تذكر الأخبار إيواءه عددًا كبيرًا من النساء والأسر وحمايتهم خلال أحداث الحرة. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'من تولّى الحكم الأموي بعد انتهاء حكم معاوية بن يزيد واستقرار الصراع؟',
  '["عبد الملك بن مروان","مروان بن الحكم","الوليد بن عبد الملك","سليمان بن عبد الملك"]'::jsonb,
  1,
  20,
  16,
  'multi',
  'انتقل الحكم الأموي بعد الاضطرابات إلى مروان بن الحكم سنة 64 هـ. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'من كان الخليفة الأموي خلال الجزء الأكبر من إمامة الإمام بعد تلك الاضطرابات؟',
  '["عمر بن عبد العزيز","عبد الملك بن مروان","الوليد بن عبد الملك","سليمان بن عبد الملك"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'امتد حكم عبد الملك من سنة 65 إلى 86 هـ، فشمل جزءًا كبيرًا من إمامة السجاد عليه السلام. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'أي والٍ اشتهر بالشدة في العراق خلال عهد عبد الملك وعاصر الإمام؟',
  '["الحجاج بن يوسف","زياد بن أبيه","عبيد الله بن زياد","يوسف بن عمر"]'::jsonb,
  0,
  20,
  18,
  'multi',
  'عاصر الإمام السجاد عليه السلام مرحلة الحجاج بن يوسف وولايته على العراق. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما الوسيلة التي برزت بصورة خاصة في تراث الإمام لنشر المعارف الروحية؟',
  '["الشعر","الدعاء","المناظرة","الرسائل السياسية"]'::jsonb,
  1,
  20,
  19,
  'multi',
  'يمثل الدعاء جانبًا محوريًا من التراث المنقول عن الإمام زين العابدين عليه السلام. — الصحيفة السجادية؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما اسم أشهر مجموعة من الأدعية المنسوبة إليه؟',
  '["الصحيفة المهدوية","الصحيفة العلوية","الصحيفة الرضوية","الصحيفة السجادية"]'::jsonb,
  3,
  20,
  20,
  'multi',
  'الصحيفة السجادية أشهر مجموعة من الأدعية المروية عن الإمام زين العابدين عليه السلام.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'بأي اسم تشريفي اشتهرت الصحيفة السجادية؟',
  '["كنز الفوائد","نهج البلاغة","مصباح الشريعة","زبور آل محمد"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'اشتهرت الصحيفة السجادية في التراث الإمامي بوصفها «زبور آل محمد» لما تحويه من أدعية ومعارف. — بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما اسم النص المنسوب إليه الذي يعرض حقوق الإنسان تجاه الله والناس ونفسه؟',
  '["رسالة الأهواز","رسالة الحقوق","رسالة الشرائع","رسالة التوحيد"]'::jsonb,
  1,
  20,
  22,
  'multi',
  'تُنسب إليه «رسالة الحقوق» التي تتناول مجموعة واسعة من الحقوق والواجبات. — تحف العقول؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما أول حق يبدأ به متن رسالة الحقوق في العرض المشهور؟',
  '["حق الله","حق الوالد","حق النفس","حق المعلم"]'::jsonb,
  0,
  20,
  23,
  'multi',
  'تبدأ رسالة الحقوق ببيان حق الله الأكبر على الإنسان. — تحف العقول.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ماذا كان يحمل ليلًا إلى بيوت المحتاجين دون أن يعرفوه؟',
  '["الملابس","الطعام","الأدوية","الحطب"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'تروي المصادر أنه كان يحمل الطعام ليلًا على ظهره ويوصله سرًا إلى فقراء المدينة. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'متى عرف بعض فقراء المدينة صاحب الصدقات السرية التي كانت تصلهم؟',
  '["بعد الحج","بعد سفره","بعد مرضه","بعد وفاته"]'::jsonb,
  3,
  20,
  25,
  'multi',
  'تذكر الروايات أنهم فقدوا ما كان يأتيهم ليلًا فعرفوا بعد وفاته أنه كان صاحبه. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'ما الأثر الذي شوهد على ظهره عند غسله بعد وفاته بحسب الروايات؟',
  '["أثر قيد الحديد","أثر درع الحرب","أثر جرح السيف","أثر حمل الجراب"]'::jsonb,
  3,
  20,
  26,
  'multi',
  'رُوي ظهور أثر حمل جراب الطعام على ظهره من كثرة ما كان يحمله للفقراء ليلًا. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'إلى أي إمام انتقلت الإمامة بعده؟',
  '["زيد بن علي","محمد الباقر","عبد الله الباهر","عمر الأشرف"]'::jsonb,
  1,
  20,
  27,
  'multi',
  'نصت الروايات الإمامية على انتقال الإمامة بعده إلى ابنه محمد بن علي الباقر عليه السلام. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'في أي سنة هجرية كانت وفاته بحسب المشهور؟',
  '["92 هـ","94 هـ","95 هـ","97 هـ"]'::jsonb,
  2,
  20,
  28,
  'multi',
  'المشهور عند الإمامية أن وفاته عليه السلام كانت سنة 95 هـ. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن الحسين زين العابدين (ع)' LIMIT 1),
  'أين دُفن الإمام زين العابدين عليه السلام؟',
  '["النجف","البقيع","الكاظمية","كربلاء"]'::jsonb,
  1,
  20,
  29,
  'multi',
  'دُفن عليه السلام في البقيع بالمدينة إلى جوار الإمام الحسن عليه السلام. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن الحسين (ع)'
);

-- Quiz: سيرة الإمام محمد الباقر (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-baqir'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام محمد الباقر (ع)',
  'إسلاميات',
  'سيرة الإمام محمد الباقر (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-baqir'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام محمد الباقر عليه السلام بحسب المشهور؟',
  '["59 هـ","57 هـ","55 هـ","61 هـ"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'يذكر الشيخ المفيد أن مولده عليه السلام كان بالمدينة سنة 57 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'في أي مدينة كانت ولادته؟',
  '["المدينة","الكوفة","البصرة","مكة"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'ولد الإمام الباقر عليه السلام في المدينة المنورة. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو محمد","أبو عبد الله","أبو جعفر","أبو الحسن"]'::jsonb,
  2,
  20,
  2,
  'multi',
  'كنيته المشهورة في المصادر الإمامية «أبو جعفر». — الإرشاد للمفيد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من هي والدته؟',
  '["زينب بنت الحسن","أم كلثوم بنت الحسن","فاطمة بنت الحسن","رملة بنت الحسن"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'أمه فاطمة بنت الإمام الحسن عليه السلام، وتُعرف بأم عبد الله. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من أي إمامين يجتمع نسبه من جهة أبويه؟',
  '["الحسن والحسين","علي والحسين","الحسين والسجاد","علي والحسن"]'::jsonb,
  0,
  20,
  4,
  'multi',
  'أبوه من ذرية الحسين وأمه بنت الحسن، فاجتمع فيه نسب السبطين عليهما السلام. — الإرشاد للمفيد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'ما اللقب الأشهر للإمام محمد بن علي عليه السلام؟',
  '["الباقر","الصادق","الكاظم","الجواد"]'::jsonb,
  0,
  20,
  5,
  'multi',
  'اشتهر عليه السلام بلقب «الباقر» أو «باقر العلم». — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'إلى ماذا يشير لقب «الباقر» في الروايات؟',
  '["بقر العلم","كثرة الصدقة","كثرة السفر","طول العبادة"]'::jsonb,
  0,
  20,
  6,
  'multi',
  'فُسّر اللقب بأنه بقر العلم، أي شقّه وأظهر خفاياه وتوسع فيه. — الإرشاد للمفيد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند واقعة كربلاء؟',
  '["ثلاث سنوات","أربع سنوات","ثماني سنوات","ست سنوات"]'::jsonb,
  1,
  20,
  7,
  'multi',
  'ولد سنة 57 هـ ووقعت كربلاء سنة 61 هـ، فكان صغيرًا في نحو الرابعة من عمره. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من الصحابي الذي اشتهر بنقل سلام النبي ﷺ إليه؟',
  '["زيد بن أرقم","أبو سعيد الخدري","جابر بن عبد الله","سهل بن سعد"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'تروي المصادر خبر جابر بن عبد الله الأنصاري وتبليغه سلام رسول الله ﷺ إلى الإمام الباقر. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'ما العلامة التي استعان بها جابر للتعرف إليه في الرواية؟',
  '["الشمائل والاسم","ثوب كان يلبسه","كتاب كان يحمله","خاتم في يده"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'تذكر الرواية وصف النبي ﷺ لجابر بعض شمائله واسمه ليعرفه إذا أدركه. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'بعد وفاة أي إمام بدأت إمامته؟',
  '["علي بن أبي طالب","الحسن بن علي","علي بن الحسين","الحسين بن علي"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'انتقلت الإمامة إليه بعد وفاة أبيه الإمام زين العابدين عليه السلام. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'في أي سنة بدأت إمامته بحسب المشهور؟',
  '["99 هـ","97 هـ","93 هـ","95 هـ"]'::jsonb,
  3,
  20,
  11,
  'multi',
  'بدأت إمامته بعد وفاة الإمام السجاد عليه السلام سنة 95 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'ما المجال الذي برز بصورة خاصة في مرحلة إمامته؟',
  '["قيادة الجيوش","عقد المعاهدات","نشر العلم","إدارة الولايات"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'اشتهرت مرحلة الإمام الباقر عليه السلام بالتوسع في نشر علوم أهل البيت والفقه والحديث. — الإرشاد؛ الكافي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي مدينة أصبحت المركز الأساسي لنشاطه العلمي؟',
  '["الكوفة","دمشق","مكة","المدينة"]'::jsonb,
  3,
  20,
  13,
  'multi',
  'عاش الإمام الباقر عليه السلام في المدينة ومنها انتشرت مدرسته ورواياته. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من الراوي المعروف الذي عُدّ من أبرز أصحابه؟',
  '["صفوان بن يحيى","هشام بن الحكم","يونس بن عبد الرحمن","زرارة بن أعين"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'زرارة بن أعين من كبار أصحاب الإمامين الباقر والصادق ومن أبرز رواة الفقه الإمامي. — الكافي؛ رجال الكشي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي راوٍ آخر عُرف بكثرة الرواية عنه؟',
  '["عبد العظيم الحسني","محمد بن مسلم","علي بن يقطين","هشام بن سالم"]'::jsonb,
  1,
  20,
  15,
  'multi',
  'محمد بن مسلم من كبار أصحاب الإمام الباقر ومن المكثرين من الرواية عنه. — رجال الكشي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من صاحب الإمام المعروف بلقب «مؤمن الطاق»؟',
  '["بريد بن معاوية","الفضيل بن يسار","محمد بن علي","أبو بصير"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'محمد بن علي بن النعمان من أصحاب الإمامين الباقر والصادق واشتهر بلقب مؤمن الطاق. — رجال الكشي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي من هؤلاء عُدّ أيضًا من كبار فقهاء أصحابه؟',
  '["بريد بن معاوية","مفضل بن عمر","زكريا بن آدم","علي بن يقطين"]'::jsonb,
  0,
  20,
  17,
  'multi',
  'بريد بن معاوية العجلي من كبار أصحاب الإمامين الباقر والصادق وفقهاء مدرستهما. — رجال الكشي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي خليفة أموي ارتبط اسمه باستدعاء الإمام إلى الشام في روايات سيرته؟',
  '["يزيد بن عبد الملك","هشام بن عبد الملك","عمر بن عبد العزيز","سليمان بن عبد الملك"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'تذكر المصادر استدعاء هشام بن عبد الملك للإمام الباقر عليه السلام إلى الشام. — بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من رافق الإمام في ذلك الاستدعاء إلى الشام؟',
  '["عبد الله بن الحسن","جعفر بن محمد","زيد بن علي","محمد بن عبد الله"]'::jsonb,
  1,
  20,
  19,
  'multi',
  'تذكر الروايات أن الإمام الصادق عليه السلام رافق أباه في رحلته إلى الشام. — بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي مهارة حاول هشام اختبار الإمام بها بحسب الرواية المشهورة؟',
  '["الفروسية","المبارزة","الرمي","السباحة"]'::jsonb,
  2,
  20,
  20,
  'multi',
  'تروي المصادر أن هشام أدخله مجلسًا للرمي وحاول إحراجه، فأصاب الإمام الأهداف بإتقان. — بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'ما الذي أظهره الإمام في ذلك الاختبار رغم اعتذاره أولًا عن المشاركة؟',
  '["سرعة على الخيل","قوة في المصارعة","مهارة في المبارزة","إصابات متتابعة"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'تصف الرواية إصابته الهدف مرارًا بصورة متتابعة أثارت دهشة هشام والحاضرين. — بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي حاكم أموي اشتهر بإرجاع فدك إلى ذرية فاطمة خلال عصر الإمام؟',
  '["سليمان بن عبد الملك","عمر بن عبد العزيز","هشام بن عبد الملك","يزيد بن عبد الملك"]'::jsonb,
  1,
  20,
  22,
  'multi',
  'اشتهر عمر بن عبد العزيز برد فدك إلى ذرية السيدة فاطمة عليها السلام خلال خلافته. — بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي حركة علوية وقعت بعد وفاة الإمام الباقر، ولذلك لا تدخل في أحداث إمامته؟',
  '["ثورة زيد بن علي","ثورة المختار","وقعة الحرة","حركة التوابين"]'::jsonb,
  0,
  20,
  23,
  'multi',
  'استشهد زيد بن علي سنة 122 هـ، أي بعد وفاة الإمام الباقر عليه السلام؛ وهذا يميز التسلسل التاريخي للمرحلة. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أي مجال فقهي نُقلت عنه فيه روايات كثيرة ضمن التراث الإمامي؟',
  '["الطب والفلك","الأنساب والأشعار","الحروب والسياسة","العبادات والمعاملات"]'::jsonb,
  3,
  20,
  24,
  'multi',
  'تمثل روايات الإمام الباقر جزءًا أساسيًا من أبواب الفقه في العبادات والمعاملات في المصادر الإمامية. — الكافي.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'من ابنه الذي شاركه جانبًا من نشاطه العلمي قبل أن يخلفه في الإمامة؟',
  '["إبراهيم بن محمد","جعفر بن محمد","عبد الله بن محمد","عبيد الله بن محمد"]'::jsonb,
  1,
  20,
  25,
  'multi',
  'لازم الإمام الصادق عليه السلام أباه وأخذ عنه العلم قبل انتقال الإمامة إليه. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'إلى من أوصى بالإمامة من بعده؟',
  '["محمد بن عبد الله","زيد بن علي","عبد الله بن محمد","جعفر بن محمد"]'::jsonb,
  3,
  20,
  26,
  'multi',
  'تثبت الروايات الإمامية النص على الإمام جعفر الصادق عليه السلام بعد أبيه الباقر. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الباقر عليه السلام بحسب المشهور؟',
  '["114 هـ","116 هـ","118 هـ","112 هـ"]'::jsonb,
  0,
  20,
  27,
  'multi',
  'المشهور في المصادر الإمامية أن وفاته عليه السلام كانت سنة 114 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند وفاته وفق تاريخي 57 و114 هـ؟',
  '["خمسًا وخمسين سنة","سبعًا وخمسين سنة","ثلاثًا وخمسين سنة","تسعًا وخمسين سنة"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'بناءً على المشهور في مولده سنة 57 هـ ووفاته سنة 114 هـ كان عمره نحو سبع وخمسين سنة. — الإرشاد.',
  'سيرة الإمام محمد الباقر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد الباقر (ع)' LIMIT 1),
  'أين دُفن الإمام محمد الباقر عليه السلام؟',
  '["سامراء","الكاظمية","النجف","البقيع"]'::jsonb,
  3,
  20,
  29,
  'multi',
  'دُفن عليه السلام في البقيع بالمدينة مع أبيه الإمام السجاد وجده الإمام الحسن عليهم السلام. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد الباقر (ع)'
);

-- Quiz: سيرة الإمام جعفر الصادق (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-sadiq'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام جعفر الصادق (ع)',
  'إسلاميات',
  'سيرة الإمام جعفر الصادق (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-sadiq'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام جعفر الصادق عليه السلام بحسب المشهور؟',
  '["80 هـ","83 هـ","89 هـ","86 هـ"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'يذكر الشيخ المفيد أن مولده عليه السلام كان بالمدينة سنة 83 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'في أي يوم من ربيع الأول كانت ولادته بحسب المشهور الإمامي؟',
  '["الخامس عشر","العاشر","الثاني عشر","السابع عشر"]'::jsonb,
  3,
  20,
  1,
  'multi',
  'المشهور عند الإمامية أن ولادته عليه السلام كانت في السابع عشر من ربيع الأول. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'ما كنيته الأشهر؟',
  '["أبو عبد الله","أبو جعفر","أبو الحسن","أبو محمد"]'::jsonb,
  0,
  20,
  2,
  'multi',
  'كنيته المشهورة في كتب الحديث والتراجم الإمامية «أبو عبد الله». — الإرشاد؛ الكافي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من هي والدته؟',
  '["أم حكيم","أم إسحاق","أم فروة","أم البنين"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'أمه أم فروة بنت القاسم بن محمد بن أبي بكر. — الكافي؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'إلى أي شخصية يصل نسب والدته من جهة أبيها؟',
  '["سعد بن أبي وقاص","أبي بكر","عمر بن الخطاب","عثمان بن عفان"]'::jsonb,
  1,
  20,
  4,
  'multi',
  'أم فروة بنت القاسم بن محمد بن أبي بكر، ولذلك يصل نسبها من جهة أبيها إليه. — الإرشاد للمفيد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'بعد وفاة أي إمام بدأت إمامته؟',
  '["الحسن المجتبى","الحسين الشهيد","زين العابدين","محمد الباقر"]'::jsonb,
  3,
  20,
  5,
  'multi',
  'انتقلت الإمامة إليه بعد وفاة أبيه الإمام محمد الباقر عليه السلام سنة 114 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند بدء إمامته؟',
  '["إحدى وثلاثون سنة","خمس وثلاثون سنة","سبع وعشرون سنة","تسع وثلاثون سنة"]'::jsonb,
  0,
  20,
  6,
  'multi',
  'ولد سنة 83 هـ وبدأت إمامته سنة 114 هـ، فكان عمره نحو إحدى وثلاثين سنة. — الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'أي تحول سياسي كبير وقع خلال إمامته؟',
  '["سقوط الدولة الأموية","قيام الدولة البويهية","قيام الدولة الفاطمية","سقوط الدولة العباسية"]'::jsonb,
  0,
  20,
  7,
  'multi',
  'شهد عصره سقوط الحكم الأموي سنة 132 هـ وقيام الدولة العباسية. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من كان آخر خلفاء بني أمية؟',
  '["مروان بن محمد","الوليد بن يزيد","إبراهيم بن الوليد","يزيد بن الوليد"]'::jsonb,
  0,
  20,
  8,
  'multi',
  'انتهت الدولة الأموية في عهد مروان بن محمد سنة 132 هـ. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من كان أول خليفة للدولة العباسية؟',
  '["أبو جعفر المنصور","المهدي العباسي","موسى الهادي","أبو العباس السفاح"]'::jsonb,
  3,
  20,
  9,
  'multi',
  'تولى أبو العباس السفاح الحكم مع قيام الدولة العباسية سنة 132 هـ. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'أي شعار استخدمته الدعوة العباسية لاستقطاب أنصار أهل البيت؟',
  '["الرضا من آل محمد","الأمر بالمعروف","الثأر لعثمان","الحكم بالشورى"]'::jsonb,
  0,
  20,
  10,
  'multi',
  'رفعت الدعوة العباسية شعار الدعوة إلى «الرضا من آل محمد» دون التصريح بدايةً باسم المرشح. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من صاحب الدعوة العباسية الذي راسل الإمام طالبًا منه تولي الأمر بحسب الأخبار؟',
  '["أبو سلمة الخلال","أبو مسلم الخراساني","داود بن علي","إبراهيم الإمام"]'::jsonb,
  0,
  20,
  11,
  'multi',
  'تذكر الأخبار أن أبا سلمة الخلال راسل الإمام الصادق عليه السلام بعد انهيار الحكم الأموي. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'ماذا فعل الإمام بالرسالة التي عرضت عليه الدخول في مشروع الحكم؟',
  '["أحرقها","حفظها","نشرها","أعادها"]'::jsonb,
  0,
  20,
  12,
  'multi',
  'تروي المصادر أنه أحرق رسالة أبي سلمة ولم يدخل في مشروعه السياسي. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من كان أبرز خلفاء بني العباس في التضييق على الإمام؟',
  '["أبو جعفر المنصور","موسى الهادي","أبو العباس السفاح","محمد المهدي"]'::jsonb,
  0,
  20,
  13,
  'multi',
  'شهد القسم الأخير من إمامته تضييقًا شديدًا من الخليفة العباسي أبي جعفر المنصور. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'إلى أي منطقة استدعان المنصور بعيدًا عن المدينة في عدد من الروايات؟',
  '["اليمن","العراق","خراسان","مصر"]'::jsonb,
  1,
  20,
  14,
  'multi',
  'تذكر المصادر استدعاء المنصور للإمام من المدينة إلى العراق أكثر من مرة. — بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من صاحب الإمام الذي اشتهر بمناظراته في مسألة الإمامة؟',
  '["جابر بن حيان","هشام بن الحكم","عبد الله بن سنان","معاوية بن عمار"]'::jsonb,
  1,
  20,
  15,
  'multi',
  'كان هشام بن الحكم من أبرز متكلمي أصحاب الإمام الصادق، واشتهر بمناظراته في الإمامة. — الكافي؛ رجال الكشي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من كان الإمام يوجهه للمناظرة في مسائل الأحكام والفقه بحسب رواية تخصص أصحابه؟',
  '["حمران بن أعين","مؤمن الطاق","هشام بن سالم","زرارة بن أعين"]'::jsonb,
  3,
  20,
  16,
  'multi',
  'تذكر روايات المناظرة تقسيم الإمام أصحابه بحسب تخصصاتهم، وكان زرارة بارزًا في الفقه. — رجال الكشي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من برز من أصحابه في المناظرة في علم الكلام والتوحيد؟',
  '["معاوية بن وهب","هشام بن سالم","أبان بن تغلب","جميل بن دراج"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'عُدّ هشام بن سالم من متكلمي أصحاب الإمام الصادق ومن المناظرين في مسائل العقيدة. — رجال الكشي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من اشتهر من أصحابه بمناظرة المخالفين في الإمامة ولقّبه خصومه بشيطان الطاق؟',
  '["هشام بن الحكم","أبان بن تغلب","مؤمن الطاق","حمران بن أعين"]'::jsonb,
  2,
  20,
  18,
  'multi',
  'اشتهر محمد بن علي بن النعمان عند الإمامية بمؤمن الطاق، وكان من أصحاب المناظرات في الإمامة. — رجال الكشي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من صاحب الإمام الذي أمره أن يجلس ويفتي الناس في مسجد المدينة؟',
  '["أبان بن تغلب","جميل بن دراج","عبد الله بن سنان","معاوية بن عمار"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'ورد أن الإمام قال لأبان بن تغلب أن يجلس في مسجد المدينة ويفتي الناس، إذ كان يحب أن يُرى في شيعته مثله. — رجال النجاشي.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'في أي علم اشتهر معاوية بن عمار بكثرة الرواية عن الإمام؟',
  '["الحج","المواريث","الحدود","القضاء"]'::jsonb,
  0,
  20,
  20,
  'multi',
  'لمع معاوية بن عمار في روايات الحج، ونُقلت عنه عن الإمام الصادق روايات كثيرة في مناسكه. — الكافي؛ تهذيب الأحكام.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'أي تيار فكري ناظر الإمام بعض أصحابه وممثليه في مسائل وجود الخالق؟',
  '["المرجئة","الأشاعرة","الزنادقة","الخوارج"]'::jsonb,
  2,
  20,
  21,
  'multi',
  'نقلت المصادر مناظرات للإمام الصادق عليه السلام مع الزنادقة في التوحيد وإثبات الخالق. — الكافي؛ التوحيد للصدوق.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'من اشتهر بمناظرة الإمام في قضايا التوحيد والخلق ونُسب إلى الزندقة؟',
  '["واصل بن عطاء","عمرو بن عبيد","ابن أبي العوجاء","أبو حنيفة"]'::jsonb,
  2,
  20,
  22,
  'multi',
  'نقلت المصادر عددًا من مناظرات الإمام الصادق مع عبد الكريم بن أبي العوجاء. — الكافي؛ التوحيد للصدوق.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'أي حركة علوية وقعت في المدينة خلال خلافة المنصور؟',
  '["حركة زيد بن علي","حركة الحسين الفخي","حركة محمد النفس الزكية","حركة يحيى بن زيد"]'::jsonb,
  2,
  20,
  23,
  'multi',
  'خرج محمد بن عبد الله المعروف بالنفس الزكية بالمدينة سنة 145 هـ في عهد المنصور. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'ما موقف الإمام من الدعوة إلى بيعة محمد النفس الزكية قبل خروجه؟',
  '["بايعه سرًا","قاد جيشه","أرسل إليه المال","لم يبايعه"]'::jsonb,
  3,
  20,
  24,
  'multi',
  'تذكر الأخبار أن الإمام الصادق لم يدخل في البيعة السياسية لمحمد النفس الزكية. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'أي ابن للإمام توفي في حياته وكان أكبر أولاده الذكور؟',
  '["محمد","العباس","إسماعيل","إسحاق"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'توفي إسماعيل بن جعفر في حياة أبيه، وقد أكد الإمام وفاته أمام الناس. — الكافي؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'لماذا أظهر الإمام وفاة إسماعيل وشهد الناس عليها بحسب الروايات؟',
  '["لنقله إلى العراق","لتقسيم ميراثه","لاختيار وصيه","لإثبات وفاته"]'::jsonb,
  3,
  20,
  26,
  'multi',
  'تذكر الروايات تأكيد الإمام وفاة إسماعيل وإشهاد الناس عليها، وهو أمر اكتسب أهمية لاحقًا في قضية الإمامة. — الكافي؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'إلى أي ابن نصّت الروايات الإمامية على انتقال الإمامة بعده؟',
  '["موسى بن جعفر","محمد بن جعفر","عبد الله الأفطح","إسحاق بن جعفر"]'::jsonb,
  0,
  20,
  27,
  'multi',
  'وردت نصوص متعددة في المصادر الإمامية على إمامة موسى الكاظم عليه السلام بعد أبيه. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الصادق عليه السلام؟',
  '["150 هـ","146 هـ","152 هـ","148 هـ"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'توفي الإمام جعفر الصادق عليه السلام في شوال سنة 148 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام جعفر الصادق (ع)' LIMIT 1),
  'ما التدبير الذي اتخذه في وصيته وساهم في حماية الإمام من بعده من المنصور؟',
  '["وزع كتبه سرًا","نقل أبناءه للعراق","عدّد الأوصياء","أخفى مكان دفنه"]'::jsonb,
  2,
  20,
  29,
  'multi',
  'جعل في وصيته عدة أسماء، ومنهم المنصور ووالي المدينة وموسى عليه السلام، مما أحبط محاولة تحديد وصيه وقتله مباشرة. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام جعفر الصادق (ع)'
);

-- Quiz: سيرة الإمام موسى بن جعفر الكاظم (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-kadhim'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام موسى بن جعفر الكاظم (ع)',
  'إسلاميات',
  'سيرة الإمام موسى بن جعفر (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-kadhim'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'في أي موضع وُلد الإمام موسى الكاظم عليه السلام؟',
  '["قباء","الأبواء","العقيق","الجحفة"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'ولد الإمام موسى بن جعفر عليه السلام بالأبواء، وهو موضع بين مكة والمدينة. — الكافي؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'في أي سنة هجرية كانت ولادته بحسب المشهور؟',
  '["128 هـ","126 هـ","132 هـ","130 هـ"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'يذكر الشيخ المفيد أن مولده عليه السلام كان سنة 128 هـ بالأبواء. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من هي والدته؟',
  '["نجمة","خيزران","حميدة","سمانة"]'::jsonb,
  2,
  20,
  2,
  'multi',
  'أمه حميدة، وتذكرها المصادر الإمامية ضمن النساء ذوات المكانة والفضل. — الكافي؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'ما كنيته الأشهر؟',
  '["أبو الحسن","أبو جعفر","أبو عبد الله","أبو محمد"]'::jsonb,
  0,
  20,
  3,
  'multi',
  'من أشهر كناه عليه السلام «أبو الحسن»، ويُعرف في كتب الحديث بأبي الحسن الأول. — الكافي؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'إلى أي صفة يشير لقبه «الكاظم»؟',
  '["كثرة الصيام","كثرة الصمت","كظم الغيظ","طول السجود"]'::jsonb,
  2,
  20,
  4,
  'multi',
  'اشتهر بلقب الكاظم لما عُرف به من كظم الغيظ والحلم تجاه من أساء إليه. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'أي أخ للإمام ادعى بعض الناس إمامته بعد وفاة الإمام الصادق؟',
  '["علي العريضي","عبد الله الأفطح","إسحاق المؤتمن","محمد الديباج"]'::jsonb,
  1,
  20,
  5,
  'multi',
  'اتبع جماعة عبد الله بن جعفر المعروف بالأفطح بعد وفاة الإمام الصادق، ثم عُرفوا بالفطحية. — الكافي؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'بأي مسألة اختبر هشام بن سالم وصاحبه عبد الله الأفطح فلم يجد عنده الجواب؟',
  '["الحج","الزكاة","المواريث","الطلاق"]'::jsonb,
  1,
  20,
  6,
  'multi',
  'تروي المصادر سؤالهما عبد الله عن مقدار الزكاة، فكان جوابه سببًا في ازدياد شكهما في دعواه. — الكافي، كتاب الحجة.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من قاد هشام بن سالم إلى الإمام بعد حيرته في أمر الإمامة؟',
  '["أحد أقربائه","رسول الوالي","تاجر مدني","شيخ مجهول"]'::jsonb,
  3,
  20,
  7,
  'multi',
  'تروي رواية الكافي أن شيخًا لا يعرفه هشام قاده حتى أوصله إلى الإمام موسى بن جعفر عليه السلام. — الكافي، كتاب الحجة.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'أي خليفة عباسي كان يحكم عند بداية إمامته؟',
  '["موسى الهادي","هارون الرشيد","محمد المهدي","أبو جعفر المنصور"]'::jsonb,
  3,
  20,
  8,
  'multi',
  'بدأت إمامته سنة 148 هـ، وكان أبو جعفر المنصور لا يزال خليفة للدولة العباسية. — الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'أي خليفة عباسي أطلق الإمام بعد رؤيا رآها بحسب رواية الإرشاد؟',
  '["المهدي العباسي","المنصور العباسي","هارون الرشيد","الهادي العباسي"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'يروي المفيد أن المهدي أمر بإطلاق الإمام بعد رؤيا ارتبطت بوعيد قاطع الرحم. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'أي ثورة علوية وقعت في عهد الهادي العباسي؟',
  '["ثورة النفس الزكية","ثورة فخ","ثورة التوابين","ثورة زيد"]'::jsonb,
  1,
  20,
  10,
  'multi',
  'وقعت ثورة الحسين بن علي صاحب فخ سنة 169 هـ في عهد الخليفة العباسي الهادي. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من قاد ثورة فخ؟',
  '["الحسين بن علي","إدريس بن عبد الله","يحيى بن عبد الله","محمد بن إبراهيم"]'::jsonb,
  0,
  20,
  11,
  'multi',
  'قاد الحسين بن علي بن الحسن الحركة العلوية المعروفة بواقعة فخ. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من أبرز أصحاب الإمام الذي شغل منصبًا رفيعًا في دولة هارون؟',
  '["علي بن يقطين","صفوان الجمال","هشام بن الحكم","يونس بن عبد الرحمن"]'::jsonb,
  0,
  20,
  12,
  'multi',
  'كان علي بن يقطين من خواص الإمام الكاظم وشغل منصبًا وزاريًا في دولة هارون. — الكافي؛ رجال الكشي.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'لماذا أذن الإمام لعلي بن يقطين بالبقاء في عمل السلطة؟',
  '["لقضاء حوائج المؤمنين","لجمع أموال الدولة","لنشر الدعوة في الشام","لمراقبة قادة الجيش"]'::jsonb,
  0,
  20,
  13,
  'multi',
  'تبرز الروايات دوره في خدمة المؤمنين ودفع الضرر عنهم من موقعه داخل الدولة. — رجال الكشي؛ بحار الأنوار.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من صاحب الجمال الذي طلب منه الإمام قطع علاقته التجارية بهارون؟',
  '["صفوان بن مهران","معاوية بن عمار","عبد الله بن سنان","جميل بن دراج"]'::jsonb,
  0,
  20,
  14,
  'multi',
  'عاتب الإمام صفوان الجمال على تأجير جماله لهارون، لما في ذلك من تعلق ببقاء الظالم حتى يستوفي الأجرة. — رجال الكشي.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'ماذا فعل صفوان بعد نصيحة الإمام؟',
  '["نقلها للعراق","أوقفها للحج","وهب جماله","باع جماله"]'::jsonb,
  3,
  20,
  15,
  'multi',
  'تذكر الرواية أن صفوان باع جماله بعد كلام الإمام حتى يقطع تلك المعاملة مع هارون. — رجال الكشي.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من كان الخليفة المسؤول عن أطول مراحل اعتقال الإمام؟',
  '["هارون الرشيد","أبو جعفر المنصور","محمد المهدي","موسى الهادي"]'::jsonb,
  0,
  20,
  16,
  'multi',
  'ارتبطت السنوات الأخيرة من حياة الإمام بسلسلة من الاعتقالات والسجون بأمر هارون. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من أي مدينة أُخذ الإمام في الاعتقال الذي انتهى باستشهاده؟',
  '["الكوفة","بغداد","مكة","المدينة"]'::jsonb,
  3,
  20,
  17,
  'multi',
  'أمر هارون بالقبض عليه في المدينة ثم أُخرج منها معتقلًا إلى العراق. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'عند أي موضع كان هارون عندما أمر باعتقاله بحسب رواية الإرشاد؟',
  '["مسجد قباء","قبر النبي","جبل أحد","بقيع الغرقد"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'يذكر المفيد أن هارون زار قبر رسول الله ﷺ ثم أمر بأخذ الإمام موسى بن جعفر عليه السلام. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'لماذا أُخرج محملان من المدينة في اتجاهين مختلفين بعد اعتقاله؟',
  '["لتقسيم حرس السجن","لحماية أموال القافلة","للتمويه على مكانه","لنقل أفراد أسرته"]'::jsonb,
  2,
  20,
  19,
  'multi',
  'أُرسل قبتان في طريقين مختلفين لإخفاء الجهة التي نُقل إليها الإمام. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'إلى أي مدينة نُقل أولًا في تلك المرحلة من الاعتقال؟',
  '["الكوفة","البصرة","واسط","بغداد"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'أُرسل الإمام أولًا إلى البصرة ووُضع في حبس واليها. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من كان والي البصرة الذي سُجن الإمام عنده؟',
  '["عيسى بن جعفر","محمد بن خالد","جعفر بن يحيى","إسحاق بن عيسى"]'::jsonb,
  0,
  20,
  21,
  'multi',
  'سُلم الإمام في البصرة إلى عيسى بن جعفر بن المنصور، فحبسه مدة. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'لماذا طلب والي البصرة إعفاءه من الاستمرار في أمر الإمام؟',
  '["لم يجد عليه ما يبرر قتله","خشي تمرد أهل البصرة","مرض ولم يستطع حراسته","أُمر بالسفر إلى خراسان"]'::jsonb,
  0,
  20,
  22,
  'multi',
  'تذكر المصادر أنه راقب الإمام ولم يجد منه ما يبرر قتله، فطلب نقله من عنده. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'إلى من نُقل الإمام في بغداد بعد مرحلة البصرة؟',
  '["محمد بن الربيع","جعفر بن يحيى","يحيى بن خالد","الفضل بن الربيع"]'::jsonb,
  3,
  20,
  23,
  'multi',
  'نُقل الإمام بعد البصرة إلى بغداد ووُضع في حبس الفضل بن الربيع. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'من تولّى سجنه بعد الفضل بن الربيع؟',
  '["محمد بن يحيى","الفضل بن يحيى","جعفر بن يحيى","موسى بن يحيى"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'انتقل الإمام بعد ذلك إلى حبس الفضل بن يحيى البرمكي. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'لماذا غضب هارون على الفضل بن يحيى في قضية الإمام؟',
  '["لأنه أحسن معاملته","لأنه أخفاه عن الحرس","لأنه أرسله للمدينة","لأنه أطلق سراحه"]'::jsonb,
  0,
  20,
  25,
  'multi',
  'بلغ هارون أن الفضل بن يحيى وسّع على الإمام وأكرمه، فغضب عليه لذلك. — الإرشاد للمفيد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'إلى من انتهى أمر سجن الإمام في مرحلته الأخيرة؟',
  '["عيسى بن جعفر","الفضل بن يحيى","السندي بن شاهك","الفضل بن الربيع"]'::jsonb,
  2,
  20,
  26,
  'multi',
  'انتهت سلسلة الاعتقال بوضع الإمام عند السندي بن شاهك في بغداد. — الإرشاد؛ الكافي.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام موسى الكاظم عليه السلام؟',
  '["183 هـ","181 هـ","185 هـ","187 هـ"]'::jsonb,
  0,
  20,
  27,
  'multi',
  'توفي الإمام عليه السلام في بغداد سنة 183 هـ وهو في حبس السلطة العباسية. — الكافي؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'أين أُظهر جسده بعد وفاته قبل دفنه؟',
  '["مسجد المنصور","جسر بغداد","باب الكوفة","قصر الخلافة"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'تذكر المصادر إخراج جنازته وإظهارها في بغداد بعد وفاته لإعلان موته أمام الناس. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام موسى بن جعفر الكاظم (ع)' LIMIT 1),
  'إلى من انتقلت الإمامة بعد وفاته؟',
  '["إبراهيم بن موسى","محمد بن موسى","علي بن موسى الرضا","أحمد بن موسى"]'::jsonb,
  2,
  20,
  29,
  'multi',
  'نصت الروايات الإمامية على انتقال الإمامة إلى ابنه علي بن موسى الرضا عليه السلام. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام موسى بن جعفر (ع)'
);

-- Quiz: سيرة الإمام علي بن موسى الرضا (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-rida'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام علي بن موسى الرضا (ع)',
  'إسلاميات',
  'سيرة الإمام علي بن موسى الرضا (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-rida'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي مدينة وُلد الإمام الرضا عليه السلام؟',
  '["سامراء","الكوفة","المدينة","بغداد"]'::jsonb,
  2,
  20,
  0,
  'multi',
  'ولد الإمام علي بن موسى الرضا عليه السلام في المدينة. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي سنة هجرية كانت ولادته على قول مشهور في المصادر الإمامية؟',
  '["153 هـ","146 هـ","148 هـ","150 هـ"]'::jsonb,
  2,
  20,
  1,
  'multi',
  'ذكر الشيخ المفيد أن مولده عليه السلام كان سنة 148 هـ، مع وجود أقوال أخرى في تاريخ ولادته. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو عبد الله","أبو محمد","أبو جعفر","أبو الحسن"]'::jsonb,
  3,
  20,
  2,
  'multi',
  'كنيته عليه السلام أبو الحسن، ويُعبّر عنه في كتب الحديث بأبي الحسن الثاني. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما اسم والدته المشهور في عدد من المصادر؟',
  '["خيزران","نجمة","سمانة","حميدة"]'::jsonb,
  1,
  20,
  3,
  'multi',
  'ورد لوالدته أكثر من اسم في المصادر، ومن أشهرها نجمة. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'أي جماعة ظهرت بعد وفاة الإمام الكاظم وتوقفت عند إمامته؟',
  '["الفطحية","الكيسانية","الزيدية","الواقفة"]'::jsonb,
  3,
  20,
  4,
  'multi',
  'توقفت الواقفة على الإمام موسى الكاظم عليه السلام ولم تقر بانتقال الإمامة إلى الرضا. — الكافي؛ رجال الكشي.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما الدافع الذي تنسبه بعض الروايات إلى عدد من رؤوس الواقفة؟',
  '["الخوف من والي المدينة","الخلاف على المواريث","النزاع على الأوقاف","الأموال الموجودة عندهم"]'::jsonb,
  3,
  20,
  5,
  'multi',
  'تذكر الروايات أن أموالًا للإمام الكاظم بقيت عند بعض وكلائه، وكان ذلك من دوافع بعض رؤوس الوقف. — رجال الكشي.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'أي خليفتين عباسيين تنازعا الحكم خلال إمامة الإمام الرضا؟',
  '["المهدي والهادي","السفاح والمنصور","المعتصم والواثق","الأمين والمأمون"]'::jsonb,
  3,
  20,
  6,
  'multi',
  'شهد عصر الإمام الحرب بين محمد الأمين وأخيه عبد الله المأمون على الخلافة العباسية. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من انتصر في الصراع بين الأخوين؟',
  '["العباس بن المأمون","المأمون","الأمين","إبراهيم بن المهدي"]'::jsonb,
  1,
  20,
  7,
  'multi',
  'انتهى الصراع بسقوط الأمين واستقرار الخلافة للمأمون سنة 198 هـ. — بحار الأنوار.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'إلى أي إقليم استُدعي الإمام بأمر المأمون؟',
  '["الحجاز","اليمن","خراسان","الشام"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'استدعى المأمون الإمام من المدينة إلى خراسان حيث كان مركز حكمه. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من أرسله المأمون لإحضار الإمام من المدينة؟',
  '["الفضل بن سهل","هرثمة بن أعين","رجاء بن أبي الضحاك","الحسن بن سهل"]'::jsonb,
  2,
  20,
  9,
  'multi',
  'كُلّف رجاء بن أبي الضحاك بإخراج الإمام من المدينة والسير به إلى المأمون. — عيون أخبار الرضا؛ بحار الأنوار.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'أي مدينة مر بها الإمام في طريقه إلى خراسان واشتهرت بحديث مهم له؟',
  '["قم","الري","همدان","نيسابور"]'::jsonb,
  3,
  20,
  10,
  'multi',
  'ارتبط مرور الإمام بنيسابور بروايتة الحديث المعروف بحديث سلسلة الذهب. — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما العبارة المحورية في حديث سلسلة الذهب؟',
  '["المؤمن أخو المؤمن","الصبر مفتاح الفرج","العلم نور يقذفه الله","كلمة لا إله إلا الله حصني"]'::jsonb,
  3,
  20,
  11,
  'multi',
  'رُوي عنه عن آبائه عن الله تعالى: «كلمة لا إله إلا الله حصني»، ضمن حديث سلسلة الذهب. — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ماذا أضاف الإمام بعد رواية حديث الحصن؟',
  '["لمن عمل بكتاب الله","لمن أطاع السلطان","بشرطها وشروطها","لمن أدى الأمانة"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'أضاف عليه السلام بعد الحديث: «بشرطها وشروطها وأنا من شروطها». — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي مدينة كان مقر المأمون عندما وصل إليه الإمام؟',
  '["مرو","الكوفة","واسط","بغداد"]'::jsonb,
  0,
  20,
  13,
  'multi',
  'كان المأمون يقيم في مرو بخراسان عندما وصل الإمام الرضا عليه السلام إليه. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما المنصب الذي عرضه المأمون أولًا على الإمام؟',
  '["الوزارة","القضاء","إمارة الحجاز","الخلافة"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'تذكر المصادر أن المأمون عرض الخلافة أولًا، فرفضها الإمام عليه السلام. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما المنصب الذي أُلزم الإمام بقبوله بعد رفض الخلافة؟',
  '["نقابة الطالبيين","ولاية العهد","إمارة العراق","الوزارة"]'::jsonb,
  1,
  20,
  15,
  'multi',
  'انتهى الأمر بإلزام الإمام بقبول ولاية العهد للمأمون. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي سنة هجرية جرى إعلان ولاية العهد؟',
  '["201 هـ","200 هـ","199 هـ","202 هـ"]'::jsonb,
  0,
  20,
  16,
  'multi',
  'عقد المأمون ولاية العهد للإمام الرضا عليه السلام سنة 201 هـ. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما اللون الذي أمر المأمون باستبداله باللون العباسي بعد ولاية العهد؟',
  '["الأزرق","الأخضر","الأحمر","الأبيض"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'غيّر المأمون شعار اللباس من السواد العباسي إلى الخضرة في سياق ولاية العهد. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'ما الشرط الأساسي الذي وضعه الإمام عند قبول ولاية العهد؟',
  '["أن يختار الولاة بنفسه","ألا يتدخل في الحكم","أن يقيم في المدينة","أن يقود جيش خراسان"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'اشترط ألا يولي ولا يعزل ولا يغيّر شيئًا من نظام السلطة، بما يوضح عدم مشاركته الفعلية في الحكم. — عيون أخبار الرضا؛ بحار الأنوار.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من كان وزير المأمون المعروف بلقب ذي الرياستين؟',
  '["هرثمة بن أعين","الفضل بن سهل","الحسن بن سهل","رجاء بن أبي الضحاك"]'::jsonb,
  1,
  20,
  19,
  'multi',
  'كان الفضل بن سهل وزير المأمون ومن أبرز رجال دولته، واشتهر بلقب ذي الرياستين. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من العالم المسيحي الذي ناظره الإمام في مجلس المأمون؟',
  '["الجاثليق","رأس الجالوت","عمران الصابئ","سليمان المروزي"]'::jsonb,
  0,
  20,
  20,
  'multi',
  'تروي عيون أخبار الرضا مناظرة الإمام مع الجاثليق في مجلس جمع أصحاب الأديان. — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من مثّل اليهود في المناظرات المشهورة؟',
  '["الهربذ الأكبر","رأس الجالوت","الجاثليق","عمران الصابئ"]'::jsonb,
  1,
  20,
  21,
  'multi',
  'كان رأس الجالوت من ممثلي اليهود الذين حاورهم الإمام في مجلس المأمون. — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من كان من المتكلمين الذين ناظرهم الإمام في التوحيد حتى أقر بالحجة؟',
  '["يحيى بن أكثم","سليمان المروزي","أبو قرة","عمران الصابئ"]'::jsonb,
  3,
  20,
  22,
  'multi',
  'نقل الصدوق مناظرة مطولة بين الإمام وعمران الصابئ في التوحيد حتى أعلن عمران إقراره. — عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي مناسبة طلب المأمون من الإمام الخروج للصلاة بالناس؟',
  '["عيد الفطر","صلاة الاستسقاء","أول المحرم","يوم الجمعة"]'::jsonb,
  0,
  20,
  23,
  'multi',
  'طلب المأمون منه الخروج لصلاة العيد بالناس، فوافق بعد الإلحاح على أن يخرج بسنة رسول الله ﷺ. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'لماذا أرسل المأمون يطلب منه الرجوع قبل إتمام صلاة العيد؟',
  '["لتأثر الناس بخروجه","لوصول جيش إلى مرو","لمرض أصاب الإمام","لاشتداد المطر"]'::jsonb,
  0,
  20,
  24,
  'multi',
  'لما رأى المأمون شدة تأثر الناس به وخشي نتائج ذلك، أرسل إليه يطلب رجوعه. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'من ابن الإمام الذي ثار تساؤل بعض أصحابه بسبب صغر سنه؟',
  '["موسى المبرقع","الحسن العسكري","محمد الجواد","علي الهادي"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'كان الإمام الجواد عليه السلام صغير السن، ولذلك وردت أسئلة أصحاب الرضا عن الحجة من بعده. — الكافي، كتاب الحجة.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'بأي نبي احتج الإمام عندما سُئل عن صغر سن ابنه للإمامة؟',
  '["يوسف بن يعقوب","عيسى بن مريم","موسى بن عمران","إسماعيل بن إبراهيم"]'::jsonb,
  1,
  20,
  26,
  'multi',
  'استشهد الإمام بصغر سن عيسى عليه السلام عند النبوة في جواب الاعتراض على سن الجواد. — الكافي، كتاب الحجة.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي منطقة كانت وفاة الإمام الرضا عليه السلام؟',
  '["مرو","نيسابور","سرخس","طوس"]'::jsonb,
  3,
  20,
  27,
  'multi',
  'توفي الإمام عليه السلام في ناحية طوس أثناء رحلة المأمون نحو العراق. — الإرشاد؛ عيون أخبار الرضا.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'إلى جوار من دُفن الإمام الرضا عليه السلام؟',
  '["المأمون العباسي","الفضل بن سهل","الأمين العباسي","هارون الرشيد"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'دُفن الإمام عليه السلام في سناباد من طوس إلى جوار قبر هارون الرشيد. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن موسى الرضا (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الرضا عليه السلام؟',
  '["204 هـ","203 هـ","201 هـ","202 هـ"]'::jsonb,
  1,
  20,
  29,
  'multi',
  'يذكر الشيخ المفيد وفاته عليه السلام بطوس سنة 203 هـ. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن موسى الرضا (ع)'
);

-- Quiz: سيرة الإمام محمد بن علي الجواد (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-jawad'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام محمد بن علي الجواد (ع)',
  'إسلاميات',
  'سيرة الإمام محمد بن علي الجواد (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-jawad'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام محمد الجواد عليه السلام؟',
  '["203 هـ","198 هـ","190 هـ","195 هـ"]'::jsonb,
  3,
  20,
  0,
  'multi',
  'ولد الإمام محمد الجواد عليه السلام في شهر رمضان سنة 195 هـ بالمدينة. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'في أي مدينة كانت ولادته؟',
  '["طوس","مكة","بغداد","المدينة"]'::jsonb,
  3,
  20,
  1,
  'multi',
  'كانت ولادته عليه السلام في المدينة المنورة. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو جعفر","أبو الحسن","أبو محمد","أبو عبد الله"]'::jsonb,
  0,
  20,
  2,
  'multi',
  'كنيته أبو جعفر، ويُعرف في كتب الحديث بأبي جعفر الثاني تمييزًا له عن الإمام الباقر. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'بأي لقب اشتهر محمد بن علي عليه السلام؟',
  '["السجاد","الجواد","الكاظم","العسكري"]'::jsonb,
  1,
  20,
  3,
  'multi',
  'من أشهر ألقابه عليه السلام «الجواد»، كما اشتهر بلقب التقي. — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما الاسم المشهور لوالدته في الروايات؟',
  '["نجمة","حميدة","خيزران","سمانة"]'::jsonb,
  2,
  20,
  4,
  'multi',
  'وردت لوالدته أسماء متعددة، ومن أشهر ما ذكرته المصادر خيزران. — بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'كم كان عمر الإمام تقريبًا عند وفاة أبيه؟',
  '["سبع سنوات","ثماني سنوات","اثنتا عشرة سنة","عشر سنوات"]'::jsonb,
  1,
  20,
  5,
  'multi',
  'ولد سنة 195 هـ وتوفي الإمام الرضا سنة 203 هـ، فانتقلت إليه الإمامة وهو في نحو الثامنة. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما القضية التي أثارت تساؤلات غير معتادة بين بعض الشيعة بعد وفاة الإمام الرضا؟',
  '["مكان إقامة الإمام","تعدد أبناء الإمام","غياب النص على الإمام","صغر سن الإمام"]'::jsonb,
  3,
  20,
  6,
  'multi',
  'كان صغر سن الإمام الجواد عليه السلام أمرًا غير مسبوق بهذه الصورة، فوردت أسئلة عديدة حول إمامته. — الكافي، كتاب الحجة.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'بأي شخصية قرآنية استدل أصحاب الأئمة على إمكان إيتاء الحكمة في الصغر؟',
  '["يحيى","داود","إسحاق","هارون"]'::jsonb,
  0,
  20,
  7,
  'multi',
  'استُدل بقوله تعالى في يحيى عليه السلام: ﴿وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا﴾ على إمكان الحجية في الصغر. — الكافي، كتاب الحجة.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'إلى أي مدينة قدم كبار الشيعة لاختبار علم الإمام بعد وفاة أبيه؟',
  '["الكوفة","بغداد","المدينة","قم"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'تذكر الروايات وفود جماعات من الشيعة على الإمام الجواد في المدينة وااختبارهم علمه رغم صغر سنه. — بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'من عم الإمام الذي جلس أولًا في صدر المجلس قبل دخول الإمام الصغير؟',
  '["عبد الله بن موسى","أحمد بن موسى","إبراهيم بن موسى","إسحاق بن موسى"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'تذكر الأخبار حضور عبد الله بن موسى ومحاولة بعض القادمين سؤاله قبل ظهور الإمام الجواد عليه السلام. — بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ماذا حدث عندما أجاب عبد الله بن موسى عن بعض المسائل بغير الصواب؟',
  '["أحالهم إلى القاضي","انتهى المجلس فورًا","أرسلهم إلى بغداد","صحح الإمام أجوبته"]'::jsonb,
  3,
  20,
  10,
  'multi',
  'تروي المصادر دخول الإمام الجواد وتصحيحه الأجوبة وإجابته عن مسائل القوم. — بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'أي خليفة عباسي قرّب الإمام وأراد تزويجه من ابنته؟',
  '["المتوكل","المعتصم","الواثق","المأمون"]'::jsonb,
  3,
  20,
  11,
  'multi',
  'قرّب المأمون الإمام الجواد وأعلن عزمه على تزويجه ابنته أم الفضل. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما موقف العباسيين من قرار المأمون تزويج ابنته للإمام؟',
  '["طلبوا تعجيله","لم يعلموا به","اعترضوا عليه","أيدوه جميعًا"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'اعترض عدد من العباسيين خشية انتقال النفوذ والسلطان إلى العلويين. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'من اختاره العباسيون لاختبار علم الإمام أمام المأمون؟',
  '["أحمد بن أبي دؤاد","ثمامة بن أشرس","بشر المريسي","يحيى بن أكثم"]'::jsonb,
  3,
  20,
  13,
  'multi',
  'اختار العباسيون يحيى بن أكثم، وكان من كبار قضاة عصره، لاختبار الإمام. — الإرشاد؛ الاحتجاج.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'في أي مسألة بدأ يحيى بن أكثم اختباره للإمام؟',
  '["صيد المحرم","ميراث الجد","طلاق المريض","زكاة التجارة"]'::jsonb,
  0,
  20,
  14,
  'multi',
  'سأله يحيى عن حكم مُحرِم قتل صيدًا، فبدأ الإمام بتفصيل صور المسألة. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ماذا فعل الإمام بالسؤال بدل إعطاء حكم واحد مباشرة؟',
  '["أحاله إلى المأمون","رفض الإجابة","فصّل احتمالاته","طلب تأجيله"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'ذكر الإمام اختلاف الحكم باختلاف المكان والعمد والعلم ونوع الصيد وغيرها من الحالات. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما أثر جواب الإمام في يحيى بن أكثم بحسب رواية المجلس؟',
  '["طلب مناظرة ثانية","اعترض على السؤال","ظهر عليه العجز","غادر المجلس"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'يصف الشيخ المفيد تحير يحيى وانقطاعه أمام تفصيل الإمام للمسألة. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'من طلب من الإمام بعد ذلك أن يسأل يحيى مسألة؟',
  '["المعتصم","والي المدينة","قاضي بغداد","المأمون"]'::jsonb,
  3,
  20,
  17,
  'multi',
  'بعد ظهور علم الإمام، طلب المأمون منه أن يطرح على يحيى مسألة مقابلة. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما اسم ابنة المأمون التي تزوجها الإمام؟',
  '["أم الفضل","أم حبيب","أم جعفر","أم محمد"]'::jsonb,
  0,
  20,
  18,
  'multi',
  'زوّج المأمون ابنته أم الفضل من الإمام محمد الجواد عليه السلام. — الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'من هي والدة الإمام الهادي عليه السلام؟',
  '["سمانة","أم الفضل","خيزران","حميدة"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'الإمام الهادي عليه السلام ابن الإمام الجواد من السيدة سمانة، وليس من أم الفضل بنت المأمون. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'إلى أي مدينة عاد الإمام بعد إقامته في بغداد؟',
  '["المدينة","سامراء","الكوفة","مكة"]'::jsonb,
  0,
  20,
  20,
  'multi',
  'عاد الإمام الجواد عليه السلام إلى المدينة وأقام فيها مدة من إمامته. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'من صاحب الإمام الذي أصبح لاحقًا من أبرز وكلاء الإمام الهادي أيضًا؟',
  '["هشام بن الحكم","علي بن يقطين","أبان بن تغلب","علي بن مهزيار"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'كان علي بن مهزيار الأهوازي من أصحاب الإمام الجواد، ثم ارتبط كذلك بالإمام الهادي عليه السلام. — رجال النجاشي؛ رجال الطوسي.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'أي خليفة تولى الحكم بعد وفاة المأمون؟',
  '["المعتصم","المنتصر","الواثق","المتوكل"]'::jsonb,
  0,
  20,
  22,
  'multi',
  'تولى المعتصم العباسي الخلافة سنة 218 هـ بعد وفاة أخيه المأمون. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'إلى أي مدينة استُدعي الإمام في عهد المعتصم؟',
  '["الكوفة","البصرة","بغداد","سامراء"]'::jsonb,
  2,
  20,
  23,
  'multi',
  'استدعى المعتصم الإمام الجواد من المدينة إلى بغداد في السنة الأخيرة من حياته. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'في أي سنة وقع استدعاؤه الأخير إلى العراق؟',
  '["218 هـ","219 هـ","221 هـ","220 هـ"]'::jsonb,
  3,
  20,
  24,
  'multi',
  'قدم الإمام بغداد في سنة 220 هـ، وهي السنة التي توفي فيها. — الإرشاد للمفيد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند وفاته؟',
  '["ثلاثًا وثلاثين سنة","سبعًا وثلاثين سنة","تسعًا وعشرين سنة","خمسًا وعشرين سنة"]'::jsonb,
  3,
  20,
  25,
  'multi',
  'ولد سنة 195 هـ وتوفي سنة 220 هـ، فكان عمره نحو خمس وعشرين سنة. — الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'ما الذي ميّز عمره عند الوفاة مقارنة ببقية الأئمة الاثني عشر؟',
  '["كان أصغرهم عمرًا","كان أكبرهم عمرًا","كان ثاني أصغرهم","كان متوسط أعمارهم"]'::jsonb,
  0,
  20,
  26,
  'multi',
  'الإمام الجواد عليه السلام هو أصغر الأئمة الاثني عشر عمرًا عند الوفاة بحسب التواريخ المشهورة.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الجواد عليه السلام؟',
  '["219 هـ","221 هـ","220 هـ","218 هـ"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'توفي الإمام محمد الجواد عليه السلام في بغداد سنة 220 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'إلى جوار أي إمام دُفن؟',
  '["جعفر الصادق","محمد الباقر","علي الرضا","موسى الكاظم"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'دُفن عليه السلام عند جده الإمام موسى الكاظم عليه السلام في مقابر قريش ببغداد، المعروفة اليوم بالكاظمية. — الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن علي الجواد (ع)' LIMIT 1),
  'إلى أي ابن نصت الروايات على انتقال الإمامة بعده؟',
  '["علي الهادي","جعفر بن محمد","موسى المبرقع","حكيم بن محمد"]'::jsonb,
  0,
  20,
  29,
  'multi',
  'نص الإمام الجواد عليه السلام على إمامة ابنه علي الهادي من بعده. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام محمد بن علي الجواد (ع)'
);

-- Quiz: سيرة الإمام علي بن محمد الهادي (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-hadi'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام علي بن محمد الهادي (ع)',
  'إسلاميات',
  'سيرة الإمام علي بن محمد الهادي (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-hadi'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام علي الهادي عليه السلام بحسب المشهور؟',
  '["216 هـ","212 هـ","214 هـ","210 هـ"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'المشهور في المصادر الإمامية أن مولده عليه السلام كان سنة 212 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'في أي موضع قرب المدينة كانت ولادته؟',
  '["العقيق","الأبواء","الجحفة","صريا"]'::jsonb,
  3,
  20,
  1,
  'multi',
  'ولد الإمام الهادي عليه السلام في صريا، وهي قرية أسسها الإمام موسى الكاظم قرب المدينة. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو محمد","أبو الحسن","أبو عبد الله","أبو جعفر"]'::jsonb,
  1,
  20,
  2,
  'multi',
  'كنيته أبو الحسن، ويُعرف في كتب الحديث بأبي الحسن الثالث. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أي لقبين اشتهر بهما الإمام علي بن محمد؟',
  '["الهادي والنقي","الرضا والتقي","الكاظم والصابر","السجاد والزكي"]'::jsonb,
  0,
  20,
  3,
  'multi',
  'من أشهر ألقابه عليه السلام «الهادي» و«النقي». — بحار الأنوار؛ منتهى الآمال.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من هي والدته بحسب الاسم المشهور في المصادر؟',
  '["سمانة","نجمة","خيزران","حميدة"]'::jsonb,
  0,
  20,
  4,
  'multi',
  'أمه السيدة سمانة المغربية، وتذكر المصادر فضلها ومكانتها. — الكافي؛ بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أي خليفة عباسي كان يتولى الحكم عند بداية إمامته؟',
  '["المنتصر","الواثق","المتوكل","المعتصم"]'::jsonb,
  3,
  20,
  5,
  'multi',
  'بدأت إمامته سنة 220 هـ في خلافة المعتصم العباسي. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من الذي استدعاه من المدينة إلى سامراء؟',
  '["المتوكل","الواثق","المنتصر","المعتصم"]'::jsonb,
  0,
  20,
  6,
  'multi',
  'أمر المتوكل العباسي بإشخاص الإمام الهادي من المدينة إلى سامراء. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من والي المدينة الذي كتب إلى المتوكل محذرًا من الإمام؟',
  '["عبيد الله بن خاقان","إسحاق بن إبراهيم","صالح بن وصيف","عبد الله بن محمد"]'::jsonb,
  3,
  20,
  7,
  'multi',
  'كتب عبد الله بن محمد، والي المدينة، إلى المتوكل يسعى بالإمام ويخوفه من أمره. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ماذا فعل الإمام عندما علم بوشاية والي المدينة؟',
  '["جمع أصحابه","كتب إلى المتوكل","غادر إلى مكة","واجه الوالي"]'::jsonb,
  1,
  20,
  8,
  'multi',
  'كتب الإمام إلى المتوكل يذكر إساءة الوالي إليه ويكذب ما نُسب إليه. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من أرسله المتوكل لإحضار الإمام من المدينة؟',
  '["بغا الكبير","سعيد الحاجب","يحيى بن هرثمة","صالح بن وصيف"]'::jsonb,
  2,
  20,
  9,
  'multi',
  'أرسل المتوكل يحيى بن هرثمة إلى المدينة لإشخاص الإمام إلى سامراء. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ماذا لاحظ يحيى بن هرثمة من أهل المدينة عند قدومه لأخذ الإمام؟',
  '["مطالبتهم بسجنه","احتفالهم بخروجه","خوفهم الشديد عليه","امتناعهم عن مقابلته"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'نقل يحيى شدة اضطراب أهل المدينة وخوفهم على الإمام عندما علموا بمهمته. — بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ماذا وجد يحيى بعد تفتيش دار الإمام؟',
  '["الرايات والدروع","المصاحف وكتب العلم","الرسائل والأسلحة","الأموال والعهود"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'تذكر الأخبار أنه فتش الدار فلم يجد ما اتُّهم به الإمام، وإنما وجد المصاحف وكتب العلم. — بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'في أي مدينة أُجبر الإمام على الإقامة بعد مغادرة المدينة؟',
  '["الكوفة","بغداد","سامراء","واسط"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'استقر الإمام الهادي عليه السلام في سامراء تحت رقابة السلطة العباسية. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أين أُنزل الإمام أول وصوله سامراء بقصد الانتقاص منه بحسب الروايات؟',
  '["قصر المعتصم","دار الخلافة","خان الصعاليك","معسكر الأتراك"]'::jsonb,
  2,
  20,
  13,
  'multi',
  'تذكر الروايات أنه أُنزل أول قدومه في خان الصعاليك قبل نقله إلى داره. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'بأي اسم آخر اشتهرت سامراء في الروايات المرتبطة بالإمامين الهادي والعسكري؟',
  '["الزوراء","العسكر","المدائن","الهاشمية"]'::jsonb,
  1,
  20,
  14,
  'multi',
  'عُرفت سامراء بالعسكر لارتباطها بمعسكر الدولة، ومنه لقب الإمامين بالعسكريين. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ما الذي اتُّهم الإمام بإخفائه عندما أمر المتوكل بتفتيش داره ليلًا؟',
  '["السلاح والأموال","رسائل الروم","كتب الفلسفة","سجلات الضرائب"]'::jsonb,
  0,
  20,
  15,
  'multi',
  'بلغ المتوكل أن في منزل الإمام سلاحًا وأموالًا وكتبًا من شيعته، فأمر بمداهمة الدار. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'كيف وجد رجال المتوكل الإمام عند اقتحام منزله؟',
  '["يجمع الأموال","يكتب الرسائل","يتلو القرآن","يستقبل الوفود"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'تروي المصادر أنهم وجدوه منفردًا مستقبل القبلة يقرأ القرآن ولم يجدوا ما اتُّهم به. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ماذا كان أمام المتوكل عندما أُدخل عليه الإمام في تلك الليلة؟',
  '["سيف مسلول","كتاب مختوم","كأس من الشراب","صندوق أموال"]'::jsonb,
  2,
  20,
  17,
  'multi',
  'يذكر المفيد أن المتوكل كان يشرب حين أُدخل عليه الإمام بعد مداهمة داره. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ماذا طلب المتوكل من الإمام بعد أن رفض تناول الشراب؟',
  '["كتابة رسالة","تفسير رؤياه","إنشاد الشعر","مناظرة القاضي"]'::jsonb,
  2,
  20,
  18,
  'multi',
  'لما امتنع الإمام عن الشراب، طلب المتوكل منه أن ينشده شعرًا. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'بأي بيت تبدأ القصيدة المشهورة التي أنشدها في مجلس المتوكل؟',
  '["باتوا على قلل الأجبال تحرسهم","دع الأيام تفعل ما تشاء","النفس تبكي على الدنيا وقد علمت","لكل شيء إذا ما تم نقصان"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'أنشد الإمام أبياته المشهورة التي تبدأ بـ«باتوا على قلل الأجبال تحرسهم» مذكّرًا بمصير أهل السلطان. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ما أثر القصيدة في المتوكل بحسب الرواية؟',
  '["أمر بسجنه","بكى","غضب","غادر المجلس"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'تذكر الرواية أن المتوكل بكى حتى بلّت دموعه لحيته وأمر برفع الشراب. — الإرشاد للمفيد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ما النظام الذي اعتمد عليه الإمام للتواصل مع أتباعه في المناطق البعيدة؟',
  '["قوافل التجارة","مجالس القضاء","شبكة الوكلاء","دواوين الدولة"]'::jsonb,
  2,
  20,
  21,
  'multi',
  'توسع نظام الوكلاء في عصر الإمام الهادي للتواصل مع الشيعة وإدارة الشؤون الدينية والمالية. — الكافي؛ رجال الكشي.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من وكيله المعروف في بغداد والمدائن الذي استمر لاحقًا مع الإمام العسكري؟',
  '["عثمان بن سعيد","علي بن مهزيار","عبد العظيم الحسني","أحمد بن إسحاق"]'::jsonb,
  0,
  20,
  22,
  'multi',
  'كان عثمان بن سعيد العمري من الثقات والوكلاء المرتبطين بالإمام الهادي ثم الإمام العسكري. — الكافي؛ الغيبة للطوسي.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'ما المهنة التي ارتبطت بعثمان بن سعيد وساعدته في إخفاء نقل الأموال؟',
  '["بيع السمن","تجارة القماش","صناعة الورق","بيع العطور"]'::jsonb,
  0,
  20,
  23,
  'multi',
  'عُرف عثمان بن سعيد بالسمّان، وكان يخفي الأموال في أوعية السمن لإيصالها بعيدًا عن رقابة السلطة. — الغيبة للطوسي.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أي نص مشهور رُوي عن الإمام الهادي في بيان مقام الأئمة وزيارتهم؟',
  '["الزيارة الجامعة الكبيرة","دعاء الندبة","زيارة عاشوراء","دعاء كميل"]'::jsonb,
  0,
  20,
  24,
  'multi',
  'روى موسى بن عبد الله النخعي عن الإمام الهادي النص المعروف بالزيارة الجامعة الكبيرة. — من لا يحضره الفقيه؛ تهذيب الأحكام.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'من الراوي الذي طلب من الإمام أن يعلمه قولًا بليغًا كاملًا لزيارة الأئمة؟',
  '["أحمد بن إسحاق القمي","علي بن مهزيار الأهوازي","موسى بن عبد الله النخعي","عثمان بن سعيد العمري"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'نُقلت الزيارة الجامعة الكبيرة عن موسى بن عبد الله النخعي عن الإمام الهادي عليه السلام. — من لا يحضره الفقيه.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أي شخصية عرضت معتقداتها على الإمام فأقرها؟',
  '["عثمان بن سعيد","الحسين بن روح","أحمد بن إسحاق","عبد العظيم الحسني"]'::jsonb,
  3,
  20,
  26,
  'multi',
  'ورد أن عبد العظيم الحسني عرض دينه وعقيدته على الإمام الهادي فأقره عليها. — التوحيد للصدوق؛ بحار الأنوار.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'أي ابن للإمام كان يُظن عند بعض أصحابه أنه سيخلفه، لكنه توفي في حياة أبيه؟',
  '["محمد","موسى","جعفر","الحسين"]'::jsonb,
  0,
  20,
  27,
  'multi',
  'كان السيد محمد بن الإمام الهادي ذا منزلة كبيرة وتوفي في حياة أبيه، فوردت أسئلة حول الإمام بعده. — الكافي، كتاب الحجة.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الهادي عليه السلام؟',
  '["252 هـ","254 هـ","256 هـ","258 هـ"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'توفي الإمام علي الهادي عليه السلام في سامراء سنة 254 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام علي بن محمد الهادي (ع)' LIMIT 1),
  'إلى أي ابن انتقلت الإمامة بعده؟',
  '["محمد بن علي","الحسين بن علي","الحسن العسكري","جعفر بن علي"]'::jsonb,
  2,
  20,
  29,
  'multi',
  'نصت المصادر الإمامية على إمامة الحسن بن علي العسكري عليه السلام بعد أبيه. — الكافي، كتاب الحجة؛ الإرشاد.',
  'سيرة الإمام علي بن محمد الهادي (ع)'
);

-- Quiz: سيرة الإمام الحسن العسكري (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-askari'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام الحسن العسكري (ع)',
  'إسلاميات',
  'سيرة الإمام الحسن العسكري (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-askari'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'في أي سنة هجرية وُلد الإمام الحسن العسكري عليه السلام؟',
  '["230 هـ","232 هـ","236 هـ","234 هـ"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'المشهور في المصادر الإمامية أن ولادته عليه السلام كانت سنة 232 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'في أي مدينة كانت ولادته بحسب المشهور؟',
  '["المدينة","الكوفة","بغداد","سامراء"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'ولد الإمام الحسن العسكري عليه السلام في المدينة ثم انتقل مع أبيه إلى سامراء. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ما كنيته المشهورة؟',
  '["أبو عبد الله","أبو جعفر","أبو محمد","أبو الحسن"]'::jsonb,
  2,
  20,
  2,
  'multi',
  'اشتهر الإمام الحسن العسكري عليه السلام بكنية أبي محمد. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'لماذا اشتهر بلقب «العسكري»؟',
  '["لخدمته في الجيش","لانتصاره في حرب","لقيادته جيشًا","لإقامته في العسكر"]'::jsonb,
  3,
  20,
  3,
  'multi',
  'نُسب الإمام إلى «العسكر»، وهو الاسم الذي عُرفت به منطقة سامراء التي أُسكن فيها. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند انتقال الإمامة إليه؟',
  '["أربعًا وعشرين سنة","ستًا وعشرين سنة","اثنتين وعشرين سنة","عشرين سنة"]'::jsonb,
  2,
  20,
  4,
  'multi',
  'ولد سنة 232 هـ وتوفي أبوه الإمام الهادي سنة 254 هـ، فكان في نحو الثانية والعشرين. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'أي خليفة عباسي كان يحكم عند بداية إمامته؟',
  '["المتوكل","المعتمد","المهتدي","المعتز"]'::jsonb,
  3,
  20,
  5,
  'multi',
  'بدأت إمامة العسكري عليه السلام سنة 254 هـ في خلافة المعتز العباسي. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'أي خليفة حكم بعد المعتز وعاصر الإمام فترة قصيرة؟',
  '["المعتمد","المنتصر","المستعين","المهتدي"]'::jsonb,
  3,
  20,
  6,
  'multi',
  'تولى المهتدي العباسي بعد المعتز سنة 255 هـ وعاصر الإمام العسكري. — بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من الخليفة الذي امتدت إمامة العسكري إلى عهده وتوفي الإمام في خلافته؟',
  '["المعتمد","المكتفي","المقتدر","المعتضد"]'::jsonb,
  0,
  20,
  7,
  'multi',
  'توفي الإمام العسكري سنة 260 هـ في عهد المعتمد العباسي. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'عند من سُجن الإمام في إحدى مراحل التضييق عليه؟',
  '["أحمد بن الخصيب","سعيد الحاجب","عبيد الله بن خاقان","صالح بن وصيف"]'::jsonb,
  3,
  20,
  8,
  'multi',
  'تذكر المصادر حبس الإمام عند صالح بن وصيف في سامراء. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ماذا طلب بعض العباسيين من صالح بن وصيف بشأن الإمام؟',
  '["إطلاق سراحه","إحضاره للمجلس","إرساله للمدينة","التضييق عليه"]'::jsonb,
  3,
  20,
  9,
  'multi',
  'اشتكى بعض العباسيين من تساهله وطلبوا منه التشديد على الإمام في الحبس. — الإرشاد للمفيد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ماذا حدث للحارسين اللذين وُكلا بالتشديد على الإمام؟',
  '["نقلاه إلى بغداد","أطلقا سراحه","هربا من السجن","تأثرا بعبادته"]'::jsonb,
  3,
  20,
  10,
  'multi',
  'تروي المصادر أن الحارسين تغيّرت حالهما لما شاهداه من عبادته وصلاحه. — الإرشاد؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'أي شخصية قمية كانت من أبرز أصحاب الإمام ووكلائه؟',
  '["يونس بن عبد الرحمن","زكريا بن آدم","علي بن مهزيار","أحمد بن إسحاق"]'::jsonb,
  3,
  20,
  11,
  'multi',
  'كان أحمد بن إسحاق القمي من خواص الإمام العسكري ومن أبرز من اتصل به من أهل قم. — الكافي؛ رجال الطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من الوكيل الذي سبق أن خدم الإمام الهادي واستمر مع الإمام العسكري؟',
  '["علي بن محمد السمري","محمد بن عثمان","عثمان بن سعيد","الحسين بن روح"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'كان عثمان بن سعيد العمري من وكلاء الإمامين الهادي والعسكري ومن ثقاتهما. — الكافي؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'كيف وصف الإمام العسكري عثمان بن سعيد لأصحابه؟',
  '["الكاتب الأمين","القاضي العادل","العالم الفقيه","الثقة المأمون"]'::jsonb,
  3,
  20,
  13,
  'multi',
  'وردت روايات تؤكد وثاقة عثمان بن سعيد وأمانته واعتماد الإمام عليه. — الغيبة للطوسي؛ الكافي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ما الأسلوب الذي استخدمه الإمام في التواصل مع جماعات من شيعته بعيدًا عن الرقابة؟',
  '["الوفود الرسمية","مجالس القضاة","المكاتبات والوكلاء","الخطب العامة"]'::jsonb,
  2,
  20,
  14,
  'multi',
  'اعتمد الإمام على التوقيعات والمراسلات وشبكة الوكلاء بسبب الرقابة العباسية الشديدة. — الكافي؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'أي منطقة كان لها حضور بارز في شبكة أتباع الإمام عبر أحمد بن إسحاق؟',
  '["البصرة","الموصل","دمشق","قم"]'::jsonb,
  3,
  20,
  15,
  'multi',
  'كان أحمد بن إسحاق من أبرز وجوه قم واتصل بالإمام نيابة عن جماعة من شيعتها. — رجال الطوسي؛ بحار الأنوار.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من هي السيدة المرتبطة بولادة الإمام المهدي عليه السلام في الروايات الإمامية؟',
  '["حميدة","سمانة","نجمة","نرجس"]'::jsonb,
  3,
  20,
  16,
  'multi',
  'تنص الروايات الإمامية على أن والدة الإمام المهدي عليه السلام هي السيدة نرجس. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من عمة الإمام العسكري التي ارتبط اسمها برواية ولادة الإمام المهدي؟',
  '["زينب","فاطمة","حكيمة","خديجة"]'::jsonb,
  2,
  20,
  17,
  'multi',
  'روت حكيمة بنت الإمام الجواد تفاصيل ولادة الإمام المهدي عليه السلام. — كمال الدين للصدوق.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'في أي ليلة طلب الإمام من حكيمة أن تبقى في داره بحسب الرواية المشهورة؟',
  '["ليلة أول رمضان","ليلة النصف من شعبان","ليلة النصف من رمضان","ليلة أول شعبان"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'تروي حكيمة أن الإمام أخبرها بوقوع الولادة في ليلة النصف من شعبان. — كمال الدين.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'في أي سنة هجرية كانت ولادة الإمام المهدي بحسب المشهور الإمامي؟',
  '["255 هـ","257 هـ","259 هـ","253 هـ"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'المشهور في المصادر الإمامية أن الإمام المهدي عليه السلام ولد سنة 255 هـ في سامراء. — الكافي؛ كمال الدين.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'لماذا أُحيطت ولادة الإمام المهدي بدرجة كبيرة من السرية؟',
  '["بسبب وباء سامراء","خوفًا من السلطة العباسية","بسبب سفر الأسرة","خوفًا من الروم"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'كانت السلطة تراقب بيت الإمام العسكري لما شاع من الأخبار عن الإمام المنتظر من ذريته. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'هل أظهر الإمام ابنه لجميع الناس بعد ولادته؟',
  '["أرسله إلى بغداد","أرسله إلى المدينة","أظهره للعامة","أظهره لخواصه"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'تذكر الروايات أن الإمام أطلع جماعة محدودة من ثقاته وأصحابه على ابنه لإثبات ولادته وإمامته. — الكافي؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'كم رجلًا تقريبًا اجتمعوا عند الإمام حين أراهم ابنه بحسب إحدى الروايات المشهورة؟',
  '["ستون رجلًا","عشرون رجلًا","ثمانون رجلًا","أربعون رجلًا"]'::jsonb,
  3,
  20,
  22,
  'multi',
  'رُوي عن جماعة من أصحاب الإمام أنهم كانوا أربعين رجلًا حين أراهم ابنه وأشار إلى إمامته من بعده. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ماذا طلب الإمام من أولئك الخواص بعد تعريفهم بابنه؟',
  '["مبايعته في المسجد","طاعته بعده","إعلان ولادته للعامة","إخراجه من سامراء"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'عرّف الإمام العسكري خواصه بالحجة من بعده وأمرهم بطاعته وعدم الاختلاف. — الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'في أي سنة هجرية توفي الإمام الحسن العسكري عليه السلام؟',
  '["262 هـ","260 هـ","264 هـ","258 هـ"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'توفي الإمام العسكري عليه السلام في سامراء سنة 260 هـ. — الكافي؛ الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'كم كان عمره تقريبًا عند وفاته؟',
  '["ثمانيًا وعشرين سنة","ستًا وثلاثين سنة","اثنتين وثلاثين سنة","أربعين سنة"]'::jsonb,
  0,
  20,
  25,
  'multi',
  'ولد سنة 232 هـ وتوفي سنة 260 هـ، فكان عمره نحو ثمان وعشرين سنة. — الإرشاد.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من أخ الإمام الذي ظهر في أحداث ما بعد وفاته وادعى موقعًا في الإمامة؟',
  '["جعفر بن علي","الحسين بن علي","محمد بن علي","موسى بن علي"]'::jsonb,
  0,
  20,
  26,
  'multi',
  'تذكر المصادر الإمامية ظهور جعفر بن علي بعد وفاة أخيه ومحاولته أخذ موقعه. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'من تقدم للصلاة على الإمام العسكري بحسب الرواية قبل أن يُمنع؟',
  '["عقيد الخادم","عثمان بن سعيد","جعفر بن علي","أحمد بن إسحاق"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'تروي المصادر أن جعفر تقدم للصلاة على أخيه قبل ظهور الإمام المهدي عليه السلام. — كمال الدين.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'ماذا قال الإمام المهدي لجعفر عندما تقدم للصلاة بحسب الرواية؟',
  '["دعني أصلي","الصلاة لي","قف مكانك","تأخر يا عم"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'تروي المصادر الإمامية أن الإمام المهدي خرج وقال لجعفر: «تأخر يا عم، أنا أحق بالصلاة على أبي». — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام الحسن العسكري (ع)' LIMIT 1),
  'أين دُفن الإمام الحسن العسكري عليه السلام؟',
  '["في داره بسامراء","في مقابر بغداد","في مسجد الكوفة","في بقيع المدينة"]'::jsonb,
  0,
  20,
  29,
  'multi',
  'دُفن عليه السلام في داره بسامراء إلى جوار أبيه الإمام الهادي عليه السلام. — الإرشاد؛ الكافي.',
  'سيرة الإمام الحسن العسكري (ع)'
);

-- Quiz: سيرة الإمام محمد بن الحسن المهدي (عج)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-imam-mahdi'::uuid ON CONFLICT DO NOTHING,
  'سيرة الإمام محمد بن الحسن المهدي (عج)',
  'إسلاميات',
  'سيرة الإمام محمد بن الحسن المهدي (عج)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-imam-mahdi'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'في أي سنة بدأت إمامة الإمام المهدي عليه السلام؟',
  '["262 هـ","260 هـ","258 هـ","256 هـ"]'::jsonb,
  1,
  20,
  0,
  'multi',
  'بدأت إمامته بعد وفاة أبيه الإمام الحسن العسكري عليه السلام سنة 260 هـ. — الكافي؛ كمال الدين.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'كم كان عمره تقريبًا عند بدء إمامته بحسب المشهور الإمامي؟',
  '["خمس سنوات","سبع سنوات","تسع سنوات","ثلاث سنوات"]'::jsonb,
  0,
  20,
  1,
  'multi',
  'بناءً على ولادته سنة 255 هـ ووفاة أبيه سنة 260 هـ، كان عمره نحو خمس سنوات. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما المرحلة التي بدأت مع انتقال الإمامة إليه سنة 260 هـ؟',
  '["الغيبة الصغرى","عصر الرجعة","الغيبة الكبرى","عصر الظهور"]'::jsonb,
  0,
  20,
  2,
  'multi',
  'تبدأ الغيبة الصغرى بوفاة الإمام العسكري سنة 260 هـ واستمرار الاتصال بالإمام عبر السفراء. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من كان أول السفراء الأربعة في الغيبة الصغرى؟',
  '["عثمان بن سعيد","محمد بن عثمان","الحسين بن روح","علي بن محمد السمري"]'::jsonb,
  0,
  20,
  3,
  'multi',
  'تولى عثمان بن سعيد العمري النيابة الخاصة عن الإمام في بداية الغيبة الصغرى. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الكنية التي اشتهر بها عثمان بن سعيد؟',
  '["أبو جعفر","أبو عمرو","أبو القاسم","أبو محمد"]'::jsonb,
  1,
  20,
  4,
  'multi',
  'عُرف السفير الأول عثمان بن سعيد بكنية أبي عمرو. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من تولّى السفارة بعد وفاة عثمان بن سعيد؟',
  '["علي بن محمد السمري","الحسين بن روح","أحمد بن إسحاق","محمد بن عثمان"]'::jsonb,
  3,
  20,
  5,
  'multi',
  'انتقلت النيابة الخاصة بعد عثمان إلى ابنه محمد بن عثمان العمري. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما العلاقة بين السفيرين الأول والثاني؟',
  '["معلم وتلميذه","أب وابنه","عم وابن أخيه","أخوان"]'::jsonb,
  1,
  20,
  6,
  'multi',
  'محمد بن عثمان هو ابن السفير الأول عثمان بن سعيد العمري. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من نصّ على نيابة محمد بن عثمان بعد أبيه بحسب الروايات؟',
  '["الحسين بن روح","محمد بن إبراهيم","الإمام المهدي","أحمد بن إسحاق"]'::jsonb,
  2,
  20,
  7,
  'multi',
  'خرجت توقيعات تؤكد مكانة محمد بن عثمان ونيابته بعد أبيه. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الاسم الذي أُطلق على الرسائل الصادرة عن الإمام إلى شيعته ووكلائه؟',
  '["الصحائف","المسائل","التوقيعات","العهود"]'::jsonb,
  2,
  20,
  8,
  'multi',
  'عُرفت الكتب والأجوبة الصادرة عن الإمام في عصر الغيبة الصغرى بالتوقيعات. — كمال الدين؛ الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما إحدى الوظائف الأساسية للسفراء؟',
  '["إيصال الأسئلة والأجوبة","إدارة القضاء","قيادة الجيوش","تعيين الولاة"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'كان السفراء واسطة موثوقة في إيصال مسائل الشيعة والتوقيعات والأجوبة إليهم. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'أي سمة ساعدت على حماية الإمام وشبكة وكلائه من السلطة؟',
  '["الهجرة","السرية","العلنية","المصاهرة"]'::jsonb,
  1,
  20,
  10,
  'multi',
  'اعتمدت شبكة الاتصال في الغيبة الصغرى على قدر كبير من الكتمان والسرية بسبب الرقابة العباسية. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من أطول السفراء الأربعة مدةً في النيابة؟',
  '["علي بن محمد السمري","محمد بن عثمان","عثمان بن سعيد","الحسين بن روح"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'استمرت سفارة محمد بن عثمان عقودًا، وكانت الأطول بين السفراء الأربعة. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من عيّنه محمد بن عثمان سفيرًا من بعده؟',
  '["محمد بن علي الشلمغاني","علي بن محمد السمري","أحمد بن إسحاق القمي","الحسين بن روح"]'::jsonb,
  3,
  20,
  12,
  'multi',
  'نص محمد بن عثمان على الحسين بن روح النوبختي ليخلفه في السفارة. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'إلى أي أسرة معروفة في بغداد نُسب السفير الثالث؟',
  '["البرمكية","الحمدانية","النوبختية","الطاهرية"]'::jsonb,
  2,
  20,
  13,
  'multi',
  'عُرف السفير الثالث بالحسين بن روح النوبختي لارتباطه بآل نوبخت. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من الشخصية التي انحرفت وادعت مقامًا خاصًا بعد أن كانت مرتبطة بالحسين بن روح؟',
  '["محمد بن نصير النميري","علي بن حسكة","فارس بن حاتم","محمد بن علي الشلمغاني"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'انحرف الشلمغاني وصدرت البراءة منه بعد ادعاءاته، مع أنه كان قبل ذلك من المرتبطين بدائرة الحسين بن روح. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الموقف المنقول عن الإمام تجاه الشلمغاني بعد انحرافه؟',
  '["صدر توقيع بلعنه","أُرسل إلى قم","عُيّن سفيرًا","أُمر بكتمان أمره"]'::jsonb,
  0,
  20,
  15,
  'multi',
  'يروي الشيخ الطوسي خروج توقيع يتضمن البراءة من الشلمغاني ولعنه بعد انحرافه. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'من تولّى السفارة بعد وفاة الحسين بن روح؟',
  '["علي بن محمد السمري","محمد بن عثمان العمري","أبو سهل النوبختي","محمد بن علي الشلمغاني"]'::jsonb,
  0,
  20,
  16,
  'multi',
  'كان علي بن محمد السمري رابع السفراء وآخرهم. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما ترتيب علي بن محمد السمري بين السفراء الأربعة؟',
  '["الثالث","الأول","الثاني","الرابع"]'::jsonb,
  3,
  20,
  17,
  'multi',
  'ترتيب السفراء هو عثمان بن سعيد، ثم محمد بن عثمان، ثم الحسين بن روح، ثم علي السمري. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'قبل كم يوم من وفاة السمري خرج إليه التوقيع الأخير المشهور؟',
  '["أربعة أيام","ثمانية أيام","ستة أيام","عشرة أيام"]'::jsonb,
  2,
  20,
  18,
  'multi',
  'أخبر التوقيع السمري بوفاته بعد ستة أيام ونهاه عن الوصية بالسفارة إلى أحد بعده. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ماذا أمر التوقيع الأخير السمري بشأن من يخلفه؟',
  '["ألا يوصي إلى أحد","أن يختار ابنه","أن يختار فقيهًا","أن يختار نوبختيًا"]'::jsonb,
  0,
  20,
  19,
  'multi',
  'نص التوقيع الأخير على عدم الوصية إلى شخص يقوم مقام السمري بعد وفاته. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'في أي سنة توفي علي بن محمد السمري؟',
  '["325 هـ","331 هـ","329 هـ","327 هـ"]'::jsonb,
  2,
  20,
  20,
  'multi',
  'توفي السفير الرابع سنة 329 هـ، وبوفاته انتهت النيابة الخاصة. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما المرحلة التي بدأت بعد وفاة السفير الرابع؟',
  '["الغيبة الصغرى","عصر الحضور","عصر السفارة","الغيبة الكبرى"]'::jsonb,
  3,
  20,
  21,
  'multi',
  'انتهت الغيبة الصغرى بوفاة السمري وبدأت الغيبة الكبرى سنة 329 هـ. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'كم استمرت الغيبة الصغرى تقريبًا؟',
  '["مئة وعشر سنوات","تسعين سنة","سبعين سنة","خمسين سنة"]'::jsonb,
  2,
  20,
  22,
  'multi',
  'امتدت من سنة 260 هـ إلى سنة 329 هـ، أي نحو تسعة وستين عامًا. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الذي انتهى بانتهاء الغيبة الصغرى؟',
  '["رواية الحديث","السفارة الخاصة","شبكة العلماء","أصل الإمامة"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'بوفاة السمري انتهى نظام السفراء المعينين بأشخاصهم عن الإمام. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ماذا تفيد الرواية المشهورة في «الحوادث الواقعة»؟',
  '["الرجوع إلى قضاة السلطان","الرجوع إلى أمراء البلدان","الرجوع إلى رواة الحديث","الرجوع إلى نقباء القبائل"]'::jsonb,
  2,
  20,
  24,
  'multi',
  'ورد في التوقيع: «وأما الحوادث الواقعة فارجعوا فيها إلى رواة حديثنا». — كمال الدين؛ الاحتجاج.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'أي شخص ورد التوقيع المشهور في جواب مسائله المتضمنة «الحوادث الواقعة»؟',
  '["أحمد بن إسحاق","إسحاق بن يعقوب","سعد بن عبد الله","محمد بن عثمان"]'::jsonb,
  1,
  20,
  25,
  'multi',
  'نُقل التوقيع جوابًا عن مسائل إسحاق بن يعقوب بواسطة محمد بن عثمان العمري. — كمال الدين؛ الاحتجاج.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'بحسب التوقيع الأخير، ما الحكم فيمن يدعي المشاهدة مقرونة بالسفارة والنيابة الخاصة قبل العلامات المذكورة؟',
  '["يُسأل عن نسبه","يُكذَّب ادعاؤه","يُختبر علمه","تُقبل شهادته"]'::jsonb,
  1,
  20,
  26,
  'multi',
  'جاء في التوقيع الأخير التحذير من دعوى المشاهدة قبل خروج السفياني والصيحة، في سياق انتهاء السفارة الخاصة. — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'أي علامة وردت صراحة في التوقيع الأخير مع الصيحة؟',
  '["خسف البيداء","خروج اليماني","خروج السفياني","قتل النفس الزكية"]'::jsonb,
  2,
  20,
  27,
  'multi',
  'نص التوقيع المنقول للسمري على «خروج السفياني والصيحة». — الغيبة للطوسي.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الدعاء المشهور الذي يبدأ بنداء الله ثم النبي والأئمة وينتهي بطلب النصرة للإمام؟',
  '["دعاء كميل","دعاء الجوشن","دعاء الندبة","دعاء أبي حمزة"]'::jsonb,
  2,
  20,
  28,
  'multi',
  'دعاء الندبة من أشهر النصوص المرتبطة بالانتظار والندبة على غيبة الحجة عليه السلام. — مصباح المتهجد.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة الإمام محمد بن الحسن المهدي (عج)' LIMIT 1),
  'ما الواجب الذي تؤكد عليه الروايات بدل تحديد موعد لظهور الإمام؟',
  '["ترك طلب العلم","الانتظار والاستعداد","تحديد سنة الظهور","اعتزال المجتمع"]'::jsonb,
  1,
  20,
  29,
  'multi',
  'تؤكد الروايات الإمامية انتظار الفرج وتنهى عن التوقيت وتحديد موعد للظهور. — الكافي؛ الغيبة للنعماني.',
  'سيرة الإمام محمد بن الحسن المهدي (عج)'
);

-- Quiz: سيرة العباس بن علي (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-al-abbas'::uuid ON CONFLICT DO NOTHING,
  'سيرة العباس بن علي (ع)',
  'إسلاميات',
  'سيرة العباس بن علي (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-al-abbas'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'من هي والدة العباس بن علي عليه السلام؟',
  '["ليلى بنت أبي مرة","أسماء بنت عميس","أمامة بنت أبي العاص","فاطمة بنت حزام"]'::jsonb,
  3,
  20,
  0,
  'multi',
  'العباس هو ابن أمير المؤمنين من فاطمة بنت حزام الكلابية، المعروفة بأم البنين. — الإرشاد للمفيد؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'إلى أي قبيلة تنتسب والدته أم البنين؟',
  '["بني أسد","بني مخزوم","بني كلاب","بني تميم"]'::jsonb,
  2,
  20,
  1,
  'multi',
  'فاطمة أم البنين هي بنت حزام بن خالد من بني كلاب. — عمدة الطالب؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ما كنية العباس بن علي المشهورة؟',
  '["أبو محمد","أبو الحسن","أبو القاسم","أبو الفضل"]'::jsonb,
  3,
  20,
  2,
  'multi',
  'اشتهر العباس بن علي عليه السلام بكنية أبي الفضل. — بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي لقب اشتهر به لارتباطه بمهمة حمل راية الإمام الحسين؟',
  '["قائد الميمنة","أمير الفرسان","حامل اللواء","صاحب الراية"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'تذكر مصادر واقعة الطف أن راية الإمام الحسين عليه السلام كانت مع العباس يوم عاشوراء. — الإرشاد؛ اللهوف.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'كم أخًا شقيقًا كان للعباس من أم البنين؟',
  '["خمسة","ثلاثة","أربعة","اثنان"]'::jsonb,
  1,
  20,
  4,
  'multi',
  'إخوة العباس من أمه وأبيه هم عبد الله وجعفر وعثمان أبناء علي وأم البنين. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي هؤلاء كان أحد إخوته الأشقاء؟',
  '["عثمان بن علي","محمد بن علي","عمر بن علي","عبيد الله بن علي"]'::jsonb,
  0,
  20,
  5,
  'multi',
  'عدّ الشيخ المفيد عثمان مع العباس وجعفر وعبد الله من أبناء أمير المؤمنين من أم البنين. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'من كان أكبر أبناء أم البنين؟',
  '["العباس","عبد الله","جعفر","عثمان"]'::jsonb,
  0,
  20,
  6,
  'multi',
  'تذكر كتب الأنساب والسير العباس بوصفه أكبر أبناء أم البنين. — عمدة الطالب؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي صفة جسدية اشتهر بها العباس في كتب السيرة؟',
  '["قصر القامة","نحول الجسد","طول القامة","صغر البنية"]'::jsonb,
  2,
  20,
  7,
  'multi',
  'وصفته المصادر بأنه كان طويلًا حتى إن رجليه تخطان في الأرض إذا ركب الفرس المطهم. — مقاتل الطالبيين؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'بأي لقب ارتبط جمال هيئته في المصادر المتأخرة؟',
  '["قمر بني هاشم","فارس بني هاشم","أسد بني هاشم","سيف بني هاشم"]'::jsonb,
  0,
  20,
  8,
  'multi',
  'اشتهر العباس في كتب السير والمقاتل المتأخرة بلقب «قمر بني هاشم» لجماله وهيبته. — بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي ابن للعباس استمر منه عقبه بحسب كتب الأنساب؟',
  '["الحسن","الفضل","عبيد الله","القاسم"]'::jsonb,
  2,
  20,
  9,
  'multi',
  'تذكر كتب الأنساب أن عقب العباس عليه السلام استمر من ابنه عبيد الله. — عمدة الطالب.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'عندما وصل الركب إلى كربلاء، ما الدور العسكري البارز الذي كان للعباس؟',
  '["حراسة المؤخرة","قيادة الميسرة","حمل اللواء","قيادة الرماة"]'::jsonb,
  2,
  20,
  10,
  'multi',
  'كان لواء الإمام الحسين عليه السلام يوم الطف بيد أخيه العباس. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'في أي يوم وصل شمر بن ذي الجوشن بكتاب ابن زياد إلى عمر بن سعد؟',
  '["العاشر من المحرم","الثامن من المحرم","السابع من المحرم","التاسع من المحرم"]'::jsonb,
  3,
  20,
  11,
  'multi',
  'وصل شمر إلى كربلاء بأمر عبيد الله بن زياد في التاسع من المحرم. — الإرشاد؛ تاريخ الطبري.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ماذا أحضر الشمر للعباس وإخوته بسبب قرابته القبلية بأمهم؟',
  '["خيولًا","أمانًا","رسالة صلح","مالًا"]'::jsonb,
  1,
  20,
  12,
  'multi',
  'نادى الشمر العباس وإخوته وعرض عليهم الأمان مستفيدًا من الصلة القبلية من جهة أمهم. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'كيف كان موقف العباس وإخوته من أمان الشمر؟',
  '["قبلوه بشرط","تفاوضوا عليه","طلبوا مهلة","رفضوه"]'::jsonb,
  3,
  20,
  13,
  'multi',
  'رفض العباس وإخوته الأمان واختاروا البقاء مع الإمام الحسين عليه السلام. — الإرشاد؛ اللهوف.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'عندما تحرك جيش عمر بن سعد مساء التاسع، من أرسله الإمام الحسين ليستوضح أمرهم؟',
  '["مسلم بن عوسجة","حبيب بن مظاهر","العباس بن علي","علي بن الحسين"]'::jsonb,
  2,
  20,
  14,
  'multi',
  'أرسل الإمام الحسين أخاه العباس مع جماعة لمعرفة ما يريده الجيش المتقدم نحو المخيم. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ماذا طلب الإمام الحسين عبر العباس من جيش عمر بن سعد تلك الليلة؟',
  '["مقابلة ابن زياد","فتح طريق الكوفة","تأخير القتال","السماح بالرحيل"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'طلب الإمام تأجيل المواجهة إلى صباح عاشوراء ليقضي الليل بالصلاة والدعاء والاستغفار. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'من قاد مجموعة الفرسان التي ذهبت لجلب الماء إلى المخيم قبل عاشوراء؟',
  '["نافع بن هلال","حبيب بن مظاهر","العباس بن علي","زهير بن القين"]'::jsonb,
  2,
  20,
  16,
  'multi',
  'يذكر المفيد أن العباس قاد جماعةً إلى الفرات لجلب الماء إلى أصحاب الإمام الحسين. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'من كان يحمل راية الإمام الحسين صباح عاشوراء؟',
  '["العباس بن علي","حبيب بن مظاهر","مسلم بن عوسجة","زهير بن القين"]'::jsonb,
  0,
  20,
  17,
  'multi',
  'جعل الإمام الحسين رايته مع أخيه العباس يوم عاشوراء. — الإرشاد للمفيد.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ما المهمة التي ارتبطت بخروج العباس الأخير في الروايات المشهورة؟',
  '["إحضار الخيل","جلب الماء","استطلاع الجيش","طلب المدد"]'::jsonb,
  1,
  20,
  18,
  'multi',
  'ارتبط خروجه الأخير بمحاولة الوصول إلى الماء بعد اشتداد العطش على المخيم. — بحار الأنوار؛ المقاتل.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'إلى أي نهر توجه العباس في خروجه الأخير؟',
  '["العلقمي","النهروان","الفرات","دجلة"]'::jsonb,
  2,
  20,
  19,
  'multi',
  'اتجه العباس إلى ماء الفرات الذي كان جيش عمر بن سعد يمنع أصحاب الحسين من الوصول إليه. — الإرشاد؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ما الأداة التي ارتبطت بمحاولته إيصال الماء إلى المخيم؟',
  '["المزادة","القربة","الدلو","الجرة"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'تذكر روايات المقتل حمل العباس قربة الماء في محاولته العودة بها إلى المخيم. — بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ما العضو الذي تذكر روايات المقتل أنه قُطع أولًا أثناء عودته؟',
  '["ساقه اليسرى","يده اليمنى","ساقه اليمنى","يده اليسرى"]'::jsonb,
  1,
  20,
  21,
  'multi',
  'تنقل روايات المقتل قطع يمينه أولًا ثم يساره أثناء محاولته العودة بالماء. — بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ماذا حدث للقربة التي كان يحملها قبل استشهاده؟',
  '["أخذها أحد أصحابه","أصابها سهم","أعادها إلى المخيم","سقطت في النهر"]'::jsonb,
  1,
  20,
  22,
  'multi',
  'في رواية المقتل أصاب سهم القربة وأُريق ماؤها قبل استشهاده. — بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أين استشهد العباس بالنسبة إلى موضع استشهاد الإمام الحسين؟',
  '["داخل خيمة الإمام","بعيدًا عن مركز المخيم","عند تل الزينبية","داخل ساحة المخيم"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'ارتبط موضع استشهاده بمساره نحو الماء، ولذلك صار قبره منفصلًا عن موضع قبر الإمام الحسين وأصحابه.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'ما النص المعتبر الذي يصف العباس بأنه «نافذ البصيرة، صلب الإيمان»؟',
  '["زيارة وارث","زيارة عاشوراء","الزيارة الجامعة","زيارة الإمام الصادق"]'::jsonb,
  3,
  20,
  24,
  'multi',
  'ورد عن الإمام الصادق في زيارته للعباس وصفه بنفاذ البصيرة وصلابة الإيمان. — كامل الزيارات.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي إمام ورد عنه النص: «كان عمنا العباس نافذ البصيرة صلب الإيمان»؟',
  '["موسى الكاظم","علي السجاد","جعفر الصادق","محمد الباقر"]'::jsonb,
  2,
  20,
  25,
  'multi',
  'نُقل هذا الوصف عن الإمام جعفر الصادق عليه السلام في بيان منزلة عمه العباس. — عمدة الطالب؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'بماذا يصفه الإمام الصادق في الزيارة بعد الشهادة والتسليم؟',
  '["الوفاء والنصيحة","القضاء والحكمة","الفقه والرواية","الزهد والعزلة"]'::jsonb,
  0,
  20,
  26,
  'multi',
  'تتضمن زيارته المروية الثناء على تصديقه ووفائه ونصيحته لخلف النبي ﷺ. — كامل الزيارات.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي إمام وصف منزلة العباس يوم القيامة بأنها يغبطه بها جميع الشهداء؟',
  '["جعفر الصادق","موسى الكاظم","محمد الباقر","علي بن الحسين"]'::jsonb,
  3,
  20,
  27,
  'multi',
  'رُوي عن الإمام السجاد أن للعباس منزلة يوم القيامة يغبطه بها جميع الشهداء. — الخصال للصدوق؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أين يقع قبر العباس عليه السلام؟',
  '["النجف","كربلاء","الكوفة","المدينة"]'::jsonb,
  1,
  20,
  28,
  'multi',
  'دُفن العباس في موضع استشهاده بكربلاء، وقبره معروف بالقرب من مرقد الإمام الحسين عليه السلام.',
  'سيرة العباس بن علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة العباس بن علي (ع)' LIMIT 1),
  'أي سمة تلخص دوره في كربلاء كما تعكسها المصادر الإمامية؟',
  '["الرواية والفقه","النصرة والوفاء","القضاء والتعليم","الخطابة والمناظرة"]'::jsonb,
  1,
  20,
  29,
  'multi',
  'تؤكد النصوص المروية في حقه ثباته ونصرته ووفاءه للإمام الحسين حتى استشهاده. — كامل الزيارات؛ بحار الأنوار.',
  'سيرة العباس بن علي (ع)'
);

-- Quiz: سيرة السيدة زينب بنت علي (ع)
INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
VALUES (
  'bh-person-sayyida-zainab'::uuid ON CONFLICT DO NOTHING,
  'سيرة السيدة زينب بنت علي (ع)',
  'إسلاميات',
  'سيرة السيدة زينب بنت علي (ع)',
  'standard',
  'ar',
  true
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  subcategory = EXCLUDED.subcategory,
  is_public = true;

DELETE FROM public.questions WHERE quiz_id = 'bh-person-sayyida-zainab'::uuid ON CONFLICT DO NOTHING;

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من هي والدة السيدة زينب عليها السلام؟',
  '["فاطمة الزهراء","أمامة بنت أبي العاص","أسماء بنت عميس","فاطمة بنت حزام"]'::jsonb,
  0,
  20,
  0,
  'multi',
  'زينب عليها السلام ابنة الإمام علي والسيدة فاطمة الزهراء عليهما السلام. — الإرشاد للمفيد؛ إعلام الورى.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من كان زوج السيدة زينب عليها السلام؟',
  '["عبيد الله بن العباس","عبد الله بن جعفر","عبد الله بن عباس","محمد بن جعفر"]'::jsonb,
  1,
  20,
  1,
  'multi',
  'تزوجت السيدة زينب من ابن عمها عبد الله بن جعفر بن أبي طالب. — الإرشاد؛ عمدة الطالب.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من هو والد زوجها عبد الله؟',
  '["حمزة بن عبد المطلب","عقيل بن أبي طالب","جعفر بن أبي طالب","العباس بن عبد المطلب"]'::jsonb,
  2,
  20,
  2,
  'multi',
  'عبد الله هو ابن جعفر الطيار بن أبي طالب، وبذلك كان ابن عم السيدة زينب. — الإرشاد؛ عمدة الطالب.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'بأي لقب اشتهر والد زوجها في التراث الإسلامي؟',
  '["الشهيد","السجاد","الطيار","الأمين"]'::jsonb,
  2,
  20,
  3,
  'multi',
  'اشتهر جعفر بن أبي طالب بلقب جعفر الطيار، وهو والد عبد الله زوج السيدة زينب. — الإرشاد؛ بحار الأنوار.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي اثنين من أبناء عبد الله بن جعفر استشهدا في كربلاء بحسب المشهور؟',
  '["عون ومحمد","عباس وقاسم","حسن وإبراهيم","جعفر وعلي"]'::jsonb,
  0,
  20,
  4,
  'multi',
  'تذكر مصادر المقتل عونًا ومحمدًا من أبناء عبد الله بن جعفر ضمن شهداء الطف. — الإرشاد للمفيد؛ مقاتل الطالبيين.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'في أي مدينة أقامت زينب مدةً عندما اتخذ الإمام علي مقر خلافته فيها؟',
  '["الكوفة","البصرة","واسط","دمشق"]'::jsonb,
  0,
  20,
  5,
  'multi',
  'انتقلت أسرة أمير المؤمنين معه إلى الكوفة بعد اتخاذها مقرًا لخلافته.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي حدث شهدته في الكوفة سنة 40 هـ؟',
  '["ثورة المختار","استشهاد الإمام الحسن","وفاة عبد الله بن جعفر","استشهاد الإمام علي"]'::jsonb,
  3,
  20,
  6,
  'multi',
  'كانت أسرة الإمام علي في الكوفة عند ضربه واستشهاده سنة 40 هـ. — الإرشاد للمفيد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي أخ لها توفي في المدينة قبل واقعة كربلاء بنحو عشر سنوات؟',
  '["عمر بن علي","العباس بن علي","محمد بن الحنفية","الحسن بن علي"]'::jsonb,
  3,
  20,
  7,
  'multi',
  'توفي الإمام الحسن عليه السلام في المدينة سنة 50 هـ، قبل واقعة الطف سنة 61 هـ. — الإرشاد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي مدينة غادرتها زينب ضمن الركب المتجه نحو العراق؟',
  '["البصرة","مكة","المدينة","الكوفة"]'::jsonb,
  1,
  20,
  8,
  'multi',
  'خرج ركب الإمام الحسين من مكة متجهًا نحو العراق، وكانت زينب ضمن أهل بيته المصاحبين له. — الإرشاد؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'في أي محطة أصبحت زينب من أبرز من تولى رعاية أهل البيت بعد انتهاء القتال؟',
  '["كربلاء","مكة","المدينة","البصرة"]'::jsonb,
  0,
  20,
  9,
  'multi',
  'بعد مقتل رجال أهل البيت وأصحابهم برز دور السيدة زينب في رعاية النساء والأطفال وحماية بقية العترة. — اللهوف؛ بحار الأنوار.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من الإمام الذي كان مريضًا في كربلاء وبقي بعد الواقعة؟',
  '["علي بن الحسين","محمد بن علي","جعفر بن محمد","زيد بن علي"]'::jsonb,
  0,
  20,
  10,
  'multi',
  'بقي الإمام علي بن الحسين السجاد عليه السلام بعد كربلاء وكان مريضًا أيام الواقعة. — الإرشاد للمفيد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'عندما أراد بعض رجال ابن زياد قتل الإمام المريض، من تدخلت للدفاع عنه؟',
  '["أم كلثوم بنت علي","زينب بنت علي","فاطمة بنت الحسين","رباب بنت امرئ القيس"]'::jsonb,
  1,
  20,
  11,
  'multi',
  'تذكر الروايات أن زينب تعلقت بابن أخيها وأعلنت أن قتله لا يكون إلا بقتلها معه. — الإرشاد للمفيد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'إلى أي مدينة سيق أهل البيت بعد كربلاء أولًا؟',
  '["دمشق","المدينة","الكوفة","البصرة"]'::jsonb,
  2,
  20,
  12,
  'multi',
  'نُقل أهل البيت بعد الواقعة إلى الكوفة حيث كان عبيد الله بن زياد. — الإرشاد؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'إلى مجلس من أُدخلت السيدة زينب في الكوفة؟',
  '["عبيد الله بن زياد","الحصين بن نمير","عمر بن سعد","شمر بن ذي الجوشن"]'::jsonb,
  0,
  20,
  13,
  'multi',
  'أُدخل سبايا أهل البيت إلى مجلس والي الكوفة عبيد الله بن زياد. — الإرشاد للمفيد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'ماذا أجابت ابن زياد عندما سألها كيف رأت صنع الله بأهلها؟',
  '["حسبنا الله ونعم الوكيل","سيعلم الذين ظلموا","إن الحكم إلا لله","ما رأيت إلا جميلًا"]'::jsonb,
  3,
  20,
  14,
  'multi',
  'تنقل المصادر جوابها المشهور لابن زياد: «ما رأيت إلا جميلًا»، ثم ذكرت أن القوم كتب الله عليهم القتل فبرزوا إلى مضاجعهم. — اللهوف؛ الاحتجاج.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'ماذا يعكس جوابها «ما رأيت إلا جميلًا» في سياق كلامها؟',
  '["قبول حكم ابن زياد","الرغبة في المصالحة","التسليم لله والثبات","إنكار وقوع القتل"]'::jsonb,
  2,
  20,
  15,
  'multi',
  'جاء جوابها في مقام مواجهة شماتة ابن زياد وإظهار التسليم لله وعدم منحه انتصارًا معنويًا.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'بعد الكوفة، إلى أي مدينة أُرسل أهل البيت؟',
  '["مكة","دمشق","البصرة","القدس"]'::jsonb,
  1,
  20,
  16,
  'multi',
  'أرسل ابن زياد أهل البيت من الكوفة إلى يزيد بن معاوية في الشام. — الإرشاد؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أمام أي حاكم ألقت زينب احتجاجها الأشهر في الشام؟',
  '["مروان بن الحكم","يزيد بن معاوية","معاوية بن أبي سفيان","عبد الملك بن مروان"]'::jsonb,
  1,
  20,
  17,
  'multi',
  'تنقل المصادر خطبتها واحتجاجها في مجلس يزيد بعد وصول أهل البيت إلى الشام. — الاحتجاج؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'بأي آية افتتحت احتجاجها على يزيد في الرواية المشهورة؟',
  '["قل لا أسألكم عليه أجرًا إلا المودة","إنما يريد الله ليذهب عنكم الرجس","ولا تحسبن الذين قتلوا في سبيل الله","ثم كان عاقبة الذين أساؤوا السوأى"]'::jsonb,
  3,
  20,
  18,
  'multi',
  'تبدأ الخطبة المنقولة عنها بالاستشهاد بقوله تعالى: ﴿ثم كان عاقبة الذين أساؤوا السوأى أن كذبوا بآيات الله﴾. — الاحتجاج للطبرسي.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'بأي عبارة واجهت يزيد اعتراضًا على طريقة سوق أهل البيت؟',
  '["بأي ذنب سفكتم دماءنا","أفحكم الجاهلية تبغون","أمن العدل يا ابن الطلقاء","أتقتلون ذرية نبيكم"]'::jsonb,
  2,
  20,
  19,
  'multi',
  'من أشهر مقاطع الخطبة المنقولة عنها مخاطبتها يزيد: «أمن العدل يا ابن الطلقاء...» في احتجاجها على سبي بنات رسول الله. — الاحتجاج؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'ما القضية التي احتجت بها عليه في قولها «تخديرك حرائرك وإماءك»؟',
  '["قتل أطفال كربلاء","سبي نساء أهل البيت","منع الماء عن المخيم","مصادرة أموال القافلة"]'::jsonb,
  1,
  20,
  20,
  'multi',
  'قارنت في الخطبة بين ستر نساء يزيد وسوق بنات رسول الله سبايا أمام الناس. — الاحتجاج للطبرسي.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'ماذا قالت ليزيد عن قدرته على محو ذكر أهل البيت؟',
  '["لن تدرك ثأرنا","لا تمحو ذكرنا","لن تملك أمرنا","لا تقتل رجالنا"]'::jsonb,
  1,
  20,
  21,
  'multi',
  'من أشهر مقاطع الخطبة: «فوالله لا تمحو ذكرنا ولا تميت وحينا». — الاحتجاج للطبرسي.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي عبارة أخرى وردت في الخطبة للتقليل من شأن انتصار يزيد الظاهري؟',
  '["اجمع جنودك","فكد كيدك","احكم بما تريد","خذ ما شئت"]'::jsonb,
  1,
  20,
  22,
  'multi',
  'ورد في الخطبة المنقولة: «فكد كيدك، واسع سعيك، وناصب جهدك». — الاحتجاج للطبرسي.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من الرجل الشامي الذي طلب من يزيد أن يهبه إحدى بنات أهل البيت بحسب الرواية؟',
  '["رسول من فلسطين","رجل من أهل الشام","قائد من أهل حمص","قاضٍ من دمشق"]'::jsonb,
  1,
  20,
  23,
  'multi',
  'تروي المصادر أن رجلًا شاميًا طلب من يزيد إحدى الفتيات، فتدخلت زينب ورفضت ذلك بشدة. — اللهوف؛ الاحتجاج.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'من التي دافعت عن الفتاة أمام ذلك الطلب؟',
  '["رباب بنت امرئ القيس","زينب بنت علي","أم كلثوم بنت علي","سكينة بنت الحسين"]'::jsonb,
  1,
  20,
  24,
  'multi',
  'واجهت زينب الطلب وأكدت أن يزيد لا يملك ذلك إلا بالخروج من الدين بحسب نص الرواية. — الاحتجاج؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي إمام تولى قيادة أهل البيت دينيًا بعد كربلاء وكان حاضرًا معها في رحلة الأسر؟',
  '["جعفر بن محمد","علي بن الحسين","زيد بن علي","محمد بن علي"]'::jsonb,
  1,
  20,
  25,
  'multi',
  'انتقلت الإمامة إلى الإمام السجاد عليه السلام، وكان مع السبايا في الكوفة والشام. — الكافي؛ الإرشاد.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'إلى أي مدينة عاد أهل البيت بعد انتهاء مرحلة الشام؟',
  '["البصرة","المدينة","مكة","الكوفة"]'::jsonb,
  1,
  20,
  26,
  'multi',
  'انتهت رحلة السبي بعودة أهل البيت إلى المدينة. — الإرشاد؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي وصف اشتهر للسيدة زينب في التراث الإمامي تعبيرًا عن مكانتها العلمية؟',
  '["عقيلة بني هاشم","فقيهة المدينة","راوية الحجاز","عالمة قريش"]'::jsonb,
  0,
  20,
  27,
  'multi',
  'اشتهرت السيدة زينب بلقب «عقيلة بني هاشم» في كتب السير والمناقب المتأخرة.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي عبارة رويت عن الإمام السجاد في وصف علمها؟',
  '["فقيهة غير مدافعة","صابرة غير جزعة","عابدة غير منقطعة","عالمة غير معلمة"]'::jsonb,
  3,
  20,
  28,
  'multi',
  'نُقل عنه مخاطبتها: «أنت بحمد الله عالمة غير معلمة، فهمة غير مفهمة». — الاحتجاج؛ بحار الأنوار.',
  'سيرة السيدة زينب بنت علي (ع)'
);

INSERT INTO public.questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
VALUES (
  (SELECT id FROM public.quizzes WHERE title = 'سيرة السيدة زينب بنت علي (ع)' LIMIT 1),
  'أي جانب مثّل الدور الأبرز للسيدة زينب بعد واقعة كربلاء؟',
  '["قيادة حركة عسكرية في الحجاز","تأسيس مدرسة فقهية في الكوفة","حماية العترة وإظهار مظلوميتها","إدارة شبكة الوكلاء في المدينة"]'::jsonb,
  2,
  20,
  29,
  'multi',
  'تكشف أحداث الكوفة والشام عن دورها المحوري في حماية من بقي من أهل البيت ومواجهة السلطة وبيان ما وقع في كربلاء. — الإرشاد؛ الاحتجاج؛ اللهوف.',
  'سيرة السيدة زينب بنت علي (ع)'
);