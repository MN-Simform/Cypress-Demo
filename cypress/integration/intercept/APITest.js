/// <reference types = 'Cypress' />

describe('API Testing', () => {

    it('Test Case', () => {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name" : "Appium",
            "isbn" : "bcdss",
            "aisle" : "22s7",
            "author" : "John Foe"
        }).then( res => {
            expect(res.body).to.have.property("Msg","successfully added");
            expect(res.status).to.eq(200);
        })
    })
})

