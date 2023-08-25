const inquirer = require("inquirer")


const cTable = require('console.table');





inquirer
    .prompt([
      {
        type: 'list',
        name: 'start',
        message: "What would you like to do? (Use arrow keys)",
        choices: 
        ['View All Employees',
         'Add Employee',
         'Update Employee Role',
         'View All Roles',
         'Add Role',
         'View All Departments',
         'Add Department',
         'Quit']
      },
      {
        type: 'input',
        name: 'addEmployee',
        message: "What is the name of the employee?",
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "What is the name of the employee?",
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "How would you like to update the role of the employee?",
      },
      {
        type: 'input',
        name: 'viewRoles',
        message: "What is the name of the employee?",
      },
      {
        type: 'input',
        name: 'addRole',
        message: "What is the name of the role?",
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: "What is the salary of the role?",
      },
      {
        type: 'input',
        name: 'roleDepartment',
        message: "Which department does this role belong to?",
      },
      {
        type: 'input',
        name: 'viewDepartments',
        message: "What is the name of the employee?",
      },
      {
        type: 'input',
        name: 'addDepartment',
        message: "What is the name of the department?",
      },
     ])
