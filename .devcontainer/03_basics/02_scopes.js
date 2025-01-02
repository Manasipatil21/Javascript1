
var c=300
let a=  300
if(true){
    let a = 20
    const b = 20
     var c = 30
     console.log("inner :" + c)
  
}
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(c);

for(let i=0 ; i<Array.length;i++){
    const element =Array[i];
}

function one (){
    const username ="Manasi"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username ="manasi"
    if(username === "manasi")
    {
        const website ="youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)

//++++++++++++++++++++++++++++intresting++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num +1
}


const addTwo = function(num){
    return num +2
}
console.log(addTwo(5))
