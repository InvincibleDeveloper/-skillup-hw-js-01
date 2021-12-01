// Задание 2. Строки
(function assignment2() {
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
})();
