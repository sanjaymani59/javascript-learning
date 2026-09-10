// let year =2004;

// if(year%4==0){
//     if(year%100 ==0){
//         if(year % 400==0){
//             console.log("it ia a leap year")
//         }
//         else{
//         console.log("not leap year")
//     }
//     }else{
//         console.log("leap year")
//     }

// }

// else{
//     console.log("it is not a leap year")
// }

function wb(noun,adj,verb,adver){
    var result="";
    result += "The"+adj+noun+verb+"to the store"+adver

    return result;
}

console.log(wb("dog","big","ran","qucik "))
