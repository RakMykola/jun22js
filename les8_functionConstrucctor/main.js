// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const nUser1 = new User(1,'vasa','pes','val@gmail.com',2132312);
const nUser2 = new User(2,'kolya','rak','kol@gmail.com',22222);
const nUser3 = new User(3,'pavlo','kit','pal@gmail.com',3333);
const nUser4 = new User(4,'igor','byk','igo@gmail.com',4444);
const nUser5 = new User(5,'ivan','ryba','iva@gmail.com',55555);
const nUser6 = new User(6,'petro','petr','pet@gmail.com',66666);
const nUser7 = new User(7,'andriy','andr','an@gmail.com',77777);
const nUser8 = new User(8,'mysha','mysh','mysherl@gmail.com',88888);
const nUser9 = new User(9,'volodym','volod','volod@gmail.com',99992);
const nUser10 = new User(10,'roman','rom','rom@gmail.com',101010);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const tenUser = [nUser1,nUser2,nUser3,nUser4,nUser5,nUser6,nUser7,nUser8,nUser9,nUser10];
console.log(tenUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filterUsers = tenUser.filter(item => item.id % 2 === 0)
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по спаданню (sort)
const sortUsers = tenUser.sort((a,b) => b.id - a.id);
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const clientUser = new Client(1,'vasa','pes','val@gmail.com',213231,['xlib','pizzaa','voda','mashyna']);
console.log(clientUser);


// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
