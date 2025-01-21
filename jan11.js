//11-01-2025
const harryPotter = async() => {
    try {
     const data1 = await fetch(" https://jsonplaceholder.typicode.com/posts");
     const data2 = await fetch(" https://jsonplaceholder.typicode.com/comments");
    //  this.dataY = await data1.json();
    //  console.log(this);   
     var dataX = await data2.json();
    //  console.log(dataX);
    }catch(error){
        console.log(error.message);
    }
};
harryPotter();

// 12-01-2025
// forEach() :- method  used to iterate over the elements of an array a 
//                   specified function (Callbacks ) to each element
//            array.forEach(callback);
//            element,index,array are provided

var int = [1,2,3,4,5];


int.forEach(double);
// int.forEach(integers);

function double(element,index,array){
      array[index] = element * 2;
}

// function integers(element){
//     console.log(element + 1);
// } 


//13-01-2025
// forEach
var number = [1,2,3,4,5,6];

number.forEach(cube);
number.forEach(square);
number.forEach(increment);

function square(element ,index, array){
    console.log(array[index]= Math.pow(element,2));
};

function cube(element ,index, array){
    console.log(array[index] = Math.pow(element,3));
};

function increment(element ,index, array){
    console.log( array[index] = element + 1);
}

var carCompany = ["tata" , "mahindra" , "force" , "bajaj"];

carCompany.forEach(cars);

function cars(element ,index , array){
    console.log(array[index] = element.toUpperCase());
}

var movie = {
    name : "psv sai mahesh",
    age : 24,
    bio : function (){
        console.log("Myself",this.name, "and my age is",this.age);
    } 
}
movie.bio();
// 14-01-2025

const vegetable = {
    veggies : "veggies are best for health",
    nonVeg : "in nonVeg we get a lot of protein ",
    healthly : function(){
        console.log(this.nonVeg);
    }
}

const webSeries = {
    action : "daredevil , iron fist , the originals",
    scifi : "Strange Things , Loki , dark",
    genre : function() {
        console.log(this.scifi);
    }
}
webSeries.genre();
vegetable.healthly();

function saipallavi (actress){
    this.acting = actress;
    console.log(this)
}
const acting = new saipallavi("One of the best actress in movie industry");



