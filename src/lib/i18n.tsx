import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
const STORAGE_KEY = "quizclash:lang";

type Dict = Record<string, string>;

const en: Dict = {
  "brand.quiz": "Quiz",
  "brand.clash": "Clash",
  "lang.switch": "العربية",
  "lang.label": "Change language",

  "nav.myQuizzes": "My quizzes",
  "nav.signIn": "Sign in",
  "nav.signOut": "Sign out",
  "auth.signInTitle": "Welcome back",
  "auth.signUpTitle": "Create your account",
  "auth.sub": "Sign in so your quizzes are saved to your account and available on any device.",
  "auth.google": "Continue with Google",
  "auth.or": "or",
  "auth.name": "Display name",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.signIn": "Sign in",
  "auth.signUp": "Create account",
  "auth.working": "Just a second…",
  "auth.toSignUp": "No account yet? Register",
  "auth.toSignIn": "Already have an account? Sign in",
  "auth.checkEmail": "Check your email",
  "auth.checkEmailBody": "We sent you a confirmation link. Click it to finish creating your account.",
  "auth.error": "Something went wrong, try again",
  "auth.signedOut": "Signed out",
  "nav.backHome": "← QuizClash",

  "home.kicker": "Live trivia · no app to install",
  "home.title1": "Turn any room into a",
  "home.title2": "game show.",
  "home.sub":
    "Put the big screen up, share a 6-character code, and everyone plays from their own phone. Questions advance on a shared timer — nobody has to click “next”.",
  "home.createQuiz": "Create a quiz",
  "home.joinGame": "Join a game",
  "home.f1.t": "Auto-advance",
  "home.f1.d": "Every screen derives the live question from one shared start time.",
  "home.f2.t": "Speed scoring",
  "home.f2.d": "Answer fast, score up to 1000. Hesitate and it slides toward 300.",
  "home.f3.t": "Live leaderboard",
  "home.f3.d": "Rows slide into new ranks after every single question.",
  "home.f4.t": "Any device",
  "home.f4.d": "Big projected host display, one-handed phone play for everyone else.",

  "quizzes.title": "My quizzes",
  "quizzes.new": "+ New quiz",
  "quizzes.loading": "Loading…",
  "quizzes.emptyTitle": "No quizzes yet",
  "quizzes.emptyBody": "Create your first quiz and host it in under a minute.",
  "quizzes.questionCount": "{count} questions",
  "quizzes.edit": "Edit",
  "quizzes.host": "Host",
  "quizzes.delete": "Delete",
  "quizzes.deleted": "Quiz deleted",
  "quizzes.createError": "Could not create the quiz",
  "quizzes.newTitle": "My new quiz",

  "editor.back": "← My quizzes",
  "editor.saving": "Saving…",
  "editor.saved": "All changes saved",
  "editor.loading": "Loading quiz…",
  "editor.titlePlaceholder": "Quiz title",
  "editor.question": "Question {n}",
  "editor.moveUp": "Move up",
  "editor.moveDown": "Move down",
  "editor.delete": "Delete",
  "editor.questionPlaceholder": "What do you want to ask?",
  "editor.answerPlaceholder": "{shape} answer",
  "editor.markCorrect": "Mark as correct",
  "editor.timeLimit": "Time limit",
  "editor.seconds": "seconds",
  "editor.add": "+ Add question",
  "editor.hostThis": "Host this quiz",
  "editor.addError": "Could not add question",

  "hostPick.title": "Host a game",
  "hostPick.sub": "Choose a quiz. We'll mint a join code for your players.",
  "hostPick.needQuiz": "You need a quiz first",
  "hostPick.buildQuiz": "Build a quiz",
  "hostPick.selected": "selected",
  "hostPick.create": "Create room",
  "hostPick.creating": "Creating room…",
  "hostPick.needQuestion": "Add at least one question first",
  "hostPick.createError": "Could not create a room, try again",

  "host.loading": "Loading room…",
  "host.notFound": "Room not found",
  "host.createNew": "Create a new room",
  "host.joinAt": "Join at",
  "host.gameCode": "Game code",
  "host.qrAlt": "QR code to join QuizClash room {code}",
  "host.players": "Players",
  "host.waiting": "Waiting for players to join…",
  "host.startingIn": "Starting in {n}…",
  "host.start": "Start game",
  "host.autoNote": "Questions advance automatically — you can close this tab and the game keeps going.",
  "host.scoreboard": "Scoreboard",
  "host.afterQuestion": "After question {n}",
  "host.nextIn": "Next question in {n}s",
  "host.qOfN": "Q{n} / {total}",
  "host.code": "Code {code}",
  "host.correctAnswer": "Correct answer!",
  "host.answered": "{answered} of {total} answered",

  "join.codePlaceholder": "CODE",
  "join.nickPlaceholder": "Nickname",
  "join.enter": "Enter",
  "join.joining": "Joining…",
  "join.youreIn": "You're in!",
  "join.errCodeLength": "Room codes are 6 characters",
  "join.errNickLength": "Pick a nickname with at least 2 characters",
  "join.errNoGame": "No game with that code",
  "join.errFinished": "That game has already finished",
  "join.errJoin": "Could not join, try another nickname",

  "play.connecting": "Connecting…",
  "play.notFound": "Game not found",
  "play.tryAnother": "Try another code",
  "play.notInGame": "You're not in this game yet",
  "play.joinRoom": "Join room {code}",
  "play.youreIn": "You're in!",
  "play.startingIn": "Starting in {n}…",
  "play.waitingHost": "Look at the big screen. Waiting for the host…",
  "play.room": "Room {code}",
  "play.yourRank": "Your rank",
  "play.points": "{n} pts",
  "play.behind": "{n} points behind {name}",
  "play.lead": "You're in the lead 🔥",
  "play.nextIn": "Next question in {n}s",
  "play.correct": "Correct!",
  "play.incorrect": "Incorrect",
  "play.tooSlow": "Too slow",
  "play.gained": "+{n} pts",
  "play.inARow": "🔥 {n} in a row",
  "play.correctAnswer": "Correct answer",
  "play.total": "Total {n} pts",
  "play.locked": "Answer locked in",
  "play.waitingOthers": "Waiting for everyone else…",
  "play.questionOf": "Question {n} of {total} — look up!",

  "board.noScores": "No scores yet.",
  "board.streak": "🔥 {n} streak",
  "podium.final": "Final results",
  "podium.standings": "Full standings",
  "podium.playAgain": "Play again",
  "podium.home": "Back home",

  "shape.triangle": "Triangle",
  "shape.diamond": "Diamond",
  "shape.circle": "Circle",
  "shape.square": "Square",
};

const ar: Dict = {
  "brand.quiz": "كويز",
  "brand.clash": "كلاش",
  "lang.switch": "English",
  "lang.label": "تغيير اللغة",

  "nav.myQuizzes": "اختباراتي",
  "nav.signIn": "تسجيل الدخول",
  "nav.signOut": "تسجيل الخروج",
  "auth.signInTitle": "مرحباً بعودتك",
  "auth.signUpTitle": "أنشئ حسابك",
  "auth.sub": "سجّل الدخول ليتم حفظ اختباراتك في حسابك والوصول إليها من أي جهاز.",
  "auth.google": "المتابعة عبر جوجل",
  "auth.or": "أو",
  "auth.name": "الاسم المعروض",
  "auth.email": "البريد الإلكتروني",
  "auth.password": "كلمة المرور",
  "auth.signIn": "تسجيل الدخول",
  "auth.signUp": "إنشاء حساب",
  "auth.working": "لحظة من فضلك…",
  "auth.toSignUp": "ليس لديك حساب؟ سجّل الآن",
  "auth.toSignIn": "لديك حساب؟ سجّل الدخول",
  "auth.checkEmail": "تفقّد بريدك الإلكتروني",
  "auth.checkEmailBody": "أرسلنا لك رابط تأكيد. اضغط عليه لإكمال إنشاء حسابك.",
  "auth.error": "حدث خطأ ما، حاول مرة أخرى",
  "auth.signedOut": "تم تسجيل الخروج",
  "nav.backHome": "→ كويزكلاش",

  "home.kicker": "أسئلة مباشرة · بدون تطبيق · بدون تسجيل",
  "home.title1": "حوّل أي مكان إلى",
  "home.title2": "برنامج مسابقات.",
  "home.sub":
    "اعرض الشاشة الكبيرة، شارك رمزًا من 6 أحرف، وليلعب الجميع من هواتفهم. تتقدم الأسئلة تلقائيًا بمؤقّت مشترك — لا حاجة للضغط على «التالي».",
  "home.createQuiz": "أنشئ اختبارًا",
  "home.joinGame": "انضم إلى لعبة",
  "home.f1.t": "تقدّم تلقائي",
  "home.f1.d": "كل شاشة تحسب السؤال الحالي من وقت بداية واحد مشترك.",
  "home.f2.t": "نقاط حسب السرعة",
  "home.f2.d": "أجب بسرعة لتحصل على 1000 نقطة، والتأخير يقلّلها حتى 300.",
  "home.f3.t": "لوحة نتائج حية",
  "home.f3.d": "تتحرك الصفوف إلى ترتيبها الجديد بعد كل سؤال.",
  "home.f4.t": "كل الأجهزة",
  "home.f4.d": "شاشة عرض كبيرة للمضيف، ولعب بيد واحدة على الهاتف للبقية.",

  "quizzes.title": "اختباراتي",
  "quizzes.new": "+ اختبار جديد",
  "quizzes.loading": "جارٍ التحميل…",
  "quizzes.emptyTitle": "لا توجد اختبارات بعد",
  "quizzes.emptyBody": "أنشئ أول اختبار لك واستضفه في أقل من دقيقة.",
  "quizzes.questionCount": "{count} أسئلة",
  "quizzes.edit": "تعديل",
  "quizzes.host": "استضافة",
  "quizzes.delete": "حذف",
  "quizzes.deleted": "تم حذف الاختبار",
  "quizzes.createError": "تعذّر إنشاء الاختبار",
  "quizzes.newTitle": "اختباري الجديد",

  "editor.back": "→ اختباراتي",
  "editor.saving": "جارٍ الحفظ…",
  "editor.saved": "تم حفظ كل التغييرات",
  "editor.loading": "جارٍ تحميل الاختبار…",
  "editor.titlePlaceholder": "عنوان الاختبار",
  "editor.question": "السؤال {n}",
  "editor.moveUp": "تحريك لأعلى",
  "editor.moveDown": "تحريك لأسفل",
  "editor.delete": "حذف",
  "editor.questionPlaceholder": "ما الذي تريد أن تسأله؟",
  "editor.answerPlaceholder": "إجابة {shape}",
  "editor.markCorrect": "تحديد كإجابة صحيحة",
  "editor.timeLimit": "المدة",
  "editor.seconds": "ثانية",
  "editor.add": "+ إضافة سؤال",
  "editor.hostThis": "استضف هذا الاختبار",
  "editor.addError": "تعذّرت إضافة السؤال",

  "hostPick.title": "استضف لعبة",
  "hostPick.sub": "اختر اختبارًا وسننشئ رمز انضمام للاعبين.",
  "hostPick.needQuiz": "تحتاج إلى اختبار أولًا",
  "hostPick.buildQuiz": "أنشئ اختبارًا",
  "hostPick.selected": "محدد",
  "hostPick.create": "إنشاء غرفة",
  "hostPick.creating": "جارٍ إنشاء الغرفة…",
  "hostPick.needQuestion": "أضف سؤالًا واحدًا على الأقل أولًا",
  "hostPick.createError": "تعذّر إنشاء الغرفة، حاول مرة أخرى",

  "host.loading": "جارٍ تحميل الغرفة…",
  "host.notFound": "الغرفة غير موجودة",
  "host.createNew": "إنشاء غرفة جديدة",
  "host.joinAt": "انضم عبر",
  "host.gameCode": "رمز اللعبة",
  "host.qrAlt": "رمز QR للانضمام إلى غرفة {code}",
  "host.players": "اللاعبون",
  "host.waiting": "في انتظار انضمام اللاعبين…",
  "host.startingIn": "تبدأ خلال {n}…",
  "host.start": "ابدأ اللعبة",
  "host.autoNote": "تتقدم الأسئلة تلقائيًا — يمكنك إغلاق هذه الصفحة وستستمر اللعبة.",
  "host.scoreboard": "لوحة النتائج",
  "host.afterQuestion": "بعد السؤال {n}",
  "host.nextIn": "السؤال التالي خلال {n} ثانية",
  "host.qOfN": "سؤال {n} / {total}",
  "host.code": "الرمز {code}",
  "host.correctAnswer": "الإجابة الصحيحة!",
  "host.answered": "أجاب {answered} من {total}",

  "join.codePlaceholder": "الرمز",
  "join.nickPlaceholder": "اسمك",
  "join.enter": "دخول",
  "join.joining": "جارٍ الانضمام…",
  "join.youreIn": "انضممت!",
  "join.errCodeLength": "رمز الغرفة مكوّن من 6 أحرف",
  "join.errNickLength": "اختر اسمًا من حرفين على الأقل",
  "join.errNoGame": "لا توجد لعبة بهذا الرمز",
  "join.errFinished": "انتهت هذه اللعبة بالفعل",
  "join.errJoin": "تعذّر الانضمام، جرّب اسمًا آخر",

  "play.connecting": "جارٍ الاتصال…",
  "play.notFound": "اللعبة غير موجودة",
  "play.tryAnother": "جرّب رمزًا آخر",
  "play.notInGame": "لم تنضم إلى هذه اللعبة بعد",
  "play.joinRoom": "انضم إلى الغرفة {code}",
  "play.youreIn": "انضممت!",
  "play.startingIn": "تبدأ خلال {n}…",
  "play.waitingHost": "انظر إلى الشاشة الكبيرة. في انتظار المضيف…",
  "play.room": "الغرفة {code}",
  "play.yourRank": "ترتيبك",
  "play.points": "{n} نقطة",
  "play.behind": "تتأخر بـ {n} نقطة عن {name}",
  "play.lead": "أنت في الصدارة 🔥",
  "play.nextIn": "السؤال التالي خلال {n} ثانية",
  "play.correct": "إجابة صحيحة!",
  "play.incorrect": "إجابة خاطئة",
  "play.tooSlow": "تأخرت كثيرًا",
  "play.gained": "+{n} نقطة",
  "play.inARow": "🔥 {n} على التوالي",
  "play.correctAnswer": "الإجابة الصحيحة",
  "play.total": "المجموع {n} نقطة",
  "play.locked": "تم تثبيت إجابتك",
  "play.waitingOthers": "في انتظار بقية اللاعبين…",
  "play.questionOf": "السؤال {n} من {total} — انظر للأعلى!",

  "board.noScores": "لا توجد نتائج بعد.",
  "board.streak": "🔥 {n} متتالية",
  "podium.final": "النتائج النهائية",
  "podium.standings": "الترتيب الكامل",
  "podium.playAgain": "العب مرة أخرى",
  "podium.home": "العودة للرئيسية",

  "shape.triangle": "المثلث",
  "shape.diamond": "المعيّن",
  "shape.circle": "الدائرة",
  "shape.square": "المربع",
};

const DICTS: Record<Lang, Dict> = { en, ar };

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof en | string, vars?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start on "en" so SSR and the first client render agree, then adopt the
  // stored preference after hydration.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
    else if (navigator.language?.toLowerCase().startsWith("ar")) setLangState("ar");
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggle: () => setLang(lang === "ar" ? "en" : "ar"),
      t: (key, vars) => interpolate(DICTS[lang][key as string] ?? en[key as string] ?? (key as string), vars),
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      lang: "en",
      dir: "ltr",
      setLang: () => {},
      toggle: () => {},
      t: (key, vars) => interpolate(en[key as string] ?? (key as string), vars),
    };
  }
  return ctx;
}

export const SHAPE_KEYS = ["shape.triangle", "shape.diamond", "shape.circle", "shape.square"] as const;
