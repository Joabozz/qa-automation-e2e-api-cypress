// Create a new user
Cypress.Commands.add('createUser', (user) => {
    cy.request('POST', '/user', user);
});

// Get user information
Cypress.Commands.add('getUser', (username) => {
    return cy.request('GET', `/user/${username}`);
});

// Update user information
Cypress.Commands.add('updateUser', (username, user) => {
    cy.request('PUT', `/user/${username}`, user);
});

// Delete a user
Cypress.Commands.add('deleteUser', (username) => {
    cy.request('DELETE', `/user/${username}`);
});