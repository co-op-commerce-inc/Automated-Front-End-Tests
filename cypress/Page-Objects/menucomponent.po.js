class MenuComponent {
    get openPostPurchase() {
        return cy.get('[href="/widget/postPurchase"] > .side-bar-nav-sub-item');
    }

    get openCrossSell() {
        return cy.get('.side-bar-nav-sub-item-first');
    }

    get openEmail() {
        return cy.get('[href="/sell/emails"] > .side-bar-nav-sub-item');
    }

    get openUpsell() {
        return cy.get('[href="/sell/upSell"] > .side-bar-nav-sub-item');
    }

    get openRewards() {
        return cy.get('[href="/grow/disco-cash"] > .side-bar-nav-sub-item')
    }

    get openLearn() {
        return cy.get('[href="/learn"] > .side-bar-nav-item');
    }


    get openSurveys() {
        return cy.get('[href="/learn/survey"] > .side-bar-nav-sub-item');
    }

    get openEmails() {
        return cy.get('[href="/emails"] > .side - bar - nav - item ');
    }

    get openProducts() {
        return cy.get('nav > [href="/products"] > .side-bar-nav-item');
    }


    get openSellMenu() {
        return cy.get('[href="/sell"] > .side-bar-nav-item');
    }

    get openOfferMenu() {
        return cy.get('[href="/sell/offer"] > .side-bar-nav-sub-item');
    }

    get openGrowMenu() {
        return cy.get('[href="/grow"] > .side-bar-nav-item')
    }

    get discoFeedOption() {
        return cy.get('[href="/grow/disco-feed"] > .side-bar-nav-sub-item')
    }

    get audienceOption() {
        return cy.get('[href="/grow/audiences"] > .side-bar-nav-sub-item')
    }

    get openInboxMenu() {
        return cy.get('[href="/inbox/messages"] > .side-bar-nav-item')
    }

    get openInboxAllMessage() {
        return cy.get('[href="/inbox/messages"] > .side-bar-nav-sub-item')
    }



    get openSettings() {
        return cy.get('[href="/settings"] > .side-bar-nav-item');


    }
}
export default MenuComponent;