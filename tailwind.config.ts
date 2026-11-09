import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The app's palette (constants/theme.ts). Gold is money kept and
        // nothing else; champagne is the app's "you are here" accent.
        bg: "#050505",
        surface: "#121212",
        line: "#262626",
        dim: "#A6A6A6",
        faint: "#6B6B6B",
        gold: "#E8B54D",
        champagne: "#E8D5A8",
        negative: "#FF453A",
      },
      maxWidth: {
        content: "720px",
        wide: "1120px",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
