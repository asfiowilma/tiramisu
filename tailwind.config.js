/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        ms: "425px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#6436E1",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#661AE6",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  darkMode: ["class", '[data-theme="dark"]'],
};
