import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { Logo } from "@/components/quiz/Logo";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { AVATAR_COLORS, type Player } from "@/lib/quizclash";
import { storePlayerSession } from "@/lib/session";

export const Route = createFileRoute("/join")({
  validateSearch: (search: Record<string, unknown>): { code?: string } =>
    typeof search["code"] === "string" ? { code: search["code"] } : {},
  head: () => ({
    meta: [
      { title: "Join a Game — QuizClash" },
      { name: "description", content: "Enter your room code and nickname to join a live QuizClash trivia game." },
      { property: "og:title", content: "Join a Game — QuizClash" },
      { property: "og:description", content: "No login, no download — type the code and play." },
    ],
  }),
  component: Join,
});

function Join() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const search = Route.useSearch();
  const [code, setCode] = useState((search.code ?? "").toUpperCase());
  const [nickname, setNickname] = useState("");
  const [busy, setBusy] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (search.code) setCode(search.code.toUpperCase());
  }, [search.code]);

  async function join() {
    const cleanCode = code.trim().toUpperCase();
    const nick = nickname.trim().slice(0, 18);
    if (cleanCode.length !== 6) {
      toast.error(t("join.errCodeLength"));
      return;
    }
    if (nick.length < 2) {
      toast.error(t("join.errNickLength"));
      return;
    }
    setBusy(true);

    // Joining goes through a server routine: it validates the room, de-duplicates
    // nicknames and creates the player row (clients can't write players directly).
    const { data, error } = await supabase.rpc("join_room", {
      p_code: cleanCode,
      p_nickname: nick,
      p_avatar_color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]!,
    });
    const player = (data as unknown as (Player & { session_token: string }) | null) ?? null;

    if (error || !player?.session_token) {
      setBusy(false);
      const message = error?.message ?? "";
      if (message.includes("room not found")) toast.error(t("join.errNoGame"));
      else if (message.includes("room ended")) toast.error(t("join.errFinished"));
      else toast.error(t("join.errJoin"));
      return;
    }


    storePlayerSession(cleanCode, { playerId: player.id, token: player.session_token });
    setJoined(true);
    window.setTimeout(() => {
      void navigate({ to: "/play/$code", params: { code: cleanCode } });
    }, 900);
  }

  return (
    <main className="grid min-h-[100dvh] place-items-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-between gap-3">
          <Link to="/">
            <Logo />
          </Link>
          <LanguageToggle />
        </div>

        {joined ? (
          <div className="animate-pop rounded-3xl bg-card p-10 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-answer-4 text-white">
              <Check className="size-9" strokeWidth={3} />
            </span>
            <p className="mt-4 font-display text-3xl">{t("join.youreIn")}</p>
          </div>
        ) : (
          <form
            className="rounded-3xl bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              void join();
            }}
          >
            <h1 className="font-display text-3xl">{t("join.title")}</h1>

            <label htmlFor="join-code" className="mt-6 block font-semibold">
              {t("join.codeLabel")}
            </label>
            <input
              id="join-code"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6))}
              placeholder="K7Q2M4"
              autoCapitalize="characters"
              autoComplete="off"
              spellCheck={false}
              inputMode="text"
              dir="ltr"
              aria-describedby="join-code-hint"
              className="mt-2 h-20 w-full rounded-2xl border-2 border-border bg-background text-center font-display text-4xl tracking-[0.3em] uppercase outline-none transition-colors duration-150 placeholder:text-muted-foreground/40 focus:border-sun"
            />
            <p id="join-code-hint" className="mt-2 text-sm text-muted-foreground">
              {t("join.codeHint")}
            </p>

            <label htmlFor="join-nick" className="mt-5 block font-semibold">
              {t("join.nickLabel")}
            </label>
            <input
              id="join-nick"
              value={nickname}
              onChange={(e) => setNickname(e.target.value.slice(0, 18))}
              placeholder={t("join.nickPlaceholder")}
              autoComplete="nickname"
              className="mt-2 h-14 w-full rounded-2xl border-2 border-border bg-background px-4 text-center text-xl outline-none transition-colors duration-150 focus:border-sun"
            />

            <button type="submit" disabled={busy} className="ledge ledge-yellow mt-6 w-full disabled:opacity-60">
              <span className="ledge-face h-16 font-display text-2xl">
                {busy ? t("join.joining") : t("join.enter")}
              </span>
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
