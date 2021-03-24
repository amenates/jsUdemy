'use strict'

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

//const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// // тернарный оператор, называется так, потому что в его работе участвует три аргумента
// (num === 50) ? console.log('Ok') : console.log('Error');
// // ? выполняется если условие верно
// // : выполняется если условие не верно

const num = 50;

switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: 
        console.log('Правильно');
        break;
    // default выполнится если не одно из условий не верно
    default:
        console.log('Не в этот раз');
        break;
}