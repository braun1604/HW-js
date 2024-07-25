const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map(function(number) {
    return number * 2;
});
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = ...
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = ...

const onlyBigFib =fibonacci.filter(function(numb) {
    return numb > 3;
}  )

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

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