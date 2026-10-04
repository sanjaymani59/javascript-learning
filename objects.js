// JavaScript Objects — Beginner → Advanced
// An object stores data in key–value pairs.

/* let student ={
    name:'sam',
    age: 21,
    department:'cse'
};
console.log(student.department); */

// 🟢 Level 1 — Object Basics
// 1. Create an object

/* let person ={
    name:'john',
    age: 20,
    city:'chennai'
};
console.log(person);
// 2. Access values
console.log(person.name)
console.log(person.age)
console.log(person.city)

// 3. Change a value

person.age=21;
console.log(person.age)

// 4. Add a new property

person.phone='18943256'
console.log(person)

// 5. Delete a property

delete person.city;
console.log(person); */

;
// 🟢 Level 2 — Dot and Bracket Notation

// Dot notation

/* let student={
    name:'sam',
    age:20
};

console.log(student.name);


// Bracket notation

// Bracket notation is useful when the key is stored in a variable:

console.log(student["name"])

let key ='age';
console.log(student[key]); */


// 🟢 Level 3 — Object with Different Data Types

let student={
    name: 'Arun', 
    age:32,
    isStudent:true,
    marks:[89,98,49],
    address:{
        city :'ooty',
        pincode:600001
    }
};

console.log(student.name);
console.log(student.isStudent);
console.log(student.address.pincode);
console.log(student.marks[2]);

