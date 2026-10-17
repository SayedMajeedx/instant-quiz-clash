const OWNER_KEY = "quizclash:owner";

export function ownerId(): string {
  if (typeof window === "undefined") return "";
  let id = window.localStorage.getItem(OWNER_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(OWNER_KEY, id);
  }
  return id;
}

export function playerKey(code: string) {
  return `quizclash:player:${code.toUpperCase()}`;
}

function tokenKey(code: string) {
  return `quizclash:player-token:${code.toUpperCase()}`;
}

export type PlayerSession = { playerId: string; token: string };

/** The player's id plus the secret token join_room issued; both are needed to play. */
export function storedPlayerSession(code: string): PlayerSession | null {
  if (typeof window === "undefined") return null;
  const playerId = window.localStorage.getItem(playerKey(code));
  const token = window.localStorage.getItem(tokenKey(code));
  return playerId && token ? { playerId, token } : null;
}

export function storePlayerSession(code: string, session: PlayerSession) {
  window.localStorage.setItem(playerKey(code), session.playerId);
  window.localStorage.setItem(tokenKey(code), session.token);
}

export function clearStoredPlayer(code: string) {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(playerKey(code));
    window.localStorage.removeItem(tokenKey(code));
  }
}
