//Q1: Create variables to store your name, age, and city using let, const, and var.
// Try changing the value of each variable and observe what happens.
let name = "psvsai";
name = "mahesh";
const age = 24;
//age = 25;
var city = "Hyderabad";
city = "Mumbai";
console.log(name);
 console.log(age);
console.log(city);
//Q2: Declare a string variable with your favorite quote. Use a string method to convert it to uppercase.
let myself = "succes make u happy,failuer taughts u experince";
let up = myself.toUpperCase();
console.log(up);
// lowercase 
let myselftwo = "GO CONFIDENTLY IN THE DIRECTION OF YOUR DREAMS! "
let low = myselftwo.toLowerCase();
console.log(low);
//Q: Create a number variable to represent your age. Write code to increment the age by 1.
let ageone = 24;
let add = ageone+1;
console.log(add);
//Q: Declare a boolean variable to indicate if you are a student. Toggle its value from true to false.

// Q: Create an array of your favorite fruits. Add a new fruit to the beginning of the array//.
var fruits = ["Apple","Banana","cheery","Guava"];
fruits.unshift("Water Melon");
console.log(fruits);
// Q: Create an array of your favorite fruits. Add a new fruit to the end of the array//.
var heros = ["Bhagat singh","Subash Chandra Bose","Alluri seetha rama raju"];
heros.push("chandra shekar azad");
console.log(heros);

// Q: Declare an object representing a car with properties: make, model, and year. Log the car’s make to the console.
var car = {
    make : "SUZUKI",
    model : "ciaz",
    year : 2017
};
console.log(car.make);
// Q: Create a variable with a null value and another with an undefined value. Print both to the console.
var nothing = null;
var noLimit = undefined;
console.log(nothing);
console.log(noLimit);
// Q: Declare a string variable with your full name. Use a string method to extract and log just your first name.
var Strname = "Pasupuleti Sri Venkata Sai Mahesh";
console.log(Strname.split(" ")[0]);
// Q: Create an object representing a book with properties title, author, and pages. Add a new property genre to the object.
var book = {
    title : "Atomic Habits",
    author : "James Clear",
    pages : 219
};
book.genre = "its helps to gain discipline and creating habits by using simple task";
console.log(book.title);
console.log(book.genre);
// Q: Declare a variable using var inside a function. Try accessing this variable outside the function. What happens?
function urself(){
    name = "psvsai";
    age = 24
}
name = "Mahesh";
console.log(name);


// // // *****Step 2: Learning Functions***** // // //


// Q: Write a function that takes two numbers as arguments and returns their sum. 
// Call the function with two numbers and log the result.
function addingTwoNum(a,b){
    return a+b;
}
console.log("Sum Of Two Number are  = "+ addingTwoNum(10,40));
// Q: Convert the above function into an arrow function and log the result.
const sumOfTwoNum = (a,b) => a+b;
console.log("adding two num by using Arrow Funtion  = " + sumOfTwoNum(50,50));
// Q: Write a function that returns the square of a number. 
// Use default parameters to make the number default to 2 if no argument is provided.
const squareOfTwoNum = (a) => a*a;
console.log("( By using Arrow function =)= Square root of 2 is  = " + squareOfTwoNum(89));

function square (a){
    return a*a;
}
console.log("Squre of 25 = " + square(25));
// Q: Write a function that takes a string as a parameter and returns the string reversed.
function team(cricket){
    return cricket.split("").reverse().join("");
}
console.log(team("Nepal"));
// Q: Create a function that logs a greeting message using a name passed as an argument..
// Call the function multiple times with different names.
function greeting(name){
    return `Hello,Good Morning and Have a nice day,  ${name}!`;
}
console.log(greeting( "psvsai"));
console.log(greeting( "Sri"));
// Q: Write an Immediately Invoked Function Expression (IIFE) that logs "This function runs immediately!" to the console.
// Q: Write a function that returns an object with properties name, age, and city. Call the function and log the returned object.
// Q: Write a recursive function that calculates the factorial of a number. Test it with the number 5.
// Q: Write a function that takes a callback function as an argument and executes it. Test it with a callback that logs a message.
// Q: Write a  function that logs the square of a number passed as an argument. Use arrow function syntax for this task.