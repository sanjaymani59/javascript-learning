function EvenOdd(num){
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
console.log(result.odd);