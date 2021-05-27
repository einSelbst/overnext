// @ts-check
/**
 * Next.js Configuration
 * @param [plugin]: function, configuration?: object, phases?: array]
 * @see {@link https://github.com/cyrilwanner/next-compose-plugins}
 */
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
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
    /** @type {{ dev: any; isServer: any; }} */ options
  ) => {
    /* { buildId, dev, isServer, defaultLoaders, webpack } = options */
    const { dev, isServer } = options

    /**
     * RelativeCi Agent Webpack configuration
     * @see {@link https://relative-ci.com/documentation/setup/webpack-plugin}
     */
    if (!dev && !isServer && !process.env.VERCEL) {
      //     const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
      config.plugins.push(new RelativeCiAgentWebpackPlugin({ enabled: true }))
    }

    return config
  },
  future: {
    webpack5: true,
  },
  experimental: {
    cpus: 2,
    // plugins?: boolean;
    profiling: true,
    // sprFlushToDisk?: boolean;
    // reactMode?: 'legacy' | 'concurrent' | 'blocking';
    // workerThreads?: boolean;
    // pageEnv?: boolean;
    // optimizeImages?: boolean;
    // optimizeCss: true,
    // scrollRestoration?: boolean;
    // scriptLoader?: boolean;
    stats: true,
    // externalDir?: boolean;
    // serialWebpackBuild?: boolean;
    // conformance?: boolean;
    amp: {
      // optimizer: any;
      // validator?: string;
      // skipValidation?: boolean;
    },
    // turboMode?: boolean;
    // eslint?: boolean;
    // reactRoot?: boolean;
    // enableBlurryPlaceholder?: boolean;
    // disableOptimizedLoading?: boolean;
    // gzipSize?: boolean;
  },
}

/**
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
