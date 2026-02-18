// utils/fakerData.js
import { faker } from '@faker-js/faker';

export function generateEmployee() {
    return {
        firstName: faker.name.firstName(),          // Random first name
        lastName: faker.name.lastName(),            // Random last name
        employeeId: `EMP${faker.datatype.number({ min: 100, max: 999 })}`, // Random EMP ID
        email: faker.internet.email(),              // Random email
        password: 'Test@123',                       // Static password
        dob: faker.date.past(25, new Date('2005-01-01')).toISOString().split('T')[0], // DOB
        joiningDate: faker.date.past(2).toISOString().split('T')[0], // Joining date in last 2 years
        qualification: faker.helpers.arrayElement(['Degree', 'Diploma', 'Masters']), // Random qualification
        Department: faker.helpers.arrayElement(['QA', 'Dev', 'HR', 'Support']),       // Random department
        Gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),               // Random gender
        MobileNum: faker.phone.number('9#########'), // 10-digit random mobile number starting with 9
        bloodGroup: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
        Designation: faker.helpers.arrayElement(['QA Engineer', 'Developer', 'Manager']),
        salary: faker.finance.amount(10000, 50000, 0), // Random salary between 10k-50k
        Location: faker.helpers.arrayElement(['Hyderabad', 'Bangalore', 'Pune']),
        reportingTo: faker.internet.email() // Random manager email
    };
}

