`use strict`;

const credits = 23580;

const pricePerDroid = 3000;

const amountDroid = prompt(`Сколько дроидов желает мой господин?`);

let totalPrice;

if (amountDroid === null) {
  console.log(`Отменено пользователем!`);
} else if ((amountDroid * pricePerDroid) > credits) {
  console.log(`Недостаточно средств на счету!`);
} else {
  totalPrice = amountDroid * pricePerDroid;
  alert(
    `Вы купили ${amountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
