// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const numMin = (a,b,c)=>{
    if(a<b && a<c){
        console.log(a);
    }
    if(b<c && b<a){
        console.log(b);
    }
    if(c<a && c<b){
        console.log(c);
    }
}
numMin(100,200,50);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const numMax = (a,b,c)=>{
    if(a>b && a>c){
        console.log(a);
    }
    if(b>c && b>a){
        console.log(b);
    }
    if(c>a && c>b){
        console.log(c);
    }
}
numMax(100,20,50);

// - створити функцію яка повертає найбільше число з масиву
const maxArrNum =(arr)=>{
    min = arr[0];
  max = min;
  for (i = 1; i < arr.length; ++i) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
  }
  return max;
}
const arrruius = [1,5,7,45,2,5,46747];
maxArrNum(arrruius);
console.log(maxArrNum(arrruius));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arrlll = [1,5,7,45,2,5,46];
const  arrSered = (arr)=>{
    let res = 0;
for (let i = 0; i < arr.length; i++) {
        res = arr[i] + res;
   }
return  res/arr.length;
}
console.log(arrSered(arrlll));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
const arrruius2 = [1,5,7,45,3,10,46];
function arrNumberMinRemax (){
    let lin = arguments[0];
    lax = lin;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]<lin){
             lin = arguments[i];
        }
        if(arguments[i]>lax){
            lax = arguments[i];
       }
    }
     console.log(lax);
     return lin;
}
arrNumberMinRemax(1,5,10,80);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const arrteee = [];
const randomizer = (arr,length)=>{
    for (let i = 0; i < length; i++) {
        arr[i]= Math.round(Math.random()*100);
    }
    return console.log(arr);
}
// randomizer(arrteee,20);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
const randomizer2 = (arr,length,limit)=>{
    for (let i = 0; i < length; i++) {
        arr[i]= Math.round(Math.random()*limit);
    }
    return console.log(arr);
}
randomizer2(arrteee,5,10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const arrNorm = [5,8,10];
const arrRef = (arr)=>{
    let arrNew = [];
    for (let i = arr.length -1; i >= 0; i--) {
        arrNew[arrNew.length] = arr[i];
    }
    return console.log(arrNew) ;
}
arrRef(arrNorm);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//  якщо два аргументи - складає або конкатенує їх між собою.
const funcIFConcat = (a,b)=>{
    if(a && b){
        console.log(a + b);
    }else{
        console.log(a);
    }
}
funcIFConcat(10,5);


// - створити функцію  яка приймає два масиви та скаладає значення елементів
//  з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
const arrOne = [1,2,3,4];
const arrTwo =  [2,3,4,5];
//   результат
//   [3,5,7,9]

const funcConcatElements =(arr1,arr2)=>{
    let result = [];
     for (let i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i] + arr2[i]
     }
return console.log(result);;
}
funcConcatElements(arrOne,arrTwo);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

const arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
const funcKejObj = (arr)=>{
    let kejob= [];
    for (const iterator of arr) {
        for (const obj in iterator) {
            kejob[kejob.length] =(`${obj}`);
        }
    }
    return console.log(kejob);
}
funcKejObj(arrObj);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

const arrObj2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
const funcKejObj2 = (arr)=>{
    let kejob= [];
    for (const iterator of arr) {
        for (const obj in iterator) {
            kejob[kejob.length] =(`${iterator[obj]}`);
        }
    }
    return console.log(kejob);
}
funcKejObj2(arrObj2);
