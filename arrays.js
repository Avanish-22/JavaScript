//--------------arrays---------------

const myArray=[0 , 1 , 2 , 3 , 4 , 5 ]
const myHeros=["IronMan","CaptainAmerica"]
console.log(myArray[3]);
console.log(myHeros.length);

myArray.push(6)
console.log(myArray);
myArray.push(7,8,9)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(9)//puts element in the start of the array
console.log(myArray);
myArray.shift()//removes the unshift 
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(4));

const newArray=myArray.join()//converts the same array to string

console.log(myArray);
console.log(newArray);

console.log(typeof newArray);

const otherArray=[0,1,2,3,4,5]
console.log("a", otherArray);

const arr1=otherArray.slice(1,4)
console.log(arr1);
console.log("b", otherArray);

const arr2=otherArray.splice(1,4)
console.log(arr2);
console.log("c",otherArray);







