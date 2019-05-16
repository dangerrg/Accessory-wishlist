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

// Ensures local storage is empty before adding any accessory
localStorage.clear();

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
// Creates the 12 accessories as stated in the static html page.
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

// Defines the displayAccessory(accessory) function that create an Accessory object
function displayAccessory(accessory) {
    // creates the 1st <div> with class="accessory col-sm-4"
    let parentProducts = document.querySelector('#products'); // (this is the container)
    let accessoryComponent = document.createElement('div');
    accessoryComponent.className = 'accessory col-sm-4 ' + accessory.color;
    parentProducts.appendChild(accessoryComponent);

    // creates the 2nd <div> with class="card my-3" (nested within the 1st <div>)
    let prevComponent = document.getElementsByClassName('accessory col-sm-4 ');
    let accessoryCard = document.createElement('div');
    accessoryCard.className = 'card my-3';
    accessoryComponent.appendChild(accessoryCard);
    // console.log(prevComponent);

    // creates the 3rd <div> with class="currency btn btn-light disabled" (nested within the 2nd <div>)
    prevComponent = document.getElementsByClassName('card my-3');
    let accessoryCurrency = document.createElement('div');
    accessoryCurrency.className = 'currency btn btn-light disabled';
    accessoryCurrency.textContent = accessory.price;
    accessoryCard.appendChild(accessoryCurrency);

    // creates the <img> (nested also within the 2nd <div>)
    prevComponent = document.getElementsByClassName('currency btn btn-light disabled');
    let accessoryImage = document.createElement('img');
    accessoryImage.className = 'card-img-top';
    accessoryImage.src = accessory.imageHref;
    accessoryImage.alt = "Image of " + accessory.name;
    accessoryCard.appendChild(accessoryImage);

    // creates the the 4th <div> with class="card-body text-center"(nested within the 2nd <div> too)
    prevComponent = document.getElementsByClassName('card my-3');
    let accessoryBody = document.createElement('div');
    accessoryBody.className = 'card-body text-center';
    accessoryCard.appendChild(accessoryBody);

    // creates the title <h5> (nested within the 4th <div> too)
    prevComponent = document.getElementsByClassName('card-body text-center');
    let accessoryTitle = document.createElement('h5');
    accessoryTitle.className = 'card-title';
    accessoryTitle.textContent = accessory.name;
    accessoryBody.appendChild(accessoryTitle);

    // creates the paragraph <p>
    prevComponent = document.getElementsByClassName('card-body text-center');
    let accessoryText = document.createElement('p');
    accessoryText.className = 'card-text';
    accessoryText.textContent = 'Color: ';
    let em = document.createElement('em');
    em.textContent = accessory.color;
    accessoryText.appendChild(em);
    accessoryBody.appendChild(accessoryText);

    // creates the button "Add to wishlist!"
    prevComponent = document.getElementsByClassName('card-body text-center');
    let accessoryButton = document.createElement('button');
    accessoryButton.className = 'btn btn-outline-primary';
    accessoryButton.textContent = 'Add to wishlist!';
    accessoryButton.addEventListener('click', function() { addToWishList(accessory) });
    accessoryBody.appendChild(accessoryButton);
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
        if (hideElements[j].className == "accessory col-sm-4 " + buttons[clickedIndex].textContent.toLowerCase()) {
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
        highlightSelectedFilter(i);
        filterAccessoriesByColor(i);
    })
};

// Socks and sunglasses

function loadRemoteAccessories(clickedIndex) {

    // remove the Accessory HTML components
    prevComponent = document.getElementsByClassName("accessory col-sm-4");

    // delete accessories array
    for (let i = 0; i < accessories.length; i++) {
        prevComponent[i].parentNode.removeChild(prevComponent[i]);
        accessories.splice(i, 1);
    };

    // Grab the categories
    let category = navButtons[clickedIndex].textContent.toLowerCase();
    // display all of the hats if hats button is clicked
    if (category === "hats") {
        accessories.push(capRed, capBlue, capYellow, capGreen, beanieR, beanieB, beanieG, strawY, strawB, trilbyR, trilbyB, trilbyY);
        for (let i = 0; i < 12; i++) {
            displayAccessory(accessories[i]);
        }
        // display JSON file content depending the accessories'category
    } else {
        fetch(String(category) + ".json")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                for (let i = 0; i < json.length; i++) {
                    accessories.push(json[i]);
                    displayAccessory(accessories[i]);
                }
            });
    }
}

// Get the navigation buttons Accessories, Socks and Sunglasses
let navButtons = document.getElementsByClassName('nav-link btn btn-outline-secondary mr-3');
// console.log(navButtons); // Logs HTMLCollection with the 3 buttons 

// add an addEventListener to the buttons and intiates the loadRemoteAccessories function
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', function() {
        loadRemoteAccessories(i);
    })
};

// The wishlist 

// This function stores the accessory1 in local storage 
function addToWishList(accessory) {
    if (localStorage.getItem('accessory1') === null) {
        let accessory1asJson = JSON.stringify(accessory);
        localStorage.setItem('accessory1', accessory1asJson);
    } else if (localStorage.getItem('accessory2') === null) {
        let accessory2asJson = JSON.stringify(accessory);
        localStorage.setItem('accessory2', accessory2asJson);
    } else if (localStorage.getItem('accessory3') === null) {
        let accessory3asJson = JSON.stringify(accessory);
        localStorage.setItem('accessory3', accessory3asJson);
    } else {
        alert("ALERT: Your wishlist is full!\n\nSorry, but your wishlist can only admit up to three accessories")
    }
}