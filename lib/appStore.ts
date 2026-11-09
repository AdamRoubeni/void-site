export const APP_STORE_URL = "https://apps.apple.com/app/id6795194848";

/** The product's one name, everywhere we control it: the site, the App
 *  Store listing, the subscription names, the social bios. */
export const APP_NAME = "VOID: Quit Gambling";
export const APP_SHORT_NAME = "Void";

/** The subscription as the App Store shows it today (checked 2026-10-20).
 *  The SoftwareApplication structured data is built from these same values,
 *  so the markup can never say a price the page does not. */
export const PLANS = [
  { name: "Void Pro — Monthly", price: "9.99", period: "month" },
  { name: "Void Pro — Annual", price: "59.99", period: "year" },
] as const;

export const PRICING_LINE =
  "Void Pro is $9.99 a month or $59.99 a year, with a 7-day free trial on the annual plan. Billed by Apple; cancel any time in your iPhone's Settings.";
