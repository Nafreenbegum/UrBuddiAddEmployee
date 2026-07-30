import { faker } from '@faker-js/faker';
import employeeStaticData from './employeeData.json';

const usedEmpIds = new Set<string>();

function onlyAlphabets(value: string): string {

  return value.replace(/[^A-Za-z]/g, '');

}

function generateUniqueEmpId(): string {

  let empId: string;

  do {

    empId = `EMP${faker.number.int({
      min: 1000,
      max: 9999
    })}`;

  } while (usedEmpIds.has(empId));

  usedEmpIds.add(empId);

  return empId;

}

export function generateEmployee() {

  let firstName = onlyAlphabets(faker.person.firstName());

  let lastName = onlyAlphabets(faker.person.lastName());

  if (!firstName) {

    firstName = faker.string.alpha({
      length: 6
    });

  }

  if (!lastName) {

    lastName = faker.string.alpha({
      length: 6
    });

  }

  return {

    firstName,

    lastName,

    employeeId: generateUniqueEmpId(),

    email: faker.internet.email({
      firstName,
      lastName
    }).toLowerCase(),

    personalEmail: faker.internet.email().toLowerCase(),

    pastExperience: faker.number
      .int({
        min: 1,
        max: 5
      })
      .toString(),

    ...employeeStaticData

  };

}
