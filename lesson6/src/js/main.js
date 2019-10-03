'use strict';
let startBtn = document.querySelector('#start'),
    divValue = document.querySelectorAll('div[class*=value]'),
    btnDisabled = document.querySelectorAll('button[class*=btn]'),
    expensesInput = document.querySelectorAll('input[class=expenses-item]'),
    approve = document.querySelectorAll('[class=expenses-item-btn]'),
    calculate = document.querySelectorAll('[class=count-budget-btn]'),
    optionalExpenses = document.querySelectorAll('[class=optionalexpenses-item]'),
    optionalExpensesBtn = document.querySelectorAll('[class=optionalexpenses-btn]'),
    chooseIncome = document.querySelector('.choose-income'),
    choosePercent = document.querySelector('.choose-percent'),
    chooseCheckbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    dayValue = document.querySelector('.day-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value');

let money, time;

btnDisabled.forEach(element => {
    element.setAttribute('disabled',true);   
});


startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money === null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    divValue[0].textContent = money.toFixed();
    dayValue.value = new Date(Date.parse(time)).getDate();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    btnDisabled.forEach(element => {
        element.removeAttribute('disabled');   
    });
});

approve[0].addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesInput.length; i++) {
        let a = expensesInput[i].value,
            b = expensesInput[++i].value;

        if ((typeof (a)) === "string" && typeof (a) != null && a != "" && b != "" && a.length < 50) {
            console.log("Done")
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad result");
            i--;
        }
    }
    divValue[3].textContent = sum;
});

optionalExpensesBtn[0].addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        appData.optionalExpenses[i] = optionalExpenses[i].value;
        divValue[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculate[0].addEventListener('click', function () {
        if (appData.budget != undefined) {

            appData.moneyPerDate = ((appData.budget - +divValue[3].textContent) / 30).toFixed(2);
            divValue[1].textContent = appData.moneyPerDate;

            if (appData.moneyPerDate < 100) {
                divValue[2].textContent = `Минимальный уровень достатка`;
            } else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
                divValue[2].textContent = `Средний уровень достатка`;
            } else if (appData.moneyPerDate > 2000) {
                divValue[2].textContent = `Высокий уровень достатка`;
            }
        } else {
            divValue[1].textContent = 'Произошла ошибка';  
        }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    divValue[5].textContent = appData.income;
});

chooseCheckbox.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        divValue[6].textContent = appData.monthIncome.toFixed(1);
        divValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        divValue[6].textContent = appData.monthIncome.toFixed(1);
        divValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

console.log(`Наша программа включает в себя данные: `);
for (const key in appData) {
    console.log(key);
}