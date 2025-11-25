describe('Update the user', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    // Update the created user
    it('Update user name and email', function () {
        cy.updateUser(this.userData.newUser.username, this.userData.updatedUser)
        .then((res) => {
            // Assert that the response status is 200
            expect(res.status).to.eq(200);
        });
    });


    it('Validate changes to user', function () {
        cy.getUser(this.userData.updatedUser.username).then((res) => {
             // Assert that the response status is 200
            expect(res.status).to.eq(200);
            // Assert that the user data has been updated
            Object.keys(this.userData.updatedUser).forEach(key => {
                expect(res.body[key]).to.eq(this.userData.updatedUser[key]);
            });
        });
    });
});