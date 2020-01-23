`use strict`;

const credits = 23580;

const pricePerDroid = 3000;

const amountDroid = prompt(`Сколько дроидов желает мой господин?`);

const totalPrice = amountDroid * pricePerDroid;

if (amountDroid === null) {
  console.log(`Отменено пользователем!`);
} else if (totalPrice <= credits) {
  alert(
    `Вы купили ${amountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
} else {
  console.log("Недостаточно средств на счету!");
}
