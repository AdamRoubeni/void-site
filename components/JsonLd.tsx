import { APP_NAME, APP_SHORT_NAME, APP_STORE_URL, PLANS } from "@/lib/appStore";

const SITE = "https://voidbetfree.com";

/** Renders one JSON-LD block. Scripts are escaped so a "</script>" in a
 *  string could never break out of the tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: APP_SHORT_NAME,
  legalName: "Void App LLC",
  url: SITE,
  logo: `${SITE}/logo.png`,
  email: "support@voidbetfree.com",
  sameAs: ["https://www.tiktok.com/@voidabet", APP_STORE_URL],
};

/**
 * SoftwareApplication for the homepage ONLY, built from facts the page itself
 * shows: the name, the platform, the App Store link, the two subscription
 * prices printed under the closing call to action, the features in the
 * feature rows. No ratings, no review counts, no download numbers: nothing
 * the visitor cannot read on the page.
 */
export function HomeJsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE}/#app`,
    name: APP_NAME,
    alternateName: APP_SHORT_NAME,
    url: SITE,
    installUrl: APP_STORE_URL,
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    description:
      "An iPhone app for adults who want to stop or cut back on betting. It blocks the betting apps and sites you choose through Apple's Screen Time, estimates what you are no longer losing, and walks you through urges with a one-tap panic button.",
    featureList: [
      "Always-on blocking of chosen betting apps and sites through Apple's Screen Time",
      "Optional on-device betting-site filter",
      "Money Saved: an estimate from your own reported loss rate",
      "One-tap panic button with a ten-minute ride-it-out timer",
      "Nightly check-in",
      "Learn cards on how betting works, each figure sourced",
      "Crew challenges with friends",
    ],
    screenshot: ["/app/01.jpg", "/app/02.jpg", "/app/03.jpg", "/app/04.jpg"].map((p) => `${SITE}${p}`),
    isAccessibleForFree: false,
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "USD",
      category: "subscription",
      availability: "https://schema.org/InStock",
      url: APP_STORE_URL,
    })),
    author: { "@type": "Person", name: "Adam Roubeni" },
    publisher: { "@id": `${SITE}/#organization` },
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: APP_NAME,
    publisher: { "@id": `${SITE}/#organization` },
  };
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...ORGANIZATION }} />
      <JsonLd data={site} />
      <JsonLd data={app} />
    </>
  );
}

/** Article + breadcrumb + FAQ markup for a guide page. */
export function GuideJsonLd({
  path,
  title,
  description,
  published,
  modified,
  faq,
}: {
  path: string;
  title: string;
  description: string;
  published: string;
  modified: string;
  faq: { q: string; a: string }[];
}) {
  const url = `${SITE}${path}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${url}#article`,
          headline: title,
          description,
          url,
          mainEntityOfPage: url,
          datePublished: published,
          dateModified: modified,
          inLanguage: "en-US",
          author: { "@id": `${SITE}/#organization` },
          publisher: { "@id": `${SITE}/#organization` },
          about: { "@id": `${SITE}/#app` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Void", item: SITE },
            { "@type": "ListItem", position: 2, name: title, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
