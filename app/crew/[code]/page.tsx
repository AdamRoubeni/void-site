import type { Metadata } from "next";

import { OpenInVoid } from "@/components/OpenInVoid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { APP_STORE_URL } from "@/lib/appStore";

// THE CREW INVITE LANDING (2026-09-10). Every invite the app shares points
// here: https://voidbetfree.com/crew/ABC123. With Void installed, iOS opens
// the app straight to the join screen (the apple-app-site-association file
// in /public/.well-known claims /crew/*). Without it, this page: the code,
// "Open in Void", and the App Store.

const CODE = /^[A-HJ-NP-Z2-9]{6}$/;

// The unfurl a group chat renders under the sender's name. Deliberately
// says nothing about gambling: the invite is the friend's to explain, and
// the root layout's "Quit gambling" openGraph must not leak onto it.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Join a crew",
  description: "One week, one goal each, proof every day.",
  openGraph: {
    title: "Join a crew on Void",
    description: "One week, one goal each, proof every day.",
    type: "website",
    siteName: "Void",
  },
  twitter: {
    card: "summary",
    title: "Join a crew on Void",
    description: "One week, one goal each, proof every day.",
  },
};

export default function CrewInvite({ params }: { params: { code: string } }) {
  const code = params.code.toUpperCase();
  const valid = CODE.test(code);
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-content px-6 pt-20">
        <div className="pt-16 pb-24">
          <p className="text-sm uppercase tracking-[0.2em] text-dim">Crew invite</p>
          <h1 className="mt-4 text-3xl font-semibold">You&apos;re invited to a crew on Void.</h1>
          <p className="mt-4 leading-relaxed text-dim">One week, one goal each, proof every day.</p>
          {valid ? (
            <>
              <OpenInVoid code={code} />
              <p className="mt-10 text-sm text-dim">Your invite code</p>
              <p className="mt-2 font-mono text-4xl tracking-[0.3em]">{code}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`cashout://crew/join?code=${code}`}
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-black"
                >
                  Open in Void
                </a>
                <a
                  href={APP_STORE_URL}
                  className="rounded-full border border-line px-6 py-3 text-center font-semibold"
                >
                  Get Void on the App Store
                </a>
              </div>
              <p className="mt-6 text-sm text-dim">
                No app yet? Install Void, then paste the code on the Challenges tab under Join with a code.
              </p>
            </>
          ) : (
            <p className="mt-10 text-dim">That link isn&apos;t a crew invite. Ask your friend to share it again from the app.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
