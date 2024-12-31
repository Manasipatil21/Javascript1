//#Prinmitive Datatypes 
//7 types :String ,Number,boolean,null,undefined,Symbol,BigInt

//Reference (Non primitive)
//Array,Objects,functions

const score =100
const scoreValue =100.3
const isloggedIn =false
const outsideTemp =null
let userEmail ;
const Id = Symbol('123')
const anotherId =Symbol('123')
console.log(Id === anotherId)

const bigNumber = 24567896543987654n

const sisters =["Software Developer","pooja", "poonam","mayuri"]
let myobj={
    name:"manasi",
    age:22
}

const myFunction = function() {
    console.log("Hello world")
}
console.log(typeof myobj)
