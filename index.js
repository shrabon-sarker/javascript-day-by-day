// for loop

for(let index = 1 ; index <= 5; index++){
    console.log(`the for loop output ${index}`)
}

for(let index = 10 ; index >= 1; index--){
    console.log(`this is a dicrement ${index}`)
}

//while loop

let whileLoop = 10;
while(whileLoop <= 7) {
    console.log('this is a while loop output:', whileLoop)
    whileLoop ++;
    
}

let dir = 5;
while(dir >= 0){
    console.log(`this is a dircriment ${dir}`)
    dir --;
    
}
// do while loop
let mi = 100;
do{
    console.log('this is do while loop', mi);
    mi++
}while(mi <=20)
console.log(mi)

// for in loop

const person = {
    name: 'shakip all hasan',
    age: 45,
    brithday: 12-12-1986,
}

for(let shakip in person) {
    console.log(shakip, person[shakip])
}

// for(let ofShkip of person) {
//     console.log(ofShkip)
// }

let name = ['musfikul', 'somo', 'liton', 'mashafi', 'mahomodula']

for(let nameOut in name) {
    console.log(nameOut, name[nameOut])
}

for(let ofName of name) {
    console.log(ofName)
}

let num = [1,2,3,4,5,6,7,8,9]

for(let number in num) {
    
    console.log(number, num[number])
}

for(let ofNumber of num){
    ofNumber += 3;
    console.log(ofNumber)
}

const stringValue = 'bikash';
for(let srtVl of stringValue) {
    console.log(srtVl)
}


for(let ind = 1; ind <= 20; ind++) {
    console.log(ind)
    if(ind === 10) {
        break;
    }
}

for(let con = 1; con <= 30; con++) {
    if(con % 2 === 1) {
        continue;
    }
    console.log(con)
}

//nested loops

for(let nes = 1; nes <= 4; nes++) {
    console.log(nes)
    for(let nest = 1 ; nest <= 4 ; nest++) {
        console.log(nes, nest)
    }
}


//Event odd number

for(let number1 = 1; number1 <= 20; number1++) {
    if(number1 % 2 === 1) {
        console.log(`this is a odd number = ${number1}`)
    }else{
        console.log(`this is a evnet number = ${number1}`)
    }
}

for(let num1 = 1; num1 <= 20; num1++){
    if(num1 % 2 === 1) {
        console.log(`this is a odd number = ${num1}`)
    }
}

for(let num2 = 1; num2 <=20; num2++) {
    if(num2 % 2 === 0) {
        console.log(`this is a event number = ${num2}`)
    }
}

for(let num3 = 1; num3 <= 20; num3+=2) {
    console.log(`this is a odd number = ${num3}`)
}

for(num4 = 2; num4 <= 20; num4+= 2) {
    console.log(`this is a event number = ${num4}`)
}

//sum = [10,20,30,40,50]
// result = 150;

let num10 = [10,20,30,40,50];
let sum = 0;

for(let n=0; n < num10.length; n++){
    console.log(sum + num10[n])
    sum = sum + num10[n];
}

console.log(sum)

// prime number

let nump = 11;

// let isPrime = true;
// for(let i = 2; i <= nump - 1; i++) {
//     if(nump % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime) {
//     console.log('this is a prime number')
// }else{
//     console.log('this is a not prime number')
// }


for(let nump = 10; nump <= 30; nump++) {
    let isPrime = true;
    for(let i = 2; i <= nump - 1; i++) {
        if(nump % i === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        console.log(nump)
    }
}