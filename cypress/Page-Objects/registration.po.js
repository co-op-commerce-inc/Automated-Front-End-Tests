class RegistrationPage {
    get errorValidationMessage() {
        return cy.get('.form-status').as("Error Validation Message");
    }

    get shopURL() {
        return cy.get('[placeholder="Shop URL"]').as("Shop URL");
    }

    get shortDescription() {
        return cy.get('[placeholder="Short description"]').as("Short Description");
    }

    get nextYourGoalsButton() {
        return cy.get(".btn-gradient").as("Next Your Goals Button");
    }

    get inventoryManagementArrow() {
        return cy.get("select-icon:eq(1)").as("Inventory Management Arrow");
    }

    get inventoryManagementDropdownOption() {
        return cy.get('.select-options-wrapper > :nth-child(1)').as("Inventory Management Dropdown Option");
    }
    get next() {
        return cy.get("button:contains(Next)").as("Next Button");
    }

    get skipthisStepForNowButton() {
        return cy
            .get("button:contains(Skip this step for now)")
            .as("Skip this step for now Button");
    }

    get skipforNowButton() {
        return cy.get("button:contains(Skip for now)").as("Skip for now Button");
    }

    get orSkipthisStepButton() {
        return cy
            .get("button:contains(Or, skip this step for now)")
            .as("Or, skip this step for now Button");
    }

    get closeIcon() {
        return cy.get(".modal-header-btn").as("Close Icon");
    }

    get nextEditProductButton() {
        return cy
            .get("button:contains(Next — edit your products)")
            .as("Next Edit Your Products");
    }

    get nextYourBrandingButton() {
        return cy
            .get("button:contains(Next — add your branding)")
            .as("Next Your Branding Button");
    }
    get shopName() {
        return cy.get('[placeholder="Shop name"]').as("Shop Name");
    }

    get shortDescription() {
        return cy.get('[placeholder="Short description"]').as("Short description");
    }
    get selectYourPlatform() {
        return cy.get("[src='/static/media/shopify-big.d10567fc.png']").as("Select Your Platform");
    }

    get shopCategory() {
        return cy.get(':nth-child(3) > .list-inp-container > .mini-badge')
            .as("Shop Category");
    }

    get category() {
        return cy.get('.modal-select-aside-content > :nth-child(1)')
            .as("Category");
    }

    get addCategoryIcon() {
        return cy.get(".mini-badge").as("Add Category Icon");
    }

    get categoryIcon() {
        return cy
            .get(".modal-select-aside-content > :nth-child(1)")
            .as(" Category Icon");
    }

    get categoryNextButton() {
        return cy.get(".modal-select-main-btn-next").as(" Category Next Button");
    }

    get nextSelectCategoriesButton() {
        return cy.get('.modal-select-main-btn-next').as("next Select Categories Button");
    }

    get subCategoryofMainCategory() {
        return cy
            .get(".modal-select-aside-content > :nth-child(1)")
            .as("Sub Category");
    }

    get nextButton() {
        return cy
            .get(".modal-select-main-btn-next > .filled-btn-text")
            .as("next Button");
    }

    get fullName() {
        return cy.get('[name="full_name"]').as("Full Name");
    }

    get SetupPPWidgetButton() {
        return cy
            .get('button:contains("Set up my post purchase widget")')
            .as("Set up my post purchase widget button");
    }

    get nextEnterInfoButton() {
        return cy
            .get(".onboarding-step-main-action > .btn")
            .as("next Enter Info Button");
    }

    get doneButton() {
        return cy
            .xpath("//span[.='Done! This all looks correct']")
            .as("Done Button");
    }


    get monthlyOrderVolume() {
        return cy.get('[placeholder="Per month"]').as("Monthly Order Volume");
    }

    get brandName() {
        return cy.get('[placeholder="Brand name"]').as("brand Name");
    }

    get saveandLogout() {
        return cy.get('.onboarding-step-logout').as("Save and Logout");
    }

    get emailIDField() {
        return cy.get('[name="email"]').as("Email Field");
    }

    get checkBoxField() {
        return cy.get(".checkbox").as("CheckBox Field");
    }
    get passwordField() {
        return cy.get('[placeholder="Your password"]').as("Password Field");
    }
    get monthlyOrderVolume() {
        return cy.get('.radio-inp-container > :nth-child(2)').as("Monthly Order Volume");
    }

    get hearAboutUs() {
        return cy.get('.select-selected').as("Hear About Us");
    }

    get hearAboutUsOptions() {
        return cy.get('.select-options-wrapper > :nth-child(4)')
            .as("Hear About Us");
    }


    get platformOption() {
        return cy.get('.platforms-view-platforms > :nth-child(5)').as("Platform Option");
    }

    get contineButton() {
        return cy.get('footer > .btn').as("Continue Button");
    }


    get termsandServicesCheckbox() {
        return cy
            .xpath("//label[@class='checkbox undefined']")
            .as("Terms and Services Checkbox");
    }

    get confirmPasswordField() {
        return cy
            .get('[placeholder="Confirm password"]')
            .as("Confirm Password Field");
    }

    get getStartedButton() {
        return cy
            .get("button:contains(Get Started)")
            .as("Get Started Button");
    }

    get letsStartedButton() {
        return cy
            .get("button:contains(Let’s get started)")
            .as("Lets Started Button");
    }

    get letsGetStartedButton() {
        return cy
            .get("button:contains(Yes, let's get started.)")
            .as("Lets Get Started Button");
    }


    get saveandContinueButton() {
        return cy
            .get("button:contains(Save and continue)")
            .as("Save and continue Button");
    }

    get question1Option1() {
        return cy.get('.badge-question-options > :nth-child(1)')
            .as("Question 1 Option 1");
    }

    get currentCPA() {
        return cy.get('[placeholder="Current CPA"]')
            .as("Current CPA");
    }

    get targetCPA() {
        return cy.get('[placeholder="Target CPA"]')
            .as("Target CPA");
    }


    get ageRange() {
        return cy.get('.checkbox-list-input > :nth-child(2)')
            .as("Age Range");
    }

    get gender() {
        return cy.get('.checkbox-list-input > :nth-child(2)')
            .as("Gender");
    }

    get householdIncome() {
        return cy.get('.checkbox-list-input > :nth-child(3)')
            .as("Household Income");
    }



    get yesLetsDoItButton() {
        return cy.get("button:contains(Yes, let's do it)").as("Yes Lets Do It  Button");
    }


    get nextSetupPaymentButton() {
        return cy.get("button:contains(Next — setup payments)").as("Next — setup payments  Button");
    }

    get skipforNowButton() {
        return cy.get("button:contains(Skip for now)").as("Skip for now Button");
    }

    get addPartnerIcon() {
        return cy.get(':nth-child(6) > .list-inp-container > .mini-badge')

        .as("Partner Category");
    }

    get partnerCategory() {
        return cy.get('.modal-select-aside-content > :nth-child(1)')
            .as("Add Partner Icon");
    }

    get partnerCategorySaveButton() {
        return cy.get('.modal-select-main-btn-next').as("Partner Category Save  Button");
    }

    get goaloption() {
        return cy.get(':nth-child(2) > .goals-step-goal > aside > :nth-child(3) > svg').as("Goal Option");
    }

    get confirmYourGoalButton() {
        return cy
            .get("button:contains(Next — confirm your #1 goal)")
            .as("Confirm your goal Button");
    }

    get nextSetupYourProfileButton() {
        return cy.get("button:contains(Next — set up your profile)")
            .as("Next Setup Your Profile Button");
    }

    get nextTechStackButton() {
        return cy.get("button:contains(Next – Your Tech Stack)")
            .as("Next Tech Stack  Button");
    }


    get nextchooseCategoriesButton() {
        return cy.get("button:contains(Next — choose your categories)")
            .as("Next Choose Categories Button");
    }

    get nextsetupPlatformIntegrationButton() {
        return cy.get("button:contains(Next — setup platform integration)")
            .as("Next Setup Platform Integration Button");
    }

    get nextSelectSubCategory() {
        return cy.get("button:contains(Next, select subcategories)")
            .as("Next Select Subcategory Button");
    }




    checkEmailAlreadyExists() {
        this.shopURL.type("marian.com");
        this.shopName.type("MARIO");
        this.passwordField.type("Ea864B056$");
        this.confirmPasswordField.type("Ea864B056$");
        this.emailIDField.type("anizam1000@gmail.com");
        this.checkBoxField.click();
        this.letsStartedButton.click();
    }



    selectCategory() {
        this.shopCategory.click();
        this.category.click();
        this.nextButton.click();
        cy.wait(1000);
        this.nextButton.click();
        this.nextSelectCategoriesButton.click({ multiple: true });
        this.subCategoryofMainCategory.click();
        this.nextButton.click();
        this.doneButton.click();
        cy.wait(1000);
        this.addPartnerIcon.click();
        this.partnerCategory.click();
        this.partnerCategorySaveButton.click();

    }
    fillStep1(shopname, emailid) {
        this.shopURL.type("marian.com");
        this.shopName.type(shopname);
        this.passwordField.type("Ea864B056$");
        this.confirmPasswordField.type("Ea864B056$");
        this.emailIDField.type(emailid);
        this.checkBoxField.click();
        this.letsStartedButton.click();
    }

    enterFullName(fullname) {
        this.fullName.type(fullname);
        this.nextYourGoalsButton.click();
        cy.wait(1000);
        this.next.click();
        this.nextYourBrandingButton.click();
        this.SetupPPWidgetButton.click();
        this.addCategoryIcon.click();
        this.categoryIcon.click();
        this.categoryNextButton.click();
        this.nextEditProductButton.click();
        this.skipthisStepForNowButton.click();
        this.skipforNowButton.click();
        this.orSkipthisStepButton.click();
        this.closeIcon.click();
    }


    getStartedDetails(fullname, emailid, brandname, shopURL) {
        this.fullName.type(fullname);
        this.emailIDField.type(emailid);
        this.brandName.type(brandname);
        this.shopURL.type(shopURL);
        this.hearAboutUs.type("Google");
        this.hearAboutUsOptions.click();
        this.monthlyOrderVolume.click();
        this.getStartedButton.click();

    }


    fillGetStartedDetails(fullname, emailid3, brandname3, shopURL2) {
        this.fullName.type(fullname);
        this.emailIDField.type(emailid3);
        this.brandName.type(brandname3);
        this.shopURL.type(shopURL2);
        this.hearAboutUs.type("Google");
        this.hearAboutUsOptions.click();
        this.monthlyOrderVolume.click();
        this.getStartedButton.click();

    }


    createAccountDetails() {
        this.passwordField.type("Ea864B056$");
        this.confirmPasswordField.type("Ea864B056$");
        this.checkBoxField.click();
        this.getStartedButton.click();
    }

    checkPasswordLength() {
        this.passwordField.type("123");
        this.confirmPasswordField.type("123");
        this.checkBoxField.click();
        this.getStartedButton.click();
    }

    checkforSamePassword() {
        this.passwordField.type("Ea864B056$");
        this.confirmPasswordField.type("Ea864B05");
        this.checkBoxField.click();
        this.getStartedButton.click();
    }

    selectPlatformOption() {
        this.platformOption.click();
        this.contineButton.click();
    }

    fillquestions() {
        this.question1Option1.click();
        this.saveandContinueButton.click();
        this.currentCPA.type(500);
        this.targetCPA.type(1000);
        this.saveandContinueButton.click();
        this.ageRange.click();
        this.saveandContinueButton.click();
        this.gender.click();
        this.saveandContinueButton.click();
        this.householdIncome.click();
        this.saveandContinueButton.click();
    }


    selectGoal() {
        this.goaloption.click();
        this.confirmYourGoalButton.click();
    }

    fillProfile() {
        this.shortDescription.type("Test");
        this.nextTechStackButton.click();
    }

    fillTechStack() {
        cy.contains('Select your inventory management system').click();
        this.inventoryManagementDropdownOption.click();

    }




}
export default RegistrationPage;