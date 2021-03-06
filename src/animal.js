// Author : Teboho Romeo Lekhalo
// Date : 06 December 2019
'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return 'Sounds';
  }

  eat() {
    return `${this.name} eats`;
  }
}

class Dog extends Animal {
  sound() {
    return 'Dog barks';
  }
}

class Cat extends Animal {
  sound() {
    return 'Cat meows';
  }
}

class Home {
  constructor() {
    // this.name = name;
    this.animals = [];
  }
  adoptPet(name) {
    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i] == name) {
        throw "Can't adopt same pet twice";
      }
    }
    this.animals.push(name);
    console.log(this.animals);
    return this.animals;
  }

  makeAllSounds() {
    for (let i = 0; i < this.animals.length; i++) {
      return this.animals[i].sound();
    }
  }
}

let home = new Home();
let dog1 = new Dog('Spoti');
let dog2 = new Dog('Max');
let cat = new Cat('Mandy');

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();
console.log('---------------------------------------');

home.adoptPet(cat);
home.makeAllSounds();
console.log('---------------------------------------');

home.adoptPet(dog2);
console.log(home.makeAllSounds(), 'we are here');
 

module.exports = {Animal, Dog, Cat, Home};
