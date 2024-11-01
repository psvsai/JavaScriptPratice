async function fetchdata(){
    let data = new Promise((resolve,reject)=>{
      let success = false;
      setTimeout(()=>{
                if(success){
                 resolve("is data successed");
                }else{
                      reject("it is failed");
                    }
                },2000);
      });
      try{
        let result = await data;
        console.log(result);
      }catch(error){
        console.log(error);
      }
    }
    fetchdata();
