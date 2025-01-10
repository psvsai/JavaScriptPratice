// 31-12-2024
// adding one more title in the object
function movie(oldMovie,newMovie){
    oldMovie.title3 = newMovie;
    return oldmovie;
}
var oldmovie = {title1:"Racha",title2:"RRR",title4:"Rangasthalam"};
console.log(movie(oldmovie,"Gamechanger" ));

//changing the title name of the movie
function dc(oldtitle,newtitle){
  newtitle.title = oldtitle;
  return newtitle;
}
var newtitle = {title: "Justic League" ,director :"Zack Snyder" };
console.log(dc("Zack Snyder's Justice League" , newtitle));

//changing the weather city name 
function weather(city,country){
    city.place = country;
    return city; 
}
var city = {name : "Tokyo" , place:"japan"};
console.log(weather(city,"Japan"));

//changing stock name and value
function stock(value,bid){
  value.currentValue = bid;
  return value;
}
var value = {stockName:"Swiggy" , currentValue :586};
console.log(stock(value,563));

function todo(practice,learn){
  practice.whatToLearn = learn;
  return practice;
}
var practice = {needToDo:"JavaScript async and await and API", whatToLearn: "nothing"};
console.log(todo(practice,"HTMl practice again and JS async practice"));

//if doesn't exist using array
function data(array1,array2){
  if(!Array.isArray(array1.addingArray)){
    array1.addingArray =[];
  }
  array1.addingArray.push(array2);
  return array1;
}
var array1 = {anime : "One Piece" , Character:  "Luffy "};
console.log(data(array1,"Eiichiro oda"));

//async and await function
const fetchingdata = async() => {
    var data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const nothing = true;
            if(nothing){
                resolve("Practing Asynca and await function ");
            }else{
                reject("Not practing the js");
            }
        },1000);
    });
     try{
        const result = await data;
        console.log(result);
     }  catch(error){
      console.log(error.message);
     }
}
fetchingdata();

// try catch 
// const tryMethod = async() =>{
//     try {
//         var response = await fetch(" https://jsonplaceholder.typicode.com/posts");
//         var result = await response.json();
//         console.log(result);
//     }catch(error){
//         console.log(error.message);
//     }
// }
// tryMethod();

// doesn't exist 
function climate(cool ,hot){
   if(!Array.isArray(cool)){
   console.log("Array is not initilized");
   cool = [];
   }
   cool.push(hot);
   return cool;

}
var isArray = [10,11,12,13,14,15,16,17,18];
var result1 = climate(isArray, "10-18");
console.log(result1);

var isNotArray = "celisus";
var result2 = climate (isNotArray, "temperature");
console.log(result2);

const summary = {
    Endofyear : "Today is the last day of the year 2024 ",
    tomorrow : "2025 is going to total different for me",
    }
const summary2 = {
    Endofyear : "2024 is not a bad year parting for so hard is good ",
    tomorrow  : "Hangover will effect for the whole day",

}

const {Endofyear,tomorrow} = summary2;
console.log(summary2);


