/// <reference types="cypress" />

describe('Homepage', () => {
  context('Visits', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('loads', () => {
      cy.contains('h1', 'Welcome').should('be.visible')
    })

    xit('delivers jokes', () => {
      cy.request('/api/fetch-joke')
        .its('body')
        .then(JSON.parse)
        .its('msg')
        .should('be.a', 'string')
        .and('be.not.empty')
    })

    it('navigates directly', () => {
      cy.visit('/legal/about')
      cy.contains('h1', 'about').should('be.visible')
    })

    xit('navigates via links', () => {
      cy.get('.nav li')
        .should('have.length.gt', 1)
        .contains('a', 'about')
        .should('have.attr', 'href', '/about')
        .click()
      cy.location('pathname').should('include', '/about')
      cy.contains('h1', 'About').should('be.visible')

      cy.get('.nav li')
        .should('have.length.gt', 1)
        .contains('a', 'home')
        .should('have.attr', 'href', '/')
        .click()
      cy.contains('h1', 'Netlify Cypress Tests').should('be.visible')
    })

    it('navigates to legal page', () => {
      // https://on.cypress.io/click
      cy.get('button').click()

      /* cy.get('a[href]').click() */
      cy.get('[data-cy=fr-legal]').click()
      cy.location('pathname').should('include', 'legal')
    })
  })
})
