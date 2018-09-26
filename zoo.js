
function sleep(name){
    console.log(name + " sleeps for 8 hours");
}

function run(){
    sleep("Tigger");
    eat("Tigger", "meat");
    eat("Tigger", "bacon");
}

var favoriteFood="bacon";

function eat(name,food){
    food == this.favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : console.log(name + " eats " + food);
}


