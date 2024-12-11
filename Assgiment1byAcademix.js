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
(function(){
    console.log("Here is a Immediately Invoked Funciton Expression (IIFE)")
})();
(function(){
    console.log("This function runs immediately!");
})();
// Q: Write a function that returns an object with properties name, age, and city. Call the function and log the returned object.
function properties(){
     return{
        name :"PSV Sai Mahes",
        age  : 24,
        city :"Hyderabad",
     };
}
console.log(properties());
// Q: Write a recursive function that calculates the factorial of a number. Test it with the number 5.
// Q: Write a function that takes a callback function as an argument and executes it. Test it with a callback that logs a message.
function snapchat(callback){
    callback();
}
{
function callback(){
        console.log("Need to understand more deeply");
    }
}
snapchat(callback);
// Q: Write a  function that logs the square of a number passed as an argument. Use arrow function syntax for this task.
const squareOff = (a) => a*a;
console.log(squareOff(6));  


//  ***   Step 3: Working with Objects and Arrays *** \\\

// Q: Create an object representing a student with properties name, age, and grades. Add a method to the object that logs a summary of the student’s details.
// ans there are many ways to add methods in the object 
// Ex :-   adding object inside the block here, template litreal are used 
var student = {
    name : "PSV SAI",
    age  : 24,
    grade : "78%",
    summary (){
        return `person completed he's education in 2021 and seekin or searcing for a job Name = ,${this.name}, Age = ${this.age}, Grade = ${this.grade}! `;
    }
}
console.log(student.summary());
// ex :2 adding meathod outside the block
var student1 ={
    name : "Mahesh",
    age : 25,
    grade : "80%",
};
 student1.summary= function(){
    return `Mahesh searching for IT job ,he need to learn many skill that he can showcase infront of interviewer , Name = ${this.name}, Age = ${this.age}, Grade = ${this.grade}!`;
 };
console.log(student1.summary());

// Q: Use object destructuring to extract the name and age properties from the student object created above.
 var student2 = {
    nameOfCrew : "Luffy",
    ageOfCrew  : 14,
    fruit : "Gum-Gumno fruit",
    bounty : "12,34,56789 berry"
 }
 var {nameOfCrew ,ageOfCrew ,fruit,bounty} = student2;
 console.log(nameOfCrew);
 console.log(ageOfCrew);
 console.log(fruit);
 console.log(bounty); 
// Q: Create an object with a nested object for address. Access and log the city from the nested object.
const employee = {
    nameOfTheEmployee : "PSV Sai Mahesh",
    id : 201979,
    addressForVerification : {
        addressOfTheEmployee : "14-14 BDl Colony ,Badaghpet , Balapur(M) RR Dist",
        pincode : 500005,
        cityOfLiving : "Hyderabad",
    },
    education :{
        degree : "VDA Degree College",
        passedOut : 2021,
    },
};
const {nameOfTheEmployee,id,addressForVerification:{addressOfTheEmployee,pincode,cityOfLiving},education:{degree,passedOut}} =employee;
console.log(nameOfTheEmployee);
console.log(id);
console.log(cityOfLiving);

const sitcom1 ={
    nam:"Friends",
    year:1994,
    character : ["Ross","Rachel","Chandler","Monica","joey","phobe"] ,

    nam1 :{
        nam : "How I met your mother",
        year : 2008,
}
}
const {nam,year,character} = sitcom1;
console.log(nam);
console.log(year);
console.log(sitcom1.nam1.nam);
// Q: Create an array of numbers. Use a loop to log each number multiplied by 3.
var a = [2,4,6,8,10];
for (var i=0;i<a.length;i++){
    console.log(a[i]*3);
}
// Q: Use array destructuring to assign the first three elements of an array to separate variables. Log these variables.
var integers = [90,10,80,50];
var [first,second,third,fourth] = integers;
console.log("log of first value " + first);
console.log("log of second value " + second);
console.log("log of third value " + third);

// Q: Use the spread operator to merge two arrays into a new array and add a new element at the end. Log the new array.
// Q: Merge two objects into a new object using the spread operator. Log the resulting object.
// Q: Write a function that takes an object and updates its city property. Log the updated object.
// Q: Create an array of objects representing different movies. Use a loop to log the title of each movie.
// Q: Write a function that filters out even numbers from an array and returns the remaining odd numbers. Log the result.