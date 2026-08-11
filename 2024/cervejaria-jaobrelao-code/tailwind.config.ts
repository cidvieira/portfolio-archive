import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lingLengLang)'],
      },
      colors: {
        amber: "#E3D159",
        yellow: "#BEA91F",
        lime: "#E1F72A",
        green: {
          400: "#66A708",
          800: "#5A9406",
          950: "#548809"
        },
        orange: {
          200: "#F8B255",
          400: "#F3643E",
          800: "#CF4F34",
          950: "#31120B"
        },
        rose: {
          200: "#EB7875",
          400: "#C54A57",
          800: "#AD424E",
          950: "#321513"
        }        
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
} satisfies Config;
