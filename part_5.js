// === Q.26)Take a number and find factorial.

// let n = prompt("enter a number")
// let factorial = 1

// for (let i = 1; i <= n; i++) {
//     factorial = factorial * i
// }

// console.log("Factorial of " + n + " is: " + factorial)

// === Q.27) Find number of digits in a number.

// let num = 12345;
// let digits = num.toString().length;

// console.log("Number of digits:", digits);

//  === Q.28) Check if a year is leap year.

// let year = prompt("Enter a year:");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     alert(year + " is a Leap Year");
// } else {
//     alert(year + " is NOT a Leap Year");
// }

//  === Q.29) Create array from 1–10 and print only odd numbers.

// let arr = []

// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
// }


//  Q.30)Take a sentence and count words.

let s = prompt("enter a sentence")
let word = s.split(" ").length;

console.log("Number of words:", word);
