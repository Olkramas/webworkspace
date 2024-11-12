function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.getInfo = () => {
        return `${this.name}, ${this.age}, ${this.city}`;
    }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong);
console.log(hong.getInfo());

class Emp {
    constructor(id, name, dept) {
        this._id = id;
        this._name = name;
        this._dept = dept;
    }

    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get dept() {
        return this._dept;
    }

}

let kang = new Emp(100, "Kang", "Sales");
console.log(kang);
kang.id = 200;
kang.name = "King";
kang.dept = "hi";
console.log(kang);