const chess = {
    soldiers : "Can move one or two step ahead",
    pawn : "Bishop choose only straight path for where it's standing",
    bishop : "bishop choose vertical path ",
    knight : "Knight choose ' L ' shape path",
    queen : "queen can choose any path except 'L' ",
    king : function(name){
        return `Chess is a wonderfull game it's sharp your brain and help to solve the real-life problem,${name}@#$  `
    },
    game :function(){
    return `This game contains lot of logical thinking and berify observation ,${this.soldiers}!!!!!`
    }
};
console.log(chess.knight);
console.log(chess.king("if king is checkmate then game is over"));
console.log(chess.game());

function sunrisesiplAuction(){
    retained = ["Nitish","Abhishek","Cumming","Head","Kalseen"];
    bidPlayer = ["Shami","Kishan","Harshal Patel","Aruora"];
    spinners = ["Rahul Chahar","Adam Zampa"];
    coach = function(name){
        return `Sunrises are the least support home team in IPL history,but it changed in 2023,the effort by every player and created a hisotrical IPL score 287,Coach played a curcial role ${name}`
    };
    captain = function(name){
        return `Sunrises Capitan    "${name}" !`
    }
    console.log(coach("vettori"));
    console.log(captain("PAT CUMMINGS"));
    console.log(retained);
}
sunrisesiplAuction();

var fullName = "Pasupuleti Sri Venkata Sai Mahesh";
console.log(fullName.split(" "));
console.log(fullName.split(" ")[4]);
console.log(fullName.split("").reverse().join(""));

var number = [0,1,2,3,4,5,6,7,8,9,];
console.log(number.reverse());

// Write a function in function and returns an object with properties name, age, and city. Call the function and log the returned object.
// function dad(){       // when u r writing a function in function u have to return only for once and call it
//     return{
//         name : "Pasupuleti Srinivasulu",
//         age : 58,
//         bornPlace : "Jaggambotla Krishnapuram"
//     };
//     function amma(){
//         return{
//             name : "Pasupuleti Madhavi",
//             age : 48,
//             bornPlace : "Ardhaveedu"
//         }
//     }
//     amma();
    
// }
// dad();

function parents(){
    const nanna = {
        name : "Pasupuleti Srinivasulu",
        age :58,
        bornPlace : "Jaggambotla Krishanpuram"
    }
    const amma = {
        name : "Pasupuleti Madhavi",
        age : 48,
        bornPlace : "Ardhaveedu",
    }
    return {nanna,amma};
}

console.log(parents());

function siblings(){
    const anna ={
        name : "Pasupuleti Ravindra Naidu",
        age : 31,
        bornPlace : "Cumbum", 
    }
    const akka ={
        name : "Pasupuleti Manisha",
        age : 28,
        bornPlace : "Cumbum",
    }
    return{anna,akka};
}
console.log(siblings());

const selfDevelopment = async() =>{
    var discipline = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var coding = true;
            if(coding){
                resolve("Need to focus on skills in coding");
            }else{
                reject("improve step-by-step in Full Stack Development")
            }
        },1000);
    });
    try{
        var result = await discipline;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
selfDevelopment();

// Immediately Invoked Function Expression (IIFE)
const exampleFunction ={
    function : "BY using function we can call back to print the data",
    object : "In object we have to print the data outside the block",
    example : function(data){
        return `Here is the simple explaination about function and object,${data}!`
    },
    example2 : (function(){
        console.log("Checking this Immediate Invoke Function Expression (IIFE) will run first or not !")
    })()
}
console.log(exampleFunction.function);
console.log(exampleFunction.example("JavaScript"));

var num = [1,2,3,4,5,6,7,8];
var data = num.filter((data)=>data>=3);
data.map((data)=>console.log(data));
console.log(data);

var vocbulary = ["Elucidate","Pacify","Uproarious"];
var meaning = [" To make clear"," To calm","noisy"];
var fil = vocbulary.filter((data)=>data.length>6);
fil.map((data)=>console.log(data));
console.log(fil);