"use client";

import { useEffect, useRef, useState } from "react";

import { STUDY_URL, USNEWS_2025_URL } from "@/lib/sources";

// The three figures from the app's own opening slides, sources and all.
// Every number here has a citation AND a direct link; that rule is the
// app's and it is the site's. Never add a figure without one.
//
// The 96% is about ONLINE GAMBLERS in the study's own panel, not "people who
// bet on sports": the Rady paper followed 717,724 online gamblers for five
// years across 32 states and 96% appeared to lose money. Say it that way.
const STATS = [
  {
    figure: "96%",
    verb: "of online gamblers lose.",
    source:
      "Wilbur, Taylor and McCarthy, UC San Diego Rady School of Management, 2024. 717,724 online gamblers followed for five years across 32 states.",
    href: STUDY_URL,
  },
  {
    figure: "1 in 4",
    verb: "missed a bill.",
    source:
      "U.S. News & World Report, 2025 Sports Betting and Debt Survey. 1,200 US adults who had bet on sports in the previous six months.",
    href: USNEWS_2025_URL,
  },
  {
    figure: "30%",
    verb: "have betting debt.",
    source: "U.S. News & World Report, 2025 Sports Betting and Debt Survey.",
    href: USNEWS_2025_URL,
  },
];

/**
 * Opal's "Average time saved" — three figures that swap as the section
 * scrolls, pinned in place. Ours are what betting does to the people who do
 * it, each with its source on screen.
 */
export function BigStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        setP(Math.max(0, Math.min(0.9999, total > 0 ? -rect.top / total : 0)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const idx = Math.floor(p * STATS.length);
  const local = p * STATS.length - idx; // 0..1 within the current figure

  return (
    <section id="numbers" ref={ref} className="relative h-[280vh] scroll-mt-24">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">
          The numbers
          <br />
          they never show you
        </h2>
        <div className="relative mt-10 h-[220px] w-full max-w-3xl sm:mt-14 sm:h-[260px]">
          {STATS.map((s, i) => {
            const active = i === idx;
            // ease in over the first 25% of the figure's window, out over the last 15%
            const opacity = !active
              ? 0
              : local < 0.25
                ? local / 0.25
                : local > 0.85
                  ? (1 - local) / 0.15
                  : 1;
            const shift = !active ? 30 : local < 0.25 ? (1 - local / 0.25) * 30 : local > 0.85 ? -((local - 0.85) / 0.15) * 20 : 0;
            return (
              <div
                key={s.figure}
                className="absolute inset-0 flex flex-col items-center justify-start"
                style={{
                  opacity,
                  transform: `translateY(${shift}px)`,
                  transition: "opacity 0.15s linear, transform 0.15s linear",
                }}
                aria-hidden={!active}
              >
                <p className="silver text-[96px] font-bold leading-none tracking-[-0.04em] sm:text-[150px]">
                  {s.figure}
                </p>
                <p className="mt-3 text-[22px] font-semibold text-[#8f8f8f] sm:text-[28px]">
                  {s.verb}
                </p>
                <p className="mx-auto mt-8 max-w-md text-[13px] leading-relaxed text-faint">
                  *
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={active ? 0 : -1}
                    className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-dim"
                  >
                    {s.source}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
