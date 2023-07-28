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

// backKolButt1.addEventListener("click", function() {
    
//   body.classList.remove("background2", "background3");
//   body.classList.add("background1");
// })

// backKolButt2.addEventListener("click", function() { 
//     body.classList.remove("background1", "background3");
//     body.classList.add("background2");
//   })
// backKolButt3.addEventListener("click", function() {
//     body.classList.remove("background1", "background2");
//     body.classList.add("background3");
// })


// function setBodyClass() {
//   const bodyClass = document.body.className;
//   localStorage.setItem('bodyClass', bodyClass);
//   window.location.href = 'html/page1.html';
// }
// localStorage.setItem('bodyClass', 'background1');

function applyBodyClass(bodyClass) {
  body.classList.remove("background2", "background3", "background1");
  body.classList.add(bodyClass);
}

function setBodyClass(bodyClass) {
  localStorage.setItem('bodyClass', bodyClass);
}