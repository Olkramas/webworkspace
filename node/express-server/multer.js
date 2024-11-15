/*
  파일 업로드 시에 사용하는 모듈 multer
 */
const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({  
  destination : function(req, file, cb){  //cb: 어느위치에 저장할건지 정의 req: 사용자 요청, file: 파일이름
    cb(null, 'uploads/'); //프로젝트 내부에 이 폴더가 있어야함, 파일이름과 경로가 필요함 여기에 저장됨.
  },
  filename : function(req, file, cb){ //시간을 단위로 파일이름을 저장함
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8') //utf8로 설정 원래 인코딩 방식이 latin1이었음
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

//싱글파일 업로드
app.post('/profile', upload.single('avatar'), (req, res)=>{ //경로와 콜백 함수 내에서upload.single('avatar') 더 들어감
  //하나의 값만 받아서 처리할거면 upload.single('avatar') avatar이게 '키'임.
  
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req,res)=>{
  //다중값을 처리할 때는 upload.array('photos', 12) 12는 최댓값, 무한정 저장할 수는 없으니까 최대값을 설정할 수 있음
  for(let file of req.files){
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})