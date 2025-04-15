// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Load featured products on homepage
    loadFeaturedProducts();
    
    // Update cart count when page loads
    updateCartCount();
});

// Function to load featured products
function loadFeaturedProducts() {
    const featuredProducts = [
        { id: 1, name: "Red Wine", price: "$20", image: "red-wine.jpg" },
        { id: 11, name: "Vodka", price: "$25", image: "vodka.jpg" },
        { id: 20, name: "Gin", price: "$30", image: "gin.jpg" }
    ];

    const featuredSection = document.getElementById("featured-products");
    if (featuredSection) {
        featuredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e19a89e35%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e19a89e35%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E${product.name}%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', '${product.price}')">Add to Cart</button>
            `;
            featuredSection.appendChild(productDiv);
        });
    }
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
                alert(`${productName} added to cart!`);
                updateCartCount(); // Update the cart count displayed on the page
            } else {
                alert("Failed to add product to cart.");
            }
        }
    };

    // Send the product ID to the server - using string concatenation for safety
    xhr.send('product_id=' + productId);
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

    // Send the product ID to the server - using string concatenation for safety
    xhr.send('product_id=' + productId);
}