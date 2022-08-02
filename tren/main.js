// Получить число pi из Math и округлить его до 2-х знаков после точки
let numPi = Math.round(Math.PI).toFixed(5);
let numPi1 = Math.PI.toFixed(5);
console.log(numPi)
console.log(numPi1)

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let numMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let numMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(numMax,numMin);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
let num1 = Math.random().toFixed(2);
console.log(num1);
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let x = 100;
let xRandom =  (Math.random()*x).toFixed();
console.log(xRandom);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let num2 = (0.6 +0.7).toFixed(1);
console.log(num2);

// Получить число из строки ‘100$’
let dolar = '100$';
let dolarNum = parseInt(dolar);
console.log(typeof dolarNum, dolarNum);