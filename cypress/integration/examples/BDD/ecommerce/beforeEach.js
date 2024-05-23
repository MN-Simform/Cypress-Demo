// let data;
// beforeEach(() => {
//     cy.fixture('example').then( (fixtureData) => {
//         data = fixtureData;
//     })
// })

beforeEach(function() {
    cy.fixture('example').then( function(data) {
        this.data = data;
    })
})