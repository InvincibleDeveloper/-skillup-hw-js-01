// Задание 1. Числа
(function assignment1() {
  let abbrPi = Math.PI.toFixed(2);
  let minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
  let maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

  let getRandomFract = () => {
    return Math.random().toFixed(2);
  };

  // Значения min и max, по умолчанию, равны 0 и 10 соответственно
  let getRandomInt = (min, max) => {
    min = +min;
    max = +max;

    if (isNaN(min) || isNaN(max)) {
      min = 0;
      max = 10;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  };

  let sum = (0.6 + 0.7).toFixed(1);
  let price = parseInt("100$");

  // Все логи
  console.log(abbrPi);
  console.log(minNum);
  console.log(maxNum);
  console.log(getRandomFract());
  console.log(getRandomInt());
  console.log(getRandomInt(0, 1000));
  console.log(sum);
  console.log(price);
})();

// Задание 2. Строки
function assignment2() {
  let str = "some test string";
  let firstLetter = str[0].toLocaleUpperCase();
  let lastLetter = str[str.length - 1].toLocaleUpperCase();
  let strWord = str.indexOf("string");
  let secondSpace = str.indexOf(" ", str.indexOf(" ") + 1); // Получение второго пробела через первый
  let testWord = str.substr(5, 4);
  let testWord2 = str.slice(5, 9);
  let withoutStr = str.slice(0, -6);
  let a = 20;
  let b = 16;
  let string = String(a) + String(b);

  // Все логи
  console.log(str);
  console.log(firstLetter);
  console.log(lastLetter);
  console.log(strWord);
  console.log(secondSpace);
  console.log(testWord);
  console.log(testWord2);
  console.log(withoutStr);
  console.log(a);
  console.log(b);
  console.log(string);
}

// Вызвать последующие функции
setTimeout(assignment2, 1000);
setTimeout(assignment3, 2000);
setTimeout(assignment4, 3000);
setTimeout(assignment5, 4000);

// Задание 3. Объекты
function assignment3() {
  let obj = { product: "iphone" };
  console.log(obj);

  obj.price = 1000;
  obj.currency = "dollar";
  console.log(obj);

  obj.details = { model: " Apple iPhone 13", color: "black" };
  console.log(obj);
}

//  Задание 4. Преобразование примитивов
function assignment4() {
  // При каждых операциях сравнения, математических и т.п. преобразовываются данные, где 0, null и undefined = это false; а string, другие числа и объекты (включая массивы) - true
  let a = 0 || "string"; // а = 'string'  |(|| возвращает истинное значение или последнее ложное)
  a = 1 && "string"; // a = 'string' |(&& возвращает ложное значение или последнее истинное)
  a = null || 25; // a = 25
  a = null && 25; // a = null
  a = null || 0 || 35; // a = 35
  a = null && 0 && 35; // a = null

  12 + 14 + "12"; // 2612   |сначала будет сложение чисел, потом неявное преобразование в строку и конкатенация
  3 + 2 - "1"; // 4         |сначала будет сложение чисел, потом неявное преобразование в число и вычитание
  "3" + 2 - 1; // 31        |сначала конкатенация пото преобразование к числу и вычитание
  true + 2; // 3            |true неявно преобразовывается в число 1
  +"10" + 1; // 11          |преобразование в число так как +'10', если + убрать то преобразование будет в строку
  undefined + 2; // NaN     |undefined преобразовывается в NaN
  null + 5; // 5            |null преобразуется в 0
  true + undefined; // NaN  |undefined преобразовывается в NaN
  5 + "34"; // 534
  5 - "4"; // 1
  10 % 5; // 0              |деление без остатка
  5 % 10; // 5
  "Java" + "Script"; // "JavaScript"
  " " + " "; // "  "
  " " + 0; // 0
  true + true; // 2
  true + false; // 1
  false + true; // 1
  false - true; // -1
  3 - 4; // -1
  "Bob" - "bill"; // NaN    | при вычитании буквенных строк происходит преобразование в не число.
}

// Задание 5. If else
function assignment5() {
  5 >= 1; // true
  0 === 1; // false
  4 <= 1; // false
  1 != 1; // false
  "A" > "B"; // false
  "B" < "C"; // true
  "a" > "A"; // true
  "b" < "A"; // false
  true === false; // false
  true != true; //false

  let hidden = "hidden";

  console.log(hidden);

  if (hidden === "hidden") {
    hidden = "visible";
  } else {
    hidden = "hidden";
  }

  console.log(hidden);

  let temperature = 100;

  console.log();

  if (temperature === 0) {
    temperature = 1;
  } else if (temperature < 0) {
    temperature = "less then zero";
  } else {
    temperature *= 10;
  }

  console.log(temperature);

  let car = { name: "Lexus", age: 10, create: 2008, needRepair: false };

  console.log(car);

  if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
    console.log(car);
  } else {
    car.needRepair = false;
    console.log(car);
  }

  let item = { name: "Intel core i7", price: "100$", discount: "15%" };

  if (
    "discount" in item &&
    item.discount !== NaN &&
    "price" in item &&
    item.price !== NaN
  ) {
    let price = parseInt(item.price);
    let discount = parseInt(item.discount);
    item.priceWithDiscount = price - (price * discount) / 100;
    console.log(item.priceWithDiscount);
  } else {
    console.log(item.price);
  }

  let product = {
    name: "Яблоко",
    price: "10$",
  };

  let min = 10; // минимальная цена
  let max = 20; // максимальная цена

  let price = parseInt(product.price);

  if (price >= min && price <= max) {
    console.log(product.name);
  } else {
    console.log("Товаров не найдено");
  }
}
