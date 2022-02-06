// @ts-check
/* eslint-disable max-lines */
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

/* const buildId = `${Date.now()}` */
/* const generateBuildId = async () => buildId */

/*
 * Security Header stuff
 * @see {@link https://scotthel.me/cspcheatsheet}
 * Thanks @ https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/next.config.js
 *
 * You might need to insert additional domains in script-src if you are using external services
 * @see {@link https://report-uri.com/home/generate}
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' *.googleapis.com 'unsafe-inline';
  img-src * blob: data:;
  font-src 'self' data: fonts.gstatic.com;
  frame-src 'self' *.youtube-nocookie.com;
  connect-src *;
  media-src 'none';
  upgrade-insecure-requests
`

const PermissionsPolicy = `
  accelerometer=(),
  autoplay=(self "https://www.youtube-nocookie.com"),
  camera=(),
  display-capture=(),
  document-domain=(),
  encrypted-media=(),
  fullscreen=(self "https://www.youtube-nocookie.com"),
  geolocation=(),
  gyroscope=(),
  interest-cohort=(),
  magnetometer=(),
  microphone=(),
  midi=(),
  payment=(),
  picture-in-picture=(),
  publickey-credentials-get=(),
  sync-xhr=(),
  usb=(),
  screen-wake-lock=(),
  xr-spatial-tracking=()
`

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/gu, ''),
  },
  {
    key: 'Permissions-Policy',
    value: PermissionsPolicy.replace(/\n/gu, ''),
  },
]

/**
 * @type {import('next/dist/server/config').NextConfig}
 */
const nextConfiguration = {
  amp: {
    /* canonicalBase: '', */
  },

  env: {
    NEXT_PUBLIC_SENTRY_DSN:
      detectPlatform() === LOCALHOST
        ? undefined
        : 'https://6dbd51aeaa4a4e32b77e9f51a7236a64@o470070.ingest.sentry.io/5842378',
    platform: detectPlatform(),
  },

  eslint: {
    /*
     * Warning: Dangerously allow production builds to successfully complete even if
     * your project has ESLint errors. ... I don't want a production dependency on eslint
     */
    ignoreDuringBuilds: true,
  },

  // @see {@link https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L130}
  experimental: {
    reactRemoveProperties: true,
    /* disablePostcssPresetEnv: boolean */
    removeConsole: true,
    /* styledComponents?: boolean */
    /* swcFileReading?: boolean */
    /* cpus?: number */
    /* sharedPool?: boolean */
    /* plugins?: boolean */
    /* profiling?: boolean */
    /* isrFlushToDisk?: boolean */
    /* reactMode?: 'legacy' | 'concurrent' | 'blocking' */
    /* workerThreads?: boolean */
    /* pageEnv?: boolean */
    /* optimizeImages?: boolean */
    /* optimizeCss?: boolean */
    /* scrollRestoration?: boolean */
    /* externalDir?: boolean */
    /* conformance?: boolean */
    /*
     * amp?: {
     *   optimizer?: any
     *   validator?: string
     *   skipValidation?: boolean
     * }
     */
    /* reactRoot?: boolean */
    /* disableOptimizedLoading?: boolean */
    /* gzipSize?: boolean */
    /* craCompat?: boolean */
    /* esmExternals?: boolean | 'loose' */
    /* isrMemoryCacheSize?: number */
    /* concurrentFeatures?: boolean */
    /* serverComponents?: boolean */
    /* fullySpecified?: boolean */
    /* urlImports?: NonNullable<webpack5.Configuration['experiments']>['buildHttp'] */
    /* outputFileTracingRoot?: string */
    /* outputStandalone?: boolean */
  },

  future: {},

  // @see {@link https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id}
  generateBuildId: () => `build-{Date.now()}`,

  // eslint-disable-next-line require-await
  headers: async () => [
    {
      // Apply these headers to all routes in the application
      headers: securityHeaders,
      // Because of i18n routing I have to use "/:path*" instead of "/(.*)"
      source: '/:path*',
    },
    {
      // CORS headers, @see {@link https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/}
      headers: [
        // the next line is an anti-pattern with 'Access-Control-Allow-Origing: *'
        /* { key: "Access-Control-Allow-Credentials", value: "true" }, */
        { key: 'Access-Control-Allow-Origin', value: '*' },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value:
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      ],

      // api routes are not localized
      locale: false,
      // matching all localized API routes, but not routes like '/api/hello'
      source: '/api/:path*',
    },
  ],

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

  swcMinify: true,

  webpack: (
    /** @type {{ plugins: any[]; }} */ config,
    /** @type {{ dev: any; isServer: any; }} */ { dev, isServer }
  ) => {
    /* { buildId, dev, isServer, defaultLoaders, webpack } = options */

    if (!dev && !isServer) {
      /*
       * Replace React with Preact only in client production build
       * @see {@link https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/next.config.js}
       */
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
      })
    }
    return config
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
              /* additionalManifestEntries: [ */
              /* '/', */
              /* '/map', */
              /* '/collection', */
              /* '/offline', */
              /* ].map(url => ({ */
              /* revision: buildId, */
              /* url, */
              /* })), */
              dest: 'public',
              disable: process.env.NODE_ENV === 'development',
              /* dontCacheBustURLsMatching: /^\/_next\/static\/.* /i, */
              /* register: false, */
              /* skipWaiting: false, */
              /* swSrc: 'utils/serviceWorker.ts', */
            },
          },
        ],
      ]
    : [
        withPWA,
        {
          pwa: {
            /* additionalManifestEntries: [ */
            /* '/', */
            /* '/map', */
            /* '/collection', */
            /* '/offline', */
            /* ].map(url => ({ */
            /* revision: buildId, */
            /* url, */
            /* })), */
            dest: 'public',
            disable: process.env.NODE_ENV === 'development',
            /* dontCacheBustURLsMatching: /^\/_next\/static\/.* /i, */
            /* register: false, */
            /* skipWaiting: false, */
            /* swSrc: 'utils/serviceWorker.ts', */
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
/* eslint-enable max-lines */
