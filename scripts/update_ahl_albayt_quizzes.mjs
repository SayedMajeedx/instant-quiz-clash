import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parsedQuizzes = JSON.parse(fs.readFileSync(path.join(__dirname, 'output_quizzes.json'), 'utf8'));

const folderMap = [
  { dir: '01_النبي_محمد', idKey: 'prophet-muhammad', title: 'سيرة النبي محمد ﷺ' },
  { dir: '02_الإمام_علي', idKey: 'imam-ali', title: 'سيرة الإمام علي (ع)' },
  { dir: '03_السيدة_فاطمة_الزهراء', idKey: 'fatima-al-zahra', title: 'سيرة السيدة فاطمة الزهراء (ع)' },
  { dir: '04_الإمام_الحسن', idKey: 'imam-hasan', title: 'سيرة الإمام الحسن المجتبى (ع)' },
  { dir: '05_الإمام_الحسين', idKey: 'imam-husayn', title: 'سيرة الإمام الحسين (ع)' },
  { dir: '06_السيدة_زينب', idKey: 'sayyida-zainab', title: 'سيرة السيدة زينب بنت علي (ع)' },
  { dir: '07_أبو_الفضل_العباس', idKey: 'al-abbas', title: 'سيرة العباس بن علي (ع)' },
  { dir: '08_الإمام_زين_العابدين', idKey: 'imam-sajjad', title: 'سيرة الإمام علي بن الحسين (ع)' },
  { dir: '09_الإمام_محمد_الباقر', idKey: 'imam-baqir', title: 'سيرة الإمام محمد الباقر (ع)' },
  { dir: '10_الإمام_جعفر_الصادق', idKey: 'imam-sadiq', title: 'سيرة الإمام جعفر الصادق (ع)' },
  { dir: '11_الإمام_موسى_الكاظم', idKey: 'imam-kadhim', title: 'سيرة الإمام موسى بن جعفر (ع)' },
  { dir: '12_الإمام_علي_الرضا', idKey: 'imam-rida', title: 'سيرة الإمام علي بن موسى الرضا (ع)' },
  { dir: '13_الإمام_محمد_الجواد', idKey: 'imam-jawad', title: 'سيرة الإمام محمد بن علي الجواد (ع)' },
  { dir: '14_الإمام_علي_الهادي', idKey: 'imam-hadi', title: 'سيرة الإمام علي بن محمد الهادي (ع)' },
  { dir: '15_الإمام_الحسن_العسكري', idKey: 'imam-askari', title: 'سيرة الإمام الحسن العسكري (ع)' },
  { dir: '16_الإمام_محمد_المهدي', idKey: 'imam-mahdi', title: 'سيرة الإمام محمد بن الحسن المهدي (عج)' }
];

const baseAhlDir = path.join(__dirname, '..', 'ahl_albayt_quizzes');

folderMap.forEach((item, index) => {
  const targetDir = path.join(baseAhlDir, item.dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const quizData = parsedQuizzes[index];
  const gameFileName = `${item.dir}_game.json`;
  const gameFilePath = path.join(targetDir, gameFileName);

  const gameObject = {
    title: item.title,
    category: "سلسلة مسابقات أهل البيت (ع)",
    subcategory: item.title,
    language: "ar",
    quiz_difficulty: "standard",
    archived: false,
    launch_enabled: true,
    questions: quizData.questions.map((q, qIdx) => ({
      question_text: q.question_text,
      options: q.options,
      correct_index: q.correct_index,
      time_limit_seconds: 20,
      order_index: qIdx,
      image_url: null,
      question_type: "multi",
      explanation: q.explanation || null,
      difficulty: "standard",
      subcategory: item.title,
      source: "سلسلة مسابقات أهل البيت (ع)"
    }))
  };

  fs.writeFileSync(gameFilePath, JSON.stringify(gameObject, null, 2), 'utf8');
  console.log(`Updated ${gameFileName} with ${gameObject.questions.length} questions.`);
});

console.log("Successfully updated all 16 *_game.json files in ahl_albayt_quizzes!");
