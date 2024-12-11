// 09-12-2024
// object destruction includes functions
const cricket = {
    Teams : ["India","Australia","South Africa","England","West Indies","New Zeland","Bangaldesh","Pakistan","Sri lanka"],
    UpcomingTeams : ["UAE","USA","Nepal","Japan","Ireland"],
    MostWorldCupWinner :function Winners(titles = "6 times"){
        return `Austalia won the most world cup in the history till now,${titles}!`
    },
    
    GentlemenGame : function Classic(Cricket = "Indians love the game"){
        return `Cricket is the very intrested game ever british announced in the 17th century as "GENTELMEN GAME " ${Cricket}! `
},

}
const {Teams,UpcomingTeams,MostWorldCupWinner,GentlemenGame}= cricket;
console.log(Teams);
console.log(UpcomingTeams);
console.log(MostWorldCupWinner());
console.log(GentlemenGame());

const weather = {
    city : ["New York","Tokyo","London","Mumbai"],
    mostSearchedCities : ["Dehli","Washinton DC","Perth"],
    hotCities : ["West indies","Egypt","Rajasthan"],
    cityToSearch : function(){
      return `Weather is unperdictable : New York , Tokyo, London, Mumbai`;
    },
    climate : function(){
    return `Near equator it always so hot for example equator most comes under Africa : West Indies , Egypt , Rajasthan`;
  }
  };
  const {city,mostSearchedCities,hotCities,cityToSearch,climate} = weather;
  console.log(city);
  console.log(mostSearchedCities);
  console.log(cityToSearch());
  console.log(climate());

// Error Handling Method

// try and catch block 

function fetch2(){
     const data = undefined;
     try{
        const result = data;
        console.log(result);
     }
     catch(error){
        console.log(error);
     }
}
fetch2();

function fetch1(){
    try{
        const data = undefinedVaribale;
        console.log(data);
    }catch(error){
        console.log("An error is Occured " + error.message);
    }
}
fetch1();
// Conclusion for the above code........
// fetch():

// Demonstrates handling a valid operation with an undefined value.
// No exception is thrown, so the catch block is redundant.
// fetch1():

// Demonstrates handling an undefined variable, which throws a ReferenceError.
// The try-catch block is crucial to catch and handle the error gracefully.

async function guitar() {
    const playing = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const thrils = true;
            if(thrils){
                resolve("Playing guitar gives me clamness, the sound of the guitar relax our mind")
            }
            else{
                reject("If guitar is not tuned properly ,then the sound of the guitar is like hellish ")
            }
        },1000);
    });
    try{
        const result = await playing;
        console.log(result+"Playing guitar help to relax");
    }catch(error){
        console.log(error);
    }
    }
    guitar();

    // maps
    const int = [ 2,3,4,5,,67,8,9,];
    const ans = int.map((data)=>data);
    console.log(ans);
    const num = [1,2,3,4,5,6,7];
    const multiple = num.map((num)=>num *3);
    console.log(multiple);
  
    // filters 
 var names = ["Mahesh","Manisha","Kishore","PSVSAI"];
 var result = names.filter((names)=>names.length>6);  
 var ans1 = result.map((data)=>data);
 var ans2 = names.map((data)=>data.toUpperCase());
 console.log(result);
 console.log(ans1);
console.log(ans2);

// // squential Async Operation
// async function fetchDataSquential(){
//     try{
//         var response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         var result = await  response1.json();
//         console.log(result);

//         var response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//         var result1 = await response2.json();
//         console.log(result1);
//     }
//     catch(error){
//         console.log(error);
//     }
// } 
// fetchDataSquential();
    
async function fetchDataSqu(){
    try{
        var response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        var result1 = await response1.json();
        console.log(result1);

        var response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        var result2 = await response2.json();
        console.log(result2);
    }catch(error){
        console.log(error);
    }
}
fetchDataSqu();

 