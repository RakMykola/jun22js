// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area =  (a,b) => {
    return a * b;
}
console.log(area(4,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle =  (r) => {
    return Math.floor(Math.PI) * r * 2;
}
console.log(areaCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder =  (r,h) => {
    return 2 * Math.floor(Math.PI) * r * h;
}
console.log(areaCylinder(10,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

let arrayIterator = (array) =>{
     for (const item of array) {
        console.log(item);
    }
};
arrayIterator(listOfItems);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraf = (text)=>{
    return document.write(`<p>${text}</p>`);
}
paragraf('okten');
paragraf('web');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let lishka = (text)=>{
        document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        </ul>`)
}
lishka('one');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let lishka2 = (text,num)=> {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
}
lishka2('two',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrwpwp = [true,false,1245,'fkglfk']
let arrayCreator = (array) =>{

    document.write(`<ul>`);
    for (const list of array) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);

};
arrayCreator(arrwpwp);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrPep = [{
    id: 1,
    name: 'vasia',
    age: 25
}]
let arrObjectEject = (obj)=>{
    for (const item of obj) {
        document.write(`<div>${item.id}</div>`);
        document.write(`<div>${item.name}</div>`);
        document.write(`<div>${item.age}</div>`);
    }
}
arrObjectEject(arrPep);

// - створити функцію яка повертає найменьше число з масиву
let arrNum = [10,2,3,4,5,6,7,8,9];

let funMin = (array)=> {
    let min = array[0];
    for (const Element of array) {
        if (Element < min) min = Element;
    }
    console.log(min) ;
};
funMin(arrNum);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrNum2 = [1,2,3];
let numSum = (arr)=> {
    let result = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
}
console.log(numSum(arrNum2));