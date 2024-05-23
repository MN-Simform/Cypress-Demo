/// <reference types="Cypress" />
import ProductPage from "../pageObjects/ProductPage";

describe("Sum of Product", () => {

    const productPage = new ProductPage();

    let data;
    let totalPrice = 0;
    before(() => {
        cy.fixture('example').then((fixtureData) => {
            data = fixtureData;
        })
    })

    it("First Test Case", () => {

        cy.visit(Cypress.env('url')+'/angularpractice');
        cy.contains('Shop').click();
        data.productList.forEach(element => {
            cy.selectProduct(element);
        });
        productPage.getCheckoutButton().click();
        // productPage.getSumOfProducts();

        cy.get('tr td:nth-child(4) strong').each(($el,index) => {
            let wholePrice = $el.text();
            let price = wholePrice.split(" ")
            price = Number(price[1].trim());
            totalPrice += price;
        });

        cy.get('h3 strong').then(element => {
            const totalsum = element.text();
            let res = totalsum.split(" ");
            let total = Number(res[1].trim());
            expect(total).to.equal(totalPrice);
        })

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