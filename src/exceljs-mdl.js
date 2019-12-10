const ExcelJS = require('exceljs')
const sendMail = require('./sendMail')
const moment = require('moment')

require("dotenv").config()

const FILE_NAME = process.env.FILE_NAME
const FORM_FILE = process.env.FORM_FILE

const mkxl = (alph, num, inputData) => {
    // console.log(alph, num, inputData)
    let workbook = new ExcelJS.Workbook()
    workbook.xlsx.readFile('./'+FORM_FILE).then(()=>{
        let worksheet = workbook.getWorksheet(1);
        
        for(let i=0; i<inputData.length; i++) {
            let row = worksheet.getRow(num[i])
            row.values = inputData[i]
        }
        // 오늘날짜 입력
        let cell = worksheet.getCell('B1')
       
        const date = moment().subtract(1, 'days').format('YYYY-MM-DD')
        // console.log("exceljs-mdl: ",date)
        cell.value = date
        // 가운데 정렬
        for(let i=0; i<num.length; i++){
            worksheet.getRow(num[i]).alignment = { vertical: 'middle', horizontal: 'center' };
        }
        for(let j=0; j<alph.length; j++){
            for(let i=0; i<num.length; i++){
                worksheet.getCell(''+alph[j] + num[i]).border = {
                    top: {style:'hair'},
                    left: {style:'hair'},
                    bottom: {style:'hair'},
                    right: {style:'hair'}
                }
                worksheet.getCell(''+alph[j] + num[i]).font = {
                    size: 9
                }
            }
            
        }
        for(let i=0; i<num.length; i++){

            worksheet.getCell('A'+num[i]).border ={
                bottom: {style:'hair'},
                left: {style:'thin'},
            }
            worksheet.getCell('AC'+num[i]).border ={
                bottom: {style:'hair'},
                right: {style:'thin'},
            }
        }
        for(let k=1; k<alph.length-1; k++) {
            worksheet.getCell(alph[k]+'27').border ={
                bottom: {style:'thin'},
                right: {style:'hair'},
                left: {style:'hair'},
            }
        }
        for(let j=0; j<alph.length; j++){
            worksheet.getCell('A27').border ={
                bottom: {style:'thin'},
                left: {style:'thin'},
            }
            worksheet.getCell('AC27').border ={
                bottom: {style:'thin'},
                right: {style:'thin'},
            }

        }
    
        worksheet.getCell('B1').border = {
            top: {style:'thin'},
            left: {style:'thin'},
            bottom: {style:'thin'},
            right: {style:'thin'}
        }
        let worksheet2 = workbook.getWorksheet(2);
        console.log('Make report done')
        sendMail()
        return workbook.xlsx.writeFile(FILE_NAME)
        
    })

}

module.exports = mkxl