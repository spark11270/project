This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## Starting Up the MySQL Database

To connect to the MySQL server, run:

```bash
mysql -u root
```

To create a sample grocery store database, run:

~~~~sql
CREATE DATABASE GroceryStore;
SHOW DATABASES; -- you should see your new groceryStore database under this list

USE GroceryStore;
~~~~

To add products to the store, run:

~~~~sql
CREATE TABLE Product (
    PNumber INT PRIMARY KEY,
    PName VARCHAR(100),
    PStock INT,
    PPrice DECIMAL(10, 2)
);

SHOW TABLES; -- you should see your new table under this list
DESCRIBE tableName; -- you should see the new columns and their details
~~~~

To add items to the store, run:

~~~~sql
INSERT INTO Product(PNumber, PPrice, PName, PStock)
VALUES (PNumber, PPrice, PName, PStock)

SELECT * FROM Product; -- you should see the new item's values inserted into the product table
~~~~

To update the quantity of an item in the store, run:

~~~~sql
UPDATE Product
SET PStock = PStock
WHERE PNumber = PNumber;

SELECT * FROM Product WHERE PNumber = PNumber; -- you should see that the item's quantity has been updated to PStock
~~~~

## Starting Up the Web Application

To run the development server, use command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Currently Supported Features
- Viewing all products in inventory of the selected category (filtered view)