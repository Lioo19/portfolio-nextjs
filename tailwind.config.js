const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content :['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
        baseyellow: "var(--baseyellow)",
        darkyellow: "var(--darkyellow)",
        yellow: colors.amber,
        black: colors.black,
        white: colors.white,
        red: colors.red,
        green: colors.emerald,
        gray: colors.coolGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
