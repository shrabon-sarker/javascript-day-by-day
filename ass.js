// (1)

let num = 8;

if(num % 2 === 0) {
    console.log('this is a event number')
}else {
    console.log('this is a old number')
}

switch(num ) {
    case 'num % 2 === 0' :
        console.log('this is a event number')
        break;
    default:
        console.log('this is a old number')    
}


// (2) ans:

const number = 1;

if(number > 0){
    console.log(`this is a positive number ${number}`);
}else if(number < 0) {
    console.log(`this is a nagetive number ${number}`)
}else {
    console.log('this is a zero')
}

const ternaryPro = (number > 0) ? `this is a positive number ${number}` : (number < 0) ? `this is a nagetive number ${number}` : 'this is a zero'

console.log(ternaryPro)

// (3)

let boro = 20;
let chuto = 10;

// if(boro >= 20) {
//     console.log(`this is a boro ${boro}`)
// }else if (chuto <= 10) {
//     console.log(`this is a chuto ${chuto}`)
// }

if(boro >= chuto) {
    console.log(`this is a boro ${boro}`)
    
}else {
    console.log(`this is a chuto ${chuto}`)
}

console.log(boro >= chuto ? `this is a boro ${boro}` : `this is a chuto ${chuto}`)

//(3)
let big = 300;
let mediam = 200;
let small = 100;

if(big <= small && big <= mediam) {
    console.log('this is a small')
} else if(mediam <= big && mediam <= small) {
    console.log('this is is not working')
}else if(small <= big && small <= mediam) {
    console.log(`this is a small`)
}

//(5)

let five = 5;
let alliven = 11;

if(five / alliven)  {
    console.log('this is a 1')
}else {
    console.log('not working')
}

let number1 = 102;
let number2 = 200;

if(number1 % 2 ===0 || number1 >= number2) {
    console.log('Number is even and it is in')
}else {
    console.log('condition not fulfilled')
}

let day = 5;

if( day === 1) {
    console.log('sunday')
}else if(day === 2) {
    console.log('Monday')
}
else if(day === 3) {
    console.log('Tuesday')
}else if(day === 4) {
    console.log('Wednesday')
}else if(day === 5) {
    console.log('Thursday')
}else if(day === 6) {
    console.log('Friday')
}else if(day === 7) {
    console.log('sturday')
}else {
    console.log('this is a not day')
}

let week = (day == 1) ? 'sunday' 
    : (day === 2) ? 'Monday' 
    : (day === 3) ? 'tuesday' 
    : (day === 4) ? 'wednesday' 
    : (day === 5) ? 'Thursday' 
    : (day === 6) ? 'Friday' 
    : (day === 7 ) ? 'sturday' 
    : 'this is a not day'

console.log(week)

switch(day) {
    case (1):
        console.log('sunday');
        break;
    case (2):
        console.log('Monday');
        break;   
    case (3):
        console.log('tuesday');
        break; 
    case (4):
        console.log('wednesday');
        break;
    case (5):
        console.log('Thursday');
        break;
    case (6):
        console.log('Friday');
        break;
    case (7):
        console.log('sturday');
        break;
    default:
        console.log('this is a not day')
}

let fizzNumber = 20;
let trnary = (fizzNumber % 3 === 0 && fizzNumber % 5 === 0) ? 'FizzBuss' 
    : (fizzNumber % 3 === 0) ? 'Fizz' 
    : (fizzNumber % 5 === 0) ? 'Buzz' 
    : 'nothing!!'
console.log(trnary)


let vowel = 'o';

if(vowel ==='a' || vowel ==='e' || vowel ==='i' || vowel ==='0' || vowel === 'u' || vowel ==='A' || vowel ==='E' || vowel ==='I' || vowel ==='O' || vowel === 'U') {
    console.log('this is a Vowel')
}else {
    console.log('this is a consonant')
}

let charachter = 'B';

if(charachter === 'a' || charachter === 'b' || charachter === 'c' || charachter === 'd' ||
charachter === 'e' || charachter === 'f' || charachter === 'g' || charachter === 'h' ||
charachter === 'i' || charachter === 'j' || charachter === 'k' || charachter === 'l' ||
charachter === 'm' || charachter === 'n' || charachter === 'o' || charachter === 'p' ||
charachter === 'q' || charachter === 'r' || charachter === 's' || charachter === '' ||
charachter === 'u' || charachter === 'v' || charachter === 'x' || charachter === 'y' || charachter === 'z'

){
    console.log('lowercase')
}else {
    console.log('Uppercase')
}

let year = 2001;

if(year % 400 === 0) {
    console.log(`this is a leap year ${year}`)
}else if(year % 4 === 0 && year % 100 !== 0) {
    console.log(`this is a leap year ${year}`)

}else {
    console.log(`this is a not leapyear ${year}`)

}


let distance = 56;
if(distance <= 0 || distance > 300) {
    console.log('not intersted')

}else if(distance <= 100) {
    console.log('this is a cng vara = 120')
} else if(distance <= 200) {
    console.log('this is a cng vara = 200')

}else if(distance <= 300) {
    console.log('this is a cng vara = 300')

}
