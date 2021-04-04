// boject 

// const user = {
//     name: "shrakip all hasan",
//     age: 25,
//     hobbuy: 'full stack developer',
// }

// console.log(user)

// // dot 
// console.log(user.name);
// console.log(user.age)

// // bracket 

// console.log(user['hobbuy'].toUpperCase())
// console.log(user['name'])

// // Add 
// user.email = "damo@gmail.com";
// user.phone = 013655656575;
// user.books = "English"
// user.isMarried = true;

// // Update

// user.age = user.age + 20;
// user.isMarried = false
// user.phone = 01710000222;
// user.books = user.books + " Learing"

// // delete 

// delete user.isMarried
// delete user.phone;

//====================================
// object Methods & this keyword

// const Person = {
//     name: "mosfiuk rohoman",
//     age: 38,
//     isMarried: true,
//     phone: 01720005555,
//     friends: ['smith', 'mary'],
//     selectedColor: null,
//     calculateAge: function() {
//         console.log(this)
//         console.log(`this is a ${this.name.toUpperCase()}update age : ${this.age}`)
//     }

// }

// Person.calculateAge()

// //========================================
// // Traversing Object Entries

// const Person1 = {
//     name: "mosfiuk rohoman",
//     age: 38,
//     isMarried: true,
//     phone: 01720005555,
//     friends: ['smith', 'mary'],
//     selectedColor: null,
//     calculateAge: function() {
//         console.log(this)
//         console.log(`this is a ${this.name.toUpperCase()}update age : ${this.age}`)
//     }

// }

// for(let key in Person1){
//     console.log(key, Person1[key])
// }

// // for( let val of Person1) {
// //     console.log(val)
// // }

// console.log(Object.keys(Person1))
// console.log(Object.values(Person1))

// for(let key of Object.keys(Person1)) {
//     console.log(key)
// }

// for( let val of Object.values(Person1)){
//     console.log(val)
// }

// //=============================================
 
// const salary = {
//     john: 25000,
//     smith: 30000,
//     mary: 350000,
//     carlos: 400000,
//     shra: 2000000,
//     bon: 505050,
//     david: 32333
// }

// let sum = 0;

// for(let key in salary){
//     console.log(key, salary[key])
//     sum += salary[key]
// }

// console.log(sum)

// let plus = Object.values(salary);

// for(let val of plus) {
//     console.log(val)
//     sum += val
// }

// console.log(`this is a total cost : ${sum}`)

// // ==========================================
// // Oject Destructuring 

// const user1 = {
//     name: 'smith',
//     age: 25,
//     email: "smith@gmail.com",
//     favBooks: {
//         name: 'normal people',
//         author: 'sally Rppney',
//         address: {
//             phone: 01445245232,
//             roadOn: 5,
//             hous: 2,
//             email: "damo@gmail.com"
//         }

//     }


// }
// const {name, age, email, favBooks} = user1

// const { name: title, author, address} = favBooks

// const { phone, roadOn, hous, email: addressEmail} = address

// console.log(name)
// console.log(age)
// console.log(email)
// console.log(title)
// console.log(author)
// console.log(phone)
// console.log(roadOn)
// console.log(hous)
// console.log(addressEmail)


//=============================================

// Doctor object 

// const docObject = {
//     name: "smith",
//     designation: 'juabey specialist',
//     clinic: {
//         name: "happy care center",
//         address: {
//             long: 25.63,
//             lat: 23.36
//         }
//     },
//     operation: function(){
//         console.log(`${this.name} started doing operarion`)
//     }
// }



// const {name, designation, clinic:{name: clinicName, address:{long, lat}}} = docObject


// console.log(docObject)
// console.log(name)
// console.log(designation)
// console.log(clinicName)
// console.log(long)
// console.log(lat)

// docObject.operation()

// ===============================================

// cloning an Object 

// const user = {
//     name: 'smith', 
//     age: 25,
//     isMarried: false
// }

//const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age;
// copiedUser.isMarried = user.isMarried;

// for(let key in user){
//     //console.log(key, user[key])
//     copiedUser[key] = user[key]
// }

//const copiedUser = {...user}
// const copiedUser = Object.assign(user)
// console.log(copiedUser)

// ===============================================

// console.log(Math.PI)
// console.log(Math.random());
// console.log(Math.ceil(1.2))
// console.log(Math.floor(2.7))
// console.log(Math.round(2.6))
// console.log(Math.max(10,20,300, 7000, -76))
// console.log(Math.min(10,20,300, 7000, -76))
// console.log(Math.pow(4,36))


//=============================
// json 

// const user = {
//     name: 'smith', 
//     age: 45,
// }

// const userDate = JSON.stringify(user);
// console.log(userDate)

// console.log(JSON.parse(userDate))

console.log(Math.E)
console.log(Math.abs( - 10))
console.log(Math.acos(-0))
console.log(Math.acos(-1))
console.log(Math.acosh(2))
console.log()
console.log()
console.log()


