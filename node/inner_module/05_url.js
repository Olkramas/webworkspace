//05_url.js

const url = require('url');

/*url을 whatwg객체에 저장 */
let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

/*문자열로 돼있는 url을 하나하나 다쪼개서 출력 */
console.log(whatwg);
console.log(whatwg.port);

/*구조분해 할당으로 url의 포트 사용 */
let {port} = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(port);

/* searchParams는 객체인데 forEach로 접근 가능, 데이터 타입은 UrlSearchParams클래스*/
let datas = whatwg.searchParams;
console.log(datas);
datas.forEach((val, key) => {
    console.log(key, val);
})
/*배열 메소드forEach를 사용할 수 있는데 배열이 아니고 UrlSeachParams클래스의 객체라서 키와 값으로만 이루어져 있음. */