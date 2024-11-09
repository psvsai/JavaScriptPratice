// map and filter practice
// async function with
let data = () =>{ 
     movie = ["bahubali","hello","eega","kanguva"];
     hero  = ["prabhas","akhil","nani","surya"];
     director = ["rajamouli","surender reddy","rajamouli","siva"];
     let result = movie.filter((data)=>data.length>5);
     console.log(result);
     hero.map((data)=> console.log(data));
}
data();

function webseries(){
    genre = ["sitcom","romance","action","drama"];
    movie = ["friends","vampire diaries","blacklist","peaky bilnder"];
    year = ["1992","2008","2012","2014"];
    let response = year.filter((data)=> data>2000);
    console.log(response);
    let movie1 = movie.filter((data)=>data.length>6);
    console.log(movie1);
    response.map((data)=>console.log(data));
    movie1.map((mov)=> console.log(mov));
}
webseries();

// const fun = () => {
//     whatToLearn = [""]
// }

// 09-11-2024
// learning about `hello,${name}!
// template literals  that provide a way to create strings with embedded expressions and multiline support.
// They use backticks (`) instead of regular quotes (' or "),
// allowing you to embed variables and expressions directly within the string by wrapping them in ${}.
function greet(name){
    return `Hello,${name}!`;
}
console.log(greet("Mahesh"));
// Write a function that takes two numbers and returns their sum. Call the function with different numbers.
function sum(a,b){
    return `Sumoftwonumbers,${a+b}`;
}
console.log(sum(6,7));
 
function sum2(a=2,b=3){
    return `Sum,${a+b}`;
}
console.log(sum2(3,3));

function whatIsURName(venkatsai){
    return `MyFullNameIs,${venkatsai}!`;
}
console.log(whatIsURName("Sri Venkata SAi Mahesh"));

function surname(jamesbond){
    return`My Surnmae is,${jamesbond}@`;
}
console.log(surname("pasupuleti"));

function you( name1, name2){
    return `Hello,${name1} = ${name2} !`;
}
console.log(you("Sri Venkata" , "Sai Mahesh"));

function synonyms(fetch , integrate){
    fetch = ["summon","bring"];
    integrate = ["merge","combine"];
    return `Similar Words,${fetch}! getting same words ${integrate}!`;
}
console.log(synonyms("call , join"));