module.exports = {
  purge: {
    content: ["./_site/**/*.html"],
    css: ["./_site/assets/css/main.css"],
    defaultExtractor:
        content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
    ],
}
