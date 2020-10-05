// function Person(name, age){// function like a constructor 
//     this.name = name;
//     this.age = age;
//     this.eat = function(){
//         console.log("eating porota");
//     }
// }
// const sakib = new Person("sakib", 33);//creating new object
// sakib.eat();
// console.log(sakib.name);

// function Person(name, age){// function like a constructor 
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = {
//     eat: function(){
//         console.log(`${this.name} is eating`);
//     }
// }
// const sakib = new Person("sakib", 33);//creating new object
// sakib.eat();
// console.dir(Person);


// const f = function(){
// };
// console.dir(f);

// Object.prototype.mostafa = function(){
//     console.log("i am mostafa");
// }

// let person = {
// };
// person.mostafa();
// console.dir(mostafa);

function Person(name, age){
    //parent class
    this.name = name;
    this.age = age;
}
function Cricketer(name, age, type, country){
    //child class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function(){
        console.log(`${this.name} eats katla fish`);
    }
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
const sakib = new Cricketer("sakib", 33, "al-rounder", "bangladesh");
sakib.eat();
console.log(sakib.age, sakib.country);