<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Nate Liquor Stores</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Checkout</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="search.php">Search Products</a></li>
                <li><a href="cart.php">Cart</a></li>
                <li><a href="checkout.php">Checkout</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form id="checkout-form">
            <label for="credit-card">Credit Card Number:</label>
            <input type="text" id="credit-card" name="credit-card" required>
            <button type="submit">Pay Now</button>
        </form>
        <p>Or contact us at +123-456-7890 to place your order.</p>
    </main>

    <footer>
        <p>Contact us: +123-456-7890</p>
    </footer>
</body>
</html>