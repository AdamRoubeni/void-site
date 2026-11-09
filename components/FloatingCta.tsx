"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/appStore";

/**
 * The chip that rides the bottom of the screen once the hero is gone. Opal
 * floats a running hours counter there; Void has no user figure it could
 * honestly print, so the chip is the way in.
 */
export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 rounded-full border border-white/10 bg-[#141414]/85 py-2 pl-4 pr-2 text-[14px] text-[#d6d6d6] shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
          show ? "pointer-events-auto" : ""
        }`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        <span>
          <span className="font-mono tracking-tight text-white">Void</span> is live on the
          App Store
        </span>
        <span className="rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-black">
          Download
        </span>
      </a>
    </div>
  );
}
