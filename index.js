console.log("Hello World !!!");


//Table of 2
// console.log("2");
// console.log("4");
// console.log("6");
// console.log("8");
// console.log("10");
// console.log("12");
// console.log("14");
// console.log("16");
// console.log("18");
// console.log("20");


//Loops
// for loop : 

// for (initialization; condition; increment/decrement) {
//     //block of code
// }

// for(let i = 1; i <= 10 ; i++ ){
//     console.log( 2 * i );
// }

// Question 1: can we do the initialisation of the iterating variable outside the loop ? If yes then how , if no then why not ?
// let i = 1;

// for( ; i <= 10 ; i++ ){
//     console.log( 2 * i );
// }

// Question 2: can we do the increment/decrement of the iterating variable outside the loop ? If yes then how , if no then why not ?
// let i = 1;

// for( ; i <= 10 ; ){
//     console.log( 2 * i );
//     i++;
// }


//  NESTED LOOPING

// for (let i = 1; i < 5; i++) {
//     for (let j = 1; j < 4; j++) {
//         console.log("Value of i is : ", i, "Value of j is : ", j);
//     }
// }



// while loop 
let i = 1;
while (i<10) {
    console.log(i);
    i++;
}

// do-while loop
let i = 1;
do{
    console.log("Value of i is : ", i);
    i++ //Remember this is important , else you will be in infinite loop
}while(i < 1);