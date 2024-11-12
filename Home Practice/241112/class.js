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