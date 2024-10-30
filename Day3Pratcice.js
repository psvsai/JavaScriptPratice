//Today agenda  is about Ascyn and Await theory part 
//Assignment Practice https://github.com/Academix1/javascriptAssignment/blob/main/Excercises.md
// Q1: Declare a boolean variable to indicate if you are a student. Toggle its value from true to false.
// Q2: Create an array of your favorite fruits. Add a new fruit to the beginning of the array.
// Q3: Declare an object representing a car with properties: make, model, and year. Log the car’s make to the console.
// Q4: Create a variable with a null value and another with an undefined value. Print both to the console.
// Q5: Declare a string variable with your full name. Use a string method to extract and log just your first name.
// Q6: Create an object representing a book with properties title, author, and pages. Add a new property genre to the object.
// Q7: Declare a variable using var inside a function. Try accessing this variable outside the function. What happens?

// q1 Ans:-
var student = false ;
var student = !student ;
console.log(student);
//q2 Ans:-
let fruits = ["apple","banana","cherry","guava"];
fruits.unshift("grapes");
console.log(fruits);
