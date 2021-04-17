// Set up requires
const inquirer = require('inquirer');
const { viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db');
const db = require ('./db');

// Create the function to start the Employee-Tracker, it'll run through the inquirer inquiries
function startApp() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'navigation',
            message: 'Welcome to Employe-Tracker-3000! How can we help?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
        }
    ])
    .then(response => {
        switch(response.navigation) {
            case 'View all Departments':
                return viewAllDepartments();
            case 'View all Roles':
                return viewAllRoles();
            case 'View all Employees':
                return viewAllEmployees();
            case 'Add Department':
                return addDepartment();
            case 'Add Role':
                return addRole();
            case 'Add Employee':
                return addEmployee();
            case 'Update Employee Role':
                return updateEmployeeRole();
            // End of Switch cases
        }
    })
}

// Add ability to view all departments
async function viewAllDepartments() {
    const department = await db.viewAllDepartments();
    console.log('\n');
    console.table(department);

    startApp();
}

// Add ability to view all roles
async function viewAllRoles() {
    const role = await db.viewAllRoles();
    console.log('\n');
    console.table(role);

    startApp()
}


// Add ability to view all employees

// Add ability to ADD department 

// Add ability to ADD role

// Add ability to ADD employee

// Add ability to UPDATE employee

// Call the function
startApp();
