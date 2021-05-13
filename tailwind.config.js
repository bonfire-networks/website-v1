const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    // enabled: true,
    content: [
    "index.html", "faq.html", "extensions/*", "apps/*", "extensions.html", "apps.html"
  ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              h2: {
                color: theme('colors.white')
              },
              a: {
                color: theme('colors.white'),
              }
            }
          ]
        }
    })
  }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('tailwindcss-debug-screens')
  ],
}
