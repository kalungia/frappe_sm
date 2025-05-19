const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('frappe-ui/src/utils/tailwind.config')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: defaultTheme.colors.indigo,
      },
    },
  },
  plugins: [],
}
