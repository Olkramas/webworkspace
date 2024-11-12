//03_process_os.js

const process = require('process');
const os = require('os');

console.log(process.env.JAVA_HOME);
/*함수기반 으로 가져옴 */
console.log(os.cpus()); //cpu코어 정보
console.log(os.tmpdir()); //임시 저장 경로