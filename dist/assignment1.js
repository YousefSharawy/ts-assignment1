"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    userID;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.userID = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.setAge(age);
    }
    setAge(age) {
        if (age > 18 && age < 60) {
            this.age = age;
        }
    }
    displayInfo() {
        console.log(`id :${this.userID}, name: ${this.name}, email:${this.email}, password : *****, phone:${this.phone}, age:${this.age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
const user = new User(1, "yousef", "yousef@gmail.com", "secret", "01555512425", 25);
class Admin extends User {
    manageNotes() {
        console.log("this allows admin to manage notes");
    }
}
class Note {
    noteId;
    title;
    content;
    author;
    constructor(noteId, title, content, author) {
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        return this.content.slice(0, 20);
    }
}
class NoteBook {
    notes = [];
    addNote(title, content, author) {
        this.notes.push(new Note(1, title, content, author));
    }
    removeNote() {
        console.log("note removed");
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
        return this.items;
    }
    getAllItems() {
        return this.items;
    }
}
