if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('json-test.xlsx');
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];

console.log()