const inquirer = require("inquirer")


const cTable = require('console.table');


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
      // Add Employee begins here
      {
        type: 'input',
        name: 'first_name',
        message: "What is the first name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the last name of the employee?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'role_id',
        message: "What is the role id for their title?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "What is the manager id for that role?",
        when: function (answers) {
          return answers.start === 'Add Employee'
        }
      },
      // End of the Add Employee section
      // Update Employee Role begins here
      {
        type: 'input',
        name: 'first_name',
        message: "What is the first name of this employee?",
        when: function (answers) {
          return answers.start === 'Update Employee Role'
        }
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the last name of this employee?",
        when: function (answers) {
          return answers.start === 'Update Employee Role'
        }
      },
      {
        type: 'input',
        name: 'role_id',
        message: "What is the role id for their new title?",
        when: function (answers) {
          return answers.start === 'Update Employee Role'
        }
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "What is the manager id for this role?",
        when: function (answers) {
          return answers.start === 'Update Employee Role'
        }
      },
      // End of the Update Employee Role section
      // Add Role begins here
      {
        type: 'input',
        name: 'title',
        message: "What is the title of the new role?",
        when: function (answers) {
          return answers.start === 'Add Role'
        }
      },
      {
        type: 'input',
        name: 'salary',
        message: "What is the salary of the role?",
        when: function (answers) {
          return answers.start === 'Add Role'
        }
      },
      {
        type: 'input',
        name: 'department_id',
        message: "What is the department id for this new role?",
        when: function (answers) {
          return answers.start === 'Add Role'
        }
      },
      // End of the Add Role section
      // Add Department begins here
      {
        type: 'input',
        name: 'name',
        message: "What is the name of the department?",
        when: function (answers) {
          return answers.start === 'Add Department'
        }
      },
      // End of the Add Department section
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
      } else if (answers.start === 'Add Employee') {
        newEmployee({first_name:answers.first_name, last_name:answers.last_name, role_id:answers.role_id, manager_id:answers.manager_id})
      } else if (answers.start === 'Add Role') {
        newRole({title:answers.title, salary:answers.salary, department_id:answers.department_id})
      } else if (answers.start === 'Quit') {
        quitMenu()
      }
    })

}

function viewDepartments() {
  
  connection.query(
    'SELECT * FROM department',
    function(err, results) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  );

}

function viewRoles() {
  
  connection.query(
    'SELECT * FROM role',
    function(err, results) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  );

}

function viewEmployees() {
  
  connection.query(
    'SELECT * FROM employee',
    function(err, results) {
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
    function(err, results) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  )
  
}

function newEmployee(object) {
  console.log(object)
  connection.query(
    'INSERT INTO employee SET ?',
    object,
    function(err, results) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  )
  
}

function newRole(object) {
  console.log(object)
  connection.query(
    'INSERT INTO role SET ?',
    object,
    function(err, results) {
      if(err){console.log(err)}
      console.table(results); // results contains rows returned by server
      mainMenu()
    }
  )
  
}

function quitMenu() {
  
  process.exit();
}