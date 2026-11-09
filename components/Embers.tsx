"use client";

import { useEffect, useRef } from "react";

/**
 * The Void field from the app's onboarding (components/VoidBackground.tsx),
 * in a canvas: slow-drifting gold embers rising through the dark. Larger ones
 * drift faster — the parallax cue. Pauses off-screen and under reduced motion.
 */
export function Embers({ className = "", count = 34 }: { className?: string; count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    type P = { x: number; y: number; r: number; v: number; sway: number; rate: number; peak: number; life: number; phase: number };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const ps: P[] = Array.from({ length: count }, () => {
      const r = rand(1.2, 3.2);
      return {
        x: Math.random(),
        y: Math.random(),
        r,
        v: (8 + rand(0, 6) + (r - 1.2) * 4) / 1000,
        sway: rand(6, 20),
        rate: rand(0.05, 0.13),
        peak: rand(0.22, 0.6),
        life: rand(14, 30),
        phase: Math.random(),
      };
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      if (running) raf = requestAnimationFrame(tick);
    });
    io.observe(canvas);

    let last = performance.now();
    let t = 0;
    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        const cycle = ((t / p.life + p.phase) % 1 + 1) % 1;
        const fade = cycle < 0.15 ? cycle / 0.15 : cycle > 0.8 ? (1 - cycle) / 0.2 : 1;
        const y = ((p.y - t * p.v) % 1 + 1) % 1;
        const x = p.x * w + Math.sin(t * p.rate * Math.PI * 2 + p.phase * 7) * p.sway;
        const a = p.peak * fade;
        const g = ctx.createRadialGradient(x, y * h, 0, x, y * h, p.r * 3);
        g.addColorStop(0, `rgba(246, 214, 137, ${a})`);
        g.addColorStop(0.4, `rgba(232, 181, 77, ${a * 0.55})`);
        g.addColorStop(1, "rgba(232, 181, 77, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y * h, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
