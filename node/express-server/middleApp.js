//middleApp.js

const express = require('express');
/*cors도 모듈로 인식하기 때문에 이렇게 불러오면 됨. */
const cors = require('cors');
//express-session 모듈 불러오기
const session = require('express-session');

const app = express();

/*
    cors모듈
    보통 cors()그대로 두는 경우도 많음(모든 사람이 접속할 수 있도록 함.)
*/

//모든 요청에 응답
app.use(cors());    

//cors에 넣을 지정할 요청 객체형태로 만들기
const corsOption = {
    origin : 'http://192.168.0.29:5500',    //vscode의 포트는 5000, ip만 변경(학원 컴퓨터ip)
    optionsSuccessStatus : 200
}

//객체를 등록(지정한 요청에 대해서만 응답하도록 설정)
app.use(cors(corsOption));

/*
    접속해서 줄 수 있는 라우팅 생성
    application/x-www-form-urlencoded (QueryString)
    통신의 가장 기본적인 형태(key=value의 형태)
    json은 바디가 있어야함, 그리고 멀티파트 폼데이터는 용량이 크기때문에 헤더에 못 넣음 바디로 들어가야함.
    전용 파서가 있음 == express.urlencoded(express.json()제이슨 파싱했던거랑 같은 개념)     
    //등록하는이유: 해당 컨텐트 타입을 사용하기 위해서는(해석하기 위해서) 필요함    서버에서 해당 컨텐트 타입을 사용하기 위해서는 express에서 필수적임

*/

app.use(express.urlencoded({extended : false}));

app.post('/info', (req, res)=>{
    res.send(`keyword : ${req.body.search}`);
});

app.listen(3000, ()=> {
    console.log('http://localhost:3000');
})

/*
    express-session
*/
let sessionSetting = session({
    secret : 'secret key',      //암호화 할때 사용하는 키(암호화 키)    'secret key'따옴표 안에 내용은 '#!$1234Secdx'
    resave : false,             //단계적으로 저장을 할건지 체크(할필요 없음)
    saveUninitialized : true,   //로그인 전에도 세션을 생성해서 관리를 할건지 체크(기본적으로 true)
    cookie : {                  
        httpOnly : true,        //js를 통해서 쿠키에 접근하는 것을 막음(true)
        secure : false,         //보안적용인데 기본 false
        maxAge : 60000          //쿠키의 유효기간 이 시간 이후에는 자동삭제됨.
    }
});

//세션 미들웨어 서버 등록
app.use(sessionSetting);

/*
    로그인 세션생성, 파기
*/  

app.post('/login', (req, res)=> {
    const { id, pwd } = req.body;   //body의 상황{id : 'hong', pwq : '1234' }
    //user, pwd는 원래 있는 이름이 아니라 개발자가 임의로 설정가능
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err) {    //save를 호출해야 값을 세션에 저장할 수 있음
        if(err) throw err;  //에러나면 에러처리
        res.redirect('/');  //성공하면 리다이렉트 아래에 /로 이동
    })
});

//여기로 이동
app.get('/', (req, res)=>{
    res.send(req.session);
})

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
})