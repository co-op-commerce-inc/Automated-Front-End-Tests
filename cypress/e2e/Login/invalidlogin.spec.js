/// <reference types ="Cypress"/>

describe("Verify Unsuccessful login functionality using invalid normal user's credentials", () => {
    it("Should not login with incorrect credentials", () => {
        cy.Invalidlogin();
        cy.get(".form-status").should(
            "contain.text",
            "Incorrect password entered for user"
        );
    });
});