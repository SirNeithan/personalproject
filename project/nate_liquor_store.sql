CREATE DATABASE nate_liquor_stores;
USE nate_liquor_stores;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL
);
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Optional: Link to users table if user accounts are added
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
INSERT INTO products (name, price, image, category) VALUES
('Cabernet Sauvignon', 25.00, 'cabernet.jpg', 'wine'),
('Chardonnay', 22.00, 'chardonnay.jpg', 'wine'),
('Merlot', 20.00, 'merlot.jpg', 'wine'),
('Pinot Noir', 28.00, 'pinot-noir.jpg', 'wine'),
('Sauvignon Blanc', 24.00, 'sauvignon-blanc.jpg', 'wine'),
('Shiraz', 26.00, 'shiraz.jpg', 'wine'),
('Prosecco', 18.00, 'prosecco.jpg', 'wine'),
('Malbec', 23.00, 'malbec.jpg', 'wine'),
('Zinfandel', 27.00, 'zinfandel.jpg', 'wine'),
('Riesling', 21.00, 'riesling.jpg', 'wine'),
('Absolut Vodka', 30.00, 'absolut-vodka.jpg', 'spirit'),
('Grey Goose Vodka', 40.00, 'grey-goose.jpg', 'spirit'),
('Smirnoff Vodka', 25.00, 'smirnoff.jpg', 'spirit'),
('Belvedere Vodka', 45.00, 'belvedere.jpg', 'spirit'),
('Jack Daniel\'s Whiskey', 35.00, 'jack-daniels.jpg', 'spirit'),
('Johnnie Walker Black Label', 50.00, 'johnnie-walker.jpg', 'spirit'),
('Jameson Irish Whiskey', 30.00, 'jameson.jpg', 'spirit'),
('Bacardi Rum', 20.00, 'bacardi.jpg', 'spirit'),
('Captain Morgan Spiced Rum', 22.00, 'captain-morgan.jpg', 'spirit'),
('Tanqueray Gin', 35.00, 'tanqueray.jpg', 'gin'),
('Bombay Sapphire Gin', 40.00, 'bombay-sapphire.jpg', 'gin'),
('Hendrick\'s Gin', 45.00, 'hendricks.jpg', 'gin'),
('Beefeater Gin', 30.00, 'beefeater.jpg', 'gin'),
('Gordon\'s Gin', 25.00, 'gordons.jpg', 'gin'),
('Malfy Gin', 38.00, 'malfy.jpg', 'gin'),
('The Botanist Gin', 50.00, 'the-botanist.jpg', 'gin'),
('Sipsmith Gin', 42.00, 'sipsmith.jpg', 'gin'),
('Monkey 47 Gin', 55.00, 'monkey-47.jpg', 'gin'),
('Plymouth Gin', 37.00, 'plymouth.jpg', 'gin');
