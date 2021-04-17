// Set up requires 
const mysql = require('mysql');
const inquirer = require('inquirer');
const consTable = require('console.table');

// Set up the database connection
const db = new Database ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123',
    database: serverEmployees_db
});

// Call Database

// Server functions below 