import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Snack, Pantry, Candy, Beverage, MeatAndSeafood, Product, BakeryAndDessert, Breakfast, Cleaning, Coffee, Deli, Floral, Household, Organic, Category, ProductForm } from './definitions';

export async function fetchProducts() {
    noStore();

    try {
        const products = await sql<Product>`
        SELECT * 
        FROM Product
        ORDER BY Product.PPrice DESC
        LIMIT 5`;
       
        return products.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products.');
    }
}

export async function fetchSnack() {
    noStore();

    try {
        const snack = await sql<Snack>`
        SELECT * 
        FROM Snack
        ORDER BY Snack.PPrice DESC
        LIMIT 5`;

        return snack.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch snack products.');
    }
}

export async function fetchPantry() {
    noStore();

    try {
        const pantry = await sql<Pantry>`
        SELECT * 
        FROM Pantry
        ORDER BY Pantry.PPrice DESC
        LIMIT 5`;

        return pantry.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch pantry products.');
    }
}

export async function fetchCandy() {
    noStore();

    try {
        const candy = await sql<Candy>`
        SELECT * 
        FROM Candy
        ORDER BY Candy.PPrice DESC
        LIMIT 5`;

        return candy.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch candy products.');
    }
}

export async function fetchBeverage() {
    noStore();

    try {
        const beverage = await sql<Beverage>`
        SELECT * 
        FROM Beverage
        ORDER BY Beverage.PPrice DESC
        LIMIT 5`;

        return beverage.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch beverage products.');
    }
}

export async function fetchMeatAndSeafood() {
    noStore();

    try {
        const meatAndSeafood = await sql<MeatAndSeafood>`
        SELECT * 
        FROM MeatAndSeafood
        ORDER BY MeatAndSeafood.PPrice DESC
        LIMIT 5`;

        return meatAndSeafood.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch meat and seafood products.');
    }
}

export async function fetchBakeryAndDessert() {
    noStore();

    try {
        const bakeryAndDessert = await sql<BakeryAndDessert>`
        SELECT * 
        FROM BakeryAndDessert
        ORDER BY BakeryAndDessert.PPrice DESC
        LIMIT 5`;

        return bakeryAndDessert.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch bakery and dessert products.');
    }
}

export async function fetchBreakfast() {
    noStore();

    try {
        const breakfast = await sql<Breakfast>`
        SELECT * 
        FROM Breakfast
        ORDER BY Breakfast.PPrice DESC
        LIMIT 5`;

        return breakfast.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch breakfast products.');
    }
}

export async function fetchCleaning() {
    noStore();

    try {
        const cleaning = await sql<Cleaning>`
        SELECT * 
        FROM Cleaning
        ORDER BY Cleaning.PPrice DESC
        LIMIT 5`;

        return cleaning.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch cleaning products.');
    }
}

export async function fetchCoffee() {
    noStore();

    try {
        const coffee = await sql<Coffee>`
        SELECT * 
        FROM Coffee
        ORDER BY Coffee.PPrice DESC
        LIMIT 5`;

        return coffee.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch coffee products.');
    }
}

export async function fetchDeli() {
    noStore();

    try {
        const deli = await sql<Deli>`
        SELECT * 
        FROM Deli
        ORDER BY Deli.PPrice DESC
        LIMIT 5`;

        return deli.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch deli products.');
    }
}

export async function fetchFloral() {
    noStore();

    try {
        const floral = await sql<Floral>`
        SELECT * 
        FROM Floral
        ORDER BY Floral.PPrice DESC
        LIMIT 5`;

        return floral.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch floral products.');
    }
}

export async function fetchHousehold() {
    noStore();

    try {
        const household = await sql<Household>`
        SELECT * 
        FROM Household
        ORDER BY Household.PPrice DESC
        LIMIT 5`;

        return household.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch household products.');
    }
}

export async function fetchOrganic() {
    noStore();

    try {
        const organic = await sql<Organic>`
        SELECT * 
        FROM Organic
        ORDER BY Organic.PPrice DESC
        LIMIT 5`;

        return organic.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch organic products.');
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const products = await sql<Product>`
      SELECT *
      FROM Product
      WHERE
        Product.PId::text ILIKE ${`%${query}%`} OR
        Product.PName ILIKE ${`%${query}%`} OR
        Product.PStock::text ILIKE ${`%${query}%`} OR
        Product.PPrice::text ILIKE ${`%${query}%`}
      ORDER BY Product.PPrice DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductPages(query: string) {
    noStore();
  
    try {
      const count = await sql`
      SELECT COUNT(*)
      FROM Product
      WHERE
        Product.PId::text ILIKE ${`%${query}%`} OR
        Product.PName ILIKE ${`%${query}%`} OR
        Product.PStock::text ILIKE ${`%${query}%`} OR
        Product.PPrice::text ILIKE ${`%${query}%`}
    `;
  
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of products.');
    }
  }

export async function fetchProductById(id: string) {
    noStore();
  
    try {
      const data = await sql<ProductForm>`
        SELECT *
        FROM Product
        WHERE Product.PId = ${id};
      `;
  
      const product = data.rows.map((product) => ({
        ...product,
        // Convert amount from cents to dollars
        price: product.price / 100,
      }));
  
      console.log(product); // Product is an empty array []
      return product[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch product.');
    }
  }
  

export async function fetchCardData() {
    noStore();
  
    try {
      const snackCountPromise = sql`SELECT COUNT(*) FROM Snack`;
      const pantryCountPromise = sql`SELECT COUNT(*) FROM Pantry`;
      const candyCountPromise = sql`SELECT COUNT(*) FROM Candy`;
      const beverageCountPromise = sql`SELECT COUNT(*) FROM Beverage`;
      const meatAndSeafoodCountPromise = sql`SELECT COUNT(*) FROM MeatAndSeafood`;
      const bakeryAndDessertCountPromise = sql`SELECT COUNT(*) FROM BakeryAndDessert`;
      const breakfastCountPromise = sql`SELECT COUNT(*) FROM Breakfast`;
      const coffeeCountPromise = sql`SELECT COUNT(*) FROM Coffee`;
      const deliCountPromise = sql`SELECT COUNT(*) FROM Deli`;
      const organicCountPromise = sql`SELECT COUNT(*) FROM Organic`;
      const cleaningCountPromise = sql`SELECT COUNT(*) FROM Cleaning`;
      const floralCountPromise = sql`SELECT COUNT(*) FROM Floral`;
      const householdCountPromise = sql`SELECT COUNT(*) FROM Household`;
  
      const data = await Promise.all([
        snackCountPromise,
        pantryCountPromise,
        candyCountPromise,
        beverageCountPromise,
        meatAndSeafoodCountPromise,
        bakeryAndDessertCountPromise,
        breakfastCountPromise,
        coffeeCountPromise,
        deliCountPromise,
        organicCountPromise,
        cleaningCountPromise,
        floralCountPromise,
        householdCountPromise
      ]);
  
      const numberOfSnackProducts = Number(data[0].rows[0].count ?? '0');
      const numberOfPantryProducts = Number(data[1].rows[0].count ?? '0');
      const numberOfCandyProducts = Number(data[2].rows[0].count ?? '0');
      const numberOfBeverageProducts = Number(data[3].rows[0].count ?? '0');
      const numberOfMeatAndSeafoodProducts = Number(data[4].rows[0].count ?? '0');
      const numberOfBakeryAndDessertProducts = Number(data[5].rows[0].count ?? '0');
      const numberOfBreakfastProducts = Number(data[6].rows[0].count ?? '0');
      const numberOfCoffeeProducts = Number(data[7].rows[0].count ?? '0');
      const numberOfDeliProducts = Number(data[8].rows[0].count ?? '0');
      const numberOfOrganicProducts = Number(data[9].rows[0].count ?? '0');
      const numberOfCleaningProducts = Number(data[10].rows[0].count ?? '0');
      const numberOfFloralProducts = Number(data[11].rows[0].count ?? '0');
      const numberOfHouseholdProducts = Number(data[12].rows[0].count ?? '0');
  
      return {
        numberOfSnackProducts,
        numberOfPantryProducts,
        numberOfCandyProducts,
        numberOfBeverageProducts,
        numberOfMeatAndSeafoodProducts,
        numberOfBakeryAndDessertProducts,
        numberOfBreakfastProducts,
        numberOfCoffeeProducts,
        numberOfDeliProducts,
        numberOfOrganicProducts,
        numberOfCleaningProducts,
        numberOfFloralProducts,
        numberOfHouseholdProducts
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }
