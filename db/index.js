// Require the connection.js

// Start setting up the Database, within it we want:
class DB {

    // Create a constructer tied to the connection
    constructor(connection) {
        this.connection = connection
    }

    // Ability to view all departments
    // Is selected by department id and name, from department and order by.
    // This comes from Department and is ordered by it's ID
    viewAllDepartments() {
        return this.connection.query (
            `
                SELECT
                    department.id,
                    department.name
                FROM
                    department
                ORDER BY
                    department.id
            `
        )
    }

    // Ability to view all roles
    // This comes from the role id, title, salary
    viewAllRoles() {
        return this.connection.query (
            `
                SELECT
                    role.id,
                    role.title,
                    role.salary,
                    department.name AS department
                FROM
                    role
                LEFT JOIN
                    department ON role.department_id = department.id
                ORDER BY
                    role.id
            `
        )
    }

    // View employees based on id, first name, last name, their role title and salary, department name, 
    // CONCAT() function adds two or more expressions together.
    // From Employee
    viewAllEmployees() {
        return this.connection.query (
            `
                SELECT 
                    employee.id,
                    employee.first_name,
                    employee.last_name,
                    role.title,
                    role.salary,
                    department.name AS department,
                    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
                FROM
                    employee
                LEFT JOIN
                    role on employee.role_id = role.id
                LEFT JOIN
                    department ON role.department_id = department.id
                LEFT JOIN
                    employee manager ON manager.id = employee.manager_id
                ORDER BY
                    department.id
            `
        )
    }

    // Add department from department
    addDepartment(department) {
        return this.connection.query (
            `
                INSERT INTO
                    department
                SET
                    ?
            `, department
        )
    }

    // Add the role from the role
    addRole(role) {
        return this.connection.query (
            `
                INSERT INTO
                    role
                SET
                    ?
            `, role
        )
    }

    // Add employee from employee
    addEmployee(employee) {
        return this.connection.query (
            `
                INSERT INTO
                    employee
                SET
                    ?
            `, employee
        )
    }

    // Update the employee role based on the role and employee ID
    updateEmployeeRole(role_id, employee_id) {
        return this.connection.query (
            `
                UPDATE
                    employee
                SET
                    role_id = ?
                WHERE
                    id = ?
            `, [role_id, employee_id]
        )
    }
}

// Export the module
module.exports = new DB(connection);