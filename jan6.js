//06-01-2025
class person{
    constructor(){
        this.name = "psvsai";
    }
    printName(){
        console.log(this.name);
    }
}
const myself = new person();
myself.printName();

//07-01-2025

// method are function that are defined as properties of an object.they are usd to perform specfic task or action.
// difference between function and method
// object method
const bike = {
    name : "Royal Ehfield",
    model : function(){
        console.log(`${this.name}`);
    },
};
bike.model();

// function
function amazon(){
    productName = "google pixel 8";
    price = "64,999";
    console.log(productName,"  Price :-",price);
}
 amazon();

const data = {
    cilmate: "sunnny",
    temp : function(){
        console.log("Cilamte is totally unperditable");
    }
};
data.temp();


 //this keyword
 //method --> object 
 // function--> global (windows,global)

const javascript = {
    name : "frontend",
    capture(){
        console.log(this);
    }
};

const backend
javascript.capture();


