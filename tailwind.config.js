module.exports = {
  darkMode: 'class',
  future: {
    applyComplexClasses: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  plugins: [],
  content: [
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: {
    standard: ['outline-none'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
