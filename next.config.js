// @ts-check
/**
 * Next.js Configuration
 *
 * @see https://github.com/cyrilwanner/next-compose-plugins
 */
const { withPlugins, optional } = require('next-compose-plugins')
const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const VERCEL = 'VERCEL'
const NETLIFY = 'NETLIFY'
const AMPLIFY = 'AMPLIFY'
const LOCALHOST = 'LOCALHOST'

const detectPlatform = () => {
  if (process.env.VERCEL === '1') {
    return VERCEL
  } else if (process.env.NETLIFY === 'true') {
    return NETLIFY
  } else if (process.env.CODEBUILD_CI === 'true') {
    return AMPLIFY
  }
  return LOCALHOST
}

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfiguration = {
  amp: {
    /* canonicalBase: '', */
  },

  env: {
    customKey: 'my-value',
    // just a test
    platform: detectPlatform(),
    platform1: process.env.VERCEL === '1' ? 'Vercel' : 'Netlify',
  },
  eslint: {
    /*
     * Warning: Dangerously allow production builds to successfully complete even if
     * your project has ESLint errors. ... I don't want a production dependency on eslint
     */
    ignoreDuringBuilds: true,
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

  future: {},

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'fr', 'it'],
  },

  /* optimizeFonts: false, */
  poweredByHeader: false,
  reactStrictMode: true,
  target: 'serverless',

  webpack: (
    /** @type {{ plugins: any[]; }} */ config,
    /** @type {{ dev: any; isServer: any; }} */ _options
  ) =>
    /* { buildId, dev, isServer, defaultLoaders, webpack } = options */
    config,
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
              dest: 'public',
              disable: process.env.NODE_ENV === 'development',
            },
          },
        ],
      ]
    : [
        withPWA,
        {
          pwa: {
            dest: 'public',
            disable: process.env.NODE_ENV === 'development',
          },
        },
      ]

module.exports = withPlugins(plugins(), nextConfiguration)
