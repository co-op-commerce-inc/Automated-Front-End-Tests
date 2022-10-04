/// <reference types ="Cypress"/>
import RewardsPage from "../../Page-Objects/rewards.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const rewardspage = new RewardsPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Rewards Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        menucomp.openRewards.click();
        cy.clearCookies();
    });

    it("Should enable co-op cash toggle", () => {
        rewardspage.rewardsToggleEnable.eq(0).click();
        cy.contains("Enabled").should("be.visible");
    });

    it("Should send sample email successfully", () => {
        rewardspage.emailIDField.clear();
        rewardspage.emailIDField.type("ammarah@coopcommere.com");
        rewardspage.submitButton.click();
    });


});