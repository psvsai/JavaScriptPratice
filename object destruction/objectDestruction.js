const cricketPlayer1 = {
         nameOfthePlayer : "Sunil Gavasakar",
         yearOfPlay : "1978-1994",
         player : "He is a Batsman"
};
const cricketPlayer2 = {
    nameOfthePlayer : "Kapli Dev",
    yearOfPlay : "1981-1998",
    player : "He Is A all-rounder",
};
const cricketPlayer3 = {
    nameOfthePlayer : "Ravi Satri",
    yearOfPlay : "1980-1998",
    player : "All-rounder",
};
const {nameOfthePlayer,yearOfPlay,player} = cricketPlayer2;
console.log(nameOfthePlayer);
console.log(yearOfPlay);
console.log(player);

// object in object destruction
const movies1 = {
    title : "Jalsa",
    hero : "Pawan Kalyan",
    technination : {
        director : "Trivikram",
        musicDirector : "Devi Sri Prasad",
    }
};
const movie2 = {
    title : "Pokiri",
    hero : "Mahesh Babu",
    technination : {
        director : "Puri jaganath",
        musicDirector : "ManiSharma"
    }
};
const movie3 = {
    title : "Darling",
    hero : "Prabhas",
    technination : {
        director : "Karunakar",
        musicDirector: "G V Parkash",
   }
};
const movie4 = {
    title : "Yamadonga",
    hero : "NTR",
    technination : {
        director : "Rajamouli",
        musicDirector : "Keeravani"
    }
}
const {title,hero,technination:{director,musicDirector}} = movie3;
console.log(title);
console.log(hero);
console.log(director);
console.log(musicDirector);


// function in object destruction
const employee = {
    employeeName : "PSV SAI Mahesh",
    employeeid : "20137919",
    company : function(){
        return `Wipro is top most MNC company in India,employees always trustfull to company in all times!`
    },
    experience : function(){
        return ` working in wipro is like a dream to me ,but I need to work as a proper IT domain ! `
    }
}

const {employeename,employeeid,company,experience}= employee;
console.log(company());
console.log(experience());