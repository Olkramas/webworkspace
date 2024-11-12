//11_class.js

//생성자 함수
function User(name, age, city) {
    /*필드 */
    this.name = name;
    this.age = age;
    this.city = city;
    /*메소드*/
    this.getInfo = () => {
        return `${this.name},${this.age},${this.city}`;
    }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong.getInfo());

let kim = new User("Kim", 25, "jeju");
console.log(kim.getInfo());

//class
class Emp {
    constructor(id, name, dept) {
        /*필드 등록*/
        this._id = id;      //private  대신에 언더바. js개발자들의 암묵적인 룰
        this._name = name;
        this._dept = dept;
    }
    /*둘다 혼용되는 방식임. 취향차이 */

    /*엄밀히 말하면 메소드로 취급되지 않음 그래서 get띄우고 id */
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name
    }
    get name() {
        return this._name;
    }
    /* getter setter형식으로 만들어도 상관없음 */
    setDept(dept) {
        this._dept = dept;
    }
    getDept(){
        return this._dept;
    }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200;
kang.name = "King";
kang.setDept("Marketing");
console.log(kang);