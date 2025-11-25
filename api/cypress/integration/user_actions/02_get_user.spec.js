describe('Get user information', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

  // Get the informartion of the created user
    it('Get the created user', function () {
        cy.getUser(this.userData.newUser.username).then((res) => {
            // Assert that the response status is 200
            expect(res.status).to.eq(200);
            // Assert that the username matches
            expect(res.body.username).to.eq(this.userData.newUser.username);
            // Log the user information
            cy.log(JSON.stringify(res.body));
        });
    });
});