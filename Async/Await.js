// Async / Await = Async = makes a funxtion return a promise.
//               = Await = Makes an asnyc function wait for promise.                 

async function greet(){
    let promise = new Promise((resolve , reject) => {
      setTimeout(() => resolve("Hello,greet!"),2000);
    });
    let result = await promise;
    console.log(result);

  }
  greet();

async function fetchdata() {
    let data = new Promise((resolve,reject)=>{
          setTimeout(()=> resolve("Hi Mahesh"),5000);
    }
    );
    let response = await data;
    console.log(response);
}
fetchdata();
  
 
  