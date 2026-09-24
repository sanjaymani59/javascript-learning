/* function EvenOdd(num){
    let even =0;
    let odd=0;

    for (let nums of num){
        if(num %2===0){
            even++;
        }
        else{
            odd++
        }
    }
    return {
        even:even,
        odd:odd
    }
}

let num=[23,45,56,78,99];
let result =EvenOdd(num)

console.log(result.even);
console.log(result.odd);*/



/* function fact(num){
    let result=1;

    for (let i=1;i<=num;i++){ // 1,2,3,4,5
        result =result*i;     // resutl =1*1;  ==> result =1
        // result =1*2;  ===>  result = 2
        // result =2*3   ===>  RESULT = 6
        // result =6*4   ===>  RESULT = 24
        // result =24*5  ===>  RESULT = 120//



    }
    return result;
}
console.log(fact(5)); */


// 8. Find Largest Number in an Array


/* function Largestnum(num){

    let large =num[0];


    for (let i=1;i<num.length;i++){
        if(num[i]>large){
            large=num[i];
       
        }
    }
    return large;
}

let num=[23,45,22,90,23]
console.log(Largestnum(num)) */


// 
// 9. Count Even Numbers

/* function oddeven(num){
    let count=0;
    for (let i in num){
        if (i %2!=0){
            count++;
        }
    
    }return count;

}

let num=[4,5,6,7,4,3,2]
console.log(oddeven(num)) */


// 10. Find Student with Highest Mark

function findtop(Student){
    let topmark = Student[0];
    for (let i=1;i<Student.length;i++){
        if (Student[i].mark > topmark.mark){
            topmark =Student[i];
        }
    }
    return topmark;

}


let Student=[{name:"sam",mark:98},
            {name:"jone",mark:93},
            {name:"riyas",mark:95}];

let result=findtop(Student)

console.log("name", result.name);
console.log("Mark", result.mark)