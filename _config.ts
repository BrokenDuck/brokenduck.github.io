import lume from "lume/mod.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import inline from "lume/plugins/inline.ts";
import purgecss from "lume/plugins/purgecss.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import favicon from "lume/plugins/favicon.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import date from "lume/plugins/date.ts";
import svgo from "lume/plugins/svgo.ts";
import { markdownIt } from "lume/deps/markdown_it.ts";

// Markdown-it plugins
// deno-lint-ignore no-import-prefix no-unversioned-import
import anchor from "npm:markdown-it-anchor";
// deno-lint-ignore no-import-prefix no-unversioned-import
import footnote from "npm:markdown-it-footnote";
// deno-lint-ignore no-import-prefix no-unversioned-import
import { full as emoji } from "npm:markdown-it-emoji";

// Type imports
import type Token from "./types/token.d.mts";
import type { Options } from "./types/options.d.mts";
import type Renderer from "./types/renderer.d.mts";

const site = lume({ location: new URL("https://jonat.me") });

site.ignore("README.md");

/* Markdown-it config */

site.hooks.addMarkdownItPlugin(anchor, { level: 2 });
site.hooks.addMarkdownItPlugin(footnote);
site.hooks.addMarkdownItPlugin(emoji);

// Change markdown image rendering for the blog
const md = markdownIt().use(emoji);
site.hooks.addMarkdownItRule(
  "image",
  (
    tokens: Token[],
    idx: number,
    options: Options,
    env: unknown,
    _self: Renderer,
  ) => {
    const token = tokens[idx];

    // Get attributes
    const src = token.attrGet("src");
    const alt = token.content;
    const title = token.attrGet("title");

    const caption = alt ? md.renderInline(alt, options, env) : "";

    return `
      <figure class="article-img">
        <img src="${src}" alt="${alt}" ${
      title ? `title="${title}"` : ""
    } loading="lazy">
        ${
      caption
        ? `<div class="figure-controls"><figcaption>${caption}</figcaption></div>`
        : ""
    }
      </figure>
  `;
  },
);

/* Styling config */

site.use(date());
site.add("styles");

/* Optimization plugins */

site.use(minifyHTML());
site.use(lightningCSS());
site.use(purgecss());

/* Image config */

site.use(picture());
site.use(transformImages());
site.use(svgo());

/*  More optimization plugins */

site.use(inline());

/* Website config */

site.use(favicon());
site.use(robots({
  disallow: [
    "AddSearchBot",
    "AI2Bot",
    "Ai2Bot-Dolma",
    "aiHitBot",
    "Amazonbot",
    "Andibot",
    "anthropic-ai",
    "Applebot",
    "Applebot-Extended",
    "Awario",
    "bedrockbot",
    "bigsur.ai",
    "Brightbot 1.0",
    "Bytespider",
    "CCBot",
    "ChatGPT Agent",
    "ChatGPT-User",
    "Claude-SearchBot",
    "Claude-User",
    "Claude-Web",
    "ClaudeBot",
    "CloudVertexBot",
    "cohere-ai",
    "cohere-training-data-crawler",
    "Cotoyogi",
    "Crawlspace",
    "Datenbank Crawler",
    "Devin",
    "Diffbot",
    "DuckAssistBot",
    "Echobot Bot",
    "EchoboxBot",
    "FacebookBot",
    "facebookexternalhit",
    "Factset_spyderbot",
    "FirecrawlAgent",
    "FriendlyCrawler",
    "Gemini-Deep-Research",
    "Google-CloudVertexBot",
    "Google-Extended",
    "Google-Firebase",
    "GoogleAgent-Mariner",
    "GoogleOther",
    "GoogleOther-Image",
    "GoogleOther-Video",
    "GPTBot",
    "iaskspider/2.0",
    "ICC-Crawler",
    "ImagesiftBot",
    "img2dataset",
    "ISSCyberRiskCrawler",
    "Kangaroo Bot",
    "LinerBot",
    "meta-externalagent",
    "Meta-ExternalAgent",
    "meta-externalfetcher",
    "meta-webindexer",
    "Meta-ExternalFetcher",
    "MistralAI-User",
    "MistralAI-User/1.0",
    "MyCentralAIScraperBot",
    "netEstate Imprint Crawler",
    "NovaAct",
    "OAI-SearchBot",
    "omgili",
    "omgilibot",
    "OpenAI",
    "Operator",
    "PanguBot",
    "Panscient",
    "panscient.com",
    "Perplexity-User",
    "PerplexityBot",
    "PetalBot",
    "PhindBot",
    "Poseidon Research Crawler",
    "QualifiedBot",
    "QuillBot",
    "quillbot.com",
    "SBIntuitionsBot",
    "Scrapy",
    "SemrushBot-OCOB",
    "SemrushBot-SWA",
    "ShapBot",
    "Sidetrade indexer bot",
    "Thinkbot",
    "TikTokSpider",
    "Timpibot",
    "VelenPublicWebCrawler",
    "WARDBot",
    "Webzio-Extended",
    "wpbot",
    "YaK",
    "YandexAdditional",
    "YandexAdditionalBot",
    "YouBot",
  ],
}));
site.use(sitemap());

/* Add other pages */

site.add("index.html");
site.add("static", "/");

export default site;
