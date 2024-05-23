/// <reference types = 'Cypress' />

describe('My 1st Test Suite', () => {
    it('My 1st Test Case', () => {
        
        cy.viewport(1920, 1080);
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        // Assigning alias to .products. to use it '@' is used.
        cy.get('.products').as('productLocator');
        
        // checking searched product have length of 4
        // cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);

        // Get the 4th index and clicked
        cy.get('@productLocator').find('.product').eq(3).contains('ADD TO CART').click();

        //Iterating through product and clicked on cashews
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text();
            if(vegText.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })

        // assert text
        cy.get('.brand').should('have.text','GREENKART')

        // logging text
        cy.get('.brand').then( logoText => {
            cy.log(logoText.text());
        })
    })
})