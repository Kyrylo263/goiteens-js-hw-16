import users from "./users.js";

// 1.
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
    const userNames = users.map(user => user.name);
    return userNames
};
console.log(getUserNames(users));

// 2.
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    const userNamesCol = users.filter(user => user.eyeColor === color);
    return userNamesCol
};
console.log(getUsersWithEyeColor(users, 'blue'));

// 3.
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
    const userNameGender = users.filter(user => user.gender === gender);
    return userNameGender
};
console.log(getUsersWithGender(users, 'female'));

// 4.
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
    const userNameActive = users.filter(user => user.isActive === false);
    return userNameActive
};
console.log(getInactiveUsers(users));

// 5.
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
    const userNameEmail = users.find(user => user.email === email);
    return userNameEmail
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

// 6.
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => {
    const userNameAge = users.filter(user => user.age > min && user.age < max);
    return userNameAge
};
console.log(getUsersWithAge(users, 20, 30));