class OffersPage {
    get manualTab() {
        return cy
            .get(".tab-switcher-container-small div:nth-of-type(2)")
            .as("Manual Tab");
    }

    get newOfferButton() {
        return cy.get(".widget-pane-header > .btn").as("New Offer Button");
    }

    get changeModeButton() {
        return cy
            .get("button:contains(Continue, change modes)")
            .as("Change Mode Button ");
    }

    get brandStory() {
        return cy
            .get("main > .labeled-inp > .label > .inp-container > .inp")
            .as("Brand Story");
    }

    get onYourPropertiesOption() {
        return cy
            .xpath("//section[.='On Your Properties']")
            .as("On Your Properties Option");
    }

    get onPartnerPropertiesOption() {
        return cy
            .xpath("//section[.='On Partner Properties']")
            .as("On Partner's Properties Option");
    }

    get byDiscount() {
        return cy
            .get(":nth-child(3) > .label > .inp-container > .inp")
            .as("Discount");
    }

    get saveandPublishButton() {
        return cy.get("button:contains(Save & Publish)").as("Save and Publish");
    }

    get editOfferButton() {
        return cy.get("button:contains(Edit)").as("Edit Offer Button");
    }

    get offerHeadline() {
        return cy
            .get(".offer-step-basic-input > .label > .inp-container > .inp")
            .as("Offer Headline");
    }

    get productDescription() {
        return cy.get('.offer-step-adv-input > .label > .inp-container > .inp')
            .as("product Description");
    }
    get saveOfferButton() {
        return cy.get("button:contains(Save & Continue)").as("Save Offer Button");
    }

    get saveOfferasDraftButton() {
        return cy.get("button:contains(Save as draft)").as("Save as draft");
    }
    get productDropdown() {
        return cy.get('.select-icon > svg').as("Product Dropdown");
    }

    get productDropdownOption() {
        return cy.get('.select-options-wrapper > section:nth-of-type(1)')
            .as("Product Dropdown Option");
    }

    get errorMessage() {
        return cy.get(".form-status").as("Form Status");
    }

    get actionDropdown() {
        return cy.get(".dropdown-select").as("action Dropdown");
    }

    get archiveOption() {
        return cy
            .xpath("//section[.='Archive this offer']")
            .as("archive Option");
    }

    get offerStatusDropDown() {
        return cy
            .get(".offers-actions [stroke='currentColor']")
            .as("offer Status DropDown");
    }

    get draftOfferOption() {
        return cy
            .get(".select-options > div > :nth-child(3)")
            .as("Draft Offer Option");
    }

    get archiveOfferOption() {
        return cy
            .xpath("//section[normalize-space()='Archived Offers']")
            .as("Archive Offer Option");
    }

    get includeTimer() {
        return cy
            .xpath("//div[normalize-space()='Yes, include a timer']")
            .as("Include a Timer");
    }

    get timerBox() {
        return cy.get('input[name="duration"]').as("Timer Box");
    }

    get customerMeetRules() {
        return cy
            .xpath('//div[contains(text(),"Customers who meet specific rules")]')
            .as("Customer Meet Rules");
    }

    get addRule() {
        return cy.xpath('//button[normalize-space()="Add rule"]').as("Add Rule");
    }

    get restoreandEnable() {
        return cy
            .xpath('//section[normalize-space()="Restore and enable"]')
            .as("Restore and Enable");
    }

    get findPeopleWhose() {
        return cy
            .xpath('//section[contains(text(),"Find people whose")]')
            .as("Find people whose");
    }

    get numberofProducts() {
        return cy
            .xpath('//section[normalize-space()="Number of Products"]')
            .as("Number of Products");
    }

    get chooseaComparision() {
        return cy
            .xpath('//section[contains(text(),"Choose a comparison")]')
            .as("Choose a Comparision");
    }

    get quantityField() {
        return cy
            .xpath("//input[contains(@placeholder,'Quantity')]")
            .as("Quantity");
    }

    get percentageField() {
        return cy
            .xpath("//div[normalize-space()='Percent']")
            .as("Percentage Field");
    }

    get percentageOff() {
        return cy.xpath("//input[contains(@placeholder,'%')]").as("Percentage Off");
    }

    get comparisionOption() {
        return cy
            .xpath("//section[normalize-space()='is Equal to']")
            .as("Comparision Option");
    }
    createdefaultoffer() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("My First Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.byDiscount.type("1");
        this.saveandPublishButton.click();
    }


    configurediscountbypercent() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Percentage Offer");
        this.productDropdown.click({ timeout: 1000 });
        this.productDropdownOption.click();
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.percentageField.click();
        this.percentageOff.type("5");
        this.saveandPublishButton.click();
    }

    leaveoffersection1asempty() {
        this.newOfferButton.click();
        cy.wait(1000)
        this.saveOfferButton.click();
    }

    leavePartnerOfferSection1asempty() {
        this.newOfferButton.click();
        cy.wait(1000)
        this.saveOfferButton.click();
    }

    leaveoffersection2asempty() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.saveOfferButton.click({ force: true, multiple: true });
        this.offerHeadline.type("My First Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.saveandPublishButton.click();
        this.saveandPublishButton.click({ timeout: 1000 });
    }

    saveasDraft() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Draft Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.byDiscount.type("1");
        this.saveOfferasDraftButton.click();
    }

    archiveOffer() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Archive Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.byDiscount.type("5");
        this.saveandPublishButton.click();
        this.actionDropdown.eq(3).click();
        this.archiveOption.click();

    }

    addtimerinoffers() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Timer Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.includeTimer.click({ multiple: true });
        this.timerBox.clear();
        this.timerBox.type("60");
        this.saveOfferButton.click();
        this.byDiscount.type("1");
        this.saveandPublishButton.click();
    }
    createruleinOffers() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Offer Containing Rules ");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.customerMeetRules.click();
        this.addRule.click();
        this.findPeopleWhose.click();
        this.numberofProducts.click();
        this.chooseaComparision.click();
        this.comparisionOption.click();
        this.quantityField.type("20");
        this.saveOfferButton.click();
        this.byDiscount.type("1");
        this.saveandPublishButton.click();
    }

    restoreandenable() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Archive Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.byDiscount.type("5");
        this.saveandPublishButton.click();
        this.actionDropdown.eq(2).click();
        this.archiveOption.click();
        this.offerStatusDropDown.click();
        this.archiveOfferOption.click();
        this.actionDropdown.eq(0).click();
        this.restoreandEnable.click();
    }

    editoffer() {
        this.newOfferButton.click({ timeout: 1000 });
        cy.wait(1000)
        this.offerHeadline.type("Add and Update Offer");
        this.productDropdown.click();
        this.productDropdownOption.click({ timeout: 1000 });
        this.productDescription.type("TEST");
        this.saveOfferButton.click();
        this.byDiscount.type("1");
        this.saveandPublishButton.click();
        this.editOfferButton.eq(0).click();
        cy.wait(2000);
        this.offerHeadline.clear({ force: true });
        this.offerHeadline.type("Updated Offer");
        this.saveandPublishButton.click();
    }
}
export default OffersPage;