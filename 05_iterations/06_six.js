// const coding =["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//    // console.log(item);
//     return item
// })
// console.log(values);


//const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=> {return num > 4})
// console.log(newNums);

// const newNums =[]

// myNums.forEach((num)=>{
//     if(num >4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "red",
        "type": "station 435",
        "registration":'2025-03-03',
        "capacity": 6
   }]

 //const   userCars = cars.filter((cr)=> cr.color ==='purple')
const userCars =cars.filter((cr)=>{ return cr.registration === '2025-03-03' && cr.capacity === 6})
console.log(userCars)

