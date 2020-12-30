/**
 * Next.js Configuration
 * @param [plugin: function, configuration?: object, phases?: array]
 * @see: https://github.com/cyrilwanner/next-compose-plugins
 */
const { withPlugins, optional } = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfiguration = {
  webpack: (config, _options) => {
    // modify the `config` here
    return config
  },
}

const plugins = [[optional(() => withBundleAnalyzer)]]

module.exports = withPlugins(plugins, nextConfiguration)
