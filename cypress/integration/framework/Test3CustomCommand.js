/// <reference types="Cypress" />
import ProductPage from "../pageObjects/ProductPage";

describe("Customized Cypress Command", () => {

    const productPage = new ProductPage();

    let data;
    before(() => {
        cy.fixture('example').then((fixtureData) => {
            data = fixtureData;
        })
    })

    it("First Test Case", () => {
        // only apply for this scope //for rest it will remain what defined on config file
        // Cypress.config('defaultCommandTimeout', 6000)

        cy.visit('https://rahulshettyacademy.com/angularpractice');
        cy.contains('Shop').click();
        data.productList.forEach(element => {
            cy.selectProduct(element);
            // cy.pause();
        });
        productPage.getCheckoutButton().click();
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('#checkbox2').click({force:true});
        cy.get('input[type="submit"]').click();
        cy.get('.alert').then( element => {
            const txt = element.text();
            expect(txt.includes('Success')).to.be.true;
        })
    })
})