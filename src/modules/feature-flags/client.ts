import { createClient } from "@vercel/edge-config";

const edgeConfigStr = import.meta.env.EDGE_CONFIG;
export const edgeConfig = createClient(edgeConfigStr);
