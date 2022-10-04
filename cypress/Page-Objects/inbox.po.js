class InboxPage {

    get allMessagesHeading() {
        return cy.get('h2 > section')
            .as("All Messages Heading");
    }


    get setUpPaymentButton() {
        return cy.get('.message-template-cta')
            .as("SetUp Payment Button");
    }

    get paymentTab() {
        return cy.get('[data-name="Payment"]')
            .as("Payment Tab");
    }


    get tileTwo() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(3)')
            .as("Tile Two");
    }

    get tileThree() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(4)')
            .as("Tile Three");
    }

    get tileFour() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(5)')
            .as("Tile Four");
    }

    get tileFive() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(6)')
            .as("Tile Five");
    }


    get tileSix() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(7)')
            .as("Tile Six");
    }

    get tileSeven() {
        return cy.get('.inbox-intros-selector > :nth-child(1) > :nth-child(8)')
            .as("Tile Seven");
    }

    get discoFeedButton() {
        return cy.get('.message-template-cta')
            .as("Discofeed Button");
    }

    get enableOfferButton() {
        return cy.get('.growth-graph-action')
            .as("Enable Offer Button");
    }

    get continueButton() {
        return cy.get('.message-template-cta')
            .as("Continue Button");
    }

}
export default InboxPage;