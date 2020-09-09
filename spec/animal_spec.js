let {Animal, Dog, Cat, Home} = require("../src/animal")
// Part two

describe("Animal class", function(){

    let dog = new Animal();
    it("Has to do something", function(){
        expect(dog.sound()).toBe("Sounds")
    })


    let cat = new Animal();
    it("checks if cat has sound", function(){
        expect(cat.sound()).toBe("Sounds")
    })

})

describe("Home class", function(){
    let home = new Home();
    it('checks if makeAlSounds() is defined', function() {
       expect(home.makeAllSounds).toBeDefined()
    });

})
