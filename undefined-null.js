/* --------------------------------------------- show undefined -------------------------------------------------
1. variable value not assigned
2. when didn't write return in function
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. assigning array element out of the range
7. assigning delete array element
8. explicitly the value set undefined
*/


// 1. variable value not assigned
let first;
// console.log(first);

// 2. when didn't write return in function
function number(num1, num2) {
    num1 + num2;
}
// console.log(number(4,5));

// 3. just wrote return but didn't return anything
function sum(num1, num2) {
    if (num1 < 12) {
        return;
    }
    const sum = num1 + num2;
    return;
}
// console.log(sum(3,10));

// 4. parameter that isn't passed
function subtraction(num1, num2) {
    const result = num1 - num2;
    console.log(num2);
    return result;
}
// subtraction(4);

// 5. property that doesn't exist in an object
const attitudeBoy = {
    name: `Nur Hossain Farid`,
    age: 20,
    student: `Department of software engineering`
};
// console.log(attitudeBoy.phoneNumber)

// 6. assigning array element out of the range
const favoriteNumber = [3, 2, 4, 7];
// console.log(favoriteNumber[4]);

// 7. assigning delete array element
delete favoriteNumber[2];
// console.log(favoriteNumber[2]);

// 8. explicitly the value set undefined
const result = undefined;
// console.log(result);


/* -------------------------------------------------- show null --------------------------------------------- */
// explicity the value set null
const boss = {
    name: `Nur Hossain Farid`,
    companyName: null,
}
// console.log(boss.companyName);