import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in or Register — QuizClash" },
      {
        name: "description",
        content: "Create a QuizClash account to save your trivia quizzes and host them from any device.",
      },
      { property: "og:title", content: "Sign in or Register — QuizClash" },
      { property: "og:description", content: "Save your quizzes to your account and host them anywhere." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) void navigate({ to: "/quizzes", replace: true });
    });
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) void navigate({ to: "/quizzes", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: displayName || email.split("@")[0] },
          },
        });
        if (error) throw error;
        if (!data.session) {
          setSent(true);
          toast.success(t("auth.checkEmail"));
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("auth.error"));
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    try {
      await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("auth.error"));
    }
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <div className="mx-auto flex max-w-md flex-col px-5 py-10">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            {t("nav.backHome")}
          </Link>
          <LanguageToggle />
        </div>

        <h1 className="mt-8 font-display text-4xl">
          {mode === "signin" ? t("auth.signInTitle") : t("auth.signUpTitle")}
        </h1>
        <p className="mt-2 text-muted-foreground">{t("auth.sub")}</p>

        {sent ? (
          <div className="mt-8 rounded-3xl border border-border bg-surface-gradient p-6 text-center">
            <p className="font-display text-2xl">{t("auth.checkEmail")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("auth.checkEmailBody")}</p>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => void google()}
              className="press mt-8 w-full rounded-2xl border border-border bg-surface-gradient px-5 py-4 font-display text-lg"
            >
              {t("auth.google")}
            </button>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              {t("auth.or")}
              <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={(e) => void submit(e)} className="space-y-3">
              {mode === "signup" ? (
                <input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder={t("auth.name")}
                  className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
                />
              ) : null}
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("auth.email")}
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
              />
              <input
                type="password"
                required
                minLength={6}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("auth.password")}
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={busy}
                className="press w-full rounded-3xl bg-gradient-hero px-6 py-4 font-display text-xl text-primary-foreground shadow-chunky disabled:opacity-50"
              >
                {busy ? t("auth.working") : mode === "signin" ? t("auth.signIn") : t("auth.signUp")}
              </button>
            </form>

            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="mt-6 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              {mode === "signin" ? t("auth.toSignUp") : t("auth.toSignIn")}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
