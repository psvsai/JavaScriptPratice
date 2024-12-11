// 02-11-2024
// Async function practice 
// async function weatherdata(){
//     let climate = new Promise ((resolve,reject) =>{
//       setTimeout(() => resolve("sunny"),1000);
//     });
//     let weather = await climate;
//     console.log(weather);
//   }
//   weatherdata();


async function fetchdata(){
    let data = new  Promise((resovle,reject) => {
    setTimeout(()=>{
        const success = true;
        if(success){
            resovle("Fetch data is completed");
        }else{
           reject("Fetch data is failed");
        }
    });
    });

    try{
        let result = await data;
        console.log(result);

    }catch(error){
        console.log(error);
    }
}
fetchdata();

async function fetchdata(){
    let obj = new Promise((resolve,reject) =>{
      setTimeout(()=> {
                      const fail= false;
                       if(fail){
                         resolve("It is not acccepted");
                       }else{
                         reject("it is accepted");
                       }
                      });
      
    });
    try{
      let data = await obj;
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  fetchdata();

  // Squential Data
  async function badminton() {
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
  badminton();