`use strict`;
let input = ``;
let total = 0;

do {
  input = prompt(`Введите число.`);
  total = total + Number(input);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);