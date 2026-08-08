import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { getAllAdminQuizzes } from "@/lib/admin-data-helper";
import { selectCustomQuestions } from "@/lib/custom-quiz";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/custom-challenge")({
  component: CustomChallengeSetup,
  head: () => ({
    meta: [{ title: "تحدي كويز مخصص — QuizClash" }],
  }),
});

type Difficulty = "all" | "standard" | "challenge";
type CategoryOption = {
  id: string;
  name: string;
  subcategories: Array<{ id: string; name: string }>;
};
type UnifiedQuestion = {
  id: string;
  question_text: string;
  options: unknown[];
  correct_index: number;
  question_type?: string | null;
  explanation?: string | null;
  image_url?: string | null;
  difficulty: string;
  subcategory: string;
  source_category: string;
};

const QUESTION_COUNTS = [20, 40, 50, 100] as const;
const subcategoryKey = (category: string, subcategory: string) => `${category}\u0000${subcategory}`;

function CustomChallengeSetup() {
  const navigate = useNavigate();
  const { lang } = useI18n();
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [questionBank, setQuestionBank] = useState<UnifiedQuestion[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<(typeof QUESTION_COUNTS)[number]>(20);
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [advanceMode, setAdvanceMode] = useState<"auto" | "manual">("auto");
  const [teamCount, setTeamCount] = useState(0);
  const [available, setAvailable] = useState<number | null>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [checking, setChecking] = useState(false);
  const [creating, setCreating] = useState(false);

  const ar = lang === "ar";

  useEffect(() => {
    void (async () => {
      const quizzes = (await getAllAdminQuizzes()).filter((quiz) => quiz.is_public);
      const bank: UnifiedQuestion[] = [];
      const categoryRows: Array<{
        id: string;
        category: string;
        subcategory: string;
        quiz_kind: string;
      }> = [];
      for (const quiz of quizzes) {
        for (const [index, question] of (quiz.questions ?? []).entries()) {
          if (!question?.question_text || !Array.isArray(question.options)) continue;
          const subcategory = String(question.subcategory ?? quiz.subcategory ?? "").trim();
          bank.push({
            id: `${quiz.id}:${question.id ?? index}`,
            question_text: question.question_text,
            options: question.options,
            correct_index: Number(question.correct_index ?? 0),
            question_type: question.question_type,
            explanation: question.explanation,
            image_url: question.image_url,
            difficulty: String(question.difficulty ?? quiz.quiz_difficulty ?? "standard"),
            subcategory,
            source_category: quiz.category,
          });
          categoryRows.push({
            id: `${quiz.id}:${index}`,
            category: quiz.category,
            subcategory,
            quiz_kind: "standard",
          });
        }
      }
      setQuestionBank(bank);
      const managedResult = { error: null, data: [] as CategoryOption[] };
      const quizResult = { error: null, data: categoryRows };
      if (managedResult.error && quizResult.error) {
        toast.error(ar ? "تعذر تحميل الأقسام" : "Could not load categories");
      } else {
        const byName = new Map<string, CategoryOption>();
        for (const category of managedResult.data ?? []) {
          const name = String(category.name ?? "").trim();
          if (!name) continue;
          byName.set(name.toLocaleLowerCase(), {
            id: category.id,
            name,
            subcategories: category.subcategories ?? [],
          });
        }
        for (const quiz of quizResult.data ?? []) {
          if (quiz.quiz_kind === "custom_generated") continue;
          const name = String(quiz.category ?? "").trim();
          if (!name) continue;
          const key = name.toLocaleLowerCase();
          const category = byName.get(key) ?? {
            id: `quiz-category:${name}`,
            name,
            subcategories: [],
          };
          const subcategory = String(quiz.subcategory ?? "").trim();
          if (
            subcategory &&
            !category.subcategories.some(
              (item) => item.name.toLocaleLowerCase() === subcategory.toLocaleLowerCase(),
            )
          ) {
            category.subcategories.push({
              id: `quiz-subcategory:${name}:${subcategory}`,
              name: subcategory,
            });
          }
          byName.set(key, category);
        }
        setCategories(
          Array.from(byName.values()).sort((a, b) => a.name.localeCompare(b.name, "ar")),
        );
      }
      setLoadingCategories(false);
    })();
  }, [ar]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setChecking(true);
      const filtered = questionBank.filter((question) => {
        if (
          selectedCategories.length > 0 &&
          !selectedCategories.includes(question.source_category)
        ) {
          return false;
        }
        if (
          selectedSubcategories.length > 0 &&
          !selectedSubcategories.includes(
            subcategoryKey(question.source_category, question.subcategory),
          )
        ) {
          return false;
        }
        const normalized = question.difficulty.toLocaleLowerCase();
        const challenging = ["challenge", "hard", "expert"].includes(normalized);
        return difficulty === "all" || (difficulty === "challenge" ? challenging : !challenging);
      });
      setAvailable(filtered.length);
      setChecking(false);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [questionBank, selectedCategories, selectedSubcategories, difficulty]);

  const visibleSubcategories = useMemo(
    () =>
      selectedCategories.length === 1
        ? categories
            .filter((category) => selectedCategories.includes(category.name))
            .flatMap((category) =>
              category.subcategories.map((sub) => ({ ...sub, category: category.name })),
            )
        : [],
    [categories, selectedCategories],
  );

  function toggleCategory(name: string) {
    setSelectedCategories((current) => {
      const next = current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name];
      if (next.length !== 1) setSelectedSubcategories([]);
      return next;
    });
    const category = categories.find((item) => item.name === name);
    if (category && selectedCategories.includes(name)) {
      const removed = new Set(
        category.subcategories.map((sub) => subcategoryKey(category.name, sub.name)),
      );
      setSelectedSubcategories((current) => current.filter((item) => !removed.has(item)));
    }
  }

  function toggleSubcategory(category: string, name: string) {
    const key = subcategoryKey(category, name);
    setSelectedSubcategories((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );
  }

  async function createChallenge() {
    if (available === null || available < questionCount) return;
    const eligible = questionBank.filter((question) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(question.source_category)) {
        return false;
      }
      if (
        selectedSubcategories.length > 0 &&
        !selectedSubcategories.includes(
          subcategoryKey(question.source_category, question.subcategory),
        )
      ) {
        return false;
      }
      const normalized = question.difficulty.toLocaleLowerCase();
      const challenging = ["challenge", "hard", "expert"].includes(normalized);
      return difficulty === "all" || (difficulty === "challenge" ? challenging : !challenging);
    });
    const selected = selectCustomQuestions(eligible, questionCount).map(
      ({ id: _id, ...question }) => question,
    );
    setCreating(true);
    const { data, error } = await (supabase as any).rpc("create_custom_quiz_room", {
      p_questions: selected,
      p_advance_mode: advanceMode,
      p_team_count: teamCount,
      p_team_mode: "auto",
    });
    setCreating(false);

    if (error || !data?.room_code) {
      toast.error(
        error?.message || (ar ? "تعذر إنشاء غرفة التحدي" : "Could not create challenge room"),
      );
      return;
    }
    void navigate({ to: "/host/$code", params: { code: data.room_code } });
  }

  return (
    <main className="relative min-h-screen px-5 py-8" dir={ar ? "rtl" : "ltr"}>
      <AnimatedBg dense />
      <div className="relative mx-auto max-w-4xl">
        <header className="flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-bold text-muted-foreground hover:text-foreground">
            {ar ? "العودة للرئيسية" : "Back home"}
          </Link>
          <LanguageToggle />
        </header>

        <div className="mt-6 rounded-3xl border border-primary/40 bg-background/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <p className="text-sm font-bold text-sun">
            ⚡ {ar ? "تحدي جماعي بلا حدود" : "Dynamic multiplayer challenge"}
          </p>
          <h1 className="mt-2 font-display text-4xl text-gradient sm:text-5xl">
            {ar ? "تحدي كويز مخصص" : "Custom Quiz Challenge"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {ar
              ? "اختر بنك الأسئلة، وسننشئ غرفة عشوائية برمز الانضمام المعتاد. كل سؤال مدته 30 ثانية."
              : "Choose the question pools and we’ll create a shuffled room with the usual join code. Every question has 30 seconds."}
          </p>

          <section className="mt-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl">{ar ? "1. الأقسام" : "1. Categories"}</h2>
              <button
                type="button"
                onClick={() => {
                  if (selectedCategories.length === categories.length) {
                    setSelectedCategories([]);
                    setSelectedSubcategories([]);
                  } else {
                    setSelectedCategories(categories.map((category) => category.name));
                    setSelectedSubcategories([]);
                  }
                }}
                className="rounded-xl border border-primary/40 px-3 py-1.5 text-xs font-bold text-primary"
              >
                {selectedCategories.length === categories.length && categories.length > 0
                  ? ar
                    ? "إلغاء تحديد الكل"
                    : "Clear all"
                  : ar
                    ? "تحديد الكل"
                    : "Select all"}
              </button>
            </div>
            {loadingCategories ? (
              <p className="mt-4 text-muted-foreground">{ar ? "جارٍ التحميل..." : "Loading..."}</p>
            ) : (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => {
                  const active = selectedCategories.includes(category.name);
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => toggleCategory(category.name)}
                      className={cn(
                        "rounded-2xl border p-4 text-start font-bold transition",
                        active
                          ? "border-primary bg-primary/35 text-white shadow-glow"
                          : "border-border bg-background/50",
                      )}
                    >
                      <span className="me-2">{active ? "☑" : "☐"}</span>
                      {category.name}
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          {visibleSubcategories.length > 0 && (
            <section className="mt-7">
              <h2 className="font-display text-xl">
                {ar ? "الأقسام الفرعية (اختياري)" : "Subcategories (optional)"}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {ar
                  ? "اتركها بدون تحديد لاستخدام جميع أسئلة الأقسام المختارة."
                  : "Leave blank to use every question in the selected categories."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {visibleSubcategories.map((sub) => {
                  const active = selectedSubcategories.includes(
                    subcategoryKey(sub.category, sub.name),
                  );
                  return (
                    <button
                      key={`${sub.category}-${sub.id}`}
                      type="button"
                      onClick={() => toggleSubcategory(sub.category, sub.name)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-xs font-bold",
                        active
                          ? "border-primary bg-primary/40 text-white shadow-glow"
                          : "border-border",
                      )}
                    >
                      {active ? "✓ " : ""}
                      {sub.name}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {selectedCategories.length > 1 && (
            <p className="mt-5 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-muted-foreground">
              {ar
                ? "عند اختيار عدة أقسام، تُستخدم جميع أقسامها الفرعية تلقائياً. اختر قسماً رئيسياً واحداً فقط إذا أردت تصفية أقسامه الفرعية."
                : "With multiple categories selected, all of their subcategories are included automatically. Select one category to refine its subcategories."}
            </p>
          )}

          <section className="mt-8 grid gap-7 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl">
                {ar ? "2. عدد الأسئلة" : "2. Question count"}
              </h2>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {QUESTION_COUNTS.map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCount(count)}
                    className={cn(
                      "rounded-2xl border px-2 py-3 font-display text-lg",
                      questionCount === count
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border",
                    )}
                  >
                    {count}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {checking
                  ? ar
                    ? "جارٍ فحص بنك الأسئلة..."
                    : "Checking question pool..."
                  : ar
                    ? `${available ?? 0} سؤال متاح`
                    : `${available ?? 0} questions available`}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl">{ar ? "3. الصعوبة" : "3. Difficulty"}</h2>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(["all", "standard", "challenge"] as Difficulty[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDifficulty(value)}
                    className={cn(
                      "rounded-2xl border px-2 py-3 text-sm font-bold",
                      difficulty === value
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border",
                    )}
                  >
                    {value === "all"
                      ? ar
                        ? "الكل"
                        : "All"
                      : value === "standard"
                        ? ar
                          ? "قياسي"
                          : "Standard"
                        : ar
                          ? "تحدي"
                          : "Challenge"}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-7 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl">
                {ar ? "4. تقدم الأسئلة" : "4. Question pacing"}
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {(["auto", "manual"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAdvanceMode(mode)}
                    className={cn(
                      "rounded-2xl border p-3 font-bold",
                      advanceMode === mode ? "border-primary bg-primary/20" : "border-border",
                    )}
                  >
                    {mode === "auto" ? (ar ? "تلقائي" : "Automatic") : ar ? "يدوي" : "Manual"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl">{ar ? "5. الفرق" : "5. Teams"}</h2>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[0, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setTeamCount(count)}
                    className={cn(
                      "rounded-2xl border p-3 font-bold",
                      teamCount === count ? "border-primary bg-primary/20" : "border-border",
                    )}
                  >
                    {count === 0 ? (ar ? "فردي" : "Solo") : count}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <button
            type="button"
            disabled={creating || checking || available === null || available < questionCount}
            onClick={() => void createChallenge()}
            className="press mt-9 w-full rounded-3xl bg-gradient-hero px-8 py-5 font-display text-2xl text-primary-foreground shadow-chunky disabled:cursor-not-allowed disabled:opacity-45"
          >
            {creating
              ? ar
                ? "جارٍ إنشاء الغرفة..."
                : "Creating room..."
              : ar
                ? "ابدأ التحدي وأنشئ الغرفة"
                : "Create challenge room"}
          </button>
        </div>
      </div>
    </main>
  );
}
