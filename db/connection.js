// Set up requires 
const mysql = require('mysql');
const util = require('util');

// Set up the database connection
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'N3v3r_4get!235',
    database: 'employee_tracker_db'
})

connection.connect();
connection.query = util.promisify(connection.query)

module.exports = connection;