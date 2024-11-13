//router/user.js
const express = require('express');
const router = express.Router();

/* /user + / => /user/ 이런식으로 접근해야됨. */
router.get('/', (req, res)=> {
    res.send('회원정보 조회');
});

router.post('/insert', (req, res)=>{
    res.send('회원등록');
})
/*exports뒤로 코드 작성은 안됨. 어차피 죽은 코드 실행이 안됨 */
module.exports = router;