//17-01-2025
// post method

// const getData = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
//         method : 'POST',
//         body :  JSON.stringify({
//             title: 'psvsai',
//             body: 'practice',
//             userId: 1
//           }),
//           headers : {
//             'Content-type' : 'application/json; charset=UTF-8',
//           }
//     });
//     const data = await response.json();
//     console.log(data);
// }
// getData();

// async function createPost() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }
//     });
//     const data = await response.json();
//     console.log(data); // Outputs the created post object
//   }
//   createPost();

//20-01-2025
const getPostData = async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'POST',
    body : JSON.stringify({
      title : "Harry Potter",
      body : "harry potter is best selling book in history",
      userId : 1
    }),
    headers: {
      'Content-Type' : 'application/json;charset = UTF-8'
    } 
  });
  const result = await response.json();
  console.log(result);
}
getPostData();

const getPostData2 = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'POST',
    body : JSON.stringify({
      title : 'Game Of Thornes',
      body : 'Game Of Thornes is best selling book and later it was developed into web-series',
      userId : 2
    }),
    headers : {
      'Content-Type' : 'application/json;charset=UTF-8'
    }
  });
  const result = await response.json();
  console.log(result);
}
getPostData2();