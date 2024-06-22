import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Dairy, Meat, Perishable, Product } from './definitions';

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

export async function fetchDairy() {
    noStore();

    try {
        const dairy = await sql<Dairy>`
        SELECT * 
        FROM Dairy
        ORDER BY Dairy.PPrice DESC
        LIMIT 5`;

        return dairy.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch dairy products.');
    }
}

export async function fetchMeat() {
    noStore();

    try {
        const meat = await sql<Meat>`
        SELECT * 
        FROM Meat
        ORDER BY Meat.PPrice DESC
        LIMIT 5`;

        return meat.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch meat products.');
    }
}

export async function fetchPerishables() {
    noStore();

    try {
        const perishables = await sql<Perishable>`
        SELECT * 
        FROM Perishable
        ORDER BY Perishable.PPrice DESC
        LIMIT 5`;

        return perishables.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch perishable products.');
    }
}
