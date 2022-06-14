import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: true,
  'cypress-watch-and-reload': {
    watch: ['src/**/*'],
  },
  env: {
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },
  projectId: 'esdwok',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  videoUploadOnPasses: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3004',
    excludeSpecPattern: '**/examples/*.spec.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
