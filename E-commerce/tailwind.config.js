/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        Montserrat: ["Montserrat","sans-serif"],
        Cookie: ["Cookie","cursive"],
       },
       dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'simpledrop': ' 0px 15px 10px -15px #111'
      },
      boxShadow: {
        'simpledrop': '0px 10px 10px -15px #111',
      }

    },
  },
  darkMode: "class",

  plugins: [
    require('flowbite/plugin'),
    require("tw-elements-react/dist/plugin.cjs")
  ],
}



