//Array
const myHeros =   [ "salmaan","Shahrukh"]
const newArray =   [ 0,1,2,3,4,5]
const array2 = new Array(1,2,3,4)

console.log(newArray[0])
console.log(typeof array2 )
console.log(newArray[1])


//Array Methods 

//newArray.push()
//newArray.pop()//remove last value from array
//newArray.unshift(9)
//newArray.shift()
// console.log(newArray.includes(9))
// console.log(newArray.indexOf(4))
// console.log(newArray)
const newArry = newArray.join()

// console.log(newArray)
// console.log(newArry)
// console.log("A",newArray)

const myn1 = newArray.slice(1,3)

console.log(myn1);
console.log("B",newArray)

const myn2 = newArray.splice(1,3)
console.log("c",newArray)
console.log(myn2)