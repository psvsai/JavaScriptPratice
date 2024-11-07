//06-11-2024
// Practice maps and filters and function calling and return 
let movie = {
    title :["Orange","Ragansthalam","RRR","Magadheera","Racha"],
    genre : ["Romance","action","action","COmedy","drama"],
    year :  [2012,2019,2022,2014,2015]
    
};
console.log(movie.title);

let movie1 = ["Orange","Ragansthalam","RRR","Magadheera","Racha"];
movie1.map((title)=> console.log(title));

function cinemas(){
    title = ["Orange","Ragansthalam","RRR","Magadheera","Racha"];
    genre = ["Romance","action","action","COmedy","drama"];
    year =  [2012,2019,2022,2014,2015];
    console.log(title);
}
cinemas();

function chitralu(title,genre,year){
    title = ["Orange","Ragansthalam","RRR","Magadheera","Racha"];
    genre = ["Romance","action","action","COmedy","drama"];
    year =  [2012,2019,2022,2014,2015];
      title.map((data) => console.log(data));
      return year;
// here we have to check that by giving return value it consider only one variable
}
let result = chitralu();
console.log(result);

let weather = {
    city : "hyd",
    country : "india",
    temp :"20%",
    
    };
console.log(weather.city);

function weatherdata(){
    city = ["new york","tokyo","delhi","london"];
    country = ["america","japan","India","united kindom"];
    temp = "23%"
    console.log(country);
    city.map((data)=> console.log(data));//maps syntax variablename.map((anyword) => console.log(anyword);
}

weatherdata();

async function fetchdata(){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const value = true;
            if(value){
                resolve("data transfer is completed");
            }else{
                reject("data transfer is incomplete");
            }
        },5000);
    });
    try{
        let result = await data;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
fetchdata();

async function vote(){
    let RightToVote = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let age = 15;
            if(age>=18){
               resolve("Eligible for vote");
            }else{
                reject("Not eligible to vote");
            }
        },5000);
    });
    try{
        let result = await RightToVote;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
vote();