/// <reference types = 'Cypress' />

describe('Interception HTTP Req', () => {

    it('Test Case', () => {

        cy.visit(Cypress.env('url')+'/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=nimit';
            req.continue((res) => {
                // expect(res.statusCode).to.equal(403);
            })
        }).as('modifiedUrl');

        cy.get('.btn.btn.btn-primary').click();

        cy.wait('@modifiedUrl');
    })
})