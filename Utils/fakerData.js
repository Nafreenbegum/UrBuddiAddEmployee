import { faker } from '@faker-js/faker';

export function generateEmployee() {

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    employeeId: `EMP${faker.number.int({ min: 1000, max: 9999 })}`,

    email: faker.internet.email(),

    password: 'Test@123',

    dob: faker.date.birthdate({ min: 22, max: 40, mode: 'age' })
      .toISOString()
      .split('T')[0],

    joiningDate: faker.date.recent({ days: 30 })
      .toISOString()
      .split('T')[0],

    Department: faker.helpers.arrayElement([
      'QA',
      'Development',
      'Sales',
      'Marketing'
    ]),

    MobileNum: faker.string.numeric(10),

    role: faker.helpers.arrayElement([
      'Employee',
      'Admin',
      'HR',
      'Lead'
    ]),

    Gender: faker.helpers.arrayElement([
      'Male',
      'Female',
      'Others'
    ]),

    bloodGroup: faker.helpers.arrayElement([
      'A+','A-','B+','B-','O+','O-','AB+','AB-'
    ]),

    qualification: faker.helpers.arrayElement([
      'Degree',
      'B.Tech',
      'PG',
      'Other'
    ]),

    Designation: faker.helpers.arrayElement([
      'QA Engineer',
      'Software Engineer',
      'HR Executive',
      'Sales Manager'
    ]),

    salary: faker.number.int({ min: 20000, max: 80000 }).toString(),

    Location: faker.helpers.arrayElement([
      'Hyderabad',
      'Bangalore',
      'Chennai',
      'Mumbai'
    ]),

    // MUST match dropdown label exactly
    reportingTo: 'pragathi123@optimworks.com'
  };
}