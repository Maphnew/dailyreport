const ExcelJS = require('exceljs')

let workbook = new ExcelJS.Workbook();

const cellAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC']
const cellNumbers = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
const data = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC']
]

workbook.xlsx.readFile('./dailyreport_form.xlsx').then(() => {
    let worksheet = workbook.getWorksheet(1);
    // console.log('data.length: ', data.length)
    for(let i=0; i<data.length; i++) {
        let row = worksheet.getRow(cellNumbers[i])
        row.values = data[i]
    }
    
    // 오늘날짜 입력
    let cell = worksheet.getCell('B1')
    cell.value = new Date().toISOString().slice(0,10)
    // 가운데 정렬
    for(let i=0; i<cellNumbers.length; i++){
        worksheet.getRow(cellNumbers[i]).alignment = { vertical: 'middle', horizontal: 'center' };
    }
    
    for(let j=0; j<cellAlphabet.length; j++){
        for(let i=0; i<cellNumbers.length; i++){
            //console.log(cellAlphabet[j] + cellNumbers[i]+'')
            worksheet.getCell(''+cellAlphabet[j] + cellNumbers[i]).border = {
            top: {style:'dotted'},
            left: {style:'dotted'},
            bottom: {style:'dotted'},
            right: {style:'dotted'}
            }
            worksheet.getCell(''+cellAlphabet[j] + cellNumbers[i]).font = {
                size: 9
            }
        }
    }

    worksheet.getCell('B1').border = {
        top: {style:'thin'},
        left: {style:'thin'},
        bottom: {style:'thin'},
        right: {style:'thin'}
    }

    return workbook.xlsx.writeFile('dailyreport_out.xlsx')
})


