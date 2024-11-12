//02_timers.js

const timeout = setTimeout(() => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2); //month는 0부터 시작함
    let day = ('0' + today.getDay()).slice(-2);

    let hour = ('0' + today.getHours()).slice(-2);
    let minute = ('0' + today.getMinutes()).slice(-2)

    let current = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
    console.log(current);
}, 2000);   

/*무한으로 돌수도 있으니까 조심해야함.3 */
let count = 0;
/*interval: id */
const interval = setInterval(() => {
    console.group('interval %d', count++);  
    if(count == 3) {
        /*인터벌은 반드시 id값이 들어가야함 */
        clearInterval(interval);
    }
},1000);

/*시간을 지정하지 않음  현재프로세스가 끝났을때 실행됨*/
const immediate = setImmediate(() => {
    console.log('즉시 실행');       
});

console.log("마지막 코드");     