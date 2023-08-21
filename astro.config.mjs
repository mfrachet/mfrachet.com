import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  output: "server",
  adapter: vercel(),
});
