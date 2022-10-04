/// <reference types ="Cypress"/>
import PreviewPage from "../../Page-Objects/preview.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const previewpage = new PreviewPage();
const menucomp = new MenuComponent();


describe("Verify GUI and functionality of Large Preview Section", () => {
    before(() => {
        cy.Superlogin("Edith's Mansion");
        menucomp.openLearn.click();
        cy.clearCookies();
    });


    it("Should show full preview", () => {
        cy.visit("https://platform.disconetwork-staging.com/learn");
        previewpage.enlargeIcon.click({ force: true });
        previewpage.fullFlowButton.click();
        cy.wait(1000);
        const getIframeDocument = () => {
            return cy
                .get(".universal-preview-widget")
                .its("0.contentDocument")
                .should("exist");
        };
        const getIframeBody = () => {
            return getIframeDocument()
                .its("body")
                .should("not.be.undefined")
                .then(cy.wrap);
        };

        cy.wait(1000);

        getIframeBody()
            .find(".extension-preview-skip-btn img")
            .then(($elem) => {
                Cypress.cy.wrap($elem).click({ multiple: true, force: true });
            });

    });
});