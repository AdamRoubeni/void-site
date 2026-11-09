import { Reveal } from "@/components/Reveal";

// Opal's 94% / 93% / 90% row. Void has no cohort figure it could honestly
// print, so the big line is the thing itself: the three moves the product
// makes. No percentages that were not measured.
const PILLARS = [
  {
    big: "Always on",
    title: "Blocking with no window",
    body: "No schedules, no off-hours. Every gap in a blocking schedule is exactly where a bettor goes, so Void has none.",
  },
  {
    big: "One tap",
    title: "A panic button",
    body: "For the worst minute: your face, your name, the words you signed, then ten minutes with nothing to do but outlast it.",
  },
  {
    big: "Every night",
    title: "An honest number",
    body: "“Did you bet today?” on your lock screen. One tap keeps the money figure true, so it is never a story you tell yourself.",
  },
];

const INSIDE = [
  { t: "Locked mode", d: "No access window from inside the app. Raising strictness is instant; lowering it takes a 10-minute wait." },
  { t: "Panic button", d: "The way out of an urge, before the deposit." },
  { t: "Nightly check-in", d: "No or Yes, straight from the notification." },
  { t: "27 eclipse rings to unlock", d: "Streaks, money kept, urges ridden out." },
  { t: "Crew challenges", d: "One week, one goal each, proof every day, with friends." },
  { t: "600+ cards on how the machine works", d: "Every figure sourced. Read one a day." },
];

export function Pillars() {
  return (
    <section className="mx-auto w-full max-w-wide px-6 py-16 sm:py-24">
      <Reveal>
        <div className="glass grid gap-px overflow-hidden rounded-[32px] sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.big}
              className={`px-8 py-12 text-center ${i > 0 ? "border-t border-white/[0.07] sm:border-l sm:border-t-0" : ""}`}
            >
              <p className="text-[40px] font-bold leading-none tracking-[-0.03em] sm:text-[48px]">
                {p.big}
              </p>
              <p className="mt-4 text-[17px] font-medium">{p.title}</p>
              <p className="mx-auto mt-2 max-w-[260px] text-[14px] leading-relaxed text-dim">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <ul className="mx-auto mt-14 grid max-w-2xl gap-x-10 gap-y-5 sm:grid-cols-2">
          {INSIDE.map((i) => (
            <li key={i.t} className="flex gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#E8D5A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden>
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              <div>
                <p className="text-[15px] font-semibold">{i.t}</p>
                <p className="text-[14px] text-dim">{i.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
