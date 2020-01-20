// Author : Teboho Romeo Lekhalo
// Date : 06 December 2019
"use strict"

class Animal {
    constructor(name) { 
        this.name = name;   
    }

    sound(){
        return 'Sounds';
    }

    eat(){
        return `${this.name} eats`;
    }
}

class Dog extends Animal {
    
    sound() {
        return "Dog barks";
    }
}

let dog = new Dog("Rax");
console.log(dog.eat());
console.log(dog.sound());

class Cat extends Animal {
    
    sound() {
        return "Cat meows";
    }
}

let cat = new Cat("Stormy");
console.log(cat.eat());
console.log(cat.sound());

class Home {
    constructor(name){
        this.name = name;
        this.animals = [];
    }
     adoptPet(name){
         for(let i = 0; i < this.animals.length; i++){
             if (this.animals[i] == name){
                throw "Can't adopt same pet twice";
             }
         }
        this.animals.push(name);
        // return `${this.animals} My Animals`;
     }
     
    makeAllSounds(){   
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].sound();
        }
    }

 }

let home  = new Home();
let dog1 = new Dog();
let dog2 = new Dog();

home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(dog2);
// home.adoptPet(dog2);

home.makeAllSounds();


module.exports = Animal, Dog, Cat, Home;