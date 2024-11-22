//21-11-2024
const animation = async() => {
   const action = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const isItWorth = false;
        if(isItWorth){
            resolve("One Piece is the best anime to watch at any time ");
        }else{
            reject("It is the first anime in long run of direction ");
        }
    },1000)
   });
   try{
    const result = await action;
    console.log(result);
   }catch(error){
    console.log(error);
   }
}
animation();

const food ={
    breakfast : ["Dosa","Bonda","vada","idle","pesarattu"],
    lunch : ["Rice with curry","pulao","biryani","ragi sangati"],
    dinner : ["chapati","Jonna Rotte","Naan"],
    appetite : function(){
        return `Breakfast is the best intake for the day and help to heal th appitate and list are, ${this.breakfast}!`
    }
}
console.log(food.lunch);
console.log(food.appetite());

var movie = ["incepetion","intersellar","black Adam","skyhigh"];
var output = movie.map((data)=>data.toUpperCase());
console.log(output);

var quote = "better three hour soon than a minute too late";
var quote1 = quote.toUpperCase();
console.log(quote1+ "     By WILLIAM SHAKESPEARE");

// 22-11-2024
// Q: Write a function that takes a string as a parameter and returns the string reversed.

function cricket(teams){
    return teams.split("").reverse();
}
console.log(cricket("INDIA"));

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello")); // Outputs: olleh

function weather(city){
    return city.split("");
}
console.log(weather("New York"));

function weather1(city){
    return city.split("").reverse();
}
console.log(weather1("Tokyo"));

function weather2(city){
    return city.split("").reverse().join("");
}
console.log(weather2("London"));