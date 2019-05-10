// Creates Accessory object

let accessory = {
    name: "name",
    price: "price",
    color: "color",
    imageHref: "imageHref",
    toString: function() {
        return this.name + ", price: " + this.price + " , color: " + this.color + " , image: " + this.imageHref;
    }
};

// console.log(accessory.toString()); // test the function

// Object Constructor function

function Accessory(name, price, color, imageHref) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.imageHref = imageHref;
}

Accessory.prototype.toString = function() {
    return "name: " + this.name + ", price: " + this.price + " , color: " + this.color + " , image: " + this.imageHref;
};

const accessories = []; // The global variable that store the accessories array.
// Baseball caps
let capRed = new Accessory("Baseball Cap", 11.99, "red", "./assets/images/red/hats/1.png");
let capBlue = new Accessory("Baseball Cap", 11.99, "blue", "./assets/images/blue/hats/1.png");
let capYellow = new Accessory("Baseball Cap", 11.99, "yellow", "./assets/images/yellow/hats/1.png");
let capGreen = new Accessory("Baseball Cap", 11.99, "green", "./assets/images/green/hats/1.png");

// Beanies
let beanieR = new Accessory("Beanie", 17.99, "red", "./assets/images/red/hats/2.png");
let beanieB = new Accessory("Beanie", 17.99, "blue", "./assets/images/blue/hats/2.png");
let beanieG = new Accessory("Beanie", 17.99, "green", "./assets/images/green/hats/2.png");

// Straws
let strawY = new Accessory("Straw Hat", 10.99, "yellow", "./assets/images/yellow/hats/3.png");
let strawB = new Accessory("Straw Hat", 10.99, "blue", "./assets/images/blue/hats/3.png");

// Trilbies
let trilbyR = new Accessory("Trilby", 10.99, "red", "./assets/images/red/hats/4.png");
let trilbyB = new Accessory("Trilby", 10.99, "blue", "./assets/images/blue/hats/4.png");
let trilbyY = new Accessory("Trilby", 10.99, "yellow", "./assets/images/yellow/hats/4.png");

accessories.push(capRed, capBlue, capYellow, capGreen, beanieR, beanieB, beanieG, strawY, strawB, trilbyR, trilbyB, trilbyY);

// Defines the displayAccessory(accessories) function that create a Accessory object
function displayAccessory(accessory) {
    // creates the 1st <div> with class="accessory col-sm-4"
    let parentProducts = document.querySelector('#products'); // (this is the container)
    let accessoriesComponent = document.createElement('div');
    accessoriesComponent.className = 'accessory col-sm-4' + accessory.color;
    parentProducts.appendChild(accessoriesComponent);

    // creates the 2nd <div> with class="card my-3" (nested within the 1st <div>)
    let prevComponent = document.getElementsByClassName('accessory col-sm-4');
    let accessoriesCard = document.createElement('div');
    accessoriesCard.className = 'card my-3';
    accessoriesComponent.appendChild(accessoriesCard);
    // console.log(prevComponent);

    // creates the 3rd <div> with class="currency btn btn-light disabled" (nested within the 2nd <div>)
    prevComponent = document.getElementsByClassName('card my-3');
    let accessoriesCurrency = document.createElement('div');
    accessoriesCurrency.className = 'currency btn btn-light disabled';
    accessoriesCurrency.textContent = accessory.price;
    accessoriesCard.appendChild(accessoriesCurrency);

    // creates the <img> (nested also within the 2nd <div>)
    prevComponent = document.getElementsByClassName('currency btn btn-light disabled');
    let accessoriesImage = document.createElement('img');
    accessoriesImage.className = 'card-img-top';
    accessoriesImage.src = accessory.imageHref;
    accessoriesImage.alt = 'Image of baseball cap';
    accessoriesCard.appendChild(accessoriesImage);

    // creates the the 4th <div> with class="card-body text-center"(nested within the 2nd <div> too)
    prevComponent = document.getElementsByClassName('card my-3');
    let accessoriesBody = document.createElement('div');
    accessoriesBody.className = 'card-body text-center';
    accessoriesCard.appendChild(accessoriesBody);

    // creates the title <h5> (nested within the 4th <div> too)
    prevComponent = document.getElementsByClassName('card-body text-center')
    let accessoriesTitle = document.createElement('h5');
    accessoriesTitle.className = 'card-title';
    accessoriesTitle.textContent = accessory.name;
    accessoriesBody.appendChild(accessoriesTitle);

    // creates the paragraph <p>
    prevComponent = document.getElementsByClassName('card-body text-center');
    let accessoriesText = document.createElement('p');
    accessoriesText.className = 'card-text';
    accessoriesText.textContent = 'Color: ';
    let em = document.createElement('em');
    em.textContent = accessory.color;
    accessoriesText.appendChild(em);
    accessoriesBody.appendChild(accessoriesText);

    // creates the button "Add to wishlist!"
    prevComponent = document.getElementsByClassName('card-body text-center')
    let accessoriesButton = document.createElement('button');
    accessoriesButton.className = 'btn btn-outline-primary';
    accessoriesButton.textContent = 'Add to wishlist!';
    accessoriesBody.appendChild(accessoriesButton);
}

for (let i = 0; i < accessories.length; i++) {
    displayAccessory(accessories[i]);
};

// Filter by color

function highlightSelectedFilter(clickedIndex) {
    //deletes active class at current element and adds active class on clicked button
    let current = document.querySelector(".btn-group .active");
    current.className = current.className.replace(" active", "");
    buttons[clickedIndex].className += " active";
}

function filterAccessoriesByColor(clickedIndex) {
    //hides all accessories-elements
    let hideElements = document.getElementsByClassName('accessory');
    for (let j = 0; j < hideElements.length; j++) {
        hideElements[j].style.display = "none";
        // displays the filtered color of the accessories
        if (hideElements[j].className == "accessory col-sm-4" + buttons[clickedIndex].textContent.toLowerCase()) {
            hideElements[j].style.display = "block";
        }
        // displays again all accessories if pressd on "all" button
        if (buttons[clickedIndex].textContent.toLowerCase() == "all") {
            hideElements[j].style.display = "block";
        }
    }
}

// Get and store all the buttons in a variable
let buttons = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-outline-secondary');
// add an addEventListener to all buttons and intiates the highlightSelectedFilter and filterAccessoriesByColor functions
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        highlightSelectedFilter([i]);
        filterAccessoriesByColor([i]);
    })
};