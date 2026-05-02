//this is about strings
const name="avanish"
const repo=50
console.log(name + repo);//bad practice

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName= new String('Avanish')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
console.log(gameName.substring(0,6));
console.log(gameName.slice(-6,4));

const newStringOne="   avanish    "
console.log((newStringOne));
console.log(newStringOne.trim());

const url="https://avanish.com/avanish%20raj%20anand"
console.log(url.replaceAll('%20','-'));

console.log(url.includes('avanish'))
console.log(url.includes('prettier'))
const newuser= "Avanish Raj Anand"
console.log(newuser.split('-'));
