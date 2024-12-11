// array destructuring we have to use [] .
var a = 4;
var b = 6;
b = 7;
var c = 20;
[a,b,c] = [b,c,a]
console.log(a,b,c);

const num = [1,2,3,4,5,6,7,8,9,];
[num[0],num[5]] = [num[5],num[0]]
console.log(num +1);

const names = ["sri", "venkata","sai","mahesh"];
[names[2],names[3]] = [names[3],names[2]];
console.log(names);

// object destruction we have to use {} .
const student = {
    name : "psvsai",
    age :24,
}
const {name12  ,age } = student;
console.log(name12);
console.log(age);

const personIdentity = {
    name1 : "Mahesh",
    age1 : 25,
    sex: "Male"
}
const {name1 , age1 , sex} = personIdentity;
console.log(name1);
console.log(age1);
console.log(sex); 

const onepiece = {
    name : "Luffy",
    job : "Captain",
    ship : "Sunny" 
}
const onepiece1 = {
    name : "Zoro",
    job  : "Swordsman",
    ship : "sunny"
}
const onepiece2 = {
    name : "Nami",
    job : "Navigation",
    ship : "sunny",
}
const onepiece3 = {
    name : "Upsop",
    job : "Sniper",
    ship : "Sunny"
}
const onepiece4 ={
    name : "Sanji",
    job : "Chef",
    ship: "sunny"
}
const {name, job , ship} =  onepiece1;
console.log(name);
console.log(job);
console.log(ship);

function moviesCategory(){
const action = {
    movie : ["Rush hour","Mission Impossible","Avengers","Druken Master","Ninja Turtile"],
    year : [2004,1999,2016,2000,2012],    
}
const comedy = {
    movie : ["deadpool","Bad boys","mystry murder","jumanji"],
    year : [2016,2006,2013,2015],
}
const fantasy= {
    movie : ["Harry Potter","Jumanji","Jurastic park","Narnia"],
    year : [2001,2015,2013,2005]
}
const {movie,year} = comedy;
console.log(movie);
console.log(year);

}
moviesCategory();

// 02-12-2024

// object in nested object
function sitcom(){
var webseries = {
    nameOfTheSeries : "FRIENDS",
    yearOfRelease : 1992,
    character : {
        actorsName :["Ross","Chandler","Joey"],
        actressName : ["Monica","Rachel","Phobe"]
    },
    typeOfCharacter : {
         joey : "joey is a struggling actor, he is a foodie !",
         chandler : "chandler have a good job compare to everyone in the friends group,he is a funny guys of all !",
         ross : "Ross is a lecture and a researcher,he divorced for three times !",
         monica : "Monica is a chef,married to chandler,sister to Ross, ! ",
         rachel : "Rachel is more into fashion ,she has a more fashion sense compare to all of them in the group !",
         phobe : "Phobe is a massuger,she is so  silly ,she a singer od smelly cat!",
    }
}

console.log(webseries.nameOfTheSeries);
console.log(webseries.yearOfRelease);
console.log(webseries.character.actorsName);
console.log(webseries.character.actressName);
console.log(webseries.typeOfCharacter);
}
sitcom();

// function in nested object
 function haikyuu (){
    genre = "anime";
    

}

// function in nested function

