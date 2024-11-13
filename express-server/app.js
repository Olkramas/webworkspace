/*코드를 실행하는 파일 = app.js */
/*이 파일을 시작하면 서버가 시작됨. */

/*파일을 읽고 쓰는 모듈 불러오기*/
const fs = require('fs');
/*모듈 불러오기 얘를 활용해서 서버 생성*/
const express = require('express');
/*http 모듈에서 get 메소드만 가져왔음 */
const { get } = require('http');
/*서버 생성 */
const server = express();

/*./router/user.js파일의 모듈을 가져와서 userRouter라는 변수에 저장 */
const userRouter = require('./router/user.js');
/*router에게 대표적으로 사용할 경로 부여 */
server.use('/user',userRouter);

//express.static(): 지정된 폴더를 불러옴 images대신 img가 url에서 그 자리를 대신함
server.use('/img',express.static('./images'));


/*클라이언트에게 자세한 에러를 보여주지 않음 하지만 에러는 나고 동작은 수행되지 않음 */
server.use(function(err, req, res, next){
    res.status(500).json({statusCode: res.statusCode,
                          errMessage : err.message});
});

/*일부러 에러를 나게 했음 */
server.get('/error', (req, res, next)=> {
    next(new Error('Process Fail! Check Data!'));
});


/*
  미들웨어 등록:  express기반의 보조 기능
  사용자가 서버에 데이터를 json형식으로 보낼때 그 자체는 그냥 문자열임. 그런데 express.json()을 통해서
  문자열을 자바스크립트 객체로 바꾸고 req.body에 담아줌  
  body는 항상 있는게 아님. 사용자가 데이터를 전송해야하는 경우에만 있음
*/
server.use(express.json());

/*DB설정: 현재는 db가 아닌 파일에서 데이터를 가져옴 */
const jsonFile = fs.readFileSync('data.json');  //Sync를 붙여서 순차적으로 진행되게 함(안붙이면 비동기)
/*json을 객체 배열로 변환시키는 작업 아래 .json과 같은 역할이라고 생각하면 됨.*/
const jsonData = JSON.parse(jsonFile);

const query = (crud, target, where = null)=>{
    let result = null;
  
    let emps = jsonData;
    switch(crud){
    // 조회
    case 'SELECT' :
      result = (where == null) ? emps :  emps.filter(emp => {
        return findEmp(emp, where);
      });
      break;  

    // 등록
    case 'INSERT' :
      emps.push(target);
      break;
    // 수정
    case 'UPDATE' :
      emps.forEach(emp => {
        if(findEmp(emp, where)){
          for(let field in target){
            emp[field] = target[field];
          }
        }
      });
      break;
    // 삭제
    case 'DELETE' :
      let selected = null;
      emps.forEach((emp, idx) => {
        if(findEmp(emp, where)){
          selected = idx;
        }
      });

      emps.splice(selected, 1);
      break;
    }
    return result;
  };
  
  function findEmp(emp, where){
    let selected = 0;   //총 검색조건 갯수
    let fieldNum = 0;   //true인 검색조건 갯수
    for(let field in where){
      fieldNum++;
      if(emp[field] == where[field]){
        selected++;
      }
    }
    return (fieldNum == selected);
  }

/*
  listen메소드는 서버가 특정 포트에서 클라이언트 요청을 "대기"하도록 설정함. 메소드의 요청을 받을 준비가 됨
  서버 실행 소괄호 안은 포트. 서버를 실행하려면 포트를 결정해줘야함.(일반적으로 3000, 5000)
  () => {} 콜백함수안에 내용이 서버가 성공적으로 실행될 때 호출됨
*/
server.listen(3000, () => {
    /*서버를 정상적으로 실행했을때 어떤작업을 할건지 입력하면 됨 */
    console.log('Server Start');
    console.log('http://localhost:3000');
});


/*
  .get은 express.js에서 지원하는 메소드
  루트경로: 누구나 접근할 수 있게 만들기 때문에 get메소드로 접근
  get요청이 /(루트)경로로 들어왔을 때 콜백함수의 내용이 실행됨.
*/
server.get('/', (req, res) => {
    //res.send("Server Connect!");
    res.sendFile('index.html', { root : __dirname});  //root를 현재 디렉토리로 하겠다는 의미 __dirname은 현재 실행중인 파일의 디렉토리 경로를 나타냄
});


//엔드포인트 등록?


/*
    각각 처리하는 대상이 다름
    req.params => Pathvariable
    req.body   => Json    
    req.query  => QueryString
    req.query가 키 값을 가져오기 위한 속성

    content-type)
    1)
    QueryString: 질의 문자열 key=vlaue&key=value이 쌍으로 계속 감 이때 컨텐트 타입은 application/x-www-form-urlencoded
    req.query속성
    2)
    컨텐트 타입: application/json 미들웨어가 필요함(express.json())
    JSON : {} or [] 
    req.body속성 
    3)
    pathvariable은 컨텐트 타입이 없음
    req.params속성
*/

/*전체 : GET, emps */
server.get('/emps', (req, res)=>{
    //res.send('Emp All List');
    //res.send(jsonData);
    res.send(query('SELECT'));
});

/*단건 : GET, emps/:id => pathvariable(경로에 붙는 변수) (:id = 값을 받는 위치, 단건은 하나만 조회하기때문에 이렇게 설정됨)*/
server.get('/emps/:id', (req, res)=>{
    res.send(query('SELECT', null, {id : req.params.id}));
});

/*등록 : POST, emps */
server.post('/emps', (req, res)=>{
    console.log(req.body);
    res.send(query('INSERT',req.body));
    //res.send('Emp Insert');
});

/*수정 : PUT, emps/:id */
server.put('/emps/:id', (req, res)=>{
    res.send(query('UPDATE',req.body, {id: req.params.id}));
    //res.send('Emp Update');
})

/*삭제 : DELETE, emps/:id */
server.delete('/emps/:id', (req, res)=>{
    res.send(query('DELETE', null, {id : req.params.id}));
})