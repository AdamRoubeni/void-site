import Link from "next/link";

/** The three guide pages, in the order a person usually needs them. Rendered
 *  on the homepage, in the footer, and under each guide as "Read next". */
export const GUIDES = [
  {
    href: "/block-gambling-apps-iphone",
    title: "How to block gambling apps on iPhone",
    blurb: "Screen Time on its own, or Void on top of it. The exact steps, what gets blocked, and what you can switch off.",
  },
  {
    href: "/quit-sports-betting",
    title: "How to quit sports betting",
    blurb: "Practical steps to cut back or stop: close the access, cut the money off, plan for urges, bring people in.",
  },
  {
    href: "/gambling-urges",
    title: "What to do with a gambling urge",
    blurb: "What works in the first ten minutes, why urges pass on their own, and how Void's panic button runs it.",
  },
] as const;

export function GuideLinks({ exclude }: { exclude?: string }) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-3">
      {GUIDES.filter((g) => g.href !== exclude).map((g) => (
        <li key={g.href}>
          <Link
            href={g.href}
            className="glass block h-full rounded-[24px] p-6 transition-colors hover:border-white/20"
          >
            <p className="text-[17px] font-semibold leading-snug">{g.title}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-dim">{g.blurb}</p>
            <p className="mt-4 text-[13px] font-medium text-champagne">Read the guide →</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
