console.log('task-03');

const ADMIN_PASSWORD: string = 'jqueryismyjam';
let message: string = '';
const password: string | null = prompt('Please enter your password');

if (password === null) {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

console.log('\n');
