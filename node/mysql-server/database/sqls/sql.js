/* sql문을 모아놓는 파일 */

/*
1) ?갯수 확인하기
    - 1개 : 단일갑
    - 2개 : 배열
    
2) ?앞에 컬럼의 유무
    - 컬럼이 존재하는 경우 기본데이터 값(문자, 숫자, 날짜 등)
    - 컬럼이 없는 경우 객체
*/

//전체조회
const customerList = 
`SELECT  id,
         name,
         email,
         phone,
         address
FROM     customers
ORDER BY id`;

//단건조회
const customerInfo =
`SELECT  id,
         name,
         email,
         phone,
         address
FROM     customers
WHERE id=?`;

//등록
const customerInsert =
`INSERT INTO customers
 SET ?`;   
 //객체 타입이 들어감 {'name" = 'Hong', 'phone'='010-1234-1234'}

//수정
const coustomerUpdate =
`UPDATE customers
 SET ?
 WHERE id = ?`;
//set ? = [{'name" = 'Hong', 'phone'='010-1234-1234'}, 1] 배열로 객체, 단일값의 형태로 들어감

//삭제
const customerDelete = 
`DELETE FROM customers
 WHERE id = ?`;

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    coustomerUpdate,
    customerDelete
};