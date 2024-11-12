console.log(__filename);
console.log(__dirname);

console.log('----------------------')
const path = require('path');
console.log(path.dirname);

console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));