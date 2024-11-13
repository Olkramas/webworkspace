//middleApp.js

const express = require('express');
/*cors도 모듈로 인식하기 때문에 이렇게 불러오면 됨. */
const cors = require('cors');

const app = express();

/*모든 요청에 응답 */
app.use(cors());    //cors를 그대로 두면 모든 요청에 응답