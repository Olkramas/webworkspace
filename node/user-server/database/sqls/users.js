//users table을 기반으로 해서 실행

//전체
const userList =
`SELECT user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
FROM    t_users
ORDER BY user_no`;

//단건
const userInfo = 
`SELECT user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
FROM    t_users
WHERE   user_no = ?`;

//등록
const userInsert =
`INSERT INTO t_users
 SET join_date = now(), ?`;

//수정
const userUpdate = 
`UPDATE t_users
 SET ?
 WHERE user_no = ?`;

//삭제
const userDelete =
`DELETE FROM t_users
 WHERE  user_no = ?`;

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdate,
    userDelete
}


/* 내부 구조

{
    userList : '',
    userInfo : '',
    userInsert : '',
    userUpdate : '',
    userDelete : ''
}    


*/
