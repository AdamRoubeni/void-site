import { Reveal } from "@/components/Reveal";

// Opal's wall is faces and quotes. Void ships no testimonials — the app
// binned invented ones once and does not print a person who does not exist —
// so the wall is the product talking: lines from inside the app, verbatim.
const LINES = [
  "Willpower quits for minutes. Friction quits for good.",
  "Urges are waves. You can learn to surf.",
  "A chase is a bet with no stopping condition.",
  "The machine was built to feel like almost.",
  "Every step between you and a bet is where the urge dies.",
  "The next bet was never the way back.",
  "You're beating the books.",
  "You're winning your life back.",
  "Be strong. You told yourself you won't gamble.",
  "Writing it down is the hard part. Everything you kept stays kept.",
  "Day 63 is yours.",
  "What you don't bet stays yours.",
  "Logged. The money you had already lost is still gone.",
  "Willpower is a burst tool. Void is the system.",
];

function Row({ items, dir, dur }: { items: string[]; dir: "left" | "right"; dur: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden">
      <div
        className={`flex w-max gap-4 ${dir === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--dur" as string]: dur }}
      >
        {doubled.map((l, i) => (
          <figure
            key={i}
            className="glass relative flex h-[190px] w-[320px] shrink-0 flex-col justify-between rounded-[24px] p-6"
          >
            <span aria-hidden className="text-[40px] leading-none text-gold/80">
              &ldquo;
            </span>
            <blockquote className="text-[18px] font-medium leading-snug text-white">
              {l}
            </blockquote>
            <figcaption className="text-[12px] uppercase tracking-[0.18em] text-faint">
              From inside Void
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function LinesWall() {
  const a = LINES.filter((_, i) => i % 2 === 0);
  const b = LINES.filter((_, i) => i % 2 === 1);
  return (
    <section className="py-16 sm:py-24">
      <Reveal className="mx-auto max-w-wide px-6 text-center">
        <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
          &ldquo;The next bet was
          <br />
          never the way back.&rdquo;
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-dim">
          The app talks like this. No shame, no cheerleading, one true line at a
          time.
        </p>
      </Reveal>
      <div className="mt-14 space-y-4">
        <Row items={a} dir="left" dur="75s" />
        <Row items={b} dir="right" dur="85s" />
      </div>
    </section>
  );
}
