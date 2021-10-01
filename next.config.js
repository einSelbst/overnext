// @ts-check
/**
 * Next.js Configuration
 *
 * @see https://github.com/cyrilwanner/next-compose-plugins
 * @see https://github.com/natterstefan/next-with-sentry/blob/main/next.config.js
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
  return LOCALHOST // might also be Github CI
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
      detectPlatform() === LOCALHOST
        ? undefined
        : 'https://0018cedc25c448d18f8960ba34f0b779@o470070.ingest.sentry.io/5978249',
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
    /* profiling: true, */
    /* sprFlushToDisk: true, */
    /* workerThreads: false */
    /* pageEnv: false */
    /* optimizeImages: false, */
    /* enableStaticImages: false, */
    /* optimizeCss: true, */
    /* scrollRestoration: false, */
    /* stats: true, */
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

  /*
   * next.js font optimization breaks the link element insofar that there is no 'url' property, which my
   * html linter complains about. unfortunately it's not possible to disable the linter because next.js
   * puts the updated code at the top of the document head. I should re-enable font-optimization for production
   * but will keep it disabled for now to get the linter feedback.
   */
  optimizeFonts: false,
  poweredByHeader: false,
  /*
   * publicRuntimeConfig: {
   *   dns: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
   * },
   */
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
 * Set a custom webpack configuration to use Next.js app with Sentry.
 *
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 * @see https://blog.sentry.io/2020/08/04/enable-suspect-commits-unminify-js-and-track-releases-with-vercel-and-sentry
 */
const SentryWebpackPluginOptions = {
  /*
   * Additional config options for the Sentry Webpack plugin. Keep in mind that
   * the following options are set automatically, and overriding them is not
   * recommended:
   *   release, url, org, project, authToken, configFile, stripPrefix,
   *   urlPrefix, include, ignore
   */

  /*
   * Modify the event here
   * can use this to improve privacy, eg. to disable error reporting if user not d'accord
   * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/filtering/
   */
  beforeSend(event) {
    if (event.user) {
      // Don't send user's email address
      delete event.user.email
    }
    return event
  },
  debug: true,
  /* dryRun: process.env.NODE_ENV === 'development', */
  dryRun: true,
  silent: true, // Suppresses all logs

  /*
   * For all available options, see:
   * https://github.com/getsentry/sentry-webpack-plugin#options.
   */
}

/*
 * Make sure adding Sentry options is the last code to run before exporting, to
 * ensure that your source maps include changes from all other Webpack plugins
 */
module.exports = withSentryConfig(
  nextPluginConfiguration,
  SentryWebpackPluginOptions
)
