//Задание 1
function math(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
    }

//Задание 2
const oddEven = numone => numOne % 2 == 0 ? 'Число четное' : 'Число нечетное'

//Задание 3
//Задание 3.1
function parityNumber(num) {
   console.log(num ** 2);
}
//Задание 3.2
let printSqure = num => num ** 2;

//Задание 4
function helloUser() {
    const age = prompt("Сколько Вам лет?"); 
    age = Number(age);
    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
    }

//Задание 5
function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

//Задание 6
function cubeNumber() {
    const n = prompt("Введите число:");
    n = Number(n);
    if (isNaN(n)) {
        return 'Переданный параметр не является числом'
    } else {
        return `${n} в кубе равняется ${n ** 3}`;
    }
}

//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
};
function getPerimetr() {
    return 2 * Math.PI * this.radius;
};
const circle1 = {
radius: 1,
getArea,
getPerimetr,
}
const circle2 = {
radius: 2, 
getArea,
getPerimetr, 
}

//Задание 8
function getSeason() {
    let month = prompt("Введите число");
    if (month == 12 || month == 1 || month == 2) {
        alert("Зима");
    } else if (month == 3 || month == 4 || month == 5) {
        alert("Весна");
    } else if (month == 6 || month == 7 || month == 8) {
        alert("Лето");
    } else if (month == 9 || month == 10 || month == 11) {
        alert("Осень");
    } else {
        alert("Неизвестное число");
    } 
}
