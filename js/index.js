'use strict';

// Получаем ссылку на элемент <div>
var divElement1 = document.getElementById("item1");

// Добавляем обработчик события "mouseover" для изменения цвета при наведении курсора
divElement1.addEventListener("mouseover", function() {
  divElement1.style.backgroundColor = "#b36f30";
});

// Добавляем обработчик события "mouseout" для сброса цвета при уходе курсора
divElement1.addEventListener("mouseout", function() {
  divElement1.style.backgroundColor = "#ca8c51";
});

// Получаем ссылку на элемент <div>
var divElement2 = document.getElementById("item2");

// Добавляем обработчик события "mouseover" для изменения цвета при наведении курсора
divElement2.addEventListener("mouseover", function() {
  divElement2.style.backgroundColor = "#24af1f";
});

// Добавляем обработчик события "mouseout" для сброса цвета при уходе курсора
divElement2.addEventListener("mouseout", function() {
  divElement2.style.backgroundColor = "#2ed328";
});

var backKolButt1 = document.getElementById("backKolButt1");
var backKolButt2 = document.getElementById("backKolButt2");
var backKolButt3 = document.getElementById("backKolButt3");
const body = document.body;

if (localStorage.getItem('bodyClass')){
  applyBodyClass(localStorage.getItem('bodyClass'))
}

