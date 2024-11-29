// 28-11-2024

async function fetchData(){
    try{
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const result = await response.json();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
fetchData();

const fetchingdata = async() =>{
    try {
        const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        console.log(result);
        }
        catch(error){
            console.log(error);
        }
}
fetchingdata();

async function name() {
    (async function(){
       try{
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const result = await response.json();
          console.log(result);
       }catch(error){
        console.log(error);
       }
})();
       (async function(){
        try{
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const result = await response.json(); 
        console.log(result);
       }catch(error){
        console.log(error);
       }
    })();
}
name();
//  Example 1: Sequential Async Operations
async function practice1(){
    try{
        const response1 = await fetch('https://jsonplaceholder.typicode.com/post');
        const result1 = await response1.json();
        console.log(result1);

        const response2 = await fetch ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const result2 = await response2.json();
        console.log(result2);
    }
    catch(error){
        console.log(error);
    }
}
practice1();