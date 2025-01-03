const mynums =[1,2,3]

// const myTotal = mynums.reduce(function (acc,currentVal){
//     console.log(`acc:${acc} and CurrentVal : ${currentVal}`)
//     return acc+currentVal
// },0)

// const myTotal = mynums.reduce((acc,curr)=>acc+curr,0)

// console.log(myTotal);


const shoppingCart =[
    {
        itemName :"js course",
        price :1999
    },
    {
        itemName :"Sql Course",
        price :1000
    },
    {
        itemName :"Csharp course",
        price :2000
    },
    {
        itemName :"Data Science Course",
        price :2500
    }

]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);