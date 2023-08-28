const inquirer = require("inquirer")


const cTable = require('console.table');

// let selectedChoice =





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
         'Quit'],  
      },
      {
        type: 'input',
        name: 'addEmployee',
        message: "What is the name of the employee?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "What is the new role of the employee?",
        when: function() {
          return answers.addEmployee === 'Update Employee Role'
        }
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "How would you like to update the role of the employee?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'viewRoles',
        message: "What is the name of the employee?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'addRole',
        message: "What is the name of the role?",
        when: function() {
          return answers.start === 'Add Role'
        }
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: "What is the salary of the role?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'roleDepartment',
        message: "Which department does this role belong to?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'viewDepartments',
        message: "What is the name of the employee?",
        when: function() {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'addDepartment',
        message: "What is the name of the department?",
        when: function() {
          return answers.start === 'Add Department'
        }
      },
     ])
