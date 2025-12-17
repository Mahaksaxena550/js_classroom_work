
//  Q.7) ==== Take a string and print its length (without using .length).===

// let a = prompt("Entre a string:")

// alert(a.length)



// Q.8) ====== Take a string and count number of vowels. =====
// let s = prompt("enter string")
// let count = 0;

// for (let i = 0; i < s.length; i++) {
//   let ch = s[i].toLowerCase()
//   if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//     count++
//   }
// }

// console.log("Number of vowels:", count)


// ==== Q.9) Reverse a string using a for loop. =======

// let s = prompt("Enter a string:")
// let reversed = ""

// for (let i = s.length - 1; i >= 0; i--) {
//   reversed += s[i]
// }

// alert("Reversed string: " + reversed)


// ==== Q.10) Check if a string is palindrome. =======


// let str = prompt("Enter a word:")
// let rev = ""

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i]
// }

// if (str === rev) {
//   alert("Palindrome")
// } else {
//   alert("Not Palindrome")
// }


// ==== Q.11)Convert a string to uppercase (using method). =======

// let str = prompt("Enter a string:")
// alert(str.toUpperCase())


// ==== Q.12) Count how many times letter "a" appears in a string. =======

let str = prompt("Enter a string:")
let count = 0

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    count++
  }
}

alert("Number of 'a': " + count)
