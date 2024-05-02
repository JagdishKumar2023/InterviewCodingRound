function fetchData(callback) {
  setTimeout(() => {
    const data = [1, 2, 4, 5];
    callback(data);
  }, 1200);
}

function processData(data) {
  console.log("data fetch", data);
}

fetchData(processData);
