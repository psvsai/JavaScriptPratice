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

const javascript1 = {
    name : "backend",
    capture(){
        console.log(this);
    }
}
javascript.capture();


// 10-01-2025
// method  this keyword are used in methods only  
const coding = {
    impCoding : "Stick to one paticular thing",
    needPractice : "Keep on practing untill if  become a habit to u",
    interview : function(){
         console.log(this.needPractice);
    } 
};
coding.interview();

const suzuki = {
    model  : " CIAZ ",
    year (){
        console.log(this);
    },
     maruthi : function(){
    console.log(this,"Maruthi is one part of suzuki company in india");
}
};

suzuki.bike = function(){
     console.log(this,"Bike are also being manufacture by suzuki Hayabusya is one of most famous bike in the world");
};

suzuki.bike();

function maruthi(){
    console.log(this);
}
maruthi();

function Guitar(notes,chords){
    this.chormaticScale = notes;
   console.log(this);
    this.sharpe = chords;
    console.log(this);
}
const scale = new Guitar("#a" , "#c");

const apple = async() =>{
    fruit = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sweet = true;
            if(sweet){
                resolve("Apple is one of the sweetest fruit");
            }else{
                reject("Not every apple is sweetest");
            }
        },1000);
    });
    try{
        var result  = await fruit;
        console.log(result);
    }catch(error){
        console.log("the data is not clear",error.message);
    }
}
apple();

//intensinal error
// Output (if tomato = undefined):
// Nothing happens; the promise does not resolve or reject, and the function silently hangs.
const veg = async() =>{
    const cuury = new Promise((resolve)=>{
        var tomato = true;
        if(tomato){
        resolve("Trying to initiate the error");
        };
    }) ;
    try{
        var vegCurry = await cuury;
        console.log(vegCurry);
    }catch(error){
        console.log("Error 404",error.message);
    }
}
veg();

const ap = async() =>{
    politicies = new Promise((resolve,reject)=>{
        setTimeout(()=>{
           var jenasena = undefined;
           if(jenasena){
            resolve("Jenasena party won with full majories in 2024 and they didn't speard money to the people");
           }else{
            reject(new Error("Never give on anything"));
           }
        },1000)
    });
    try{
        const result = await politicies;
        console.log(result);
    }catch(error){
        console.log("Error 404",error.message)
    }
}
ap();

// this
const jenasena = {
    hello : "in a method there are object ,properties and function and this keyword",
    create : "foreach",
    world : function(){
        console.log(this.hello,"this((the object which excutes particular method or a function))",this.create);
    }
};
jenasena.world();

// regular function in gloabl output in vs code if we try in chrome it shows as windoows ]
function hi(){
    console.log(this);
}
hi();

// function using this keyword and added new operate to a object for output without global 
function happy(moments){
    this.life = moments;
    console.log(this);
};
const mpment = new happy("Alaways create a happy moments in your life") ;

const badminton = async() =>{
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response2 = await fetch ("https://jsonplaceholder.typicode.com/comments");
        this.result = await response1.json() ;
        console.log(response);
    }catch(error){
        console.log(error.message);
    }
}
badminton();