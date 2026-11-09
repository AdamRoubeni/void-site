import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// The web route for account deletion (2026-10-23). Google Play requires a
// page that lets someone ask for deletion without reinstalling the app. What
// gets deleted must match "Deleting your account" on /privacy.

export const metadata: Metadata = {
  alternates: { canonical: "/delete-account" },
  title: "Delete your account",
  description:
    "How to delete your Void account and everything it stores, from the app or by email.",
};

export default function DeleteAccount() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 pt-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Delete your Void account
        </h1>

        <section className="pt-10">
          <h2 className="text-lg font-semibold">In the app</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-dim">
            <p>
              Open Void, go to Settings, then Account, and tap Delete Account.
              It takes effect immediately.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-lg font-semibold">Without the app</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-dim">
            <p>
              Email{" "}
              <a
                href="mailto:support@voidbetfree.com?subject=Delete%20my%20Void%20account"
                className="text-white underline underline-offset-4"
              >
                support@voidbetfree.com
              </a>{" "}
              from the address you signed in with (or tell us the Apple or
              Google account you used) with the subject &ldquo;Delete my Void
              account&rdquo;. We confirm it is your account, delete it, and
              reply within 7 days.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-lg font-semibold">What is deleted</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-dim">
            <p>
              Your profile, answers, money figures, check-ins, goals, crew
              posts, comments, proof photos and videos, Coach conversations,
              any sportsbook connection, and your profile photo. Rows are
              removed from our database, not hidden. If you created a crew, it
              passes to its longest-standing remaining member.
            </p>
            <p>
              Backups held by our hosting provider age out within 30 days.
              Your subscription is managed by Apple or Google Play: deleting
              your account does not cancel it, so cancel it in your App Store
              or Google Play subscriptions too.
            </p>
          </div>
        </section>
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
    </>
  );
}
