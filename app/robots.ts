import type { MetadataRoute } from "next";

/**
 * Every crawler is welcome on the public pages; the search engines and the
 * answer engines are named so nobody can wonder. Only the two per-person
 * pages are kept out: a crew invite is a friend's to pass on and a key page
 * carries a token that opens the app.
 */
const DISALLOW = ["/crew/", "/key/"];

export default function robots(): MetadataRoute.Robots {
  const named = [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Applebot",
    "DuckDuckBot",
  ];
  return {
    rules: [
      ...named.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
      { userAgent: "*", allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://voidbetfree.com/sitemap.xml",
    host: "https://voidbetfree.com",
  };
}
