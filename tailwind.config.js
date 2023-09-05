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
    extend: {
      colors: {
        main: '#000',
        bg_light: '#FFF',
        bg_dark: '#222',
        text_light: '#222',
        text_dark: '#EEE',
      },
    },
  },
  plugins: [],
}
