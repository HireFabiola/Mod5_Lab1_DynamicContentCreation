const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.querySelector('#cart');
const totalPriceSpan = document.getElementById('total-price');
let productName = productNameInput.value;
console.log(productName);
console.log(cart, typeof cart);
console.log(cart);

let totalPrice = 0;

addProductButton.addEventListener("click", handleClick);

// Function to update the total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}

// Function to handle Add Product button
function handleClick(event) {
    console.log("just entered handleClick function");
     console.log(cart.length);
    const fragmentContainer = document.createDocumentFragment();
   

    for (let i = 0; i < cart.length; i++) {
        console.log("I should at least be here");
        console.log(i);
        console.log(cart.length);
        const li = document.createElement("li");
        li.innerText = productNameInput.value;
        fragmentContainer.appendChild(li);
    }

    cart.appendChild(fragmentContainer);
}