# Getting Started

## Starting Up the PostgreSQL Database
Hosted on the cloud, no steps required!

## MySQL Commands for Creating / Mutating the Grocery Store

~~~~sql
CREATE DATABASE GroceryStore;
SHOW DATABASES; -- you should see your new groceryStore database under this list

USE GroceryStore;
~~~~

To add products to the store, run:

~~~~sql
CREATE TABLE Product (
    PId uuid PRIMARY KEY,
    PName VARCHAR(200),
    PStock INT,
    PPrice DECIMAL(10, 2)
);

SHOW TABLES; -- you should see your new table under this list
DESCRIBE tableName; -- you should see the new columns and their details
~~~~

To add items to the store, run:

~~~~sql
INSERT INTO Product(PId, PPrice, PName, PStock)
VALUES (PId PPrice, PName, PStock)

SELECT * FROM Product; -- you should see the new item's values inserted into the product table
~~~~

To update the quantity of an item in the store, run:

~~~~sql
UPDATE Product
SET PStock = PStock
WHERE PId = PId;

SELECT * FROM Product WHERE PId = PId; -- you should see that the item's quantity has been updated to PStock
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

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) with your browser to see the result.

## Generating and Loading in the "Production" Dataset
Download the production data (scraped from Costco's online marketplace) in the form of a .csv file from [Kaggle.com](https://www.kaggle.com/datasets/bhavikjikadara/grocery-store-dataset).  
To load the data into the database, use command:
```bash
yarn seed
```  
This will seed your database with the data in the [GroceryDataset.csv](GroceryDataset.csv)   file.

## Trying Out Features
**To view the number of products in each category:**
-  Navigate to the dashboard by clicking the link provided above.
    You should see a number of cards displaying each category + the corresponding number of products

**To view all products in inventory:**
- Select the "Products" tab in the Side Nav.
    You should be navigated to dashboard/products
    *extra: try out the pagination* Flip through each page using arrow keys/page numbers at bottom of table to view 6 products at a time

**To search for a specific product:**
- Input the name / id value / price of the item you're searching for in the search bar
    - The query results should appear in the table

**To create + add a new product:**
- Select the "Products" tab in the Side Nav.
- Click on "Create Product"
- Fill out the form with the product information
- Select "Create Product" (the button) once finished
- Search for your item using the search bar
    - You should see your new item in the table!


## Currently Supported Features
1. Viewing all products in inventory for each category (localhost:3000)  
    Files:  
    - [fetchProducts() in data.ts](src/app/lib/data.ts)  
2. Viewing the number of products in each category (localhost:3000/dashboard)  
    Files:  
    - [getCardData() in data.ts](src/app/lib/data.ts)  
3.  Storage of all products are added to the "Product" class. The products are replicated and classified via category; updates to the foreign key will cascade upwards   
    Files:  
    - [all seed functions in seed.js](scripts/seed.js)
4. Creating + adding new products to inventory  
    Files:  
     - [createProduct() in actions.ts](src/app/lib/actions.ts)
5. Deleting product from table  
    Files:   
    - [deleteProduct() in actions.ts](src/app/lib/actions.ts)
6. Product Search (filtering!)  
    Files:  
    - [fetchFilteredProducts() in data.ts](src/app/lib/data.ts)
7. Pagination  
    Files:  
    - [fetchProductPages() in data.ts](src/app/lib/data.ts)

## In-Progress Features
8. Updating a product  
    Files:   
    - [updateProduct(), fetchProductById() in actions.ts](src/app/lib/actions.ts)

