describe('Delete the user', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    // Delete the created user
    it('Delete user', function () {
        cy.deleteUser(this.userData.updatedUser.username).then((res) => {
            // Assert that the response status is 200
            expect(res.status).to.eq(200);
        });
    });
});