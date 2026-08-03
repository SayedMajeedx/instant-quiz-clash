import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { supabase } from "@/integrations/supabase/client";
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
      toast.error("Room codes are 6 characters");
      return;
    }
    if (nick.length < 2) {
      toast.error("Pick a nickname with at least 2 characters");
      return;
    }
    setBusy(true);

    const { data: roomRow } = await supabase.from("rooms").select("*").eq("code", cleanCode).maybeSingle();
    const room = roomRow as unknown as Room | null;
    if (!room) {
      setBusy(false);
      toast.error("No game with that code");
      return;
    }
    if (room.status === "ended") {
      setBusy(false);
      toast.error("That game has already finished");
      return;
    }

    // Duplicate nicknames in the same room get an automatic suffix.
    let attempt = nick;
    let player: Player | null = null;
    for (let i = 0; i < 8 && !player; i += 1) {
      const { data, error } = await supabase
        .from("players")
        .insert({
          room_id: room.id,
          nickname: attempt,
          avatar_color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]!,
        })
        .select()
        .single();
      if (!error && data) player = data as unknown as Player;
      else attempt = `${nick}${i + 2}`;
    }

    if (!player) {
      setBusy(false);
      toast.error("Could not join, try another nickname");
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
        <Link to="/" className="mb-6 block text-center font-display text-3xl">
          Quiz<span className="text-gradient">Clash</span>
        </Link>

        {joined ? (
          <div className="animate-pop rounded-3xl border border-border bg-surface-gradient p-10 text-center shadow-glow">
            <p className="font-display text-5xl">🎉</p>
            <p className="mt-3 font-display text-3xl text-gradient">You&apos;re in!</p>
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-surface-gradient p-6 shadow-glow">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))}
              placeholder="CODE"
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
              placeholder="Nickname"
              className="mt-3 w-full rounded-2xl border border-border bg-background/60 px-4 py-4 text-center text-xl outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="button"
              disabled={busy}
              onClick={() => void join()}
              className="press mt-4 w-full rounded-2xl bg-gradient-hero px-6 py-4 font-display text-2xl text-primary-foreground shadow-chunky disabled:opacity-50"
            >
              {busy ? "Joining…" : "Enter"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
