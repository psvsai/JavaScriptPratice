//02-11-2024
let a = ["hi","Myself","is","Mahesh"];
a.unshift("psvsaiMahesh");
a.push("pasupuleti");
console.log(a);
console.log(a[2]);
console.log(a[3]);

let b = 40;
b=50;
console.log(b);

let quote = "everything in the world works for money";
let up = quote.toUpperCase();
console.log(up);

let sent = "EVERY DREAM HAVE A SOUL,CATCHIG THE GOAL IS MORE IMP";
let down = sent.toLowerCase();
console.log(down);

//ES5 function calling
function hello(){
    console.log("Have Faith On U r self");
}
hello();
//ES5 function return
function night(String1,String2){
    return String1+String2;

}
let nam = night("SAI " ,"MAHESH");
console.log(nam);

//ES6 functions
const morning = (String1,String2) => String1+String2;{
    console.log("Plasent "," Refershing");
}

const fetchdata=(data) => data;{
    console.log(fetchdata("success"));
}
