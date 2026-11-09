# Void — marketing site

![Next.js](https://img.shields.io/badge/Next.js_14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

Source for **[voidbetfree.com](https://voidbetfree.com)**, the website for
[Void](https://voidbetfree.com), an iOS and Android app that blocks sportsbook
apps and helps people quit sports betting.

## Highlights

- **Next.js 14 App Router**, fully static where possible, deployed on Vercel.
- **SEO and answer-engine optimization:** generated `sitemap.ts` and `robots.ts`,
  JSON-LD structured data (Organization, MobileApplication, FAQ, Article),
  long-form guide pages with sourced statistics.
- **Motion-heavy landing page:** scroll-driven word reveals, video hero, animated
  stat counters and an app-screen gallery, all respecting `prefers-reduced-motion`.
- **Universal links:** `apple-app-site-association` plus deep-link pages
  (`/key/[token]`, `/crew/[code]`) that open the app or fall back to the App Store.
- **Supabase RPC** for the token-keyed pages, called through a small typed client.

## Structure

```
app/          routes: landing, guides, privacy, support, account deletion, deep links
components/   Hero, ScrollWords, BigStats, Gallery, FeatureRow, JsonLd, ...
lib/          App Store config, sourced stats, Supabase RPC client
public/       app screens, video, .well-known/apple-app-site-association
```

## Run locally

```bash
npm install
cp .env.example .env.local   # Supabase URL + anon key (only needed for deep-link pages)
npm run dev
```
