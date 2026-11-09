import Image from "next/image";
import Link from "next/link";
import { GUIDES } from "@/components/GuideLinks";
import { APP_STORE_URL } from "@/lib/appStore";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Download for iPhone", href: APP_STORE_URL, ext: true },
      { label: "How it works", href: "/#how-it-works" },
      { label: "The rings", href: "/#rings" },
      { label: "The numbers", href: "/#numbers" },
    ],
  },
  {
    title: "Guides",
    links: GUIDES.map((g) => ({ label: g.title, href: g.href })),
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "support@voidbetfree.com", href: "mailto:support@voidbetfree.com" },
    ],
  },
  {
    title: "Help right now",
    links: [
      { label: "Call 1-800-MY-RESET", href: "tel:18006973738" },
      { label: "Call or text 988", href: "tel:988" },
      { label: "Text HOME to 741741", href: "sms:741741?&body=HOME" },
      { label: "Chat at ncpgambling.org", href: "https://www.ncpgambling.org/chat/", ext: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-wide px-6 pb-28 pt-16">
      <div className="border-t border-white/[0.08] pt-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="rounded-[8px]" />
              <span className="text-[15px] font-bold tracking-[0.32em]">VOID</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-dim">
              VOID: Quit Gambling. You can still cash out.
            </p>
            <p className="mt-6 text-[13px] text-faint">
              &copy; 2026 Void App LLC. All rights reserved.<br />
              115 Gristmill Ln, Great Neck, NY 11023
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-faint">
                {c.title}
              </p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) =>
                  l.ext ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-[#c4c4c4] transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-[#c4c4c4] transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-[12px] leading-relaxed text-faint">
          Void is a self-help tool, not medical care. Blocking uses Apple&apos;s Screen Time on your own device: you choose what to block, and Void never monitors or transmits which apps you select. You can lower or remove the block yourself at any time; it is a commitment device, not a parental control. Money Saved is an estimate from the loss rate you reported, not money returned to you. The Void Score is a
          self-assessment, not a medical diagnosis. The helplines above are
          independent organisations; Void receives nothing for listing them and
          never shares your information with them.
        </p>
      </div>
    </footer>
  );
}
