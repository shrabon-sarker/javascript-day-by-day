// let country = "Bangladesh";
// console.log(country)
// console.log(country[4])
// console.log(country.charAt(4))
// console.log(country.length)

// let mag = "please Repeat are the 'repeat' word";
// console.log(mag.charAt(5))
// console.log(mag.charCodeAt(5))
// console.log(mag.toUpperCase())
// console.log(mag.toLowerCase())
// console.log(mag.includes('repeat', 13))
// console.log(mag.startsWith('are', 14))
// console.log(mag.endsWith('Repeat ', 14))

// search(), ondexOf(),lastIndexOf()

// let mag = "please are repeat the 'repeat' word"; 
// console.log(mag.search('are')) // full
// console.log(mag.indexOf('repeat', 14)) //start  repeat' word
// console.log(mag.lastIndexOf('are', 14)) // last please are repeat the 

// console.log(mag.search('the'));
// console.log(mag.indexOf('repeaty', 16))
// console.log(mag.lastIndexOf('word', 16))

// ==== ==== toString(), Concat(), split() ======

//toString()
// let tem = 155;
// console.log(typeof tem.toString())
// let m1 = "this "
// let m2 = "is ";
// let m3 = "your ";
// let m4 = "name"

// // concat()
// let total = m1.concat(m1, m3, m4)
// console.log(total)
// tolat = m1 + m2+ m3+ m4;
// console.log(total)


// // split()
// let mag = "please are repeat the 'repeat' word"; 
// console.log(mag.split("e", 2)) // " ", '', e (last parmiter limit kaj kre)


// ============= slice(), subStr(), subString() =========

// slice()
let mag = "please are repeat the 'repeat' word."; 
console.log(mag.slice(0, 6)) // index akare value ney
console.log(mag.slice(5, 20))
console.log(mag.slice(5))
console.log(mag.slice())
console.log(mag.slice(0))
console.log(mag.slice(-10, -1))

// subString() 

console.log(mag.substring(0,6)) // index are value ney
// substr()
console.log(mag.substr(0, 14)) // length akare value ney

let message = '\tHe said, "It\'s a \tsunny day.\nHave  a good day.'
console.log(message)


let mags = "rikass";
mags = "bikash" + " shrabon"
console.log(mags)

// replace()

let str = "this is kame : bikash";
let res = str.replace('kame', 'name')
console.log(str)
console.log(res)

// trim()

let name = "      shakip sraker     ";
console.log(name);

let rem = name.trim();
console.log(rem)

// mathch()

let pro = " this si a name bikash are. shra , bikash , the name bikash";
pro = pro.match(/bikash/g);
console.log(pro)




// repeat()
let name1 = "bikash ";
name1.repeat(6)
console.log(name1.repeat(20))

let alni = ' cat cat cat cat';
console.log(alni.replaceAll(/cat/g, 'dog'))

let n = "2545";
console.log(parseInt(n))

let mac = " this is a dom";
console.log(mac.match(/dom/g))

console.log(mac.substr(11, 3))


let muStr = `Prograssing`;
console.log(muStr.replaceAll("s", 'm'))
