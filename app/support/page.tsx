import type { Metadata } from "next";

import Link from "next/link";

import { CrisisCard } from "@/components/CrisisCard";
import { GUIDES } from "@/components/GuideLinks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Void: contact, how blocking and Money Saved work, what you can turn off, subscriptions, and crisis resources.",
  alternates: { canonical: "/support" },
};

const FAQ = [
  {
    q: "How do I delete my account?",
    a: "In the app, go to Settings and choose Delete Account. You'll confirm by typing, and all of your data is removed within 30 days. This is permanent.",
  },
  {
    q: "How does blocking work?",
    a: "Void uses Apple's Screen Time. You pick the betting apps and sites to block and iOS keeps them shut on your phone around the clock. There are no schedules and no off-hours: blocking is always on. Your selections reach Void as opaque tokens, so they never leave your phone and we cannot see them. The full walkthrough is on the How to block gambling apps on iPhone page.",
  },
  {
    q: "Can I get into a blocked app? What are the strictness levels?",
    a: "That depends on the strictness you chose. Standard opens a 15-minute access window right away, three a week, every one logged. Delay puts a 10-minute wait in front of the same window. Locked has no access from inside the app at all. Raising strictness is instant; lowering it, or turning blocking off, takes a 10-minute wait.",
  },
  {
    q: "How many sites does Void block?",
    a: "Two layers. Screen Time's web filter holds up to 49 sites: the ones you add yourself (up to 10) plus a curated list of major sportsbooks, casinos and sweeps brands. The optional site block, which you install from the app and which iOS lists as a VPN configuration, answers lookups for more than 340,000 gambling domains on your phone with 'no such site'. It only carries DNS, sends nothing to Void, and does not cover a browser using its own encrypted DNS or a site reached by raw IP address.",
  },
  {
    q: "Is Money Saved real money?",
    a: "No. Money Saved is an estimate, not money returned to you. It runs from the loss rate you reported when you set up Void, counts up every day since you started, and every bet you log is taken straight off it. It can fall, and it never goes below zero.",
  },
  {
    q: "Can I turn blocking off or remove Void?",
    a: "Yes. Lowering strictness or switching blocking off takes a 10-minute wait inside the app. Outside the app, iOS lets you revoke Void's Screen Time access in Settings, remove the site block under VPN & Device Management, or delete the app, which removes everything. Void is a commitment device, not a parental control, and it is not designed to be impossible to remove.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Onboarding answers stay on your device until you create an account, gambling data is never sold or shared, and there are no ad SDKs or third-party analytics with access to financial data. The full details are on the Privacy page.",
  },
  {
    q: "How do I cancel a subscription?",
    a: "Subscriptions are managed by Apple, not by Void. On your iPhone, open Settings, tap your name, tap Subscriptions, choose Void, and tap Cancel Subscription.",
  },
];

export default function Support() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-content px-6 pt-20">
        <div className="pt-16">
          <h1 className="text-3xl font-semibold">Support</h1>
          <p className="mt-6 leading-relaxed text-dim">
            Email{" "}
            <a
              href="mailto:support@voidbetfree.com"
              className="text-white underline underline-offset-4"
            >
              support@voidbetfree.com
            </a>{" "}
            with any question or problem. We reply within two business days,
            usually sooner.
          </p>
        </div>

        <section className="pt-16" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold">
            Common questions
          </h2>
          <dl className="mt-8">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="border-t border-line py-6 last:border-b"
              >
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-dim">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-16">
          <h2 className="text-2xl font-semibold">Guides</h2>
          <ul className="mt-4 space-y-2">
            {GUIDES.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="text-white underline underline-offset-4">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-16">
          <CrisisCard />
        </section>
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
    </>
  );
}
