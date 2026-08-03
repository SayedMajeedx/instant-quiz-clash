import { cn } from "@/lib/utils";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

const AVATAR_CHARACTERS = [
  // 0: Cool Fox
  {
    id: "fox",
    bg: "from-amber-500 to-orange-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Ears */}
        <path d="M 22 42 L 8 12 L 40 28 Z" fill="#ea580c" />
        <path d="M 20 38 L 12 18 L 32 28 Z" fill="#ffedd5" />
        <path d="M 78 42 L 92 12 L 60 28 Z" fill="#ea580c" />
        <path d="M 80 38 L 88 18 L 68 28 Z" fill="#ffedd5" />
        {/* Head */}
        <circle cx="50" cy="55" r="36" fill="#f97316" />
        {/* Cheeks */}
        <polygon points="14,58 38,58 26,78" fill="#fff" />
        <polygon points="86,58 62,58 74,78" fill="#fff" />
        {/* Eyes */}
        <ellipse cx="38" cy="48" rx="6" ry="8" fill="#1e1b4b" />
        <ellipse cx="62" cy="48" rx="6" ry="8" fill="#1e1b4b" />
        <circle cx="36" cy="46" r="2.5" fill="#fff" />
        <circle cx="60" cy="46" r="2.5" fill="#fff" />
        {/* Snout & Nose */}
        <polygon points="50,56 42,66 58,66" fill="#fff" />
        <ellipse cx="50" cy="57" rx="5" ry="3.5" fill="#0f172a" />
        {/* Glasses */}
        <rect x="26" y="42" width="22" height="14" rx="4" fill="none" stroke="#1e293b" strokeWidth="3" />
        <rect x="52" y="42" width="22" height="14" rx="4" fill="none" stroke="#1e293b" strokeWidth="3" />
        <line x1="48" y1="49" x2="52" y2="49" stroke="#1e293b" strokeWidth="3" />
      </svg>
    ),
  },
  // 1: Cool Frog
  {
    id: "frog",
    bg: "from-emerald-400 to-green-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Eyes bumps */}
        <circle cx="32" cy="28" r="16" fill="#22c55e" />
        <circle cx="68" cy="28" r="16" fill="#22c55e" />
        <circle cx="32" cy="28" r="10" fill="#fff" />
        <circle cx="68" cy="28" r="10" fill="#fff" />
        <circle cx="34" cy="28" r="5" fill="#0f172a" />
        <circle cx="70" cy="28" r="5" fill="#0f172a" />
        {/* Head */}
        <ellipse cx="50" cy="60" rx="40" ry="30" fill="#22c55e" />
        {/* Cheeks */}
        <circle cx="24" cy="62" r="6" fill="#f43f5e" opacity="0.6" />
        <circle cx="76" cy="62" r="6" fill="#f43f5e" opacity="0.6" />
        {/* Big Sunglasses */}
        <path d="M 18 42 L 48 42 L 44 60 L 22 60 Z" fill="#0f172a" />
        <path d="M 52 42 L 82 42 L 78 60 L 56 60 Z" fill="#0f172a" />
        <line x1="48" y1="46" x2="52" y2="46" stroke="#0f172a" strokeWidth="4" />
        <line x1="22" y1="46" x2="42" y2="56" stroke="#38bdf8" strokeWidth="2.5" opacity="0.7" />
        <line x1="56" y1="46" x2="76" y2="56" stroke="#38bdf8" strokeWidth="2.5" opacity="0.7" />
        {/* Smile */}
        <path d="M 38 72 Q 50 82 62 72" fill="none" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  // 2: Party Panda
  {
    id: "panda",
    bg: "from-slate-700 to-slate-900",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Ears */}
        <circle cx="22" cy="26" r="14" fill="#0f172a" />
        <circle cx="78" cy="26" r="14" fill="#0f172a" />
        {/* Head */}
        <circle cx="50" cy="55" r="36" fill="#f8fafc" />
        {/* Eye Patches */}
        <ellipse cx="36" cy="50" rx="10" ry="13" fill="#0f172a" transform="rotate(-15 36 50)" />
        <ellipse cx="64" cy="50" rx="10" ry="13" fill="#0f172a" transform="rotate(15 64 50)" />
        <circle cx="36" cy="48" r="4" fill="#fff" />
        <circle cx="64" cy="48" r="4" fill="#fff" />
        {/* Nose & Mouth */}
        <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="#0f172a" />
        <path d="M 44 70 Q 50 78 56 70" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        {/* Party Hat */}
        <polygon points="50,8 36,36 64,36" fill="#ec4899" />
        <circle cx="50" cy="7" r="4" fill="#f59e0b" />
        <line x1="36" y1="36" x2="64" y2="36" stroke="#f59e0b" strokeWidth="3" />
      </svg>
    ),
  },
  // 3: King Lion
  {
    id: "lion",
    bg: "from-yellow-400 to-amber-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Mane */}
        <circle cx="50" cy="55" r="42" fill="#d97706" />
        {/* Head */}
        <circle cx="50" cy="55" r="30" fill="#fbbf24" />
        {/* Ears */}
        <circle cx="28" cy="35" r="8" fill="#fbbf24" />
        <circle cx="28" cy="35" r="4" fill="#f59e0b" />
        <circle cx="72" cy="35" r="8" fill="#fbbf24" />
        <circle cx="72" cy="35" r="4" fill="#f59e0b" />
        {/* Snout */}
        <ellipse cx="50" cy="62" rx="12" ry="9" fill="#fef3c7" />
        <polygon points="50,56 44,63 56,63" fill="#78350f" />
        {/* Eyes */}
        <circle cx="38" cy="48" r="5" fill="#1e1b4b" />
        <circle cx="62" cy="48" r="5" fill="#1e1b4b" />
        <circle cx="36" cy="46" r="2" fill="#fff" />
        <circle cx="60" cy="46" r="2" fill="#fff" />
        {/* Crown */}
        <path d="M 36 24 L 42 32 L 50 16 L 58 32 L 64 24 L 62 36 L 38 36 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="36" cy="22" r="2.5" fill="#ef4444" />
        <circle cx="50" cy="14" r="3" fill="#3b82f6" />
        <circle cx="64" cy="22" r="2.5" fill="#ef4444" />
      </svg>
    ),
  },
  // 4: Cyber Bot
  {
    id: "bot",
    bg: "from-cyan-500 to-blue-700",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Antenna */}
        <line x1="50" y1="26" x2="50" y2="12" stroke="#38bdf8" strokeWidth="4" />
        <circle cx="50" cy="10" r="6" fill="#f43f5e" />
        {/* Ears/Knobs */}
        <rect x="10" y="44" width="8" height="18" rx="3" fill="#64748b" />
        <rect x="82" y="44" width="8" height="18" rx="3" fill="#64748b" />
        {/* Head */}
        <rect x="16" y="26" width="68" height="54" rx="14" fill="#0284c7" />
        <rect x="22" y="34" width="56" height="28" rx="8" fill="#0f172a" />
        {/* Visor / Glowing Eyes */}
        <circle cx="36" cy="48" r="7" fill="#22d3ee" />
        <circle cx="64" cy="48" r="7" fill="#22d3ee" />
        <circle cx="38" cy="46" r="2.5" fill="#fff" />
        <circle cx="66" cy="46" r="2.5" fill="#fff" />
        {/* Mouth Bar */}
        <rect x="34" y="66" width="32" height="6" rx="3" fill="#38bdf8" />
      </svg>
    ),
  },
  // 5: Space Alien
  {
    id: "alien",
    bg: "from-lime-400 to-emerald-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Antennae */}
        <path d="M 32 30 Q 20 10 16 18" fill="none" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" />
        <circle cx="16" cy="18" r="5" fill="#a855f7" />
        <path d="M 68 30 Q 80 10 84 18" fill="none" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" />
        <circle cx="84" cy="18" r="5" fill="#a855f7" />
        {/* Head */}
        <ellipse cx="50" cy="55" rx="36" ry="32" fill="#84cc16" />
        {/* 3 Eyes */}
        <circle cx="30" cy="46" r="8" fill="#fff" />
        <circle cx="50" cy="42" r="10" fill="#fff" />
        <circle cx="70" cy="46" r="8" fill="#fff" />
        <circle cx="30" cy="46" r="4" fill="#a855f7" />
        <circle cx="50" cy="42" r="5" fill="#a855f7" />
        <circle cx="70" cy="46" r="4" fill="#a855f7" />
        {/* Smile with teeth */}
        <path d="M 34 68 Q 50 82 66 68 Z" fill="#0f172a" />
        <rect x="44" y="68" width="5" height="5" fill="#fff" />
        <rect x="51" y="68" width="5" height="5" fill="#fff" />
      </svg>
    ),
  },
  // 6: Magic Unicorn
  {
    id: "unicorn",
    bg: "from-pink-400 to-purple-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Mane */}
        <path d="M 20 20 Q 30 50 20 80 Q 40 60 30 20 Z" fill="#f43f5e" />
        <path d="M 80 20 Q 70 50 80 80 Q 60 60 70 20 Z" fill="#38bdf8" />
        {/* Horn */}
        <polygon points="50,6 43,30 57,30" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="45" y1="22" x2="55" y2="20" stroke="#f59e0b" strokeWidth="2" />
        <line x1="47" y1="14" x2="53" y2="12" stroke="#f59e0b" strokeWidth="2" />
        {/* Head */}
        <ellipse cx="50" cy="56" rx="32" ry="28" fill="#fff" />
        {/* Ears */}
        <polygon points="26,32 18,12 36,24" fill="#fff" stroke="#f43f5e" strokeWidth="2" />
        <polygon points="74,32 82,12 64,24" fill="#fff" stroke="#f43f5e" strokeWidth="2" />
        {/* Eyes (Anime big) */}
        <ellipse cx="38" cy="50" rx="5" ry="7" fill="#0f172a" />
        <ellipse cx="62" cy="50" rx="5" ry="7" fill="#0f172a" />
        <circle cx="36" cy="48" r="2" fill="#fff" />
        <circle cx="60" cy="48" r="2" fill="#fff" />
        {/* Muzzle */}
        <ellipse cx="50" cy="66" rx="14" ry="10" fill="#fbcfe8" />
        <circle cx="44" cy="65" r="2" fill="#f43f5e" />
        <circle cx="56" cy="65" r="2" fill="#f43f5e" />
      </svg>
    ),
  },
  // 7: Ninja Cat
  {
    id: "ninja_cat",
    bg: "from-zinc-700 to-zinc-950",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Cat Ears */}
        <polygon points="20,40 12,12 42,26" fill="#3f3f46" />
        <polygon points="24,36 18,18 38,26" fill="#f43f5e" />
        <polygon points="80,40 88,12 58,26" fill="#3f3f46" />
        <polygon points="76,36 82,18 62,26" fill="#f43f5e" />
        {/* Head */}
        <circle cx="50" cy="55" r="34" fill="#27272a" />
        {/* Red Ninja Headband */}
        <path d="M 16 42 Q 50 36 84 42 L 84 56 Q 50 50 16 56 Z" fill="#ef4444" />
        {/* Fierce Cat Eyes */}
        <ellipse cx="36" cy="49" rx="7" ry="5" fill="#f59e0b" transform="rotate(10 36 49)" />
        <ellipse cx="64" cy="49" rx="7" ry="5" fill="#f59e0b" transform="rotate(-10 64 49)" />
        <ellipse cx="36" cy="49" rx="2" ry="4" fill="#000" />
        <ellipse cx="64" cy="49" rx="2" ry="4" fill="#000" />
        {/* Whiskers */}
        <line x1="14" y1="62" x2="30" y2="64" stroke="#e4e4e7" strokeWidth="2" />
        <line x1="12" y1="68" x2="30" y2="67" stroke="#e4e4e7" strokeWidth="2" />
        <line x1="86" y1="62" x2="70" y2="64" stroke="#e4e4e7" strokeWidth="2" />
        <line x1="88" y1="68" x2="70" y2="67" stroke="#e4e4e7" strokeWidth="2" />
        {/* Nose */}
        <polygon points="50,62 46,58 54,58" fill="#f43f5e" />
      </svg>
    ),
  },
  // 8: Funky Monkey
  {
    id: "monkey",
    bg: "from-amber-600 to-amber-900",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Ears */}
        <circle cx="16" cy="50" r="14" fill="#b45309" />
        <circle cx="16" cy="50" r="8" fill="#fde68a" />
        <circle cx="84" cy="50" r="14" fill="#b45309" />
        <circle cx="84" cy="50" r="8" fill="#fde68a" />
        {/* Head */}
        <circle cx="50" cy="50" r="32" fill="#78350f" />
        {/* Face Patch */}
        <path d="M 32 40 Q 50 32 68 40 Q 72 65 50 72 Q 28 65 32 40 Z" fill="#fde68a" />
        {/* Eyes */}
        <circle cx="38" cy="45" r="5" fill="#0f172a" />
        <circle cx="62" cy="45" r="5" fill="#0f172a" />
        <circle cx="36" cy="43" r="2" fill="#fff" />
        <circle cx="60" cy="43" r="2" fill="#fff" />
        {/* Nose & Mouth */}
        <ellipse cx="50" cy="56" rx="4" ry="2.5" fill="#78350f" />
        <path d="M 38 62 Q 50 70 62 62" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
        {/* Headphones */}
        <path d="M 22 45 Q 50 14 78 45" fill="none" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
        <rect x="10" y="38" width="10" height="20" rx="4" fill="#eab308" />
        <rect x="80" y="38" width="10" height="20" rx="4" fill="#eab308" />
      </svg>
    ),
  },
  // 9: Gummy Bear
  {
    id: "bear",
    bg: "from-sky-400 to-indigo-600",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Ears */}
        <circle cx="24" cy="28" r="12" fill="#38bdf8" />
        <circle cx="24" cy="28" r="6" fill="#bae6fd" />
        <circle cx="76" cy="28" r="12" fill="#38bdf8" />
        <circle cx="76" cy="28" r="6" fill="#bae6fd" />
        {/* Head */}
        <circle cx="50" cy="55" r="34" fill="#38bdf8" />
        {/* Snout */}
        <ellipse cx="50" cy="62" rx="14" ry="10" fill="#bae6fd" />
        <ellipse cx="50" cy="58" rx="6" ry="4" fill="#0f172a" />
        {/* Eyes */}
        <circle cx="36" cy="48" r="5" fill="#0f172a" />
        <circle cx="64" cy="48" r="5" fill="#0f172a" />
        <circle cx="34" cy="46" r="2" fill="#fff" />
        <circle cx="62" cy="46" r="2" fill="#fff" />
        {/* Bow tie */}
        <polygon points="50,78 38,70 38,86" fill="#f43f5e" />
        <polygon points="50,78 62,70 62,86" fill="#f43f5e" />
        <circle cx="50" cy="78" r="3.5" fill="#fff" />
      </svg>
    ),
  },
  // 10: Rockstar Octopus
  {
    id: "octopus",
    bg: "from-rose-500 to-purple-700",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Tentacles */}
        <path d="M 18 78 Q 12 60 26 65 Q 22 84 32 78" fill="#fb7185" stroke="#be123c" strokeWidth="1.5" />
        <path d="M 34 78 Q 30 92 44 82 Q 42 66 48 76" fill="#fb7185" stroke="#be123c" strokeWidth="1.5" />
        <path d="M 52 76 Q 58 92 70 80 Q 66 66 64 78" fill="#fb7185" stroke="#be123c" strokeWidth="1.5" />
        <path d="M 68 78 Q 82 82 78 62 Q 88 74 80 78" fill="#fb7185" stroke="#be123c" strokeWidth="1.5" />
        {/* Head */}
        <circle cx="50" cy="46" r="32" fill="#f43f5e" />
        {/* Star Glasses */}
        <polygon points="36,36 39,42 45,43 41,48 42,54 36,51 30,54 31,48 27,43 33,42" fill="#f59e0b" />
        <polygon points="64,36 67,42 73,43 69,48 70,54 64,51 58,54 59,48 55,43 61,42" fill="#f59e0b" />
        <line x1="45" y1="44" x2="55" y2="44" stroke="#f59e0b" strokeWidth="3" />
        {/* Mouth */}
        <circle cx="50" cy="62" r="5" fill="#0f172a" />
      </svg>
    ),
  },
  // 11: Smart Owl
  {
    id: "owl",
    bg: "from-indigo-500 to-purple-800",
    render: () => (
      <svg viewBox="0 0 100 100" className="size-full">
        {/* Feather Tufts */}
        <polygon points="28,28 16,10 38,20" fill="#6366f1" />
        <polygon points="72,28 84,10 62,20" fill="#6366f1" />
        {/* Body */}
        <ellipse cx="50" cy="55" rx="34" ry="32" fill="#818cf8" />
        {/* Chest feather texture */}
        <ellipse cx="50" cy="66" rx="20" ry="16" fill="#e0e7ff" />
        {/* Giant Glasses & Eyes */}
        <circle cx="34" cy="46" r="14" fill="#fff" stroke="#1e1b4b" strokeWidth="3" />
        <circle cx="66" cy="46" r="14" fill="#fff" stroke="#1e1b4b" strokeWidth="3" />
        <line x1="48" y1="46" x2="52" y2="46" stroke="#1e1b4b" strokeWidth="4" />
        <circle cx="36" cy="46" r="6" fill="#1e1b4b" />
        <circle cx="64" cy="46" r="6" fill="#1e1b4b" />
        <circle cx="38" cy="44" r="2.5" fill="#fff" />
        <circle cx="66" cy="44" r="2.5" fill="#fff" />
        {/* Beak */}
        <polygon points="50,54 44,62 56,62" fill="#f59e0b" />
      </svg>
    ),
  },
];

/** Hash string deterministically to an index */
function stringToCharIndex(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % AVATAR_CHARACTERS.length;
}

export function PlayerAvatar({
  player,
  size = "md",
  className,
  crownRank,
}: {
  player: { id?: string; nickname?: string; avatar_color?: string };
  size?: AvatarSize;
  className?: string;
  crownRank?: number | null;
}) {
  const seed = player.id || player.nickname || player.avatar_color || "quizclash";
  const index = stringToCharIndex(seed);
  const character = AVATAR_CHARACTERS[index]!;

  const sizeClasses = {
    sm: "size-8 text-xs",
    md: "size-11 text-sm",
    lg: "size-16 text-base",
    xl: "size-24 text-xl",
  }[size];

  const crownBadges = {
    1: "👑",
    2: "🥈",
    3: "🥉",
  };

  return (
    <div className={cn("relative shrink-0 select-none", sizeClasses, className)}>
      <div
        className={cn(
          "relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br p-1 shadow-md transition-transform duration-300 hover:scale-105",
          character.bg,
        )}
        style={{
          boxShadow: player.avatar_color ? `0 4px 14px -2px ${player.avatar_color}80` : undefined,
        }}
      >
        {character.render()}
      </div>

      {crownRank && crownRank <= 3 ? (
        <span
          className={cn(
            "absolute -top-3 -right-2 z-10 grid place-items-center animate-bounce",
            size === "xl" ? "text-3xl -top-5 -right-3" : size === "lg" ? "text-2xl -top-4 -right-2" : "text-base",
          )}
        >
          {crownBadges[crownRank as 1 | 2 | 3]}
        </span>
      ) : null}
    </div>
  );
}
