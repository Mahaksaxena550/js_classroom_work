//==== Q.13) Create an array of numbers and print all elements using for loop.====


// let number = [10, 20, 30, 40, 50]

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }


// === Q.14) Find the sum of array elements.====


// let n = [10, 20, 30, 40, 50]
// let sum = 0

// for (let i = 0; i < n.length; i++) {
//     sum += n[i];
// }

// console.log("Sum of array elements:", sum)


// ==== Q.15) Find the largest number in an array. =====

// let numbers = [10, 45, 22, 89, 5, 67]

// let largest = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i]
//     }
// }
// console.log("Largest Number:", largest)


// ==== Q.16) Count even numbers in an array.====


// let number = [10, 15, 22, 33, 40, 55, 60]
// let count = 0
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log("Number of even elements:", count);


// ==== Q.17) Reverse an array without using reverse().=====

// let arr = [1, 2, 3, 4, 5]
// let reversedArr = []

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i])
// }

// console.log("Reversed array:", reversedArr)



// ===== Q.18) Check if a number exists in an array.=====

// let arr = [1, 2, 3, 4, 5]
// let num = 3

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         console.log("Number exists")
//     }
// }

// ==== Q.19)Remove duplicate values from an array (simple logic).=====

// let arr = [1, 2, 2, 3, 4, 4, 5]
// let r = []

// for (let i = 0; i < arr.length; i++) {
//     if (r.indexOf(arr[i]) === -1) {
//         r.push(arr[i])
//     }
// }

// console.log(r)

// ==== Q.20) Create an array of strings and print strings with length >4.


let words = ["apple", "cat", "banana", "dog", "elephant"]
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
        console.log(words[i])
    }
}

