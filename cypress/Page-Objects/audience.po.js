class AudiencePage {


    get scheduleCallButton() {
        return cy
            .get("button:contains(Schedule call)")
            .as("Schedule call Button");
    }

    get connectMetaButton() {
        return cy
            .get("button:contains(Connect Meta)")
            .as("Connect Meta Button");
    }

    get learnMoreButton() {
        return cy
            .get("button:contains(Learn More)")
            .as("Learn More Button");
    }

    get howitWorksTab() {
        return cy.get('[data-name="How it Works"]').as("How it Works Tab");
    }


    get scheduleCalendar() {
        return cy.get('.meetings-lib page').as("Schedule Calendar");
    }


    get historyTab() {
        return cy.get('[data-name="History"]').as("History Tab");
    }




}
export default AudiencePage;