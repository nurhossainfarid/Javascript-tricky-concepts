const foo = "test" 
const bar = "test"  
console.log(foo == bar) //true
console.log(foo === bar) //true

const number = 1234 
const stringNumber = '1234'  
console.log(number == stringNumber) //true
console.log(number === stringNumber)  //false

// the same value difference type
console.log(0 == false) //true
console.log(0 === false) //false

// the empty value 
const str = ""
console.log(str == false) //true
console.log(str === false) //false