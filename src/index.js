import XLSX from 'xlsx';

export default (f) => {
  return new Promise(resolve => {
    var reader = new FileReader();
    var fixData = []
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      workbook.SheetNames.forEach(function(sheetName) {
        let worksheet = workbook.Sheets[sheetName];
        fixData.push({
          name: sheetName,
          data: XLSX.utils.sheet_to_json(worksheet)
        })
      })
      resolve(fixData)
    };
    reader.readAsArrayBuffer(f);
  })
}