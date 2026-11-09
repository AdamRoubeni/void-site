import type { Metadata } from "next";
import Link from "next/link";

import { Guide, type Faq } from "@/components/Guide";
import { APP_STORE_URL } from "@/lib/appStore";
import { APPLE_SCREEN_TIME_URL, BLOCKLIST_PROJECT_URL } from "@/lib/sources";

// CHECKED AGAINST THE APP (2026-10-20). Blocking is always-on, no schedules
// (cashout app/(app)/settings/blocking.tsx). Strictness: standard / delay /
// locked; access windows 15 min, 3 a week, 10-minute wait on delay and on
// every lowering (lib/metrics.ts). Screen Time web filter: 49 slots, 10 of
// them the person's own (lib/blocked-sites.ts). Site block: a DNS-only packet
// tunnel, 342,897 domains from The Blocklist Project plus a curated list
// (assets/blocking/catalog-meta.json, targets/tunnel). Change the app, change
// this page in the same commit.

const TITLE = "How to block gambling apps on iPhone";
const DESCRIPTION =
  "Two ways to block betting apps and sites on an iPhone: Apple's Screen Time on its own, or Void on top of it. The exact steps, what gets blocked, what does not, and what you can switch off.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/block-gambling-apps-iphone" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://voidbetfree.com/block-gambling-apps-iphone",
    images: [{ url: "/app/02.jpg", width: 415, height: 900, alt: "Void's blocking screen" }],
  },
};

const FAQ: Faq[] = [
  {
    q: "Does Void block on a schedule?",
    a: "No. Blocking is always on. There are no schedules, no game-night windows and no off-hours, because every gap in a schedule is where a bettor goes. What you choose is the strictness: how hard it is to open a blocked app for a few minutes.",
  },
  {
    q: "Can Void see which apps I block?",
    a: "No. You pick apps in Apple's own picker, and iOS hands Void opaque tokens instead of names. The tokens never leave your phone. Void's blocked screen is not even told which app it just stopped.",
  },
  {
    q: "Can I still get into a blocked app?",
    a: "On Standard, yes: a 15-minute window opens right away, three a week, and every one is logged. On Delay, the same window comes after a 10-minute wait. On Locked, there is no access from inside the app at all. Raising strictness is instant; lowering it takes a 10-minute wait.",
  },
  {
    q: "How do I turn it off or delete Void?",
    a: "Inside the app, switching blocking off goes through the same 10-minute wait as any lowering. Outside the app, iOS lets you revoke Void's Screen Time access in Settings, remove the site block under VPN & Device Management, or delete the app, which removes everything at once. Nothing in Void can stop you; Apple does not allow it.",
  },
  {
    q: "Does the site block send my browsing to Void?",
    a: "No. The site block is a DNS filter that runs on your phone. A gambling domain is answered 'no such site' on the spot; every other lookup goes to a public resolver. It reads nothing, logs no domain, and has no connection to Void's servers. The only thing it writes is a count of blocked lookups, so Settings can show how often it stood.",
  },
  {
    q: "Does it work on Android?",
    a: "Void is an iPhone app today. An Android version is in progress and not yet on Google Play.",
  },
];

export default function Page() {
  return (
    <Guide
      path="/block-gambling-apps-iphone"
      eyebrow="Guide"
      title={TITLE}
      description={DESCRIPTION}
      published="2026-10-20"
      modified="2026-10-20"
      image="/app/02.jpg"
      imageAlt="Void's Home screen: the Hours back card listing DraftKings, FanDuel, Kalshi and Polymarket, a Change what Screen Time blocks button, and the Panic button"
      imageCaption="Void's Hours back card: the betting apps on your list and whether Screen Time is blocking each one right now. 'Change what Screen Time blocks' opens Apple's own picker."
      lead={
        <>
          You can block gambling apps on an iPhone two ways. Apple&apos;s built-in Screen Time can lock any app and filter any website, and it is free. An app like Void uses that same Screen Time blocking underneath, then adds the parts Screen Time does not have: a betting-site filter that covers hundreds of thousands of domains, a panic button for the urge itself, and a running estimate of what you are no longer losing. Both run on the phone itself, and neither needs a jailbreak.
        </>
      }
      faq={FAQ}
    >
      <h2>Option 1: Screen Time on its own</h2>
      <p>
        This is the manual route. It works, it costs nothing, and it is where Void&apos;s blocking ultimately runs too. Its weak spot is that you set it up and you know the passcode, so it tends to come down in exactly the moment it was for.
      </p>
      <ol>
        <li>
          Open <kbd>Settings</kbd>, tap <kbd>Screen Time</kbd>, and turn it on if it is off.
        </li>
        <li>
          Tap <kbd>App Limits</kbd>, then <kbd>Add Limit</kbd>. Pick the betting apps: DraftKings, FanDuel, BetMGM, Caesars, Kalshi, Polymarket, whatever is on your phone. Set the limit to one minute and make sure <kbd>Block at End of Limit</kbd> is on.
        </li>
        <li>
          Go back to Screen Time and tap <kbd>Content &amp; Privacy Restrictions</kbd>. Under <kbd>Content Restrictions</kbd> &rarr; <kbd>Web Content</kbd>, choose <kbd>Limit Adult Websites</kbd> and add every sportsbook and casino site you use under <kbd>Never Allow</kbd>. Note that Apple&apos;s adult filter switches on with it.
        </li>
        <li>
          In the same restrictions screen, find the App Store purchases section and set <kbd>Installing Apps</kbd> to <kbd>Don&apos;t Allow</kbd>. That stops a deleted sportsbook app from being reinstalled in thirty seconds.
        </li>
        <li>
          Set a <kbd>Screen Time passcode</kbd> and have someone you trust choose it so you do not know it. This is the step most people skip, and it is the one that matters.
        </li>
      </ol>
      <p>
        Apple&apos;s own instructions are at{" "}
        <a href={APPLE_SCREEN_TIME_URL} target="_blank" rel="noopener noreferrer">
          support.apple.com
        </a>
        . The limits of this route: the site list is only as long as you make it, a new app is not on the list until you add it, and there is nothing for the minute the urge hits.
      </p>

      <h2>Option 2: Void on top of Screen Time</h2>
      <p>
        Void asks iOS for Screen Time access and does the blocking through it, so the lock is Apple&apos;s. What Void adds is the setup, the site catalog, the strictness levels and the urge tools. The steps:
      </p>
      <ol>
        <li>
          Download{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            Void on the App Store
          </a>{" "}
          and answer the setup questions. What you bet on, how often and how much becomes the baseline for your Money Saved estimate.
        </li>
        <li>
          On the blocking screen, tap <strong>Change what Screen Time blocks</strong>. iOS asks whether Void may use Screen Time; allow it. Apple&apos;s picker opens, and you tick the betting apps. Void receives opaque tokens, not app names, so it never knows what you chose.
        </li>
        <li>
          Add the betting sites you actually use, up to ten. Void fills the rest of Screen Time&apos;s 49 website slots with the major US sportsbooks, casinos and sweeps brands, so the filter holds your sites and the big ones.
        </li>
        <li>
          Optionally install the <strong>site block</strong>. iOS shows one prompt to add a VPN configuration. It is not a VPN in the usual sense: it carries nothing but DNS lookups, stays on your phone, and answers more than 340,000 gambling domains with &ldquo;no such site&rdquo; in every browser and every app.
        </li>
        <li>
          Pick a strictness. <strong>Standard</strong> opens a 15-minute access window on request, three a week, every one logged. <strong>Delay</strong> puts a 10-minute wait in front of that window. <strong>Locked</strong> has no access from inside the app at all.
        </li>
      </ol>

      <h2>What exactly gets blocked</h2>
      <ul>
        <li>
          <strong>Apps you chose.</strong> Blocked through Apple&apos;s Screen Time shield, around the clock. There is no schedule to edit and no off-hours: the scheduled-blocks feature was removed on purpose, because every window had a gap.
        </li>
        <li>
          <strong>Up to 49 websites in Screen Time&apos;s filter.</strong> Your own sites (up to ten) plus a curated list of major betting brands. Apple caps this list, which is why the second layer exists.
        </li>
        <li>
          <strong>340,000+ domains in the optional site block.</strong> Built from{" "}
          <a href={BLOCKLIST_PROJECT_URL} target="_blank" rel="noopener noreferrer">
            The Blocklist Project&apos;s
          </a>{" "}
          public gambling list plus a curated set, 342,897 domains as of September 2026, resolved on your phone. Works in Safari, Chrome, in-app browsers and the sportsbook apps themselves.
        </li>
      </ul>
      <p>
        What it does not cover, said plainly: a site reached by raw IP address, a browser that runs its own encrypted DNS, an app you did not select, and any other device you own. Void&apos;s own lists are gambling only; bank apps, brokerages and crypto exchanges are never blocked unless you add them yourself. One side effect to know about: Apple only allows a custom website filter together with its own adult-site filter, so Void exempts the largest adult sites and a smaller one may still be stopped by iOS rather than by Void.
      </p>

      <h2>What you can turn off or remove</h2>
      <p>
        Void is a commitment device, not a parental control, and it is not designed to be impossible to remove. Here is every way out, so there are no surprises:
      </p>
      <ul>
        <li>
          <strong>Lower strictness or switch blocking off</strong> in Void&apos;s Settings. Every lowering starts a 10-minute wait, then you confirm. The wait is the whole feature: most urges do not survive it.
        </li>
        <li>
          <strong>Revoke Screen Time access</strong> in iPhone Settings &rarr; Screen Time, under the apps that have Screen Time access. The app shields come down immediately.
        </li>
        <li>
          <strong>Remove the site block</strong> in Settings &rarr; General &rarr; VPN &amp; Device Management, where it appears as &ldquo;Void — betting site block&rdquo;.
        </li>
        <li>
          <strong>Delete the app.</strong> Everything comes off with it. If you had Void installed and switched blocking off, Void sends a reminder to turn it back on; it never nags more than that.
        </li>
      </ul>

      <h2>Make the block hold</h2>
      <p>
        Blocking removes the two-tap path. It does not remove the reasons you were tapping. Three things make it hold:
      </p>
      <ul>
        <li>
          <strong>Self-exclude with the books themselves.</strong> Every licensed sportsbook has a self-exclusion option in its Responsible Gaming settings, and most states run a list that covers every operator at once. The steps are on the{" "}
          <Link href="/quit-sports-betting">quit sports betting</Link> page.
        </li>
        <li>
          <strong>Cut the money off.</strong> Delete saved cards from the apps before you block them, and ask your bank whether it can decline gambling transactions.
        </li>
        <li>
          <strong>Plan for the urge.</strong> A blocked app does not stop the wanting. What to do in that minute is on the{" "}
          <Link href="/gambling-urges">gambling urges</Link> page.
        </li>
      </ul>
    </Guide>
  );
}
