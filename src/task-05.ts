console.log('task-05');

interface ConfigCountrys {
  china: [string, number];
  chile: [string, number];
  australia: [string, number];
  india: [string, number];
  jamaica: [string, number];
}

const countrys: ConfigCountrys = {
  china: ['Китай', 100],
  chile: ['Чили', 250],
  australia: ['Австралия', 170],
  india: ['Индия', 80],
  jamaica: ['Ямайка', 120],
};

const userCountry: string | null = prompt('Enter country for delivery');

if (userCountry === null) {
  console.log('Ждем Вас в следующий раз');
} else {
  switch (userCountry.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в ${countrys.china[0]} будет стоить ${countrys.china[1]} кредитов`);
      break;
    case 'чили':
      console.log(`Доставка в ${countrys.chile[0]} будет стоить ${countrys.chile[1]} кредитов`);
      break;
    case 'австралия':
      console.log(
        `Доставка в ${countrys.australia[0]} будет стоить ${countrys.australia[1]} кредитов`
      );
      break;
    case 'индия':
      console.log(`Доставка в ${countrys.india[0]} будет стоить ${countrys.india[1]} кредитов`);
      break;
    case 'ямайка':
      console.log(`Доставка в ${countrys.jamaica[0]} будет стоить ${countrys.jamaica[1]} кредитов`);
      break;
    default:
      console.log('В вашей стране доставка не доступна');
  }
}

console.log('\n');
