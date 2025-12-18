// === Q.21)Create an object with name, age, city and print all values.

let obj = {
    name:"Mahak Saxena",
    age : 26,
    city: "Bhopal"
}

console.log(obj);

for (let key in obj) {
  console.log(obj[key]);
}


// === Q.22)Check if a property "email" exists in an object.

if ("email" in obj) {
  console.log("Email exists")
} else {
  console.log("Email does not exist")
}

// ==== Q.23) Count number of keys in an object. 

let count = 0

for (let key in obj) {
  count++
}

console.log(count)

// ==== Q.24) Update object age if age is greater than 18.

if (obj.age > 18) {
  obj.age = 25;
}

console.log(obj);

// === Q.25) Loop through object and print key : value.


for (let key in obj) {
  console.log(key + " : " + obj[key]);
}

