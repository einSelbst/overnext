// @ts-check
/**
 * Next.js Configuration
 *
 * @see https://github.com/cyrilwanner/next-compose-plugins
 */
const { withSentryConfig } = require('@sentry/nextjs')
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

/*
 * Set a custom webpack configuration to use Next.js app with Sentry.
 *
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */
const SentryWebpackPluginOptions = {
  /*
   * Additional config options for the Sentry Webpack plugin. Keep in mind that
   * the following options are set automatically, and overriding them is not
   * recommended:
   *   release, url, org, project, authToken, configFile, stripPrefix,
   *   urlPrefix, include, ignore
   */

  silent: true, // Suppresses all logs
  /*
   * For all available options, see:
   * https://github.com/getsentry/sentry-webpack-plugin#options.
   */
}

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfiguration = {
  amp: {
    /* canonicalBase: '', */
  },

  env: {
    NEXT_PUBLIC_SENTRY_DSN:
      'https://6dbd51aeaa4a4e32b77e9f51a7236a64@o470070.ingest.sentry.io/5842378',
    platform: detectPlatform(),
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
  target: 'experimental-serverless-trace',

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

const nextPluginConfiguration = withPlugins(plugins(), nextConfiguration)

/*
 * Make sure adding Sentry options is the last code to run before exporting, to
 * ensure that your source maps include changes from all other Webpack plugins
 */
module.exports = withSentryConfig(
  nextPluginConfiguration,
  SentryWebpackPluginOptions
)
