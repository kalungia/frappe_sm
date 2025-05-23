// import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
//import frappeUIPreset from 'frappe-ui/src/tailwind/preset.js'

export default {
  //presets: [frappeUIPreset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
    '../node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
    '../node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [],
}


