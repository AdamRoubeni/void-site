import type { Metadata } from "next";
import Link from "next/link";

import { Guide, type Faq } from "@/components/Guide";
import { APP_STORE_URL } from "@/lib/appStore";
import { NCPG_HELP_URL, NCPG_URL, STUDY_URL, USNEWS_2025_URL } from "@/lib/sources";

// CHECKED AGAINST THE APP (2026-10-20). Two goals exist in the app: quit and
// cut back (with a quit date that flips to quit mode). Money Saved is an
// estimate (expected daily loss x days, minus logged losses, floored at
// zero: lib/metrics.ts). Lost So Far is the self-reported figure. The
// nightly check-in is "Did you bet today?" from the notification. Every
// statistic below links straight to its source.

const TITLE = "How to quit sports betting";
const DESCRIPTION =
  "Practical steps to cut back on or quit sports betting: close the access, self-exclude, cut the money off, add up the real cost, plan for urges, and bring other people in. Void is one tool for some of these, not a requirement for any.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/quit-sports-betting" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://voidbetfree.com/quit-sports-betting",
    images: [{ url: "/app/01.jpg", width: 415, height: 900, alt: "Void's Home screen" }],
  },
};

const FAQ: Faq[] = [
  {
    q: "Do I have to quit completely, or can I cut back?",
    a: "Both are legitimate goals, and Void supports both. If you choose to cut back, you set a quit date, blocking is on from day one, and on that date the app moves to quit mode. Many people find cutting back harder than stopping, because every bet reopens the question. If you have tried to cut back more than twice, treat that as information.",
  },
  {
    q: "What happens if I bet after I have quit?",
    a: "Log it. One bet is a slip, not a reset of everything you have done. In Void, a logged bet comes straight off the Money Saved estimate, the bet-free clock starts again, and the nightly check-in keeps asking. The number that matters is how fast you get back to not betting, not whether you were perfect.",
  },
  {
    q: "Is Money Saved real money?",
    a: "No. It is an estimate: the loss rate you reported when you set up Void, multiplied by the days since you started, minus any losses you have logged. It is there to make the cost visible. It is not money returned to you, and it never goes below zero.",
  },
  {
    q: "How long until the urges stop?",
    a: "They get rarer and shorter rather than stopping on a date. Most people notice the first clear change within a few weeks of being bet-free, with spikes around the triggers they always had: a big game, payday, friends betting, a late night. The gambling urges page covers what to do in the moment.",
  },
  {
    q: "When is this beyond self-help?",
    a: "If you have borrowed, hidden losses from someone close to you, bet to win back money, or tried to stop and could not, talk to a person as well as using an app. The National Problem Gambling Helpline (1-800-MY-RESET) is free and confidential, and the NCPG site lists counsellors and Gamblers Anonymous meetings by state.",
  },
];

export default function Page() {
  return (
    <Guide
      path="/quit-sports-betting"
      eyebrow="Guide"
      title={TITLE}
      description={DESCRIPTION}
      published="2026-10-20"
      modified="2026-10-20"
      image="/app/01.jpg"
      imageAlt="Void's Home screen: the eclipse, the Money Saved estimate, the bet-free clock, the next ring and urges beaten"
      imageCaption="Void's Home. Money Saved is an estimate from the loss rate you reported; the bet-free clock and urges beaten are counted from what you log."
      lead={
        <>
          Quitting sports betting comes down to two jobs: make a bet harder to place than the urge is long, and replace what betting was doing for you. The steps below are in the order that tends to work, starting with the ones that take ten minutes. You can do every one of them without an app. Void helps with some of them, and this page says which.
        </>
      }
      faq={FAQ}
    >
      <h2>1. Decide: cut back or quit</h2>
      <p>
        Pick one and say it to someone. &ldquo;Less&rdquo; is not a goal a Tuesday night can hold you to; &ldquo;no bets until the first of the month&rdquo; or &ldquo;no bets, full stop&rdquo; is. If you have already tried to cut back more than twice, the honest reading is that cutting back is the harder of the two for you, because every bet reopens the decision.
      </p>
      <p>
        In Void you choose either goal at setup. Cut back sets a quit date; blocking is on from day one either way, and on the date the app moves to quit mode, where the streak becomes the number that matters.
      </p>

      <h2>2. Self-exclude, today</h2>
      <p>
        Every licensed US sportsbook has a self-exclusion option in its Responsible Gaming settings, and most states that allow online betting run a list that covers every operator in the state at once, for one to five years or for life. It takes about ten minutes per book. Do it before step 3, because once the apps are blocked you will not want to open them to find the setting.
      </p>
      <p>
        The National Council on Problem Gambling keeps a state-by-state directory at{" "}
        <a href={NCPG_HELP_URL} target="_blank" rel="noopener noreferrer">
          ncpgambling.org
        </a>
        . Offshore and sweepstakes sites have no such list, which is what the next step is for.
      </p>

      <h2>3. Close the access</h2>
      <p>
        Delete the sportsbook apps, then block them so they cannot come back in thirty seconds. On an iPhone that is Apple&apos;s Screen Time, either set up by hand or through Void, which runs its blocking on Screen Time and adds a filter for more than 340,000 betting domains. The step-by-step is on the{" "}
        <Link href="/block-gambling-apps-iphone">how to block gambling apps on iPhone</Link> page.
      </p>
      <p>
        Unfollow the picks accounts, mute the group chat where the slips get posted, and turn off the sports-app notifications that read like odds. None of this is dramatic. All of it removes a tap.
      </p>

      <h2>4. Cut the money off</h2>
      <ul>
        <li>Remove saved cards and bank links from every betting account before you close it.</li>
        <li>Ask your bank or card issuer whether it offers a gambling-transaction block. Several do, and the ones that do usually add a cooling-off period before it can be lifted.</li>
        <li>If you have borrowed to bet, write down the total today. Most people have not, and the number is the thing that finally makes the decision hold.</li>
        <li>If someone you trust can hold your main card for a month, let them.</li>
      </ul>

      <h2>5. Add up what it was costing</h2>
      <p>
        In a five-year study of 717,724 online gamblers across 32 states by researchers at UC San Diego&apos;s Rady School of Management, 96% appeared to lose money (
        <a href={STUDY_URL} target="_blank" rel="noopener noreferrer">
          the study
        </a>
        ). In U.S. News &amp; World Report&apos;s 2025 survey of 1,200 US adults who had bet on sports in the previous six months, one in four had missed a bill because of betting and 30% had debt tied to it (
        <a href={USNEWS_2025_URL} target="_blank" rel="noopener noreferrer">
          the survey
        </a>
        ). The point of both figures is not that you are unlucky; it is that the product is built to come out ahead, and the only way to see your own number is to add it up.
      </p>
      <p>
        Void asks for that number at setup, shows it as Lost So Far, and from then on runs a <strong>Money Saved</strong> estimate: the daily loss rate you reported, multiplied by the days since you started, minus any bets you log. It is an estimate, not money returned to you, and a logged bet takes it down. That is deliberate. A number that only ever went up would be a story, not a figure.
      </p>

      <h2>6. Plan for the urges before they come</h2>
      <p>
        Urges rise, peak and fade on their own if you do not act on them, usually within half an hour. The work is knowing what you will do in those minutes before they arrive: who you text, where you put the phone, what you do with your hands. The{" "}
        <Link href="/gambling-urges">gambling urges</Link> page is that plan, and it explains how Void&apos;s panic button runs it in ten minutes.
      </p>
      <p>
        Know your triggers by name. For most sports bettors they are a game being on, friends betting, payday, trying to win it back, and boredom. Void asks which one is pulling every time you hit the panic button, so after a few weeks you can see your own pattern.
      </p>

      <h2>7. Replace the game, not just the bet</h2>
      <p>
        Watching sports without money on it is flat at first; that is the dopamine arithmetic, not a sign you have lost interest in sports. Give it a month. In the meantime put something else on the clock: the gym, a side project, a book, sleep. Void&apos;s crew challenges run on exactly that, one week, one goal each, with friends, and proof logged every day.
      </p>

      <h2>8. Tell one person, and check in every night</h2>
      <p>
        Secrecy is the condition betting needs. One person who knows, and who you answer to, changes the odds more than any app. Void&apos;s version is a nightly notification: &ldquo;Did you bet today?&rdquo;, answered with one tap, so the money figure stays honest and the streak is a real count.
      </p>

      <h2>9. Get help if it is beyond self-help</h2>
      <p>
        If you have borrowed to bet, hidden losses from someone close to you, chased losses, or tried to stop and could not, use the help that exists alongside anything on this page. The National Problem Gambling Helpline is free and confidential: call or text 1-800-MY-RESET (1-800-697-3738), or chat at{" "}
        <a href={NCPG_URL} target="_blank" rel="noopener noreferrer">
          ncpgambling.org
        </a>
        . Counselling for gambling, usually cognitive behavioural therapy, and Gamblers Anonymous meetings are listed there by state. Void is a self-help tool, not treatment, and it lists these same numbers inside the app.
      </p>

      <div className="note">
        <p>
          <strong>Where Void fits.</strong> Steps 3, 5, 6, 7 and 8 are what the app does: blocking through Screen Time, the Money Saved estimate, the panic button, crew challenges, and the nightly check-in. Steps 1, 2, 4 and 9 are yours. The app is{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            on the App Store
          </a>
          .
        </p>
      </div>
    </Guide>
  );
}
