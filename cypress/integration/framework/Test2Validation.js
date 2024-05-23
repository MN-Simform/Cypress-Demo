/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
describe('Before Test Suite', () => {

    const hp = new HomePage();

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

        cy.get('h4 .ng-untouched').should('have.value', data.name);
        cy.get('div[class="form-group"] input[name="name"]').should('have.attr','minLength',2);
        cy.get('div[class="form-group"] div:nth-child(4) input').should('be.disabled');
    }),

    it('Test Cases using HomePage obj', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice');
        hp.getEditBox().type(data.name);
        hp.getGender().select(data.gender);

        hp.getTwoWayDataBinding().should('have.value', data.name);
        hp.getEditBox().should('have.attr','minLength',2);
        hp.getEntrepreneur().should('be.disabled');
    })
 
})