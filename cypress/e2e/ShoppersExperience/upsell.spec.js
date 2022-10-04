/// <reference types ="Cypress"/>
import UpSellPage from "../../Page-Objects/upsell.po";
import ProductsPage from "../../Page-Objects/products.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const upsellpage = new UpSellPage();
const menucomp = new MenuComponent();

const productpage = new ProductsPage();


const uniqueId = Date.now().toString();
const prdName = `Product ${uniqueId}`;
const productTitle = `QA ${uniqueId}`;


describe("Verify GUI elements of Upsell Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openSellMenu.click();
        menucomp.openUpsell.click();
        cy.clearCookies();
    });

    it("Should enable up-sell page", () => {
        upsellpage.upSellToggle.click();
        cy.contains("Enabled").should("be.visible");
    });


    it("Should enable up-sell product price", () => {
        upsellpage.upSellProductPrice.click();
        cy.contains("Enabled").should("be.visible");
    });

    it("Should enable up-sell offer code", () => {
        upsellpage.upSellOfferCode.click();
        cy.contains("Enabled").should("be.visible");
    });


});