let hlo = ["hi","hello","ohayo","hola"];
let result = hlo.filter((data)=>data.length>2)
result.map((data)=>console.log(data));
console.log(result);

const todayWork={
      morning : "running",
      afternoon : "Clash of clan and vettaiyan",
      evening : "Deadpool and wolverine",
      night : function (){
        return `Today I didn't practice much aboout js , ${this.evening}!`
      }
};
console.log(todayWork.morning);
console.log(todayWork.afternoon);
console.log(todayWork.night());
// practice function calling without parameters
function practice(){
    let sum = 3+4;
    console.log(sum);
}
practice();
// practice calling function withour parameters
function practice1(){
    var frontend = ["HTMl","CSS","JavaScript"];
    var backend  = ["Java", "Postman"];
    var database = ["SQl","MongoDB"];
    var front = frontend.filter((element)=>element.length>=3);
    front.map((element)=>console.log(element));
    console.log(front);
    var back = backend.filter((element)=>element.length>3);
    back.map((element)=>console.log(element));
    console.log(back);
    var data = database.filter((element)=>element.length>=3);
    data.map((element)=>console.log(element));
    console.log(data);
    frontend.push ("React js");
    backend.push ("Springboot");
    database.push ("postgres");
    console.log(frontend);
    console.log(backend);
    console.log(database);
}
practice1();
// object 
const weather = (name1 , name2) => `present climate is ,${name1} , ${name2}`;
console.log(weather("sunny","rainy"));
// function inside the object
const thingToDoTmrw = {
    morning : "visiting temple",
    afternoon : "practice js and problem solving ques",
    evening : "play guitar and finish the draft",
    night : function() {
        return `try to maintain the discipline,${this.evening}!`
    }
} ;
console.log(thingToDoTmrw.morning);
console.log(thingToDoTmrw.afternoon);
console.log(thingToDoTmrw.night());
 