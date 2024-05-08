// function findTheMax(arr) {
//   let max = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findTheMax([10, 2, 24, 4, 555, 1]));

// function reverseString(str) {
//   return str.split("").reverse().join();
// }

// console.log(reverseString("Jagdish"));

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//     return true;
//   }
// }

// console.log(isPrime(5));

function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEven(5));
