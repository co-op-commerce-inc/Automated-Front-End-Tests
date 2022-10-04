/// <reference types ="Cypress"/>
import SettingsPage from "../../Page-Objects/settings.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const settingspage = new SettingsPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Settings > Team Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openSettings.click({ force: true });
        cy.clearCookies();
        cy.visit("https://platform.disconetwork-staging.com/settings/team");
    });


    it("Should send invitation with correct email id", () => {
        settingspage.sendInvitationWithEmailId();
        settingspage.invitedButton.should("be.visible");
    });


});