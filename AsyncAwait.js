// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   return data;
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function resolvedFunc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("this function is resolve after 2 sec");
//     }, 2000);
//   });
// }

// async function asyncFunction() {
//   try {
//     console.log("start");
//     const result = await resolvedFunc();
//     console.log(result);
//     console.log("End");
//   } catch (error) {
//     console.log(error);
//   }
// }

// asyncFunction();

// async function processItems(items) {
//   for (let item of items) {
//     const processedItem = await processItem(item);
//     console.log("Processed item:", processedItem);
//   }
// }

// async function processItem(item) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Processed ${item}`);
//     }, 1000);
//   });
// }

// const items = ["item1", "item2", "item3"];
// processItems(items);

async function fetchData() {
  try {
    const response1 = await fetch("https://api.example.com/data1");
    if (!response1.ok) {
      throw new Error("Failed to fetch data1");
    }
    const data1 = await response1.json();

    const response2 = await fetch("https://api.example.com/data2");
    if (!response2.ok) {
      throw new Error("Failed to fetch data2");
    }
    const data2 = await response2.json();

    console.log("Data 1:", data1);
    console.log("Data 2:", data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
