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

let hatObj = new Hat();
