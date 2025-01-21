// 17-01-2025
// get method
// const value = fetch('https://jsonplaceholder.typicode.com/todos/1');
// value.then((response)=>{
//     console.log(response.status);// 
//     console.log(response.ok);// boolean and check the code is b/w 200-299
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// });


// const getRequest = fetch("https://jsonplaceholder.typicode.com/posts");
// getRequest.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
// }).then((response)=>{
//     console.log(response);
// })

// const promise = fetch('https://jsonplaceholder.typicode.com/posts/1');
// promise.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })

// const data = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(result);
// }
// data();

//18-01-2025
// const movieId = fetch('https://jsonplaceholder.typicode.com/posts');
//     movieId.then((value)=>{
//         console.log(value.status);
//         console.log(value.ok);
//         return value.json();
//     }).then((value)=>{
//         console.log(value);
//     })

// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//       response.then((response)=>{
//         console.log(response.status);
//         console.log(response.ok);
//         return response.json();
//       }).then((response)=>{
//         console.log(response);
//       })

// const getPost = async() =>{
// const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// const post = await response.json();
//       console.log(post.title);
//       console.log(post.body);
// }
// getPost();

// const getId = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const result = await response.json();
//     // console.log(result.usedId);
//     console.log(result.id);
// }
// getId();

// const getId1 = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const result = await response.json();
//     console.log(result.id);
// }
// getId1();

//20-10-2025
// const harryPotter = fetch('https://jsonplaceholder.typicode.com/posts');
//    harryPotter.then((response)=>{
//     return response.json();
//    }).then((response)=>{
//     console.log(response);
//    })

const milk = fetch('https://jsonplaceholder.typicode.com/posts');
milk.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((response)=>{
    console.log(response.title);
})

const veggies = async() =>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
    const result = await response.json();
    console.log(result.id);
    console.log(result.title);
}
veggies();