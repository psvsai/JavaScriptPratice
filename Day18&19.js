// 28-11-2024
// async function  fetchData(){
//     try{
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData();

// const weather = async() =>{
//     try{
//        var response = await fetch('https://api.weatherapi.com/v1/current.json?q=London');
//        var data = await response.json();
//        console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// weather();

function onlineGames(online){
    return online;
   }

console.log(onlineGames("online games are more addicted then offline games"));

// write a function with argument and excute .callback the function and log both functions?
function learning(practice){
    practice();
}
function codingNeedmorePractice(){
    console.log("I need to practice more than 4 hours a day");
}
learning(codingNeedmorePractice);

// executes

async function weather(){
    const data = new Promise((resolve)=>{
        setTimeout(()=>resolve(console.log("Need to practice")));
    },1000)
    const result = await data;
    console.log(result);
}
weather();
// 29-11-2024

var myself = "pasupuleti sri venkata sai mahesh";
var fullName = myself.replace('sri','sai').split(" ").reverse().join(" ");
console.log(fullName);

// async function fetchingData(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();
//     console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchingData();

// template literals 
function marvel(deadpool){
    return `Deadpool is a famous movie of all time in marvel,Ray Raynold plays a hero in the movie ,${deadpool}!`;
}
console.log(marvel("Deadpool and Wolverin"));

// maps
var num = [0,1,2,3,4,5,6,7,8,9];
var ans = num.filter((data)=> data>5);
 ans.map((data)=>console.log(data));

 var nam = "p s v sai mahesh"
 var nam1 = nam.split(" ")[1];
 console.log(nam1);

// creating a object and adding a method outside the block

const employee = {
    name : "psv sai mahesh",
    id : 2954,
    domain : "Developer",
};
employee.behaviour = function(){
    return `I'm a kind person and interactive person , friendly worker,seek to learn new things ,I can adapt any kind of enviroment ,${this.name}! , ${this.id}! ,${this.domain}! `;
}
console.log(employee.behaviour());


