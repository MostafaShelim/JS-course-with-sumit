class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} wants to eat`);
    }
}
class Cricketer extends Person{
    constructor(name){
        super();
        this.name = name;
    }
    eat(){
        super.eat();
        console.log(`${this.name} is eating`);
    }
}
const sakib = new Cricketer("sakib");
sakib.eat();