import { faker } from '@faker-js/faker';

export function createFakeContact() {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
  };
}