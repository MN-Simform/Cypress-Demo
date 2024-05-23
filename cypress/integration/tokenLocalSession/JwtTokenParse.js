/// <reference types = 'Cypress' />

describe('JWT Token Parse', ()=> {

    it('Test Case', ()=> {
        
        cy.LoginAPI().then( ()=> {
            
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad : (win) => {
                    win.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
})