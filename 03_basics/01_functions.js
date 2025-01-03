

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("I");
}
//sayMyName()

function addTwoNumbers(num1, num2){
//    let result = num1+num2
//    return result
return num1 +num2
}
//addTwoNumbers(3,5)

const result = addTwoNumbers(3,5)
//console.log("Result : ",result);

function loginUserMessage(Username){
    if(Username === undefined)
    {
        console.log("Please Enter a User Name") ;
       return
    }
    return `${Username} just logged In`
}
// console.log(loginUserMessage("Manasi"))
//console.log(loginUserMessage())

function loginUserMessage(Username= "sam"){
    if(!Username)
    {
        console.log("Please Enter a User Name") ;
        return
    }
    return `${Username} just logged In`
}
//console.log(loginUserMessage("Manasi"))

function calculatecartPrice(val1,val2,...num1){
return num1
}

//console.log(calculatecartPrice(100,200,300,46))
//Pass to object in function
const user ={
    username :"manasi",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    username :"Sam",
    price : 399
});
// For pass to Array in Function

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
return getArray[1]
}

console.log(returnSecondValue(myNewArray))