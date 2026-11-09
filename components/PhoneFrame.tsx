import Image from "next/image";

/**
 * A raw iPhone screenshot in a drawn device: black bezel, the screen's own
 * corner radius, a hairline rim that catches light. No PNG frame, so any
 * screenshot Adam sends from the phone drops straight in.
 */
export function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[46px] border border-white/[0.14] bg-[#0a0a0a] p-[10px] shadow-[0_40px_120px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] ${className}`}
    >
      <div className="overflow-hidden rounded-[36px] bg-black">
        <Image
          src={src}
          alt={alt}
          width={415}
          height={900}
          sizes="(min-width: 640px) 340px, 270px"
          priority={priority}
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>
      {/* Dynamic Island */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[22px] h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black"
      />
    </div>
  );
}
