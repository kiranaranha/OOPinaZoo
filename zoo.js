function run(){
    let tigger = new Tiger("Tigger");
    tigger.eat("meat");

    let pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    let rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");

    let gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    let stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");

    let zoebot = new Zookeper("Zoebot");
    zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger], "pizza");

    console.log(Animal.getPopulation());
    }

var animalPopulation = 0;

class Animal {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
        animalPopulation ++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    eat(food){
        if(food == this.favFood){
            console.log(this.name + " eats " + food);
        }
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food);

    if(food == this.favFood){
        this.sleep();
    }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){
        if(food == this.favFood){
            console.log(this.name + " eats " + food);
        }
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food);

        if(food == this.favFood){
            this.sleep();
        }
    }
}

class Zookeper {
    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals");

    for (let i = 0; i < animals.length; i++){
        animals[i].eat(food);
    }
    }
}

