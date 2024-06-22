import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { DairyRaw, MeatRaw, PerishableRaw, ProductRaw } from './definitions';
import { formatCurrency } from './utils';

export async function fetchProducts() {
    noStore();

    try {
        const data = await sql<ProductRaw>`
        SELECT * 
        FROM Product
        ORDER BY Product.PPrice DESC
        LIMIT 5`;

        const products = data.rows.map((product) => ({
        ...product,
        PPrice: formatCurrency(product.PPrice),
        }));
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products.');
    }
}

export async function fetchDairy() {
    noStore();

    try {
        const data = await sql<DairyRaw>`
        SELECT * 
        FROM Dairy
        ORDER BY Dairy.PPrice DESC
        LIMIT 5`;

        const products = data.rows.map((product) => ({
        ...product,
        PPrice: formatCurrency(product.PPrice),
        }));
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch dairy products.');
    }
}

export async function fetchMeat() {
    noStore();

    try {
        const data = await sql<MeatRaw>`
        SELECT * 
        FROM Meat
        ORDER BY Meat.PPrice DESC
        LIMIT 5`;

        const products = data.rows.map((product) => ({
        ...product,
        PPrice: formatCurrency(product.PPrice),
        }));
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch meat products.');
    }
}

export async function fetchPerishable() {
    noStore();

    try {
        const data = await sql<PerishableRaw>`
        SELECT * 
        FROM Perishable
        ORDER BY Perishable.PPrice DESC
        LIMIT 5`;

        const products = data.rows.map((product) => ({
        ...product,
        PPrice: formatCurrency(product.PPrice),
        }));
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch perishable products.');
    }
}