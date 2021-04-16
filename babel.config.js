const presets = [
  [
    'next/babel',
    {
      '@babel/preset-env': {
        targets: 'defaults',
        useBuiltIns: 'entry',
        // corejs version must be kept in sync with package.json
        // maybe automate with https://docs.renovatebot.com/configuration-options/#postupdateoptions
        corejs: '3.10.1',
      },
    },
  ],
]
const plugins = [
  /* ["istanbul"] */
]

if (process.env.APP_ENV === 'test') {
  // only load test coverage instrumentation when needed
  // eslint-disable-next-line no-console
  console.log('Loading coverage instrumentation')
  plugins.push('istanbul')
} else {
  // eslint-disable-next-line no-console
  console.log('NOT Loading coverage instrumentation')
}

module.exports = { presets, plugins }
/* module.exports = function(api) {
 *   return {presets, plugins};
 * }; */
