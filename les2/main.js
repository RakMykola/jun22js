// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrOne = [22,true,155,false,'erere',555,'rak',333,'tttt',90];
console.log(arrOne[0])
console.log(arrOne[1])
console.log(arrOne[2])
console.log(arrOne[3])
console.log(arrOne[4])
console.log(arrOne[5])
console.log(arrOne[6])
console.log(arrOne[7])
console.log(arrOne[8])
console.log(arrOne[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Lord of the rings',
    pageCount: 1000,
    genre: 'High fantasy'
}
let book2 = {
    title: 'Harry Potter',
    pageCount: 2000,
    genre: 'fantasy'
}
let book3 = {
    title: 'Game of thrones',
    pageCount: 3000,
    genre: 'High fantasy'
}
console.log(book1,book2,book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'The Great Gatsby',
    pageCount: 2000,
    genre: 'High fantasy',
    authors: [{
        name: 'Scott Fitzgerald',
        age: 50,
    }
    ]
}
let book5 = {
    title: 'Alice\'s Adventures in Wonderland',
    pageCount: 2000,
    genre: 'fantasy',
    authors: [{
        name: 'Lewis Carroll',
        age: 40,
    }
    ]
}
let book6 = {
    title: 'Gulliver\'s Travels',
    pageCount: 3000,
    genre: 'High fantasy',
    authors: [{
        name: 'Jonathan Swift',
        age: 55,
    }
    ]
}
console.log(book4,book5,book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUsers = [
    {
        name: 'Vasya',
        username: 'Vasya1',
        password: 1234
    },
    {
        name: 'Vasya2',
        username: 'Vasya2',
        password: 5678
    },
     {
        name: 'Vasya3',
        username: 'Vasya3',
        password: 91011
    },
     {
        name: 'Vasya4',
        username: 'Vasya4',
        password: 1213
    },
    {
        name: 'Vasya5',
        username: 'Vasya5',
        password: 1415
    },
  {
        name: 'Vasya6',
        username: 'Vasya6',
        password: 1617
    },
    {
        name: 'Vasya7',
        username: 'Vasya7',
        password: 1819
    },
    {
        name: 'Vasya8',
        username: 'Vasya8',
        password: 2021
    },
     {
        name: 'Vasya9',
        username: 'Vasya9',
        password: 2223
    },
     {
        name: 'Vasya10',
        username: 'Vasya10',
        password: 2324
    }
];
console.log('password user 1:',arrUsers[0].password);
console.log('password user 2:',arrUsers[1].password);
console.log('password user 3:',arrUsers[2].password);
console.log('password user 4:',arrUsers[3].password);
console.log('password user 5:',arrUsers[4].password);
console.log('password user 6:',arrUsers[5].password);
console.log('password user 7:',arrUsers[6].password);
console.log('password user 8:',arrUsers[7].password);
console.log('password user 9:',arrUsers[8].password);
console.log('password user 10:',arrUsers[9].password);
