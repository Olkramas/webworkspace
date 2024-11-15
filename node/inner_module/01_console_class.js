//01_console_class.js

/*node.js의 내장 모듈 fs가져오기 */
const fs = require('fs');
/*console객체의 구조 분해 할동을 통해 Console 클래스를 가져옴 */
const {Console} = require('console');

/*fs.createWriteStream함수로 해당 파일경로로 쓰기 가능한 스트림 생성 */
const logOutput = fs.createWriteStream('./logs/stdout.log');
const errOutput = fs.createWriteStream('./logs/stderr.log');

/*새로운 콘솔 인스턴스를 만듦 */
const logger = new Console( {stdout : logOutput, stderr : errOutput} ); //stdout(일반로그), stderr(에러로그)

let count = 5;
logger.log('count : %d', count);
logger.error(`count : ${++count}`);

/*
    1. console객체의 구조분해 활동을 통해 Console클래스를 가져옴
    2. 파일을 쓰고, 읽기 위한 스트림을 생성
        스트림 -- 데이터가 흐르는 "길"
    3. 가져온 클래스를 이용해서 새로운 Console클래스의 인스턴스를 만듦.
        --콘솔 클래스는 stdout으로 일반로그를 기록, stderr로 에러 로그를 기록함
    4. 스트림을 만들면서 설정한 경로에 파일이 없다면 파일을 만들어서 일반or에러 로그를 작성할 수 있음
*/