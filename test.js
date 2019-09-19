"use strict";
let money = prompt("Ваш бюджет на месяц?",0),
    time = prompt("Введите дату в формате YYYY-MM-DD","1986-10-14"),
    answer1 = prompt("Введите обязательную статью расходов в этом месяце","одежда"),
    answer2 = prompt("Во сколько обойдется?","1000");    
let appData = {
    "budget" : money,
    "timeData" : time,
    "expenses" : { 
        answer1 : answer2
    },
    "income" : [],
    savings : false
}

alert(`Бюджет на день ${+appData.expenses.answer1 / 30}`);