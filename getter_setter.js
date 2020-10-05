class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    get getName(){
        //getter
        return this.name;
    }
    set setName(name){
        //setter
        this.name = name;
    }
}
const sakib = new Person("sakib", 33);
sakib.eat();
console.log(sakib.getName);
sakib.setName = 'tamim';
console.log(sakib.name);