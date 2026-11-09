import { PhoneFrame } from "@/components/PhoneFrame";
import { Reveal } from "@/components/Reveal";

/**
 * One feature, Opal-style: a chip, a headline, two lines, and the phone —
 * a real screenshot of Void in a drawn device, floating in its own glow.
 * Alternates sides down the page.
 */
export function FeatureRow({
  tag,
  title,
  body,
  image,
  alt,
  flip = false,
  glow = "rgba(232,181,77,0.16)",
}: {
  tag: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  flip?: boolean;
  glow?: string;
}) {
  return (
    <div className="mx-auto grid w-full max-w-wide items-center gap-10 overflow-x-clip px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : ""}>
        <Reveal>
          <span className="tag">{tag}</span>
          <h3 className="mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
            {title}
          </h3>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-dim">{body}</p>
        </Reveal>
      </div>
      <Reveal delay={120} className={`relative ${flip ? "lg:order-1" : ""}`}>
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(closest-side, ${glow}, transparent 70%)` }}
        />
        <div
          className="floaty relative mx-auto w-[270px] sm:w-[340px]"
          style={{ ["--tilt" as string]: flip ? "-3deg" : "3deg" }}
        >
          <PhoneFrame src={image} alt={alt} />
        </div>
      </Reveal>
    </div>
  );
}
