/// <reference types="cypress" />

context('Cypress.Commands', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  // https://on.cypress.io/custom-commands

  it('.add() - create a custom command', () => {
    Cypress.Commands.add(
      'console',
      {
        prevSubject: true, // eslint-disable-line unicorn/prevent-abbreviations
      },
      (subject, method = 'log') => {
        // the previous subject is automatically received
        // and the commands arguments are shifted

        // allow us to change the console method used
        /* method = method || 'log' */ // set as default parameter

        // log the subject to the console
        // @ts-expect-error TS7017
        console[method]('The subject is', subject)

        // whatever we return becomes the new subject
        // we don't want to change the subject so
        // we return whatever was passed in
        return subject
      }
    )

    // @ts-expect-error TS2339
    cy.get('button')
      .console('info')
      .then(_$button => {
        // subject is still $button
      })
  })
})

context('Cypress.Cookies', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  // https://on.cypress.io/cookies
  it('.debug() - enable or disable debugging', () => {
    Cypress.Cookies.debug(true)

    // Cypress will now log in the console when
    // cookies are set or cleared
    cy.setCookie('fakeCookie', '123ABC')
    cy.clearCookie('fakeCookie')
    cy.setCookie('fakeCookie', '123ABC')
    cy.clearCookie('fakeCookie')
    cy.setCookie('fakeCookie', '123ABC')
  })

  it('.preserveOnce() - preserve cookies by key', () => {
    // normally cookies are reset after each it
    cy.getCookie('fakeCookie').should('not.be.ok')

    // preserving a cookie will not clear it when
    // the next it starts
    cy.setCookie('lastCookie', '789XYZ')
    Cypress.Cookies.preserveOnce('lastCookie')
  })

  it('.defaults() - set defaults for all cookies', () => {
    // now any cookie with the name 'session_id' will
    // not be cleared before each new it runs
    Cypress.Cookies.defaults({
      preserve: 'session_id',
    })
  })
})

context('Cypress.arch', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('get CPU architecture name of underlying OS', () => {
    // https://on.cypress.io/arch
    expect(Cypress.arch).to.exist
  })
})

context('Cypress.config()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('get and set configuration options', () => {
    // https://on.cypress.io/config
    const myConfig = Cypress.config()

    expect(myConfig).to.have.property('animationDistanceThreshold', 5)
    /* expect(myConfig).to.have.property('baseUrl', null) */
    expect(myConfig).to.have.property('baseUrl', 'http://localhost:3000')
    expect(myConfig).to.have.property('defaultCommandTimeout', 4000)
    expect(myConfig).to.have.property('requestTimeout', 5000)
    expect(myConfig).to.have.property('responseTimeout', 30_000)
    expect(myConfig).to.have.property('viewportHeight', 660)
    expect(myConfig).to.have.property('viewportWidth', 1000)
    expect(myConfig).to.have.property('pageLoadTimeout', 60_000)
    expect(myConfig).to.have.property('waitForAnimations', true)

    expect(Cypress.config('pageLoadTimeout')).to.eq(60_000)

    // this will change the config for the rest of your its!
    Cypress.config('pageLoadTimeout', 20_000)

    expect(Cypress.config('pageLoadTimeout')).to.eq(20_000)

    Cypress.config('pageLoadTimeout', 60_000)
  })
})

context('Cypress.dom', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  // https://on.cypress.io/dom
  it('.isHidden() - determine if a DOM element is hidden', () => {
    const hiddenP = Cypress.$('.dom-p p.hidden').get(0)
    const visibleP = Cypress.$('.dom-p p.visible').get(0)

    // our first paragraph has css class 'hidden'
    expect(Cypress.dom.isHidden(hiddenP)).to.be.true
    expect(Cypress.dom.isHidden(visibleP)).to.be.false
  })
})

context('Cypress.env()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  // We can set environment variables for highly dynamic values

  // https://on.cypress.io/environment-variables
  it('get environment variables', () => {
    // https://on.cypress.io/env
    // set multiple environment variables
    Cypress.env({
      host: 'veronica.dev.local',
      apiServer: 'http://localhost:8888/v1/',
    })

    // get environment variable
    expect(Cypress.env('host')).to.eq('veronica.dev.local')

    // set environment variable
    Cypress.env('apiServer', 'http://localhost:8888/v2/')
    expect(Cypress.env('apiServer')).to.eq('http://localhost:8888/v2/')

    // get all environment variable
    expect(Cypress.env()).to.have.property('host', 'veronica.dev.local')
    expect(Cypress.env()).to.have.property(
      'apiServer',
      'http://localhost:8888/v2/'
    )
  })
})

context('Cypress.log', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('control what is printed to the Command Log', () => {
    // https://on.cypress.io/cypress-log
  })
})

context('Cypress.platform', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('get underlying OS name', () => {
    // https://on.cypress.io/platform
    expect(Cypress.platform).to.be.exist
  })
})

context('Cypress.version', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('get current version of Cypress being run', () => {
    // https://on.cypress.io/version
    expect(Cypress.version).to.be.exist
  })
})

context('Cypress.spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/cypress-api')
  })

  it('get current spec information', () => {
    // https://on.cypress.io/spec
    // wrap the object so we can inspect it easily by clicking in the command log
    cy.wrap(Cypress.spec).should('include.keys', [
      'name',
      'relative',
      'absolute',
    ])
  })
})
