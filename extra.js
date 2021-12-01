// Задание 1
function task1() {
  let name = "Домкрат гидравлический";
  let price = 100;
  console.log(`Выбран "${name}", цена за штуку ${price} тугриков`);
  price = 300;
  console.log(`Выбран "${name}", цена за штуку ${price} тугриков`);
}

setTimeout(task1, 5000);

// Задание 2
function task2() {
  function orderProducts(absolute, arranged) {
    let total = absolute;
    let ordered = arranged;

    if (ordered > total) {
      console.log("На складе недостаточно товаров!");
    } else if (total <= 0) {
      console.log("На складе нет товаров!");
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

setTimeout(task2, 6000);

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

// task3();

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

// task4();

function task5() {
  let country = prompt("Укажите вашу страну") / i;
  let price;
  switch (country) {
    case "Китай":
      price = 100;
      break;
    case "Чили":
      price = 250;
      break;
    case "Австралия":
      price = 170;
      break;
    case "Индия":
      price = 80;
      break;
    case "Ямайка":
      price = 120;
      break;
    default:
      alert("В вашей стране доставка не доступна");
      break;
  }

  console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
}

task5();
