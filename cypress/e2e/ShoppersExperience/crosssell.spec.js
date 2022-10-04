// <reference types ="Cypress"/>
import CrossSellPage from "../../Page-Objects/crossell.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const crosssellpage = new CrossSellPage();
const menucomp = new MenuComponent();

describe("Verify GUI elements of Post Cross-Sell Section", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        menucomp.openGrowMenu.click();
        menucomp.discoFeedOption.click();
        cy.clearCookies();
    });


    it("Should include/exclude partner shop categories succesfully", () => {
        crosssellpage.addPartnerShopCategories();
        crosssellpage.removePartnerShopCategories();
    });


    it("Should include/excludethese shops succesfully", () => {
        crosssellpage.includeShops();
        crosssellpage.excludeShops();
    });



});