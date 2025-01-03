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


//********************************************************************

// Stack (Primitive)-Copy get,Heap (Non- Primitive)-Referece get
let myYouTubeName = "Manasip811@gmai.com"
let anothername = myYouTubeName
anothername="Manasi"
console.log(anothername)
console.log(myYouTubeName)
let user ={
    email:"mp7482@gmail.com",
    upi:"647236"
}
console.log(user)
let usertwo =user

usertwo = "hnjkwehfjkwhf"
console.log(usertwo)
