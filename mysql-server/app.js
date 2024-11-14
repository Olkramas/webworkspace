/*app.js */

const express = require('express');
const app = express();
const mysql = require('./mapper.js');

//content-type : application/json
app.use(express.json());

//listen(3000 =>>> 얘가 포트 번호 )
app.listen(3000,()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
});

//전체조회
app.get('/customers', async(req, res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
    /*
        await가 없으면 res.send(list)가 쿼리메소드보다 먼저 실행됨(비동기라서 그럼)
    */
})

//단건조회
app.get('/customers/:id',async(req, res)=>{
    //경로에 붙어있는 :id가 params라는 속성이 이를 처리함 그래서 아래같이 접근가능
    let selected = req.params.id;
    //mysql이 가지고있는 쿼리중에서 customerInfo를 실행
    let info = (await mysql.query('customerInfo', selected))[0];    //원래는 배열이 오는데, 이를 강제로 해제했음
    res.send(info);
});

//등록
app.post('/customers', async(req, res)=>{
    let newObj = req.body;
    //{ name: 'Kang', email: 'kang@naver.com', phone: '010-1234-1234' }바디가 가지고 있는 값
    console.log(newObj);
    let info = await mysql.query('customerInsert', newObj);
    res.send(info);
});

/*
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 10,       //인서트 된 행의 아이디
  "serverStatus": 2,
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0
}
*/
//수정
app.put('/customers/:id', async(req, res)=>{

});

//삭제
app.delete('/customers/:id', async(req, res)=>{
    let selected = req.params.id;
    let info = await mysql.query('customerDelete', selected);
    res.send(info);
});

/**
 {
  "fieldCount": 0,
  "affectedRows": 1,        //영향을 준 행 개수
  "insertId": 0,
  "serverStatus": 2,
  "warningCount": 0,
  "message": "",
  "protocol41": true,
  "changedRows": 0
}
 */