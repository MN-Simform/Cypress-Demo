// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('.card-title').each(($el, index) => {
        if($el.text().includes(productName)){
            cy.get('button.btn.btn.btn-info').eq(index).click();
        }
    })
 })

Cypress.Commands.add("LoginAPI", () => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', 
    {"userEmail":"nimit@gmail.com","userPassword":"Nimit@123"}).then( res => {
        expect(res.status).to.eq(200);
        Cypress.env('token', res.body.token);
    })
})