// <reference types ="Cypress"/>
import AudiencePage from "../../Page-Objects/audience.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const audiencepg = new AudiencePage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Inbox Page", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        menucomp.audienceOption.click();


    });

    it("Should show Audience History on History Page", () => {

        audiencepg.historyTab.click();
        cy.contains("Audiences History").should('be.visible')


    });


    it("Should open 'How it Works' Page", () => {
        audiencepg.howitWorksTab.click();
        cy.get("h3").should('contain.text', 'Tired of skyrocketing CPAs?')


    });

});