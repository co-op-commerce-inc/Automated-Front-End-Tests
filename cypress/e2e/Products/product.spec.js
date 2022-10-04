import ProductsPage from "../../Page-Objects/products.po";
import MenuComponent from "../../Page-Objects/menucomponent.po";

const productpage = new ProductsPage();
const menucomp = new MenuComponent();

const uniqueId = Date.now().toString();
const prdName = `Product ${uniqueId}`;
const productTitle = `QA ${uniqueId}`;

describe("Verify GUI and functionality of Product Page", () => {
    beforeEach(() => {
        cy.Superlogin("Ammarah Disco Store");
        cy.clearCookies();
        menucomp.openProducts.click({ force: true });
        cy.viewport(1500, 768);
    });

    it("Should add a product successfully", () => {
        productpage.addProductWithDetails(prdName);
    });


    it("Should search a product", () => {
        productpage.addProductWithDetails(prdName);
        productpage.searchaProduct(prdName);
        productpage.deleteProduct();
        productpage.tableRow.should("be.visible");
    });

    it("Should edit a product", () => {
        productpage.addProductWithDetails(prdName);
        productpage.searchaProduct(prdName);
        productpage.editProduct();
        cy.get("td").should("contain.text", "$20.00");

    });

    it("Should disable CrossSell for a product", () => {
        productpage.addProductWithDetails(prdName);
        productpage.searchaProduct(prdName);
        productpage.disableCrossSellforProducts();
        productpage.toggleStatus.eq(0).should("have.attr", "data-toggle", "false");
        productpage.deleteProduct();
    });

    it("Should disable UpSell for a product", () => {
        productpage.addProductWithDetails(prdName);
        productpage.searchaProduct(prdName);
        productpage.disableUpSellforProducts();
        productpage.toggleStatus.eq(0).should("have.attr", "data-toggle", "false");
        productpage.deleteProduct();
    });


    it("Should enable CrossSell for a product", () => {
        productpage.enableCrossSellforProducts();
        productpage.toggleStatus.eq(0).should("have.attr", "data-toggle", "true");
    });

    it("Should enable UpSell for a product", () => {
        productpage.enableUpSellforProducts();
        productpage.toggleStatus.eq(0).should("have.attr", "data-toggle", "true");
    });


    it("Should delete a product", () => {
        productpage.deleteProduct();
        productpage.tableRow.should("have.length", 0);
    });
});