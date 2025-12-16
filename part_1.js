// ======== Q.1) Take a number from prompt and check if it is even or odd.======

// let a = prompt("Entre a number:")
 
// if(a%2==0){
//     alert("Even")
// }

// else{
//     alert("Odd")
// }

// ======== Q.2) Take two numbers from prompt and print the greater number.======

// let b= prompt('Enter first number')
// let c= prompt('Entre second number')

// if(b>c){
//     alert(b)
// }

// else if(c>b){
//     alert(c)
// }


// else{
//     alert("number is equal")
// }


// ==== Q.3) Take a number and check if it is positive, negative, or zero.=======

// let d = prompt("Entre a number")

// if(d>0){
//     alert("Positive")
// }

// else if(d<0){
//     alert("Negative")
// }

// else{
//     alert("zero")
// }

// ======= Q.4) Take age from prompt and check if the user is eligible to vote (18+). ====

// let e = prompt("Enter Your age:")

// if(e>18){
//     alert("Your Eligible")
// }
// else{
//     alert("Your Not Eligible")
// }


// ==== Q.5)Take a number and print its table (1–10) using a for loop.=======

// let num = prompt("Enter number to print table:")

// for(let i=1; i<=10; i++){
//     console.log(num + " x " + i + " = " + (num * i));
// }
 

// ==== Q.6)Take a number and find the sum of numbers from 1 to that number.

let num=prompt("Entre a number")
let sum =0
for(let i=1; i<=num;i++){
 sum+=i

}
console.log("Sum from 1 to " + num + " is: " + sum);