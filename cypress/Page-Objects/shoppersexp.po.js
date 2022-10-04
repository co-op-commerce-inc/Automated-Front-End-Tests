class ShopperExperiencePage {


    get configureCrossSellButton() {
        return cy.get(".widget-module-item-body-detail-action-btns:eq(0)");
    }

    get configureEmailsButton() {
        return cy.get(".widget-module-item-body-detail-action-btns:eq(1)");
    }


    get configureAudienceButton() {
        return cy.get(".widget-module-item-body-detail-action-btns:eq(2)");
    }



    get configureRewardButton() {
        return cy.get(".widget-module-item-body-detail-action-btns:eq(3)");
    }

    get moreButton() {
        return cy.get("button:contains(More)");
    }

    get previewButton() {
        return cy.get(
            ".drop-down.widget-module-item-body-more-dropdown > div:nth-of-type(1)"
        );
    }

    get enableButton() {
        return cy.get(".drop-down > div:nth-of-type(2)");
    }

    get enableWidgetHeader() {
        return cy.get('.reward-widget-module-item > .widget-module-item-header > :nth-child(2) > .widget-module-item-header-status');
    }

    get disableWidgetHeader() {
        return cy.get(".widget-module-item-header-status");
    }

    get disableButton() {
        return cy.get(".drop-down > div:nth-of-type(2)");
    }
}

export default ShopperExperiencePage;