// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Normallogin", () => {
    cy.visit("https://platform.disconetwork-staging.com/login");
    cy.get('[name="email"]').type("anizam1000+9@gmail.com");
    cy.get('[name="password"]').type("Ea864B056@");
    cy.get("button:contains(Log In)").click();
});

Cypress.Commands.add("Superlogin", (brandName) => {
    //cy.session([brandName], () => {
    cy.visit("/");
    cy.get('[placeholder = "Email"]').type("ammarah@coopcommerce.com");
    cy.get('[placeholder = "Password"]').type("Ea864B056$");
    cy.get('[placeholder="Shop Name"]').type(brandName);
    cy.get("button:contains(Super Login)").click();

    //})

});

Cypress.Commands.add("Invalidlogin", () => {
    cy.visit("https://platform.disconetwork-staging.com/login");
    cy.get('[name="email"]').type("ammarah@coopcommerce.com");
    cy.get('[name="password"]').type("123456");
    cy.get('[type="submit"]').click();
});

require('@4tw/cypress-drag-drop')


import "cypress-iframe";

Cypress.Commands.add("iframe", { prevSubject: "element" }, ($iframe) => {
    return new Cypress.Promise((resolve) => {
        $iframe.on("load", () => {
            resolve($iframe.contents().find("body"));
        });
    });
});