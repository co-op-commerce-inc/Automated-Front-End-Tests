/// <reference types ="Cypress"/>
import ForgotPasswordPage from "../../Page-Objects/forgotpassword.po";
const forgotpswdpage = new ForgotPasswordPage();

describe("Verify Forget Password functionality is working fine", () => {
    it("Should redirect towards Forgot Password Page", () => {
        cy.visit("https://platform.coopcommerce-staging.com/login");
        forgotpswdpage.forgotPasswordLink.click();
        cy.url().should("include", "reset");
    });

    it("Should not send reset password link if email does not exist", () => {
        cy.visit("https://platform.coopcommerce-staging.com/reset");
        forgotpswdpage.emailNotMatch();
        cy.get(".form-status").should(
            "contain.text",
            "No user found with the given email address"
        );
    });

    it("Should send reset password link if email exist", () => {
        cy.visit("https://platform.coopcommerce-staging.com/reset");
        forgotpswdpage.emailMatch();
        cy.get(".form-status").should(
            "contain.text",
            "Success! We've sent you a link to your email address"
        );
    });


});