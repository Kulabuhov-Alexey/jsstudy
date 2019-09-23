"use strict";

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');	

	while(isNaN(money) || money == "" || money === null) { 
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
		if( (typeof(a))==="string" && typeof(a) != null && a != "" && b != "" && a.length < 50) {
			console.log("Done")
			appData.expenses[a] = b;
		}
	}
}

chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDate = 	(appData.budget / 30).toFixed(2);
	alert(`Ежедневный бюджет: ${appData.moneyPerDate}`);
}

detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDate < 100) {
		console.log(`Минимальный уровень достатка`);
	} else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
		console.log(`Средний уровень достатка`);
	} else if (appData.moneyPerDate > 2000) {
		console.log(`Высокий уровень достатка`);
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings === true) {
		let save = +prompt(`Какова сумма накоплений?`, ""),
			percent = +prompt(`Под какой процент?`, "");

		appData.monthIncome = save/100/12*percent;
		alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
	}
}

checkSavings();

function chooseOptExpenses() {
	for(let i = 0; i<2; i++) {
		appData.optionalExpenses[i] = prompt(`Статья необязательных расходов?`, "");
	}
}

chooseOptExpenses();