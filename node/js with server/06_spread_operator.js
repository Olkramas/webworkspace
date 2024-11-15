//06_spread_operator.js
//펼침연산자: spread Operator

let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

//기존
let arr3 = [];
arr1.forEach(val => arr3.push(val));
arr2.forEach(val => arr3.push(val));
console.log("기존방식: " + arr3);

//펼침연산자 활용
let newArr = [...arr1, ...arr2];
console.log("새로운: " + newArr);

//문자열도 가능함  
let str = "CD";
let strAry = [...str];
console.log(strAry);
console.log(str[0]);