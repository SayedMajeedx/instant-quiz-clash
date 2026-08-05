import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'merged_questions_launch_ready.json'), 'utf8'));
const targetCategories = ['لغة عربية وأدب', 'إسلاميات عامة', 'إسلاميات - شيعي اثنا عشري'];
const quotas = {'لغة عربية وأدب': 80, 'إسلاميات عامة': 80, 'إسلاميات - شيعي اثنا عشري': 100};

// Defects which make a question unsuitable without subjective reconstruction.
const hardRules = [
  ['بتر أو مرجع محذوف', /قصة أصحاب[؟?]|هذه (?:الآية|السورة|العبارة|الحادثة|المناسبة)\s*[؟?]|المذكور(?:ة)?\s+(?:أعلاه|سابقاً)|في النص السابق|بحسب النص/i],
  ['صياغة غير مكتملة', /(?:هو|هي|كان|كانت|ورد|وقعت|يُسمى|تُسمى)\s*[؟?]$/i],
  ['سؤال ميتا أو رديء', /صح\s*\/\s*نعم|خطأ\s*\/\s*لا|أي الخيارات التالية ليس خطأ/i],
  ['تفصيل خلافي أو غير منضبط', /الأصح تاريخياً|على وجه الدقة|بلا خلاف|أجمع (?:كل|جميع)|الأكثر صحة|الرأي الراجح|كم كان عمر/i],
  ['لغة إنشائية أو متحيزة', /الأسطوري|الخالد|العظيم|الشريفة|المبارك|العبقري|الأب الروحي|الوثيقة الخالدة|الفتوى الخالدة/i],
  ['أخطاء لغوية ظاهرة', /ما هي الكريمة|الأسبوعية الأسطورية|للل|في في|المتمير|الفلسمي|بمسلك هارون|بالسم بعصر|13 رجب المرجب|بـ كربلاء|عن العيون/i],
];

function normalized(s) {
  return String(s || '').normalize('NFKC').replace(/[ًٌٍَُِّْـ]/g, '').replace(/[«»“”"'،,.؟?!:;؛()\[\]{}\s]/g, '').toLowerCase();
}

function rejectReason(q) {
  if (!q || typeof q !== 'object') return 'بنية غير صالحة';
  if (!q.id || !q.question_text || !Array.isArray(q.options) || q.options.length < 2) return 'بنية غير صالحة';
  if (!Number.isInteger(q.correct_index) || q.correct_index < 0 || q.correct_index >= q.options.length) return 'مؤشر إجابة غير صالح';
  if (q.question_text.trim().length < 18) return 'صياغة قصيرة أو ناقصة';
  if (new Set(q.options.map(normalized)).size !== q.options.length) return 'خيارات مكررة';
  for (const [reason, re] of hardRules) if (re.test(q.question_text)) return reason;
  const answer = normalized(q.options[q.correct_index]);
  const question = normalized(q.question_text);
  if (answer.length >= 7 && question.includes(answer) && !/صح|خطأ/.test(q.options.join(' '))) return 'الإجابة مكشوفة في السؤال';
  if (!q.explanation || q.explanation.trim().length < 18) return 'شرح ضعيف أو مفقود';
  if (!q.source || /ذكاء اصطناعي|مصادر عامة|ويكيبيديا فقط/i.test(q.source)) return 'مصدر ضعيف أو مفقود';
  return null;
}

function score(q) {
  let s = 0;
  const t = q.question_text, e = q.explanation, src = q.source;
  s += Math.min(t.length, 100) / 8;
  s += Math.min(e.length, 180) / 15;
  s += q.options.length === 4 ? 7 : 1;
  s += q.verified === true ? 8 : 0;
  s += /القرآن الكريم|المصحف|صحيح البخاري|صحيح مسلم|نهج البلاغة|الصحيفة السجادية|الشيخ المفيد|ابن هشام|ابن عقيل|ديوان|لسان العرب|المعجم الوسيط|مجمع اللغة/i.test(src) ? 8 : 0;
  s += /\d+[:：]\d+|آية \d+|باب|جزء|ص\.?\s*\d+/i.test(src) ? 3 : 0;
  s -= /^QA-|QA\d+/.test(q.id) ? 5 : 0;
  s -= q.options.length === 2 ? 5 : 0;
  s -= /من هو الإمام رقم|هل هذه العبارة صحيحة|صح أم خطأ/i.test(t) ? 5 : 0;
  s -= /موقع|ويكيبيديا/i.test(src) ? 2 : 0;
  return s;
}

const reviewed = data.filter(q => targetCategories.includes(q.category));
const preliminaryRejected = [];
const eligible = [];
for (const q of reviewed) {
  const reason = rejectReason(q);
  if (reason) preliminaryRejected.push({id:q.id, category:q.category, reason});
  else eligible.push(q);
}

const selected = [];
for (const category of targetCategories) {
  const candidates = eligible.filter(q => q.category === category);
  const groups = new Map();
  for (const q of candidates) {
    const k = q.subcategory || 'غير مصنف';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  }
  for (const arr of groups.values()) arr.sort((a,b) => score(b)-score(a) || a.id.localeCompare(b.id));
  const keys = [...groups.keys()];
  let round = 0;
  while (selected.filter(q => q.category === category).length < quotas[category]) {
    let added = false;
    for (const key of keys) {
      const q = groups.get(key)[round];
      if (q && selected.filter(x => x.category === category).length < quotas[category]) {
        selected.push({...q}); added = true;
      }
    }
    if (!added) break;
    round++;
  }
}

// One certain reconstruction retained as a useful, uncontroversial Quran question.
const repaired = [];
const broken = reviewed.find(q => q.id === 'B001-QUR-008');
if (broken && !selected.some(q => q.id === broken.id)) {
  const replacementIndex = selected.findIndex(q => q.category === broken.category && score(q) === Math.min(...selected.filter(x => x.category === broken.category).map(score)));
  if (replacementIndex >= 0) {
    const fixed = {...broken, question_text:'في أي سورة وردت قصة أصحاب الكهف؟'};
    selected[replacementIndex] = fixed;
    repaired.push({id:fixed.id, before:broken.question_text, after:fixed.question_text, basis:'الإجابة والشرح والمصدر تحدد جميعها أصحاب الكهف بلا التباس'});
  }
}

const selectedIds = new Set(selected.map(q => q.id));
const rejected = reviewed.filter(q => !selectedIds.has(q.id)).map(q => {
  const initial = preliminaryRejected.find(x => x.id === q.id);
  return initial || {id:q.id, category:q.category, reason:'استبعاد انتقائي: سؤال أقل جودة من البدائل'};
});
const byCategory = {};
for (const c of targetCategories) byCategory[c] = {reviewed:reviewed.filter(q=>q.category===c).length, accepted:selected.filter(q=>q.category===c).length, rejected:rejected.filter(q=>q.category===c).length};
const reasons = {};
for (const r of rejected) reasons[r.reason] = (reasons[r.reason] || 0) + 1;

const normSeen = new Set();
const duplicateIds = selected.map(q=>q.id).filter((id,i,a)=>a.indexOf(id)!==i);
const duplicateQuestions = [];
for (const q of selected) { const n=normalized(q.question_text); if(normSeen.has(n)) duplicateQuestions.push(q.id); normSeen.add(n); }
const schemaKeys = Object.keys(data[0]);
const schemaErrors = selected.filter(q => JSON.stringify(Object.keys(q)) !== JSON.stringify(schemaKeys)).map(q=>q.id);
const validation = {json_valid:true, selected_count:selected.length, unique_ids:duplicateIds.length===0, duplicate_ids:duplicateIds, unique_question_text:duplicateQuestions.length===0, duplicate_question_ids:duplicateQuestions, schema_consistent:schemaErrors.length===0, schema_error_ids:schemaErrors, correct_indices_valid:selected.every(q=>Number.isInteger(q.correct_index)&&q.correct_index>=0&&q.correct_index<q.options.length)};
if (!validation.unique_ids || !validation.unique_question_text || !validation.schema_consistent || !validation.correct_indices_valid || selected.length !== 260) throw new Error('Validation failed: '+JSON.stringify(validation));

const summary = {generated_at:new Date().toISOString(), source_file:'merged_questions_launch_ready.json', scope:targetCategories, methodology:'مراجعة محافظة بقواعد رفض للبتر والغموض والأخطاء اللغوية والتحيز الإنشائي وضعف البنية والمصدر، ثم ترتيب جودة وتوزيع متوازن على التصنيفات الفرعية. الأسئلة خارج أفضل 260 استبعدت لصالح بدائل أقوى.', totals:{reviewed:reviewed.length, accepted:selected.length, rejected:rejected.length, repaired:repaired.length}, by_category:byCategory, rejection_reasons:reasons, repaired_questions:repaired, validation};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports','curated_religion_arabic.json'), JSON.stringify(selected,null,2)+'\n');
fs.writeFileSync(path.join(root,'reports','curated_religion_arabic_summary.json'), JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
