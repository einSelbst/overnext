// https://github.com/raceychan/lepro_bi/blob/master/superset/superset-frontend/babel.config.js
const presets = [
  [
    'next/babel',
    {
      '@babel/preset-env': {
        /*
         * corejs version must be kept in sync with package.json
         * maybe automate with https://docs.renovatebot.com/configuration-options/#postupdateoptions
         */
        corejs: '3.20.2',
        targets: 'defaults',
        useBuiltIns: 'entry',
      },
    },
  ],
]
const plugins = [
  // ["istanbul"]
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

module.exports = {
  plugins,
  /*
   * sourceMaps: true,
   * sourceType: 'module',
   * retainLines: true,
   */
  presets,
}
/*
 * module.exports = function(api) {
 *   return {presets, plugins};
 * };
 */
