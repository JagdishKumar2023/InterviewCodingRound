// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([1, 4, 5, 69, 74]));

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// // Test the function
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(12)); // Output: false

// function maxSubarraySum(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([1, -1, 4, -5, -2]));

// function reverseString(str) {
//   let chars = str.split("");

//   let reversedChars = chars.reverse();

//   let reversedStr = reversedChars.join("");

//   return reversedStr;
// }

// console.log(reverseString("Jagdish"));
// console.log(reverseString("Jayesh"));

function outerFunc() {
  let inner = "I am inner variable";
  function innerFun() {
    console.log(inner);
    console.log(variable);
  }
  let variable = "this is outer lesical scope";
  return innerFun;
}

let outerFunction = outerFunc();
outerFunction();
