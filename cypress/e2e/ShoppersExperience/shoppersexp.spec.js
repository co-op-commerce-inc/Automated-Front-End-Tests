/// <reference types ="Cypress"/>
import ShopperExperiencePage from "../../Page-Objects/shoppersexp.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";


const menucomp = new MenuComponent();

const shoppersexppage = new ShopperExperiencePage();


describe("Verify GUI elements of Disco Feed  Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        cy.clearCookies();

    });

    it("Should display Disco Feed  heading", () => {
        cy.contains("h3", "DiscoFeed").should("be.visible");
    });


    it("Should Configure button redirects towards Cross-Sell Page", () => {
        shoppersexppage.configureCrossSellButton.click();
        cy.get("h2").contains("DiscoFeed").should("be.visible");
    });
});


describe("Verify GUI elements of Emails Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        cy.clearCookies();

    });

    it("Should display Emails heading", () => {
        cy.contains("h3", "Emails").should("be.visible");
    });



    it("Should Configure button redirects towards Emails Page", () => {
        shoppersexppage.configureEmailsButton.click();
        cy.get("h2").contains("Emails").should("be.visible");
    });
});


describe("Verify GUI elements of Audience Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        cy.clearCookies();

    });

    it("Should display Audience heading", () => {
        cy.contains("h3", "Audiences").should("be.visible");
    });


    it("Should Configure button redirects towards Audience Page", () => {
        shoppersexppage.configureAudienceButton.click();
        cy.get("h2").contains("Audiences").should("be.visible");
    });
});




describe("Verify GUI elements of co-op cash Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        cy.clearCookies();
    });

    it("Should display co-op cash heading", () => {
        cy.contains("h3", "Disco Cash").should("be.visible");
    });


    it("Should Configure button redirects towards Rewards Page", () => {
        shoppersexppage.configureRewardButton.click();
        cy.url().should("include", "disco");
    });
});