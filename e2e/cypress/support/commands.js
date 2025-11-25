// Perform login
Cypress.Commands.add('login', (username, password) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// Add product to cart
Cypress.Commands.add('addProduct', (productName) => {
  cy.contains('.inventory_item_name', productName)
    .parents('.inventory_item')
    .find('button')
    .click();
});

// fill checkout information
Cypress.Commands.add('fillCheckoutInfo', (info) => {
  cy.get('#first-name').type(info.firstName);
  cy.get('#last-name').type(info.lastName);
  cy.get('#postal-code').type(info.postal);
});