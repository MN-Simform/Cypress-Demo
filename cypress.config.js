const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const excelJs = require('exceljs');

async function setupNodeEvents(on, config) {

    await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  on('task', {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result;
    }
  });

  on('task', {
    async writeExcel({ searchText, replaceText, change, filePath }) {

      const workbook = new excelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Sheet1');
      const output = await readExcel(worksheet, searchText);

      const cell = worksheet.getCell(output.row, output.column + change.colChange);
      cell.value = replaceText;
      return workbook.xlsx.writeFile(filePath).then(()=> {
        return true;
      })
    }
  })

  return config;
}

async function readExcel(worksheet, searchText) {

  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    })
  })
  return output;
}

module.exports = defineConfig({
  projectId: '3ojj74',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
    setupNodeEvents,
    specPattern: 'cypress/integration/*/*.js',
    // specPattern: 'cypress/integration/*/BDD/*.feature',
  },
  defaultCommandTimeout: 4000,
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1
  }
});

