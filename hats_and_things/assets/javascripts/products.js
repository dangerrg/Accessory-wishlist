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

console.log(hat.toString()); // test the function
