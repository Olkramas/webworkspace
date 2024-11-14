//전체조회
const userList = 
`SELECT user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
FROM    t_users
ORDER BY join_date`;

//단건조회
const userInfo =
`SELECT user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
FROM    t_users
WHERE   user_id = ?`;

//등록
const userInsert =
`INSERT INTO t_users
 SET ?`;

//수정
const userUpdate = 
`UPDATE t_users
 SET ?
 WHERE user_id = ?`;

const userDelete =
`DELETE FROM t_users
 WHERE user_id = ?`;

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdate,
    userDelete
}