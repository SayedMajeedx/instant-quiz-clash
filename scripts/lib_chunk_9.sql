DO $$
DECLARE
  v_lib_id_119 uuid;
BEGIN
  SELECT id INTO v_lib_id_119 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 20' LIMIT 1;
  IF v_lib_id_119 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 20', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_119;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'بدأت الثورة البوهيمية (1618-1620) بعد أن فعل البروتستانت في براغ ماذا بالحكام الكاثوليك؟', '["ألقوهم من النافذة","أهانوهم وأمهاتهم","حبسوهم في القيود الخشبية","شنقوهم"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'في أي عام سقط جدار برلين؟', '["1987","1989","1991","1993"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'ساعدت المملكة الفرنسية الولايات المتحدة في الحصول على استقلالها من بريطانيا العظمى خلال الحرب الثورية الأمريكية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'وقع الحادث النووي الكارثي في أوكرانيا عام 1986 في أي محطة طاقة؟', '["إيغنالينا","ماياك","كورسك","تشيرنوبيل"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'رتب الإمبراطوريات الإيرانية (الفارسية) التالية ترتيباً زمنياً:', '["الميدية، الأخمينية، الفرثية، الساسانية","الميدية، الأخمينية، الساسانية، الفرثية","الأخمينية، الميدية، الفرثية، الساسانية","الأخمينية، الميدية، الساسانية، الفرثية"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'من الذي توّج شارلمان إمبراطوراً رومانياً مقدساً في يوم عيد الميلاد عام 800‏؟', '["البابا أوربان الرابع","البابا ليون الثالث","البابا ستيفين الخامس","البابا فالنتين"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'افتُتحت قناة بنما أمام حركة الملاحة خلال 30 يوماً من بدء الحرب العالمية الأولى.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'كانت أول مناظرة رئاسية متلفزة بين جيمي كارتر وجيرالد فورد.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'في أي عام انصهر المفاعل النووي في محطة تشيرنوبيل؟', '["1986","1991","1975","1998"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'أي مارشال ألماني كان يُلقب بـ ''ثعلب الصحراء''؟', '["إرنست بوش","إرفين رومل","فولفرام فريهر فون ريختهوفن","فيلهلم ليست"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'ما هي آخر مستعمرة تنازلت عنها المملكة المتحدة، معلنة بذلك نهاية الإمبراطورية البريطانية؟', '["الهند","أستراليا","هونغ كونغ","أيرلندا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'في الحرب العالمية الأولى، ما اسم التحالف الذي ضم ألمانيا، والنمسا-المجر، والدولة العثمانية، وبلغاريا؟', '["دول المحور","اتحاد الإمبراطوريات","التحالف السلطوي","دول المركز"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'ما هي أول عاصمة لكندا؟', '["كينغستون","تورونتو","أوتاوا","مونتريال"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'في أي يوم غزت ألمانيا بولندا؟', '["7 ديسمبر 1941","1 سبتمبر 1939","22 يونيو 1941","7 يوليو 1937"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'في عام 1845، بدأت سلسلة من الحروب في نيوزيلندا سُميت باسم أي من السكان الأصليين؟', '["البابوانيون","السكان الأصليون (الأبوريجين)","الماوري","البولينيزيون"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'ما هو تاريخ الرحلة الأولى لطائرة بي-40 وارهوك؟', '["21 أغسطس 1939","12 يناير 1940","1 يونيو 1939","14 أكتوبر 1938"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'أي حضارة قامت ببناء مدينة تشيتشن إيتزا القديمة؟', '["المايا","الأزتك","الإنكا","التولتك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'بول بوت كان الديكتاتور السابق لأي دولة؟', '["لاوس","كمبوديا","كوريا الشمالية","فيتنام"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_119, 'متى تم اختبار "ذا غادجيت"، أول جهاز نووي تم تفجيره في التاريخ؟', '["22 يونيو 1945","6 أغسطس 1945","16 يوليو 1945","5 أبريل 1945"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_120 uuid;
BEGIN
  SELECT id INTO v_lib_id_120 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 21' LIMIT 1;
  IF v_lib_id_120 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 21', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_120;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'خلال الحرب العالمية الأولى، ملوك أي دول كانت تربطهم صلة قرابة دموية؟', '["إنجلترا، ألمانيا، روسيا","فرنسا، روسيا، ألمانيا","صربيا، روسيا، كرواتيا","ألمانيا، إسبانيا، النمسا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'في أي عام انتهت حرب الشمال العظمى بين روسيا والسويد؟', '["1726","1721","1727","1724"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'أي رئيس أمريكي شارك في مؤتمر بوتسدام، حيث توصل الحلفاء إلى تسوية سلام مع ألمانيا؟', '["دوايت أيزنهاور","فرانكلين روزفلت","هاري ترومان","هربرت هوفر"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'في أي سجن احتُجز أدولف هتلر عام 1924‏؟', '["سجن سبانداو","دير إبراخ","هوهناشبرغ","سجن لاندسبرغ"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'متى انتهت معركة الثغرة (معركة البولج)‏؟', '["25 يناير 1945","6 أغسطس 1945","7 ديسمبر 1941","16 ديسمبر 1944"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'بعد خسارته في معركة واترلو، إلى أي جزيرة نُفي نابليون بونابرت؟', '["ألبا","سانت هيلين","كورسيكا","جزر الكناري"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'ما هو رقم هيكل المدمرة فليتشر من فئة فليتشر؟', '["⁦DD-992⁩","⁦DD-444⁩","⁦DD-445⁩","⁦DD-446⁩"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'انتصرت طيور الإيمو في حرب الإيمو العظمى عام 1932.', '["صحيح","خطأ"]'::jsonb, 0, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'ما الاسم التاريخي لسيريلانكا؟', '["سيلان","ميانمار","كولومبو","بادولا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'تمت محاكمة أدولف هتلر في محاكمات نورمبرغ.', '["صحيح","خطأ"]'::jsonb, 1, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'ما اسم النهضة الثقافية للأمريكيين من أصل أفريقي التي تركزت في شمال مانهاتن خلال عشرينيات وثلاثينيات القرن العشرين؟', '["نهضة إنوود","نهضة بيد-ستاي","نهضة هارلم","نهضة أبير إيست"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'متى دمر بركان فيزوف مدينة بومبي؟', '["62 ميلادية","31 قبل الميلاد","54 قبل الميلاد","79 ميلادية"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'من كان آخر إمبراطور للمكسيك؟', '["فرديناند ماكسيميليان","أندريس مانويل لوبيز أوبرادور","نابليون الثالث","أغوستين دي إيتوربيدي"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'من كان رئيس وزراء المملكة المتحدة خلال معظم فترة الحرب العالمية الثانية؟', '["نيفيل تشامبرلين","وينستون تشرشل","هارولد ماكميلان","إدوارد هيث"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'في أي عام تم توقيع إعلان استقلال الولايات المتحدة؟', '["1775","1774","1776","1777"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'في أي عام تأسست شركة بيريتا الإيطالية لتصنيع الأسلحة النارية؟', '["1776","1923","1998","1526"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'أي من السنوات التالية يُشار إليها عادةً باسم "عام بلا صيف"؟', '["1816","1823","1813","1808"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'أي من الدول التالية لم تكن من دول المحور خلال الحرب العالمية الثانية؟', '["إيطاليا","الاتحاد السوفيتي","ألمانيا","اليابان"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_120, 'ما الاسم الحقيقي للقائد الوطني الألباني إسكندر بك؟', '["ديتوراك جولاتي","إسكندر بيكو","جرج كاستريوتي","ميراش كراسنيكي"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_121 uuid;
BEGIN
  SELECT id INTO v_lib_id_121 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 3' LIMIT 1;
  IF v_lib_id_121 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 3', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_121;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'من هو أول رئيس وزراء لكندا؟', '["جون ماكدونالد","جون أبوت","ألكسندر ماكينزي","روبرت بوردن"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'من هو القائد العسكري الشهير الذي عبر جبال الألب بجيش يضم فيلة حربية خلال الحرب البونيقية الثانية؟', '["جيرمانيكوس","حنبعل","الإسكندر الأكبر","تيبيريوس"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'ما الفيلم الشهير الذي أُطلق اسمه كلقب على نظام الدفاع الاستراتيجي الأمريكي خلال الحرب الباردة؟', '["الفك المفترس","بليد رانر","حرب النجوم","الفضائي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'كان أبراهام لينكولن أول رئيس أمريكي يُولد خارج حدود الولايات الثلاث عشرة الأصلية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'يحتوي شعار نبالة ملك إسبانيا على شعارات ممالك قشتالة، وليون، وأراغون، وأي مملكة إيبيرية سابقة أخرى؟', '["نافارا","جاليسيا","غرناطة","كتالونيا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'أي من ملوك إنجلترا واجه ثورة الفلاحين عام 1381‏؟', '["إدوارد الثالث","ريتشارد الثاني","إدوارد الثاني","هنري الرابع"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'مقولة ''قد أختلف معك في الرأي، ولكني مستعد للموت دفاعاً عن حقك في التعبير عنه'' منسوبة للفيلسوف الفرنسي فولتير.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'كان الملك هنري الثامن ثاني ملوك أي عائلة مالكة أوروبية؟', '["يورك","ستيوارت","لانكستر","تيودور"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'متى نشر لودفيغ زامنهوف لأول مرة كتاب ''الكتاب الأول'' (⁦Unua Libro⁩) الذي يصف فيه لغته العالمية المقترحة ''الإسبرانتو''؟', '["1887","1897","1905","1915"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'إلى أي حدث تاريخي كانت تشير افتتاحية 1812 للملحن تشايكوفسكي؟', '["حرب عام 1812 الأمريكية","الحروب النابليونية","الثورة الروسية","هجوم اللواء الخفيف (حرب القرم)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'غرقت سفينة تايتانيك خلال رحلتها الأولى من ساوثهامبتون بإنجلترا إلى أي مدينة أمريكية؟', '["بوسطن","فيلادلفيا","نيويورك","واشنطن"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'وفقاً للأسطورة، أي حيوان بنى الإغريق مجسماً خشبياً ضخماً له للتسلل إلى داخل طروادة؟', '["ماعز","فيل","ذئب","حصان"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'من كان حنبعل؟', '["قائد عسكري قرطاجي","قاتل متسلسل بريطاني","مستكشف فرنسي","فيلسوف يوناني"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'من هو أول إمبراطور لروما؟', '["يوليوس قيصر","أغسطس","بومبيوس الكبير","كلوديوس"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'ما هي الحضارة التي تُعتبر على نطاق واسع أقدم حضارة معروفة للبشرية؟', '["بابل","آشور","الحضارة السومرية","فينيقيا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'كان ثيودور روزفلت الابن الجنرال الوحيد الذي شارك في الهجوم الأول بيوم الإنزال في نورماندي (⁦D-Day⁩).', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'ما الاسم الشائع لطرق التجارة القديمة التي ربطت بين شرق وغرب أوراسيا؟', '["طريق الحرير","طريق التوابل","طريق الطين","طريق الملح"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'في أي عام احتفلت فنلندا بمرور 100 عام على استقلالها؟', '["2016","2017","2018","2015"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'أي من هذه الدول لم تؤسس مستعمرة في أمريكا الشمالية الحالية؟', '["إسبانيا","السويد","البرتغال","هولندا"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_121, 'أي حضارة أمريكية قديمة كانت مصدر الاعتقاد بأن العالم سينتهي أو يتغير بشكل جذري في 21 ديسمبر 2012‏؟', '["الإنكا","الأزتيك","النافاهو","المايا"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_122 uuid;
BEGIN
  SELECT id INTO v_lib_id_122 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 4' LIMIT 1;
  IF v_lib_id_122 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 4', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_122;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'ما هو الكازينو في لاس فيغاس الذي بناه وشغله في الأصل رجل العصابات باغسي سيغل؟', '["ذا فلامينغو","ذا إم جي إم غراند","ذا ساندز","ذا صحارى"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام انتهت حرب فيتنام？', '["1978","1975","1967","1969"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'من كان رئيس وزراء اليابان عندما أعلنت الحرب على الولايات المتحدة؟', '["ميتشينوميا هيروهيتو","إيسوروكو ياماموتو","هيديكي توجو","فوميمارو كونويه"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'خلال الحرب العالمية الثانية عام 1945، ألقت الولايات المتحدة قنبلتين ذريتين على مدينتين يابانيتين، الأولى هيروشيما فما هي المدينة الأخرى؟', '["كاواساكي","طوكيو","كاغوشيما","ناغاساكي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'ما الاسم الذي أُطلق على سلسلة المواجهات بين المملكة المتحدة وآيسلندا حول حقوق الصيد في شمال الأطلسي؟', '["حروب القد","حروب جراد البحر","حروب الهلبوت","حروب الماكريل"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي شارع بدأ حريق لندن الكبير عام 1666‏؟', '["شارع بيكر","شارع بودينغ","مبنى البرلمان","كاتدرائية القديس بولس"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام انهار الاتحاد السوفيتي؟', '["1992","1891","1991","1990"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'كم عدد السوناتات التي كتبها لودفيج فان بيتهوفن؟', '["50","31","21","32"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام أصدرت شركة التبغ غير المدخن "سكوال" خط إنتاجها الأول من أكياس التبغ المعروفة باسم "سكوال بانديتس"؟', '["1983","1934","1984","1822"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'ما هي قومية السلطان صلاح الدين الأيوبي؟', '["عربي","كردي","مصري","سوري"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'من هي أطول زوجات هنري الثامن زواجاً منه من بين زوجاته الست؟', '["آن بولين","جين سيمور","كاثرين الأراغونية","كاثرين بار"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام بدأت الحرب الكورية؟', '["1945","1960","1912","1950"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي يوم تعرضت شبكة أربانت (⁦ARPANET⁩) لعطل كامل استمر لمدة 4 ساعات؟', '["27 أكتوبر 1980","21 نوفمبر 1969","29 أكتوبر 1969","9 ديسمبر 1991"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'أي مبنى أُضرمت فيه النيران في 24 أغسطس 1812‏؟', '["مبنى البرلمان","البيت الأبيض","مبنى الجمعية الوطنية الكبرى","قصر الأمة"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'كان توماس كرابر سباكاً وهو من اخترع المرحاض ذو السيفون.', '["صحيح","خطأ"]'::jsonb, 1, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام تم نصب لوحة هوليوود الشهيرة التي يبلغ ارتفاعها 45 قدماً لأول مرة؟', '["1903","1913","1933","1923"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'أي بلد شهد "الثورة البرتقالية" بين عامي 2004 و2005‏؟', '["أوكرانيا","بيلاروسيا","لاتفيا","ليتوانيا"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'من هو الجنرال النازي الذي عُرف بلقب "ثعلب الصحراء"؟', '["جيرد فون رونتشتيت","إرفين رومل","فيلهلم كايتل","هاينز غوديريان"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'في أي عام فُتِحت القسطنطينية على يد الأتراك؟', '["1435","1454","1453","1440"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_122, 'ما هو الصراع التاريخي الذي تسبب في مقتل أكبر عدد من الناس؟', '["تمرد تايبينغ","حرب الممالك الثلاث","الغزو المغولي","الحرب العالمية الثانية"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_123 uuid;
BEGIN
  SELECT id INTO v_lib_id_123 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 5' LIMIT 1;
  IF v_lib_id_123 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 5', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_123;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'متى تم تأسيس وكالة الأمن القومي للولايات المتحدة؟', '["4 نوفمبر 1952","26 يوليو 1908","1 يوليو 1973","25 نوفمبر 2002"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'إلى أي حزب سياسي كان ينتمي أبراهام لينكولن عندما انتُخب رئيساً للولايات المتحدة؟', '["الحزب الديمقراطي","الحزب الجمهوري","مستقل","حزب الويغ"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'في عام 1453، أي مدينة مهمة سقطت؟', '["روما","هامبورغ","القسطنطينية","أثينا"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'متى يصادف تاريخ "منتصف مارس" (⁦Ides of March⁩)‏؟', '["14 مارس","31 مارس","1 مارس","15 مارس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'من كان زعيم الحزب الشيوعي اليوغوسلافي؟', '["جوزيف بروز تيتو","كاراجورجي بيتروفيتش","ميلوش أوبيليتش","ألكسندر بيتروفيتش"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'في أي عام تم إدخال الإصلاحات الماريانية في الجمهورية الرومانية؟', '["42 قبل الميلاد","107 قبل الميلاد","264 قبل الميلاد","102 ميلادي"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'من كان أول رئيس لجمهورية الصين الشعبية؟', '["ليو شاوكي","دونغ بيوو","ماو تسي تونغ","لي شيانيان"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'ما هو اسم أول مستوطنة إنجليزية دائمة في أمريكا؟', '["نيويورك","سانت جونز","بليموث","جيمستاون"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'أي من الملوك الآشوريين التاليين لم يحكم خلال الإمبراطورية الآشورية الحديثة؟', '["شمشي أداد الثالث","شلمنصر الخامس","آسرحدون","آشور ناصربال الثاني"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'خلال حرب الوردتين (1455 - 1487)، من هو الرجل الإنجليزي الذي لُقب بـ "صانع الملوك"؟', '["ريتشارد الثالث","ريتشارد نيفيل","هنري الخامس","توماس وارويك"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'في أي دولة ولد جوزيف ستالين؟', '["روسيا","ألمانيا","جورجيا","بولندا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'أين ومتى صُنع أول صندوق كرتوني للاستخدام الصناعي？', '["الولايات المتحدة، 1817","إنجلترا، 1917","الولايات المتحدة، 1917","إنجلترا، 1817"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'في أي عام تم توثيق آخر حالة طبيعية لمرض الجدري؟', '["1977","1982","1980","1990"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'متى تأسست شركة جوجل؟', '["9 أكتوبر 1997","4 سبتمبر 1998","12 ديسمبر 1989","7 فبراير 2000"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'أي من الدول التالية كانت الأولى في إرسال جسم ما إلى الفضاء؟', '["الولايات المتحدة الأمريكية","روسيا","ألمانيا","الصين"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'أي مما يلي لم يكن من ضمن ضربات جوزيف ستالين العشر خلال الحرب العالمية الثانية؟', '["هجوم شبه جزيرة القرم","هجوم لينينغراد - نوفغورود","عملية باجراتيون","هجوم فيستولا - الأودر"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'من كان أول مستكشف يبحر إلى أمريكا الشمالية؟', '["ليف إريكسون","كريستوفر كولومبوس","أميريغو فيسبوتشي","فرديناند ماجلان"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'ماذا أطلق الفايكنج على مستعمرتهم قصيرة العمر في كندا الحالية؟', '["جزر فارو","فينلاند","هالوغالاند","سكونه"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'أي دولة هاجمت سفينة يو إس إس ليبرتي في 8 يونيو 1967‏؟', '["سوريا","المملكة العربية السعودية","إسرائيل","إيران"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_123, 'في أي عام وقعت معركة فردان؟', '["1917","1915","1918","1916"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_124 uuid;
BEGIN
  SELECT id INTO v_lib_id_124 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 6' LIMIT 1;
  IF v_lib_id_124 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 6', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_124;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'في أي عام حدث الغزو العراقي للكويت؟', '["1990","1992","1988","1986"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'أقامت هاتان الدولتان اتحاداً فيدرالياً (كومنولث) من القرن السادس عشر إلى القرن الثامن عشر.', '["الهوتو ورواندا","بولندا وليتوانيا","كوريا الشمالية وكوريا الجنوبية","بنغلاديش وبوتان"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'ما اسم الغزو المخطط له لليابان قرب نهاية الحرب العالمية الثانية؟', '["عملية الصعود على متن السفينة","عملية درع الحديد","عملية السقوط","عملية الاشتعال"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'كان بريجنيف الزعيم الخامس للاتحاد السوفيتي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'هناك 13 شهراً في التقويم الإثيوبي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'كان أغسطس ابن عم يوليوس قيصر.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'سيطرت مملكة بروسيا لفترة وجيزة على أراضٍ في إستونيا.', '["صحيح","خطأ"]'::jsonb, 1, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'في أي عام تأسست كندا؟', '["1798","1859","1668","1867"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'ما هو الاسم الحقيقي لجنكيز خان؟', '["تيموجين","مونكو","أوقطاي","تيمور"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'توفي الرئيسان الأمريكيان السابقان جون آدامز وتوماس جيفرسون بفارق ساعات قليلة عن بعضهما البعض.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'كم كان عمر أدولف هتلر عندما توفي؟', '["43","65","56","47"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'بعد معركة مرج دابق عام 1516، بسطت الدولة العثمانية سيطرتها على القدس بعد انتزاعها من أي سلطنة؟', '["الأيوبيون","الأمويون","السلاجقة","المماليك"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'ماذا يُطلق على حركة انتقال الأمراض والمحاصيل والناس عبر المحيط الأطلسي بعد وقت قصير من اكتشاف الأمريكتين؟', '["التبادل الكولومبي","التجارة المثلثية","تجارة الرقيق عبر الأطلسي","طريق الحرير"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'أين دارت حرب البوير الثانية عام 1899‏؟', '["الأرجنتين","جنوب أفريقيا","نيبال","بلغاريا"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'متى أصبحت أغنية "يا كندا" النشيد الوطني الرسمي للبلاد؟', '["1950","1920","1980","1880"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'أي دولة حديثة تقع في المنطقة التي كانت تُعرف بـ "فريجيا" في العصور القديمة؟', '["سوريا","اليونان","مصر","تركيا"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'في أي عام دارت معركة هاستنغز؟', '["1066","911","1204","1420"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'متى تم اعتماد التقويم الغريغوري لأول مرة؟', '["1623","1582","1501","1555"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'أي ملك بريطاني كان يُعرف أيضاً باسم "ويليام أورانج"؟', '["ويليام الأول","ويليام الثاني","ويليام الثالث","ويليام الرابع"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_124, 'في حرب المحيط الهادئ (1879 - 1883)، خسرت بوليفيا منفذها إلى المحيط الهادئ بعد هزيمتها من قبل أي دولة في أمريكا الجنوبية؟', '["بيرو","البرازيل","الأرجنتين","تشيلي"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_125 uuid;
BEGIN
  SELECT id INTO v_lib_id_125 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 7' LIMIT 1;
  IF v_lib_id_125 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 7', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_125;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'أي من الدول الأفريقية التالية كانت الأكثر نجاحاً في مقاومة الاستعمار؟', '["إثيوبيا","ساحل العاج","الكونغو","ناميبيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من هو الملك الإنجليزي الذي تزوج من إليانور آكيتيان؟', '["ريتشارد الأول","هنري الثاني","هنري الأول","هنري الخامس"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'خلال الحرب الأهلية الإسبانية (1936)، قاتل فرانسيسكو فرانكو لصالح أي فصيل سياسي؟', '["إسبانيا الجمهورية","الجبهة الشعبية","إسبانيا القومية","الدولة البابوية"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'إلى من يُنسب أول دليل وجودي (الدليل الأنطولوجي) لإثبات وجود الله؟', '["رينيه ديكارت","إيمانويل كانت","أرسطو","أنزلم من كانتربري"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'في أي عصر موسيقي كان عازف البيانو والمؤلف فريدريك شوبان؟', '["العصر الرومانسي","العصر الكلاسيكي","عصر الباروك","عصر النهضة"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'أي من شعوب الشرق الأدنى القديم التالية لا تزال قائمة كمجموعة عرقية معاصرة؟', '["البابليون","الآشوريون","الحثيون","العيلاميون"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'متى تأسست قوات الـ (⁦SS⁩) أو شوتزشتافل؟', '["1 سبتمبر 1941","8 مارس 1935","4 أبريل 1925","21 فبراير 1926"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من كان رئيس الولايات المتحدة أثناء توقيع صفقة شراء غادسدن؟', '["أندرو جونسون","أبراهام لينكون","جيمس بولك","فرانكلين بيرس"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من هي الشركة التي صممت رشاش المينيغون (⁦Minigun⁩) في عام 1960‏؟', '["جنرال إلكتريك","كولت لصناعة الأسلحة","هيكلير آند كوخ","سيغ ساور"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'كم عدد السفن الشقيقة لسفينة تايتنيك؟', '["4","2","3","1"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'ما الذي عثر عليه راعيان شابان عام 1946 بالقرب من أحد الكهوف؟', '["صندوق اللحية السوداء","خراف","مخطوطات البحر الميت","أول نائم في كهف واهاكا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'أي ملك قُتل في معركة بوسورث عام 1485‏؟', '["إدوارد الخامس","هنري السابع","جيمس الأول","ريتشارد الثالث"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من كان أول رئيس لكينيا؟', '["جومو كينياتا","دانيال موي","توم مبويا","أوجينجا أودينجا"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'في أي يوم بدأت الحرب العالمية الأولى؟', '["28 يناير","28 يوليو","28 يونيو","28 أبريل"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'أي دولة في أمريكا الجنوبية حاربت بريطانيا العظمى على جزر فالكلاند عام 1982‏؟', '["البرازيل","تشيلي","الأرجنتين","فنزويلا"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من كان المطور والمخطط الرئيسي لقناة السويس؟', '["لويس أوجين كافينياك","جون ميلتون","يوهان لوكاس فون هيلدبراندت","فرديناند دي لسبس"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'ما اسم البطل القومي للفلبين الذي ألهم وقاد الثورة الفلبينية ضد الاستعمار الإسباني؟', '["خوسيه ريزال","سيمون بوليفار","بينيتو خواريز","خوسيه دي سان مارتين"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'خلال الثلاثية الرومانية عام 42 قبل الميلاد، ما هي المنطقة التي مُنحت لليبيدوس؟', '["إيطاليا","هسبانيا","غاليا","آسيا"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_125, 'من هو مبتكر المشروب الغازي دكتور بيبر (⁦Dr⁩. ⁦Pepper⁩)‏؟', '["جيمس ويلينغتون","جونسون هينسين","تشارلز ألديرتون","بوريس هيفيلتيك"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_126 uuid;
BEGIN
  SELECT id INTO v_lib_id_126 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 8' LIMIT 1;
  IF v_lib_id_126 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 8', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_126;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'ما هي أولى الدول التي انفصلت عن يوغوسلافيا؟', '["سلوفينيا وكرواتيا","مقدونيا والجبل الأسود","سلوفينيا ومقدونيا","الجبل الأسود وسلوفينيا"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'في أي يوم بدأت معركة غيتيسبرغ؟', '["17 سبتمبر 1862","1 يوليو 1863","21 يوليو 1861","30 أبريل 1863"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'من كان رئيس وزراء بريطانيا عند اندلاع الحرب العالمية الثانية عام 1939‏؟', '["ستانلي بالدوين","وينستون تشرشل","نيفيل تشامبرلين","رامزي ماكدونالد"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'قاد توسان لوفرتور ثورة ناجحة للعبيد في أي بلد؟', '["فرنسا","كوبا","الولايات المتحدة","هايتي"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'في أي عام بدأت الحرب العالمية الأولى؟', '["1914","1930","1917","1939"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'عندما أبحر كريستوفر كولومبوس إلى أمريكا، ما هي أول منطقة وصل إليها؟', '["فلوريدا","أرخبيل جزر البهاما","برزخ بنما","نيكاراغوا"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'ما هي أول رياضة لُعبت على سطح القمر؟', '["كرة القدم الأمريكية","التنس","الغولف","كرة القدم"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'من الذي اغتال الأرشيدوق فرانز فرديناند؟', '["نيديلكو تشابرينوفيتش","أوسكار بوتيوريك","فرديناند كوهين بليند","غافريلو برينسيب"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'أي من هذه الدول ظلت محايدة خلال الحرب العالمية الثانية؟', '["سويسرا","المملكة المتحدة","فرنسا","إيطاليا"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'متى حصلت النرويج على دستورها؟', '["1932","1814","1905","1854"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'ما هي أقدم ولاية أمريكية؟', '["رود آيلاند","مين","ديلاوير","فرجينيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'أي رئيس وزراء أسترالي اختفى في عام 1967 ولم يُعثر عليه أبداً؟', '["بول كيتنغ","إدموند بارتون","سكوت موريسون","هارولد هولت"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'في أي تاريخ تحول سلاح الجو التابع للجيش الأمريكي إلى القوات الجوية الأمريكية؟', '["18 سبتمبر 1947","14 ديسمبر 1946","27 أكتوبر 1945","8 نوفمبر 1944"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'القنبلتان الذريتان اللتان ألقتهما الولايات المتحدة على اليابان في أغسطس 1945 كانتا باسم ''⁦Little Man⁩'' (الرجل الصغير) و''⁦Fat Boy⁩'' (الولد السمين).', '["صحيح","خطأ"]'::jsonb, 1, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'في أي عام وقع هجوم غاز السارين في مترو طوكيو؟', '["2001","2011","1995","1991"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'أي رئيس أمريكي تعرض لهجوم شهير من قبل أرنب يسبح؟', '["رونالد ريجان","ليندون جونسون","جيرالد فورد","جيمي كارتر"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'متى تم تعيين أدولف هتلر مستشاراً لألمانيا؟', '["30 يناير 1933","1 سبتمبر 1939","27 فبراير 1933","6 أكتوبر 1939"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'في أي حوار دافع سقراط عن نفسه أمام محكمة أثينا؟', '["إيثيفرو","الدفاع","القوانين","الجمهورية"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_126, 'تأسست وزارة الأمن الداخلي الأمريكية كاستجابة لهجمات 11 سبتمبر.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_127 uuid;
BEGIN
  SELECT id INTO v_lib_id_127 FROM quizzes WHERE title = 'التاريخ والتراث العالمي — الجزء 9' LIMIT 1;
  IF v_lib_id_127 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('التاريخ والتراث العالمي — الجزء 9', 'تاريخ', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_127;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'أي من بعثات أبولو كانت الأخيرة في برنامج أبولو التابع لوكالة ناسا؟', '["أبولو 17","أبولو 13","أبولو 11","أبولو 15"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'من أي حاملة طائرات انطلقت غارة دوليتل في 18 أبريل 1942 خلال الحرب العالمية الثانية؟', '["يو إس إس إنتربرايز","يو إس إس هورنت","يو إس إس ليكسينغتون","يو إس إس ساراتوغا"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'ما الخدمة التي قدمها الطبيب المزيف جون آر برينكلي في أوائل القرن العشرين ليجني من ورائها شهرة وثروة طائلتين؟', '["نقل دم الخنزير","زراعة كبد البقر","زراعة خصية الماعز","زراعة صدر الديك الرومي"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'ما هي اللعبة التي فازت بجائزة لعبة العام في 2018‏؟', '["ديترويت: بيكام هومان","ريد ديد ريدمبشن 2","إيه واي آوت","جود أوف وار"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'لعبادة أي إله استُخدم معبد البانثيون في روما؟', '["أي إله يريدونه","أثينا","زيوس","كل من أثينا وزيوس"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'أين ولد نابليون بونابرت؟', '["نورماندي","كورسيكا","بريتاني","باريس"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'في أي بلد بُني تمثال الحرية وصُدِّر إلى الولايات المتحدة الأمريكية؟', '["ألمانيا","إسبانيا","فرنسا","إنجلترا"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'من من الآباء المؤسسين للولايات المتحدة الأمريكية أصبح رئيساً لاحقاً؟', '["ألكسندر هاملتون","سامويل آدامز","روجر شيرمان","جيمس مونرو"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'تم قبول أدولف هتلر في أكاديمية فيينا للفنون الجميلة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 8, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'في أي عام انفصلت تكساس عن المكسيك؟', '["1838","1836","1845","1844"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'بالإضافة إلى مسيرته المهنية كمنجم و"متنبئ"، نشر نوستراداموس أطروحة عام 1555 تضمنت قسماً عن ماذا؟', '["تعليم الببغاوات الكلام","الغش في ألعاب الورق","صنع المربى والجيليه","حفر القبور"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'من كان أول حاكم لهايتي بعد نيلها استقلالها؟', '["توسان لوفرتور","هنري كريستوف","ألكسندر بيتيون","جان جاك ديسالين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'خلال حرب الشتاء، كان عدد جنود الاتحاد السوفيتي الذين لقوا حتفهم أو فُقدوا يعادل خمسة أضعاف خسائر فنلندا.', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'متى تم رفع "حصار لينينغراد" خلال الحرب العالمية الثانية؟', '["سبتمبر 1943","يناير 1944","نوفمبر 1943","مارس 1944"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'من كان معلم الإسكندر الأكبر؟', '["سقراط","أفلاطون","أرسطو","الملك فيليب"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'أي دولة حديثة تُعرف باسم "مقبرة الإمبراطوريات"؟', '["الصين","العراق","روسيا","أفغانستان"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'أي ملك من ملوك فرنسا باسم لويس عُرف بلقب ''ملك الشمس''؟', '["لويس الرابع عشر","لويس الثالث عشر","لويس الخامس عشر","لويس السادس عشر"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'أي عام يُعتبر تاريخ نهاية الإمبراطورية البريطانية؟', '["1986","1997","1981","1971"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_127, 'وفقاً لتقديرات العلماء، ما هي النسبة المئوية لسكان العالم الذين لقوا حتفهم في ذلك الوقت بسبب فتوحات تيمورلنك؟', '["1%","3%","5%","<1%"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_128 uuid;
BEGIN
  SELECT id INTO v_lib_id_128 FROM quizzes WHERE title = 'الرياضيات والأرقام — الجزء 1' LIMIT 1;
  IF v_lib_id_128 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضيات والأرقام — الجزء 1', 'رياضيات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_128;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'التكامل هو عكس أي عملية رياضية؟', '["الاشتقاق","القسمة","الانحراف المعياري","الضرب"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هي مساحة دائرة قطرها 20 بوصة إذا كانت قيمة باي (⁦π⁩) تساوي ⁦3.1415⁩‏؟', '["⁦380.1215⁩ بوصة","⁦314.15⁩ بوصة","⁦3141.5⁩ بوصة","⁦1256.6⁩ بوصة"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هي مشتقة ⁦sin⁩(⁦x⁩)‏؟', '["⁦csc⁩(⁦x⁩)","-⁦cos⁩(⁦x⁩)","⁦cos⁩(⁦x⁩)","-⁦sin⁩(⁦x⁩)"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'من هو عالم الرياضيات اليوناني الذي جرى في شوارع سرقوسة عارياً وهو يصرخ "وجدتها" بعد اكتشافه لمبدأ الإزاحة؟', '["إقليدس","هوميروس","إراتوستينس","أرخميدس"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'هل معادلة تكافؤ المادة والطاقة لأينشتاين هي ⁦E⁩ = ⁦MC3⁩‏؟', '["صحيح","خطأ"]'::jsonb, 1, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'كم ضلعاً للشكل السباعي؟', '["5","7","4","9"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'في الأرقام الرومانية، ماذا يعادل الرمز ⁦XL⁩‏؟', '["60","15","40","90"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هو المقابل الست عشري (⁦Hexadecimal⁩) للعدد العشري 31‏؟', '["⁦3D⁩","⁦2E⁩","⁦1B⁩","⁦1F⁩"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هو رمز الإزاحة؟', '["Δ⁦r⁩","⁦dr⁩","⁦Dp⁩","⁦r⁩"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'المثلث متساوي الأضلاع تكون دائماً جميع زواياه قياسها 60 درجة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 9, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'العدد الثنائي "101001101" يعادل العدد العشري "334".', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'المثلث مختلف الأضلاع (⁦Scalene⁩) يحتوي على ضلعين متساويين في الطول.', '["صحيح","خطأ"]'::jsonb, 1, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هو أقل عدد من الأضلاع يمكن أن يتكون منه المضلع?؟', '["3","1","2","7"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هي معادلة مساحة الكرة؟', '["4⁦π⁩⁦r⁩^2","(4/3)⁦π⁩⁦r⁩^3","(1/3)⁦π⁩⁦hr⁩^2","⁦π⁩⁦r⁩^4"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'إذا تمكنت من طي ورقة من المنتصف 50 مرة، فسيصل سمكها إلى ثلاثة أرباع المسافة بين الأرض والشمس.', '["صحيح","خطأ"]'::jsonb, 0, 20, 14, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'مضروب الصفر (⁦Zero factorial⁩) يساوي صفراً.', '["صحيح","خطأ"]'::jsonb, 1, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'كم عدد الأجزاء (الكتب) في كتاب "العناصر" لإقليدس في الهندسة؟', '["13","8","10","17"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'ما هي القيمة التقريبية للثابت الرياضي ⁦e⁩‏؟', '["⁦3.14⁩","⁦2.72⁩","⁦1.62⁩","⁦1.41⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'مجموعة جميع الأعداد الجبرية هي مجموعة قابلة للعد.', '["صحيح","خطأ"]'::jsonb, 0, 20, 18, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_128, 'بأي حرف يوناني يُرمز عادةً للثابت الرياضي المعروف باسم "النسبة الذهبية"؟', '["⁦π⁩ (باي)","Ψ (بساي)","Τ (تاو)","Φ (فاي)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_129 uuid;
BEGIN
  SELECT id INTO v_lib_id_129 FROM quizzes WHERE title = 'الرياضيات والأرقام — الجزء 2' LIMIT 1;
  IF v_lib_id_129 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضيات والأرقام — الجزء 2', 'رياضيات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_129;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'من من علماء الرياضيات التاليين قدم مساهمات كبرى في نظرية الألعاب؟', '["جون فون نيومان","كارل فريدريش غاوس","ليونهارت أويلر","ستيفان باناخ"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'أي من نرد الألعاب التالي لا يمثل مجسماً أفلاطونياً؟', '["نرد ذو 12 وجهاً","نرد ذو 10 أوجه","نرد ذو 20 وجهاً","نرد ذو 8 أوجه"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'كم زيبتومتر يوجد في الفيمتومتر الواحد؟', '["10","1,000,000,000","1,000,000","1000"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'مفهوم "المجموعة التي تحتوي على كل المجموعات التي لا تحتوي على نفسها" هو فكرة مفارقة تنسب إلى أي فيلسوف إنجليزي؟', '["فرانسيس بيكون","جون لوك","ألفريد نورث وايتهيد","برتراند راسل"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'من الذي أثبت مبرهنة فيرما الأخيرة؟', '["أندرو وايلز","ليونهارت أويلر","كارل فريدريش غاوس","سرينيفاسا رامانوجان"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'ما هو الرمز الأبجدي الرقمي المستخدم لتمثيل العدد التخيلي؟', '["⁦e⁩","⁦i⁩","⁦n⁩","⁦x⁩"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'عدد "الميلينيليون" (⁦Millinillion⁩) هو عدد حقيقي.', '["صحيح","خطأ"]'::jsonb, 0, 20, 6, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'كم ضلعاً لشبه المنحرف (⁦Trapezium⁩)‏؟', '["3","5","6","4"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'ماذا يسمى المضلع المكون من ثمانية أضلاع؟', '["الشكل الثماني","الشكل السداسي","الشكل التساعي","الشكل السباعي"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'أي حرف يوناني يُستخدم للدلالة على المجموع (⁦Summation⁩)‏؟', '["ديلتا (⁦Delta⁩)","سيغما (⁦Sigma⁩)","ألفا (⁦Alpha⁩)","أوميغا (⁦Omega⁩)"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'أي مما يلي لم يقم بتطويره عالم الرياضيات ليونهارت أويلر؟', '["طريقة لحل المعادلات التفاضلية من الدرجة الأولى","متطابقة تربط بين الأعداد ⁦e⁩ و ⁦pi⁩ و ⁦i⁩","تطوير على تحويل فوريه السريع","صيغة تربط بين الرؤوس والحواف والأوجه في المخطط (الرسم البياني)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'في التوزيع الطبيعي، تقع 95% من البيانات ضمن كم انحراف معياري من المتوسط الحسابي؟', '["1","3","4","2"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'من هما الرجلان اللذان ينسب إليهما الفضل في اكتشاف حساب التفاضل والتكامل بشكل مستقل؟', '["نيوتن ولايبنتز","أفلاطون وأرسطو","أسيموف ورذرفورد","ديفوراك وسميث"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'ما هو الرقم الرابع لـ باي (⁦π⁩)‏؟', '["2","1","3","4"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'في المستوى المركب، ضرب دالة معينة في الحرف ⁦i⁩ يديرها عكس عقارب الساعة بمقدار كم درجة؟', '["180","270","90","0"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'ما هو الرقم الروماني الذي يمثل العدد 500‏؟', '["⁦L⁩","⁦C⁩","⁦X⁩","⁦D⁩"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'أي مما يلي ليس من مسائل جائزة الألفية السبع؟', '["حدسية نافييه","حدسية بيرش وسوينرتون-داير","فرضية ريمان","حدسية بوانكاريه"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'المجموعة الشاملة، أو المجموعة التي تحتوي على جميع المجموعات، موجودة بالفعل.', '["صحيح","خطأ"]'::jsonb, 1, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'كم ضلعاً للشكل الخماسي؟', '["9","6","5","4"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_129, 'ما هو الاسم الأول لعالم الرياضيات الشهير أويلر؟', '["ليونيل","أدريين","أجان","ليونهارت"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_130 uuid;
BEGIN
  SELECT id INTO v_lib_id_130 FROM quizzes WHERE title = 'الرياضيات والأرقام — الجزء 3' LIMIT 1;
  IF v_lib_id_130 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضيات والأرقام — الجزء 3', 'رياضيات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_130;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هو نوع الزاوية التي يكون قياسها أكبر من 90 درجة؟', '["زاوية منفرجة","زاوية حادة","زاوية قائمة","زاوية مستقيمة"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هو أول أس لعدد ميرسين الأولي (⁦Mersenne prime exponent⁩) يتجاوز 1000‏؟', '["2203","1279","1009","1069"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هي مسألة جائزة الألفية الوحيدة التي تم حلها حتى الآن؟', '["مسألة ⁦P⁩ مقابل ⁦NP⁩","فرضية ريمان","حدسية بوانكاريه","حدسية فيرما"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'أي من هذه الأرقام هو الأقرب إلى العدد الإجمالي للحالات المحتملة لآلة التشفير "إنيجما" القياسية للجيش؟', '["⁦1.58 × 10⁩^22","⁦1.58 × 10⁩^18","⁦1.58 × 10⁩^24","⁦1.58 × 10⁩^20"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'كم مليبار (⁦mbar⁩) يعادل بوصة زئبقية واحدة (⁦inHg⁩)‏؟', '["⁦33.9⁩","⁦30.0⁩","⁦27.4⁩","⁦10.6⁩"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'بماذا يُعرف عالم الرياضيات الفرنسي إيفاريست غالوا في المقام الأول في أعماله؟', '["الكسور المستمرة لغالوا","نظرية غالوا","طريقة غالوا للمعادلات التفاضلية الجزئية","التكامل الأبيلي"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هو مشتق التسارع بالنسبة للزمن؟', '["الإزاحة (⁦Shift⁩)","الارتطام (⁦Bump⁩)","الرعشة (⁦Jerk⁩)","الانزلاق (⁦Slide⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هو الاسم الذي يطلق على المضلع ذي التسعة أضلاع؟', '["الشكل السداسي","الشكل الثماني","الشكل السباعي","الشكل التساعي"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'عند أي درجة حرارة تتساوى القيمة بالدرجة المئوية (⁦°C⁩) مع القيمة بالفهرنهايت (⁦°F⁩)‏؟', '["-40","+40","0","+100"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هو الشكل الذي تمثله الدالتان ⁦sin⁩(⁦x⁩) أو ⁦cos⁩(⁦x⁩) على الرسم البياني؟', '["قطع مكافئ","أمواج","خط مستقيم","خطوط متعرجة"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'لوبيتال (⁦L''Hôpital⁩) هو عالم الرياضيات الذي ابتكر القاعدة الشهيرة التي تحمل اسمه وتستخدم المشتقات لإيجاد الغايات (النهايات) غير المعينة.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'إن إثبات مبرهنة الباقي الصينية المستخدمة في نظرية الأعداد لم يتم تطويره بواسطة أول من نشرها، وهو سون تزو.', '["صحيح","خطأ"]'::jsonb, 0, 20, 11, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'هل ناتج ضرب العدد 111,111,111 في نفسه يساوي 12,345,678,987,654,321‏؟', '["صحيح","خطأ"]'::jsonb, 0, 20, 12, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'يمكنك إيجاد الجذر التربيعي لعدد سالب باستخدام العدد التخيلي "⁦i⁩".', '["صحيح","خطأ"]'::jsonb, 0, 20, 13, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'في نظام العد الست عشري، ما الذي يأتي بعد الرقم 9‏؟', '["10","الرقم 0","الحرف ⁦A⁩","16"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ماذا يأتي بعد المليون، المليار، والتريليون؟', '["سيكستيليون (⁦Sextillion⁩)","كوينتيليون (⁦Quintillion⁩)","سيبتيليون (⁦Septillion⁩)","كوادريليون (⁦Quadrillion⁩)"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'مسألة "تربيع الدائرة" (⁦Squaring the Circle⁩) قابلة للحل.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هي الأرقام الستة الأولى للعدد "باي" (⁦Pi⁩)‏؟', '["⁦3.14169⁩","⁦3.14159⁩","⁦3.12423⁩","⁦3.25812⁩"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'البادئة المتريّة "أتو-" (⁦atto⁩-) تجعل القياس أصغر بمقدار كم مرة مقارنة بالوحدة الأساسية؟', '["جزء من مليار","جزء من كوادريليون","جزء من كوينتيليون","جزء من سيبتيليون"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_130, 'ما هي الأعداد التي تقع في الصف الخامس من مثلث باسكال؟', '["1 3 3 1","1 5 10 10 5 1","1 6 15 20 15 6 1","1 4 6 4 1"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_131 uuid;
BEGIN
  SELECT id INTO v_lib_id_131 FROM quizzes WHERE title = 'الرياضيات والأرقام — الجزء 4' LIMIT 1;
  IF v_lib_id_131 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('الرياضيات والأرقام — الجزء 4', 'رياضيات', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_131;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'كم عدد أضلاع الشكل السباعي؟', '["7","8","6","5"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'في علم الطوبولوجيا، مكملة المجموعة المفتوحة هي مجموعة مغلقة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 1, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'المثلث متساوي الساقين له ضلعان متساويان في الطول وليس ثلاثة.', '["صحيح","خطأ"]'::jsonb, 0, 20, 2, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'كم صفراً يوجد في عدد الـ "جوجل" (⁦Googol⁩)‏؟', '["10","1,000","1,000,000","100"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ألف-صفر (⁦Aleph-nought⁩) هو عدد عناصر (كاردينالية) مجموعة الأعداد الطبيعية.', '["صحيح","خطأ"]'::jsonb, 0, 20, 4, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'كم درجة في الدائرة الكاملة؟', '["180","360","90","720"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'أي من علماء الرياضيات المشهورين التاليين توفي في مبارزة وهو في العشرين من عمره؟', '["أبيل","أويلر","غالوا","غاووس"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'تنص نظرية فيثاغورس على أن مربع الوتر يساوي حاصل ضرب مربعي الضلعين الآخرين.', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ما هو العدد الأولي الذي يأتي مباشرة بعد العدد 19‏؟', '["23","25","21","27"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ما هو الترتيب الصحيح للعمليات الحسابية لحل المعادلات؟', '["الجمع، الضرب، القسمة، الطرح، الجمع، الأقواس","الأقواس، الأسس، الضرب، القسمة، الجمع، الطرح","الأقواس، الأسس، الجمع، الطرح، الضرب، القسمة","الترتيب الذي كُتبت به العمليات الحسابية."]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'مجموع أي عددين فرديين هو عدد فردي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 10, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'من هو عالم الرياضيات الذي رفض الحصول على وسام فيلدز؟', '["أندرو وايلز","تيرينس تاو","إدوارد ويتن","غريغوري بيريلمان"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ما هو أصغر عدد يمكن التعبير عنه كمجموع مكعبين موجبين بطريقتين مختلفتين؟', '["1729","91","561","4104"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ما هو الجذر التربيعي للعدد 49‏؟', '["4","7","12","9"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'ما نوع الدالة ⁦x⁩²+⁦2x⁩+1‏؟', '["نسبية","خطية","تربيعية","أسية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'كم عدد الأوجه المربعة للمكعب؟', '["4","8","10","6"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'كم وجهاً لشريط موبيوس؟', '["1","2","3","4"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'أي من التوزيعات الاحتمالية التالية ليس توزيعاً منفصلاً؟', '["ذو الحدين","الطبيعي","بواسون","الهندسي الفائق"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_131, 'لأقرب عدد صحيح، كم راديان يوجد في الدورة الكاملة للدائرة؟', '["3","4","6","5"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_132 uuid;
BEGIN
  SELECT id INTO v_lib_id_132 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 1' LIMIT 1;
  IF v_lib_id_132 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 1', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_132;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'كم عدد الكواكب في نظامنا الشمسي؟', '["8","7","9","6"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هو الاسم العلمي للأحفورة البشرية المنقرضة المعروفة باسم "لوسي"؟', '["أسترالوبيثكس الأفريقي (⁦Australopithecus Africanus⁩)","أسترالوبيثكس العفاري (⁦Australopithecus Afarensis⁩)","أسترالوبيثكس أرشيتوثيس (⁦Australopithecus Architeuthis⁩)","أسترالوبيثكس أنتاريس (⁦Australopithecus Antaris⁩)"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي عنصر كيميائي يرمز له بالرمز ''⁦Fe⁩''؟', '["الذهب","الفضة","الحديد","القصدير"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'التفاعل الطارد للحرارة هو تفاعل كيميائي يطلق طاقة عن طريق إشعاع الكهرباء.', '["صحيح","خطأ"]'::jsonb, 1, 20, 3, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي من أقمار لاندسات (⁦Landsat⁩) الاصطناعية فشل في الوصول إلى المدار؟', '["لاندسات 6","لاندسات 5","لاندسات 4","لاندسات 3"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'النبات الذي تستمر دورة حياته لأكثر من عام يُعرف بالنبات الحولي.', '["صحيح","خطأ"]'::jsonb, 1, 20, 5, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي مما يلي هي عضلة رئيسية في الظهر؟', '["العظم شبه المنحرف (⁦Trapezium⁩)","العظم المربعي (⁦Trapezoid⁩)","العضلة شبه المنحرفة (⁦Trapezius⁩)","العظم المثلثي (⁦Triquetrum⁩)"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'النشاط اللاواعي الأكثر تكراراً في جسم الإنسان هو الرمش (غمض العين).', '["صحيح","خطأ"]'::jsonb, 1, 20, 7, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي من هذه الخيارات ليس مرحلة من مراحل الانقسام المتساوي (الانقسام الميتوزي)‏؟', '["الطور الثنائي (⁦Diplophase⁩)","الطور الاستوائي (⁦Metaphase⁩)","الطور الانفصالي (⁦Anaphase⁩)","الطور النهائي (⁦Telophase⁩)"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'تنص بديهية الطب الوقائي على أنه يجب فحص الأشخاص ذوي الخطورة ___ للإصابة بمرض ما، وعلينا علاج ___ هؤلاء الأشخاص.', '["المنخفضة، بعض","المنخفضة، جميع","العالية، جميع","العالية، بعض"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هي الطبقة الخارجية الرقيقة للأرض؟', '["الإكسوسفير (الغلاف الخارجي)","الوشاح (الستار)","القشرة الأرضية","النواة الخارجية (اللب الخارجي)"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هو الـ "ستينوما" (⁦Stenoma⁩)‏؟', '["منشط قتالي من الحرب العالمية الثانية","نوع من التوابل","مدينة ساحلية في الكاريبي","جنس من الفراشات (العث)"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هي أصغر الأوعية الدموية في جسم الإنسان؟', '["الشعيرات الدموية","الشريينات","الوريدات","الأوعية اللمفاوية"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'الجليد الجاف هو الحالة الصلبة لأي مادة؟', '["النيتروجين","ثاني أكسيد الكربون","الأمونيا","الأكسجين"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي مما يلي يُستخدم لإثبات دوران الأرض حول محورها؟', '["نجم الشمال (الجدي)","المزولة الشمسية","بندول فوكو","الصفائح التكتونية"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'يتكون 71% من سطح الأرض من:', '["الصحاري","القارات","الغابات","الماء"]'::jsonb, 3, 20, 15, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هو الاسم الشائع للمركب الكيميائي "أكسيد ثنائي الهيدروجين"؟', '["الماء","الميثان","الأمونيا","غاز الضحك"]'::jsonb, 0, 20, 16, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'غانيميد هو أكبر قمر لأي كوكب؟', '["أورانوس","المشتري","نبتون","المريخ"]'::jsonb, 1, 20, 17, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'ما هي الصيغة الرياضية لقانون أوم؟', '["⁦I⁩ = ⁦V⁩*⁦R⁩","⁦R⁩ = ⁦V⁩*⁦I⁩","⁦V⁩ = ⁦I⁩*⁦R⁩","⁦V⁩ = ⁦I⁩ / ⁦R⁩"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_132, 'أي مما يلي ليس عظماً موجوداً في ذراع الإنسان؟', '["عظم العضد","عظم الزند","عظم الكعبرة","عظم الظنبوب (قصبة الساق)"]'::jsonb, 3, 20, 19, 'multi', NULL, '');
  END IF;
END $$;



DO $$
DECLARE
  v_lib_id_133 uuid;
BEGIN
  SELECT id INTO v_lib_id_133 FROM quizzes WHERE title = 'العلوم والطبيعة — الجزء 10' LIMIT 1;
  IF v_lib_id_133 IS NULL THEN
    INSERT INTO quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES ('العلوم والطبيعة — الجزء 10', 'علوم وطب', '', 'standard', 'ar', true)
    RETURNING id INTO v_lib_id_133;

    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'إذا زرعت بذور شجرة البلوط الإنجليزي (⁦Quercus robur⁩)، فماذا سينمو؟', '["أشجار","زهور","خضروات","حبوب"]'::jsonb, 0, 20, 0, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'أي من العناصر التالية يساهم في جعل دم الإنسان أحمر اللون؟', '["النحاس","الحديد","الإريديوم","الكوبالت"]'::jsonb, 1, 20, 1, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'كم عدد البروتونات في ذرة الأكسجين؟', '["أربعة","اثنان","ثمانية","ستة"]'::jsonb, 2, 20, 2, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'ما هو المرض الوراثي الذي ينتج عن وجود كروموسوم ⁦Y⁩ إضافي (⁦XYY⁩)‏؟', '["متلازمة كلينفلتر","متلازمة تورنر","متلازمة داون","متلازمة جاكوب"]'::jsonb, 3, 20, 3, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'من أي قارة تأتي البطاطا الحلوة في الأصل؟', '["أمريكا الجنوبية","آسيا","أفريقيا","أوروبا"]'::jsonb, 0, 20, 4, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'ما هي الكتلة الذرية للكربون؟', '["14","12","16","10"]'::jsonb, 1, 20, 5, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'عند أي درجة حرارة يغلي الماء؟', '["200 درجة فهرنهايت","181 درجة فهرنهايت","212 درجة فهرنهايت","178 درجة فهرنهايت"]'::jsonb, 2, 20, 6, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'من من هؤلاء العلماء أجرى تجربة رقاقة الذهب التي استنتجت أن الذرات تتكون في الغالب من فراغ؟', '["جوزيف جون طومسون","أرخميدس","نيلز بور","إرنست رذرفورد"]'::jsonb, 3, 20, 7, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'بين أي كوكبين يقع حزام الكويكبات؟', '["المريخ والمشتري","المشتري وزحل","عطارد والزهرة","الأرض والمريخ"]'::jsonb, 0, 20, 8, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'أي عنصر يحمل العدد الذري 7‏؟', '["الأكسجين","النيتروجين","الهيدروجين","النيون"]'::jsonb, 1, 20, 9, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'أي مما يلي هو المصطلح الطبي لـ "المضاعفات الجراحية الناتجة عن نسيان الإسفنج الجراحي داخل جسم المريض"؟', '["غونغوزلر","جينتاكيولار","ورم قطني (جوسيبوبوما)","ميوباريونيا"]'::jsonb, 2, 20, 10, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'أي عنصر كيميائي كان يُعرف في الأصل باسم "ألابامين"؟', '["السيلينيوم","الأنتيمون","الموليبدينوم","الأستاتين"]'::jsonb, 3, 20, 11, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'عندما تم إطلاق صاروخ "فالكون هيفي" في رحلته التجريبية، ما هو الجزء الوحيد الذي فشل في العملية؟', '["هبوط القلب المركزي (الصاروخ الأوسط)","هبوط المعززات الجانبية","إطلاق ستارمان","التشغيل والإقلاع"]'::jsonb, 0, 20, 12, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'كم عدد الكواكب في النظام الشمسي؟', '["9","8","11","10"]'::jsonb, 1, 20, 13, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'ما هو الاسم الكيميائي للماء (⁦H2O⁩)‏؟', '["كلوريد الأمونيوم","كربونات الصوديوم اللامائية","أكسيد ثنائي الهيدروجين","ثاني أكسيد المنجنيز"]'::jsonb, 2, 20, 14, 'multi', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'يُعتبر مصطلح "⁦Pneumonoultramicroscopicsilicovolcanoconiosis⁩" مرادفاً لمرض السحار السيليسي (السحار البركاني).', '["صحيح","خطأ"]'::jsonb, 0, 20, 15, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'المحتوى الحراري (الإنثالبي) هو مقياس للطاقة غير المتاحة للشغل خلال عملية ديناميكية حرارية.', '["صحيح","خطأ"]'::jsonb, 1, 20, 16, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'دون احتساب الأسنان الاصطناعية، يمتلك الإنسان مجموعتين من الأسنان طوال حياته.', '["صحيح","خطأ"]'::jsonb, 0, 20, 17, 'boolean', NULL, '');
    INSERT INTO questions (quiz_id, question_text, options, correct_index, time_limit_seconds, order_index, question_type, explanation, subcategory)
    VALUES (v_lib_id_133, 'على مقياس بوفورت لقوة الرياح، ما الاسم الذي يُطلق على الرياح رقم 8‏؟', '["عاصفة","إعصار","عاصفة شديدة","نسيم"]'::jsonb, 2, 20, 18, 'multi', NULL, '');
  END IF;
END $$;

