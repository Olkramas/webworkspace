//05_url.js

const url = require('url');

let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
/*문자열로 돼있는 url을 하나하나 다쪼개서 출력 */
console.log(whatwg);
console.log(whatwg.port);

let {port} = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(port);

/* searchParams는 객체인데 forEach로 접근 가능, 데이터 타입은 UrlSearchParams클래스*/
let datas = whatwg.searchParams;
console.log(datas);
datas.forEach((val, key) => {
    console.log(key, val);
})