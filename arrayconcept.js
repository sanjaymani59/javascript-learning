// 1. What is an Array?

// An array stores multiple values in one variable.

/* let fruits=['apple  ','banana','mango'];
console.log(fruits) */

// 2. Access Array Elements
// Array index starts from 0.

/* let fruits=['apple  ','banana','mango'];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2]) */


// 3. Change an Element

/* let fruits=['apple  ','banana','mango'];
fruits[1]='orange '
console.log(fruits) */

// 4. Array Length

/* let num=[10,20,30,40,50]
console.log(num.length) */

// 🟢 Level 2: asic Array Methods
// . push()

/*  let num=[10,20,30,40,50];
num.push(60);
console.log(num); */

// 6. pop()
// Removes the last element.
 /* let num=[10,20,30,40,50];
 num.pop();
 console.log(num) */


//  7. unshift()

// Adds an element to the beginning.

/* let num=[34,55]
num.unshift(10);
console.log(num) */


// 8. shift()

// Removes the first element

/* let num=[23,45,66,33]
num.shift(66)
console.log(num) */

// 🟢 Level 3: Searching Arrays
// 9. includes()

/* let f=['apple','banana','mango']

console.log(f.indexOf('mango')) */


// 10. indexOf()

// Finds the index.

/* let f=['apple','banana','mango']
console.log(f.indexOf('mango')) */


// 11. lastIndexOf()

/* let num=[4,5,6,7,8,5,43]
console.log(num.lastIndexOf(5)) */


// 🟡 Level 4: Loop Through Arrays
// 12. Normal for loop

/* let num=[4,5,6,7,8,5,43];
for (let i=0;i<num.length;i++){
    console.log(num[i]); */
// }

// 13. for...of

/* let nums=[10,20,30,40];
for (let num of  nums){
    console.log(num)
} */

// 14. forEach()

/* let nums=[10,20,30,40,59];
nums.forEach(function(num){
    console.log(num);
}); */

// 🟡 Level 5: Important Array Methods

// 15. map()

// Creates a new array by changing every element.

/* let num=[2,3,4,5,6];
let res=num.map(function(num){
    return num * 2;
});

console.log(res) */

// 16. filter()

/* let num=[10,20,30,40,50];

let res=num.filter(function(num){
    return num >20;
});

console.log(res) */

// 17. find()

/* let num=[10,20,30,40,50];
let res=num.find(function(num){
    return num >20;
});

console.log(res) */

// 18. findIndex()

/* let num=[10,20,30,40,50];

let res=num.findIndex(function(num){
    return num>20;
});

console.log(res); */



// 🟡 Level 6: Calculations
// 19. reduce()
// Used to combine an array into one value.
 
/* let num=[10,20,30,40];
let total=num.reduce(function(sum,num){
    return sum+num;

},0);
console.log(total); */


// 20. some()
// Checks if at least one element satisfies a condition.

/* let num=[10,15,20,25];
let result =num.some(function(num){
    return num>20;
},0);

console.log(result) */

// 21. every()
// Checks if all elements satisfy a condition.

/* let num=[-10,-20,-30,-40];
let res=num.every(function(num){
    return num<0;
});
console.log(res) */


// 🟠 Level 7: Modifying Arrays
// 22. slice()
// Copies part of an array without changing the original.

/* let num=[10,20,30,40,50];

let res=num.slice(1,4);
console.log(res); */


/* // 23. splice()
// Adds/removes elements.
let num=[10,20,30,40,50];
// 1 → starting index
// 3 → number of elements to remove
num.splice(1,3)
console.log(num)
 */


// 🟠 Level 8: Sorting
// 24. sort()

/* let names=['kumar','arun','bala'];
names.sort();
console.log(names);
 */


// Be careful: normal sort() treats values as strings.


let num=[50,20,3,500];
num.sort(function(a,b){
    return a-b
});
console.log(num)

// descending 

num.sort(function(a,b ){
    return b-a;
});
console.log(num)







