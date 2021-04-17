// Set up requires
const inquirer = require('inquirer');
const db = require ('./db');

// Add ability to view all departments
async function viewAllDepartments() {
    const department = await db.viewAllDepartments();
    console.log('\n');
    console.table(department);

    startApp()
}

// Add ability to view all roles

// Add ability to view all employees

// Add ability to ADD department 

// Add ability to ADD role

// Add ability to ADD employee

// Add ability to UPDATE employee

// Finally call the start app