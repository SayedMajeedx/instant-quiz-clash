import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
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

const QUESTION_COUNTS = [20, 40, 50, 100] as const;

function CustomChallengeSetup() {
  const navigate = useNavigate();
  const { lang } = useI18n();
  const [categories, setCategories] = useState<CategoryOption[]>([]);
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
      const [managedResult, quizResult] = await Promise.all([
        (supabase.from("categories") as any)
          .select("id, name, subcategories(id, name)")
          .order("name"),
        (supabase.from("quizzes") as any)
          .select("id, category, subcategory, quiz_kind")
          .eq("is_public", true),
      ]);
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
      void (async () => {
        setChecking(true);
        const { data, error } = await (supabase as any).rpc("custom_quiz_pool_size", {
          p_categories: selectedCategories,
          p_subcategories: selectedSubcategories,
          p_difficulty: difficulty,
        });
        setAvailable(error ? null : Number(data ?? 0));
        setChecking(false);
      })();
    }, 250);
    return () => window.clearTimeout(timer);
  }, [selectedCategories, selectedSubcategories, difficulty]);

  const visibleSubcategories = useMemo(
    () =>
      categories
        .filter((category) => selectedCategories.includes(category.name))
        .flatMap((category) =>
          category.subcategories.map((sub) => ({ ...sub, category: category.name })),
        ),
    [categories, selectedCategories],
  );

  function toggleCategory(name: string) {
    setSelectedCategories((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
    const category = categories.find((item) => item.name === name);
    if (category && selectedCategories.includes(name)) {
      const removed = new Set(category.subcategories.map((sub) => sub.name));
      setSelectedSubcategories((current) => current.filter((item) => !removed.has(item)));
    }
  }

  function toggleSubcategory(name: string) {
    setSelectedSubcategories((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  }

  async function createChallenge() {
    if (available === null || available < questionCount) return;
    setCreating(true);
    const { data, error } = await (supabase as any).rpc("generate_custom_quiz_room", {
      p_categories: selectedCategories,
      p_subcategories: selectedSubcategories,
      p_question_count: questionCount,
      p_difficulty: difficulty,
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
                          ? "border-primary bg-primary/15 text-primary"
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
                  const active = selectedSubcategories.includes(sub.name);
                  return (
                    <button
                      key={`${sub.category}-${sub.id}`}
                      type="button"
                      onClick={() => toggleSubcategory(sub.name)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-xs font-bold",
                        active
                          ? "border-secondary bg-secondary/20 text-secondary"
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
                    disabled={available !== null && available < count}
                    onClick={() => setQuestionCount(count)}
                    className={cn(
                      "rounded-2xl border px-2 py-3 font-display text-lg disabled:cursor-not-allowed disabled:opacity-35",
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
