-- database
CREATE DATABASE financeDb;

CREATE TABLE Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(20),
    email TEXT,
    user_password TEXT
);
