  Cypress.Commands.add('backendPdv', () => {
    cy.api({
      method: 'GET',
      url: "http://192.168.16.192:1609/v1/ValidarServidor",
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
    }).then((res) => {
  
    }
  )})
