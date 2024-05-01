// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Data fetch successFully");
//     } else {
//       reject("Data fetch reject");
//     }
//   }, 4000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 4000);
// });

// const promise2 = new Promise((reject) => {
//   setTimeout(() => {
//     reject("Promise 2 reject");
//   }, 3000);
// });

// Promise.allSettled([promise1, promise2])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
