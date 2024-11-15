// router/user_router.js
const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');

//라우팅이란 => 사용자의 요청(url+method) + Service + view

//전체조회
router.get('/users',async(req, res)=>{
    /*
    let userList = await userService.findAll();
    res.send(userList);
    */
    /* 무엇때문에 에러가 발생했는지 숨기고자 할 때 사용함*/
    userService
      .findAll()
      .then(list => {
        res.send(list)
        })
      .catch(err => {
        res.status(500).send('Fail Process')}); //이 방법도 가능
    
});
//단건조회
router.get('/users/:no', async(req, res)=>{
    let userNo = req.params.no;
    let info = await userService.findByUserNo(userNo);
    res.send(info);
})

//등록
router.post('/users', async(req, res)=> {
    let userInfo = req.body;
    let result = await userService.createNewUser(userInfo);
    res.send(result);
})
//수정
router.put('/users/:no', async(req, res)=>{
    let no = req.params.no;
    let info = req.body;
    let result = await userService.updateUserInfo(no, info);
    res.send(result);
})
//삭제
router.delete('/users/:no', async(req, res)=> {
    let userNo = req.params.no;
    let info = await userService.delUserInfo(userNo);
    res.send(info);
})

module.exports = router;