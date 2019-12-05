let XLSX = require('xlsx')

const exportExcel = (data) => { 
    // step 1. workbook 생성
    var wb = XLSX.utils.book_new();

    // step 2. 시트 만들기 
    var newWorksheet = excelHandler.getWorksheet(data);
    
    // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
    XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

    // step 4. 엑셀 파일 만들기 
    XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

    // step 5. 엑셀 파일 내보내기 
    XLSX.writeFile(wb, excelHandler.getExcelFileName())
}
var excelHandler = {
		getExcelFileName() {
		    return 'json-test.xlsx';
		},
		getSheetName() {
			return 'JSON Test Sheet';
		},
		// getExcelData(data) {
		// 	return data;
		// },
		getWorksheet(data) {
            console.log(XLSX.utils.json_to_sheet(data))
			return XLSX.utils.json_to_sheet(data)
		}
}

exportExcel([{'상품명':'삼성 갤럭시 s11' , '가격':'200000'}, {'상품명':'삼성 갤럭시 s12' , '가격':'220000'}, {'상품명':'삼성 갤럭시 s13' , '가격':'230000'}])
module.exports = exportExcel