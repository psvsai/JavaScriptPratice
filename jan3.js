// 03-01-2025
function array(calculate){
    if(!Array.isArray(calculate)){
        calculate = [];
    }
    calculate.push();
    return calculate;
}
var adding = [ Price = 120,99];
var listOfItem = [" 1 Peri Peri Chicken", "1 French Fries"];
var res = adding.reduce((acc,curr)=>acc+curr);
console.log(listOfItem,res);

//06-01-2025


const movie = (newMovie,oldMovie) =>{
      if(!Array.isArray(newMovie.harry)){
        newMovie.harry = [];
      }
      newMovie.harry.push(oldMovie);
      return newMovie;
}
var cinema = {Title : "Harry Potter" , part : "prisoner of azkaban"};
var resHarry = movie(cinema,"Deathly Hallow");
console.log(resHarry);

const place = (newCIty,oldCity) =>{
    newCIty.city = oldCity;
    return newCIty;
}
var newCIty = {counrty : "INDIA" , city : "Kolkata"};
console.log(place(newCIty,"Calcutta"));


// const zomato = async() =>{
//     try{
//         var response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         var result = await response.json();
//         console.log(result);
//     }catch(error){
//         console.log(error.message);
//     }
// }
// zomato();

// What is the difference between var, let, and const? Write examples
//  to demonstrate their scope and hoisting behavior.
// Write a function where you use let and const correctly to avoid reassigning values where it's not needed.
var a= 3;
a=4;
let b =7;
b= 9;
const c = 10;
// c = 30;
console.log(a);
console.log(b);
console.log(c);

function practice(){
    let x=10;
    x=20;
    const y = 40;
    // y =50; for const we couldn't reassing the values
    console.log(x,y);
}
const y = 50
practice();

// Rewrite the following function using an arrow function:
// javascript
// Copy code
// function add(a, b) {
//     return a * b;
// }

const value = (a,b) => a*b;

// What is the difference between a regular function and an arrow function when it comes to the this keyword? Write examples to explain.
// function recentMovie (){
//     title = "Game Changer";
//     hero = "Ram Charan";
//     upcomingMovies = function movie1(){
//         console.log(this.title);
//     };
//     // console.log(hero);
// }
// // console.log(this.hero);
// recentMovie.upcomingMovies();

// Use template literals to format this string:
// javascript
// Copy code
const name = "John";
const age = 25;
const city = "New York";
console.log(`${name} is ${age} years old and lives in ${city}`);
// Output: "John is 25 years old and lives in New York."

// Given the following object:

// javascript
// Copy code
// const person = { name: "Alice", age: 30, city: "London" };
// Extract the name and city properties using destructuring.
// Write a function that accepts the person object as a parameter and destructures its properties inside the function.


// Perform array destructuring on the array:

// javascript
// Copy code
// const colors = ["red", "green", "blue", "yellow"];
// Extract the first two colors into variables.
// Use the rest operator to collect the remaining colors into another variable.



// Write a function with a default parameter to calculate the area of a rectangle. If only one argument is provided, assume it's a square.

// Spread and Rest Operators
// Merge two arrays using the spread operator:


// javascript
// Copy code
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// Write a function that accepts any number of arguments and returns their sum using the rest operator.


// Classes
// Create a Person class with name and age properties, and a method introduce that logs: "Hi, my name is [name] and I am [age] years old.".
// Extend the Person class to create a Student class that adds a grade property. Add a method study that logs: "[name] is studying."



// Modules
// Write two JavaScript files (mathUtils.js and app.js):
// mathUtils.js: Export a function add and a constant PI.
// app.js: Import and use add and PI.


// Promises and Async/Await
// Write a function that returns a promise. Resolve the promise with "Data loaded successfully" after 2 seconds.
// Convert the above function to use async/await syntax.


// Given the array:
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// Use map to double each number.
// Use filter to find all numbers greater than 2.
// Use reduce to calculate the sum of all numbers.


// Create a Set of unique numbers from the array:

// javascript
// Copy code
// const nums = [1, 2, 2, 3, 4, 4, 5];


// Create a Map to store the population of cities:

// javascript
// Copy code
// const cities = [
//     { name: "Tokyo", population: 37400068 },
//     { name: "Delhi", population: 28514000 },
// ];


// Use optional chaining to safely access the zip property of this object:
// const user = { address: { city: "Paris" } };


// Use the nullish coalescing operator to set a default value if a variable is null or undefined.

// Write a function to fetch data from an API (e.g., https://jsonplaceholder.typicode.com/posts) using fetch and async/await. Handle errors gracefully.
// Create a small to-do list app that uses ES6 features like classes, template literals, and arrow functions.
