// Q:Use array destructuring to assign the first three elements of an array to separate variables. 
// Log these variables.
var arr = [3,4,5,6,7];
var [first,second,third] = arr;
console.log(first,second,third);

// Q: Use the spread operator to merge two arrays into a new array and add a new element at the end. 
// Log the new array.
var arr1 = [5,6,7,8,9];
var arr2 = [1,2,3,4,];
var arr3 = [0];
var mergeArray = [...arr3,...arr2,...arr1] ;
console.log(mergeArray);

// Q: Merge two objects into a new object using the spread operator. 
// Log the resulting object.
var obj1 = {name :"PSV Sai Mahesh" ,city :"Hyderabad"};
var obj2 = {  Age :24 , pincode : "500005"};
var mergeObj = {...obj1,...obj2};
console.log(mergeObj);
// Q: Write a function that takes an object and updates its city property. Log the updated object.
function place(employee ,employerCity){
    employee.city = employerCity;
    return employee;
   
}
var employee = {name:"PSVSai Mahesh",city :"Vizag"}
console.log (place(employee,"Hyderabad"));
// Q: Create an array of objects representing different movies. Use a loop to log the title of each movie.
// Q: Write a function that filters out even numbers from an array and returns the remaining odd numbers. 
// Log the result.



///.************************      CHAT GPT        ****************************////

// Write a function updateAge that takes a person object and a new age as arguments,
//  updates the age property of the object, and returns the updated object.
function updateAge(personName,personAge){
    personName.age = personAge;
    return personName;
}
var personName = {name:"narayana murty" ,age : 47};
console.log(updateAge(personName,78));

// Create a function addHobby that takes a person object and a hobby string, adds the hobby to a hobbies 
// array inside the object (creating it if it doesn’t exist), and returns the updated object.
//****** if(!Array.isArray) */
function addHobby(personEmp,personIns){
      if(!Array.isArray(personEmp.hobbies)){
        personEmp.hobbies = [];
      }
      personEmp.hobbies.push(personIns);
      return personEmp;
}
var personEmp = {name:"PSVSAI MAHESH" , Age : 24};
var resultHob = addHobby(personEmp ,"CRICKET,BADMINTON");
console.log(resultHob);




function addTOArray(input , newArray){
    if(!Array.isArray(input)){
        console.log("input is not an array , Initializing as an empty array");
        input =[];
    }
    input.push(newArray);
    return input;
}
// example 1 :-
let notAnArray = "Hello";
let result1 = addTOArray(notAnArray, "world");
console.log(result1);
// example 2 :-
let exsitingArray = [1,2,3,4];
let result2 = addTOArray(exsitingArray,5);
console.log(result2);
// example 3 :-
let undefined;
let result3 = addTOArray(undefined , "Hi,guys");
console.log(result3);


// ** example **//
function existingArray(stock1,stock2){
    if(!Array.isArray(stock1.priceDropped)){
       stock1.priceDropped= [];
    }
    stock1.priceDropped.push(stock2);
    return stock1 ;
}
let stock1 = {nameOfStock: "Zomato" , bid: 283 }
console.log(existingArray(stock1, 273));

function practice(isAnArray,isArray){
    if(!Array.isArray(isAnArray.director)){
       isAnArray.director = [];
    }
    isAnArray.director.push(isArray);
    return isAnArray;
}
let isAnArray = {movie : "Inception" , Hero : "Decaprio"};
console.log(practice(isAnArray,"Chrisoper Nolan"));


