"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

buttonSubmit.addEventListener('click', payFine);

function payFine(){
    const validated = validateFineNumber(fineNumber.value);
    if (validated){
        const indexToDelete = findIndexOfFine(fineNumber.value);
        if (indexToDelete > -1){
            data.finesData.splice(indexToDelete, 1);
            alert(`Штраф з обліковим номером ${fineNumber.value}, сплаченно та видаленно з бази. Слава Україні!`);
        }; 
    };
};

function validateFineNumber(fineNumber){
    let result;
    for (let i of data.finesData){
        if (i['номер'] === fineNumber){
            result = true;
        };
    };
    return (result) ? result : alert('Номер не знайдено в базі');
};

function findIndexOfFine(fineNumber){
    return data.finesData.findIndex(fine => fine['номер'] === fineNumber);
};

function validatePassport(passport){
    const re = /^[А-Я]{2}\d{6}$/;
    return (re.test(passport)) ? true : alert('Не вірний паспортний номер');
};

function validateCreditCardNumber(creditCardNumber){
    const re = /^\d{16}$/;
    return (re.test(creditCardNumber)) ? true : alert('Не вірна кредитна картка');
};

function validateCvv(cvv){
    const re = /^\d{3}$/;
    return (re.test(cvv)) ? true : alert('Не вірний cvv');
};

function validateAmount(amount){
    const re = /^\d+$/;
    return (re.test(amount)) ? true : alert('Не вірна сума');
};

