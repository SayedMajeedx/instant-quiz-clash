import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { AVATAR_COLORS, type Player, type Room } from "@/lib/quizclash";
import { storePlayerId } from "@/lib/session";

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
    const player = (data as unknown as Player | null) ?? null;

    if (error || !player) {
      setBusy(false);
      const message = error?.message ?? "";
      if (message.includes("room not found")) toast.error(t("join.errNoGame"));
      else if (message.includes("room ended")) toast.error(t("join.errFinished"));
      else toast.error(t("join.errJoin"));
      return;
    }


    storePlayerId(cleanCode, player.id);
    setJoined(true);
    window.setTimeout(() => {
      void navigate({ to: "/play/$code", params: { code: cleanCode } });
    }, 900);
  }

  return (
    <main className="relative grid min-h-screen place-items-center px-5">
      <AnimatedBg dense />
      <div className="w-full max-w-sm">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link to="/" className="font-display text-3xl">
            {t("brand.quiz")}<span className="text-gradient">{t("brand.clash")}</span>
          </Link>
          <LanguageToggle />
        </div>

        {joined ? (
          <div className="animate-pop rounded-3xl border border-border bg-surface-gradient p-10 text-center shadow-glow">
            <p className="font-display text-5xl">🎉</p>
            <p className="mt-3 font-display text-3xl text-gradient">{t("join.youreIn")}</p>
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-surface-gradient p-6 shadow-glow">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))}
              placeholder={t("join.codePlaceholder")}
              autoCapitalize="characters"
              inputMode="text"
              className="w-full rounded-2xl border border-border bg-background/60 px-4 py-4 text-center font-display text-3xl tracking-[0.3em] outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value.slice(0, 18))}
              onKeyDown={(e) => {
                if (e.key === "Enter") void join();
              }}
              placeholder={t("join.nickPlaceholder")}
              className="mt-3 w-full rounded-2xl border border-border bg-background/60 px-4 py-4 text-center text-xl outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="button"
              disabled={busy}
              onClick={() => void join()}
              className="press mt-4 w-full rounded-2xl bg-gradient-hero px-6 py-4 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-50"
            >
              {busy ? t("join.joining") : t("join.enter")}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
