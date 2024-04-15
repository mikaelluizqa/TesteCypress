/// <reference types="cypress" />
  
  Cypress.Commands.add('deletarUsuario', () => {
    cy.api({
      method: 'DELETE',
      url: `${Cypress.env('baseUrl')}usuarios/${Cypress.env('idCadastro')}`,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
      }).then((res) => {
      })
    })  

