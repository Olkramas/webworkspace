//my sql 모듈 가져오기: db와의 연결
const mysql = require('mysql');

//쿼리문 가져오기: 쿼리문
const sql = require('./sql.js');

//my sql연결 풀 생성 : 많은 사용자의 요청을 동시에 처리하기 위한 mysql 연결을 여러개 만들어 관리하는 방식
const pool = mysql.createPool({
    host: 'localhost',  //db서버의 주소
    port: '3306',       //my sql의 기본 포트: 3306
    user: 'dev01',      //db에 접속하는 사용자 계정
    password: '1234',   //사용자 계정의 비밀번호
    database: 'dev',    //사용할 데이터 베이스 이름
    connectionLimit: 10 //최대 연결개수
})
              //alias(사용할 쿼리문의 별칭), values(값)
const query = (alias, values) => {
                        //resolve 비동기 작업이 성공하면 호출, reject 실패하면 호출
    return new Promise((resolve, reject) => {
        let excuteSql = sql[alias]; //가져온 sql.js모듈에서 별칭으로 쿼리문을 가져옴
        //console.log(excuteSql);
        
        //pool.query는 연결풀에서 쿼리를 실행하는 메소드
        pool.query(excuteSql, values, (err, results) => {
            if(err) {
                console.log(err);
                reject({err});
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = {
    query
}