import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
    accent: "#22d3ee",
    cornflower: "#6495ED",      }
    }
  },
  plugins: []
} satisfies Config;
