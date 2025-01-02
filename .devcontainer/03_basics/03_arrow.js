const user ={
    username :"manasi",
    price :999,

    welcommessage :function(){
        console.log(`${this.username}, Welcome to Website`);
       // console.log(this)
    }
}
// // user.welcommessage()
// // user.username ="Patil"
// // user.welcommessage()

//console.log(this)


// function chai(){
//     let username ="Manasi"
//     console.log(this.username)
// }chai()


const chai = ()=>{
    let username = "manasi"
    console.log(this)
}
//chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2)
const addTwo=(num1,num2) => ({username :"manasi"},num2)
console.log(addTwo(3,4))