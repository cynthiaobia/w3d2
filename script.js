// Create Cat Class with 3 properties
class Cat {
    constructor(breed, color, age){
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.health = true;
    }

    // Create 3 methods
    printInfo(){
        console.log(`This ${this.color} ${this.breed} is ${this.age} years old.`);
    }

    getBreed(){
        console.log(this.breed);
    }

    isHealthy(){
        if (this.age > 5){
            this.health = false;
            console.log('This cat is not healthy');
        }
        else {
            this.health = true;
            console.log('This cat is healthy');
        }
    }
}

// create 2 instances
const tabby = new Cat('tabby', 'orange', 3);
const siamese = new Cat('siamese', 'white', 8);

// log both instances
console.log(tabby);
console.log(siamese);

// invoke each method
tabby.printInfo();
tabby.getBreed();
tabby.isHealthy();
siamese.printInfo();
siamese.getBreed();
siamese.isHealthy();

// Pirates w/ three properties set by constructor
class Pirate {
    constructor(name, location, tattoos){
        this.name = name;
        this.location = location;
        this.tattoos = tattoos;
    }

    // create 3 methods
    print(){
        console.log(`${this.name} is a pirate from ${this.location} and has ${this.tattoos} tattoos.`);
    }
}

// instantiate 2 arrays of 3 pirates
const jackSparrow = new Pirate('Jack Sparrow', 'Carribean', 17);
const popEye = new Pirate('Popeye', 'Ireland', 28);
const patchy = new Pirate('Patchy the Pirate', 'Bikini Bottom', 2);

jackSparrow.print();

jollyRoger = [jackSparrow, popEye, patchy];


// loop over each array and print 3 properties of each pirate
for (const pirate of jollyRoger){
    for (const prop in pirate){
        console.log(pirate[prop]);
    }
}

const john = new Pirate('John', 'New York City', 100);
const jane = new Pirate('Jane', 'Chicago', 0);
const jill = new Pirate('Jill', 'Dallas', 50);

blackPearl = [john, jane, jill];

for (const pirate of blackPearl){
    for (const prop in pirate){
        console.log(pirate[prop]);
    }
}
