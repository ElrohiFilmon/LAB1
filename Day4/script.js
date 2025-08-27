// ------------------ Q6. Student Grades ------------------
let student = {
    name: "Elrohi",
    age: 19,
    grades: [29, 30, 40, 39]
};

function averageGrade(student) {
    let sum = 0;
    for (let g of student.grades) {
        sum += g;
    }
    return sum / student.grades.length;
}

console.log("Q6 Average Grade:", averageGrade(student)); // 34.5


// ------------------ Q7. Car Object ------------------
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo: function () {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};

console.log("Q7 Car Info:", car.getInfo()); // Toyota Corolla (2020)


// ------------------ Q8. Shopping Cart ------------------
let cart = [
    { item: "Apple", price: 2 },
    { item: "Milk", price: 3 },
    { item: "Bread", price: 4 }
];

function totalCart(cart) {
    let total = 0;
    for (let c of cart) {
        total += c.price;
    }
    return total;
}

console.log("Q8 Total Cart:", totalCart(cart)); // 9


// ------------------ Q9. Person Class ------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

let p1 = new Person("Ali", 25);
console.log("Q9:", p1.introduce());


// ------------------ Q10. Rectangle Class ------------------
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

let r1 = new Rectangle(5, 10);
console.log("Q10 Area:", r1.area());        // 50
console.log("Q10 Perimeter:", r1.perimeter()); // 30


// ------------------ Q11. Bank Account ------------------
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}

let acc = new BankAccount("Sara", 100);
acc.deposit(50);
acc.withdraw(30);
console.log("Q11 Balance:", acc.getBalance()); // 120


// ------------------ Q12. Library System ------------------
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    borrowBook(title) {
        let book = this.books.find(b => b.title === title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            return `${title} borrowed.`;
        }
        return `${title} not available.`;
    }
    returnBook(title) {
        let book = this.books.find(b => b.title === title);
        if (book) {
            book.isAvailable = true;
            return `${title} returned.`;
        }
        return `${title} not found.`;
    }
}

let lib = new Library();
let b1 = new Book("1984", "Orwell");
let b2 = new Book("Hamlet", "Shakespeare");
lib.addBook(b1);
lib.addBook(b2);

console.log("Q12:", lib.borrowBook("1984"));   // borrowed
console.log("Q12:", lib.returnBook("1984"));   // returned


// ------------------ Q13. Animal Inheritance ------------------
class Animal {
    makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

let dog = new Dog();
let cat = new Cat();

console.log("Q13 Dog:", dog.makeSound()); // Woof!
console.log("Q13 Cat:", cat.makeSound()); // Meow!


// ------------------ Q14. Click Counter (DOM) ------------------
// In HTML: <button id="clickBtn">Click me</button> <p id="count"></p>

let clickBtn = document.getElementById("clickBtn");
let countP = document.getElementById("count");
let clickCount = 0;

clickBtn.addEventListener("click", () => {
    clickCount++;
    countP.textContent = `Clicked: ${clickCount}`;
});


// ------------------ Q15. To-Do List (DOM) ------------------
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
