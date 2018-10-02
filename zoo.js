function run(){
    let tigger = new Tiger("Tigger");
    tigger.eat("meat");

    let pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
}

class Animal {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
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

class Tiger extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    eat(food){
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

