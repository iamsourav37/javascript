// console.log("Hello World");

// const demo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("this is resolved");
//     // reject( "this is rejected" );
//   }, 4000);
// });

// demo
//   .then((resolve) => {
//     console.log("In then block");
//     console.log(resolve);
//   })
//   .catch((error) => {
//     console.log("In catch block");
//     console.log(error);
//   });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = "this data is comming from api call. (assume that)";
//     // resolve( data );
//     reject("error occured");
//   }, 2000);
// });

const getData = async () => {
  const response = await fetch("https://ai.github.com/users/1");
  const data = await response.json();
  return data;
};

getData()
  .then((data) => {
    console.log("Inside then method");
    console.log("data : ", data);
  })
  .catch((error) => {
    console.log("Inside catch method");
    console.log("ERROR MESSAGE : ", error);
  });
