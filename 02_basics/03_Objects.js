// object literals
const mySym =Symbol("Key1")
const JdUser={
    name:"Manasi",
    age:25,
    "FullName":"ManasiPatil",
    [mySym] :"myKey1",       // Symbol
    location :"Pune",
    email:"mansip23@gmail.com",
    isloggedIn:false,
    lastLoginDyas :["Monday","saterday"]
}
myArray =["m","a"]

// console.log(JdUser.email)
// console.log(JdUser["email"])
// console.log(JdUser.FullName)
// console.log(JdUser[mySym])

// JdUser.email = "fhfjkwshm"
// console.log(JdUser.email)

//Object.freeze(JdUser)
JdUser.email = "fhfjkwshm"
console.log(JdUser)


JdUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JdUser.greeting());

JdUser.greeting2 = function(){
    console.log(`Hello JS user1,${this.name}`);
}
console.log(JdUser.greeting2());