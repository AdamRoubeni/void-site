import type { ReactNode } from "react";
import Link from "next/link";

import { AppStoreBadge } from "@/components/AppStoreBadge";
import { CrisisCard } from "@/components/CrisisCard";
import { GuideLinks } from "@/components/GuideLinks";
import { GuideJsonLd } from "@/components/JsonLd";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PRICING_LINE } from "@/lib/appStore";

/**
 * The shell every guide page shares: a floating header, a title, the answer
 * in the first paragraph, a real app screenshot in the drawn phone, the
 * body, a FAQ (also emitted as FAQPage markup), the App Store, "read next",
 * and the crisis card. Server-rendered plain HTML: every word is in the
 * document for crawlers and answer engines, nothing waits on JavaScript.
 */
export type Faq = { q: string; a: string };

export function Guide({
  path,
  eyebrow,
  title,
  lead,
  description,
  published,
  modified,
  image,
  imageAlt,
  imageCaption,
  children,
  faq,
}: {
  path: string;
  eyebrow: string;
  title: string;
  lead: ReactNode;
  description: string;
  published: string;
  modified: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  children: ReactNode;
  faq: Faq[];
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-wide px-6 pt-20">
        <article className="pt-16">
          <header className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div>
              <nav aria-label="Breadcrumb" className="text-[13px] text-faint">
                <Link href="/" className="hover:text-dim">Void</Link>
                <span className="mx-2">/</span>
                <span>{eyebrow}</span>
              </nav>
              <h1 className="mt-4 text-[36px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[52px]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#d6d6d6] sm:text-[19px]">
                {lead}
              </p>
              <p className="mt-4 text-[13px] text-faint">
                Updated {new Date(modified + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · Checked against Void 1.1.5
              </p>
            </div>
            <figure className="mx-auto w-[240px] sm:w-[280px] lg:w-full">
              <PhoneFrame src={image} alt={imageAlt} priority />
              <figcaption className="mt-3 text-center text-[12px] leading-relaxed text-faint">
                {imageCaption}
              </figcaption>
            </figure>
          </header>

          <div className="guide mt-14 max-w-content">{children}</div>

          <section className="mt-16 max-w-content" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl font-semibold">Common questions</h2>
            <dl className="mt-6">
              {faq.map((f) => (
                <div key={f.q} className="border-t border-line py-5 last:border-b">
                  <dt className="font-semibold">{f.q}</dt>
                  <dd className="mt-1.5 leading-relaxed text-dim">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="glass mt-16 max-w-content rounded-[28px] p-8 text-center sm:p-10">
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em]">
              Void is on the App Store
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-dim">
              Made for iPhone. Blocking runs through Apple&apos;s Screen Time on your own phone; Void never sees which apps you choose.
            </p>
            <div className="mt-6 flex justify-center">
              <AppStoreBadge />
            </div>
            <p className="mx-auto mt-5 max-w-md text-[12px] leading-relaxed text-faint">{PRICING_LINE}</p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold">Read next</h2>
            <GuideLinks exclude={path} />
          </section>

          <section className="mt-16 max-w-content">
            <CrisisCard />
          </section>
        </article>
      </main>
      <div className="pt-16">
        <SiteFooter />
      </div>
      <GuideJsonLd
        path={path}
        title={title}
        description={description}
        published={published}
        modified={modified}
        faq={faq}
      />
    </>
  );
}
