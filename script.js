//**Question 1 **

// function countVowel(str) {
//   const vowel = "aeiouAEIOU";
//   let count = 0;

//   for (let char of str) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("SONU"));
// console.log(countVowel("Kamal"));

//**Question 2**

// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log("This number is", isEven(4));
// console.log("This number is", isEven(7));

//**Question 3**

// function isEven(number) {
//   if (number % 2 === 0) {
//     return number + " is even";
//   } else {
//     return number + " is odd";
//   }
// }

// console.log(isEven(4));
// console.log(isEven(7));

//**Question 4 **

// function findLongestWord(sentance) {
//   const words = sentance.split(" ");

//   let longestWord = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// const sentance = "I am an Engineer";
// const longestWord = findLongestWord(sentance);
// console.log(longestWord);

//**Question 5**

function removeDuplicates(array) {
  const uniqueArray = [];

  for (const element of array) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

const array = [1, 4, 5, 6, 6, 3, 2, 1, 2];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
