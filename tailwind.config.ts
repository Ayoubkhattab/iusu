import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#024059",
        secondary: "#147CA6",
        success: "#03A679",
        info: "#02735F",
        light: "#F5F5F5",
        dark: "#231F20",
        test: "#606060",
        grat: "#D7DFE2",
        warning: "#ffc107",
        danger: "#dc3545",
      },
      keyframes: {
        moveY: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        moveY: "moveY 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
