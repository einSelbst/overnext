/**
 * Next.js Configuration
 * @param [plugin: function, configuration?: object, phases?: array]
 * @see: https://github.com/cyrilwanner/next-compose-plugins
 */
const { withPlugins, optional } = require('next-compose-plugins')
const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfiguration = {
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',
  env: {
    customKey: 'my-value',
    platform: process.env.VERCEL === '1' ? 'Vercel' : 'Netlify', // just a test
  },
  i18n: {
    locales: ['en', 'de', 'es', 'fr', 'it'],
    defaultLocale: 'en',
  },
  webpack: (config, options) => {
    /* { buildId, dev, isServer, defaultLoaders, webpack } = _options */
    const { dev, isServer } = options

    /**
     * RelativeCi Agent Webpack configuration
     * @see {@link https://relative-ci.com/documentation/setup/webpack-plugin}
     */
    if (!dev && !isServer && !process.env.VERCEL) {
      const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
      config.plugins.push(new RelativeCiAgentWebpackPlugin())
    }

    return config
  },
  future: {
    webpack5: true,
  },
}

/**
 * I don't want to have 'bundle-analyzer' loaded in production at all
 * so I added this check for an env var
 */
const plugins = () => {
  return process.env.ANALYZE === 'true'
    ? [
        [
          optional(() =>
            require('@next/bundle-analyzer')({
              enabled: process.env.ANALYZE === 'true',
            })
          ),
          {
            /* optional configuration */
          },
          ['!', PHASE_DEVELOPMENT_SERVER],
        ],
        [
          withPWA,
          {
            pwa: {
              disable: process.env.NODE_ENV === 'development',
              dest: 'public',
            },
          },
        ],
      ]
    : [
        withPWA,
        {
          pwa: {
            disable: process.env.NODE_ENV === 'development',
            dest: 'public',
          },
        },
      ]
}

module.exports = withPlugins(plugins(), nextConfiguration)
