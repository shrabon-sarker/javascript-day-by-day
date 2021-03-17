console.log('this is a best out pur')

/*his si a a gootd*/
console.log("t")

// this is  variables rolls 
let currentUserAge = "somethik";
let CurrentUserAge = "this is";
let current_user_age = "this is "

let price =  125;
price = 100;
const name = "john";
//name="biksh"
console.log(price, name)

// data type
let  fullname ="biksah";

console.log( typeof name)
let age = 25;
console.log(typeof age);

let isMarried = true;
console.log( typeof isMarried)

let colors = undefined;
console.log(typeof colors)

let selectedColors =  null;
console.log(typeof selectedColors)


 // Object

 let user = {
     name: "john",
     age: 41,
     hobby: 'reading'
 }

 console.log(user)
 console.log(user.name)
 console.log(user.age)
 console.log(user.hobby)

 console.log(user['name']);
 console.log(user['hobby'])
 console.log(user['age'])


 //Array 

 let friends = ['john', 'mary', 'smith', 'target'];
 console.log(friends)

 console.log(friends[1])
 console.log(friends[2])

 console.log(friends.length)
 console.log(friends[3].length)

// function 

function showMyName(name){
    console.log(name)
    console.log('my name is ' + name)
}

showMyName('john');
showMyName('mary');


function cal(num1, num2) {
    const sum = num1 + num2
    //console.log(sum)
    return sum;
}

 const result = cal(4,7);
 console.log(result)

 function marketing(bus, bike) {
     const taka = bus + bike;
     return taka;
 }

 const stup = marketing(200, 36);
 console.log(stup)

 // template literals

 let myName = 'smith';
 console.log(`this is a name : ${myName}`)

 let message = `hi 
how are you?`;
 console.log(message)

 const Person = {
     name: 'bikash',
     age : 24,
     isMarried: true,
     homeAddress: {
         long: 48.36,
         lat: 52.32
     },
     friends: ['john','mary', 'smith']
 }
console.log(Person)
console.log(Person.name)
console.log(Person.age)
console.log(Person.homeAddress.lat)
console.log(Person.homeAddress.long)
console.log(Person.friends[2])
console.log(Person.friends.length)
console.log(Person.friends[1].length)

 