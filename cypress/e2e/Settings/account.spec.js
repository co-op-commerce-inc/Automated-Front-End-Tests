/// <reference types ="Cypress"/>
import SettingsPage from "../../Page-Objects/settings.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const settingspage = new SettingsPage();
const menucomp = new MenuComponent();
const uniqueId = Date.now().toString();

const firstname = `Sofi${uniqueId}`;
const lastname = `Martin ${uniqueId}`;
const telephonenumber = `${uniqueId}`;

describe("Verify GUI and functionality of Settings > Account Section", () => {
    beforeEach(() => {
        cy.Superlogin("BlendJet");
        menucomp.openSettings.click({ force: true });
        cy.clearCookies();
        cy.visit("https://platform.disconetwork-staging.com/settings/account");
    });



    it("Should leave old and new passwords empty ", () => {
        settingspage.leaveChangePasswordFields();
        settingspage.errorMessage.should(
            "contain.text",
            "Whoop! Please enter all the fields"
        );
    });

    it("Should enter wrong old and new passwords", () => {
        settingspage.typeIncorrectPasswords();
        settingspage.errorMessage.should(
            "contain.text",
            "You've entered an incorrect password"
        );
    });


});