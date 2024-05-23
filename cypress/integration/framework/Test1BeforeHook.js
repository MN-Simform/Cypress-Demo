/// <reference types="Cypress" />

describe('Before Test Suite', () => {

    let data;
    before(function() {
        cy.fixture('example').then((fixturesData) => {
            data = fixturesData;
        })
    })

    it('Test Case 1', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice');
        cy.get('div[class="form-group"] input[name="name"]').type(data.name);
        cy.get('select').select(data.gender); 
    })
 
})