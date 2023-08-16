const { faker } = require('@faker-js/faker');

const createRandomUser = () => {
    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType(),
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}

const CreateMultipleUsers = (countUsers) => {
    let users = [];
    for (let i = 0; i < countUsers; i++)
        users.push(createRandomUser());

    return users;
}

module.exports = { CreateMultipleUsers };