const { faker } = require('@faker-js/faker');
const employeeStaticData = require('./employeeData.json');

// Store used EMP IDs for current test run
const usedEmpIds = new Set();

// 🔹 Remove non-alphabet characters
function onlyAlphabets(value) {
  return value.replace(/[^A-Za-z]/g, '');
}

// 🔹 Generate Unique 4-digit EMP ID
function generateUniqueEmpId() {
  let empId;
  
  do {
    const randomNumber = faker.number.int({ min: 1000, max: 9999 });
    empId = `EMP${randomNumber}`;
  } while (usedEmpIds.has(empId));

  usedEmpIds.add(empId);
  return empId;
}

function generateEmployee() {

  let firstName = onlyAlphabets(faker.person.firstName());
  let lastName = onlyAlphabets(faker.person.lastName());

  if (!firstName) firstName = faker.string.alpha({ length: 6 });
  if (!lastName) lastName = faker.string.alpha({ length: 6 });

  return {
    firstName,
    lastName,

    // ✅ Format: EMP1234
    employeeId: generateUniqueEmpId(),

    email: faker.internet.email({
      firstName,
      lastName
    }).toLowerCase(),

    ...employeeStaticData
  };
}

module.exports = { generateEmployee };