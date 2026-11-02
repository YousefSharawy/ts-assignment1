"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    userID;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.userID = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    setAge(age) {
        if (age > 18 && age < 60) {
            this.age = age;
        }
    }
    displayInfo() {
        console.log(`id :${this.userID}, name: ${this.name}, email:${this.email}, password : *****, phone:${this.phone}, age:${this.age}`);
    }
}
const user = new User(1, "yousef", "yousef@gmail.com", "secret", "01555512425", 25);
