const { faker } = require('@faker-js/faker');
const employeeStaticData = require('./employeeData.json');

function generateEmployee() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    // ✅ Dynamic Fields (Faker)
    firstName: firstName,
    lastName: lastName,
    employeeId: `EMP${faker.number.int({ min: 1000, max: 9999 })}`,
    email: faker.internet.email({ firstName, lastName }),

    // ✅ Static Fields (From JSON)
    ...employeeStaticData
  };
}

module.exports = { generateEmployee };