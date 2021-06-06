// @ts-check
/**
 * Next.js Configuration
 *
 * @see https://github.com/cyrilwanner/next-compose-plugins
 */
const { withPlugins, optional } = require('next-compose-plugins')
const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfiguration = {
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',
  /* optimizeFonts: false, */
  env: {
    customKey: 'my-value',
    platform: process.env.VERCEL === '1' ? 'Vercel' : 'Netlify', // just a test
  },
  i18n: {
    locales: ['en', 'de', 'es', 'fr', 'it'],
    defaultLocale: 'en',
  },
  webpack: (
    /** @type {{ plugins: any[]; }} */ config,
    /** @type {{ dev: any; isServer: any; }} */ _options
  ) =>
    /* { buildId, dev, isServer, defaultLoaders, webpack } = options */
    config,
  future: {
    webpack5: true,
  },
  // @see {@link https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config-shared.ts#L68}
  experimental: {
    // plugins?: boolean;
    profiling: true,
    /* sprFlushToDisk: true, */
    /* workerThreads: false */
    /* pageEnv: false */
    /* optimizeImages: false, */
    /* enableStaticImages: false, */
    /* optimizeCss: true, */
    /* scrollRestoration: false, */
    stats: true,
    /* externalDir: false, */
    /* reactRoot: Number(process.env.NEXT_PRIVATE_REACT_ROOT) > 0, */
    /* enableBlurryPlaceholder: false, */
    /* disableOptimizedLoading: true, */
    /* gzipSize: true, */
  },
  amp: {
    /* canonicalBase: '', */
  },
}

/**
 * Plugins go here
 * params: function, configuration?: object, phases?: array
 *
 * I don't want to have 'bundle-analyzer' loaded in production at all
 * so I added this check for an env var
 */
const plugins = () =>
  process.env.ANALYZE === 'true'
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

module.exports = withPlugins(plugins(), nextConfiguration)
