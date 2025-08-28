import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b0c7ff",
          300: "#86a7ff",
          400: "#5d88ff",
          500: "#356aff",
          600: "#1b52e6",
          700: "#143fba",
          800: "#0d2d8a",
          900: "#071b59"
        },
        bgblue: "#dbeaf6"
      }
    },
  },
  plugins: [],
};
export default config;
