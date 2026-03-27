Dynamic Shopping Cart (JavaScript DOM Project)
A simple vanilla JavaScript application that allows users to add products to a shopping cart, dynamically update the DOM, and maintain an accurate running total. Users can also remove items, with the total updating automatically.

Features
Add products with name and price
Dynamically render cart items in the DOM
Remove individual items from the cart
Automatically update total price
Input validation for empty or invalid values
(Optional extension) Designed to support quantity updates

How It Works
Adding Products-
User enters a product name and price
JavaScript validates the input
A new <li> element is created
Product data is stored using data-* attributes (dataset)
The element is appended to the cart
Total price is updated
Removing Products-
Each cart item includes a “Remove” button
Clicking the button triggers an event
The corresponding <li> is identified using event.target.closest('li')
The stored price is retrieved from dataset
The total is updated and the item is removed from the DOM

Technologies Used
HTML5
CSS3
JavaScript (DOM Manipulation, Events)

Activity Tasks
Add Products-
Tested adding products with various names and prices
Verified each product appears correctly in the list
Ensured prices display accurately
Remove Products-
Tested removing items using the remove button
Verified total price updates correctly after removal
Edge Cases-
Handled empty product names
Handled invalid or missing prices
Prevented invalid entries from being added to the cart
Enhancements for future consideration (Optional)
Structure supports future implementation of:
Quantity updates
Per-item subtotal calculations
Persistent storage (e.g., localStorage)

Reflection Questions
1. How did you dynamically create and append new elements to the DOM?

New elements were created using:
const li = document.createElement("li");
const removeButton = document.createElement("button");
Content and attributes were then added:
li.dataset.price = productPrice;
append(productName + " $" + productPrice);
removeButton.textContent = "Remove";
Finally, elements were assembled and appended:
li.appendChild(removeButton);
cart.appendChild(li);
This approach ensures each cart item is a self-contained DOM node with its own data and behavior.

2. What steps did you take to ensure accurate updates to the total price?
Converted input values to numbers using parseFloat()
Stored each product’s price using dataset.price
Created a centralized updateTotalPrice() function
Updated the total when:
A product is added
A product is removed
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}
Retrieved stored prices when removing items to subtract them correctly
const price = parseFloat(item.dataset.price);
updateTotalPrice(-price);

3. How did you handle invalid input for product name or price?

Validation was implemented before adding items:

if (!productName || isNaN(productPrice)) {
    alert("You must enter a product AND a valid price");
    return;
}

This ensures:

Product name is not empty
Price is a valid number
Prevents NaN from being added to calculations
4. What challenges did you face when implementing the remove functionality?

Several challenges were encountered:

Incorrect DOM structure when elements were not properly nested inside <li> elements
closest('li') returning null when the button was not inside a list item
Missing use of dataset to store and retrieve price values
Type conversion issues when retrieving values from dataset (strings vs numbers)
Event handling mistakes such as incorrectly invoking functions instead of passing references

These issues highlighted the importance of proper DOM structure, consistent data handling, and correct event listener usage.

Key Takeaways
Always structure related UI elements inside a container such as <li>
Use dataset to associate data with DOM elements
Convert string inputs to numbers before calculations
Use closest() for reliable DOM traversal
Validate user input before updating the DOM or application state
Future Improvements
Add quantity controls per item
Persist cart data using localStorage
Add item subtotal calculations
Improve UI styling and responsiveness
Implement edit/update functionality for items
Project Structure
project/
├── index.html
├── styles.css
└── script.js