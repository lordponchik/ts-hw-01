console.log('task-06');

let input: string | null = prompt('Enter the number');
let total: number = 0;

while (input !== null) {
  if (isNaN(Number(input))) {
    input = prompt('Try again. You entered a non-number. Enter the number');
  } else {
    total += Number(input);
    input = prompt('Enter the number');
  }
}
alert(`Общая сумма чисел равна ${total}`);

console.log('\n');
