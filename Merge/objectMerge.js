// object merge 
var obj1 = {name : "PSVSAI"};
var obj2 = {age:24};
var details = {...obj1, ...obj2};
console.log(details);

var movie = {Title : "Incepetion"};
var hero = {Hero : "leanord decaprio"};
var scifi = {...hero,...movie};
console.log(scifi);

// object destruction
const survey1 = {
    city : "Hyderabad",
    pincode : "500058",
    moreDetails : {
        address : "14-14 BDL Colony, Badanghpet",
        mandal : "Balapur",
        distric : "Ranga Reddy",
    }
}
const survey2 = {
    city : "Mumbai",
    pincode : "400049",
    moreDetails : {
        address : "chatrapati shivaji airport",
        mandal : "Andheri East",
        distric : "Mumbai",
    }
}

const {city ,pincode,moreDetails:{address,mandal,distric}} = survey1;
console.log(mandal);

const survey = {...survey1,...survey2};
console.log(survey);
