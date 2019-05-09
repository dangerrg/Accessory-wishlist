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
function displayHat(hat) {
    // creates the 1st <div> with class="accessory col-sm-4"
    let parentProducts = document.querySelector('#products'); // (this is the container)
    let hatComponent = document.createElement('div');
    hatComponent.className = 'accessory col-sm-4' + hat.color;
    parentProducts.appendChild(hatComponent);

    // creates the 2nd <div> with class="card my-3" (nested within the 1st <div>)
    let prevComponent = document.getElementsByClassName('accessory col-sm-4');
    let hatCard = document.createElement('div');
    hatCard.className = 'card my-3';
    hatComponent.appendChild(hatCard);
    // console.log(prevComponent);

    // creates the 3rd <div> with class="currency btn btn-light disabled" (nested within the 2nd <div>)
    prevComponent = document.getElementsByClassName('card my-3');
    let hatCurrency = document.createElement('div');
    hatCurrency.className = 'currency btn btn-light disabled';
    hatCurrency.textContent = hat.price;
    hatCard.appendChild(hatCurrency);

    // creates the <img> (nested also within the 2nd <div>)
    prevComponent = document.getElementsByClassName('currency btn btn-light disabled');
    let hatImage = document.createElement('img');
    hatImage.className = 'card-img-top';
    hatImage.src = hat.imageHref;
    hatImage.alt = 'Image of baseball cap';
    hatCard.appendChild(hatImage);

    // creates the the 4th <div> with class="card-body text-center"(nested within the 2nd <div> too)
    prevComponent = document.getElementsByClassName('card my-3');
    let hatBody = document.createElement('div');
    hatBody.className = 'card-body text-center';
    hatCard.appendChild(hatBody);

    // creates the title <h5> (nested within the 4th <div> too)
    prevComponent = document.getElementsByClassName('card-body text-center')
    let hatTitle = document.createElement('h5');
    hatTitle.className = 'card-title';
    hatTitle.textContent = hat.name;
    hatBody.appendChild(hatTitle);

    // creates the paragraph <p>
    prevComponent = document.getElementsByClassName('card-body text-center');
    let hatText = document.createElement('p');
    hatText.className = 'card-text';
    hatText.textContent = 'Color: ';
    let em = document.createElement('em');
    em.textContent = hat.color;
    hatText.appendChild(em);
    hatBody.appendChild(hatText);

    // creates the button "Add to wishlist!"
    prevComponent = document.getElementsByClassName('card-body text-center')
    let hatButton = document.createElement('button');
    hatButton.className = 'btn btn-outline-primary';
    hatButton.textContent = 'Add to wishlist!';
    hatBody.appendChild(hatButton);
}

for (let i = 0; i < hats.length; i++) {
    displayHat(hats[i]);
};

// Filter by color

function highlightSelectedFilter(clickedIndex) {
    //deletes active class at current element and adds active class on clicked button
    let current = document.querySelector(".btn-group .active");
    current.className = current.className.replace(" active", "");
    buttons[clickedIndex].className += " active";
}

function filterHatsByColor(clickedIndex) {
    //hides all hats-elements
    let hideElements = document.getElementsByClassName('accessory');
    for (let j = 0; j < hideElements.length; j++) {
        hideElements[j].style.display = "none";
        // displays the filtered color of the hats
        if (hideElements[j].className == "accessory col-sm-4" + buttons[clickedIndex].textContent.toLowerCase()) {
            hideElements[j].style.display = "block";
        }
        // displays again all hats if pressd on "all" button
        if (buttons[clickedIndex].textContent.toLowerCase() == "all") {
            hideElements[j].style.display = "block";
        }
    }
}

// Get and store all the buttons in a variable
let buttons = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-outline-secondary');
// add an addEventListener to all buttons and intiates the highlightSelectedFilter and filterHatsByColor functions
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        highlightSelectedFilter([i]);
        filterHatsByColor([i]);
    })
};