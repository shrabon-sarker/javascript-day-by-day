// 1
// for(let num = 1; num <= 100; num++) {
//     console.log(num)
// }

//2

// for(let num2 = 100; num2 >= 1; num2--){
//     console.log(num2)
// }


// let num = 100;
// let sum = 0;

// for(let n = 1; n <= num; n++) {
    
//     sum += n;
    
// }

// console.log(sum)
// let num = 100;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//     if(i % 2 === 0) {
//         //console.log(i)
//         sum += i;
//     }
// }

// console.log(sum)

// let num1 = 99;
// let sum1 = 0;
// for(let i = 1; i <= num; i++) {
//     if(i % 2 === 1) {
//         //console.log(i)
//         sum1 += i;
//     }
// }

// console.log(sum)


// let year = 2000;

// for(let i = 1800; i <= year; i++) {
//     if(i % 400 === 0) {
//         console.log(i)
//     }else if(i % 4 === 0 && i % 100 !== 0) {
//         console.log(i)
//     }
// }

// let value = 15;
// let mult = 0;
// for(let i = 1; i <= 10; i++) {
//     console.log(`${i} X ${value} =`,i*value)
//     mult = i*value

// }

// console.log(mult)

// factorial
// let total = 1;
// for(let i = 1; i <= 5; i++) {
//    total *= i;
// }

// console.log(total)

// let div = 12;
// for(let i = 1; i <= div; i++) {
//    if(div % i === 0) {
//        console.log(i)
//    }
// }

// let divNum = 12;

// for(let n = 1; n <= divNum; n++){
//     if(divNum % n === 0) {
//         console.log(n)
//     }
// }

// let num = 10;
// for(let i = 1; i <= num; i++){
//     console.log(i)
//     if(i === 6) {
//         break
//     }
// }

// let num = 20;
// let sum3 = 0;
// for(let i = 1; i <= num; i++) {
//     //console.log(i+sum3)
//     console.log(i)
//     sum3 += i;
//     if(i === 6){
//         break
//     }
// }

// console.log(sum3)


// let start;
// for(let i = 1; i <= 5; i++) {
//     for(j = 1; j <= i; j++){
//         start = start + ("*")
        
//     }
    
//     console.log(start)
// }
let start = 0;
for( let n = 5; n >= 1; n--) {
    for(let j = 1; j<=n; j++){
        start = start + ("*")
    }
    console.log(start)
}
