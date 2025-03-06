<?php
session_start();
include 'config.php';

if (isset($_POST['product_id'])) {
    $productId = intval($_POST['product_id']);

    if (($key = array_search($productId, $_SESSION['cart'])) !== false) {
        unset($_SESSION['cart'][$key]); // Remove the product from the cart
        $_SESSION['cart'] = array_values($_SESSION['cart']); // Reindex the array
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Product not found in cart.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}
?>