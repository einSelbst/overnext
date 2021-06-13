module.exports = {
  darkMode: 'class', // or 'media' or false
  future: {
    applyComplexClasses: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  plugins: [],
  purge: {
    content: [
      './src/layouts/**/*.{js,ts,jsx,tsx}',
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
