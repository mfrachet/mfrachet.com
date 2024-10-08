import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import rehypeSlug from "rehype-slug";

import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
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
  ],
  output: "server",
  adapter: vercel(),
  prefetch: true,
});
