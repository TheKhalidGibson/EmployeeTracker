DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE department (
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(30),
);

CREATE TABLE role (
  id INT auto_increment PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
);

CREATE TABLE employee (
  id INT auto_increment PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
);