import { edgeConfig } from "./client";

export const get = (key: string) => edgeConfig.get(key);
