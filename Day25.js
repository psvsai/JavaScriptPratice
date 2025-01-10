// 28-12-2024 
//2-01-2025

// Q: Use the map method to create a new array that contains the square roots of numbers in an existing array. Log the new array.
     var squRoots = [1,4,9,16,25];
     var result = squRoots.map(num=>Math.sqrt(num));
     console.log(result);
     var num = 15;
     console.log(num*num);
// Q: Use the filter method to create a new array containing only strings that start with the letter "A" from
//  an existing array of strings. Log the new array.
var things = ["Apple","Basket","Anchor","Ant"];
var string = things.filter(things => things.startsWith("A"));
console.log(string);

// Q: Use the reduce method to calculate the product of all numbers in an array. Log the result.
var integers = [2,4,6,8,3,5,7,9];
var answer = integers.reduce((acc,curr)=>acc*curr ,1 );
console.log(answer);
// Q: Use the find method to locate the first number in an array that is greater than 10. Log the result.
var greaterInt = [3, 15, 7, 11, 2, 30 ];
var ans = greaterInt.find(num => num > 10);
console.log(ans);
// Q: Use the some method to check if any string in an array has a length greater than 5. Log the result.
// Q: Use the every method to check if all numbers in an array are positive. Log the result.
// Q: Write a function that sorts an array of numbers in descending order. Log the sorted array.
// Q: Chain the filter, map, and reduce methods to filter out even numbers from an array, square the remaining numbers, and find their sum. Log the result.
// Q: Use the reverse method to reverse the order of elements in an array. Log the resulting array.
// Q: Use the flat method to flatten a deeply nested array into a single-level array. Log the resulting array.