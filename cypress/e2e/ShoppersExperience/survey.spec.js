/// <reference types ="Cypress"/>
import SurveyPage from "../../Page-Objects/survey.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const surveypage = new SurveyPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Survey Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openLearn.click();
        menucomp.openSurveys.click();
        cy.clearCookies();
    });

    it("Should add default survey question", () => {
        surveypage.adddefaultSurveywithRandomOption();
        surveypage.activeStatus.should("be.visible");
    });


    it("Should edit question in default survey question", () => {
        surveypage.editDefaultSurvey();
        surveypage.formStatus.should(
            "contain.text",
            "Randomize option order is  active"
        );
    });


    it("Should delete custom survey question", () => {
        surveypage.deletecustomSurvey();
        surveypage.questionText.eq(0).should(($elem) => {
            expect($elem).to.not.exist;
        });
    });


});