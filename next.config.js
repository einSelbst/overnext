/**
 * Next.js Configuration
 * @param [plugin: function, configuration?: object, phases?: array]
 * @see: https://github.com/cyrilwanner/next-compose-plugins
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { withPlugins, optional } = require('next-compose-plugins')
const withPWA = require('next-pwa')

const nextConfiguration = {
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',
  i18n: {
    locales: ['en', 'de', 'es', 'fr', 'it'],
    defaultLocale: 'en',
  },

  webpack: (config, _options) => {
    // modify the `config` here
    return config
  },
  future: {
    webpack5: true,
  },
  // example taken from
  // https://nextjs.org/blog/next-10-2#header-cookie-and-query-matching-for-rewrites-and-redirects
  async redirects () {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'GB',
          },
        ],
        destination: '/:path*/uk',
        permanent: true,
      },
    ]
  },
}

const plugins = [
  [optional(() => withBundleAnalyzer)],
  [
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
      },
    }),
  ],
]

module.exports = withPlugins(plugins, nextConfiguration)
