// 14-11-2024
// Maps Practice question
// Question: Given an array of numbers, use filter to create a new array containing only the odd numbers.
var arr = [1,2,3,4,5,6,7];
var result = arr.filter((arr)=>arr%2);
result.map((result)=>console.log(result*result));
console.log(result);
// Question: Given an array of numbers, use filter to create a new array containing only the even numbers.
// var num = [1,2,3,4,5,6,7,8];
// var even = num.filter((num)=>num);
// console.log(even);

// Question: Given an array of strings, use map to create a new array where each string is capitalized.
const car= ["ciaz","safari","thar","ambastor"];
const cap = car.map((data)=>data.toUpperCase());
console.log(cap);

const quote = "practice make man perfect";
const result1 = quote.toUpperCase();
console.log(result1);

// question: Given an array of words, use filter to create a new array that includes only the words with more 
// than 5 characters.
const names = ["Mahesh","Sai","Venkata","Sri","Pasupuleti"];
const name = names.filter((data)=>data.length>5);
console.log(name);
// Question: Given an array of numbers, use map to create a new array where each number is squared.
const squareOfGivenNunmbers = [12, 34, 56, 78, 90];
const ans = squareOfGivenNunmbers.map((squareOfGivenNunmbers)=>squareOfGivenNunmbers*squareOfGivenNunmbers);
console.log("Squares of given numbers are = "+ ans);
// Question: Given an array of user objects, use map to create a new array of usernames.
// const array2 = {
//     obj1 : ["username:Psvsai","id=1"],
//     obj2 : ["username:Mahesh","id=2"],
//     obj3 : ["username:Venkata","id=3"],

// };
// const username = array2.map((data)=>{
//     return data[0].split(":")[1];
// });
// console.log(array2.obj1);
// console.log(username);
//                             or 
const users = [
    { id: 1, username: "john_doe" },
    { id: 2, username: "jane_doe" },
    { id: 3, username: "alice" }
  ];
const response = users.map((username)=>username.username);
console.log(response);

const onepiece = {
    crew : ["luffy","zoro","sanji","nami","copper","upsop","robin","frakie","Jinbi","brook"],
    shipname : "Thousand Sunny",
    NumOfCrew : 9,
    summary : function(){
        return `Onepiece is a great anime in the world and top rated anime in the manga,${this.shipname}! ,Number of crew are ${this.NumOfCrew}!`;
    }
};
console.log(onepiece.crew);
console.log(onepiece.summary());

const anime = [
    {Title : "Onepiece", year : 1999},
    {Title : "Naruto", Year  : 2000},
    {Title :"Dragon Ballz", year :1980}
];
const animeweb = anime.map((data)=>data.Title);
console.log(animeweb);
const year = anime.map((data)=>data.year);
console.log(year);

var movieName = ["Incepetion","Avatar","Intersellar","Matrix","Terminator"];
var upper = movieName.map(data=>data.toUpperCase());
console.log(upper);
 
const animation = async() =>{
     const nameAnime = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = onepiece;
            if(data){
                resolve("Most recommended");
            }else{
                reject("not recommended");
            }
        },1000);
     });
     try{
        const result = await nameAnime;
        console.log(result);
     }catch(error){
        console.log(error);
     }
}
animation();
  

