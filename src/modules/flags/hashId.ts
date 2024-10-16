import crypto from "node:crypto";

export const hashId = (str: string) =>
  crypto.createHash("sha256").update(str).digest("hex");
