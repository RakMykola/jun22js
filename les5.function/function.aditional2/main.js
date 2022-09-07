// - Дано натуральное число n. Выведите все числа от 1 до n.

const natNumber =(n)=>{
    for (let i = 1; i < n+1; i++) {
        console.log(i);
    }
    return;
}
natNumber(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
//  или в порядке убывания в противном случае.

const natNumber2 =(a,b)=>{
    if(a>b){
        for (let i = 1; i < a+1; i++) {
            console.log(i);
        }
    }
    if(a<b){
        for (let i = b -1; i >= 0; i--) {
            console.log(i);
        }
    }
    return;
}
natNumber2(10,20);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const arrfoo = [9,8,0,4]
const numChange =(arr,n)=>{
    for (let i = 0; i < arr.length; i++) {
        if(i === n){
            let res = arr[i];
            arr[i]= arr[i+1];    /* змінити місцями елементи індексів */
            arr[i+1]=res;

        }

    }
    return console.log(arr);
}
numChange(arrfoo,1)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//  Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


const arrex = [0,1,2,3,4]
const lastZero =(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            let res = arr[i];
            arr[i]= arr[arr.length-1];
            arr[arr.length-1]=res;
        }
    }
    return console.log(arr);
}
lastZero(arrex)
