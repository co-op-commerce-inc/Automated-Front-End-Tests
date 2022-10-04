/// <reference types ="Cypress"/>
import SettingsPage from "../../Page-Objects/settings.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const settingspage = new SettingsPage();
const menucomp = new MenuComponent();
const uniqueId = Date.now();
const monthlyordernumber = `1${uniqueId}`;
const longdescription = `This is a long description ${uniqueId}`;
const shortdescription = `dinnerware,glassware and cutlery ${uniqueId}`;

describe("Verify GUI and functionality of Settings > Brand Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openSettings.click({ force: true });
        cy.clearCookies();
        cy.visit("https://platform.disconetwork-staging.com/settings/brand");
    });



    it("Should select a value from Inventory Managment Dropdown", () => {
        settingspage.selectInventoryManagement();
    });


    it("Should shop in a category successfully", () => {
        settingspage.addShopinCategory();
        settingspage.errorMessage.should(
            "contain.text",
            "Please select at least one"
        );
    });
});