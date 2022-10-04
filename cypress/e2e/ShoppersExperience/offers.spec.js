/// <reference types ="Cypress"/>
import OffersPage from "../../Page-Objects/offers.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const offersspage = new OffersPage();
const menucomp = new MenuComponent();

describe("Verify GUI and functionality of Offers Page", () => {
    beforeEach(() => {
        cy.Superlogin("Edith's Mansion");
        menucomp.openSellMenu.click();
        menucomp.openOfferMenu.click();

    });

    it("Should add a default Offer", () => {
        offersspage.createdefaultoffer();
        cy.contains("My First Offer").should("be.visible");
    });



    it("Should edit an offer", () => {

        offersspage.editoffer();
        offersspage.offerHeadline.should("contain.value", "Updated");
    });


});