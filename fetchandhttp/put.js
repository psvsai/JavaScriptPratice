//20-10-2025
// below there are two put methods if we update either one its showcase in output that updated one in first later remaining follows behind
const movie = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1' , {
        method : 'PUT',
        body : JSON.stringify({
            title : "Will Smith",
            body : "Will smith started he's career form a web-series called FRESH PRINCE OF BELL-HAIR",
            userId : 1
        }),
        headers : {
            'Content-type' : 'application/json;charset=UTF-8'
        }
    })
    const data = await response.json();
    console.log(data);
}
movie();

const getPutData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method : 'PUT',
        body : JSON.stringify({
            title : "Jackie Chan",
            body : 'Jackie chan is a chinese actor who struggle a lot he performs own stunts without a stunt master',
            userId : 2,
        }),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8'
        }
    }) 
    const result = await response.json();
    console.log(result);
}
getPutData();