// Set up requires
const inquirer = require('inquirer');
const { viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./db');
const db = require ('./db');
require ('console.table');

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
async function viewAllEmployees() {
    const employee = await db.viewAllEmployees();
    console.log('\n');
    console.table(employee);

    startApp()
}

// Add ability to ADD department 
async function addDepartment() {
    const department = await inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name.',
            validate: answer => {
                if (answer === '') {
                    return 'Please enter the department name.'
                } else {
                    return true;
                }
            }
        },
    ])
    // Await for db.addDeparment
    await db.addDepartment(department)
    // THEN start the application
    startApp();
}

// Add ability to ADD role
async function addRole() {
    // Connect to the db for viewAllDepartments
    const departments = await db.viewAllDepartments();

    // departmentOptions is going to take the department id and display it as a name
    // When you go to department options further below, you won't see department numbers
    // It will say the name versus the id number.
    const departmentOptions = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }));

    const role = await inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
            validate: answer => {
                if (answer === '') {
                    return 'Please enter a title!'
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of role?',
            validate: answer => {
                if (answer === '') {
                    return 'Please enter a salary!'
                } else {
                    return true;
                }
            },
        },
        
        // Ask which role the department belongs in
        // Also call department options, to display the names.
        {
            type: 'list',
            name: 'department_id',
            message: 'To which department does this role belong to?',
            choices: departmentOptions
        },
    ])
    
    await db.addRole(role)
    // Notify user the role has been successfully added 
    console.log('Success! A new role has been added.');
    // Then run startApp to continue.
    startApp();
}

// Add ability to ADD employee
async function addEmployee() {
    // View all available roles to add the Employee to
    const positions = await db.viewAllRoles();

    const positionOptions = positions.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const managers = await db.viewAllEmployees();

    const managerChoice = managers.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));

    const employee = await inquirer.prompt ([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the name of the employee',
            validate: answer => {
                if (answer === '') {
                    return 'You need to enter the employees first name!'
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the surname of the employee',
            validate: answer => {
                if (answer === '') {
                    return 'You need to add the employees last name!'
                } else {
                    return true;
                }
            },
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the employees current position?',
            choices: positionOptions
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Whats the ID of the employees manager?',
            choices: managerChoice
        },
    ])

    await db.addEmployee(employee)

    // Let the user know their input is successful
    console.log('Success! A new employee has been added')
    // Continue the application
    startApp();
}

// Add ability to UPDATE employee
async function updateEmployeeRole() {
    // View all available roles to add the Employee to
    const positions = await db.viewAllRoles();

    const positionOptions = positions.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const employees = await db.viewAllEmployees();

    const employeeOptions = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));

    const { employee_id } = await inquirer.prompt ([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Pick an employees role to update',
            choices: employeeOptions
        }
    ])

    const { role_id } = await inquirer.prompt ([
        {
            type: 'list',
            name: 'role_id',
            message: 'Pick the employees new role.',
            choices: positionOptions
        }
    ])

    await db.updateEmployeeRole(role_id, employee_id)
    console.log('Success! The role has been updated.');
    startApp();
}


// Call the function
startApp();
