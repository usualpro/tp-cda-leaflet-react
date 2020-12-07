/// <reference types="Cypress" />

context('Example', () => {
  const today = new Date();
  const time = today.getHours() + ':' + today.getMinutes();
  before(() => {
    cy.visit(Cypress.env().APP_URL);
  });
  it('The document shoud contain the text: Hello World at ${time}!', () => {
    cy.get(document).contains(`Hello World at ${time}!`);
  });
});
