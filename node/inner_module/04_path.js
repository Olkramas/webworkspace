//04_path.js
/*경로를 다루는 모듈 */

/*전역변수, 절대경로 */
console.log(__filename);
console.log(__dirname);

/*path모듈을 가져옴 */
const path = require('path');

console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));