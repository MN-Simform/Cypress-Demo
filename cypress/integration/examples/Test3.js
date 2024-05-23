/// <reference types = 'Cypress' />

describe('My 1st Test Suite', () => {
    it('My 1st Test Case', () => {
        // cy.viewport(1920, 1080);
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');

        // static dropdown
        cy.get('select').select('option2').should('have.value','option2');

        // dynamic dropdown
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, idnex, $list) => {
            if($el.text()==="India"){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');

        cy.get('#autocomplete').clear();
        cy.get('#autocomplete').type('UK');
        cy.wait(2000);
        cy.get('.ui-menu-item div').each(($el) => {
            if($el.text() === "United Kingdom (UK)"){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.have.value','United Kingdom (UK)');

        // visibile/invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radio buttons
        cy.get('[value="radio1"]').check().should('be.checked');
        cy.get('[value="radio2"]').check().should('be.checked');
        cy.get('input[type="radio"]').check(['radio1','radio2','radio3']).should('be.checked');

    })
})