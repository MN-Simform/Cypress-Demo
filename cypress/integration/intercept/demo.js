/// <reference types = 'Cypress' />

describe('Intercept Demo', ()=> {

    it('Test Case', () => {

        cy.visit(Cypress.env('url')+'/angularAppdemo/');

        cy.intercept({
            method : "Get",
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode : 200,
            body : [{
                "book_name": "RestAssured with Java",
                "isbn": "BSG",
                "aisle": "2302"
                }]
        }).as('bookretrievals')
        
        cy.get('.btn.btn.btn-primary').click();

        cy.wait('@bookretrievals').then(interception => {
            const {response} = interception;
            cy.get('tr').should('have.length', response.body.length + 1);
        });
        
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
})