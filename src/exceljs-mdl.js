const ExcelJS = require('exceljs')


const mkxl = (alph, num, inputData) => {
    // console.log(alph, num, inputData)
    let workbook = new ExcelJS.Workbook()
    workbook.xlsx.readFile('./dailyreport_form.xlsx').then(()=>{
        let worksheet = workbook.getWorksheet(1);
        
        for(let i=0; i<inputData.length; i++) {
            let row = worksheet.getRow(num[i])
            row.values = inputData[i]
        }
        // 오늘날짜 입력
        let cell = worksheet.getCell('B1')
        let date = new Date()
        date.setDate(date.getDate() -1)
        cell.value = date.toISOString().slice(0,10)
        // 가운데 정렬
        for(let i=0; i<num.length; i++){
            worksheet.getRow(num[i]).alignment = { vertical: 'middle', horizontal: 'center' };
        }
        for(let j=0; j<alph.length; j++){
            for(let i=0; i<num.length; i++){
                worksheet.getCell(''+alph[j] + num[i]).border = {
                    top: {style:'dotted'},
                    left: {style:'dotted'},
                    bottom: {style:'dotted'},
                    right: {style:'dotted'}
                }
                worksheet.getCell(''+alph[j] + num[i]).font = {
                    size: 8
                }
            }
            
        }
        for(let i=0; i<num.length; i++){

            worksheet.getCell('A'+num[i]).border ={
                bottom: {style:'dotted'},
                left: {style:'thin'},
            }
            worksheet.getCell('AC'+num[i]).border ={
                bottom: {style:'dotted'},
                right: {style:'thin'},
            }
        }
        for(let j=0; j<alph.length; j++){
            worksheet.getCell(alph[j]+'27').border ={
                bottom: {style:'thin'},
                left: {style:'thin'},
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
        return workbook.xlsx.writeFile('dailyreport.xlsx')
        
    })

}

module.exports = mkxl