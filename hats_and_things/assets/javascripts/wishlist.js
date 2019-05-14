// creates a function that gets the values from local storage as JSON-objects
function getAccessories() {
    let storedItems = [];
    for (let i = 1; i < 5; i++) {
        // check if local storage has values, if yes convert them to JSON-objects
        if (localStorage.getItem('accessory' + [i]) !== null) {
            let stringValue = localStorage.getItem('accessory' + [i]);
            let jsObject = JSON.parse(stringValue);
            storedItems.push(jsObject);
        } else {
            return (storedItems);
        }
    }
}

let storedItems = getAccessories();

// Function that create an Accessory object
function displayAccessory(accessory) {
    // creates the 1st <div> with class="col-sm-4"
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
}

function displayAccessoryBtnRemove() {
    // creates the "Remove" button
    prevComponent = document.getElementsByClassName('card-body text-center');
    accessoryBody = prevComponent[prevComponent.length - 1];
    let accessoryButton = document.createElement('button');
    accessoryButton.className = 'btn btn-outline-danger';
    accessoryButton.textContent = 'Remove';
    accessoryBody.appendChild(accessoryButton);
}

// creates the displayWishlist() function
function displayWishlist() {
    for (let i = 0; i < storedItems.length; i++) {
        displayAccessory(storedItems[i])
        displayAccessoryBtnRemove(storedItems[i])
    }
}

// handles errors 
try {
    displayWishlist();
} catch (err) {
    console.log("Something went wrong. Error: " + err + ".");
}