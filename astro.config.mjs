import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";

import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
      remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],

      rehypePlugins: [
        rehypeSlug,
        [
          rehypeToc,
          {
            headings: ["h1", "h2", "h3", "h4", "h5", "h6"],
            cssClasses: {
              toc: "toc-post",
              link: "toc-link",
            },
          },
        ],
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
