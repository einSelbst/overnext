import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: true,

  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
  },

  'cypress-watch-and-reload': {
    watch: ['src/**/*'],
  },

  /*
   * We've imported your old cypress plugins here.
   * You may want to clean this up later by importing these.
   */
  e2e: {
    baseUrl: 'http://localhost:3004',
    excludeSpecPattern: '**/examples/*.spec.js',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  env: {
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },

  projectId: 'esdwok',

  retries: {
    openMode: 0,
    runMode: 2,
  },

  videoUploadOnPasses: false,
})
