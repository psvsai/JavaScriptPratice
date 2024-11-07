let arr = [20,30,40,50,60.70];
arr.map((element)=> console.log(element));

let name = ["psvsai","pasupuleti","sri","venkata","sai","mahesh"];
name.map((nam)=> console.log(nam));

//07-11-2024
const fullStack = {
    frontend : ["HTML","CSS","JAVASCRIPT"],
    backend : ["JAVA","RESTFUL API's" ],
    database: ["MySQL","MONGO DB"],
    framework : ["React JS","SpringBoot"],
   
   }
   console.log(fullStack.frontend);
//    frontend.map((data)=> console.log(data));

function fullStack1() {
    frontend = ["HTML","CSS","JAVASCRIPT"];
    backend = ["JAVA","RESTFUL API's" ];
    database= ["MySQL","MONGO DB"];
    framework = ["React JS","SpringBoot"];
    sum = [3,5,7,9];
    frontend.map((data)=> console.log(data))

}
fullStack1();

const FSD = () =>{
    frontend = ["HTML","CSS","JAVASCRIPT"];
    backend = ["JAVA","RESTFUL API's" ];
    database= ["MySQL","MONGO DB"];
    framework = ["React JS","SpringBoot"];
    return framework;
}
let data = FSD(framework);
console.log(data);
framework.map((data)=> console.log(data))
frontend.map((data)=> console.log(data))

// arrow function
const fullStack3 = () =>{
    frontend = ["HTML","CSS","JAVASCRIPT"];
    backend = ["JAVA","RESTFUL API's" ];
    database= ["MySQL","MONGO DB"];
    framework = ["React JS","SpringBoot"];
    frontend.push("angular");
    backend.unshift("PYTHON");
    console.log(frontend);
    console.log(backend);
    backend.map((java)=> console.log(java))
    console.log(database);
} 
fullStack3();

async function fetchdata(){
      let weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = false;
            if(data){
                resolve("cliamte is sunny");
            }else{
                reject("climate is cloudy");
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
fetchdata();