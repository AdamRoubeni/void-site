"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A statement that lights up word by word as you scroll past it — the
 * section stays pinned while the reader's own scrolling does the reading.
 * Reduced motion shows it fully lit.
 */
export function ScrollWords({
  text,
  source,
  sourceHref,
}: {
  text: string;
  source?: string;
  sourceHref?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? -rect.top / total : 1;
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lit = Math.floor(progress * (words.length + 2));

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] sm:text-[40px] lg:text-[46px]">
            {words.map((w, i) => (
              <span key={i} className={`word ${i < lit ? "word-lit" : ""}`}>
                {w}{" "}
              </span>
            ))}
          </p>
          {source ? (
            <p
              className="mt-8 text-[13px] text-faint transition-opacity duration-700"
              style={{ opacity: progress > 0.85 ? 1 : 0 }}
            >
              {sourceHref ? (
                <a
                  href={sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-dim"
                >
                  {source}
                </a>
              ) : (
                source
              )}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
