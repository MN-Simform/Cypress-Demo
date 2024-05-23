/// <reference types = 'cypress' />
const excelJs = require('exceljs');

describe('Upload Download Test', ()=> {

    it("Donwnload & Upload Test", () => {
        const FilePath = Cypress.config('fileServerFolder') + '/cypress/downloads/download.xlsx';
        const fruitName = 'Papaya'
        const replaceNum = 30;

        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
        cy.get('#downloadButton').click();
        cy.task('writeExcel', {
            searchText: fruitName, 
            replaceText: replaceNum,
            change: {rowChange:0, colChange:2}, 
            filePath: FilePath
        })

        cy.get('#fileinput').selectFile(FilePath);

        // cy.get('#row-1 > #cell-4-undefined').should('have.text',350);
        cy.contains(fruitName).parent().parent().find('#cell-4-undefined').should('have.text', replaceNum);
    })
})
