import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 920px)" },
      },
      colors: {
        transparent: "transparent",
        "dark-black": "#131721",
        black: "#1f2432",
        "light-black": "#343c53",
        gray: "#898c94",
        "light-gray": "#e4e4e4",
        white: "#ffffff",
        accent: "#1fd2eb",
        "dark-accent": "#00c4df",
        green: "#3df9b5",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
