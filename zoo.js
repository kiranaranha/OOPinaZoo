function run(){
    let tigger = new Tiger("Tigger");
    //tigger.eat("meat");
    //tigger.eat("kibble");
    let pooh = new Bear("Pooh");
    //pooh.eat("fish");
    //pooh.eat("meat");
}

class Tiger {
    constructor(name) {
        this.name = name;
        this.favFood = "meat";
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();

    }

}


class Bear {
    constructor(name) {
        this.name = name;
        this.favFood = "fish";
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();

    }
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

