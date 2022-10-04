/// <reference types ="Cypress"/>
import RegistrationPage from "../../Page-Objects/registration.po";
import '@4tw/cypress-drag-drop'

const regpage = new RegistrationPage();
const uniqueId = Date.now().toString();
const emailid1 = `anizam${uniqueId}@gmail.com`;
const emailid2 = `ammarah.nizaam${uniqueId}@gmail.com`;
const emailid3 = `farooq_anjum${uniqueId}@gmail.com`;
const brandname1 = `marion${uniqueId}`;
const brandname2 = `pegasus${uniqueId}`;
const brandname3 = `sophie${uniqueId}`;
const fullname = `Evie ${uniqueId}`;
const shopURL = `hexa${uniqueId}.com`;
const shopURL2 = `octa${uniqueId}.com`;

describe("Verify GUI and functionality of Registration Section", () => {
    beforeEach(() => {

        cy.visit("https://platform.disconetwork-staging.com/register");
        cy.clearCookies();
    });



    it("Should perform complete onboarding process", () => {
        regpage.getStartedDetails(fullname, emailid2, brandname2, shopURL);
        cy.contains('Create an Account').should("be.visible");
        regpage.createAccountDetails();
        cy.contains('Select Your Platform').should("be.visible");
        regpage.selectPlatformOption();
        cy.contains('Win, together.').should("be.visible");
        regpage.letsGetStartedButton.click();
        regpage.fillquestions();
        regpage.yesLetsDoItButton.click();
        regpage.selectGoal();
        cy.contains('sell').should("be.visible");
        regpage.nextSetupYourProfileButton.click();
        regpage.fillProfile();
        regpage.fillTechStack();
        regpage.nextsetupPlatformIntegrationButton.click();
        regpage.nextchooseCategoriesButton.click();
        regpage.selectCategory();
        regpage.nextSetupPaymentButton.click();
        regpage.skipforNowButton.click();
        cy.url().should("include", "inbox");

    });





});