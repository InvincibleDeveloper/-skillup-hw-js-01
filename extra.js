// Задание 1
function task1() {
  let name = "Домкрат гидравлический";
  let price = 100;
  console.log(`Выбран "${name}", цена за штуку ${price} тугриков`);
  price = 300;
  console.log(`Выбран "${name}", цена за штуку ${price} тугриков`);
}

task1();

// Задание 2
function task2() {
  function orderProducts(absolute, arranged) {
    let total = absolute;
    let ordered = arranged;

    if (ordered > total) {
      console.log("На складе недостаточно товаров!");
    } else if (ordered <= 0) {
      console.log("Сделайте заказ!");
    } else {
      console.log("Заказ оформлен, с вами свяжется менеджер");
    }
  }

  orderProducts(100, 50);
  orderProducts(40, 60);
  orderProducts(20, 10);
  orderProducts(5, 0);
  orderProducts(0, 0);
}

task2();

// Задание 3
function task3() {
  let message;
  let password = prompt("Укажите ваш пароль:");
  const ADMIN_PASSWORD = "admin123";

  if (!password) {
    message = "Отменено пользователем!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }

  alert(message);
}

task3();

// Задание 4
function task4() {
  let credits = 23580;
  let pricePerDroid = 3000;
  let droidNumber = +prompt("Сколько вы хотите купить дроидов?");

  if (!droidNumber) {
    alert("Отменено пользователем!");
  } else {
    let totalPrice = pricePerDroid * droidNumber;

    if (totalPrice > credits) {
      alert("Недостаточно средств на счету!");
    } else {
      let balance = credits - totalPrice;
      alert(
        `Вы купили ${droidNumber} дроидов, на счету осталось ${balance} кредитов.`
      );
    }
  }
}

task4();

// Задание 5
function task5() {
  let country = prompt("Укажите вашу страну").toLowerCase();
  let price;
  switch (country) {
    case "китай":
      price = 100;
      break;
    case "чили":
      price = 250;
      break;
    case "австралия":
      price = 170;
      break;
    case "индия":
      price = 80;
      break;
    case "ямайка":
      price = 120;
      break;
    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}

task5();

// Задание 6
function task6() {
  let input;
  let total = 0;

  while (input !== null) {
    input = prompt("Введите число");

    if (isNaN(input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }

    total += input * 1;
  }

  alert(`Общая сумма чисел равна ${total}`);
}

task6();
