console.log('task-04');

// На счету пользователя есть 23580 кредитов, значение хранится
// в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов,
// которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить
//  и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету
// осталось [число] кредитов.'.

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
