<?php
session_start();

if (isset($_POST['product_id'])) {
    $productId = intval($_POST['product_id']);

    if (isset($_SESSION['cart']) && in_array($productId, $_SESSION['cart'])) {
        // Remove the product ID from the cart array
        $_SESSION['cart'] = array_diff($_SESSION['cart'], [$productId]);
        // Re-index the array
        $_SESSION['cart'] = array_values($_SESSION['cart']);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Product not found in cart.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}
?>