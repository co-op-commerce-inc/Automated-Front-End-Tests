/// <reference types ="Cypress"/>

describe("Verify login functionality using valid normal user's credentials", () => {
    it("Should login with correct credentials", () => {
        cy.Normallogin();
        cy.url().should("include", "inbox");
    });
});
describe("Verify login functionality using valid super user's credentials", () => {
    it("Should login with correct credentials", () => {
        cy.Superlogin("BlendJet");
        cy.contains("h3", "BlendJet").should("exist");
    });
});