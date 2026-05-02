//primitive datatypes

//7 types:
//string, number, boolean, null, undefined, Symbol, BigInt

const id=Symbol(123)
const anotherid=Symbol(123)
console.log(id);
console.log(anotherid);
console.log(id==anotherid)
console.log(id===anotherid);

const bigNumber=7892098723902n
console.log(typeof bigNumber);

const heroes=["shaktimaan","naagraj","doga"]
let myObj ={
    name:"avanish",
    age:22,
}

const myfunction=function(){
    console.log("Hello Avanishh");
    
}
console.log(typeof (myfunction));
console.log(typeof (myObj));


//stack(primitive), heap(non-primitive/reference)

//Reference  (Non-Primitive)
//Arrays, Objects, Functions
