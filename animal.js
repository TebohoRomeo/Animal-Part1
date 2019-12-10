// Author : Teboho Romeo Lekhalo
// Date : 2019/12/06

"use strict"

class Animal {
    constructor(name) { 
        this.name = name;
    }
    sound() {
        console.log("Sounds");
    }

    eat() {
        console.log(this.name + " " + "eats")
    }
}
  
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
  
class Cat extends Animal {

    sound() {

        console.log("Cat Meows")
    }
}

let dog = new Dog("Rax");
dog.eat();
dog.sound();

let cat =  new Cat ("Stormy");
cat.eat();
cat.sound();


class Home {
    constructor(name){
        this.name = name;
    }

    adoptPet(){

        let animals = [];
        animals.push();
    }

    makeAllSounds(){
        dog1.sound();
        cat1.sound();
        dog2.sound();
        
        console.log()
    }
}


let home  = new Home();
let dog1 = new Dog();
let dog2 = new Dog();
let cat1 = new Cat();

home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat1);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();



