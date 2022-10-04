class ProductsPage {
    get addProductButton() {
        return cy.get('.products-empty > .btn').as("AddProductButton");
    }

    get smallAddProductButton() {
        return cy.get('button:contains(Add Product)').as("AddSmallProductButton");
    }


    get searchBox() {
        return cy.get("#text-filter-column-display-id").as("Search Box");
    }

    get addProductBigButton() {
        return cy.get('.products-container-input > .btn').as("Add Product Button");
    }

    get selectImageButton() {
        return cy.get("button:contains(Select Image)").as("Select Image Button");
    }

    get selectFileButton() {
        return cy.get('input[type="file"]').as("Select File Button");
    }

    get saveProductButton() {
        return cy.get(".form > .btn").as("Save Product Button");
    }

    get enableCrossSellToggle() {
        return cy
            .get(".select-options > div > :nth-child(3)")
            .as("Enable CrossSell Toggle");
    }

    get disableCrossSellToggle() {
        return cy.get("div > :nth-child(4)").as("Disable CrossSell Toggle");
    }

    get enableUpSellToggle() {
        return cy
            .get(".select-options > div > :nth-child(1)")
            .as("Enable UpSell Toggle");
    }

    get disableUpSellToggle() {
        return cy
            .get(".select-options > div > :nth-child(2)")
            .as("Disable Up Sell Toggle");
    }

    get editIcon() {
        return cy.get(':nth-child(1) > :nth-child(5) > .products-view-table-edit').as("Edit Icon");
    }

    get errorMessage() {
        return cy.get(".form-status").as("Error Message");
    }
    get productName() {
        return cy.get('[placeholder = "Product Name"]').as("Product Name");
    }

    get deleteProductButton() {
        return cy
            .get(".alert-modal-action > :nth-child(1)")
            .as("Delete Product Button");
    }

    get productPrice() {
        return cy
            .get(":nth-child(5) > .label > .inp-container > .inp")
            .as("Product Price");
    }

    get productDiscount() {
        return cy
            .get(":nth-child(6) > .label > .inp-container > .inp")
            .as("Product Discount");
    }

    get productLandingPageURL() {
        return cy
            .get(":nth-child(7) > .label > .inp-container > .inp")
            .as("Product Landing Page URL");
    }
    get saveProduct() {
        return cy.get('.discount-modal-closer > .btn-gradient').as("Save Product Button");
    }

    get saveButtonProduct() {
        return cy.get('.base-form > .btn').as("Save Product Button");
    }


    get toggle() {
        return cy.get('.product-sidebar-toggle').as("Toggle ");
    }

    get productCheckbox() {
        return cy
            .get(".collection-header-select-badge-main > .checkbox")
            .as("Product Checkbox");
    }

    get crosssellDropDownOption() {
        return cy.get("div > :nth-child(3)").as("Crossell Dropdown");
    }
    get deleteDropDownOption() {
        return cy.get(" div > :nth-child(5)").as("delete DropDown Option");
    }

    get upsellDropDownOption() {
        return cy
            .get(".select-options > div > :nth-child(1)")
            .as("Upsell Dropdown");
    }

    get actionDropDown() {
        return cy.get(".select-selected").as("Action Dropdown");
    }

    get tableRow() {
        return cy.get(".lib-table-row > :nth-child(1)").as("Table Row");
    }

    get toggleStatus() {
        return cy.get(":nth-child(1) > :nth-child(2) > .product-toggle > .toggle");
    }

    addProductWithDetails(prdName) {
        this.smallAddProductButton.click();
        this.productName.click();
        this.productName.type(prdName);
        this.productPrice.type("10");
        this.productDiscount.type("2");
        this.productLandingPageURL.type("https://oneprod.com");
        this.saveProduct.click({ multiple: true });
    }

    addProduct(prdName) {

        this.smallAddProductButton.click();
        this.productName.click();
        this.productName.type(prdName);
        this.productPrice.type("10");
        this.productDiscount.type("2");
        this.productLandingPageURL.type("https://oneprod.com");
        this.saveProduct.click({ multiple: true });

    }

    addProductWithImage(productTitle) {
        this.smallAddProductButton.click();
        this.selectImageButton.click();
        this.selectFileButton.attachFile("Tweety.png");
        this.saveButtonProduct.click();
        this.productName.click();
        this.productName.type(productTitle);
        this.productPrice.type("20");
        this.productDiscount.type("5");
        this.productLandingPageURL.type("https://oneprod.com");
        this.saveProduct.click({ multiple: true });
    }
    addProductWithoutProductName() {
        this.smallAddProductButton.click();
        this.saveProduct.click({ multiple: true });
    }

    addProductWithoutProductLandingURL(prdName) {
        this.smallAddProductButton.click();
        this.productName.click();
        this.productName.type(prdName);
        this.saveProduct.click({ multiple: true });
    }

    addProductWithWrongLandingPageURL(prdName) {
        this.smallAddProductButton.click();
        this.productName.click();
        this.productName.type(prdName);
        this.productLandingPageURL.type("https://.com");
        this.saveProduct.click({ multiple: true });
    }

    enableCrossSellforProducts() {
        this.productCheckbox.click({ force: true });
        this.actionDropDown.click();
        this.enableCrossSellToggle.click();
    }

    disableCrossSellforProducts() {
        this.productCheckbox.click({ force: true });
        this.actionDropDown.click();
        this.disableCrossSellToggle.click();
    }

    enableUpSellforProducts() {
        this.productCheckbox.click({ force: true });
        this.actionDropDown.click();
        this.enableUpSellToggle.click();
    }

    disableUpSellforProducts() {
        this.productCheckbox.click({ force: true });
        this.actionDropDown.click();
        this.disableCrossSellToggle.click();
    }

    deleteProduct() {
        this.productCheckbox.click({ force: true });
        this.actionDropDown.click();
        this.deleteDropDownOption.click();
        this.deleteProductButton.click();
    }

    editProduct() {
        this.tableRow.find('[type="checkbox"]').first().click({ force: true });
        this.editIcon.click();
        this.productPrice.clear();
        this.productPrice.type("20");
        this.productDiscount.clear();
        this.saveProduct.click();
    }

    searchaProduct(prdName) {
        this.searchBox.type(prdName);
    }
}
export default ProductsPage;