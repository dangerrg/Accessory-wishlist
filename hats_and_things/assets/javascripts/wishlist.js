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