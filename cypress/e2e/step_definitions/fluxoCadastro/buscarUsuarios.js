import {
    Given,
    When,
    And,
    Then,
  } from '@badeball/cypress-cucumber-preprocessor'
  import '../../../support/commands'
  import '../../../requests/fluxoCadastro/buscarUsuarios'
  
  response = {} 
  
  Given('que eu queira listar todos cadastros', () => {
    // Apenas contextualização do cenário
  })
  
  When('faço um GET', () => {
    cy.buscarUsuarios().should((res) => {
      response = res
    })
  })
  
  Then('visualizo que todos os cadastros foram listados e o código de status da resposta é {}', (statusCode) => {
    cy.fieldComparison(response.status, parseInt(statusCode))
  })


  Given('que eu queira buscar usuario especifico', () => {
    // Apenas contextualização do cenário
  })
  
  When('faço um GET passando um usuario especifico', () => {
    cy.buscarUsuariosId().should((res) => {
      response = res
    })
  })
  
  Then('visualizo que trouxe apenas um usuario e o código de status da resposta é {}', (statusCode) => {
    cy.fieldComparison(response.status, parseInt(statusCode))
  })
  