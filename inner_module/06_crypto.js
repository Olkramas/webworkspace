//06_crypto.js

//단방향 암호화

/*crypto모듈 가져오기 */
const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')   //암호화 알고리즘(sha512) createHash어떤 암호화 알고리즘으로 할건지 입력해주는 부분
                    .update(data)
                    .digest('base64');  // .digest('hex'); hex: 더 길게 암호화 할 수 있음.
console.log(encData);