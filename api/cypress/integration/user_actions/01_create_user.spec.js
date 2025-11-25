describe('Create user', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    // Create a new user
    it('Create a new user', function () {
        cy.createUser(this.userData.newUser).then((res) => {
            // Assert that the response status is 200
            expect(res.status).to.eq(200);
            // Assert that the user ID matches
            expect(res.body.message).to.eq(String(this.userData.newUser.id));
        });
    });
});