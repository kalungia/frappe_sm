import defaultTheme from 'tailwindcss/defaultTheme'
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
  safelist: [
    // Text and Background colors (dynamic usage)
    { pattern: /^(bg|text|border|ring)-(red|green|blue|yellow|gray|stone|orange|cyan|indigo|facebook|twitter|mastodon)-(50|100|200|300|400|500|600|700|800|900)$/, variants: ['hover', 'focus', 'active', 'dark'] },
  
    // Padding & Margin utilities (e.g., py-2xl)
    { pattern: /^(p|px|py|pt|pb|pl|pr)-(xs|sm|md|lg|xl|2xl)$/, variants: ['sm', 'md', 'lg'] },
    { pattern: /^(m|mx|my|mt|mb|ml|mr)-(xs|sm|md|lg|xl|2xl)$/, variants: ['sm', 'md', 'lg'] },
  
    // Text alignment
    { pattern: /^text-(left|center|right|justify)$/, variants: ['sm', 'md', 'lg'] },
  
    // Font weights and sizes
    { pattern: /^font-(thin|light|normal|medium|semibold|bold|extrabold|black)$/, variants: ['sm', 'md'] },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/, variants: ['sm', 'md'] },
  
    // Display utilities
    { pattern: /^flex$/, variants: ['sm', 'md', 'lg'] },
    { pattern: /^grid$/, variants: ['sm', 'md', 'lg'] },
    { pattern: /^hidden$/, variants: ['sm', 'md', 'lg'] },
  
    // Widths & Heights
    { pattern: /^w-(full|screen|min|max|auto|1\/2|1\/3|2\/3|1\/4|3\/4)$/, variants: ['sm', 'md', 'lg'] },
    { pattern: /^h-(full|screen|min|max|auto)$/, variants: ['sm', 'md', 'lg'] },
  
    // Border Radius
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/, variants: ['sm', 'md', 'lg'] },
  
    // Ring and shadow
    { pattern: /^ring(-(0|1|2|4|8|inset))?$/, variants: ['focus', 'hover'] },
    { pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/, variants: ['hover'] },
  
    // State modifiers for specific classes
    { pattern: /^cursor-(pointer|not-allowed|default)$/, variants: ['hover', 'active'] },
    { pattern: /^opacity-(0|25|50|75|100)$/, variants: ['hover', 'active'] },
  
    // Miscellaneous patterns (overflow, z-index, object-fit, etc.)
    { pattern: /^overflow-(auto|hidden|visible|scroll)$/, variants: ['sm', 'md'] },
    { pattern: /^z-(0|10|20|30|40|50|auto)$/, variants: ['sm', 'md'] },
    { pattern: /^object-(contain|cover|fill|none|scale-down)$/, variants: ['sm', 'md'] },
  
    // Your original pattern for important colors
    { pattern: /!(text|bg)-/, variants: ['hover', 'active'] },
  ],  
  theme: {
    extend: {
      fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
          stone: {
              "50": "#FFFFFF",
              "100": "#FFFFFF",
              "200": "#FCFCFC",
              "300": "#FCFCFC",
              "400": "#FAFAFA",
              "500": "#FAFAFA",
              "600": "#C7C7C7",
              "700": "#969696",
              "800": "#636363",
              "900": "#333333"
          },
          red: {
              "50": "#FDEDED",
              "100": "#FBDADC",
              "200": "#F7B6B9",
              "300": "#F3969A",
              "400": "#EF7177",
              "500": "#EB4D55",
              "600": "#E11923",
              "700": "#AA131B",
              "800": "#6E0C11",
              "900": "#370609"
          },
          orange: {
              "50": "#FFF5EB",
              "100": "#FFEEDB",
              "200": "#FFDEB8",
              "300": "#FFCD94",
              "400": "#FFBC70",
              "500": "#FFAB4C",
              "600": "#FF8D0A",
              "700": "#C76A00",
              "800": "#854700",
              "900": "#422300"
          },
          cyan: {
              "50": "#F1FDFE",
              "100": "#E7FBFD",
              "200": "#D0F7FB",
              "300": "#B4F2F9",
              "400": "#9CEEF7",
              "500": "#84E9F5",
              "600": "#3EDEEF",
              "700": "#11BCD0",
              "800": "#0B818E",
              "900": "#064047"
          },
          indigo: {
              "50": "#EDECF8",
              "100": "#DCDAF1",
              "200": "#B8B4E4",
              "300": "#958FD6",
              "400": "#726AC8",
              "500": "#4F46BB",
              "600": "#3F3795",
              "700": "#2F2970",
              "800": "#1F1B4B",
              "900": "#100E25"
          },
          facebook: '#1877f2',
          twitter: '#000000',
          mastodon: '#6364FF'
      },
      boxShadow: {
          'mix': '0 5px 10px rgb(55 55 89 / 8%)',
      },
      spacing: {
          'xs': '0.5rem', // 2
          'sm': '0.75rem', // 3
          'md': '1rem', // 4
          'lg': '1.5rem', // 6
          'xl': '2rem', // 8
          '2xl': '2.5rem', // 10
      },
      gridTemplateColumns: {
          'week-time-sm': '48px repeat(7, 1fr)',
          'week-time': '70px repeat(7, 1fr)'
      }
    },
  },
  plugins: [],
}


