import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(255 255 255 / 0.8)',
            a: {
              color: 'rgb(255 255 255 / 0.8)',
              '&:hover': {
                color: 'rgb(255 255 255 / 0.6)',
              },
            },
            h1: {
              color: 'rgb(255 255 255 / 1)',
            },
            h2: {
              color: 'rgb(255 255 255 / 1)',
            },
            h3: {
              color: 'rgb(255 255 255 / 1)',
            },
            strong: {
              color: 'rgb(255 255 255 / 1)',
            },
            blockquote: {
              color: 'rgb(255 255 255 / 0.8)',
              borderLeftColor: 'rgb(255 255 255 / 0.2)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
