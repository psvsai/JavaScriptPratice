// function name(name1,name2){
//     return name1+name2;
//  }
//  let myname = name("PSVSAI "," MAHESH");
//     console.log(myname)

//     function hi(){
//       console.log(10+20)
//    }
//    hi();
//    function hello(){
//       console.log("Psvsai")
//    }
//    hello();
//    function hi(){
//       console.log(20+30)
//    }
//    hi();
//    function hello(){
//       console.log("Mahesh")
//    }
//    hello();
//    function myself(num1 , num2){
//        return num1+num2
//    }
//    let pratice = myself(100,200);
//    console.log(pratice)

   //20-01-2025
   const obj1 = {
      movie :"rush hour",
      cast : "Jackie chan",
      genre : function(){
         console.log(this.movie);
      }
   }
   obj1.genre();

   const sitcom = ["friends","bigbang theory" , "How i met your mother"];
   sitcom.forEach((element)=>{
      console.log(element);
   });
   //21-01-2025
   const hyper = async() =>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      console.log(response.status);
      console.log(result);
   }
   hyper();

   const glass = async() =>{
      try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
         method : 'POST',
         body : JSON.stringify({
            title : "Lenskart",
            body : 'Helps to find a perfect glasses to anyone',
            userId : 1
         }),
         headers : {
            'Content-type' : 'application/json; charset=UTF-8'
         }
      });

      if(!response.ok){
         throw new Error('HTTP error! status:${response.status}');
      }
      const result = await response.json();
      console.log(result);
   }catch(error){
      console.log("Your code contains some error : " , error.message);
   }
}
   glass();

   const getPut = async() =>{
      try{
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method : 'PUT',
        body : JSON.stringify({
         title : 'mufti',
         body : 'Mufti is a good brand of clothes',
         userId :2
        }),
        headers : {
         'Content-type' : 'application/json;charset=UTF-8',
        }
      });
      if(!data.ok){
         throw new Error('Http error!status:${data.status}')
      }
      const result = await data.json();
      console.log(result);
   }catch(error){
      console.log("Your code as errors : " ,error.message);
   }
   }
   getPut();