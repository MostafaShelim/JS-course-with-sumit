class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.agename} is eating`);
    }
}

class Cricketer extends Person{
    constructor(name, age, type, country){
        super(name, age);
        this.type = type;
        this.country = country;
    }
    play(){
        console.log("He is playing");
    }
}
const sakib = new Cricketer("sakib", 33, 'alrounder', 'bangladesh');
sakib.eat();