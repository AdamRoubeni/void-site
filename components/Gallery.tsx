import { AppStoreBadge } from "@/components/AppStoreBadge";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Reveal } from "@/components/Reveal";

// Real screens from the shipped app, as they look on the phone.
const SHOTS = [
  { src: "/app/01.jpg", alt: "Void Home: the eclipse, Money Saved, bet-free clock, next ring, urges beaten" },
  { src: "/app/05.jpg", alt: "Stories: real accounts from people who bet, from podcasts and the press" },
  { src: "/app/03.jpg", alt: "Your gambling state: dopamine, cortisol and heart rate, estimated from your answers" },
  { src: "/app/07.jpg", alt: "Crew board: five friends ranked by their own weekly challenge" },
];

export function Gallery() {
  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <Reveal className="mx-auto max-w-wide px-6 text-center">
        <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
          Made for iPhone
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-dim">
          Better than a screen-time setting. Void blocks, counts, and talks you
          down on the phone the bet lives on.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreBadge />
        </div>
      </Reveal>
      <div className="mx-auto mt-16 max-w-wide px-6">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
          {SHOTS.map((s, i) => (
            <Reveal
              key={s.src}
              delay={i * 110}
              className={`w-[230px] shrink-0 snap-center sm:w-auto ${i % 2 === 1 ? "sm:mt-12" : ""}`}
            >
              <PhoneFrame src={s.src} alt={s.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
