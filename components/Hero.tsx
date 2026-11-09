import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Embers } from "@/components/Embers";
import { Reveal } from "@/components/Reveal";

/**
 * The hero: the app's own eclipse footage looping behind the tagline — the
 * same clip every user sees on the welcome screen — dimmed, with the Void
 * ember field drifting over it. Text sits in a soft pool of dark so the
 * corona never fights the headline.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="hero-media absolute inset-0">
        <video
          className="hero-video"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      {/* Legibility: a dark pool behind the type, and a fade into the page */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 52%, rgba(5,5,5,0.55), rgba(5,5,5,0.15) 60%, rgba(5,5,5,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.7), rgba(5,5,5,0))" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{ background: "linear-gradient(180deg, rgba(5,5,5,0), #050505)" }}
      />
      <Embers className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 mx-auto w-full max-w-wide px-6 pb-24 pt-36 text-center sm:pt-40">
        <Reveal>
          <h1 className="mx-auto max-w-4xl text-[44px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[76px] lg:text-[88px]">
            Quit gambling.
            <br />
            <span className="goldflow">You can still cash out.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-[#cfcfcf] sm:text-[19px]">
            Void shows you what betting really costs, blocks the apps that take
            it, and gets you through the minute that used to end in a deposit.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge />
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#9a9a9a]">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              Now on the App Store
            </span>
            <span>Made for iPhone</span>
            <span>Nothing sold, nothing shared</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
