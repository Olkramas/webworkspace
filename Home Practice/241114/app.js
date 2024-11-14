//express 모듈 가져오기
const express = require('express');
//express 애플리케이션 객체를 생성하는 함수 express()
const app = express();

//매퍼 가져오기
const mysql = require('./mapper.js');

app.use(express.json());

app.listen(3000, () => {
    console.log('Server Start');
    console.log('http://localhost:3000');
})

app.get('/', (req, res) => {
    res.send('hello');
})

//전체조회
app.get('/users', async(req, res) => {
    let list = await mysql.query('userList');
    res.send(list);
})

//단건조회
app.get('/users/:u_id', async(req, res) => {
    let selected = req.params.u_id;
    console.log(selected);
    let info = await mysql.query('userInfo', selected);
    res.send(info[0]);
})

//등록
app.post('/users', async(req, res)=>{
    let newUser = req.body;
    console.log(newUser);
    let info = await mysql.query('userInsert', newUser);
    res.send(info);
})

//수정
app.put('/users/:u_id', async(req, res)=>{
    let uid = req.params.u_id;
    let modifyUser = req.body;
    console.log(modifyUser);
    let info = await mysql.query('userUpdate',[modifyUser, uid]);
    res.send(info);
})

//삭제
app.delete('/users/:u_id', async(req, res)=>{
    let selected = req.params.u_id;
    console.log(selected);
    let info = await mysql.query('userDelete', selected);
    res.send(info);
})