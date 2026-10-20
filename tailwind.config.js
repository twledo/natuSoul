/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ground: v('ground'),
        panel: v('panel'),
        ink: v('ink'),
        mute: v('mute'),
        rule: v('rule'),
        wood: v('wood'),
        leaf: '#2C4C3B',
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
