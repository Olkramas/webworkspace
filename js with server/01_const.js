// const.js

//객체를 상수로 선언 -- 객체 내부의 필드가 변경되지 않는것이 아님!!
const user = {
    "id" : "Hong",
    "age" : 25
}

//객체 내부의 필드의 값을 변경해도 잘 되는 모습
user.id = "Kang";
user.age = 20;

//새로운 필드 추가도 가능
user.ssn = "981015";

//객체를 상수로 선언했을때 이렇게 바꾸는 건 안됨.
//user = {}; -- TypeError: Assignment to constant variable.

console.log(user);