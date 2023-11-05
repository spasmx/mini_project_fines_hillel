"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

buttonSubmit.addEventListener('click', payFine);

function payFine() {
    const validated = validateFineNumber(fineNumber.value);
    if (validated) {
        const indexToDelete = findIndexOfFine(fineNumber.value);
        if (indexToDelete > -1) {
            data.finesData.splice(indexToDelete, 1);
            console.log(`Fine with number ${fineNumber.value} successfully paid and removed.`);
        } else {
            console.log(`Couldn't find fine with number ${fineNumber.value}.`);
        }
    }
}

function validateFineNumber(fineNumber) {
    let result;
    for (let i of data.finesData) {
        if (i["номер"] === fineNumber){
            result = true;
        }
    }
    return (result) ? result : alert("Номер не співпадає");
}

function findIndexOfFine(fineNumber) {
    return data.finesData.findIndex(fine => fine["номер"] === fineNumber);
}

function validatePassport(passport) {
    const re = /^[А-Я]{2}\d{6}$/;
    return (re.test(passport)) ? true : alert("Не вірний паспортний номер");
}

function validateCreditCardNumber(creditCardNumber) {
    const re = /^\d{16}$/;
    return (re.test(creditCardNumber)) ? true : alert("Не вірна кредитна картка");
}

function validateCvv(cvv) {
    const re = /^\d{3}$/;
    return (re.test(cvv)) ? true : alert("Не вірний cvv");
}

function validateAmount(amount) {
    const re = /^\d+$/;
    return (re.test(amount)) ? true : alert("Не вірна сума");
}







/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */

// buttonSubmit.addEventListener('click',payFine);


// function payFine(){
//     validateFineNumber(fineNumber.value)
//     // Звертаючись до властивості finesData ви отримуєте всі дані з файлу data.js
//         console.log(data.finesData);
    
// }

// function validateFineNumber(fineNumber){
//     let result;
//     for (let i of data.finesData) {
//         if (i["номер"] === fineNumber){
//             result = true;
//         }
//     }
//     return (result) ? result : alert("Номер не співпадає");
// }

// function validatePassport(passport){
//     const re = /^[А-Я]{2}\d{6}$/;
//     return (re.test(passport)) ? true : alert("Не вірний паспортний номер");
// }

// function validateCreditCardNumber(creditCardNumber){
//     const re = /^\d{16}$/;
//     return (re.test(creditCardNumber)) ? true : alert("Не вірна кредитна картка");
// }

// function validateCvv(cvv){
//     const re = /^\d{3}$/;
//     return (re.test(cvv)) ? true : alert("Не вірний cvv");
// }

// function validateAmount(amount){
//     const re = /^\d+$/;
//     return (re.test(amount)) ? true : alert("Не вірна сума");
// }

