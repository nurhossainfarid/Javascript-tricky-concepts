// falsy
/* 
1) Boolean `false` is provided falsy
2) 0 is falsy 
3) But empty string provided falsy
4) all kinds of undefined provided falsy
5) NaN(Not a Number) is provided falsy
*/
// truthy
/* 
1) Boolean `true` is provided truthy
2) All kinds of number(positive and negative) are truthy without 0. Because 0 is provided falsy 
3) All kinds of string are truthy. when we write boolean `false` in string. Its also provided truthy.
4) array[] and object{} provided truthy . Its like empty.
anything else that is not falsy will be truthy 
*/
let a = true;

if (a) {
    console.log(`${a} is truthy.`);
} else {
    console.log(`${a} is falsy.`);
}