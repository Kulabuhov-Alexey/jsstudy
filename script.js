"use strict";
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = prompt("Во сколько обойдется?", '');

	if( (typeof(a))==="string" && typeof(a) != null && a != "" && b != "" && a.length < 50) {
		console.log("Done")
		appData.expenses[a] = b;
	}
}

// let i = 0;

// Первый вариант цикла

// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');

// 	if( (typeof(a))==="string" && typeof(a) != null && a != "" && b != "" && a.length < 50) {
// 		console.log("Done")
// 		appData.expenses[a] = b;
// 	}
// 	i++;
// }
// while (i <= 1);

// Второй вариант цикла

// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');

// 	if( (typeof(a))==="string" && typeof(a) != null && a != "" && b != "" && a.length < 50) {
// 		console.log("Done")
// 		appData.expenses[a] = b;
// 	}
// 	i++;	
// }

appData.moneyPerDate = 	+appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDate}`);

if (appData.moneyPerDate < 100) {
	console.log(`Минимальный уровень достатка`);
} else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
	console.log(`Средний уровень достатка`);
} else if (appData.moneyPerDate > 2000) {
	console.log(`Высокий уровень достатка`);
}