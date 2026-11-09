import type { Metadata } from "next";
import "./globals.css";

import { APP_NAME, APP_SHORT_NAME } from "@/lib/appStore";

// One name everywhere: "VOID: Quit Gambling" is the App Store name, so it is
// the site's. Canonical URLs come from metadataBase + each page's
// alternates.canonical; the search-console tokens are env vars so the
// verification meta tags ship without a code change once Adam has them.
export const metadata: Metadata = {
  metadataBase: new URL("https://voidbetfree.com"),
  title: {
    default: "Void: Quit Gambling App — Block Betting Apps & Sites on iPhone",
    template: `%s — ${APP_NAME}`,
  },
  description:
    "Void is the quit gambling app for iPhone. It blocks sportsbook and casino apps and sites through Apple's Screen Time, shows what you are no longer losing, and gets you through urges with a one-tap panic button. Free 7-day trial on the App Store.",
  applicationName: APP_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${APP_NAME} — Quit gambling. You can still cash out.`,
    description:
      "Block the betting apps and sites you choose, see what you are no longer losing, and get through the minute that used to end in a deposit.",
    type: "website",
    siteName: APP_SHORT_NAME,
    url: "https://voidbetfree.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — Quit gambling. You can still cash out.`,
    description:
      "Block the betting apps and sites you choose, see what you are no longer losing, and get through the minute that used to end in a deposit.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  appLinks: {
    ios: { url: "https://apps.apple.com/app/id6795194848", app_store_id: "6795194848", app_name: APP_NAME },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
