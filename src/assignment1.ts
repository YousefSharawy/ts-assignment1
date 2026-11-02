class User {
  protected userID!: number;
  public name!: string;
  public email!: string;
  private password!: string;
  public phone!: string;
  public age!: number;
  private notebooks: NoteBook[] = [];
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    this.userID = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }
  setAge(age: number): void {
    if (age > 18 && age < 60) {
      this.age = age;
    }
  }

  displayInfo(): void {
    console.log(
      `id :${this.userID}, name: ${this.name}, email:${this.email}, password : *****, phone:${this.phone}, age:${this.age}`,
    );
  }
  addNotebook(notebook: NoteBook) {
    this.notebooks.push(notebook);
  }
}
const user = new User(
  1,
  "yousef",
  "yousef@gmail.com",
  "secret",
  "01555512425",
  25,
);

class Admin extends User {
  manageNotes(): void {
    console.log("this allows admin to manage notes");
  }
}

class Note {
  protected noteId?: number;
  public title!: string;
  public content!: string;
  public author: User;

  constructor(noteId: number, title: string, content: string, author: User) {
    this.noteId = noteId;
    this.title = title;
    this.content = content;
    this.author = author;
  }

  preview(): string {
    return this.content.slice(0, 20);
  }
}

class NoteBook {
  private notes: Note[] = [];

  addNote(title: string, content: string, author: User) {
    this.notes.push(new Note(1, title, content, author));
  }
  removeNote() {
    console.log("note removed");
  }
}

class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }
  removeItem(item: T): T[] {
    return this.items.filter((i) => i !== item);
  }
  getAllItems(): T[] {
    return this.items;
  }
}
