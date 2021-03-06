# :fire: :100: Employee Tracker 3000! :100: :fire:
:computer: **Github Repo:** https://github.com/jwilferd10/employee-tracker-3000
<br>
<br>
:computer: **YouTube:** https://www.youtube.com/watch?v=N5QCHWOT0Ys&ab_channel=JonathanWilferd

## :open_file_folder: Table of Contents :
  - [Preview](#camera-preview)
  - [Description](#description)
  - [User Story](#book-user-story)
  - [Resources Used](#floppy_disk-resources-used)
  - [Installation](#minidisc-installation-and-usage)
  - [Contact Information](#e-mail-contact-information)

## :camera: Preview:

### Homepage:
![image](assets/schema.png)
### Saved Books:
![image](assets/seeds.png)
### Demo:
![image](assets/Demo.gif)

## Description:
<p><em>Developers frequently have to create interfaces that make it easy for non-developers to view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your challenge this week is to build a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.</em><p>
  
<p>The Employee Tracker 3000 is a command-line application to help manage a software companies' database. The Employee Tracker 3000 is using inquirer prompts that takes the users response in a switch case to display each designated call. These calls and their MySQL functions are connected to the index.js within db directory, same for our connection.</p>

<p>Future plans for this project would be:</p>

- Update employee managers.

- View employees by manager.

- View employees by department.

- Delete departments, roles, and employees.

- View the total utilized budget of a department—i.e., the combined salaries of all employees in that department.

<p>I even added the capability to exit the application, which was a small victory to me!</p>
  
<p> Following instructions of the challenge, I tried to design the database schema to closely resemble the following image: </p.

![image](assets/sql-homework-demo.png) 

<p>Developing the Employee-Tracker-3000 was not easy, when I first tried my hand at the challenge it overwhelmed me pretty fast. My introduction into SQL wasn't the best and I found myself incredibly confused. I've come back to the Employee Tracker with a much better understanding of SQL, but ultimately pretty rusty after not having touched the technology for a hot minute. Eventually I was able to push through and get a working product going! Unfortunately my attempts at pushing for any bonus points fell flat and I didn't want to stretch time but it's ready to be used! So please I urge you to try it out and have some fun. </p>
 


## :book: User Story:
**AS A business owner**
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

GIVEN a command-line application that accepts user input
- WHEN I start the application
  - THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
  - THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
  - THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
  - THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
  - THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
  - THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
  - THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
- WHEN I choose to update an employee role
  - THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## :floppy_disk: Resources Used:
    Main Resources:
    "console.table": "^0.10.0",
    "inquirer": "^8.0.0",
    "mysql": "^2.18.1",
    "mysql2": "^2.2.5",
    "util": "^0.12.3"

## :minidisc: Installation and Usage:
Install this project by clicking the *GREEN* button above, you can download it by ZIP or copy the SSH! Then:
- Open terminal
- Type 'Node Server.js'
- Go through inquirer prompts

## :e-mail: Contact Information:
- ### [jwilferd10](https://github.com/jwilferd10)
