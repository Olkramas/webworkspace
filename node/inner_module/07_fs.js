//07_fs.js

/*fs모듈 가져오기 (파일읽기, 쓰기, 편집, 제거)*/
const fs = require('fs');

const data ="Hello World!!";

/*파일 쓰기 비동기 작업 */
fs.writeFile('./sample.txt', data, 'utf8', (err)=>{     //경로설정, 실제로 작성하고자하는 데이터, 한글 기본 인코딩:utf-8, 콜백함수
  /*결과에대한 처리를 위해 콜백함수 */
  if(err) {
    throw err;
  }
  console.log('파일쓰기 완료!');
});

/*파일 읽기 비동기 */
fs.readFile('./sample.txt', 'utf8', (err, result)=>{     //값을 읽을때도 같은 인코딩 방식으로 디코딩을 해야함. (utf16le이걸로 하면 다깨짐)
    if(err) {
        throw err;
    }
    console.log(result);
})

/*파일을 사용하고 있으면 동시접속을 허용하지 않기 때문에 쓰기 - 읽기 순서대로 실행됨. */

/*작업종료가 먼저 실행됨 */
console.log('작업종료');

/*파일과 노드 사이에 스트림으로 연결되어 쓰기 읽기가 가능해짐. */
