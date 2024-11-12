//10-11-2024
const greet = (name) => `Hello,${name}!`
console.log(greet("Mahesh"));

const addingTwoNum = (a=2,b=3) => `SumOfTwoNumbers are = ${a+b}`;
console.log(addingTwoNum(12,12));

let obj = {
    name : "Mahesh",
    age : 24,
    Hobbies : ["Cricket","Badminton"]

}
console.log(obj.Hobbies);

// 11-11-2024
// practice templates literal
function name(psvsai){
    return `Myself ,${psvsai}`;
}
console.log(name(("psv sai mahesh")));

function movies(name,name1) {
    return `Action ,${name}!,${name1}!`
}
console.log(movies("Rush Hour","Mission Impossible"));

function webseries(series1,series2,series3){
    return `Sitcom,${series1} ,${series2} ,${series3}`;
}
console.log(webseries("Friends","The Big Bang Theory","How I Met Your Mother"));

function multiple(a,b,c,d){
    return `Multiple oF four numbers ,${a*b*c*d}`;
}
console.log(multiple(4,5,6,7));

async function fetchdata(){
      let fetch =  new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const data = false;
        if(data){
            resolve("Transaction completed");
        }else{
            reject("Transaction Incompleted");
        }
       },1000);
    });
    try{
        const result = await fetch;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
fetchdata();
// https://github.com/Academix1/javascriptAssignment/blob/main/Day3.md
//Q1;- Create examples of each data type and print them to the console.
// Examples include numbers, strings (text), booleans (true/false), arrays (lists), and objects (collections of key-value pairs).
// ANSWER :
      let nam = "PSVSAI";
      let age = 24;
      let EligibleToVote = true;
      let bike = ["Himalayan 411", "RX 100","BMW Adventure"];
      let Yourself = {name:"psvsai", age:24};
      console.log("Myself = " + nam);
      console.log("My AGE = " + age);
      console.log("I'm eligible for vote = " + EligibleToVote);
      console.log("My favorite bikes are = " + bike);
      console.log( Yourself);
// Assignment: Write a function that takes two numbers and returns their sum. Call the function with different numbers.
       
      function day(morning){
        return `Good,${morning}!`;
      }
      console.log(day("night"));
// Convert your sum function from the previous step into an arrow function.
      const fitness = (gym) => `be Healthly by doing,${gym}`;
      console.log(fitness("running"));

//  Create an object to represent a book. Include properties like title, author, and pages. 
// Write a method to display a summary of the book.
let book = {
    title: "Atomic Habits",
    author : "James Clear",
    pages : 264,
    summary : function (){
          return `Book explains about how to decipline u self in now-a-days, ${this.title}`;
    }
};
console.log(book.title);
console.log(book.summary());

let today ={
    morning : "Running",
    afternoon : "Sleep",
    evening :"practice",
    session : function (){
        return `going to watch youtube ,${this.evening}`;
    }
} ;
console.log(today.morning);
console.log(today.session());

const meals = {
    morning : "poha",
    afternoon : "poha",
    evening : "Badam",
    intake : function food(meal){
        console.log(`taking food at afternoon ,${meal}`);
        return `Food intake for the day , ${jonnaroti}`;
    }
    
};
console.log(meals.afternoon);
console.log(meals.intake());