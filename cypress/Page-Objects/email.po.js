class EmailsPage {
    get shopifyToggle() {
        return cy
            .get(".emails-step section:nth-of-type(1) .accordion-toggle")
            .as("Shopify Toggle");
    }

    get klaviyoToggle() {
        return cy
            .get(".klaviyo-emails-config .accordion-toggle")
            .as(" klaviyo Toggle");
    }

    get moreTemplatesButton() {
        return cy
            .get("button:contains(Tell us about your templates)")
            .as("more Templates Button");
    }


    get klaviyoPublicAPIKey() {
        return cy.get("[name='public']").as(" klaviyo Public API key");
    }

    get klaviyoPrivateAPIKey() {
        return cy.get("[name='private']").as(" klaviyo Private API key");
    }

    get orderConfirmationOption1() {
        return cy.get(':nth-child(1) > .emails-config-row-hero > .checkbox').as("Order Confirmation Option 1");
    }

    get shippingConfirmationOption2() {
        return cy.get(':nth-child(2) > .emails-config-row-hero > .checkbox').as("Shipping Confirmation Option 2");
    }

    get shippingUpdatesOption3() {
        return cy.get(':nth-child(3) > .emails-config-row-hero > .checkbox').as("Shipping Updates Option 3");
    }

    get outofDeliveryOption4() {
        return cy.get(':nth-child(4) > .emails-config-row-hero > .checkbox').as("Out Of Delivery Option 4");
    }


    get mailChimpToggle() {
        return cy
            .get(".emails-step section:nth-of-type(3) .accordion-toggle")
            .as("Mail Chimp Toggle");
    }

    get otherToggle() {
        return cy.get(':nth-child(6) > header > .accordion-toggle')

        .as("Other Toggle");
    }

    get collapseToggle() {
        return cy.get('.collapsable-toggle > svg')
            .as("Collapse Toggle");
    }

    get emailProviderField() {
        return cy.get(".inp").as("Email Provider field");
    }

    get coopCarouselToggle() {
        return cy
            .get("[remotekey='shopify_emails_enabled'] > .toggle")
            .as("Coop Carousel Toggle");
    }

    get upsellProductToggle() {
        return cy
            .get("[remotekey='shopify_emails_upsell'] > .toggle")
            .as("Upsell Product Toggle");
    }

    get transactiionalEmailToggle() {
        return cy
            .get("[remotekey='transactional_emails'] > .toggle")
            .as("Transactional Email Toggle");
    }


    get templateToggle() {
        return cy.get('.copy-block-toggle')
            .as("Template Toggle");
    }

    get mailChimpButton() {
        return cy
            .get("button:contains(I really want MailChimp)")
            .as("mailChimp Button");
    }

    get otherIntegrationButton() {
        return cy
            .get("button:contains(Other integrations)")
            .as("Other Integration Button");
    }


    get activeEmailSettingToggle1() {
        return cy.xpath("//section[contains(@remotekey,'shopify_emails_enabled')]//div[@class='toggle-handle']").as(" Active Email Toggle 1");
    }
    get activeEmailSettingToggle2() {
        return cy.xpath("//section[contains(@value,'true')]//div[contains(@class,'toggle-inp')]").as("Active Email Toggle 2");
    }

    get activeEmailSettingToggle3() {
        return cy.xpath("//section[contains(@remotekey,'transactional_emails')]//div[contains(@class,'toggle-inp')]").as("Active Email Toggle 3");
    }

    get shopifyOption2() {
        return cy.get(':nth-child(2) > .radio-inp-option-circle').as("Shopify Option 2");
    }


    get style() {
        return cy.get('[style="transform:rotate(180deg)translateZ(0px);"]').as("Style");
    }


    get formStatus() {
        return cy.get(".form-status").as("Form Status");
    }

    getMailChimp() {
        this.mailChimpToggle.click();
        this.mailChimpButton.click();
    }

    leaveOtherIntegrationEmpty() {
        this.otherToggle.click();
        this.otherIntegrationButton.click();
    }

    enterOtherIntegration() {
        this.otherToggle.click();
        this.emailProviderField.type("Outlook");
        this.otherIntegrationButton.click();
    }


    enterWrongKlaviyoCreds() {
        this.klaviyoToggle.click();
        this.klaviyoPrivateAPIKey.type("1234");
        this.klaviyoPublicAPIKey.type("1234");
        this.klaviyoToggle.click();
    }

    clickMoreTemplates() {
        this.shopifyToggle.click();
        this.moreTemplatesButton.click();
    }

    deactivateEmailSettings() {
        this.collapseToggle.click();
        this.activeEmailSettingToggle1.click();
        this.activeEmailSettingToggle3.click({ force: true });

    }


    activateEmailSettings() {
        this.collapseToggle.click({ force: true });
        this.activeEmailSettingToggle1.click({ force: true });
        this.activeEmailSettingToggle3.click({ force: true });

    }


    customizeShopiyEmailTemplates() {
        this.shopifyToggle.click();
        this.moreTemplatesButton.click({ force: true });
    }

    openShopifyOption2() {
        this.shopifyToggle.click();
        this.shopifyOption2.click();

    }

    openOrderConfirmationOption() {
        this.shopifyToggle.click();
        this.shopifyOption2.click();
        this.orderConfirmationOption1.click();
        this.templateToggle.click();

    }


    openShippingConfirmationOption() {
        this.shopifyToggle.click();
        this.shopifyOption2.click();
        this.shippingConfirmationOption2.click();
        this.templateToggle.click();

    }


    openShippingUpdatesOption() {
        this.shopifyToggle.click();
        this.shopifyOption2.click();
        this.shippingUpdatesOption3.click();
        this.templateToggle.click();

    }


    openOutforDeliveryOption() {
        this.shopifyToggle.click();
        this.shopifyOption2.click();
        this.outofDeliveryOption4.click();
        this.templateToggle.click();

    }




}
export default EmailsPage;