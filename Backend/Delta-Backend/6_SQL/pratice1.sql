CREATE DATABASE IF NOT EXISTS collage;

USE collage ;
CREATE TABLE teacher (
id INT UNIQUE PRIMARY KEY,
name VARCHAR(30) NOT NULL ,
subject VARCHAR(30) ,
salary INT DEFAULT 0 );

INSERT INTO teacher 
(id ,name ,subject,salary)
VALUES
(23,"ajay","math", 50000),
(47,"bharat","english", 3000),
(18,"chetan" , "chemistry",45000);

SELECT * FROM teacher
WHERE salary = 50000;

UPDATE  teacher 
SET name = "ajay_Old"
WHERE id =23 ;

SELECT * FROM teacher 
WHERE ssalary > 55000;

ALTER TABLE teacher 
CHANGE COLUMN salary ctc INT DEFAULT 0;

UPDATE teacher 
SET ctc = ctc + ctc * 0.25;

SELECT * FROM teacher ;

SET SQL_SAFE_UPDATES = 0;


ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgoan";

ALTER TABLE teacher
DROP COLUMN ctc;
 -- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
CREATE TABLE student (
roll_no INT UNIQUE ,
name VARCHAR(30),
city VARCHAR(30),
marks INT DEFAULT 0 );

INSERT INTO student
(roll_no , name , city ,marks)
VALUES 
(110,"adam","DELHI",76),
(108,"bob", "Mumbai",65),
(124,"cassey","Pune",94),
(112 , "duke", "Pune", 80);

SELECT * FROM student
WHERE marks > 75;

SELECT DISTINCT city 
FROM student;

SELECT city 
FROM student 
GROUP BY city;


SELECT city , max(marks)
FROM student
GROUP BY city;


SELECT avg(marks)
FROM student;


ALTER TABLE student
ADD COLUMN grade VARCHAR(2) ;

UPDATE student 
SET grade = "O"
WHERE marks >=80;

UPDATE student 
SET grade = "A"
WHERE marks >=70 AND marks < 80;

UPDATE student 
SET grade = "A"
WHERE marks >=60 AND marks < 70;




