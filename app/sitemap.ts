import type { MetadataRoute } from "next";

import { GUIDES } from "@/components/GuideLinks";

const SITE = "https://voidbetfree.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified: "2026-10-20", changeFrequency: "weekly", priority: 1 },
    ...GUIDES.map((g) => ({
      url: `${SITE}${g.href}`,
      lastModified: "2026-10-20",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${SITE}/support`, lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/privacy`, lastModified: "2026-10-23", changeFrequency: "yearly", priority: 0.3 },
  ];
}
