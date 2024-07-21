//Задание 1  Преобразовать строку 'js' в верхний регистр.
console.log("js".toUpperCase());

//Задание 2 
function Fn(array, str) {
return array.filter(el => el.toLowerCase(str).startsWith(str));
}
console.log(Fn(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(Fn(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(Fn(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(`Наименьшее число: ${min}`); 
console.log(`Наибольшее число: ${max}`);

//Задание 5
function getRandom() {
    return Math.random();
  }
  function randomInteger(min, max) {   
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
   console.log( randomInteger(1, 10) );

//Задание 6
function getRandomInt(minValue, maxValue) {
    return Math.round (Math.random() * (maxValue- minValue)) + minValue;
}
console.log(getRandomInt(5, 10));

//Задание 7 
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
   } console.log(getRandomInt(2, 9))

//Задание 8
console.log (new Date());

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function ruDateTime() {
    const myDate = new Date();
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ruDateTime = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " " + days[myDate.getDay()] + "." + "Время:" + myDate.toLocaleTimeString();
    return ruDateTime;
}
ruDateTime();
console.log(ruDateTime())

//Задание 11
function seasonsBtn() {
    
    let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);

    let wordsfirst = prompt (`Назовите первое слово`);
   
    let wordsLast = prompt (`Назовите последнее слово`);
   

    if (wordsfirst === words [0] && wordsLast === words[words.length- 1])
     {
        alert `Это правильный ответ!`;

    } else if (wordsfirst === words[0] || wordsLast === words[words.length - 1]) {
        alert `А счастье было так близко!`;                             
    } 
    else {
         alert `Вы не угадали!`;
        }
    
    }