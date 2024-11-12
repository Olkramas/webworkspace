//07_Destructuring.js  구조분해 할당

//1) 객체
let person = {
    firstName : "John",
    lastName : "Doe",
    age : 37,
    email : "john@gmail.con",
    country : "USA"
};

let {lastName, email} = person; //객체 내부의 필드값을 가져오는 변수가 됨 {lastName, email} 필드명이어야함.
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}) {   //매개변수로 사용도 가능
   console.log(`${lastName}, ${firstName}`);
}

getFullName(person);

//2) 배열
let scores = [70,80,90];
//배열을 구조분해 할당할경우 대괄호를 사용 인덱스를 사용해서 변수이름은 임의로 해도 됨.
let [a, b, c] = scores;

console.log(a);
console.log(b);
console.log(c);

