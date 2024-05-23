const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ProductPage from "../../../pageObjects/ProductPage";

const productPage = new ProductPage();

Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('url')+'/angularpractice');
})

When('I add item to cart', function() {
    cy.contains('Shop').click();
    this.data.productList.forEach(element => {
        cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
})

Then('validate the total price', () => {
    let totalPrice = 0;
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
})

Then('select the counrty submit and verify thank you', () => {
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('#checkbox2').click({force:true});
    cy.get('input[type="submit"]').click();
    cy.get('.alert').then( element => {
        const txt = element.text();
        expect(txt.includes('Success')).to.be.true;
    })
})

When('I fill the form details', (dataTable) => {
    cy.get('div[class="form-group"] input[name="name"]').type(dataTable.rawTable[1][0]);
    cy.get('select').select(dataTable.rawTable[1][1]); 
})

Then('validate the forms behaviour', (dataTable) => {
    cy.get('h4 .ng-untouched').should('have.value', dataTable.rawTable[1][0]);
    cy.get('div[class="form-group"] input[name="name"]').should('have.attr','minLength',2);
    cy.get('div[class="form-group"] div:nth-child(4) input').should('be.disabled');
})

Then('select the shop page', () => {
    cy.contains('Shop').click();
})