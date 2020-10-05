

// const Person = function(name, age){
//     let person = Object.create(Person.prototype);//all in Person we don't need extra object prototype giving us this oppurtunity

//     person.name = name;
//     person.age = age;
//     return person;
// };
// Person.prototype = {
//     eat(){
//         console.log("eating")
//     },
//     sleep(){
//         console.log('sleeping')
//     }
// }
// const sakib = Person("sakib", 30);
// sakib.eat()

//CONSTRUCTOR WITH OBJECT BASE AND ITSELF WORKING
// const Person = function(name, age){
//     //let this = Object.create(Person.prototype);//all in Person we don't need extra object prototype giving us this oppurtunity
    
//     this.name = name;
//     this.age = age;

//     // return person;
// };
// Person.prototype = {
//     eat(){
//         console.log("eating")
//     },
//     sleep(){
//         console.log('sleeping')
//     }
// }
// const sakib =new Person("sakib", 30);
// sakib.eat()

//NEW VERSION OF PROTOTYPE WITH AN OBJECT IS CLASS = ES6
class Person{
    constructo(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("eating")
    }
    sleep(){
        console.log("sleeping")
    }
}
const sakib = new Person("sakib", 33)
sakib.sleep()