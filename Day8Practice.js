//05-11-2024
//
let color = ["blue","white","yellow","Orange"];
color.unshift("Black");
color.push("Green");
console.log(color);
console.log(color[0]);
console.log(color[4]);
// Object
 let movie = {
    title: "Amaran",
    actor: "siva karthikeyan",
    actress: "sai pallavi",
    year: 2024
 };
 console.log(movie.actress);

// es5 function with calling function
function  movie1(){
   console.log("Amaran");
}
movie1();

// ES5 return function parameters
function data(String,String1){
    return String + String1;
   
}
let result = data("debit","credit");
console.log(result);

// Arrow functions
let greet = (a,b,c,d) => a+b+c+d;{
  console.log(greet(4,5,6,7));
}
// async function 
async function fetchdata(){
   let data = new Promise((resolve )=>{
     setTimeout(() => resolve("Successed"),2000)
   });
   let result = await data;
   console.log(result);
 }
 fetchdata();

//async function with parameters 
 async function fetchdata(){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const fetch = true;
            if(fetch){
                resolve("Data transfer is completed");
            }else{
                reject("Data transfer is incomplete");
            }
        },1000);
    });
    try {
        let result = await data;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
 }
 fetchdata();