/// <reference types = 'Cypress' />

describe('My 1st Test Suite', () => {
    it('My 1st Test Case', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        // Assigning alias to .products. to use it '@' is used.
        cy.get('.products').as('productLocator');

        //Iterating through product and clicked on cashews
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text();
            if(vegText.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })

        cy.get('.tada').click();

        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    })
})