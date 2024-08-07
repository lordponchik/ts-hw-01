<h1 id="home">Homework :clipboard:</h1>

## ts-hw-01


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository created `ts-hw-01`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# Task 1

- Declare two variables storing the name and price of the product: `name` и `price`
- Assign the following product characteristics to the variables (immediately upon declaration)
  - name: Protective field generator
  - price: 1000
- Using a template line, output information about the product to the console, you will get:
  `'Protective field generator selected, price per piece is 1000 credits'`.
- Assign a new price to the product - 2000
- Using a template line, output information about the product to the console, you will get:
  ``Protective field generator selected, price per piece is 2000 credits'`.

# Task 2

Write a script to check the number of goods in the warehouse. There are `total` variables (number of
goods per warehouse) and `ordered` (product units in the order).

Compare these values and output the results:

- If the order contains a number that exceeds the number of goods in stock, then display a message
  `"There are not enough creatures in stock!"`.
- In another case, display the message `"The order has been placed, the manager will contact you"`.

Check the functionality of the code with different values of the `ordered` variable, for example
`20`, `80` and `130`.

```js
const total = 100;
const ordered = 50;
```

# Task 3

Write a script that simulates administrator authorization in the control panel.

There is a `message` variable in which a message about the result will be written. When the page
loads the visitor is asked for a password via `prompt`:

- If you clicked `Cancel`, write the line `'Canceled by user!'` into `message`
- In the normal case, if a password is entered that matches the value of the `ADMIN_PASSWORD`
  constant, write in `message` the line `'Welcome!'`
- Otherwise, that is, if none of the previous conditions are met, write in `message` line
  `'Access denied, incorrect password!'`
- After all checks, display the value of the `message` variable in `alert`.

```js
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
```

# Task 4

The user's account has `23580` credits, the value is stored in the `credits` variable (create and
assign). The user decides to buy repair droids, which cost `3000` credits each. The price of one
droid is stored in the `pricePerDroid` variable (create and assign).

When visiting a page, using `prompt`, you need to ask the number of droids that the user wants to
buy and save it into a variable.

Write a script that:

- If the `Cancel` button was pressed in the `prompt`, displays a message in the console
  `'Canceled by user!'`.
- Otherwise, calculates the total price of the order and stores it in the `totalPrice` variable.
- Checks whether the user can pay for the order:
  - if the amount to be paid exceeds the number of credits in the account, display a message in the
    console `'Insufficient funds in the account!'`.
  - otherwise, you need to calculate the balance of credits on the account and display a message
    ``You bought [number] of droids, there are [number] credits left in your account.'`.

# Task 5

The user can arrange delivery of goods to his country by indicating it when visiting the page in
`prompt`. Please note that the user can enter the country name not only with lowercase letters, but
for example ``CHINA'`.

Write a script that displays a message about the cost of delivery to a specified country.
Necessarily use `switch`. Message format: ``Shipping to [country] will cost [price] credits'`.

But delivery is not available everywhere, if the specified country is not in the list, then display
a message in `alert` ``Delivery is not available in your country'`.

Below is a list of countries and shipping costs.

- China - 100 credits
- Chile - 250 credits
- Australia - 170 credits
- India - 80 credits
- Jamaica - 120 credits

# Task 6

Write a script that asks the visitor to enter a number in the `prompt` until the visitor will press
`Cancel` and add the entered value to the total each time.

- When loading the page, the user is prompted to enter a number in the `prompt`. The input is added
  to the value of the `total` variable.
- The number entry operation continues until the user presses the `Cancel` button in `prompt`.
- After the user has stopped entering by clicking the `Cancel` button, show an `alert` with the line
  `'The total sum of the numbers is [sum]'`.

> 🔔 Checking that the user entered exactly a number and not an arbitrary set of characters is not
> necessary. If you want, in case of incorrect input, show `alert` with text
> `'The entered number was not a number, try again'`, and the result of `prompt` is added to the
> total not necessary, after which the user is again prompted to enter the number in the prompt.

```js
let input;
let total = 0;
```

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `ts-hw-01`
- При здачі домашньої роботи є посилання на вихідні файли у репозиторії
- Кожне завдання виконане в окремому файлі з іменем `task-номер_задания.js`. Використовуй
 `<script type="module">` щоб закрити код завдання в окремій області видимості та уникнути
 конфліктів імен ідентифікаторів
- Імена змінних зрозумілі, описові
- Код відформатовано за допомогою Prettier

# Завдання 1

- Оголоси дві змінні, що зберігають назву та ціну товару: `name` та `price`
- присвойте змінним наступні характеристики товару (відразу при оголошенні)
 - назва: Генератор захисного поля
 - ціна: 1000
- Використовуючи шаблонний рядок, виведи в консоль інформацію про товар, вийде:
 "Вибраний "Генератор захисного поля", ціна за штуку 1000 кредитів".
- Присвій товару нову ціну – 2000
- Використовуючи шаблонний рядок, виведи в консоль інформацію про товар, вийде:
 "Вибраний "Генератор захисного поля", ціна за штуку 2000 кредитів".

# Завдання 2

Напиши скрипт перевірки кількості товарів на складі. Є змінні `total` (кількість товарів на
складі) та `ordered` (одиниць товару в замовленні).

Порівняй ці значення і за результатами виведи:

- Якщо у замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення
 "На складі недостатньо творів!"
- В іншому випадку виводь повідомлення "Замовлення оформлене, з вами зв'яжеться менеджер".

Перевір працездатність коду з різними значеннями змінної `ordered`, наприклад `20`, `80` і
`130`.

``js
const total = 100;
const ordered = 50;
````

# Завдання 3

Напиши скрипт, який імітує авторизацію адміністратора в панелі керування.

Є змінна `message`, в яку буде записано повідомлення про результат. При завантаженні сторінки у
відвідувача запитується пароль через `prompt`:

- Якщо натиснули `Cancel`, записати в `message` рядок ``Скасовано користувачем!''
- У протилежному випадку, якщо введений пароль який збігається зі значенням константи `ADMIN_PASSWORD`,
 записати в `message` рядок ``Ласкаво просимо!'`
- В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в
 `message` рядок ``Доступ заборонено, неправильний пароль!''
- Після всіх перевірок вивести в `alert` значення змінної `message`.

``js
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
````

# Завдання 4

На рахунку користувача є '23580' кредитів, значення зберігається в змінній 'credits' (створи та
присвій). Користувач вирішує купити ремонтні дроїди, які коштують по `3000` кредитів за штуку.
Ціна одного дроїда зберігається в змінній `pricePerDroid` (створи та присвій).

При відвідуванні сторінки, використовуючи `prompt`, необхідно запитати кількість дроїдів які
користувач хоче купити та зберегти в змінну.

Напиши скрипт який:

- Якщо в `prompt` була натиснута кнопка `Cancel`, виводить у консоль повідомлення
 ``Скасовано користувачем!'`.
- В іншому випадку, розраховує загальну ціну замовлення та зберігає в змінній `totalPrice`.
- Перевіряє чи зможе користувач сплатити замовлення:
 - якщо сума до оплати перевищує кількість кредитів на рахунку, виводь у консоль повідомлення
 "Недостатньо коштів на рахунку!".
 - інакше необхідно порахувати залишок кредитів на рахунку та вивести повідомлення
 ''Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.''.

# Завдання 5

Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки
`prompt`. Врахуй, користувач може ввести ім'я країни не лише літерами нижнього регістру, а наприклад
``КІТАЙ'`.

Напиши скрипт, який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково
використовуй `switch`. Формат повідомлення: "Доставка в [країна] буде коштувати [ціна] кредитів".

Але доставка є не скрізь, якщо вказаної країни немає у списку, то виводь у `alert` повідомлення
"У вашій країні доставка не доступна".

Нижче наведено список країн та вартість доставки.

- Китай – 100 кредитів
- Чилі – 250 кредитів
- Австралія - ​​170 кредитів
- Індія – 80 кредитів
- Ямайка – 120 кредитів

# Завдання 6

Напиши скрипт який просить відвідувача ввести число в `prompt` до тих пір, поки відвідувач на
натисне `Cancel` і щоразу додає введене значення до загальної суми.

- При завантаженні сторінки користувачеві пропонується в `prompt` ввести число. Введення додається до
 значення змінної `total`.
- Операція введення числа триває доти, доки користувач не натисне кнопку `Cancel` в
 `prompt`.
- Після того, як користувач припинив введення натиснувши кнопку `Cancel`, показати `alert` з рядком
 ''Загальна сума чисел дорівнює [сума]''.

> 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не
> Потрібно. Якщо хочеш, у разі некоректного введення, показуй `alert` з текстом
> "Було введено не число, спробуйте ще раз", при цьому результат "prompt" плюсувати до загальної суми
> не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

```js
let input;
let total = 0;
```

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `ts-hw-01`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле с именем `task-номер_задания.js`. Используй
  `<script type="module">` чтобы закрыть код задания в отдельной области видимости и избежать
  конфликтов имен идентификаторов.
- Имена переменных понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

- Объяви две переменные хранящие название и цену товара: `name` и `price`
- Присвой переменным следующие характеристики товара (сразу при объявлении)
  - название: Генератор защитного поля
  - цена: 1000
- Используя шаблонную строку выведи в консоль информацию о товаре, получится:
  `'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'`.
- Присвой товару новую цену - 2000
- Используя шаблонную строку выведи в консоль информацию о товаре, получится:
  `'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'`.

# Задание 2

Напиши скрипт проверки количества товаров на складе. Есть переменные `total` (количество товаров на
складе) и `ordered` (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

- Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение
  `"На складе недостаточно твоаров!"`.
- В другом случае выводи сообщение `"Заказ оформлен, с вами свяжется менеджер"`.

Проверь работоспособность кода с разными значениями переменной `ordered`, например `20`, `80` и
`130`.

```js
const total = 100;
const ordered = 50;
```

# Задание 3

Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная `message` в которую будет записано сообщение о результате. При загрузке страницы у
посетителя запрашивается пароль через `prompt`:

- Если нажали `Cancel`, записать в `message` строку `'Отменено пользователем!'`
- В протовном случае, если введен пароль который совпадает со значением константы `ADMIN_PASSWORD`,
  записать в `message` строку `'Добро пожаловать!'`
- В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в
  `message` строку `'Доступ запрещен, неверный пароль!'`
- После всех проверок вывести в `alert` значение переменной `message`.

```js
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
```

# Задание 4

На счету пользователя есть `23580` кредитов, значение хранится в переменной `credits` (создай и
присвой). Пользователь решает купить ремонтных дроидов, которые стоят по `3000` кредитов за штуку.
Цена одного дроида хранится в переменной `pricePerDroid` (создай и присвой).

При посещении страницы, используя `prompt`, необходимо спросить количество дроидов которые
пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

- Если в `prompt` была нажата кнопка `Cancel`, выводит в консоль сообщение
  `'Отменено пользователем!'`.
- В противном случае, рассчитывает общую цену заказа и сохраняет в переменной `totalPrice`.
- Проверяет сможет ли пользователь оплатить заказ:
  - если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение
    `'Недостаточно средств на счету!'`.
  - в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение
    `'Вы купили [число] дроидов, на счету осталось [число] кредитов.'`.

# Задание 5

Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в
`prompt`. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру
`'кИтАЙ'`.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно
используй `switch`. Формат сообщения: `'Доставка в [страна] будет стоить [цена] кредитов'`.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в `alert` сообщение
`'В вашей стране доставка не доступна'`.

Ниже приведен список стран и стоимость доставки.

- Китай - 100 кредитов
- Чили - 250 кредитов
- Австралия - 170 кредитов
- Индия - 80 кредитов
- Ямайка - 120 кредитов

# Задание 6

Напиши скрипт который просит посетителя ввести число в `prompt` до тех пор, пока посетитель на
нажмет `Cancel` и каждый раз добавляет введенное значение к общей сумме.

- При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод добавляется к
  значению переменной `total`.
- Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку `Cancel` в
  `prompt`.
- После того как пользователь прекратил ввод нажав кнопку `Cancel`, показать `alert` со строкой
  `'Общая сумма чисел равна [сумма]'`.

> 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не
> нужно. Если хочешь, в случае некорректного ввода, показывай `alert` с текстом
> `'Было введено не число, попробуйте еще раз'`, при этом результат `prompt` плюсовать к общей сумме
> не нужно, после чего снова пользователю предлагается ввести число в prompt.

```js
let input;
let total = 0;
```
