/// <reference types ="Cypress"/>
import InboxPage from "../../Page-Objects/inbox.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const inboxpg = new InboxPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Inbox Page", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openInboxMenu.click();
        menucomp.openInboxAllMessage.click();


    });

    it("Should redirect towards Payment Page", () => {
        cy.contains("Let’s get you set up").should("be.visible")
        cy.scrollTo('bottom')
        inboxpg.setUpPaymentButton.invoke('css', 'overflow-x', 'visible').click();
        inboxpg.paymentTab.should("be.visible")

    });



    it("Should redirect towards Offers Page from Insights and Report tab", () => {
        cy.get('[data-name="Insights & Reports"]').click();
        inboxpg.enableOfferButton.invoke('css', 'overflow-x', 'visible').click();
        cy.url().should("include", "offer");

    });



    it("Should redirect towards Disco Feed Page from Notifications tab", () => {
        cy.get('[data-name="Notifications"]').click();
        cy.contains("Make that net-new $").should("be.visible").click({ force: true });
        inboxpg.discoFeedButton.click({ force: true });
        cy.url().should("contains", "disco-feed");

    });


});