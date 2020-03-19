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

class Cat extends Animal {
    
    sound() {
        return "Cat meows";
    }
}

class Home {
    constructor(){
        // this.name = name;
        this.animals = [];
    }
     adoptPet(name){
         for(let i = 0; i < this.animals.length; i++){
             if (this.animals[i] == name){
                throw "Can't adopt same pet twice";
             }
         }
        this.animals.push(name);
         console.log(this.animals);
     }
     
    makeAllSounds(){   
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].sound();
        }
    }

 }


module.exports = {Animal, Dog, Cat, Home};