/// <reference types ="Cypress"/>
import PageSetupPage from "../../Page-Objects/pagsetup.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const setuppage = new PageSetupPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Page Setup Page", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openSettings.click({ force: true });
        cy.clearCookies();
        cy.visit("https://platform.disconetwork-staging.com/settings/pageSetup");
    });

    it("Should enable Post Purchase toggle", () => {
        setuppage.ppeToggleDisable.click();
        cy.contains("Enabled").should("be.visible");
    });

    it("Should add an image", () => {
        setuppage.addPPEImage();
        cy.wait(1000)
        cy.get(".edit-image > img").should("exist");
    });

});