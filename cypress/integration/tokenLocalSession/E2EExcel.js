/// <reference types = 'Cypress' />

describe('E2E Testing', async () => {

    let productName;
    let productCode;

    it('First Case', () => {

        cy.LoginAPI().then(() => {

            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get('.card-body b').eq(1).then(ele => {
            productName = ele.text();
        })
        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.contains('Cart').click();
        cy.get('.cartSection .btn.btn-primary').click();
        cy.get('.form-group input').type('india');

        cy.get('.ta-results button').each((el, index) => {
            if (el.text() === ' India') {
                cy.wrap(el).click();
            }
        })
        cy.get('.btnn').click().wait(2000);
        cy.contains('Click To Download Order Details in Excel').click();

        cy.get('label.ng-star-inserted').then(ele => {
            let partialProductCode = ele.text().split(" ");
            productCode = partialProductCode[2];
        })

        const filePath = Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_nimit.xlsx';
        cy.task('excelToJsonConverter', filePath).then((result) => {
            console.log(result);
            expect(productName).to.equal(result.data[1].B);
            expect(productCode).to.equal(result.data[1].A)
        })

        cy.readFile(filePath).then((text) => {
            expect(text).to.include(productName);
        })
    })
})