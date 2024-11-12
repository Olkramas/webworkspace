//05_reduce.js

let points = [40, 100, 1, 5, 25, 10];
//reduce는 누적값을 반환함
let sum = points.reduce((total, currentVal) => {
    //total은 앞에서 작업한 값
    //currentVal은 지금 현재 배열에서 가져온 값
    return total * currentVal; // 0 + 40
}, 1);  //initvalue(0) 초기값 받을 수 있음 : 토탈을 0부터 시작하겠다라는 의미

console.log(sum);

let total = 0;
for(let point of points) {
    total += point;
}
console.log(total);
