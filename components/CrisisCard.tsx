// Crisis resources. Rendered on the landing page and on /support.
//
// !! 1-800-GAMBLER IS NOT THE NATIONAL HELPLINE !!
// After a New Jersey Supreme Court ruling, NCPG lost the right to use it on
// 2025-09-29 and the National Problem Gambling Helpline reverted to
// 1-800-MY-RESET (1-800-697-3738). 1-800-GAMBLER is now operated by the Council
// on Compulsive Gambling of New Jersey and serves New Jersey only. Do not
// present it here as a national number.
//
// Verified against ncpgambling.org on 2026-07-27:
//   call  1-800-MY-RESET / 1-800-697-3738
//   text  1-800-697-3738 (their SMS terms also name 1-800-522-4700)
//   chat  ncpgambling.org/chat
// The mobile app seeds exactly these from its `resources` table; keep the two
// in step.

const OPTIONS = [
  {
    label: "Call 1-800-MY-RESET",
    detail: "National Problem Gambling Helpline · 1-800-697-3738",
    href: "tel:18006973738",
  },
  {
    label: "Text the helpline",
    detail: "1-800-697-3738 or 1-800-522-4700 — no call needed",
    href: "sms:18006973738",
  },
  {
    label: "Chat with a counsellor",
    detail: "In your browser, 24/7",
    href: "https://www.ncpgambling.org/chat/",
  },
  {
    label: "Call or text 988",
    detail: "Suicide & Crisis Lifeline",
    href: "tel:988",
  },
  {
    label: "Text HOME to 741741",
    detail: "Crisis Text Line",
    href: "sms:741741?&body=HOME",
  },
];

export function CrisisCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <h2 className="text-lg font-semibold">If you need help right now</h2>
      <p className="mt-3 leading-relaxed text-dim">
        Free, confidential, and open 24/7. You don&apos;t have to be in crisis to
        use any of these.
      </p>
      <ul className="mt-6 space-y-3">
        {OPTIONS.map((o) => (
          <li key={o.label}>
            <a
              href={o.href}
              className="block rounded-xl border border-line bg-black/20 px-4 py-3 transition-colors hover:border-white/30"
              {...(o.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="block font-medium text-white">{o.label}</span>
              <span className="mt-0.5 block text-sm text-dim">{o.detail}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-dim">
        These are independent organisations. Void receives nothing for listing
        them and never shares your information with them.
      </p>
    </div>
  );
}
