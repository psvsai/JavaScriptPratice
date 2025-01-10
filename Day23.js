// practing react and javascript simultaneously

// Arrow function
const sum = (a,b) => 5+6;
console.log(sum()); 

const multiple = (x,y,z) => 12*13*14;
console.log(multiple());

const name = () => "PSV Sai Mahesh";
console.log(name());

const fullName = (surname,name) => {
        const name1 = `${surname},${name}`;
        console.log(name1);
        return surname,name;
}
fullName("Pasupuleti","Sri Venkata Sai Mahesh");

const movies = async() =>{data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var movie = true;
        if(movie){
          resolve("Creating Movie application is a best way to learn Full Stack development");
        }else{
            reject("It's little difficult to learn ");
        }
    },1000)
})
  try{
    var result = await data;
    console.log(result);
  }catch(error){
    console.log(error);
 }
}
movies();

const fetchdata = async() => {
    try{
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response2 =  await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const result1 = await response1.json();
        const result2 =  await response2.json();
        console.log(result1);
        console.log(result2);
    }catch(error){
        console.log(error);
    }
}
fetchdata();

const coding = async() => {
    data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var interest = true ;
            if(interest){
                resolve("Coding is so interesting,keep going on with coding once u stopn practing,it will be ended");
            }else{
                reject("keeping consitence is so hard to do it ,when u achieve it there is back step");
            }
        },1000);
    });
    try{
        const result = await data;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
coding();
