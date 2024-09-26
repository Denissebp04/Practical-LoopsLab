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


// PART III

//Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,
//0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,
//0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

let cel1 = 'Index'
let cel2 = 'Mass (Kg)'
let cel3 = 'Spring 1 (m)'
let cel4 = 'Spring 2 (m)'

console.log(cel1, cel2, cel3, cel4)

let row1 = [0.00, 0.050, 0.050]
let row2 = [0.49, 0.066, 0.066]
let row3 = [0.98, 0.087, 0.080]
let row4 = [1.47, 0.116, 0.108]
let row5 = [1.96, 0.142, 0.138]
let row6 = [2.45, 0.166, 0.158]
let row7 = [2.94, 0.193, 0.174]
let row8 = [3.43, 0.204, 0.192]
let row9 = [3.92, 0.226, 0.205]
let row10 = [4.41, 0.238, 0.232]

const rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];

for (const c of rows) {
	console.log(c);
}