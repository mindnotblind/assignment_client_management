-- Create the database (if not exists)
CREATE DATABASE IF NOT EXISTS client_management;
USE client_management;

-- Create Clients Table
CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, -- Store hashed passwords in production
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Meetings Table
CREATE TABLE IF NOT EXISTS meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    members INT NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    client_id INT, -- Foreign key to link meetings with clients
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- Insert Sample Clients
INSERT INTO clients (name, email, address, password) VALUES 
('John Doe', 'john@example.com', '123 Main St', 'hashed_password_1'),
('Jane Smith', 'jane@example.com', '456 Oak St', 'hashed_password_2');

-- Insert Sample Meetings
INSERT INTO meetings (title, members, date, start_time, client_id) VALUES 
('Project Kickoff', 5, '2025-02-15', '10:00:00', 1),
('Sprint Planning', 8, '2025-02-16', '14:00:00', 2);
