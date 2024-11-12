const express = require('express'); //모듈을 불러냄
const app = express();  //

/*서버가 제공하는 서비스 */
app.get('/', (request, response) => {  
    response.send('Server Connect');
});

/*서버를 실행하기 위한 listen */
app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});