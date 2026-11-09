import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/appStore";

const LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "The numbers", href: "/#numbers" },
  { label: "Guides", href: "/#guides" },
  { label: "Support", href: "/support" },
];

/**
 * The floating pill nav: fixed at the top, centred, blurred — the page's hero
 * video runs underneath it. Sub pages pad themselves clear of it.
 */
export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5">
      <div className="pointer-events-auto flex h-[60px] w-full max-w-[1040px] items-center justify-between rounded-full border border-white/[0.07] bg-[#0b0b0b]/70 pl-5 pr-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Void home">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[8px]"
            priority
          />
          <span className="text-[15px] font-bold tracking-[0.32em] text-white">
            VOID
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[15px] text-[#b9b9b9] transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Get Void
        </a>
      </div>
    </header>
  );
}
