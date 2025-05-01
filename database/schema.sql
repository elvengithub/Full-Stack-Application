CREATE DATABASE IF NOT EXISTS ipt_final;
USE ipt_final;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('User', 'Admin') DEFAULT 'User',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
