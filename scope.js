// block scope
{
    // console.log(sum); we can't declare 'sum' variable out of the condition. Because 'sum' is a block scope.
}
// console.log(name); we can't declare 'name' variable out the karly because 'name' is a local variable
function subtraction(num1, num2) {
    if (num1 === num2) {
        const sum = num1 + num2;
        console.log(sum);
    }
    // console.log(sum); we can't declare 'sum' variable out of the condition. Because 'sum' is a block scope.
    // return sum; we can't return 'sum' variable out of the condition. Because 'sum' is a block scope.
}


// local scope
{
    let name = `Nur Hossain Farid`;
    console.log(name);
}
// console.log(name); we can't declare 'name' variable out the karly because 'name' is a local variable
function subtraction(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}
subtraction(4, 7);
// console.log(sum); sum is not defined because this is a local scope


// global scope
const myId = `221-35-843`;
{
    console.log(myId);
}
// console.log(name); we can declare 'myId' variable in-out the karly because 'myId' is a global scope variable
function subtraction(num1, num2) {
    const sum = num1 + num2;
    console.log(`${sum}`);
    console.log(myId);
    return sum;
}
subtraction(4, 7);
console.log(myId);
