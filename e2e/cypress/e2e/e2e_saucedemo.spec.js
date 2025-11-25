describe('Purchase Flow - SauceDemo', () => {

  it('Completes a purchase', () => {

    // Visit the SauceDemo page
    cy.visit('/')

    // Login
    cy.login('standard_user', 'secret_sauce');

    // Add two products
    cy.addProduct('Sauce Labs Bike Light');
    cy.addProduct('Sauce Labs Fleece Jacket');

    // Open the cart
    cy.get('.shopping_cart_link').click();

    // Start the checkout process
    cy.get('#checkout').click();

    // Fill checkout information
    cy.fillCheckoutInfo({
      firstName: 'Joabozz',
      lastName: 'Hartman',
      postal: '77001'
    });

    cy.get('#continue').click();

    // Finish purchase
    cy.get('#finish').click();

    // Assert success message
    cy.get('.complete-header')
      .should('contain', 'THANK YOU FOR YOUR ORDER');
  });

});