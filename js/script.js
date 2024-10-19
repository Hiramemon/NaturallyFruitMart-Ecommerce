
let cart = [];
let totalPrice = 0;

const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartTotalItems = document.getElementById('cart-total-items');


// Add to cart button functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        let productPrice = this.getAttribute('data-price'); // Get price as string

        // Remove the $ sign if it exists and convert to float
        productPrice = parseFloat(productPrice.replace('$', ''));

        const productImg = this.getAttribute('data-img');

        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.name === productName);

        if (existingProductIndex !== -1) {
            // Product already in cart, prevent adding again
            alert(`${productName} is already in your cart.`);
        } else {
            // Add product to cart array
            cart.push({ name: productName, price: productPrice, img: productImg });
            totalPrice += productPrice;
            updateCart(); // Update the cart only when a new item is added
        }
    });
});

// Update Cart Modal
function updateCart() {
    cartItemsList.innerHTML = ''; // Clear existing items


    if (cart.length === 0) {
        cartItemsList.innerHTML = 'No products in the cart.';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            cartItem.innerHTML = `
               <div class="d-flex align-items-center w-100">
                    <img src="${item.img}" alt="${item.name}" class="img-thumbnail" style="width: 50px; height: 50px; margin-right: 10px;">
                    <span class="me-2">x1</span>
                    <span class="me-auto">${item.name}</span>
                    <span class="me-4">$${item.price.toFixed(2)}</span>
                    <button class="btn btn-Secondary btn-sm remove-item-btn" data-index="${index}">X</button>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    }

    cartTotalPrice.textContent = totalPrice.toFixed(2); // Update total price
    cartTotalItems.textContent = cart.length; // Update total items count


    // Attach event listener for removing items
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            totalPrice -= cart[index].price; // Reduce the total price
            cart.splice(index, 1); // Remove the item from the cart
            updateCart(); // Re-render the cart
        });
    });


}