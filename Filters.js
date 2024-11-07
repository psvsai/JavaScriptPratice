let arr1 =[1,2,3,4,5,6];
let responce = arr1.filter((data)=>data<2);
arr1.map((data)=> console.log(data));
console.log(responce);

// ex form internet
const words = ['bad','tap','hot','heat','result','climate'];
const result = words.filter((words)=> words.length >= 3 );
console.log(result);

let arr = [1,2,3,4,5,6,7];
let ans = arr.filter((data)=>data>2);
arr.map((Element)=>console.log(Element))
console.log(ans);

let movie = ["ride","dasara","hi nanna","MCA"];
let res = movie.filter((nani)=> nani.length > 4)
console.log(res);

let fun = [ 3,5,7,9,10 ];
let big = fun.filter((min)=>min >= 7)
console.log("output is greater than 7 " + big);

const fullStack = {
    frontend : ["HTML","css","JAVASCRIPT"],
    backend : ["java","springboot","postman"],
    database : ["MySQL","MONGO DB"]
  
}
console.log(fullStack.backend);
console.log(fullStack.frontend);

function FSD(){
    frontend = ["HTML","css","JAVASCRIPT"];
    backend  = ["java","springboot","postman"];
    database = ["MySQL","MONGO DB"];
  framework = ["React Js", "SpringBoot"];
  let front = frontend.filter((data)=> data.length>3);
  console.log(front);
}
FSD();
// const age = () =>{
     
// }
