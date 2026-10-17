import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";
import { AppHeader } from "@/components/quiz/AppHeader";
import { Segmented } from "@/components/quiz/Segmented";
import { SiteFooter } from "@/components/quiz/SiteFooter";
import { SubscriptionPaywallModal } from "@/components/subscription/SubscriptionPaywallModal";
import { isDailyLimitError } from "@/hooks/useSubscription";
import { supabase } from "@/integrations/supabase/client";
import { getAllAdminQuizzes } from "@/lib/admin-data-helper";
import { selectCustomQuestions } from "@/lib/custom-quiz";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { getCategoryMark } from "@/lib/browse-helpers";

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
  const { t, lang } = useI18n();
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
  const [showPaywall, setShowPaywall] = useState(false);

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

    if (isDailyLimitError(error)) {
      setShowPaywall(true);
      return;
    }
    if (error || !data?.room_code) {
      toast.error(
        error?.message || (ar ? "تعذر إنشاء غرفة التحدي" : "Could not create challenge room"),
      );
      return;
    }
    void navigate({ to: "/host/$code", params: { code: data.room_code } });
  }

  const allSelected = selectedCategories.length === categories.length && categories.length > 0;
  const enough = available !== null && available >= questionCount;

  return (
    <div className="flex min-h-screen flex-col">
      <SubscriptionPaywallModal open={showPaywall} onOpenChange={setShowPaywall} reason="daily_limit_reached" />
      <AppHeader>
        <Link to="/quizzes" className="press rounded-xl bg-secondary px-4 py-2 text-sm font-semibold">
          {t("nav.myQuizzes")}
        </Link>
      </AppHeader>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 pb-12">
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">{ar ? "تحدي مخصص" : "Custom challenge"}</h1>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          {ar
            ? "اختر الأقسام، وسنسحب أسئلة عشوائية منها في غرفة برمز انضمام عادي. لكل سؤال 30 ثانية."
            : "Pick the categories and we'll draw random questions from them into a room with the usual join code. Every question gets 30 seconds."}
        </p>

        <Step n={1} title={ar ? "الأقسام" : "Categories"}>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                setSelectedCategories(allSelected ? [] : categories.map((category) => category.name));
                setSelectedSubcategories([]);
              }}
              className="text-sm font-semibold text-sun hover:underline"
            >
              {allSelected ? (ar ? "إلغاء تحديد الكل" : "Clear all") : ar ? "تحديد الكل" : "Select all"}
            </button>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {loadingCategories
              ? Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="h-[72px] animate-pulse rounded-2xl bg-card" aria-hidden />
                ))
              : categories.map((category) => {
                  const active = selectedCategories.includes(category.name);
                  const mark = getCategoryMark(category.name);
                  const MarkIcon = mark.Icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleCategory(category.name)}
                      className={cn(
                        "press flex items-center gap-3 rounded-2xl p-3 text-start ring-2 transition-[box-shadow,background-color] duration-150",
                        active ? "bg-secondary ring-sun" : "bg-card ring-transparent",
                      )}
                    >
                      <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${mark.bg} ${mark.fg}`}>
                        <MarkIcon className="size-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 truncate font-semibold">{category.name}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-md border-2 transition-colors duration-150",
                          active ? "border-sun bg-sun text-on-sun" : "border-border",
                        )}
                      >
                        {active ? <Check className="size-4" strokeWidth={3} /> : null}
                      </span>
                    </button>
                  );
                })}
          </div>

          {visibleSubcategories.length > 0 ? (
            <div className="mt-6 animate-rise">
              <h3 className="font-semibold">{ar ? "الأقسام الفرعية (اختياري)" : "Subcategories (optional)"}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {ar
                  ? "اتركها بدون تحديد لاستخدام كل أسئلة القسم."
                  : "Leave them all off to use every question in the category."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {visibleSubcategories.map((sub) => {
                  const active = selectedSubcategories.includes(subcategoryKey(sub.category, sub.name));
                  return (
                    <button
                      key={`${sub.category}-${sub.id}`}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleSubcategory(sub.category, sub.name)}
                      className={cn(
                        "press flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-150",
                        active ? "bg-sun text-on-sun" : "bg-secondary",
                      )}
                    >
                      {active ? <Check className="size-4" strokeWidth={3} aria-hidden /> : null}
                      {sub.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {selectedCategories.length > 1 ? (
            <p className="mt-5 rounded-2xl bg-card px-4 py-3 text-sm text-muted-foreground">
              {ar
                ? "مع اختيار أكثر من قسم تُستخدم كل أقسامها الفرعية. اختر قسماً واحداً لتصفية أقسامه الفرعية."
                : "With more than one category selected, all their subcategories are used. Pick one category to narrow its subcategories."}
            </p>
          ) : null}
        </Step>

        <div className="grid gap-x-8 md:grid-cols-2">
          <Step n={2} title={ar ? "عدد الأسئلة" : "Questions"}>
            <Segmented
              label={ar ? "عدد الأسئلة" : "Questions"}
              size="lg"
              className="flex-nowrap"
              value={questionCount}
              options={QUESTION_COUNTS.map((count) => ({ value: count, label: String(count) }))}
              onChange={setQuestionCount}
            />
          </Step>
          <Step n={3} title={ar ? "الصعوبة" : "Difficulty"}>
            <Segmented
              label={ar ? "الصعوبة" : "Difficulty"}
              size="lg"
              className="flex-nowrap"
              value={difficulty}
              options={[
                { value: "all", label: ar ? "الكل" : "All" },
                { value: "standard", label: ar ? "قياسي" : "Standard" },
                { value: "challenge", label: ar ? "تحدي" : "Challenge" },
              ]}
              onChange={setDifficulty}
            />
          </Step>
          <Step n={4} title={ar ? "تقدّم الأسئلة" : "Pacing"}>
            <Segmented
              label={ar ? "تقدّم الأسئلة" : "Pacing"}
              size="lg"
              className="flex-nowrap"
              value={advanceMode}
              options={[
                { value: "auto", label: ar ? "تلقائي" : "Automatic" },
                { value: "manual", label: ar ? "يدوي" : "Manual" },
              ]}
              onChange={setAdvanceMode}
            />
          </Step>
          <Step n={5} title={ar ? "الفرق" : "Teams"}>
            <Segmented
              label={ar ? "الفرق" : "Teams"}
              size="lg"
              className="flex-nowrap"
              value={teamCount}
              options={[0, 2, 3, 4].map((count) => ({
                value: count,
                label: count === 0 ? (ar ? "فردي" : "Solo") : String(count),
              }))}
              onChange={setTeamCount}
            />
          </Step>
        </div>
      </main>

      <div className="sticky bottom-0 z-10 border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center gap-x-4 gap-y-2 px-5 pb-4 pt-3">
          <p role="status" className="min-w-0 flex-1 text-sm">
            {checking ? (
              <span className="text-muted-foreground">{ar ? "جارٍ فحص بنك الأسئلة…" : "Checking the question pool…"}</span>
            ) : available === null ? null : enough ? (
              <span className="text-muted-foreground">
                {ar ? `${available} سؤال متاح` : `${available} questions available`}
              </span>
            ) : (
              <span className="font-semibold text-sun">
                {ar
                  ? `${available} سؤال فقط متاح. اختر أقساماً أكثر أو عدداً أقل.`
                  : `Only ${available} questions available. Add categories or pick fewer.`}
              </span>
            )}
          </p>
          <button
            type="button"
            disabled={creating || checking || !enough}
            onClick={() => void createChallenge()}
            className="ledge ledge-green w-full disabled:opacity-50 sm:w-auto"
          >
            <span className="ledge-face h-14 px-8 font-display text-xl">
              {creating ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
              {creating ? (ar ? "جارٍ إنشاء الغرفة…" : "Creating room…") : ar ? "أنشئ الغرفة" : "Create room"}
            </span>
          </button>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2.5 font-display text-2xl">
        <span className="grid size-8 place-items-center rounded-lg bg-secondary text-base tabular-nums">{n}</span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
