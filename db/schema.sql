    -- creates database 
create database burger_db;
    --utilizes datebase
USE burger_db;
    --creates table
create table burger(
    -- primary key is an id integer that will assign each value an id number automatically.
id int primary key auto_increment, 
    -- column for inputting a burgers name
burger_name varchar(40),
    -- column that evaluates everything in this column as true or false
devoured boolean

);