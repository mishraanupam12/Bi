console.log("hello")//hello as input
//program which is going to print browser console
//output

//examples of inbuilt functions
//log()
//write()
//alert()
//promt()

//user defined function
/**
 * 1.will take some input // not madatory
 * 2.should process the input
 * 3.some output

//creating a function - function definiton
function printName()
{
console.log("hello")
}
//Dry principle = dont repeat by yourself
//function call / invoke
printName()
printName()
printName()
printName() 

//input

function printCustomName(fname,lname,age){
    console.log(`Hello ${fname}${lname}:your age is :${age}`)
}
printCustomName("joan","anderson",23)
printCustomName("peater","williams",25)
function sumOfNumbers(a,b){
    let c=a+b
    let d=a-b
    //console.log(c)
    //return 30 =>result will be 30
    //return c,d =>result will be d
    return [c,d]
}
//sumOfNumbers(20,30)
//console.log(sumOfNumbers(10,20))
let result = sumOfNumbers(20,30)
console.log(result[0],result[1])*/

//Math operations
//properties
console.log(Math.PI)
console.log(Math.SQRT2)
//functions
console.log(Math.abs(-10))
console.log(Math.abs(10))
console.log(Math.sqrt(16))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.5))
console.log(Math.max(10,4,5))
console.log(Math.min(10,4,5))
console.log(Math.pow(3,2))






















