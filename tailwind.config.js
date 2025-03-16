/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        'btn-primary': 'var(--btn-bg)',
        'btn-primary-text': 'var(--btn-text)',
        'btn-inverted': 'var(--btn-inverted-bg)',
        'btn-inverted-text': 'var(--btn-inverted-text)',
      },
      backgroundColor: {
        'card': 'var(--card-bg)',
      },
      borderColor: {
        'card': 'var(--card-border)',
      },
      textColor: {
        'muted': 'var(--muted-text)',
      },
    },
  },
  plugins: [],
} 