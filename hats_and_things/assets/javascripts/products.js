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

// Defines the displayHat(hat) function that create a Hat object
function displayHat(hats) {
  // creates the 1st <div> with class="accessory col-sm-4"
  let parentDiv = document.querySelector('#products'); // (this is the container)
  let newDiv = document.createElement('div');
  newDiv.className = 'accessory col-sm-4';
  parentDiv.appendChild(newDiv);
  console.log(newDiv);
  // creates the 2nd <div> with class="card my-3" (nested within the 1st <div>)
  let div = document.getElementsByClassName('accessory col-sm-4');
  let newDiv2 = document.createElement('div');
  newDiv2.className = 'card my-3';
  newDiv.appendChild(newDiv2);

  // creates the 3rd <div> with class="currency btn btn-light disabled" (nested within the 2nd <div>)
  div = document.getElementsByClassName('card my-3');
  let newDiv3 = document.createElement('div');
  newDiv3.className = 'currency btn btn-light disabled';
  newDiv3.textContent = hats.price;
  newDiv2.appendChild(newDiv3);

  // creates the <img> (nested also within the 2nd <div>)
  div = document.getElementsByClassName('currency btn btn-light disabled');
  let newImg = document.createElement('img');
  newImg.className = 'card-img-top';
  newImg.src = hats.imageHref;
  newImg.alt = 'Image of baseball cap';
  newDiv2.appendChild(newImg);

  // creates the the 4th <div> with class="card-body text-center"(nested within the 2nd <div> too)
  div = document.getElementsByClassName('card my-3');
  let newDiv4 = document.createElement('div');
  newDiv4.className = 'card-body text-center';
  newDiv2.appendChild(newDiv4);

  // creates the title <h5> (nested within the 4th <div> too)
  div = document.getElementsByClassName('card-body text-center')
  let newTitle = document.createElement('h5');
  newTitle.className = 'card-title';
  newTitle.textContent = hats.name;
  newDiv4.appendChild(newTitle);

  // creates the paragraph <p>
  div = document.getElementsByClassName('card-body text-center');
  let newPe = document.createElement('p');
  newPe.className = 'card-text';
  newPe.textContent = 'Color: ';
  let em = document.createElement('em');
  em.textContent = hats.color;
  newPe.appendChild(em);
  newDiv4.appendChild(newPe);

  // creates the button "Add to wishlist!"
  div = document.getElementsByClassName('card-body text-center')
  let newButton = document.createElement('button');
  newButton.className = 'btn btn-outline-primary';
  newButton.textContent = 'Add to wishlist!';
  newDiv4.appendChild(newButton);
}

for (let i = 0; i < hats.length; i++) {
  displayHat(hats[i]);
};
