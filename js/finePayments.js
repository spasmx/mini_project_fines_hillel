"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");




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


function payFine(){
    const validation = [
    validateFineNumber(fineNumber.value), 
    validatePassport(passport.value), 
    validateCreditCardNumber(creditCardNumber.value), 
    validateCvv(cvv.value), 
    validateAmount(amount.value)
    ]
    // Звертаючись до властивості finesData ви отримуєте всі дані з файлу data.js
    if (validation.every(result => result === true)){
        console.log(data.finesData);
    }
}

function validateFineNumber(fineNumber){
    for (let i of data.finesData) {
        if (i["номер"] === fineNumber){
            result = true;
        }
    }
    alert("Номер не співпадає!");
    return false;
}

function validatePassport(passport){
    const re = /^[А-Я]{2}\d{6}$/;
    return (re.test(passport)) ? true : alert("Не вірний паспортний номер"); false;
}

function validateCreditCardNumber(creditCardNumber){
    const re = /^\d{16}$/;
    return (re.test(creditCardNumber)) ? true : alert("Не вірна кредитна картка"); false;
}

function validateCvv(cvv){
    const re = /^\d{3}$/;
    return (re.test(cvv)) ? true : alert("Не вірний cvv"); false;
}

function validateAmount(amount){
    const re = /^\d+$/;
    return (re.test(amount)) ? true : alert("Не вірна сума"); false;
}

buttonSubmit.addEventListener('click',payFine);