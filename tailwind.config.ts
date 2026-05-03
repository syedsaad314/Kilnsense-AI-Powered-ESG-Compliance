import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0D5C37",
        lime: "#22C55E",
        surface: "#f8fafc",
      },
    },
  },
  plugins: [],
};
export default config;