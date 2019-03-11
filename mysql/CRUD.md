# CRUD

CRUD is an acronym for Create, Read, Update, Delete.
These are available MySQL queries.

---

## Create

```sql
--Create a new database:
CREATE DATABASE <name>;

--Create a new table:
CREATE TABLE <name> (name VARCHAR(100), age INT);

--Example:
CREATE TABLE employees (
    first_name VARCHAR(100), 
    last_name VARCHAR(100), 
    age INT
    );
```

## Read

```sql
--Show all tables in a database:
SHOW TABLES;

--Display all:
SELECT * FROM <name>;

--Display warning (if any):
SHOW WARNINGS;
```

## Update

```sql
--Insert a new value into the table
INSERT INTO <name> (column_name) VALUES (data);

--Example "Insert an employee with the first name Jason, last name Kim and aged 30":
INSERT INTO employees (first_name, last_name, age) VALUES ('Jason', 'Kim', 30);

--Update an entry in a table:
UPDATE <name> SET <column> WHERE <condition>;

--Example "Update (increment age) all employees with the last name Kim": 
UPDATE employees SET age=age+1 WHERE last_name='Kim';
```

## Delete

```sql
--Drop a database:
DROP DATABASE <name>;

--Drop a table:
DROP TABLE <name>;

--Delete an entry from a table:
DELETE FROM <name> WHERE <condition>;

--Example "Delete an employee with first name Jason from the table":
DELETE FROM employees WHERE name='Jason';
```

