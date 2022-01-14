module.exports = {
  content: [
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  future: {
    applyComplexClasses: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  plugins: [],
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
