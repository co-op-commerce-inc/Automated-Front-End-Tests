class PageSetupPage {
    get ppeToggleEnable() {
        return cy
            .get(
                ".toggle-inp-container.toggle-inp-container-activated > .toggle.toggle-inp"
            )
            .as("Post Purchase Experience Toggle");
    }

    get ppeToggleDisable() {
        return cy
            .get(".toggle-inp-container > .toggle.toggle-inp")
            .as("Post Purchase Disable Toggle");
    }

    get changeBanner() {
        return cy.get(".edit-image-open").as("Change Banner");
    }

    get selectFileButton() {
        return cy.get('input[type="file"]').as("Select File Button");
    }

    get saveImageButton() {
        return cy.get('.btn').as("Save Image Button");
    }

    get colorField() {
        return cy.get("input[name='Shop Color']").as("Color Field");
    }
    get yesMark() {
        return cy.get(".tag-btn-green");
    }

    addPPEImage() {
        this.changeBanner.click();
        this.selectFileButton.attachFile("Tweety.png");
        this.saveImageButton.click();
    }

    selectColor() {
        this.colorField.clear();
        this.colorField.type("#28277b");
        this.yesMark.click();
    }
}
export default PageSetupPage;