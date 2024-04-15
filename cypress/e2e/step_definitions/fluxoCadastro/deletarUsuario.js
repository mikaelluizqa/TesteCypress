import {
    Given,
    When,
    And,
    Then,
  } from '@badeball/cypress-cucumber-preprocessor'
  import '../../../support/commands'
  import '../../../requests/fluxoCadastro/deletarUsuario'
  
  response = {} 
  
  Given('que eu queira deletar usuario por ID', () => {
    // Apenas contextualização do cenário
  })
  
  When('faço um DEL passando um ID', () => {
    cy.deletarUsuario().should((res) => {
      response = res
    })
  })
  
  Then('visualizo que o usuario especifico foi deletado e o código de status da resposta é {}', (statusCode) => {
    cy.fieldComparison(response.status, parseInt(statusCode))
    cy.fieldComparison(response.body.message, 'Registro excluído com sucesso')
  })