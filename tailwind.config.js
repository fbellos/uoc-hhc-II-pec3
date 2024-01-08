/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'boxcolor': 'fff7e8',
      'uoccorporate': '#000078',
      'uocmasterbrand': '#73edff',
      'uoccorporateligth': '#d5faff',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontSize: {
      },
      spacing: {
      },
      borderRadius: {
      }
    }
  },
  plugins: [],
}

