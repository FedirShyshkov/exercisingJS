/*Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
Да, именно так, через двойные скобки (это не опечатка) */

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(3)(5));

/* Функция - строковый буфер
важность: 5
В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. 
Его функционал состоит из двух возможностей:

Добавить значение в буфер.
Получить текущее содержимое.
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение 
в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его
C очисткой*/

function makeBuffer() {
  var bufferContent = "";

  var buffer = function(bufferElement) {
    if (arguments.length == 0) {
      return bufferContent;
    }
    bufferContent += bufferElement;
  };
  buffer.clear = function() {
    bufferContent = "";
  };
  return buffer;
}

var buffer = makeBuffer();

buffer("Замыкания");
buffer(" Использовать");
buffer(" Нужно!");

console.log(buffer());
buffer.clear();
buffer("Почистили!");
console.log(buffer());

// сортировка
var users = [
  {
    name: "Вася",
    surname: "Иванов",
    age: 20
  },
  {
    name: "Петя",
    surname: "Чапаев",
    age: 25
  },
  {
    name: "Маша",
    surname: "Медведева",
    age: 18
  }
];

users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}

users.sort(byField("name"));
users.forEach(function(user) {
  console.log(user.name);
});

users.sort(byField("age"));
users.forEach(function(user) {
  console.log(user.name);
});
