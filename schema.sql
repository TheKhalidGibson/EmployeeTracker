DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT auto_increment PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT auto_increment PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
);

INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal");

INSERT INTO role (name, department)
VALUES ("Software Engineer", 1),
       ("Design Engineer", 1),
       ("Systems Engineer", 1),
       ("Financial Analyst", 2),
       ("Financial Management", 2),
       ("Budget Analyst", 2),
       ("Director of Sales", 3),
       ("Sales Representative", 3),
       ("Account Executive", 3),
       ("Chief Legal Officer", 4),
       ("Legal Consultant", 4),
       ("Legal Secretary", 4);

INSERT INTO employee (name, department)
VALUES ("Robert Smith", 1),
       ("Steve Knight", 2),
       ("Barbara Kent", 3),
       ("Latasha Miller", 4),
       ("Mackenzie Waters", 1),
       ("Malcolm Harkens", 2),
       ("Rachel Letterman", 3),
       ("Buddy Troy", 4);