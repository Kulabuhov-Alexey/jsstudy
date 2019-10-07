let menuItems = document.getElementsByClassName('menu-item'),
    menu = menuItems[0].parentNode,
    element5 = menuItems[0].cloneNode(),
    body = document.getElementsByTagName('body'),
    title = document.getElementById('title'),
    advertise = document.querySelector(".adv");
 //console.log(body[0]);
menu.insertBefore(menuItems[2], menuItems[1]);
element5.textContent = 'Пятый пункт';
menu.appendChild(element5);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = 'Мы продаем только подлинную технику Apple';

advertise.remove();
let answer = prompt("Какое у вам отношение к технике Аппле?",'');
let answerBox = document.querySelector("#prompt");
answerBox.textContent = answer;


