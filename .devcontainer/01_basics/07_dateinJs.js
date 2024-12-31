//Dates
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString ())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate);
let mycreatedDate = new Date(2024 , 0, 24,5,3,78)
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleString());

let mycreatedDates = new Date("2024-01-24")
console.log(mycreatedDates.toLocaleString());

let mycreated = new Date("24-01-2024")

let myTimeStamp = Date.now()
console.log(mycreatedDates.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMilliseconds());
console.log(newDate.getSeconds());

newDate.toLocaleString('defult',{
    weekday : "long",
  
})