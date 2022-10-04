/// <reference types ="Cypress"/>
import EmailsPage from "../../Page-Objects/email.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const emailspage = new EmailsPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Emails Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openSellMenu.click();
        menucomp.openEmail.click();
        cy.clearCookies();
    });

    it("Should add request for MailChimp Successfully", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        emailspage.getMailChimp();
        cy.contains("Thanks for the feedback!").should("be.visible");
        cy.screenshot('success');
    });


    it("Should enable Email Settings", () => {
        emailspage.activateEmailSettings();
        cy.contains("Cross-sells are enabled").should("be.visible");

    });


    it("Should customize Shopify Email Templates", () => {
        emailspage.openShopifyOption2();
        cy.contains("Order Confirmation").should("be.visible");
        cy.contains("Shipping Confirmation").should("be.visible");
        cy.contains("Shipping Updates").should("be.visible");
        cy.contains("Out for Delivery").should("be.visible");

    });


});