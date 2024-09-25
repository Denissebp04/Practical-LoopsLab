// PART I

//Loop through all numbers from 1 to 100
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 0 ; i<= 100; i++){
    if (i % 3 == 0){
        console.log(`Fizz number ${i}`)
    }
    else if (i % 5 == 0){
        console.log(`Buzz number ${i}`)
    }
    else if (i % 3 == 0 && i % 5 == 0){
        console.log(`Fizz Buzz ${i}`)
    }
    else if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i)
    }
        
}


// PART II

// for (let n = 4; n <= 100; n++){
//     if (n % 2 !== 0 && n % 3 !== 0 && n % 4 !== 0); {
//         console.log(n)
//         break
//     }
//     else if (n % 5 !== 0 && n % 6 !==0 && n % 7 !== 0); {
//         console.log(n)
//         break
//     }
//     else (n % 8 !== 0 && n % 9 !== 0 && n % 10 !== 0);
//         console.log(n)
// }



// for (let n = 0; n <= 100; n++){
//     if (n % (n > 1) !== 0){
//         console.log(`${n} This is a prime number`)
//     }


// }

// let m >= 2;{
// for ( let n = 2; n <= 100; n++){
//     if (n % m == 0){
//         console.log(`${n} is not prime`)
//     }
//     else console.log(`${n} is a prime number`)
// }
// }

// let totalPrimeNumber = 0;
// for (let i = 1; i <= 60; i++) {
//   let prime = i > 1;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log(i, "is a prime number");
//     totalPrimeNumber += 1;
//   } else {
//     console.log(i, "is not a prime number");
//   }
// }

for ( let i = 2; i <= 100; i++)
    {
    flag = 0;
    for (j = 2; j < i; j++)
    {
        if (i % j == 0)
    {
        flag = 1;
    }
}
if (flag == 0)
{
    console.log(i)
}

}

