// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([4, 5, 6, 1, 1, 2, 2, 3, 5, 5, 8, 8]));

// function sumArray(arr) {
//   return arr.reduce((acc, num) => acc - num, 0);
// }

// console.log(sumArray([4, 6]));

function firstNonRepeatedChar(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatedChar("swiss"));
console.log(firstNonRepeatedChar("level"));
