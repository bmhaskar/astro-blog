import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import emoji from "remark-emoji";
import a11yEmoji from "@fec/remark-a11y-emoji";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://bmhaskar.com",
  markdown: {
    drafts: true
  },
  integrations: [mdx({
    remarkPlugins: {
      extends: [emoji, a11yEmoji, remarkRehype, rehypeStringify]
    }
  }), sitemap(), image()],
  noExternal: ["open-props"]
});