import type { Metadata } from "next";

import { KeyPage } from "@/components/KeyPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// THE KEY LANDING (2026-10-05). https://voidbetfree.com/key/<token> — the
// link a person sends to whoever holds the key to their blocked apps. It IS
// a universal link (the association file claims /key/*), so on the phone
// that SENT it — the one with Void installed — a tap lands in the app, which
// shows a closed door and never this page. The holder has no Void and gets
// the browser.

// The unfurl under the sender's name says nothing about gambling, and
// nothing about what the page holds — that is theirs to explain.
export const metadata: Metadata = {
  title: "You're holding a key",
  description: "Someone trusted you with this. Keep it.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "You're holding a key",
    description: "Someone trusted you with this. Keep it.",
    type: "website",
    siteName: "Void",
  },
  twitter: {
    card: "summary",
    title: "You're holding a key",
    description: "Someone trusted you with this. Keep it.",
  },
};

const TOKEN = /^[A-Za-z0-9_-]{20,64}$/;

export default function KeyLanding({ params }: { params: { token: string } }) {
  const token = params.token;
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-content px-6 pt-20">
        <div className="pt-16 pb-24">
          {TOKEN.test(token) ? (
            <KeyPage token={token} />
          ) : (
            <>
              <p className="text-sm uppercase tracking-[0.2em] text-dim">Void key</p>
              <h1 className="mt-4 text-3xl font-semibold">This link isn&apos;t a key.</h1>
              <p className="mt-4 leading-relaxed text-dim">Ask them to send it again from Void.</p>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
