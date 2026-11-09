import { APP_STORE_URL } from "@/lib/appStore";

/**
 * "Download on the App Store" — a white badge like the ones in Opal's hero,
 * drawn inline so it needs no asset and stays crisp at any size.
 */
export function AppStoreBadge({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Void on the App Store"
      className={`inline-flex h-12 items-center gap-2.5 rounded-xl px-4 transition-transform hover:scale-[1.03] active:scale-[0.98] ${
        dark
          ? "border border-white/15 bg-black text-white"
          : "bg-white text-black"
      } ${className}`}
    >
      <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden fill="currentColor">
        <path d="M18.2 13.8c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.6 1.1-1 0-2.4-1.1-4-1.1-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.2 1.5 12.2 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1s2.4 1 4 1c1.7 0 2.7-1.5 3.7-3 1.2-1.7 1.6-3.4 1.7-3.5-.1 0-3.2-1.2-3.2-4.7zM15.2 4.8c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.7-.7 3.6-1.7z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium opacity-80">Download on the</span>
        <span className="text-[19px] font-semibold tracking-tight">App Store</span>
      </span>
    </a>
  );
}
