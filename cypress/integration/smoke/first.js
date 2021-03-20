/// <reference types="cypress" />

context('Visits', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('button').click()

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    /* cy.get('a[href]').click() */
    cy.get('[data-cy=fr-legal]').click()
    cy.location('pathname').should('include', 'legal')
  })
})
