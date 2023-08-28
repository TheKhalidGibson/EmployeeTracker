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

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 1),
       ("Design Engineer", 90000, 1),
       ("Systems Engineer", 110000, 1),
       ("Financial Analyst", 80000, 2),
       ("Financial Management", 130000, 2),
       ("Budget Analyst", 80000, 2),
       ("Director of Sales", 200000, 3),
       ("Sales Representative", 60000, 3),
       ("Account Executive", 100000, 3),
       ("Chief Legal Officer", 350000, 4),
       ("Legal Consultant", 120000, 4),
       ("Legal Secretary", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Smith", 1,),
       ("Steve", "Knight", 2),
       ("Barbara", "Kent", 3),
       ("Latasha", "Miller", 4),
       ("Mackenzie", "Waters", 5),
       ("Malcolm", "Harkens", 6),
       ("Rachel", "Letterman", 7),
       ("Buddy", "Troy", 8),
       ("Roxanne", "Sampson", 9),
       ("Sal", "Kirk", 10),
       ("Betty", "Cash", 11),
       ("Lacey", "Mitchell", 12),
       ("Mary", "Willis", 1),
       ("Jamal", "Harris", 2),
       ("Riley", "Lakes", 3),
       ("Brian", "Towers", 4);