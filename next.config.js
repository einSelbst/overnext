/**
 * Next.js Configuration
 * @param [plugin: function, configuration?: object, phases?: array]
 * @see: https://github.com/cyrilwanner/next-compose-plugins
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { withPlugins, optional } = require('next-compose-plugins')

const nextConfiguration = {
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de', 'es', 'fr', 'it'],
    defaultLocale: 'en',
  },

  webpack: (config, _options) => {
    // modify the `config` here
    return config
  },
  target: 'serverless',
}

const plugins = [[optional(() => withBundleAnalyzer)]]

module.exports = withPlugins(plugins, nextConfiguration)
