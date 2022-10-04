class CrossSellPage {
    crossSellPageURL() {
        cy.visit("/widget/crossSell");
    }
    get enableToggle() {
        return cy.get('[data-toggle="true"]');
    }

    get disableToggle() {
        return cy.get('[data-toggle="false"]');
    }

    get widgetHeaderText() {
        return cy.get('[name = "Your widget header"]');
    }

    get crossSellToggle() {
        return cy.get('.new-widget-module-toggler > .labeled-inp > .label > .toggle-inp-container > .toggle')
    }

    get manageProductOrderingTab() {
        return cy.get('[data-name="Manage Product Ordering"]');
    }

    get saveOrderButton() {
        return cy.get(".products-container-save-order");
    }

    get source() {
        return cy.get(".product-row:eq(1)");
    }

    get orderOptimizationToggle() {
        return cy.get(
            ":nth-child(2) > .labeled-inp > .label > .toggle-inp-container > .toggle > .toggle-handle"
        );
    }

    get editIcon1() {
        return cy.get(':nth-child(4) > .label > .btn')
    }
    get editIconforExcludeCategories() {
        return cy.get(':nth-child(6) > .list-inp-container > .list-inp-icon-badge')
    }

    get editIconforExcludeShops() {
        return cy.get(':nth-child(5) > .label > .btn');
    }

    get saveButton() {
        return cy.get("button:contains(Done! This all looks correct)");
    }

    get saveButtonforShop() {
        return cy.get("button:contains(Save)");
    }
    get nextButton() {
        return cy.get(".modal-select-main-btn-next");
    }

    get likeMindedDropdown() {
        return cy.get(".select-icon > svg");
    }

    get likeMindedDropdownOption() {
        return cy.get(".select-options > :nth-child(1) > :nth-child(2)");
    }

    get addShopCategory() {
        return cy.get('.modal-select-aside-content > :nth-child(2)');
    }

    get removeShopCategory() {
        return cy.get('.modal-select-main-content > :nth-child(1)')
    }

    addPartnerShopCategories() {
        this.editIcon1.click();
        this.addShopCategory.trigger('click');
        this.saveButton.click();
        return this;
    }

    removePartnerShopCategories() {
        this.editIcon1.click();
        this.removeShopCategory.click({ force: true });
        this.saveButton.click();
        return this;
    }

    // includeSubCategories() {
    //     this.editIconforExcludeShops.click();
    //     this.addShopCategory.click();
    //     this.nextButton.click();
    //     this.nextButton.click();
    //     // this.saveButton.click();
    //     return this;
    // }

    // excludefromExcludeSubCategories() {
    //     this.editIconforExcludeShops.click();
    //     this.removeShopCategory.click();
    //     this.nextButton.click();
    //     this.nextButton.click();
    //     this.saveButton.click();
    //     return this;
    // }

    includeShops() {
        this.editIconforExcludeShops.click();
        this.addShopCategory.click();
        this.saveButtonforShop.click();
        return this;
    }

    excludeShops() {
        this.editIconforExcludeShops.click();
        this.removeShopCategory.click({ force: true });
        this.saveButtonforShop.click();
        return this;
    }
}

export default CrossSellPage;