<?php
session_start();
include 'config.php';

if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
    $cartItems = [];
} else {
    // Fetch product details for items in the cart
    $cartIds = implode(',', $_SESSION['cart']);
    $stmt = $conn->prepare("SELECT * FROM products WHERE id IN ($cartIds)");
    $stmt->execute();
    $cartItems = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart - Nate Liquor Stores</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Cart</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="search.php">Search Products</a></li>
                <li><a href="cart.php">Cart (<span id="cart-count"><?php echo count($cartItems); ?></span>)</a></li>
                <li><a href="checkout.php">Checkout</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div id="cart-items">
            <?php if (empty($cartItems)): ?>
                <p>Your cart is empty.</p>
            <?php else: ?>
                <?php foreach ($cartItems as $item): ?>
                    <div class="cart-item">
                        <img src="images/<?php echo $item['image']; ?>" alt="<?php echo $item['name']; ?>">
                        <h3><?php echo $item['name']; ?></h3>
                        <p>$<?php echo $item['price']; ?></p>
                        <button onclick="removeFromCart(<?php echo $item['id']; ?>)">Remove</button>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
        <a href="checkout.php">Proceed to Checkout</a>
    </main>

    <footer>
        <p>Contact us: +123-456-7890</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>