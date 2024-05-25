const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (!success) {
      resolve("THis promsie sucess full");
    } else {
      reject("THis promse reject");
    }
  }, 2000);
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
