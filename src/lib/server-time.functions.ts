import { createServerFn } from "@tanstack/react-start";

export const getServerTimeFn = createServerFn({ method: "GET" }).handler(async () => {
  return { now: Date.now() };
});
