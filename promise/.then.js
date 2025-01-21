// Key Characteristics
// Chaining: .then returns a new Promise, allowing you to chain multiple .then calls.

// Asynchronous Execution: The callback passed to .then is executed asynchronously, 
// even if the Promise is already resolved.

// Error Handling: If an error occurs in the onFulfilled handler, the returned Promise is rejected, 
// and the error can be caught in a subsequent .then or .catch.


// basic example of .then()
// const data = new Promise((resolve ,reject) => {
//     setTimeout(()=>resolve("success"),1000)
// });
// data.then((ans)=>{
//     console.log(ans);
// });

// const data2  = new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         const res = undefined;
//         if(res){
//             resolve("succes");
//         }else{
//             reject(new Error ("failed"));
//         }
//     },2000)
// })

// data2.then((res2) =>{
//     console.log(res2);
// }) .catch((error) =>{
//     console.log("error not found",error.message);
// })

const p = new Promise((resolve, reject)=>{
    console.log("promise is pending ...... ");
    setTimeout(()=>{
    // console.log(" Promise is resolve");
    resolve(true);
    // reject(new Error("promise is not fulfilled"));
    },1000)
})

const p2 = new Promise((resolve , reject)=>{
    console.log("Promise is pending ....");
    setTimeout(()=>{
        // console.log(" promised is rejected");
         reject(new Error ("Is promised not fulfilled"))
    },1000)
})

// To get the value
p.then((value)=>{
    console.log(value);
})
// if we don't want to use .catch method for p2 we can use .then

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("Here is the other way to handle the error ")
})
// To handle the error
// p2.catch((error)=>{
//     console.log("Error is handle : " );
// })

const hello = async() => {
    data = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const value = false;
            if(value){
                resolve("WE TESTING THE ASYNC FUNCTION");
            }else{
                reject(new Error("TRYING TO FIND THE PROMISE"));
            }
        },1000)
    })
    try{
        const result = await data;
        console.log(result)
    }catch(error){
        console.log("HANDLING THE ERROR BY USING ASYNC and AWAIT Methods" , error.message)
    }
}
hello();

const movie = new Promise((resolve ,reject)=>{
    console.log("Movies are loading ....")
    setTimeout(()=>{
           console.log("Here the action fulfilled by promise");
           resolve(false);
           reject(new Error("Best way to find the fullfilled or not"));
    },2000);
})
console.log(movie);
 movie.then((value)=>{
    console.log(value);
 }).catch((error)=>{
    console.log("Handling the error : " ,error.message);
 })