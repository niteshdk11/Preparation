---

# SQL vs NoSQL

## SQL
- **Type:** Relational Database
- **Data Storage:** Data stored in **Tables**
- **Examples:**
  - MySQL
  - Oracle
  - PostgreSQL

## NoSQL
- **Type:** Non-Relational Database
- **Data Storage:** Data stored in **Documents**, **Key-Value**, **Graphs**, etc.
- **Examples:**
  - MongoDB
  - Cassandra
  - Neo4j

---

# MySQL Database Notes Index

## 1. Creating and Managing Databases
- **1.1** Creating a Database
  - Commands for creating a database
- **1.2** Dropping a Database
  - Commands for deleting a database
- **1.3** Showing Databases
  - Command to display all databases
- **1.4** Using a Database
  - Command to select a database

## 2. Working with Tables
- **2.1** Creating a Table
  - Syntax for table creation
- **2.2** Example of Creating a Table
- **2.3** Inserting Data into a Table
- **2.4** Updating Data
- **2.5** Deleting Data
- **2.6** Truncating a Table
- **2.7** Altering a Table
- **2.8** Showing Tables

## 3. Data Types
- **3.1** Data Type Table
- **3.2** Notes on Unsigned Variants
- **3.3** Example Data Types Usage

## 4. Constraints
- **4.1** Common Constraints
- **4.2** Example of Constraints

---

## 5. **Introduction to SQL Keys**
   - 1.1. Primary Key (PK)
   - 1.2. Foreign Key (FK)

2. **Creating Tables with Constraints**
   - 2.1. Unique Constraints
   - 2.2. Check Constraints

3. **Table Queries**
   - 3.1. Insert Command
   - 3.2. Select Command

4. **Entity-Relationship (ER) Diagram**
   - 4.1. Overview of Entities and Relationships

5. **Examples**
   - 5.1. Creating a User Table
   - 5.2. Creating a Post Table with Foreign Key

---
---
1. **WHERE Clause**  
   1.1 Syntax  
   1.2 Examples  
   1.3 Operators in WHERE Clause  
   &nbsp;&nbsp;&nbsp;&nbsp;1.3.1 Arithmetic Operators  
   &nbsp;&nbsp;&nbsp;&nbsp;1.3.2 Comparison Operators  
   &nbsp;&nbsp;&nbsp;&nbsp;1.3.3 Logical Operators  
   &nbsp;&nbsp;&nbsp;&nbsp;1.3.4 Bitwise Operators  
   1.4 Frequently Used Operators (Examples)  

2. **LIMIT Clause**  
   2.1 Syntax  
   2.2 Examples  

3. **ORDER BY Clause**  
   3.1 Syntax  
   3.2 Examples  
   3.3 Important Note on Usage with LIMIT  

4. **Aggregate Functions**  
   4.1 List of Aggregate Functions  
   4.2 Examples  

5. **GROUP BY Clause**  
   5.1 Syntax  
   5.2 Examples  
   5.3 Common Mistakes and Validations  

6. **HAVING Clause**  
   6.1 Syntax  
   6.2 Examples  
   6.3 Difference Between WHERE and HAVING  

7. **General SQL Query Order**  
   7.1 Full Query with All Clauses Example  

---

---

1. **Update Queries (To Modify Existing Rows)**  
   - Syntax  
   - Example  
   - Handling Safe Updates Mode  

2. **Delete Queries (To Remove Specific Rows)**  
   - Syntax  
   - Example  
   - Note on `WHERE` Clause  

3. **Alter Table Queries (To Change Table Schema)**  
   - Adding a Column  
     - Syntax  
     - Example  
   - Dropping a Column  
     - Syntax  
     - Example  
   - Renaming a Table  
     - Syntax  
     - Example  
   - Renaming a Column  
     - Syntax  
     - Example  
   - Modifying a Column (Datatype/Constraint Change)  
     - Syntax  
     - Example  

4. **Truncate Table (To Delete All Data)**  
   - Syntax  
   - Note on Foreign Keys  
   - Truncate vs. Drop  
   - Example  

---

## SQL with NODE
1. **Ways to Interact with MySQL**
   - Workbench (GUI)
   - Node.js Package
   - CLI (Command Line Interface)
   - SQL File Execution

2. **MySQL Database Interaction with Node.js and Faker**
   1. Setup and Connection
   2. Creating the Users Table
   3. Running SQL Commands
   4. Generating Random User Data
   5. Inserting Data into the Database
      - Example of Direct Insertion
      - Using the `runSQL` Function
      - Inserting Multiple Rows
   6. Using a Custom Function with Placeholders



