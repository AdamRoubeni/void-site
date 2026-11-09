import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// THE PRIVACY POLICY SAYS WHAT THE APP DOES (2026-09-14). The previous page
// was written for the July build: it promised "that's the list" over five
// items, described an SMS accountability-partner feature that was deleted on
// 2026-08-02, and gave a 30-day deletion window against an in-app promise of
// "immediately". Every paragraph below was rewritten from the code — the
// complete_onboarding payload, the table list, the edge functions and the
// third parties they call. If the app changes what it stores, this page
// changes in the same commit.

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy",
  description:
    "How Void handles your data: what stays on your phone, what your account stores, who processes it, and how to delete all of it.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-dim">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-content px-6 pt-20">
        <div className="pt-16">
          <h1 className="text-3xl font-semibold">Privacy</h1>
          <p className="mt-3 text-sm text-faint">Last updated: 14 September 2026</p>
          <p className="mt-6 leading-relaxed text-dim">
            Void exists to help you quit gambling. The details of that — what
            you&apos;ve lost, when you struggle, who you&apos;ve asked for help
            — are among the most sensitive things an app can hold. This page
            says plainly what stays on your phone, what your account stores,
            who else touches it, and how to make all of it go away.
          </p>
          <p className="leading-relaxed text-dim">
            Void is for adults. The app asks you to confirm you are 18 or
            older, and we do not knowingly collect anything from anyone
            younger.
          </p>
        </div>

        <Section title="Before you have an account">
          <p>
            Everything you answer in onboarding — what you bet on, how often,
            how much you&apos;ve lost, what you owe — is saved only on your
            phone. Nothing is sent anywhere until you subscribe and the app
            creates your account. If you stop at the paywall, we never
            receive any of it.
          </p>
        </Section>

        <Section title="What your account stores">
          <p>
            Once you have an account, the app syncs these so your history
            survives a new phone:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Your onboarding answers: first name, quit date, goal, what and
              where you bet, how often, typical stake, time spent, lifetime
              losses, current debt and what kind, whether you have chased
              losses or borrowed, what gambling has cost you beyond money,
              your triggers, what you want back, the goal you typed in your
              own words, and your self-assessment score.
            </li>
            <li>
              The signature you drew on the commitment screen, as line data,
              so it can be shown back to you.
            </li>
            <li>
              What you log: urges and how they ended, bets you record and
              their amounts, daily check-ins, ride-it-out sessions, access
              requests, blocking check-ins, and the reads and cards you
              finish.
            </li>
            <li>
              Community: your handle, your posts, comments, likes, reports
              and blocks. Posts and comments are visible to other members
              under your handle only — never your name or photo.
            </li>
            <li>
              Crews: your first name, your profile photo if you add one, the
              challenge you set, and the proof photos or videos you submit.
              These are visible to the members of that crew and to nobody
              else. Your profile photo is served from a public address that
              only people with the link can reach; deleting your account
              deletes the file.
            </li>
            <li>
              If you connect a sportsbook account (an optional feature): the
              graded bets that account reports — stake, result, payout and
              market — and an identifier for the connection. Void never sees
              or stores a sportsbook password.
            </li>
            <li>
              Your device&apos;s push-notification token, so a crew&apos;s
              pings can reach it, and the sign-in identity you attach (Apple,
              Google or email).
            </li>
          </ul>
          <p>
            Void uses two measurement tools, described under &ldquo;Who
            processes it for us&rdquo;: PostHog for product analytics and the
            Meta SDK to measure whether our own ads led to installs and
            subscriptions. Void shows no ads. We do not sell or rent any of
            this, to anyone, ever.
          </p>
        </Section>

        <Section title="Who processes it for us">
          <p>
            A few companies run parts of the service under our instructions.
            Each receives only what its job needs.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-white">Supabase</span> hosts the database
              and sign-in, and stores your files.
            </li>
            <li>
              <span className="text-white">Anthropic</span> screens every
              community post and comment for the rules and for signs of
              crisis, generates the suggested actions for the goal you
              typed, and writes the Coach&apos;s replies. The text of the
              post, your goal, or your Coach conversation is sent for that
              purpose only. It is not used to train models.
            </li>
            <li>
              <span className="text-white">RevenueCat</span>,{" "}
              <span className="text-white">Apple</span> and{" "}
              <span className="text-white">Google Play</span> handle your
              subscription. Apple or Google has your payment details; we
              never do.
            </li>
            <li>
              <span className="text-white">PostHog</span> receives named
              in-app events (for example &ldquo;finished onboarding&rdquo;),
              screen views, your Void account identifier and a device
              identifier, and records masked session replays: every text
              field, image and typed post is blanked out before anything
              leaves the phone. We use it to see where the app confuses
              people and to fix crashes.
            </li>
            <li>
              <span className="text-white">Meta</span> receives app-install,
              app-open and subscription events from the Meta SDK, with a
              device identifier, so we can tell whether an ad we ran on
              Facebook or Instagram led to an install or a subscription. Void
              does not collect your advertising ID for Meta, and Meta never
              receives your answers, your money figures, your posts or
              anything you type.
            </li>
            <li>
              <span className="text-white">SharpSports</span> handles
              sportsbook connections if you choose to connect one. It signs
              you in to the book on its own page and reports graded bets
              back; it receives your Void account identifier and nothing else
              about you.
            </li>
            <li>
              <span className="text-white">Expo</span> delivers push
              notifications to your device.
            </li>
            <li>
              <span className="text-white">Cloudflare and Quad9</span> answer
              the web-address lookups that Void&apos;s site block lets
              through, the way your network&apos;s own resolver did before.
              The block itself runs on your phone: a gambling site is refused
              there and never reaches them, and nothing about what you look up
              reaches Void.
            </li>
          </ul>
        </Section>

        <Section title="What never leaves your phone">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The apps and websites you block. iOS hands them to Void as
              opaque tokens the app cannot read, and they are never uploaded.
              We could not see which apps you blocked even if we wanted to.
            </li>
            <li>
              The Screen Time passcode from Guided Setup. Once you send it to
              someone, the phone keeps only a scrambled form that cannot be
              turned back into the code.
            </li>
            <li>
              Your person&apos;s name and number. The panic button opens your
              own Messages app with a line written — you read it, you send
              it. Void has no way to text anyone for you and never contacts
              anyone on your behalf.
            </li>
            <li>
              The camera preview on the urge screen. It is shown to you and
              never captured, saved or sent.
            </li>
            <li>
              What you look up on the web. The site block is a small filter
              that runs on the phone (on iPhone it appears as a VPN
              configuration named &ldquo;Void &mdash; betting site
              block&rdquo;; on Android it runs through Android&apos;s VPN
              service and shows a key icon while it is on). It answers
              every web-address lookup on the device itself against a list of
              gambling sites, keeps only a count of how many it refused, and
              has no server of Void&apos;s in its path.
            </li>
          </ul>
        </Section>

        <Section title="Notifications">
          <p>
            Lock-screen previews never carry a dollar figure, a note you wrote
            or an app name. The check-in asks its one question in plain words;
            you choose how often it asks, or turn it off in Settings.
          </p>
        </Section>

        <Section title="Community and moderation">
          <p>
            Posts and comments are screened automatically as they are posted
            and reviewed again straight after. Anything that breaks the
            rules is pulled, and a person reads every report within 24
            hours. Reports and blocks are kept so the moderation team can act
            on them; the people you block are never told.
          </p>
        </Section>

        <Section title="Deleting your account">
          <p>
            Delete Account is in Settings. It removes your rows from our
            database rather than hiding them behind a flag, deletes your
            files, revokes your Sign in with Apple grant if you used one,
            tells the sportsbook connector to drop any link, and takes effect
            immediately. If you created a crew, it passes to its longest-
            standing remaining member rather than disappearing for them.
            Backups held by our hosting provider age out within 30 days.
          </p>
          <p>
            No longer have the app? Request deletion on the web at{" "}
            <a
              href="/delete-account"
              className="text-white underline underline-offset-4"
            >
              voidbetfree.com/delete-account
            </a>
            .
          </p>
          <p>
            You can also leave any crew, delete your profile photo, remove a
            sportsbook connection, and turn off every notification from
            inside the app.
          </p>
        </Section>

        <Section title="Where it lives, and your rights">
          <p>
            Your data is stored in the United States. Wherever you live, you
            can ask us for a copy of what we hold about you, ask us to
            correct it, or ask us to delete it — deletion you can do yourself
            in the app at any time. We answer every request from the address
            below.
          </p>
        </Section>

        <Section title="Changes and contact">
          <p>
            Void is made and operated by Void App LLC, a New York limited
            liability company, 115 Gristmill Ln, Great Neck, NY 11023.
          </p>
          <p>
            If this policy changes in a way that matters, the app will tell
            you before it applies. For any privacy question or request, email{" "}
            <a
              href="mailto:support@voidbetfree.com"
              className="text-white underline underline-offset-4"
            >
              support@voidbetfree.com
            </a>
            .
          </p>
        </Section>
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
    </>
  );
}
