const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('merged_questions_launch_ready.json', 'utf8'));

// Generic filler words that shouldn't trigger leakage detection on their own
const GENERIC_WORDS = new Set([
  'تمثال', 'معبد', 'ضريح', 'هيكل', 'مدينة', 'دولة', 'عاصمة', 'قارة', 'محيط', 'بحر', 'نهر', 'جبل',
  'قصر', 'قلعة', 'مسجد', 'متحف', 'جائزة', 'ملك', 'ملكة', 'رئيس', 'عالم', 'شاعر', 'كاتب', 'مخترع',
  'مكتشف', 'معركة', 'غزوة', 'حرب', 'ثورة', 'دوري', 'كأس', 'بطولة', 'نادي', 'فريق', 'لاعب', 'مدرب',
  'مخرج', 'مؤلف', 'رسام', 'موسيقي', 'فيلم', 'مسلسل', 'سلسلة', 'أنمي', 'مانغا', 'كتاب', 'رواية',
  'لعبة', 'بطل', 'شخصية', 'جزيرة', 'خليج', 'قناة', 'بحيرة', 'بركان', 'برج', 'جسر', 'حكم', 'سلطان'
]);

// Extract key entity words from correct answer option
function getKeyEntities(answerText) {
  return answerText
    .replace(/[^\u0600-\u06FF\w\s]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 3 && !GENERIC_WORDS.has(w.toLowerCase()));
}

let fixedCount = 0;
const leakedLog = [];

questions.forEach((q, idx) => {
  const correctOpt = (q.options[q.correct_index] || '').trim();
  const entities = getKeyEntities(correctOpt);
  let qText = q.question_text || '';
  let modified = false;

  entities.forEach(entity => {
    // Escaped regex for entity
    const escaped = entity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');

    if (regex.test(qText)) {
      modified = true;

      // Smart entity replacements
      if (entity === 'أرتميس') {
        qText = qText.replace(/للإلهة أرتميس/g, 'للإلهة اليونانية الشهيرة').replace(/أرتميس/g, 'الإلهة اليونانية');
      } else if (entity === 'أوليمبيا') {
        qText = qText.replace(/في أوليمبيا باليونان/g, 'في اليونان القديمة').replace(/أوليمبيا/g, 'المنطقة اليونانية المقدسة');
      } else if (entity === 'روما') {
        qText = qText.replace(/مدينة روما/g, 'العاصمة الإيطالية').replace(/روما/g, 'المدينة التاريخية');
      } else if (entity === 'باريس') {
        qText = qText.replace(/مدينة باريس/g, 'العاصمة الفرنسية').replace(/باريس/g, 'العاصمة الفرنسية');
      } else if (entity === 'لندن') {
        qText = qText.replace(/مدينة لندن/g, 'العاصمة البريطانية').replace(/لندن/g, 'العاصمة البريطانية');
      } else if (entity === 'مصر') {
        qText = qText.replace(/في دولة مصر/g, 'في أرض الفراعنة').replace(/مصر/g, 'أرض الفراعنة');
      } else if (entity === 'اليابان') {
        qText = qText.replace(/في دولة اليابان/g, 'في كوكب اليابان').replace(/اليابان/g, 'بلاد الشمس المشرقة');
      } else {
        // Generic entity mask / cleanup
        qText = qText.replace(regex, '...');
      }
    }
  });

  if (modified) {
    fixedCount += 1;
    // Clean up trailing dots or double spaces
    qText = qText.replace(/\.\.\.\s*\.\.\./g, '...').replace(/\s+/g, ' ').trim();
    leakedLog.push({
      idx,
      original: q.question_text,
      fixed: qText,
      correctOpt
    });
    q.question_text = qText;
  }
});

console.log(`Deep Entity Leak Fix applied to ${fixedCount} questions.`);
fs.writeFileSync('scripts/deep_leak_fixed_log.json', JSON.stringify(leakedLog, null, 2), 'utf8');
fs.writeFileSync('merged_questions_launch_ready.json', JSON.stringify(questions, null, 2), 'utf8');
