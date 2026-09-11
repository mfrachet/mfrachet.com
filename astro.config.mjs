import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import { unified } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";

import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      processor: unified({
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "prepend",
              content: {
                type: "text",
                value: "#",
              },
              headingProperties: {
                className: ["anchor"],
              },
              properties: {
                className: ["anchor-link"],
              },
            },
          ],
        ],
      }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
  prefetch: true,
});
