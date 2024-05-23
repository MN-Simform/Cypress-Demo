/// <reference types = 'Cypress' />

describe('My 1st Test Suite', () => {
    it('My 1st Test Case', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        // alert/confirm
        // cy.get('#alertbtn').click();
        // cy.get('#confirmbtn').click();

        // cy.on('window:alert', str => {
        //     expect(str).to.equal("Hello , share this practice page and share your knowledge");
        // })
        // cy.on('window:confirm', str => {
        //     expect(str).to.equal("Hello , Are you sure you want to confirm?");
        // })

        // new tab/ removing attribute
        // cy.get('#opentab').invoke('removeAttr','target').click();

        // table
        // cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        //     const text = $el.text();
        //     if(text.includes("Python")){
        //         cy.get('tr td:nth-child(2)').eq(index).next().then(price => {
        //             const priceText = price.text();
        //             expect(priceText).to.equal('25');
        //         })
        //     }
        // })

        // mouse hover
        // cy.get('.mouse-hover-content').invoke('show')
        // cy.get('#top').click();
        // cy.contains('Top').click();

        // child window
        // cy.get('#opentab').invoke('attr','href','https://javatpoint.com').then(el => {
        //     const url = el.prop('href');
        //     cy.visit(url);
        //     cy.origin(url, () => {
        //         // cy.get('div.ddsmoothmenu a[href*="java-tutorial"]').click();
        //         cy.get('.gsc-input').type('java');
        //     })
        // })

        


    })
})