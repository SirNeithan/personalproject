<?php
session_start();

// Initialize cart if it doesn't exist
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

if (isset($_POST['product_id'])) {
    $productId = intval($_POST['product_id']);

    // Check if the product is already in the cart
    if (!in_array($productId, $_SESSION['cart'])) {
        $_SESSION['cart'][] = $productId; // Add the product to the cart
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Product already in cart.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}
?>