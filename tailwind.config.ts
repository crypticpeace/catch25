import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1180px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#2E2A84", deep: "#1E1B5E", soft: "#C9CAF0" },
        brand: { red: "#E1141E", sun: "#FFC83D", sky: "#CDEBFF", mint: "#D3F2E2", blush: "#FFE1E3", cream: "#FFF6C8" },
        ink: "#1B1A3A",
        muted: "#5B5B78",
        mist: "#F4F5FB",
        line: "#E2E3F0",
        wa: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "Trebuchet MS", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Segoe UI", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
      },
      maxWidth: { wrap: "1180px", prose: "68ch" },
      boxShadow: {
        sun: "0 4px 0 #D9A21A",
        navy: "0 4px 0 #1E1B5E",
        lift: "0 18px 40px rgba(30,27,94,.16)",
        card: "0 14px 30px rgba(30,27,94,.10)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(0)" }, "50%": { transform: "translateY(-10px) rotate(4deg)" } },
        pulsering: { "0%": { transform: "scale(.6)", opacity: ".35" }, "100%": { transform: "scale(1.9)", opacity: "0" } },
        nudge: { "0%,85%,100%": { transform: "scale(1)" }, "90%": { transform: "scale(1.08)" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        pulsering: "pulsering 2.4s ease-out infinite",
        nudge: "nudge 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
