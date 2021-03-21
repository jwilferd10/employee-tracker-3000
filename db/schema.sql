DROP DATABASE IF EXISTS serverEmployees_db
CREATE DATABASE serverEmployees_db
USE serverEmployees_db

-- Set up the Departments --
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)

-- Set up the Roles --
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT NOT NULL,
)

-- Set up Employee --