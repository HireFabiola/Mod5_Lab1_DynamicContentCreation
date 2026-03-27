const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
// const removeItemButton = document.getElementById('remove-product');

const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

addProductButton.addEventListener('click', handleAddButton);



// Function to remove an item
function removeItem(event) {
    console.log("Am I here?");
    const item = event.target.closest('li');
    console.log(item);
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
    clearInputs();
}

// Function to add product 
function handleAddButton(event) {
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    console.log(productName);
    console.log(productPrice);

    // Check to ensure neither field is empty
    if ((productName === "") || isNaN(productPrice)) {
        alert("You must enter a product AND a price");
        return;
    }
    else if (productPrice < 0) {
        alert("Price cannot be negative");
    }

    // Update list with product name and price
    const li = document.createElement("li")
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', removeItem);

    li.dataset.price = productPrice; //store price for later use

    li.append(productName + "  $" + productPrice.toFixed(2));
    li.appendChild(removeButton);

    cart.appendChild(li);
    console.log(cart);
    updateTotalPrice(productPrice);
    clearInputs();
}

// Function to update the total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to clear input fields
function clearInputs() {
    productNameInput.value = "";
    productPriceInput.value = "";
}