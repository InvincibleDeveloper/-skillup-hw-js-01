// Задание 5. If else
(function assignment5() {
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
})();
