// 13-11-2024
const Movie ={
    action : ["Matrix","American Sniper","Dhoom 2"],
    thiller : ["Breath","nun","Lucy"],
    comedy : ["Bad Boys", "Rush Hour", "jumaji"],
    scifi : ["inception","Alita","gravity"],
    genre : function (){
        return `Here are some thiller movies,${this.thiller}!`;
    },
    genre1 : function(){
        return `Here are soome action movies ,${this.action}!`;
    },
    genre2 : function(){
        return `Here are some comedy movie,${this.comedy}!`;
    },
};
console.log(Movie.genre());
console.log(Movie.genre1());
console.log(Movie.genre2());
console.log(Movie.scifi);

const movie = () => {
    johndeep = ["Pirates of Caribean","Wanda chocolate factory","Pirate of caribean 2"];
    Jackiechan = ["Rush Hour","Karate Kid","Drunken Master"];
    leanorddicaprio = ["Incepetion","Titanic","shutter island"];

    johndeep.push("Edward Scissorhands");
    Jackiechan.unshift("The Spy next door");
    leanorddicaprio.unshift("The Departed");

    var john = johndeep.filter((element)=>element.length>=3);
    var jackie = Jackiechan.filter((element)=>element.length>=1); 
    var leanord = leanorddicaprio.filter((element)=>element.length>=1);

    john.map((element)=>console.log(element)); 
    jackie.map((element)=>console.log(element));
    leanord.map((element)=>console.log(element));

    console.log(john);
    console.log(jackie);
    console.log(leanord);
};
movie();

const fetch = async() => {
    var weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = false;
            if(data){
                resolve("Too Hot");
            }else{
                reject("Too cold");
            }
        },2000);
    });
    try{
        let result = await weather;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
fetch();

// Question: Given an array of numbers, use map to create a new array where each number is doubled.
var number = [2,3,4,5,6];
number.map((number)=>console.log(number*2));
// Question: Given an array of numbers, use map and filter to create a new array where each numberv should be squared.
function Square() {
var squareOfNumbers = [3, 4, 5, 6, 9];
let squ = squareOfNumbers.filter((num)=>num>2);
squ.map((squ)=>console.log(squ*squ));
console.log(squ);
}
Square();

