class UpSellPage {
    get manageProductOrderingTab() {
        return cy
            .get('[data-name="Manage Product Ordering"]')
            .as("ProductOrderingTab");
    }


    get addProductBigButton() {
        return cy.get('.products-container-input > .btn').as("Add Product Button");
    }
    get saveOrderButton() {
        return cy.get(".products-container-save-order").as("SaveButton");
    }

    get source() {
        return cy.get(".product-row:eq(1)");
    }

    get upSellProductPrice() {
        return cy
            .get(
                ":nth-child(3) > .labeled-inp > .label > .toggle-inp-container > .toggle"
            )
            .as("ProductPrice");
    }

    get upSellOfferCode() {
        return cy.get(':nth-child(3) > .labeled-inp > .label > .toggle-inp-container > .toggle')
            .as("OfferCode");
    }

    get upSellToggle() {
        return cy
            .get(
                ".new-widget-module-toggler > .labeled-inp > .label > .toggle-inp-container > span"
            )
            .as("UpSell Toggle");
    }

    get orderOptimizationToggle() {
        return cy
            .get(
                ":nth-child(2) > .labeled-inp > .label > .toggle-inp-container > .toggle > .toggle-handle"
            )
            .as("OrderOptimizationToggle");
    }
}
export default UpSellPage;