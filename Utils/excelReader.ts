import * as XLSX from 'xlsx';
import path from 'node:path';

export interface LoginData {
  url: string;
  email: string;
  password: string;
}

/** Reads the first row of the login workbook used by the Playwright tests. */
export function getLoginData(): LoginData {

  const filePath = path.resolve(
    __dirname,
    '../testData/loginCred.xlsx'
  );

  const workbook = XLSX.readFile(filePath);

  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error(`The login workbook has no worksheets: ${filePath}`);
  }

  const sheet = workbook.Sheets[firstSheetName];

  if (!sheet) {
    throw new Error(`Unable to read worksheet "${firstSheetName}" from ${filePath}`);
  }

  const data = XLSX.utils.sheet_to_json<LoginData>(sheet, {
    defval: ''
  });

  const loginData = data[0];

  if (!loginData?.url || !loginData.email || !loginData.password) {
    throw new Error('loginCred.xlsx must contain url, email, and password columns with a data row.');
  }

  return {
    url: String(loginData.url),
    email: String(loginData.email),
    password: String(loginData.password)
  };

}
