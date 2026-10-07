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

/* let student={
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
console.log(student.marks[2]); */


// 🟡 Level 4 — Object Methods
// 
// A function inside an object is called a method.

/* let person={
    name: 'jhon ',
    greet:function(){
        console.log("hello");
    }
};
person.greet(); */

// Method using object data

/* let person={
    name: 'jhon',
    greet:function(){
        console.log("hello "+this.name)
        // this.name means the name belonging to this object.
    }
}
person.greet(); */


// 🟡 Level 5 — Object + Loop
// for...in

/* let student={
    name:'Arun ',
    age:21,
    mark:87
};
for (let key in student){
    // console.log(key);
    // console.log("-------------")
    // console.log(student[key]);
    // console.log("-------------")
    console.log(key,student[key]);

} */

    // 🟡 Level 6 — Object.keys(), values(), entries()
// Object.keys()

/* let student={
    name:'arun',
    age:21,
    mark:87
};
console.log(Object.keys(student));
// Object.values()
console.log(Object.values(student));
// Object.entries()
console.log(Object.entries(student)); */

// 🟡 Level 7 — Object Destructuring
// Instead of:

/* let name =st.name;
let age=st.age; */ 

// you can Writ

/* let{name,age}=st;
console.log(name)
console.log(age); */



// 🟡 Level 8 — Spread Operator

/* let st={
    name:'arun',
    age:54
};
let st2={
    ...st
};
console.log(st2);
console.log(st) */

// 🟠 Level 9 — Array of Objects
/* 
let st=[
    {
        name:'Arun',
        mark:80
    },
    {
        name:'rahul',
        mark:90
    },
    {
        name:'kumar',
        mark:75
    }

];

console.log(st[0].name); */


// 🟠 Level 10 — Object + Array Methods
// filter()


let st=[
    {
        name:'Arun',
        mark:80
    },
    {
        name:'rahul',
        mark:90
    },
    {
        name:'kumar',
        mark:75
    }
];

let res=st.filter(st=> st.mark>80);
console.log(res);
