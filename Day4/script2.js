// ------------------ FUNCTIONS ------------------

// Exercise 1
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

const formatPrice = (price) => `$${price.toFixed(2)}`;

(function () {
    let result = calculateDiscount(100, 25); // 100 - 25%
    console.log(formatPrice(result)); // $75.00
})();

// Exercise 2
const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log("Counter:", count);
        return count;
    };
};

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3


// ------------------ ARRAYS ------------------

// Exercise 1
let books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
books.splice(1, 1, "NewBook");  // replace second book
books.push("LastBook");         // add new book

books.forEach((book, index) => {
    console.log(`${index + 1}: ${book}`);
});

// Example Output: 
// 1: Book1
// 2: NewBook
// 3: Book3
// 4: Book4
// 5: Book5
// 6: LastBook

// Exercise 2
function productOfLastThree(arr) {
    let lastThree = arr.slice(-3); // last 3 elements
    let product = 1;
    for (let num of lastThree) {
        product *= num;
    }
    console.log("Product:", product);
}

productOfLastThree([2, 4, 6, 8, 10]); // Product: 480


// ------------------ OBJECTS ------------------

// Exercise 1
let movie = {
    title: "Movie",
    year: 2022,
    genres: ["Action", "Drama"],
    info: function () {
        return `${this.title} (${this.year}): ${this.genres.join(", ")}`;
    }
};
movie.year = 2023;
movie.director = "Some Director";
console.log(movie.info()); // Movie (2023): Action, Drama

// Exercise 2
let playlist = {
    songs: [],
    addSong: function (song) {
        this.songs.push(song);
        console.log(this.songs);
    }
};

playlist.addSong("Song1");
playlist.addSong("Song2");
console.log(Object.keys(playlist));


// ------------------ CONSTRUCTORS & CLASSES ------------------

// Exercise 1
class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
    move() {
        return `${this.type} moves at ${this.speed} mph`;
    }
}

function Bicycle(type, speed) {
    this.type = type;
    this.speed = speed;
    this.move = function () {
        return `${this.type} moves at ${this.speed} mph`;
    };
}

let car = new Vehicle("Car", 60);
let bike = new Bicycle("Bicycle", 15);

console.log(car.move());  // Car moves at 60 mph
console.log(bike.move()); // Bicycle moves at 15 mph

// Exercise 2
class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    describe() {
        return `${this.name} is a ${this.type}`;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    describe() {
        return `${this.name} is a ${this.type}, breed: ${this.breed}`;
    }
}

let myDog = new Dog("Rover", "Labrador");
console.log(myDog.describe()); // Rover is a Dog, breed: Labrador



// Baseline Project Plan 