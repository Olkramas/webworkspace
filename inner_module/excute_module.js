//excute_module.js

/*변수에 모듈을 한번에 담는 방법 */
const cal = require('./calculator.js');

//구조할당: 사용하고자 하는 대상만 골라냈음
const {add} = require('./calculator.js');

let result = cal.add(10, 5);
console.log(result);

result = add(20, 50);
console.log(result);