document.addEventListener("DOMContentLoaded", function () {
    const featuredProducts = [
        { name: "Red Wine", price: "$20", image: "red-wine.jpg" },
        { name: "Vodka", price: "$25", image: "vodka.jpg" },
        { name: "Gin", price: "$30", image: "gin.jpg" }
    ];

    const featuredSection = document.getElementById("featured-products");

    featuredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        `;
        featuredSection.appendChild(productDiv);
    });
});

function addToCart(name, price) {
    alert('${name} added to cart!');
    // You can implement cart functionality here or redirect to cart.php
}
// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
    // Send an AJAX request to add the product to the cart
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_cart.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert('${productName} added to cart!');
                updateCartCount(); // Update the cart count displayed on the page
            } else {
                alert("Failed to add product to cart.");
            }
        }
    };

    // Send the product ID to the server
    xhr.send('product_id=${productId}');
}

// Function to update the cart count displayed on the page
function updateCartCount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_cart_count.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                const cartCountElement = document.getElementById("cart-count");
                if (cartCountElement) {
                    cartCountElement.textContent = response.count;
                }
            }
        }
    };

    xhr.send();
}

// Update the cart count when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});
// Function to remove a product from the cart
function removeFromCart(productId) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "remove_from_cart.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("Product removed from cart.");
                location.reload(); // Refresh the page to update the cart
            } else {
                alert("Failed to remove product from cart.");
            }
        }
    };

    xhr.send('product_id=${productId}');
}