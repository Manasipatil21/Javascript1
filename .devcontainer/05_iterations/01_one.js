//for 

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value :${i}`);
//   for (let j = 1; j <= 10; j++) {
//    // console.log(`inner loop value :${j} and inner loop ${i}`);
//    console.log(i+'*'+j+'='+i*j);
    
//   }
//}

// let myarray =["flash","batman","Superman"]
// console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

//break and continue
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}