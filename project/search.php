<?php
$products = json_decode(file_get_contents('products.json'), true);

$query = isset($_GET['query']) ? strtolower($_GET['query']) : '';
$category = isset($_GET['category']) ? $_GET['category'] : '';

$results = array_filter($products, function ($product) use ($query, $category) {
    $matchesQuery = empty($query) || strpos(strtolower($product['name']), $query) !== false;
    $matchesCategory = empty($category) || $product['category'] === $category;
    return $matchesQuery && $matchesCategory;
});
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Products - Nate Liquor Stores</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Search Products</h1>
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
        <form action="search.php" method="GET">
            <input type="text" name="query" placeholder="Search for wines, spirits, gins..." value="<?php echo htmlspecialchars($query); ?>">
            <select name="category">
                <option value="">All Categories</option>
                <option value="wine" <?php echo $category === 'wine' ? 'selected' : ''; ?>>Wine</option>
                <option value="spirit" <?php echo $category === 'spirit' ? 'selected' : ''; ?>>Spirits</option>
                <option value="gin" <?php echo $category === 'gin' ? 'selected' : ''; ?>>Gin</option>
            </select>
            <button type="submit">Search</button>
        </form>

        <div id="search-results">
            <?php foreach ($results as $product): ?>
                <div class="product">
                    <img src="images/<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                    <h3><?php echo $product['name']; ?></h3>
                    <p><?php echo $product['price']; ?></p>
                    <button onclick="addToCart('<?php echo $product['name']; ?>', '<?php echo $product['price']; ?>')">Add to Cart</button>
                </div>
            <?php endforeach; ?>
        </div>
    </main>

    <footer>
        <p>Contact us: +123-456-7890</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>