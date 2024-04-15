import {
    Given,
    When,
    And,
    Then,
  } from '@badeball/cypress-cucumber-preprocessor'
  import '../../../support/commands'
  import '../../../requests/fluxoCadastro/cadastrarUsuario'
  
  response = {} 
  
  Given('que eu queira realizar cadastro', () => {
    // Apenas contextualização do cenário
  })
  
  When('faço um POST com dados VALIDOS', () => {
    cy.realizarCadastro().should((res) => {
      response = res
    })
  })
  
  Then('visualizo que o cadastro foi realizado e o código de status da resposta é {}', (statusCode) => {
    cy.fieldComparison(response.status, parseInt(statusCode))
    cy.fieldComparison(response.body.message, 'Cadastro realizado com sucesso')
    cy.fieldIsNotEmpty(response.body._id)
  })
  