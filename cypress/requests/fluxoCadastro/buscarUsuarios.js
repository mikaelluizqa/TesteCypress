/// <reference types="cypress" />

  Cypress.Commands.add('buscarUsuarios', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}usuarios`,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
      })
    })
  
  Cypress.Commands.add('buscarUsuariosId', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}usuarios/${Cypress.env('idCadastro')}`,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
      })
    })  

