function run(){
    let tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");

}

class Tiger {
    constructor(name) {
        this.name = name;
        this.favFood = "meat";
    }

    sleep(name) {
        console.log(name + " sleeps for 8 hours");

    }

    eat(food) {
        food == this.favFood ? console.log("YUM!!! " + this.name + " wants more " + food) : console.log(this.name + " eats " + food);

    }

}


class Bear {

}