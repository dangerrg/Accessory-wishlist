// Creates Hat object

let hat = {
    name: "name",
    price: "price",
    color: "color",
    imageHref: "imageHref",
    toString: function() {
        return this.name + ", price: " + this.price + " , color: " + this.color + " , image: " + this.imageHref;
    }
};

// console.log(hat.toString()); // test the function

// Object Constructor function

function Hat(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

Hat.prototype.toString = function() {
    return "name: " + this.name + ", price: " + this.price + " , color: " + this.color + " , image: " + this.imageHref;
};

const hats = []; // The global variable that store the hats array.
// Baseball caps
let capRed = new Hat("Baseball Cap", 11.99, "red", "./assets/images/red/hats/1.png");
let capBlue = new Hat("Baseball Cap", 11.99, "blue", "./assets/images/blue/hats/1.png");
let capYellow = new Hat("Baseball Cap", 11.99, "yellow", "./assets/images/yellow/hats/1.png");
let capGreen = new Hat("Baseball Cap", 11.99, "green", "./assets/images/green/hats/1.png");

// Beanies
let beanieR = new Hat("Beanie", 17.99, "red", "./assets/images/red/hats/2.png");
let beanieB = new Hat("Beanie", 17.99, "blue", "./assets/images/blue/hats/2.png");
let beanieG = new Hat("Beanie", 17.99, "green", "./assets/images/green/hats/2.png");

// Straws
let strawY = new Hat("Straw Hat", 10.99, "yellow", "./assets/images/yellow/hats/3.png");
let strawB = new Hat("Straw Hat", 10.99, "blue", "./assets/images/blue/hats/3.png");

// Trilbies
let trilbyR = new Hat("Trilby", 10.99, "red", "./assets/images/red/hats/4.png");
let trilbyB = new Hat("Trilby", 10.99, "blue", "./assets/images/blue/hats/4.png");
let trilbyY = new Hat("Trilby", 10.99, "yellow", "./assets/images/yellow/hats/4.png");

hats.push(capRed, capBlue, capYellow, capGreen, beanieR, beanieB, beanieG, strawY, strawB, trilbyR, trilbyB, trilbyY);

console.log(hats); // Logs (12) [Hat, Hat, Hat, Hat, Hat, Hat, Hat, Hat, Hat, Hat, Hat, Hat]
