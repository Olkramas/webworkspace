// 02_declare_fun.js

//js에서 함수를 선언하는 방법



// 1) 함수 선언문 => var에 가까운 선언방식(동일한 이름의 함수선언 가능)

/*
//아래와 같은 형태임 실제로(js에서 함수는 데이터로 취급됨.)
var plus = function (x, y, z) {
    return (x + y + z);
}
    */
function plus(x, y) {
    return (x + y);
}
//아래같이 선언해도 문제가 안됨
function plus(x, y, z) {
    return (x+ y+ z);
}

console.log(plus(1, 2, 3)); //6
//아래는 nan이나옴
console.log(plus(1, 2));


// 2) 함수 표현식 => let, const방식으로 선언함.
const printMsg = function(keyword) {
    return "result : " + keyword;
}


// 3)화살표 함수 () => {}
//화살표 함수에서 this는 window를 호출함. node는 다름 (gloval) 화살표함수와 this는 궁합이 안좋음 메소드에서 호출할 때 사용하기
let aray = [ 1, 2, 3, 4, 5];
aray.forEach((val)=> {
    console.log(val);
});
//aray.forEach(val => console.log(val));
aray.forEach((val, idx, array) => {
    let msg = `${val} : ${idx} : ${array}`; //template literal형식
    console.log(msg);
})

//표현식 방식으로 사용하면 화살표함수에도 고유의 이름을 붙여줄 수 있음.
const multi = (x, y) => x * y;
console.log("multi 함수의 결과 = " + multi(10, 5));