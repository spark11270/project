CREATE DATABASE GroceryStore;
USE GroceryStore;

CREATE TABLE Product (
    PNumber INT PRIMARY KEY,
    PName VARCHAR(100),
    PStock INT,
    PPrice DECIMAL(10, 2)
);

CREATE TABLE Perishable (
    PNumber INT PRIMARY KEY,
    PName VARCHAR(100),
    PStock INT,
    PExpiry DATE,
    PPrice DECIMAL(10, 2)
);

CREATE TABLE Dairy (
    PNumber INT PRIMARY KEY,
    PName VARCHAR(100),
    PStock INT,
    PExpiry DATE,
    PPrice DECIMAL(10, 2)
);

CREATE TABLE Meat (
    PNumber INT PRIMARY KEY,
    PName VARCHAR(100),
    PStock INT,
    PExpiry DATE,
    PPrice DECIMAL(10, 2)
);

INSERT INTO Product (PNumber, PName, PStock, PPrice) VALUES
(1001, 'Rice', 50, 20.00),
(1002, 'Wheat Flour', 30, 15.00),
(1003, 'Sugar', 100, 10.00),
(1004, 'Salt', 200, 5.00);

INSERT INTO Perishable (PNumber, PName, PStock, PExpiry, PPrice) VALUES
(2001, 'Apple', 50, '2024-07-01', 3.00),
(2002, 'Banana', 30, '2024-06-25', 2.00),
(2003, 'Lettuce', 100, '2024-06-23', 1.50),
(2004, 'Tomato', 200, '2024-06-28', 2.50);

INSERT INTO Dairy (PNumber, PName, PStock, PExpiry, PPrice) VALUES
(3001, 'Milk', 50, '2024-06-25', 1.50),
(3002, 'Cheese', 30, '2024-07-15', 3.50),
(3003, 'Yogurt', 100, '2024-06-30', 2.00),
(3004, 'Butter', 200, '2024-07-20', 4.00);

INSERT INTO Meat (PNumber, PName, PStock, PExpiry, PPrice) VALUES
(4001, 'Chicken Breast', 50, '2024-06-25', 5.00),
(4002, 'Ground Beef', 30, '2024-06-23', 6.50),
(4003, 'Pork Chops', 100, '2024-07-01', 4.50),
(4004, 'Salmon Fillet', 200, '2024-06-28', 10.00);

SELECT * FROM Product;
SELECT * FROM Perishable;
SELECT * FROM Dairy;
SELECT * FROM Meat;
