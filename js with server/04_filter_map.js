//04_filter_map.js

let persons = [
    { 
        name : "유재석",
        point : 78,
        city : "서울",
    },
    { 
        name : "김종국",
        point : 92,
        city : "서울",
    },
    { 
        name : "양세찬",
        point : 76,
        city : "제주",
    },
    { 
        name : "하하",
        point : 81,
        city : "서울",
    }
];

//1) filter, 원본배열이 가지는 데이터타입과 같음, 대신 배열의 크기가 줄어들 가능성이 있음.
//점수가 80점 이상만 가져옴
let scores = persons.filter(function(val, idx) {
                    return val.point > 80;      //boolean 타입 리턴
                })
console.log(scores);
//2) map, 원본배열과 데이터 타입이 다를 수 있음, 대신 배열의 크기가 동일함.
let newList = persons.map(function(val, idx) {
                    /*
                    val.no = ((idx+1) * 100);   //원본 객체에도 no를 추가하게 됨.
                    return val;
                    */
                    return {    //새로운 객체 배열을 만들경우 리턴값을 새로운 객체를 만들어서 리턴해야됨. 있던 배열에서 하면 원본데이터를 건들게 됨.(절대로 그대로 쓰지 말기!!!)
                        no : ((idx+1) * 100),
                        name : val.name,
                        city : val.city
                    };  //새로운 배열이 가지는 값
                });
console.log(newList);