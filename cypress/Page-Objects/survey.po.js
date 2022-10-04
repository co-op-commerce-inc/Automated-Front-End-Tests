class SurveyPage {
    get addQuestionButton() {
        return cy.get("button:contains(Add Question)").as("Add Question Button");
    }

    get activeCheckbox() {
        return cy
            .xpath(
                "//section[@class='survey-options']/section[1]//label[2]//div[@class='checkbox-checkmark']"
            )
            .as("Active Checkbox");
    }

    get defaultSurveyOption() {
        return cy
            .get("div:nth-of-type(1) > img[alt='Default Survey']")
            .as("Default Survey Option");
    }

    get customSurveyOption() {
        return cy
            .get(".survey-question-modal-type-container > div:nth-of-type(2)")
            .as("Custom Survey Option");
    }
    get nextButton() {
        return cy
            .get(".filled-btn.modal-select-main-btn-next > .filled-btn-text")
            .as("Next Button");
    }

    get saveandMakeActiveButton() {
        return cy
            .get("button:contains(Save & make active)")
            .as("Save & make active Button");
    }

    get activeStatus() {
        return cy
            .get(
                "div:nth-of-type(1) > .collapsable.list-view-entry > .collapsable-head > .survey-question-text > .widget-module-badge.widget-module-badge-filled.widget-module-badge-rounded.widget-module-badge-success"
            )
            .as("Active Status");
    }

    get followupCheckbox() {
        return cy
            .get(":nth-child(1) > .survey-option-main > .label > .checkbox")
            .as("Followup Checkbox");
    }

    get followupText() {
        return cy
            .get(".survey-options > :nth-child(1) > :nth-child(2) > .inp")
            .as("Followup Text");
    }

    get inactiveStatus() {
        return cy.get(".widget-module-badge").as("Inactive Status");
    }

    get makeActiveButton() {
        return cy.get("button:contains(Make active)").as("Make Active Button");
    }

    get followupOption() {
        return cy.get(".survey-question-option-follow-up").as("Inactive Status");
    }

    get numberofProducts() {
        return cy
            .xpath('//section[normalize-space()="Number of Products"]')
            .as("Number of Products");
    }

    get chooseaComparision() {
        return cy
            .get('section[class="select-selected "]:eq(2)')
            .as("Choose a Comparision");
    }

    get quantityField() {
        return cy
            .xpath("//input[contains(@placeholder,'Quantity')]")
            .as("Quantity");
    }

    get ruleOption() {
        return cy
            .xpath("//div[.='Customers who meet specific rules']")
            .as("Rule Option");
    }

    get addRule() {
        return cy.xpath('//button[normalize-space()="Add rule"]').as("Add Rule");
    }
    get deleteIcon() {
        return cy
            .get(":nth-child(1) > .survey-option-main > :nth-child(4) > svg")
            .as("Delete Icon");
    }

    get deleteButton() {
        return cy.get(".list-view-entry-action > .btn").as("Delete Button");
    }

    get custMeetSpecificRuleCheckbox() {
        return cy
            .xpath("//div[normalize-space()='Customers who meet specific rules']")
            .as("Cust Meet Specific Rule Checkbox");
    }

    get questionOptions() {
        return cy.get(".survey-question-option").as("Question Option");
    }

    get addAnotherAnswer() {
        return cy.get(".btn.btn-light.survey-options-add").as("Add Another Answer");
    }

    get addOptionText() {
        return cy.get("section:nth-of-type(11) .inp").as("Add Option Text");
    }

    get editButton() {
        return cy.get("button:contains(Edit)").as("Edit Button");
    }

    get viewConfiguration() {
        return cy.get(":nth-child(1) > .collapsable").as("View Configuration");
    }
    get formStatus() {
        return cy
            .xpath(
                "//div[contains(@class,'form-status form-status-success survey-config-form-status')]"
            )
            .as("Form Status");
    }
    get randomizeSurveyOption() {
        return cy.get(".toggle-handle");
    }

    get question() {
        return cy.get('[placeholder = "Question Text Here"]').as("Question");
    }

    get disableButton() {
        return cy.get("button:contains(Disable)").as("Disable Button");
    }

    get makeActiveButton() {
        return cy.get("button:contains(Make active)").as("Make Active Button");
    }
    get questionText() {
        return cy
            .xpath(
                "//section[@class='collapsable collapsable-open  list-view-entry']//h3[@class='survey-question-text']"
            )
            .as("Question Text");
    }

    get optionText() {
        return cy.get('[placeholder="Add Option Text"]').as("Option Text");
    }

    get errorMessage() {
        return cy.get(".form-status.stepped-modal-error").as("Error Message");
    }
    get addAnotherAnswerOption() {
        return cy
            .get(".survey-options > section:nth-of-type(2) .inp")
            .as("Add Another Answer Option");
    }

    get findPeopleWhose() {
        return cy
            .get('section[class="select-selected "]:eq(1)')
            .as("Find people whose");
    }
    get comparisionOption() {
        return cy.xpath("//section[normalize-space()='is Equal to']")
            .as("Comparision Option");
    }

    get collapsableToggle() {
        return cy.get('.collapsable > .collapsable-toggle > svg').as("Collapsable Toggle");
    }


    adddefaultSurveywithRandomOption() {
        this.addQuestionButton.click();
        this.defaultSurveyOption.click();
        this.nextButton.click();
        this.randomizeSurveyOption.eq(0).click({ force: true });
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
    }

    addruleindefaultSurvey() {
        this.addQuestionButton.click();
        this.defaultSurveyOption.click();
        this.nextButton.click();
        this.custMeetSpecificRuleCheckbox.eq(0).click();
        this.addRule.click();
        this.findPeopleWhose.click();
        this.numberofProducts.click();
        this.chooseaComparision.click();
        this.comparisionOption.click({ force: true });
        this.quantityField.type("1000");
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
        this.editButton.eq(0).click();
        this.nextButton.click();
    }

    checkValidationincustomSurvey() {
        this.addQuestionButton.click();
        this.customSurveyOption.click();
        this.nextButton.click();
    }

    addcustomSurveywithAnswerOption() {
        this.addQuestionButton.click();
        this.customSurveyOption.click();
        this.question.type("What is your choice");
        this.optionText.type("A");
        this.addAnotherAnswer.click();
        this.addAnotherAnswerOption.type("B");
        this.nextButton.click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
    }

    deletecustomSurvey() {
        this.addQuestionButton.click();
        this.customSurveyOption.click();
        this.question.type("What is your choice");
        this.optionText.type("A");
        this.nextButton.click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
        this.deleteButton.click();
    }

    addFollowupQuestioninDefaultSurvey() {
        this.addQuestionButton.click();
        this.defaultSurveyOption.click();
        this.followupCheckbox.click();
        this.followupText.type("What is your opinion");
        this.nextButton.click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
    }

    deleteQuestionOptioninDefaultSurvey() {
        this.addQuestionButton.click();
        this.defaultSurveyOption.click();
        this.deleteIcon.click();
        this.nextButton.click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
    }

    editDefaultSurvey() {
        this.addQuestionButton.click();
        this.defaultSurveyOption.click();
        this.nextButton.click();
        this.randomizeSurveyOption.eq(2).click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
        this.editButton.click();
        this.nextButton.click();
        cy.wait(2000);
        this.randomizeSurveyOption.eq(2).click();
        this.nextButton.click();
        this.saveandMakeActiveButton.click();
        cy.wait(2000);
        this.viewConfiguration.click({ multiple: true });
    }

    disableSurvey() {
        this.collapsableToggle.first().click();
        cy.wait(3000)
        this.disableButton.click();
    }

    makeActive() {
        this.collapsableToggle.last().click({ force: true });
        cy.wait(2000)
        this.makeActiveButton.click({ timeout: 2000 });
    }
}
export default SurveyPage;