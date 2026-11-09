import Image from "next/image";
import { Reveal } from "@/components/Reveal";

// The 27 eclipses, in ladder order (lib/eclipses.ts in the app), each with the
// light it throws. The renders are the app's own; nothing here is drawn.
const RINGS: { slug: string; name: string; glow: string }[] = [
  { slug: "bronze", name: "Bronze Halo", glow: "#FFA56D" },
  { slug: "steel", name: "Steel Veil", glow: "#9FC0FF" },
  { slug: "blossom", name: "Blossom Veil", glow: "#FFC2D6" },
  { slug: "roseash", name: "Rose Ash", glow: "#E8899F" },
  { slug: "champagne", name: "Champagne Dawn", glow: "#F5C98C" },
  { slug: "copper", name: "Copper Ember", glow: "#FF7229" },
  { slug: "crimson", name: "Crimson Vein", glow: "#FF444C" },
  { slug: "citrine", name: "Citrine Arc", glow: "#FCFF3D" },
  { slug: "lime", name: "Lime Circuit", glow: "#B4FF32" },
  { slug: "cyan", name: "Cyan Veil", glow: "#31E5FF" },
  { slug: "cobalt", name: "Cobalt Arc", glow: "#2D7BFF" },
  { slug: "magenta", name: "Magenta Pulse", glow: "#FF49AC" },
  { slug: "amethyst", name: "Amethyst Glow", glow: "#A954FF" },
  { slug: "goldhalo", name: "Gold Halo", glow: "#FFE430" },
  { slug: "emerald", name: "Emerald Pulse", glow: "#3BF39B" },
  { slug: "rosequartz", name: "Rose Quartz", glow: "#FFA8C4" },
  { slug: "solarember", name: "Solar Ember", glow: "#FF7A5C" },
  { slug: "solarflare", name: "Solar Flare", glow: "#FFC24D" },
  { slug: "orbit", name: "Orbit Field", glow: "#FFA5AC" },
  { slug: "nebula", name: "Nebula Bloom", glow: "#C97BFF" },
  { slug: "aurora", name: "Aurora Prism", glow: "#7FE8D0" },
  { slug: "diamond", name: "Diamond Core", glow: "#CCDAFF" },
  { slug: "spectrum", name: "Neon Spectrum", glow: "#E0A0FF" },
  { slug: "supernova", name: "Supernova", glow: "#FFABC1" },
  { slug: "twinvortex", name: "Twin Vortex", glow: "#FFB1DF" },
  { slug: "mercury", name: "Liquid Mercury", glow: "#FFB2E2" },
  { slug: "suncore", name: "Sun Core", glow: "#FFC98A" },
];

function hexToRgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function Row({ items, dir, dur }: { items: typeof RINGS; dir: "left" | "right"; dur: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden">
      <div
        className={`flex w-max gap-5 ${dir === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ ["--dur" as string]: dur }}
      >
        {doubled.map((r, i) => (
          <div
            key={`${r.slug}-${i}`}
            className="glass relative flex h-[300px] w-[230px] shrink-0 flex-col items-center justify-end overflow-hidden rounded-[28px] pb-7"
          >
            <div
              aria-hidden
              className="absolute left-1/2 top-[38%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: `radial-gradient(closest-side, ${hexToRgba(r.glow, 0.28)}, transparent 72%)`,
              }}
            />
            <Image
              src={`/rings/${r.slug}.png`}
              alt=""
              width={180}
              height={180}
              className="absolute left-1/2 top-[38%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 select-none"
              draggable={false}
            />
            <span className="relative text-[14px] text-[#d9d9d9]">{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "Unlock precious Milestones" — Void's version is the twenty-seven rings.
 * Two rows scroll opposite ways; hover pauses them.
 */
export function RingsMarquee() {
  const a = RINGS.filter((_, i) => i % 2 === 0);
  const b = RINGS.filter((_, i) => i % 2 === 1);
  return (
    <section id="rings" className="scroll-mt-24 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-wide px-6 text-center">
        <span className="tag">Rings</span>
        <h2 className="mt-5 text-[38px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
          Unlock the rings
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-dim">
          Twenty-seven eclipses. One for every streak, every thousand dollars
          kept, every urge ridden out.
        </p>
      </Reveal>
      <div className="mt-14 space-y-5">
        <Row items={a} dir="left" dur="70s" />
        <Row items={b} dir="right" dur="80s" />
      </div>
    </section>
  );
}
