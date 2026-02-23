const XLSX = require('xlsx');
const path = require('path');

function getLoginData() {
  const filePath = path.join(__dirname, '../testData/loginCred.xlsx');

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(sheet);

  return data[0]; // { email: "...", password: "..." }
}

module.exports = { getLoginData };