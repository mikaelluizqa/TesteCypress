import {
    Given,
    When,
    And,
    Then,
  } from '@badeball/cypress-cucumber-preprocessor'
  import '../../../support/commands'
  import '../../../requests/fluxoCadastro/backendPdv'
  
  response = {} 
  
  Given('que eu queira backendPdv', () => {
    // Apenas contextualização do cenário
  })
  
  When('faço um POST com dados VALIDOS backendPdv', () => {
    cy.backendPdv().should((res) => {
      response = res
    })
  })
  
  Then('visualizo que o cadastro foi realizado backendPdv e o código de status da resposta é {}', (statusCode) => {
    cy.fieldComparison(response.status, parseInt(statusCode))
  })
