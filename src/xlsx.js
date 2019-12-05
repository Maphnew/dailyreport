let XLSX = require('xlsx')

XLSX.writeFile({
	SheetNames:["Sheet1"],
	Sheets: {
		Sheet1: {
			"!ref": "A1:D2",
			A1:{t:'s', v:"A1:A2"},
			B1:{t:'n', v:1},
            B2:{t:'b', v:true},
            C1:{t:'n', v:3},
			"!merges":[
                {s:{r:0,c:0},e:{r:1,c:0}}, /* A1:A2 */
                {s:{r:0,c:2},e:{r:0,c:3}}
			]
		}
	}
}, 'dailyreport.xlsx');

console.log(XLSX)



// console.log(__dirname)
// const workbook = XLSX.readFile(__dirname + '/../dailyreport1.xlsx')
// const firstSheetName = workbook.SheetNames[0]
// const firstSheet = workbook.Sheets[firstSheetName]
// console.log(firstSheet['A4'].v)





// /* Initial row */
// const ws = XLSX.utils.aoa_to_sheet([ ["Date", "2019-12-04"]]);
 
// /* Write data starting at A2 */
// XLSX.utils.sheet_add_aoa(ws, [[1,2], [2,3], [3,4]], {origin: "A4"});

// console.log(XLSX.utils.sheet_to_csv(ws));