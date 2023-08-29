const inquirer = require("inquirer")


const cTable = require('console.table');

// let selectedChoice =

const mysql = require('mysql2')

require('dotenv').config()

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW
});

mainMenu()

function mainMenu() {

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
        name: 'first_name',
        message: "What is the name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "What is the new role of the employee?",
        when: function (answers) {
          return answers.addEmployee === 'Update Employee Role'
        }
      },
      {
        type: 'input',
        name: 'updateRole',
        message: "How would you like to update the role of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'viewRoles',
        message: "What is the name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'addRole',
        message: "What is the name of the role?",
        when: function (answers) {
          return answers.start === 'Add Role'
        }
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: "What is the salary of the role?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'roleDepartment',
        message: "Which department does this role belong to?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'viewDepartments',
        message: "What is the name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the name of the department?",
        when: function (answers) {
          return answers.start === 'Add Department'
        }
      },
    ]) 
    .then((answers) =>{

      if (answers.start === 'View All Departments') {
        viewDepartments()
      } else if (answers.start === 'View All Roles') {
        viewRoles()
      } else if (answers.start === 'View All Employees') {
        viewEmployees()
      } else if (answers.start === 'Add Department') {
        newDepartment({name:answers.name})
      }
    })

}

function viewDepartments() {
  
  connection.query(
    'SELECT * FROM department',
    function(err, results,) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  );

}
function viewRoles() {
  
  connection.query(
    'SELECT * FROM role',
    function(err, results,) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  );

}
function viewEmployees() {
  
  connection.query(
    'SELECT * FROM employee',
    function(err, results,) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  );

}

function newDepartment(object) {
  console.log(object)
  connection.query(
    'INSERT INTO department SET ?',
    object,
    function(err, results,) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  )
  
}