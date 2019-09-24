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
	savings: false,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		
			if( (typeof(a))==="string" && typeof(a) != null && a != "" && b != "" && a.length < 50) {
				console.log("Done")
				appData.expenses[a] = b;
			}
			else {                            
				console.log ("bad result");
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDate = 	(appData.budget / 30).toFixed(2);
		alert(`Ежедневный бюджет: ${appData.moneyPerDate}`);
	},
	detectLevel: function() {
		if (appData.moneyPerDate < 100) {
			console.log(`Минимальный уровень достатка`);
		} else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
			console.log(`Средний уровень достатка`);
		} else if (appData.moneyPerDate > 2000) {
			console.log(`Высокий уровень достатка`);
		}
	},
	checkSavings: function() {
		if (appData.savings === true) {
			let save = +prompt(`Какова сумма накоплений?`, ""),
				percent = +prompt(`Под какой процент?`, "");
	
			appData.monthIncome = save/100/12*percent;
			alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
		}
	},
	chooseOptExpenses: function() {
		for(let i = 0; i<2; i++) {
			appData.optionalExpenses[i] = prompt(`Статья необязательных расходов?`, "");
		}
	},
	chooseIncome: function() {
		do{var items = prompt(`Что принесет дополнительный доход?(Перечислите через запятую)`,"")} 
		while (!(typeof(items) === "string" && items !== null && items != "")); 
		appData.income = items.split(", ");
		appData.income.push(prompt("Может что-то еще?"));
		appData.income.sort();
		appData.income.forEach(function callback(currentValue, index) {
		console.log(`Способы доп. заработка: ${index+1}- ${currentValue}`);	
		});
	}
};

console.log(`Наша программа включает в себя данные: `);	
for (const key in appData) {
	console.log(key);
}