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

export function storedPlayerId(code: string): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(playerKey(code));
}

export function storePlayerId(code: string, id: string) {
  window.localStorage.setItem(playerKey(code), id);
}

export function clearStoredPlayer(code: string) {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(playerKey(code));
  }
}
