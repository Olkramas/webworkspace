//calculator.js
//간단한 사칙연산 기능을 가진 모듈

const defaultNum = 1;

function add(x, y ) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multi(x, y) {
    return x * y;
}

function devide(x, y) {
    return x / y;
}

/*모듈화: 아래방식을 통해 가능*/
/*범위를 지정해줄수 있다고 생각해보기 외부에서 접근할 수 있게 설정 excute_module.js에서 어떻게 불러오는지 확인하기*/
module.exports = {
    /*아래 두가지의 메소드에 대해서만 외부에서 접근을 할 수 있게 만들었음. */

    add,    //키와 값이 같다면 하나만 써도 됨. (add이름으로 필드명 선언, 실제 값은 함수 "add" : add(함수))
    "mul" : multi //객체를 이루는 필드명과 필드가 가지고 있는 실제 값 ("mul"으로 필드명 선언 : multi(함수))
};

