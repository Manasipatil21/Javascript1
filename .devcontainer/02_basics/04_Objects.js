//Object Singlton


const tinderUser = new Object() //--- this is singletone object 
const tinderUserne ={}   // this is not singlton object but both give new object
tinderUserne.id = "45624"
tinderUserne.name ="Manasi Patil"
tinderUserne.isLoggedInUser =false

// console.log(tinderUser)
// console.log(tinderUserne)

const regularUser = {
    email :"manasi@44gmail.com",
    fullname :{
        userfullname :{

            firstname:"Manasi",
            lastname: "Patil"

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:"a", 2 :"b"}
const obj2 ={3:"a", 4 : "b"}
const obj4 ={3:"a", 4 : "b"}
const obj5 ={3:"a", 4 : "b"}
const obj6 ={3:"a", 4 : "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3  = {...obj1,...obj2,...obj4}
console.log(obj3);
console.log(Object.keys(tinderUserne));
console.log(Object.values(tinderUserne));
console.log(Object.entries(tinderUserne));
console.log(tinderUserne.hasOwnProperty("isLoggedInUser")
);



const course ={
    coursename :" ja in hindi",
    price :"999",
    courseInstructor : "manasi"
}
//course.courseInstructor

const{courseInstructor : instructor} = course
console.log(instructor)

const navbar =({company})=>{

}
navbar(company ="Manasi")


// {
//     "name" :"manasi",
//     "coursename" :"js in hindi",
//     "price" :"free"
// }
[
    {},
    {},
    {}
]