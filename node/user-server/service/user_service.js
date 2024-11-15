// service/user_service.js
const mysql = require('../database/mapper.js');


//전체조회
const findAll = async() => {
    let list = await mysql.query('userList');
    return list;
    //결제 api 호출
    //db에 저장
}

//단건조회: 값이 필요함
const findByUserNo = async (userNo) => {
    let list = await mysql.query('userInfo', userNo);
    let info = list[0]; //select는 결과가 기본 배열로 넘어옴
    return info;
}

//등록
const createNewUser = async (userInfo) => {
    let result = await mysql.query('userInsert', userInfo);
    if( result.insertId > 0) {  //mysql에서 auto-increament값을 가져옴
        return { user_no : result.insertId };
    } else {    //실패한 경우 빈 결과를 넘김
        return {};
    }
}

//수정
const updateUserInfo = async (userNo, updateInfo) => {
    let data = [updateInfo, userNo];
    let result = await mysql.query('userUpdate', data);
    let returnData = {};
    if(result.changedRows == 1 ) {
        returnData.tartget = { 'user_no' : userNo };
        returnData.result = true;
    } else {
        returnData.result = false;
    }
    return returnData;
}

//삭제
const delUserInfo = async (userNo) => {
    let result = await mysql.query('userDelete', userNo);
    if(result.affectedRows == 1 && result.changedRows == 0) {     //두 조건을 만족했을때 정상적으로 실행되었다는 의미
        return {"result" : "success", "user_no" : "userNo" };
    }else {
        return {"result" : "fail"};
    }
}

module.exports = {
    findAll,
    findByUserNo,
    createNewUser,
    updateUserInfo,
    delUserInfo
}