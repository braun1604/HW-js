const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map(function(number) {
    return number * 2;
});
const plusTenFib = fibonacci.map(function(number) {
  return number + 10;
});
const onlyBigFib =fibonacci.filter(function(numb) {
    return numb > 3;
});
console.log(multipleByTwoFib); 
console.log(plusTenFib); 
console.log(onlyBigFib);



function callbackWithArrayLength(arr, callback) {
    callback(arr.length);
    callback(-1);
  }
  callbackWithArrayLength([1], (length) => {
    console.log(length);
  });
  callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
  });
  callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
  });


  
  function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}
function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}
each(["Глеб", "Олег", "Татьяна", "Платон"], log);

//Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
console.log(people.sort(function(a, b) {
  return a.age - b.age;
}));

//Задание 2
function isPositive(number) {
  return number > 0;
}
function isMale(person) {
  return person.gender === 'male';
}
function filter(array, ruleFunction) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
  console.log(filter([3, -4, 1, 9], isPositive));
  const peopleGender = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  console.log(filter(peopleGender, isMale));

  //Задание 3
  let counter = 0;

const intervalId = setInterval(function() {
  const currentDate = new Date();
  console.log(currentDate.toLocaleString()); 

  counter += 3; 

  if (counter >= 30) {
    clearInterval(intervalId); 
    console.log("30 секунд прошло");
  }
}, 3000); 

//Задание 4
function delayForSecond(callback) {
 setTimeout(callback, 1000);
}
delayForSecond(function () {
 console.log('Привет, Глеб!');
})

//Задание 5
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб')); 

//Задание 6
function mystery() {
  const riddle = 'Что может путешествовать по свету, оставаясь в одном и том же углу?';
  let userAnswer = prompt(riddle);
  
  if (userAnswer.toLowerCase() === 'марка') {
    alert('Поздравляю, это правильный ответ!');
  } else {
    userAnswer = prompt('Неверно. Подсказка: Это что-то маленькое, что можно наклеить.');
  
    if (userAnswer.toLowerCase() === 'марка') {
      alert('Поздравляю, это правильный ответ!');
    } else {
      userAnswer = prompt('Опять неверно. Вторая подсказка: Это используется для отправки писем.');
  
      if (userAnswer.toLowerCase() === 'марка') {
        alert('Наконец-то! Это правильный ответ!');
      } else {
        alert('Увы, ты проиграл. Правильный ответ: марка.');
      }
    }
  }
}















