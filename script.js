const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const removeItemButton = document.getElementById('remove-product');

const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

addProductButton.addEventListener('click', handleAddButton);


// Function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}

// Function to add product 
function handleAddButton(event) {

    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    console.log(productName);
    console.log(productPrice);g

    // Check to ensure neither field is empty
    if ((productName === "") || (productPrice === "")) {
        alert("You must enter a product AND a price");
        return;
    }

    // Update list with product name and price
    const li = document.createElement("li")
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    cart.append(productName, productPrice, removeButton);

    updateTotalPrice(productPrice);
}

// Function to update the total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

