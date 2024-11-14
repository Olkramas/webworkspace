//이 파일에서 my sql과 접속을 진행
// my sql모듈 가져오기
const mysql = require('mysql');
//쿼리문 가져오기
const sql = require('./sql.js');

/*
  커넥션 풀 생성(미리 db와의 접속을 선점해놓음) 

*/
const pool = mysql.createPool({
    host: `localhost`,
    port: `3306`,
    user: `dev01`,
    password: `1234`,
    database: `dev`,    //접속하고자하는 데이터베이스
    connectionLimit: 10 //최대 10개까지 커넥션을 선점함. 만약 상황이 안된다면 그 아래만 선점
});

            //alias = customerList
const query = (alias, values) =>{   //쿼리문은 두가지가 필요함 메소드, 값
    return new Promise((resolve, reject) => {
        let excuteSql = sql[alias]; //sql.customerInfo
        console.log(excuteSql); //사용한 쿼리문 출력
        //sql: 쿼리문, values: ?값
        pool.query(excuteSql, values, (err, results)=> {
            //실제로 실행한 결과를 반환
            if(err) {
                console.log(err);   //혹시라도 결과를 가져오는데 실패했으면 실행(쿼리문이 잘못됐거나 하는 경우)
                reject({err});
            } else {
                resolve(results);
            }
        });
    });
};

module.exports= {
    query
};