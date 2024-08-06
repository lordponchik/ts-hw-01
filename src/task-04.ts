console.log('task-04');

let credits: number = 23580;
const pricePerDroid: number = 3000;
let totalPrice: number = 0;
let quantityDroids: string | null = prompt('Please enter quantity droids');

if (quantityDroids === null) {
  console.log('Отменено пользователем!');
} else {
  while (isNaN(Number(quantityDroids))) {
    quantityDroids = prompt('Please enter QUANTITY droids.');
  }

  totalPrice = pricePerDroid * Number(quantityDroids);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;

    console.log(`Вы купили ${quantityDroids} дроидов, на счету осталось ${credits} кредитов.`);
  }
}

console.log('\n');
