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
