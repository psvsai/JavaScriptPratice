// 04-11-2024
// here I'm trying to practice about Async /await and creatimg objects im js
// for creating object u need a datatype to store and a block 

let countries = {
    largestPopulation :"India",
    Developed: "U.S.A",
    poorContinent : "Africa"
}
countries.howManyContinent = "seven" ;
console.log(countries.Developed);
console.log(countries.howManyContinent);

const todo = {
    workToBeDOne:"Practice JS async and Obj",
    planForTheDay: "afternoonJs and evening or night ",
    whattobelearninJS:"MAPS,Filters",
}
todo.WTBLinJAVA = "Basic from kunal for DSA RoadMap";
console.log(todo.whattobelearninJS);
console.log(todo.WTBLinJAVA);



function fetch(String){
    return String;
}
let result = fetch("data transfer is completed");
console.log(result);

// Async /await function
async function greet(){
    let greet = new Promise((resolve)=>{
        setTimeout(()=>resolve("Good Morning!"),2000);
    });
    let result = await greet;
    console.log(result);
}
greet();

// try and catch method in async.await function
async function weatherdata(){
    let data = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const temp = true;
        if(temp){
            resolve("sunny");
        }else{
            reject("cloudy");
        }

      },5000);
    })
    try{
        let result = await data;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
weatherdata();
