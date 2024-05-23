/// <reference types = 'Cypress' />

describe('Frame Test', () => {
    it('Test Case 1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        // cy.frameLoaded('#courses-iframe');
        // cy.iframe().find('a[href*="mentorship"]').eq(4).click();

    })
})