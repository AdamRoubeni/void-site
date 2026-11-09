import type { Metadata } from "next";
import Link from "next/link";

import { Guide, type Faq } from "@/components/Guide";
import { APP_STORE_URL } from "@/lib/appStore";
import { NCPG_CHAT_URL, URGE_SURFING_URL } from "@/lib/sources";

// CHECKED AGAINST THE APP (2026-10-20). The urge flow: Panic -> three answers
// (urge 1-10, how the body feels, what is pulling) -> "Your gambling state"
// (five rows, ESTIMATED from the answers, nothing sensed: lib/urge-state.ts)
// -> Ride it out, ten minutes, with a lock-screen Live Activity and halfway /
// two-minute / time notifications (lib/ride-notifications.ts) -> did you bet?
// A "Need help now?" link sits on the state screen. Change the flow, change
// this page in the same commit.

const TITLE = "What to do when you get a gambling urge";
const DESCRIPTION =
  "A gambling urge peaks and passes on its own if you do not act on it. What to do in the first minute, how to ride out the next ten, why it feels like an emergency, and how Void's panic button runs the same sequence.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gambling-urges" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://voidbetfree.com/gambling-urges",
    images: [{ url: "/app/03.jpg", width: 415, height: 900, alt: "Void's gambling state screen" }],
  },
};

const FAQ: Faq[] = [
  {
    q: "How long does a gambling urge last?",
    a: "Clinicians who teach urge surfing put the peak at roughly 20 to 30 minutes when the urge is neither fought nor fed. Fighting it ('I can't stand this') tends to stretch it; feeding it (opening the app to 'just look') restarts it. Ten minutes of doing something else usually gets you past the worst of it.",
  },
  {
    q: "Are the readings on Void's gambling state screen real measurements?",
    a: "No. Nothing on your phone is sensing anything. The five rows (dopamine, cortisol, norepinephrine, heart rate, skin conductance) are named for what gambling anticipation is known to activate, and their positions are estimated from your three answers. The one real number in the flow is the urge score, because you typed it.",
  },
  {
    q: "What if I already bet?",
    a: "Log it, in Void or on paper. One bet does not undo the days before it, and the fastest way to make it two bets is to decide the day is ruined. If you are chasing a loss right now, that is the single most expensive state to bet from: close the app, move, and call or text someone.",
  },
  {
    q: "Does the panic button block anything?",
    a: "No. Blocking is always on separately, through Apple's Screen Time, whether or not you ever press Panic. The panic button is for the wanting, not the access.",
  },
  {
    q: "What if the urges are constant?",
    a: "Then the tools on this page are not enough on their own, and that is worth saying plainly. Call or text the National Problem Gambling Helpline at 1-800-MY-RESET (1-800-697-3738), free and confidential, or chat at ncpgambling.org. If you are thinking about harming yourself, call or text 988.",
  },
];

export default function Page() {
  return (
    <Guide
      path="/gambling-urges"
      eyebrow="Guide"
      title={TITLE}
      description={DESCRIPTION}
      published="2026-10-20"
      modified="2026-10-20"
      image="/app/03.jpg"
      imageAlt="Void's gambling state screen: urge 8.0, Wired, Friends are betting; a brain with Reward (dopamine) and Stress (cortisol) callouts reading High; five rows from dopamine to skin conductance; a Ride it out button"
      imageCaption="Void's gambling state screen after three answers. Every reading is an estimate from those answers, not a measurement. 'Ride it out' starts the ten minutes."
      lead={
        <>
          A gambling urge peaks and passes on its own if you do not act on it; the clinicians who teach urge surfing put the peak at roughly 20 to 30 minutes. The job in the moment is simple to say and hard to do: make the bet harder to place than the urge is long. Get the phone out of reach, do one thing for ten minutes, and tell someone. Void&apos;s panic button runs exactly that sequence, and this page is the same plan with or without the app.
        </>
      }
      faq={FAQ}
    >
      <h2>The first sixty seconds</h2>
      <ol>
        <li>
          <strong>Say it.</strong> Out loud or in a text: &ldquo;I want to bet right now.&rdquo; Naming it moves it from a plan to a feeling, and feelings pass.
        </li>
        <li>
          <strong>Put the phone somewhere else.</strong> Another room, a friend&apos;s hand, the glove box. If you use Void, press <strong>Panic</strong> first; it takes one tap from Home.
        </li>
        <li>
          <strong>Change your body.</strong> Stand up, leave the room, cold water on your face, ten slow breaths out. The urge is partly physical, and the body settles faster than the mind.
        </li>
        <li>
          <strong>Do not open the app &ldquo;just to look&rdquo;.</strong> Looking is the first half of a bet. If the apps are blocked, this step is already done; if they are not, the{" "}
          <Link href="/block-gambling-apps-iphone">blocking guide</Link> is ten minutes well spent, once the urge is over.
        </li>
      </ol>

      <h2>Why it feels like an emergency</h2>
      <p>
        An urge is anticipation, and anticipation is what betting products are built to produce: the reward system fires on the possibility of a win, not the win, which is why a near miss feels almost as good as hitting. Stress sits on top of it, especially if you are down and the bet is about getting it back. Put together, that reads as urgency. It is not. Nothing happens if you do not bet. The urge is the product working, and it has a shape: it rises, it peaks, it falls.
      </p>
      <p>
        That shape is what urge surfing uses. Rather than fighting the feeling, you watch it the way you would watch a wave, and let it crest. Yale&apos;s teaching handout on the technique is{" "}
        <a href={URGE_SURFING_URL} target="_blank" rel="noopener noreferrer">
          here
        </a>
        ; it is a clinical worksheet, not a trial, and it is where the 20-to-30-minute figure above comes from.
      </p>

      <h2>Ride out the next ten minutes</h2>
      <ul>
        <li>Set a timer for ten minutes and agree with yourself that nothing gets decided until it rings.</li>
        <li>Pick one task that uses your hands and your attention: dishes, a walk to the end of the street, a shower, a page of something. Not a screen.</li>
        <li>If the pull is a game that is on, change the channel or leave the room for the duration. The game will be there in ten minutes.</li>
        <li>If the pull is friends betting, mute the chat for the night. You can read it tomorrow.</li>
        <li>When the timer rings, check: is the urge the same, lower, or gone? It is almost always lower. If it is not, run it again.</li>
      </ul>

      <h2>How Void&apos;s panic button runs it</h2>
      <p>
        The app&apos;s version of this page is one tap and about ten minutes:
      </p>
      <ol>
        <li>
          <strong>Panic.</strong> The button is on Home. Tapping it opens the urge flow, with a &ldquo;Need help now?&rdquo; link to the helplines on every screen.
        </li>
        <li>
          <strong>Three answers.</strong> How strong is the urge, 1 to 10? How does your body feel: normal, wired, tense, heart racing? What is pulling: the rush, winning it back, making money, friends betting, a game being on, boredom, a late night, payday?
        </li>
        <li>
          <strong>Your gambling state.</strong> Void shows a picture of the state you are betting from: reward and stress on a brain, then five rows from dopamine to skin conductance. These are <strong>estimates from your answers, not measurements</strong>. Nothing on your phone senses anything, and the screen never says a level &ldquo;was&rdquo; anything. The point is to see the urge as a state, with a shape, rather than as an instruction.
        </li>
        <li>
          <strong>Ride it out.</strong> A ten-minute timer, on the lock screen too, with a nudge at halfway and at two minutes. You can put the phone down; the clock keeps running on a wall-clock deadline, so backgrounding or force-quitting does not shorten it.
        </li>
        <li>
          <strong>Ten minutes later.</strong> Did you bet? Answer honestly. Through, and the urge counts toward urges beaten and the Money Saved estimate keeps running. Bet, and you log it, the figure comes down, and the nightly check-in keeps asking tomorrow.
        </li>
      </ol>

      <h2>After it passes</h2>
      <p>
        Write down what pulled. For most people it is one of a small set: a game on, friends betting, payday, chasing a loss, late at night, bored. After a few urges the pattern is obvious, and a pattern can be planned for: the group chat muted on game nights, a transfer scheduled on payday, the phone outside the bedroom. Void asks which one it was every time you press Panic and keeps the count under urges beaten.
      </p>

      <h2>If this is not enough</h2>
      <p>
        Urges every day, urges you have been losing to, or an urge that arrived with money you borrowed: those need a person, not just a technique. The National Problem Gambling Helpline is free, confidential and open all day: call or text 1-800-MY-RESET (1-800-697-3738), or{" "}
        <a href={NCPG_CHAT_URL} target="_blank" rel="noopener noreferrer">
          chat online
        </a>
        . If you are thinking about harming yourself, call or text 988. Void lists all of these inside the app, and receives nothing for doing so.
      </p>

      <div className="note">
        <p>
          <strong>Where Void fits.</strong> The panic button, the ten-minute ride and the urge log are the app&apos;s version of this page. The blocking that keeps the apps shut while you ride it out is separate and always on. Void is{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            on the App Store
          </a>
          ; the{" "}
          <Link href="/quit-sports-betting">quit sports betting</Link> guide is the longer plan around it.
        </p>
      </div>
    </Guide>
  );
}
