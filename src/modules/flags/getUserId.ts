import type { AstroGlobal } from "astro";
import { hashId } from "./hashId";

export const getUserId = (Astro: AstroGlobal) => {
  const userAgent = Astro.request.headers.get("user-agent") || "Unknown";
  const ipAddress = Astro.clientAddress;

  const userId = hashId(`${userAgent}-${ipAddress}`);

  return userId;
};
