class SettingsPage {
    get firstName() {
        return cy.get("[name='First Name']").as("First Name");
    }

    get lastName() {
        return cy.get("[name='Last Name']").as("Last Name");
    }

    get monthlyOrderVolume() {
        return cy.get("[name='Monthly Order Volume']").as("Monthly Order Volume");
    }

    get mediaKitURL() {
        return cy.get("[name='Media Kit URL']").as("Monthly Order Volume");
    }

    get activeOption() {
        return cy.get(':nth-child(2) > .modal > .modal-select-container > .modal-select-content > .modal-select-aside > .modal-select-aside-content > :nth-child(1)')
            .as("Active Option");
    }



    get removeCategoryOption() {
        return cy.get(':nth-child(2) > .modal > .modal-select-container > .modal-select-content > .modal-select-main > .modal-select-main-content > .mini-badge > .mini-badge-icon > svg')

    }
    get activeWearOption() {
        return cy.xpath("//div[.='Activewear']").as("Active Wear Option");
    }

    get nextSelectSubCategoriesButton() {
        return cy.get(".filled-btn-text").as("Next Select SubCategories Button");
    }

    get nextButton() {
        return cy
            .xpath("//button[@class='modal-select-main-btn-next filled-btn  ']")
            .as("Next Button");
    }

    get doneButton() {
        return cy
            .xpath("//span[.='Done! This all looks correct']")
            .as("Done Button");
    }

    get inventoryManagementDropdown() {
        return cy
            .get(".select-icon:eq(1)")
            .as("Inventory Management Dropdown");
    }

    get inventoryManagementOption() {
        return cy.get('.select-options-wrapper > :nth-child(1)').as("Inventory Management Option");
    }
    get shopURL() {
        return cy.get("[name='Shop URL']").as("Shop URL");
    }

    get longShopDescription() {
        return cy.get("[name='Long Shop Description']").as("Long Shop Description");
    }

    get saveBrandButton() {
        return cy.get(':nth-child(15) > .btn').as("Save Button");
    }
    get shortShopDescription() {
        return cy
            .get("[name='Short Shop Description']")
            .as("Short Shop Description");
    }

    get existingPassword() {
        return cy.get("[placeholder='Existing Password']").as("Existing Password");
    }

    get newPassword() {
        return cy.get("[placeholder='New Password']").as("New Password");
    }

    get userImage() {
        return cy.get(".edit-image > div").as("User Image");
    }

    get selectFileButton() {
        return cy.get('input[type="file"]').as("Select File Button");
    }

    get saveUserImageButton() {
        return cy.get('.base-form > .btn').as("Save User Image Button");
    }

    get changePasswordLink() {
        return cy
            .xpath("//h4[@class='accounts-module-password-open']")
            .as("Change Password Link");
    }

    get saveButton() {
        return cy.get(".btn.modal-action").as("Save Button");
    }

    get phoneNumberField() {
        return cy.get("[name='Phone Number']").as("Phone Number Field");
    }

    get greenIcon() {
        return cy.get(".tag-btn-green [stroke='currentColor']").as("Green Icon");
    }

    get addBadgeButton() {
        return cy.get(".list-inp-mini-badge").as("Add Badge Button");
    }

    get badgeOption() {
        return cy
            .get(".modal-content > section button:nth-of-type(1)")
            .as("Badge Option");
    }

    get saveBadgeButton() {
        return cy.get(".modal-action").as("Save Badge Button");
    }
    get saveCategoryButton() {
        return cy.get(':nth-child(2) > .modal > .modal-select-container > .modal-select-content > .modal-select-main > .modal-select-main-btn-container > .modal-select-main-btn-next')
    }

    get removeBadgeButton() {
        return cy
            .get(".modal-content div:nth-of-type(2) > .btn")
            .as("Remove Badge Button");
    }
    get editIcon() {
        return cy.get(".list-inp-mini-badge.list-inp-icon-badge").as("Edit Icon");
    }

    get editShopCategories() {
        return cy
            .get("[data-customid='0'] > .list-inp-icon-badge")
            .as("Edit Shop Categories");
    }
    get lastNameGreenIcon() {
        return cy.get(".tag-btn-green > .tag-btn-icon > svg").as("Green Icon");
    }
    get sendInvitationButton() {
        return cy
            .get("button:contains(Send an invite)")
            .as("Send Invitation Button");
    }

    get emailtoInviteField() {
        return cy
            .get("[placeholder='Enter the email to invite']")
            .as("Email to Invite Field");
    }

    get errorMessage() {
        return cy.get(".form-status").as("Error Message");
    }

    get deleteButton() {
        return cy.get(".badge-subtle-light").as("Delete Button");
    }

    get invitedButton() {
        return cy.get("button:contains(Invited)").as("Invited Button");
    }

    sendInvitationWithoutEmailId() {
        this.sendInvitationButton.click();
    }

    sendInvitationWithEmailId() {
        this.emailtoInviteField.type("an@gmail.com");
        this.sendInvitationButton.click();
    }

    sendInvitation(emailid) {
        this.emailtoInviteField.type(emailid);
        this.sendInvitationButton.click();
    }
    deleteInvitation() {
        this.deleteButton.click({ multiple: true });
    }

    enterFirstName(firstname) {
        this.firstName.clear();
        this.firstName.type(firstname);
        this.greenIcon.first().click();
    }

    enterLastName(lastname) {
        this.lastName.clear();
        this.lastName.type(lastname);
        this.lastNameGreenIcon.click();
    }

    enterPhoneNumber(telephonenumber) {
        this.phoneNumberField.clear();
        this.phoneNumberField.type(telephonenumber);
        this.greenIcon.click();
    }

    leaveChangePasswordFields() {
        this.changePasswordLink.click();
        this.saveButton.click();
    }

    typeIncorrectPasswords() {
        this.changePasswordLink.click();
        this.existingPassword.type("123");
        this.newPassword.type("456");
        this.saveButton.click();
    }

    changeUserImage() {
        this.userImage.click();
        this.selectFileButton.attachFile("Tweety.png");
        this.saveUserImageButton.click();
    }

    validateMonthlyOrderIncome() {
        this.monthlyOrderVolume.clear();
        this.monthlyOrderVolume.type("abcdef");
        this.greenIcon.click();
    }

    validateShopURL() {
        this.shopURL.clear();
        this.shopURL.type("madein");
        this.greenIcon.click();
    }
    enterNumericMonthlyOrderIncome(monthlyordernumber) {
        this.monthlyOrderVolume.clear();
        this.monthlyOrderVolume.type(monthlyordernumber);
        this.greenIcon.click();
    }

    enterShortDescription(shortdescription) {
        this.shortShopDescription.clear();
        this.shortShopDescription.type(shortdescription);
        this.greenIcon.click();
    }

    enterLongDescription(longdescription) {
        this.longShopDescription.clear();
        this.longShopDescription.type(longdescription);
        this.greenIcon.click();
    }

    selectInventoryManagement() {
        this.inventoryManagementDropdown.click();
        this.inventoryManagementOption.click();
        this.saveBrandButton.click({ force: true });
    }

    addBadge() {
        this.addBadgeButton.click({ multiple: true });
        this.badgeOption.click({ multiple: true });
        this.saveBadgeButton.click();
        this.editIcon.click();
        this.removeBadgeButton.click({ multiple: true });
        this.saveBadgeButton.click();
    }

    addShopinCategory() {
        this.editShopCategories.click({ multiple: true, force: true });
        this.removeCategoryOption.click();
        this.saveCategoryButton.click();
    }
}
export default SettingsPage;