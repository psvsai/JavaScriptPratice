// 01-01-2025
// Why is it a Mutator Function?
//     A mutator function is a function that modifies or mutates the state of an object or its properties.
// In this case:
//     The function person takes an object (newName) and modifies its name property by assigning it a new value (oldName).
//     The original object is directly altered, as objects in JavaScript are passed by reference.
function person(newName,oldName){
   newName.name = oldName;
   return newName;
}
var newName = {name:"Jhon Cena" , work:"Wrestler"};
console.log(person(newName,"john antony cena" ));

// does'nt exist method
function car(suzuki,ciaz){
    if(!Array.isArray(suzuki)){
      console.log("Array  is not initialized");
      suzuki= []
    };
    suzuki.push(ciaz);
    return suzuki;
}
// Ex :-1
var model = {carModel:"suzuki",modelYe:2017};
var result1 = car(model,"year2018");
console.log(result1);

//Ex :-2 
var model2 = [1,2,3,4,5];
var result2 = car(model2,"2022");
console.log(result2);

//does'nt exist
function data(movies,mAction){
   if(!Array.isArray(movies.action)){
    movies.action = [];
   }
   movies.action.unshift(mAction);
   return movies;
}
var movies = {name:"Mission Impossible", Hero : "Tom Cruise"};
var ans = data(movies,"Mission Impossible 1,2,3,4,5,6,7");
console.log(ans);

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

// 2-01-2025

function stocks(presentValue , investedValue ){
      if(!Array.isArray(presentValue.value)){
        console.log("Array is not present in the function");
        presentValue.value = [];
      }
      presentValue.value.push(investedValue);
      return presentValue;
}
var presentValue ={nameOfTheStock : "Rajesh Telecom" , valueBeforeOneMonth : 612};
var result5 = stocks(presentValue, "presentValue is = 1117");
console.log(result5);

var values = ["Zomato","D-mart", "AdaniEnterprise ","Vishal Mega Mart"];
var result6 = stocks(values,"yes bank");
console.log(result6);

function coc(base,attack){
    if(!Array.isArray(base)){
        console.log("Array is not Intialized");
        base = [];
    }
    base.push(attack);
    return base;
}
 var bonusStars = [2,4,5];
 var coc1 = coc(bonusStars,"1,3");
 console.log(coc1); 

 var bonusStart1 = {singlePlayerAttack :"Practice match and provide some loot", multiplayerAttack: "Real attack in the game and provide loot and tropies"};
 var coc2 = coc(bonusStart1, "wars is extra pal");
 console.log(coc2);

 //async and await function
 const lang = async() =>{
    var data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var option = undefined;
            if(option === undefined){
                reject("Without language there is no proper communication");
            }else{
                
                resolve("Language is a great scipt to understand ");

            }
        },1000);
    });

    try {
        var result = await data;
        console.log(result);
    }catch(error){
        console.log("Error : " , error);
    }
 }
 lang();
 
 //  Use the map method to create a new array that contains the
 //  square roots of numbers in an existing array. Log the new array.
 var numbers = [1,4,9,16,25,36,49,64,81,100,121,144,169,196,225];
 var squRoots = numbers.map(num = Math.sqrt);
 console.log(squRoots);

//  Q: Use the filter method to create a new array containing only strings that start with the letter "A" from
//  an existing array of strings. Log the new array.

var vocabular = ["Antenna","Ambulance","Automatic","Acoustic","Antique","Basket","Ball","Best"];
var string = vocabular.filter(vocabular => vocabular.startsWith("B"));
console.log(string);

// Q: Use the reduce method to calculate the product of all numbers in an array. Log the result.
var integers = [12,4,5,2];
var intAns = integers.reduce((acc,curr)=>acc*curr);
console.log(intAns);

// doesnt exist 
function mobile(oldMobile,newMobile){
     if(!Array.isArray(oldMobile.google)){
        oldMobile.google = [];
     }
     oldMobile.google.push(newMobile);
     return oldMobile ;
}
 var mobile1 = {name :"Google" , version : "Android 15"};
 var resMobile  = mobile(mobile1 ,"Model = Pixel");
 console.log(resMobile);