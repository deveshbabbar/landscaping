import type { Config } from "tailwindcss";

/**
 * Stoneward Outdoor Living — design system.
 * Fresh, high-contrast modern botanical (NOT cream/gold): a cool mist-white
 * base, deep olive-charcoal brand surface, and a single leaf-green accent used
 * sparingly for CTAs, links, and highlights. Headings in Sora, body in Inter.
 * Tune values here and every component updates automatically.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cool fresh near-white base — replaces any cream/ivory.
        mist: {
          DEFAULT: "#F4F6F2",
          deep: "#E9EDE4", // alternating section background
          soft: "#FBFCFA",
        },
        // Primary brand dark — header, footer, feature blocks, image overlays.
        olive: {
          DEFAULT: "#23271E",
          soft: "#2E3327",
          deep: "#191C14",
        },
        // Headings & body text on light.
        ink: {
          DEFAULT: "#14160F",
          soft: "#3A3D33",
        },
        // Secondary text, borders, captions.
        stone: {
          DEFAULT: "#5E6157",
          soft: "#8A8D82",
        },
        // Accent / action color — used sparingly (CTAs, links, highlights).
        leaf: {
          DEFAULT: "#7CB342", // bright accent — fills (with dark text), icons, stat numbers
          hover: "#5E9230", // button hover
          deep: "#3E6B23", // AA-safe green for text/links on light backgrounds
        },
        // Optional deep-green for subtle gradients / secondary dark blocks.
        moss: {
          DEFAULT: "#3E5A2E",
          deep: "#2C411F",
        },
      },
      fontFamily: {
        // Provided by next/font as CSS variables in app/layout.tsx
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 18px 50px -22px rgba(20, 22, 15, 0.25)",
        "soft-lg": "0 36px 80px -34px rgba(20, 22, 15, 0.32)",
        leaf: "0 16px 40px -18px rgba(94, 146, 48, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.3s ease both",
        "ken-burns": "ken-burns 24s ease-out forwards",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
