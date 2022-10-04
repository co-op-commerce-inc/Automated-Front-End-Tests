class RewardsPage {


    get rewardsToggleEnable() {
        return cy
            .xpath("//div[@class='toggle-handle']")
            .as("Rewards Enable Toggle");
    }

    get emailIDField() {
        return cy.get('[type="email"]').as("Email Field");
    }

    get submitButton() {
        return cy.get("button:contains(Send a sample email)").as("Submit Button");
    }

    get formStatus() {
        return cy.get(".form-status").as("Form Status");
    }
}
export default RewardsPage;