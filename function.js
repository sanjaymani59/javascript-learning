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



function fact(num){
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
console.log(fact(5));