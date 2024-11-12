//03_sort.js

let fruits = ["banana", "orange", "apple", "mango"];
//원본데이터가 변경됨
fruits.sort();
console.log(fruits); // "apple", "banana", "mango", "orange" 순서로 정렬되게 됨.

let points = [40, 100, 1, 5, 25, 10]; //1, 5, 10, 25, 40, 100 순서로 정렬됨 
points.sort();
console.log(points);
//sort는 텍스트에 특화돼있다.

points.sort(function(a, b) {
    return a - b;
});
console.log(points);

let emps = [
    {
        eid : 200,
        name :"King"
    },
    {
        eid : 100,
        name : "Edward"
    },
    {
        eid: 300,
        name: "Han"
    }
];
//앞에 객체의 사원번호와 뒤에사원 사원번호를 비교
emps.sort((pre, next) => {
    return pre.eid - next.eid;
});
console.log(emps);