class ForgotPasswordPage {
    get forgotPasswordLink() {
        return cy.xpath("//a[.='Forgot Password?']").as("Forgot Password Link");
    }

    get goBackLink() {
        return cy.get(".reset-step-back").as("Go Back Link");
    }

    get emailIDField() {
        return cy.get('[placeholder="Email"]').as("Email Field");
    }

    get resetPasswordButton() {
        return cy
            .get("button:contains(Reset My Password)")
            .as("Reset Password Button");
    }

    get formStatus() {
        return cy.get(".form-status").as("Form Status");
    }

    emailNotMatch() {
        this.emailIDField.type("testX@yopmail.com");
        this.resetPasswordButton.click();
    }

    emailMatch() {
        this.emailIDField.type("anizam1000@gmail.com");
        this.resetPasswordButton.click();
    }


    emailFound(emailid) {
        this.emailIDField.type(emailid);
        this.resetPasswordButton.click();
    }

}
export default ForgotPasswordPage;