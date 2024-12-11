// 05-12-2024

const movieToWatch = {
     movieWatched : "Mastu Shades unnayi ra nilo",
     movieToWatch : [ "kaa","pushpa 2"],
     anime : "haikyu!!",
     weekendMovieTime : {
        movie : "Amaran",
        cast : ["Siva Karthikeyan", "Sai Pallavi"],
     },
     watched : {
        holly : ["Jumanji","jumanji-2"],
        tolly : ["aye","Mastu shades unnayi ra nilo"],
     }
}
console.log(movieToWatch.weekendMovieTime);
console.log(movieToWatch.watched);

// function in object destruction
const todoList = {
    peru : "PSV Sai Mahesh",
    vayasu : 24,
    education : function(){
        return `things to do this week complete the js with all basic and error handling method ,${peru}!`;
    }
}
const {peru ,vayasu,education} = todoList;
console.log(education());
console.log(peru);

//object destruction and objects 

const bio = {
    nameOfURSelf : "PSV Sai Mahesh",
    placeOfLiving : {
        city: "Hyderabad",
        pincode : 500058,
        },
    education : {
     school : "Nagarjuna",
     juniorClg : "Narayana",
     DEgClg : "VDA Degree clg",
    },
    
};

const { nameOfURSelf,placeOfLiving:{city,pincode},education:{school,juniorClg,DEgClg}} = bio;
console.log(city);

function weather(){
    const city={
        place : "Hyderabad",
        temperature : 28,
        climate : "Cool", 
    };
    const city2 = {
        place : "Vizag",
        temperature : 32,
        climate : "Humdity",
    };
    const city3 = {
        place : "Mumbai",
        temperature : 29 ,
        climate : "Humdity",
    };
const {place,temperature,climate }= city3;
console.log(place);
console.log(temperature);
console.log(climate);
}

weather();

// Synchornize Method try catch (Error Handling)
function car (){
    var ciaz = false;
    try {
        var model = ciaz;
        console.log(model);
    }catch(error){
        console.log(error);
    };
}
car();

function vehicle(){
    try{
        var bike = undefinedvariable;
        console.log(bike);
    }
    catch(error){
        console.log("An Occured Error"  ,error.message);
    }
}
vehicle();

// Asynchronize Method
const fetch = async () => {
   const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const doYouLikeMovies = true;
        if(doYouLikeMovies){
            resolve("Movie are one of the best entertainment,for the people .Some movies are inspirational to many of them !");
        }else{
            reject("But movie are more addict ");
        }
    },1000);
   });
   try{
   const result = await data;
   console.log(result);
   }
   catch(error){
    console.log(error)
   };
}
fetch();
