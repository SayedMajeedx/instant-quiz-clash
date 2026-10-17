import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, MailCheck } from "lucide-react";
import { AppHeader } from "@/components/quiz/AppHeader";
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

  const signingIn = mode === "signin";

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-md flex-1 px-5 pb-16 pt-6">
        <h1 className="font-display text-4xl">{signingIn ? t("auth.signInTitle") : t("auth.signUpTitle")}</h1>
        <p className="mt-2 text-muted-foreground">{t("auth.sub")}</p>

        {sent ? (
          <div className="mt-8 animate-rise rounded-2xl bg-card p-6 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-xl bg-answer-4 text-white">
              <MailCheck className="size-6" aria-hidden />
            </span>
            <p className="mt-4 font-display text-2xl">{t("auth.checkEmail")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("auth.checkEmailBody")}</p>
            <p className="mt-4 font-semibold" dir="ltr">
              {email}
            </p>
          </div>
        ) : (
          <>
            <button type="button" onClick={() => void google()} className="ledge ledge-panel mt-8 w-full">
              <span className="ledge-face h-14 font-semibold">
                <GoogleMark />
                {t("auth.google")}
              </span>
            </button>

            <div className="my-6 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              {t("auth.or")}
              <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={(e) => void submit(e)} className="space-y-4">
              {!signingIn ? (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">{t("auth.name")}</span>
                  <input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    autoComplete="nickname"
                    className="field"
                  />
                </label>
              ) : null}
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">{t("auth.email")}</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field text-start"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">{t("auth.password")}</span>
                <input
                  type="password"
                  required
                  minLength={6}
                  dir="ltr"
                  autoComplete={signingIn ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field text-start"
                />
              </label>
              <button type="submit" disabled={busy} className="ledge ledge-blue mt-2 w-full disabled:opacity-60">
                <span className="ledge-face h-14 font-display text-xl">
                  {busy ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
                  {busy ? t("auth.working") : signingIn ? t("auth.signIn") : t("auth.signUp")}
                </span>
              </button>
            </form>

            <button
              type="button"
              onClick={() => setMode(signingIn ? "signup" : "signin")}
              className="mt-6 w-full rounded-lg py-2 text-center font-semibold text-sun hover:underline"
            >
              {signingIn ? t("auth.toSignUp") : t("auth.toSignIn")}
            </button>
          </>
        )}
      </main>
    </div>
  );
}

/** Google's "G" in its own colours; the provider's mark is how people recognise the button. */
function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7Z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.7V6.6h-4a12 12 0 0 0 0 10.8l4-3Z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.6l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z" />
    </svg>
  );
}
