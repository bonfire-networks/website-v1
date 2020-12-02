const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}