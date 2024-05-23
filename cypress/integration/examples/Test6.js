/// <reference types = 'Cypress' />

describe('Calender Test', () => {
    it('Test Case 1', () => {
        
        const day = '31';
        const month = '12';
        const year = '2024'
        const expectedRes = [month, day, year];

        // cy.viewport('iphone-x');

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
        cy.contains('Top Deals').invoke('removeAttr','target').click();
        cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains('button', year);
        // cy.get('.react-calendar__year-view__months__month').each(($el, index, $list) => {
        //     const foundMonth = month;
        //     if($el.index == foundMonth-1){
        //         cy.contains('button',foundMonth).click();
        //     }
        // })
        cy.get('.react-calendar__year-view__months__month').eq(month-1).click();
        cy.contains('abbr', day).click();

        // Assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedRes[index]);
        })
    })
})