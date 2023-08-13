/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ejs}'],
  theme: {
    screens: {
      s: { max: '767px' },
      m: { min: '768px', max: '1023px' },
      l: { min: '1024px', max: '1399px' },
      ll: { min: '1400px' },
    },
    colors: {
      main: '#FED54D',
      bg: '#FFFBEC',
      text: '#301E1E',
    },
    extend: {},
  },
  plugins: [],
}
