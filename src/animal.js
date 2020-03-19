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
<<<<<<< HEAD
         console.log(this.animals);
=======
        return this.animals;
>>>>>>> 5a7431136a4acb9fd71e946c053703d791e4c584
     }
     
    makeAllSounds(){   
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].sound();
        }
    }

 }


<<<<<<< HEAD
module.exports = {Animal, Dog, Cat, Home};
=======
module.exports = Animal, Dog, Cat, Home;
>>>>>>> 5a7431136a4acb9fd71e946c053703d791e4c584
