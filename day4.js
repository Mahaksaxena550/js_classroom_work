// ===== Q.1) Create an array of 5 numbers and use a for loop to print each number
// using an arrow function inside the loop. =====

let n = [10, 20, 30, 40, 50];

for (let i = 0; i < n.length; i++) {
     console.log(n[i]);
     
}


// ======= Q.2) Using an array of names, check inside a for loop:
// If the name length is greater than 5, print "Long Name",
// else print "Short Name". ======

let names = ["Amit", "Priyanka", "Manas", "Karan", "Umashankar"];
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
        console.log("Long Name");
    } else {
        console.log("Short Name");
    }
}

// ===== Q.3) Create an object student with properties: name, age, city.
// Use a for…in loop to print all keys and values. =====

let student = {
    Name: "Mahak saxena",
    Age: 27,
    City: "Bhopal"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}


// ====== Q.4) Make an array of 3 student objects.
// Use a normal for loop to print each student&#39;s name using an arrow function to
// format the text. ======


let students = [
    { name: "AMAN", age: 20 },
    { name: "DEEPAK", age: 22 },
    { name: "Kuldeep", age: 25 }
];

for (let i = 0; i < students.length; i++) {
    let formatName = (name) => "Student Name: " + name;
    console.log(formatName(students[i].name));
}


// ======= Q.5) Write an arrow function isAdult(age) using if–else:
//  if age >= 18 → return true
// else → return false
// Now call this function inside a loop over an array of ages. =====


let Adult = (age) => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

let ages = [12, 18, 25, 16, 40]
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i] + " → " + Adult(ages[i]))
}


// ===== Q.6) Create an array of numbers and use a for loop to find the largest number
// (without using Math.max). =====

let numbers = [10, 45, 22, 89, 5, 67]

let largest = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}
console.log("Largest Number:", largest)

// ===== Q.7) Given the object:
// const data = { a: 10, b: 20, c: 30 };
// Use object destructuring to extract a and c and print them. ======

let data = { a: 10, b: 20, c: 30 }

let { a, c } = data

console.log(a)
console.log(c)


// ====== Q.8) Create two objects and merge them into one using the spread operator …
// Print the merged object. ======

let obj1 = { name: "Mahak", age: 27 }
let obj2 = { city: "Bhopal", grade: "A" }

let merged = { ...obj1, ...obj2 }

console.log(merged)

// ====== Q.9) Make an array of marks.
// Use a for loop to count how many marks are greater than 50 using simple
// if–else.=====

let marks = [35, 60, 75, 48, 90, 52]
let count = 0
for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
        count++;
    } else {
        
    }
}
console.log("Marks greater than 50:", count)

// ======= Q.10) Create an array of cities.
// Use a for loop and an arrow function inside it to print the city name along with
// its index (e.g., “0 → Delhi”).=======

let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"]

for (let i = 0; i < cities.length; i++) {
    let formatCity = (index, city) => index + " → " + city;
    console.log(formatCity(i, cities[i]));
}