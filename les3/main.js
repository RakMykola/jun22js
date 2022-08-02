// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x === 0){
    document.write('Вірно');
}else {
    document.write('НЕ вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0;
if (time >= 0 && time <=15){
    console.log('1 четверть години');
}else if(time >= 15 && time <= 30){
    console.log('2 четверть години');

}else if(time >= 31 && time <= 45){
    console.log('3 четверть години');

}else if  (time >= 46 && time <=59){
    console.log('4 четверть години');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let num = 25;
if (num >= 1 && num <=10){
    console.log('1 декада');
}else if(num >= 11 && num <= 20){
    console.log('2 декада');

}else if(num >= 21 && num <= 31){
    console.log('3 декада');

}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let day = 3;
switch (day) {
    case 1:
        console.log('Mondey');
        break;
    case 2:
        console.log('Tuesdey');
        break;
    case 3:
        console.log('Wednesdey');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Free');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num2 = 55;
let num3 = 55;
if (num2 > num3){
    console.log(num2+' '+'Максимальне число');
} else if (num2 === num3){
    console.log('Рівні числа');
} else if (num3 > num2){
    console.log(num3 + ' '+'Максимальне число');
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

let y = 'пп' || 'false';
 // y = '' || 'false';
console.log(y);

let v = undefined || 'false';
console.log(v);

let r = 111 || 'false';
// r = null || 'false';
console.log(r);