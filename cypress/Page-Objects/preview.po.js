class PreviewPage {
    get rewardsToggleDisable() {
        return cy.get("[data-toggle='false']").as("Rewards Disable Toggle");
    }

    get discoFeedButton() {
        return cy.xpath("//div[.='DiscoFeed']").as("discoFeed Button");
    }

    get upSellButton() {
        return cy.xpath("//div[.='Upsells']").as("UpSell Button");
    }

    get offersButton() {
        return cy.xpath("//div[.='Offers']").as("Offer Button");
    }

    get viewOrderConfirmationButton() {
        return cy
            .xpath(
                "//img[@src='https://coopcommerce.s3.us-west-1.amazonaws.com/pp-extension/order-confirmation.png']"
            )
            .as("View Order Confirmation Button");
    }

    get surveyButton() {
        return cy.xpath("//div[.='Surveys']").as("Survey Button");
    }
    get checkoutButton() {
        return cy.xpath("//div[.='Checkout']").as("Checkout Offer Button");
    }

    get interstitialButton() {
        return cy
            .xpath("//div[.='Interstitial']")

        .as("Interstitial Button");
    }

    get discoCashButton() {
        return cy.xpath("//div[.='Disco Cash']").as(" Disco Cash Button");
    }

    get fullFlowButton() {
        return cy.xpath("//div[.='Full Flow']").as("Full Flow Button");
    }

    get enlargeIcon() {
        return cy.get("span:nth-of-type(2) > svg").as("Enlarge Icon");
    }
}
export default PreviewPage;