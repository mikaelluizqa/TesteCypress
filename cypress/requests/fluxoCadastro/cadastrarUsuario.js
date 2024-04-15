/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();

  Cypress.Commands.add('realizarCadastro', () => {
    cy.api({
      method: 'POST',
      url: `${Cypress.env('baseUrl')}usuarios`,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
      body: {
        'nome': 'Fulano da Silva',
        'email': randomEmail,
        'password': 'teste',
        'administrador': 'true'
        }}).then((res) => {
          Cypress.env('idCadastro', res.body._id)
        })
      })
  

