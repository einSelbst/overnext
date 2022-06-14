// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')
require('@cypress/code-coverage/support')

console.log('cypress')

if (process.env.CY_WATCH) {
  console.log(process.env.CY_WATCH)
  console.log('enable test watching')
  require('cypress-watch-and-reload/support')
} else {
  console.log('----> test watching NOT enabled')
}
