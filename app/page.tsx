import Image from "next/image";

import { AppStoreBadge } from "@/components/AppStoreBadge";
import { BigStats } from "@/components/BigStats";
import { Embers } from "@/components/Embers";
import { FeatureRow } from "@/components/FeatureRow";
import { FloatingCta } from "@/components/FloatingCta";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { LinesWall } from "@/components/LinesWall";
import { Pillars } from "@/components/Pillars";
import { Reveal } from "@/components/Reveal";
import { RingsMarquee } from "@/components/RingsMarquee";
import { ScrollWords } from "@/components/ScrollWords";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GuideLinks } from "@/components/GuideLinks";
import { HomeJsonLd } from "@/components/JsonLd";
import { STUDY_URL } from "@/lib/sources";
import { PRICING_LINE } from "@/lib/appStore";

// Feature copy mirrors the shipped app: always-on blocking (no schedules), the
// panic button, the nightly check-in, rings, crews. Gold is money, nothing else.
//
// CLAIMS (2026-10-20): every line here was checked against the app's code.
// Money Saved is an estimate (lib/metrics.ts) and must say so. The urge
// readings are estimates from three answers, never measurements
// (lib/urge-state.ts). Blocking has no schedules (deleted 2026-08-03).
const FEATURES = [
  {
    tag: "Money Saved",
    title: "Watch what you are no longer losing",
    body: "Money Saved is an estimate, not money returned to you. It runs from the loss rate you told Void about when you signed up, counts up from the day you started, and every bet you log comes straight off it. Most people have never let themselves add it up.",
    image: "/app/01.jpg",
    alt: "Void Home: the eclipse, Money Saved counting live, bet-free clock, next ring",
    glow: "rgba(232,181,77,0.2)",
  },
  {
    tag: "Blocking",
    title: "The bet stops being two taps away",
    body: "Always-on blocking through Apple\u2019s Screen Time. DraftKings, FanDuel, Kalshi, Polymarket: name them once and the block has no schedule and no off-hours. Every hour they stay shut is an hour back.",
    image: "/app/02.jpg",
    alt: "Hours back: the betting apps on your list, what Screen Time blocks, and the panic button",
    glow: "rgba(232,181,77,0.16)",
  },
  {
    tag: "Panic",
    title: "See what the urge is doing to you",
    body: "One tap in the worst minute. Three quick answers, then Void shows the state you are betting from: reward, stress, heart rate. Those readings are estimates from your answers, not measurements. Nothing on your phone is sensing anything. Then ten minutes to ride it out.",
    image: "/app/03.jpg",
    alt: "Your gambling state: a brain with Reward and Stress callouts, five levels, and Ride it out",
    glow: "rgba(255,122,92,0.16)",
  },
  {
    tag: "Learn",
    title: "One idea a day, in ten seconds",
    body: "Six hundred cards on how the machine works: the near miss, the chase, the odds the books never show. One hook, one thought, one drawing. Every figure has a source.",
    image: "/app/04.jpg",
    alt: "Today\u2019s idea: The books sell hope, a swipeable Learn card",
    glow: "rgba(246,214,137,0.2)",
  },
  {
    tag: "Challenges",
    title: "One week. One goal each. Proof every day.",
    body: "Start a crew with friends. Gym, reading, side hustle, no gambling: everyone picks their own goal, logs it before the deadline, and the board reveals on Sunday.",
    image: "/app/06.jpg",
    alt: "Challenges: active crews with time left today",
    glow: "rgba(232,213,168,0.16)",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <ScrollWords
          text="96% of online gamblers lost money. That is not a slogan, it is 717,724 people followed for five years across 32 states. Most have never let themselves add up what it costs. It is time to cash out."
          source="Wilbur, Taylor and McCarthy, UC San Diego Rady School of Management, 2024. Read the study."
          sourceHref={STUDY_URL}
        />

        {/* ——— Features ——— */}
        <section id="how-it-works" className="scroll-mt-24">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.tag} {...f} flip={i % 2 === 1} />
          ))}
        </section>

        <RingsMarquee />

        <Gallery />

        <BigStats />

        <Pillars />

        <LinesWall />

        {/* ——— Stories ——— */}
        <section className="scroll-mt-24">
          <FeatureRow
            tag="Stories"
            title="Real stories, from people who were there"
            body="Podcasts and published accounts from people who bet and stopped: the early signs they missed, what they lost, what they built after. Every story links to the original. Nothing is invented."
            image="/app/05.jpg"
            alt="Stories: The early signs she missed, and what she built after"
            flip
            glow="rgba(201,123,255,0.14)"
          />
        </section>

        {/* ——— Guides ——— */}
        <section id="guides" className="mx-auto w-full max-w-wide scroll-mt-24 px-6 py-16 sm:py-24">
          <Reveal>
            <span className="tag">Guides</span>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
              Plain answers, with or without the app
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-dim">
              Three pages that answer the questions people arrive with. Each one works on its own; Void is one tool in them, not the point.
            </p>
          </Reveal>
          <GuideLinks />
        </section>

        {/* ——— Closing ——— */}
        <section className="relative overflow-hidden px-6 pb-8 pt-24 text-center sm:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(232,181,77,0.16), rgba(232,181,77,0.05) 50%, transparent 72%)",
            }}
          />
          <Embers className="absolute inset-0 h-full w-full" count={22} />
          <Reveal className="relative">
            <Image
              src="/logo.png"
              alt="Void"
              width={88}
              height={88}
              className="mx-auto rounded-[22px] shadow-[0_20px_60px_rgba(232,181,77,0.25)]"
            />
            <h2 className="mt-10 text-[40px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[64px]">
              Quit gambling.
              <br />
              <span className="goldflow">You can still cash out.</span>
            </h2>
            <div className="mt-9 flex justify-center">
              <AppStoreBadge />
            </div>
            <p className="mx-auto mt-6 max-w-md text-[13px] leading-relaxed text-faint">
              {PRICING_LINE}
            </p>
          </Reveal>
        </section>
      </main>
      <HomeJsonLd />
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
