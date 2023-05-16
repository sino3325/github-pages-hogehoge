/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // for FlowBite
    "./node_modules/flowbite/**/*.js",
    // for Preline
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // for FlowBite
    require('flowbite/plugin'),
    require("daisyui"),
    require('preline/plugin'),
  ],
}

