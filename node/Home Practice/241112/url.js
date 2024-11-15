const url = require('url');
//console.log(url);

let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(whatwg);
console.log(whatwg.port);

let datas = whatwg.searchParams;
console.log(datas);
datas.forEach((val, key) => {
    console.log(key, val);
})