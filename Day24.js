// 19-12-2024
const onepiece = async() => {
    num0 = [2,3,4,56,78];
    num1 = [5,23,65,87,1];
    number = [...num0,...num1];
    data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const data = true;
        if(data){
            resolve("Have to write big code");
        }else{
            reject("There might be a errors");
        }
    },1000);
});
   try{
    const result = await data;
    console.log(result); 
   }catch(error){
    console.log(error.message);
   }
   console.log(number + " array destruction merge");

   
    try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const result = await response.json();
        console.log(result);
    }catch(error){
        console.log(error.message)
    }
   
    var stock = {
        name :"Vishal Mega Mart",
        price : "present 114 Rs",
        IPO : 70-78,
        summary :{
            lotsize : 190,
            issueSize : "Rs - 8432Cr"
        }
    };
    var stock2 = {
        name : "Mobikwik",
        price : "presnt 545 Rs",
        IPO : 265-279,
        summary : {
            lotsize : 53,
            issueSize : "Rs - 331 Cr"
        }
    }
    var stock3 = {
        name : "SURAKSHA Diagnostics",
        price : "present 403 RS",
        IPO : 434-487,
        summary : {
            lotsize : 34,
            issueSize :"Rs - 593 Cr"
        }
    }
    var {name ,price, IPO,summary,summary:{lotsize,issueSize}} = stock;
    console.log (name);
    console.log(summary);
    
}
onepiece();